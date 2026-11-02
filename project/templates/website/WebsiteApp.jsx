/* SiteChrome.jsx */
;(function(){
/* Transition Trails — website shared chrome: Icon, Header, Footer.
   Exports to window.TT_Site so sibling babel scripts can use them. */

function Icon({ name, size = 20, color = 'currentColor', style }) {
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

})();

/* Home.jsx */
;(function(){
/* Transition Trails — website Home screen. Uses window.TransitionTrailsDesignSystem_335df4 + TT_Site. */

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
            <window.TransitionTrailsDesignSystem_335df4.Pill tone="green">Salesforce workforce development</window.TransitionTrailsDesignSystem_335df4.Pill>
            <h1 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '46px', lineHeight: 1.1, color: 'var(--tt-heading)', margin: '18px 0 16px' }}>Find your trail into a Salesforce career.</h1>
            <p style={{ fontSize: '18px', lineHeight: 1.6, maxWidth: '520px', margin: '0 0 28px' }}>You earned the certification. We help you build the verifiable, on-the-job experience employers actually ask for — through supervised project work and expert mentorship.</p>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <window.TransitionTrailsDesignSystem_335df4.Button variant="amber" size="lg" onClick={() => onNav('involved')}>Take the Next Step →</window.TransitionTrailsDesignSystem_335df4.Button>
              <window.TransitionTrailsDesignSystem_335df4.Button variant="secondary" size="lg" onClick={() => onNav('programs')}>View All Trails</window.TransitionTrailsDesignSystem_335df4.Button>
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
          <window.TransitionTrailsDesignSystem_335df4.Stepper steps={['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate']} current={2} />
        </div>
      </section>

      {/* Programs */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '56px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px' }}>
          <h2 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '32px', color: 'var(--tt-heading)', margin: 0 }}>Choose your trail</h2>
          <window.TransitionTrailsDesignSystem_335df4.Button variant="ghost" onClick={() => onNav('programs')}>View All Trails →</window.TransitionTrailsDesignSystem_335df4.Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {programs.map(([title, tone, body]) => (
            <window.TransitionTrailsDesignSystem_335df4.Card key={title} title={title} media style={{ maxWidth: 'none' }}
              footer={<a onClick={() => onNav('programs')} style={{ color: 'var(--tt-link)', textDecoration: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Explore trail →</a>}>
              <div style={{ marginBottom: '10px' }}><window.TransitionTrailsDesignSystem_335df4.Pill tone={tone}>{tone === 'gray' ? 'Coming Soon' : 'Enrolling'}</window.TransitionTrailsDesignSystem_335df4.Pill></div>
              {body}
            </window.TransitionTrailsDesignSystem_335df4.Card>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: 'var(--tt-trail-green)', padding: '56px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 700, fontSize: '30px', color: '#fff', margin: '0 0 12px' }}>Ready to take the next step?</h2>
        <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '16px', margin: '0 0 24px' }}>Applications for the Guided Trail are open now.</p>
        <window.TransitionTrailsDesignSystem_335df4.Button variant="amber" size="lg" onClick={() => onNav('involved')}>Start your application →</window.TransitionTrailsDesignSystem_335df4.Button>
      </section>
    </div>
  );
}

Object.assign(window, { TT_Home: Home });

})();

