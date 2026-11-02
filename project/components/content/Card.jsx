import React from 'react';

/**
 * Transition Trails content card. Optional media header (photo/illustration or
 * soft green-tint placeholder), Poppins title, supportive body, optional footer.
 * Lifts gently on hover.
 */
export function Card({
  title,
  children,
  media,
  mediaSrc,
  footer,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--tt-surface)',
        border: '1px solid var(--tt-border)',
        borderRadius: 'var(--tt-radius-lg)',
        overflow: 'hidden',
        maxWidth: '320px',
        cursor: onClick ? 'pointer' : 'default',
        transform: hover ? 'translateY(-3px)' : 'none',
        boxShadow: hover ? 'var(--tt-shadow-card)' : 'none',
        transition: 'transform .15s ease, box-shadow .15s ease',
        ...style,
      }}
      {...rest}
    >
      {(media || mediaSrc) && (
        <div style={{
          height: '140px',
          background: mediaSrc
            ? `center/cover no-repeat url("${mediaSrc}")`
            : 'linear-gradient(135deg, var(--tt-green-100), var(--tt-green-300))',
        }}>
          {!mediaSrc && media}
        </div>
      )}
      <div style={{ padding: '22px' }}>
        {title && (
          <h4 style={{
            fontFamily: 'var(--tt-font-heading)',
            fontWeight: 600,
            fontSize: 'var(--tt-h4)',
            color: 'var(--tt-heading)',
            margin: '0 0 8px',
          }}>{title}</h4>
        )}
        <div style={{
          fontFamily: 'var(--tt-font-body)',
          fontSize: 'var(--tt-body-sm)',
          lineHeight: 1.6,
          color: 'var(--tt-text)',
        }}>{children}</div>
        {footer && <div style={{ marginTop: '16px' }}>{footer}</div>}
      </div>
    </div>
  );
}
