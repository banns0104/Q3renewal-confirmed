// Components.d.ts — the complete catalog of the 8 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.IconAnchor) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Icon/Anchor" (node 579:9162)
export interface IconAnchorProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "anchor";
  fill?: "false";
}

// figma layer: "Icon/cctv" (node 579:8608)
export interface IconCctvProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "cctv" | "cctvFill";
  fill?: boolean;
}

// figma layer: "Icon/Fish" (node 625:7352)
export interface IconFishProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "fish" | "fishfill";
  fill?: boolean;
}

// figma layer: "Icon/Fork-knife" (node 579:8086)
export interface IconForkKnifeProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "fork-knife";
  fill?: "false";
}

// figma layer: "Icon/Hotel" (node 579:7933)
export interface IconHotelProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "hotel";
  fill?: "false";
}

// figma layer: "Icon/Search" (node 579:9166)
export interface IconSearchProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "search" | "searchfill";
  fill?: boolean;
}

// figma layer: "Icon/Smile" (node 579:8090)
export interface IconSmile2Props {
  className?: string;
  style?: React.CSSProperties;
  variant?: "smile" | "smilefill";
  fill?: boolean;
}

// figma layer: "map" (node 857:24526)
export interface ScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const IconAnchor: React.FC<IconAnchorProps>;
declare const IconCctv: React.FC<IconCctvProps>;
declare const IconFish: React.FC<IconFishProps>;
declare const IconForkKnife: React.FC<IconForkKnifeProps>;
declare const IconHotel: React.FC<IconHotelProps>;
declare const IconSearch: React.FC<IconSearchProps>;
declare const IconSmile2: React.FC<IconSmile2Props>;
declare const Screen: React.FC<ScreenProps>;
declare global {
  interface Window {
    IconAnchor: React.FC<IconAnchorProps>;
    IconCctv: React.FC<IconCctvProps>;
    IconFish: React.FC<IconFishProps>;
    IconForkKnife: React.FC<IconForkKnifeProps>;
    IconHotel: React.FC<IconHotelProps>;
    IconSearch: React.FC<IconSearchProps>;
    IconSmile2: React.FC<IconSmile2Props>;
    Screen: React.FC<ScreenProps>;
  }
}
