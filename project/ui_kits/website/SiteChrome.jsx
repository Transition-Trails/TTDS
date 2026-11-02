/* Transition Trails — website shared chrome: Icon, Header, Footer.
   Exports to window.TT_Site so sibling babel scripts can use them. */
const { useEffect, useRef } = React;

function Icon({ name, size = 20, color = 'currentColor', style }) {
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
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0, ...style }} />;
}

function Header({ current, onNav }) {
  const links = [
    ['home', 'Home'],
    ['programs', 'Programs'],
    ['involved', 'Get Involved'],
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 40px', background: 'var(--tt-deep-teal)',
      fontFamily: 'var(--tt-font-body)',
    }}>
      <button onClick={() => onNav('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1px' }}>
        <span style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '20px', color: '#fff', letterSpacing: '.01em' }}>Transition Trails</span>
        <span style={{ fontSize: '10px', color: 'var(--tt-sky-blue)', letterSpacing: '.14em', textTransform: 'uppercase' }}>Bridging the experience gap</span>
      </button>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
        {links.map(([id, label]) => (
          <button key={id} onClick={() => onNav(id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--tt-font-body)', fontSize: '15px', fontWeight: current === id ? 600 : 400,
            color: current === id ? '#fff' : 'rgba(255,255,255,.82)',
            borderBottom: current === id ? '2px solid var(--tt-sun-amber)' : '2px solid transparent',
            padding: '4px 0',
          }}>{label}</button>
        ))}
        <button onClick={() => onNav('involved')} style={{
          fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '14px',
          background: 'var(--tt-sun-amber)', color: 'var(--tt-charcoal)', border: 'none',
          padding: '10px 20px', borderRadius: 'var(--tt-radius-md)', cursor: 'pointer',
          boxShadow: 'var(--tt-shadow-amber)',
        }}>Donate</button>
      </nav>
    </header>
  );
}

function Footer({ onNav }) {
  const cols = [
    ['Programs', ['Foundations Trail', 'Guided Trail', 'Trail of Mastery', 'For Nonprofits']],
    ['Organization', ['Our Mission', 'Impact & Evidence', 'Team', 'Governance']],
    ['Community', ['Volunteer', 'Partner With Us', 'Notes from the Trail', 'Digital Compass']],
  ];
  return (
    <footer style={{ background: 'var(--tt-charcoal)', color: 'rgba(255,255,255,.72)', padding: '48px 40px 32px', fontFamily: 'var(--tt-font-body)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '32px', maxWidth: '1120px', margin: '0 auto' }}>
        <div>
          <div style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '18px', color: '#fff', marginBottom: '10px' }}>Transition Trails</div>
          <p style={{ fontSize: '13.5px', lineHeight: 1.6, maxWidth: '260px', margin: 0 }}>Empowering individuals and organizations by bridging the experience gap through education, mentorship, and hands-on work.</p>
        </div>
        {cols.map(([title, items]) => (
          <div key={title}>
            <div style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '13px', color: '#fff', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '.06em' }}>{title}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {items.map((it) => <li key={it}><a onClick={() => onNav && onNav('home')} style={{ color: 'rgba(255,255,255,.72)', textDecoration: 'none', fontSize: '13.5px', cursor: 'pointer' }}>{it}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: '1120px', margin: '32px auto 0', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,.14)', fontSize: '12.5px', display: 'flex', justifyContent: 'space-between' }}>
        <span>© 2026 Transition Trails · transitiontrails.org</span>
        <span>Angela Landrith, Founder &amp; CEO</span>
      </div>
    </footer>
  );
}

Object.assign(window, { TT_Site: { Icon, Header, Footer } });
