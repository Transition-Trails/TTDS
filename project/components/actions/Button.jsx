import React from 'react';

const SIZES = {
  sm: { padding: '9px 18px', fontSize: '13px' },
  md: { padding: '13px 26px', fontSize: '15px' },
  lg: { padding: '16px 34px', fontSize: '17px' },
};

/**
 * Transition Trails button. Primary = Trail Green. Secondary = teal outline.
 * Amber = the single "Next Step" CTA per screen (use at most one). Ghost = text link.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const base = {
    fontFamily: "var(--tt-font-heading)",
    fontWeight: 600,
    borderRadius: 'var(--tt-radius-md)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    lineHeight: 1.1,
    whiteSpace: 'nowrap',
    transition: 'background .15s ease, color .15s ease, box-shadow .15s ease',
    ...SIZES[size] || SIZES.md,
  };

  const variants = {
    primary: { background: 'var(--tt-trail-green)', color: '#fff' },
    secondary: {
      background: '#fff',
      color: 'var(--tt-deep-teal)',
      border: '1.5px solid var(--tt-deep-teal)',
    },
    amber: {
      background: 'var(--tt-sun-amber)',
      color: 'var(--tt-charcoal)',
      boxShadow: 'var(--tt-shadow-amber)',
    },
    ghost: { background: 'transparent', color: 'var(--tt-trail-green)', padding: `${SIZES[size].padding.split(' ')[0]} 8px` },
  };

  const disabledStyle = disabled
    ? { background: 'var(--tt-warm-gray)', color: '#9AA09D', boxShadow: 'none', border: 'none' }
    : null;

  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: { background: 'var(--tt-green-700)' },
    secondary: { background: 'var(--tt-sky-100)' },
    amber: { background: 'var(--tt-amber-700)', color: '#fff' },
    ghost: { color: 'var(--tt-green-700)' },
  }[variant] : null;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverStyle, ...disabledStyle, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
