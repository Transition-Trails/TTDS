import React from 'react';

/**
 * Trail Kit metadata bar — time to complete, level, and what the learner needs
 * before starting. Sets expectations on the orient page so nobody starts unprepared.
 */
export function KitMeta({ items = [], style, ...rest }) {
  const list = typeof items === 'string'
    ? items.split('|').map((s) => s.trim()).filter(Boolean).map((s) => s.split('::').map((x) => x.trim()))
    : items;
  const pairs = list.map((it) => (Array.isArray(it) ? { label: it[0], value: it[1] } : it));
  return (
    <div style={{
      display: 'flex', gap: '0', fontFamily: 'var(--tt-font-body)',
      borderTop: '1.5px solid var(--tt-rule-strong)',
      borderBottom: '1.5px solid var(--tt-rule-strong)',
      breakInside: 'avoid', ...style,
    }} {...rest}>
      {pairs.map((p, i) => (
        <div key={p.label} style={{
          flex: 1, padding: '11px 16px',
          borderLeft: i === 0 ? 'none' : '1px solid var(--tt-rule)',
        }}>
          <div style={{
            fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
            fontSize: 'var(--tt-kit-caps, 8pt)', letterSpacing: '.1em',
            textTransform: 'uppercase', color: '#8C857A', marginBottom: '4px',
          }}>{p.label}</div>
          <div style={{
            fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
            fontSize: '12pt', color: 'var(--tt-heading)', lineHeight: 1.25,
          }}>{p.value}</div>
        </div>
      ))}
    </div>
  );
}
