/* @ds-bundle: {"format":4,"namespace":"TransitionTrailsDesignSystem_335df4","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"CompassCTA","sourcePath":"components/partner/CompassCTA.jsx"},{"name":"NeedRow","sourcePath":"components/partner/NeedRow.jsx"},{"name":"StatBlock","sourcePath":"components/partner/StatBlock.jsx"},{"name":"HumanGate","sourcePath":"components/penny/HumanGate.jsx"},{"name":"PennyFlag","sourcePath":"components/penny/PennyFlag.jsx"},{"name":"PennyMessage","sourcePath":"components/penny/PennyMessage.jsx"},{"name":"PENNY_MODES","sourcePath":"components/penny/PennyModeBadge.jsx"},{"name":"PennyModeBadge","sourcePath":"components/penny/PennyModeBadge.jsx"},{"name":"Objectives","sourcePath":"components/program/Objectives.jsx"},{"name":"ProgramBand","sourcePath":"components/program/ProgramBand.jsx"},{"name":"Rubric","sourcePath":"components/program/Rubric.jsx"},{"name":"SignOff","sourcePath":"components/program/SignOff.jsx"},{"name":"Alert","sourcePath":"components/status/Alert.jsx"},{"name":"Pill","sourcePath":"components/status/Pill.jsx"},{"name":"Stepper","sourcePath":"components/status/Stepper.jsx"},{"name":"ActionPlan","sourcePath":"components/trail-kit/ActionPlan.jsx"},{"name":"BuildStep","sourcePath":"components/trail-kit/BuildStep.jsx"},{"name":"CoachNote","sourcePath":"components/trail-kit/CoachNote.jsx"},{"name":"KitCode","sourcePath":"components/trail-kit/KitCode.jsx"},{"name":"KitMeta","sourcePath":"components/trail-kit/KitMeta.jsx"},{"name":"KitNote","sourcePath":"components/trail-kit/KitNote.jsx"},{"name":"NoteLines","sourcePath":"components/trail-kit/NoteLines.jsx"},{"name":"QRLink","sourcePath":"components/trail-kit/QRLink.jsx"},{"name":"ResourceLink","sourcePath":"components/trail-kit/ResourceLink.jsx"},{"name":"TabStrip","sourcePath":"components/trail-kit/TabStrip.jsx"},{"name":"TrailIcon","sourcePath":"components/trail-kit/TrailIcon.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"16840164dec5","components/content/Card.jsx":"a1d8d8ee5bc8","components/forms/Input.jsx":"7cf8422799d7","components/partner/CompassCTA.jsx":"96e48755d4fe","components/partner/NeedRow.jsx":"4c373fe7ed0b","components/partner/StatBlock.jsx":"50920db41f1f","components/penny/HumanGate.jsx":"6b222b3ec8bf","components/penny/PennyFlag.jsx":"6e532489edcb","components/penny/PennyMessage.jsx":"75931406872f","components/penny/PennyModeBadge.jsx":"44fe8f029dc7","components/program/Objectives.jsx":"eafeaf65eb18","components/program/ProgramBand.jsx":"1908cf2b6804","components/program/Rubric.jsx":"912992da1734","components/program/SignOff.jsx":"e8dc3b49fa1b","components/status/Alert.jsx":"3e2866600f11","components/status/Pill.jsx":"020bdfab7e54","components/status/Stepper.jsx":"7ebc989ce7a7","components/trail-kit/ActionPlan.jsx":"12ed3f49bb70","components/trail-kit/BuildStep.jsx":"dddc44aa11d1","components/trail-kit/CoachNote.jsx":"4952f0c2e1af","components/trail-kit/KitCode.jsx":"f977d76f94de","components/trail-kit/KitMeta.jsx":"7193e8dc687f","components/trail-kit/KitNote.jsx":"207595efc0a8","components/trail-kit/NoteLines.jsx":"523fa8ee16a4","components/trail-kit/QRLink.jsx":"1f8176866d77","components/trail-kit/ResourceLink.jsx":"3c454150039f","components/trail-kit/TabStrip.jsx":"8bd6960670f7","components/trail-kit/TrailIcon.jsx":"b23b89823b0d","guidelines/doc-page.js":"371bab66f42d","ui_kits/portal/Dashboard.jsx":"809393e14588","ui_kits/portal/PortalChrome.jsx":"7535163c1e01","ui_kits/portal/Program.jsx":"da487b6cd84d","ui_kits/website/GetInvolved.jsx":"7dc13cbb9b42","ui_kits/website/Home.jsx":"6a070b676e92","ui_kits/website/Programs.jsx":"7b61e0cfd107","ui_kits/website/SiteChrome.jsx":"dc2928b6eaef"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TransitionTrailsDesignSystem_335df4 = window.TransitionTrailsDesignSystem_335df4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '9px 18px',
    fontSize: '13px'
  },
  md: {
    padding: '13px 26px',
    fontSize: '15px'
  },
  lg: {
    padding: '16px 34px',
    fontSize: '17px'
  }
};

/**
 * Transition Trails button. Primary = Trail Green. Secondary = teal outline.
 * Amber = the single "Next Step" CTA per screen (use at most one). Ghost = text link.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const base = {
    fontFamily: "var(--tt-font-heading)",
    fontWeight: 600,
    borderRadius: 'var(--tt-radius-md)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    lineHeight: 1.1,
    whiteSpace: 'nowrap',
    transition: 'background .15s ease, color .15s ease, box-shadow .15s ease',
    ...(SIZES[size] || SIZES.md)
  };
  const variants = {
    primary: {
      background: 'var(--tt-trail-green)',
      color: '#fff'
    },
    secondary: {
      background: '#fff',
      color: 'var(--tt-deep-teal)',
      border: '1.5px solid var(--tt-deep-teal)'
    },
    amber: {
      background: 'var(--tt-sun-amber)',
      color: 'var(--tt-charcoal)',
      boxShadow: 'var(--tt-shadow-amber)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--tt-trail-green)',
      padding: `${SIZES[size].padding.split(' ')[0]} 8px`
    }
  };
  const disabledStyle = disabled ? {
    background: 'var(--tt-warm-gray)',
    color: '#9AA09D',
    boxShadow: 'none',
    border: 'none'
  } : null;
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--tt-green-700)'
    },
    secondary: {
      background: 'var(--tt-sky-100)'
    },
    amber: {
      background: 'var(--tt-amber-700)',
      color: '#fff'
    },
    ghost: {
      color: 'var(--tt-green-700)'
    }
  }[variant] : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...disabledStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Transition Trails content card. Optional media header (photo/illustration or
 * soft green-tint placeholder), Poppins title, supportive body, optional footer.
 * Lifts gently on hover.
 */
function Card({
  title,
  children,
  media,
  mediaSrc,
  footer,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--tt-surface)',
      border: '1px solid var(--tt-border)',
      borderRadius: 'var(--tt-radius-lg)',
      overflow: 'hidden',
      maxWidth: '320px',
      cursor: onClick ? 'pointer' : 'default',
      transform: hover ? 'translateY(-3px)' : 'none',
      boxShadow: hover ? 'var(--tt-shadow-card)' : 'none',
      transition: 'transform .15s ease, box-shadow .15s ease',
      ...style
    }
  }, rest), (media || mediaSrc) && /*#__PURE__*/React.createElement("div", {
    style: {
      height: '140px',
      background: mediaSrc ? `center/cover no-repeat url("${mediaSrc}")` : 'linear-gradient(135deg, var(--tt-green-100), var(--tt-green-300))'
    }
  }, !mediaSrc && media), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px'
    }
  }, title && /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-h4)',
      color: 'var(--tt-heading)',
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-body)',
      fontSize: 'var(--tt-body-sm)',
      lineHeight: 1.6,
      color: 'var(--tt-text)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Transition Trails text input with label and optional help/error message.
 * Green focus ring; errors pair Amber-700 text with a ⚠ glyph (never color alone).
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  help,
  error,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--tt-amber-700)' : focus ? 'var(--tt-trail-green)' : 'var(--tt-border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-body)',
      maxWidth: '360px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      fontWeight: 600,
      fontSize: '13.5px',
      color: 'var(--tt-heading)',
      marginBottom: '6px'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      fontFamily: 'var(--tt-font-body)',
      fontSize: '15px',
      color: 'var(--tt-heading)',
      padding: '11px 14px',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--tt-radius-md)',
      outline: 'none',
      background: disabled ? 'var(--tt-trail-light)' : '#fff',
      boxShadow: focus && !error ? 'var(--tt-focus-ring)' : 'none',
      transition: 'border-color .15s, box-shadow .15s',
      boxSizing: 'border-box'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      fontSize: '12.5px',
      color: 'var(--tt-amber-700)',
      marginTop: '6px',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u26A0"), /*#__PURE__*/React.createElement("span", null, error)) : help ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12.5px',
      color: '#7A807D',
      marginTop: '6px'
    }
  }, help) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/partner/CompassCTA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The closing call-to-action panel for nonprofit-facing material. Always points
 * to the Digital Compass page — that is the single destination for partner
 * interest — and carries the one Sun Amber element permitted in this branch.
 * Renders a scannable QR when `window.qrcode` is available.
 */
