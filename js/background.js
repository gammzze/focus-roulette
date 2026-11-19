// HAREKETLİ ARKA PLAN: dönen altın kadran + süzülen toz + devre çizgileri
(() => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const GOLD = '212, 175, 55';
    const NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

    let w, h, dpr, particles = [], circuits = [];
    let mouseX = 0, mouseY = 0;

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = window.innerWidth; h = window.innerHeight;
        canvas.width = w * dpr; canvas.height = h * dpr;
        canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const count = Math.round((w * h) / 14000);
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            r: Math.random() * 1.6 + 0.3,
            vy: -(Math.random() * 0.25 + 0.05), vx: (Math.random() - 0.5) * 0.1,
            a: Math.random() * 0.5 + 0.15, tw: Math.random() * Math.PI * 2
        }));

        // Köşelerden içeri uzanan devre yolları
        circuits = Array.from({ length: 14 }, () => {
            const fromLeft = Math.random() < 0.5;
            let x = fromLeft ? 0 : w, y = Math.random() * h;
            const pts = [[x, y]];
            for (let i = 0; i < 4; i++) {
                if (i % 2 === 0) x += (fromLeft ? 1 : -1) * (40 + Math.random() * 140);
                else y += (Math.random() - 0.5) * 160;
                pts.push([x, y]);
            }
            return { pts, offset: Math.random() * 1000, speed: 0.3 + Math.random() * 0.6 };
        });
    }

    function drawDial(t) {
        const cx = w / 2 + mouseX * 12, cy = h / 2 + mouseY * 12;
        const R = Math.min(w, h) * 0.42;
        const rot = reduceMotion ? 0 : t * 0.00004;

        ctx.save();
        ctx.translate(cx, cy);

        // Merkez parıltısı
        const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, R * 1.3);
        glow.addColorStop(0, `rgba(${GOLD}, 0.09)`);
        glow.addColorStop(0.5, `rgba(${GOLD}, 0.03)`);
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.beginPath(); ctx.arc(0, 0, R * 1.3, 0, Math.PI * 2); ctx.fill();

        // Eş merkezli halkalar
        ctx.strokeStyle = `rgba(${GOLD}, 0.18)`;
        [1, 0.93, 0.7, 0.45, 0.2].forEach((k, i) => {
            ctx.lineWidth = i === 0 ? 1.5 : 0.8;
            ctx.beginPath(); ctx.arc(0, 0, R * k, 0, Math.PI * 2); ctx.stroke();
        });

        // Dış kadran: çentikler + Roma rakamları (saat yönünde)
        ctx.save();
        ctx.rotate(rot);
        for (let i = 0; i < 120; i++) {
            const a = (i / 120) * Math.PI * 2;
            const major = i % 10 === 0;
            ctx.strokeStyle = `rgba(${GOLD}, ${major ? 0.45 : 0.18})`;
            ctx.lineWidth = major ? 1.4 : 0.7;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * R * 0.93, Math.sin(a) * R * 0.93);
            ctx.lineTo(Math.cos(a) * R * (major ? 0.86 : 0.9), Math.sin(a) * R * (major ? 0.86 : 0.9));
            ctx.stroke();
        }
        ctx.fillStyle = `rgba(${GOLD}, 0.35)`;
        ctx.font = `${Math.max(12, R * 0.055)}px Cinzel, serif`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        NUMERALS.forEach((n, i) => {
            const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
            ctx.save();
            ctx.translate(Math.cos(a) * R * 0.79, Math.sin(a) * R * 0.79);
            ctx.rotate(a + Math.PI / 2);
            ctx.fillText(n, 0, 0);
            ctx.restore();
        });
        ctx.restore();

        // İç rulet dilimleri (ters yönde)
        ctx.save();
        ctx.rotate(-rot * 2.5);
        const slices = 24;
        for (let i = 0; i < slices; i++) {
            const a0 = (i / slices) * Math.PI * 2, a1 = ((i + 1) / slices) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a0) * R * 0.45, Math.sin(a0) * R * 0.45);
            ctx.arc(0, 0, R * 0.7, a0, a1);
            ctx.arc(0, 0, R * 0.45, a1, a0, true);
            ctx.closePath();
            ctx.fillStyle = i % 2 ? `rgba(${GOLD}, 0.035)` : 'rgba(120, 20, 30, 0.05)';
            ctx.fill();
            ctx.strokeStyle = `rgba(${GOLD}, 0.12)`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
        }
        // Yıldız geometrisi
        ctx.strokeStyle = `rgba(${GOLD}, 0.14)`;
        ctx.beginPath();
        for (let i = 0; i <= 8; i++) {
            const a = (i * 3 / 8) * Math.PI * 2;
            const x = Math.cos(a) * R * 0.45, y = Math.sin(a) * R * 0.45;
            i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.stroke();
        ctx.restore();

        // Gösterge (sabit üst ok)
        ctx.fillStyle = `rgba(${GOLD}, 0.5)`;
        ctx.beginPath();
        ctx.moveTo(0, -R * 1.0); ctx.lineTo(-7, -R * 1.06); ctx.lineTo(7, -R * 1.06);
        ctx.closePath(); ctx.fill();

        ctx.restore();
    }

    function drawCircuits(t) {
        circuits.forEach(c => {
            ctx.strokeStyle = 'rgba(60, 200, 120, 0.07)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            c.pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
            ctx.stroke();
            const [ex, ey] = c.pts[c.pts.length - 1];
            ctx.fillStyle = 'rgba(60, 200, 120, 0.18)';
            ctx.beginPath(); ctx.arc(ex, ey, 2, 0, Math.PI * 2); ctx.fill();

            // Yol boyunca akan sinyal
            if (reduceMotion) return;
            const lens = [];
            let total = 0;
            for (let i = 1; i < c.pts.length; i++) {
                const l = Math.hypot(c.pts[i][0] - c.pts[i - 1][0], c.pts[i][1] - c.pts[i - 1][1]);
                lens.push(l); total += l;
            }
            let d = ((t * 0.06 * c.speed + c.offset) % (total * 3));
            if (d > total) return;
            for (let i = 0; i < lens.length; i++) {
                if (d <= lens[i]) {
                    const k = d / lens[i];
                    const x = c.pts[i][0] + (c.pts[i + 1][0] - c.pts[i][0]) * k;
                    const y = c.pts[i][1] + (c.pts[i + 1][1] - c.pts[i][1]) * k;
                    ctx.fillStyle = 'rgba(90, 255, 150, 0.55)';
                    ctx.shadowColor = 'rgba(90, 255, 150, 0.8)'; ctx.shadowBlur = 8;
                    ctx.beginPath(); ctx.arc(x, y, 1.6, 0, Math.PI * 2); ctx.fill();
                    ctx.shadowBlur = 0;
                    break;
                }
                d -= lens[i];
            }
        });
    }

    function drawParticles() {
        particles.forEach(p => {
            if (!reduceMotion) {
                p.x += p.vx; p.y += p.vy; p.tw += 0.02;
                if (p.y < -5) { p.y = h + 5; p.x = Math.random() * w; }
            }
            ctx.fillStyle = `rgba(${GOLD}, ${p.a * (0.6 + 0.4 * Math.sin(p.tw))})`;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
        });
    }

    function frame(t) {
        ctx.clearRect(0, 0, w, h);
        drawCircuits(t);
        drawDial(t);
        drawParticles();
        if (!reduceMotion && !document.hidden) requestAnimationFrame(frame);
    }

    window.addEventListener('resize', () => { resize(); if (reduceMotion) frame(0); });
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / w - 0.5; mouseY = e.clientY / h - 0.5;
    });
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && !reduceMotion) requestAnimationFrame(frame);
    });

    resize();
    document.fonts?.ready.then(() => reduceMotion && frame(0));
    requestAnimationFrame(frame);
})();
