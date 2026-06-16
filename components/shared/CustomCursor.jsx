'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailsRef = useRef([]);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const trailPositions = useRef(Array(6).fill({ x: 0, y: 0 }));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768 || 'ontouchstart' in window) {
      setIsMobile(true);
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const trails = trailsRef.current;
    let rafId;

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      // Smooth ring following dot with lag
      ringPosRef.current.x = lerp(ringPosRef.current.x, posRef.current.x, 0.12);
      ringPosRef.current.y = lerp(ringPosRef.current.y, posRef.current.y, 0.12);

      if (ring) {
        ring.style.left = `${ringPosRef.current.x}px`;
        ring.style.top = `${ringPosRef.current.y}px`;
      }

      // Update trail positions with staggered lag
      const lags = [0.22, 0.18, 0.14, 0.10, 0.07, 0.05];
      const opacities = [0.4, 0.3, 0.22, 0.15, 0.09, 0.05];
      const colors = ['var(--sky)', 'var(--gold)', 'var(--sky)', 'var(--gold)', 'var(--sky)', 'var(--gold)'];

      let prevX = posRef.current.x;
      let prevY = posRef.current.y;
      trailPositions.current = trailPositions.current.map((tp, i) => {
        const newX = lerp(tp.x, prevX, lags[i]);
        const newY = lerp(tp.y, prevY, lags[i]);
        if (trails[i]) {
          trails[i].style.left = `${newX}px`;
          trails[i].style.top = `${newY}px`;
          trails[i].style.opacity = opacities[i];
          trails[i].style.background = colors[i];
        }
        prevX = newX;
        prevY = newY;
        return { x: newX, y: newY };
      });

      rafId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dot) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
      }
    };

    const onMouseDown = () => {
      if (dot) dot.style.transform = 'translate(-50%, -50%) scale(0.7)';
      if (ring) ring.style.transform = 'translate(-50%, -50%) scale(0.85)';
    };

    const onMouseUp = () => {
      if (dot) dot.style.transform = 'translate(-50%, -50%) scale(1)';
      if (ring) ring.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    // Cursor state management
    const onMouseEnterInteractive = (e) => {
      const target = e.target;
      if (target.closest('.money-badge') || target.dataset.money) {
        document.body.classList.add('cursor-money');
      } else if (target.closest('.case-study-card')) {
        document.body.classList.add('cursor-card');
      } else {
        document.body.classList.add('cursor-hover');
      }
    };

    const onMouseLeaveInteractive = () => {
      document.body.classList.remove('cursor-hover', 'cursor-money', 'cursor-card');
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Delegate events for interactive elements
    document.querySelectorAll('a, button, .money-badge, .case-study-card').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    // MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, .money-badge, .case-study-card').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden="true"
      />

      {/* Trail dots */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailsRef.current[i] = el)}
          className="cursor-trail"
          aria-hidden="true"
          style={{
            width: `${4 - i * 0.4}px`,
            height: `${4 - i * 0.4}px`,
          }}
        />
      ))}
    </>
  );
}
