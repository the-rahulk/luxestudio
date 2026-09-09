/**
 * LUXESTUDIO — Main Application Orchestrator
 * Preloader, Global Studio Clock, Mobile Drawer, Clipboard, and Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
    // 0. Scroll handling: preserve hash navigation, otherwise start from top
    if (!window.location.hash) {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    } else {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 220);
    }

    // 1. Initialize Motion Engine
    if (typeof initMotionEngine === 'function') {
        initMotionEngine();
    }

    // 2. Preloader Animation
    initPreloader();

    // 3. Global Studio Live Time
    initGlobalClock();

    // 4. Mobile Navigation Drawer
    initMobileDrawer();

    // 5. Email Copy Functionality
    initEmailCopy();

    // 6. Smooth Scroll Anchors
    initSmoothAnchors();

    // 7. Page Visibility Listener
    initVisibilityListener();

    // 8. Work Archive Drawer (10 Real Projects)
    initWorkArchiveDrawer();

    // 9. Back To Top Button
    initBackToTop();
});

// Ensure top position on window load only when no hash is present
window.addEventListener('load', () => {
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    } else {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 120);
    }
});
window.addEventListener('beforeunload', () => {
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }
});

/* =========================================================
   CINEMATIC BRAND INTRO LOADER & HERO REVEAL TRANSITION
   ========================================================= */
function initPreloader() {
    const loader = document.getElementById('loader');
    const wordmark = document.getElementById('loaderWordmark');
    const line = document.getElementById('loaderLine');
    const taglines = document.querySelectorAll('.loader-tagline .lt-line');
    const paperVeil = document.getElementById('loaderPaperVeil');
    const stage = document.getElementById('loaderStage');

    if (!loader || !wordmark || !line || !paperVeil) {
        document.documentElement.classList.remove('is-loading');
        document.body.classList.add('loaded');
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
        return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Complete loader, unveil website, and initiate Hero entrance
    const dismissLoader = () => {
        if (loader.classList.contains('dismissed')) return;

        loader.classList.add('dismissed');
        document.documentElement.classList.remove('is-loading');
        document.body.classList.add('loaded');

        // Ensure user starts cleanly at top of Hero only if no hash is requested
        if (!window.location.hash) {
            window.scrollTo(0, 0);
            if (typeof lenisInstance !== 'undefined' && lenisInstance) {
                lenisInstance.scrollTo(0, { immediate: true });
            }
        }
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }

        // Complete DOM cleanup so loader never intercepts pointer/touch events
        setTimeout(() => {
            loader.style.display = 'none';
            loader.setAttribute('aria-hidden', 'true');
        }, 450);
    };

    // Reduced motion accessibility: brief reveal & fast fade
    if (prefersReducedMotion) {
        setTimeout(dismissLoader, 350);
        return;
    }

    // Safety fallback: never trap user under any circumstances
    const safetyTimeout = setTimeout(dismissLoader, 2400);

    // Sequence timing: ~1.4 - 1.6 seconds total
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({
            onComplete: () => {
                clearTimeout(safetyTimeout);
                dismissLoader();
            }
        });

        // 1. Initial full black state
        tl.set(loader, { backgroundColor: '#0B0B0B' })
          .set(wordmark, { opacity: 0, y: 10 })
          .set(line, { width: '0%', left: 0 })
          .set(taglines, { opacity: 0, y: 6 })
          .set(paperVeil, { clipPath: 'inset(50% 50% 50% 50%)', opacity: 0 });

        // 2. Wordmark entrance (520ms)
        tl.to(wordmark, {
            opacity: 1,
            y: 0,
            duration: 0.52,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)'
        }, '+=0.04');

        // 3. Thin orange line appears beneath it (360ms, draws left -> right)
        tl.to(line, {
            width: '100%',
            duration: 0.36,
            ease: 'cubic-bezier(0.25, 1, 0.5, 1)'
        }, '-=0.16');

        // 4. Tagline reveal: CRAFTED TECH. / CURATED DESIGN. (380ms)
        tl.to(taglines, {
            opacity: 1,
            y: 0,
            duration: 0.38,
            stagger: 0.06,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)'
        }, '-=0.14');

        // 5. Brief hold on complete composition (160ms)
        tl.to({}, { duration: 0.16 });

        // 6. Signature Transition: Orange line expands & warm off-white canvas expands outward
        tl.to(line, {
            width: '100vw',
            left: '-50vw',
            opacity: 0.75,
            duration: 0.30,
            ease: 'cubic-bezier(0.77, 0, 0.175, 1)'
        });

        tl.to(paperVeil, {
            opacity: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.38,
            ease: 'cubic-bezier(0.77, 0, 0.175, 1)'
        }, '-=0.26');

        tl.to(stage, {
            opacity: 0,
            y: -10,
            duration: 0.22,
            ease: 'power2.in'
        }, '-=0.32');
    } else {
        // Lightweight Vanilla CSS transition fallback
        wordmark.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        wordmark.style.opacity = '1';
        wordmark.style.transform = 'translateY(0)';

        setTimeout(() => {
            line.style.transition = 'width 0.48s ease';
            line.style.width = '100%';
        }, 500);

        setTimeout(() => {
            taglines.forEach(t => {
                t.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                t.style.opacity = '1';
                t.style.transform = 'translateY(0)';
            });
        }, 800);

        setTimeout(dismissLoader, 1500);
    }
}

