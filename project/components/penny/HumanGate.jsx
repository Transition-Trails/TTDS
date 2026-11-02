import React from 'react';
import { TrailIcon } from '../trail-kit/TrailIcon.jsx';

/**
 * The approval gate. Penny drafts; a human sends. Any Penny output bound for a
 * client, a channel, or production is wrapped in this — it is the visible form
 * of the "human in the loop, always" architecture, not a confirmation dialog.
 */
export function HumanGate({ label = 'Penny drafted this — needs your approval', recipient, children, style, ...rest }) {
  return (
    <div
      style={{
        border: '1.5px solid var(--tt-sun-amber)', borderRadius: '10px',
        background: 'var(--tt-amber-100)', overflow: 'hidden',
        fontFamily: 'var(--tt-font-body)', ...style,
      }}
      {...rest}
    >
      <div style={{
        display: 'flex', alignItems: 'center', gap: '7px',
        padding: '8px 13px', borderBottom: '1px solid var(--tt-amber-300)',
        fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
        fontSize: '10.5px', letterSpacing: '.07em', textTransform: 'uppercase',
        color: 'var(--tt-amber-700)',
      }}>
        <TrailIcon name="shield-check" size={13} />
        {label}
      </div>
      <div style={{
        padding: '11px 13px', background: 'var(--tt-white)',
        fontSize: '13px', lineHeight: 1.55, color: 'var(--tt-text)',
      }}>{children}</div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '10px', padding: '9px 13px',
      }}>
        <span style={{ fontSize: '11.5px', color: 'var(--tt-slate)', minWidth: 0 }}>
          {recipient ? <>Will send to <b>{recipient}</b> once approved.</> : 'Nothing sends until a person approves it.'}
        </span>
        <span style={{ display: 'flex', gap: '7px', flexShrink: 0 }}>
          <span style={{
            fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '11.5px',
            color: 'var(--tt-slate)', padding: '5px 11px', borderRadius: '7px',
            border: '1px solid var(--tt-warm-gray)', background: 'var(--tt-white)',
          }}>Edit</span>
          <span style={{
            fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '11.5px',
            color: 'var(--tt-white)', padding: '5px 11px', borderRadius: '7px',
            background: 'var(--tt-trail-green)',
          }}>Approve &amp; send</span>
        </span>
      </div>
    </div>
  );
}
