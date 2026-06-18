// Components.d.ts — the complete catalog of the 2 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.IcMapFloating) and usable directly in JSX.
import * as React from 'react';

// figma layer: "ic-MapFloating" (node 1:2919)
export interface IcMapFloatingProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: "내위치" | "위성" | "내장소";
  selected?: "off" | "on";
}

// figma layer: "포인트맵" (node 437:26734)
export interface ScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const IcMapFloating: React.FC<IcMapFloatingProps>;
declare const Screen: React.FC<ScreenProps>;
declare global {
  interface Window {
    IcMapFloating: React.FC<IcMapFloatingProps>;
    Screen: React.FC<ScreenProps>;
  }
}