/* Live Global Studio Clock */
function initGlobalClock() {
    const clockElements = document.querySelectorAll('.live-studio-time');
    if (clockElements.length === 0) return;

    function updateClocks() {
        const now = new Date();
        // Global UTC studio standard
        const utcHours = String(now.getUTCHours()).padStart(2, '0');
        const utcMinutes = String(now.getUTCMinutes()).padStart(2, '0');
        const utcSeconds = String(now.getUTCSeconds()).padStart(2, '0');
        
        const timeString = `${utcHours}:${utcMinutes}:${utcSeconds} UTC`;

        clockElements.forEach((el) => {
            el.textContent = timeString;
        });
    }

    updateClocks();
    setInterval(updateClocks, 1000);
}

/* Mobile Drawer & Editorial Navigation */
function initMobileDrawer() {
    const toggleBtn = document.getElementById('menuToggleBtn') || document.querySelector('.menu-toggle');
    const drawer = document.getElementById('mobileMenuDrawer');
    const closeBtn = document.getElementById('mobileMenuCloseBtn');
    const mobileLinks = document.querySelectorAll('.mobile-nav-item, .mobile-start-project-btn, .mobile-menu-logo');
    const navItems = document.querySelectorAll('.mobile-nav-item');
    const nodeDot = document.getElementById('menuNodeDot');
    const nodeRing = document.getElementById('menuNodeRing');

    if (!drawer) return;

    // Technical diagram sector coordinates corresponding to nav items
    const sectorCoords = [
        { cx: 120, cy: 75 },   // 01 WORK (Top)
        { cx: 200, cy: 155 },  // 02 SERVICES (Right)
        { cx: 120, cy: 235 },  // 03 STUDIO (Bottom)
        { cx: 40,  cy: 155 }   // 04 CONTACT (Left)
    ];

    function setSectorNode(idx) {
        if (!nodeDot || !nodeRing || !sectorCoords[idx]) return;
        const target = sectorCoords[idx];
        nodeDot.setAttribute('cx', target.cx);
        nodeDot.setAttribute('cy', target.cy);
        nodeRing.setAttribute('cx', target.cx);
        nodeRing.setAttribute('cy', target.cy);
    }

    // Attach hover and touch interactions to shift the technical orange node
    navItems.forEach((item) => {
        const idx = parseInt(item.getAttribute('data-idx') || '0', 10);
        
        item.addEventListener('mouseenter', () => {
            setSectorNode(idx);
            navItems.forEach((n) => n.classList.remove('is-focused'));
            item.classList.add('is-focused');
        });

        item.addEventListener('touchstart', () => {
            setSectorNode(idx);
            navItems.forEach((n) => n.classList.remove('is-focused'));
            item.classList.add('is-focused');
        }, { passive: true });
    });

    function openMenu() {
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        if (toggleBtn) {
            toggleBtn.classList.add('is-active');
            toggleBtn.setAttribute('aria-expanded', 'true');
        }
        document.body.style.overflow = 'hidden';
        if (typeof lenisInstance !== 'undefined' && lenisInstance && typeof lenisInstance.stop === 'function') {
            lenisInstance.stop();
        }
        // Default node to first sector on open
        setSectorNode(0);
    }

    function closeMenu() {
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        if (toggleBtn) {
            toggleBtn.classList.remove('is-active');
            toggleBtn.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
        if (typeof lenisInstance !== 'undefined' && lenisInstance && typeof lenisInstance.start === 'function') {
            lenisInstance.start();
        }
        navItems.forEach((n) => n.classList.remove('is-focused'));
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isOpen = drawer.classList.contains('open');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
        });
    }

    mobileLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || href === '#' || !href.startsWith('#')) return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            e.stopPropagation();

            // 1. Instantly unlock page scrolling and dismiss drawer
            closeMenu();

            // 2. Perform smooth scroll to target section
            const targetOffset = (href === '#hero') ? 0 : -20;

            setTimeout(() => {
                const activeLenis = window.lenisInstance || (typeof lenisInstance !== 'undefined' ? lenisInstance : null);
                if (activeLenis && typeof activeLenis.scrollTo === 'function') {
                    activeLenis.scrollTo(target, {
                        offset: targetOffset,
                        duration: 1.1,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                } else {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 80);
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
            closeMenu();
        }
    });
}

