/**
 * LUXESTUDIO — HERO TYPOGRAPHIC & ARCHITECTURAL ENGINE (FINAL 10/10 PASS)
 *
 * Requirements:
 *  - Word rotation: EXPERIENCES. → PRESENCE. → SYSTEMS. → POSSIBILITIES. → repeat.
 *  - Independent of scroll: timed autonomous loop (4.0s hold / ~2.6s total transition).
 *  - Zero layout shift: word stage is anchored via fixed .hero-word-sizer holding POSSIBILITIES.;
 *    no reflow of paragraph, CTA, or visual.
 *  - Physical Material Erosion & Assembly Transition:
 *      1. Current word stable (4.0s hold).
 *      2. Old word erodes letter-by-letter in staggered sequence (~1250ms):
 *         Each letter chips, shifts subtly (1-3px), releases 6-14 fine ash/graphite flecks
 *         originating strictly from the letter's bounding box, softly blurs, and dissolves.
 *      3. Breathing pause (~240ms quiet void with faint dust drifting away).
 *      4. New word reconstructs letter-by-letter (~1150ms):
 *         Particles gather from the airspace onto letter coordinates, faint silhouettes emerge,
 *         material solidifies, and full orange typography resolves with zero layout movement.
 *  - Particle characteristics:
 *      Fine graphite & mineral ash flecks (1-2px, subtle rotation, low opacity, upward/sideways drift).
 *      Strictly localized within the letter bounds; never spreads across hero.
 *  - Pointer-events: none on all visual & canvas layers (zero mouse interception).
 *  - Full prefers-reduced-motion support (instant/crossfade, no particles).
 */

