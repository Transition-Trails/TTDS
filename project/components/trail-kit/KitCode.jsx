import React from 'react';

/**
 * The redemption code block that closes every Trail Kit — a monospaced code in a
 * clay ticket, the discount on the next kit, and the invitation into a program.
 * This is the one place Sun Amber may appear in a Trail Kit (the conversion CTA).
 */
export function KitCode({
  code,
  headline = 'Your next trail',
  body,
  cta,
  url,
  style,
  ...rest
}) {
  return (
    <div style={{
      border: '2px dashed var(--tt-clay-300)',
      borderRadius: 'var(--tt-radius-md)',
      background: 'var(--tt-clay-100)',
      padding: '20px 22px',
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style,
    }} {...rest}>
      <div style={{
        fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
        fontSize: 'var(--tt-kit-caps, 8pt)', letterSpacing: '.12em',
        textTransform: 'uppercase', color: 'var(--tt-clay-700)', marginBottom: '9px',
      }}>{headline}</div>
      <div style={{
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: '20pt', fontWeight: 600, letterSpacing: '.09em',
        color: 'var(--tt-charcoal)', background: '#fff',
        border: '1px solid var(--tt-clay-300)', borderRadius: '7px',
        padding: '9px 16px', display: 'inline-block', marginBottom: '11px',
        whiteSpace: 'nowrap',
      }}>{code}</div>
      {body && <p style={{ margin: '0 0 12px', fontSize: 'var(--tt-kit-small, 9.5pt)', lineHeight: 1.55, color: 'var(--tt-text)', maxWidth: '3.4in' }}>{body}</p>}
      {cta && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          background: 'var(--tt-sun-amber)', color: 'var(--tt-charcoal)',
          fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '10.5pt',
          padding: '9px 18px', borderRadius: 'var(--tt-radius-md)',
          whiteSpace: 'nowrap',
        }}>{cta} →</div>
      )}
      {url && <div style={{ fontSize: '7.5pt', color: '#9A8F80', marginTop: '9px' }}>{url}</div>}
    </div>
  );
}
