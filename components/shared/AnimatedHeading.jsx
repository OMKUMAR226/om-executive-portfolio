'use client';

import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

function scrambleText(target, setText, onDone) {
  const chars = target.split('');
  const locked = new Array(chars.length).fill(false);
  let frame = 0;
  const totalFrames = chars.length * 3 + 10;

  const tick = () => {
    frame++;
    const progress = frame / totalFrames;
    const lockUpTo = Math.floor(progress * chars.length * 1.2);

    const display = chars.map((ch, i) => {
      if (ch === ' ') return ' ';
      if (locked[i]) return chars[i];
      if (i < lockUpTo) {
        locked[i] = true;
        return chars[i];
      }
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    });

    setText(display.join(''));

    if (locked.every(Boolean)) {
      setText(target);
      if (onDone) onDone();
      return;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function AnimatedHeading({
  as: Tag = 'h2',
  children,
  className = '',
  style = {},
  scramble = true,
}) {
  const ref = useRef(null);
  const [displayed, setDisplayed] = useState('');
  const [hasRun, setHasRun] = useState(false);

  const textContent = typeof children === 'string' ? children : '';

  useEffect(() => {
    if (!scramble || !textContent) {
      setDisplayed(textContent);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          observer.disconnect();
          scrambleText(textContent, setDisplayed);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [textContent, scramble, hasRun]);

  // For non-string children (e.g. JSX with spans), just render normally
  if (typeof children !== 'string') {
    return (
      <Tag ref={ref} className={className} style={style}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className} style={style}>
      {hasRun || !scramble ? (displayed || textContent) : textContent}
    </Tag>
  );
}
