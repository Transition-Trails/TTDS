import React from 'react';
import { TrailIcon } from './TrailIcon.jsx';

const KINDS = {
  tip: { label: 'Pro tip', bg: 'var(--tt-green-100)', rule: 'var(--tt-trail-green)', ink: 'var(--tt-green-700)', icon: 'lightbulb' },
  watchout: { label: 'Watch out', bg: 'var(--tt-clay-100)', rule: 'var(--tt-clay-500)', ink: 'var(--tt-clay-700)', icon: 'triangle-alert' },
  practice: { label: 'Best practice', bg: 'var(--tt-sky-100)', rule: 'var(--tt-deep-teal)', ink: 'var(--tt-deep-teal)', icon: 'award' },
  remember: { label: 'Remember', bg: 'var(--tt-paper-alt)', rule: 'var(--tt-rule-strong)', ink: 'var(--tt-charcoal)', icon: 'bookmark' },
};

/**
 * Trail Kit marginalia note — the side-rail callout that turns bare instructions
 * into guidance. Four kinds: tip, watchout, practice, remember. Each pairs a glyph
 * and a word label with the color, so meaning never rests on color alone.
 */
export function KitNote({ kind = 'tip', title, children, style, ...rest }) {
  const k = KINDS[kind] || KINDS.tip;
  return (
    <aside
      style={{
        background: k.bg,
        borderLeft: `2.5px solid ${k.rule}`,
        borderRadius: '0 8px 8px 0',
        padding: '11px 13px',
        fontFamily: 'var(--tt-font-body)',
        fontSize: 'var(--tt-kit-small, 9.5pt)',
        lineHeight: 1.5,
        color: 'var(--tt-text)',
        breakInside: 'avoid',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '5px',
        fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
        fontSize: 'var(--tt-kit-caps, 8pt)', letterSpacing: '.1em',
        textTransform: 'uppercase', color: k.ink,
      }}>
        <TrailIcon name={k.icon} size={13} />
        {title || k.label}
      </div>
      <div>{children}</div>
    </aside>
  );
}
