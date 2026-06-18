// Components.d.ts — the complete catalog of the 15 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Black) and usable directly in JSX.
import * as React from 'react';

// figma layer: "로그인_black" (node 857:24707)
export interface BlackProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Control/Segmented/Box-dynamic" (node 629:17282)
export interface ControlSegmentedBoxDynamicProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: "off" | "on";
  /** Text content; defaults to "Label". */
  text1?: string;
}

// figma layer: "Fade Gradient" (node 928:7521)
export interface FadeGradientProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: "bottom" | "left" | "right" | "top";
}

// figma layer: "Home Quick" (node 3:9529)
export interface HomeQuickProps {
  className?: string;
  style?: React.CSSProperties;
  showFlag?: boolean;
  /** Text content; defaults to "선박예약". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Icon/Star" (node 579:8495)
export interface IconStar2Props {
  className?: string;
  style?: React.CSSProperties;
  variant?: "starfill" | "star";
  fill?: boolean;
}

// figma layer: "Icon/Water" (node 1004:15610)
export interface IconWaterProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "water" | "waterfill";
  fill?: boolean;
}

// figma layer: "Icon/Weather" (node 190:11502)
export interface IconWeatherProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "a-little-cloud" | "a-shower-of-snow" | "clear-after-cloudy" | "clear-after-rain" | "clear-after-snow" | "clear-after-snow-and-rain" | "clear-after-thunderstorm" | "cloud" | "dust" | "fog" | "gradually-cloudy" | "gradually-cloudy-and-rain" | "gradually-cloudy-and-snow" | "gradually-cloudy-and-snow-and-rain" | "gradually-cloudy-and-thunderstorm" | "much-cloud" | "rain" | "shower" | "snow" | "snow-and-rain" | "sunny" | "thunderstorm";
}

// figma layer: "Icon/Wind" (node 1028:15921)
export interface IconWindProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "wind";
  fill?: "false";
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

// figma layer: "quick-flag" (node 3:9522)
export interface QuickFlagProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: "hot" | "new";
  /** Text content; defaults to "hot". */
  text1?: string;
}

// figma layer: "Quick Menu Icon" (node 1054:9557)
export interface QuickMenuIconProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "드래그-프로토타입" (node 1032:17562)
export interface ScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "splash" (node 857:24606)
export interface SplashProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Wind" (node 1004:13272)
export interface Wind2Props {
  className?: string;
  style?: React.CSSProperties;
  prop?: "e" | "een" | "n" | "ne" | "nne" | "nnw" | "nw" | "s" | "se" | "see" | "sse" | "ssw" | "sw" | "w" | "wwn" | "wws";
}

declare const Black: React.FC<BlackProps>;
declare const ControlSegmentedBoxDynamic: React.FC<ControlSegmentedBoxDynamicProps>;
declare const FadeGradient: React.FC<FadeGradientProps>;
declare const HomeQuick: React.FC<HomeQuickProps>;
declare const IconStar2: React.FC<IconStar2Props>;
declare const IconWater: React.FC<IconWaterProps>;
declare const IconWeather: React.FC<IconWeatherProps>;
declare const IconWind: React.FC<IconWindProps>;
declare const IconXmark: React.FC<IconXmarkProps>;
declare const ModalBottomHead: React.FC<ModalBottomHeadProps>;
declare const QuickFlag: React.FC<QuickFlagProps>;
declare const QuickMenuIcon: React.FC<QuickMenuIconProps>;
declare const Screen: React.FC<ScreenProps>;
declare const Splash: React.FC<SplashProps>;
declare const Wind2: React.FC<Wind2Props>;
declare global {
  interface Window {
    Black: React.FC<BlackProps>;
    ControlSegmentedBoxDynamic: React.FC<ControlSegmentedBoxDynamicProps>;
    FadeGradient: React.FC<FadeGradientProps>;
    HomeQuick: React.FC<HomeQuickProps>;
    IconStar2: React.FC<IconStar2Props>;
    IconWater: React.FC<IconWaterProps>;
    IconWeather: React.FC<IconWeatherProps>;
    IconWind: React.FC<IconWindProps>;
    IconXmark: React.FC<IconXmarkProps>;
    ModalBottomHead: React.FC<ModalBottomHeadProps>;
    QuickFlag: React.FC<QuickFlagProps>;
    QuickMenuIcon: React.FC<QuickMenuIconProps>;
    Screen: React.FC<ScreenProps>;
    Splash: React.FC<SplashProps>;
    Wind2: React.FC<Wind2Props>;
  }
}
