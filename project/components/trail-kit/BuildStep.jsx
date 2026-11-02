import React from 'react';

/**
 * A numbered build step in a Trail Kit — large step numeral, instruction, and an
 * optional "you should see" verification line so the learner can self-check.
 */
export function BuildStep({ n, title, verify, children, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: '13px', breakInside: 'avoid', fontFamily: 'var(--tt-font-body)', ...style }} {...rest}>
      <div style={{
        width: '26px', height: '26px', flexShrink: 0, borderRadius: '999px',
        background: 'var(--tt-deep-teal)', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '11pt',
      }}>{n}</div>
      <div style={{ flex: 1 }}>
        {title && (
          <h4 style={{
            fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
            fontSize: 'var(--tt-kit-h3, 14pt)', color: 'var(--tt-heading)',
            margin: '2px 0 5px', lineHeight: 1.25,
          }}>{title}</h4>
        )}
        <div style={{ fontSize: 'var(--tt-kit-body, 11.5pt)', lineHeight: 1.55, color: 'var(--tt-text)' }}>{children}</div>
        {verify && (
          <div style={{
            marginTop: '8px', display: 'flex', gap: '7px', alignItems: 'baseline',
            fontSize: 'var(--tt-kit-small, 9.5pt)', color: 'var(--tt-green-700)',
            borderTop: '1px solid var(--tt-rule)', paddingTop: '7px',
          }}>
            <span aria-hidden="true">✓</span>
            <span><b style={{ fontFamily: 'var(--tt-font-heading)' }}>You should see</b> — {verify}</span>
          </div>
        )}
      </div>
    </div>
  );
}
