import React from 'react';

const TONES = {
  green: { background: 'var(--tt-green-100)', color: 'var(--tt-green-700)' },
  teal: { background: 'var(--tt-sky-100)', color: 'var(--tt-deep-teal)' },
  amber: { background: 'var(--tt-amber-100)', color: 'var(--tt-amber-700)' },
  gray: { background: 'var(--tt-warm-gray)', color: 'var(--tt-slate)' },
};

/**
 * Transition Trails status/category pill. Use for trail types and status labels.
 */
export function Pill({ tone = 'green', children, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--tt-font-heading)',
        fontWeight: 500,
        fontSize: '13px',
        padding: '6px 14px',
        borderRadius: 'var(--tt-radius-pill)',
        lineHeight: 1.2,
        ...TONES[tone] || TONES.green,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
