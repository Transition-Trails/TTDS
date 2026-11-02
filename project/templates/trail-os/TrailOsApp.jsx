/* PortalChrome.jsx */
;(function(){
/* Transition Trails — Trail OS shared chrome (Experience Cloud style).
   Teal top bar + left sidebar. Exports to window.TT_Portal. */

function PIcon({ name, size = 20, color = 'currentColor' }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    const draw = () => {
      if (cancelled) return;
      if (!window.lucide || !ref.current) { setTimeout(draw, 50); return; }
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, stroke: color, 'stroke-width': 1.9 } });
    };
    draw();
    return () => { cancelled = true; };
  }, [name, size, color]);
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0 }} />;
}

function TopBar() {
  return (
    <header style={{ height: '58px', background: 'var(--tt-deep-teal)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', fontFamily: 'var(--tt-font-body)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <span style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '17px', color: '#fff' }}>Transition Trails</span>
        <span style={{ fontSize: '12px', color: 'var(--tt-sky-blue)', borderLeft: '1px solid rgba(255,255,255,.25)', paddingLeft: '14px', whiteSpace: 'nowrap', flexShrink: 0 }}>Trail OS</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px', color: 'rgba(255,255,255,.9)' }}>
        <PIcon name="search" size={18} />
        <PIcon name="bell" size={18} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '999px', background: 'var(--tt-sun-amber)', color: 'var(--tt-charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '13px' }}>JR</div>
          <span style={{ fontSize: '14px', color: '#fff' }}>Jordan R.</span>
        </div>
      </div>
    </header>
  );
}

function Sidebar({ current, onNav }) {
  const items = [
    ['dashboard', 'Dashboard', 'layout-dashboard'],
    ['program', 'My Trail', 'route'],
    ['projects', 'Projects', 'folder-kanban'],
    ['mentors', 'Mentors', 'users'],
    ['resources', 'Resources', 'book-open'],
  ];
  /* Trail OS also hands the learner their two working environments. These leave
     the portal, so they are grouped apart and marked with an external glyph. */
  const workspace = [
    ['slack', 'Slack', 'message-square', 'Cohort channels'],
    ['devorg', 'Dev Org', 'database', 'Your Salesforce'],
  ];
  return (
    <nav style={{ width: '224px', background: '#fff', borderRight: '1px solid var(--tt-border)', padding: '20px 14px', fontFamily: 'var(--tt-font-body)', flexShrink: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {items.map(([id, label, icon]) => {
          const active = current === id;
          return (
            <button key={id} onClick={() => onNav(id === 'program' ? 'program' : 'dashboard')} style={{
              display: 'flex', alignItems: 'center', gap: '12px', width: '100%',
              padding: '11px 14px', border: 'none', cursor: 'pointer', textAlign: 'left',
              borderRadius: 'var(--tt-radius-md)',
              background: active ? 'var(--tt-green-100)' : 'transparent',
              color: active ? 'var(--tt-green-700)' : 'var(--tt-slate)',
              fontWeight: active ? 600 : 400, fontSize: '14.5px',
            }}>
              <PIcon name={icon} size={19} color={active ? 'var(--tt-trail-green)' : 'var(--tt-slate)'} />
              {label}
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: '22px', paddingTop: '16px', borderTop: '1px solid var(--tt-border)' }}>
        <div style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '10.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--tt-slate)', padding: '0 14px', marginBottom: '8px' }}>Workspace</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {workspace.map(([id, label, icon, sub]) => (
            <a key={id} href="#" onClick={(e) => e.preventDefault()} style={{
              display: 'flex', alignItems: 'center', gap: '12px', width: '100%',
              padding: '9px 14px', borderRadius: 'var(--tt-radius-md)',
              color: 'var(--tt-slate)', textDecoration: 'none',
            }}>
              <PIcon name={icon} size={19} color="var(--tt-slate)" />
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'block', fontSize: '14.5px', lineHeight: 1.2 }}>{label}</span>
                <span style={{ display: 'block', fontSize: '11.5px', color: 'var(--tt-slate)', marginTop: '1px' }}>{sub}</span>
              </span>
              <PIcon name="external-link" size={14} color="var(--tt-slate)" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

Object.assign(window, { TT_Portal: { PIcon, TopBar, Sidebar } });

})();

/* Dashboard.jsx */
;(function(){
/* Transition Trails — Trail OS Dashboard. */

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
        <window.TransitionTrailsDesignSystem_335df4.Button variant="amber" onClick={() => onNav('program')}>Log project hours →</window.TransitionTrailsDesignSystem_335df4.Button>
      </div>

      {/* Progress */}
      <div style={{ background: '#fff', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-lg)', padding: '26px 28px', margin: '24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
          <h2 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '19px', color: 'var(--tt-heading)', margin: 0 }}>Your trail progress</h2>
          <window.TransitionTrailsDesignSystem_335df4.Pill tone="green">Stage 3 of 5</window.TransitionTrailsDesignSystem_335df4.Pill>
        </div>
        <window.TransitionTrailsDesignSystem_335df4.Stepper steps={['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate']} current={2} />
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
                <window.TransitionTrailsDesignSystem_335df4.Pill tone={tone}>{due}</window.TransitionTrailsDesignSystem_335df4.Pill>
              </div>
            ))}
          </div>
        </div>

        {/* Side column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <window.TransitionTrailsDesignSystem_335df4.Alert tone="info" title="Mentor note">Priya left feedback on your data model. Review before Friday's check-in.</window.TransitionTrailsDesignSystem_335df4.Alert>
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
            <window.TransitionTrailsDesignSystem_335df4.Button variant="secondary" size="sm" onClick={() => onNav('program')}>View my trail</window.TransitionTrailsDesignSystem_335df4.Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TT_Dashboard: Dashboard });

})();

/* Program.jsx */
;(function(){
/* Transition Trails — Trail OS Program (My Trail) detail. */

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
        <window.TransitionTrailsDesignSystem_335df4.Pill tone="green">Guided Trail</window.TransitionTrailsDesignSystem_335df4.Pill>
        <window.TransitionTrailsDesignSystem_335df4.Pill tone="teal">Partner: Riverside Food Bank</window.TransitionTrailsDesignSystem_335df4.Pill>
      </div>
      <h1 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '30px', color: 'var(--tt-heading)', margin: '0 0 20px' }}>Volunteer intake redesign</h1>

      <div style={{ background: '#fff', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-lg)', padding: '26px 28px', marginBottom: '24px' }}>
        <window.TransitionTrailsDesignSystem_335df4.Stepper steps={['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate']} current={2} />
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
                      {state === 'current' && <window.TransitionTrailsDesignSystem_335df4.Pill tone="amber">In progress</window.TransitionTrailsDesignSystem_335df4.Pill>}
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
            <window.TransitionTrailsDesignSystem_335df4.Button variant="primary" size="sm" style={{ width: '100%', justifyContent: 'center' }}>Message mentor</window.TransitionTrailsDesignSystem_335df4.Button>
          </div>
          <window.TransitionTrailsDesignSystem_335df4.Alert tone="success" title="On track">You've logged 68 of 80 required project hours.</window.TransitionTrailsDesignSystem_335df4.Alert>
          <window.TransitionTrailsDesignSystem_335df4.Button variant="amber" onClick={() => onNav('dashboard')} style={{ justifyContent: 'center' }}>Log today's hours →</window.TransitionTrailsDesignSystem_335df4.Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TT_Program: Program });

})();

/* app wiring */
;(function(){
function App() {
  const [ready, setReady] = React.useState(!!window.TransitionTrailsDesignSystem_335df4);
  React.useEffect(() => {
    if (ready) return undefined;
    let cancelled = false;
    // ds-base.js appends the bundle script asynchronously; hold the first
    // render until the namespace exists. Keeps the path in ds-base.js alone.
    const check = () => {
      if (cancelled) return;
      if (window.TransitionTrailsDesignSystem_335df4) setReady(true);
      else setTimeout(check, 50);
    };
    check();
    return () => { cancelled = true; };
  }, [ready]);
  const { TopBar, Sidebar } = window.TT_Portal;
  const [screen, setScreen] = React.useState('dashboard');
  const nav = (s) => setScreen(s);
  const Screen = { dashboard: window.TT_Dashboard, program: window.TT_Program }[screen] || window.TT_Dashboard;
  if (!ready) return null;
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <Sidebar current={screen === 'program' ? 'program' : 'dashboard'} onNav={nav} />
        <Screen onNav={nav} />
      </div>
    </div>
  );
}
window.TT_PortalApp = App;
})();
