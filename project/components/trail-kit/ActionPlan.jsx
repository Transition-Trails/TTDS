import React from 'react';

/**
 * Trail Kit action plan — the "now do it on your own" table. Ruled rows with
 * columns for the action, owner, and target date, so the kit ends in commitment
 * rather than in reading.
 */
export function ActionPlan({ rows = 5, prompts = [], columns, style, ...rest }) {
  const parse = (v) => (typeof v === 'string' ? v.split(',').map((s) => s.trim()).filter(Boolean) : v);
  const cols = parse(columns) || ['Action I will take', 'Who I need', 'By when'];
  const promptList = parse(prompts) || [];
  const count = Math.max(Number(rows) || 0, promptList.length);
  return (
    <table style={{
      width: '100%', borderCollapse: 'collapse',
      fontFamily: 'var(--tt-font-body)', breakInside: 'avoid', ...style,
    }} {...rest}>
      <thead>
        <tr>
          {cols.map((c, i) => (
            <th key={c} style={{
              textAlign: 'left', padding: '0 8px 7px 0',
              fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
              fontSize: 'var(--tt-kit-caps, 8pt)', letterSpacing: '.1em',
              textTransform: 'uppercase', color: 'var(--tt-deep-teal)',
              borderBottom: '1.5px solid var(--tt-rule-strong)',
              width: i === 0 ? 'auto' : i === 1 ? '24%' : '17%',
            }}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: count }).map((_, i) => (
          <tr key={i}>
            {cols.map((c, j) => (
              <td key={c} style={{
                height: 'var(--tt-note-line, 0.30in)',
                borderBottom: '1px solid var(--tt-rule)',
                padding: '4px 8px 4px 0',
                fontSize: 'var(--tt-kit-small, 9.5pt)',
                color: '#A39B8E',
                verticalAlign: 'bottom',
              }}>{j === 0 ? promptList[i] || '' : ''}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
