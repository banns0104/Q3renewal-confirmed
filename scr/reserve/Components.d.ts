// Components.d.ts — the complete catalog of the 12 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.ArrowLeftRight) and usable directly in JSX.
import * as React from 'react';

// figma layer: "arrow-left&right" (node 3:9042)
export interface ArrowLeftRightProps {
  className?: string;
  style?: React.CSSProperties;
  direction?: "left" | "right" | "down" | "up";
  color?: "black" | "gray" | "dimmed" | "white";
}

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

// figma layer: "Buttons / Primary" (node 3:13288)
export interface ButtonsPrimaryProps {
  className?: string;
  style?: React.CSSProperties;
  showIcon?: boolean;
  type?: "black" | "gray" | "dimmed" | "line" | "red" | "blue" | "red light";
  showArrow?: boolean;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "circle-information" (node 1:2081)
export interface CircleInformationProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "linear" | "solid" | "duotone" | "monochrome";
}

// figma layer: "IC / Button Icon" (node 3:9077)
export interface ICButtonIconProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "comment" | "flag" | "pen" | "rotate-ccw" | "share" | "wish" | "channel talk" | "reply" | "money";
  size?: "sm" | "lg";
}

// figma layer: "ic-menu12" (node 1:1427)
export interface IcMenu12Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "ic-TopbarIcon" (node 3:9347)
export interface IcTopbarIconProps {
  className?: string;
  style?: React.CSSProperties;
  showCount?: boolean;
  prop?: "bookmark" | "cart" | "category" | "notification" | "search" | "shipping-category" | "wish" | "close" | "my" | "cs";
  showNew?: boolean;
  /** Text content; defaults to "4". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "list-flag" (node 3:14165)
export interface ListFlag4Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "pick" | "honor" | "실시간" | "보유" | "전화" | "최저가" | "new" | "sale" | "outlet" | "only" | "순위" | "피쉬시리즈" | "대회";
  /** Text content; defaults to "보유". */
  text1?: string;
}

// figma layer: "Ratio/Vertical" (node 130:10290)
export interface RatioVertical2Props {
  className?: string;
  style?: React.CSSProperties;
  showImage?: boolean;
  aspectRatio?: "1:1" | "16:10" | "3:2" | "4:3" | "5:6" | "5:4" | "1:1.618" | "16:9" | "2:1" | "1.618:1" | "21:9" | "6:5" | "4:5" | "3:4" | "2:3" | "10:16" | "9:16" | "1:2" | "9:21";
}

// figma layer: "Resource/Icon/Blank" (node 22:10466)
export interface ResourceIconBlankProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "blank-black" | "blank-white";
  color?: "black" | "white";
}

// figma layer: "예약" (node 437:20093)
export interface ScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Texttag" (node 3:14378)
export interface Texttag2Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "gray" | "red" | "blue" | "green" | "gray-fill" | "red-fill" | "blue-fill" | "green-fill" | "blue2-fill" | "purple-fill";
  size?: "sm" | "md";
  /** Text content; defaults to "텍스트". */
  text1?: string;
}

declare const ArrowLeftRight: React.FC<ArrowLeftRightProps>;
declare const BadgeBadge3: React.FC<BadgeBadge3Props>;
declare const ButtonsPrimary: React.FC<ButtonsPrimaryProps>;
declare const CircleInformation: React.FC<CircleInformationProps>;
declare const ICButtonIcon: React.FC<ICButtonIconProps>;
declare const IcMenu12: React.FC<IcMenu12Props>;
declare const IcTopbarIcon: React.FC<IcTopbarIconProps>;
declare const ListFlag4: React.FC<ListFlag4Props>;
declare const RatioVertical2: React.FC<RatioVertical2Props>;
declare const ResourceIconBlank: React.FC<ResourceIconBlankProps>;
declare const Screen: React.FC<ScreenProps>;
declare const Texttag2: React.FC<Texttag2Props>;
declare global {
  interface Window {
    ArrowLeftRight: React.FC<ArrowLeftRightProps>;
    BadgeBadge3: React.FC<BadgeBadge3Props>;
    ButtonsPrimary: React.FC<ButtonsPrimaryProps>;
    CircleInformation: React.FC<CircleInformationProps>;
    ICButtonIcon: React.FC<ICButtonIconProps>;
    IcMenu12: React.FC<IcMenu12Props>;
    IcTopbarIcon: React.FC<IcTopbarIconProps>;
    ListFlag4: React.FC<ListFlag4Props>;
    RatioVertical2: React.FC<RatioVertical2Props>;
    ResourceIconBlank: React.FC<ResourceIconBlankProps>;
    Screen: React.FC<ScreenProps>;
    Texttag2: React.FC<Texttag2Props>;
  }
}
