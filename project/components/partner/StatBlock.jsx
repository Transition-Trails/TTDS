import React from 'react';

/**
 * Large statistic for nonprofit-facing material. Nonprofit decision-makers scan
 * before they read, so the number carries the argument and the caption qualifies
 * it. Always attach a `source` when the figure is not our own — an unsourced
 * number reads as marketing.
 */
export function StatBlock({ value, label, source, tone = 'teal', style, ...rest }) {
  const ink = tone === 'green' ? 'var(--tt-trail-green)' : 'var(--tt-deep-teal)';
  return (
    <div style={{ fontFamily: 'var(--tt-font-body)', breakInside: 'avoid', ...style }} {...rest}>
      <div style={{
        fontFamily: 'var(--tt-font-heading)', fontWeight: 700,
        fontSize: 'var(--tt-partner-stat, 34pt)', lineHeight: 1.3,
        color: ink, letterSpacing: '-.01em',
      }}>{value}</div>
      {label && (
        <div style={{
          fontSize: 'var(--tt-partner-small, 10pt)', lineHeight: 1.45,
          color: 'var(--tt-text)', marginTop: '5px',
        }}>{label}</div>
      )}
      {source && (
        <div style={{ fontSize: '7.5pt', color: 'var(--tt-partner-ink-soft)', marginTop: '5px' }}>{source}</div>
      )}
    </div>
  );
}
