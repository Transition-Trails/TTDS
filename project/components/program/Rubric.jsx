import React from 'react';

/**
 * Assessment rubric for a program module. Three levels per criterion, matching the
 * organization's evidence-before-scale principle: a learner is not "done", they are
 * demonstrably at a level, and a mentor can point at the row that says so.
 */
export function Rubric({
  criteria = [],
  levels = ['Emerging', 'Proficient', 'Exemplary'],
  style,
  ...rest
}) {
  const list = typeof criteria === 'string'
    ? criteria.split('|').map((s) => s.trim()).filter(Boolean).map((s) => s.split('::').map((p) => p.trim()))
    : criteria;
  const levelList = typeof levels === 'string' ? levels.split(',').map((s) => s.trim()) : levels;
  const rows = list.map((c) => (Array.isArray(c) ? { name: c[0], cells: c.slice(1) } : c));
  const th = {
    textAlign: 'left', padding: '0 10px 7px 0',
    fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
    fontSize: 'var(--tt-prog-caps, 8pt)', letterSpacing: '.1em',
    textTransform: 'uppercase', color: 'var(--tt-prog-stage, var(--tt-trail-green))',
    borderBottom: '1.5px solid var(--tt-doc-rule-strong)',
  };
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--tt-font-body)', breakInside: 'avoid', ...style }} {...rest}>
      <thead>
        <tr>
          <th style={{ ...th, width: '22%' }}>Criterion</th>
          {levelList.map((l) => <th key={l} style={th}>{l}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={r.name} style={{ background: i % 2 ? 'var(--tt-doc-alt)' : 'transparent' }}>
            <td style={{
              padding: '10px 10px 10px 0', verticalAlign: 'top',
              borderBottom: '1px solid var(--tt-doc-rule)',
              fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
              fontSize: 'var(--tt-prog-small, 10pt)', color: 'var(--tt-heading)',
            }}>{r.name}</td>
            {(r.cells || []).map((c, j) => (
              <td key={j} style={{
                padding: '10px 10px 10px 0', verticalAlign: 'top',
                borderBottom: '1px solid var(--tt-doc-rule)',
                borderLeft: '1px solid var(--tt-doc-rule)',
                paddingLeft: '10px',
                fontSize: '9.5pt', lineHeight: 1.45, color: 'var(--tt-text)',
              }}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