/* Programs.jsx */
;(function(){
/* Transition Trails — website Programs screen. */

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
          <window.TransitionTrailsDesignSystem_335df4.Pill tone="teal">Programs</window.TransitionTrailsDesignSystem_335df4.Pill>
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
                  <window.TransitionTrailsDesignSystem_335df4.Pill tone={r.tone}>{r.status}</window.TransitionTrailsDesignSystem_335df4.Pill>
                  <window.TransitionTrailsDesignSystem_335df4.Pill tone="gray">{r.len}</window.TransitionTrailsDesignSystem_335df4.Pill>
                </div>
                <h3 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '23px', color: 'var(--tt-heading)', margin: '0 0 6px' }}>{r.title}</h3>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, maxWidth: '540px' }}>{r.body}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '150px' }}>
                {r.status === 'Coming Soon'
                  ? <window.TransitionTrailsDesignSystem_335df4.Button variant="secondary" onClick={() => onNav('involved')}>Join waitlist</window.TransitionTrailsDesignSystem_335df4.Button>
                  : <window.TransitionTrailsDesignSystem_335df4.Button variant="primary" onClick={() => onNav('involved')}>Apply now</window.TransitionTrailsDesignSystem_335df4.Button>}
                <window.TransitionTrailsDesignSystem_335df4.Button variant="ghost" onClick={() => onNav('programs')}>Details →</window.TransitionTrailsDesignSystem_335df4.Button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '32px' }}>
          <window.TransitionTrailsDesignSystem_335df4.Alert tone="info" title="For nonprofits">Partner with us to host a supervised project engagement — build capacity while a learner gains critical experience.</window.TransitionTrailsDesignSystem_335df4.Alert>
        </div>
      </section>

      <section style={{ background: '#fff', borderTop: '1px solid var(--tt-border)', padding: '48px 40px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '28px', color: 'var(--tt-heading)', margin: '0 0 28px' }}>What the Guided Trail looks like</h2>
          <window.TransitionTrailsDesignSystem_335df4.Stepper steps={['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate']} current={0} />
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { TT_Programs: Programs });

})();

/* GetInvolved.jsx */
;(function(){
/* Transition Trails — website Get Involved / apply screen with a working form. */

function GetInvolved() {
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');

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
                <window.TransitionTrailsDesignSystem_335df4.Pill tone={tone}>{t}</window.TransitionTrailsDesignSystem_335df4.Pill>
                <p style={{ margin: '10px 0 0', fontSize: '15px', lineHeight: 1.5 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--tt-border)', borderRadius: 'var(--tt-radius-lg)', padding: '32px', boxShadow: 'var(--tt-shadow-soft)' }}>
          <h3 style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: '22px', color: 'var(--tt-heading)', margin: '0 0 6px' }}>Start your application</h3>
          <p style={{ margin: '0 0 22px', fontSize: '14px' }}>It takes about two minutes. No commitment yet.</p>
          {sent ? (
            <window.TransitionTrailsDesignSystem_335df4.Alert tone="success" title="Application received">Welcome to the trail, {name || 'friend'}! We'll be in touch within two business days.</window.TransitionTrailsDesignSystem_335df4.Alert>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <window.TransitionTrailsDesignSystem_335df4.Input label="Full name" value={name} onChange={(e) => setName(e.target.value)} error={err} style={{ maxWidth: 'none' }} />
              <window.TransitionTrailsDesignSystem_335df4.Input label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" help="We'll only use this to send trail updates." style={{ maxWidth: 'none' }} />
              <window.TransitionTrailsDesignSystem_335df4.Input label="Which trail interests you?" placeholder="Foundations / Guided / Not sure yet" style={{ maxWidth: 'none' }} />
              <window.TransitionTrailsDesignSystem_335df4.Button variant="amber" size="lg" type="submit">Take the Next Step →</window.TransitionTrailsDesignSystem_335df4.Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { TT_GetInvolved: GetInvolved });

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
  const { Header, Footer } = window.TT_Site;
  const [screen, setScreen] = React.useState('home');
  const nav = (s) => { setScreen(s); window.scrollTo({ top: 0 }); };
  const Screen = { home: window.TT_Home, programs: window.TT_Programs, involved: window.TT_GetInvolved }[screen] || window.TT_Home;
  if (!ready) return null;
  return (
    <div>
      <Header current={screen} onNav={nav} />
      <Screen onNav={nav} />
      <Footer onNav={nav} />
    </div>
  );
}
window.TT_SiteApp = App;
})();
