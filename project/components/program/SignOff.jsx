import React from 'react';

/**
 * Mentor sign-off block — the credential artifact that closes a program module.
 * This is the piece a Trail Kit deliberately does not have: an outside party
 * attesting to observed work, which is what "experience-validated" means.
 */
export function SignOff({
  evidence = [],
  note = 'Signed by a Transition Trails mentor after reviewing the evidence above.',
  style,
  ...rest
}) {
  const list = typeof evidence === 'string' ? evidence.split('|').map((s) => s.trim()).filter(Boolean) : evidence;
  return (
    <section style={{
      border: '1.5px solid var(--tt-doc-rule-strong)',
      borderRadius: '7px',
      padding: '18px 20px',
      background: '#fff',
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style,
    }} {...rest}>
      <div style={{
        fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
        fontSize: 'var(--tt-prog-caps, 8pt)', letterSpacing: '.12em',
        textTransform: 'uppercase', color: 'var(--tt-prog-stage, var(--tt-trail-green))',
        marginBottom: '13px',
      }}>Evidence &amp; mentor sign-off</div>

      {list.length > 0 && (
        <div style={{ marginBottom: '18px' }}>
          {list.map((e) => (
            <div key={e} style={{
              display: 'flex', gap: '11px', alignItems: 'flex-start',
              padding: '8px 0', borderBottom: '1px solid var(--tt-doc-rule)',
            }}>
              <span style={{ width: '12px', height: '12px', border: '1.5px solid var(--tt-doc-rule-strong)', borderRadius: '3px', flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: 'var(--tt-prog-small, 10pt)', lineHeight: 1.5, color: 'var(--tt-text)' }}>{e}</span>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 0.9fr', gap: '18px' }}>
        {[['Mentor name & signature'], ['Level awarded'], ['Date']].map(([label]) => (
          <div key={label}>
            <div style={{ height: '0.42in', borderBottom: '1.5px solid var(--tt-charcoal)' }} />
            <div style={{
              fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
              fontSize: '7.5pt', letterSpacing: '.09em', textTransform: 'uppercase',
              color: '#8A908C', marginTop: '6px',
            }}>{label}</div>
          </div>
        ))}
      </div>

      {note && <p style={{ margin: '15px 0 0', fontSize: '8.5pt', lineHeight: 1.5, color: '#7A807C' }}>{note}</p>}
    </section>
  );
}
