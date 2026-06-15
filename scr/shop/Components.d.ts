// Components.d.ts — the complete catalog of the 8 component(s) in
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

// figma layer: "쇼핑" (node 437:23778)
export interface ScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "thumb" (node 1:411)
export interface ThumbProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "1:1";
}

declare const ArrowLeftRight: React.FC<ArrowLeftRightProps>;
declare const ButtonsPrimary: React.FC<ButtonsPrimaryProps>;
declare const CircleInformation: React.FC<CircleInformationProps>;
declare const ICButtonIcon: React.FC<ICButtonIconProps>;
declare const IcMenu12: React.FC<IcMenu12Props>;
declare const IcTopbarIcon: React.FC<IcTopbarIconProps>;
declare const Screen: React.FC<ScreenProps>;
declare const Thumb: React.FC<ThumbProps>;
declare global {
  interface Window {
    ArrowLeftRight: React.FC<ArrowLeftRightProps>;
    ButtonsPrimary: React.FC<ButtonsPrimaryProps>;
    CircleInformation: React.FC<CircleInformationProps>;
    ICButtonIcon: React.FC<ICButtonIconProps>;
    IcMenu12: React.FC<IcMenu12Props>;
    IcTopbarIcon: React.FC<IcTopbarIconProps>;
    Screen: React.FC<ScreenProps>;
    Thumb: React.FC<ThumbProps>;
  }
}
