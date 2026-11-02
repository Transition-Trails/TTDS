import React from 'react';

export const PENNY_MODES = {
  coach: {
    label: 'Coach',
    posture: 'Socratic',
    bg: 'var(--tt-sky-100)',
    ink: 'var(--tt-deep-teal)',
    rule: 'var(--tt-deep-teal)',
    icon: 'compass',
  },
  coordinator: {
    label: 'Coordinator',
    posture: 'Action-oriented',
    bg: 'var(--tt-green-100)',
    ink: 'var(--tt-green-700)',
    rule: 'var(--tt-trail-green)',
    icon: 'list-checks',
  },
  quest: {
    label: 'Quest Guide',
    posture: 'Coaches, never solves',
    bg: 'var(--tt-amber-100)',
    ink: 'var(--tt-amber-700)',
    rule: 'var(--tt-sun-amber)',
    icon: 'flag',
  },
  liaison: {
    label: 'Client Liaison',
    posture: 'Professional, human-gated',
    bg: 'var(--tt-paper-alt)',
    ink: 'var(--tt-charcoal)',
    rule: 'var(--tt-rule-strong)',
    icon: 'handshake',
  },
};

/**
 * The mode Penny is operating in. Penny's behavior changes completely between
 * modes, so the mode is always visible — a learner should never have to guess
 * whether they are talking to the coach or the coordinator.
 */
export function PennyModeBadge({ mode = 'coach', showPosture = false, style, ...rest }) {
  const m = PENNY_MODES[mode] || PENNY_MODES.coach;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        background: m.bg, color: m.ink,
        fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
        fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase',
        padding: '3px 9px', borderRadius: '999px', whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {m.label}
      {showPosture && (
        <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none', opacity: 0.75 }}>
          · {m.posture}
        </span>
      )}
    </span>
  );
}
