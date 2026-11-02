import React from 'react';

/**
 * External resource row for a Trail Kit — a scannable QR, the resource name and
 * provider, one line on why it is worth your time, and the plain URL. Set
 * `affiliate` when the link earns Transition Trails a commission; the row then
 * carries a visible marker, because disclosure is a trust question, not a legal
 * footnote. Pair a list of these with a single disclosure line on the page.
 */
export function ResourceLink({
  name,
  provider,
  url,
  why,
  kind = 'Guide',
  affiliate = false,
  free = false,
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
      setDataUrl(qr.createDataURL(7, 0));
    } catch (e) {
      setDataUrl(null);
    }
  }, [url]);

  return (
    <a href={url || undefined} target="_blank" rel="noreferrer" style={{
      color: 'inherit', textDecoration: 'none',
      display: 'flex', gap: '13px', alignItems: 'flex-start',
      padding: '11px 0', borderTop: '1px solid var(--tt-rule)',
      fontFamily: 'var(--tt-font-body)', breakInside: 'avoid', ...style,
    }} {...rest}>
      <div style={{
        width: '74px', height: '74px', flexShrink: 0,
        border: '1px solid var(--tt-rule-strong)', borderRadius: '5px',
        background: '#fff', padding: '4px', boxSizing: 'border-box',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {dataUrl
          ? <img src={dataUrl} alt={'QR code — ' + (name || 'resource')} style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }} />
          : <span style={{ fontSize: '6.5pt', color: '#9AA09D' }}>QR</span>}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap', marginBottom: '3px' }}>
          <span style={{
            fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
            fontSize: '11pt', color: 'var(--tt-heading)', lineHeight: 1.25,
          }}>{name}</span>
          <span style={{
            fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
            fontSize: '7pt', letterSpacing: '.09em', textTransform: 'uppercase',
            color: 'var(--tt-deep-teal)', border: '1px solid var(--tt-rule-strong)',
            borderRadius: '999px', padding: '2px 7px',
          }}>{kind}</span>
          {free && (
            <span style={{
              fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
              fontSize: '7pt', letterSpacing: '.09em', textTransform: 'uppercase',
              color: 'var(--tt-green-700)', background: 'var(--tt-green-100)',
              borderRadius: '999px', padding: '2px 7px',
            }}>Free</span>
          )}
          {affiliate && (
            <span style={{
              fontFamily: 'var(--tt-font-heading)', fontWeight: 600,
              fontSize: '7pt', letterSpacing: '.09em', textTransform: 'uppercase',
              color: 'var(--tt-clay-700)', background: 'var(--tt-clay-100)',
              borderRadius: '999px', padding: '2px 7px',
            }}>Affiliate link</span>
          )}
        </div>
        {provider && (
          <div style={{ fontSize: '8.5pt', color: '#8C857A', marginBottom: '4px' }}>{provider}</div>
        )}
        {why && (
          <div style={{ fontSize: '9.5pt', lineHeight: 1.5, color: 'var(--tt-text)' }}>{why}</div>
        )}
        {url && (
          <div style={{ fontSize: '7pt', color: '#A39B8E', marginTop: '4px', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{String(url).replace(/^https?:\/\//, '').split('/')[0]}</div>
        )}
      </div>
    </a>
  );
}
