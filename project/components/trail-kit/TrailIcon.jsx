import React from 'react';

const SRC = 'https://cdn.jsdelivr.net/npm/lucide@0.462.0/dist/umd/lucide.min.js';
let loading = null;
const waiters = new Set();

function pascal(name) {
  return String(name)
    .replace(/[-_ ]+([a-z0-9])/g, (_, c) => c.toUpperCase())
    .replace(/^([a-z])/, (_, c) => c.toUpperCase());
}

function ensure() {
  if (typeof window === 'undefined') return null;
  if (window.lucide && window.lucide.icons) return window.lucide.icons;
  if (!loading) {
    loading = new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = SRC;
      s.async = true;
      s.onload = () => resolve(window.lucide && window.lucide.icons);
      s.onerror = () => resolve(null);
      document.head.appendChild(s);
    }).then((icons) => {
      waiters.forEach((fn) => fn());
      waiters.clear();
      return icons;
    });
  }
  return null;
}

/* Lucide ships each icon as an IconNode tree. Depending on build, the root is
   either the <svg> wrapper or a bare list of children — accept both. */
function childrenOf(node) {
  if (!node) return null;
  if (Array.isArray(node) && typeof node[0] === 'string' && node[0].toLowerCase() === 'svg') {
    return Array.isArray(node[2]) ? node[2] : [];
  }
  return Array.isArray(node) ? node : [];
}

function toElements(nodes) {
  return (nodes || []).map((n, i) => {
    if (!Array.isArray(n)) return null;
    const [tag, attrs, kids] = n;
    const props = { key: i };
    Object.entries(attrs || {}).forEach(([k, v]) => {
      const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      props[camel === 'class' ? 'className' : camel] = v;
    });
    const inner = Array.isArray(kids) && kids.length ? toElements(kids) : null;
    return React.createElement(tag, props, inner);
  }).filter(Boolean);
}

/**
 * Inline Lucide icon, loaded from the pinned CDN build. Renders at the current
 * text color with a stroke weight tuned for print, so icons sit beside a caps
 * label without competing with it. No emoji, no hand-drawn paths.
 */
export function TrailIcon({ name, size = 14, strokeWidth = 1.9, color = 'currentColor', style, ...rest }) {
  const [, bump] = React.useReducer((n) => n + 1, 0);
  const icons = ensure();

  React.useEffect(() => {
    if (icons) return undefined;
    waiters.add(bump);
    return () => waiters.delete(bump);
  }, [icons, bump]);

  const px = typeof size === 'number' ? `${size}px` : size;
  const box = {
    width: px, height: px, flexShrink: 0, display: 'inline-block',
    verticalAlign: '-0.14em', ...style,
  };
  if (!icons) return <span aria-hidden="true" style={box} {...rest} />;

  const node = icons[pascal(name)] || icons[name];
  const kids = toElements(childrenOf(node));
  if (!kids.length) return <span aria-hidden="true" style={box} {...rest} />;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" style={box} {...rest}
    >{kids}</svg>
  );
}
