/* Transition Trails — website Get Involved / apply screen with a working form. */
const { Button, Card, Pill, Alert, Input } = window.TransitionTrailsDesignSystem_335df4;
const { useState } = React;

function GetInvolved() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!name.trim()) { setErr('Please enter your name.'); return; }
    setErr('');
    setSent(true);
  }

  return (
    <div style={{ fontFamily: 'var(--tt-font-body)', color: 'var(--tt-text)' }}>
      <section style={{ background: 'var(--tt-trail-green)', padding: '56px 40px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--tt-font-accent)', fontWeight: 600, fontSize: '28px', color: 'var(--tt-amber-300)' }}>start your journey today</span>
          <h1 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '40px', color: '#fff', margin: '8px 0 12px' }}>Take the next step.</h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,.86)', maxWidth: '620px', margin: 0, lineHeight: 1.6 }}>Apply to a trail, volunteer as a mentor, or partner your nonprofit. Tell us where you are — we'll help you find the path.</p>
        </div>
      </section>

      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '48px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '26px', color: 'var(--tt-heading)', margin: '0 0 20px' }}>Three ways to walk with us</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              ['Learn', 'green', 'Apply to a trail and build verifiable experience.'],
              ['Mentor', 'teal', 'Volunteer 2–3 hours a week to guide a learner.'],
              ['Partner', 'gray', 'Host a supervised project at your nonprofit.'],
            ].map(([t, tone, b]) => (
              <div key={t} style={{ background: '#fff', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-md)', padding: '18px 20px' }}>
                <Pill tone={tone}>{t}</Pill>
                <p style={{ margin: '10px 0 0', fontSize: '15px', lineHeight: 1.5 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-lg)', padding: '32px', boxShadow: 'var(--tt-shadow-soft)' }}>
          <h3 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '22px', color: 'var(--tt-heading)', margin: '0 0 6px' }}>Start your application</h3>
          <p style={{ margin: '0 0 22px', fontSize: '14px' }}>It takes about two minutes. No commitment yet.</p>
          {sent ? (
            <Alert tone="success" title="Application received">Welcome to the trail, {name || 'friend'}! We'll be in touch within two business days.</Alert>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <Input label="Full name" value={name} onChange={(e) => setName(e.target.value)} error={err} style={{ maxWidth: 'none' }} />
              <Input label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" help="We'll only use this to send trail updates." style={{ maxWidth: 'none' }} />
              <Input label="Which trail interests you?" placeholder="Foundations / Guided / Not sure yet" style={{ maxWidth: 'none' }} />
              <Button variant="amber" size="lg" type="submit">Take the Next Step →</Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { TT_GetInvolved: GetInvolved });