function CompassCTA({
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
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: 'flex',
      gap: '22px',
      alignItems: 'stretch',
      background: 'var(--tt-deep-teal)',
      borderRadius: '10px',
      padding: '22px 24px',
      color: '#fff',
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-partner-h2, 20pt)',
      lineHeight: 1.25,
      margin: '0 0 9px',
      color: '#fff',
      textWrap: 'balance'
    }
  }, headline), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 'var(--tt-partner-small, 10pt)',
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.84)',
      maxWidth: '3.9in'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--tt-sun-amber)',
      color: 'var(--tt-charcoal)',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '10.5pt',
      padding: '10px 18px',
      borderRadius: '9px',
      whiteSpace: 'nowrap'
    }
  }, cta, " \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '8pt',
      color: 'rgba(255,255,255,.66)',
      marginTop: '10px'
    }
  }, url)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '1px',
      background: 'rgba(255,255,255,.2)'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: url || undefined,
    target: "_blank",
    rel: "noreferrer",
    style: {
      width: '1.5in',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '9px',
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '1.14in',
      height: '1.14in',
      background: '#fff',
      borderRadius: '7px',
      padding: '6px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, dataUrl ? /*#__PURE__*/React.createElement("img", {
    src: dataUrl,
    alt: "QR code \u2014 Digital Compass",
    style: {
      width: '100%',
      height: '100%',
      imageRendering: 'pixelated'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '7pt',
      color: '#9AA09D'
    }
  }, "QR")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '8pt',
      lineHeight: 1.4,
      color: 'rgba(255,255,255,.76)',
      textAlign: 'center'
    }
  }, aside || 'Scan to see current openings and how partnering works.')));
}
Object.assign(__ds_scope, { CompassCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/partner/CompassCTA.jsx", error: String((e && e.message) || e) }); }

// components/partner/NeedRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Problem/answer pair for the nonprofit business case. The left column names a
 * constraint the reader recognizes in their own organization; the right column
 * says what supervised project capacity does about it. Recognition first, offer
 * second — never the reverse.
 */
function NeedRow({
  need,
  answer,
  outcome,
  n,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '0.32in 1fr 1fr',
      gap: '14px',
      padding: '13px 0',
      borderTop: '1px solid var(--tt-partner-rule)',
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: '12pt',
      color: 'var(--tt-partner-rule-strong)',
      lineHeight: 1.2
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-partner-caps, 8pt)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--tt-partner-ink-soft)',
      marginBottom: '5px'
    }
  }, "Sound familiar?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--tt-partner-small, 10pt)',
      lineHeight: 1.5,
      color: 'var(--tt-text)'
    }
  }, need)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-partner-caps, 8pt)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--tt-deep-teal)',
      marginBottom: '5px'
    }
  }, "What changes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--tt-partner-small, 10pt)',
      lineHeight: 1.5,
      color: 'var(--tt-text)'
    }
  }, answer), outcome && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '7px',
      fontSize: '9pt',
      lineHeight: 1.45,
      color: 'var(--tt-green-700)',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600
    }
  }, outcome)));
}
Object.assign(__ds_scope, { NeedRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/partner/NeedRow.jsx", error: String((e && e.message) || e) }); }

// components/partner/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Large statistic for nonprofit-facing material. Nonprofit decision-makers scan
 * before they read, so the number carries the argument and the caption qualifies
 * it. Always attach a `source` when the figure is not our own — an unsourced
 * number reads as marketing.
 */
function StatBlock({
  value,
  label,
  source,
  tone = 'teal',
  style,
  ...rest
}) {
  const ink = tone === 'green' ? 'var(--tt-trail-green)' : 'var(--tt-deep-teal)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: 'var(--tt-partner-stat, 34pt)',
      lineHeight: 1.3,
      color: ink,
      letterSpacing: '-.01em'
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--tt-partner-small, 10pt)',
      lineHeight: 1.45,
      color: 'var(--tt-text)',
      marginTop: '5px'
    }
  }, label), source && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '7.5pt',
      color: 'var(--tt-partner-ink-soft)',
      marginTop: '5px'
    }
  }, source));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/partner/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/penny/PennyModeBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PENNY_MODES = {
  coach: {
    label: 'Coach',
    posture: 'Socratic',
    bg: 'var(--tt-sky-100)',
    ink: 'var(--tt-deep-teal)',
    rule: 'var(--tt-deep-teal)',
    icon: 'compass'
  },
  coordinator: {
    label: 'Coordinator',
    posture: 'Action-oriented',
    bg: 'var(--tt-green-100)',
    ink: 'var(--tt-green-700)',
    rule: 'var(--tt-trail-green)',
    icon: 'list-checks'
  },
  quest: {
    label: 'Quest Guide',
    posture: 'Coaches, never solves',
    bg: 'var(--tt-amber-100)',
    ink: 'var(--tt-amber-700)',
    rule: 'var(--tt-sun-amber)',
    icon: 'flag'
  },
  liaison: {
    label: 'Client Liaison',
    posture: 'Professional, human-gated',
    bg: 'var(--tt-paper-alt)',
    ink: 'var(--tt-charcoal)',
    rule: 'var(--tt-rule-strong)',
    icon: 'handshake'
  }
};

/**
 * The mode Penny is operating in. Penny's behavior changes completely between
 * modes, so the mode is always visible — a learner should never have to guess
 * whether they are talking to the coach or the coordinator.
 */
function PennyModeBadge({
  mode = 'coach',
  showPosture = false,
  style,
  ...rest
}) {
  const m = PENNY_MODES[mode] || PENNY_MODES.coach;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      background: m.bg,
      color: m.ink,
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '10px',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '3px 9px',
      borderRadius: '999px',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), m.label, showPosture && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      letterSpacing: 0,
      textTransform: 'none',
      opacity: 0.75
    }
  }, "\xB7 ", m.posture));
}
Object.assign(__ds_scope, { PENNY_MODES, PennyModeBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/penny/PennyModeBadge.jsx", error: String((e && e.message) || e) }); }

// components/penny/PennyMessage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * One turn in a Penny conversation. `from="penny"` renders her side with the
 * mode badge; `from="learner"` renders the person's side. Penny's bubble carries
 * a left rule in the mode color so a long thread stays scannable.
 */
function PennyMessage({
  from = 'penny',
  mode = 'coach',
  name,
  children,
  style,
  ...rest
}) {
  const isPenny = from === 'penny';
  const m = __ds_scope.PENNY_MODES[mode] || __ds_scope.PENNY_MODES.coach;
  if (!isPenny) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '78%',
        background: 'var(--tt-warm-gray)',
        color: 'var(--tt-text)',
        fontFamily: 'var(--tt-font-body)',
        fontSize: '13px',
        lineHeight: 1.55,
        padding: '9px 13px',
        borderRadius: '12px 12px 3px 12px'
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: '9px',
      alignItems: 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '26px',
      height: '26px',
      flexShrink: 0,
      borderRadius: '999px',
      background: 'var(--tt-deep-teal)',
      color: 'var(--tt-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '12px'
    },
    "aria-hidden": "true"
  }, "P"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
      marginBottom: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '12px',
      color: 'var(--tt-heading)'
    }
  }, name || 'Penny'), /*#__PURE__*/React.createElement(__ds_scope.PennyModeBadge, {
    mode: mode
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: m.bg,
      borderLeft: `2.5px solid ${m.rule}`,
      borderRadius: '0 10px 10px 0',
      padding: '9px 13px',
      fontFamily: 'var(--tt-font-body)',
      fontSize: '13px',
      lineHeight: 1.55,
      color: 'var(--tt-text)'
    }
  }, children)));
}
Object.assign(__ds_scope, { PennyMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/penny/PennyMessage.jsx", error: String((e && e.message) || e) }); }

// components/program/Objectives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Learning objectives block for a program module. Each objective carries a
 * competency code so the module maps to the credential framework — this is what
 * makes program content assessable rather than merely instructional.
 */
function Objectives({
  items = [],
  heading = 'By the end of this module you can',
  style,
  ...rest
}) {
  const list = typeof items === 'string' ? items.split('|').map(s => s.trim()).filter(Boolean).map(s => s.split('::').map(p => p.trim())) : items;
  const rows = list.map(it => Array.isArray(it) ? {
    code: it[0],
    text: it[1]
  } : it);
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-prog-caps, 8pt)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--tt-prog-stage, var(--tt-trail-green))',
      marginBottom: '11px'
    }
  }, heading), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("li", {
    key: r.code || r.text,
    style: {
      display: 'flex',
      gap: '13px',
      alignItems: 'baseline',
      padding: '9px 0',
      borderTop: '1px solid var(--tt-doc-rule)'
    }
  }, r.code && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      fontSize: '8.5pt',
      letterSpacing: '.04em',
      whiteSpace: 'nowrap',
      color: 'var(--tt-prog-stage, var(--tt-trail-green))',
      border: '1px solid var(--tt-doc-rule-strong)',
      borderRadius: '4px',
      padding: '2px 6px',
      flexShrink: 0
    }
  }, r.code), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--tt-prog-body, 12pt)',
      lineHeight: 1.5,
      color: 'var(--tt-text)'
    }
  }, r.text)))));
}
Object.assign(__ds_scope, { Objectives });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/program/Objectives.jsx", error: String((e && e.message) || e) }); }

// components/program/ProgramBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STAGES = {
  foundations: {
    color: 'var(--tt-prog-foundations)',
    label: 'Foundations Trail'
  },
  guided: {
    color: 'var(--tt-prog-guided)',
    label: 'Guided Trail'
  },
  mastery: {
    color: 'var(--tt-prog-mastery)',
    label: 'Trail of Mastery'
  }
};

/**
 * Program module header — the identifying band on official curriculum pages.
 * The stage color tells a learner which trail a page belongs to at a glance.
 * Never carries a price, a code, or a CTA; program material is not retail.
 */
