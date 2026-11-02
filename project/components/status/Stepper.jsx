import React from 'react';

/**
 * Transition Trails progress stepper. Shows steps along a trail; the current step
 * is marked in Sun Amber, completed steps in Trail Green, upcoming in Warm Gray.
 * steps: array of strings (labels) or { label } objects. current: 0-based index.
 */
export function Stepper({ steps = [], current = 0, style, ...rest }) {
  const items = steps.map((s) => (typeof s === 'string' ? { label: s } : s));
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', fontFamily: 'var(--tt-font-body)', ...style }} {...rest}>
      {items.map((step, i) => {
        const state = i < current ? 'done' : i === current ? 'current' : 'upcoming';
        const dot = {
          done: { background: 'var(--tt-trail-green)', color: '#fff', border: 'none' },
          current: { background: 'var(--tt-sun-amber)', color: 'var(--tt-charcoal)', border: 'none' },
          upcoming: { background: '#fff', color: '#9AA09D', border: '1.5px solid var(--tt-warm-gray)' },
        }[state];
        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '84px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '999px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '14px',
                ...dot,
              }}>
                {state === 'done' ? '✓' : i + 1}
              </div>
              <span style={{
                fontSize: '13px', textAlign: 'center', lineHeight: 1.3,
                color: state === 'upcoming' ? '#9AA09D' : 'var(--tt-heading)',
                fontWeight: state === 'current' ? 600 : 400,
              }}>{step.label}</span>
            </div>
            {i < items.length - 1 && (
              <div style={{
                flex: 1, height: '2px', marginTop: '15px', minWidth: '24px',
                background: i < current ? 'var(--tt-trail-green)' : 'var(--tt-warm-gray)',
              }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
