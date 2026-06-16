// Components.d.ts — the complete catalog of the 4 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.BadgeBadge3) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Badge/Badge" (node 579:8179)
export interface BadgeBadge3Props {
  className?: string;
  style?: React.CSSProperties;
  showLeadingIcon?: boolean;
  variant?: "solid" | "outline";
  showTrailingIcon?: boolean;
  size?: "sm" | "md" | "lg";
  test?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Icon/Search" (node 579:9166)
export interface IconSearchProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "search" | "searchfill";
  fill?: boolean;
}

// figma layer: "Resource/Icon/Blank" (node 22:10466)
export interface ResourceIconBlankProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "blank-black" | "blank-white";
  color?: "black" | "white";
}

// figma layer: "search-업체" (node 836:28442)
export interface SearchProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const BadgeBadge3: React.FC<BadgeBadge3Props>;
declare const IconSearch: React.FC<IconSearchProps>;
declare const ResourceIconBlank: React.FC<ResourceIconBlankProps>;
declare const Search: React.FC<SearchProps>;
declare global {
  interface Window {
    BadgeBadge3: React.FC<BadgeBadge3Props>;
    IconSearch: React.FC<IconSearchProps>;
    ResourceIconBlank: React.FC<ResourceIconBlankProps>;
    Search: React.FC<SearchProps>;
  }
}
