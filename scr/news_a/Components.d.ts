// Components.d.ts — the complete catalog of the 13 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.A) and usable directly in JSX.
import * as React from 'react';

// figma layer: "새소식-A" (node 471:19008)
export interface AProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "AD-mark" (node 554:8113)
export interface ADMarkProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "black" | "white";
  /** Text content; defaults to "AD". */
  text1?: string;
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

// figma layer: "Icon/Reward-money" (node 768:24305)
export interface IconRewardMoneyProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "money" | "moneyfill";
  fill?: boolean;
}

// figma layer: "Icon/Search" (node 579:9166)
export interface IconSearchProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "search" | "searchfill";
  fill?: boolean;
}

// figma layer: "Icon/Trophy" (node 756:24081)
export interface IconTrophy4Props {
  className?: string;
  style?: React.CSSProperties;
  variant?: "trophy" | "trophyfill";
  fill?: boolean;
}

// figma layer: "Icon/Weather" (node 190:11502)
export interface IconWeatherProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "a-little-cloud" | "a-shower-of-snow" | "clear-after-cloudy" | "clear-after-rain" | "clear-after-snow" | "clear-after-snow-and-rain" | "clear-after-thunderstorm" | "cloud" | "dust" | "fog" | "gradually-cloudy" | "gradually-cloudy-and-rain" | "gradually-cloudy-and-snow" | "gradually-cloudy-and-snow-and-rain" | "gradually-cloudy-and-thunderstorm" | "much-cloud" | "rain" | "shower" | "snow" | "snow-and-rain" | "sunny" | "thunderstorm";
}

// figma layer: "Ratio/Vertical" (node 130:10290)
export interface RatioVertical2Props {
  className?: string;
  style?: React.CSSProperties;
  showImage?: boolean;
  aspectRatio?: "1:1" | "16:10" | "3:2" | "4:3" | "5:6" | "5:4" | "1:1.618" | "16:9" | "2:1" | "1.618:1" | "21:9" | "6:5" | "4:5" | "3:4" | "2:3" | "10:16" | "9:16" | "1:2" | "9:21";
}

declare const A: React.FC<AProps>;
declare const ADMark: React.FC<ADMarkProps>;
declare const ButtonMore: React.FC<ButtonMoreProps>;
declare const CardHorizontalBanner: React.FC<CardHorizontalBannerProps>;
declare const ClockEight: React.FC<ClockEightProps>;
declare const Head: React.FC<HeadProps>;
declare const IconArrowNarrow: React.FC<IconArrowNarrowProps>;
declare const IconChevron: React.FC<IconChevronProps>;
declare const IconRewardMoney: React.FC<IconRewardMoneyProps>;
declare const IconSearch: React.FC<IconSearchProps>;
declare const IconTrophy4: React.FC<IconTrophy4Props>;
declare const IconWeather: React.FC<IconWeatherProps>;
declare const RatioVertical2: React.FC<RatioVertical2Props>;
declare global {
  interface Window {
    A: React.FC<AProps>;
    ADMark: React.FC<ADMarkProps>;
    ButtonMore: React.FC<ButtonMoreProps>;
    CardHorizontalBanner: React.FC<CardHorizontalBannerProps>;
    ClockEight: React.FC<ClockEightProps>;
    Head: React.FC<HeadProps>;
    IconArrowNarrow: React.FC<IconArrowNarrowProps>;
    IconChevron: React.FC<IconChevronProps>;
    IconRewardMoney: React.FC<IconRewardMoneyProps>;
    IconSearch: React.FC<IconSearchProps>;
    IconTrophy4: React.FC<IconTrophy4Props>;
    IconWeather: React.FC<IconWeatherProps>;
    RatioVertical2: React.FC<RatioVertical2Props>;
  }
}
