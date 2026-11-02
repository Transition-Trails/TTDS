/* Transition Trails — website Home screen. Uses window.TransitionTrailsDesignSystem_335df4 + TT_Site. */
const { Button, Card, Pill, Stepper } = window.TransitionTrailsDesignSystem_335df4;

function Home({ onNav }) {
  const { Icon } = window.TT_Site;
  const stats = [
    ['180+', 'Learners guided'],
    ['42', 'Nonprofit partners'],
    ['91%', 'Placed within 6 months'],
  ];
  const programs = [
    ['Foundations Trail', 'teal', 'Post-certification fundamentals — turn what you learned into supervised, real-world practice.'],
    ['Guided Trail', 'green', 'Mentored project work with a nonprofit partner. Build a portfolio of verifiable experience.'],
    ['Trail of Mastery', 'gray', 'Advanced engagements and applied judgment. Opens Fall 2026 — join the waitlist.'],
  ];
  return (
    <div style={{ fontFamily: 'var(--tt-font-body)', color: 'var(--tt-text)' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, var(--tt-sky-100), var(--tt-trail-light))', padding: '72px 40px 64px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <Pill tone="green">Salesforce workforce development</Pill>
            <h1 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '46px', lineHeight: 1.1, color: 'var(--tt-heading)', margin: '18px 0 16px' }}>Find your trail into a Salesforce career.</h1>
            <p style={{ fontSize: '18px', lineHeight: 1.6, maxWidth: '520px', margin: '0 0 28px' }}>You earned the certification. We help you build the verifiable, on-the-job experience employers actually ask for — through supervised project work and expert mentorship.</p>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <Button variant="amber" size="lg" onClick={() => onNav('involved')}>Take the Next Step →</Button>
              <Button variant="secondary" size="lg" onClick={() => onNav('programs')}>View All Trails</Button>
            </div>
          </div>
          <div style={{ height: '320px', borderRadius: 'var(--tt-radius-lg)', background: 'linear-gradient(135deg, var(--tt-green-300), var(--tt-deep-teal))', display: 'flex', alignItems: 'flex-end', padding: '22px', boxShadow: 'var(--tt-shadow-card)' }}>
            <span style={{ fontFamily: 'var(--tt-font-accent)', fontWeight: 600, fontSize: '30px', color: '#fff' }}>real work, real mentorship</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
        {stats.map(([n, l]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '40px', color: 'var(--tt-trail-green)' }}>{n}</div>
            <div style={{ fontSize: '14px', color: 'var(--tt-slate)' }}>{l}</div>
          </div>
        ))}
      </section>

      {/* How it works */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--tt-border)', borderBottom: '1px solid var(--tt-border)', padding: '56px 40px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '32px', color: 'var(--tt-heading)', margin: '0 0 8px', textAlign: 'center' }}>The trail, step by step</h2>
          <p style={{ textAlign: 'center', margin: '0 0 40px', fontSize: '16px' }}>Every step counts. We celebrate momentum over perfection.</p>
          <Stepper steps={['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate']} current={2} />
        </div>
      </section>

      {/* Programs */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '56px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px' }}>
          <h2 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '32px', color: 'var(--tt-heading)', margin: 0 }}>Choose your trail</h2>
          <Button variant="ghost" onClick={() => onNav('programs')}>View All Trails →</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {programs.map(([title, tone, body]) => (
            <Card key={title} title={title} media style={{ maxWidth: 'none' }}
              footer={<a onClick={() => onNav('programs')} style={{ color: 'var(--tt-link)', textDecoration: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Explore trail →</a>}>
              <div style={{ marginBottom: '10px' }}><Pill tone={tone}>{tone === 'gray' ? 'Coming Soon' : 'Enrolling'}</Pill></div>
              {body}
            </Card>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: 'var(--tt-trail-green)', padding: '56px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '30px', color: '#fff', margin: '0 0 12px' }}>Ready to take the next step?</h2>
        <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '16px', margin: '0 0 24px' }}>Applications for the Guided Trail are open now.</p>
        <Button variant="amber" size="lg" onClick={() => onNav('involved')}>Start your application →</Button>
      </section>
    </div>
  );
}

Object.assign(window, { TT_Home: Home });
