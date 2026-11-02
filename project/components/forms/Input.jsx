import React from 'react';

/**
 * Transition Trails text input with label and optional help/error message.
 * Green focus ring; errors pair Amber-700 text with a ⚠ glyph (never color alone).
 */
export function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  help,
  error,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error
    ? 'var(--tt-amber-700)'
    : focus
      ? 'var(--tt-trail-green)'
      : 'var(--tt-border)';

  return (
    <div style={{ fontFamily: 'var(--tt-font-body)', maxWidth: '360px', ...style }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            display: 'block',
            fontWeight: 600,
            fontSize: '13.5px',
            color: 'var(--tt-heading)',
            marginBottom: '6px',
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%',
          fontFamily: 'var(--tt-font-body)',
          fontSize: '15px',
          color: 'var(--tt-heading)',
          padding: '11px 14px',
          border: `1.5px solid ${borderColor}`,
          borderRadius: 'var(--tt-radius-md)',
          outline: 'none',
          background: disabled ? 'var(--tt-trail-light)' : '#fff',
          boxShadow: focus && !error ? 'var(--tt-focus-ring)' : 'none',
          transition: 'border-color .15s, box-shadow .15s',
          boxSizing: 'border-box',
        }}
        {...rest}
      />
      {error ? (
        <div style={{ display: 'flex', gap: '6px', fontSize: '12.5px', color: 'var(--tt-amber-700)', marginTop: '6px', fontWeight: 500 }}>
          <span aria-hidden="true">⚠</span>
          <span>{error}</span>
        </div>
      ) : help ? (
        <div style={{ fontSize: '12.5px', color: '#7A807D', marginTop: '6px' }}>{help}</div>
      ) : null}
    </div>
  );
}
