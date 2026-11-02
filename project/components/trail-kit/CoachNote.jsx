import React from 'react';
import { TrailIcon } from './TrailIcon.jsx';

/**
 * The kit speaking as the reader's coach. A Trail Kit is bought by someone with
 * no mentor assigned — the notebook itself plays that role, so it is allowed to
 * do what a coach does: anticipate the wobble, name it before the reader hits it,
 * and say what to do about it. Use sparingly — two or three per kit, at the points
 * where people actually stall.
 *
 * This is deliberately NOT KitNote. KitNote is information about the task;
 * CoachNote is direct address about the person doing it. Never use CoachNote in
 * program curriculum — enrolled learners have a real human mentor, and a printed
 * substitute would be worse than nothing.
 */
export function CoachNote({ title = 'From your coach', children, aside, compact = false, style, ...rest }) {
  const isCompact = compact === true || compact === 'true';
  return (
    <aside style={{
      background: 'var(--tt-paper-alt)',
      border: '1px solid var(--tt-rule)',
      borderLeft: '3px solid var(--tt-clay-500)',
      borderRadius: '0 8px 8px 0',
      padding: isCompact ? '11px 11px' : '14px 16px',
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...(isCompact ? null : { display: 'flex', gap: '13px' }),
      ...style,
    }} {...rest}>
      {!isCompact && (
        <div style={{
          width: '30px', height: '30px', flexShrink: 0, borderRadius: '999px',
          background: 'var(--tt-clay-500)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--tt-font-accent)', fontWeight: 600, fontSize: '17px',
          lineHeight: 1,
        }} aria-hidden="true">TT</div>
      )}
      <div style={{ flex: 1 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
          fontSize: 'var(--tt-kit-caps, 8pt)', letterSpacing: '.11em',
          textTransform: 'uppercase', color: 'var(--tt-clay-700)', marginBottom: '6px',
        }}>
          {isCompact && <TrailIcon name="compass" size={13} />}
          {title}
        </div>
        <div style={{
          fontSize: 'var(--tt-kit-small, 9.5pt)', lineHeight: 1.55,
          color: 'var(--tt-text)',
        }}>{children}</div>
        {aside && (
          <div style={{
            marginTop: '8px', paddingTop: '8px',
            borderTop: '1px solid var(--tt-rule)',
            fontFamily: 'var(--tt-font-accent)', fontSize: '15pt',
            lineHeight: 1.2, color: 'var(--tt-clay-700)',
          }}>{aside}</div>
        )}
      </div>
    </aside>
  );
}
