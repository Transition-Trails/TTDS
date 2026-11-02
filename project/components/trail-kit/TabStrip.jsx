import React from 'react';

/**
 * The printed tab strip that runs down the outer edge of every Trail Kit page —
 * the thing that makes a PDF feel like a tabbed notebook. The active section's tab
 * is filled in Deep Teal; the rest sit quiet on paper. Tabs are also anchor links,
 * so the tab strip works as navigation in the on-screen PDF.
 */
export function TabStrip({ sections = [], active = 0, idPrefix = 's', style, ...rest }) {
  const list = typeof sections === 'string' ? sections.split(',').map((s) => s.trim()) : sections;
  const items = list.map((s, i) => (typeof s === 'string' ? { label: s, href: '#' + idPrefix + (i + 1) } : s));
  const activeIndex = Number(active);
  return (
    <nav
      aria-label="Trail Kit sections"
      style={{
        width: 'var(--tt-kit-tab, 0.42in)',
        display: 'flex', flexDirection: 'column', gap: '4px',
        paddingTop: '0.42in',
        fontFamily: 'var(--tt-font-heading)',
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      {items.map((s, i) => {
        const on = i === activeIndex;
        return (
          <a
            key={s.label}
            href={s.href || '#'}
            style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 'var(--tt-kit-caps, 8pt)',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              borderRadius: '0 7px 7px 0',
              background: on ? 'var(--tt-deep-teal)' : 'var(--tt-paper-alt)',
              color: on ? '#fff' : '#8C857A',
              border: on ? 'none' : '1px solid var(--tt-rule)',
              borderLeft: 'none',
              padding: '8px 0',
            }}
          >
            {s.label}
          </a>
        );
      })}
    </nav>
  );
}
