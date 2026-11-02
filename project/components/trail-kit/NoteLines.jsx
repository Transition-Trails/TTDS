import React from 'react';

/**
 * Ruled writing area for a Trail Kit — the notebook's whole point. Prints real
 * hairline rules at the --tt-note-line pitch so a learner can write on it.
 * Use `lines` for a fixed count, or `grid` for a dot grid instead of rules.
 */
export function NoteLines({ label, lines = 6, grid = false, style, ...rest }) {
  const pitch = 'var(--tt-note-line, 0.30in)';
  return (
    <div style={{ fontFamily: 'var(--tt-font-body)', breakInside: 'avoid', ...style }} {...rest}>
      {label && (
        <div style={{
          fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
          fontSize: 'var(--tt-kit-caps, 8pt)', letterSpacing: '.1em',
          textTransform: 'uppercase', color: 'var(--tt-deep-teal)',
          marginBottom: '7px',
        }}>{label}</div>
      )}
      {grid ? (
        <div style={{
          height: `calc(${pitch} * ${lines})`,
          backgroundImage: 'radial-gradient(var(--tt-rule) 0.6px, transparent 0.6px)',
          backgroundSize: '0.16in 0.16in',
          border: '1px solid var(--tt-rule)',
          borderRadius: '5px',
        }} />
      ) : (
        <div style={{
          height: `calc(${pitch} * ${lines})`,
          backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent calc(${pitch} - 1px), var(--tt-rule) calc(${pitch} - 1px), var(--tt-rule) ${pitch})`,
        }} />
      )}
    </div>
  );
}
