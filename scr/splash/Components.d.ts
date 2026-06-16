// Components.d.ts — the complete catalog of the 2 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Splash1) and usable directly in JSX.
import * as React from 'react';

// figma layer: "splash1" (node 1:35842)
export interface Splash1Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "신나는 나의 피싱라이프". */
  text1?: string;
  /** Text content; defaults to "어바웃피싱". */
  text2?: string;
}

// figma layer: "splash1" (node 857:24606)
export interface Splash12Props {
  className?: string;
  style?: React.CSSProperties;
}

declare const Splash1: React.FC<Splash1Props>;
declare const Splash12: React.FC<Splash12Props>;
declare global {
  interface Window {
    Splash1: React.FC<Splash1Props>;
    Splash12: React.FC<Splash12Props>;
  }
}