function ProgramBand({
  stage = 'guided',
  module: moduleNo,
  of,
  title,
  eyebrow,
  style,
  ...rest
}) {
  const s = STAGES[stage] || STAGES.guided;
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: s.color,
      color: '#fff',
      padding: '11px 16px',
      borderRadius: '6px 6px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-prog-caps, 8pt)',
      letterSpacing: '.13em',
      textTransform: 'uppercase'
    }
  }, s.label), moduleNo != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-prog-caps, 8pt)',
      letterSpacing: '.11em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.82)'
    }
  }, "Module ", moduleNo, of ? ' of ' + of : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--tt-doc-rule)',
      borderRight: '1px solid var(--tt-doc-rule)',
      borderBottom: '2px solid ' + s.color,
      padding: '15px 16px 16px',
      background: '#fff'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-prog-caps, 8pt)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: s.color,
      marginBottom: '6px'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-prog-h2, 18pt)',
      lineHeight: 1.2,
      color: 'var(--tt-heading)',
      margin: 0,
      textWrap: 'balance'
    }
  }, title)));
}
Object.assign(__ds_scope, { ProgramBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/program/ProgramBand.jsx", error: String((e && e.message) || e) }); }

// components/program/Rubric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Assessment rubric for a program module. Three levels per criterion, matching the
 * organization's evidence-before-scale principle: a learner is not "done", they are
 * demonstrably at a level, and a mentor can point at the row that says so.
 */
function Rubric({
  criteria = [],
  levels = ['Emerging', 'Proficient', 'Exemplary'],
  style,
  ...rest
}) {
  const list = typeof criteria === 'string' ? criteria.split('|').map(s => s.trim()).filter(Boolean).map(s => s.split('::').map(p => p.trim())) : criteria;
  const levelList = typeof levels === 'string' ? levels.split(',').map(s => s.trim()) : levels;
  const rows = list.map(c => Array.isArray(c) ? {
    name: c[0],
    cells: c.slice(1)
  } : c);
  const th = {
    textAlign: 'left',
    padding: '0 10px 7px 0',
    fontFamily: 'var(--tt-font-heading)',
    fontWeight: 600,
    fontSize: 'var(--tt-prog-caps, 8pt)',
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    color: 'var(--tt-prog-stage, var(--tt-trail-green))',
    borderBottom: '1.5px solid var(--tt-doc-rule-strong)'
  };
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: '22%'
    }
  }, "Criterion"), levelList.map(l => /*#__PURE__*/React.createElement("th", {
    key: l,
    style: th
  }, l)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.name,
    style: {
      background: i % 2 ? 'var(--tt-doc-alt)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 10px 10px 0',
      verticalAlign: 'top',
      borderBottom: '1px solid var(--tt-doc-rule)',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-prog-small, 10pt)',
      color: 'var(--tt-heading)'
    }
  }, r.name), (r.cells || []).map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      padding: '10px 10px 10px 0',
      verticalAlign: 'top',
      borderBottom: '1px solid var(--tt-doc-rule)',
      borderLeft: '1px solid var(--tt-doc-rule)',
      paddingLeft: '10px',
      fontSize: '9.5pt',
      lineHeight: 1.45,
      color: 'var(--tt-text)'
    }
  }, c))))));
}
Object.assign(__ds_scope, { Rubric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/program/Rubric.jsx", error: String((e && e.message) || e) }); }

// components/program/SignOff.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mentor sign-off block — the credential artifact that closes a program module.
 * This is the piece a Trail Kit deliberately does not have: an outside party
 * attesting to observed work, which is what "experience-validated" means.
 */
function SignOff({
  evidence = [],
  note = 'Signed by a Transition Trails mentor after reviewing the evidence above.',
  style,
  ...rest
}) {
  const list = typeof evidence === 'string' ? evidence.split('|').map(s => s.trim()).filter(Boolean) : evidence;
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      border: '1.5px solid var(--tt-doc-rule-strong)',
      borderRadius: '7px',
      padding: '18px 20px',
      background: '#fff',
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-prog-caps, 8pt)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--tt-prog-stage, var(--tt-trail-green))',
      marginBottom: '13px'
    }
  }, "Evidence & mentor sign-off"), list.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '18px'
    }
  }, list.map(e => /*#__PURE__*/React.createElement("div", {
    key: e,
    style: {
      display: 'flex',
      gap: '11px',
      alignItems: 'flex-start',
      padding: '8px 0',
      borderBottom: '1px solid var(--tt-doc-rule)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '12px',
      height: '12px',
      border: '1.5px solid var(--tt-doc-rule-strong)',
      borderRadius: '3px',
      flexShrink: 0,
      marginTop: '2px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--tt-prog-small, 10pt)',
      lineHeight: 1.5,
      color: 'var(--tt-text)'
    }
  }, e)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 0.9fr',
      gap: '18px'
    }
  }, [['Mentor name & signature'], ['Level awarded'], ['Date']].map(([label]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '0.42in',
      borderBottom: '1.5px solid var(--tt-charcoal)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '7.5pt',
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: '#8A908C',
      marginTop: '6px'
    }
  }, label)))), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '15px 0 0',
      fontSize: '8.5pt',
      lineHeight: 1.5,
      color: '#7A807C'
    }
  }, note));
}
Object.assign(__ds_scope, { SignOff });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/program/SignOff.jsx", error: String((e && e.message) || e) }); }

// components/status/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    bg: 'var(--tt-green-100)',
    border: 'var(--tt-green-300)',
    glyph: '✓'
  },
  info: {
    bg: 'var(--tt-sky-100)',
    border: 'var(--tt-sky-blue)',
    glyph: 'ⓘ'
  },
  warning: {
    bg: 'var(--tt-amber-100)',
    border: 'var(--tt-amber-300)',
    glyph: '⚠'
  },
  neutral: {
    bg: 'var(--tt-trail-light)',
    border: 'var(--tt-warm-gray)',
    glyph: 'ⓘ'
  }
};

/**
 * Transition Trails inline alert / callout. Always pairs an icon glyph with the
 * message so meaning is never carried by color alone.
 */
function Alert({
  tone = 'info',
  title,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: '12px',
      padding: '16px 18px',
      borderRadius: 'var(--tt-radius-md)',
      background: t.bg,
      border: `1px solid ${t.border}`,
      fontFamily: 'var(--tt-font-body)',
      fontSize: '13.5px',
      lineHeight: 1.5,
      color: 'var(--tt-heading)',
      maxWidth: '460px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '16px',
      lineHeight: 1.4
    }
  }, t.glyph), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600
    }
  }, title), title && ' — ', children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/Alert.jsx", error: String((e && e.message) || e) }); }

// components/status/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  green: {
    background: 'var(--tt-green-100)',
    color: 'var(--tt-green-700)'
  },
  teal: {
    background: 'var(--tt-sky-100)',
    color: 'var(--tt-deep-teal)'
  },
  amber: {
    background: 'var(--tt-amber-100)',
    color: 'var(--tt-amber-700)'
  },
  gray: {
    background: 'var(--tt-warm-gray)',
    color: 'var(--tt-slate)'
  }
};

/**
 * Transition Trails status/category pill. Use for trail types and status labels.
 */
function Pill({
  tone = 'green',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 500,
      fontSize: '13px',
      padding: '6px 14px',
      borderRadius: 'var(--tt-radius-pill)',
      lineHeight: 1.2,
      ...(TONES[tone] || TONES.green),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/Pill.jsx", error: String((e && e.message) || e) }); }

// components/status/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Transition Trails progress stepper. Shows steps along a trail; the current step
 * is marked in Sun Amber, completed steps in Trail Green, upcoming in Warm Gray.
 * steps: array of strings (labels) or { label } objects. current: 0-based index.
 */
function Stepper({
  steps = [],
  current = 0,
  style,
  ...rest
}) {
  const items = steps.map(s => typeof s === 'string' ? {
    label: s
  } : s);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      fontFamily: 'var(--tt-font-body)',
      ...style
    }
  }, rest), items.map((step, i) => {
    const state = i < current ? 'done' : i === current ? 'current' : 'upcoming';
    const dot = {
      done: {
        background: 'var(--tt-trail-green)',
        color: '#fff',
        border: 'none'
      },
      current: {
        background: 'var(--tt-sun-amber)',
        color: 'var(--tt-charcoal)',
        border: 'none'
      },
      upcoming: {
        background: '#fff',
        color: '#9AA09D',
        border: '1.5px solid var(--tt-warm-gray)'
      }
    }[state];
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        minWidth: '84px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '32px',
        height: '32px',
        borderRadius: '999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--tt-font-heading)',
        fontWeight: 600,
        fontSize: '14px',
        ...dot
      }
    }, state === 'done' ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        textAlign: 'center',
        lineHeight: 1.3,
        color: state === 'upcoming' ? '#9AA09D' : 'var(--tt-heading)',
        fontWeight: state === 'current' ? 600 : 400
      }
    }, step.label)), i < items.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: '2px',
        marginTop: '15px',
        minWidth: '24px',
        background: i < current ? 'var(--tt-trail-green)' : 'var(--tt-warm-gray)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/trail-kit/ActionPlan.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Trail Kit action plan — the "now do it on your own" table. Ruled rows with
 * columns for the action, owner, and target date, so the kit ends in commitment
 * rather than in reading.
 */
