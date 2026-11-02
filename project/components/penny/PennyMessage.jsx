import React from 'react';
import { PennyModeBadge, PENNY_MODES } from './PennyModeBadge.jsx';

/**
 * One turn in a Penny conversation. `from="penny"` renders her side with the
 * mode badge; `from="learner"` renders the person's side. Penny's bubble carries
 * a left rule in the mode color so a long thread stays scannable.
 */
export function PennyMessage({ from = 'penny', mode = 'coach', name, children, style, ...rest }) {
  const isPenny = from === 'penny';
  const m = PENNY_MODES[mode] || PENNY_MODES.coach;

  if (!isPenny) {
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-end', ...style }} {...rest}>
        <div style={{
          maxWidth: '78%', background: 'var(--tt-warm-gray)', color: 'var(--tt-text)',
          fontFamily: 'var(--tt-font-body)', fontSize: '13px', lineHeight: 1.55,
          padding: '9px 13px', borderRadius: '12px 12px 3px 12px',
        }}>{children}</div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '9px', alignItems: 'flex-start', ...style }} {...rest}>
      <div style={{
        width: '26px', height: '26px', flexShrink: 0, borderRadius: '999px',
        background: 'var(--tt-deep-teal)', color: 'var(--tt-white)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '12px',
      }} aria-hidden="true">P</div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '4px' }}>
          <span style={{
            fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
            fontSize: '12px', color: 'var(--tt-heading)',
          }}>{name || 'Penny'}</span>
          <PennyModeBadge mode={mode} />
        </div>
        <div style={{
          background: m.bg, borderLeft: `2.5px solid ${m.rule}`, borderRadius: '0 10px 10px 0',
          padding: '9px 13px', fontFamily: 'var(--tt-font-body)',
          fontSize: '13px', lineHeight: 1.55, color: 'var(--tt-text)',
        }}>{children}</div>
      </div>
    </div>
  );
}