/* Email Copy Button with Toast Feedback */
function initEmailCopy() {
    const copyBtn = document.getElementById('copyEmailBtn');
    const toast = document.getElementById('copyToast');
    const email = 'hello@theluxestudio.in';

    if (!copyBtn || !toast) return;

    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(email);
            toast.textContent = 'Copied to clipboard: ' + email;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        } catch (err) {
            // Fallback for older browsers
            window.location.href = `mailto:${email}`;
        }
    });
}

/* Smooth Anchors Integration with Lenis & Accessibility */
function initSmoothAnchors() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        // Mobile drawer links manage their own drawer closing + navigation lifecycle
        if (anchor.closest('.mobile-menu-drawer')) return;

        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            if (prefersReducedMotion) {
                target.scrollIntoView({ behavior: 'auto' });
                return;
            }

            const targetOffset = targetId === '#hero' ? 0 : -36;

            const activeLenis = window.lenisInstance || (typeof lenisInstance !== 'undefined' ? lenisInstance : null);
            if (activeLenis && typeof activeLenis.scrollTo === 'function') {
                activeLenis.scrollTo(target, {
                    offset: targetOffset,
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            } else {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* Page Visibility Title Switching */
function initVisibilityListener() {
    const originalTitle = document.title;
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.title = 'Back to LuxeStudio — Creative Technology';
        } else {
            document.title = originalTitle;
        }
    });
}

/* =========================================================
   MORE WORKS MODAL DRAWER
   ========================================================= */
function initWorkArchiveDrawer() {
    const drawer = document.getElementById('workArchiveDrawer');
    if (!drawer) return;

    const backdrop = document.getElementById('wadBackdrop');
    const closeBtn = document.getElementById('wadCloseBtn');
    const cardOpenBtn = document.getElementById('openArchiveFromCardBtn');
    const filterPills = document.querySelectorAll('.wad-filter-pill');
    const rows = document.querySelectorAll('.wad-row');
    const wadBody = drawer.querySelector('.wad-body');

    function openDrawer() {
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (wadBody) {
            wadBody.scrollTop = 0;
        }
    }

    function closeDrawer() {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    window.openWorkArchiveDrawer = openDrawer;
    window.closeWorkArchiveDrawer = closeDrawer;

    if (cardOpenBtn) cardOpenBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    // Ensure scrolling events inside the drawer are never swallowed
    if (wadBody) {
        wadBody.addEventListener('wheel', (e) => {
            e.stopPropagation();
        }, { passive: true });
        wadBody.addEventListener('touchmove', (e) => {
            e.stopPropagation();
        }, { passive: true });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
            closeDrawer();
        }
    });

    // Category Filtering Logic
    filterPills.forEach((pill) => {
        pill.addEventListener('click', () => {
            const filter = pill.getAttribute('data-filter') || 'all';

            filterPills.forEach(p => {
                p.classList.remove('is-active');
                p.setAttribute('aria-selected', 'false');
            });
            pill.classList.add('is-active');
            pill.setAttribute('aria-selected', 'true');

            rows.forEach((row) => {
                const cat = row.getAttribute('data-category');
                if (filter === 'all' || cat === filter) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
}

/* =========================================================
   BACK TO TOP GLOBAL HANDLER
   ========================================================= */
function initBackToTop() {
    const bttBtn = document.getElementById('backToTopBtn');
    if (!bttBtn) return;

    bttBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const activeLenis = window.lenisInstance || (typeof lenisInstance !== 'undefined' ? lenisInstance : null);
        if (activeLenis && typeof activeLenis.scrollTo === 'function') {
            activeLenis.scrollTo(0, {
                duration: 1.1,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}
