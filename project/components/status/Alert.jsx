import React from 'react';

const TONES = {
  success: { bg: 'var(--tt-green-100)', border: 'var(--tt-green-300)', glyph: '✓' },
  info: { bg: 'var(--tt-sky-100)', border: 'var(--tt-sky-blue)', glyph: 'ⓘ' },
  warning: { bg: 'var(--tt-amber-100)', border: 'var(--tt-amber-300)', glyph: '⚠' },
  neutral: { bg: 'var(--tt-trail-light)', border: 'var(--tt-warm-gray)', glyph: 'ⓘ' },
};

/**
 * Transition Trails inline alert / callout. Always pairs an icon glyph with the
 * message so meaning is never carried by color alone.
 */
export function Alert({ tone = 'info', title, children, style, ...rest }) {
  const t = TONES[tone] || TONES.info;
  return (
    <div
      role="status"
      style={{
        display: 'flex',
        gap: '12px',
        padding: '16px 18px',
        borderRadius: 'var(--tt-radius-md)',
        background: t.bg,
        border: `1px solid ${t.border}`,
        fontFamily: 'var(--tt-font-body)',
        fontSize: '13.5px',
        lineHeight: 1.5,
        color: 'var(--tt-heading)',
        maxWidth: '460px',
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{ fontSize: '16px', lineHeight: 1.4 }}>{t.glyph}</span>
      <div>
        {title && <b style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600 }}>{title}</b>}
        {title && ' — '}
        {children}
      </div>
    </div>
  );
}
