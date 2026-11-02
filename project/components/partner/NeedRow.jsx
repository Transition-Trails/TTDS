import React from 'react';

/**
 * Problem/answer pair for the nonprofit business case. The left column names a
 * constraint the reader recognizes in their own organization; the right column
 * says what supervised project capacity does about it. Recognition first, offer
 * second — never the reverse.
 */
export function NeedRow({ need, answer, outcome, n, style, ...rest }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '0.32in 1fr 1fr',
      gap: '14px', padding: '13px 0',
      borderTop: '1px solid var(--tt-partner-rule)',
      fontFamily: 'var(--tt-font-body)', breakInside: 'avoid', ...style,
    }} {...rest}>
      <div style={{
        fontFamily: 'var(--tt-font-heading)', fontWeight: 700,
        fontSize: '12pt', color: 'var(--tt-partner-rule-strong)', lineHeight: 1.2,
      }}>{n}</div>
      <div>
        <div style={{
          fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
          fontSize: 'var(--tt-partner-caps, 8pt)', letterSpacing: '.1em',
          textTransform: 'uppercase', color: 'var(--tt-partner-ink-soft)', marginBottom: '5px',
        }}>Sound familiar?</div>
        <div style={{ fontSize: 'var(--tt-partner-small, 10pt)', lineHeight: 1.5, color: 'var(--tt-text)' }}>{need}</div>
      </div>
      <div>
        <div style={{
          fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
          fontSize: 'var(--tt-partner-caps, 8pt)', letterSpacing: '.1em',
          textTransform: 'uppercase', color: 'var(--tt-deep-teal)', marginBottom: '5px',
        }}>What changes</div>
        <div style={{ fontSize: 'var(--tt-partner-small, 10pt)', lineHeight: 1.5, color: 'var(--tt-text)' }}>{answer}</div>
        {outcome && (
          <div style={{
            marginTop: '7px', fontSize: '9pt', lineHeight: 1.45,
            color: 'var(--tt-green-700)', fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
          }}>{outcome}</div>
        )}
      </div>
    </div>
  );
}
