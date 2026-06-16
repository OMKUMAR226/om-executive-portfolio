'use client';

export default function SectionLabel({ text, className = '' }) {
  return (
    <div className={`section-label ${className}`}>
      {text}
    </div>
  );
}
