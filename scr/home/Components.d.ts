// Components.d.ts — the complete catalog of the 19 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.ADMark) and usable directly in JSX.
import * as React from 'react';

// figma layer: "AD-mark" (node 554:8113)
export interface ADMarkProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "black" | "white";
  /** Text content; defaults to "AD". */
  text1?: string;
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

// figma layer: "Badge/Seats left" (node 390:17733)
export interface BadgeSeatsLeftProps {
  className?: string;
  style?: React.CSSProperties;
  name?: "seats left";
  closingSoon?: boolean;
  /** Text content; defaults to "잔여 3". */
  text1?: string;
}

// figma layer: "BottomTab" (node 473:3081)
export interface BottomTabProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "새소식" | "탐색" | "출조";
  logined?: boolean;
  /** Text content; defaults to "새소식". */
  text1?: string;
  /** Text content; defaults to "탐색". */
  text2?: string;
  /** Text content; defaults to "출조". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Button/More" (node 247:15356)
export interface ButtonMoreProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: "moreFill" | "more";
  fill?: boolean;
  /** Text content; defaults to "더보기". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Card/Horizontal-banner" (node 471:20916)
export interface CardHorizontalBannerProps {
  className?: string;
  style?: React.CSSProperties;
  showADBadge?: boolean;
  variant?: "box" | "full";
  showCategoryBadge?: boolean;
  full?: boolean;
  /** Text content; defaults to "인천 갑오징어 일왕!\n조황으로 증명합니다.". */
  text1?: string;
  /** Text content; defaults to "인천 에프투호". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "clock-eight" (node 178:11085)
export interface ClockEightProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "linear" | "solid" | "duotone" | "monochrome";
}

// figma layer: "Head" (node 474:3127)
export interface HeadProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: "common";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Icon/Arrow/Narrow" (node 579:9173)
export interface IconArrowNarrowProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "arrow-left" | "arrow-down-left" | "arrow-down" | "arrow-down-right" | "arrow-right" | "arrow-up-right" | "arrow-up" | "arrow-up-left" | "arrow-narrow-left" | "arrow-narrow-down" | "arrow-narrow-right" | "arrow-narrow-up" | "arrow-narrow-left-move" | "arrow-narrow-left-alignment" | "arrow-narrow-bottom-alignment" | "arrow-narrow-down-move" | "arrow-narrow-top-alignment" | "arrow-narrow-up-move" | "arrow-narrow-right-move" | "arrow-narrow-right-alignment";
  type?: "narrow" | "normal";
  small?: boolean;
  thick?: boolean;
}

// figma layer: "Icon/Calendar" (node 579:9826)
export interface IconCalendarProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "calendar";
  fill?: boolean;
}

// figma layer: "Icon/Chevron" (node 579:9578)
export interface IconChevronProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "chevron-left" | "chevron-down" | "chevron-right" | "chevron-up" | "chevron-left-double" | "chevron-down-double" | "chevron-right-double" | "chevron-up-double" | "chevron-selector-horizontal" | "chevron-selector-vertical";
  small?: boolean;
  double?: boolean;
  thick?: boolean;
  tight?: boolean;
}

// figma layer: "Icon/Circle-user" (node 579:7937)
export interface IconCircleUser2Props {
  className?: string;
  style?: React.CSSProperties;
  variant?: "circle-user" | "circle-userfill";
  fill?: boolean;
}

// figma layer: "Icon/Download" (node 579:13030)
export interface IconDownloadProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "download" | "downloadfill";
  fill?: boolean;
  thin?: boolean;
}

// figma layer: "Icon/Search" (node 579:9166)
export interface IconSearchProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "search" | "searchfill";
  fill?: boolean;
}

// figma layer: "Icon/Time" (node 579:8892)
export interface IconTimeProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "timefill" | "time";
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

// figma layer: "통합홈" (node 689:18875)
export interface ScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const ADMark: React.FC<ADMarkProps>;
declare const BadgeBadge3: React.FC<BadgeBadge3Props>;
declare const BadgeSeatsLeft: React.FC<BadgeSeatsLeftProps>;
declare const BottomTab: React.FC<BottomTabProps>;
declare const ButtonMore: React.FC<ButtonMoreProps>;
declare const CardHorizontalBanner: React.FC<CardHorizontalBannerProps>;
declare const ClockEight: React.FC<ClockEightProps>;
declare const Head: React.FC<HeadProps>;
declare const IconArrowNarrow: React.FC<IconArrowNarrowProps>;
declare const IconCalendar: React.FC<IconCalendarProps>;
declare const IconChevron: React.FC<IconChevronProps>;
declare const IconCircleUser2: React.FC<IconCircleUser2Props>;
declare const IconDownload: React.FC<IconDownloadProps>;
declare const IconSearch: React.FC<IconSearchProps>;
declare const IconTime: React.FC<IconTimeProps>;
declare const IconXmark: React.FC<IconXmarkProps>;
declare const RatioVertical2: React.FC<RatioVertical2Props>;
declare const ResourceIconBlank: React.FC<ResourceIconBlankProps>;
declare const Screen: React.FC<ScreenProps>;
declare global {
  interface Window {
    ADMark: React.FC<ADMarkProps>;
    BadgeBadge3: React.FC<BadgeBadge3Props>;
    BadgeSeatsLeft: React.FC<BadgeSeatsLeftProps>;
    BottomTab: React.FC<BottomTabProps>;
    ButtonMore: React.FC<ButtonMoreProps>;
    CardHorizontalBanner: React.FC<CardHorizontalBannerProps>;
    ClockEight: React.FC<ClockEightProps>;
    Head: React.FC<HeadProps>;
    IconArrowNarrow: React.FC<IconArrowNarrowProps>;
    IconCalendar: React.FC<IconCalendarProps>;
    IconChevron: React.FC<IconChevronProps>;
    IconCircleUser2: React.FC<IconCircleUser2Props>;
    IconDownload: React.FC<IconDownloadProps>;
    IconSearch: React.FC<IconSearchProps>;
    IconTime: React.FC<IconTimeProps>;
    IconXmark: React.FC<IconXmarkProps>;
    RatioVertical2: React.FC<RatioVertical2Props>;
    ResourceIconBlank: React.FC<ResourceIconBlankProps>;
    Screen: React.FC<ScreenProps>;
  }
}
