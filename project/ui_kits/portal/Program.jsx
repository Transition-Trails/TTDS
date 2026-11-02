/* Transition Trails — Trail OS Program (My Trail) detail. */
const { Button, Card, Pill, Alert, Stepper } = window.TransitionTrailsDesignSystem_335df4;

function Program({ onNav }) {
  const { PIcon } = window.TT_Portal;
  const modules = [
    ['Discovery & scoping', 'done', 'Define the partner problem and success criteria.'],
    ['Data model & build', 'current', 'Configure objects, flows, and dashboards with mentor review.'],
    ['User testing', 'upcoming', 'Validate with the partner and iterate.'],
    ['Handoff & documentation', 'upcoming', 'Deliver a documented, maintainable solution.'],
  ];
  const dot = {
    done: { background: 'var(--tt-trail-green)', color: '#fff', glyph: 'check' },
    current: { background: 'var(--tt-sun-amber)', color: 'var(--tt-charcoal)', glyph: 'dot' },
    upcoming: { background: '#fff', color: '#9AA09D', glyph: 'dot' },
  };
  return (
    <div style={{ padding: '32px 36px', fontFamily: 'var(--tt-font-body)', color: 'var(--tt-text)', flex: 1, overflow: 'auto' }}>
      <button onClick={() => onNav('dashboard')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--tt-link)', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', padding: 0, marginBottom: '16px' }}>
        <PIcon name="arrow-left" size={16} color="var(--tt-trail-green)" /> Back to dashboard
      </button>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <Pill tone="green">Guided Trail</Pill>
        <Pill tone="teal">Partner: Riverside Food Bank</Pill>
      </div>
      <h1 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '30px', color: 'var(--tt-heading)', margin: '0 0 20px' }}>Volunteer intake redesign</h1>

      <div style={{ background: '#fff', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-lg)', padding: '26px 28px', marginBottom: '24px' }}>
        <Stepper steps={['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate']} current={2} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '20px', color: 'var(--tt-heading)', margin: '0 0 16px' }}>Project modules</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {modules.map(([t, state, desc]) => {
              const d = dot[state];
              return (
                <div key={t} style={{ display: 'flex', gap: '16px', background: '#fff', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-md)', padding: '18px 20px', boxShadow: state === 'current' ? 'var(--tt-shadow-amber)' : 'none' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '999px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: state === 'upcoming' ? '1.5px solid var(--tt-warm-gray)' : 'none', background: d.background, color: d.color }}>
                    {d.glyph === 'check' ? <PIcon name="check" size={16} color="#fff" /> : <span style={{ width: '7px', height: '7px', borderRadius: '999px', background: d.color, display: 'block' }} />}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h4 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '16px', color: 'var(--tt-heading)', margin: 0 }}>{t}</h4>
                      {state === 'current' && <Pill tone="amber">In progress</Pill>}
                    </div>
                    <p style={{ margin: '5px 0 0', fontSize: '14px', lineHeight: 1.5 }}>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ background: '#fff', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-lg)', padding: '22px' }}>
            <h4 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '16px', color: 'var(--tt-heading)', margin: '0 0 14px' }}>Your mentor</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '999px', background: 'var(--tt-deep-teal)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--tt-font-heading)', fontWeight: 600 }}>PA</div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--tt-heading)', fontSize: '15px' }}>Priya A.</div>
                <div style={{ fontSize: '13px' }}>Salesforce Architect · 9 yrs</div>
              </div>
            </div>
            <Button variant="primary" size="sm" style={{ width: '100%', justifyContent: 'center' }}>Message mentor</Button>
          </div>
          <Alert tone="success" title="On track">You've logged 68 of 80 required project hours.</Alert>
          <Button variant="amber" onClick={() => onNav('dashboard')} style={{ justifyContent: 'center' }}>Log today's hours →</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TT_Program: Program });
