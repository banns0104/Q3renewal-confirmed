// Components.d.ts — the complete catalog of the 17 component(s) in
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

// figma layer: "Control/Segmented/Box-dynamic" (node 629:17282)
export interface ControlSegmentedBoxDynamicProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: "off" | "on";
  /** Text content; defaults to "Label". */
  text1?: string;
}

// figma layer: "Head" (node 474:3127)
export interface HeadProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: "common";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Icon" (node 741:3602)
export interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: "bridge" | "dam" | "fresh water" | "salt water" | "reservoir" | "harbor2" | "harbor" | "river";
}

// figma layer: "Icon/Layer" (node 579:8080)
export interface IconLayerProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "layerfill" | "layer";
  fill?: boolean;
}

// figma layer: "Icon/Location" (node 629:16947)
export interface IconLocationProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "location" | "locationfill";
  fill?: boolean;
}

// figma layer: "Icon/Search" (node 579:9166)
export interface IconSearchProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "search" | "searchfill";
  fill?: boolean;
}

// figma layer: "Icon/Star" (node 579:8495)
export interface IconStar2Props {
  className?: string;
  style?: React.CSSProperties;
  variant?: "starfill" | "star";
  fill?: boolean;
}

// figma layer: "Icon/Traffic-cone" (node 963:8140)
export interface IconTrafficConeProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "traffic-cone" | "traffic-conefill";
  fill?: boolean;
}

// figma layer: "Icon/Xmark" (node 625:8285)
export interface IconXmarkProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "circlelarge" | "circlesmall" | "linelarge" | "linenormal" | "linesmall" | "component 3" | "circle-linelarge";
  size?: "lg" | "normal" | "sm";
  thin?: boolean;
  tight?: boolean;
}

// figma layer: "Modal/Bottom/Head" (node 987:8468)
export interface ModalBottomHeadProps {
  className?: string;
  style?: React.CSSProperties;
  showTitle?: boolean;
  headEmpty?: boolean;
  showFavorite?: boolean;
  showDiscription?: boolean;
  showX?: boolean;
  variant?: "common" | "map";
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "Discription". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Pin-label" (node 743:3620)
export interface PinLabelProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "부안 청호지". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Resource/Icon/Blank" (node 22:10466)
export interface ResourceIconBlankProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "blank-black" | "blank-white";
  color?: "black" | "white";
}

// figma layer: "포인트/바다/항구 모달" (node 1004:11461)
export interface ScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "포인트/민물/댐" (node 987:8518)
export interface Screen2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "포인트/민물/강" (node 992:10056)
export interface Screen3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "포인트/민물/공통" (node 1045:18277)
export interface Screen4Props {
  className?: string;
  style?: React.CSSProperties;
}

declare const BadgeBadge3: React.FC<BadgeBadge3Props>;
declare const ControlSegmentedBoxDynamic: React.FC<ControlSegmentedBoxDynamicProps>;
declare const Head: React.FC<HeadProps>;
declare const Icon: React.FC<IconProps>;
declare const IconLayer: React.FC<IconLayerProps>;
declare const IconLocation: React.FC<IconLocationProps>;
declare const IconSearch: React.FC<IconSearchProps>;
declare const IconStar2: React.FC<IconStar2Props>;
declare const IconTrafficCone: React.FC<IconTrafficConeProps>;
declare const IconXmark: React.FC<IconXmarkProps>;
declare const ModalBottomHead: React.FC<ModalBottomHeadProps>;
declare const PinLabel: React.FC<PinLabelProps>;
declare const ResourceIconBlank: React.FC<ResourceIconBlankProps>;
declare const Screen: React.FC<ScreenProps>;
declare const Screen2: React.FC<Screen2Props>;
declare const Screen3: React.FC<Screen3Props>;
declare const Screen4: React.FC<Screen4Props>;
declare global {
  interface Window {
    BadgeBadge3: React.FC<BadgeBadge3Props>;
    ControlSegmentedBoxDynamic: React.FC<ControlSegmentedBoxDynamicProps>;
    Head: React.FC<HeadProps>;
    Icon: React.FC<IconProps>;
    IconLayer: React.FC<IconLayerProps>;
    IconLocation: React.FC<IconLocationProps>;
    IconSearch: React.FC<IconSearchProps>;
    IconStar2: React.FC<IconStar2Props>;
    IconTrafficCone: React.FC<IconTrafficConeProps>;
    IconXmark: React.FC<IconXmarkProps>;
    ModalBottomHead: React.FC<ModalBottomHeadProps>;
    PinLabel: React.FC<PinLabelProps>;
    ResourceIconBlank: React.FC<ResourceIconBlankProps>;
    Screen: React.FC<ScreenProps>;
    Screen2: React.FC<Screen2Props>;
    Screen3: React.FC<Screen3Props>;
    Screen4: React.FC<Screen4Props>;
  }
}
