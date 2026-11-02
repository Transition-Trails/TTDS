import React from 'react';
import { TrailIcon } from '../trail-kit/TrailIcon.jsx';

const LEVELS = {
  attention: { ink: 'var(--tt-clay-700)', rule: 'var(--tt-clay-500)', bg: 'var(--tt-clay-100)', icon: 'triangle-alert', label: 'Needs attention' },
  watch: { ink: 'var(--tt-amber-700)', rule: 'var(--tt-sun-amber)', bg: 'var(--tt-amber-100)', icon: 'eye', label: 'Watch' },
  healthy: { ink: 'var(--tt-green-700)', rule: 'var(--tt-trail-green)', bg: 'var(--tt-green-100)', icon: 'circle-check-big', label: 'Healthy' },
};

/**
 * A signal Penny surfaced for a human to act on — an overdue task, a learner
 * gone quiet, a client meeting with no agenda. Penny raises the flag; the coach
 * makes the call. The action label always describes a human doing something.
 */
export function PennyFlag({ level = 'attention', title, detail, action, style, ...rest }) {
  const l = LEVELS[level] || LEVELS.attention;
  return (
    <div
      style={{
        background: l.bg, borderLeft: `2.5px solid ${l.rule}`, borderRadius: '0 9px 9px 0',
        padding: '10px 13px', fontFamily: 'var(--tt-font-body)',
        display: 'flex', gap: '9px', alignItems: 'flex-start', ...style,
      }}
      {...rest}
    >
      <span style={{ color: l.ink, display: 'flex', paddingTop: '1px' }}>
        <TrailIcon name={l.icon} size={14} />
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '12.5px',
          color: 'var(--tt-heading)', lineHeight: 1.35, marginBottom: detail ? '3px' : 0,
        }}>{title || l.label}</div>
        {detail && (
          <div style={{ fontSize: '12px', lineHeight: 1.5, color: 'var(--tt-slate)' }}>{detail}</div>
        )}
      </div>
      {action && (
        <span style={{
          flexShrink: 0, alignSelf: 'center',
          fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '11.5px',
          color: l.ink, whiteSpace: 'nowrap',
        }}>{action} →</span>
      )}
    </div>
  );
}
