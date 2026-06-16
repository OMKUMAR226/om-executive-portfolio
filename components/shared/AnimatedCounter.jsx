'use client';

import { useEffect, useRef, useState } from 'react';

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 2000,
  className = '',
  style = {},
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  // Handle non-numeric values like "30-40" 
  const isSpecial = typeof value === 'string' && isNaN(Number(value));

  useEffect(() => {
    if (isSpecial) { setCount(value); return; }

    const target = Number(value);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.disconnect();
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOut(progress);
            setCount(Math.floor(easedProgress * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, isSpecial]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{isSpecial ? value : count.toLocaleString()}{suffix}
    </span>
  );
}
