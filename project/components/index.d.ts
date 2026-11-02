import React, { ReactNode, CSSProperties, ChangeEventHandler } from 'react';

export interface ButtonProps {
  /** Visual role. `amber` is the single "Next Step" CTA — use at most one per screen. */
  variant?: 'primary' | 'secondary' | 'amber' | 'ghost';
  /** Size preset. */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children?: ReactNode;
  style?: CSSProperties;
}

/**
 * Primary action button for Transition Trails.
 * @startingPoint section="Actions" subtitle="Trail Green / teal / amber CTAs" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;

export interface CardProps {
  /** Card title, rendered as Poppins H4. */
  title?: string;
  children?: ReactNode;
  /** Show a media header. Pass any node to overlay on the green-tint placeholder. */
  media?: ReactNode;
  /** Background image URL for the media header (photo / illustration). */
  mediaSrc?: string;
  /** Footer node — typically a link or Button. */
  footer?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

/**
 * Content card with optional media header; lifts on hover.
 * @startingPoint section="Content" subtitle="Media header, title, body, footer" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;

export interface InputProps {
  /** Field label (rendered in Open Sans 600). */
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Helper text below the field. */
  help?: string;
  /** Error message — renders Amber-700 text with a ⚠ glyph, overrides help. */
  error?: string;
  disabled?: boolean;
  style?: CSSProperties;
}

/**
 * Labeled text input with green focus ring and accessible error state.
 * @startingPoint section="Forms" subtitle="Label, input, help & error" viewport="700x150"
 */
export function Input(props: InputProps): JSX.Element;

export interface StatBlockProps {
  /** The figure itself, e.g. "42" or "91%". */
  value: string;
  /** What the figure means, in one line. */
  label?: string;
  /** Attribution. Required in practice for any figure that is not our own. */
  source?: string;
  tone?: 'teal' | 'green';
  style?: CSSProperties;
}

/**
 * Large scannable statistic for nonprofit-facing material.
 * @startingPoint section="Partner" subtitle="Sourced statistic for the business case" viewport="700x160"
 */
export function StatBlock(props: StatBlockProps): JSX.Element;

export interface NeedRowProps {
  /** The constraint the nonprofit already recognizes in itself. */
  need: ReactNode;
  /** What supervised project capacity does about it. */
  answer: ReactNode;
  /** Optional bolded outcome line under the answer. */
  outcome?: ReactNode;
  /** Row number. */
  n?: number | string;
  style?: CSSProperties;
}

/**
 * Recognition-then-answer row for the nonprofit business case.
 * @startingPoint section="Partner" subtitle="Their constraint, then what changes" viewport="700x180"
 */
export function NeedRow(props: NeedRowProps): JSX.Element;

export interface CompassCTAProps {
  /** Panel headline. */
  headline?: string;
  /** Supporting copy — what happens when they get in touch. */
  body?: string;
  /** Destination, encoded into the QR. Defaults to the Digital Compass page. */
  url?: string;
  /** Amber button label — the one Amber element allowed in partner material. */
  cta?: string;
  /** Caption under the QR code. */
  aside?: string;
  style?: CSSProperties;
}

/**
 * Closing CTA panel for nonprofit material; always routes to the Digital Compass page.
 * @startingPoint section="Partner" subtitle="Teal panel, amber CTA, Compass QR" viewport="700x260"
 */
export function CompassCTA(props: CompassCTAProps): JSX.Element;

