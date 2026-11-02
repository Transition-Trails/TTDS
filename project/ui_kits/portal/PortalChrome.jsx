/* Transition Trails — Trail OS shared chrome (Experience Cloud style).
   Teal top bar + left sidebar. Exports to window.TT_Portal. */
const { useEffect, useRef } = React;

function PIcon({ name, size = 20, color = 'currentColor' }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, stroke: color, 'stroke-width': 1.9 } });
    }
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