function ActionPlan({
  rows = 5,
  prompts = [],
  columns,
  style,
  ...rest
}) {
  const parse = v => typeof v === 'string' ? v.split(',').map(s => s.trim()).filter(Boolean) : v;
  const cols = parse(columns) || ['Action I will take', 'Who I need', 'By when'];
  const promptList = parse(prompts) || [];
  const count = Math.max(Number(rows) || 0, promptList.length);
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, cols.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      textAlign: 'left',
      padding: '0 8px 7px 0',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-kit-caps, 8pt)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--tt-deep-teal)',
      borderBottom: '1.5px solid var(--tt-rule-strong)',
      width: i === 0 ? 'auto' : i === 1 ? '24%' : '17%'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, cols.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: c,
    style: {
      height: 'var(--tt-note-line, 0.30in)',
      borderBottom: '1px solid var(--tt-rule)',
      padding: '4px 8px 4px 0',
      fontSize: 'var(--tt-kit-small, 9.5pt)',
      color: '#A39B8E',
      verticalAlign: 'bottom'
    }
  }, j === 0 ? promptList[i] || '' : ''))))));
}
Object.assign(__ds_scope, { ActionPlan });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trail-kit/ActionPlan.jsx", error: String((e && e.message) || e) }); }

// components/trail-kit/BuildStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A numbered build step in a Trail Kit — large step numeral, instruction, and an
 * optional "you should see" verification line so the learner can self-check.
 */
