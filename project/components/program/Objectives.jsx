import React from 'react';

/**
 * Learning objectives block for a program module. Each objective carries a
 * competency code so the module maps to the credential framework — this is what
 * makes program content assessable rather than merely instructional.
 */
export function Objectives({ items = [], heading = 'By the end of this module you can', style, ...rest }) {
  const list = typeof items === 'string'
    ? items.split('|').map((s) => s.trim()).filter(Boolean).map((s) => s.split('::').map((p) => p.trim()))
    : items;
  const rows = list.map((it) => (Array.isArray(it) ? { code: it[0], text: it[1] } : it));
  return (
    <section style={{ fontFamily: 'var(--tt-font-body)', breakInside: 'avoid', ...style }} {...rest}>
      <div style={{
        fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
        fontSize: 'var(--tt-prog-caps, 8pt)', letterSpacing: '.1em',
        textTransform: 'uppercase', color: 'var(--tt-prog-stage, var(--tt-trail-green))',
        marginBottom: '11px',
      }}>{heading}</div>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
        {rows.map((r) => (
          <li key={r.code || r.text} style={{
            display: 'flex', gap: '13px', alignItems: 'baseline',
            padding: '9px 0', borderTop: '1px solid var(--tt-doc-rule)',
          }}>
            {r.code && (
              <span style={{
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: '8.5pt', letterSpacing: '.04em',
                whiteSpace: 'nowrap',
                color: 'var(--tt-prog-stage, var(--tt-trail-green))',
                border: '1px solid var(--tt-doc-rule-strong)', borderRadius: '4px',
                padding: '2px 6px', flexShrink: 0,
              }}>{r.code}</span>
            )}
            <span style={{ fontSize: 'var(--tt-prog-body, 12pt)', lineHeight: 1.5, color: 'var(--tt-text)' }}>{r.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
