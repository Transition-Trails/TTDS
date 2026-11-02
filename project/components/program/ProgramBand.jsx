import React from 'react';

const STAGES = {
  foundations: { color: 'var(--tt-prog-foundations)', label: 'Foundations Trail' },
  guided: { color: 'var(--tt-prog-guided)', label: 'Guided Trail' },
  mastery: { color: 'var(--tt-prog-mastery)', label: 'Trail of Mastery' },
};

/**
 * Program module header — the identifying band on official curriculum pages.
 * The stage color tells a learner which trail a page belongs to at a glance.
 * Never carries a price, a code, or a CTA; program material is not retail.
 */
export function ProgramBand({
  stage = 'guided',
  module: moduleNo,
  of,
  title,
  eyebrow,
  style,
  ...rest
}) {
  const s = STAGES[stage] || STAGES.guided;
  return (
    <header style={{ fontFamily: 'var(--tt-font-body)', breakInside: 'avoid', ...style }} {...rest}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: s.color, color: '#fff', padding: '11px 16px',
        borderRadius: '6px 6px 0 0',
      }}>
        <div style={{
          fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
          fontSize: 'var(--tt-prog-caps, 8pt)', letterSpacing: '.13em',
          textTransform: 'uppercase',
        }}>{s.label}</div>
        {moduleNo != null && (
          <div style={{
            fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
            fontSize: 'var(--tt-prog-caps, 8pt)', letterSpacing: '.11em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,.82)',
          }}>Module {moduleNo}{of ? ' of ' + of : ''}</div>
        )}
      </div>
      <div style={{
        borderLeft: '1px solid var(--tt-doc-rule)',
        borderRight: '1px solid var(--tt-doc-rule)',
        borderBottom: '2px solid ' + s.color,
        padding: '15px 16px 16px',
        background: '#fff',
      }}>
        {eyebrow && (
          <div style={{
            fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
            fontSize: 'var(--tt-prog-caps, 8pt)', letterSpacing: '.1em',
            textTransform: 'uppercase', color: s.color, marginBottom: '6px',
          }}>{eyebrow}</div>
        )}
        {title && (
          <h1 style={{
            fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
            fontSize: 'var(--tt-prog-h2, 18pt)', lineHeight: 1.2,
            color: 'var(--tt-heading)', margin: 0, textWrap: 'balance',
          }}>{title}</h1>
        )}
      </div>
    </header>
  );
}