function BuildStep({
  n,
  title,
  verify,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: '13px',
      breakInside: 'avoid',
      fontFamily: 'var(--tt-font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '26px',
      height: '26px',
      flexShrink: 0,
      borderRadius: '999px',
      background: 'var(--tt-deep-teal)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '11pt'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-kit-h3, 14pt)',
      color: 'var(--tt-heading)',
      margin: '2px 0 5px',
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--tt-kit-body, 11.5pt)',
      lineHeight: 1.55,
      color: 'var(--tt-text)'
    }
  }, children), verify && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      display: 'flex',
      gap: '7px',
      alignItems: 'baseline',
      fontSize: 'var(--tt-kit-small, 9.5pt)',
      color: 'var(--tt-green-700)',
      borderTop: '1px solid var(--tt-rule)',
      paddingTop: '7px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--tt-font-heading)'
    }
  }, "You should see"), " \u2014 ", verify))));
}
Object.assign(__ds_scope, { BuildStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trail-kit/BuildStep.jsx", error: String((e && e.message) || e) }); }

// components/trail-kit/KitCode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The redemption code block that closes every Trail Kit — a monospaced code in a
 * clay ticket, the discount on the next kit, and the invitation into a program.
 * This is the one place Sun Amber may appear in a Trail Kit (the conversion CTA).
 */
function KitCode({
  code,
  headline = 'Your next trail',
  body,
  cta,
  url,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '2px dashed var(--tt-clay-300)',
      borderRadius: 'var(--tt-radius-md)',
      background: 'var(--tt-clay-100)',
      padding: '20px 22px',
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-kit-caps, 8pt)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--tt-clay-700)',
      marginBottom: '9px'
    }
  }, headline), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      fontSize: '20pt',
      fontWeight: 600,
      letterSpacing: '.09em',
      color: 'var(--tt-charcoal)',
      background: '#fff',
      border: '1px solid var(--tt-clay-300)',
      borderRadius: '7px',
      padding: '9px 16px',
      display: 'inline-block',
      marginBottom: '11px',
      whiteSpace: 'nowrap'
    }
  }, code), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontSize: 'var(--tt-kit-small, 9.5pt)',
      lineHeight: 1.55,
      color: 'var(--tt-text)',
      maxWidth: '3.4in'
    }
  }, body), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      background: 'var(--tt-sun-amber)',
      color: 'var(--tt-charcoal)',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '10.5pt',
      padding: '9px 18px',
      borderRadius: 'var(--tt-radius-md)',
      whiteSpace: 'nowrap'
    }
  }, cta, " \u2192"), url && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '7.5pt',
      color: '#9A8F80',
      marginTop: '9px'
    }
  }, url));
}
Object.assign(__ds_scope, { KitCode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trail-kit/KitCode.jsx", error: String((e && e.message) || e) }); }

// components/trail-kit/KitMeta.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Trail Kit metadata bar — time to complete, level, and what the learner needs
 * before starting. Sets expectations on the orient page so nobody starts unprepared.
 */
function KitMeta({
  items = [],
  style,
  ...rest
}) {
  const list = typeof items === 'string' ? items.split('|').map(s => s.trim()).filter(Boolean).map(s => s.split('::').map(x => x.trim())) : items;
  const pairs = list.map(it => Array.isArray(it) ? {
    label: it[0],
    value: it[1]
  } : it);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: '0',
      fontFamily: 'var(--tt-font-body)',
      borderTop: '1.5px solid var(--tt-rule-strong)',
      borderBottom: '1.5px solid var(--tt-rule-strong)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), pairs.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.label,
    style: {
      flex: 1,
      padding: '11px 16px',
      borderLeft: i === 0 ? 'none' : '1px solid var(--tt-rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-kit-caps, 8pt)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: '#8C857A',
      marginBottom: '4px'
    }
  }, p.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '12pt',
      color: 'var(--tt-heading)',
      lineHeight: 1.25
    }
  }, p.value))));
}
Object.assign(__ds_scope, { KitMeta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trail-kit/KitMeta.jsx", error: String((e && e.message) || e) }); }

// components/trail-kit/NoteLines.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ruled writing area for a Trail Kit — the notebook's whole point. Prints real
 * hairline rules at the --tt-note-line pitch so a learner can write on it.
 * Use `lines` for a fixed count, or `grid` for a dot grid instead of rules.
 */
function NoteLines({
  label,
  lines = 6,
  grid = false,
  style,
  ...rest
}) {
  const pitch = 'var(--tt-note-line, 0.30in)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-kit-caps, 8pt)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--tt-deep-teal)',
      marginBottom: '7px'
    }
  }, label), grid ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: `calc(${pitch} * ${lines})`,
      backgroundImage: 'radial-gradient(var(--tt-rule) 0.6px, transparent 0.6px)',
      backgroundSize: '0.16in 0.16in',
      border: '1px solid var(--tt-rule)',
      borderRadius: '5px'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: `calc(${pitch} * ${lines})`,
      backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent calc(${pitch} - 1px), var(--tt-rule) calc(${pitch} - 1px), var(--tt-rule) ${pitch})`
    }
  }));
}
Object.assign(__ds_scope, { NoteLines });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trail-kit/NoteLines.jsx", error: String((e && e.message) || e) }); }

// components/trail-kit/QRLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Real, scannable QR code for a Trail Kit page — links to a Build With Me video,
 * a template download, or a resource. Encodes the URL client-side via the
 * `qrcode-generator` UMD global (`window.qrcode`); shows a labeled placeholder
 * frame if the library has not loaded (e.g. offline print preview).
 */
function QRLink({
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
  return /*#__PURE__*/React.createElement("a", _extends({
    href: url || undefined,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'flex',
      gap: '11px',
      alignItems: 'flex-start',
      fontFamily: 'var(--tt-font-body)',
      color: 'inherit',
      textDecoration: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: size + 'px',
      height: size + 'px',
      flexShrink: 0,
      border: '1px solid var(--tt-rule-strong)',
      borderRadius: '6px',
      background: '#fff',
      padding: '5px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, dataUrl ? /*#__PURE__*/React.createElement("img", {
    src: dataUrl,
    alt: label ? 'QR code — ' + label : 'QR code',
    style: {
      width: '100%',
      height: '100%',
      imageRendering: 'pixelated'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '7pt',
      color: '#9AA09D',
      textAlign: 'center',
      lineHeight: 1.3
    }
  }, "QR", /*#__PURE__*/React.createElement("br", null), url ? 'loading' : 'no link')), (label || caption) && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '2px',
      maxWidth: '160px'
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-kit-small, 9.5pt)',
      color: ink,
      lineHeight: 1.3
    }
  }, label), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '8.5pt',
      color: 'var(--tt-text)',
      lineHeight: 1.4,
      marginTop: '3px'
    }
  }, caption), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '7pt',
      color: '#9AA09D',
      marginTop: '4px',
      lineHeight: 1.3,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, String(url).replace(/^https?:\/\//, '').split('/')[0])));
}
Object.assign(__ds_scope, { QRLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trail-kit/QRLink.jsx", error: String((e && e.message) || e) }); }

// components/trail-kit/ResourceLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * External resource row for a Trail Kit — a scannable QR, the resource name and
 * provider, one line on why it is worth your time, and the plain URL. Set
 * `affiliate` when the link earns Transition Trails a commission; the row then
 * carries a visible marker, because disclosure is a trust question, not a legal
 * footnote. Pair a list of these with a single disclosure line on the page.
 */
function ResourceLink({
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
  return /*#__PURE__*/React.createElement("a", _extends({
    href: url || undefined,
    target: "_blank",
    rel: "noreferrer",
    style: {
      color: 'inherit',
      textDecoration: 'none',
      display: 'flex',
      gap: '13px',
      alignItems: 'flex-start',
      padding: '11px 0',
      borderTop: '1px solid var(--tt-rule)',
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '74px',
      height: '74px',
      flexShrink: 0,
      border: '1px solid var(--tt-rule-strong)',
      borderRadius: '5px',
      background: '#fff',
      padding: '4px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, dataUrl ? /*#__PURE__*/React.createElement("img", {
    src: dataUrl,
    alt: 'QR code — ' + (name || 'resource'),
    style: {
      width: '100%',
      height: '100%',
      imageRendering: 'pixelated'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '6.5pt',
      color: '#9AA09D'
    }
  }, "QR")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px',
      flexWrap: 'wrap',
      marginBottom: '3px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '11pt',
      color: 'var(--tt-heading)',
      lineHeight: 1.25
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '7pt',
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: 'var(--tt-deep-teal)',
      border: '1px solid var(--tt-rule-strong)',
      borderRadius: '999px',
      padding: '2px 7px'
    }
  }, kind), free && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '7pt',
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: 'var(--tt-green-700)',
      background: 'var(--tt-green-100)',
      borderRadius: '999px',
      padding: '2px 7px'
    }
  }, "Free"), affiliate && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '7pt',
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: 'var(--tt-clay-700)',
      background: 'var(--tt-clay-100)',
      borderRadius: '999px',
      padding: '2px 7px'
    }
  }, "Affiliate link")), provider && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '8.5pt',
      color: '#8C857A',
      marginBottom: '4px'
    }
  }, provider), why && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '9.5pt',
      lineHeight: 1.5,
      color: 'var(--tt-text)'
    }
  }, why), url && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '7pt',
      color: '#A39B8E',
      marginTop: '4px',
      lineHeight: 1.3,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, String(url).replace(/^https?:\/\//, '').split('/')[0])));
}
Object.assign(__ds_scope, { ResourceLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trail-kit/ResourceLink.jsx", error: String((e && e.message) || e) }); }

// components/trail-kit/TabStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The printed tab strip that runs down the outer edge of every Trail Kit page —
 * the thing that makes a PDF feel like a tabbed notebook. The active section's tab
 * is filled in Deep Teal; the rest sit quiet on paper. Tabs are also anchor links,
 * so the tab strip works as navigation in the on-screen PDF.
 */
function TabStrip({
  sections = [],
  active = 0,
  idPrefix = 's',
  style,
  ...rest
}) {
  const list = typeof sections === 'string' ? sections.split(',').map(s => s.trim()) : sections;
  const items = list.map((s, i) => typeof s === 'string' ? {
    label: s,
    href: '#' + idPrefix + (i + 1)
  } : s);
  const activeIndex = Number(active);
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Trail Kit sections",
    style: {
      width: 'var(--tt-kit-tab, 0.42in)',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      paddingTop: '0.42in',
      fontFamily: 'var(--tt-font-heading)',
      flexShrink: 0,
      ...style
    }
  }, rest), items.map((s, i) => {
    const on = i === activeIndex;
    return /*#__PURE__*/React.createElement("a", {
      key: s.label,
      href: s.href || '#',
      style: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: 'var(--tt-kit-caps, 8pt)',
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        borderRadius: '0 7px 7px 0',
        background: on ? 'var(--tt-deep-teal)' : 'var(--tt-paper-alt)',
        color: on ? '#fff' : '#8C857A',
        border: on ? 'none' : '1px solid var(--tt-rule)',
        borderLeft: 'none',
        padding: '8px 0'
      }
    }, s.label);
  }));
}
Object.assign(__ds_scope, { TabStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trail-kit/TabStrip.jsx", error: String((e && e.message) || e) }); }

// components/trail-kit/TrailIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = 'https://cdn.jsdelivr.net/npm/lucide@0.462.0/dist/umd/lucide.min.js';
let loading = null;
const waiters = new Set();
function pascal(name) {
  return String(name).replace(/[-_ ]+([a-z0-9])/g, (_, c) => c.toUpperCase()).replace(/^([a-z])/, (_, c) => c.toUpperCase());
}
function ensure() {
  if (typeof window === 'undefined') return null;
  if (window.lucide && window.lucide.icons) return window.lucide.icons;
  if (!loading) {
    loading = new Promise(resolve => {
      const s = document.createElement('script');
      s.src = SRC;
      s.async = true;
      s.onload = () => resolve(window.lucide && window.lucide.icons);
      s.onerror = () => resolve(null);
      document.head.appendChild(s);
    }).then(icons => {
      waiters.forEach(fn => fn());
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
    const props = {
      key: i
    };
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
function TrailIcon({
  name,
  size = 14,
  strokeWidth = 1.9,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [, bump] = React.useReducer(n => n + 1, 0);
  const icons = ensure();
  React.useEffect(() => {
    if (icons) return undefined;
    waiters.add(bump);
    return () => waiters.delete(bump);
  }, [icons, bump]);
  const px = typeof size === 'number' ? `${size}px` : size;
  const box = {
    width: px,
    height: px,
    flexShrink: 0,
    display: 'inline-block',
    verticalAlign: '-0.14em',
    ...style
  };
  if (!icons) return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: box
  }, rest));
  const node = icons[pascal(name)] || icons[name];
  const kids = toElements(childrenOf(node));
  if (!kids.length) return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: box
  }, rest));
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    style: box
  }, rest), kids);
}
Object.assign(__ds_scope, { TrailIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trail-kit/TrailIcon.jsx", error: String((e && e.message) || e) }); }

// components/penny/HumanGate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The approval gate. Penny drafts; a human sends. Any Penny output bound for a
 * client, a channel, or production is wrapped in this — it is the visible form
 * of the "human in the loop, always" architecture, not a confirmation dialog.
 */
function HumanGate({
  label = 'Penny drafted this — needs your approval',
  recipient,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1.5px solid var(--tt-sun-amber)',
      borderRadius: '10px',
      background: 'var(--tt-amber-100)',
      overflow: 'hidden',
      fontFamily: 'var(--tt-font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
      padding: '8px 13px',
      borderBottom: '1px solid var(--tt-amber-300)',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '10.5px',
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--tt-amber-700)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TrailIcon, {
    name: "shield-check",
    size: 13
  }), label), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '11px 13px',
      background: 'var(--tt-white)',
      fontSize: '13px',
      lineHeight: 1.55,
      color: 'var(--tt-text)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '10px',
      padding: '9px 13px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11.5px',
      color: 'var(--tt-slate)',
      minWidth: 0
    }
  }, recipient ? /*#__PURE__*/React.createElement(React.Fragment, null, "Will send to ", /*#__PURE__*/React.createElement("b", null, recipient), " once approved.") : 'Nothing sends until a person approves it.'), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '7px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '11.5px',
      color: 'var(--tt-slate)',
      padding: '5px 11px',
      borderRadius: '7px',
      border: '1px solid var(--tt-warm-gray)',
      background: 'var(--tt-white)'
    }
  }, "Edit"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '11.5px',
      color: 'var(--tt-white)',
      padding: '5px 11px',
      borderRadius: '7px',
      background: 'var(--tt-trail-green)'
    }
  }, "Approve & send"))));
}
Object.assign(__ds_scope, { HumanGate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/penny/HumanGate.jsx", error: String((e && e.message) || e) }); }

// components/penny/PennyFlag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LEVELS = {
  attention: {
    ink: 'var(--tt-clay-700)',
    rule: 'var(--tt-clay-500)',
    bg: 'var(--tt-clay-100)',
    icon: 'triangle-alert',
    label: 'Needs attention'
  },
  watch: {
    ink: 'var(--tt-amber-700)',
    rule: 'var(--tt-sun-amber)',
    bg: 'var(--tt-amber-100)',
    icon: 'eye',
    label: 'Watch'
  },
  healthy: {
    ink: 'var(--tt-green-700)',
    rule: 'var(--tt-trail-green)',
    bg: 'var(--tt-green-100)',
    icon: 'circle-check-big',
    label: 'Healthy'
  }
};

/**
 * A signal Penny surfaced for a human to act on — an overdue task, a learner
 * gone quiet, a client meeting with no agenda. Penny raises the flag; the coach
 * makes the call. The action label always describes a human doing something.
 */
function PennyFlag({
  level = 'attention',
  title,
  detail,
  action,
  style,
  ...rest
}) {
  const l = LEVELS[level] || LEVELS.attention;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: l.bg,
      borderLeft: `2.5px solid ${l.rule}`,
      borderRadius: '0 9px 9px 0',
      padding: '10px 13px',
      fontFamily: 'var(--tt-font-body)',
      display: 'flex',
      gap: '9px',
      alignItems: 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: l.ink,
      display: 'flex',
      paddingTop: '1px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TrailIcon, {
    name: l.icon,
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '12.5px',
      color: 'var(--tt-heading)',
      lineHeight: 1.35,
      marginBottom: detail ? '3px' : 0
    }
  }, title || l.label), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      lineHeight: 1.5,
      color: 'var(--tt-slate)'
    }
  }, detail)), action && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      alignSelf: 'center',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '11.5px',
      color: l.ink,
      whiteSpace: 'nowrap'
    }
  }, action, " \u2192"));
}
Object.assign(__ds_scope, { PennyFlag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/penny/PennyFlag.jsx", error: String((e && e.message) || e) }); }

// components/trail-kit/CoachNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The kit speaking as the reader's coach. A Trail Kit is bought by someone with
 * no mentor assigned — the notebook itself plays that role, so it is allowed to
 * do what a coach does: anticipate the wobble, name it before the reader hits it,
 * and say what to do about it. Use sparingly — two or three per kit, at the points
 * where people actually stall.
 *
 * This is deliberately NOT KitNote. KitNote is information about the task;
 * CoachNote is direct address about the person doing it. Never use CoachNote in
 * program curriculum — enrolled learners have a real human mentor, and a printed
 * substitute would be worse than nothing.
 */
function CoachNote({
  title = 'From your coach',
  children,
  aside,
  compact = false,
  style,
  ...rest
}) {
  const isCompact = compact === true || compact === 'true';
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      background: 'var(--tt-paper-alt)',
      border: '1px solid var(--tt-rule)',
      borderLeft: '3px solid var(--tt-clay-500)',
      borderRadius: '0 8px 8px 0',
      padding: isCompact ? '11px 11px' : '14px 16px',
      fontFamily: 'var(--tt-font-body)',
      breakInside: 'avoid',
      ...(isCompact ? null : {
        display: 'flex',
        gap: '13px'
      }),
      ...style
    }
  }, rest), !isCompact && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '30px',
      height: '30px',
      flexShrink: 0,
      borderRadius: '999px',
      background: 'var(--tt-clay-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--tt-font-accent)',
      fontWeight: 600,
      fontSize: '17px',
      lineHeight: 1
    },
    "aria-hidden": "true"
  }, "TT"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-kit-caps, 8pt)',
      letterSpacing: '.11em',
      textTransform: 'uppercase',
      color: 'var(--tt-clay-700)',
      marginBottom: '6px'
    }
  }, isCompact && /*#__PURE__*/React.createElement(__ds_scope.TrailIcon, {
    name: "compass",
    size: 13
  }), title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--tt-kit-small, 9.5pt)',
      lineHeight: 1.55,
      color: 'var(--tt-text)'
    }
  }, children), aside && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      paddingTop: '8px',
      borderTop: '1px solid var(--tt-rule)',
      fontFamily: 'var(--tt-font-accent)',
      fontSize: '15pt',
      lineHeight: 1.2,
      color: 'var(--tt-clay-700)'
    }
  }, aside)));
}
Object.assign(__ds_scope, { CoachNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trail-kit/CoachNote.jsx", error: String((e && e.message) || e) }); }

// components/trail-kit/KitNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KINDS = {
  tip: {
    label: 'Pro tip',
    bg: 'var(--tt-green-100)',
    rule: 'var(--tt-trail-green)',
    ink: 'var(--tt-green-700)',
    icon: 'lightbulb'
  },
  watchout: {
    label: 'Watch out',
    bg: 'var(--tt-clay-100)',
    rule: 'var(--tt-clay-500)',
    ink: 'var(--tt-clay-700)',
    icon: 'triangle-alert'
  },
  practice: {
    label: 'Best practice',
    bg: 'var(--tt-sky-100)',
    rule: 'var(--tt-deep-teal)',
    ink: 'var(--tt-deep-teal)',
    icon: 'award'
  },
  remember: {
    label: 'Remember',
    bg: 'var(--tt-paper-alt)',
    rule: 'var(--tt-rule-strong)',
    ink: 'var(--tt-charcoal)',
    icon: 'bookmark'
  }
};

/**
 * Trail Kit marginalia note — the side-rail callout that turns bare instructions
 * into guidance. Four kinds: tip, watchout, practice, remember. Each pairs a glyph
 * and a word label with the color, so meaning never rests on color alone.
 */
function KitNote({
  kind = 'tip',
  title,
  children,
  style,
  ...rest
}) {
  const k = KINDS[kind] || KINDS.tip;
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      background: k.bg,
      borderLeft: `2.5px solid ${k.rule}`,
      borderRadius: '0 8px 8px 0',
      padding: '11px 13px',
      fontFamily: 'var(--tt-font-body)',
      fontSize: 'var(--tt-kit-small, 9.5pt)',
      lineHeight: 1.5,
      color: 'var(--tt-text)',
      breakInside: 'avoid',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      marginBottom: '5px',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: 'var(--tt-kit-caps, 8pt)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: k.ink
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TrailIcon, {
    name: k.icon,
    size: 13
  }), title || k.label), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { KitNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trail-kit/KitNote.jsx", error: String((e && e.message) || e) }); }

// guidelines/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/portal/Dashboard.jsx
try { (() => {
/* Transition Trails — Trail OS Dashboard. */
const {
  Button,
  Card,
  Pill,
  Alert,
  Stepper
} = window.TransitionTrailsDesignSystem_335df4;
function Dashboard({
  onNav
}) {
  const {
    PIcon
  } = window.TT_Portal;
  const tasks = [['Submit project scope doc', 'Due Fri', 'amber'], ['Mentor check-in — Priya', 'Tomorrow 2pm', 'teal'], ['Complete accessibility module', 'This week', 'gray']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 36px',
      fontFamily: 'var(--tt-font-body)',
      color: 'var(--tt-text)',
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: '30px',
      color: 'var(--tt-heading)',
      margin: '0 0 4px'
    }
  }, "Welcome back, Jordan."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px'
    }
  }, "You're on the ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--tt-heading)'
    }
  }, "Guided Trail"), " \u2014 keep the momentum going.")), /*#__PURE__*/React.createElement(Button, {
    variant: "amber",
    onClick: () => onNav('program')
  }, "Log project hours \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--tt-border)',
      borderRadius: 'var(--tt-radius-lg)',
      padding: '26px 28px',
      margin: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '19px',
      color: 'var(--tt-heading)',
      margin: 0
    }
  }, "Your trail progress"), /*#__PURE__*/React.createElement(Pill, {
    tone: "green"
  }, "Stage 3 of 5")), /*#__PURE__*/React.createElement(Stepper, {
    steps: ['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate'],
    current: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--tt-border)',
      borderRadius: 'var(--tt-radius-lg)',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '17px',
      color: 'var(--tt-heading)',
      margin: '0 0 16px'
    }
  }, "Next milestones"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, tasks.map(([t, due, tone]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      padding: '13px 16px',
      border: '1px solid var(--tt-border)',
      borderRadius: 'var(--tt-radius-md)'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "circle",
    size: 18,
    color: "var(--tt-warm-gray)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: '14.5px',
      color: 'var(--tt-heading)'
    }
  }, t), /*#__PURE__*/React.createElement(Pill, {
    tone: tone
  }, due))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Mentor note"
  }, "Priya left feedback on your data model. Review before Friday's check-in."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--tt-border)',
      borderRadius: 'var(--tt-radius-lg)',
      padding: '20px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '10.5px',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--tt-deep-teal)',
      marginBottom: '14px'
    }
  }, "Your workspace"), [['message-square', 'Slack', '#guided-trail-spring · 4 unread'], ['database', 'Salesforce Dev Org', 'jordan.r@trailos.dev · active']].map(([icon, label, meta]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 0',
      textDecoration: 'none',
      color: 'inherit',
      borderTop: '1px solid var(--tt-border)'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: icon,
    size: 18,
    color: "var(--tt-deep-teal)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '14px',
      color: 'var(--tt-heading)',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '12px',
      color: 'var(--tt-slate)',
      marginTop: '1px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, meta)), /*#__PURE__*/React.createElement(PIcon, {
    name: "external-link",
    size: 14,
    color: "var(--tt-slate)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tt-green-100)',
      border: '1px solid var(--tt-green-300)',
      borderRadius: 'var(--tt-radius-lg)',
      padding: '22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: '32px',
      color: 'var(--tt-green-700)'
    }
  }, "68 hrs"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: 'var(--tt-slate)',
      marginBottom: '14px'
    }
  }, "Supervised experience logged"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => onNav('program')
  }, "View my trail")))));
}
Object.assign(window, {
  TT_Dashboard: Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalChrome.jsx
try { (() => {
/* Transition Trails — Trail OS shared chrome (Experience Cloud style).
   Teal top bar + left sidebar. Exports to window.TT_Portal. */
const {
  useEffect,
  useRef
} = React;
function PIcon({
  name,
  size = 20,
  color = 'currentColor'
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': 1.9
        }
      });
    }
  }, [name, size, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0
    }
  });
}
function TopBar() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: '58px',
      background: 'var(--tt-deep-teal)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      fontFamily: 'var(--tt-font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: '17px',
      color: '#fff'
    }
  }, "Transition Trails"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--tt-sky-blue)',
      borderLeft: '1px solid rgba(255,255,255,.25)',
      paddingLeft: '14px',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, "Trail OS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px',
      color: 'rgba(255,255,255,.9)'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "search",
    size: 18
  }), /*#__PURE__*/React.createElement(PIcon, {
    name: "bell",
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '30px',
      height: '30px',
      borderRadius: '999px',
      background: 'var(--tt-sun-amber)',
      color: 'var(--tt-charcoal)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '13px'
    }
  }, "JR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      color: '#fff'
    }
  }, "Jordan R."))));
}
function Sidebar({
  current,
  onNav
}) {
  const items = [['dashboard', 'Dashboard', 'layout-dashboard'], ['program', 'My Trail', 'route'], ['projects', 'Projects', 'folder-kanban'], ['mentors', 'Mentors', 'users'], ['resources', 'Resources', 'book-open']];
  /* Trail OS also hands the learner their two working environments. These leave
     the portal, so they are grouped apart and marked with an external glyph. */
  const workspace = [['slack', 'Slack', 'message-square', 'Cohort channels'], ['devorg', 'Dev Org', 'database', 'Your Salesforce']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: '224px',
      background: '#fff',
      borderRight: '1px solid var(--tt-border)',
      padding: '20px 14px',
      fontFamily: 'var(--tt-font-body)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, items.map(([id, label, icon]) => {
    const active = current === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onNav(id === 'program' ? 'program' : 'dashboard'),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        width: '100%',
        padding: '11px 14px',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        borderRadius: 'var(--tt-radius-md)',
        background: active ? 'var(--tt-green-100)' : 'transparent',
        color: active ? 'var(--tt-green-700)' : 'var(--tt-slate)',
        fontWeight: active ? 600 : 400,
        fontSize: '14.5px'
      }
    }, /*#__PURE__*/React.createElement(PIcon, {
      name: icon,
      size: 19,
      color: active ? 'var(--tt-trail-green)' : 'var(--tt-slate)'
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '22px',
      paddingTop: '16px',
      borderTop: '1px solid var(--tt-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '10.5px',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--tt-slate)',
      padding: '0 14px',
      marginBottom: '8px'
    }
  }, "Workspace"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, workspace.map(([id, label, icon, sub]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      width: '100%',
      padding: '9px 14px',
      borderRadius: 'var(--tt-radius-md)',
      color: 'var(--tt-slate)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: icon,
    size: 19,
    color: "var(--tt-slate)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '14.5px',
      lineHeight: 1.2
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '11.5px',
      color: 'var(--tt-slate)',
      marginTop: '1px'
    }
  }, sub)), /*#__PURE__*/React.createElement(PIcon, {
    name: "external-link",
    size: 14,
    color: "var(--tt-slate)"
  }))))));
}
Object.assign(window, {
  TT_Portal: {
    PIcon,
    TopBar,
    Sidebar
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Program.jsx
try { (() => {
/* Transition Trails — Trail OS Program (My Trail) detail. */
const {
  Button,
  Card,
  Pill,
  Alert,
  Stepper
} = window.TransitionTrailsDesignSystem_335df4;
function Program({
  onNav
}) {
  const {
    PIcon
  } = window.TT_Portal;
  const modules = [['Discovery & scoping', 'done', 'Define the partner problem and success criteria.'], ['Data model & build', 'current', 'Configure objects, flows, and dashboards with mentor review.'], ['User testing', 'upcoming', 'Validate with the partner and iterate.'], ['Handoff & documentation', 'upcoming', 'Deliver a documented, maintainable solution.']];
  const dot = {
    done: {
      background: 'var(--tt-trail-green)',
      color: '#fff',
      glyph: 'check'
    },
    current: {
      background: 'var(--tt-sun-amber)',
      color: 'var(--tt-charcoal)',
      glyph: 'dot'
    },
    upcoming: {
      background: '#fff',
      color: '#9AA09D',
      glyph: 'dot'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 36px',
      fontFamily: 'var(--tt-font-body)',
      color: 'var(--tt-text)',
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('dashboard'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--tt-link)',
      fontSize: '14px',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: 0,
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "arrow-left",
    size: 16,
    color: "var(--tt-trail-green)"
  }), " Back to dashboard"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "green"
  }, "Guided Trail"), /*#__PURE__*/React.createElement(Pill, {
    tone: "teal"
  }, "Partner: Riverside Food Bank")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: '30px',
      color: 'var(--tt-heading)',
      margin: '0 0 20px'
    }
  }, "Volunteer intake redesign"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--tt-border)',
      borderRadius: 'var(--tt-radius-lg)',
      padding: '26px 28px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: ['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate'],
    current: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '20px',
      color: 'var(--tt-heading)',
      margin: '0 0 16px'
    }
  }, "Project modules"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, modules.map(([t, state, desc]) => {
    const d = dot[state];
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: '16px',
        background: '#fff',
        border: '1px solid var(--tt-border)',
        borderRadius: 'var(--tt-radius-md)',
        padding: '18px 20px',
        boxShadow: state === 'current' ? 'var(--tt-shadow-amber)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '30px',
        height: '30px',
        borderRadius: '999px',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: state === 'upcoming' ? '1.5px solid var(--tt-warm-gray)' : 'none',
        background: d.background,
        color: d.color
      }
    }, d.glyph === 'check' ? /*#__PURE__*/React.createElement(PIcon, {
      name: "check",
      size: 16,
      color: "#fff"
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: '7px',
        height: '7px',
        borderRadius: '999px',
        background: d.color,
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: 'var(--tt-font-heading)',
        fontWeight: 600,
        fontSize: '16px',
        color: 'var(--tt-heading)',
        margin: 0
      }
    }, t), state === 'current' && /*#__PURE__*/React.createElement(Pill, {
      tone: "amber"
    }, "In progress")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '5px 0 0',
        fontSize: '14px',
        lineHeight: 1.5
      }
    }, desc)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--tt-border)',
      borderRadius: 'var(--tt-radius-lg)',
      padding: '22px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '16px',
      color: 'var(--tt-heading)',
      margin: '0 0 14px'
    }
  }, "Your mentor"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '44px',
      height: '44px',
      borderRadius: '999px',
      background: 'var(--tt-deep-teal)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600
    }
  }, "PA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--tt-heading)',
      fontSize: '15px'
    }
  }, "Priya A."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px'
    }
  }, "Salesforce Architect \xB7 9 yrs"))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, "Message mentor")), /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "On track"
  }, "You've logged 68 of 80 required project hours."), /*#__PURE__*/React.createElement(Button, {
    variant: "amber",
    onClick: () => onNav('dashboard'),
    style: {
      justifyContent: 'center'
    }
  }, "Log today's hours \u2192"))));
}
Object.assign(window, {
  TT_Program: Program
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Program.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GetInvolved.jsx
try { (() => {
/* Transition Trails — website Get Involved / apply screen with a working form. */
const {
  Button,
  Card,
  Pill,
  Alert,
  Input
} = window.TransitionTrailsDesignSystem_335df4;
const {
  useState
} = React;
function GetInvolved() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
  function submit(e) {
    e.preventDefault();
    if (!name.trim()) {
      setErr('Please enter your name.');
      return;
    }
    setErr('');
    setSent(true);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-body)',
      color: 'var(--tt-text)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--tt-trail-green)',
      padding: '56px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1120px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tt-font-accent)',
      fontWeight: 600,
      fontSize: '28px',
      color: 'var(--tt-amber-300)'
    }
  }, "start your journey today"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: '40px',
      color: '#fff',
      margin: '8px 0 12px'
    }
  }, "Take the next step."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '17px',
      color: 'rgba(255,255,255,.86)',
      maxWidth: '620px',
      margin: 0,
      lineHeight: 1.6
    }
  }, "Apply to a trail, volunteer as a mentor, or partner your nonprofit. Tell us where you are \u2014 we'll help you find the path."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1120px',
      margin: '0 auto',
      padding: '48px 40px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '26px',
      color: 'var(--tt-heading)',
      margin: '0 0 20px'
    }
  }, "Three ways to walk with us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, [['Learn', 'green', 'Apply to a trail and build verifiable experience.'], ['Mentor', 'teal', 'Volunteer 2–3 hours a week to guide a learner.'], ['Partner', 'gray', 'Host a supervised project at your nonprofit.']].map(([t, tone, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: '#fff',
      border: '1px solid var(--tt-border)',
      borderRadius: 'var(--tt-radius-md)',
      padding: '18px 20px'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: tone
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: '15px',
      lineHeight: 1.5
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--tt-border)',
      borderRadius: 'var(--tt-radius-lg)',
      padding: '32px',
      boxShadow: 'var(--tt-shadow-soft)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '22px',
      color: 'var(--tt-heading)',
      margin: '0 0 6px'
    }
  }, "Start your application"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 22px',
      fontSize: '14px'
    }
  }, "It takes about two minutes. No commitment yet."), sent ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Application received"
  }, "Welcome to the trail, ", name || 'friend', "! We'll be in touch within two business days.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    value: name,
    onChange: e => setName(e.target.value),
    error: err,
    style: {
      maxWidth: 'none'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email address",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@example.com",
    help: "We'll only use this to send trail updates.",
    style: {
      maxWidth: 'none'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Which trail interests you?",
    placeholder: "Foundations / Guided / Not sure yet",
    style: {
      maxWidth: 'none'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "amber",
    size: "lg",
    type: "submit"
  }, "Take the Next Step \u2192")))));
}
Object.assign(window, {
  TT_GetInvolved: GetInvolved
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GetInvolved.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* Transition Trails — website Home screen. Uses window.TransitionTrailsDesignSystem_335df4 + TT_Site. */
const {
  Button,
  Card,
  Pill,
  Stepper
} = window.TransitionTrailsDesignSystem_335df4;
function Home({
  onNav
}) {
  const {
    Icon
  } = window.TT_Site;
  const stats = [['180+', 'Learners guided'], ['42', 'Nonprofit partners'], ['91%', 'Placed within 6 months']];
  const programs = [['Foundations Trail', 'teal', 'Post-certification fundamentals — turn what you learned into supervised, real-world practice.'], ['Guided Trail', 'green', 'Mentored project work with a nonprofit partner. Build a portfolio of verifiable experience.'], ['Trail of Mastery', 'gray', 'Advanced engagements and applied judgment. Opens Fall 2026 — join the waitlist.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-body)',
      color: 'var(--tt-text)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--tt-sky-100), var(--tt-trail-light))',
      padding: '72px 40px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1120px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: '48px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Pill, {
    tone: "green"
  }, "Salesforce workforce development"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: '46px',
      lineHeight: 1.1,
      color: 'var(--tt-heading)',
      margin: '18px 0 16px'
    }
  }, "Find your trail into a Salesforce career."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: 1.6,
      maxWidth: '520px',
      margin: '0 0 28px'
    }
  }, "You earned the certification. We help you build the verifiable, on-the-job experience employers actually ask for \u2014 through supervised project work and expert mentorship."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "amber",
    size: "lg",
    onClick: () => onNav('involved')
  }, "Take the Next Step \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('programs')
  }, "View All Trails"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '320px',
      borderRadius: 'var(--tt-radius-lg)',
      background: 'linear-gradient(135deg, var(--tt-green-300), var(--tt-deep-teal))',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '22px',
      boxShadow: 'var(--tt-shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tt-font-accent)',
      fontWeight: 600,
      fontSize: '30px',
      color: '#fff'
    }
  }, "real work, real mentorship")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1120px',
      margin: '0 auto',
      padding: '40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '24px'
    }
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: '40px',
      color: 'var(--tt-trail-green)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: 'var(--tt-slate)'
    }
  }, l)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderTop: '1px solid var(--tt-border)',
      borderBottom: '1px solid var(--tt-border)',
      padding: '56px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1120px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '32px',
      color: 'var(--tt-heading)',
      margin: '0 0 8px',
      textAlign: 'center'
    }
  }, "The trail, step by step"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      margin: '0 0 40px',
      fontSize: '16px'
    }
  }, "Every step counts. We celebrate momentum over perfection."), /*#__PURE__*/React.createElement(Stepper, {
    steps: ['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate'],
    current: 2
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1120px',
      margin: '0 auto',
      padding: '56px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '32px',
      color: 'var(--tt-heading)',
      margin: 0
    }
  }, "Choose your trail"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('programs')
  }, "View All Trails \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '24px'
    }
  }, programs.map(([title, tone, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    title: title,
    media: true,
    style: {
      maxWidth: 'none'
    },
    footer: /*#__PURE__*/React.createElement("a", {
      onClick: () => onNav('programs'),
      style: {
        color: 'var(--tt-link)',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '14px',
        cursor: 'pointer'
      }
    }, "Explore trail \u2192")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: tone
  }, tone === 'gray' ? 'Coming Soon' : 'Enrolling')), body)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--tt-trail-green)',
      padding: '56px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: '30px',
      color: '#fff',
      margin: '0 0 12px'
    }
  }, "Ready to take the next step?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.85)',
      fontSize: '16px',
      margin: '0 0 24px'
    }
  }, "Applications for the Guided Trail are open now."), /*#__PURE__*/React.createElement(Button, {
    variant: "amber",
    size: "lg",
    onClick: () => onNav('involved')
  }, "Start your application \u2192")));
}
Object.assign(window, {
  TT_Home: Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Programs.jsx
try { (() => {
/* Transition Trails — website Programs screen. */
const {
  Button,
  Card,
  Pill,
  Alert,
  Stepper
} = window.TransitionTrailsDesignSystem_335df4;
function Programs({
  onNav
}) {
  const rows = [{
    title: 'Foundations Trail',
    tone: 'teal',
    status: 'Enrolling',
    len: '6 weeks',
    body: 'Bridge from certification to practice. Structured exercises and a guided first project with mentor check-ins.',
    tag: 'Guided Trail'
  }, {
    title: 'Guided Trail',
    tone: 'green',
    status: 'Enrolling',
    len: '12 weeks',
    body: 'Supervised project work with a nonprofit partner. Build a verifiable portfolio and a credible signal of workforce readiness.',
    tag: 'Flagship'
  }, {
    title: 'Trail of Mastery',
    tone: 'gray',
    status: 'Coming Soon',
    len: 'Fall 2026',
    body: 'Advanced engagements demonstrating applied judgment across multiple partner projects.',
    tag: 'Waitlist'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-body)',
      color: 'var(--tt-text)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--tt-sky-100)',
      padding: '56px 40px',
      borderBottom: '1px solid var(--tt-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1120px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "teal"
  }, "Programs"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: '40px',
      color: 'var(--tt-heading)',
      margin: '16px 0 12px'
    }
  }, "Learning paths built on real experience."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '17px',
      maxWidth: '640px',
      margin: 0,
      lineHeight: 1.6
    }
  }, "Each trail is a supervised, documented pathway. Start where you are \u2014 every milestone is proof employers can trust."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1120px',
      margin: '0 auto',
      padding: '48px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.title,
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr auto',
      gap: '28px',
      alignItems: 'center',
      background: '#fff',
      border: '1px solid var(--tt-border)',
      borderRadius: 'var(--tt-radius-lg)',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '110px',
      borderRadius: 'var(--tt-radius-md)',
      background: 'linear-gradient(135deg, var(--tt-green-100), var(--tt-green-300))'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: r.tone
  }, r.status), /*#__PURE__*/React.createElement(Pill, {
    tone: "gray"
  }, r.len)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '23px',
      color: 'var(--tt-heading)',
      margin: '0 0 6px'
    }
  }, r.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      lineHeight: 1.6,
      maxWidth: '540px'
    }
  }, r.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      minWidth: '150px'
    }
  }, r.status === 'Coming Soon' ? /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('involved')
  }, "Join waitlist") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('involved')
  }, "Apply now"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('programs')
  }, "Details \u2192"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "For nonprofits"
  }, "Partner with us to host a supervised project engagement \u2014 build capacity while a learner gains critical experience."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderTop: '1px solid var(--tt-border)',
      padding: '48px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1120px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '28px',
      color: 'var(--tt-heading)',
      margin: '0 0 28px'
    }
  }, "What the Guided Trail looks like"), /*#__PURE__*/React.createElement(Stepper, {
    steps: ['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate'],
    current: 0
  }))));
}
Object.assign(window, {
  TT_Programs: Programs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Programs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
/* Transition Trails — website shared chrome: Icon, Header, Footer.
   Exports to window.TT_Site so sibling babel scripts can use them. */
const {
  useEffect,
  useRef
} = React;
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': 1.9
        }
      });
    }
  }, [name, size, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0,
      ...style
    }
  });
}
function Header({
  current,
  onNav
}) {
  const links = [['home', 'Home'], ['programs', 'Programs'], ['involved', 'Get Involved']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      background: 'var(--tt-deep-teal)',
      fontFamily: 'var(--tt-font-body)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: '20px',
      color: '#fff',
      letterSpacing: '.01em'
    }
  }, "Transition Trails"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: 'var(--tt-sky-blue)',
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, "Bridging the experience gap")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '28px'
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--tt-font-body)',
      fontSize: '15px',
      fontWeight: current === id ? 600 : 400,
      color: current === id ? '#fff' : 'rgba(255,255,255,.82)',
      borderBottom: current === id ? '2px solid var(--tt-sun-amber)' : '2px solid transparent',
      padding: '4px 0'
    }
  }, label)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('involved'),
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '14px',
      background: 'var(--tt-sun-amber)',
      color: 'var(--tt-charcoal)',
      border: 'none',
      padding: '10px 20px',
      borderRadius: 'var(--tt-radius-md)',
      cursor: 'pointer',
      boxShadow: 'var(--tt-shadow-amber)'
    }
  }, "Donate")));
}
function Footer({
  onNav
}) {
  const cols = [['Programs', ['Foundations Trail', 'Guided Trail', 'Trail of Mastery', 'For Nonprofits']], ['Organization', ['Our Mission', 'Impact & Evidence', 'Team', 'Governance']], ['Community', ['Volunteer', 'Partner With Us', 'Notes from the Trail', 'Digital Compass']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--tt-charcoal)',
      color: 'rgba(255,255,255,.72)',
      padding: '48px 40px 32px',
      fontFamily: 'var(--tt-font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: '32px',
      maxWidth: '1120px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 700,
      fontSize: '18px',
      color: '#fff',
      marginBottom: '10px'
    }
  }, "Transition Trails"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13.5px',
      lineHeight: 1.6,
      maxWidth: '260px',
      margin: 0
    }
  }, "Empowering individuals and organizations by bridging the experience gap through education, mentorship, and hands-on work.")), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tt-font-heading)',
      fontWeight: 600,
      fontSize: '13px',
      color: '#fff',
      marginBottom: '12px',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav && onNav('home'),
    style: {
      color: 'rgba(255,255,255,.72)',
      textDecoration: 'none',
      fontSize: '13.5px',
      cursor: 'pointer'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1120px',
      margin: '32px auto 0',
      paddingTop: '20px',
      borderTop: '1px solid rgba(255,255,255,.14)',
      fontSize: '12.5px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Transition Trails \xB7 transitiontrails.org"), /*#__PURE__*/React.createElement("span", null, "Angela Landrith, Founder & CEO")));
}
Object.assign(window, {
  TT_Site: {
    Icon,
    Header,
    Footer
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.CompassCTA = __ds_scope.CompassCTA;

__ds_ns.NeedRow = __ds_scope.NeedRow;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.HumanGate = __ds_scope.HumanGate;

__ds_ns.PennyFlag = __ds_scope.PennyFlag;

__ds_ns.PennyMessage = __ds_scope.PennyMessage;

__ds_ns.PENNY_MODES = __ds_scope.PENNY_MODES;

__ds_ns.PennyModeBadge = __ds_scope.PennyModeBadge;

__ds_ns.Objectives = __ds_scope.Objectives;

__ds_ns.ProgramBand = __ds_scope.ProgramBand;

__ds_ns.Rubric = __ds_scope.Rubric;

__ds_ns.SignOff = __ds_scope.SignOff;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.ActionPlan = __ds_scope.ActionPlan;

__ds_ns.BuildStep = __ds_scope.BuildStep;

__ds_ns.CoachNote = __ds_scope.CoachNote;

__ds_ns.KitCode = __ds_scope.KitCode;

__ds_ns.KitMeta = __ds_scope.KitMeta;

__ds_ns.KitNote = __ds_scope.KitNote;

__ds_ns.NoteLines = __ds_scope.NoteLines;

__ds_ns.QRLink = __ds_scope.QRLink;

__ds_ns.ResourceLink = __ds_scope.ResourceLink;

__ds_ns.TabStrip = __ds_scope.TabStrip;

__ds_ns.TrailIcon = __ds_scope.TrailIcon;

})();
