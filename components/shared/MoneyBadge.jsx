'use client';

import { useEffect, useRef } from 'react';
import CountUp from 'react-countup';

export default function MoneyBadge({
  value = '',
  size = 'md',
  color = 'gold',
  animate = false,
  className = '',
  style = {},
}) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  // Parse numeric value for CountUp
  const parseValue = (val) => {
    const str = String(val);
    // Extract prefix (₹, $, etc.), number, and suffix (+, %, L, USD, etc.)
    const match = str.match(/^([₹$€£]?)([0-9,]+(?:\.[0-9]+)?)(.*)$/);
    if (match) {
      return {
        prefix: match[1],
        number: parseFloat(match[2].replace(/,/g, '')),
        suffix: match[3],
        original: str,
        isNumeric: true,
      };
    }
    return { isNumeric: false, original: str };
  };

  const parsed = parseValue(value);

  const sizeClass = {
    sm: 'money-badge-sm',
    md: 'money-badge-md',
    lg: 'money-badge-lg',
    xl: 'money-badge-xl',
  }[size] || 'money-badge-md';

  const colorClass = {
    gold: '',
    sky: 'money-badge-sky',
    red: 'money-badge-red',
  }[color] || '';

  return (
    <span
      ref={ref}
      className={`money-badge ${sizeClass} ${colorClass} ${className}`}
      style={style}
      data-money="true"
    >
      {animate && parsed.isNumeric ? (
        <CountUp
          start={0}
          end={parsed.number}
          duration={2}
          separator=","
          prefix={parsed.prefix}
          suffix={parsed.suffix}
          enableScrollSpy
          scrollSpyOnce
        />
      ) : (
        value
      )}
    </span>
  );
}