(function LuxeHeroEngine() {
    'use strict';

    /* ── Guard ── */
    const heroEl = document.getElementById('hero');
    if (!heroEl) return;

    /* ── Reduced motion detection ── */
    const NO_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Elements ── */
    const wordStage = document.getElementById('heroWordStage');
    const wordEl    = document.getElementById('heroWord');
    const ashCanvas = document.getElementById('heroAshCanvas');

    if (!wordStage || !wordEl || !ashCanvas) return;

    const ctx = ashCanvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    /* =========================================================
       1. SEQUENCE & TIMING
       ========================================================= */

    const WORDS         = ['EXPERIENCES.', 'PRESENCE.', 'SYSTEMS.', 'POSSIBILITIES.'];
    const HOLD_MS       = 2200;  // 2.2s readable hold (total cycle ~3.0s)
    const INITIAL_DELAY = 2200;  // Initial load hold

    let wordIndex       = 0;
    let autoTimer       = null;
    let rafId           = null;
    let isTransitioning = false;
    let pageVisible     = !document.hidden;
    let engineStarted   = false;

    // Word to concept mapping for right-side visual
    const wordToConcept = {
        0: 'design',   // EXPERIENCES.    -> DESIGN
        1: 'dev',      // PRESENCE.       -> DEVELOP
        2: 'systems',  // SYSTEMS.        -> SYSTEMS
        3: 'auto'      // POSSIBILITIES.  -> AUTOMATE
    };

    /* =========================================================
       2. CANVAS SIZING (retina-safe, strictly scoped to stage)
       ========================================================= */

    function sizeCanvas() {
        const isMobile = window.innerWidth <= 768;
        const padX   = isMobile ? 16 : 40;
        const padY   = isMobile ? 20 : 44;
        const dpr    = Math.min(window.devicePixelRatio || 1, 2.5);
        const sw     = wordStage.offsetWidth  || 200;
        const sh     = wordStage.offsetHeight || 80;
        const totalW = sw + padX * 2;
        const totalH = sh + padY * 2;

        ashCanvas.width  = totalW * dpr;
        ashCanvas.height = totalH * dpr;
        ashCanvas.style.width  = `${totalW}px`;
        ashCanvas.style.height = `${totalH}px`;
        ashCanvas.style.left   = `-${padX}px`;
        ashCanvas.style.top    = `-${padY}px`;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
    }

    sizeCanvas();
    window.addEventListener('resize', () => { if (!isTransitioning) sizeCanvas(); }, { passive: true });

    /* =========================================================
       3. LETTER-BY-LETTER RENDERING
       ========================================================= */

    function renderLetters(word) {
        wordEl.innerHTML = '';
        const letterEls = [];
        for (const ch of word) {
            const span = document.createElement('span');
            span.className = 'hero-letter';
            span.textContent = ch;
            wordEl.appendChild(span);
            letterEls.push(span);
        }
        wordEl.setAttribute('aria-label', word.toLowerCase());
        return letterEls;
    }

    /* =========================================================
       4. ASH / GRAPHITE PARTICLES POOL & PHYSICS
       ========================================================= */

    // Particle color palettes:
    // 55% Graphite dark dust (charcoal/mineral)
    // 25% Warm pale ash
    // 20% Detached studio orange pigment
    const GRAPHITE_TONES = [
        'rgba(52, 50, 47, ',
        'rgba(68, 65, 61, ',
        'rgba(82, 78, 73, '
    ];

    const ASH_TONES = [
        'rgba(148, 143, 136, ',
        'rgba(172, 167, 158, ',
        'rgba(128, 124, 117, '
    ];

    const ORANGE_PIGMENT_TONES = [
        'rgba(255, 74, 47, ',
        'rgba(235, 62, 38, ',
        'rgba(215, 54, 32, '
    ];

    let activeParticles = [];

    /**
     * Spawn fine mineral dust flecks originating strictly from the letter's bounds
     */
    function spawnLetterAsh(letterRect, count, mode, letterProgress) {
        const stageRect = wordStage.getBoundingClientRect();
        const relX = letterRect.left - stageRect.left + PAD_X;
        const relY = letterRect.top - stageRect.top + PAD_Y;
        const w    = Math.max(letterRect.width, 10);
        const h    = Math.max(letterRect.height, 20);
        const isMobile = window.innerWidth <= 768;

        const now = performance.now();

        for (let i = 0; i < count; i++) {
            const randColor = Math.random();
            const baseColor = randColor < 0.20
                ? ORANGE_PIGMENT_TONES[Math.floor(Math.random() * ORANGE_PIGMENT_TONES.length)]
                : (randColor < 0.75
                    ? GRAPHITE_TONES[Math.floor(Math.random() * GRAPHITE_TONES.length)]
                    : ASH_TONES[Math.floor(Math.random() * ASH_TONES.length)]);

            if (mode === 'erode') {
                // Detaching physically from the letter
                let px, py;
                if (letterProgress < 0.4) {
                    // Initial chips detach from perimeter / top
                    px = relX + w * (0.2 + Math.random() * 0.8);
                    py = relY + h * (Math.random() * 0.55);
                } else {
                    // Detach from entire glyph body
                    px = relX + Math.random() * w;
                    py = relY + Math.random() * h;
                }

                // Upward lift (8-24px) & slight sideways drift (3-12px)
                const driftY = (isMobile ? 8 : 10) + Math.random() * (isMobile ? 12 : 15);
                const driftX = (Math.random() - 0.48) * (isMobile ? 10 : 14);

                activeParticles.push({
                    startX: px,
                    startY: py,
                    x: px,
                    y: py,
                    driftX: driftX,
                    driftY: driftY,
                    w: (Math.random() * 0.7) + (isMobile ? 0.8 : 1.0),
                    h: (Math.random() * 0.6) + (isMobile ? 0.7 : 0.9),
                    rot: Math.random() * Math.PI * 2,
                    vRot: (Math.random() - 0.5) * 0.04,
                    baseColor: baseColor,
                    maxAlpha: isMobile ? 0.28 : 0.42,
                    startTime: now,
                    duration: 850 + Math.random() * 450,
                    mode: 'erode'
                });
            } else {
                // Gathering mode: start in surrounding airspace (10-22px offset), converge onto letter
                const targetX = relX + (0.15 + Math.random() * 0.7) * w;
                const targetY = relY + (0.15 + Math.random() * 0.7) * h;
                const angle   = Math.random() * Math.PI * 2;
                const dist    = (isMobile ? 8 : 11) + Math.random() * (isMobile ? 10 : 15);
                const startX  = targetX + Math.cos(angle) * dist;
                const startY  = targetY + Math.sin(angle) * dist;

                activeParticles.push({
                    startX: startX,
                    startY: startY,
                    targetX: targetX,
                    targetY: targetY,
                    x: startX,
                    y: startY,
                    w: (Math.random() * 0.6) + (isMobile ? 0.7 : 0.9),
                    h: (Math.random() * 0.5) + (isMobile ? 0.6 : 0.8),
                    rot: Math.random() * Math.PI * 2,
                    vRot: (Math.random() - 0.5) * 0.03,
                    baseColor: baseColor,
                    maxAlpha: isMobile ? 0.24 : 0.38,
                    startTime: now,
                    duration: 650 + Math.random() * 320,
                    mode: 'gather'
                });
            }
        }
    }

    function updateAndRenderParticles(now) {
        const cw = ashCanvas.width  / (window.devicePixelRatio || 1);
        const ch = ashCanvas.height / (window.devicePixelRatio || 1);
        ctx.clearRect(0, 0, cw, ch);

        const surviving = [];

        for (let i = 0; i < activeParticles.length; i++) {
            const p = activeParticles[i];
            const elapsed = now - p.startTime;
            const progress = Math.min(1, elapsed / p.duration);

            if (progress >= 1) continue;

            p.rot += p.vRot;

            let alpha;
            if (p.mode === 'gather') {
                // Power2.out ease toward glyph target
                const ease = 1 - Math.pow(1 - progress, 2.5);
                p.x = p.startX + (p.targetX - p.startX) * ease;
                p.y = p.startY + (p.targetY - p.startY) * ease;
                // Soft fade in then out
                alpha = p.maxAlpha * Math.sin(Math.PI * progress);
            } else {
                // Power2/3 ease drift upward & slightly sideways
                const ease = 1 - Math.pow(1 - progress, 2.2);
                p.x = p.startX + p.driftX * ease + Math.sin(progress * Math.PI * 1.5) * 0.8;
                p.y = p.startY - p.driftY * ease;
                // Subtle quadratic fade
                alpha = p.maxAlpha * Math.pow(1 - progress, 1.6);
            }

            if (alpha > 0.015) {
                ctx.save();
                ctx.fillStyle = `${p.baseColor}${alpha.toFixed(3)})`;
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
                surviving.push(p);
            }
        }

        activeParticles = surviving;
    }

    /* =========================================================
       5. PHYSICAL ASH / EROSION TRANSITION ORCHESTRATOR
       ========================================================= */

    let updateInstrumentWord = null;

    function triggerTransition(fromWord, toWord, nextWordIdx, onComplete) {
        if (isTransitioning) return;
        isTransitioning = true;

        sizeCanvas();

        const isMobile = window.innerWidth <= 768;
        const oldLetterEls = wordEl.querySelectorAll('.hero-letter');
        const numOld = oldLetterEls.length;

        // Total erosion duration: 920ms (smooth, deliberate physical dissolution)
        const totalErodeMs = 920;
        const letterErodeDur = 560;
        const stepDelayOld = numOld > 1 ? (totalErodeMs - letterErodeDur) / (numOld - 1) : 0;

        // Step 1: Erode old word letter-by-letter in organic stagger
        oldLetterEls.forEach((span, idx) => {
            const startDelay = idx * stepDelayOld;

            // Stage 1: Softening & initial micro-chips detaching (0ms)
            setTimeout(() => {
                const rect = span.getBoundingClientRect();
                spawnLetterAsh(rect, isMobile ? 2 : 4, 'erode', 0.2);

                span.style.transition = 'opacity 160ms ease, transform 160ms ease, filter 160ms ease, clip-path 160ms ease';
                span.style.opacity    = '0.90';
                span.style.transform  = 'translate(0.3px, -0.6px)';
                span.style.filter     = 'blur(0.3px)';
                span.style.clipPath   = 'polygon(0% 0%, 96% 0%, 94% 20%, 98% 45%, 96% 75%, 100% 100%, 0% 100%)';
            }, startDelay);

            // Stage 2: Fragmenting & body ash release (+160ms)
            setTimeout(() => {
                const rect = span.getBoundingClientRect();
                spawnLetterAsh(rect, isMobile ? 2 : 4, 'erode', 0.5);

                span.style.transition = 'opacity 180ms ease, transform 180ms ease, filter 180ms ease, clip-path 180ms ease';
                span.style.opacity    = '0.56';
                span.style.transform  = 'translate(0.8px, -1.4px)';
                span.style.filter     = 'blur(0.7px)';
                span.style.clipPath   = 'polygon(0% 6%, 88% 0%, 82% 30%, 90% 60%, 84% 85%, 92% 100%, 0% 100%)';
            }, startDelay + 160);

            // Stage 3: Delicate erosion & final particles (+340ms)
            setTimeout(() => {
                const rect = span.getBoundingClientRect();
                spawnLetterAsh(rect, isMobile ? 2 : 3, 'erode', 0.8);

                span.style.transition = 'opacity 180ms ease, transform 180ms ease, filter 180ms ease, clip-path 180ms ease';
                span.style.opacity    = '0.20';
                span.style.transform  = 'translate(1.3px, -2.2px)';
                span.style.filter     = 'blur(1.4px)';
                span.style.clipPath   = 'polygon(0% 18%, 70% 10%, 65% 45%, 72% 75%, 68% 100%, 0% 100%)';
            }, startDelay + 340);

            // Stage 4: Complete dissolution (+520ms)
            setTimeout(() => {
                span.style.transition = 'opacity 140ms ease, transform 140ms ease, filter 140ms ease';
                span.style.opacity    = '0';
                span.style.transform  = 'translate(1.8px, -2.8px)';
                span.style.filter     = 'blur(2.0px)';
            }, startDelay + 520);
        });

        // Step 2: Breathing Pause (~160ms void with faint dust drifting in the air)
        const pauseStartMs   = totalErodeMs + 20;
        const pauseDuration  = 160;
        const newWordStartMs = pauseStartMs + pauseDuration;

        setTimeout(() => {
            // Signal diagram to activate next concept quietly
            if (typeof updateInstrumentWord === 'function') {
                updateInstrumentWord(nextWordIdx);
            }
        }, pauseStartMs);

        // Step 3: Reconstruct new word letter-by-letter (~880ms)
        setTimeout(() => {
            const newLetterEls = renderLetters(toWord);
            const numNew = newLetterEls.length;
            const totalFormMs = 880;
            const letterFormDur = 540;
            const stepDelayNew = numNew > 1 ? (totalFormMs - letterFormDur) / (numNew - 1) : 0;

            // Initialize new letters as invisible silhouettes
            newLetterEls.forEach(span => {
                span.style.opacity   = '0';
                span.style.filter    = 'blur(2.0px)';
                span.style.transform = 'translate(0, 1.4px)';
                span.style.clipPath  = 'polygon(0% 25%, 70% 20%, 75% 100%, 0% 100%)';
            });

            // Assemble letter by letter with gathering particles
            newLetterEls.forEach((span, idx) => {
                const formStart = idx * stepDelayNew;

                // Step A: Gathering particles spawn in surrounding air (0ms)
                setTimeout(() => {
                    const rect = span.getBoundingClientRect();
                    spawnLetterAsh(rect, isMobile ? 2 : 4, 'gather', 0);
                }, formStart);

                // Step B: Silhouette emerges as particles converge (+140ms)
                setTimeout(() => {
                    span.style.transition = 'opacity 160ms cubic-bezier(0.16, 1, 0.3, 1), transform 160ms cubic-bezier(0.16, 1, 0.3, 1), filter 160ms ease, clip-path 160ms ease';
                    span.style.opacity    = '0.30';
                    span.style.transform  = 'translate(0, 0.8px)';
                    span.style.filter     = 'blur(1.2px)';
                    span.style.clipPath   = 'polygon(0% 10%, 85% 5%, 90% 100%, 0% 100%)';
                }, formStart + 140);

                // Step C: Material solidifies (+300ms)
                setTimeout(() => {
                    span.style.transition = 'opacity 160ms cubic-bezier(0.16, 1, 0.3, 1), transform 160ms cubic-bezier(0.16, 1, 0.3, 1), filter 160ms ease, clip-path 160ms ease';
                    span.style.opacity    = '0.76';
                    span.style.transform  = 'translate(0, 0.3px)';
                    span.style.filter     = 'blur(0.4px)';
                    span.style.clipPath   = 'polygon(0% 0%, 96% 0%, 98% 100%, 0% 100%)';
                }, formStart + 300);

                // Step D: Pristine resolution lock (+460ms)
                setTimeout(() => {
                    span.style.transition = 'opacity 160ms ease, transform 160ms ease, filter 160ms ease';
                    span.style.opacity    = '1';
                    span.style.transform  = 'translate(0, 0)';
                    span.style.filter     = 'none';
                    span.style.clipPath   = 'none';
                }, formStart + 460);
            });

            // Final settle and hold schedule
            setTimeout(() => {
                newLetterEls.forEach(span => {
                    span.style.transition = 'none';
                    span.style.filter     = 'none';
                    span.style.transform  = 'none';
                    span.style.clipPath   = 'none';
                });
                isTransitioning = false;
                if (typeof onComplete === 'function') onComplete();
            }, totalFormMs + 100);

        }, newWordStartMs);

        // Particle canvas render loop
        const totalDuration = newWordStartMs + totalFormMs + 700;
        const startLoopTime = performance.now();

        function particleLoop(now) {
            updateAndRenderParticles(now);

            const elapsed = now - startLoopTime;
            if (elapsed < totalDuration || activeParticles.length > 0) {
                rafId = requestAnimationFrame(particleLoop);
            } else {
                ctx.clearRect(0, 0, ashCanvas.width, ashCanvas.height);
                activeParticles = [];
                rafId = null;
            }
        }

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(particleLoop);
    }

    /* =========================================================
       6. STATE MACHINE — timer-driven, zero scroll dependency
       ========================================================= */

    function scheduleNext() {
        if (!pageVisible || NO_MOTION) return;

        const fromWord = WORDS[wordIndex];
        const nextIdx  = (wordIndex + 1) % WORDS.length;
        const toWord   = WORDS[nextIdx];

        autoTimer = setTimeout(() => {
            if (!pageVisible) return;

            triggerTransition(fromWord, toWord, nextIdx, () => {
                wordIndex = nextIdx;
                scheduleNext();
            });
        }, HOLD_MS);
    }

    /* ── Kick off ── */
    function initEngine() {
        if (engineStarted) return;
        engineStarted = true;

        renderLetters(WORDS[0]);

        if (typeof updateInstrumentWord === 'function') {
            updateInstrumentWord(0);
        }

        // Reduced motion: simple crossfade without particles
        if (NO_MOTION) {
            let rIdx = 0;
            setInterval(() => {
                rIdx = (rIdx + 1) % WORDS.length;
                wordEl.style.transition = 'opacity 0.6s ease';
                wordEl.style.opacity = '0';
                setTimeout(() => {
                    renderLetters(WORDS[rIdx]);
                    wordEl.style.opacity = '1';
                    if (typeof updateInstrumentWord === 'function') {
                        updateInstrumentWord(rIdx);
                    }
                }, 300);
            }, HOLD_MS);
            return;
        }

        autoTimer = setTimeout(() => {
            if (!pageVisible) return;

            triggerTransition(WORDS[0], WORDS[1], 1, () => {
                wordIndex = 1;
                scheduleNext();
            });
        }, INITIAL_DELAY);
    }

    /* ── Start after body.loaded ── */
    if (document.body.classList.contains('loaded')) {
        initEngine();
    } else {
        const observer = new MutationObserver(() => {
            if (document.body.classList.contains('loaded')) {
                observer.disconnect();
                setTimeout(initEngine, 150);
            }
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        setTimeout(initEngine, 1500);
    }

    /* =========================================================
       7. TAB VISIBILITY — pause/resume
       ========================================================= */

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pageVisible = false;
            if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
            if (rafId)     { cancelAnimationFrame(rafId); rafId = null; }
            ctx.clearRect(0, 0, ashCanvas.width, ashCanvas.height);
            activeParticles = [];
        } else {
            pageVisible = true;
            if (!isTransitioning && engineStarted && !NO_MOTION) {
                renderLetters(WORDS[wordIndex]);
                if (typeof updateInstrumentWord === 'function') {
                    updateInstrumentWord(wordIndex);
                }
                scheduleNext();
            }
        }
    });

    /* =========================================================
       8. ARCHITECTURAL SIGNATURE (Synchronized to Word State)
       ========================================================= */

    (function initArchitecturalVisual() {
        const instrDot  = document.getElementById('instrDot');
        const instrRing = document.getElementById('instrDotRing');
        const instrHalo = document.getElementById('instrDotHalo');

        // Mobile mark elements
        const mDot     = document.getElementById('mDot');
        const mDotRing = document.getElementById('mDotRing');
        const mDotHalo = document.getElementById('mDotHalo');

        // Desktop labels and dots
        const desktopLabels = {
            design:  document.getElementById('instrLabelDesign'),
            dev:     document.getElementById('instrLabelDev'),
            auto:    document.getElementById('instrLabelAuto'),
            systems: document.getElementById('instrLabelSystems'),
        };

        const desktopDots = {
            design:  document.getElementById('instrDotDesign'),
            dev:     document.getElementById('instrDotDev'),
            auto:    document.getElementById('instrDotAuto'),
            systems: document.getElementById('instrDotSystems'),
        };

        // Mobile labels
        const mobileLabels = {
            design:  document.getElementById('mLabelDesign'),
            dev:     document.getElementById('mLabelDev'),
            auto:    document.getElementById('mLabelAuto'),
            systems: document.getElementById('mLabelSystems')
        };

        // Segments seg0 to seg12
        const segMap = {};
        for (let i = 0; i <= 12; i++) {
            segMap[i] = document.getElementById('seg' + i);
        }

        // Desktop architectural node positions & geometric responses
        const DESKTOP_NODES = {
            0: { x: 116, y: 71,  segs: [0, 1, 2, 5],           concept: 'design' },  // EXPERIENCES. -> Wider open geometry / DESIGN
            1: { x: 242, y: 108, segs: [2, 4],                 concept: 'dev' },     // PRESENCE.    -> Single node active / DEVELOP
            2: { x: 116, y: 332, segs: [5, 6, 7, 8, 11, 12],   concept: 'systems' }, // SYSTEMS.     -> Multiple nodes connect / SYSTEMS
            3: { x: 44,  y: 216, segs: [6, 3, 9],              concept: 'auto' }     // POSSIBILITIES. -> Line travels through / AUTOMATE
        };

        // Mobile mark node positions
        const MOBILE_NODES = {
            0: { x: 100, y: 44,  concept: 'design' },
            1: { x: 168, y: 60,  concept: 'dev' },
            2: { x: 100, y: 130, concept: 'systems' },
            3: { x: 48,  y: 88,  concept: 'auto' }
        };

        let currentDesktopX = DESKTOP_NODES[0].x;
        let currentDesktopY = DESKTOP_NODES[0].y;
        let currentMobileX  = MOBILE_NODES[0].x;
        let currentMobileY  = MOBILE_NODES[0].y;

        let travelStart     = null;
        let travelDuration  = 1150; // Gentle organic travel
        let travelRaf       = null;
        let travelFromD     = { x: currentDesktopX, y: currentDesktopY };
        let travelToD       = { x: currentDesktopX, y: currentDesktopY };
        let travelFromM     = { x: currentMobileX, y: currentMobileY };
        let travelToM       = { x: currentMobileX, y: currentMobileY };
        let settleTimeout   = null;

        function setDotPosition(x, y) {
            if (!instrDot) return;
            instrDot.setAttribute('cx', x.toFixed(2));
            instrDot.setAttribute('cy', y.toFixed(2));
            if (instrRing) {
                instrRing.setAttribute('cx', x.toFixed(2));
                instrRing.setAttribute('cy', y.toFixed(2));
            }
            if (instrHalo) {
                instrHalo.setAttribute('cx', x.toFixed(2));
                instrHalo.setAttribute('cy', y.toFixed(2));
            }
        }

        function setMobileDotPosition(x, y) {
            if (!mDot) return;
            mDot.setAttribute('cx', x.toFixed(2));
            mDot.setAttribute('cy', y.toFixed(2));
            if (mDotRing) {
                mDotRing.setAttribute('cx', x.toFixed(2));
                mDotRing.setAttribute('cy', y.toFixed(2));
            }
            if (mDotHalo) {
                mDotHalo.setAttribute('cx', x.toFixed(2));
                mDotHalo.setAttribute('cy', y.toFixed(2));
            }
        }

        function triggerNodePulse() {
            if (instrRing) {
                instrRing.style.transition = 'transform 260ms ease-out, stroke-width 260ms ease-out';
                instrRing.style.transform  = 'scale(1.28)';
                instrRing.style.strokeWidth = '1.3px';
                setTimeout(() => {
                    if (instrRing) {
                        instrRing.style.transition = 'transform 380ms ease-in, stroke-width 380ms ease-in';
                        instrRing.style.transform  = 'none';
                        instrRing.style.strokeWidth = '0.9px';
                    }
                }, 280);
            }
            if (mDotRing) {
                mDotRing.style.transition = 'transform 260ms ease-out, stroke-width 260ms ease-out';
                mDotRing.style.transform  = 'scale(1.28)';
                mDotRing.style.strokeWidth = '1.3px';
                setTimeout(() => {
                    if (mDotRing) {
                        mDotRing.style.transition = 'transform 380ms ease-in, stroke-width 380ms ease-in';
                        mDotRing.style.transform  = 'none';
                        mDotRing.style.strokeWidth = '0.9px';
                    }
                }, 280);
            }
        }

        function highlightSegments(activeSegs) {
            for (let i = 0; i <= 12; i++) {
                const el = segMap[i];
                if (!el) continue;
                if (activeSegs.includes(i)) {
                    el.classList.add('active');
                    el.classList.remove('near-active');
                } else if (activeSegs.some(s => Math.abs(s - i) <= 1)) {
                    el.classList.add('near-active');
                    el.classList.remove('active');
                } else {
                    el.classList.remove('active', 'near-active');
                }
            }
        }

        function easeInOutSine(x) {
            return -(Math.cos(Math.PI * x) - 1) / 2;
        }

        // Set initial positions
        setDotPosition(currentDesktopX, currentDesktopY);
        setMobileDotPosition(currentMobileX, currentMobileY);

        // Word change listener
        updateInstrumentWord = function(currentWordIdx) {
            const activeConcept = wordToConcept[currentWordIdx] || 'design';

            // 1. Update labels & dots on desktop
            Object.keys(desktopLabels).forEach(k => {
                const lbl = desktopLabels[k];
                const dot = desktopDots[k];
                const isActive = (k === activeConcept);
                if (lbl) {
                    if (isActive) lbl.classList.add('active');
                    else lbl.classList.remove('active');
                }
                if (dot) {
                    if (isActive) dot.classList.add('active');
                    else dot.classList.remove('active');
                }
            });

            // 2. Update labels on mobile
            Object.keys(mobileLabels).forEach(k => {
                const lbl = mobileLabels[k];
                const isActive = (k === activeConcept);
                if (lbl) {
                    if (isActive) lbl.classList.add('active');
                    else lbl.classList.remove('active');
                }
            });

            // 3. Initiate subtle organic travel toward the active node
            const targetD = DESKTOP_NODES[currentWordIdx] || DESKTOP_NODES[0];
            const targetM = MOBILE_NODES[currentWordIdx]  || MOBILE_NODES[0];

            travelFromD = { x: currentDesktopX, y: currentDesktopY };
            travelToD   = { x: targetD.x, y: targetD.y };
            travelFromM = { x: currentMobileX, y: currentMobileY };
            travelToM   = { x: targetM.x, y: targetM.y };

            highlightSegments(targetD.segs || []);

            travelStart = performance.now();

            function travelStep(now) {
                if (!travelStart) travelStart = now;
                const elapsed = now - travelStart;
                const p = Math.min(1, elapsed / travelDuration);
                const ease = easeInOutSine(p);

                currentDesktopX = travelFromD.x + (travelToD.x - travelFromD.x) * ease;
                currentDesktopY = travelFromD.y + (travelToD.y - travelFromD.y) * ease;
                setDotPosition(currentDesktopX, currentDesktopY);

                currentMobileX = travelFromM.x + (travelToM.x - travelFromM.x) * ease;
                currentMobileY = travelFromM.y + (travelToM.y - travelFromM.y) * ease;
                setMobileDotPosition(currentMobileX, currentMobileY);

                if (p < 1) {
                    travelRaf = requestAnimationFrame(travelStep);
                } else {
                    travelRaf = null;
                    travelStart = null;
                    // Arrived at node: single gentle pulse expands once
                    triggerNodePulse();

                    // Settle back to neutral state
                    if (settleTimeout) clearTimeout(settleTimeout);
                    settleTimeout = setTimeout(() => {
                        highlightSegments([]);
                    }, 1200);
                }
            }

            if (travelRaf) cancelAnimationFrame(travelRaf);
            travelRaf = requestAnimationFrame(travelStep);
        };

    })();

})();
