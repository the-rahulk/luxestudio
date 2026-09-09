/**
 * LUXESTUDIO — Precision Custom Cursor & Adaptive Contrast Engine
 * Architecture:
 * - Desktop fine-pointer only (@media hover:hover and pointer:fine)
 * - Layer 1: 5px precision dot (instant response, lerp ~0.82)
 * - Layer 2: 30px outer ring (subtle inertia, lerp ~0.20)
 * - Zero interaction blocking (pointer-events: none !important)
 * - State machine: default, idle (reduced ring opacity), link (scaled), cta (tiny ↗), project (tiny ↗), dark contrast
 * - High-efficiency requestAnimationFrame 120Hz pipeline with translate3d
 */

(function initLuxeCursor() {
    'use strict';

    // Desktop pointer fine only — disable completely on mobile / touch
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        return;
    }

    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Position coordinates
    let mouseX = -100;
    let mouseY = -100;
    let prevMouseX = -100;
    let prevMouseY = -100;

    let dotX = -100;
    let dotY = -100;
    let ringX = -100;
    let ringY = -100;

    // Organic micro-motion stretch
    let currentStretch = 1;
    let currentAngle = 0;

    // Visibility & Theme States
    let isVisible = false;
    let isDarkTheme = false;
    let currentState = 'default';

    // Idle timer (1.2–1.5s stop -> slightly reduced ring opacity)
    let isIdle = false;
    let idleTimer = null;

    function resetIdleTimer() {
        if (isIdle) {
            isIdle = false;
            ring.classList.remove('cursor-idle');
        }
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            isIdle = true;
            ring.classList.add('cursor-idle');
        }, 1350);
    }

    // ── Mouse Tracking (Passive, Non-Blocking) ───────────────────
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!isVisible) {
            dot.style.opacity = '1';
            ring.style.opacity = '1';
            isVisible = true;
            dotX = mouseX;
            dotY = mouseY;
            ringX = mouseX;
            ringY = mouseY;
            prevMouseX = mouseX;
            prevMouseY = mouseY;
        }

        resetIdleTimer();
        requestThemeUpdate();
    }, { passive: true });

    // Hide cursor when leaving document window
    document.addEventListener('mouseleave', () => {
        dot.style.opacity = '0';
        ring.style.opacity = '0';
        isVisible = false;
    });

    document.addEventListener('mouseenter', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        isVisible = true;
        resetIdleTimer();
    });

    // ── Adaptive Contrast Engine (Light vs. Dark Sections) ───────
    let themePending = false;
    function requestThemeUpdate() {
        if (themePending || !isVisible) return;
        themePending = true;
        requestAnimationFrame(() => {
            themePending = false;
            updateTheme(mouseX, mouseY);
        });
    }

    function updateTheme(x, y) {
        if (!isVisible || x < 0 || y < 0) return;
        const el = document.elementFromPoint(x, y);
        if (!el) return;

        // Fixed navbar has an off-white background
        if (el.closest('.nav')) {
            setDarkTheme(false);
            return;
        }

        // Section data-theme check
        const themedEl = el.closest('[data-theme]');
        if (themedEl) {
            setDarkTheme(themedEl.getAttribute('data-theme') === 'dark');
            return;
        }

        // Dark components fallback (Approach, Work, Studio, Footer, Drawer)
        const darkFallback = el.closest('.ethos-story, .story, .work-horizontal-section, .studio, .footer, .mobile-menu-drawer.open, .cap-preview');
        setDarkTheme(Boolean(darkFallback));
    }

    function setDarkTheme(isDark) {
        if (isDark === isDarkTheme) return;
        isDarkTheme = isDark;
        if (isDark) {
            ring.classList.add('cursor-theme-dark');
            dot.classList.add('cursor-theme-dark');
        } else {
            ring.classList.remove('cursor-theme-dark');
            dot.classList.remove('cursor-theme-dark');
        }
    }

    // Connect to scroll events to maintain contrast while scrolling
    window.addEventListener('scroll', requestThemeUpdate, { passive: true });
    if (window.lenisInstance) {
        window.lenisInstance.on('scroll', requestThemeUpdate);
    } else {
        const checkLenisTimer = setInterval(() => {
            if (window.lenisInstance) {
                window.lenisInstance.on('scroll', requestThemeUpdate);
                clearInterval(checkLenisTimer);
            }
        }, 200);
        setTimeout(() => clearInterval(checkLenisTimer), 3000);
    }

    // ── State Machine & Hover Delegation ─────────────────────────
    document.addEventListener('mouseover', (e) => {
        updateHoverState(e.target);
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
        if (!e.relatedTarget) {
            setCursorState('default');
        } else {
            updateHoverState(e.relatedTarget);
        }
    }, { passive: true });

    function updateHoverState(target) {
        if (!target || !(target instanceof Element)) {
            setCursorState('default');
            return;
        }

        // 1. CTA Elements (START YOUR PROJECT, Start Your Project, BOOK A CALL, etc.)
        const ctaEl = target.closest(
            '.hero-cta, #heroCta, .nav-cta-pill, .nav-center-pill, .mobile-start-project-btn, .contact-submit-btn, [data-cursor="cta"]'
        );
        if (ctaEl) {
            setCursorState('cta');
            return;
        }

        // 2. Project / Work Cards & Clickable Services
        const projectEl = target.closest(
            '.work-card-horizontal, .project-card, .service-item, [data-cursor="project"]'
        );
        if (projectEl) {
            setCursorState('project');
            return;
        }

        // 3. Navigation Links, Buttons, Clickables, Forms
        const linkEl = target.closest(
            'a, button, .nav-link, .logo, .menu-toggle, .mobile-nav-item, .mobile-menu-close, .service-cta, .back-to-top-btn, input, textarea, select, [role="button"], [tabindex="0"], .interactive, .magnetic'
        );
        if (linkEl) {
            setCursorState('link');
            return;
        }

        // 4. Default state
        setCursorState('default');
    }

    function setCursorState(state) {
        if (state === currentState) return;
        currentState = state;

        ring.classList.remove('active', 'state-cta', 'state-project');
        dot.classList.remove('active', 'state-cta', 'state-project');

        switch (state) {
            case 'cta':
                ring.classList.add('state-cta');
                dot.classList.add('state-cta');
                break;
            case 'project':
                ring.classList.add('state-project');
                dot.classList.add('state-project');
                break;
            case 'link':
                ring.classList.add('active');
                dot.classList.add('active');
                break;
            default:
                break;
        }
    }

    // ── High-Performance RAF Render Loop (120Hz GPU Pipeline) ─────
    function renderCursor() {
        if (isVisible) {
            // Layer 1: Center dot follows with rapid response (~0.82 lerp)
            dotX += (mouseX - dotX) * 0.82;
            dotY += (mouseY - dotY) * 0.82;

            // Layer 2: Outer ring follows with subtle physical inertia (~0.20 lerp)
            ringX += (mouseX - ringX) * 0.20;
            ringY += (mouseY - ringY) * 0.20;

            if (!prefersReducedMotion) {
                // Subtle organic velocity stretch (1.00 -> 1.045 max)
                const vx = mouseX - prevMouseX;
                const vy = mouseY - prevMouseY;
                const speed = Math.hypot(vx, vy);

                let targetStretch = 1;
                if (speed > 1.5) {
                    targetStretch = 1 + Math.min(speed * 0.0016, 0.045);
                    const targetAngle = Math.atan2(vy, vx);
                    currentAngle += (targetAngle - currentAngle) * 0.25;
                }
                currentStretch += (targetStretch - currentStretch) * 0.18;

                prevMouseX = mouseX;
                prevMouseY = mouseY;

                if (currentStretch > 1.004) {
                    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) rotate(${currentAngle}rad) scale(${currentStretch}, ${2 - currentStretch}) rotate(${-currentAngle}rad)`;
                } else {
                    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
                }
            } else {
                ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            }

            dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
        }

        requestAnimationFrame(renderCursor);
    }

    requestAnimationFrame(renderCursor);
})();
