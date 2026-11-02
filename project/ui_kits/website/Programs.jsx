/* Transition Trails — website Programs screen. */
const { Button, Card, Pill, Alert, Stepper } = window.TransitionTrailsDesignSystem_335df4;

function Programs({ onNav }) {
  const rows = [
    { title: 'Foundations Trail', tone: 'teal', status: 'Enrolling', len: '6 weeks', body: 'Bridge from certification to practice. Structured exercises and a guided first project with mentor check-ins.', tag: 'Guided Trail' },
    { title: 'Guided Trail', tone: 'green', status: 'Enrolling', len: '12 weeks', body: 'Supervised project work with a nonprofit partner. Build a verifiable portfolio and a credible signal of workforce readiness.', tag: 'Flagship' },
    { title: 'Trail of Mastery', tone: 'gray', status: 'Coming Soon', len: 'Fall 2026', body: 'Advanced engagements demonstrating applied judgment across multiple partner projects.', tag: 'Waitlist' },
  ];
  return (
    <div style={{ fontFamily: 'var(--tt-font-body)', color: 'var(--tt-text)' }}>
      <section style={{ background: 'var(--tt-sky-100)', padding: '56px 40px', borderBottom: '1px solid var(--tt-border)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <Pill tone="teal">Programs</Pill>
          <h1 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '40px', color: 'var(--tt-heading)', margin: '16px 0 12px' }}>Learning paths built on real experience.</h1>
          <p style={{ fontSize: '17px', maxWidth: '640px', margin: 0, lineHeight: 1.6 }}>Each trail is a supervised, documented pathway. Start where you are — every milestone is proof employers can trust.</p>
        </div>
      </section>

      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '48px 40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {rows.map((r) => (
            <div key={r.title} style={{ display: 'grid', gridTemplateColumns: '200px 1fr auto', gap: '28px', alignItems: 'center', background: '#fff', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-lg)', padding: '24px 28px' }}>
              <div style={{ height: '110px', borderRadius: 'var(--tt-radius-md)', background: 'linear-gradient(135deg, var(--tt-green-100), var(--tt-green-300))' }} />
              <div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                  <Pill tone={r.tone}>{r.status}</Pill>
                  <Pill tone="gray">{r.len}</Pill>
                </div>
                <h3 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '23px', color: 'var(--tt-heading)', margin: '0 0 6px' }}>{r.title}</h3>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, maxWidth: '540px' }}>{r.body}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '150px' }}>
                {r.status === 'Coming Soon'
                  ? <Button variant="secondary" onClick={() => onNav('involved')}>Join waitlist</Button>
                  : <Button variant="primary" onClick={() => onNav('involved')}>Apply now</Button>}
                <Button variant="ghost" onClick={() => onNav('programs')}>Details →</Button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '32px' }}>
          <Alert tone="info" title="For nonprofits">Partner with us to host a supervised project engagement — build capacity while a learner gains critical experience.</Alert>
        </div>
      </section>

      <section style={{ background: '#fff', borderTop: '1px solid var(--tt-border)', padding: '48px 40px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '28px', color: 'var(--tt-heading)', margin: '0 0 28px' }}>What the Guided Trail looks like</h2>
          <Stepper steps={['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate']} current={0} />
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { TT_Programs: Programs });