export interface PennyMessageProps {
  /** Who is speaking. Default 'penny'. */
  from?: 'penny' | 'learner';
  /** Penny's mode — sets the badge and the bubble's rule color. Ignored when from='learner'. */
  mode?: 'coach' | 'coordinator' | 'quest' | 'liaison';
  /** Override the displayed speaker name. Defaults to "Penny". */
  name?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * @startingPoint section="Penny" subtitle="Conversation turn with mode badge" viewport="700x260"
 * One turn in a Penny conversation, on either side of the exchange.
 */
export declare function PennyMessage(props: PennyMessageProps): JSX.Element;

export type PennyMode = 'coach' | 'coordinator' | 'quest' | 'liaison';

export interface PennyModeBadgeProps {
  /** Which mode Penny is operating in. Default 'coach'. */
  mode?: PennyMode;
  /** Append the one-word posture ("Socratic", "Action-oriented"). Default false. */
  showPosture?: boolean;
  style?: React.CSSProperties;
}

/**
 * Always-visible indicator of Penny's current mode. Penny's behavior differs
 * completely between modes, so never render a Penny surface without one.
 */
export declare function PennyModeBadge(props: PennyModeBadgeProps): JSX.Element;

export interface HumanGateProps {
  /** Header text. Default "Penny drafted this — needs your approval". */
  label?: string;
  /** Who the draft goes to once approved, e.g. "#project-dfw-rescue". */
  recipient?: string;
  /** The drafted content awaiting approval. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * @startingPoint section="Penny" subtitle="Draft awaiting human approval" viewport="700x230"
 * Wraps any Penny output bound for a client, a channel, or production.
 * Penny drafts; a human sends. Required by the trust architecture.
 */
export declare function HumanGate(props: HumanGateProps): JSX.Element;

export interface PennyFlagProps {
  /** Severity. Default 'attention'. */
  level?: 'attention' | 'watch' | 'healthy';
  /** What the signal is, e.g. "Sprint 2B overdue — client waiting". */
  title?: string;
  /** One line of supporting context. */
  detail?: string;
  /** The human action, e.g. "View learner". Omit for read-only flags. */
  action?: string;
  style?: React.CSSProperties;
}

/**
 * @startingPoint section="Penny" subtitle="Signal raised for a human to act on" viewport="700x170"
 * A signal Penny surfaced on a coach or project surface. Penny raises the flag;
 * the human makes the call.
 */
export declare function PennyFlag(props: PennyFlagProps): JSX.Element;

export interface ProgramBandProps {
  /** Which trail this module belongs to — sets the stage color and program label. */
  stage?: 'foundations' | 'guided' | 'mastery';
  /** Module number. */
  module?: number | string;
  /** Total modules, for the "Module 3 of 8" spine. */
  of?: number | string;
  /** Module title. */
  title?: string;
  /** Small tracked-out line above the title, e.g. "Unit 2 · Data Modeling". */
  eyebrow?: string;
  style?: CSSProperties;
}

/**
 * Identifying header band for official program curriculum pages.
 * @startingPoint section="Program" subtitle="Stage-colored module header" viewport="700x160"
 */
export function ProgramBand(props: ProgramBandProps): JSX.Element;

export interface ObjectivesProps {
  /** Objectives as `['EAC-1', 'Scope a configuration']` tuples, `{ code, text }`, or a pipe string `"EAC-1::text | EAC-2::text"`. */
  items: string | ([string, string] | { code?: string; text: string })[];
  /** Override the block heading. */
  heading?: string;
  style?: CSSProperties;
}

/**
 * Competency-coded learning objectives — what makes a module assessable.
 * @startingPoint section="Program" subtitle="Objectives with competency codes" viewport="700x220"
 */
export function Objectives(props: ObjectivesProps): JSX.Element;

export interface RubricProps {
  /** Criteria as `[name, emerging, proficient, exemplary]` tuples, `{ name, cells }`, or a pipe string `"Scoping::a::b::c | Validation::a::b::c"`. */
  criteria: string | (string[] | { name: string; cells: string[] })[];
  /** Level column headers (array or comma string). Default Emerging · Proficient · Exemplary. */
  levels?: string | string[];
  style?: CSSProperties;
}

/**
 * Three-level assessment rubric for a program module.
 * @startingPoint section="Program" subtitle="Emerging · Proficient · Exemplary" viewport="700x260"
 */
export function Rubric(props: RubricProps): JSX.Element;

export interface SignOffProps {
  /** Checklist of artifacts the learner must submit as evidence (array or pipe-separated string). */
  evidence?: string | string[];
  /** Footnote under the signature lines. Pass "" to hide. */
  note?: string;
  style?: CSSProperties;
}

/**
 * Mentor sign-off and evidence checklist — the credential artifact of a program module.
 * @startingPoint section="Program" subtitle="Evidence checklist & mentor signature" viewport="700x300"
 */
export function SignOff(props: SignOffProps): JSX.Element;

export interface PillProps {
  /** Color tone. */
  tone?: 'green' | 'teal' | 'amber' | 'gray';
  children?: ReactNode;
  style?: CSSProperties;
}

/**
 * Small rounded status / category label.
 * @startingPoint section="Status" subtitle="Trail type & status labels" viewport="700x120"
 */
export function Pill(props: PillProps): JSX.Element;

export interface AlertProps {
  /** Semantic tone; sets background, border, and leading glyph. */
  tone?: 'success' | 'info' | 'warning' | 'neutral';
  /** Bold lead-in (rendered in Poppins). */
  title?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

/**
 * Inline callout that always pairs an icon with the message.
 * @startingPoint section="Status" subtitle="Success / info / warning callouts" viewport="700x200"
 */
export function Alert(props: AlertProps): JSX.Element;

export interface StepperProps {
  /** Step labels (strings) or { label } objects, in order. */
  steps: (string | { label: string })[];
  /** 0-based index of the current step (marked in Sun Amber). */
  current?: number;
  style?: CSSProperties;
}

/**
 * Horizontal progress stepper for a learner's journey along a trail.
 * @startingPoint section="Status" subtitle="Trail progress — amber = current step" viewport="700x140"
 */
export function Stepper(props: StepperProps): JSX.Element;

export interface TabStripProps {
  /** Section labels in order — an array, `{ label, href }` objects, or a plain comma-separated string. */
  sections: string | (string | { label: string; href?: string })[];
  /** 0-based index of the section this page belongs to (filled tab). */
  active?: number | string;
  style?: CSSProperties;
}

/**
 * Printed vertical tab strip down the page edge — makes the PDF feel like a tabbed notebook.
 * @startingPoint section="Trail Kit" subtitle="Notebook edge tabs, doubling as PDF nav" viewport="700x300"
 */
export function TabStrip(props: TabStripProps): JSX.Element;

export interface KitMetaProps {
  /** Label/value pairs as `['Time', '45 min']` tuples, `{ label, value }` objects, or a pipe string `"Time::45 min | Level::Beginner"`. */
  items: string | ([string, string] | { label: string; value: string })[];
  style?: CSSProperties;
}

/**
 * Rule-bounded metadata bar: time to complete, level, prerequisites.
 * @startingPoint section="Trail Kit" subtitle="Time · level · prerequisites" viewport="700x120"
 */
export function KitMeta(props: KitMetaProps): JSX.Element;

export interface QRLinkProps {
  /** Destination URL encoded into the QR code (YouTube video, template, resource). */
  url: string;
  /** Bold lead label, e.g. "Watch: Enable the feature". */
  label?: string;
  /** Supporting line under the label. */
  caption?: string;
  /** QR square size in px. Default 96. Keep ≥ 84px for reliable print scanning. */
  size?: number;
  /** Label ink color. */
  tone?: 'clay' | 'teal';
  style?: CSSProperties;
}

/**
 * Scannable QR code linking a printed Trail Kit page to video or web resources.
 * @startingPoint section="Trail Kit" subtitle="Scannable link to video & resources" viewport="700x140"
 */
export function QRLink(props: QRLinkProps): JSX.Element;

export interface ResourceLinkProps {
  /** Resource name, e.g. "Salesforce Admin Study Guide". */
  name: string;
  /** Who publishes it, e.g. "K2 University". */
  provider?: string;
  /** Destination URL, encoded into the QR code. */
  url: string;
  /** One line on why it is worth the learner's time. */
  why?: string;
  /** Type marker, e.g. Guide · Video · Tool · Community · Docs. Default "Guide". */
  kind?: string;
  /** True when the link earns Transition Trails a commission — renders a visible "Affiliate link" marker. */
  affiliate?: boolean;
  /** True for free resources — renders a "Free" marker. */
  free?: boolean;
  style?: CSSProperties;
}

/**
 * External resource row with QR code and explicit affiliate disclosure.
 * @startingPoint section="Trail Kit" subtitle="Resource & affiliate link with QR" viewport="700x220"
 */
export function ResourceLink(props: ResourceLinkProps): JSX.Element;

export interface BuildStepProps {
  /** Step number shown in the teal numeral badge. */
  n: number | string;
  /** Step heading. */
  title?: string;
  /** Self-check line — what the learner should see if the step worked. */
  verify?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}

/**
 * Numbered build step with a "you should see" self-check line.
 * @startingPoint section="Trail Kit" subtitle="Numbered step with verification" viewport="700x200"
 */
export function BuildStep(props: BuildStepProps): JSX.Element;

export interface CoachNoteProps {
  /** Label above the note. Default "From your coach". */
  title?: string;
  children?: ReactNode;
  /** Optional handwritten-style closing line (Caveat) — an encouragement, not information. */
  aside?: ReactNode;
  /** Rail-safe layout: drops the 30px avatar for a small dot beside the label and tightens
   *  padding, returning ~140px of text column. Use inside the 2.05in marginalia rail. */
  compact?: boolean | string;
  style?: CSSProperties;
}

/**
 * The Trail Kit speaking as the reader's coach — direct address at the points people stall.
 * @startingPoint section="Trail Kit" subtitle="The kit acting as the reader's coach" viewport="700x200"
 */
export function CoachNote(props: CoachNoteProps): JSX.Element;

export interface KitNoteProps {
  /** Note kind — sets label, glyph, and color. */
  kind?: 'tip' | 'watchout' | 'practice' | 'remember';
  /** Override the default label text. */
  title?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

/**
 * Side-rail callout that elevates instructions into guidance.
 * @startingPoint section="Trail Kit" subtitle="Pro tip · watch out · best practice" viewport="700x220"
 */
export function KitNote(props: KitNoteProps): JSX.Element;

export interface NoteLinesProps {
  /** Small tracked-out label above the ruled area, e.g. "Your notes". */
  label?: string;
  /** Number of writing lines (or grid rows). Default 6. */
  lines?: number;
  /** Render a dot grid instead of rules — for sketching data models / diagrams. */
  grid?: boolean;
  style?: CSSProperties;
}

/**
 * Ruled or dot-grid writing area — the notebook surface learners write on.
 * @startingPoint section="Trail Kit" subtitle="Ruled notes & dot-grid sketch area" viewport="700x220"
 */
export function NoteLines(props: NoteLinesProps): JSX.Element;

export interface ActionPlanProps {
  /** Number of blank rows. Default 5. */
  rows?: number | string;
  /** Optional pre-filled prompts for the first column (array or comma string). */
  prompts?: string | string[];
  /** Override column headers (array or comma string). Default: Action I will take · Who I need · By when. */
  columns?: string | string[];
  style?: CSSProperties;
}

/**
 * Ruled action-plan table that closes a Trail Kit in commitment, not just reading.
 * @startingPoint section="Trail Kit" subtitle="Action · owner · date, ruled to write on" viewport="700x260"
 */
export function ActionPlan(props: ActionPlanProps): JSX.Element;

export interface KitCodeProps {
  /** The redemption / discount code, shown monospaced. */
  code: string;
  /** Small tracked-out headline above the code. Default "Your next trail". */
  headline?: string;
  /** What the code unlocks, in brand voice. */
  body?: string;
  /** Amber CTA label — the one amber element permitted in a Trail Kit. */
  cta?: string;
  /** Plain-text URL printed under the CTA. */
  url?: string;
  style?: CSSProperties;
}

/**
 * Redemption-code ticket that closes a kit and invites the next step.
 * @startingPoint section="Trail Kit" subtitle="Next-kit code & conversion CTA" viewport="700x280"
 */
export function KitCode(props: KitCodeProps): JSX.Element;

export interface TrailIconProps {
  /** Lucide icon name, kebab-case or PascalCase (e.g. "list-checks" or "ListChecks"). */
  name: string;
  /** Rendered box size in px, or any CSS length. Default 14. */
  size?: number | string;
  /** Stroke weight. Default 1.9 — heavier than Lucide's default so it holds up in print. */
  strokeWidth?: number;
  /** Stroke color. Defaults to currentColor so the icon inherits its label's ink. */
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Inline Lucide icon from the pinned CDN build, sized and weighted for print.
 * Pair with a text label — never let an icon carry meaning on its own.
 */
export declare function TrailIcon(props: TrailIconProps): JSX.Element;
