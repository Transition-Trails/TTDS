import React from 'react';

/**
 * The closing call-to-action panel for nonprofit-facing material. Always points
 * to the Digital Compass page — that is the single destination for partner
 * interest — and carries the one Sun Amber element permitted in this branch.
 * Renders a scannable QR when `window.qrcode` is available.
 */
export function CompassCTA({
  headline = 'Start with the Digital Compass',
  body,
  url = 'https://transitiontrails.org/compass',
  cta = 'Explore the Digital Compass',
  aside,
  style,
  ...rest
}) {
  const [dataUrl, setDataUrl] = React.useState(null);

  React.useEffect(() => {
    if (!url || typeof window === 'undefined' || !window.qrcode) return;
    try {
      const qr = window.qrcode(0, 'M');
      qr.addData(url);
      qr.make();
      setDataUrl(qr.createDataURL(8, 0));
    } catch (e) {
      setDataUrl(null);
    }
  }, [url]);

  return (
    <section style={{
      display: 'flex', gap: '22px', alignItems: 'stretch',
      background: 'var(--tt-deep-teal)', borderRadius: '10px',
      padding: '22px 24px', color: '#fff',
      fontFamily: 'var(--tt-font-body)', breakInside: 'avoid', ...style,
    }} {...rest}>
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
          fontSize: 'var(--tt-partner-h2, 20pt)', lineHeight: 1.25,
          margin: '0 0 9px', color: '#fff', textWrap: 'balance',
        }}>{headline}</h3>
        {body && (
          <p style={{
            margin: '0 0 16px', fontSize: 'var(--tt-partner-small, 10pt)',
            lineHeight: 1.55, color: 'rgba(255,255,255,.84)', maxWidth: '3.9in',
          }}>{body}</p>
        )}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'var(--tt-sun-amber)', color: 'var(--tt-charcoal)',
          fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
          fontSize: '10.5pt', padding: '10px 18px', borderRadius: '9px',
          whiteSpace: 'nowrap',
        }}>{cta} →</div>
        <div style={{ fontSize: '8pt', color: 'rgba(255,255,255,.66)', marginTop: '10px' }}>{url}</div>
      </div>
      <div style={{ width: '1px', background: 'rgba(255,255,255,.2)' }} />
      <a href={url || undefined} target="_blank" rel="noreferrer" style={{ width: '1.5in', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '9px', color: 'inherit', textDecoration: 'none' }}>
        <div style={{
          width: '1.14in', height: '1.14in', background: '#fff',
          borderRadius: '7px', padding: '6px', boxSizing: 'border-box',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {dataUrl
            ? <img src={dataUrl} alt="QR code — Digital Compass" style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }} />
            : <span style={{ fontSize: '7pt', color: '#9AA09D' }}>QR</span>}
        </div>
        <div style={{ fontSize: '8pt', lineHeight: 1.4, color: 'rgba(255,255,255,.76)', textAlign: 'center' }}>
          {aside || 'Scan to see current openings and how partnering works.'}
        </div>
      </a>
    </section>
  );
}
