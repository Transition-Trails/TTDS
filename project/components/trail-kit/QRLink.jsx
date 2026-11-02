import React from 'react';

/**
 * Real, scannable QR code for a Trail Kit page — links to a Build With Me video,
 * a template download, or a resource. Encodes the URL client-side via the
 * `qrcode-generator` UMD global (`window.qrcode`); shows a labeled placeholder
 * frame if the library has not loaded (e.g. offline print preview).
 */
export function QRLink({
  url,
  label,
  caption,
  size = 96,
  tone = 'clay',
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

  const ink = tone === 'teal' ? 'var(--tt-deep-teal)' : 'var(--tt-clay-700)';

  return (
    <a
      href={url || undefined}
      target="_blank"
      rel="noreferrer"
      style={{ display: 'flex', gap: '11px', alignItems: 'flex-start', fontFamily: 'var(--tt-font-body)', color: 'inherit', textDecoration: 'none', ...style }}
      {...rest}
    >
      <div style={{
        width: size + 'px', height: size + 'px', flexShrink: 0,
        border: '1px solid var(--tt-rule-strong)', borderRadius: '6px',
        background: '#fff', padding: '5px', boxSizing: 'border-box',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {dataUrl
          ? <img src={dataUrl} alt={label ? 'QR code — ' + label : 'QR code'} style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }} />
          : <span style={{ fontSize: '7pt', color: '#9AA09D', textAlign: 'center', lineHeight: 1.3 }}>QR<br />{url ? 'loading' : 'no link'}</span>}
      </div>
      {(label || caption) && (
        <div style={{ paddingTop: '2px', maxWidth: '160px' }}>
          {label && <div style={{ fontFamily: 'var(--tt-font-heading)', fontWeight: 600, fontSize: 'var(--tt-kit-small, 9.5pt)', color: ink, lineHeight: 1.3 }}>{label}</div>}
          {caption && <div style={{ fontSize: '8.5pt', color: 'var(--tt-text)', lineHeight: 1.4, marginTop: '3px' }}>{caption}</div>}
          <div style={{ fontSize: '7pt', color: '#9AA09D', marginTop: '4px', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{String(url).replace(/^https?:\/\//, '').split('/')[0]}</div>
        </div>
      )}
    </a>
  );
}
