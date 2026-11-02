import { CSSProperties, ChangeEventHandler } from 'react';

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
