/* Transition Trails — Trail OS Dashboard. */
const { Button, Card, Pill, Alert, Stepper } = window.TransitionTrailsDesignSystem_335df4;

function Dashboard({ onNav }) {
  const { PIcon } = window.TT_Portal;
  const tasks = [
    ['Submit project scope doc', 'Due Fri', 'amber'],
    ['Mentor check-in — Priya', 'Tomorrow 2pm', 'teal'],
    ['Complete accessibility module', 'This week', 'gray'],
  ];
  return (
    <div style={{ padding: '32px 36px', fontFamily: 'var(--tt-font-body)', color: 'var(--tt-text)', flex: 1, overflow: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '30px', color: 'var(--tt-heading)', margin: '0 0 4px' }}>Welcome back, Jordan.</h1>
          <p style={{ margin: 0, fontSize: '15px' }}>You're on the <b style={{ color: 'var(--tt-heading)' }}>Guided Trail</b> — keep the momentum going.</p>
        </div>
        <Button variant="amber" onClick={() => onNav('program')}>Log project hours →</Button>
      </div>

      {/* Progress */}
      <div style={{ background: '#fff', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-lg)', padding: '26px 28px', margin: '24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
          <h2 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '19px', color: 'var(--tt-heading)', margin: 0 }}>Your trail progress</h2>
          <Pill tone="green">Stage 3 of 5</Pill>
        </div>
        <Stepper steps={['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate']} current={2} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px' }}>
        {/* Tasks */}
        <div style={{ background: '#fff', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-lg)', padding: '24px' }}>
          <h3 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '17px', color: 'var(--tt-heading)', margin: '0 0 16px' }}>Next milestones</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {tasks.map(([t, due, tone]) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 16px', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-md)' }}>
                <PIcon name="circle" size={18} color="var(--tt-warm-gray)" />
                <span style={{ flex: 1, fontSize: '14.5px', color: 'var(--tt-heading)' }}>{t}</span>
                <Pill tone={tone}>{due}</Pill>
              </div>
            ))}
          </div>
        </div>

        {/* Side column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Alert tone="info" title="Mentor note">Priya left feedback on your data model. Review before Friday's check-in.</Alert>
          <div style={{ background: '#fff', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-lg)', padding: '20px 22px' }}>
            <div style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '10.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--tt-deep-teal)', marginBottom: '14px' }}>Your workspace</div>
            {[
              ['message-square', 'Slack', '#guided-trail-spring · 4 unread'],
              ['database', 'Salesforce Dev Org', 'jordan.r@trailos.dev · active'],
            ].map(([icon, label, meta]) => (
              <a key={label} href="#" onClick={(e) => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', textDecoration: 'none', color: 'inherit', borderTop: '1px solid var(--tt-border)' }}>
                <PIcon name={icon} size={18} color="var(--tt-deep-teal)" />
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: 'block', fontSize: '14px', color: 'var(--tt-heading)', fontWeight: 600 }}>{label}</span>
                  <span style={{ display: 'block', fontSize: '12px', color: 'var(--tt-slate)', marginTop: '1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{meta}</span>
                </span>
                <PIcon name="external-link" size={14} color="var(--tt-slate)" />
              </a>
            ))}
          </div>
          <div style={{ background: 'var(--tt-green-100)', border: '1px solid var(--tt-green-300)', borderRadius: 'var(--tt-radius-lg)', padding: '22px' }}>
            <div style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '32px', color: 'var(--tt-green-700)' }}>68 hrs</div>
            <div style={{ fontSize: '14px', color: 'var(--tt-slate)', marginBottom: '14px' }}>Supervised experience logged</div>
            <Button variant="secondary" size="sm" onClick={() => onNav('program')}>View my trail</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TT_Dashboard: Dashboard });
