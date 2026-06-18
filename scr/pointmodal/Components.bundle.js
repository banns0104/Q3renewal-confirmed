// Components bundle — 17 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 22:10466 Resource/Icon/Blank (2 variants)
const __venc_ResourceIconBlank = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ResourceIconBlank = p => "variant=" + __venc_ResourceIconBlank(p.variant) + '|' + "color=" + __venc_ResourceIconBlank(p.color);
function ResourceIconBlank(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "blank-black",
    color: _p.color ?? "black"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-black3-00)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 17.07 L 0 15.615 C 0 15.113 0.407 14.706 0.909 14.706 C 1.411 14.706 1.819 15.113 1.819 15.615 L 1.819 17.07 C 1.819 17.684 2.316 18.181 2.93 18.181 L 4.385 18.181 C 4.887 18.181 5.294 18.589 5.294 19.091 C 5.294 19.593 4.887 20 4.385 20 L 2.93 20 C 1.312 20 0 18.688 0 17.07 Z M 12.287 18.181 C 12.789 18.181 13.197 18.588 13.197 19.091 C 13.197 19.593 12.789 20 12.287 20 L 7.713 20 C 7.211 20 6.803 19.593 6.803 19.091 C 6.803 18.588 7.211 18.181 7.713 18.181 L 12.287 18.181 Z M 18.181 17.07 L 18.181 15.615 C 18.181 15.113 18.589 14.706 19.091 14.706 C 19.593 14.706 20 15.113 20 15.615 L 20 17.07 C 20 18.688 18.688 20 17.07 20 L 15.615 20 C 15.113 20 14.706 19.593 14.706 19.091 C 14.706 18.589 15.113 18.181 15.615 18.181 L 17.07 18.181 C 17.684 18.181 18.181 17.684 18.181 17.07 Z M 0 12.287 L 0 7.713 C 0 7.211 0.407 6.803 0.909 6.803 C 1.412 6.803 1.819 7.211 1.819 7.713 L 1.819 12.287 C 1.819 12.789 1.412 13.197 0.909 13.197 C 0.407 13.197 0 12.789 0 12.287 Z M 18.181 12.287 L 18.181 7.713 C 18.181 7.211 18.588 6.803 19.091 6.803 C 19.593 6.803 20 7.211 20 7.713 L 20 12.287 C 20 12.789 19.593 13.197 19.091 13.197 C 18.588 13.197 18.181 12.789 18.181 12.287 Z M 0 4.385 L 0 2.93 C 0 1.312 1.312 0 2.93 0 L 4.385 0 C 4.887 0 5.294 0.407 5.294 0.909 C 5.294 1.411 4.887 1.819 4.385 1.819 L 2.93 1.819 C 2.316 1.819 1.819 2.316 1.819 2.93 L 1.819 4.385 C 1.819 4.887 1.411 5.294 0.909 5.294 C 0.407 5.294 0 4.887 0 4.385 Z M 18.181 4.385 L 18.181 2.93 C 18.181 2.316 17.684 1.819 17.07 1.819 L 15.615 1.819 C 15.113 1.819 14.706 1.411 14.706 0.909 C 14.706 0.407 15.113 0 15.615 0 L 17.07 0 C 18.688 0 20 1.312 20 2.93 L 20 4.385 C 20 4.887 19.593 5.294 19.091 5.294 C 18.589 5.294 18.181 4.887 18.181 4.385 Z M 12.287 0 C 12.789 0 13.197 0.407 13.197 0.909 C 13.197 1.412 12.789 1.819 12.287 1.819 L 7.713 1.819 C 7.211 1.819 6.803 1.412 6.803 0.909 C 6.803 0.407 7.211 0 7.713 0 L 12.287 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-white-ff)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.801,
    height: 19.801,
    viewBox: "0 0 19.801 19.801",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.1,
      top: 2.1,
      width: 19.801,
      height: 19.801,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 16.9 L 0 15.459 C 0 14.962 0.403 14.56 0.9 14.56 C 1.397 14.56 1.801 14.962 1.801 15.459 L 1.801 16.9 C 1.801 17.508 2.293 18 2.9 18 L 4.342 18 C 4.839 18 5.241 18.403 5.241 18.9 C 5.241 19.397 4.839 19.801 4.342 19.801 L 2.9 19.801 C 1.299 19.801 0 18.502 0 16.9 Z M 12.165 18 C 12.662 18 13.065 18.403 13.065 18.9 C 13.065 19.397 12.662 19.801 12.165 19.801 L 7.636 19.801 C 7.139 19.801 6.735 19.397 6.735 18.9 C 6.735 18.403 7.139 18 7.636 18 L 12.165 18 Z M 18 16.9 L 18 15.459 C 18 14.962 18.403 14.56 18.9 14.56 C 19.397 14.56 19.801 14.962 19.801 15.459 L 19.801 16.9 C 19.801 18.502 18.502 19.801 16.9 19.801 L 15.459 19.801 C 14.962 19.801 14.56 19.397 14.56 18.9 C 14.56 18.403 14.962 18 15.459 18 L 16.9 18 C 17.508 18 18 17.508 18 16.9 Z M 0 12.165 L 0 7.636 C 0 7.139 0.403 6.735 0.9 6.735 C 1.397 6.735 1.801 7.139 1.801 7.636 L 1.801 12.165 C 1.801 12.662 1.397 13.065 0.9 13.065 C 0.403 13.065 0 12.662 0 12.165 Z M 18 12.165 L 18 7.636 C 18 7.139 18.403 6.735 18.9 6.735 C 19.397 6.735 19.801 7.139 19.801 7.636 L 19.801 12.165 C 19.801 12.662 19.397 13.065 18.9 13.065 C 18.403 13.065 18 12.662 18 12.165 Z M 0 4.342 L 0 2.9 C 0 1.299 1.299 0 2.9 0 L 4.342 0 C 4.839 0 5.241 0.403 5.241 0.9 C 5.241 1.397 4.839 1.801 4.342 1.801 L 2.9 1.801 C 2.293 1.801 1.801 2.293 1.801 2.9 L 1.801 4.342 C 1.801 4.839 1.397 5.241 0.9 5.241 C 0.403 5.241 0 4.839 0 4.342 Z M 18 4.342 L 18 2.9 C 18 2.293 17.508 1.801 16.9 1.801 L 15.459 1.801 C 14.962 1.801 14.56 1.397 14.56 0.9 C 14.56 0.403 14.962 0 15.459 0 L 16.9 0 C 18.502 0 19.801 1.299 19.801 2.9 L 19.801 4.342 C 19.801 4.839 19.397 5.241 18.9 5.241 C 18.403 5.241 18 4.839 18 4.342 Z M 12.165 0 C 12.662 0 13.065 0.403 13.065 0.9 C 13.065 1.397 12.662 1.801 12.165 1.801 L 7.636 1.801 C 7.139 1.801 6.735 1.397 6.735 0.9 C 6.735 0.403 7.139 0 7.636 0 L 12.165 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Variant=Blank-black, Color=Black
    "variant=blank-black|color=black": __body0,
    // figma: Variant=Blank-white, Color=White
    "variant=blank-white|color=white": __body1
  };
  return (__impls[__vkey_ResourceIconBlank(props)] ?? __body0)();
}

// figma node: 579:8179 Badge/Badge (6 variants)
const __venc_BadgeBadge3 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_BadgeBadge3 = p => "variant=" + __venc_BadgeBadge3(p.variant) + '|' + "size=" + __venc_BadgeBadge3(p.size);
function BadgeBadge3(_p = {}) {
  const props = {
    ..._p,
    showLeadingIcon: _p.showLeadingIcon ?? true,
    variant: _p.variant ?? "solid",
    showTrailingIcon: _p.showTrailingIcon ?? true,
    size: _p.size ?? "sm",
    test: _p.test ?? "Badge"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--gray-gray3-f3)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--margin-spacing-2) * 1px)",
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--margin-spacing-6) * 1px)",
      paddingTop: "calc(var(--margin-spacing-4) * 1px)",
      paddingRight: "calc(var(--margin-spacing-6) * 1px)",
      paddingBottom: "calc(var(--margin-spacing-4) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.showLeadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ResourceIconBlank, {
    variant: "blank-black",
    color: "black"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.test), props.showTrailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(ResourceIconBlank, {
    variant: "blank-black",
    color: "black"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "inset 0 0 0 1px rgba(133,137,160,0.24)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--margin-spacing-2) * 1px)",
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--margin-spacing-6) * 1px)",
      paddingTop: "calc(var(--margin-spacing-4) * 1px)",
      paddingRight: "calc(var(--margin-spacing-6) * 1px)",
      paddingBottom: "calc(var(--margin-spacing-4) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.showLeadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ResourceIconBlank, {
    variant: "blank-black",
    color: "black"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.test), props.showTrailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(ResourceIconBlank, {
    variant: "blank-black",
    color: "black"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--gray-gray3-f3)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--margin-spacing-2) * 1px)",
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--margin-spacing-6) * 1px)",
      paddingTop: "calc(var(--margin-spacing-4) * 1px)",
      paddingRight: "calc(var(--margin-spacing-6) * 1px)",
      paddingBottom: "calc(var(--margin-spacing-4) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.showLeadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ResourceIconBlank, {
    variant: "blank-black",
    color: "black"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-gray7-55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.test), props.showTrailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(ResourceIconBlank, {
    variant: "blank-black",
    color: "black"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "inset 0 0 0 1px rgba(133,137,160,0.24)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--margin-spacing-2) * 1px)",
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--margin-spacing-6) * 1px)",
      paddingTop: "calc(var(--margin-spacing-4) * 1px)",
      paddingRight: "calc(var(--margin-spacing-6) * 1px)",
      paddingBottom: "calc(var(--margin-spacing-4) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.showLeadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ResourceIconBlank, {
    variant: "blank-black",
    color: "black"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-gray7-55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.test), props.showTrailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(ResourceIconBlank, {
    variant: "blank-black",
    color: "black"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--gray-gray3-f3)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--margin-spacing-2) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--margin-spacing-8) * 1px)",
      paddingTop: "calc(var(--margin-spacing-8) * 1px)",
      paddingRight: "calc(var(--margin-spacing-8) * 1px)",
      paddingBottom: "calc(var(--margin-spacing-8) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.showLeadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ResourceIconBlank, {
    variant: "blank-black",
    color: "black"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.test), props.showTrailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(ResourceIconBlank, {
    variant: "blank-black",
    color: "black"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "inset 0 0 0 1px rgba(133,137,160,0.24)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--margin-spacing-2) * 1px)",
      padding: "8px 6px 8px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--margin-spacing-6) * 1px)",
      paddingTop: "calc(var(--margin-spacing-8) * 1px)",
      paddingRight: "calc(var(--margin-spacing-6) * 1px)",
      paddingBottom: "calc(var(--margin-spacing-8) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.showLeadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ResourceIconBlank, {
    variant: "blank-black",
    color: "black"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.test), props.showTrailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(ResourceIconBlank, {
    variant: "blank-black",
    color: "black"
  })));
  const __impls = {
    // figma: Variant=Solid, Size=Medium
    "variant=solid|size=md": __body0,
    // figma: Variant=Outline, Size=Medium
    "variant=outline|size=md": __body1,
    // figma: Variant=Solid, Size=Small
    "variant=solid|size=sm": __body2,
    // figma: Variant=Outline, Size=Small
    "variant=outline|size=sm": __body3,
    // figma: Variant=Solid, Size=Large
    "variant=solid|size=lg": __body4,
    // figma: Variant=Outline, Size=Large
    "variant=outline|size=lg": __body5
  };
  return (__impls[__vkey_BadgeBadge3(props)] ?? __body2)();
}

// figma node: 629:17282 Control/Segmented/Box-dynamic (2 variants)
const __venc_ControlSegmentedBoxDynamic = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ControlSegmentedBoxDynamic = p => "selected=" + __venc_ControlSegmentedBoxDynamic(p.selected);
function ControlSegmentedBoxDynamic(_p = {}) {
  const props = {
    ..._p,
    selected: _p.selected ?? "off"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 71.4,
      backgroundColor: "var(--gray-white-ff)",
      borderTop: "1px solid var(--line-line-neutral3-ee)",
      borderRight: "1px solid var(--line-line-neutral3-ee)",
      borderBottom: "1px solid var(--line-line-neutral3-ee)",
      borderLeft: "1px solid var(--line-line-neutral3-ee)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 0px 10px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Label"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 71.4,
      backgroundColor: "var(--gray-white-ff)",
      borderTop: "1px solid var(--line-line-neutral3-ee)",
      borderRight: "1px solid var(--line-line-neutral3-ee)",
      borderBottom: "1px solid var(--line-line-neutral3-ee)",
      borderLeft: "1px solid var(--line-line-neutral3-ee)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 0px 10px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray4-cc)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Label"));
  const __impls = {
    // figma: Selected=on
    "selected=on": __body0,
    // figma: Selected=off
    "selected=off": __body1
  };
  return (__impls[__vkey_ControlSegmentedBoxDynamic(props)] ?? __body1)();
}

// figma node: 579:9166 Icon/Search (2 variants)
const __venc_IconSearch = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconSearch = p => "variant=" + __venc_IconSearch(p.variant) + '|' + "fill=" + __venc_IconSearch(p.fill);
function IconSearch(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "search",
    fill: _p.fill ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.000,
    height: 20.000,
    viewBox: "0 0 20.000 20.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 8 C 14 4.686 11.314 2 8 2 C 4.686 2 2 4.686 2 8 C 2 11.314 4.686 14 8 14 C 11.314 14 14 11.314 14 8 Z M 16 8 C 16 9.847 15.372 11.545 14.321 12.899 L 19.708 18.293 C 20.098 18.684 20.098 19.318 19.707 19.708 C 19.316 20.098 18.682 20.098 18.292 19.707 L 12.907 14.314 C 11.552 15.369 9.85 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.000,
    height: 20.000,
    viewBox: "0 0 20.000 20.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 8 C 16 9.29 15.693 10.508 15.15 11.587 C 15.085 11.717 15.016 11.845 14.943 11.971 C 14.763 12.286 14.562 12.587 14.342 12.873 C 14.335 12.882 14.328 12.891 14.321 12.899 L 19.708 18.293 C 20.098 18.684 20.098 19.318 19.707 19.708 C 19.316 20.098 18.682 20.098 18.292 19.707 L 12.907 14.314 C 12.823 14.38 12.737 14.445 12.65 14.507 C 12.591 14.549 12.533 14.593 12.473 14.634 C 12.293 14.755 12.107 14.868 11.917 14.975 C 11.882 14.994 11.848 15.015 11.813 15.034 C 11.627 15.135 11.437 15.226 11.243 15.313 C 11.2 15.332 11.158 15.353 11.114 15.371 C 10.157 15.776 9.105 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Variant=Search, Fill=False
    "variant=search|fill=false": __body0,
    // figma: Variant=SearchFill, Fill=True
    "variant=searchfill|fill=true": __body1
  };
  return (__impls[__vkey_IconSearch(props)] ?? __body0)();
}

// figma node: 474:3127 Head (1 variants)
const __venc_Head = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Head = p => "prop=" + __venc_Head(p.prop);
function Head(_p = {}) {
  const props = {
    ..._p,
    prop: _p.prop ?? "common"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
      color: "var(--label-neutral-black)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "10px 20px 10px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      paddingTop: "calc(var(--margin-spacing-10) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      paddingBottom: "calc(var(--margin-spacing-10) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 95,
      height: 25,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 95,
    height: 24.551,
    viewBox: "0 0 95 24.551",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 95,
      height: 24.551
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.945 14.077 L 15.945 8.406 L 10.341 8.406 L 10.341 5.804 L 15.945 5.804 L 15.945 0 L 18.68 0 L 18.68 14.077 L 15.945 14.077 Z M 4.003 13.61 C 1.801 13.61 0 11.875 0 9.673 C 0 7.472 1.801 5.671 4.003 5.671 C 6.204 5.671 8.006 7.472 8.006 9.673 C 8.006 11.875 6.204 13.61 4.003 13.61 Z M 4.003 8.406 C 3.336 8.406 2.735 9.073 2.735 9.74 C 2.735 10.407 3.336 11.074 4.003 11.074 C 4.67 11.074 5.337 10.474 5.337 9.74 C 5.337 9.006 4.737 8.406 4.003 8.406 Z M 35.091 14.077 L 35.091 0 L 37.827 0 L 37.827 5.804 L 42.496 5.804 L 42.496 8.406 L 37.827 8.406 L 37.827 14.077 L 35.091 14.077 Z M 21.682 14.077 L 21.682 2.869 L 24.35 2.869 L 24.35 6.538 L 28.086 6.538 L 28.086 2.869 L 30.755 2.869 L 30.755 14.077 L 21.682 14.077 Z M 28.086 11.475 L 28.086 9.206 L 24.35 9.206 L 24.35 11.475 L 28.086 11.475 Z M 46.566 24.551 L 49.902 21.482 L 53.304 24.551 L 55.105 22.616 L 51.303 19.147 L 51.303 14.143 L 57.307 14.143 L 57.307 11.541 L 42.496 11.541 L 42.496 14.143 L 48.567 14.143 L 48.567 19.147 L 44.765 22.549 L 46.566 24.551 Z M 49.902 8.739 C 47.7 8.739 45.899 7.005 45.899 4.803 C 45.899 2.602 47.7 0.801 49.902 0.801 C 52.103 0.801 53.904 2.602 53.904 4.803 C 53.904 7.005 52.103 8.739 49.902 8.739 Z M 49.902 3.536 C 49.235 3.536 48.634 4.136 48.634 4.87 C 48.634 5.604 49.235 6.204 49.902 6.204 C 50.569 6.204 51.236 5.537 51.236 4.87 C 51.236 4.203 50.636 3.536 49.902 3.536 Z M 72.784 14.077 L 72.784 0 L 75.52 0 L 75.52 14.077 L 72.784 14.077 Z M 58.574 14.077 L 58.574 11.475 L 60.242 11.475 L 60.242 8.406 L 58.574 8.406 L 58.574 5.804 L 69.782 5.804 L 69.782 8.406 L 68.181 8.406 L 68.181 11.475 L 69.782 11.475 L 69.782 14.077 L 58.574 14.077 Z M 65.446 11.475 L 65.446 8.406 L 62.911 8.406 L 62.911 11.475 L 65.446 11.475 Z M 90.93 24.484 C 88.729 24.484 86.928 22.749 86.928 20.548 C 86.928 18.346 88.729 16.545 90.93 16.545 C 93.132 16.545 94.933 18.346 94.933 20.548 C 94.933 22.749 93.132 24.484 90.93 24.484 Z M 90.93 19.28 C 90.263 19.28 89.663 19.947 89.663 20.614 C 89.663 21.282 90.263 21.949 90.93 21.949 C 91.598 21.949 92.265 21.282 92.265 20.614 C 92.265 19.947 91.664 19.28 90.93 19.28 Z M 92.265 14.077 L 92.265 0 L 95 0 L 95 14.077 L 92.265 14.077 Z M 77.788 12.008 L 81.591 8.606 L 81.591 4.737 L 84.326 4.737 L 84.326 8.606 L 88.129 12.075 L 86.327 14.077 L 82.925 11.008 L 79.589 14.077 L 77.788 12.075 L 77.788 12.008 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(25,25,25)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    variant: "search",
    fill: false
  })))));
  const __impls = {
    // figma: 속성 1=Common
    "prop=common": __body0
  };
  return (__impls[__vkey_Head(props)] ?? __body0)();
}

// figma node: 741:3602 Icon (8 variants)
const __venc_Icon = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Icon = p => "prop=" + __venc_Icon(p.prop);
function Icon(_p = {}) {
  const props = {
    ..._p,
    prop: _p.prop ?? "bridge"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 7500,
      backgroundColor: "rgb(23,145,7)",
      display: "flex",
      flexDirection: "column",
      gap: 7.5,
      padding: "6px 4.500px 6px 4.500px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--label-neutral-white)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.500,
    height: 10.500,
    viewBox: "0 0 13.500 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.75,
      width: 13.5,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.469 0 L 4.469 -0.75 C 4.055 -0.75 3.719 -0.414 3.719 0 L 4.469 0 Z M 3 10.5 L 3 11.25 C 3.367 11.25 3.68 10.985 3.74 10.623 L 3 10.5 Z M 8.957 0 L 9.707 0 C 9.707 -0.414 9.371 -0.75 8.957 -0.75 L 8.957 0 Z M 10.5 10.5 L 9.761 10.629 C 9.824 10.988 10.135 11.25 10.5 11.25 L 10.5 10.5 Z M 4.469 1.628 L 5.209 1.75 C 5.216 1.71 5.219 1.669 5.219 1.628 L 4.469 1.628 Z M 0 1.628 L 0 0.878 C -0.414 0.878 -0.75 1.214 -0.75 1.628 L 0 1.628 Z M 0 10.5 L -0.75 10.5 C -0.75 10.914 -0.414 11.25 0 11.25 L 0 10.5 Z M 8.957 1.628 L 8.207 1.628 C 8.207 1.671 8.21 1.714 8.218 1.756 L 8.957 1.628 Z M 13.5 1.628 L 14.25 1.628 C 14.25 1.214 13.914 0.878 13.5 0.878 L 13.5 1.628 Z M 13.5 10.5 L 13.5 11.25 C 13.914 11.25 14.25 10.914 14.25 10.5 L 13.5 10.5 Z M 5.469 9.75 C 5.055 9.75 4.719 10.086 4.719 10.5 C 4.719 10.914 5.055 11.25 5.469 11.25 L 5.469 10.5 L 5.469 9.75 Z M 7.957 11.25 C 8.371 11.25 8.707 10.914 8.707 10.5 C 8.707 10.086 8.371 9.75 7.957 9.75 L 7.957 10.5 L 7.957 11.25 Z M 4.469 0 L 4.469 0.75 L 8.957 0.75 L 8.957 0 L 8.957 -0.75 L 4.469 -0.75 L 4.469 0 Z M 4.469 0 L 3.719 0 L 3.719 1.628 L 4.469 1.628 L 5.219 1.628 L 5.219 0 L 4.469 0 Z M 4.469 1.628 L 3.729 1.505 L 2.26 10.377 L 3 10.5 L 3.74 10.623 L 5.209 1.75 L 4.469 1.628 Z M 4.469 1.628 L 4.469 0.878 L 0 0.878 L 0 1.628 L 0 2.378 L 4.469 2.378 L 4.469 1.628 Z M 0 10.5 L 0 11.25 L 3 11.25 L 3 10.5 L 3 9.75 L 0 9.75 L 0 10.5 Z M 8.957 0 L 8.207 0 L 8.207 1.628 L 8.957 1.628 L 9.707 1.628 L 9.707 0 L 8.957 0 Z M 8.957 1.628 L 8.218 1.756 L 9.761 10.629 L 10.5 10.5 L 11.239 10.371 L 9.696 1.499 L 8.957 1.628 Z M 8.957 1.628 L 8.957 2.378 L 13.5 2.378 L 13.5 1.628 L 13.5 0.878 L 8.957 0.878 L 8.957 1.628 Z M 13.5 10.5 L 13.5 9.75 L 10.5 9.75 L 10.5 10.5 L 10.5 11.25 L 13.5 11.25 L 13.5 10.5 Z M 13.5 1.628 L 12.75 1.628 L 12.75 10.5 L 13.5 10.5 L 14.25 10.5 L 14.25 1.628 L 13.5 1.628 Z M 0 1.628 L -0.75 1.628 L -0.75 10.5 L 0 10.5 L 0.75 10.5 L 0.75 1.628 L 0 1.628 Z M 5.469 10.5 L 5.469 11.25 L 7.957 11.25 L 7.957 10.5 L 7.957 9.75 L 5.469 9.75 L 5.469 10.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 7500,
      backgroundColor: "rgb(23,145,7)",
      position: "relative",
      color: "var(--label-neutral-white)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 11,
    viewBox: "0 0 18 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 6.5,
      width: 18,
      height: 11
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 7.25 C -0.414 7.25 -0.75 7.586 -0.75 8 C -0.75 8.414 -0.414 8.75 0 8.75 L 0 8 L 0 7.25 Z M 18 8.75 C 18.414 8.75 18.75 8.414 18.75 8 C 18.75 7.586 18.414 7.25 18 7.25 L 18 8 L 18 8.75 Z M -0.671 4.665 C -0.856 5.035 -0.706 5.486 -0.335 5.671 C 0.035 5.856 0.486 5.706 0.671 5.335 L 0 5 L -0.671 4.665 Z M 17.329 5.335 C 17.514 5.706 17.965 5.856 18.335 5.671 C 18.706 5.486 18.856 5.035 18.671 4.665 L 18 5 L 17.329 5.335 Z M 4.75 1.146 C 4.75 0.732 4.414 0.396 4 0.396 C 3.586 0.396 3.25 0.732 3.25 1.146 L 4 1.146 L 4.75 1.146 Z M 3.25 11 C 3.25 11.414 3.586 11.75 4 11.75 C 4.414 11.75 4.75 11.414 4.75 11 L 4 11 L 3.25 11 Z M 8.25 8 C 8.25 8.414 8.586 8.75 9 8.75 C 9.414 8.75 9.75 8.414 9.75 8 L 9 8 L 8.25 8 Z M 14.75 1.146 C 14.75 0.732 14.414 0.396 14 0.396 C 13.586 0.396 13.25 0.732 13.25 1.146 L 14 1.146 L 14.75 1.146 Z M 13.25 11 C 13.25 11.414 13.586 11.75 14 11.75 C 14.414 11.75 14.75 11.414 14.75 11 L 14 11 L 13.25 11 Z M 0 8 L 0 8.75 L 18 8.75 L 18 8 L 18 7.25 L 0 7.25 L 0 8 Z M 0 5 L 0.671 5.335 C 0.908 4.861 1.476 3.728 2.725 2.705 C 3.962 1.693 5.919 0.75 9 0.75 L 9 0 L 9 -0.75 C 5.581 -0.75 3.288 0.307 1.775 1.545 C 0.274 2.772 -0.408 4.139 -0.671 4.665 L 0 5 Z M 9 0 L 9 0.75 C 12.081 0.75 14.038 1.693 15.275 2.705 C 16.524 3.728 17.092 4.861 17.329 5.335 L 18 5 L 18.671 4.665 C 18.408 4.139 17.726 2.772 16.225 1.545 C 14.712 0.307 12.419 -0.75 9 -0.75 L 9 0 Z M 4 1.146 L 3.25 1.146 L 3.25 11 L 4 11 L 4.75 11 L 4.75 1.146 L 4 1.146 Z M 9 0 L 8.25 0 L 8.25 8 L 9 8 L 9.75 8 L 9.75 0 L 9 0 Z M 14 1.146 L 13.25 1.146 L 13.25 11 L 14 11 L 14.75 11 L 14.75 1.146 L 14 1.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 7500,
      backgroundColor: "rgb(23,145,7)",
      position: "relative",
      color: "var(--label-neutral-white)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 11,
    viewBox: "0 0 16 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6.5,
      width: 16,
      height: 11
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.697 0 L 6.697 -0.717 C 6.541 -0.717 6.389 -0.666 6.264 -0.572 L 6.697 0 Z M 1.335 4.059 L 0.902 3.487 C 0.715 3.629 0.609 3.854 0.618 4.089 C 0.628 4.324 0.753 4.539 0.952 4.665 L 1.335 4.059 Z M 6.025 7.023 L 6.42 7.621 C 6.623 7.487 6.745 7.259 6.742 7.016 C 6.74 6.772 6.614 6.547 6.408 6.416 L 6.025 7.023 Z M -0.395 10.401 C -0.726 10.62 -0.817 11.065 -0.599 11.395 C -0.38 11.726 0.065 11.817 0.395 11.599 L 0 11 L -0.395 10.401 Z M 9.349 0 L 9.842 0.521 C 10.055 0.319 10.124 0.007 10.015 -0.265 C 9.906 -0.538 9.642 -0.717 9.349 -0.717 L 9.349 0 Z M 6.066 3.108 L 5.573 2.587 C 5.398 2.752 5.318 2.994 5.359 3.23 C 5.4 3.467 5.556 3.667 5.776 3.764 L 6.066 3.108 Z M 16 7.5 L 16.575 7.929 C 16.705 7.754 16.749 7.529 16.694 7.318 C 16.638 7.107 16.49 6.932 16.29 6.844 L 16 7.5 Z M 12.812 10.571 C 12.575 10.888 12.64 11.338 12.957 11.575 C 13.275 11.812 13.724 11.747 13.961 11.429 L 13.386 11 L 12.812 10.571 Z M 9.421 6.246 C 9.092 6.025 8.646 6.114 8.426 6.443 C 8.206 6.772 8.294 7.218 8.623 7.438 L 9.022 6.842 L 9.421 6.246 Z M 11.5 8.5 L 12.044 8.968 C 12.178 8.812 12.238 8.607 12.211 8.403 C 12.183 8.2 12.069 8.018 11.899 7.904 L 11.5 8.5 Z M 8.805 10.532 C 8.547 10.832 8.581 11.285 8.881 11.544 C 9.181 11.802 9.634 11.768 9.892 11.468 L 9.349 11 L 8.805 10.532 Z M 7.948 9.56 C 8.257 9.313 8.308 8.861 8.06 8.552 C 7.813 8.243 7.361 8.192 7.052 8.44 L 7.5 9 L 7.948 9.56 Z M 4.552 10.44 C 4.243 10.687 4.192 11.139 4.44 11.448 C 4.687 11.757 5.139 11.808 5.448 11.56 L 5 11 L 4.552 10.44 Z M 6.697 0 L 6.264 -0.572 L 0.902 3.487 L 1.335 4.059 L 1.768 4.631 L 7.13 0.572 L 6.697 0 Z M 1.335 4.059 L 0.952 4.665 L 5.642 7.629 L 6.025 7.023 L 6.408 6.416 L 1.718 3.452 L 1.335 4.059 Z M 6.025 7.023 L 5.63 6.424 L -0.395 10.401 L 0 11 L 0.395 11.599 L 6.42 7.621 L 6.025 7.023 Z M 9.349 0 L 8.856 -0.521 L 5.573 2.587 L 6.066 3.108 L 6.559 3.629 L 9.842 0.521 L 9.349 0 Z M 6.066 3.108 L 5.776 3.764 L 15.71 8.156 L 16 7.5 L 16.29 6.844 L 6.356 2.452 L 6.066 3.108 Z M 16 7.5 L 15.425 7.071 L 12.812 10.571 L 13.386 11 L 13.961 11.429 L 16.575 7.929 L 16 7.5 Z M 9.349 0 L 9.349 -0.717 L 6.697 -0.717 L 6.697 0 L 6.697 0.717 L 9.349 0.717 L 9.349 0 Z M 9.022 6.842 L 8.623 7.438 L 11.101 9.096 L 11.5 8.5 L 11.899 7.904 L 9.421 6.246 L 9.022 6.842 Z M 11.5 8.5 L 10.956 8.032 L 8.805 10.532 L 9.349 11 L 9.892 11.468 L 12.044 8.968 L 11.5 8.5 Z M 7.5 9 L 7.052 8.44 L 4.552 10.44 L 5 11 L 5.448 11.56 L 7.948 9.56 L 7.5 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 7500,
      backgroundColor: "rgb(23,145,7)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 5.500,
    viewBox: "0 0 15 5.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 6,
      width: 15,
      height: 5.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.607 5.059 C -0.85 5.394 -0.776 5.863 -0.441 6.107 C -0.106 6.35 0.363 6.276 0.607 5.941 L 0 5.5 L -0.607 5.059 Z M 4 0 L 4.633 -0.403 C 4.5 -0.612 4.271 -0.742 4.023 -0.75 C 3.775 -0.757 3.539 -0.642 3.393 -0.441 L 4 0 Z M 7.5 5.5 L 6.867 5.903 C 6.985 6.087 7.177 6.211 7.393 6.242 C 7.61 6.273 7.829 6.208 7.994 6.064 L 7.5 5.5 Z M 11.5 2 L 12.03 1.47 C 11.751 1.19 11.303 1.176 11.006 1.436 L 11.5 2 Z M 14.47 6.03 C 14.763 6.323 15.237 6.323 15.53 6.03 C 15.823 5.737 15.823 5.263 15.53 4.97 L 15 5.5 L 14.47 6.03 Z M 0 5.5 L 0.607 5.941 L 4.607 0.441 L 4 0 L 3.393 -0.441 L -0.607 5.059 L 0 5.5 Z M 4 0 L 3.367 0.403 L 6.867 5.903 L 7.5 5.5 L 8.133 5.097 L 4.633 -0.403 L 4 0 Z M 7.5 5.5 L 7.994 6.064 L 11.994 2.564 L 11.5 2 L 11.006 1.436 L 7.006 4.936 L 7.5 5.5 Z M 11.5 2 L 10.97 2.53 L 14.47 6.03 L 15 5.5 L 15.53 4.97 L 12.03 1.47 L 11.5 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 1.313,
    viewBox: "0 -0.656 15 1.313",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 14,
      width: 15,
      height: 1.3125
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.656 C -0.362 -0.656 -0.656 -0.362 -0.656 0 C -0.656 0.362 -0.362 0.656 0 0.656 L 0 0 L 0 -0.656 Z M 15 0.656 C 15.362 0.656 15.656 0.362 15.656 0 C 15.656 -0.362 15.362 -0.656 15 -0.656 L 15 0 L 15 0.656 Z M 0 0 L 0 0.656 C 0.009 0.656 0.017 0.656 0.026 0.656 C 0.034 0.656 0.043 0.656 0.051 0.656 C 0.06 0.656 0.069 0.656 0.077 0.656 C 0.086 0.656 0.094 0.656 0.103 0.656 C 0.111 0.656 0.12 0.656 0.129 0.656 C 0.137 0.656 0.146 0.656 0.155 0.656 C 0.163 0.656 0.172 0.656 0.18 0.656 C 0.189 0.656 0.198 0.656 0.206 0.656 C 0.215 0.656 0.224 0.656 0.232 0.656 C 0.241 0.656 0.25 0.656 0.258 0.656 C 0.267 0.656 0.276 0.656 0.285 0.656 C 0.293 0.656 0.302 0.656 0.311 0.656 C 0.319 0.656 0.328 0.656 0.337 0.656 C 0.346 0.656 0.354 0.656 0.363 0.656 C 0.372 0.656 0.381 0.656 0.389 0.656 C 0.398 0.656 0.407 0.656 0.416 0.656 C 0.424 0.656 0.433 0.656 0.442 0.656 C 0.451 0.656 0.459 0.656 0.468 0.656 C 0.477 0.656 0.486 0.656 0.495 0.656 C 0.503 0.656 0.512 0.656 0.521 0.656 C 0.53 0.656 0.539 0.656 0.548 0.656 C 0.556 0.656 0.565 0.656 0.574 0.656 C 0.583 0.656 0.592 0.656 0.601 0.656 C 0.609 0.656 0.618 0.656 0.627 0.656 C 0.636 0.656 0.645 0.656 0.654 0.656 C 0.663 0.656 0.672 0.656 0.681 0.656 C 0.689 0.656 0.698 0.656 0.707 0.656 C 0.716 0.656 0.725 0.656 0.734 0.656 C 0.743 0.656 0.752 0.656 0.761 0.656 C 0.77 0.656 0.779 0.656 0.788 0.656 C 0.797 0.656 0.806 0.656 0.814 0.656 C 0.823 0.656 0.832 0.656 0.841 0.656 C 0.85 0.656 0.859 0.656 0.868 0.656 C 0.877 0.656 0.886 0.656 0.895 0.656 C 0.904 0.656 0.913 0.656 0.922 0.656 C 0.931 0.656 0.94 0.656 0.949 0.656 C 0.958 0.656 0.967 0.656 0.976 0.656 C 0.985 0.656 0.995 0.656 1.004 0.656 C 1.013 0.656 1.022 0.656 1.031 0.656 C 1.04 0.656 1.049 0.656 1.058 0.656 C 1.067 0.656 1.076 0.656 1.085 0.656 C 1.094 0.656 1.103 0.656 1.112 0.656 C 1.122 0.656 1.131 0.656 1.14 0.656 C 1.149 0.656 1.158 0.656 1.167 0.656 C 1.176 0.656 1.185 0.656 1.194 0.656 C 1.204 0.656 1.213 0.656 1.222 0.656 C 1.231 0.656 1.24 0.656 1.249 0.656 C 1.258 0.656 1.268 0.656 1.277 0.656 C 1.286 0.656 1.295 0.656 1.304 0.656 C 1.314 0.656 1.323 0.656 1.332 0.656 C 1.341 0.656 1.35 0.656 1.359 0.656 C 1.369 0.656 1.378 0.656 1.387 0.656 C 1.396 0.656 1.406 0.656 1.415 0.656 C 1.424 0.656 1.433 0.656 1.442 0.656 C 1.452 0.656 1.461 0.656 1.47 0.656 C 1.479 0.656 1.489 0.656 1.498 0.656 C 1.507 0.656 1.516 0.656 1.526 0.656 C 1.535 0.656 1.544 0.656 1.554 0.656 C 1.563 0.656 1.572 0.656 1.581 0.656 C 1.591 0.656 1.6 0.656 1.609 0.656 C 1.619 0.656 1.628 0.656 1.637 0.656 C 1.647 0.656 1.656 0.656 1.665 0.656 C 1.675 0.656 1.684 0.656 1.693 0.656 C 1.703 0.656 1.712 0.656 1.721 0.656 C 1.731 0.656 1.74 0.656 1.749 0.656 C 1.759 0.656 1.768 0.656 1.777 0.656 C 1.787 0.656 1.796 0.656 1.805 0.656 C 1.815 0.656 1.824 0.656 1.834 0.656 C 1.843 0.656 1.852 0.656 1.862 0.656 C 1.871 0.656 1.881 0.656 1.89 0.656 C 1.899 0.656 1.909 0.656 1.918 0.656 C 1.928 0.656 1.937 0.656 1.947 0.656 C 1.956 0.656 1.965 0.656 1.975 0.656 C 1.984 0.656 1.994 0.656 2.003 0.656 C 2.013 0.656 2.022 0.656 2.032 0.656 C 2.041 0.656 2.05 0.656 2.06 0.656 C 2.069 0.656 2.079 0.656 2.088 0.656 C 2.098 0.656 2.107 0.656 2.117 0.656 C 2.126 0.656 2.136 0.656 2.145 0.656 C 2.155 0.656 2.164 0.656 2.174 0.656 C 2.183 0.656 2.193 0.656 2.202 0.656 C 2.212 0.656 2.221 0.656 2.231 0.656 C 2.24 0.656 2.25 0.656 2.26 0.656 C 2.269 0.656 2.279 0.656 2.288 0.656 C 2.298 0.656 2.307 0.656 2.317 0.656 C 2.326 0.656 2.336 0.656 2.346 0.656 C 2.355 0.656 2.365 0.656 2.374 0.656 C 2.384 0.656 2.393 0.656 2.403 0.656 C 2.413 0.656 2.422 0.656 2.432 0.656 C 2.441 0.656 2.451 0.656 2.461 0.656 C 2.47 0.656 2.48 0.656 2.489 0.656 C 2.499 0.656 2.509 0.656 2.518 0.656 C 2.528 0.656 2.538 0.656 2.547 0.656 C 2.557 0.656 2.566 0.656 2.576 0.656 C 2.586 0.656 2.595 0.656 2.605 0.656 C 2.615 0.656 2.624 0.656 2.634 0.656 C 2.644 0.656 2.653 0.656 2.663 0.656 C 2.673 0.656 2.682 0.656 2.692 0.656 C 2.702 0.656 2.711 0.656 2.721 0.656 C 2.731 0.656 2.74 0.656 2.75 0.656 C 2.76 0.656 2.77 0.656 2.779 0.656 C 2.789 0.656 2.799 0.656 2.808 0.656 C 2.818 0.656 2.828 0.656 2.838 0.656 C 2.847 0.656 2.857 0.656 2.867 0.656 C 2.876 0.656 2.886 0.656 2.896 0.656 C 2.906 0.656 2.915 0.656 2.925 0.656 C 2.935 0.656 2.945 0.656 2.954 0.656 C 2.964 0.656 2.974 0.656 2.984 0.656 C 2.993 0.656 3.003 0.656 3.013 0.656 C 3.023 0.656 3.033 0.656 3.042 0.656 C 3.052 0.656 3.062 0.656 3.072 0.656 C 3.081 0.656 3.091 0.656 3.101 0.656 C 3.111 0.656 3.121 0.656 3.13 0.656 C 3.14 0.656 3.15 0.656 3.16 0.656 C 3.17 0.656 3.179 0.656 3.189 0.656 C 3.199 0.656 3.209 0.656 3.219 0.656 C 3.229 0.656 3.238 0.656 3.248 0.656 C 3.258 0.656 3.268 0.656 3.278 0.656 C 3.288 0.656 3.297 0.656 3.307 0.656 C 3.317 0.656 3.327 0.656 3.337 0.656 C 3.347 0.656 3.357 0.656 3.366 0.656 C 3.376 0.656 3.386 0.656 3.396 0.656 C 3.406 0.656 3.416 0.656 3.426 0.656 C 3.436 0.656 3.445 0.656 3.455 0.656 C 3.465 0.656 3.475 0.656 3.485 0.656 C 3.495 0.656 3.505 0.656 3.515 0.656 C 3.525 0.656 3.535 0.656 3.544 0.656 C 3.554 0.656 3.564 0.656 3.574 0.656 C 3.584 0.656 3.594 0.656 3.604 0.656 C 3.614 0.656 3.624 0.656 3.634 0.656 C 3.644 0.656 3.654 0.656 3.664 0.656 C 3.674 0.656 3.683 0.656 3.693 0.656 C 3.703 0.656 3.713 0.656 3.723 0.656 C 3.733 0.656 3.743 0.656 3.753 0.656 C 3.763 0.656 3.773 0.656 3.783 0.656 C 3.793 0.656 3.803 0.656 3.813 0.656 C 3.823 0.656 3.833 0.656 3.843 0.656 C 3.853 0.656 3.863 0.656 3.873 0.656 C 3.883 0.656 3.893 0.656 3.903 0.656 C 3.913 0.656 3.923 0.656 3.933 0.656 C 3.943 0.656 3.953 0.656 3.963 0.656 C 3.973 0.656 3.983 0.656 3.993 0.656 C 4.003 0.656 4.013 0.656 4.023 0.656 C 4.033 0.656 4.043 0.656 4.053 0.656 C 4.063 0.656 4.073 0.656 4.083 0.656 C 4.093 0.656 4.103 0.656 4.113 0.656 C 4.123 0.656 4.133 0.656 4.143 0.656 C 4.153 0.656 4.163 0.656 4.173 0.656 C 4.183 0.656 4.193 0.656 4.204 0.656 C 4.214 0.656 4.224 0.656 4.234 0.656 C 4.244 0.656 4.254 0.656 4.264 0.656 C 4.274 0.656 4.284 0.656 4.294 0.656 C 4.304 0.656 4.314 0.656 4.324 0.656 C 4.334 0.656 4.345 0.656 4.355 0.656 C 4.365 0.656 4.375 0.656 4.385 0.656 C 4.395 0.656 4.405 0.656 4.415 0.656 C 4.425 0.656 4.435 0.656 4.445 0.656 C 4.456 0.656 4.466 0.656 4.476 0.656 C 4.486 0.656 4.496 0.656 4.506 0.656 C 4.516 0.656 4.526 0.656 4.536 0.656 C 4.547 0.656 4.557 0.656 4.567 0.656 C 4.577 0.656 4.587 0.656 4.597 0.656 C 4.607 0.656 4.617 0.656 4.628 0.656 C 4.638 0.656 4.648 0.656 4.658 0.656 C 4.668 0.656 4.678 0.656 4.688 0.656 C 4.699 0.656 4.709 0.656 4.719 0.656 C 4.729 0.656 4.739 0.656 4.749 0.656 C 4.759 0.656 4.77 0.656 4.78 0.656 C 4.79 0.656 4.8 0.656 4.81 0.656 C 4.82 0.656 4.831 0.656 4.841 0.656 C 4.851 0.656 4.861 0.656 4.871 0.656 C 4.881 0.656 4.892 0.656 4.902 0.656 C 4.912 0.656 4.922 0.656 4.932 0.656 C 4.943 0.656 4.953 0.656 4.963 0.656 C 4.973 0.656 4.983 0.656 4.993 0.656 C 5.004 0.656 5.014 0.656 5.024 0.656 C 5.034 0.656 5.044 0.656 5.055 0.656 C 5.065 0.656 5.075 0.656 5.085 0.656 C 5.095 0.656 5.106 0.656 5.116 0.656 C 5.126 0.656 5.136 0.656 5.147 0.656 C 5.157 0.656 5.167 0.656 5.177 0.656 C 5.187 0.656 5.198 0.656 5.208 0.656 C 5.218 0.656 5.228 0.656 5.239 0.656 C 5.249 0.656 5.259 0.656 5.269 0.656 C 5.279 0.656 5.29 0.656 5.3 0.656 C 5.31 0.656 5.32 0.656 5.331 0.656 C 5.341 0.656 5.351 0.656 5.361 0.656 C 5.372 0.656 5.382 0.656 5.392 0.656 C 5.402 0.656 5.413 0.656 5.423 0.656 C 5.433 0.656 5.443 0.656 5.454 0.656 C 5.464 0.656 5.474 0.656 5.484 0.656 C 5.495 0.656 5.505 0.656 5.515 0.656 C 5.525 0.656 5.536 0.656 5.546 0.656 C 5.556 0.656 5.566 0.656 5.577 0.656 C 5.587 0.656 5.597 0.656 5.608 0.656 C 5.618 0.656 5.628 0.656 5.638 0.656 C 5.649 0.656 5.659 0.656 5.669 0.656 C 5.679 0.656 5.69 0.656 5.7 0.656 C 5.71 0.656 5.721 0.656 5.731 0.656 C 5.741 0.656 5.751 0.656 5.762 0.656 C 5.772 0.656 5.782 0.656 5.793 0.656 C 5.803 0.656 5.813 0.656 5.823 0.656 C 5.834 0.656 5.844 0.656 5.854 0.656 C 5.865 0.656 5.875 0.656 5.885 0.656 C 5.896 0.656 5.906 0.656 5.916 0.656 C 5.926 0.656 5.937 0.656 5.947 0.656 C 5.957 0.656 5.968 0.656 5.978 0.656 C 5.988 0.656 5.999 0.656 6.009 0.656 C 6.019 0.656 6.03 0.656 6.04 0.656 C 6.05 0.656 6.061 0.656 6.071 0.656 C 6.081 0.656 6.091 0.656 6.102 0.656 C 6.112 0.656 6.122 0.656 6.133 0.656 C 6.143 0.656 6.153 0.656 6.164 0.656 C 6.174 0.656 6.184 0.656 6.195 0.656 C 6.205 0.656 6.215 0.656 6.226 0.656 C 6.236 0.656 6.246 0.656 6.257 0.656 C 6.267 0.656 6.277 0.656 6.288 0.656 C 6.298 0.656 6.308 0.656 6.319 0.656 C 6.329 0.656 6.339 0.656 6.35 0.656 C 6.36 0.656 6.37 0.656 6.381 0.656 C 6.391 0.656 6.401 0.656 6.412 0.656 C 6.422 0.656 6.432 0.656 6.443 0.656 C 6.453 0.656 6.463 0.656 6.474 0.656 C 6.484 0.656 6.494 0.656 6.505 0.656 C 6.515 0.656 6.526 0.656 6.536 0.656 C 6.546 0.656 6.557 0.656 6.567 0.656 C 6.577 0.656 6.588 0.656 6.598 0.656 C 6.608 0.656 6.619 0.656 6.629 0.656 C 6.639 0.656 6.65 0.656 6.66 0.656 C 6.67 0.656 6.681 0.656 6.691 0.656 C 6.702 0.656 6.712 0.656 6.722 0.656 C 6.733 0.656 6.743 0.656 6.753 0.656 C 6.764 0.656 6.774 0.656 6.784 0.656 C 6.795 0.656 6.805 0.656 6.815 0.656 C 6.826 0.656 6.836 0.656 6.847 0.656 C 6.857 0.656 6.867 0.656 6.878 0.656 C 6.888 0.656 6.898 0.656 6.909 0.656 C 6.919 0.656 6.929 0.656 6.94 0.656 C 6.95 0.656 6.961 0.656 6.971 0.656 C 6.981 0.656 6.992 0.656 7.002 0.656 C 7.012 0.656 7.023 0.656 7.033 0.656 C 7.044 0.656 7.054 0.656 7.064 0.656 C 7.075 0.656 7.085 0.656 7.095 0.656 C 7.106 0.656 7.116 0.656 7.127 0.656 C 7.137 0.656 7.147 0.656 7.158 0.656 C 7.168 0.656 7.178 0.656 7.189 0.656 C 7.199 0.656 7.209 0.656 7.22 0.656 C 7.23 0.656 7.241 0.656 7.251 0.656 C 7.261 0.656 7.272 0.656 7.282 0.656 C 7.292 0.656 7.303 0.656 7.313 0.656 C 7.324 0.656 7.334 0.656 7.344 0.656 C 7.355 0.656 7.365 0.656 7.375 0.656 C 7.386 0.656 7.396 0.656 7.407 0.656 C 7.417 0.656 7.427 0.656 7.438 0.656 C 7.448 0.656 7.458 0.656 7.469 0.656 C 7.479 0.656 7.49 0.656 7.5 0.656 C 7.51 0.656 7.521 0.656 7.531 0.656 C 7.542 0.656 7.552 0.656 7.562 0.656 C 7.573 0.656 7.583 0.656 7.593 0.656 C 7.604 0.656 7.614 0.656 7.625 0.656 C 7.635 0.656 7.645 0.656 7.656 0.656 C 7.666 0.656 7.676 0.656 7.687 0.656 C 7.697 0.656 7.708 0.656 7.718 0.656 C 7.728 0.656 7.739 0.656 7.749 0.656 C 7.759 0.656 7.77 0.656 7.78 0.656 C 7.791 0.656 7.801 0.656 7.811 0.656 C 7.822 0.656 7.832 0.656 7.842 0.656 C 7.853 0.656 7.863 0.656 7.873 0.656 C 7.884 0.656 7.894 0.656 7.905 0.656 C 7.915 0.656 7.925 0.656 7.936 0.656 C 7.946 0.656 7.956 0.656 7.967 0.656 C 7.977 0.656 7.988 0.656 7.998 0.656 C 8.008 0.656 8.019 0.656 8.029 0.656 C 8.039 0.656 8.05 0.656 8.06 0.656 C 8.071 0.656 8.081 0.656 8.091 0.656 C 8.102 0.656 8.112 0.656 8.122 0.656 C 8.133 0.656 8.143 0.656 8.153 0.656 C 8.164 0.656 8.174 0.656 8.185 0.656 C 8.195 0.656 8.205 0.656 8.216 0.656 C 8.226 0.656 8.236 0.656 8.247 0.656 C 8.257 0.656 8.267 0.656 8.278 0.656 C 8.288 0.656 8.298 0.656 8.309 0.656 C 8.319 0.656 8.33 0.656 8.34 0.656 C 8.35 0.656 8.361 0.656 8.371 0.656 C 8.381 0.656 8.392 0.656 8.402 0.656 C 8.412 0.656 8.423 0.656 8.433 0.656 C 8.443 0.656 8.454 0.656 8.464 0.656 C 8.474 0.656 8.485 0.656 8.495 0.656 C 8.506 0.656 8.516 0.656 8.526 0.656 C 8.537 0.656 8.547 0.656 8.557 0.656 C 8.568 0.656 8.578 0.656 8.588 0.656 C 8.599 0.656 8.609 0.656 8.619 0.656 C 8.63 0.656 8.64 0.656 8.65 0.656 C 8.661 0.656 8.671 0.656 8.681 0.656 C 8.692 0.656 8.702 0.656 8.712 0.656 C 8.723 0.656 8.733 0.656 8.743 0.656 C 8.754 0.656 8.764 0.656 8.774 0.656 C 8.785 0.656 8.795 0.656 8.805 0.656 C 8.816 0.656 8.826 0.656 8.836 0.656 C 8.847 0.656 8.857 0.656 8.867 0.656 C 8.878 0.656 8.888 0.656 8.898 0.656 C 8.909 0.656 8.919 0.656 8.929 0.656 C 8.939 0.656 8.95 0.656 8.96 0.656 C 8.97 0.656 8.981 0.656 8.991 0.656 C 9.001 0.656 9.012 0.656 9.022 0.656 C 9.032 0.656 9.043 0.656 9.053 0.656 C 9.063 0.656 9.074 0.656 9.084 0.656 C 9.094 0.656 9.104 0.656 9.115 0.656 C 9.125 0.656 9.135 0.656 9.146 0.656 C 9.156 0.656 9.166 0.656 9.177 0.656 C 9.187 0.656 9.197 0.656 9.207 0.656 C 9.218 0.656 9.228 0.656 9.238 0.656 C 9.249 0.656 9.259 0.656 9.269 0.656 C 9.279 0.656 9.29 0.656 9.3 0.656 C 9.31 0.656 9.321 0.656 9.331 0.656 C 9.341 0.656 9.351 0.656 9.362 0.656 C 9.372 0.656 9.382 0.656 9.392 0.656 C 9.403 0.656 9.413 0.656 9.423 0.656 C 9.434 0.656 9.444 0.656 9.454 0.656 C 9.464 0.656 9.475 0.656 9.485 0.656 C 9.495 0.656 9.505 0.656 9.516 0.656 C 9.526 0.656 9.536 0.656 9.546 0.656 C 9.557 0.656 9.567 0.656 9.577 0.656 C 9.587 0.656 9.598 0.656 9.608 0.656 C 9.618 0.656 9.628 0.656 9.639 0.656 C 9.649 0.656 9.659 0.656 9.669 0.656 C 9.68 0.656 9.69 0.656 9.7 0.656 C 9.71 0.656 9.721 0.656 9.731 0.656 C 9.741 0.656 9.751 0.656 9.761 0.656 C 9.772 0.656 9.782 0.656 9.792 0.656 C 9.802 0.656 9.813 0.656 9.823 0.656 C 9.833 0.656 9.843 0.656 9.853 0.656 C 9.864 0.656 9.874 0.656 9.884 0.656 C 9.894 0.656 9.905 0.656 9.915 0.656 C 9.925 0.656 9.935 0.656 9.945 0.656 C 9.956 0.656 9.966 0.656 9.976 0.656 C 9.986 0.656 9.996 0.656 10.007 0.656 C 10.017 0.656 10.027 0.656 10.037 0.656 C 10.047 0.656 10.057 0.656 10.068 0.656 C 10.078 0.656 10.088 0.656 10.098 0.656 C 10.108 0.656 10.119 0.656 10.129 0.656 C 10.139 0.656 10.149 0.656 10.159 0.656 C 10.169 0.656 10.18 0.656 10.19 0.656 C 10.2 0.656 10.21 0.656 10.22 0.656 C 10.23 0.656 10.241 0.656 10.251 0.656 C 10.261 0.656 10.271 0.656 10.281 0.656 C 10.291 0.656 10.301 0.656 10.312 0.656 C 10.322 0.656 10.332 0.656 10.342 0.656 C 10.352 0.656 10.362 0.656 10.372 0.656 C 10.383 0.656 10.393 0.656 10.403 0.656 C 10.413 0.656 10.423 0.656 10.433 0.656 C 10.443 0.656 10.453 0.656 10.464 0.656 C 10.474 0.656 10.484 0.656 10.494 0.656 C 10.504 0.656 10.514 0.656 10.524 0.656 C 10.534 0.656 10.544 0.656 10.555 0.656 C 10.565 0.656 10.575 0.656 10.585 0.656 C 10.595 0.656 10.605 0.656 10.615 0.656 C 10.625 0.656 10.635 0.656 10.645 0.656 C 10.655 0.656 10.666 0.656 10.676 0.656 C 10.686 0.656 10.696 0.656 10.706 0.656 C 10.716 0.656 10.726 0.656 10.736 0.656 C 10.746 0.656 10.756 0.656 10.766 0.656 C 10.776 0.656 10.786 0.656 10.796 0.656 C 10.807 0.656 10.817 0.656 10.827 0.656 C 10.837 0.656 10.847 0.656 10.857 0.656 C 10.867 0.656 10.877 0.656 10.887 0.656 C 10.897 0.656 10.907 0.656 10.917 0.656 C 10.927 0.656 10.937 0.656 10.947 0.656 C 10.957 0.656 10.967 0.656 10.977 0.656 C 10.987 0.656 10.997 0.656 11.007 0.656 C 11.017 0.656 11.027 0.656 11.037 0.656 C 11.047 0.656 11.057 0.656 11.067 0.656 C 11.077 0.656 11.087 0.656 11.097 0.656 C 11.107 0.656 11.117 0.656 11.127 0.656 C 11.137 0.656 11.147 0.656 11.157 0.656 C 11.167 0.656 11.177 0.656 11.187 0.656 C 11.197 0.656 11.207 0.656 11.217 0.656 C 11.227 0.656 11.237 0.656 11.247 0.656 C 11.257 0.656 11.267 0.656 11.277 0.656 C 11.287 0.656 11.297 0.656 11.307 0.656 C 11.317 0.656 11.326 0.656 11.336 0.656 C 11.346 0.656 11.356 0.656 11.366 0.656 C 11.376 0.656 11.386 0.656 11.396 0.656 C 11.406 0.656 11.416 0.656 11.426 0.656 C 11.436 0.656 11.446 0.656 11.456 0.656 C 11.465 0.656 11.475 0.656 11.485 0.656 C 11.495 0.656 11.505 0.656 11.515 0.656 C 11.525 0.656 11.535 0.656 11.545 0.656 C 11.555 0.656 11.564 0.656 11.574 0.656 C 11.584 0.656 11.594 0.656 11.604 0.656 C 11.614 0.656 11.624 0.656 11.634 0.656 C 11.643 0.656 11.653 0.656 11.663 0.656 C 11.673 0.656 11.683 0.656 11.693 0.656 C 11.703 0.656 11.712 0.656 11.722 0.656 C 11.732 0.656 11.742 0.656 11.752 0.656 C 11.762 0.656 11.771 0.656 11.781 0.656 C 11.791 0.656 11.801 0.656 11.811 0.656 C 11.821 0.656 11.83 0.656 11.84 0.656 C 11.85 0.656 11.86 0.656 11.87 0.656 C 11.879 0.656 11.889 0.656 11.899 0.656 C 11.909 0.656 11.919 0.656 11.928 0.656 C 11.938 0.656 11.948 0.656 11.958 0.656 C 11.967 0.656 11.977 0.656 11.987 0.656 C 11.997 0.656 12.007 0.656 12.016 0.656 C 12.026 0.656 12.036 0.656 12.046 0.656 C 12.055 0.656 12.065 0.656 12.075 0.656 C 12.085 0.656 12.094 0.656 12.104 0.656 C 12.114 0.656 12.124 0.656 12.133 0.656 C 12.143 0.656 12.153 0.656 12.162 0.656 C 12.172 0.656 12.182 0.656 12.192 0.656 C 12.201 0.656 12.211 0.656 12.221 0.656 C 12.23 0.656 12.24 0.656 12.25 0.656 C 12.26 0.656 12.269 0.656 12.279 0.656 C 12.289 0.656 12.298 0.656 12.308 0.656 C 12.318 0.656 12.327 0.656 12.337 0.656 C 12.347 0.656 12.356 0.656 12.366 0.656 C 12.376 0.656 12.385 0.656 12.395 0.656 C 12.405 0.656 12.414 0.656 12.424 0.656 C 12.434 0.656 12.443 0.656 12.453 0.656 C 12.462 0.656 12.472 0.656 12.482 0.656 C 12.491 0.656 12.501 0.656 12.511 0.656 C 12.52 0.656 12.53 0.656 12.539 0.656 C 12.549 0.656 12.559 0.656 12.568 0.656 C 12.578 0.656 12.587 0.656 12.597 0.656 C 12.607 0.656 12.616 0.656 12.626 0.656 C 12.635 0.656 12.645 0.656 12.654 0.656 C 12.664 0.656 12.674 0.656 12.683 0.656 C 12.693 0.656 12.702 0.656 12.712 0.656 C 12.721 0.656 12.731 0.656 12.74 0.656 C 12.75 0.656 12.76 0.656 12.769 0.656 C 12.779 0.656 12.788 0.656 12.798 0.656 C 12.807 0.656 12.817 0.656 12.826 0.656 C 12.836 0.656 12.845 0.656 12.855 0.656 C 12.864 0.656 12.874 0.656 12.883 0.656 C 12.893 0.656 12.902 0.656 12.912 0.656 C 12.921 0.656 12.931 0.656 12.94 0.656 C 12.95 0.656 12.959 0.656 12.968 0.656 C 12.978 0.656 12.987 0.656 12.997 0.656 C 13.006 0.656 13.016 0.656 13.025 0.656 C 13.035 0.656 13.044 0.656 13.053 0.656 C 13.063 0.656 13.072 0.656 13.082 0.656 C 13.091 0.656 13.101 0.656 13.11 0.656 C 13.119 0.656 13.129 0.656 13.138 0.656 C 13.148 0.656 13.157 0.656 13.166 0.656 C 13.176 0.656 13.185 0.656 13.195 0.656 C 13.204 0.656 13.213 0.656 13.223 0.656 C 13.232 0.656 13.241 0.656 13.251 0.656 C 13.26 0.656 13.269 0.656 13.279 0.656 C 13.288 0.656 13.297 0.656 13.307 0.656 C 13.316 0.656 13.325 0.656 13.335 0.656 C 13.344 0.656 13.353 0.656 13.363 0.656 C 13.372 0.656 13.381 0.656 13.391 0.656 C 13.4 0.656 13.409 0.656 13.419 0.656 C 13.428 0.656 13.437 0.656 13.446 0.656 C 13.456 0.656 13.465 0.656 13.474 0.656 C 13.484 0.656 13.493 0.656 13.502 0.656 C 13.511 0.656 13.521 0.656 13.53 0.656 C 13.539 0.656 13.548 0.656 13.558 0.656 C 13.567 0.656 13.576 0.656 13.585 0.656 C 13.594 0.656 13.604 0.656 13.613 0.656 C 13.622 0.656 13.631 0.656 13.641 0.656 C 13.65 0.656 13.659 0.656 13.668 0.656 C 13.677 0.656 13.686 0.656 13.696 0.656 C 13.705 0.656 13.714 0.656 13.723 0.656 C 13.732 0.656 13.742 0.656 13.751 0.656 C 13.76 0.656 13.769 0.656 13.778 0.656 C 13.787 0.656 13.796 0.656 13.806 0.656 C 13.815 0.656 13.824 0.656 13.833 0.656 C 13.842 0.656 13.851 0.656 13.86 0.656 C 13.869 0.656 13.878 0.656 13.888 0.656 C 13.897 0.656 13.906 0.656 13.915 0.656 C 13.924 0.656 13.933 0.656 13.942 0.656 C 13.951 0.656 13.96 0.656 13.969 0.656 C 13.978 0.656 13.987 0.656 13.996 0.656 C 14.005 0.656 14.015 0.656 14.024 0.656 C 14.033 0.656 14.042 0.656 14.051 0.656 C 14.06 0.656 14.069 0.656 14.078 0.656 C 14.087 0.656 14.096 0.656 14.105 0.656 C 14.114 0.656 14.123 0.656 14.132 0.656 C 14.141 0.656 14.15 0.656 14.159 0.656 C 14.168 0.656 14.177 0.656 14.186 0.656 C 14.194 0.656 14.203 0.656 14.212 0.656 C 14.221 0.656 14.23 0.656 14.239 0.656 C 14.248 0.656 14.257 0.656 14.266 0.656 C 14.275 0.656 14.284 0.656 14.293 0.656 C 14.302 0.656 14.311 0.656 14.319 0.656 C 14.328 0.656 14.337 0.656 14.346 0.656 C 14.355 0.656 14.364 0.656 14.373 0.656 C 14.382 0.656 14.391 0.656 14.399 0.656 C 14.408 0.656 14.417 0.656 14.426 0.656 C 14.435 0.656 14.444 0.656 14.452 0.656 C 14.461 0.656 14.47 0.656 14.479 0.656 C 14.488 0.656 14.497 0.656 14.505 0.656 C 14.514 0.656 14.523 0.656 14.532 0.656 C 14.541 0.656 14.549 0.656 14.558 0.656 C 14.567 0.656 14.576 0.656 14.584 0.656 C 14.593 0.656 14.602 0.656 14.611 0.656 C 14.619 0.656 14.628 0.656 14.637 0.656 C 14.646 0.656 14.654 0.656 14.663 0.656 C 14.672 0.656 14.681 0.656 14.689 0.656 C 14.698 0.656 14.707 0.656 14.715 0.656 C 14.724 0.656 14.733 0.656 14.742 0.656 C 14.75 0.656 14.759 0.656 14.768 0.656 C 14.776 0.656 14.785 0.656 14.794 0.656 C 14.802 0.656 14.811 0.656 14.82 0.656 C 14.828 0.656 14.837 0.656 14.845 0.656 C 14.854 0.656 14.863 0.656 14.871 0.656 C 14.88 0.656 14.889 0.656 14.897 0.656 C 14.906 0.656 14.914 0.656 14.923 0.656 C 14.931 0.656 14.94 0.656 14.949 0.656 C 14.957 0.656 14.966 0.656 14.974 0.656 C 14.983 0.656 14.991 0.656 15 0.656 L 15 0 L 15 -0.656 C 14.991 -0.656 14.983 -0.656 14.974 -0.656 C 14.966 -0.656 14.957 -0.656 14.949 -0.656 C 14.94 -0.656 14.931 -0.656 14.923 -0.656 C 14.914 -0.656 14.906 -0.656 14.897 -0.656 C 14.889 -0.656 14.88 -0.656 14.871 -0.656 C 14.863 -0.656 14.854 -0.656 14.845 -0.656 C 14.837 -0.656 14.828 -0.656 14.82 -0.656 C 14.811 -0.656 14.802 -0.656 14.794 -0.656 C 14.785 -0.656 14.776 -0.656 14.768 -0.656 C 14.759 -0.656 14.75 -0.656 14.742 -0.656 C 14.733 -0.656 14.724 -0.656 14.715 -0.656 C 14.707 -0.656 14.698 -0.656 14.689 -0.656 C 14.681 -0.656 14.672 -0.656 14.663 -0.656 C 14.654 -0.656 14.646 -0.656 14.637 -0.656 C 14.628 -0.656 14.619 -0.656 14.611 -0.656 C 14.602 -0.656 14.593 -0.656 14.584 -0.656 C 14.576 -0.656 14.567 -0.656 14.558 -0.656 C 14.549 -0.656 14.541 -0.656 14.532 -0.656 C 14.523 -0.656 14.514 -0.656 14.505 -0.656 C 14.497 -0.656 14.488 -0.656 14.479 -0.656 C 14.47 -0.656 14.461 -0.656 14.452 -0.656 C 14.444 -0.656 14.435 -0.656 14.426 -0.656 C 14.417 -0.656 14.408 -0.656 14.399 -0.656 C 14.391 -0.656 14.382 -0.656 14.373 -0.656 C 14.364 -0.656 14.355 -0.656 14.346 -0.656 C 14.337 -0.656 14.328 -0.656 14.319 -0.656 C 14.311 -0.656 14.302 -0.656 14.293 -0.656 C 14.284 -0.656 14.275 -0.656 14.266 -0.656 C 14.257 -0.656 14.248 -0.656 14.239 -0.656 C 14.23 -0.656 14.221 -0.656 14.212 -0.656 C 14.203 -0.656 14.194 -0.656 14.186 -0.656 C 14.177 -0.656 14.168 -0.656 14.159 -0.656 C 14.15 -0.656 14.141 -0.656 14.132 -0.656 C 14.123 -0.656 14.114 -0.656 14.105 -0.656 C 14.096 -0.656 14.087 -0.656 14.078 -0.656 C 14.069 -0.656 14.06 -0.656 14.051 -0.656 C 14.042 -0.656 14.033 -0.656 14.024 -0.656 C 14.015 -0.656 14.005 -0.656 13.996 -0.656 C 13.987 -0.656 13.978 -0.656 13.969 -0.656 C 13.96 -0.656 13.951 -0.656 13.942 -0.656 C 13.933 -0.656 13.924 -0.656 13.915 -0.656 C 13.906 -0.656 13.897 -0.656 13.888 -0.656 C 13.878 -0.656 13.869 -0.656 13.86 -0.656 C 13.851 -0.656 13.842 -0.656 13.833 -0.656 C 13.824 -0.656 13.815 -0.656 13.806 -0.656 C 13.796 -0.656 13.787 -0.656 13.778 -0.656 C 13.769 -0.656 13.76 -0.656 13.751 -0.656 C 13.742 -0.656 13.732 -0.656 13.723 -0.656 C 13.714 -0.656 13.705 -0.656 13.696 -0.656 C 13.686 -0.656 13.677 -0.656 13.668 -0.656 C 13.659 -0.656 13.65 -0.656 13.641 -0.656 C 13.631 -0.656 13.622 -0.656 13.613 -0.656 C 13.604 -0.656 13.594 -0.656 13.585 -0.656 C 13.576 -0.656 13.567 -0.656 13.558 -0.656 C 13.548 -0.656 13.539 -0.656 13.53 -0.656 C 13.521 -0.656 13.511 -0.656 13.502 -0.656 C 13.493 -0.656 13.484 -0.656 13.474 -0.656 C 13.465 -0.656 13.456 -0.656 13.446 -0.656 C 13.437 -0.656 13.428 -0.656 13.419 -0.656 C 13.409 -0.656 13.4 -0.656 13.391 -0.656 C 13.381 -0.656 13.372 -0.656 13.363 -0.656 C 13.353 -0.656 13.344 -0.656 13.335 -0.656 C 13.325 -0.656 13.316 -0.656 13.307 -0.656 C 13.297 -0.656 13.288 -0.656 13.279 -0.656 C 13.269 -0.656 13.26 -0.656 13.251 -0.656 C 13.241 -0.656 13.232 -0.656 13.223 -0.656 C 13.213 -0.656 13.204 -0.656 13.195 -0.656 C 13.185 -0.656 13.176 -0.656 13.166 -0.656 C 13.157 -0.656 13.148 -0.656 13.138 -0.656 C 13.129 -0.656 13.119 -0.656 13.11 -0.656 C 13.101 -0.656 13.091 -0.656 13.082 -0.656 C 13.072 -0.656 13.063 -0.656 13.053 -0.656 C 13.044 -0.656 13.035 -0.656 13.025 -0.656 C 13.016 -0.656 13.006 -0.656 12.997 -0.656 C 12.987 -0.656 12.978 -0.656 12.968 -0.656 C 12.959 -0.656 12.95 -0.656 12.94 -0.656 C 12.931 -0.656 12.921 -0.656 12.912 -0.656 C 12.902 -0.656 12.893 -0.656 12.883 -0.656 C 12.874 -0.656 12.864 -0.656 12.855 -0.656 C 12.845 -0.656 12.836 -0.656 12.826 -0.656 C 12.817 -0.656 12.807 -0.656 12.798 -0.656 C 12.788 -0.656 12.779 -0.656 12.769 -0.656 C 12.76 -0.656 12.75 -0.656 12.74 -0.656 C 12.731 -0.656 12.721 -0.656 12.712 -0.656 C 12.702 -0.656 12.693 -0.656 12.683 -0.656 C 12.674 -0.656 12.664 -0.656 12.654 -0.656 C 12.645 -0.656 12.635 -0.656 12.626 -0.656 C 12.616 -0.656 12.607 -0.656 12.597 -0.656 C 12.587 -0.656 12.578 -0.656 12.568 -0.656 C 12.559 -0.656 12.549 -0.656 12.539 -0.656 C 12.53 -0.656 12.52 -0.656 12.511 -0.656 C 12.501 -0.656 12.491 -0.656 12.482 -0.656 C 12.472 -0.656 12.462 -0.656 12.453 -0.656 C 12.443 -0.656 12.434 -0.656 12.424 -0.656 C 12.414 -0.656 12.405 -0.656 12.395 -0.656 C 12.385 -0.656 12.376 -0.656 12.366 -0.656 C 12.356 -0.656 12.347 -0.656 12.337 -0.656 C 12.327 -0.656 12.318 -0.656 12.308 -0.656 C 12.298 -0.656 12.289 -0.656 12.279 -0.656 C 12.269 -0.656 12.26 -0.656 12.25 -0.656 C 12.24 -0.656 12.23 -0.656 12.221 -0.656 C 12.211 -0.656 12.201 -0.656 12.192 -0.656 C 12.182 -0.656 12.172 -0.656 12.162 -0.656 C 12.153 -0.656 12.143 -0.656 12.133 -0.656 C 12.124 -0.656 12.114 -0.656 12.104 -0.656 C 12.094 -0.656 12.085 -0.656 12.075 -0.656 C 12.065 -0.656 12.055 -0.656 12.046 -0.656 C 12.036 -0.656 12.026 -0.656 12.016 -0.656 C 12.007 -0.656 11.997 -0.656 11.987 -0.656 C 11.977 -0.656 11.967 -0.656 11.958 -0.656 C 11.948 -0.656 11.938 -0.656 11.928 -0.656 C 11.919 -0.656 11.909 -0.656 11.899 -0.656 C 11.889 -0.656 11.879 -0.656 11.87 -0.656 C 11.86 -0.656 11.85 -0.656 11.84 -0.656 C 11.83 -0.656 11.821 -0.656 11.811 -0.656 C 11.801 -0.656 11.791 -0.656 11.781 -0.656 C 11.771 -0.656 11.762 -0.656 11.752 -0.656 C 11.742 -0.656 11.732 -0.656 11.722 -0.656 C 11.712 -0.656 11.703 -0.656 11.693 -0.656 C 11.683 -0.656 11.673 -0.656 11.663 -0.656 C 11.653 -0.656 11.643 -0.656 11.634 -0.656 C 11.624 -0.656 11.614 -0.656 11.604 -0.656 C 11.594 -0.656 11.584 -0.656 11.574 -0.656 C 11.564 -0.656 11.555 -0.656 11.545 -0.656 C 11.535 -0.656 11.525 -0.656 11.515 -0.656 C 11.505 -0.656 11.495 -0.656 11.485 -0.656 C 11.475 -0.656 11.465 -0.656 11.456 -0.656 C 11.446 -0.656 11.436 -0.656 11.426 -0.656 C 11.416 -0.656 11.406 -0.656 11.396 -0.656 C 11.386 -0.656 11.376 -0.656 11.366 -0.656 C 11.356 -0.656 11.346 -0.656 11.336 -0.656 C 11.326 -0.656 11.317 -0.656 11.307 -0.656 C 11.297 -0.656 11.287 -0.656 11.277 -0.656 C 11.267 -0.656 11.257 -0.656 11.247 -0.656 C 11.237 -0.656 11.227 -0.656 11.217 -0.656 C 11.207 -0.656 11.197 -0.656 11.187 -0.656 C 11.177 -0.656 11.167 -0.656 11.157 -0.656 C 11.147 -0.656 11.137 -0.656 11.127 -0.656 C 11.117 -0.656 11.107 -0.656 11.097 -0.656 C 11.087 -0.656 11.077 -0.656 11.067 -0.656 C 11.057 -0.656 11.047 -0.656 11.037 -0.656 C 11.027 -0.656 11.017 -0.656 11.007 -0.656 C 10.997 -0.656 10.987 -0.656 10.977 -0.656 C 10.967 -0.656 10.957 -0.656 10.947 -0.656 C 10.937 -0.656 10.927 -0.656 10.917 -0.656 C 10.907 -0.656 10.897 -0.656 10.887 -0.656 C 10.877 -0.656 10.867 -0.656 10.857 -0.656 C 10.847 -0.656 10.837 -0.656 10.827 -0.656 C 10.817 -0.656 10.807 -0.656 10.796 -0.656 C 10.786 -0.656 10.776 -0.656 10.766 -0.656 C 10.756 -0.656 10.746 -0.656 10.736 -0.656 C 10.726 -0.656 10.716 -0.656 10.706 -0.656 C 10.696 -0.656 10.686 -0.656 10.676 -0.656 C 10.666 -0.656 10.655 -0.656 10.645 -0.656 C 10.635 -0.656 10.625 -0.656 10.615 -0.656 C 10.605 -0.656 10.595 -0.656 10.585 -0.656 C 10.575 -0.656 10.565 -0.656 10.555 -0.656 C 10.544 -0.656 10.534 -0.656 10.524 -0.656 C 10.514 -0.656 10.504 -0.656 10.494 -0.656 C 10.484 -0.656 10.474 -0.656 10.464 -0.656 C 10.453 -0.656 10.443 -0.656 10.433 -0.656 C 10.423 -0.656 10.413 -0.656 10.403 -0.656 C 10.393 -0.656 10.383 -0.656 10.372 -0.656 C 10.362 -0.656 10.352 -0.656 10.342 -0.656 C 10.332 -0.656 10.322 -0.656 10.312 -0.656 C 10.301 -0.656 10.291 -0.656 10.281 -0.656 C 10.271 -0.656 10.261 -0.656 10.251 -0.656 C 10.241 -0.656 10.23 -0.656 10.22 -0.656 C 10.21 -0.656 10.2 -0.656 10.19 -0.656 C 10.18 -0.656 10.169 -0.656 10.159 -0.656 C 10.149 -0.656 10.139 -0.656 10.129 -0.656 C 10.119 -0.656 10.108 -0.656 10.098 -0.656 C 10.088 -0.656 10.078 -0.656 10.068 -0.656 C 10.057 -0.656 10.047 -0.656 10.037 -0.656 C 10.027 -0.656 10.017 -0.656 10.007 -0.656 C 9.996 -0.656 9.986 -0.656 9.976 -0.656 C 9.966 -0.656 9.956 -0.656 9.945 -0.656 C 9.935 -0.656 9.925 -0.656 9.915 -0.656 C 9.905 -0.656 9.894 -0.656 9.884 -0.656 C 9.874 -0.656 9.864 -0.656 9.853 -0.656 C 9.843 -0.656 9.833 -0.656 9.823 -0.656 C 9.813 -0.656 9.802 -0.656 9.792 -0.656 C 9.782 -0.656 9.772 -0.656 9.761 -0.656 C 9.751 -0.656 9.741 -0.656 9.731 -0.656 C 9.721 -0.656 9.71 -0.656 9.7 -0.656 C 9.69 -0.656 9.68 -0.656 9.669 -0.656 C 9.659 -0.656 9.649 -0.656 9.639 -0.656 C 9.628 -0.656 9.618 -0.656 9.608 -0.656 C 9.598 -0.656 9.587 -0.656 9.577 -0.656 C 9.567 -0.656 9.557 -0.656 9.546 -0.656 C 9.536 -0.656 9.526 -0.656 9.516 -0.656 C 9.505 -0.656 9.495 -0.656 9.485 -0.656 C 9.475 -0.656 9.464 -0.656 9.454 -0.656 C 9.444 -0.656 9.434 -0.656 9.423 -0.656 C 9.413 -0.656 9.403 -0.656 9.392 -0.656 C 9.382 -0.656 9.372 -0.656 9.362 -0.656 C 9.351 -0.656 9.341 -0.656 9.331 -0.656 C 9.321 -0.656 9.31 -0.656 9.3 -0.656 C 9.29 -0.656 9.279 -0.656 9.269 -0.656 C 9.259 -0.656 9.249 -0.656 9.238 -0.656 C 9.228 -0.656 9.218 -0.656 9.207 -0.656 C 9.197 -0.656 9.187 -0.656 9.177 -0.656 C 9.166 -0.656 9.156 -0.656 9.146 -0.656 C 9.135 -0.656 9.125 -0.656 9.115 -0.656 C 9.104 -0.656 9.094 -0.656 9.084 -0.656 C 9.074 -0.656 9.063 -0.656 9.053 -0.656 C 9.043 -0.656 9.032 -0.656 9.022 -0.656 C 9.012 -0.656 9.001 -0.656 8.991 -0.656 C 8.981 -0.656 8.97 -0.656 8.96 -0.656 C 8.95 -0.656 8.939 -0.656 8.929 -0.656 C 8.919 -0.656 8.909 -0.656 8.898 -0.656 C 8.888 -0.656 8.878 -0.656 8.867 -0.656 C 8.857 -0.656 8.847 -0.656 8.836 -0.656 C 8.826 -0.656 8.816 -0.656 8.805 -0.656 C 8.795 -0.656 8.785 -0.656 8.774 -0.656 C 8.764 -0.656 8.754 -0.656 8.743 -0.656 C 8.733 -0.656 8.723 -0.656 8.712 -0.656 C 8.702 -0.656 8.692 -0.656 8.681 -0.656 C 8.671 -0.656 8.661 -0.656 8.65 -0.656 C 8.64 -0.656 8.63 -0.656 8.619 -0.656 C 8.609 -0.656 8.599 -0.656 8.588 -0.656 C 8.578 -0.656 8.568 -0.656 8.557 -0.656 C 8.547 -0.656 8.537 -0.656 8.526 -0.656 C 8.516 -0.656 8.506 -0.656 8.495 -0.656 C 8.485 -0.656 8.474 -0.656 8.464 -0.656 C 8.454 -0.656 8.443 -0.656 8.433 -0.656 C 8.423 -0.656 8.412 -0.656 8.402 -0.656 C 8.392 -0.656 8.381 -0.656 8.371 -0.656 C 8.361 -0.656 8.35 -0.656 8.34 -0.656 C 8.33 -0.656 8.319 -0.656 8.309 -0.656 C 8.298 -0.656 8.288 -0.656 8.278 -0.656 C 8.267 -0.656 8.257 -0.656 8.247 -0.656 C 8.236 -0.656 8.226 -0.656 8.216 -0.656 C 8.205 -0.656 8.195 -0.656 8.185 -0.656 C 8.174 -0.656 8.164 -0.656 8.153 -0.656 C 8.143 -0.656 8.133 -0.656 8.122 -0.656 C 8.112 -0.656 8.102 -0.656 8.091 -0.656 C 8.081 -0.656 8.071 -0.656 8.06 -0.656 C 8.05 -0.656 8.039 -0.656 8.029 -0.656 C 8.019 -0.656 8.008 -0.656 7.998 -0.656 C 7.988 -0.656 7.977 -0.656 7.967 -0.656 C 7.956 -0.656 7.946 -0.656 7.936 -0.656 C 7.925 -0.656 7.915 -0.656 7.905 -0.656 C 7.894 -0.656 7.884 -0.656 7.873 -0.656 C 7.863 -0.656 7.853 -0.656 7.842 -0.656 C 7.832 -0.656 7.822 -0.656 7.811 -0.656 C 7.801 -0.656 7.791 -0.656 7.78 -0.656 C 7.77 -0.656 7.759 -0.656 7.749 -0.656 C 7.739 -0.656 7.728 -0.656 7.718 -0.656 C 7.708 -0.656 7.697 -0.656 7.687 -0.656 C 7.676 -0.656 7.666 -0.656 7.656 -0.656 C 7.645 -0.656 7.635 -0.656 7.625 -0.656 C 7.614 -0.656 7.604 -0.656 7.593 -0.656 C 7.583 -0.656 7.573 -0.656 7.562 -0.656 C 7.552 -0.656 7.542 -0.656 7.531 -0.656 C 7.521 -0.656 7.51 -0.656 7.5 -0.656 C 7.49 -0.656 7.479 -0.656 7.469 -0.656 C 7.458 -0.656 7.448 -0.656 7.438 -0.656 C 7.427 -0.656 7.417 -0.656 7.407 -0.656 C 7.396 -0.656 7.386 -0.656 7.375 -0.656 C 7.365 -0.656 7.355 -0.656 7.344 -0.656 C 7.334 -0.656 7.324 -0.656 7.313 -0.656 C 7.303 -0.656 7.292 -0.656 7.282 -0.656 C 7.272 -0.656 7.261 -0.656 7.251 -0.656 C 7.241 -0.656 7.23 -0.656 7.22 -0.656 C 7.209 -0.656 7.199 -0.656 7.189 -0.656 C 7.178 -0.656 7.168 -0.656 7.158 -0.656 C 7.147 -0.656 7.137 -0.656 7.127 -0.656 C 7.116 -0.656 7.106 -0.656 7.095 -0.656 C 7.085 -0.656 7.075 -0.656 7.064 -0.656 C 7.054 -0.656 7.044 -0.656 7.033 -0.656 C 7.023 -0.656 7.012 -0.656 7.002 -0.656 C 6.992 -0.656 6.981 -0.656 6.971 -0.656 C 6.961 -0.656 6.95 -0.656 6.94 -0.656 C 6.929 -0.656 6.919 -0.656 6.909 -0.656 C 6.898 -0.656 6.888 -0.656 6.878 -0.656 C 6.867 -0.656 6.857 -0.656 6.847 -0.656 C 6.836 -0.656 6.826 -0.656 6.815 -0.656 C 6.805 -0.656 6.795 -0.656 6.784 -0.656 C 6.774 -0.656 6.764 -0.656 6.753 -0.656 C 6.743 -0.656 6.733 -0.656 6.722 -0.656 C 6.712 -0.656 6.702 -0.656 6.691 -0.656 C 6.681 -0.656 6.67 -0.656 6.66 -0.656 C 6.65 -0.656 6.639 -0.656 6.629 -0.656 C 6.619 -0.656 6.608 -0.656 6.598 -0.656 C 6.588 -0.656 6.577 -0.656 6.567 -0.656 C 6.557 -0.656 6.546 -0.656 6.536 -0.656 C 6.526 -0.656 6.515 -0.656 6.505 -0.656 C 6.494 -0.656 6.484 -0.656 6.474 -0.656 C 6.463 -0.656 6.453 -0.656 6.443 -0.656 C 6.432 -0.656 6.422 -0.656 6.412 -0.656 C 6.401 -0.656 6.391 -0.656 6.381 -0.656 C 6.37 -0.656 6.36 -0.656 6.35 -0.656 C 6.339 -0.656 6.329 -0.656 6.319 -0.656 C 6.308 -0.656 6.298 -0.656 6.288 -0.656 C 6.277 -0.656 6.267 -0.656 6.257 -0.656 C 6.246 -0.656 6.236 -0.656 6.226 -0.656 C 6.215 -0.656 6.205 -0.656 6.195 -0.656 C 6.184 -0.656 6.174 -0.656 6.164 -0.656 C 6.153 -0.656 6.143 -0.656 6.133 -0.656 C 6.122 -0.656 6.112 -0.656 6.102 -0.656 C 6.091 -0.656 6.081 -0.656 6.071 -0.656 C 6.061 -0.656 6.05 -0.656 6.04 -0.656 C 6.03 -0.656 6.019 -0.656 6.009 -0.656 C 5.999 -0.656 5.988 -0.656 5.978 -0.656 C 5.968 -0.656 5.957 -0.656 5.947 -0.656 C 5.937 -0.656 5.926 -0.656 5.916 -0.656 C 5.906 -0.656 5.896 -0.656 5.885 -0.656 C 5.875 -0.656 5.865 -0.656 5.854 -0.656 C 5.844 -0.656 5.834 -0.656 5.823 -0.656 C 5.813 -0.656 5.803 -0.656 5.793 -0.656 C 5.782 -0.656 5.772 -0.656 5.762 -0.656 C 5.751 -0.656 5.741 -0.656 5.731 -0.656 C 5.721 -0.656 5.71 -0.656 5.7 -0.656 C 5.69 -0.656 5.679 -0.656 5.669 -0.656 C 5.659 -0.656 5.649 -0.656 5.638 -0.656 C 5.628 -0.656 5.618 -0.656 5.608 -0.656 C 5.597 -0.656 5.587 -0.656 5.577 -0.656 C 5.566 -0.656 5.556 -0.656 5.546 -0.656 C 5.536 -0.656 5.525 -0.656 5.515 -0.656 C 5.505 -0.656 5.495 -0.656 5.484 -0.656 C 5.474 -0.656 5.464 -0.656 5.454 -0.656 C 5.443 -0.656 5.433 -0.656 5.423 -0.656 C 5.413 -0.656 5.402 -0.656 5.392 -0.656 C 5.382 -0.656 5.372 -0.656 5.361 -0.656 C 5.351 -0.656 5.341 -0.656 5.331 -0.656 C 5.32 -0.656 5.31 -0.656 5.3 -0.656 C 5.29 -0.656 5.279 -0.656 5.269 -0.656 C 5.259 -0.656 5.249 -0.656 5.239 -0.656 C 5.228 -0.656 5.218 -0.656 5.208 -0.656 C 5.198 -0.656 5.187 -0.656 5.177 -0.656 C 5.167 -0.656 5.157 -0.656 5.147 -0.656 C 5.136 -0.656 5.126 -0.656 5.116 -0.656 C 5.106 -0.656 5.095 -0.656 5.085 -0.656 C 5.075 -0.656 5.065 -0.656 5.055 -0.656 C 5.044 -0.656 5.034 -0.656 5.024 -0.656 C 5.014 -0.656 5.004 -0.656 4.993 -0.656 C 4.983 -0.656 4.973 -0.656 4.963 -0.656 C 4.953 -0.656 4.943 -0.656 4.932 -0.656 C 4.922 -0.656 4.912 -0.656 4.902 -0.656 C 4.892 -0.656 4.881 -0.656 4.871 -0.656 C 4.861 -0.656 4.851 -0.656 4.841 -0.656 C 4.831 -0.656 4.82 -0.656 4.81 -0.656 C 4.8 -0.656 4.79 -0.656 4.78 -0.656 C 4.77 -0.656 4.759 -0.656 4.749 -0.656 C 4.739 -0.656 4.729 -0.656 4.719 -0.656 C 4.709 -0.656 4.699 -0.656 4.688 -0.656 C 4.678 -0.656 4.668 -0.656 4.658 -0.656 C 4.648 -0.656 4.638 -0.656 4.628 -0.656 C 4.617 -0.656 4.607 -0.656 4.597 -0.656 C 4.587 -0.656 4.577 -0.656 4.567 -0.656 C 4.557 -0.656 4.547 -0.656 4.536 -0.656 C 4.526 -0.656 4.516 -0.656 4.506 -0.656 C 4.496 -0.656 4.486 -0.656 4.476 -0.656 C 4.466 -0.656 4.456 -0.656 4.445 -0.656 C 4.435 -0.656 4.425 -0.656 4.415 -0.656 C 4.405 -0.656 4.395 -0.656 4.385 -0.656 C 4.375 -0.656 4.365 -0.656 4.355 -0.656 C 4.345 -0.656 4.334 -0.656 4.324 -0.656 C 4.314 -0.656 4.304 -0.656 4.294 -0.656 C 4.284 -0.656 4.274 -0.656 4.264 -0.656 C 4.254 -0.656 4.244 -0.656 4.234 -0.656 C 4.224 -0.656 4.214 -0.656 4.204 -0.656 C 4.193 -0.656 4.183 -0.656 4.173 -0.656 C 4.163 -0.656 4.153 -0.656 4.143 -0.656 C 4.133 -0.656 4.123 -0.656 4.113 -0.656 C 4.103 -0.656 4.093 -0.656 4.083 -0.656 C 4.073 -0.656 4.063 -0.656 4.053 -0.656 C 4.043 -0.656 4.033 -0.656 4.023 -0.656 C 4.013 -0.656 4.003 -0.656 3.993 -0.656 C 3.983 -0.656 3.973 -0.656 3.963 -0.656 C 3.953 -0.656 3.943 -0.656 3.933 -0.656 C 3.923 -0.656 3.913 -0.656 3.903 -0.656 C 3.893 -0.656 3.883 -0.656 3.873 -0.656 C 3.863 -0.656 3.853 -0.656 3.843 -0.656 C 3.833 -0.656 3.823 -0.656 3.813 -0.656 C 3.803 -0.656 3.793 -0.656 3.783 -0.656 C 3.773 -0.656 3.763 -0.656 3.753 -0.656 C 3.743 -0.656 3.733 -0.656 3.723 -0.656 C 3.713 -0.656 3.703 -0.656 3.693 -0.656 C 3.683 -0.656 3.674 -0.656 3.664 -0.656 C 3.654 -0.656 3.644 -0.656 3.634 -0.656 C 3.624 -0.656 3.614 -0.656 3.604 -0.656 C 3.594 -0.656 3.584 -0.656 3.574 -0.656 C 3.564 -0.656 3.554 -0.656 3.544 -0.656 C 3.535 -0.656 3.525 -0.656 3.515 -0.656 C 3.505 -0.656 3.495 -0.656 3.485 -0.656 C 3.475 -0.656 3.465 -0.656 3.455 -0.656 C 3.445 -0.656 3.436 -0.656 3.426 -0.656 C 3.416 -0.656 3.406 -0.656 3.396 -0.656 C 3.386 -0.656 3.376 -0.656 3.366 -0.656 C 3.357 -0.656 3.347 -0.656 3.337 -0.656 C 3.327 -0.656 3.317 -0.656 3.307 -0.656 C 3.297 -0.656 3.288 -0.656 3.278 -0.656 C 3.268 -0.656 3.258 -0.656 3.248 -0.656 C 3.238 -0.656 3.229 -0.656 3.219 -0.656 C 3.209 -0.656 3.199 -0.656 3.189 -0.656 C 3.179 -0.656 3.17 -0.656 3.16 -0.656 C 3.15 -0.656 3.14 -0.656 3.13 -0.656 C 3.121 -0.656 3.111 -0.656 3.101 -0.656 C 3.091 -0.656 3.081 -0.656 3.072 -0.656 C 3.062 -0.656 3.052 -0.656 3.042 -0.656 C 3.033 -0.656 3.023 -0.656 3.013 -0.656 C 3.003 -0.656 2.993 -0.656 2.984 -0.656 C 2.974 -0.656 2.964 -0.656 2.954 -0.656 C 2.945 -0.656 2.935 -0.656 2.925 -0.656 C 2.915 -0.656 2.906 -0.656 2.896 -0.656 C 2.886 -0.656 2.876 -0.656 2.867 -0.656 C 2.857 -0.656 2.847 -0.656 2.838 -0.656 C 2.828 -0.656 2.818 -0.656 2.808 -0.656 C 2.799 -0.656 2.789 -0.656 2.779 -0.656 C 2.77 -0.656 2.76 -0.656 2.75 -0.656 C 2.74 -0.656 2.731 -0.656 2.721 -0.656 C 2.711 -0.656 2.702 -0.656 2.692 -0.656 C 2.682 -0.656 2.673 -0.656 2.663 -0.656 C 2.653 -0.656 2.644 -0.656 2.634 -0.656 C 2.624 -0.656 2.615 -0.656 2.605 -0.656 C 2.595 -0.656 2.586 -0.656 2.576 -0.656 C 2.566 -0.656 2.557 -0.656 2.547 -0.656 C 2.538 -0.656 2.528 -0.656 2.518 -0.656 C 2.509 -0.656 2.499 -0.656 2.489 -0.656 C 2.48 -0.656 2.47 -0.656 2.461 -0.656 C 2.451 -0.656 2.441 -0.656 2.432 -0.656 C 2.422 -0.656 2.413 -0.656 2.403 -0.656 C 2.393 -0.656 2.384 -0.656 2.374 -0.656 C 2.365 -0.656 2.355 -0.656 2.346 -0.656 C 2.336 -0.656 2.326 -0.656 2.317 -0.656 C 2.307 -0.656 2.298 -0.656 2.288 -0.656 C 2.279 -0.656 2.269 -0.656 2.26 -0.656 C 2.25 -0.656 2.24 -0.656 2.231 -0.656 C 2.221 -0.656 2.212 -0.656 2.202 -0.656 C 2.193 -0.656 2.183 -0.656 2.174 -0.656 C 2.164 -0.656 2.155 -0.656 2.145 -0.656 C 2.136 -0.656 2.126 -0.656 2.117 -0.656 C 2.107 -0.656 2.098 -0.656 2.088 -0.656 C 2.079 -0.656 2.069 -0.656 2.06 -0.656 C 2.05 -0.656 2.041 -0.656 2.032 -0.656 C 2.022 -0.656 2.013 -0.656 2.003 -0.656 C 1.994 -0.656 1.984 -0.656 1.975 -0.656 C 1.965 -0.656 1.956 -0.656 1.947 -0.656 C 1.937 -0.656 1.928 -0.656 1.918 -0.656 C 1.909 -0.656 1.899 -0.656 1.89 -0.656 C 1.881 -0.656 1.871 -0.656 1.862 -0.656 C 1.852 -0.656 1.843 -0.656 1.834 -0.656 C 1.824 -0.656 1.815 -0.656 1.805 -0.656 C 1.796 -0.656 1.787 -0.656 1.777 -0.656 C 1.768 -0.656 1.759 -0.656 1.749 -0.656 C 1.74 -0.656 1.731 -0.656 1.721 -0.656 C 1.712 -0.656 1.703 -0.656 1.693 -0.656 C 1.684 -0.656 1.675 -0.656 1.665 -0.656 C 1.656 -0.656 1.647 -0.656 1.637 -0.656 C 1.628 -0.656 1.619 -0.656 1.609 -0.656 C 1.6 -0.656 1.591 -0.656 1.581 -0.656 C 1.572 -0.656 1.563 -0.656 1.554 -0.656 C 1.544 -0.656 1.535 -0.656 1.526 -0.656 C 1.516 -0.656 1.507 -0.656 1.498 -0.656 C 1.489 -0.656 1.479 -0.656 1.47 -0.656 C 1.461 -0.656 1.452 -0.656 1.442 -0.656 C 1.433 -0.656 1.424 -0.656 1.415 -0.656 C 1.406 -0.656 1.396 -0.656 1.387 -0.656 C 1.378 -0.656 1.369 -0.656 1.359 -0.656 C 1.35 -0.656 1.341 -0.656 1.332 -0.656 C 1.323 -0.656 1.314 -0.656 1.304 -0.656 C 1.295 -0.656 1.286 -0.656 1.277 -0.656 C 1.268 -0.656 1.258 -0.656 1.249 -0.656 C 1.24 -0.656 1.231 -0.656 1.222 -0.656 C 1.213 -0.656 1.204 -0.656 1.194 -0.656 C 1.185 -0.656 1.176 -0.656 1.167 -0.656 C 1.158 -0.656 1.149 -0.656 1.14 -0.656 C 1.131 -0.656 1.122 -0.656 1.112 -0.656 C 1.103 -0.656 1.094 -0.656 1.085 -0.656 C 1.076 -0.656 1.067 -0.656 1.058 -0.656 C 1.049 -0.656 1.04 -0.656 1.031 -0.656 C 1.022 -0.656 1.013 -0.656 1.004 -0.656 C 0.995 -0.656 0.985 -0.656 0.976 -0.656 C 0.967 -0.656 0.958 -0.656 0.949 -0.656 C 0.94 -0.656 0.931 -0.656 0.922 -0.656 C 0.913 -0.656 0.904 -0.656 0.895 -0.656 C 0.886 -0.656 0.877 -0.656 0.868 -0.656 C 0.859 -0.656 0.85 -0.656 0.841 -0.656 C 0.832 -0.656 0.823 -0.656 0.814 -0.656 C 0.806 -0.656 0.797 -0.656 0.788 -0.656 C 0.779 -0.656 0.77 -0.656 0.761 -0.656 C 0.752 -0.656 0.743 -0.656 0.734 -0.656 C 0.725 -0.656 0.716 -0.656 0.707 -0.656 C 0.698 -0.656 0.689 -0.656 0.681 -0.656 C 0.672 -0.656 0.663 -0.656 0.654 -0.656 C 0.645 -0.656 0.636 -0.656 0.627 -0.656 C 0.618 -0.656 0.609 -0.656 0.601 -0.656 C 0.592 -0.656 0.583 -0.656 0.574 -0.656 C 0.565 -0.656 0.556 -0.656 0.548 -0.656 C 0.539 -0.656 0.53 -0.656 0.521 -0.656 C 0.512 -0.656 0.503 -0.656 0.495 -0.656 C 0.486 -0.656 0.477 -0.656 0.468 -0.656 C 0.459 -0.656 0.451 -0.656 0.442 -0.656 C 0.433 -0.656 0.424 -0.656 0.416 -0.656 C 0.407 -0.656 0.398 -0.656 0.389 -0.656 C 0.381 -0.656 0.372 -0.656 0.363 -0.656 C 0.354 -0.656 0.346 -0.656 0.337 -0.656 C 0.328 -0.656 0.319 -0.656 0.311 -0.656 C 0.302 -0.656 0.293 -0.656 0.285 -0.656 C 0.276 -0.656 0.267 -0.656 0.258 -0.656 C 0.25 -0.656 0.241 -0.656 0.232 -0.656 C 0.224 -0.656 0.215 -0.656 0.206 -0.656 C 0.198 -0.656 0.189 -0.656 0.18 -0.656 C 0.172 -0.656 0.163 -0.656 0.155 -0.656 C 0.146 -0.656 0.137 -0.656 0.129 -0.656 C 0.12 -0.656 0.111 -0.656 0.103 -0.656 C 0.094 -0.656 0.086 -0.656 0.077 -0.656 C 0.069 -0.656 0.06 -0.656 0.051 -0.656 C 0.043 -0.656 0.034 -0.656 0.026 -0.656 C 0.017 -0.656 0.009 -0.656 0 -0.656 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 1.313,
    viewBox: "0 -0.656 11 1.313",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.5,
      top: 16.5,
      width: 11,
      height: 1.3125
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.656 C -0.362 -0.656 -0.656 -0.362 -0.656 0 C -0.656 0.362 -0.362 0.656 0 0.656 L 0 0 L 0 -0.656 Z M 11 0.656 C 11.362 0.656 11.656 0.362 11.656 0 C 11.656 -0.362 11.362 -0.656 11 -0.656 L 11 0 L 11 0.656 Z M 0 0 L 0 0.656 C 0.006 0.656 0.013 0.656 0.019 0.656 C 0.025 0.656 0.031 0.656 0.038 0.656 C 0.044 0.656 0.05 0.656 0.057 0.656 C 0.063 0.656 0.069 0.656 0.075 0.656 C 0.082 0.656 0.088 0.656 0.094 0.656 C 0.101 0.656 0.107 0.656 0.113 0.656 C 0.12 0.656 0.126 0.656 0.132 0.656 C 0.139 0.656 0.145 0.656 0.151 0.656 C 0.158 0.656 0.164 0.656 0.17 0.656 C 0.177 0.656 0.183 0.656 0.19 0.656 C 0.196 0.656 0.202 0.656 0.209 0.656 C 0.215 0.656 0.221 0.656 0.228 0.656 C 0.234 0.656 0.241 0.656 0.247 0.656 C 0.253 0.656 0.26 0.656 0.266 0.656 C 0.273 0.656 0.279 0.656 0.285 0.656 C 0.292 0.656 0.298 0.656 0.305 0.656 C 0.311 0.656 0.318 0.656 0.324 0.656 C 0.33 0.656 0.337 0.656 0.343 0.656 C 0.35 0.656 0.356 0.656 0.363 0.656 C 0.369 0.656 0.376 0.656 0.382 0.656 C 0.389 0.656 0.395 0.656 0.402 0.656 C 0.408 0.656 0.414 0.656 0.421 0.656 C 0.427 0.656 0.434 0.656 0.44 0.656 C 0.447 0.656 0.453 0.656 0.46 0.656 C 0.466 0.656 0.473 0.656 0.479 0.656 C 0.486 0.656 0.493 0.656 0.499 0.656 C 0.506 0.656 0.512 0.656 0.519 0.656 C 0.525 0.656 0.532 0.656 0.538 0.656 C 0.545 0.656 0.551 0.656 0.558 0.656 C 0.564 0.656 0.571 0.656 0.578 0.656 C 0.584 0.656 0.591 0.656 0.597 0.656 C 0.604 0.656 0.61 0.656 0.617 0.656 C 0.624 0.656 0.63 0.656 0.637 0.656 C 0.643 0.656 0.65 0.656 0.657 0.656 C 0.663 0.656 0.67 0.656 0.676 0.656 C 0.683 0.656 0.69 0.656 0.696 0.656 C 0.703 0.656 0.709 0.656 0.716 0.656 C 0.723 0.656 0.729 0.656 0.736 0.656 C 0.743 0.656 0.749 0.656 0.756 0.656 C 0.763 0.656 0.769 0.656 0.776 0.656 C 0.782 0.656 0.789 0.656 0.796 0.656 C 0.802 0.656 0.809 0.656 0.816 0.656 C 0.822 0.656 0.829 0.656 0.836 0.656 C 0.842 0.656 0.849 0.656 0.856 0.656 C 0.863 0.656 0.869 0.656 0.876 0.656 C 0.883 0.656 0.889 0.656 0.896 0.656 C 0.903 0.656 0.909 0.656 0.916 0.656 C 0.923 0.656 0.93 0.656 0.936 0.656 C 0.943 0.656 0.95 0.656 0.957 0.656 C 0.963 0.656 0.97 0.656 0.977 0.656 C 0.983 0.656 0.99 0.656 0.997 0.656 C 1.004 0.656 1.01 0.656 1.017 0.656 C 1.024 0.656 1.031 0.656 1.037 0.656 C 1.044 0.656 1.051 0.656 1.058 0.656 C 1.065 0.656 1.071 0.656 1.078 0.656 C 1.085 0.656 1.092 0.656 1.098 0.656 C 1.105 0.656 1.112 0.656 1.119 0.656 C 1.126 0.656 1.132 0.656 1.139 0.656 C 1.146 0.656 1.153 0.656 1.16 0.656 C 1.167 0.656 1.173 0.656 1.18 0.656 C 1.187 0.656 1.194 0.656 1.201 0.656 C 1.207 0.656 1.214 0.656 1.221 0.656 C 1.228 0.656 1.235 0.656 1.242 0.656 C 1.249 0.656 1.255 0.656 1.262 0.656 C 1.269 0.656 1.276 0.656 1.283 0.656 C 1.29 0.656 1.297 0.656 1.303 0.656 C 1.31 0.656 1.317 0.656 1.324 0.656 C 1.331 0.656 1.338 0.656 1.345 0.656 C 1.352 0.656 1.358 0.656 1.365 0.656 C 1.372 0.656 1.379 0.656 1.386 0.656 C 1.393 0.656 1.4 0.656 1.407 0.656 C 1.414 0.656 1.421 0.656 1.427 0.656 C 1.434 0.656 1.441 0.656 1.448 0.656 C 1.455 0.656 1.462 0.656 1.469 0.656 C 1.476 0.656 1.483 0.656 1.49 0.656 C 1.497 0.656 1.504 0.656 1.511 0.656 C 1.518 0.656 1.525 0.656 1.531 0.656 C 1.538 0.656 1.545 0.656 1.552 0.656 C 1.559 0.656 1.566 0.656 1.573 0.656 C 1.58 0.656 1.587 0.656 1.594 0.656 C 1.601 0.656 1.608 0.656 1.615 0.656 C 1.622 0.656 1.629 0.656 1.636 0.656 C 1.643 0.656 1.65 0.656 1.657 0.656 C 1.664 0.656 1.671 0.656 1.678 0.656 C 1.685 0.656 1.692 0.656 1.699 0.656 C 1.706 0.656 1.713 0.656 1.72 0.656 C 1.727 0.656 1.734 0.656 1.741 0.656 C 1.748 0.656 1.755 0.656 1.762 0.656 C 1.769 0.656 1.776 0.656 1.783 0.656 C 1.79 0.656 1.797 0.656 1.804 0.656 C 1.811 0.656 1.819 0.656 1.826 0.656 C 1.833 0.656 1.84 0.656 1.847 0.656 C 1.854 0.656 1.861 0.656 1.868 0.656 C 1.875 0.656 1.882 0.656 1.889 0.656 C 1.896 0.656 1.903 0.656 1.91 0.656 C 1.917 0.656 1.925 0.656 1.932 0.656 C 1.939 0.656 1.946 0.656 1.953 0.656 C 1.96 0.656 1.967 0.656 1.974 0.656 C 1.981 0.656 1.988 0.656 1.995 0.656 C 2.003 0.656 2.01 0.656 2.017 0.656 C 2.024 0.656 2.031 0.656 2.038 0.656 C 2.045 0.656 2.052 0.656 2.059 0.656 C 2.067 0.656 2.074 0.656 2.081 0.656 C 2.088 0.656 2.095 0.656 2.102 0.656 C 2.109 0.656 2.117 0.656 2.124 0.656 C 2.131 0.656 2.138 0.656 2.145 0.656 C 2.152 0.656 2.159 0.656 2.167 0.656 C 2.174 0.656 2.181 0.656 2.188 0.656 C 2.195 0.656 2.202 0.656 2.209 0.656 C 2.217 0.656 2.224 0.656 2.231 0.656 C 2.238 0.656 2.245 0.656 2.253 0.656 C 2.26 0.656 2.267 0.656 2.274 0.656 C 2.281 0.656 2.288 0.656 2.296 0.656 C 2.303 0.656 2.31 0.656 2.317 0.656 C 2.324 0.656 2.332 0.656 2.339 0.656 C 2.346 0.656 2.353 0.656 2.36 0.656 C 2.368 0.656 2.375 0.656 2.382 0.656 C 2.389 0.656 2.396 0.656 2.404 0.656 C 2.411 0.656 2.418 0.656 2.425 0.656 C 2.433 0.656 2.44 0.656 2.447 0.656 C 2.454 0.656 2.462 0.656 2.469 0.656 C 2.476 0.656 2.483 0.656 2.49 0.656 C 2.498 0.656 2.505 0.656 2.512 0.656 C 2.519 0.656 2.527 0.656 2.534 0.656 C 2.541 0.656 2.548 0.656 2.556 0.656 C 2.563 0.656 2.57 0.656 2.577 0.656 C 2.585 0.656 2.592 0.656 2.599 0.656 C 2.607 0.656 2.614 0.656 2.621 0.656 C 2.628 0.656 2.636 0.656 2.643 0.656 C 2.65 0.656 2.657 0.656 2.665 0.656 C 2.672 0.656 2.679 0.656 2.687 0.656 C 2.694 0.656 2.701 0.656 2.709 0.656 C 2.716 0.656 2.723 0.656 2.73 0.656 C 2.738 0.656 2.745 0.656 2.752 0.656 C 2.76 0.656 2.767 0.656 2.774 0.656 C 2.782 0.656 2.789 0.656 2.796 0.656 C 2.803 0.656 2.811 0.656 2.818 0.656 C 2.825 0.656 2.833 0.656 2.84 0.656 C 2.847 0.656 2.855 0.656 2.862 0.656 C 2.869 0.656 2.877 0.656 2.884 0.656 C 2.891 0.656 2.899 0.656 2.906 0.656 C 2.913 0.656 2.921 0.656 2.928 0.656 C 2.935 0.656 2.943 0.656 2.95 0.656 C 2.957 0.656 2.965 0.656 2.972 0.656 C 2.98 0.656 2.987 0.656 2.994 0.656 C 3.002 0.656 3.009 0.656 3.016 0.656 C 3.024 0.656 3.031 0.656 3.038 0.656 C 3.046 0.656 3.053 0.656 3.06 0.656 C 3.068 0.656 3.075 0.656 3.083 0.656 C 3.09 0.656 3.097 0.656 3.105 0.656 C 3.112 0.656 3.119 0.656 3.127 0.656 C 3.134 0.656 3.142 0.656 3.149 0.656 C 3.156 0.656 3.164 0.656 3.171 0.656 C 3.179 0.656 3.186 0.656 3.193 0.656 C 3.201 0.656 3.208 0.656 3.216 0.656 C 3.223 0.656 3.23 0.656 3.238 0.656 C 3.245 0.656 3.253 0.656 3.26 0.656 C 3.267 0.656 3.275 0.656 3.282 0.656 C 3.29 0.656 3.297 0.656 3.304 0.656 C 3.312 0.656 3.319 0.656 3.327 0.656 C 3.334 0.656 3.342 0.656 3.349 0.656 C 3.356 0.656 3.364 0.656 3.371 0.656 C 3.379 0.656 3.386 0.656 3.394 0.656 C 3.401 0.656 3.408 0.656 3.416 0.656 C 3.423 0.656 3.431 0.656 3.438 0.656 C 3.446 0.656 3.453 0.656 3.46 0.656 C 3.468 0.656 3.475 0.656 3.483 0.656 C 3.49 0.656 3.498 0.656 3.505 0.656 C 3.513 0.656 3.52 0.656 3.528 0.656 C 3.535 0.656 3.542 0.656 3.55 0.656 C 3.557 0.656 3.565 0.656 3.572 0.656 C 3.58 0.656 3.587 0.656 3.595 0.656 C 3.602 0.656 3.61 0.656 3.617 0.656 C 3.625 0.656 3.632 0.656 3.639 0.656 C 3.647 0.656 3.654 0.656 3.662 0.656 C 3.669 0.656 3.677 0.656 3.684 0.656 C 3.692 0.656 3.699 0.656 3.707 0.656 C 3.714 0.656 3.722 0.656 3.729 0.656 C 3.737 0.656 3.744 0.656 3.752 0.656 C 3.759 0.656 3.767 0.656 3.774 0.656 C 3.782 0.656 3.789 0.656 3.797 0.656 C 3.804 0.656 3.812 0.656 3.819 0.656 C 3.827 0.656 3.834 0.656 3.842 0.656 C 3.849 0.656 3.857 0.656 3.864 0.656 C 3.872 0.656 3.879 0.656 3.887 0.656 C 3.894 0.656 3.902 0.656 3.909 0.656 C 3.917 0.656 3.924 0.656 3.932 0.656 C 3.939 0.656 3.947 0.656 3.954 0.656 C 3.962 0.656 3.969 0.656 3.977 0.656 C 3.984 0.656 3.992 0.656 3.999 0.656 C 4.007 0.656 4.014 0.656 4.022 0.656 C 4.029 0.656 4.037 0.656 4.044 0.656 C 4.052 0.656 4.059 0.656 4.067 0.656 C 4.075 0.656 4.082 0.656 4.09 0.656 C 4.097 0.656 4.105 0.656 4.112 0.656 C 4.12 0.656 4.127 0.656 4.135 0.656 C 4.142 0.656 4.15 0.656 4.157 0.656 C 4.165 0.656 4.172 0.656 4.18 0.656 C 4.188 0.656 4.195 0.656 4.203 0.656 C 4.21 0.656 4.218 0.656 4.225 0.656 C 4.233 0.656 4.24 0.656 4.248 0.656 C 4.255 0.656 4.263 0.656 4.271 0.656 C 4.278 0.656 4.286 0.656 4.293 0.656 C 4.301 0.656 4.308 0.656 4.316 0.656 C 4.323 0.656 4.331 0.656 4.339 0.656 C 4.346 0.656 4.354 0.656 4.361 0.656 C 4.369 0.656 4.376 0.656 4.384 0.656 C 4.391 0.656 4.399 0.656 4.407 0.656 C 4.414 0.656 4.422 0.656 4.429 0.656 C 4.437 0.656 4.444 0.656 4.452 0.656 C 4.46 0.656 4.467 0.656 4.475 0.656 C 4.482 0.656 4.49 0.656 4.497 0.656 C 4.505 0.656 4.512 0.656 4.52 0.656 C 4.528 0.656 4.535 0.656 4.543 0.656 C 4.55 0.656 4.558 0.656 4.566 0.656 C 4.573 0.656 4.581 0.656 4.588 0.656 C 4.596 0.656 4.603 0.656 4.611 0.656 C 4.619 0.656 4.626 0.656 4.634 0.656 C 4.641 0.656 4.649 0.656 4.656 0.656 C 4.664 0.656 4.672 0.656 4.679 0.656 C 4.687 0.656 4.694 0.656 4.702 0.656 C 4.71 0.656 4.717 0.656 4.725 0.656 C 4.732 0.656 4.74 0.656 4.747 0.656 C 4.755 0.656 4.763 0.656 4.77 0.656 C 4.778 0.656 4.785 0.656 4.793 0.656 C 4.801 0.656 4.808 0.656 4.816 0.656 C 4.823 0.656 4.831 0.656 4.839 0.656 C 4.846 0.656 4.854 0.656 4.861 0.656 C 4.869 0.656 4.876 0.656 4.884 0.656 C 4.892 0.656 4.899 0.656 4.907 0.656 C 4.914 0.656 4.922 0.656 4.93 0.656 C 4.937 0.656 4.945 0.656 4.952 0.656 C 4.96 0.656 4.968 0.656 4.975 0.656 C 4.983 0.656 4.99 0.656 4.998 0.656 C 5.006 0.656 5.013 0.656 5.021 0.656 C 5.028 0.656 5.036 0.656 5.044 0.656 C 5.051 0.656 5.059 0.656 5.066 0.656 C 5.074 0.656 5.082 0.656 5.089 0.656 C 5.097 0.656 5.104 0.656 5.112 0.656 C 5.12 0.656 5.127 0.656 5.135 0.656 C 5.142 0.656 5.15 0.656 5.158 0.656 C 5.165 0.656 5.173 0.656 5.18 0.656 C 5.188 0.656 5.196 0.656 5.203 0.656 C 5.211 0.656 5.219 0.656 5.226 0.656 C 5.234 0.656 5.241 0.656 5.249 0.656 C 5.257 0.656 5.264 0.656 5.272 0.656 C 5.279 0.656 5.287 0.656 5.295 0.656 C 5.302 0.656 5.31 0.656 5.317 0.656 C 5.325 0.656 5.333 0.656 5.34 0.656 C 5.348 0.656 5.355 0.656 5.363 0.656 C 5.371 0.656 5.378 0.656 5.386 0.656 C 5.393 0.656 5.401 0.656 5.409 0.656 C 5.416 0.656 5.424 0.656 5.432 0.656 C 5.439 0.656 5.447 0.656 5.454 0.656 C 5.462 0.656 5.47 0.656 5.477 0.656 C 5.485 0.656 5.492 0.656 5.5 0.656 C 5.508 0.656 5.515 0.656 5.523 0.656 C 5.53 0.656 5.538 0.656 5.546 0.656 C 5.553 0.656 5.561 0.656 5.568 0.656 C 5.576 0.656 5.584 0.656 5.591 0.656 C 5.599 0.656 5.607 0.656 5.614 0.656 C 5.622 0.656 5.629 0.656 5.637 0.656 C 5.645 0.656 5.652 0.656 5.66 0.656 C 5.667 0.656 5.675 0.656 5.683 0.656 C 5.69 0.656 5.698 0.656 5.705 0.656 C 5.713 0.656 5.721 0.656 5.728 0.656 C 5.736 0.656 5.743 0.656 5.751 0.656 C 5.759 0.656 5.766 0.656 5.774 0.656 C 5.781 0.656 5.789 0.656 5.797 0.656 C 5.804 0.656 5.812 0.656 5.82 0.656 C 5.827 0.656 5.835 0.656 5.842 0.656 C 5.85 0.656 5.858 0.656 5.865 0.656 C 5.873 0.656 5.88 0.656 5.888 0.656 C 5.896 0.656 5.903 0.656 5.911 0.656 C 5.918 0.656 5.926 0.656 5.934 0.656 C 5.941 0.656 5.949 0.656 5.956 0.656 C 5.964 0.656 5.972 0.656 5.979 0.656 C 5.987 0.656 5.994 0.656 6.002 0.656 C 6.01 0.656 6.017 0.656 6.025 0.656 C 6.032 0.656 6.04 0.656 6.048 0.656 C 6.055 0.656 6.063 0.656 6.07 0.656 C 6.078 0.656 6.086 0.656 6.093 0.656 C 6.101 0.656 6.108 0.656 6.116 0.656 C 6.124 0.656 6.131 0.656 6.139 0.656 C 6.146 0.656 6.154 0.656 6.161 0.656 C 6.169 0.656 6.177 0.656 6.184 0.656 C 6.192 0.656 6.199 0.656 6.207 0.656 C 6.215 0.656 6.222 0.656 6.23 0.656 C 6.237 0.656 6.245 0.656 6.253 0.656 C 6.26 0.656 6.268 0.656 6.275 0.656 C 6.283 0.656 6.29 0.656 6.298 0.656 C 6.306 0.656 6.313 0.656 6.321 0.656 C 6.328 0.656 6.336 0.656 6.344 0.656 C 6.351 0.656 6.359 0.656 6.366 0.656 C 6.374 0.656 6.381 0.656 6.389 0.656 C 6.397 0.656 6.404 0.656 6.412 0.656 C 6.419 0.656 6.427 0.656 6.434 0.656 C 6.442 0.656 6.45 0.656 6.457 0.656 C 6.465 0.656 6.472 0.656 6.48 0.656 C 6.488 0.656 6.495 0.656 6.503 0.656 C 6.51 0.656 6.518 0.656 6.525 0.656 C 6.533 0.656 6.54 0.656 6.548 0.656 C 6.556 0.656 6.563 0.656 6.571 0.656 C 6.578 0.656 6.586 0.656 6.593 0.656 C 6.601 0.656 6.609 0.656 6.616 0.656 C 6.624 0.656 6.631 0.656 6.639 0.656 C 6.646 0.656 6.654 0.656 6.661 0.656 C 6.669 0.656 6.677 0.656 6.684 0.656 C 6.692 0.656 6.699 0.656 6.707 0.656 C 6.714 0.656 6.722 0.656 6.729 0.656 C 6.737 0.656 6.745 0.656 6.752 0.656 C 6.76 0.656 6.767 0.656 6.775 0.656 C 6.782 0.656 6.79 0.656 6.797 0.656 C 6.805 0.656 6.812 0.656 6.82 0.656 C 6.828 0.656 6.835 0.656 6.843 0.656 C 6.85 0.656 6.858 0.656 6.865 0.656 C 6.873 0.656 6.88 0.656 6.888 0.656 C 6.895 0.656 6.903 0.656 6.91 0.656 C 6.918 0.656 6.925 0.656 6.933 0.656 C 6.941 0.656 6.948 0.656 6.956 0.656 C 6.963 0.656 6.971 0.656 6.978 0.656 C 6.986 0.656 6.993 0.656 7.001 0.656 C 7.008 0.656 7.016 0.656 7.023 0.656 C 7.031 0.656 7.038 0.656 7.046 0.656 C 7.053 0.656 7.061 0.656 7.068 0.656 C 7.076 0.656 7.083 0.656 7.091 0.656 C 7.098 0.656 7.106 0.656 7.113 0.656 C 7.121 0.656 7.128 0.656 7.136 0.656 C 7.143 0.656 7.151 0.656 7.158 0.656 C 7.166 0.656 7.173 0.656 7.181 0.656 C 7.188 0.656 7.196 0.656 7.203 0.656 C 7.211 0.656 7.218 0.656 7.226 0.656 C 7.233 0.656 7.241 0.656 7.248 0.656 C 7.256 0.656 7.263 0.656 7.271 0.656 C 7.278 0.656 7.286 0.656 7.293 0.656 C 7.301 0.656 7.308 0.656 7.316 0.656 C 7.323 0.656 7.331 0.656 7.338 0.656 C 7.346 0.656 7.353 0.656 7.361 0.656 C 7.368 0.656 7.375 0.656 7.383 0.656 C 7.39 0.656 7.398 0.656 7.405 0.656 C 7.413 0.656 7.42 0.656 7.428 0.656 C 7.435 0.656 7.443 0.656 7.45 0.656 C 7.458 0.656 7.465 0.656 7.472 0.656 C 7.48 0.656 7.487 0.656 7.495 0.656 C 7.502 0.656 7.51 0.656 7.517 0.656 C 7.525 0.656 7.532 0.656 7.54 0.656 C 7.547 0.656 7.554 0.656 7.562 0.656 C 7.569 0.656 7.577 0.656 7.584 0.656 C 7.592 0.656 7.599 0.656 7.606 0.656 C 7.614 0.656 7.621 0.656 7.629 0.656 C 7.636 0.656 7.644 0.656 7.651 0.656 C 7.658 0.656 7.666 0.656 7.673 0.656 C 7.681 0.656 7.688 0.656 7.696 0.656 C 7.703 0.656 7.71 0.656 7.718 0.656 C 7.725 0.656 7.733 0.656 7.74 0.656 C 7.747 0.656 7.755 0.656 7.762 0.656 C 7.77 0.656 7.777 0.656 7.784 0.656 C 7.792 0.656 7.799 0.656 7.807 0.656 C 7.814 0.656 7.821 0.656 7.829 0.656 C 7.836 0.656 7.844 0.656 7.851 0.656 C 7.858 0.656 7.866 0.656 7.873 0.656 C 7.881 0.656 7.888 0.656 7.895 0.656 C 7.903 0.656 7.91 0.656 7.917 0.656 C 7.925 0.656 7.932 0.656 7.94 0.656 C 7.947 0.656 7.954 0.656 7.962 0.656 C 7.969 0.656 7.976 0.656 7.984 0.656 C 7.991 0.656 7.998 0.656 8.006 0.656 C 8.013 0.656 8.02 0.656 8.028 0.656 C 8.035 0.656 8.043 0.656 8.05 0.656 C 8.057 0.656 8.065 0.656 8.072 0.656 C 8.079 0.656 8.087 0.656 8.094 0.656 C 8.101 0.656 8.109 0.656 8.116 0.656 C 8.123 0.656 8.131 0.656 8.138 0.656 C 8.145 0.656 8.153 0.656 8.16 0.656 C 8.167 0.656 8.175 0.656 8.182 0.656 C 8.189 0.656 8.197 0.656 8.204 0.656 C 8.211 0.656 8.218 0.656 8.226 0.656 C 8.233 0.656 8.24 0.656 8.248 0.656 C 8.255 0.656 8.262 0.656 8.27 0.656 C 8.277 0.656 8.284 0.656 8.291 0.656 C 8.299 0.656 8.306 0.656 8.313 0.656 C 8.321 0.656 8.328 0.656 8.335 0.656 C 8.343 0.656 8.35 0.656 8.357 0.656 C 8.364 0.656 8.372 0.656 8.379 0.656 C 8.386 0.656 8.393 0.656 8.401 0.656 C 8.408 0.656 8.415 0.656 8.423 0.656 C 8.43 0.656 8.437 0.656 8.444 0.656 C 8.452 0.656 8.459 0.656 8.466 0.656 C 8.473 0.656 8.481 0.656 8.488 0.656 C 8.495 0.656 8.502 0.656 8.51 0.656 C 8.517 0.656 8.524 0.656 8.531 0.656 C 8.538 0.656 8.546 0.656 8.553 0.656 C 8.56 0.656 8.567 0.656 8.575 0.656 C 8.582 0.656 8.589 0.656 8.596 0.656 C 8.604 0.656 8.611 0.656 8.618 0.656 C 8.625 0.656 8.632 0.656 8.64 0.656 C 8.647 0.656 8.654 0.656 8.661 0.656 C 8.668 0.656 8.676 0.656 8.683 0.656 C 8.69 0.656 8.697 0.656 8.704 0.656 C 8.712 0.656 8.719 0.656 8.726 0.656 C 8.733 0.656 8.74 0.656 8.747 0.656 C 8.755 0.656 8.762 0.656 8.769 0.656 C 8.776 0.656 8.783 0.656 8.79 0.656 C 8.798 0.656 8.805 0.656 8.812 0.656 C 8.819 0.656 8.826 0.656 8.833 0.656 C 8.841 0.656 8.848 0.656 8.855 0.656 C 8.862 0.656 8.869 0.656 8.876 0.656 C 8.883 0.656 8.891 0.656 8.898 0.656 C 8.905 0.656 8.912 0.656 8.919 0.656 C 8.926 0.656 8.933 0.656 8.941 0.656 C 8.948 0.656 8.955 0.656 8.962 0.656 C 8.969 0.656 8.976 0.656 8.983 0.656 C 8.99 0.656 8.997 0.656 9.005 0.656 C 9.012 0.656 9.019 0.656 9.026 0.656 C 9.033 0.656 9.04 0.656 9.047 0.656 C 9.054 0.656 9.061 0.656 9.068 0.656 C 9.075 0.656 9.083 0.656 9.09 0.656 C 9.097 0.656 9.104 0.656 9.111 0.656 C 9.118 0.656 9.125 0.656 9.132 0.656 C 9.139 0.656 9.146 0.656 9.153 0.656 C 9.16 0.656 9.167 0.656 9.174 0.656 C 9.181 0.656 9.189 0.656 9.196 0.656 C 9.203 0.656 9.21 0.656 9.217 0.656 C 9.224 0.656 9.231 0.656 9.238 0.656 C 9.245 0.656 9.252 0.656 9.259 0.656 C 9.266 0.656 9.273 0.656 9.28 0.656 C 9.287 0.656 9.294 0.656 9.301 0.656 C 9.308 0.656 9.315 0.656 9.322 0.656 C 9.329 0.656 9.336 0.656 9.343 0.656 C 9.35 0.656 9.357 0.656 9.364 0.656 C 9.371 0.656 9.378 0.656 9.385 0.656 C 9.392 0.656 9.399 0.656 9.406 0.656 C 9.413 0.656 9.42 0.656 9.427 0.656 C 9.434 0.656 9.441 0.656 9.448 0.656 C 9.455 0.656 9.462 0.656 9.469 0.656 C 9.475 0.656 9.482 0.656 9.489 0.656 C 9.496 0.656 9.503 0.656 9.51 0.656 C 9.517 0.656 9.524 0.656 9.531 0.656 C 9.538 0.656 9.545 0.656 9.552 0.656 C 9.559 0.656 9.566 0.656 9.573 0.656 C 9.579 0.656 9.586 0.656 9.593 0.656 C 9.6 0.656 9.607 0.656 9.614 0.656 C 9.621 0.656 9.628 0.656 9.635 0.656 C 9.642 0.656 9.648 0.656 9.655 0.656 C 9.662 0.656 9.669 0.656 9.676 0.656 C 9.683 0.656 9.69 0.656 9.697 0.656 C 9.703 0.656 9.71 0.656 9.717 0.656 C 9.724 0.656 9.731 0.656 9.738 0.656 C 9.745 0.656 9.751 0.656 9.758 0.656 C 9.765 0.656 9.772 0.656 9.779 0.656 C 9.786 0.656 9.793 0.656 9.799 0.656 C 9.806 0.656 9.813 0.656 9.82 0.656 C 9.827 0.656 9.833 0.656 9.84 0.656 C 9.847 0.656 9.854 0.656 9.861 0.656 C 9.868 0.656 9.874 0.656 9.881 0.656 C 9.888 0.656 9.895 0.656 9.902 0.656 C 9.908 0.656 9.915 0.656 9.922 0.656 C 9.929 0.656 9.935 0.656 9.942 0.656 C 9.949 0.656 9.956 0.656 9.963 0.656 C 9.969 0.656 9.976 0.656 9.983 0.656 C 9.99 0.656 9.996 0.656 10.003 0.656 C 10.01 0.656 10.017 0.656 10.023 0.656 C 10.03 0.656 10.037 0.656 10.043 0.656 C 10.05 0.656 10.057 0.656 10.064 0.656 C 10.07 0.656 10.077 0.656 10.084 0.656 C 10.091 0.656 10.097 0.656 10.104 0.656 C 10.111 0.656 10.117 0.656 10.124 0.656 C 10.131 0.656 10.137 0.656 10.144 0.656 C 10.151 0.656 10.158 0.656 10.164 0.656 C 10.171 0.656 10.178 0.656 10.184 0.656 C 10.191 0.656 10.198 0.656 10.204 0.656 C 10.211 0.656 10.218 0.656 10.224 0.656 C 10.231 0.656 10.237 0.656 10.244 0.656 C 10.251 0.656 10.257 0.656 10.264 0.656 C 10.271 0.656 10.277 0.656 10.284 0.656 C 10.291 0.656 10.297 0.656 10.304 0.656 C 10.31 0.656 10.317 0.656 10.324 0.656 C 10.33 0.656 10.337 0.656 10.343 0.656 C 10.35 0.656 10.357 0.656 10.363 0.656 C 10.37 0.656 10.376 0.656 10.383 0.656 C 10.39 0.656 10.396 0.656 10.403 0.656 C 10.409 0.656 10.416 0.656 10.422 0.656 C 10.429 0.656 10.436 0.656 10.442 0.656 C 10.449 0.656 10.455 0.656 10.462 0.656 C 10.468 0.656 10.475 0.656 10.481 0.656 C 10.488 0.656 10.494 0.656 10.501 0.656 C 10.507 0.656 10.514 0.656 10.521 0.656 C 10.527 0.656 10.534 0.656 10.54 0.656 C 10.547 0.656 10.553 0.656 10.56 0.656 C 10.566 0.656 10.573 0.656 10.579 0.656 C 10.586 0.656 10.592 0.656 10.598 0.656 C 10.605 0.656 10.611 0.656 10.618 0.656 C 10.624 0.656 10.631 0.656 10.637 0.656 C 10.644 0.656 10.65 0.656 10.657 0.656 C 10.663 0.656 10.67 0.656 10.676 0.656 C 10.682 0.656 10.689 0.656 10.695 0.656 C 10.702 0.656 10.708 0.656 10.715 0.656 C 10.721 0.656 10.727 0.656 10.734 0.656 C 10.74 0.656 10.747 0.656 10.753 0.656 C 10.759 0.656 10.766 0.656 10.772 0.656 C 10.779 0.656 10.785 0.656 10.791 0.656 C 10.798 0.656 10.804 0.656 10.81 0.656 C 10.817 0.656 10.823 0.656 10.83 0.656 C 10.836 0.656 10.842 0.656 10.849 0.656 C 10.855 0.656 10.861 0.656 10.868 0.656 C 10.874 0.656 10.88 0.656 10.887 0.656 C 10.893 0.656 10.899 0.656 10.906 0.656 C 10.912 0.656 10.918 0.656 10.925 0.656 C 10.931 0.656 10.937 0.656 10.943 0.656 C 10.95 0.656 10.956 0.656 10.962 0.656 C 10.969 0.656 10.975 0.656 10.981 0.656 C 10.987 0.656 10.994 0.656 11 0.656 L 11 0 L 11 -0.656 C 10.994 -0.656 10.987 -0.656 10.981 -0.656 C 10.975 -0.656 10.969 -0.656 10.962 -0.656 C 10.956 -0.656 10.95 -0.656 10.943 -0.656 C 10.937 -0.656 10.931 -0.656 10.925 -0.656 C 10.918 -0.656 10.912 -0.656 10.906 -0.656 C 10.899 -0.656 10.893 -0.656 10.887 -0.656 C 10.88 -0.656 10.874 -0.656 10.868 -0.656 C 10.861 -0.656 10.855 -0.656 10.849 -0.656 C 10.842 -0.656 10.836 -0.656 10.83 -0.656 C 10.823 -0.656 10.817 -0.656 10.81 -0.656 C 10.804 -0.656 10.798 -0.656 10.791 -0.656 C 10.785 -0.656 10.779 -0.656 10.772 -0.656 C 10.766 -0.656 10.759 -0.656 10.753 -0.656 C 10.747 -0.656 10.74 -0.656 10.734 -0.656 C 10.727 -0.656 10.721 -0.656 10.715 -0.656 C 10.708 -0.656 10.702 -0.656 10.695 -0.656 C 10.689 -0.656 10.682 -0.656 10.676 -0.656 C 10.67 -0.656 10.663 -0.656 10.657 -0.656 C 10.65 -0.656 10.644 -0.656 10.637 -0.656 C 10.631 -0.656 10.624 -0.656 10.618 -0.656 C 10.611 -0.656 10.605 -0.656 10.598 -0.656 C 10.592 -0.656 10.586 -0.656 10.579 -0.656 C 10.573 -0.656 10.566 -0.656 10.56 -0.656 C 10.553 -0.656 10.547 -0.656 10.54 -0.656 C 10.534 -0.656 10.527 -0.656 10.521 -0.656 C 10.514 -0.656 10.507 -0.656 10.501 -0.656 C 10.494 -0.656 10.488 -0.656 10.481 -0.656 C 10.475 -0.656 10.468 -0.656 10.462 -0.656 C 10.455 -0.656 10.449 -0.656 10.442 -0.656 C 10.436 -0.656 10.429 -0.656 10.422 -0.656 C 10.416 -0.656 10.409 -0.656 10.403 -0.656 C 10.396 -0.656 10.39 -0.656 10.383 -0.656 C 10.376 -0.656 10.37 -0.656 10.363 -0.656 C 10.357 -0.656 10.35 -0.656 10.343 -0.656 C 10.337 -0.656 10.33 -0.656 10.324 -0.656 C 10.317 -0.656 10.31 -0.656 10.304 -0.656 C 10.297 -0.656 10.291 -0.656 10.284 -0.656 C 10.277 -0.656 10.271 -0.656 10.264 -0.656 C 10.257 -0.656 10.251 -0.656 10.244 -0.656 C 10.237 -0.656 10.231 -0.656 10.224 -0.656 C 10.218 -0.656 10.211 -0.656 10.204 -0.656 C 10.198 -0.656 10.191 -0.656 10.184 -0.656 C 10.178 -0.656 10.171 -0.656 10.164 -0.656 C 10.158 -0.656 10.151 -0.656 10.144 -0.656 C 10.137 -0.656 10.131 -0.656 10.124 -0.656 C 10.117 -0.656 10.111 -0.656 10.104 -0.656 C 10.097 -0.656 10.091 -0.656 10.084 -0.656 C 10.077 -0.656 10.07 -0.656 10.064 -0.656 C 10.057 -0.656 10.05 -0.656 10.043 -0.656 C 10.037 -0.656 10.03 -0.656 10.023 -0.656 C 10.017 -0.656 10.01 -0.656 10.003 -0.656 C 9.996 -0.656 9.99 -0.656 9.983 -0.656 C 9.976 -0.656 9.969 -0.656 9.963 -0.656 C 9.956 -0.656 9.949 -0.656 9.942 -0.656 C 9.935 -0.656 9.929 -0.656 9.922 -0.656 C 9.915 -0.656 9.908 -0.656 9.902 -0.656 C 9.895 -0.656 9.888 -0.656 9.881 -0.656 C 9.874 -0.656 9.868 -0.656 9.861 -0.656 C 9.854 -0.656 9.847 -0.656 9.84 -0.656 C 9.833 -0.656 9.827 -0.656 9.82 -0.656 C 9.813 -0.656 9.806 -0.656 9.799 -0.656 C 9.793 -0.656 9.786 -0.656 9.779 -0.656 C 9.772 -0.656 9.765 -0.656 9.758 -0.656 C 9.751 -0.656 9.745 -0.656 9.738 -0.656 C 9.731 -0.656 9.724 -0.656 9.717 -0.656 C 9.71 -0.656 9.703 -0.656 9.697 -0.656 C 9.69 -0.656 9.683 -0.656 9.676 -0.656 C 9.669 -0.656 9.662 -0.656 9.655 -0.656 C 9.648 -0.656 9.642 -0.656 9.635 -0.656 C 9.628 -0.656 9.621 -0.656 9.614 -0.656 C 9.607 -0.656 9.6 -0.656 9.593 -0.656 C 9.586 -0.656 9.579 -0.656 9.573 -0.656 C 9.566 -0.656 9.559 -0.656 9.552 -0.656 C 9.545 -0.656 9.538 -0.656 9.531 -0.656 C 9.524 -0.656 9.517 -0.656 9.51 -0.656 C 9.503 -0.656 9.496 -0.656 9.489 -0.656 C 9.482 -0.656 9.475 -0.656 9.469 -0.656 C 9.462 -0.656 9.455 -0.656 9.448 -0.656 C 9.441 -0.656 9.434 -0.656 9.427 -0.656 C 9.42 -0.656 9.413 -0.656 9.406 -0.656 C 9.399 -0.656 9.392 -0.656 9.385 -0.656 C 9.378 -0.656 9.371 -0.656 9.364 -0.656 C 9.357 -0.656 9.35 -0.656 9.343 -0.656 C 9.336 -0.656 9.329 -0.656 9.322 -0.656 C 9.315 -0.656 9.308 -0.656 9.301 -0.656 C 9.294 -0.656 9.287 -0.656 9.28 -0.656 C 9.273 -0.656 9.266 -0.656 9.259 -0.656 C 9.252 -0.656 9.245 -0.656 9.238 -0.656 C 9.231 -0.656 9.224 -0.656 9.217 -0.656 C 9.21 -0.656 9.203 -0.656 9.196 -0.656 C 9.189 -0.656 9.181 -0.656 9.174 -0.656 C 9.167 -0.656 9.16 -0.656 9.153 -0.656 C 9.146 -0.656 9.139 -0.656 9.132 -0.656 C 9.125 -0.656 9.118 -0.656 9.111 -0.656 C 9.104 -0.656 9.097 -0.656 9.09 -0.656 C 9.083 -0.656 9.075 -0.656 9.068 -0.656 C 9.061 -0.656 9.054 -0.656 9.047 -0.656 C 9.04 -0.656 9.033 -0.656 9.026 -0.656 C 9.019 -0.656 9.012 -0.656 9.005 -0.656 C 8.997 -0.656 8.99 -0.656 8.983 -0.656 C 8.976 -0.656 8.969 -0.656 8.962 -0.656 C 8.955 -0.656 8.948 -0.656 8.941 -0.656 C 8.933 -0.656 8.926 -0.656 8.919 -0.656 C 8.912 -0.656 8.905 -0.656 8.898 -0.656 C 8.891 -0.656 8.883 -0.656 8.876 -0.656 C 8.869 -0.656 8.862 -0.656 8.855 -0.656 C 8.848 -0.656 8.841 -0.656 8.833 -0.656 C 8.826 -0.656 8.819 -0.656 8.812 -0.656 C 8.805 -0.656 8.798 -0.656 8.79 -0.656 C 8.783 -0.656 8.776 -0.656 8.769 -0.656 C 8.762 -0.656 8.755 -0.656 8.747 -0.656 C 8.74 -0.656 8.733 -0.656 8.726 -0.656 C 8.719 -0.656 8.712 -0.656 8.704 -0.656 C 8.697 -0.656 8.69 -0.656 8.683 -0.656 C 8.676 -0.656 8.668 -0.656 8.661 -0.656 C 8.654 -0.656 8.647 -0.656 8.64 -0.656 C 8.632 -0.656 8.625 -0.656 8.618 -0.656 C 8.611 -0.656 8.604 -0.656 8.596 -0.656 C 8.589 -0.656 8.582 -0.656 8.575 -0.656 C 8.567 -0.656 8.56 -0.656 8.553 -0.656 C 8.546 -0.656 8.538 -0.656 8.531 -0.656 C 8.524 -0.656 8.517 -0.656 8.51 -0.656 C 8.502 -0.656 8.495 -0.656 8.488 -0.656 C 8.481 -0.656 8.473 -0.656 8.466 -0.656 C 8.459 -0.656 8.452 -0.656 8.444 -0.656 C 8.437 -0.656 8.43 -0.656 8.423 -0.656 C 8.415 -0.656 8.408 -0.656 8.401 -0.656 C 8.393 -0.656 8.386 -0.656 8.379 -0.656 C 8.372 -0.656 8.364 -0.656 8.357 -0.656 C 8.35 -0.656 8.343 -0.656 8.335 -0.656 C 8.328 -0.656 8.321 -0.656 8.313 -0.656 C 8.306 -0.656 8.299 -0.656 8.291 -0.656 C 8.284 -0.656 8.277 -0.656 8.27 -0.656 C 8.262 -0.656 8.255 -0.656 8.248 -0.656 C 8.24 -0.656 8.233 -0.656 8.226 -0.656 C 8.218 -0.656 8.211 -0.656 8.204 -0.656 C 8.197 -0.656 8.189 -0.656 8.182 -0.656 C 8.175 -0.656 8.167 -0.656 8.16 -0.656 C 8.153 -0.656 8.145 -0.656 8.138 -0.656 C 8.131 -0.656 8.123 -0.656 8.116 -0.656 C 8.109 -0.656 8.101 -0.656 8.094 -0.656 C 8.087 -0.656 8.079 -0.656 8.072 -0.656 C 8.065 -0.656 8.057 -0.656 8.05 -0.656 C 8.043 -0.656 8.035 -0.656 8.028 -0.656 C 8.02 -0.656 8.013 -0.656 8.006 -0.656 C 7.998 -0.656 7.991 -0.656 7.984 -0.656 C 7.976 -0.656 7.969 -0.656 7.962 -0.656 C 7.954 -0.656 7.947 -0.656 7.94 -0.656 C 7.932 -0.656 7.925 -0.656 7.917 -0.656 C 7.91 -0.656 7.903 -0.656 7.895 -0.656 C 7.888 -0.656 7.881 -0.656 7.873 -0.656 C 7.866 -0.656 7.858 -0.656 7.851 -0.656 C 7.844 -0.656 7.836 -0.656 7.829 -0.656 C 7.821 -0.656 7.814 -0.656 7.807 -0.656 C 7.799 -0.656 7.792 -0.656 7.784 -0.656 C 7.777 -0.656 7.77 -0.656 7.762 -0.656 C 7.755 -0.656 7.747 -0.656 7.74 -0.656 C 7.733 -0.656 7.725 -0.656 7.718 -0.656 C 7.71 -0.656 7.703 -0.656 7.696 -0.656 C 7.688 -0.656 7.681 -0.656 7.673 -0.656 C 7.666 -0.656 7.658 -0.656 7.651 -0.656 C 7.644 -0.656 7.636 -0.656 7.629 -0.656 C 7.621 -0.656 7.614 -0.656 7.606 -0.656 C 7.599 -0.656 7.592 -0.656 7.584 -0.656 C 7.577 -0.656 7.569 -0.656 7.562 -0.656 C 7.554 -0.656 7.547 -0.656 7.54 -0.656 C 7.532 -0.656 7.525 -0.656 7.517 -0.656 C 7.51 -0.656 7.502 -0.656 7.495 -0.656 C 7.487 -0.656 7.48 -0.656 7.472 -0.656 C 7.465 -0.656 7.458 -0.656 7.45 -0.656 C 7.443 -0.656 7.435 -0.656 7.428 -0.656 C 7.42 -0.656 7.413 -0.656 7.405 -0.656 C 7.398 -0.656 7.39 -0.656 7.383 -0.656 C 7.375 -0.656 7.368 -0.656 7.361 -0.656 C 7.353 -0.656 7.346 -0.656 7.338 -0.656 C 7.331 -0.656 7.323 -0.656 7.316 -0.656 C 7.308 -0.656 7.301 -0.656 7.293 -0.656 C 7.286 -0.656 7.278 -0.656 7.271 -0.656 C 7.263 -0.656 7.256 -0.656 7.248 -0.656 C 7.241 -0.656 7.233 -0.656 7.226 -0.656 C 7.218 -0.656 7.211 -0.656 7.203 -0.656 C 7.196 -0.656 7.188 -0.656 7.181 -0.656 C 7.173 -0.656 7.166 -0.656 7.158 -0.656 C 7.151 -0.656 7.143 -0.656 7.136 -0.656 C 7.128 -0.656 7.121 -0.656 7.113 -0.656 C 7.106 -0.656 7.098 -0.656 7.091 -0.656 C 7.083 -0.656 7.076 -0.656 7.068 -0.656 C 7.061 -0.656 7.053 -0.656 7.046 -0.656 C 7.038 -0.656 7.031 -0.656 7.023 -0.656 C 7.016 -0.656 7.008 -0.656 7.001 -0.656 C 6.993 -0.656 6.986 -0.656 6.978 -0.656 C 6.971 -0.656 6.963 -0.656 6.956 -0.656 C 6.948 -0.656 6.941 -0.656 6.933 -0.656 C 6.925 -0.656 6.918 -0.656 6.91 -0.656 C 6.903 -0.656 6.895 -0.656 6.888 -0.656 C 6.88 -0.656 6.873 -0.656 6.865 -0.656 C 6.858 -0.656 6.85 -0.656 6.843 -0.656 C 6.835 -0.656 6.828 -0.656 6.82 -0.656 C 6.812 -0.656 6.805 -0.656 6.797 -0.656 C 6.79 -0.656 6.782 -0.656 6.775 -0.656 C 6.767 -0.656 6.76 -0.656 6.752 -0.656 C 6.745 -0.656 6.737 -0.656 6.729 -0.656 C 6.722 -0.656 6.714 -0.656 6.707 -0.656 C 6.699 -0.656 6.692 -0.656 6.684 -0.656 C 6.677 -0.656 6.669 -0.656 6.661 -0.656 C 6.654 -0.656 6.646 -0.656 6.639 -0.656 C 6.631 -0.656 6.624 -0.656 6.616 -0.656 C 6.609 -0.656 6.601 -0.656 6.593 -0.656 C 6.586 -0.656 6.578 -0.656 6.571 -0.656 C 6.563 -0.656 6.556 -0.656 6.548 -0.656 C 6.54 -0.656 6.533 -0.656 6.525 -0.656 C 6.518 -0.656 6.51 -0.656 6.503 -0.656 C 6.495 -0.656 6.488 -0.656 6.48 -0.656 C 6.472 -0.656 6.465 -0.656 6.457 -0.656 C 6.45 -0.656 6.442 -0.656 6.434 -0.656 C 6.427 -0.656 6.419 -0.656 6.412 -0.656 C 6.404 -0.656 6.397 -0.656 6.389 -0.656 C 6.381 -0.656 6.374 -0.656 6.366 -0.656 C 6.359 -0.656 6.351 -0.656 6.344 -0.656 C 6.336 -0.656 6.328 -0.656 6.321 -0.656 C 6.313 -0.656 6.306 -0.656 6.298 -0.656 C 6.29 -0.656 6.283 -0.656 6.275 -0.656 C 6.268 -0.656 6.26 -0.656 6.253 -0.656 C 6.245 -0.656 6.237 -0.656 6.23 -0.656 C 6.222 -0.656 6.215 -0.656 6.207 -0.656 C 6.199 -0.656 6.192 -0.656 6.184 -0.656 C 6.177 -0.656 6.169 -0.656 6.161 -0.656 C 6.154 -0.656 6.146 -0.656 6.139 -0.656 C 6.131 -0.656 6.124 -0.656 6.116 -0.656 C 6.108 -0.656 6.101 -0.656 6.093 -0.656 C 6.086 -0.656 6.078 -0.656 6.07 -0.656 C 6.063 -0.656 6.055 -0.656 6.048 -0.656 C 6.04 -0.656 6.032 -0.656 6.025 -0.656 C 6.017 -0.656 6.01 -0.656 6.002 -0.656 C 5.994 -0.656 5.987 -0.656 5.979 -0.656 C 5.972 -0.656 5.964 -0.656 5.956 -0.656 C 5.949 -0.656 5.941 -0.656 5.934 -0.656 C 5.926 -0.656 5.918 -0.656 5.911 -0.656 C 5.903 -0.656 5.896 -0.656 5.888 -0.656 C 5.88 -0.656 5.873 -0.656 5.865 -0.656 C 5.858 -0.656 5.85 -0.656 5.842 -0.656 C 5.835 -0.656 5.827 -0.656 5.82 -0.656 C 5.812 -0.656 5.804 -0.656 5.797 -0.656 C 5.789 -0.656 5.781 -0.656 5.774 -0.656 C 5.766 -0.656 5.759 -0.656 5.751 -0.656 C 5.743 -0.656 5.736 -0.656 5.728 -0.656 C 5.721 -0.656 5.713 -0.656 5.705 -0.656 C 5.698 -0.656 5.69 -0.656 5.683 -0.656 C 5.675 -0.656 5.667 -0.656 5.66 -0.656 C 5.652 -0.656 5.645 -0.656 5.637 -0.656 C 5.629 -0.656 5.622 -0.656 5.614 -0.656 C 5.607 -0.656 5.599 -0.656 5.591 -0.656 C 5.584 -0.656 5.576 -0.656 5.568 -0.656 C 5.561 -0.656 5.553 -0.656 5.546 -0.656 C 5.538 -0.656 5.53 -0.656 5.523 -0.656 C 5.515 -0.656 5.508 -0.656 5.5 -0.656 C 5.492 -0.656 5.485 -0.656 5.477 -0.656 C 5.47 -0.656 5.462 -0.656 5.454 -0.656 C 5.447 -0.656 5.439 -0.656 5.432 -0.656 C 5.424 -0.656 5.416 -0.656 5.409 -0.656 C 5.401 -0.656 5.393 -0.656 5.386 -0.656 C 5.378 -0.656 5.371 -0.656 5.363 -0.656 C 5.355 -0.656 5.348 -0.656 5.34 -0.656 C 5.333 -0.656 5.325 -0.656 5.317 -0.656 C 5.31 -0.656 5.302 -0.656 5.295 -0.656 C 5.287 -0.656 5.279 -0.656 5.272 -0.656 C 5.264 -0.656 5.257 -0.656 5.249 -0.656 C 5.241 -0.656 5.234 -0.656 5.226 -0.656 C 5.219 -0.656 5.211 -0.656 5.203 -0.656 C 5.196 -0.656 5.188 -0.656 5.18 -0.656 C 5.173 -0.656 5.165 -0.656 5.158 -0.656 C 5.15 -0.656 5.142 -0.656 5.135 -0.656 C 5.127 -0.656 5.12 -0.656 5.112 -0.656 C 5.104 -0.656 5.097 -0.656 5.089 -0.656 C 5.082 -0.656 5.074 -0.656 5.066 -0.656 C 5.059 -0.656 5.051 -0.656 5.044 -0.656 C 5.036 -0.656 5.028 -0.656 5.021 -0.656 C 5.013 -0.656 5.006 -0.656 4.998 -0.656 C 4.99 -0.656 4.983 -0.656 4.975 -0.656 C 4.968 -0.656 4.96 -0.656 4.952 -0.656 C 4.945 -0.656 4.937 -0.656 4.93 -0.656 C 4.922 -0.656 4.914 -0.656 4.907 -0.656 C 4.899 -0.656 4.892 -0.656 4.884 -0.656 C 4.876 -0.656 4.869 -0.656 4.861 -0.656 C 4.854 -0.656 4.846 -0.656 4.839 -0.656 C 4.831 -0.656 4.823 -0.656 4.816 -0.656 C 4.808 -0.656 4.801 -0.656 4.793 -0.656 C 4.785 -0.656 4.778 -0.656 4.77 -0.656 C 4.763 -0.656 4.755 -0.656 4.747 -0.656 C 4.74 -0.656 4.732 -0.656 4.725 -0.656 C 4.717 -0.656 4.71 -0.656 4.702 -0.656 C 4.694 -0.656 4.687 -0.656 4.679 -0.656 C 4.672 -0.656 4.664 -0.656 4.656 -0.656 C 4.649 -0.656 4.641 -0.656 4.634 -0.656 C 4.626 -0.656 4.619 -0.656 4.611 -0.656 C 4.603 -0.656 4.596 -0.656 4.588 -0.656 C 4.581 -0.656 4.573 -0.656 4.566 -0.656 C 4.558 -0.656 4.55 -0.656 4.543 -0.656 C 4.535 -0.656 4.528 -0.656 4.52 -0.656 C 4.512 -0.656 4.505 -0.656 4.497 -0.656 C 4.49 -0.656 4.482 -0.656 4.475 -0.656 C 4.467 -0.656 4.46 -0.656 4.452 -0.656 C 4.444 -0.656 4.437 -0.656 4.429 -0.656 C 4.422 -0.656 4.414 -0.656 4.407 -0.656 C 4.399 -0.656 4.391 -0.656 4.384 -0.656 C 4.376 -0.656 4.369 -0.656 4.361 -0.656 C 4.354 -0.656 4.346 -0.656 4.339 -0.656 C 4.331 -0.656 4.323 -0.656 4.316 -0.656 C 4.308 -0.656 4.301 -0.656 4.293 -0.656 C 4.286 -0.656 4.278 -0.656 4.271 -0.656 C 4.263 -0.656 4.255 -0.656 4.248 -0.656 C 4.24 -0.656 4.233 -0.656 4.225 -0.656 C 4.218 -0.656 4.21 -0.656 4.203 -0.656 C 4.195 -0.656 4.188 -0.656 4.18 -0.656 C 4.172 -0.656 4.165 -0.656 4.157 -0.656 C 4.15 -0.656 4.142 -0.656 4.135 -0.656 C 4.127 -0.656 4.12 -0.656 4.112 -0.656 C 4.105 -0.656 4.097 -0.656 4.09 -0.656 C 4.082 -0.656 4.075 -0.656 4.067 -0.656 C 4.059 -0.656 4.052 -0.656 4.044 -0.656 C 4.037 -0.656 4.029 -0.656 4.022 -0.656 C 4.014 -0.656 4.007 -0.656 3.999 -0.656 C 3.992 -0.656 3.984 -0.656 3.977 -0.656 C 3.969 -0.656 3.962 -0.656 3.954 -0.656 C 3.947 -0.656 3.939 -0.656 3.932 -0.656 C 3.924 -0.656 3.917 -0.656 3.909 -0.656 C 3.902 -0.656 3.894 -0.656 3.887 -0.656 C 3.879 -0.656 3.872 -0.656 3.864 -0.656 C 3.857 -0.656 3.849 -0.656 3.842 -0.656 C 3.834 -0.656 3.827 -0.656 3.819 -0.656 C 3.812 -0.656 3.804 -0.656 3.797 -0.656 C 3.789 -0.656 3.782 -0.656 3.774 -0.656 C 3.767 -0.656 3.759 -0.656 3.752 -0.656 C 3.744 -0.656 3.737 -0.656 3.729 -0.656 C 3.722 -0.656 3.714 -0.656 3.707 -0.656 C 3.699 -0.656 3.692 -0.656 3.684 -0.656 C 3.677 -0.656 3.669 -0.656 3.662 -0.656 C 3.654 -0.656 3.647 -0.656 3.639 -0.656 C 3.632 -0.656 3.625 -0.656 3.617 -0.656 C 3.61 -0.656 3.602 -0.656 3.595 -0.656 C 3.587 -0.656 3.58 -0.656 3.572 -0.656 C 3.565 -0.656 3.557 -0.656 3.55 -0.656 C 3.542 -0.656 3.535 -0.656 3.528 -0.656 C 3.52 -0.656 3.513 -0.656 3.505 -0.656 C 3.498 -0.656 3.49 -0.656 3.483 -0.656 C 3.475 -0.656 3.468 -0.656 3.46 -0.656 C 3.453 -0.656 3.446 -0.656 3.438 -0.656 C 3.431 -0.656 3.423 -0.656 3.416 -0.656 C 3.408 -0.656 3.401 -0.656 3.394 -0.656 C 3.386 -0.656 3.379 -0.656 3.371 -0.656 C 3.364 -0.656 3.356 -0.656 3.349 -0.656 C 3.342 -0.656 3.334 -0.656 3.327 -0.656 C 3.319 -0.656 3.312 -0.656 3.304 -0.656 C 3.297 -0.656 3.29 -0.656 3.282 -0.656 C 3.275 -0.656 3.267 -0.656 3.26 -0.656 C 3.253 -0.656 3.245 -0.656 3.238 -0.656 C 3.23 -0.656 3.223 -0.656 3.216 -0.656 C 3.208 -0.656 3.201 -0.656 3.193 -0.656 C 3.186 -0.656 3.179 -0.656 3.171 -0.656 C 3.164 -0.656 3.156 -0.656 3.149 -0.656 C 3.142 -0.656 3.134 -0.656 3.127 -0.656 C 3.119 -0.656 3.112 -0.656 3.105 -0.656 C 3.097 -0.656 3.09 -0.656 3.083 -0.656 C 3.075 -0.656 3.068 -0.656 3.06 -0.656 C 3.053 -0.656 3.046 -0.656 3.038 -0.656 C 3.031 -0.656 3.024 -0.656 3.016 -0.656 C 3.009 -0.656 3.002 -0.656 2.994 -0.656 C 2.987 -0.656 2.98 -0.656 2.972 -0.656 C 2.965 -0.656 2.957 -0.656 2.95 -0.656 C 2.943 -0.656 2.935 -0.656 2.928 -0.656 C 2.921 -0.656 2.913 -0.656 2.906 -0.656 C 2.899 -0.656 2.891 -0.656 2.884 -0.656 C 2.877 -0.656 2.869 -0.656 2.862 -0.656 C 2.855 -0.656 2.847 -0.656 2.84 -0.656 C 2.833 -0.656 2.825 -0.656 2.818 -0.656 C 2.811 -0.656 2.803 -0.656 2.796 -0.656 C 2.789 -0.656 2.782 -0.656 2.774 -0.656 C 2.767 -0.656 2.76 -0.656 2.752 -0.656 C 2.745 -0.656 2.738 -0.656 2.73 -0.656 C 2.723 -0.656 2.716 -0.656 2.709 -0.656 C 2.701 -0.656 2.694 -0.656 2.687 -0.656 C 2.679 -0.656 2.672 -0.656 2.665 -0.656 C 2.657 -0.656 2.65 -0.656 2.643 -0.656 C 2.636 -0.656 2.628 -0.656 2.621 -0.656 C 2.614 -0.656 2.607 -0.656 2.599 -0.656 C 2.592 -0.656 2.585 -0.656 2.577 -0.656 C 2.57 -0.656 2.563 -0.656 2.556 -0.656 C 2.548 -0.656 2.541 -0.656 2.534 -0.656 C 2.527 -0.656 2.519 -0.656 2.512 -0.656 C 2.505 -0.656 2.498 -0.656 2.49 -0.656 C 2.483 -0.656 2.476 -0.656 2.469 -0.656 C 2.462 -0.656 2.454 -0.656 2.447 -0.656 C 2.44 -0.656 2.433 -0.656 2.425 -0.656 C 2.418 -0.656 2.411 -0.656 2.404 -0.656 C 2.396 -0.656 2.389 -0.656 2.382 -0.656 C 2.375 -0.656 2.368 -0.656 2.36 -0.656 C 2.353 -0.656 2.346 -0.656 2.339 -0.656 C 2.332 -0.656 2.324 -0.656 2.317 -0.656 C 2.31 -0.656 2.303 -0.656 2.296 -0.656 C 2.288 -0.656 2.281 -0.656 2.274 -0.656 C 2.267 -0.656 2.26 -0.656 2.253 -0.656 C 2.245 -0.656 2.238 -0.656 2.231 -0.656 C 2.224 -0.656 2.217 -0.656 2.209 -0.656 C 2.202 -0.656 2.195 -0.656 2.188 -0.656 C 2.181 -0.656 2.174 -0.656 2.167 -0.656 C 2.159 -0.656 2.152 -0.656 2.145 -0.656 C 2.138 -0.656 2.131 -0.656 2.124 -0.656 C 2.117 -0.656 2.109 -0.656 2.102 -0.656 C 2.095 -0.656 2.088 -0.656 2.081 -0.656 C 2.074 -0.656 2.067 -0.656 2.059 -0.656 C 2.052 -0.656 2.045 -0.656 2.038 -0.656 C 2.031 -0.656 2.024 -0.656 2.017 -0.656 C 2.01 -0.656 2.003 -0.656 1.995 -0.656 C 1.988 -0.656 1.981 -0.656 1.974 -0.656 C 1.967 -0.656 1.96 -0.656 1.953 -0.656 C 1.946 -0.656 1.939 -0.656 1.932 -0.656 C 1.925 -0.656 1.917 -0.656 1.91 -0.656 C 1.903 -0.656 1.896 -0.656 1.889 -0.656 C 1.882 -0.656 1.875 -0.656 1.868 -0.656 C 1.861 -0.656 1.854 -0.656 1.847 -0.656 C 1.84 -0.656 1.833 -0.656 1.826 -0.656 C 1.819 -0.656 1.811 -0.656 1.804 -0.656 C 1.797 -0.656 1.79 -0.656 1.783 -0.656 C 1.776 -0.656 1.769 -0.656 1.762 -0.656 C 1.755 -0.656 1.748 -0.656 1.741 -0.656 C 1.734 -0.656 1.727 -0.656 1.72 -0.656 C 1.713 -0.656 1.706 -0.656 1.699 -0.656 C 1.692 -0.656 1.685 -0.656 1.678 -0.656 C 1.671 -0.656 1.664 -0.656 1.657 -0.656 C 1.65 -0.656 1.643 -0.656 1.636 -0.656 C 1.629 -0.656 1.622 -0.656 1.615 -0.656 C 1.608 -0.656 1.601 -0.656 1.594 -0.656 C 1.587 -0.656 1.58 -0.656 1.573 -0.656 C 1.566 -0.656 1.559 -0.656 1.552 -0.656 C 1.545 -0.656 1.538 -0.656 1.531 -0.656 C 1.525 -0.656 1.518 -0.656 1.511 -0.656 C 1.504 -0.656 1.497 -0.656 1.49 -0.656 C 1.483 -0.656 1.476 -0.656 1.469 -0.656 C 1.462 -0.656 1.455 -0.656 1.448 -0.656 C 1.441 -0.656 1.434 -0.656 1.427 -0.656 C 1.421 -0.656 1.414 -0.656 1.407 -0.656 C 1.4 -0.656 1.393 -0.656 1.386 -0.656 C 1.379 -0.656 1.372 -0.656 1.365 -0.656 C 1.358 -0.656 1.352 -0.656 1.345 -0.656 C 1.338 -0.656 1.331 -0.656 1.324 -0.656 C 1.317 -0.656 1.31 -0.656 1.303 -0.656 C 1.297 -0.656 1.29 -0.656 1.283 -0.656 C 1.276 -0.656 1.269 -0.656 1.262 -0.656 C 1.255 -0.656 1.249 -0.656 1.242 -0.656 C 1.235 -0.656 1.228 -0.656 1.221 -0.656 C 1.214 -0.656 1.207 -0.656 1.201 -0.656 C 1.194 -0.656 1.187 -0.656 1.18 -0.656 C 1.173 -0.656 1.167 -0.656 1.16 -0.656 C 1.153 -0.656 1.146 -0.656 1.139 -0.656 C 1.132 -0.656 1.126 -0.656 1.119 -0.656 C 1.112 -0.656 1.105 -0.656 1.098 -0.656 C 1.092 -0.656 1.085 -0.656 1.078 -0.656 C 1.071 -0.656 1.065 -0.656 1.058 -0.656 C 1.051 -0.656 1.044 -0.656 1.037 -0.656 C 1.031 -0.656 1.024 -0.656 1.017 -0.656 C 1.01 -0.656 1.004 -0.656 0.997 -0.656 C 0.99 -0.656 0.983 -0.656 0.977 -0.656 C 0.97 -0.656 0.963 -0.656 0.957 -0.656 C 0.95 -0.656 0.943 -0.656 0.936 -0.656 C 0.93 -0.656 0.923 -0.656 0.916 -0.656 C 0.909 -0.656 0.903 -0.656 0.896 -0.656 C 0.889 -0.656 0.883 -0.656 0.876 -0.656 C 0.869 -0.656 0.863 -0.656 0.856 -0.656 C 0.849 -0.656 0.842 -0.656 0.836 -0.656 C 0.829 -0.656 0.822 -0.656 0.816 -0.656 C 0.809 -0.656 0.802 -0.656 0.796 -0.656 C 0.789 -0.656 0.782 -0.656 0.776 -0.656 C 0.769 -0.656 0.763 -0.656 0.756 -0.656 C 0.749 -0.656 0.743 -0.656 0.736 -0.656 C 0.729 -0.656 0.723 -0.656 0.716 -0.656 C 0.709 -0.656 0.703 -0.656 0.696 -0.656 C 0.69 -0.656 0.683 -0.656 0.676 -0.656 C 0.67 -0.656 0.663 -0.656 0.657 -0.656 C 0.65 -0.656 0.643 -0.656 0.637 -0.656 C 0.63 -0.656 0.624 -0.656 0.617 -0.656 C 0.61 -0.656 0.604 -0.656 0.597 -0.656 C 0.591 -0.656 0.584 -0.656 0.578 -0.656 C 0.571 -0.656 0.564 -0.656 0.558 -0.656 C 0.551 -0.656 0.545 -0.656 0.538 -0.656 C 0.532 -0.656 0.525 -0.656 0.519 -0.656 C 0.512 -0.656 0.506 -0.656 0.499 -0.656 C 0.493 -0.656 0.486 -0.656 0.479 -0.656 C 0.473 -0.656 0.466 -0.656 0.46 -0.656 C 0.453 -0.656 0.447 -0.656 0.44 -0.656 C 0.434 -0.656 0.427 -0.656 0.421 -0.656 C 0.414 -0.656 0.408 -0.656 0.402 -0.656 C 0.395 -0.656 0.389 -0.656 0.382 -0.656 C 0.376 -0.656 0.369 -0.656 0.363 -0.656 C 0.356 -0.656 0.35 -0.656 0.343 -0.656 C 0.337 -0.656 0.33 -0.656 0.324 -0.656 C 0.318 -0.656 0.311 -0.656 0.305 -0.656 C 0.298 -0.656 0.292 -0.656 0.285 -0.656 C 0.279 -0.656 0.273 -0.656 0.266 -0.656 C 0.26 -0.656 0.253 -0.656 0.247 -0.656 C 0.241 -0.656 0.234 -0.656 0.228 -0.656 C 0.221 -0.656 0.215 -0.656 0.209 -0.656 C 0.202 -0.656 0.196 -0.656 0.19 -0.656 C 0.183 -0.656 0.177 -0.656 0.17 -0.656 C 0.164 -0.656 0.158 -0.656 0.151 -0.656 C 0.145 -0.656 0.139 -0.656 0.132 -0.656 C 0.126 -0.656 0.12 -0.656 0.113 -0.656 C 0.107 -0.656 0.101 -0.656 0.094 -0.656 C 0.088 -0.656 0.082 -0.656 0.075 -0.656 C 0.069 -0.656 0.063 -0.656 0.057 -0.656 C 0.05 -0.656 0.044 -0.656 0.038 -0.656 C 0.031 -0.656 0.025 -0.656 0.019 -0.656 C 0.013 -0.656 0.006 -0.656 0 -0.656 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 1.313,
    viewBox: "0 -0.656 5 1.313",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.5,
      top: 19,
      width: 5,
      height: 1.3125
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.656 C -0.362 -0.656 -0.656 -0.362 -0.656 0 C -0.656 0.362 -0.362 0.656 0 0.656 L 0 0 L 0 -0.656 Z M 5 0.656 C 5.362 0.656 5.656 0.362 5.656 0 C 5.656 -0.362 5.362 -0.656 5 -0.656 L 5 0 L 5 0.656 Z M 0 0 L 0 0.656 C 0.003 0.656 0.006 0.656 0.009 0.656 C 0.011 0.656 0.014 0.656 0.017 0.656 C 0.02 0.656 0.023 0.656 0.026 0.656 C 0.029 0.656 0.031 0.656 0.034 0.656 C 0.037 0.656 0.04 0.656 0.043 0.656 C 0.046 0.656 0.049 0.656 0.052 0.656 C 0.054 0.656 0.057 0.656 0.06 0.656 C 0.063 0.656 0.066 0.656 0.069 0.656 C 0.072 0.656 0.075 0.656 0.077 0.656 C 0.08 0.656 0.083 0.656 0.086 0.656 C 0.089 0.656 0.092 0.656 0.095 0.656 C 0.098 0.656 0.101 0.656 0.104 0.656 C 0.106 0.656 0.109 0.656 0.112 0.656 C 0.115 0.656 0.118 0.656 0.121 0.656 C 0.124 0.656 0.127 0.656 0.13 0.656 C 0.133 0.656 0.136 0.656 0.139 0.656 C 0.141 0.656 0.144 0.656 0.147 0.656 C 0.15 0.656 0.153 0.656 0.156 0.656 C 0.159 0.656 0.162 0.656 0.165 0.656 C 0.168 0.656 0.171 0.656 0.174 0.656 C 0.177 0.656 0.18 0.656 0.183 0.656 C 0.185 0.656 0.188 0.656 0.191 0.656 C 0.194 0.656 0.197 0.656 0.2 0.656 C 0.203 0.656 0.206 0.656 0.209 0.656 C 0.212 0.656 0.215 0.656 0.218 0.656 C 0.221 0.656 0.224 0.656 0.227 0.656 C 0.23 0.656 0.233 0.656 0.236 0.656 C 0.239 0.656 0.242 0.656 0.245 0.656 C 0.248 0.656 0.251 0.656 0.254 0.656 C 0.257 0.656 0.26 0.656 0.263 0.656 C 0.266 0.656 0.269 0.656 0.271 0.656 C 0.274 0.656 0.277 0.656 0.28 0.656 C 0.283 0.656 0.286 0.656 0.289 0.656 C 0.292 0.656 0.295 0.656 0.298 0.656 C 0.301 0.656 0.304 0.656 0.307 0.656 C 0.31 0.656 0.313 0.656 0.316 0.656 C 0.319 0.656 0.322 0.656 0.325 0.656 C 0.328 0.656 0.332 0.656 0.335 0.656 C 0.338 0.656 0.341 0.656 0.344 0.656 C 0.347 0.656 0.35 0.656 0.353 0.656 C 0.356 0.656 0.359 0.656 0.362 0.656 C 0.365 0.656 0.368 0.656 0.371 0.656 C 0.374 0.656 0.377 0.656 0.38 0.656 C 0.383 0.656 0.386 0.656 0.389 0.656 C 0.392 0.656 0.395 0.656 0.398 0.656 C 0.401 0.656 0.404 0.656 0.407 0.656 C 0.41 0.656 0.413 0.656 0.416 0.656 C 0.419 0.656 0.423 0.656 0.426 0.656 C 0.429 0.656 0.432 0.656 0.435 0.656 C 0.438 0.656 0.441 0.656 0.444 0.656 C 0.447 0.656 0.45 0.656 0.453 0.656 C 0.456 0.656 0.459 0.656 0.462 0.656 C 0.465 0.656 0.469 0.656 0.472 0.656 C 0.475 0.656 0.478 0.656 0.481 0.656 C 0.484 0.656 0.487 0.656 0.49 0.656 C 0.493 0.656 0.496 0.656 0.499 0.656 C 0.502 0.656 0.505 0.656 0.509 0.656 C 0.512 0.656 0.515 0.656 0.518 0.656 C 0.521 0.656 0.524 0.656 0.527 0.656 C 0.53 0.656 0.533 0.656 0.536 0.656 C 0.54 0.656 0.543 0.656 0.546 0.656 C 0.549 0.656 0.552 0.656 0.555 0.656 C 0.558 0.656 0.561 0.656 0.564 0.656 C 0.568 0.656 0.571 0.656 0.574 0.656 C 0.577 0.656 0.58 0.656 0.583 0.656 C 0.586 0.656 0.589 0.656 0.592 0.656 C 0.596 0.656 0.599 0.656 0.602 0.656 C 0.605 0.656 0.608 0.656 0.611 0.656 C 0.614 0.656 0.617 0.656 0.621 0.656 C 0.624 0.656 0.627 0.656 0.63 0.656 C 0.633 0.656 0.636 0.656 0.639 0.656 C 0.643 0.656 0.646 0.656 0.649 0.656 C 0.652 0.656 0.655 0.656 0.658 0.656 C 0.661 0.656 0.665 0.656 0.668 0.656 C 0.671 0.656 0.674 0.656 0.677 0.656 C 0.68 0.656 0.683 0.656 0.687 0.656 C 0.69 0.656 0.693 0.656 0.696 0.656 C 0.699 0.656 0.702 0.656 0.706 0.656 C 0.709 0.656 0.712 0.656 0.715 0.656 C 0.718 0.656 0.721 0.656 0.725 0.656 C 0.728 0.656 0.731 0.656 0.734 0.656 C 0.737 0.656 0.74 0.656 0.744 0.656 C 0.747 0.656 0.75 0.656 0.753 0.656 C 0.756 0.656 0.76 0.656 0.763 0.656 C 0.766 0.656 0.769 0.656 0.772 0.656 C 0.775 0.656 0.779 0.656 0.782 0.656 C 0.785 0.656 0.788 0.656 0.791 0.656 C 0.795 0.656 0.798 0.656 0.801 0.656 C 0.804 0.656 0.807 0.656 0.811 0.656 C 0.814 0.656 0.817 0.656 0.82 0.656 C 0.823 0.656 0.827 0.656 0.83 0.656 C 0.833 0.656 0.836 0.656 0.839 0.656 C 0.843 0.656 0.846 0.656 0.849 0.656 C 0.852 0.656 0.855 0.656 0.859 0.656 C 0.862 0.656 0.865 0.656 0.868 0.656 C 0.872 0.656 0.875 0.656 0.878 0.656 C 0.881 0.656 0.884 0.656 0.888 0.656 C 0.891 0.656 0.894 0.656 0.897 0.656 C 0.901 0.656 0.904 0.656 0.907 0.656 C 0.91 0.656 0.913 0.656 0.917 0.656 C 0.92 0.656 0.923 0.656 0.926 0.656 C 0.93 0.656 0.933 0.656 0.936 0.656 C 0.939 0.656 0.943 0.656 0.946 0.656 C 0.949 0.656 0.952 0.656 0.956 0.656 C 0.959 0.656 0.962 0.656 0.965 0.656 C 0.969 0.656 0.972 0.656 0.975 0.656 C 0.978 0.656 0.982 0.656 0.985 0.656 C 0.988 0.656 0.991 0.656 0.995 0.656 C 0.998 0.656 1.001 0.656 1.004 0.656 C 1.008 0.656 1.011 0.656 1.014 0.656 C 1.017 0.656 1.021 0.656 1.024 0.656 C 1.027 0.656 1.03 0.656 1.034 0.656 C 1.037 0.656 1.04 0.656 1.043 0.656 C 1.047 0.656 1.05 0.656 1.053 0.656 C 1.057 0.656 1.06 0.656 1.063 0.656 C 1.066 0.656 1.07 0.656 1.073 0.656 C 1.076 0.656 1.079 0.656 1.083 0.656 C 1.086 0.656 1.089 0.656 1.093 0.656 C 1.096 0.656 1.099 0.656 1.102 0.656 C 1.106 0.656 1.109 0.656 1.112 0.656 C 1.116 0.656 1.119 0.656 1.122 0.656 C 1.125 0.656 1.129 0.656 1.132 0.656 C 1.135 0.656 1.139 0.656 1.142 0.656 C 1.145 0.656 1.148 0.656 1.152 0.656 C 1.155 0.656 1.158 0.656 1.162 0.656 C 1.165 0.656 1.168 0.656 1.172 0.656 C 1.175 0.656 1.178 0.656 1.181 0.656 C 1.185 0.656 1.188 0.656 1.191 0.656 C 1.195 0.656 1.198 0.656 1.201 0.656 C 1.205 0.656 1.208 0.656 1.211 0.656 C 1.215 0.656 1.218 0.656 1.221 0.656 C 1.225 0.656 1.228 0.656 1.231 0.656 C 1.234 0.656 1.238 0.656 1.241 0.656 C 1.244 0.656 1.248 0.656 1.251 0.656 C 1.254 0.656 1.258 0.656 1.261 0.656 C 1.264 0.656 1.268 0.656 1.271 0.656 C 1.274 0.656 1.278 0.656 1.281 0.656 C 1.284 0.656 1.288 0.656 1.291 0.656 C 1.294 0.656 1.298 0.656 1.301 0.656 C 1.304 0.656 1.308 0.656 1.311 0.656 C 1.314 0.656 1.318 0.656 1.321 0.656 C 1.324 0.656 1.328 0.656 1.331 0.656 C 1.334 0.656 1.338 0.656 1.341 0.656 C 1.344 0.656 1.348 0.656 1.351 0.656 C 1.354 0.656 1.358 0.656 1.361 0.656 C 1.364 0.656 1.368 0.656 1.371 0.656 C 1.374 0.656 1.378 0.656 1.381 0.656 C 1.384 0.656 1.388 0.656 1.391 0.656 C 1.394 0.656 1.398 0.656 1.401 0.656 C 1.405 0.656 1.408 0.656 1.411 0.656 C 1.415 0.656 1.418 0.656 1.421 0.656 C 1.425 0.656 1.428 0.656 1.431 0.656 C 1.435 0.656 1.438 0.656 1.441 0.656 C 1.445 0.656 1.448 0.656 1.452 0.656 C 1.455 0.656 1.458 0.656 1.462 0.656 C 1.465 0.656 1.468 0.656 1.472 0.656 C 1.475 0.656 1.478 0.656 1.482 0.656 C 1.485 0.656 1.489 0.656 1.492 0.656 C 1.495 0.656 1.499 0.656 1.502 0.656 C 1.505 0.656 1.509 0.656 1.512 0.656 C 1.516 0.656 1.519 0.656 1.522 0.656 C 1.526 0.656 1.529 0.656 1.532 0.656 C 1.536 0.656 1.539 0.656 1.543 0.656 C 1.546 0.656 1.549 0.656 1.553 0.656 C 1.556 0.656 1.559 0.656 1.563 0.656 C 1.566 0.656 1.57 0.656 1.573 0.656 C 1.576 0.656 1.58 0.656 1.583 0.656 C 1.586 0.656 1.59 0.656 1.593 0.656 C 1.597 0.656 1.6 0.656 1.603 0.656 C 1.607 0.656 1.61 0.656 1.614 0.656 C 1.617 0.656 1.62 0.656 1.624 0.656 C 1.627 0.656 1.631 0.656 1.634 0.656 C 1.637 0.656 1.641 0.656 1.644 0.656 C 1.648 0.656 1.651 0.656 1.654 0.656 C 1.658 0.656 1.661 0.656 1.664 0.656 C 1.668 0.656 1.671 0.656 1.675 0.656 C 1.678 0.656 1.681 0.656 1.685 0.656 C 1.688 0.656 1.692 0.656 1.695 0.656 C 1.698 0.656 1.702 0.656 1.705 0.656 C 1.709 0.656 1.712 0.656 1.716 0.656 C 1.719 0.656 1.722 0.656 1.726 0.656 C 1.729 0.656 1.733 0.656 1.736 0.656 C 1.739 0.656 1.743 0.656 1.746 0.656 C 1.75 0.656 1.753 0.656 1.756 0.656 C 1.76 0.656 1.763 0.656 1.767 0.656 C 1.77 0.656 1.773 0.656 1.777 0.656 C 1.78 0.656 1.784 0.656 1.787 0.656 C 1.791 0.656 1.794 0.656 1.797 0.656 C 1.801 0.656 1.804 0.656 1.808 0.656 C 1.811 0.656 1.814 0.656 1.818 0.656 C 1.821 0.656 1.825 0.656 1.828 0.656 C 1.832 0.656 1.835 0.656 1.838 0.656 C 1.842 0.656 1.845 0.656 1.849 0.656 C 1.852 0.656 1.855 0.656 1.859 0.656 C 1.862 0.656 1.866 0.656 1.869 0.656 C 1.873 0.656 1.876 0.656 1.879 0.656 C 1.883 0.656 1.886 0.656 1.89 0.656 C 1.893 0.656 1.897 0.656 1.9 0.656 C 1.903 0.656 1.907 0.656 1.91 0.656 C 1.914 0.656 1.917 0.656 1.921 0.656 C 1.924 0.656 1.927 0.656 1.931 0.656 C 1.934 0.656 1.938 0.656 1.941 0.656 C 1.945 0.656 1.948 0.656 1.951 0.656 C 1.955 0.656 1.958 0.656 1.962 0.656 C 1.965 0.656 1.969 0.656 1.972 0.656 C 1.975 0.656 1.979 0.656 1.982 0.656 C 1.986 0.656 1.989 0.656 1.993 0.656 C 1.996 0.656 2 0.656 2.003 0.656 C 2.006 0.656 2.01 0.656 2.013 0.656 C 2.017 0.656 2.02 0.656 2.024 0.656 C 2.027 0.656 2.03 0.656 2.034 0.656 C 2.037 0.656 2.041 0.656 2.044 0.656 C 2.048 0.656 2.051 0.656 2.055 0.656 C 2.058 0.656 2.061 0.656 2.065 0.656 C 2.068 0.656 2.072 0.656 2.075 0.656 C 2.079 0.656 2.082 0.656 2.086 0.656 C 2.089 0.656 2.092 0.656 2.096 0.656 C 2.099 0.656 2.103 0.656 2.106 0.656 C 2.11 0.656 2.113 0.656 2.117 0.656 C 2.12 0.656 2.123 0.656 2.127 0.656 C 2.13 0.656 2.134 0.656 2.137 0.656 C 2.141 0.656 2.144 0.656 2.148 0.656 C 2.151 0.656 2.154 0.656 2.158 0.656 C 2.161 0.656 2.165 0.656 2.168 0.656 C 2.172 0.656 2.175 0.656 2.179 0.656 C 2.182 0.656 2.186 0.656 2.189 0.656 C 2.192 0.656 2.196 0.656 2.199 0.656 C 2.203 0.656 2.206 0.656 2.21 0.656 C 2.213 0.656 2.217 0.656 2.22 0.656 C 2.223 0.656 2.227 0.656 2.23 0.656 C 2.234 0.656 2.237 0.656 2.241 0.656 C 2.244 0.656 2.248 0.656 2.251 0.656 C 2.255 0.656 2.258 0.656 2.261 0.656 C 2.265 0.656 2.268 0.656 2.272 0.656 C 2.275 0.656 2.279 0.656 2.282 0.656 C 2.286 0.656 2.289 0.656 2.293 0.656 C 2.296 0.656 2.299 0.656 2.303 0.656 C 2.306 0.656 2.31 0.656 2.313 0.656 C 2.317 0.656 2.32 0.656 2.324 0.656 C 2.327 0.656 2.331 0.656 2.334 0.656 C 2.337 0.656 2.341 0.656 2.344 0.656 C 2.348 0.656 2.351 0.656 2.355 0.656 C 2.358 0.656 2.362 0.656 2.365 0.656 C 2.369 0.656 2.372 0.656 2.376 0.656 C 2.379 0.656 2.382 0.656 2.386 0.656 C 2.389 0.656 2.393 0.656 2.396 0.656 C 2.4 0.656 2.403 0.656 2.407 0.656 C 2.41 0.656 2.414 0.656 2.417 0.656 C 2.42 0.656 2.424 0.656 2.427 0.656 C 2.431 0.656 2.434 0.656 2.438 0.656 C 2.441 0.656 2.445 0.656 2.448 0.656 C 2.452 0.656 2.455 0.656 2.458 0.656 C 2.462 0.656 2.465 0.656 2.469 0.656 C 2.472 0.656 2.476 0.656 2.479 0.656 C 2.483 0.656 2.486 0.656 2.49 0.656 C 2.493 0.656 2.497 0.656 2.5 0.656 C 2.503 0.656 2.507 0.656 2.51 0.656 C 2.514 0.656 2.517 0.656 2.521 0.656 C 2.524 0.656 2.528 0.656 2.531 0.656 C 2.535 0.656 2.538 0.656 2.542 0.656 C 2.545 0.656 2.548 0.656 2.552 0.656 C 2.555 0.656 2.559 0.656 2.562 0.656 C 2.566 0.656 2.569 0.656 2.573 0.656 C 2.576 0.656 2.58 0.656 2.583 0.656 C 2.586 0.656 2.59 0.656 2.593 0.656 C 2.597 0.656 2.6 0.656 2.604 0.656 C 2.607 0.656 2.611 0.656 2.614 0.656 C 2.618 0.656 2.621 0.656 2.624 0.656 C 2.628 0.656 2.631 0.656 2.635 0.656 C 2.638 0.656 2.642 0.656 2.645 0.656 C 2.649 0.656 2.652 0.656 2.656 0.656 C 2.659 0.656 2.663 0.656 2.666 0.656 C 2.669 0.656 2.673 0.656 2.676 0.656 C 2.68 0.656 2.683 0.656 2.687 0.656 C 2.69 0.656 2.694 0.656 2.697 0.656 C 2.701 0.656 2.704 0.656 2.707 0.656 C 2.711 0.656 2.714 0.656 2.718 0.656 C 2.721 0.656 2.725 0.656 2.728 0.656 C 2.732 0.656 2.735 0.656 2.739 0.656 C 2.742 0.656 2.745 0.656 2.749 0.656 C 2.752 0.656 2.756 0.656 2.759 0.656 C 2.763 0.656 2.766 0.656 2.77 0.656 C 2.773 0.656 2.777 0.656 2.78 0.656 C 2.783 0.656 2.787 0.656 2.79 0.656 C 2.794 0.656 2.797 0.656 2.801 0.656 C 2.804 0.656 2.808 0.656 2.811 0.656 C 2.814 0.656 2.818 0.656 2.821 0.656 C 2.825 0.656 2.828 0.656 2.832 0.656 C 2.835 0.656 2.839 0.656 2.842 0.656 C 2.846 0.656 2.849 0.656 2.852 0.656 C 2.856 0.656 2.859 0.656 2.863 0.656 C 2.866 0.656 2.87 0.656 2.873 0.656 C 2.877 0.656 2.88 0.656 2.883 0.656 C 2.887 0.656 2.89 0.656 2.894 0.656 C 2.897 0.656 2.901 0.656 2.904 0.656 C 2.908 0.656 2.911 0.656 2.914 0.656 C 2.918 0.656 2.921 0.656 2.925 0.656 C 2.928 0.656 2.932 0.656 2.935 0.656 C 2.939 0.656 2.942 0.656 2.945 0.656 C 2.949 0.656 2.952 0.656 2.956 0.656 C 2.959 0.656 2.963 0.656 2.966 0.656 C 2.97 0.656 2.973 0.656 2.976 0.656 C 2.98 0.656 2.983 0.656 2.987 0.656 C 2.99 0.656 2.994 0.656 2.997 0.656 C 3 0.656 3.004 0.656 3.007 0.656 C 3.011 0.656 3.014 0.656 3.018 0.656 C 3.021 0.656 3.025 0.656 3.028 0.656 C 3.031 0.656 3.035 0.656 3.038 0.656 C 3.042 0.656 3.045 0.656 3.049 0.656 C 3.052 0.656 3.055 0.656 3.059 0.656 C 3.062 0.656 3.066 0.656 3.069 0.656 C 3.073 0.656 3.076 0.656 3.079 0.656 C 3.083 0.656 3.086 0.656 3.09 0.656 C 3.093 0.656 3.097 0.656 3.1 0.656 C 3.103 0.656 3.107 0.656 3.11 0.656 C 3.114 0.656 3.117 0.656 3.121 0.656 C 3.124 0.656 3.127 0.656 3.131 0.656 C 3.134 0.656 3.138 0.656 3.141 0.656 C 3.145 0.656 3.148 0.656 3.151 0.656 C 3.155 0.656 3.158 0.656 3.162 0.656 C 3.165 0.656 3.168 0.656 3.172 0.656 C 3.175 0.656 3.179 0.656 3.182 0.656 C 3.186 0.656 3.189 0.656 3.192 0.656 C 3.196 0.656 3.199 0.656 3.203 0.656 C 3.206 0.656 3.209 0.656 3.213 0.656 C 3.216 0.656 3.22 0.656 3.223 0.656 C 3.227 0.656 3.23 0.656 3.233 0.656 C 3.237 0.656 3.24 0.656 3.244 0.656 C 3.247 0.656 3.25 0.656 3.254 0.656 C 3.257 0.656 3.261 0.656 3.264 0.656 C 3.267 0.656 3.271 0.656 3.274 0.656 C 3.278 0.656 3.281 0.656 3.284 0.656 C 3.288 0.656 3.291 0.656 3.295 0.656 C 3.298 0.656 3.302 0.656 3.305 0.656 C 3.308 0.656 3.312 0.656 3.315 0.656 C 3.319 0.656 3.322 0.656 3.325 0.656 C 3.329 0.656 3.332 0.656 3.336 0.656 C 3.339 0.656 3.342 0.656 3.346 0.656 C 3.349 0.656 3.352 0.656 3.356 0.656 C 3.359 0.656 3.363 0.656 3.366 0.656 C 3.369 0.656 3.373 0.656 3.376 0.656 C 3.38 0.656 3.383 0.656 3.386 0.656 C 3.39 0.656 3.393 0.656 3.397 0.656 C 3.4 0.656 3.403 0.656 3.407 0.656 C 3.41 0.656 3.414 0.656 3.417 0.656 C 3.42 0.656 3.424 0.656 3.427 0.656 C 3.43 0.656 3.434 0.656 3.437 0.656 C 3.441 0.656 3.444 0.656 3.447 0.656 C 3.451 0.656 3.454 0.656 3.457 0.656 C 3.461 0.656 3.464 0.656 3.468 0.656 C 3.471 0.656 3.474 0.656 3.478 0.656 C 3.481 0.656 3.484 0.656 3.488 0.656 C 3.491 0.656 3.495 0.656 3.498 0.656 C 3.501 0.656 3.505 0.656 3.508 0.656 C 3.511 0.656 3.515 0.656 3.518 0.656 C 3.522 0.656 3.525 0.656 3.528 0.656 C 3.532 0.656 3.535 0.656 3.538 0.656 C 3.542 0.656 3.545 0.656 3.548 0.656 C 3.552 0.656 3.555 0.656 3.559 0.656 C 3.562 0.656 3.565 0.656 3.569 0.656 C 3.572 0.656 3.575 0.656 3.579 0.656 C 3.582 0.656 3.585 0.656 3.589 0.656 C 3.592 0.656 3.595 0.656 3.599 0.656 C 3.602 0.656 3.606 0.656 3.609 0.656 C 3.612 0.656 3.616 0.656 3.619 0.656 C 3.622 0.656 3.626 0.656 3.629 0.656 C 3.632 0.656 3.636 0.656 3.639 0.656 C 3.642 0.656 3.646 0.656 3.649 0.656 C 3.652 0.656 3.656 0.656 3.659 0.656 C 3.662 0.656 3.666 0.656 3.669 0.656 C 3.672 0.656 3.676 0.656 3.679 0.656 C 3.682 0.656 3.686 0.656 3.689 0.656 C 3.692 0.656 3.696 0.656 3.699 0.656 C 3.702 0.656 3.706 0.656 3.709 0.656 C 3.712 0.656 3.716 0.656 3.719 0.656 C 3.722 0.656 3.726 0.656 3.729 0.656 C 3.732 0.656 3.736 0.656 3.739 0.656 C 3.742 0.656 3.746 0.656 3.749 0.656 C 3.752 0.656 3.756 0.656 3.759 0.656 C 3.762 0.656 3.766 0.656 3.769 0.656 C 3.772 0.656 3.775 0.656 3.779 0.656 C 3.782 0.656 3.785 0.656 3.789 0.656 C 3.792 0.656 3.795 0.656 3.799 0.656 C 3.802 0.656 3.805 0.656 3.809 0.656 C 3.812 0.656 3.815 0.656 3.819 0.656 C 3.822 0.656 3.825 0.656 3.828 0.656 C 3.832 0.656 3.835 0.656 3.838 0.656 C 3.842 0.656 3.845 0.656 3.848 0.656 C 3.852 0.656 3.855 0.656 3.858 0.656 C 3.861 0.656 3.865 0.656 3.868 0.656 C 3.871 0.656 3.875 0.656 3.878 0.656 C 3.881 0.656 3.884 0.656 3.888 0.656 C 3.891 0.656 3.894 0.656 3.898 0.656 C 3.901 0.656 3.904 0.656 3.907 0.656 C 3.911 0.656 3.914 0.656 3.917 0.656 C 3.921 0.656 3.924 0.656 3.927 0.656 C 3.93 0.656 3.934 0.656 3.937 0.656 C 3.94 0.656 3.943 0.656 3.947 0.656 C 3.95 0.656 3.953 0.656 3.957 0.656 C 3.96 0.656 3.963 0.656 3.966 0.656 C 3.97 0.656 3.973 0.656 3.976 0.656 C 3.979 0.656 3.983 0.656 3.986 0.656 C 3.989 0.656 3.992 0.656 3.996 0.656 C 3.999 0.656 4.002 0.656 4.005 0.656 C 4.009 0.656 4.012 0.656 4.015 0.656 C 4.018 0.656 4.022 0.656 4.025 0.656 C 4.028 0.656 4.031 0.656 4.035 0.656 C 4.038 0.656 4.041 0.656 4.044 0.656 C 4.048 0.656 4.051 0.656 4.054 0.656 C 4.057 0.656 4.061 0.656 4.064 0.656 C 4.067 0.656 4.07 0.656 4.074 0.656 C 4.077 0.656 4.08 0.656 4.083 0.656 C 4.087 0.656 4.09 0.656 4.093 0.656 C 4.096 0.656 4.099 0.656 4.103 0.656 C 4.106 0.656 4.109 0.656 4.112 0.656 C 4.116 0.656 4.119 0.656 4.122 0.656 C 4.125 0.656 4.128 0.656 4.132 0.656 C 4.135 0.656 4.138 0.656 4.141 0.656 C 4.145 0.656 4.148 0.656 4.151 0.656 C 4.154 0.656 4.157 0.656 4.161 0.656 C 4.164 0.656 4.167 0.656 4.17 0.656 C 4.173 0.656 4.177 0.656 4.18 0.656 C 4.183 0.656 4.186 0.656 4.189 0.656 C 4.193 0.656 4.196 0.656 4.199 0.656 C 4.202 0.656 4.205 0.656 4.209 0.656 C 4.212 0.656 4.215 0.656 4.218 0.656 C 4.221 0.656 4.225 0.656 4.228 0.656 C 4.231 0.656 4.234 0.656 4.237 0.656 C 4.24 0.656 4.244 0.656 4.247 0.656 C 4.25 0.656 4.253 0.656 4.256 0.656 C 4.26 0.656 4.263 0.656 4.266 0.656 C 4.269 0.656 4.272 0.656 4.275 0.656 C 4.279 0.656 4.282 0.656 4.285 0.656 C 4.288 0.656 4.291 0.656 4.294 0.656 C 4.298 0.656 4.301 0.656 4.304 0.656 C 4.307 0.656 4.31 0.656 4.313 0.656 C 4.317 0.656 4.32 0.656 4.323 0.656 C 4.326 0.656 4.329 0.656 4.332 0.656 C 4.335 0.656 4.339 0.656 4.342 0.656 C 4.345 0.656 4.348 0.656 4.351 0.656 C 4.354 0.656 4.357 0.656 4.361 0.656 C 4.364 0.656 4.367 0.656 4.37 0.656 C 4.373 0.656 4.376 0.656 4.379 0.656 C 4.383 0.656 4.386 0.656 4.389 0.656 C 4.392 0.656 4.395 0.656 4.398 0.656 C 4.401 0.656 4.404 0.656 4.408 0.656 C 4.411 0.656 4.414 0.656 4.417 0.656 C 4.42 0.656 4.423 0.656 4.426 0.656 C 4.429 0.656 4.432 0.656 4.436 0.656 C 4.439 0.656 4.442 0.656 4.445 0.656 C 4.448 0.656 4.451 0.656 4.454 0.656 C 4.457 0.656 4.46 0.656 4.464 0.656 C 4.467 0.656 4.47 0.656 4.473 0.656 C 4.476 0.656 4.479 0.656 4.482 0.656 C 4.485 0.656 4.488 0.656 4.491 0.656 C 4.495 0.656 4.498 0.656 4.501 0.656 C 4.504 0.656 4.507 0.656 4.51 0.656 C 4.513 0.656 4.516 0.656 4.519 0.656 C 4.522 0.656 4.525 0.656 4.528 0.656 C 4.531 0.656 4.535 0.656 4.538 0.656 C 4.541 0.656 4.544 0.656 4.547 0.656 C 4.55 0.656 4.553 0.656 4.556 0.656 C 4.559 0.656 4.562 0.656 4.565 0.656 C 4.568 0.656 4.571 0.656 4.574 0.656 C 4.577 0.656 4.581 0.656 4.584 0.656 C 4.587 0.656 4.59 0.656 4.593 0.656 C 4.596 0.656 4.599 0.656 4.602 0.656 C 4.605 0.656 4.608 0.656 4.611 0.656 C 4.614 0.656 4.617 0.656 4.62 0.656 C 4.623 0.656 4.626 0.656 4.629 0.656 C 4.632 0.656 4.635 0.656 4.638 0.656 C 4.641 0.656 4.644 0.656 4.647 0.656 C 4.65 0.656 4.653 0.656 4.656 0.656 C 4.659 0.656 4.662 0.656 4.665 0.656 C 4.668 0.656 4.672 0.656 4.675 0.656 C 4.678 0.656 4.681 0.656 4.684 0.656 C 4.687 0.656 4.69 0.656 4.693 0.656 C 4.696 0.656 4.699 0.656 4.702 0.656 C 4.705 0.656 4.708 0.656 4.711 0.656 C 4.714 0.656 4.717 0.656 4.72 0.656 C 4.723 0.656 4.726 0.656 4.729 0.656 C 4.731 0.656 4.734 0.656 4.737 0.656 C 4.74 0.656 4.743 0.656 4.746 0.656 C 4.749 0.656 4.752 0.656 4.755 0.656 C 4.758 0.656 4.761 0.656 4.764 0.656 C 4.767 0.656 4.77 0.656 4.773 0.656 C 4.776 0.656 4.779 0.656 4.782 0.656 C 4.785 0.656 4.788 0.656 4.791 0.656 C 4.794 0.656 4.797 0.656 4.8 0.656 C 4.803 0.656 4.806 0.656 4.809 0.656 C 4.812 0.656 4.815 0.656 4.817 0.656 C 4.82 0.656 4.823 0.656 4.826 0.656 C 4.829 0.656 4.832 0.656 4.835 0.656 C 4.838 0.656 4.841 0.656 4.844 0.656 C 4.847 0.656 4.85 0.656 4.853 0.656 C 4.856 0.656 4.859 0.656 4.861 0.656 C 4.864 0.656 4.867 0.656 4.87 0.656 C 4.873 0.656 4.876 0.656 4.879 0.656 C 4.882 0.656 4.885 0.656 4.888 0.656 C 4.891 0.656 4.894 0.656 4.896 0.656 C 4.899 0.656 4.902 0.656 4.905 0.656 C 4.908 0.656 4.911 0.656 4.914 0.656 C 4.917 0.656 4.92 0.656 4.923 0.656 C 4.925 0.656 4.928 0.656 4.931 0.656 C 4.934 0.656 4.937 0.656 4.94 0.656 C 4.943 0.656 4.946 0.656 4.948 0.656 C 4.951 0.656 4.954 0.656 4.957 0.656 C 4.96 0.656 4.963 0.656 4.966 0.656 C 4.969 0.656 4.971 0.656 4.974 0.656 C 4.977 0.656 4.98 0.656 4.983 0.656 C 4.986 0.656 4.989 0.656 4.991 0.656 C 4.994 0.656 4.997 0.656 5 0.656 L 5 0 L 5 -0.656 C 4.997 -0.656 4.994 -0.656 4.991 -0.656 C 4.989 -0.656 4.986 -0.656 4.983 -0.656 C 4.98 -0.656 4.977 -0.656 4.974 -0.656 C 4.971 -0.656 4.969 -0.656 4.966 -0.656 C 4.963 -0.656 4.96 -0.656 4.957 -0.656 C 4.954 -0.656 4.951 -0.656 4.948 -0.656 C 4.946 -0.656 4.943 -0.656 4.94 -0.656 C 4.937 -0.656 4.934 -0.656 4.931 -0.656 C 4.928 -0.656 4.925 -0.656 4.923 -0.656 C 4.92 -0.656 4.917 -0.656 4.914 -0.656 C 4.911 -0.656 4.908 -0.656 4.905 -0.656 C 4.902 -0.656 4.899 -0.656 4.896 -0.656 C 4.894 -0.656 4.891 -0.656 4.888 -0.656 C 4.885 -0.656 4.882 -0.656 4.879 -0.656 C 4.876 -0.656 4.873 -0.656 4.87 -0.656 C 4.867 -0.656 4.864 -0.656 4.861 -0.656 C 4.859 -0.656 4.856 -0.656 4.853 -0.656 C 4.85 -0.656 4.847 -0.656 4.844 -0.656 C 4.841 -0.656 4.838 -0.656 4.835 -0.656 C 4.832 -0.656 4.829 -0.656 4.826 -0.656 C 4.823 -0.656 4.82 -0.656 4.817 -0.656 C 4.815 -0.656 4.812 -0.656 4.809 -0.656 C 4.806 -0.656 4.803 -0.656 4.8 -0.656 C 4.797 -0.656 4.794 -0.656 4.791 -0.656 C 4.788 -0.656 4.785 -0.656 4.782 -0.656 C 4.779 -0.656 4.776 -0.656 4.773 -0.656 C 4.77 -0.656 4.767 -0.656 4.764 -0.656 C 4.761 -0.656 4.758 -0.656 4.755 -0.656 C 4.752 -0.656 4.749 -0.656 4.746 -0.656 C 4.743 -0.656 4.74 -0.656 4.737 -0.656 C 4.734 -0.656 4.731 -0.656 4.729 -0.656 C 4.726 -0.656 4.723 -0.656 4.72 -0.656 C 4.717 -0.656 4.714 -0.656 4.711 -0.656 C 4.708 -0.656 4.705 -0.656 4.702 -0.656 C 4.699 -0.656 4.696 -0.656 4.693 -0.656 C 4.69 -0.656 4.687 -0.656 4.684 -0.656 C 4.681 -0.656 4.678 -0.656 4.675 -0.656 C 4.672 -0.656 4.668 -0.656 4.665 -0.656 C 4.662 -0.656 4.659 -0.656 4.656 -0.656 C 4.653 -0.656 4.65 -0.656 4.647 -0.656 C 4.644 -0.656 4.641 -0.656 4.638 -0.656 C 4.635 -0.656 4.632 -0.656 4.629 -0.656 C 4.626 -0.656 4.623 -0.656 4.62 -0.656 C 4.617 -0.656 4.614 -0.656 4.611 -0.656 C 4.608 -0.656 4.605 -0.656 4.602 -0.656 C 4.599 -0.656 4.596 -0.656 4.593 -0.656 C 4.59 -0.656 4.587 -0.656 4.584 -0.656 C 4.581 -0.656 4.577 -0.656 4.574 -0.656 C 4.571 -0.656 4.568 -0.656 4.565 -0.656 C 4.562 -0.656 4.559 -0.656 4.556 -0.656 C 4.553 -0.656 4.55 -0.656 4.547 -0.656 C 4.544 -0.656 4.541 -0.656 4.538 -0.656 C 4.535 -0.656 4.531 -0.656 4.528 -0.656 C 4.525 -0.656 4.522 -0.656 4.519 -0.656 C 4.516 -0.656 4.513 -0.656 4.51 -0.656 C 4.507 -0.656 4.504 -0.656 4.501 -0.656 C 4.498 -0.656 4.495 -0.656 4.491 -0.656 C 4.488 -0.656 4.485 -0.656 4.482 -0.656 C 4.479 -0.656 4.476 -0.656 4.473 -0.656 C 4.47 -0.656 4.467 -0.656 4.464 -0.656 C 4.46 -0.656 4.457 -0.656 4.454 -0.656 C 4.451 -0.656 4.448 -0.656 4.445 -0.656 C 4.442 -0.656 4.439 -0.656 4.436 -0.656 C 4.432 -0.656 4.429 -0.656 4.426 -0.656 C 4.423 -0.656 4.42 -0.656 4.417 -0.656 C 4.414 -0.656 4.411 -0.656 4.408 -0.656 C 4.404 -0.656 4.401 -0.656 4.398 -0.656 C 4.395 -0.656 4.392 -0.656 4.389 -0.656 C 4.386 -0.656 4.383 -0.656 4.379 -0.656 C 4.376 -0.656 4.373 -0.656 4.37 -0.656 C 4.367 -0.656 4.364 -0.656 4.361 -0.656 C 4.357 -0.656 4.354 -0.656 4.351 -0.656 C 4.348 -0.656 4.345 -0.656 4.342 -0.656 C 4.339 -0.656 4.335 -0.656 4.332 -0.656 C 4.329 -0.656 4.326 -0.656 4.323 -0.656 C 4.32 -0.656 4.317 -0.656 4.313 -0.656 C 4.31 -0.656 4.307 -0.656 4.304 -0.656 C 4.301 -0.656 4.298 -0.656 4.294 -0.656 C 4.291 -0.656 4.288 -0.656 4.285 -0.656 C 4.282 -0.656 4.279 -0.656 4.275 -0.656 C 4.272 -0.656 4.269 -0.656 4.266 -0.656 C 4.263 -0.656 4.26 -0.656 4.256 -0.656 C 4.253 -0.656 4.25 -0.656 4.247 -0.656 C 4.244 -0.656 4.24 -0.656 4.237 -0.656 C 4.234 -0.656 4.231 -0.656 4.228 -0.656 C 4.225 -0.656 4.221 -0.656 4.218 -0.656 C 4.215 -0.656 4.212 -0.656 4.209 -0.656 C 4.205 -0.656 4.202 -0.656 4.199 -0.656 C 4.196 -0.656 4.193 -0.656 4.189 -0.656 C 4.186 -0.656 4.183 -0.656 4.18 -0.656 C 4.177 -0.656 4.173 -0.656 4.17 -0.656 C 4.167 -0.656 4.164 -0.656 4.161 -0.656 C 4.157 -0.656 4.154 -0.656 4.151 -0.656 C 4.148 -0.656 4.145 -0.656 4.141 -0.656 C 4.138 -0.656 4.135 -0.656 4.132 -0.656 C 4.128 -0.656 4.125 -0.656 4.122 -0.656 C 4.119 -0.656 4.116 -0.656 4.112 -0.656 C 4.109 -0.656 4.106 -0.656 4.103 -0.656 C 4.099 -0.656 4.096 -0.656 4.093 -0.656 C 4.09 -0.656 4.087 -0.656 4.083 -0.656 C 4.08 -0.656 4.077 -0.656 4.074 -0.656 C 4.07 -0.656 4.067 -0.656 4.064 -0.656 C 4.061 -0.656 4.057 -0.656 4.054 -0.656 C 4.051 -0.656 4.048 -0.656 4.044 -0.656 C 4.041 -0.656 4.038 -0.656 4.035 -0.656 C 4.031 -0.656 4.028 -0.656 4.025 -0.656 C 4.022 -0.656 4.018 -0.656 4.015 -0.656 C 4.012 -0.656 4.009 -0.656 4.005 -0.656 C 4.002 -0.656 3.999 -0.656 3.996 -0.656 C 3.992 -0.656 3.989 -0.656 3.986 -0.656 C 3.983 -0.656 3.979 -0.656 3.976 -0.656 C 3.973 -0.656 3.97 -0.656 3.966 -0.656 C 3.963 -0.656 3.96 -0.656 3.957 -0.656 C 3.953 -0.656 3.95 -0.656 3.947 -0.656 C 3.943 -0.656 3.94 -0.656 3.937 -0.656 C 3.934 -0.656 3.93 -0.656 3.927 -0.656 C 3.924 -0.656 3.921 -0.656 3.917 -0.656 C 3.914 -0.656 3.911 -0.656 3.907 -0.656 C 3.904 -0.656 3.901 -0.656 3.898 -0.656 C 3.894 -0.656 3.891 -0.656 3.888 -0.656 C 3.884 -0.656 3.881 -0.656 3.878 -0.656 C 3.875 -0.656 3.871 -0.656 3.868 -0.656 C 3.865 -0.656 3.861 -0.656 3.858 -0.656 C 3.855 -0.656 3.852 -0.656 3.848 -0.656 C 3.845 -0.656 3.842 -0.656 3.838 -0.656 C 3.835 -0.656 3.832 -0.656 3.828 -0.656 C 3.825 -0.656 3.822 -0.656 3.819 -0.656 C 3.815 -0.656 3.812 -0.656 3.809 -0.656 C 3.805 -0.656 3.802 -0.656 3.799 -0.656 C 3.795 -0.656 3.792 -0.656 3.789 -0.656 C 3.785 -0.656 3.782 -0.656 3.779 -0.656 C 3.775 -0.656 3.772 -0.656 3.769 -0.656 C 3.766 -0.656 3.762 -0.656 3.759 -0.656 C 3.756 -0.656 3.752 -0.656 3.749 -0.656 C 3.746 -0.656 3.742 -0.656 3.739 -0.656 C 3.736 -0.656 3.732 -0.656 3.729 -0.656 C 3.726 -0.656 3.722 -0.656 3.719 -0.656 C 3.716 -0.656 3.712 -0.656 3.709 -0.656 C 3.706 -0.656 3.702 -0.656 3.699 -0.656 C 3.696 -0.656 3.692 -0.656 3.689 -0.656 C 3.686 -0.656 3.682 -0.656 3.679 -0.656 C 3.676 -0.656 3.672 -0.656 3.669 -0.656 C 3.666 -0.656 3.662 -0.656 3.659 -0.656 C 3.656 -0.656 3.652 -0.656 3.649 -0.656 C 3.646 -0.656 3.642 -0.656 3.639 -0.656 C 3.636 -0.656 3.632 -0.656 3.629 -0.656 C 3.626 -0.656 3.622 -0.656 3.619 -0.656 C 3.616 -0.656 3.612 -0.656 3.609 -0.656 C 3.606 -0.656 3.602 -0.656 3.599 -0.656 C 3.595 -0.656 3.592 -0.656 3.589 -0.656 C 3.585 -0.656 3.582 -0.656 3.579 -0.656 C 3.575 -0.656 3.572 -0.656 3.569 -0.656 C 3.565 -0.656 3.562 -0.656 3.559 -0.656 C 3.555 -0.656 3.552 -0.656 3.548 -0.656 C 3.545 -0.656 3.542 -0.656 3.538 -0.656 C 3.535 -0.656 3.532 -0.656 3.528 -0.656 C 3.525 -0.656 3.522 -0.656 3.518 -0.656 C 3.515 -0.656 3.511 -0.656 3.508 -0.656 C 3.505 -0.656 3.501 -0.656 3.498 -0.656 C 3.495 -0.656 3.491 -0.656 3.488 -0.656 C 3.484 -0.656 3.481 -0.656 3.478 -0.656 C 3.474 -0.656 3.471 -0.656 3.468 -0.656 C 3.464 -0.656 3.461 -0.656 3.457 -0.656 C 3.454 -0.656 3.451 -0.656 3.447 -0.656 C 3.444 -0.656 3.441 -0.656 3.437 -0.656 C 3.434 -0.656 3.43 -0.656 3.427 -0.656 C 3.424 -0.656 3.42 -0.656 3.417 -0.656 C 3.414 -0.656 3.41 -0.656 3.407 -0.656 C 3.403 -0.656 3.4 -0.656 3.397 -0.656 C 3.393 -0.656 3.39 -0.656 3.386 -0.656 C 3.383 -0.656 3.38 -0.656 3.376 -0.656 C 3.373 -0.656 3.369 -0.656 3.366 -0.656 C 3.363 -0.656 3.359 -0.656 3.356 -0.656 C 3.352 -0.656 3.349 -0.656 3.346 -0.656 C 3.342 -0.656 3.339 -0.656 3.336 -0.656 C 3.332 -0.656 3.329 -0.656 3.325 -0.656 C 3.322 -0.656 3.319 -0.656 3.315 -0.656 C 3.312 -0.656 3.308 -0.656 3.305 -0.656 C 3.302 -0.656 3.298 -0.656 3.295 -0.656 C 3.291 -0.656 3.288 -0.656 3.284 -0.656 C 3.281 -0.656 3.278 -0.656 3.274 -0.656 C 3.271 -0.656 3.267 -0.656 3.264 -0.656 C 3.261 -0.656 3.257 -0.656 3.254 -0.656 C 3.25 -0.656 3.247 -0.656 3.244 -0.656 C 3.24 -0.656 3.237 -0.656 3.233 -0.656 C 3.23 -0.656 3.227 -0.656 3.223 -0.656 C 3.22 -0.656 3.216 -0.656 3.213 -0.656 C 3.209 -0.656 3.206 -0.656 3.203 -0.656 C 3.199 -0.656 3.196 -0.656 3.192 -0.656 C 3.189 -0.656 3.186 -0.656 3.182 -0.656 C 3.179 -0.656 3.175 -0.656 3.172 -0.656 C 3.168 -0.656 3.165 -0.656 3.162 -0.656 C 3.158 -0.656 3.155 -0.656 3.151 -0.656 C 3.148 -0.656 3.145 -0.656 3.141 -0.656 C 3.138 -0.656 3.134 -0.656 3.131 -0.656 C 3.127 -0.656 3.124 -0.656 3.121 -0.656 C 3.117 -0.656 3.114 -0.656 3.11 -0.656 C 3.107 -0.656 3.103 -0.656 3.1 -0.656 C 3.097 -0.656 3.093 -0.656 3.09 -0.656 C 3.086 -0.656 3.083 -0.656 3.079 -0.656 C 3.076 -0.656 3.073 -0.656 3.069 -0.656 C 3.066 -0.656 3.062 -0.656 3.059 -0.656 C 3.055 -0.656 3.052 -0.656 3.049 -0.656 C 3.045 -0.656 3.042 -0.656 3.038 -0.656 C 3.035 -0.656 3.031 -0.656 3.028 -0.656 C 3.025 -0.656 3.021 -0.656 3.018 -0.656 C 3.014 -0.656 3.011 -0.656 3.007 -0.656 C 3.004 -0.656 3 -0.656 2.997 -0.656 C 2.994 -0.656 2.99 -0.656 2.987 -0.656 C 2.983 -0.656 2.98 -0.656 2.976 -0.656 C 2.973 -0.656 2.97 -0.656 2.966 -0.656 C 2.963 -0.656 2.959 -0.656 2.956 -0.656 C 2.952 -0.656 2.949 -0.656 2.945 -0.656 C 2.942 -0.656 2.939 -0.656 2.935 -0.656 C 2.932 -0.656 2.928 -0.656 2.925 -0.656 C 2.921 -0.656 2.918 -0.656 2.914 -0.656 C 2.911 -0.656 2.908 -0.656 2.904 -0.656 C 2.901 -0.656 2.897 -0.656 2.894 -0.656 C 2.89 -0.656 2.887 -0.656 2.883 -0.656 C 2.88 -0.656 2.877 -0.656 2.873 -0.656 C 2.87 -0.656 2.866 -0.656 2.863 -0.656 C 2.859 -0.656 2.856 -0.656 2.852 -0.656 C 2.849 -0.656 2.846 -0.656 2.842 -0.656 C 2.839 -0.656 2.835 -0.656 2.832 -0.656 C 2.828 -0.656 2.825 -0.656 2.821 -0.656 C 2.818 -0.656 2.814 -0.656 2.811 -0.656 C 2.808 -0.656 2.804 -0.656 2.801 -0.656 C 2.797 -0.656 2.794 -0.656 2.79 -0.656 C 2.787 -0.656 2.783 -0.656 2.78 -0.656 C 2.777 -0.656 2.773 -0.656 2.77 -0.656 C 2.766 -0.656 2.763 -0.656 2.759 -0.656 C 2.756 -0.656 2.752 -0.656 2.749 -0.656 C 2.745 -0.656 2.742 -0.656 2.739 -0.656 C 2.735 -0.656 2.732 -0.656 2.728 -0.656 C 2.725 -0.656 2.721 -0.656 2.718 -0.656 C 2.714 -0.656 2.711 -0.656 2.707 -0.656 C 2.704 -0.656 2.701 -0.656 2.697 -0.656 C 2.694 -0.656 2.69 -0.656 2.687 -0.656 C 2.683 -0.656 2.68 -0.656 2.676 -0.656 C 2.673 -0.656 2.669 -0.656 2.666 -0.656 C 2.663 -0.656 2.659 -0.656 2.656 -0.656 C 2.652 -0.656 2.649 -0.656 2.645 -0.656 C 2.642 -0.656 2.638 -0.656 2.635 -0.656 C 2.631 -0.656 2.628 -0.656 2.624 -0.656 C 2.621 -0.656 2.618 -0.656 2.614 -0.656 C 2.611 -0.656 2.607 -0.656 2.604 -0.656 C 2.6 -0.656 2.597 -0.656 2.593 -0.656 C 2.59 -0.656 2.586 -0.656 2.583 -0.656 C 2.58 -0.656 2.576 -0.656 2.573 -0.656 C 2.569 -0.656 2.566 -0.656 2.562 -0.656 C 2.559 -0.656 2.555 -0.656 2.552 -0.656 C 2.548 -0.656 2.545 -0.656 2.542 -0.656 C 2.538 -0.656 2.535 -0.656 2.531 -0.656 C 2.528 -0.656 2.524 -0.656 2.521 -0.656 C 2.517 -0.656 2.514 -0.656 2.51 -0.656 C 2.507 -0.656 2.503 -0.656 2.5 -0.656 C 2.497 -0.656 2.493 -0.656 2.49 -0.656 C 2.486 -0.656 2.483 -0.656 2.479 -0.656 C 2.476 -0.656 2.472 -0.656 2.469 -0.656 C 2.465 -0.656 2.462 -0.656 2.458 -0.656 C 2.455 -0.656 2.452 -0.656 2.448 -0.656 C 2.445 -0.656 2.441 -0.656 2.438 -0.656 C 2.434 -0.656 2.431 -0.656 2.427 -0.656 C 2.424 -0.656 2.42 -0.656 2.417 -0.656 C 2.414 -0.656 2.41 -0.656 2.407 -0.656 C 2.403 -0.656 2.4 -0.656 2.396 -0.656 C 2.393 -0.656 2.389 -0.656 2.386 -0.656 C 2.382 -0.656 2.379 -0.656 2.376 -0.656 C 2.372 -0.656 2.369 -0.656 2.365 -0.656 C 2.362 -0.656 2.358 -0.656 2.355 -0.656 C 2.351 -0.656 2.348 -0.656 2.344 -0.656 C 2.341 -0.656 2.337 -0.656 2.334 -0.656 C 2.331 -0.656 2.327 -0.656 2.324 -0.656 C 2.32 -0.656 2.317 -0.656 2.313 -0.656 C 2.31 -0.656 2.306 -0.656 2.303 -0.656 C 2.299 -0.656 2.296 -0.656 2.293 -0.656 C 2.289 -0.656 2.286 -0.656 2.282 -0.656 C 2.279 -0.656 2.275 -0.656 2.272 -0.656 C 2.268 -0.656 2.265 -0.656 2.261 -0.656 C 2.258 -0.656 2.255 -0.656 2.251 -0.656 C 2.248 -0.656 2.244 -0.656 2.241 -0.656 C 2.237 -0.656 2.234 -0.656 2.23 -0.656 C 2.227 -0.656 2.223 -0.656 2.22 -0.656 C 2.217 -0.656 2.213 -0.656 2.21 -0.656 C 2.206 -0.656 2.203 -0.656 2.199 -0.656 C 2.196 -0.656 2.192 -0.656 2.189 -0.656 C 2.186 -0.656 2.182 -0.656 2.179 -0.656 C 2.175 -0.656 2.172 -0.656 2.168 -0.656 C 2.165 -0.656 2.161 -0.656 2.158 -0.656 C 2.154 -0.656 2.151 -0.656 2.148 -0.656 C 2.144 -0.656 2.141 -0.656 2.137 -0.656 C 2.134 -0.656 2.13 -0.656 2.127 -0.656 C 2.123 -0.656 2.12 -0.656 2.117 -0.656 C 2.113 -0.656 2.11 -0.656 2.106 -0.656 C 2.103 -0.656 2.099 -0.656 2.096 -0.656 C 2.092 -0.656 2.089 -0.656 2.086 -0.656 C 2.082 -0.656 2.079 -0.656 2.075 -0.656 C 2.072 -0.656 2.068 -0.656 2.065 -0.656 C 2.061 -0.656 2.058 -0.656 2.055 -0.656 C 2.051 -0.656 2.048 -0.656 2.044 -0.656 C 2.041 -0.656 2.037 -0.656 2.034 -0.656 C 2.03 -0.656 2.027 -0.656 2.024 -0.656 C 2.02 -0.656 2.017 -0.656 2.013 -0.656 C 2.01 -0.656 2.006 -0.656 2.003 -0.656 C 2 -0.656 1.996 -0.656 1.993 -0.656 C 1.989 -0.656 1.986 -0.656 1.982 -0.656 C 1.979 -0.656 1.975 -0.656 1.972 -0.656 C 1.969 -0.656 1.965 -0.656 1.962 -0.656 C 1.958 -0.656 1.955 -0.656 1.951 -0.656 C 1.948 -0.656 1.945 -0.656 1.941 -0.656 C 1.938 -0.656 1.934 -0.656 1.931 -0.656 C 1.927 -0.656 1.924 -0.656 1.921 -0.656 C 1.917 -0.656 1.914 -0.656 1.91 -0.656 C 1.907 -0.656 1.903 -0.656 1.9 -0.656 C 1.897 -0.656 1.893 -0.656 1.89 -0.656 C 1.886 -0.656 1.883 -0.656 1.879 -0.656 C 1.876 -0.656 1.873 -0.656 1.869 -0.656 C 1.866 -0.656 1.862 -0.656 1.859 -0.656 C 1.855 -0.656 1.852 -0.656 1.849 -0.656 C 1.845 -0.656 1.842 -0.656 1.838 -0.656 C 1.835 -0.656 1.832 -0.656 1.828 -0.656 C 1.825 -0.656 1.821 -0.656 1.818 -0.656 C 1.814 -0.656 1.811 -0.656 1.808 -0.656 C 1.804 -0.656 1.801 -0.656 1.797 -0.656 C 1.794 -0.656 1.791 -0.656 1.787 -0.656 C 1.784 -0.656 1.78 -0.656 1.777 -0.656 C 1.773 -0.656 1.77 -0.656 1.767 -0.656 C 1.763 -0.656 1.76 -0.656 1.756 -0.656 C 1.753 -0.656 1.75 -0.656 1.746 -0.656 C 1.743 -0.656 1.739 -0.656 1.736 -0.656 C 1.733 -0.656 1.729 -0.656 1.726 -0.656 C 1.722 -0.656 1.719 -0.656 1.716 -0.656 C 1.712 -0.656 1.709 -0.656 1.705 -0.656 C 1.702 -0.656 1.698 -0.656 1.695 -0.656 C 1.692 -0.656 1.688 -0.656 1.685 -0.656 C 1.681 -0.656 1.678 -0.656 1.675 -0.656 C 1.671 -0.656 1.668 -0.656 1.664 -0.656 C 1.661 -0.656 1.658 -0.656 1.654 -0.656 C 1.651 -0.656 1.648 -0.656 1.644 -0.656 C 1.641 -0.656 1.637 -0.656 1.634 -0.656 C 1.631 -0.656 1.627 -0.656 1.624 -0.656 C 1.62 -0.656 1.617 -0.656 1.614 -0.656 C 1.61 -0.656 1.607 -0.656 1.603 -0.656 C 1.6 -0.656 1.597 -0.656 1.593 -0.656 C 1.59 -0.656 1.586 -0.656 1.583 -0.656 C 1.58 -0.656 1.576 -0.656 1.573 -0.656 C 1.57 -0.656 1.566 -0.656 1.563 -0.656 C 1.559 -0.656 1.556 -0.656 1.553 -0.656 C 1.549 -0.656 1.546 -0.656 1.543 -0.656 C 1.539 -0.656 1.536 -0.656 1.532 -0.656 C 1.529 -0.656 1.526 -0.656 1.522 -0.656 C 1.519 -0.656 1.516 -0.656 1.512 -0.656 C 1.509 -0.656 1.505 -0.656 1.502 -0.656 C 1.499 -0.656 1.495 -0.656 1.492 -0.656 C 1.489 -0.656 1.485 -0.656 1.482 -0.656 C 1.478 -0.656 1.475 -0.656 1.472 -0.656 C 1.468 -0.656 1.465 -0.656 1.462 -0.656 C 1.458 -0.656 1.455 -0.656 1.452 -0.656 C 1.448 -0.656 1.445 -0.656 1.441 -0.656 C 1.438 -0.656 1.435 -0.656 1.431 -0.656 C 1.428 -0.656 1.425 -0.656 1.421 -0.656 C 1.418 -0.656 1.415 -0.656 1.411 -0.656 C 1.408 -0.656 1.405 -0.656 1.401 -0.656 C 1.398 -0.656 1.394 -0.656 1.391 -0.656 C 1.388 -0.656 1.384 -0.656 1.381 -0.656 C 1.378 -0.656 1.374 -0.656 1.371 -0.656 C 1.368 -0.656 1.364 -0.656 1.361 -0.656 C 1.358 -0.656 1.354 -0.656 1.351 -0.656 C 1.348 -0.656 1.344 -0.656 1.341 -0.656 C 1.338 -0.656 1.334 -0.656 1.331 -0.656 C 1.328 -0.656 1.324 -0.656 1.321 -0.656 C 1.318 -0.656 1.314 -0.656 1.311 -0.656 C 1.308 -0.656 1.304 -0.656 1.301 -0.656 C 1.298 -0.656 1.294 -0.656 1.291 -0.656 C 1.288 -0.656 1.284 -0.656 1.281 -0.656 C 1.278 -0.656 1.274 -0.656 1.271 -0.656 C 1.268 -0.656 1.264 -0.656 1.261 -0.656 C 1.258 -0.656 1.254 -0.656 1.251 -0.656 C 1.248 -0.656 1.244 -0.656 1.241 -0.656 C 1.238 -0.656 1.234 -0.656 1.231 -0.656 C 1.228 -0.656 1.225 -0.656 1.221 -0.656 C 1.218 -0.656 1.215 -0.656 1.211 -0.656 C 1.208 -0.656 1.205 -0.656 1.201 -0.656 C 1.198 -0.656 1.195 -0.656 1.191 -0.656 C 1.188 -0.656 1.185 -0.656 1.181 -0.656 C 1.178 -0.656 1.175 -0.656 1.172 -0.656 C 1.168 -0.656 1.165 -0.656 1.162 -0.656 C 1.158 -0.656 1.155 -0.656 1.152 -0.656 C 1.148 -0.656 1.145 -0.656 1.142 -0.656 C 1.139 -0.656 1.135 -0.656 1.132 -0.656 C 1.129 -0.656 1.125 -0.656 1.122 -0.656 C 1.119 -0.656 1.116 -0.656 1.112 -0.656 C 1.109 -0.656 1.106 -0.656 1.102 -0.656 C 1.099 -0.656 1.096 -0.656 1.093 -0.656 C 1.089 -0.656 1.086 -0.656 1.083 -0.656 C 1.079 -0.656 1.076 -0.656 1.073 -0.656 C 1.07 -0.656 1.066 -0.656 1.063 -0.656 C 1.06 -0.656 1.057 -0.656 1.053 -0.656 C 1.05 -0.656 1.047 -0.656 1.043 -0.656 C 1.04 -0.656 1.037 -0.656 1.034 -0.656 C 1.03 -0.656 1.027 -0.656 1.024 -0.656 C 1.021 -0.656 1.017 -0.656 1.014 -0.656 C 1.011 -0.656 1.008 -0.656 1.004 -0.656 C 1.001 -0.656 0.998 -0.656 0.995 -0.656 C 0.991 -0.656 0.988 -0.656 0.985 -0.656 C 0.982 -0.656 0.978 -0.656 0.975 -0.656 C 0.972 -0.656 0.969 -0.656 0.965 -0.656 C 0.962 -0.656 0.959 -0.656 0.956 -0.656 C 0.952 -0.656 0.949 -0.656 0.946 -0.656 C 0.943 -0.656 0.939 -0.656 0.936 -0.656 C 0.933 -0.656 0.93 -0.656 0.926 -0.656 C 0.923 -0.656 0.92 -0.656 0.917 -0.656 C 0.913 -0.656 0.91 -0.656 0.907 -0.656 C 0.904 -0.656 0.901 -0.656 0.897 -0.656 C 0.894 -0.656 0.891 -0.656 0.888 -0.656 C 0.884 -0.656 0.881 -0.656 0.878 -0.656 C 0.875 -0.656 0.872 -0.656 0.868 -0.656 C 0.865 -0.656 0.862 -0.656 0.859 -0.656 C 0.855 -0.656 0.852 -0.656 0.849 -0.656 C 0.846 -0.656 0.843 -0.656 0.839 -0.656 C 0.836 -0.656 0.833 -0.656 0.83 -0.656 C 0.827 -0.656 0.823 -0.656 0.82 -0.656 C 0.817 -0.656 0.814 -0.656 0.811 -0.656 C 0.807 -0.656 0.804 -0.656 0.801 -0.656 C 0.798 -0.656 0.795 -0.656 0.791 -0.656 C 0.788 -0.656 0.785 -0.656 0.782 -0.656 C 0.779 -0.656 0.775 -0.656 0.772 -0.656 C 0.769 -0.656 0.766 -0.656 0.763 -0.656 C 0.76 -0.656 0.756 -0.656 0.753 -0.656 C 0.75 -0.656 0.747 -0.656 0.744 -0.656 C 0.74 -0.656 0.737 -0.656 0.734 -0.656 C 0.731 -0.656 0.728 -0.656 0.725 -0.656 C 0.721 -0.656 0.718 -0.656 0.715 -0.656 C 0.712 -0.656 0.709 -0.656 0.706 -0.656 C 0.702 -0.656 0.699 -0.656 0.696 -0.656 C 0.693 -0.656 0.69 -0.656 0.687 -0.656 C 0.683 -0.656 0.68 -0.656 0.677 -0.656 C 0.674 -0.656 0.671 -0.656 0.668 -0.656 C 0.665 -0.656 0.661 -0.656 0.658 -0.656 C 0.655 -0.656 0.652 -0.656 0.649 -0.656 C 0.646 -0.656 0.643 -0.656 0.639 -0.656 C 0.636 -0.656 0.633 -0.656 0.63 -0.656 C 0.627 -0.656 0.624 -0.656 0.621 -0.656 C 0.617 -0.656 0.614 -0.656 0.611 -0.656 C 0.608 -0.656 0.605 -0.656 0.602 -0.656 C 0.599 -0.656 0.596 -0.656 0.592 -0.656 C 0.589 -0.656 0.586 -0.656 0.583 -0.656 C 0.58 -0.656 0.577 -0.656 0.574 -0.656 C 0.571 -0.656 0.568 -0.656 0.564 -0.656 C 0.561 -0.656 0.558 -0.656 0.555 -0.656 C 0.552 -0.656 0.549 -0.656 0.546 -0.656 C 0.543 -0.656 0.54 -0.656 0.536 -0.656 C 0.533 -0.656 0.53 -0.656 0.527 -0.656 C 0.524 -0.656 0.521 -0.656 0.518 -0.656 C 0.515 -0.656 0.512 -0.656 0.509 -0.656 C 0.505 -0.656 0.502 -0.656 0.499 -0.656 C 0.496 -0.656 0.493 -0.656 0.49 -0.656 C 0.487 -0.656 0.484 -0.656 0.481 -0.656 C 0.478 -0.656 0.475 -0.656 0.472 -0.656 C 0.469 -0.656 0.465 -0.656 0.462 -0.656 C 0.459 -0.656 0.456 -0.656 0.453 -0.656 C 0.45 -0.656 0.447 -0.656 0.444 -0.656 C 0.441 -0.656 0.438 -0.656 0.435 -0.656 C 0.432 -0.656 0.429 -0.656 0.426 -0.656 C 0.423 -0.656 0.419 -0.656 0.416 -0.656 C 0.413 -0.656 0.41 -0.656 0.407 -0.656 C 0.404 -0.656 0.401 -0.656 0.398 -0.656 C 0.395 -0.656 0.392 -0.656 0.389 -0.656 C 0.386 -0.656 0.383 -0.656 0.38 -0.656 C 0.377 -0.656 0.374 -0.656 0.371 -0.656 C 0.368 -0.656 0.365 -0.656 0.362 -0.656 C 0.359 -0.656 0.356 -0.656 0.353 -0.656 C 0.35 -0.656 0.347 -0.656 0.344 -0.656 C 0.341 -0.656 0.338 -0.656 0.335 -0.656 C 0.332 -0.656 0.328 -0.656 0.325 -0.656 C 0.322 -0.656 0.319 -0.656 0.316 -0.656 C 0.313 -0.656 0.31 -0.656 0.307 -0.656 C 0.304 -0.656 0.301 -0.656 0.298 -0.656 C 0.295 -0.656 0.292 -0.656 0.289 -0.656 C 0.286 -0.656 0.283 -0.656 0.28 -0.656 C 0.277 -0.656 0.274 -0.656 0.271 -0.656 C 0.269 -0.656 0.266 -0.656 0.263 -0.656 C 0.26 -0.656 0.257 -0.656 0.254 -0.656 C 0.251 -0.656 0.248 -0.656 0.245 -0.656 C 0.242 -0.656 0.239 -0.656 0.236 -0.656 C 0.233 -0.656 0.23 -0.656 0.227 -0.656 C 0.224 -0.656 0.221 -0.656 0.218 -0.656 C 0.215 -0.656 0.212 -0.656 0.209 -0.656 C 0.206 -0.656 0.203 -0.656 0.2 -0.656 C 0.197 -0.656 0.194 -0.656 0.191 -0.656 C 0.188 -0.656 0.185 -0.656 0.183 -0.656 C 0.18 -0.656 0.177 -0.656 0.174 -0.656 C 0.171 -0.656 0.168 -0.656 0.165 -0.656 C 0.162 -0.656 0.159 -0.656 0.156 -0.656 C 0.153 -0.656 0.15 -0.656 0.147 -0.656 C 0.144 -0.656 0.141 -0.656 0.139 -0.656 C 0.136 -0.656 0.133 -0.656 0.13 -0.656 C 0.127 -0.656 0.124 -0.656 0.121 -0.656 C 0.118 -0.656 0.115 -0.656 0.112 -0.656 C 0.109 -0.656 0.106 -0.656 0.104 -0.656 C 0.101 -0.656 0.098 -0.656 0.095 -0.656 C 0.092 -0.656 0.089 -0.656 0.086 -0.656 C 0.083 -0.656 0.08 -0.656 0.077 -0.656 C 0.075 -0.656 0.072 -0.656 0.069 -0.656 C 0.066 -0.656 0.063 -0.656 0.06 -0.656 C 0.057 -0.656 0.054 -0.656 0.052 -0.656 C 0.049 -0.656 0.046 -0.656 0.043 -0.656 C 0.04 -0.656 0.037 -0.656 0.034 -0.656 C 0.031 -0.656 0.029 -0.656 0.026 -0.656 C 0.023 -0.656 0.02 -0.656 0.017 -0.656 C 0.014 -0.656 0.011 -0.656 0.009 -0.656 C 0.006 -0.656 0.003 -0.656 0 -0.656 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      opacity: 0.3,
      borderRadius: 7500,
      backgroundColor: "rgb(0,47,185)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.754,
      top: 3.75,
      width: 16.5,
      height: 16.5
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.500,
    height: 16.500,
    viewBox: "0 0 16.500 16.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 16.5,
      height: 16.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.496 6.375 C 7.496 6.789 7.832 7.125 8.246 7.125 C 8.66 7.125 8.996 6.789 8.996 6.375 L 8.246 6.375 L 7.496 6.375 Z M 8.996 0 C 8.996 -0.414 8.66 -0.75 8.246 -0.75 C 7.832 -0.75 7.496 -0.414 7.496 0 L 8.246 0 L 8.996 0 Z M 7.496 16.5 C 7.496 16.914 7.832 17.25 8.246 17.25 C 8.66 17.25 8.996 16.914 8.996 16.5 L 8.246 16.5 L 7.496 16.5 Z M 8.996 10.125 C 8.996 9.711 8.66 9.375 8.246 9.375 C 7.832 9.375 7.496 9.711 7.496 10.125 L 8.246 10.125 L 8.996 10.125 Z M 9.043 6.391 C 8.75 6.684 8.75 7.159 9.043 7.452 C 9.336 7.745 9.811 7.745 10.104 7.452 L 9.573 6.922 L 9.043 6.391 Z M 14.611 2.944 C 14.904 2.651 14.904 2.176 14.611 1.883 C 14.318 1.59 13.844 1.59 13.551 1.883 L 14.081 2.414 L 14.611 2.944 Z M 1.883 13.551 C 1.591 13.844 1.591 14.318 1.883 14.611 C 2.176 14.904 2.651 14.904 2.944 14.611 L 2.414 14.081 L 1.883 13.551 Z M 7.452 10.104 C 7.745 9.811 7.745 9.336 7.452 9.043 C 7.159 8.75 6.684 8.75 6.391 9.043 L 6.922 9.573 L 7.452 10.104 Z M 10.125 7.496 C 9.711 7.496 9.375 7.832 9.375 8.246 C 9.375 8.66 9.711 8.996 10.125 8.996 L 10.125 8.246 L 10.125 7.496 Z M 16.5 8.996 C 16.914 8.996 17.25 8.66 17.25 8.246 C 17.25 7.832 16.914 7.496 16.5 7.496 L 16.5 8.246 L 16.5 8.996 Z M 0 7.496 C -0.414 7.496 -0.75 7.832 -0.75 8.246 C -0.75 8.66 -0.414 8.996 0 8.996 L 0 8.246 L 0 7.496 Z M 6.375 8.996 C 6.789 8.996 7.125 8.66 7.125 8.246 C 7.125 7.832 6.789 7.496 6.375 7.496 L 6.375 8.246 L 6.375 8.996 Z M 10.109 9.043 C 9.816 8.75 9.341 8.75 9.048 9.043 C 8.755 9.336 8.755 9.811 9.048 10.104 L 9.578 9.573 L 10.109 9.043 Z M 13.556 14.611 C 13.849 14.904 14.324 14.904 14.617 14.611 C 14.91 14.318 14.91 13.844 14.617 13.551 L 14.086 14.081 L 13.556 14.611 Z M 2.949 1.883 C 2.656 1.591 2.182 1.591 1.889 1.883 C 1.596 2.176 1.596 2.651 1.889 2.944 L 2.419 2.414 L 2.949 1.883 Z M 6.397 7.452 C 6.689 7.745 7.164 7.745 7.457 7.452 C 7.75 7.159 7.75 6.684 7.457 6.391 L 6.927 6.922 L 6.397 7.452 Z M 14.357 8.25 L 13.607 8.25 C 13.607 11.211 11.207 13.611 8.246 13.611 L 8.246 14.361 L 8.246 15.111 C 12.035 15.111 15.107 12.039 15.107 8.25 L 14.357 8.25 Z M 8.246 14.361 L 8.246 13.611 C 5.285 13.611 2.885 11.211 2.885 8.25 L 2.135 8.25 L 1.385 8.25 C 1.385 12.039 4.457 15.111 8.246 15.111 L 8.246 14.361 Z M 2.135 8.25 L 2.885 8.25 C 2.885 5.289 5.285 2.889 8.246 2.889 L 8.246 2.139 L 8.246 1.389 C 4.457 1.389 1.385 4.461 1.385 8.25 L 2.135 8.25 Z M 8.246 2.139 L 8.246 2.889 C 11.207 2.889 13.607 5.289 13.607 8.25 L 14.357 8.25 L 15.107 8.25 C 15.107 4.461 12.035 1.389 8.246 1.389 L 8.246 2.139 Z M 8.246 6.375 L 8.996 6.375 L 8.996 0 L 8.246 0 L 7.496 0 L 7.496 6.375 L 8.246 6.375 Z M 8.246 16.5 L 8.996 16.5 L 8.996 10.125 L 8.246 10.125 L 7.496 10.125 L 7.496 16.5 L 8.246 16.5 Z M 9.573 6.922 L 10.104 7.452 L 14.611 2.944 L 14.081 2.414 L 13.551 1.883 L 9.043 6.391 L 9.573 6.922 Z M 2.414 14.081 L 2.944 14.611 L 7.452 10.104 L 6.922 9.573 L 6.391 9.043 L 1.883 13.551 L 2.414 14.081 Z M 10.125 8.246 L 10.125 8.996 L 16.5 8.996 L 16.5 8.246 L 16.5 7.496 L 10.125 7.496 L 10.125 8.246 Z M 0 8.246 L 0 8.996 L 6.375 8.996 L 6.375 8.246 L 6.375 7.496 L 0 7.496 L 0 8.246 Z M 9.578 9.573 L 9.048 10.104 L 13.556 14.611 L 14.086 14.081 L 14.617 13.551 L 10.109 9.043 L 9.578 9.573 Z M 2.419 2.414 L 1.889 2.944 L 6.397 7.452 L 6.927 6.922 L 7.457 6.391 L 2.949 1.883 L 2.419 2.414 Z M 10.124 8.25 L 9.374 8.25 C 9.374 8.871 8.871 9.375 8.249 9.375 L 8.249 10.125 L 8.249 10.875 C 9.699 10.875 10.874 9.7 10.874 8.25 L 10.124 8.25 Z M 8.249 10.125 L 8.249 9.375 C 7.628 9.375 7.124 8.871 7.124 8.25 L 6.374 8.25 L 5.624 8.25 C 5.624 9.7 6.8 10.875 8.249 10.875 L 8.249 10.125 Z M 6.374 8.25 L 7.124 8.25 C 7.124 7.629 7.628 7.125 8.249 7.125 L 8.249 6.375 L 8.249 5.625 C 6.8 5.625 5.624 6.8 5.624 8.25 L 6.374 8.25 Z M 8.249 6.375 L 8.249 7.125 C 8.871 7.125 9.374 7.629 9.374 8.25 L 10.124 8.25 L 10.874 8.25 C 10.874 6.8 9.699 5.625 8.249 5.625 L 8.249 6.375 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 7500,
      backgroundColor: "rgb(0,65,255)",
      position: "relative",
      color: "var(--label-neutral-white)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.836,
    height: 7.330,
    viewBox: "0 0 16.836 7.330",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.83,
      top: 8,
      width: 16.836,
      height: 7.33
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.75 C -0.414 1.75 -0.75 2.086 -0.75 2.5 C -0.75 2.914 -0.414 3.25 0 3.25 L 0 2.5 L 0 1.75 Z M 3.333 0 L 4.045 -0.237 C 3.943 -0.543 3.656 -0.75 3.333 -0.75 C 3.011 -0.75 2.724 -0.543 2.622 -0.237 L 3.333 0 Z M 10 0 L 10.712 -0.237 C 10.609 -0.543 10.323 -0.75 10 -0.75 C 9.677 -0.75 9.391 -0.543 9.288 -0.237 L 10 0 Z M 13.333 3.25 C 13.748 3.25 14.083 2.914 14.083 2.5 C 14.083 2.086 13.748 1.75 13.333 1.75 L 13.333 2.5 L 13.333 3.25 Z M 3.503 6.58 C 3.089 6.58 2.753 6.916 2.753 7.33 C 2.753 7.744 3.089 8.08 3.503 8.08 L 3.503 7.33 L 3.503 6.58 Z M 6.836 4.83 L 7.548 4.593 C 7.446 4.287 7.159 4.08 6.836 4.08 C 6.514 4.08 6.227 4.287 6.125 4.593 L 6.836 4.83 Z M 13.503 4.83 L 14.215 4.593 C 14.112 4.287 13.826 4.08 13.503 4.08 C 13.18 4.08 12.894 4.287 12.791 4.593 L 13.503 4.83 Z M 16.836 8.08 C 17.251 8.08 17.586 7.744 17.586 7.33 C 17.586 6.916 17.251 6.58 16.836 6.58 L 16.836 7.33 L 16.836 8.08 Z M 0 2.5 L 0 3.25 C 1.228 3.25 2.169 2.733 2.829 2.106 C 3.476 1.492 3.871 0.758 4.045 0.237 L 3.333 0 L 2.622 -0.237 C 2.518 0.075 2.247 0.591 1.796 1.019 C 1.358 1.434 0.772 1.75 0 1.75 L 0 2.5 Z M 3.333 0 L 2.622 0.237 C 2.796 0.758 3.191 1.492 3.838 2.106 C 4.497 2.733 5.439 3.25 6.667 3.25 L 6.667 2.5 L 6.667 1.75 C 5.895 1.75 5.308 1.434 4.871 1.019 C 4.42 0.591 4.149 0.075 4.045 -0.237 L 3.333 0 Z M 6.667 2.5 L 6.667 3.25 C 7.895 3.25 8.836 2.733 9.496 2.106 C 10.142 1.492 10.538 0.758 10.712 0.237 L 10 0 L 9.288 -0.237 C 9.184 0.075 8.913 0.591 8.463 1.019 C 8.025 1.434 7.439 1.75 6.667 1.75 L 6.667 2.5 Z M 10 0 L 9.288 0.237 C 9.462 0.758 9.858 1.492 10.504 2.106 C 11.164 2.733 12.105 3.25 13.333 3.25 L 13.333 2.5 L 13.333 1.75 C 12.561 1.75 11.975 1.434 11.537 1.019 C 11.087 0.591 10.816 0.075 10.712 -0.237 L 10 0 Z M 3.503 7.33 L 3.503 8.08 C 5.079 8.08 6.076 7.608 6.698 6.879 C 7.266 6.214 7.445 5.375 7.548 5.067 L 6.836 4.83 L 6.125 4.593 C 5.95 5.118 5.879 5.529 5.557 5.906 C 5.29 6.218 4.76 6.58 3.503 6.58 L 3.503 7.33 Z M 6.836 4.83 L 6.125 5.067 C 6.299 5.588 6.694 6.322 7.341 6.936 C 8 7.563 8.942 8.08 10.17 8.08 L 10.17 7.33 L 10.17 6.58 C 9.398 6.58 8.811 6.264 8.374 5.849 C 7.923 5.421 7.652 4.905 7.548 4.593 L 6.836 4.83 Z M 10.17 7.33 L 10.17 8.08 C 11.398 8.08 12.339 7.563 12.999 6.936 C 13.645 6.322 14.041 5.588 14.215 5.067 L 13.503 4.83 L 12.791 4.593 C 12.687 4.905 12.416 5.421 11.966 5.849 C 11.528 6.264 10.942 6.58 10.17 6.58 L 10.17 7.33 Z M 13.503 4.83 L 12.791 5.067 C 12.965 5.588 13.361 6.322 14.007 6.936 C 14.667 7.563 15.608 8.08 16.836 8.08 L 16.836 7.33 L 16.836 6.58 C 16.064 6.58 15.478 6.264 15.04 5.849 C 14.59 5.421 14.319 4.905 14.215 4.593 L 13.503 4.83 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 7500,
      backgroundColor: "var(--accent-green1)",
      position: "relative",
      color: "var(--label-neutral-white)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.500,
    height: 15.167,
    viewBox: "0 0 10.500 15.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.75,
      top: 4.667,
      width: 10.5,
      height: 15.167
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.25 0 L 5.851 -0.449 C 5.709 -0.639 5.486 -0.75 5.25 -0.75 C 5.014 -0.75 4.791 -0.639 4.649 -0.449 L 5.25 0 Z M 3.053 9.895 C 2.967 9.49 2.569 9.23 2.164 9.316 C 1.759 9.401 1.499 9.799 1.585 10.204 L 2.319 10.05 L 3.053 9.895 Z M 4.766 13.356 C 5.168 13.454 5.574 13.207 5.672 12.805 C 5.771 12.402 5.524 11.997 5.121 11.898 L 4.944 12.627 L 4.766 13.356 Z M 10.5 9.917 L 9.75 9.917 C 9.75 12.402 7.735 14.417 5.25 14.417 L 5.25 15.167 L 5.25 15.917 C 8.564 15.917 11.25 13.23 11.25 9.917 L 10.5 9.917 Z M 5.25 15.167 L 5.25 14.417 C 2.765 14.417 0.75 12.402 0.75 9.917 L 0 9.917 L -0.75 9.917 C -0.75 13.23 1.936 15.917 5.25 15.917 L 5.25 15.167 Z M 0 9.917 L 0.75 9.917 C 0.75 9.368 1.014 8.514 1.501 7.458 C 1.975 6.432 2.614 5.312 3.262 4.266 C 3.909 3.223 4.557 2.268 5.044 1.572 C 5.287 1.224 5.49 0.943 5.631 0.748 C 5.702 0.651 5.757 0.576 5.794 0.525 C 5.813 0.5 5.827 0.48 5.837 0.468 C 5.842 0.461 5.845 0.457 5.847 0.453 C 5.849 0.452 5.849 0.451 5.85 0.45 C 5.85 0.45 5.85 0.45 5.85 0.449 C 5.851 0.449 5.851 0.449 5.851 0.449 C 5.851 0.449 5.851 0.449 5.25 0 C 4.649 -0.449 4.649 -0.449 4.649 -0.449 C 4.649 -0.449 4.649 -0.449 4.649 -0.449 C 4.649 -0.448 4.649 -0.448 4.648 -0.448 C 4.647 -0.447 4.646 -0.445 4.645 -0.443 C 4.642 -0.44 4.638 -0.434 4.633 -0.427 C 4.623 -0.413 4.607 -0.393 4.588 -0.366 C 4.548 -0.312 4.491 -0.234 4.418 -0.134 C 4.272 0.067 4.064 0.356 3.815 0.712 C 3.318 1.422 2.653 2.402 1.988 3.476 C 1.323 4.547 0.65 5.725 0.139 6.829 C -0.357 7.905 -0.75 9.016 -0.75 9.917 L 0 9.917 Z M 5.25 0 C 4.649 0.449 4.649 0.449 4.649 0.449 C 4.649 0.449 4.649 0.449 4.65 0.449 C 4.65 0.45 4.65 0.45 4.65 0.45 C 4.651 0.451 4.651 0.452 4.653 0.453 C 4.655 0.457 4.658 0.461 4.663 0.468 C 4.673 0.48 4.687 0.5 4.706 0.525 C 4.743 0.576 4.798 0.651 4.869 0.748 C 5.01 0.943 5.213 1.224 5.456 1.572 C 5.943 2.268 6.591 3.223 7.238 4.266 C 7.886 5.312 8.525 6.432 8.999 7.458 C 9.486 8.514 9.75 9.368 9.75 9.917 L 10.5 9.917 L 11.25 9.917 C 11.25 9.016 10.857 7.905 10.361 6.829 C 9.85 5.725 9.177 4.547 8.512 3.476 C 7.847 2.402 7.182 1.422 6.685 0.712 C 6.436 0.356 6.228 0.067 6.082 -0.134 C 6.009 -0.234 5.952 -0.312 5.912 -0.366 C 5.893 -0.393 5.877 -0.413 5.867 -0.427 C 5.862 -0.434 5.858 -0.44 5.855 -0.443 C 5.854 -0.445 5.853 -0.447 5.852 -0.448 C 5.851 -0.448 5.851 -0.448 5.851 -0.449 C 5.851 -0.449 5.851 -0.449 5.851 -0.449 C 5.851 -0.449 5.851 -0.449 5.25 0 Z M 2.319 10.05 L 1.585 10.204 C 1.754 11.01 2.108 11.704 2.665 12.25 C 3.218 12.794 3.933 13.153 4.766 13.356 L 4.944 12.627 L 5.121 11.898 C 4.491 11.745 4.037 11.495 3.715 11.18 C 3.397 10.867 3.17 10.451 3.053 9.895 L 2.319 10.05 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 7500,
      backgroundColor: "rgb(0,47,185)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.915,
    height: 14.333,
    viewBox: "0 0 11.915 14.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.043,
      top: 4.834,
      width: 11.915,
      height: 14.333
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.541 9.916 C 1.955 9.916 2.291 9.58 2.291 9.166 C 2.291 8.752 1.955 8.416 1.541 8.416 L 1.541 9.166 L 1.541 9.916 Z M 10.374 8.416 C 9.96 8.416 9.624 8.752 9.624 9.166 C 9.624 9.58 9.96 9.916 10.374 9.916 L 10.374 9.166 L 10.374 8.416 Z M 2.374 5.25 C 1.96 5.25 1.624 5.586 1.624 6 C 1.624 6.414 1.96 6.75 2.374 6.75 L 2.374 6 L 2.374 5.25 Z M 9.544 6.75 C 9.958 6.75 10.294 6.414 10.294 6 C 10.294 5.586 9.958 5.25 9.544 5.25 L 9.544 6 L 9.544 6.75 Z M 0 9.166 L 0 8.416 C -0.213 8.416 -0.415 8.507 -0.557 8.665 C -0.7 8.823 -0.768 9.034 -0.746 9.245 L 0 9.166 Z M 11.915 9.166 L 12.661 9.245 C 12.683 9.034 12.614 8.823 12.472 8.665 C 12.33 8.507 12.127 8.416 11.915 8.416 L 11.915 9.166 Z M 5.957 4 L 5.207 4 L 5.207 14.333 L 5.957 14.333 L 6.707 14.333 L 6.707 4 L 5.957 4 Z M 2.374 6 L 2.374 6.75 L 9.544 6.75 L 9.544 6 L 9.544 5.25 L 2.374 5.25 L 2.374 6 Z M 7.957 2 L 7.207 2 C 7.207 2.69 6.648 3.25 5.957 3.25 L 5.957 4 L 5.957 4.75 C 7.476 4.75 8.707 3.519 8.707 2 L 7.957 2 Z M 5.957 4 L 5.957 3.25 C 5.267 3.25 4.707 2.69 4.707 2 L 3.957 2 L 3.207 2 C 3.207 3.519 4.439 4.75 5.957 4.75 L 5.957 4 Z M 3.957 2 L 4.707 2 C 4.707 1.31 5.267 0.75 5.957 0.75 L 5.957 0 L 5.957 -0.75 C 4.439 -0.75 3.207 0.481 3.207 2 L 3.957 2 Z M 5.957 0 L 5.957 0.75 C 6.648 0.75 7.207 1.31 7.207 2 L 7.957 2 L 8.707 2 C 8.707 0.481 7.476 -0.75 5.957 -0.75 L 5.957 0 Z M 5.957 14.333 L 5.957 13.583 C 5.133 13.583 3.901 13.346 2.845 12.661 C 1.818 11.995 0.937 10.897 0.746 9.087 L 0 9.166 L -0.746 9.245 C -0.503 11.543 0.656 13.029 2.029 13.92 C 3.373 14.791 4.902 15.083 5.957 15.083 L 5.957 14.333 Z M 5.957 14.333 L 5.957 15.083 C 7.012 15.083 8.542 14.791 9.886 13.92 C 11.259 13.029 12.417 11.543 12.661 9.245 L 11.915 9.166 L 11.169 9.087 C 10.977 10.897 10.097 11.995 9.07 12.661 C 8.013 13.346 6.781 13.583 5.957 13.583 L 5.957 14.333 Z M 11.915 9.166 L 11.915 8.416 L 10.374 8.416 L 10.374 9.166 L 10.374 9.916 L 11.915 9.916 L 11.915 9.166 Z M 0 9.166 C 0 9.916 0 9.916 0 9.916 C 0 9.916 0 9.916 0 9.916 C 0 9.916 0 9.916 0 9.916 C 0 9.916 0 9.916 0 9.916 C 0 9.916 0 9.916 0 9.916 C 0 9.916 0 9.916 0 9.916 C 0 9.916 0 9.916 0 9.916 C 0 9.916 0 9.916 0 9.916 C 0 9.916 0 9.916 0.001 9.916 C 0.001 9.916 0.001 9.916 0.001 9.916 C 0.001 9.916 0.001 9.916 0.001 9.916 C 0.001 9.916 0.001 9.916 0.001 9.916 C 0.001 9.916 0.001 9.916 0.001 9.916 C 0.001 9.916 0.001 9.916 0.001 9.916 C 0.001 9.916 0.001 9.916 0.001 9.916 C 0.001 9.916 0.002 9.916 0.002 9.916 C 0.002 9.916 0.002 9.916 0.002 9.916 C 0.002 9.916 0.002 9.916 0.002 9.916 C 0.002 9.916 0.002 9.916 0.002 9.916 C 0.002 9.916 0.002 9.916 0.002 9.916 C 0.003 9.916 0.003 9.916 0.003 9.916 C 0.003 9.916 0.003 9.916 0.003 9.916 C 0.003 9.916 0.003 9.916 0.003 9.916 C 0.003 9.916 0.003 9.916 0.004 9.916 C 0.004 9.916 0.004 9.916 0.004 9.916 C 0.004 9.916 0.004 9.916 0.004 9.916 C 0.004 9.916 0.004 9.916 0.004 9.916 C 0.005 9.916 0.005 9.916 0.005 9.916 C 0.005 9.916 0.005 9.916 0.005 9.916 C 0.005 9.916 0.005 9.916 0.005 9.916 C 0.006 9.916 0.006 9.916 0.006 9.916 C 0.006 9.916 0.006 9.916 0.006 9.916 C 0.006 9.916 0.006 9.916 0.007 9.916 C 0.007 9.916 0.007 9.916 0.007 9.916 C 0.007 9.916 0.007 9.916 0.007 9.916 C 0.008 9.916 0.008 9.916 0.008 9.916 C 0.008 9.916 0.008 9.916 0.008 9.916 C 0.008 9.916 0.009 9.916 0.009 9.916 C 0.009 9.916 0.009 9.916 0.009 9.916 C 0.009 9.916 0.01 9.916 0.01 9.916 C 0.01 9.916 0.01 9.916 0.01 9.916 C 0.01 9.916 0.011 9.916 0.011 9.916 C 0.011 9.916 0.011 9.916 0.011 9.916 C 0.011 9.916 0.012 9.916 0.012 9.916 C 0.012 9.916 0.012 9.916 0.012 9.916 C 0.012 9.916 0.013 9.916 0.013 9.916 C 0.013 9.916 0.013 9.916 0.013 9.916 C 0.014 9.916 0.014 9.916 0.014 9.916 C 0.014 9.916 0.014 9.916 0.015 9.916 C 0.015 9.916 0.015 9.916 0.015 9.916 C 0.015 9.916 0.016 9.916 0.016 9.916 C 0.016 9.916 0.016 9.916 0.016 9.916 C 0.017 9.916 0.017 9.916 0.017 9.916 C 0.017 9.916 0.017 9.916 0.018 9.916 C 0.018 9.916 0.018 9.916 0.018 9.916 C 0.019 9.916 0.019 9.916 0.019 9.916 C 0.019 9.916 0.019 9.916 0.02 9.916 C 0.02 9.916 0.02 9.916 0.02 9.916 C 0.021 9.916 0.021 9.916 0.021 9.916 C 0.021 9.916 0.022 9.916 0.022 9.916 C 0.022 9.916 0.022 9.916 0.022 9.916 C 0.023 9.916 0.023 9.916 0.023 9.916 C 0.023 9.916 0.024 9.916 0.024 9.916 C 0.024 9.916 0.024 9.916 0.025 9.916 C 0.025 9.916 0.025 9.916 0.026 9.916 C 0.026 9.916 0.026 9.916 0.026 9.916 C 0.027 9.916 0.027 9.916 0.027 9.916 C 0.027 9.916 0.028 9.916 0.028 9.916 C 0.028 9.916 0.028 9.916 0.029 9.916 C 0.029 9.916 0.029 9.916 0.03 9.916 C 0.03 9.916 0.03 9.916 0.03 9.916 C 0.031 9.916 0.031 9.916 0.031 9.916 C 0.032 9.916 0.032 9.916 0.032 9.916 C 0.032 9.916 0.033 9.916 0.033 9.916 C 0.033 9.916 0.034 9.916 0.034 9.916 C 0.034 9.916 0.035 9.916 0.035 9.916 C 0.035 9.916 0.035 9.916 0.036 9.916 C 0.036 9.916 0.036 9.916 0.037 9.916 C 0.037 9.916 0.037 9.916 0.038 9.916 C 0.038 9.916 0.038 9.916 0.039 9.916 C 0.039 9.916 0.039 9.916 0.04 9.916 C 0.04 9.916 0.04 9.916 0.041 9.916 C 0.041 9.916 0.041 9.916 0.042 9.916 C 0.042 9.916 0.042 9.916 0.043 9.916 C 0.043 9.916 0.043 9.916 0.044 9.916 C 0.044 9.916 0.044 9.916 0.045 9.916 C 0.045 9.916 0.045 9.916 0.046 9.916 C 0.046 9.916 0.046 9.916 0.047 9.916 C 0.047 9.916 0.047 9.916 0.048 9.916 C 0.048 9.916 0.048 9.916 0.049 9.916 C 0.049 9.916 0.05 9.916 0.05 9.916 C 0.05 9.916 0.051 9.916 0.051 9.916 C 0.051 9.916 0.052 9.916 0.052 9.916 C 0.053 9.916 0.053 9.916 0.053 9.916 C 0.054 9.916 0.054 9.916 0.054 9.916 C 0.055 9.916 0.055 9.916 0.056 9.916 C 0.056 9.916 0.056 9.916 0.057 9.916 C 0.057 9.916 0.057 9.916 0.058 9.916 C 0.058 9.916 0.059 9.916 0.059 9.916 C 0.059 9.916 0.06 9.916 0.06 9.916 C 0.061 9.916 0.061 9.916 0.061 9.916 C 0.062 9.916 0.062 9.916 0.063 9.916 C 0.063 9.916 0.064 9.916 0.064 9.916 C 0.064 9.916 0.065 9.916 0.065 9.916 C 0.066 9.916 0.066 9.916 0.066 9.916 C 0.067 9.916 0.067 9.916 0.068 9.916 C 0.068 9.916 0.069 9.916 0.069 9.916 C 0.069 9.916 0.07 9.916 0.07 9.916 C 0.071 9.916 0.071 9.916 0.072 9.916 C 0.072 9.916 0.072 9.916 0.073 9.916 C 0.073 9.916 0.074 9.916 0.074 9.916 C 0.075 9.916 0.075 9.916 0.076 9.916 C 0.076 9.916 0.076 9.916 0.077 9.916 C 0.077 9.916 0.078 9.916 0.078 9.916 C 0.079 9.916 0.079 9.916 0.08 9.916 C 0.08 9.916 0.081 9.916 0.081 9.916 C 0.081 9.916 0.082 9.916 0.082 9.916 C 0.083 9.916 0.083 9.916 0.084 9.916 C 0.084 9.916 0.085 9.916 0.085 9.916 C 0.086 9.916 0.086 9.916 0.087 9.916 C 0.087 9.916 0.088 9.916 0.088 9.916 C 0.089 9.916 0.089 9.916 0.09 9.916 C 0.09 9.916 0.091 9.916 0.091 9.916 C 0.092 9.916 0.092 9.916 0.093 9.916 C 0.093 9.916 0.094 9.916 0.094 9.916 C 0.094 9.916 0.095 9.916 0.096 9.916 C 0.096 9.916 0.097 9.916 0.097 9.916 C 0.098 9.916 0.098 9.916 0.099 9.916 C 0.099 9.916 0.1 9.916 0.1 9.916 C 0.101 9.916 0.101 9.916 0.102 9.916 C 0.102 9.916 0.103 9.916 0.103 9.916 C 0.104 9.916 0.104 9.916 0.105 9.916 C 0.105 9.916 0.106 9.916 0.106 9.916 C 0.107 9.916 0.107 9.916 0.108 9.916 C 0.108 9.916 0.109 9.916 0.11 9.916 C 0.11 9.916 0.111 9.916 0.111 9.916 C 0.112 9.916 0.112 9.916 0.113 9.916 C 0.113 9.916 0.114 9.916 0.114 9.916 C 0.115 9.916 0.116 9.916 0.116 9.916 C 0.117 9.916 0.117 9.916 0.118 9.916 C 0.118 9.916 0.119 9.916 0.119 9.916 C 0.12 9.916 0.121 9.916 0.121 9.916 C 0.122 9.916 0.122 9.916 0.123 9.916 C 0.123 9.916 0.124 9.916 0.125 9.916 C 0.125 9.916 0.126 9.916 0.126 9.916 C 0.127 9.916 0.127 9.916 0.128 9.916 C 0.129 9.916 0.129 9.916 0.13 9.916 C 0.13 9.916 0.131 9.916 0.132 9.916 C 0.132 9.916 0.133 9.916 0.133 9.916 C 0.134 9.916 0.135 9.916 0.135 9.916 C 0.136 9.916 0.136 9.916 0.137 9.916 C 0.138 9.916 0.138 9.916 0.139 9.916 C 0.139 9.916 0.14 9.916 0.141 9.916 C 0.141 9.916 0.142 9.916 0.142 9.916 C 0.143 9.916 0.144 9.916 0.144 9.916 C 0.145 9.916 0.146 9.916 0.146 9.916 C 0.147 9.916 0.147 9.916 0.148 9.916 C 0.149 9.916 0.149 9.916 0.15 9.916 C 0.151 9.916 0.151 9.916 0.152 9.916 C 0.152 9.916 0.153 9.916 0.154 9.916 C 0.154 9.916 0.155 9.916 0.156 9.916 C 0.156 9.916 0.157 9.916 0.158 9.916 C 0.158 9.916 0.159 9.916 0.159 9.916 C 0.16 9.916 0.161 9.916 0.161 9.916 C 0.162 9.916 0.163 9.916 0.163 9.916 C 0.164 9.916 0.165 9.916 0.165 9.916 C 0.166 9.916 0.167 9.916 0.167 9.916 C 0.168 9.916 0.169 9.916 0.169 9.916 C 0.17 9.916 0.171 9.916 0.171 9.916 C 0.172 9.916 0.173 9.916 0.173 9.916 C 0.174 9.916 0.175 9.916 0.175 9.916 C 0.176 9.916 0.177 9.916 0.177 9.916 C 0.178 9.916 0.179 9.916 0.18 9.916 C 0.18 9.916 0.181 9.916 0.182 9.916 C 0.182 9.916 0.183 9.916 0.184 9.916 C 0.184 9.916 0.185 9.916 0.186 9.916 C 0.186 9.916 0.187 9.916 0.188 9.916 C 0.189 9.916 0.189 9.916 0.19 9.916 C 0.191 9.916 0.191 9.916 0.192 9.916 C 0.193 9.916 0.194 9.916 0.194 9.916 C 0.195 9.916 0.196 9.916 0.196 9.916 C 0.197 9.916 0.198 9.916 0.199 9.916 C 0.199 9.916 0.2 9.916 0.201 9.916 C 0.201 9.916 0.202 9.916 0.203 9.916 C 0.204 9.916 0.204 9.916 0.205 9.916 C 0.206 9.916 0.207 9.916 0.207 9.916 C 0.208 9.916 0.209 9.916 0.21 9.916 C 0.21 9.916 0.211 9.916 0.212 9.916 C 0.213 9.916 0.213 9.916 0.214 9.916 C 0.215 9.916 0.216 9.916 0.216 9.916 C 0.217 9.916 0.218 9.916 0.219 9.916 C 0.219 9.916 0.22 9.916 0.221 9.916 C 0.222 9.916 0.222 9.916 0.223 9.916 C 0.224 9.916 0.225 9.916 0.225 9.916 C 0.226 9.916 0.227 9.916 0.228 9.916 C 0.229 9.916 0.229 9.916 0.23 9.916 C 0.231 9.916 0.232 9.916 0.232 9.916 C 0.233 9.916 0.234 9.916 0.235 9.916 C 0.236 9.916 0.236 9.916 0.237 9.916 C 0.238 9.916 0.239 9.916 0.24 9.916 C 0.24 9.916 0.241 9.916 0.242 9.916 C 0.243 9.916 0.244 9.916 0.244 9.916 C 0.245 9.916 0.246 9.916 0.247 9.916 C 0.248 9.916 0.248 9.916 0.249 9.916 C 0.25 9.916 0.251 9.916 0.252 9.916 C 0.252 9.916 0.253 9.916 0.254 9.916 C 0.255 9.916 0.256 9.916 0.256 9.916 C 0.257 9.916 0.258 9.916 0.259 9.916 C 0.26 9.916 0.261 9.916 0.261 9.916 C 0.262 9.916 0.263 9.916 0.264 9.916 C 0.265 9.916 0.266 9.916 0.266 9.916 C 0.267 9.916 0.268 9.916 0.269 9.916 C 0.27 9.916 0.271 9.916 0.271 9.916 C 0.272 9.916 0.273 9.916 0.274 9.916 C 0.275 9.916 0.276 9.916 0.277 9.916 C 0.277 9.916 0.278 9.916 0.279 9.916 C 0.28 9.916 0.281 9.916 0.282 9.916 C 0.283 9.916 0.283 9.916 0.284 9.916 C 0.285 9.916 0.286 9.916 0.287 9.916 C 0.288 9.916 0.289 9.916 0.289 9.916 C 0.29 9.916 0.291 9.916 0.292 9.916 C 0.293 9.916 0.294 9.916 0.295 9.916 C 0.296 9.916 0.297 9.916 0.297 9.916 C 0.298 9.916 0.299 9.916 0.3 9.916 C 0.301 9.916 0.302 9.916 0.303 9.916 C 0.304 9.916 0.304 9.916 0.305 9.916 C 0.306 9.916 0.307 9.916 0.308 9.916 C 0.309 9.916 0.31 9.916 0.311 9.916 C 0.312 9.916 0.313 9.916 0.313 9.916 C 0.314 9.916 0.315 9.916 0.316 9.916 C 0.317 9.916 0.318 9.916 0.319 9.916 C 0.32 9.916 0.321 9.916 0.322 9.916 C 0.323 9.916 0.324 9.916 0.324 9.916 C 0.325 9.916 0.326 9.916 0.327 9.916 C 0.328 9.916 0.329 9.916 0.33 9.916 C 0.331 9.916 0.332 9.916 0.333 9.916 C 0.334 9.916 0.335 9.916 0.336 9.916 C 0.337 9.916 0.337 9.916 0.338 9.916 C 0.339 9.916 0.34 9.916 0.341 9.916 C 0.342 9.916 0.343 9.916 0.344 9.916 C 0.345 9.916 0.346 9.916 0.347 9.916 C 0.348 9.916 0.349 9.916 0.35 9.916 C 0.351 9.916 0.352 9.916 0.353 9.916 C 0.354 9.916 0.355 9.916 0.356 9.916 C 0.357 9.916 0.358 9.916 0.358 9.916 C 0.359 9.916 0.36 9.916 0.361 9.916 C 0.362 9.916 0.363 9.916 0.364 9.916 C 0.365 9.916 0.366 9.916 0.367 9.916 C 0.368 9.916 0.369 9.916 0.37 9.916 C 0.371 9.916 0.372 9.916 0.373 9.916 C 0.374 9.916 0.375 9.916 0.376 9.916 C 0.377 9.916 0.378 9.916 0.379 9.916 C 0.38 9.916 0.381 9.916 0.382 9.916 C 0.383 9.916 0.384 9.916 0.385 9.916 C 0.386 9.916 0.387 9.916 0.388 9.916 C 0.389 9.916 0.39 9.916 0.391 9.916 C 0.392 9.916 0.393 9.916 0.394 9.916 C 0.395 9.916 0.396 9.916 0.397 9.916 C 0.398 9.916 0.399 9.916 0.4 9.916 C 0.401 9.916 0.402 9.916 0.403 9.916 C 0.404 9.916 0.405 9.916 0.406 9.916 C 0.407 9.916 0.409 9.916 0.41 9.916 C 0.411 9.916 0.412 9.916 0.413 9.916 C 0.414 9.916 0.415 9.916 0.416 9.916 C 0.417 9.916 0.418 9.916 0.419 9.916 C 0.42 9.916 0.421 9.916 0.422 9.916 C 0.423 9.916 0.424 9.916 0.425 9.916 C 0.426 9.916 0.427 9.916 0.428 9.916 C 0.429 9.916 0.43 9.916 0.432 9.916 C 0.433 9.916 0.434 9.916 0.435 9.916 C 0.436 9.916 0.437 9.916 0.438 9.916 C 0.439 9.916 0.44 9.916 0.441 9.916 C 0.442 9.916 0.443 9.916 0.444 9.916 C 0.445 9.916 0.447 9.916 0.448 9.916 C 0.449 9.916 0.45 9.916 0.451 9.916 C 0.452 9.916 0.453 9.916 0.454 9.916 C 0.455 9.916 0.456 9.916 0.457 9.916 C 0.458 9.916 0.46 9.916 0.461 9.916 C 0.462 9.916 0.463 9.916 0.464 9.916 C 0.465 9.916 0.466 9.916 0.467 9.916 C 0.468 9.916 0.469 9.916 0.471 9.916 C 0.472 9.916 0.473 9.916 0.474 9.916 C 0.475 9.916 0.476 9.916 0.477 9.916 C 0.478 9.916 0.479 9.916 0.481 9.916 C 0.482 9.916 0.483 9.916 0.484 9.916 C 0.485 9.916 0.486 9.916 0.487 9.916 C 0.488 9.916 0.49 9.916 0.491 9.916 C 0.492 9.916 0.493 9.916 0.494 9.916 C 0.495 9.916 0.496 9.916 0.498 9.916 C 0.499 9.916 0.5 9.916 0.501 9.916 C 0.502 9.916 0.503 9.916 0.504 9.916 C 0.505 9.916 0.507 9.916 0.508 9.916 C 0.509 9.916 0.51 9.916 0.511 9.916 C 0.512 9.916 0.514 9.916 0.515 9.916 C 0.516 9.916 0.517 9.916 0.518 9.916 C 0.519 9.916 0.521 9.916 0.522 9.916 C 0.523 9.916 0.524 9.916 0.525 9.916 C 0.526 9.916 0.528 9.916 0.529 9.916 C 0.53 9.916 0.531 9.916 0.532 9.916 C 0.533 9.916 0.535 9.916 0.536 9.916 C 0.537 9.916 0.538 9.916 0.539 9.916 C 0.54 9.916 0.542 9.916 0.543 9.916 C 0.544 9.916 0.545 9.916 0.546 9.916 C 0.548 9.916 0.549 9.916 0.55 9.916 C 0.551 9.916 0.552 9.916 0.554 9.916 C 0.555 9.916 0.556 9.916 0.557 9.916 C 0.558 9.916 0.56 9.916 0.561 9.916 C 0.562 9.916 0.563 9.916 0.564 9.916 C 0.566 9.916 0.567 9.916 0.568 9.916 C 0.569 9.916 0.57 9.916 0.572 9.916 C 0.573 9.916 0.574 9.916 0.575 9.916 C 0.577 9.916 0.578 9.916 0.579 9.916 C 0.58 9.916 0.581 9.916 0.583 9.916 C 0.584 9.916 0.585 9.916 0.586 9.916 C 0.588 9.916 0.589 9.916 0.59 9.916 C 0.591 9.916 0.593 9.916 0.594 9.916 C 0.595 9.916 0.596 9.916 0.598 9.916 C 0.599 9.916 0.6 9.916 0.601 9.916 C 0.603 9.916 0.604 9.916 0.605 9.916 C 0.606 9.916 0.608 9.916 0.609 9.916 C 0.61 9.916 0.611 9.916 0.613 9.916 C 0.614 9.916 0.615 9.916 0.616 9.916 C 0.618 9.916 0.619 9.916 0.62 9.916 C 0.621 9.916 0.623 9.916 0.624 9.916 C 0.625 9.916 0.627 9.916 0.628 9.916 C 0.629 9.916 0.63 9.916 0.632 9.916 C 0.633 9.916 0.634 9.916 0.635 9.916 C 0.637 9.916 0.638 9.916 0.639 9.916 C 0.641 9.916 0.642 9.916 0.643 9.916 C 0.644 9.916 0.646 9.916 0.647 9.916 C 0.648 9.916 0.65 9.916 0.651 9.916 C 0.652 9.916 0.654 9.916 0.655 9.916 C 0.656 9.916 0.657 9.916 0.659 9.916 C 0.66 9.916 0.661 9.916 0.663 9.916 C 0.664 9.916 0.665 9.916 0.667 9.916 C 0.668 9.916 0.669 9.916 0.671 9.916 C 0.672 9.916 0.673 9.916 0.675 9.916 C 0.676 9.916 0.677 9.916 0.679 9.916 C 0.68 9.916 0.681 9.916 0.682 9.916 C 0.684 9.916 0.685 9.916 0.686 9.916 C 0.688 9.916 0.689 9.916 0.69 9.916 C 0.692 9.916 0.693 9.916 0.694 9.916 C 0.696 9.916 0.697 9.916 0.699 9.916 C 0.7 9.916 0.701 9.916 0.703 9.916 C 0.704 9.916 0.705 9.916 0.707 9.916 C 0.708 9.916 0.709 9.916 0.711 9.916 C 0.712 9.916 0.713 9.916 0.715 9.916 C 0.716 9.916 0.717 9.916 0.719 9.916 C 0.72 9.916 0.722 9.916 0.723 9.916 C 0.724 9.916 0.726 9.916 0.727 9.916 C 0.728 9.916 0.73 9.916 0.731 9.916 C 0.733 9.916 0.734 9.916 0.735 9.916 C 0.737 9.916 0.738 9.916 0.739 9.916 C 0.741 9.916 0.742 9.916 0.744 9.916 C 0.745 9.916 0.746 9.916 0.748 9.916 C 0.749 9.916 0.75 9.916 0.752 9.916 C 0.753 9.916 0.755 9.916 0.756 9.916 C 0.757 9.916 0.759 9.916 0.76 9.916 C 0.762 9.916 0.763 9.916 0.764 9.916 C 0.766 9.916 0.767 9.916 0.769 9.916 C 0.77 9.916 0.772 9.916 0.773 9.916 C 0.774 9.916 0.776 9.916 0.777 9.916 C 0.779 9.916 0.78 9.916 0.781 9.916 C 0.783 9.916 0.784 9.916 0.786 9.916 C 0.787 9.916 0.789 9.916 0.79 9.916 C 0.791 9.916 0.793 9.916 0.794 9.916 C 0.796 9.916 0.797 9.916 0.799 9.916 C 0.8 9.916 0.801 9.916 0.803 9.916 C 0.804 9.916 0.806 9.916 0.807 9.916 C 0.809 9.916 0.81 9.916 0.812 9.916 C 0.813 9.916 0.814 9.916 0.816 9.916 C 0.817 9.916 0.819 9.916 0.82 9.916 C 0.822 9.916 0.823 9.916 0.825 9.916 C 0.826 9.916 0.827 9.916 0.829 9.916 C 0.83 9.916 0.832 9.916 0.833 9.916 C 0.835 9.916 0.836 9.916 0.838 9.916 C 0.839 9.916 0.841 9.916 0.842 9.916 C 0.844 9.916 0.845 9.916 0.847 9.916 C 0.848 9.916 0.85 9.916 0.851 9.916 C 0.852 9.916 0.854 9.916 0.855 9.916 C 0.857 9.916 0.858 9.916 0.86 9.916 C 0.861 9.916 0.863 9.916 0.864 9.916 C 0.866 9.916 0.867 9.916 0.869 9.916 C 0.87 9.916 0.872 9.916 0.873 9.916 C 0.875 9.916 0.876 9.916 0.878 9.916 C 0.879 9.916 0.881 9.916 0.882 9.916 C 0.884 9.916 0.885 9.916 0.887 9.916 C 0.888 9.916 0.89 9.916 0.891 9.916 C 0.893 9.916 0.894 9.916 0.896 9.916 C 0.897 9.916 0.899 9.916 0.901 9.916 C 0.902 9.916 0.904 9.916 0.905 9.916 C 0.907 9.916 0.908 9.916 0.91 9.916 C 0.911 9.916 0.913 9.916 0.914 9.916 C 0.916 9.916 0.917 9.916 0.919 9.916 C 0.92 9.916 0.922 9.916 0.923 9.916 C 0.925 9.916 0.927 9.916 0.928 9.916 C 0.93 9.916 0.931 9.916 0.933 9.916 C 0.934 9.916 0.936 9.916 0.937 9.916 C 0.939 9.916 0.941 9.916 0.942 9.916 C 0.944 9.916 0.945 9.916 0.947 9.916 C 0.948 9.916 0.95 9.916 0.951 9.916 C 0.953 9.916 0.955 9.916 0.956 9.916 C 0.958 9.916 0.959 9.916 0.961 9.916 C 0.962 9.916 0.964 9.916 0.966 9.916 C 0.967 9.916 0.969 9.916 0.97 9.916 C 0.972 9.916 0.973 9.916 0.975 9.916 C 0.977 9.916 0.978 9.916 0.98 9.916 C 0.981 9.916 0.983 9.916 0.985 9.916 C 0.986 9.916 0.988 9.916 0.989 9.916 C 0.991 9.916 0.992 9.916 0.994 9.916 C 0.996 9.916 0.997 9.916 0.999 9.916 C 1 9.916 1.002 9.916 1.004 9.916 C 1.005 9.916 1.007 9.916 1.008 9.916 C 1.01 9.916 1.012 9.916 1.013 9.916 C 1.015 9.916 1.017 9.916 1.018 9.916 C 1.02 9.916 1.021 9.916 1.023 9.916 C 1.025 9.916 1.026 9.916 1.028 9.916 C 1.029 9.916 1.031 9.916 1.033 9.916 C 1.034 9.916 1.036 9.916 1.038 9.916 C 1.039 9.916 1.041 9.916 1.043 9.916 C 1.044 9.916 1.046 9.916 1.047 9.916 C 1.049 9.916 1.051 9.916 1.052 9.916 C 1.054 9.916 1.056 9.916 1.057 9.916 C 1.059 9.916 1.061 9.916 1.062 9.916 C 1.064 9.916 1.066 9.916 1.067 9.916 C 1.069 9.916 1.07 9.916 1.072 9.916 C 1.074 9.916 1.075 9.916 1.077 9.916 C 1.079 9.916 1.08 9.916 1.082 9.916 C 1.084 9.916 1.085 9.916 1.087 9.916 C 1.089 9.916 1.09 9.916 1.092 9.916 C 1.094 9.916 1.095 9.916 1.097 9.916 C 1.099 9.916 1.1 9.916 1.102 9.916 C 1.104 9.916 1.106 9.916 1.107 9.916 C 1.109 9.916 1.111 9.916 1.112 9.916 C 1.114 9.916 1.116 9.916 1.117 9.916 C 1.119 9.916 1.121 9.916 1.122 9.916 C 1.124 9.916 1.126 9.916 1.127 9.916 C 1.129 9.916 1.131 9.916 1.133 9.916 C 1.134 9.916 1.136 9.916 1.138 9.916 C 1.139 9.916 1.141 9.916 1.143 9.916 C 1.144 9.916 1.146 9.916 1.148 9.916 C 1.15 9.916 1.151 9.916 1.153 9.916 C 1.155 9.916 1.156 9.916 1.158 9.916 C 1.16 9.916 1.162 9.916 1.163 9.916 C 1.165 9.916 1.167 9.916 1.169 9.916 C 1.17 9.916 1.172 9.916 1.174 9.916 C 1.175 9.916 1.177 9.916 1.179 9.916 C 1.181 9.916 1.182 9.916 1.184 9.916 C 1.186 9.916 1.188 9.916 1.189 9.916 C 1.191 9.916 1.193 9.916 1.195 9.916 C 1.196 9.916 1.198 9.916 1.2 9.916 C 1.202 9.916 1.203 9.916 1.205 9.916 C 1.207 9.916 1.209 9.916 1.21 9.916 C 1.212 9.916 1.214 9.916 1.216 9.916 C 1.217 9.916 1.219 9.916 1.221 9.916 C 1.223 9.916 1.224 9.916 1.226 9.916 C 1.228 9.916 1.23 9.916 1.232 9.916 C 1.233 9.916 1.235 9.916 1.237 9.916 C 1.239 9.916 1.24 9.916 1.242 9.916 C 1.244 9.916 1.246 9.916 1.248 9.916 C 1.249 9.916 1.251 9.916 1.253 9.916 C 1.255 9.916 1.256 9.916 1.258 9.916 C 1.26 9.916 1.262 9.916 1.264 9.916 C 1.265 9.916 1.267 9.916 1.269 9.916 C 1.271 9.916 1.273 9.916 1.274 9.916 C 1.276 9.916 1.278 9.916 1.28 9.916 C 1.282 9.916 1.283 9.916 1.285 9.916 C 1.287 9.916 1.289 9.916 1.291 9.916 C 1.292 9.916 1.294 9.916 1.296 9.916 C 1.298 9.916 1.3 9.916 1.302 9.916 C 1.303 9.916 1.305 9.916 1.307 9.916 C 1.309 9.916 1.311 9.916 1.313 9.916 C 1.314 9.916 1.316 9.916 1.318 9.916 C 1.32 9.916 1.322 9.916 1.324 9.916 C 1.325 9.916 1.327 9.916 1.329 9.916 C 1.331 9.916 1.333 9.916 1.335 9.916 C 1.336 9.916 1.338 9.916 1.34 9.916 C 1.342 9.916 1.344 9.916 1.346 9.916 C 1.347 9.916 1.349 9.916 1.351 9.916 C 1.353 9.916 1.355 9.916 1.357 9.916 C 1.359 9.916 1.36 9.916 1.362 9.916 C 1.364 9.916 1.366 9.916 1.368 9.916 C 1.37 9.916 1.372 9.916 1.374 9.916 C 1.375 9.916 1.377 9.916 1.379 9.916 C 1.381 9.916 1.383 9.916 1.385 9.916 C 1.387 9.916 1.388 9.916 1.39 9.916 C 1.392 9.916 1.394 9.916 1.396 9.916 C 1.398 9.916 1.4 9.916 1.402 9.916 C 1.404 9.916 1.405 9.916 1.407 9.916 C 1.409 9.916 1.411 9.916 1.413 9.916 C 1.415 9.916 1.417 9.916 1.419 9.916 C 1.421 9.916 1.422 9.916 1.424 9.916 C 1.426 9.916 1.428 9.916 1.43 9.916 C 1.432 9.916 1.434 9.916 1.436 9.916 C 1.438 9.916 1.44 9.916 1.442 9.916 C 1.443 9.916 1.445 9.916 1.447 9.916 C 1.449 9.916 1.451 9.916 1.453 9.916 C 1.455 9.916 1.457 9.916 1.459 9.916 C 1.461 9.916 1.463 9.916 1.465 9.916 C 1.467 9.916 1.468 9.916 1.47 9.916 C 1.472 9.916 1.474 9.916 1.476 9.916 C 1.478 9.916 1.48 9.916 1.482 9.916 C 1.484 9.916 1.486 9.916 1.488 9.916 C 1.49 9.916 1.492 9.916 1.494 9.916 C 1.496 9.916 1.498 9.916 1.499 9.916 C 1.501 9.916 1.503 9.916 1.505 9.916 C 1.507 9.916 1.509 9.916 1.511 9.916 C 1.513 9.916 1.515 9.916 1.517 9.916 C 1.519 9.916 1.521 9.916 1.523 9.916 C 1.525 9.916 1.527 9.916 1.529 9.916 C 1.531 9.916 1.533 9.916 1.535 9.916 C 1.537 9.916 1.539 9.916 1.541 9.916 L 1.541 9.166 L 1.541 8.416 C 1.539 8.416 1.537 8.416 1.535 8.416 C 1.533 8.416 1.531 8.416 1.529 8.416 C 1.527 8.416 1.525 8.416 1.523 8.416 C 1.521 8.416 1.519 8.416 1.517 8.416 C 1.515 8.416 1.513 8.416 1.511 8.416 C 1.509 8.416 1.507 8.416 1.505 8.416 C 1.503 8.416 1.501 8.416 1.499 8.416 C 1.498 8.416 1.496 8.416 1.494 8.416 C 1.492 8.416 1.49 8.416 1.488 8.416 C 1.486 8.416 1.484 8.416 1.482 8.416 C 1.48 8.416 1.478 8.416 1.476 8.416 C 1.474 8.416 1.472 8.416 1.47 8.416 C 1.468 8.416 1.467 8.416 1.465 8.416 C 1.463 8.416 1.461 8.416 1.459 8.416 C 1.457 8.416 1.455 8.416 1.453 8.416 C 1.451 8.416 1.449 8.416 1.447 8.416 C 1.445 8.416 1.443 8.416 1.442 8.416 C 1.44 8.416 1.438 8.416 1.436 8.416 C 1.434 8.416 1.432 8.416 1.43 8.416 C 1.428 8.416 1.426 8.416 1.424 8.416 C 1.422 8.416 1.421 8.416 1.419 8.416 C 1.417 8.416 1.415 8.416 1.413 8.416 C 1.411 8.416 1.409 8.416 1.407 8.416 C 1.405 8.416 1.404 8.416 1.402 8.416 C 1.4 8.416 1.398 8.416 1.396 8.416 C 1.394 8.416 1.392 8.416 1.39 8.416 C 1.388 8.416 1.387 8.416 1.385 8.416 C 1.383 8.416 1.381 8.416 1.379 8.416 C 1.377 8.416 1.375 8.416 1.374 8.416 C 1.372 8.416 1.37 8.416 1.368 8.416 C 1.366 8.416 1.364 8.416 1.362 8.416 C 1.36 8.416 1.359 8.416 1.357 8.416 C 1.355 8.416 1.353 8.416 1.351 8.416 C 1.349 8.416 1.347 8.416 1.346 8.416 C 1.344 8.416 1.342 8.416 1.34 8.416 C 1.338 8.416 1.336 8.416 1.335 8.416 C 1.333 8.416 1.331 8.416 1.329 8.416 C 1.327 8.416 1.325 8.416 1.324 8.416 C 1.322 8.416 1.32 8.416 1.318 8.416 C 1.316 8.416 1.314 8.416 1.313 8.416 C 1.311 8.416 1.309 8.416 1.307 8.416 C 1.305 8.416 1.303 8.416 1.302 8.416 C 1.3 8.416 1.298 8.416 1.296 8.416 C 1.294 8.416 1.292 8.416 1.291 8.416 C 1.289 8.416 1.287 8.416 1.285 8.416 C 1.283 8.416 1.282 8.416 1.28 8.416 C 1.278 8.416 1.276 8.416 1.274 8.416 C 1.273 8.416 1.271 8.416 1.269 8.416 C 1.267 8.416 1.265 8.416 1.264 8.416 C 1.262 8.416 1.26 8.416 1.258 8.416 C 1.256 8.416 1.255 8.416 1.253 8.416 C 1.251 8.416 1.249 8.416 1.248 8.416 C 1.246 8.416 1.244 8.416 1.242 8.416 C 1.24 8.416 1.239 8.416 1.237 8.416 C 1.235 8.416 1.233 8.416 1.232 8.416 C 1.23 8.416 1.228 8.416 1.226 8.416 C 1.224 8.416 1.223 8.416 1.221 8.416 C 1.219 8.416 1.217 8.416 1.216 8.416 C 1.214 8.416 1.212 8.416 1.21 8.416 C 1.209 8.416 1.207 8.416 1.205 8.416 C 1.203 8.416 1.202 8.416 1.2 8.416 C 1.198 8.416 1.196 8.416 1.195 8.416 C 1.193 8.416 1.191 8.416 1.189 8.416 C 1.188 8.416 1.186 8.416 1.184 8.416 C 1.182 8.416 1.181 8.416 1.179 8.416 C 1.177 8.416 1.175 8.416 1.174 8.416 C 1.172 8.416 1.17 8.416 1.169 8.416 C 1.167 8.416 1.165 8.416 1.163 8.416 C 1.162 8.416 1.16 8.416 1.158 8.416 C 1.156 8.416 1.155 8.416 1.153 8.416 C 1.151 8.416 1.15 8.416 1.148 8.416 C 1.146 8.416 1.144 8.416 1.143 8.416 C 1.141 8.416 1.139 8.416 1.138 8.416 C 1.136 8.416 1.134 8.416 1.133 8.416 C 1.131 8.416 1.129 8.416 1.127 8.416 C 1.126 8.416 1.124 8.416 1.122 8.416 C 1.121 8.416 1.119 8.416 1.117 8.416 C 1.116 8.416 1.114 8.416 1.112 8.416 C 1.111 8.416 1.109 8.416 1.107 8.416 C 1.106 8.416 1.104 8.416 1.102 8.416 C 1.1 8.416 1.099 8.416 1.097 8.416 C 1.095 8.416 1.094 8.416 1.092 8.416 C 1.09 8.416 1.089 8.416 1.087 8.416 C 1.085 8.416 1.084 8.416 1.082 8.416 C 1.08 8.416 1.079 8.416 1.077 8.416 C 1.075 8.416 1.074 8.416 1.072 8.416 C 1.07 8.416 1.069 8.416 1.067 8.416 C 1.066 8.416 1.064 8.416 1.062 8.416 C 1.061 8.416 1.059 8.416 1.057 8.416 C 1.056 8.416 1.054 8.416 1.052 8.416 C 1.051 8.416 1.049 8.416 1.047 8.416 C 1.046 8.416 1.044 8.416 1.043 8.416 C 1.041 8.416 1.039 8.416 1.038 8.416 C 1.036 8.416 1.034 8.416 1.033 8.416 C 1.031 8.416 1.029 8.416 1.028 8.416 C 1.026 8.416 1.025 8.416 1.023 8.416 C 1.021 8.416 1.02 8.416 1.018 8.416 C 1.017 8.416 1.015 8.416 1.013 8.416 C 1.012 8.416 1.01 8.416 1.008 8.416 C 1.007 8.416 1.005 8.416 1.004 8.416 C 1.002 8.416 1 8.416 0.999 8.416 C 0.997 8.416 0.996 8.416 0.994 8.416 C 0.992 8.416 0.991 8.416 0.989 8.416 C 0.988 8.416 0.986 8.416 0.985 8.416 C 0.983 8.416 0.981 8.416 0.98 8.416 C 0.978 8.416 0.977 8.416 0.975 8.416 C 0.973 8.416 0.972 8.416 0.97 8.416 C 0.969 8.416 0.967 8.416 0.966 8.416 C 0.964 8.416 0.962 8.416 0.961 8.416 C 0.959 8.416 0.958 8.416 0.956 8.416 C 0.955 8.416 0.953 8.416 0.951 8.416 C 0.95 8.416 0.948 8.416 0.947 8.416 C 0.945 8.416 0.944 8.416 0.942 8.416 C 0.941 8.416 0.939 8.416 0.937 8.416 C 0.936 8.416 0.934 8.416 0.933 8.416 C 0.931 8.416 0.93 8.416 0.928 8.416 C 0.927 8.416 0.925 8.416 0.923 8.416 C 0.922 8.416 0.92 8.416 0.919 8.416 C 0.917 8.416 0.916 8.416 0.914 8.416 C 0.913 8.416 0.911 8.416 0.91 8.416 C 0.908 8.416 0.907 8.416 0.905 8.416 C 0.904 8.416 0.902 8.416 0.901 8.416 C 0.899 8.416 0.897 8.416 0.896 8.416 C 0.894 8.416 0.893 8.416 0.891 8.416 C 0.89 8.416 0.888 8.416 0.887 8.416 C 0.885 8.416 0.884 8.416 0.882 8.416 C 0.881 8.416 0.879 8.416 0.878 8.416 C 0.876 8.416 0.875 8.416 0.873 8.416 C 0.872 8.416 0.87 8.416 0.869 8.416 C 0.867 8.416 0.866 8.416 0.864 8.416 C 0.863 8.416 0.861 8.416 0.86 8.416 C 0.858 8.416 0.857 8.416 0.855 8.416 C 0.854 8.416 0.852 8.416 0.851 8.416 C 0.85 8.416 0.848 8.416 0.847 8.416 C 0.845 8.416 0.844 8.416 0.842 8.416 C 0.841 8.416 0.839 8.416 0.838 8.416 C 0.836 8.416 0.835 8.416 0.833 8.416 C 0.832 8.416 0.83 8.416 0.829 8.416 C 0.827 8.416 0.826 8.416 0.825 8.416 C 0.823 8.416 0.822 8.416 0.82 8.416 C 0.819 8.416 0.817 8.416 0.816 8.416 C 0.814 8.416 0.813 8.416 0.812 8.416 C 0.81 8.416 0.809 8.416 0.807 8.416 C 0.806 8.416 0.804 8.416 0.803 8.416 C 0.801 8.416 0.8 8.416 0.799 8.416 C 0.797 8.416 0.796 8.416 0.794 8.416 C 0.793 8.416 0.791 8.416 0.79 8.416 C 0.789 8.416 0.787 8.416 0.786 8.416 C 0.784 8.416 0.783 8.416 0.781 8.416 C 0.78 8.416 0.779 8.416 0.777 8.416 C 0.776 8.416 0.774 8.416 0.773 8.416 C 0.772 8.416 0.77 8.416 0.769 8.416 C 0.767 8.416 0.766 8.416 0.764 8.416 C 0.763 8.416 0.762 8.416 0.76 8.416 C 0.759 8.416 0.757 8.416 0.756 8.416 C 0.755 8.416 0.753 8.416 0.752 8.416 C 0.75 8.416 0.749 8.416 0.748 8.416 C 0.746 8.416 0.745 8.416 0.744 8.416 C 0.742 8.416 0.741 8.416 0.739 8.416 C 0.738 8.416 0.737 8.416 0.735 8.416 C 0.734 8.416 0.733 8.416 0.731 8.416 C 0.73 8.416 0.728 8.416 0.727 8.416 C 0.726 8.416 0.724 8.416 0.723 8.416 C 0.722 8.416 0.72 8.416 0.719 8.416 C 0.717 8.416 0.716 8.416 0.715 8.416 C 0.713 8.416 0.712 8.416 0.711 8.416 C 0.709 8.416 0.708 8.416 0.707 8.416 C 0.705 8.416 0.704 8.416 0.703 8.416 C 0.701 8.416 0.7 8.416 0.699 8.416 C 0.697 8.416 0.696 8.416 0.694 8.416 C 0.693 8.416 0.692 8.416 0.69 8.416 C 0.689 8.416 0.688 8.416 0.686 8.416 C 0.685 8.416 0.684 8.416 0.682 8.416 C 0.681 8.416 0.68 8.416 0.679 8.416 C 0.677 8.416 0.676 8.416 0.675 8.416 C 0.673 8.416 0.672 8.416 0.671 8.416 C 0.669 8.416 0.668 8.416 0.667 8.416 C 0.665 8.416 0.664 8.416 0.663 8.416 C 0.661 8.416 0.66 8.416 0.659 8.416 C 0.657 8.416 0.656 8.416 0.655 8.416 C 0.654 8.416 0.652 8.416 0.651 8.416 C 0.65 8.416 0.648 8.416 0.647 8.416 C 0.646 8.416 0.644 8.416 0.643 8.416 C 0.642 8.416 0.641 8.416 0.639 8.416 C 0.638 8.416 0.637 8.416 0.635 8.416 C 0.634 8.416 0.633 8.416 0.632 8.416 C 0.63 8.416 0.629 8.416 0.628 8.416 C 0.627 8.416 0.625 8.416 0.624 8.416 C 0.623 8.416 0.621 8.416 0.62 8.416 C 0.619 8.416 0.618 8.416 0.616 8.416 C 0.615 8.416 0.614 8.416 0.613 8.416 C 0.611 8.416 0.61 8.416 0.609 8.416 C 0.608 8.416 0.606 8.416 0.605 8.416 C 0.604 8.416 0.603 8.416 0.601 8.416 C 0.6 8.416 0.599 8.416 0.598 8.416 C 0.596 8.416 0.595 8.416 0.594 8.416 C 0.593 8.416 0.591 8.416 0.59 8.416 C 0.589 8.416 0.588 8.416 0.586 8.416 C 0.585 8.416 0.584 8.416 0.583 8.416 C 0.581 8.416 0.58 8.416 0.579 8.416 C 0.578 8.416 0.577 8.416 0.575 8.416 C 0.574 8.416 0.573 8.416 0.572 8.416 C 0.57 8.416 0.569 8.416 0.568 8.416 C 0.567 8.416 0.566 8.416 0.564 8.416 C 0.563 8.416 0.562 8.416 0.561 8.416 C 0.56 8.416 0.558 8.416 0.557 8.416 C 0.556 8.416 0.555 8.416 0.554 8.416 C 0.552 8.416 0.551 8.416 0.55 8.416 C 0.549 8.416 0.548 8.416 0.546 8.416 C 0.545 8.416 0.544 8.416 0.543 8.416 C 0.542 8.416 0.54 8.416 0.539 8.416 C 0.538 8.416 0.537 8.416 0.536 8.416 C 0.535 8.416 0.533 8.416 0.532 8.416 C 0.531 8.416 0.53 8.416 0.529 8.416 C 0.528 8.416 0.526 8.416 0.525 8.416 C 0.524 8.416 0.523 8.416 0.522 8.416 C 0.521 8.416 0.519 8.416 0.518 8.416 C 0.517 8.416 0.516 8.416 0.515 8.416 C 0.514 8.416 0.512 8.416 0.511 8.416 C 0.51 8.416 0.509 8.416 0.508 8.416 C 0.507 8.416 0.505 8.416 0.504 8.416 C 0.503 8.416 0.502 8.416 0.501 8.416 C 0.5 8.416 0.499 8.416 0.498 8.416 C 0.496 8.416 0.495 8.416 0.494 8.416 C 0.493 8.416 0.492 8.416 0.491 8.416 C 0.49 8.416 0.488 8.416 0.487 8.416 C 0.486 8.416 0.485 8.416 0.484 8.416 C 0.483 8.416 0.482 8.416 0.481 8.416 C 0.479 8.416 0.478 8.416 0.477 8.416 C 0.476 8.416 0.475 8.416 0.474 8.416 C 0.473 8.416 0.472 8.416 0.471 8.416 C 0.469 8.416 0.468 8.416 0.467 8.416 C 0.466 8.416 0.465 8.416 0.464 8.416 C 0.463 8.416 0.462 8.416 0.461 8.416 C 0.46 8.416 0.458 8.416 0.457 8.416 C 0.456 8.416 0.455 8.416 0.454 8.416 C 0.453 8.416 0.452 8.416 0.451 8.416 C 0.45 8.416 0.449 8.416 0.448 8.416 C 0.447 8.416 0.445 8.416 0.444 8.416 C 0.443 8.416 0.442 8.416 0.441 8.416 C 0.44 8.416 0.439 8.416 0.438 8.416 C 0.437 8.416 0.436 8.416 0.435 8.416 C 0.434 8.416 0.433 8.416 0.432 8.416 C 0.43 8.416 0.429 8.416 0.428 8.416 C 0.427 8.416 0.426 8.416 0.425 8.416 C 0.424 8.416 0.423 8.416 0.422 8.416 C 0.421 8.416 0.42 8.416 0.419 8.416 C 0.418 8.416 0.417 8.416 0.416 8.416 C 0.415 8.416 0.414 8.416 0.413 8.416 C 0.412 8.416 0.411 8.416 0.41 8.416 C 0.409 8.416 0.407 8.416 0.406 8.416 C 0.405 8.416 0.404 8.416 0.403 8.416 C 0.402 8.416 0.401 8.416 0.4 8.416 C 0.399 8.416 0.398 8.416 0.397 8.416 C 0.396 8.416 0.395 8.416 0.394 8.416 C 0.393 8.416 0.392 8.416 0.391 8.416 C 0.39 8.416 0.389 8.416 0.388 8.416 C 0.387 8.416 0.386 8.416 0.385 8.416 C 0.384 8.416 0.383 8.416 0.382 8.416 C 0.381 8.416 0.38 8.416 0.379 8.416 C 0.378 8.416 0.377 8.416 0.376 8.416 C 0.375 8.416 0.374 8.416 0.373 8.416 C 0.372 8.416 0.371 8.416 0.37 8.416 C 0.369 8.416 0.368 8.416 0.367 8.416 C 0.366 8.416 0.365 8.416 0.364 8.416 C 0.363 8.416 0.362 8.416 0.361 8.416 C 0.36 8.416 0.359 8.416 0.358 8.416 C 0.358 8.416 0.357 8.416 0.356 8.416 C 0.355 8.416 0.354 8.416 0.353 8.416 C 0.352 8.416 0.351 8.416 0.35 8.416 C 0.349 8.416 0.348 8.416 0.347 8.416 C 0.346 8.416 0.345 8.416 0.344 8.416 C 0.343 8.416 0.342 8.416 0.341 8.416 C 0.34 8.416 0.339 8.416 0.338 8.416 C 0.337 8.416 0.337 8.416 0.336 8.416 C 0.335 8.416 0.334 8.416 0.333 8.416 C 0.332 8.416 0.331 8.416 0.33 8.416 C 0.329 8.416 0.328 8.416 0.327 8.416 C 0.326 8.416 0.325 8.416 0.324 8.416 C 0.324 8.416 0.323 8.416 0.322 8.416 C 0.321 8.416 0.32 8.416 0.319 8.416 C 0.318 8.416 0.317 8.416 0.316 8.416 C 0.315 8.416 0.314 8.416 0.313 8.416 C 0.313 8.416 0.312 8.416 0.311 8.416 C 0.31 8.416 0.309 8.416 0.308 8.416 C 0.307 8.416 0.306 8.416 0.305 8.416 C 0.304 8.416 0.304 8.416 0.303 8.416 C 0.302 8.416 0.301 8.416 0.3 8.416 C 0.299 8.416 0.298 8.416 0.297 8.416 C 0.297 8.416 0.296 8.416 0.295 8.416 C 0.294 8.416 0.293 8.416 0.292 8.416 C 0.291 8.416 0.29 8.416 0.289 8.416 C 0.289 8.416 0.288 8.416 0.287 8.416 C 0.286 8.416 0.285 8.416 0.284 8.416 C 0.283 8.416 0.283 8.416 0.282 8.416 C 0.281 8.416 0.28 8.416 0.279 8.416 C 0.278 8.416 0.277 8.416 0.277 8.416 C 0.276 8.416 0.275 8.416 0.274 8.416 C 0.273 8.416 0.272 8.416 0.271 8.416 C 0.271 8.416 0.27 8.416 0.269 8.416 C 0.268 8.416 0.267 8.416 0.266 8.416 C 0.266 8.416 0.265 8.416 0.264 8.416 C 0.263 8.416 0.262 8.416 0.261 8.416 C 0.261 8.416 0.26 8.416 0.259 8.416 C 0.258 8.416 0.257 8.416 0.256 8.416 C 0.256 8.416 0.255 8.416 0.254 8.416 C 0.253 8.416 0.252 8.416 0.252 8.416 C 0.251 8.416 0.25 8.416 0.249 8.416 C 0.248 8.416 0.248 8.416 0.247 8.416 C 0.246 8.416 0.245 8.416 0.244 8.416 C 0.244 8.416 0.243 8.416 0.242 8.416 C 0.241 8.416 0.24 8.416 0.24 8.416 C 0.239 8.416 0.238 8.416 0.237 8.416 C 0.236 8.416 0.236 8.416 0.235 8.416 C 0.234 8.416 0.233 8.416 0.232 8.416 C 0.232 8.416 0.231 8.416 0.23 8.416 C 0.229 8.416 0.229 8.416 0.228 8.416 C 0.227 8.416 0.226 8.416 0.225 8.416 C 0.225 8.416 0.224 8.416 0.223 8.416 C 0.222 8.416 0.222 8.416 0.221 8.416 C 0.22 8.416 0.219 8.416 0.219 8.416 C 0.218 8.416 0.217 8.416 0.216 8.416 C 0.216 8.416 0.215 8.416 0.214 8.416 C 0.213 8.416 0.213 8.416 0.212 8.416 C 0.211 8.416 0.21 8.416 0.21 8.416 C 0.209 8.416 0.208 8.416 0.207 8.416 C 0.207 8.416 0.206 8.416 0.205 8.416 C 0.204 8.416 0.204 8.416 0.203 8.416 C 0.202 8.416 0.201 8.416 0.201 8.416 C 0.2 8.416 0.199 8.416 0.199 8.416 C 0.198 8.416 0.197 8.416 0.196 8.416 C 0.196 8.416 0.195 8.416 0.194 8.416 C 0.194 8.416 0.193 8.416 0.192 8.416 C 0.191 8.416 0.191 8.416 0.19 8.416 C 0.189 8.416 0.189 8.416 0.188 8.416 C 0.187 8.416 0.186 8.416 0.186 8.416 C 0.185 8.416 0.184 8.416 0.184 8.416 C 0.183 8.416 0.182 8.416 0.182 8.416 C 0.181 8.416 0.18 8.416 0.18 8.416 C 0.179 8.416 0.178 8.416 0.177 8.416 C 0.177 8.416 0.176 8.416 0.175 8.416 C 0.175 8.416 0.174 8.416 0.173 8.416 C 0.173 8.416 0.172 8.416 0.171 8.416 C 0.171 8.416 0.17 8.416 0.169 8.416 C 0.169 8.416 0.168 8.416 0.167 8.416 C 0.167 8.416 0.166 8.416 0.165 8.416 C 0.165 8.416 0.164 8.416 0.163 8.416 C 0.163 8.416 0.162 8.416 0.161 8.416 C 0.161 8.416 0.16 8.416 0.159 8.416 C 0.159 8.416 0.158 8.416 0.158 8.416 C 0.157 8.416 0.156 8.416 0.156 8.416 C 0.155 8.416 0.154 8.416 0.154 8.416 C 0.153 8.416 0.152 8.416 0.152 8.416 C 0.151 8.416 0.151 8.416 0.15 8.416 C 0.149 8.416 0.149 8.416 0.148 8.416 C 0.147 8.416 0.147 8.416 0.146 8.416 C 0.146 8.416 0.145 8.416 0.144 8.416 C 0.144 8.416 0.143 8.416 0.142 8.416 C 0.142 8.416 0.141 8.416 0.141 8.416 C 0.14 8.416 0.139 8.416 0.139 8.416 C 0.138 8.416 0.138 8.416 0.137 8.416 C 0.136 8.416 0.136 8.416 0.135 8.416 C 0.135 8.416 0.134 8.416 0.133 8.416 C 0.133 8.416 0.132 8.416 0.132 8.416 C 0.131 8.416 0.13 8.416 0.13 8.416 C 0.129 8.416 0.129 8.416 0.128 8.416 C 0.127 8.416 0.127 8.416 0.126 8.416 C 0.126 8.416 0.125 8.416 0.125 8.416 C 0.124 8.416 0.123 8.416 0.123 8.416 C 0.122 8.416 0.122 8.416 0.121 8.416 C 0.121 8.416 0.12 8.416 0.119 8.416 C 0.119 8.416 0.118 8.416 0.118 8.416 C 0.117 8.416 0.117 8.416 0.116 8.416 C 0.116 8.416 0.115 8.416 0.114 8.416 C 0.114 8.416 0.113 8.416 0.113 8.416 C 0.112 8.416 0.112 8.416 0.111 8.416 C 0.111 8.416 0.11 8.416 0.11 8.416 C 0.109 8.416 0.108 8.416 0.108 8.416 C 0.107 8.416 0.107 8.416 0.106 8.416 C 0.106 8.416 0.105 8.416 0.105 8.416 C 0.104 8.416 0.104 8.416 0.103 8.416 C 0.103 8.416 0.102 8.416 0.102 8.416 C 0.101 8.416 0.101 8.416 0.1 8.416 C 0.1 8.416 0.099 8.416 0.099 8.416 C 0.098 8.416 0.098 8.416 0.097 8.416 C 0.097 8.416 0.096 8.416 0.096 8.416 C 0.095 8.416 0.094 8.416 0.094 8.416 C 0.094 8.416 0.093 8.416 0.093 8.416 C 0.092 8.416 0.092 8.416 0.091 8.416 C 0.091 8.416 0.09 8.416 0.09 8.416 C 0.089 8.416 0.089 8.416 0.088 8.416 C 0.088 8.416 0.087 8.416 0.087 8.416 C 0.086 8.416 0.086 8.416 0.085 8.416 C 0.085 8.416 0.084 8.416 0.084 8.416 C 0.083 8.416 0.083 8.416 0.082 8.416 C 0.082 8.416 0.081 8.416 0.081 8.416 C 0.081 8.416 0.08 8.416 0.08 8.416 C 0.079 8.416 0.079 8.416 0.078 8.416 C 0.078 8.416 0.077 8.416 0.077 8.416 C 0.076 8.416 0.076 8.416 0.076 8.416 C 0.075 8.416 0.075 8.416 0.074 8.416 C 0.074 8.416 0.073 8.416 0.073 8.416 C 0.072 8.416 0.072 8.416 0.072 8.416 C 0.071 8.416 0.071 8.416 0.07 8.416 C 0.07 8.416 0.069 8.416 0.069 8.416 C 0.069 8.416 0.068 8.416 0.068 8.416 C 0.067 8.416 0.067 8.416 0.066 8.416 C 0.066 8.416 0.066 8.416 0.065 8.416 C 0.065 8.416 0.064 8.416 0.064 8.416 C 0.064 8.416 0.063 8.416 0.063 8.416 C 0.062 8.416 0.062 8.416 0.061 8.416 C 0.061 8.416 0.061 8.416 0.06 8.416 C 0.06 8.416 0.059 8.416 0.059 8.416 C 0.059 8.416 0.058 8.416 0.058 8.416 C 0.057 8.416 0.057 8.416 0.057 8.416 C 0.056 8.416 0.056 8.416 0.056 8.416 C 0.055 8.416 0.055 8.416 0.054 8.416 C 0.054 8.416 0.054 8.416 0.053 8.416 C 0.053 8.416 0.053 8.416 0.052 8.416 C 0.052 8.416 0.051 8.416 0.051 8.416 C 0.051 8.416 0.05 8.416 0.05 8.416 C 0.05 8.416 0.049 8.416 0.049 8.416 C 0.048 8.416 0.048 8.416 0.048 8.416 C 0.047 8.416 0.047 8.416 0.047 8.416 C 0.046 8.416 0.046 8.416 0.046 8.416 C 0.045 8.416 0.045 8.416 0.045 8.416 C 0.044 8.416 0.044 8.416 0.044 8.416 C 0.043 8.416 0.043 8.416 0.043 8.416 C 0.042 8.416 0.042 8.416 0.042 8.416 C 0.041 8.416 0.041 8.416 0.041 8.416 C 0.04 8.416 0.04 8.416 0.04 8.416 C 0.039 8.416 0.039 8.416 0.039 8.416 C 0.038 8.416 0.038 8.416 0.038 8.416 C 0.037 8.416 0.037 8.416 0.037 8.416 C 0.036 8.416 0.036 8.416 0.036 8.416 C 0.035 8.416 0.035 8.416 0.035 8.416 C 0.035 8.416 0.034 8.416 0.034 8.416 C 0.034 8.416 0.033 8.416 0.033 8.416 C 0.033 8.416 0.032 8.416 0.032 8.416 C 0.032 8.416 0.032 8.416 0.031 8.416 C 0.031 8.416 0.031 8.416 0.03 8.416 C 0.03 8.416 0.03 8.416 0.03 8.416 C 0.029 8.416 0.029 8.416 0.029 8.416 C 0.028 8.416 0.028 8.416 0.028 8.416 C 0.028 8.416 0.027 8.416 0.027 8.416 C 0.027 8.416 0.027 8.416 0.026 8.416 C 0.026 8.416 0.026 8.416 0.026 8.416 C 0.025 8.416 0.025 8.416 0.025 8.416 C 0.024 8.416 0.024 8.416 0.024 8.416 C 0.024 8.416 0.023 8.416 0.023 8.416 C 0.023 8.416 0.023 8.416 0.022 8.416 C 0.022 8.416 0.022 8.416 0.022 8.416 C 0.022 8.416 0.021 8.416 0.021 8.416 C 0.021 8.416 0.021 8.416 0.02 8.416 C 0.02 8.416 0.02 8.416 0.02 8.416 C 0.019 8.416 0.019 8.416 0.019 8.416 C 0.019 8.416 0.019 8.416 0.018 8.416 C 0.018 8.416 0.018 8.416 0.018 8.416 C 0.017 8.416 0.017 8.416 0.017 8.416 C 0.017 8.416 0.017 8.416 0.016 8.416 C 0.016 8.416 0.016 8.416 0.016 8.416 C 0.016 8.416 0.015 8.416 0.015 8.416 C 0.015 8.416 0.015 8.416 0.015 8.416 C 0.014 8.416 0.014 8.416 0.014 8.416 C 0.014 8.416 0.014 8.416 0.013 8.416 C 0.013 8.416 0.013 8.416 0.013 8.416 C 0.013 8.416 0.012 8.416 0.012 8.416 C 0.012 8.416 0.012 8.416 0.012 8.416 C 0.012 8.416 0.011 8.416 0.011 8.416 C 0.011 8.416 0.011 8.416 0.011 8.416 C 0.011 8.416 0.01 8.416 0.01 8.416 C 0.01 8.416 0.01 8.416 0.01 8.416 C 0.01 8.416 0.009 8.416 0.009 8.416 C 0.009 8.416 0.009 8.416 0.009 8.416 C 0.009 8.416 0.008 8.416 0.008 8.416 C 0.008 8.416 0.008 8.416 0.008 8.416 C 0.008 8.416 0.008 8.416 0.007 8.416 C 0.007 8.416 0.007 8.416 0.007 8.416 C 0.007 8.416 0.007 8.416 0.007 8.416 C 0.006 8.416 0.006 8.416 0.006 8.416 C 0.006 8.416 0.006 8.416 0.006 8.416 C 0.006 8.416 0.006 8.416 0.005 8.416 C 0.005 8.416 0.005 8.416 0.005 8.416 C 0.005 8.416 0.005 8.416 0.005 8.416 C 0.005 8.416 0.005 8.416 0.004 8.416 C 0.004 8.416 0.004 8.416 0.004 8.416 C 0.004 8.416 0.004 8.416 0.004 8.416 C 0.004 8.416 0.004 8.416 0.004 8.416 C 0.003 8.416 0.003 8.416 0.003 8.416 C 0.003 8.416 0.003 8.416 0.003 8.416 C 0.003 8.416 0.003 8.416 0.003 8.416 C 0.003 8.416 0.003 8.416 0.002 8.416 C 0.002 8.416 0.002 8.416 0.002 8.416 C 0.002 8.416 0.002 8.416 0.002 8.416 C 0.002 8.416 0.002 8.416 0.002 8.416 C 0.002 8.416 0.002 8.416 0.002 8.416 C 0.002 8.416 0.001 8.416 0.001 8.416 C 0.001 8.416 0.001 8.416 0.001 8.416 C 0.001 8.416 0.001 8.416 0.001 8.416 C 0.001 8.416 0.001 8.416 0.001 8.416 C 0.001 8.416 0.001 8.416 0.001 8.416 C 0.001 8.416 0.001 8.416 0.001 8.416 C 0.001 8.416 0.001 8.416 0.001 8.416 C 0 8.416 0 8.416 0 8.416 C 0 8.416 0 8.416 0 8.416 C 0 8.416 0 8.416 0 8.416 C 0 8.416 0 8.416 0 8.416 C 0 8.416 0 8.416 0 8.416 C 0 8.416 0 8.416 0 8.416 C 0 8.416 0 8.416 0 8.416 C 0 8.416 0 8.416 0 8.416 C 0 8.416 0 8.416 0 9.166 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: 속성 2=Dam
    "prop=dam": __body0,
    // figma: 속성 2=Bridge
    "prop=bridge": __body1,
    // figma: 속성 2=River
    "prop=river": __body2,
    // figma: 속성 2=Reservoir
    "prop=reservoir": __body3,
    // figma: 속성 2=harbor2
    "prop=harbor2": __body4,
    // figma: 속성 2=Salt water
    "prop=salt water": __body5,
    // figma: 속성 2=Fresh Water
    "prop=fresh water": __body6,
    // figma: 속성 2=harbor
    "prop=harbor": __body7
  };
  return (__impls[__vkey_Icon(props)] ?? __body1)();
}

// figma node: 579:8080 Icon/Layer (2 variants)
const __venc_IconLayer = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconLayer = p => "variant=" + __venc_IconLayer(p.variant) + '|' + "fill=" + __venc_IconLayer(p.fill);
function IconLayer(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "layerfill",
    fill: _p.fill ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.000,
    height: 20.000,
    viewBox: "0 0 20.000 20.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.404 12.275 C 18.859 11.962 19.482 12.078 19.795 12.533 C 20.108 12.988 19.992 13.611 19.537 13.923 L 11.247 19.619 C 10.508 20.126 9.511 20.126 8.771 19.62 L 0.461 13.924 C 0.006 13.612 -0.111 12.99 0.201 12.535 C 0.513 12.079 1.136 11.963 1.592 12.275 L 9.902 17.97 C 9.96 18.009 10.057 18.009 10.114 17.97 L 18.404 12.275 Z M 8.854 0.326 C 9.557 -0.109 10.463 -0.109 11.165 0.327 L 19.035 5.207 C 20.316 6.001 20.323 7.795 19.046 8.598 L 11.176 13.546 C 10.468 13.991 9.551 13.992 8.843 13.548 L 0.956 8.599 C -0.324 7.796 -0.317 6 0.967 5.206 L 8.854 0.326 Z M 10.11 2.026 C 10.053 1.991 9.963 1.991 9.906 2.026 L 2.019 6.906 L 9.905 11.854 C 9.962 11.89 10.054 11.89 10.111 11.854 L 17.979 6.905 L 10.11 2.026 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.000,
    height: 20.000,
    viewBox: "0 0 20.000 20.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.404 12.275 C 18.859 11.962 19.482 12.078 19.795 12.533 C 20.108 12.988 19.992 13.611 19.537 13.923 L 11.247 19.619 C 10.508 20.126 9.511 20.126 8.771 19.62 L 0.461 13.924 C 0.006 13.612 -0.111 12.99 0.201 12.535 C 0.513 12.079 1.136 11.963 1.592 12.275 L 9.902 17.97 C 9.96 18.009 10.057 18.009 10.114 17.97 L 18.404 12.275 Z M 8.854 0.326 C 9.557 -0.109 10.463 -0.109 11.165 0.327 L 19.035 5.207 C 20.316 6.001 20.323 7.795 19.046 8.598 L 11.176 13.546 C 10.468 13.991 9.551 13.992 8.843 13.548 L 0.956 8.599 C -0.324 7.796 -0.317 6 0.967 5.206 L 8.854 0.326 Z M 10.11 2.026 C 10.053 1.991 9.963 1.991 9.906 2.026 L 2.019 6.906 L 9.905 11.854 C 9.962 11.89 10.054 11.89 10.111 11.854 L 17.979 6.905 L 10.11 2.026 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.11 2.026 C 10.053 1.991 9.963 1.991 9.906 2.026 L 2.019 6.906 L 9.905 11.854 C 9.962 11.89 10.054 11.89 10.111 11.854 L 17.979 6.905 L 10.11 2.026 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Variant=Layer, Fill=False
    "variant=layer|fill=false": __body0,
    // figma: Variant=LayerFill, Fill=True
    "variant=layerfill|fill=true": __body1
  };
  return (__impls[__vkey_IconLayer(props)] ?? __body0)();
}

// figma node: 629:16947 Icon/Location (2 variants)
const __venc_IconLocation = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconLocation = p => "variant=" + __venc_IconLocation(p.variant) + '|' + "fill=" + __venc_IconLocation(p.fill);
function IconLocation(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "location",
    fill: _p.fill ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.636,
    height: 19.516,
    viewBox: "0 0 19.636 19.516",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.204,
      top: 2.113,
      width: 19.636,
      height: 19.516
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.901 0.148 C 2.501 -0.078 3.142 -0.01 3.748 0.118 C 4.368 0.249 5.147 0.49 6.097 0.782 L 14.777 3.456 C 15.907 3.804 16.819 4.084 17.494 4.359 C 18.139 4.622 18.789 4.962 19.167 5.556 C 19.681 6.363 19.779 7.368 19.431 8.26 C 19.174 8.915 18.603 9.375 18.021 9.758 C 17.413 10.158 16.571 10.609 15.53 11.169 L 13.313 12.361 C 12.93 12.567 12.857 12.612 12.799 12.659 C 12.732 12.714 12.673 12.777 12.623 12.847 C 12.579 12.907 12.539 12.983 12.357 13.378 L 11.586 15.052 C 11.072 16.166 10.659 17.065 10.286 17.717 C 9.931 18.337 9.497 18.953 8.844 19.249 C 7.96 19.649 6.937 19.597 6.099 19.109 C 5.479 18.749 5.11 18.091 4.82 17.437 C 4.515 16.751 4.196 15.815 3.798 14.654 L 0.887 6.157 C 0.564 5.217 0.299 4.446 0.149 3.83 C 0.003 3.228 -0.085 2.59 0.123 1.983 C 0.413 1.137 1.065 0.464 1.901 0.148 Z M 3.336 2.075 C 2.813 1.965 2.648 2.004 2.607 2.019 C 2.329 2.125 2.111 2.349 2.015 2.631 C 2 2.672 1.966 2.838 2.093 3.357 C 2.216 3.863 2.444 4.531 2.779 5.509 L 5.69 14.006 C 6.101 15.204 6.388 16.039 6.648 16.626 C 6.924 17.246 7.08 17.366 7.104 17.381 C 7.384 17.543 7.725 17.56 8.019 17.427 C 8.047 17.414 8.214 17.309 8.55 16.723 C 8.869 16.165 9.239 15.364 9.769 14.214 L 10.541 12.541 C 10.691 12.215 10.817 11.93 11.001 11.676 C 11.152 11.466 11.33 11.277 11.53 11.113 C 11.773 10.914 12.05 10.769 12.366 10.6 L 14.583 9.407 C 15.659 8.829 16.405 8.427 16.922 8.087 C 17.464 7.73 17.556 7.562 17.568 7.532 C 17.684 7.235 17.652 6.9 17.48 6.631 C 17.463 6.604 17.341 6.456 16.739 6.211 C 16.167 5.977 15.356 5.727 14.189 5.367 L 5.508 2.693 C 4.52 2.389 3.845 2.182 3.336 2.075 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.636,
    height: 19.516,
    viewBox: "0 0 19.636 19.516",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.204,
      top: 2.113,
      width: 19.636,
      height: 19.516
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.901 0.148 C 2.501 -0.078 3.142 -0.01 3.748 0.118 C 4.368 0.249 5.147 0.49 6.097 0.782 L 14.777 3.456 C 15.906 3.804 16.819 4.084 17.494 4.359 C 18.139 4.622 18.789 4.962 19.167 5.556 C 19.681 6.363 19.779 7.368 19.431 8.26 C 19.174 8.915 18.603 9.375 18.021 9.758 C 17.413 10.158 16.571 10.609 15.53 11.169 L 13.313 12.361 C 12.931 12.567 12.856 12.612 12.799 12.659 C 12.732 12.714 12.673 12.777 12.623 12.847 C 12.579 12.907 12.539 12.983 12.357 13.378 L 11.586 15.052 C 11.072 16.166 10.659 17.065 10.286 17.717 C 9.931 18.337 9.497 18.953 8.844 19.249 C 7.96 19.649 6.937 19.597 6.099 19.109 C 5.479 18.749 5.11 18.09 4.82 17.437 C 4.515 16.751 4.196 15.815 3.798 14.654 L 0.887 6.157 C 0.564 5.217 0.299 4.445 0.149 3.83 C 0.003 3.228 -0.085 2.59 0.123 1.983 C 0.413 1.137 1.065 0.464 1.901 0.148 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Variant=Location, Fill=False
    "variant=location|fill=false": __body0,
    // figma: Variant=LocationFill, Fill=True
    "variant=locationfill|fill=true": __body1
  };
  return (__impls[__vkey_IconLocation(props)] ?? __body0)();
}

// figma node: 579:8495 Icon/Star (2 variants)
const __venc_IconStar2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconStar2 = p => "variant=" + __venc_IconStar2(p.variant) + '|' + "fill=" + __venc_IconStar2(p.fill);
function IconStar2(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "starfill",
    fill: _p.fill ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.022,
    height: 20.090,
    viewBox: "0 0 21.022 20.090",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.489,
      top: 1,
      width: 21.022,
      height: 20.09
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.511 0 C 10.892 0 11.239 0.216 11.407 0.558 L 14.113 6.04 L 20.165 6.92 C 20.542 6.975 20.855 7.239 20.973 7.601 C 21.09 7.963 20.992 8.36 20.72 8.626 L 16.34 12.893 L 17.374 18.921 C 17.439 19.296 17.285 19.676 16.977 19.899 C 16.669 20.123 16.26 20.153 15.923 19.976 L 10.511 17.129 L 5.099 19.976 C 4.762 20.153 4.353 20.123 4.045 19.899 C 3.737 19.676 3.583 19.296 3.648 18.921 L 4.681 12.893 L 0.302 8.626 C 0.029 8.36 -0.069 7.963 0.049 7.601 C 0.167 7.239 0.48 6.975 0.857 6.92 L 6.907 6.04 L 9.614 0.558 L 9.686 0.436 C 9.87 0.166 10.178 0 10.511 0 Z M 8.469 7.397 C 8.323 7.693 8.042 7.897 7.716 7.944 L 3.149 8.607 L 6.453 11.829 C 6.689 12.059 6.797 12.39 6.741 12.714 L 5.96 17.262 L 10.045 15.115 L 10.157 15.064 C 10.423 14.964 10.722 14.981 10.977 15.115 L 15.061 17.262 L 14.28 12.714 C 14.225 12.39 14.333 12.059 14.568 11.829 L 17.872 8.607 L 13.306 7.944 C 12.98 7.897 12.698 7.693 12.553 7.397 L 10.511 3.259 L 8.469 7.397 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.022,
    height: 20.090,
    viewBox: "0 0 21.022 20.090",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.489,
      top: 1,
      width: 21.022,
      height: 20.09
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.511 0 C 10.892 0 11.239 0.216 11.407 0.558 L 14.113 6.04 L 20.165 6.92 C 20.542 6.975 20.855 7.239 20.973 7.601 C 21.09 7.963 20.992 8.36 20.72 8.626 L 16.34 12.893 L 17.374 18.921 C 17.439 19.296 17.285 19.676 16.977 19.899 C 16.669 20.123 16.26 20.153 15.923 19.976 L 10.511 17.129 L 5.099 19.976 C 4.762 20.153 4.353 20.123 4.045 19.899 C 3.737 19.676 3.583 19.296 3.648 18.921 L 4.681 12.893 L 0.302 8.626 C 0.029 8.36 -0.069 7.963 0.049 7.601 C 0.167 7.239 0.48 6.975 0.857 6.92 L 6.907 6.04 L 9.614 0.558 L 9.686 0.436 C 9.87 0.166 10.178 0 10.511 0 Z M 8.469 7.397 C 8.323 7.693 8.042 7.897 7.716 7.944 L 3.149 8.607 L 6.453 11.829 C 6.689 12.059 6.797 12.39 6.741 12.714 L 5.96 17.262 L 10.045 15.115 L 10.157 15.064 C 10.423 14.964 10.722 14.981 10.977 15.115 L 15.061 17.262 L 14.28 12.714 C 14.225 12.39 14.333 12.059 14.568 11.829 L 17.872 8.607 L 13.306 7.944 C 12.98 7.897 12.698 7.693 12.553 7.397 L 10.511 3.259 L 8.469 7.397 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.469 7.397 C 8.323 7.693 8.042 7.897 7.716 7.944 L 3.149 8.607 L 6.453 11.829 C 6.689 12.059 6.797 12.39 6.741 12.714 L 5.96 17.262 L 10.045 15.115 L 10.157 15.064 C 10.423 14.964 10.722 14.981 10.977 15.115 L 15.061 17.262 L 14.28 12.714 C 14.225 12.39 14.333 12.059 14.568 11.829 L 17.872 8.607 L 13.306 7.944 C 12.98 7.897 12.698 7.693 12.553 7.397 L 10.511 3.259 L 8.469 7.397 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Variant=Star, Fill=False
    "variant=star|fill=false": __body0,
    // figma: Variant=StarFill, Fill=True
    "variant=starfill|fill=true": __body1
  };
  return (__impls[__vkey_IconStar2(props)] ?? __body0)();
}

// figma node: 963:8140 Icon/Traffic-cone (2 variants)
const __venc_IconTrafficCone = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconTrafficCone = p => "variant=" + __venc_IconTrafficCone(p.variant) + '|' + "fill=" + __venc_IconTrafficCone(p.fill);
function IconTrafficCone(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "traffic-cone",
    fill: _p.fill ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 17.995,
    viewBox: "0 0 20 17.995",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3.003,
      width: 20,
      height: 17.995
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.012 0.242 C 9.631 -0.081 10.369 -0.081 10.988 0.242 C 11.489 0.502 11.769 0.993 11.955 1.37 C 12.159 1.783 12.375 2.342 12.632 3.004 L 17.684 15.995 L 19 15.995 C 19.552 15.995 20 16.442 20 16.995 C 20 17.547 19.552 17.995 19 17.995 L 1 17.995 C 0.448 17.995 0 17.547 0 16.995 C 0 16.442 0.448 15.995 1 15.995 L 2.316 15.995 L 7.368 3.004 C 7.625 2.342 7.841 1.783 8.045 1.37 C 8.231 0.993 8.511 0.502 9.012 0.242 Z M 4.462 15.995 L 15.538 15.995 L 14.372 12.995 L 5.628 12.995 L 4.462 15.995 Z M 6.406 10.995 L 13.594 10.995 L 12.427 7.995 L 7.573 7.995 L 6.406 10.995 Z M 9.981 2.002 C 9.956 2.039 9.907 2.115 9.839 2.254 C 9.683 2.569 9.504 3.03 9.232 3.728 L 8.351 5.995 L 11.649 5.995 L 10.768 3.728 C 10.496 3.03 10.317 2.569 10.161 2.254 C 10.093 2.114 10.043 2.039 10.018 2.002 C 10.006 2 9.993 2 9.981 2.002 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 17.995,
    viewBox: "0 0 20 17.995",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3.003,
      width: 20,
      height: 17.995
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.684 15.995 L 16.517 12.995 M 19 15.995 L 17.684 15.995 M 20 16.995 C 20 16.442 19.552 15.995 19 15.995 M 19 17.995 C 19.552 17.995 20 17.547 20 16.995 M 17.023 17.995 L 19 17.995 M 16.977 17.995 C 16.992 17.995 17.008 17.995 17.023 17.995 M 3.023 17.995 L 16.977 17.995 M 2.977 17.995 C 2.992 17.995 3.008 17.995 3.023 17.995 M 1 17.995 L 2.977 17.995 M 0 16.995 C 0 17.547 0.448 17.995 1 17.995 M 1 15.995 C 0.448 15.995 0 16.442 0 16.995 M 2.316 15.995 L 1 15.995 M 3.483 12.995 L 2.316 15.995 M 3.483 12.995 L 16.517 12.995 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.74 10.995 L 14.573 7.995 L 5.427 7.995 L 4.26 10.995 L 15.74 10.995 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.795 5.995 L 6.205 5.995 M 13.795 5.995 L 12.615 2.96 C 12.365 2.317 12.154 1.774 11.955 1.37 C 11.769 0.993 11.489 0.502 10.988 0.242 C 10.369 -0.081 9.631 -0.081 9.012 0.242 C 8.511 0.502 8.231 0.993 8.045 1.37 C 7.846 1.774 7.635 2.317 7.385 2.96 L 6.205 5.995 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Variant=Traffic-cone, Fill=False
    "variant=traffic-cone|fill=false": __body0,
    // figma: Variant=Traffic-coneFill, Fill=True
    "variant=traffic-conefill|fill=true": __body1
  };
  return (__impls[__vkey_IconTrafficCone(props)] ?? __body0)();
}

// figma node: 625:8285 Icon/Xmark (20 variants)
const __venc_IconXmark = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconXmark = p => "variant=" + __venc_IconXmark(p.variant) + '|' + "size=" + __venc_IconXmark(p.size) + '|' + "thin=" + __venc_IconXmark(p.thin) + '|' + "tight=" + __venc_IconXmark(p.tight);
function IconXmark(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "circlelarge",
    size: _p.size ?? "lg",
    thin: _p.thin ?? false,
    tight: _p.tight ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.000,
    height: 18.000,
    viewBox: "0 0 18.000 18.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.293 0.293 C 16.683 -0.098 17.316 -0.098 17.707 0.293 C 18.097 0.683 18.097 1.316 17.707 1.707 L 10.414 9 L 17.707 16.293 C 18.097 16.683 18.097 17.316 17.707 17.707 C 17.316 18.097 16.683 18.097 16.293 17.707 L 9 10.414 L 1.707 17.707 C 1.316 18.097 0.683 18.097 0.293 17.707 C -0.098 17.316 -0.098 16.683 0.293 16.293 L 7.586 9 L 0.293 1.707 C -0.098 1.316 -0.098 0.683 0.293 0.293 C 0.683 -0.098 1.316 -0.098 1.707 0.293 L 9 7.586 L 16.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.599,
    height: 17.599,
    viewBox: "0 0 17.599 17.599",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.2,
      top: 3.2,
      width: 17.599,
      height: 17.599
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.234 0.234 C 16.547 -0.078 17.053 -0.078 17.365 0.234 C 17.678 0.547 17.678 1.053 17.365 1.365 L 9.931 8.8 L 17.365 16.234 C 17.678 16.547 17.678 17.053 17.365 17.365 C 17.053 17.678 16.547 17.678 16.234 17.365 L 8.8 9.931 L 1.365 17.365 C 1.053 17.678 0.547 17.678 0.234 17.365 C -0.078 17.053 -0.078 16.547 0.234 16.234 L 7.669 8.8 L 0.234 1.365 C -0.078 1.053 -0.078 0.547 0.234 0.234 C 0.547 -0.078 1.053 -0.078 1.365 0.234 L 8.8 7.669 L 16.234 0.234 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.000,
    height: 18.000,
    viewBox: "0 0 18.000 18.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.293 0.293 C 16.683 -0.098 17.316 -0.098 17.707 0.293 C 18.097 0.683 18.097 1.316 17.707 1.707 L 10.414 9 L 17.707 16.293 C 18.097 16.683 18.097 17.316 17.707 17.707 C 17.316 18.097 16.683 18.097 16.293 17.707 L 9 10.414 L 1.707 17.707 C 1.316 18.097 0.683 18.097 0.293 17.707 C -0.098 17.316 -0.098 16.683 0.293 16.293 L 7.586 9 L 0.293 1.707 C -0.098 1.316 -0.098 0.683 0.293 0.293 C 0.683 -0.098 1.316 -0.098 1.707 0.293 L 9 7.586 L 16.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.599,
    height: 17.599,
    viewBox: "0 0 17.599 17.599",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.2,
      top: 1.2,
      width: 17.599,
      height: 17.599
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.234 0.234 C 16.547 -0.078 17.053 -0.078 17.365 0.234 C 17.678 0.547 17.678 1.053 17.365 1.365 L 9.931 8.8 L 17.365 16.234 C 17.678 16.547 17.678 17.053 17.365 17.365 C 17.053 17.678 16.547 17.678 16.234 17.365 L 8.8 9.931 L 1.365 17.365 C 1.053 17.678 0.547 17.678 0.234 17.365 C -0.078 17.053 -0.078 16.547 0.234 16.234 L 7.669 8.8 L 0.234 1.365 C -0.078 1.053 -0.078 0.547 0.234 0.234 C 0.547 -0.078 1.053 -0.078 1.365 0.234 L 8.8 7.669 L 16.234 0.234 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.801,
    height: 13.801,
    viewBox: "0 0 13.801 13.801",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.1,
      top: 5.1,
      width: 13.801,
      height: 13.801
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.264 0.264 C 12.615 -0.088 13.186 -0.088 13.537 0.264 C 13.889 0.615 13.889 1.186 13.537 1.537 L 8.174 6.9 L 13.537 12.264 C 13.889 12.615 13.889 13.186 13.537 13.537 C 13.186 13.889 12.615 13.889 12.264 13.537 L 6.9 8.174 L 1.537 13.537 C 1.186 13.889 0.615 13.889 0.264 13.537 C -0.088 13.186 -0.088 12.615 0.264 12.264 L 5.627 6.9 L 0.264 1.537 C -0.088 1.186 -0.088 0.615 0.264 0.264 C 0.615 -0.088 1.186 -0.088 1.537 0.264 L 6.9 5.627 L 12.264 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.400,
    height: 13.400,
    viewBox: "0 0 13.400 13.400",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.3,
      top: 5.3,
      width: 13.4,
      height: 13.4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.205 0.205 C 12.478 -0.068 12.922 -0.068 13.195 0.205 C 13.469 0.478 13.469 0.922 13.195 1.195 L 7.69 6.7 L 13.195 12.205 C 13.469 12.478 13.469 12.922 13.195 13.195 C 12.922 13.469 12.478 13.469 12.205 13.195 L 6.7 7.69 L 1.195 13.195 C 0.922 13.469 0.478 13.469 0.205 13.195 C -0.068 12.922 -0.068 12.478 0.205 12.205 L 5.71 6.7 L 0.205 1.195 C -0.068 0.922 -0.068 0.478 0.205 0.205 C 0.478 -0.068 0.922 -0.068 1.195 0.205 L 6.7 5.71 L 12.205 0.205 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 18,
      height: 18,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.801,
    height: 13.801,
    viewBox: "0 0 13.801 13.801",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.1,
      top: 2.1,
      width: 13.801,
      height: 13.801
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.264 0.264 C 12.615 -0.088 13.186 -0.088 13.537 0.264 C 13.889 0.615 13.889 1.186 13.537 1.537 L 8.174 6.9 L 13.537 12.264 C 13.889 12.615 13.889 13.186 13.537 13.537 C 13.186 13.889 12.615 13.889 12.264 13.537 L 6.9 8.174 L 1.537 13.537 C 1.186 13.889 0.615 13.889 0.264 13.537 C -0.088 13.186 -0.088 12.615 0.264 12.264 L 5.627 6.9 L 0.264 1.537 C -0.088 1.186 -0.088 0.615 0.264 0.264 C 0.615 -0.088 1.186 -0.088 1.537 0.264 L 6.9 5.627 L 12.264 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 18,
      height: 18,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.400,
    height: 13.400,
    viewBox: "0 0 13.400 13.400",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.3,
      top: 2.3,
      width: 13.4,
      height: 13.4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.205 0.205 C 12.478 -0.068 12.922 -0.068 13.195 0.205 C 13.469 0.478 13.469 0.922 13.195 1.195 L 7.69 6.7 L 13.195 12.205 C 13.469 12.478 13.469 12.922 13.195 13.195 C 12.922 13.469 12.478 13.469 12.205 13.195 L 6.7 7.69 L 1.195 13.195 C 0.922 13.469 0.478 13.469 0.205 13.195 C -0.068 12.922 -0.068 12.478 0.205 12.205 L 5.71 6.7 L 0.205 1.195 C -0.068 0.922 -0.068 0.478 0.205 0.205 C 0.478 -0.068 0.922 -0.068 1.195 0.205 L 6.7 5.71 L 12.205 0.205 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.599,
    height: 10.599,
    viewBox: "0 0 10.599 10.599",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.7,
      top: 6.7,
      width: 10.599,
      height: 10.599
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.234 0.234 C 9.547 -0.078 10.053 -0.078 10.365 0.234 C 10.678 0.547 10.678 1.053 10.365 1.365 L 6.431 5.3 L 10.365 9.234 C 10.678 9.547 10.678 10.053 10.365 10.365 C 10.053 10.678 9.547 10.678 9.234 10.365 L 5.3 6.431 L 1.365 10.365 C 1.053 10.678 0.547 10.678 0.234 10.365 C -0.078 10.053 -0.078 9.547 0.234 9.234 L 4.169 5.3 L 0.234 1.365 C -0.078 1.053 -0.078 0.547 0.234 0.234 C 0.547 -0.078 1.053 -0.078 1.365 0.234 L 5.3 4.169 L 9.234 0.234 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.199,
    height: 10.199,
    viewBox: "0 0 10.199 10.199",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.9,
      top: 6.9,
      width: 10.199,
      height: 10.199
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.176 0.176 C 9.41 -0.059 9.789 -0.059 10.023 0.176 C 10.258 0.41 10.258 0.789 10.023 1.023 L 5.947 5.1 L 10.023 9.176 C 10.258 9.41 10.258 9.789 10.023 10.023 C 9.789 10.258 9.41 10.258 9.176 10.023 L 5.1 5.947 L 1.023 10.023 C 0.789 10.258 0.41 10.258 0.176 10.023 C -0.059 9.789 -0.059 9.41 0.176 9.176 L 4.252 5.1 L 0.176 1.023 C -0.059 0.789 -0.059 0.41 0.176 0.176 C 0.41 -0.059 0.789 -0.059 1.023 0.176 L 5.1 4.252 L 9.176 0.176 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 14,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.599,
    height: 10.599,
    viewBox: "0 0 10.599 10.599",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.7,
      top: 1.7,
      width: 10.599,
      height: 10.599
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.234 0.234 C 9.547 -0.078 10.053 -0.078 10.365 0.234 C 10.678 0.547 10.678 1.053 10.365 1.365 L 6.431 5.3 L 10.365 9.234 C 10.678 9.547 10.678 10.053 10.365 10.365 C 10.053 10.678 9.547 10.678 9.234 10.365 L 5.3 6.431 L 1.365 10.365 C 1.053 10.678 0.547 10.678 0.234 10.365 C -0.078 10.053 -0.078 9.547 0.234 9.234 L 4.169 5.3 L 0.234 1.365 C -0.078 1.053 -0.078 0.547 0.234 0.234 C 0.547 -0.078 1.053 -0.078 1.365 0.234 L 5.3 4.169 L 9.234 0.234 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 14,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.199,
    height: 10.199,
    viewBox: "0 0 10.199 10.199",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.9,
      top: 1.9,
      width: 10.199,
      height: 10.199
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.176 0.176 C 9.41 -0.059 9.789 -0.059 10.023 0.176 C 10.258 0.41 10.258 0.789 10.023 1.023 L 5.947 5.1 L 10.023 9.176 C 10.258 9.41 10.258 9.789 10.023 10.023 C 9.789 10.258 9.41 10.258 9.176 10.023 L 5.1 5.947 L 1.023 10.023 C 0.789 10.258 0.41 10.258 0.176 10.023 C -0.059 9.789 -0.059 9.41 0.176 9.176 L 4.252 5.1 L 0.176 1.023 C -0.059 0.789 -0.059 0.41 0.176 0.176 C 0.41 -0.059 0.789 -0.059 1.023 0.176 L 5.1 4.252 L 9.176 0.176 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 10000,
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 Z M 14.065 5.935 C 13.753 5.622 13.247 5.622 12.935 5.935 L 10 8.869 L 7.065 5.935 C 6.753 5.622 6.247 5.622 5.935 5.935 C 5.622 6.247 5.622 6.753 5.935 7.065 L 8.869 10 L 5.935 12.935 C 5.622 13.247 5.622 13.753 5.935 14.065 C 6.247 14.378 6.753 14.378 7.065 14.065 L 10 11.131 L 12.935 14.065 C 13.247 14.378 13.753 14.378 14.065 14.065 C 14.378 13.753 14.378 13.247 14.065 12.935 L 11.131 10 L 14.065 7.065 C 14.378 6.753 14.378 6.247 14.065 5.935 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      borderRadius: 10000,
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 Z M 14.065 5.935 C 13.753 5.622 13.247 5.622 12.935 5.935 L 10 8.869 L 7.065 5.935 C 6.753 5.622 6.247 5.622 5.935 5.935 C 5.622 6.247 5.622 6.753 5.935 7.065 L 8.869 10 L 5.935 12.935 C 5.622 13.247 5.622 13.753 5.935 14.065 C 6.247 14.378 6.753 14.378 7.065 14.065 L 10 11.131 L 12.935 14.065 C 13.247 14.378 13.753 14.378 14.065 14.065 C 14.378 13.753 14.378 13.247 14.065 12.935 L 11.131 10 L 14.065 7.065 C 14.378 6.753 14.378 6.247 14.065 5.935 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 10000,
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 Z M 12.829 5.172 C 12.556 4.899 12.112 4.899 11.839 5.172 L 9 8.01 L 6.162 5.172 C 5.889 4.899 5.445 4.899 5.172 5.172 C 4.899 5.445 4.899 5.889 5.172 6.162 L 8.01 9 L 5.172 11.839 C 4.899 12.112 4.899 12.556 5.172 12.829 C 5.445 13.102 5.889 13.102 6.162 12.829 L 9 9.99 L 11.839 12.829 C 12.112 13.102 12.556 13.102 12.829 12.829 C 13.102 12.556 13.102 12.112 12.829 11.839 L 9.99 9 L 12.829 6.162 C 13.102 5.889 13.102 5.445 12.829 5.172 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 18,
      height: 18,
      borderRadius: 10000,
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 Z M 12.829 5.172 C 12.556 4.899 12.112 4.899 11.839 5.172 L 9 8.01 L 6.162 5.172 C 5.889 4.899 5.445 4.899 5.172 5.172 C 4.899 5.445 4.899 5.889 5.172 6.162 L 8.01 9 L 5.172 11.839 C 4.899 12.112 4.899 12.556 5.172 12.829 C 5.445 13.102 5.889 13.102 6.162 12.829 L 9 9.99 L 11.839 12.829 C 12.112 13.102 12.556 13.102 12.829 12.829 C 13.102 12.556 13.102 12.112 12.829 11.839 L 9.99 9 L 12.829 6.162 C 13.102 5.889 13.102 5.445 12.829 5.172 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.600,
    height: 19.600,
    viewBox: "0 0 19.600 19.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.2,
      top: 2.2,
      width: 19.6,
      height: 19.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 9.8 C 18 5.271 14.329 1.6 9.8 1.6 C 5.271 1.6 1.6 5.271 1.6 9.8 C 1.6 14.329 5.271 18 9.8 18 C 14.329 18 18 14.329 18 9.8 Z M 12.734 5.734 C 13.047 5.422 13.553 5.422 13.865 5.734 C 14.178 6.047 14.178 6.553 13.865 6.865 L 10.931 9.8 L 13.865 12.734 C 14.178 13.047 14.178 13.553 13.865 13.865 C 13.553 14.178 13.047 14.178 12.734 13.865 L 9.8 10.931 L 6.865 13.865 C 6.553 14.178 6.047 14.178 5.734 13.865 C 5.422 13.553 5.422 13.047 5.734 12.734 L 8.669 9.8 L 5.734 6.865 C 5.422 6.553 5.422 6.047 5.734 5.734 C 6.047 5.422 6.553 5.422 6.865 5.734 L 9.8 8.669 L 12.734 5.734 Z M 19.6 9.8 C 19.6 15.212 15.212 19.6 9.8 19.6 C 4.387 19.6 0 15.212 0 9.8 C 0 4.387 4.387 0 9.8 0 C 15.212 0 19.6 4.387 19.6 9.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.600,
    height: 17.600,
    viewBox: "0 0 17.600 17.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.2,
      top: 3.2,
      width: 17.6,
      height: 17.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 8.8 C 16 4.823 12.776 1.6 8.8 1.6 C 4.823 1.6 1.6 4.823 1.6 8.8 C 1.6 12.776 4.823 16 8.8 16 C 12.776 16 16 12.776 16 8.8 Z M 11.346 5.123 C 11.658 4.811 12.164 4.811 12.477 5.123 C 12.789 5.435 12.789 5.941 12.477 6.254 L 9.931 8.8 L 12.477 11.346 C 12.789 11.658 12.789 12.164 12.477 12.477 C 12.164 12.789 11.658 12.789 11.346 12.477 L 8.8 9.931 L 6.254 12.477 C 5.941 12.789 5.435 12.789 5.123 12.477 C 4.811 12.164 4.811 11.658 5.123 11.346 L 7.669 8.8 L 5.123 6.254 C 4.811 5.941 4.811 5.435 5.123 5.123 C 5.435 4.811 5.941 4.811 6.254 5.123 L 8.8 7.669 L 11.346 5.123 Z M 17.6 8.8 C 17.6 13.66 13.66 17.6 8.8 17.6 C 3.94 17.6 0 13.66 0 8.8 C 0 3.94 3.94 0 8.8 0 C 13.66 0 17.6 3.94 17.6 8.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.600,
    height: 19.600,
    viewBox: "0 0 19.600 19.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.2,
      top: 0.2,
      width: 19.6,
      height: 19.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 9.8 C 18 5.271 14.329 1.6 9.8 1.6 C 5.271 1.6 1.6 5.271 1.6 9.8 C 1.6 14.329 5.271 18 9.8 18 C 14.329 18 18 14.329 18 9.8 Z M 12.734 5.734 C 13.047 5.422 13.553 5.422 13.865 5.734 C 14.178 6.047 14.178 6.553 13.865 6.865 L 10.931 9.8 L 13.865 12.734 C 14.178 13.047 14.178 13.553 13.865 13.865 C 13.553 14.178 13.047 14.178 12.734 13.865 L 9.8 10.931 L 6.865 13.865 C 6.553 14.178 6.047 14.178 5.734 13.865 C 5.422 13.553 5.422 13.047 5.734 12.734 L 8.669 9.8 L 5.734 6.865 C 5.422 6.553 5.422 6.047 5.734 5.734 C 6.047 5.422 6.553 5.422 6.865 5.734 L 9.8 8.669 L 12.734 5.734 Z M 19.6 9.8 C 19.6 15.212 15.212 19.6 9.8 19.6 C 4.387 19.6 0 15.212 0 9.8 C 0 4.387 4.387 0 9.8 0 C 15.212 0 19.6 4.387 19.6 9.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 18,
      height: 18,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.600,
    height: 17.600,
    viewBox: "0 0 17.600 17.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.2,
      top: 0.2,
      width: 17.6,
      height: 17.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 8.8 C 16 4.823 12.776 1.6 8.8 1.6 C 4.823 1.6 1.6 4.823 1.6 8.8 C 1.6 12.776 4.823 16 8.8 16 C 12.776 16 16 12.776 16 8.8 Z M 11.346 5.123 C 11.658 4.811 12.164 4.811 12.477 5.123 C 12.789 5.435 12.789 5.941 12.477 6.254 L 9.931 8.8 L 12.477 11.346 C 12.789 11.658 12.789 12.164 12.477 12.477 C 12.164 12.789 11.658 12.789 11.346 12.477 L 8.8 9.931 L 6.254 12.477 C 5.941 12.789 5.435 12.789 5.123 12.477 C 4.811 12.164 4.811 11.658 5.123 11.346 L 7.669 8.8 L 5.123 6.254 C 4.811 5.941 4.811 5.435 5.123 5.123 C 5.435 4.811 5.941 4.811 6.254 5.123 L 8.8 7.669 L 11.346 5.123 Z M 17.6 8.8 C 17.6 13.66 13.66 17.6 8.8 17.6 C 3.94 17.6 0 13.66 0 8.8 C 0 3.94 3.94 0 8.8 0 C 13.66 0 17.6 3.94 17.6 8.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Variant=LineLarge, Size=Large, Tight=False, Thin=False
    "variant=linelarge|size=lg|thin=false|tight=false": __body0,
    // figma: Variant=LineLarge, Size=Large, Tight=False, Thin=True
    "variant=linelarge|size=lg|thin=true|tight=false": __body1,
    // figma: Variant=LineLarge, Size=Large, Tight=True, Thin=False
    "variant=linelarge|size=lg|thin=false|tight=true": __body2,
    // figma: Variant=LineLarge, Size=Large, Tight=True, Thin=True
    "variant=linelarge|size=lg|thin=true|tight=true": __body3,
    // figma: Variant=LineNormal, Size=Normal, Tight=False, Thin=False
    "variant=linenormal|size=normal|thin=false|tight=false": __body4,
    // figma: Variant=LineNormal, Size=Normal, Tight=False, Thin=True
    "variant=linenormal|size=normal|thin=true|tight=false": __body5,
    // figma: Variant=LineNormal, Size=Normal, Tight=True, Thin=False
    "variant=linenormal|size=normal|thin=false|tight=true": __body6,
    // figma: Variant=LineNormal, Size=Normal, Tight=True, Thin=True
    "variant=linenormal|size=normal|thin=true|tight=true": __body7,
    // figma: Variant=LineSmall, Size=Small, Tight=False, Thin=False
    "variant=linesmall|size=sm|thin=false|tight=false": __body8,
    // figma: Variant=LineSmall, Size=Small, Tight=False, Thin=True
    "variant=linesmall|size=sm|thin=true|tight=false": __body9,
    // figma: Variant=LineSmall, Size=Small, Tight=True, Thin=False
    "variant=linesmall|size=sm|thin=false|tight=true": __body10,
    // figma: Variant=LineSmall, Size=Small, Tight=True, Thin=True
    "variant=linesmall|size=sm|thin=true|tight=true": __body11,
    // figma: Variant=CircleLarge, Size=Large, Tight=False, Thin=False
    "variant=circlelarge|size=lg|thin=false|tight=false": __body12,
    // figma: Variant=CircleLarge, Size=Large, Tight=True, Thin=False
    "variant=circlelarge|size=lg|thin=false|tight=true": __body13,
    // figma: Variant=CircleSmall, Size=Small, Tight=False, Thin=False
    "variant=circlesmall|size=sm|thin=false|tight=false": __body14,
    // figma: Variant=CircleSmall, Size=Small, Tight=True, Thin=False
    "variant=circlesmall|size=sm|thin=false|tight=true": __body15,
    // figma: Variant=Circle-lineLarge, Size=Large, Tight=False, Thin=False
    "variant=circle-linelarge|size=lg|thin=false|tight=false": __body16,
    // figma: Variant=Component 3, Size=Small, Tight=False, Thin=False
    "variant=component 3|size=sm|thin=false|tight=false": __body17,
    // figma: Variant=Circle-lineLarge, Size=Large, Tight=False, Thin=True
    "variant=circle-linelarge|size=lg|thin=true|tight=false": __body18,
    // figma: Variant=Component 3, Size=Small, Tight=False, Thin=True
    "variant=component 3|size=sm|thin=true|tight=false": __body19
  };
  return (__impls[__vkey_IconXmark(props)] ?? __body12)();
}

// figma node: 987:8468 Modal/Bottom/Head (3 variants)
const __venc_ModalBottomHead = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ModalBottomHead = p => "headEmpty=" + __venc_ModalBottomHead(p.headEmpty) + '|' + "variant=" + __venc_ModalBottomHead(p.variant);
function ModalBottomHead(_p = {}) {
  const props = {
    ..._p,
    showTitle: _p.showTitle ?? true,
    headEmpty: _p.headEmpty ?? false,
    showFavorite: _p.showFavorite ?? true,
    showDiscription: _p.showDiscription ?? true,
    showX: _p.showX ?? true,
    variant: _p.variant ?? "common"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      overflow: "hidden",
      borderRadius: "8px 8px 0px 0px",
      backgroundColor: "var(--gray-white-ff)",
      display: "flex",
      flexDirection: "column",
      padding: "24px 20px 12px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 22,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.showTitle && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "100%",
      letterSpacing: "-0.030em",
      color: "var(--label-neutral-black)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Label"), props.showX && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconXmark, {
    variant: "linelarge",
    size: "lg",
    thin: false,
    tight: true,
    style: {
      transform: "scale(0.900, 0.900)",
      transformOrigin: "0 0"
    }
  })))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      overflow: "hidden",
      borderRadius: "8px 8px 0px 0px",
      backgroundColor: "var(--gray-white-ff)",
      display: "flex",
      flexDirection: "column",
      padding: "24px 20px 12px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 181,
      top: 13,
      width: 32,
      height: 4,
      borderRadius: 10000,
      backgroundColor: "rgb(217,217,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, props.showTitle && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "100%",
      letterSpacing: "-0.030em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Map label"), props.showDiscription && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Discription")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.showFavorite && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 22,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconStar2, {
    variant: "star",
    fill: false
  }))), props.showX && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 22,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconXmark, {
    variant: "linelarge",
    size: "lg",
    thin: false,
    tight: true,
    style: {
      transform: "scale(0.900, 0.900)",
      transformOrigin: "0 0"
    }
  }))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 32,
      overflow: "hidden",
      borderRadius: "8px 8px 0px 0px",
      backgroundColor: "var(--gray-white-ff)",
      display: "flex",
      flexDirection: "column",
      padding: "24px 20px 12px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  });
  const __impls = {
    // figma: Head Empty=False, Variant=Common
    "headEmpty=false|variant=common": __body0,
    // figma: Head Empty=False, Variant=Map
    "headEmpty=false|variant=map": __body1,
    // figma: Head Empty=True, Variant=Common
    "headEmpty=true|variant=common": __body2
  };
  return (__impls[__vkey_ModalBottomHead(props)] ?? __body0)();
}

// figma node: 743:3620 Pin-label
function PinLabel(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10000,
      backgroundColor: "var(--background-neutral-neutral0)",
      boxShadow: "0 0 0 1px rgba(26,26,26,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 6px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Icon, {
    prop: "harbor"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "부안 청호지"), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 4,
    viewBox: "0 0 6 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 40,
      top: 31,
      width: 6,
      height: 4,
      opacity: 0.15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 4 L 0 0 L 6 0 L 3 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 1004:11461 포인트/바다/항구 모달
function Screen(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 1102,
      backgroundColor: "var(--background-neutral-neutral1)",
      position: "relative",
      color: "rgb(3,199,90)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 120,
      width: 393,
      height: 732,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      height: 732,
      overflow: "hidden",
      backgroundColor: "rgb(165,210,243)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-46f8bbe5fb52420d-c47c4af4",
    style: {
      position: "absolute",
      left: -53,
      top: -186,
      width: 517,
      height: 975
    }
  })), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 196,
      top: 254
    },
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "reservoir",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 216,
      top: 175,
      width: 103
    },
    text1: "양평군(봉상교)",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "bridge",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 102,
      top: 267,
      width: 76
    },
    text1: "가덕도항"
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 49,
      top: 257,
      width: 67
    },
    text1: "비앙도",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "salt water",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 72,
      top: 230,
      width: 104
    },
    text1: "새만금너울쉼터",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "salt water",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 70,
      top: 159,
      width: 76
    },
    text1: "야미도항"
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 52,
      top: 178,
      width: 94
    },
    text1: "신시도선착장",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "salt water",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 621,
      width: 46,
      height: 15,
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.309,
    height: 6.577,
    viewBox: "0 0 34.309 6.577",
    fill: "none",
    style: {
      position: "relative",
      width: 34.309,
      height: 6.577,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.493 0 L 4.493 3.52 L 2.096 0 L 0 0 L 0 6.576 L 2.082 6.576 L 2.082 3.056 L 4.48 6.576 L 6.576 6.576 L 6.576 0 L 4.493 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.863 0 L 7.284 6.576 L 9.465 6.576 L 9.779 5.7 L 12.269 5.7 L 12.584 6.576 L 14.764 6.576 L 12.185 0 L 9.863 0 Z M 11.024 2.111 L 11.759 4.165 L 10.289 4.165 L 11.024 2.111 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 21.81 0 L 21.81 6.576 L 26.96 6.576 L 26.96 4.932 L 23.892 4.932 L 23.892 4.055 L 26.851 4.055 L 26.851 2.521 L 23.892 2.521 L 23.892 1.644 L 26.96 1.644 L 26.96 0 L 21.81 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.374 4.324 L 18.921 0 L 21.114 0 L 18.534 6.576 L 16.213 6.576 L 13.635 0 L 15.827 0 L 17.374 4.324 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 32.847 4.237 L 32.648 4.32 L 32.647 4.321 L 34.309 6.577 L 32.156 6.577 L 30.887 4.714 L 30.139 4.714 L 30.139 6.577 L 28.056 6.577 L 28.056 0.001 L 30.832 0.001 C 31.824 0.001 32.545 0.166 33.1 0.52 C 33.698 0.901 34 1.517 34 2.347 C 34 3.225 33.611 3.917 32.847 4.237 Z M 30.03 3.069 L 31.189 3.069 L 31.189 3.07 C 31.657 3.07 32.019 2.619 31.866 2.13 C 31.775 1.836 31.491 1.645 31.183 1.645 L 30.03 1.645 L 30.03 3.069 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 337,
      top: 73,
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconStar2, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "star",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "linear-gradient(var(--old-grayfb),var(--old-grayfb)), linear-gradient(var(--gray-whiteff),var(--gray-whiteff))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconLayer, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "layer",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconTrafficCone, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "traffic-cone",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconLocation, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "location",
    fill: false
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 16,
      width: 393,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uD3EC\uC778\uD2B8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC870\uD669")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      background: "linear-gradient(var(--background-neutral-neutral0),var(--background-neutral-neutral0)), linear-gradient(rgb(26,26,26),rgb(26,26,26))",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC120\uBC15")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uD654\uC7A5\uC2E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "CCTV")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uB09A\uC2DC\uC6A9\uD488\uC810")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC8FC\uCC28\uC7A5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC219\uC18C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uB9DB\uC9D1"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 384,
      width: 393,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(ModalBottomHead, {
    style: {
      position: "relative",
      height: 58,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    showTitle: true,
    showDiscription: false,
    text1: "포인트 정보",
    text2: "피싱포인트",
    headEmpty: false,
    variant: "map"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-neutral-neutral0)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 24px 60px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 60,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(243,246,251)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 44,
      height: 44,
      borderRadius: 13750.0009765625
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.915,
    height: 14.333,
    viewBox: "0 0 11.915 14.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.043,
      top: 4.834,
      width: 11.915,
      height: 14.333,
      color: "rgb(0,47,185)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.825 18.18 C 3.584 18.18 4.2 17.564 4.2 16.805 C 4.2 16.045 3.584 15.43 2.825 15.43 L 2.825 16.805 L 2.825 18.18 Z M 19.019 15.43 C 18.26 15.43 17.644 16.045 17.644 16.805 C 17.644 17.564 18.26 18.18 19.019 18.18 L 19.019 16.805 L 19.019 15.43 Z M 4.352 9.625 C 3.593 9.625 2.977 10.241 2.977 11 C 2.977 11.759 3.593 12.375 4.352 12.375 L 4.352 11 L 4.352 9.625 Z M 17.497 12.375 C 18.257 12.375 18.872 11.759 18.872 11 C 18.872 10.241 18.257 9.625 17.497 9.625 L 17.497 11 L 17.497 12.375 Z M 0 16.805 L 0 15.43 C -0.39 15.43 -0.761 15.595 -1.022 15.885 C -1.283 16.175 -1.408 16.562 -1.367 16.949 L 0 16.805 Z M 21.844 16.805 L 23.211 16.949 C 23.252 16.562 23.126 16.175 22.866 15.885 C 22.605 15.595 22.233 15.43 21.844 15.43 L 21.844 16.805 Z M 10.922 7.333 L 9.547 7.333 L 9.547 26.278 L 10.922 26.278 L 12.297 26.278 L 12.297 7.333 L 10.922 7.333 Z M 4.352 11 L 4.352 12.375 L 17.497 12.375 L 17.497 11 L 17.497 9.625 L 4.352 9.625 L 4.352 11 Z M 14.588 3.667 L 13.213 3.667 C 13.213 4.932 12.187 5.958 10.922 5.958 L 10.922 7.333 L 10.922 8.708 C 13.706 8.708 15.963 6.451 15.963 3.667 L 14.588 3.667 Z M 10.922 7.333 L 10.922 5.958 C 9.656 5.958 8.63 4.932 8.63 3.667 L 7.255 3.667 L 5.88 3.667 C 5.88 6.451 8.137 8.708 10.922 8.708 L 10.922 7.333 Z M 7.255 3.667 L 8.63 3.667 C 8.63 2.401 9.656 1.375 10.922 1.375 L 10.922 0 L 10.922 -1.375 C 8.137 -1.375 5.88 0.882 5.88 3.667 L 7.255 3.667 Z M 10.922 0 L 10.922 1.375 C 12.187 1.375 13.213 2.401 13.213 3.667 L 14.588 3.667 L 15.963 3.667 C 15.963 0.882 13.706 -1.375 10.922 -1.375 L 10.922 0 Z M 10.922 26.278 L 10.922 24.903 C 9.411 24.903 7.152 24.468 5.216 23.212 C 3.333 21.991 1.718 19.978 1.367 16.66 L 0 16.805 L -1.367 16.949 C -0.922 21.163 1.202 23.887 3.72 25.519 C 6.184 27.117 8.988 27.653 10.922 27.653 L 10.922 26.278 Z M 10.922 26.278 L 10.922 27.653 C 12.856 27.653 15.66 27.117 18.124 25.519 C 20.642 23.887 22.765 21.163 23.211 16.949 L 21.844 16.805 L 20.476 16.66 C 20.125 19.978 18.51 21.991 16.628 23.212 C 14.691 24.468 12.432 24.903 10.922 24.903 L 10.922 26.278 Z M 21.844 16.805 L 21.844 15.43 L 19.019 15.43 L 19.019 16.805 L 19.019 18.18 L 21.844 18.18 L 21.844 16.805 Z M 0 16.805 C 0 18.18 0 18.18 0 18.18 C 0 18.18 0 18.18 0 18.18 C 0 18.18 0 18.18 0 18.18 C 0 18.18 0 18.18 0 18.18 C 0 18.18 0 18.18 0 18.18 C 0 18.18 0 18.18 0 18.18 C 0 18.18 0.001 18.18 0.001 18.18 C 0.001 18.18 0.001 18.18 0.001 18.18 C 0.001 18.18 0.001 18.18 0.001 18.18 C 0.001 18.18 0.001 18.18 0.001 18.18 C 0.001 18.18 0.001 18.18 0.001 18.18 C 0.001 18.18 0.002 18.18 0.002 18.18 C 0.002 18.18 0.002 18.18 0.002 18.18 C 0.002 18.18 0.002 18.18 0.002 18.18 C 0.002 18.18 0.002 18.18 0.003 18.18 C 0.003 18.18 0.003 18.18 0.003 18.18 C 0.003 18.18 0.003 18.18 0.003 18.18 C 0.003 18.18 0.004 18.18 0.004 18.18 C 0.004 18.18 0.004 18.18 0.004 18.18 C 0.004 18.18 0.004 18.18 0.004 18.18 C 0.005 18.18 0.005 18.18 0.005 18.18 C 0.005 18.18 0.005 18.18 0.005 18.18 C 0.006 18.18 0.006 18.18 0.006 18.18 C 0.006 18.18 0.006 18.18 0.006 18.18 C 0.007 18.18 0.007 18.18 0.007 18.18 C 0.007 18.18 0.007 18.18 0.008 18.18 C 0.008 18.18 0.008 18.18 0.008 18.18 C 0.008 18.18 0.009 18.18 0.009 18.18 C 0.009 18.18 0.009 18.18 0.009 18.18 C 0.01 18.18 0.01 18.18 0.01 18.18 C 0.01 18.18 0.01 18.18 0.011 18.18 C 0.011 18.18 0.011 18.18 0.011 18.18 C 0.012 18.18 0.012 18.18 0.012 18.18 C 0.012 18.18 0.013 18.18 0.013 18.18 C 0.013 18.18 0.013 18.18 0.014 18.18 C 0.014 18.18 0.014 18.18 0.014 18.18 C 0.015 18.18 0.015 18.18 0.015 18.18 C 0.015 18.18 0.016 18.18 0.016 18.18 C 0.016 18.18 0.017 18.18 0.017 18.18 C 0.017 18.18 0.017 18.18 0.018 18.18 C 0.018 18.18 0.018 18.18 0.019 18.18 C 0.019 18.18 0.019 18.18 0.02 18.18 C 0.02 18.18 0.02 18.18 0.021 18.18 C 0.021 18.18 0.021 18.18 0.021 18.18 C 0.022 18.18 0.022 18.18 0.022 18.18 C 0.023 18.18 0.023 18.18 0.023 18.18 C 0.024 18.18 0.024 18.18 0.025 18.18 C 0.025 18.18 0.025 18.18 0.026 18.18 C 0.026 18.18 0.026 18.18 0.027 18.18 C 0.027 18.18 0.027 18.18 0.028 18.18 C 0.028 18.18 0.028 18.18 0.029 18.18 C 0.029 18.18 0.03 18.18 0.03 18.18 C 0.03 18.18 0.031 18.18 0.031 18.18 C 0.032 18.18 0.032 18.18 0.032 18.18 C 0.033 18.18 0.033 18.18 0.034 18.18 C 0.034 18.18 0.034 18.18 0.035 18.18 C 0.035 18.18 0.036 18.18 0.036 18.18 C 0.036 18.18 0.037 18.18 0.037 18.18 C 0.038 18.18 0.038 18.18 0.039 18.18 C 0.039 18.18 0.039 18.18 0.04 18.18 C 0.04 18.18 0.041 18.18 0.041 18.18 C 0.042 18.18 0.042 18.18 0.043 18.18 C 0.043 18.18 0.044 18.18 0.044 18.18 C 0.044 18.18 0.045 18.18 0.045 18.18 C 0.046 18.18 0.046 18.18 0.047 18.18 C 0.047 18.18 0.048 18.18 0.048 18.18 C 0.049 18.18 0.049 18.18 0.05 18.18 C 0.05 18.18 0.051 18.18 0.051 18.18 C 0.052 18.18 0.052 18.18 0.053 18.18 C 0.053 18.18 0.054 18.18 0.054 18.18 C 0.055 18.18 0.055 18.18 0.056 18.18 C 0.056 18.18 0.057 18.18 0.057 18.18 C 0.058 18.18 0.058 18.18 0.059 18.18 C 0.06 18.18 0.06 18.18 0.061 18.18 C 0.061 18.18 0.062 18.18 0.062 18.18 C 0.063 18.18 0.063 18.18 0.064 18.18 C 0.064 18.18 0.065 18.18 0.066 18.18 C 0.066 18.18 0.067 18.18 0.067 18.18 C 0.068 18.18 0.068 18.18 0.069 18.18 C 0.07 18.18 0.07 18.18 0.071 18.18 C 0.071 18.18 0.072 18.18 0.073 18.18 C 0.073 18.18 0.074 18.18 0.074 18.18 C 0.075 18.18 0.076 18.18 0.076 18.18 C 0.077 18.18 0.077 18.18 0.078 18.18 C 0.079 18.18 0.079 18.18 0.08 18.18 C 0.081 18.18 0.081 18.18 0.082 18.18 C 0.082 18.18 0.083 18.18 0.084 18.18 C 0.084 18.18 0.085 18.18 0.086 18.18 C 0.086 18.18 0.087 18.18 0.088 18.18 C 0.088 18.18 0.089 18.18 0.09 18.18 C 0.09 18.18 0.091 18.18 0.092 18.18 C 0.092 18.18 0.093 18.18 0.094 18.18 C 0.094 18.18 0.095 18.18 0.096 18.18 C 0.096 18.18 0.097 18.18 0.098 18.18 C 0.098 18.18 0.099 18.18 0.1 18.18 C 0.1 18.18 0.101 18.18 0.102 18.18 C 0.103 18.18 0.103 18.18 0.104 18.18 C 0.105 18.18 0.105 18.18 0.106 18.18 C 0.107 18.18 0.108 18.18 0.108 18.18 C 0.109 18.18 0.11 18.18 0.11 18.18 C 0.111 18.18 0.112 18.18 0.113 18.18 C 0.113 18.18 0.114 18.18 0.115 18.18 C 0.116 18.18 0.116 18.18 0.117 18.18 C 0.118 18.18 0.119 18.18 0.119 18.18 C 0.12 18.18 0.121 18.18 0.122 18.18 C 0.123 18.18 0.123 18.18 0.124 18.18 C 0.125 18.18 0.126 18.18 0.126 18.18 C 0.127 18.18 0.128 18.18 0.129 18.18 C 0.13 18.18 0.13 18.18 0.131 18.18 C 0.132 18.18 0.133 18.18 0.134 18.18 C 0.134 18.18 0.135 18.18 0.136 18.18 C 0.137 18.18 0.138 18.18 0.138 18.18 C 0.139 18.18 0.14 18.18 0.141 18.18 C 0.142 18.18 0.143 18.18 0.143 18.18 C 0.144 18.18 0.145 18.18 0.146 18.18 C 0.147 18.18 0.148 18.18 0.148 18.18 C 0.149 18.18 0.15 18.18 0.151 18.18 C 0.152 18.18 0.153 18.18 0.154 18.18 C 0.155 18.18 0.155 18.18 0.156 18.18 C 0.157 18.18 0.158 18.18 0.159 18.18 C 0.16 18.18 0.161 18.18 0.162 18.18 C 0.162 18.18 0.163 18.18 0.164 18.18 C 0.165 18.18 0.166 18.18 0.167 18.18 C 0.168 18.18 0.169 18.18 0.17 18.18 C 0.171 18.18 0.171 18.18 0.172 18.18 C 0.173 18.18 0.174 18.18 0.175 18.18 C 0.176 18.18 0.177 18.18 0.178 18.18 C 0.179 18.18 0.18 18.18 0.181 18.18 C 0.182 18.18 0.183 18.18 0.183 18.18 C 0.184 18.18 0.185 18.18 0.186 18.18 C 0.187 18.18 0.188 18.18 0.189 18.18 C 0.19 18.18 0.191 18.18 0.192 18.18 C 0.193 18.18 0.194 18.18 0.195 18.18 C 0.196 18.18 0.197 18.18 0.198 18.18 C 0.199 18.18 0.2 18.18 0.201 18.18 C 0.202 18.18 0.203 18.18 0.204 18.18 C 0.205 18.18 0.206 18.18 0.207 18.18 C 0.208 18.18 0.209 18.18 0.21 18.18 C 0.211 18.18 0.212 18.18 0.213 18.18 C 0.214 18.18 0.215 18.18 0.216 18.18 C 0.217 18.18 0.218 18.18 0.219 18.18 C 0.22 18.18 0.221 18.18 0.222 18.18 C 0.223 18.18 0.224 18.18 0.225 18.18 C 0.226 18.18 0.227 18.18 0.228 18.18 C 0.229 18.18 0.231 18.18 0.232 18.18 C 0.233 18.18 0.234 18.18 0.235 18.18 C 0.236 18.18 0.237 18.18 0.238 18.18 C 0.239 18.18 0.24 18.18 0.241 18.18 C 0.242 18.18 0.243 18.18 0.244 18.18 C 0.246 18.18 0.247 18.18 0.248 18.18 C 0.249 18.18 0.25 18.18 0.251 18.18 C 0.252 18.18 0.253 18.18 0.254 18.18 C 0.256 18.18 0.257 18.18 0.258 18.18 C 0.259 18.18 0.26 18.18 0.261 18.18 C 0.262 18.18 0.263 18.18 0.264 18.18 C 0.266 18.18 0.267 18.18 0.268 18.18 C 0.269 18.18 0.27 18.18 0.271 18.18 C 0.272 18.18 0.274 18.18 0.275 18.18 C 0.276 18.18 0.277 18.18 0.278 18.18 C 0.279 18.18 0.281 18.18 0.282 18.18 C 0.283 18.18 0.284 18.18 0.285 18.18 C 0.286 18.18 0.288 18.18 0.289 18.18 C 0.29 18.18 0.291 18.18 0.292 18.18 C 0.294 18.18 0.295 18.18 0.296 18.18 C 0.297 18.18 0.298 18.18 0.3 18.18 C 0.301 18.18 0.302 18.18 0.303 18.18 C 0.304 18.18 0.306 18.18 0.307 18.18 C 0.308 18.18 0.309 18.18 0.31 18.18 C 0.312 18.18 0.313 18.18 0.314 18.18 C 0.315 18.18 0.317 18.18 0.318 18.18 C 0.319 18.18 0.32 18.18 0.322 18.18 C 0.323 18.18 0.324 18.18 0.325 18.18 C 0.327 18.18 0.328 18.18 0.329 18.18 C 0.33 18.18 0.332 18.18 0.333 18.18 C 0.334 18.18 0.335 18.18 0.337 18.18 C 0.338 18.18 0.339 18.18 0.341 18.18 C 0.342 18.18 0.343 18.18 0.344 18.18 C 0.346 18.18 0.347 18.18 0.348 18.18 C 0.35 18.18 0.351 18.18 0.352 18.18 C 0.354 18.18 0.355 18.18 0.356 18.18 C 0.357 18.18 0.359 18.18 0.36 18.18 C 0.361 18.18 0.363 18.18 0.364 18.18 C 0.365 18.18 0.367 18.18 0.368 18.18 C 0.369 18.18 0.371 18.18 0.372 18.18 C 0.373 18.18 0.375 18.18 0.376 18.18 C 0.377 18.18 0.379 18.18 0.38 18.18 C 0.382 18.18 0.383 18.18 0.384 18.18 C 0.386 18.18 0.387 18.18 0.388 18.18 C 0.39 18.18 0.391 18.18 0.392 18.18 C 0.394 18.18 0.395 18.18 0.397 18.18 C 0.398 18.18 0.399 18.18 0.401 18.18 C 0.402 18.18 0.404 18.18 0.405 18.18 C 0.406 18.18 0.408 18.18 0.409 18.18 C 0.411 18.18 0.412 18.18 0.413 18.18 C 0.415 18.18 0.416 18.18 0.418 18.18 C 0.419 18.18 0.42 18.18 0.422 18.18 C 0.423 18.18 0.425 18.18 0.426 18.18 C 0.428 18.18 0.429 18.18 0.43 18.18 C 0.432 18.18 0.433 18.18 0.435 18.18 C 0.436 18.18 0.438 18.18 0.439 18.18 C 0.441 18.18 0.442 18.18 0.444 18.18 C 0.445 18.18 0.446 18.18 0.448 18.18 C 0.449 18.18 0.451 18.18 0.452 18.18 C 0.454 18.18 0.455 18.18 0.457 18.18 C 0.458 18.18 0.46 18.18 0.461 18.18 C 0.463 18.18 0.464 18.18 0.466 18.18 C 0.467 18.18 0.469 18.18 0.47 18.18 C 0.472 18.18 0.473 18.18 0.475 18.18 C 0.476 18.18 0.478 18.18 0.479 18.18 C 0.481 18.18 0.482 18.18 0.484 18.18 C 0.485 18.18 0.487 18.18 0.488 18.18 C 0.49 18.18 0.492 18.18 0.493 18.18 C 0.495 18.18 0.496 18.18 0.498 18.18 C 0.499 18.18 0.501 18.18 0.502 18.18 C 0.504 18.18 0.505 18.18 0.507 18.18 C 0.509 18.18 0.51 18.18 0.512 18.18 C 0.513 18.18 0.515 18.18 0.516 18.18 C 0.518 18.18 0.52 18.18 0.521 18.18 C 0.523 18.18 0.524 18.18 0.526 18.18 C 0.528 18.18 0.529 18.18 0.531 18.18 C 0.532 18.18 0.534 18.18 0.536 18.18 C 0.537 18.18 0.539 18.18 0.54 18.18 C 0.542 18.18 0.544 18.18 0.545 18.18 C 0.547 18.18 0.548 18.18 0.55 18.18 C 0.552 18.18 0.553 18.18 0.555 18.18 C 0.557 18.18 0.558 18.18 0.56 18.18 C 0.562 18.18 0.563 18.18 0.565 18.18 C 0.566 18.18 0.568 18.18 0.57 18.18 C 0.571 18.18 0.573 18.18 0.575 18.18 C 0.576 18.18 0.578 18.18 0.58 18.18 C 0.581 18.18 0.583 18.18 0.585 18.18 C 0.586 18.18 0.588 18.18 0.59 18.18 C 0.591 18.18 0.593 18.18 0.595 18.18 C 0.597 18.18 0.598 18.18 0.6 18.18 C 0.602 18.18 0.603 18.18 0.605 18.18 C 0.607 18.18 0.608 18.18 0.61 18.18 C 0.612 18.18 0.614 18.18 0.615 18.18 C 0.617 18.18 0.619 18.18 0.62 18.18 C 0.622 18.18 0.624 18.18 0.626 18.18 C 0.627 18.18 0.629 18.18 0.631 18.18 C 0.633 18.18 0.634 18.18 0.636 18.18 C 0.638 18.18 0.64 18.18 0.641 18.18 C 0.643 18.18 0.645 18.18 0.647 18.18 C 0.648 18.18 0.65 18.18 0.652 18.18 C 0.654 18.18 0.655 18.18 0.657 18.18 C 0.659 18.18 0.661 18.18 0.663 18.18 C 0.664 18.18 0.666 18.18 0.668 18.18 C 0.67 18.18 0.672 18.18 0.673 18.18 C 0.675 18.18 0.677 18.18 0.679 18.18 C 0.681 18.18 0.682 18.18 0.684 18.18 C 0.686 18.18 0.688 18.18 0.69 18.18 C 0.691 18.18 0.693 18.18 0.695 18.18 C 0.697 18.18 0.699 18.18 0.701 18.18 C 0.702 18.18 0.704 18.18 0.706 18.18 C 0.708 18.18 0.71 18.18 0.712 18.18 C 0.713 18.18 0.715 18.18 0.717 18.18 C 0.719 18.18 0.721 18.18 0.723 18.18 C 0.725 18.18 0.726 18.18 0.728 18.18 C 0.73 18.18 0.732 18.18 0.734 18.18 C 0.736 18.18 0.738 18.18 0.74 18.18 C 0.741 18.18 0.743 18.18 0.745 18.18 C 0.747 18.18 0.749 18.18 0.751 18.18 C 0.753 18.18 0.755 18.18 0.757 18.18 C 0.758 18.18 0.76 18.18 0.762 18.18 C 0.764 18.18 0.766 18.18 0.768 18.18 C 0.77 18.18 0.772 18.18 0.774 18.18 C 0.776 18.18 0.778 18.18 0.78 18.18 C 0.781 18.18 0.783 18.18 0.785 18.18 C 0.787 18.18 0.789 18.18 0.791 18.18 C 0.793 18.18 0.795 18.18 0.797 18.18 C 0.799 18.18 0.801 18.18 0.803 18.18 C 0.805 18.18 0.807 18.18 0.809 18.18 C 0.811 18.18 0.813 18.18 0.815 18.18 C 0.817 18.18 0.819 18.18 0.821 18.18 C 0.823 18.18 0.825 18.18 0.827 18.18 C 0.829 18.18 0.831 18.18 0.833 18.18 C 0.835 18.18 0.837 18.18 0.839 18.18 C 0.841 18.18 0.843 18.18 0.845 18.18 C 0.847 18.18 0.849 18.18 0.851 18.18 C 0.853 18.18 0.855 18.18 0.857 18.18 C 0.859 18.18 0.861 18.18 0.863 18.18 C 0.865 18.18 0.867 18.18 0.869 18.18 C 0.871 18.18 0.873 18.18 0.875 18.18 C 0.877 18.18 0.879 18.18 0.881 18.18 C 0.883 18.18 0.885 18.18 0.887 18.18 C 0.889 18.18 0.891 18.18 0.893 18.18 C 0.895 18.18 0.898 18.18 0.9 18.18 C 0.902 18.18 0.904 18.18 0.906 18.18 C 0.908 18.18 0.91 18.18 0.912 18.18 C 0.914 18.18 0.916 18.18 0.918 18.18 C 0.92 18.18 0.923 18.18 0.925 18.18 C 0.927 18.18 0.929 18.18 0.931 18.18 C 0.933 18.18 0.935 18.18 0.937 18.18 C 0.939 18.18 0.942 18.18 0.944 18.18 C 0.946 18.18 0.948 18.18 0.95 18.18 C 0.952 18.18 0.954 18.18 0.956 18.18 C 0.959 18.18 0.961 18.18 0.963 18.18 C 0.965 18.18 0.967 18.18 0.969 18.18 C 0.971 18.18 0.974 18.18 0.976 18.18 C 0.978 18.18 0.98 18.18 0.982 18.18 C 0.984 18.18 0.987 18.18 0.989 18.18 C 0.991 18.18 0.993 18.18 0.995 18.18 C 0.997 18.18 1 18.18 1.002 18.18 C 1.004 18.18 1.006 18.18 1.008 18.18 C 1.011 18.18 1.013 18.18 1.015 18.18 C 1.017 18.18 1.019 18.18 1.022 18.18 C 1.024 18.18 1.026 18.18 1.028 18.18 C 1.03 18.18 1.033 18.18 1.035 18.18 C 1.037 18.18 1.039 18.18 1.041 18.18 C 1.044 18.18 1.046 18.18 1.048 18.18 C 1.05 18.18 1.053 18.18 1.055 18.18 C 1.057 18.18 1.059 18.18 1.062 18.18 C 1.064 18.18 1.066 18.18 1.068 18.18 C 1.071 18.18 1.073 18.18 1.075 18.18 C 1.077 18.18 1.08 18.18 1.082 18.18 C 1.084 18.18 1.086 18.18 1.089 18.18 C 1.091 18.18 1.093 18.18 1.096 18.18 C 1.098 18.18 1.1 18.18 1.102 18.18 C 1.105 18.18 1.107 18.18 1.109 18.18 C 1.112 18.18 1.114 18.18 1.116 18.18 C 1.118 18.18 1.121 18.18 1.123 18.18 C 1.125 18.18 1.128 18.18 1.13 18.18 C 1.132 18.18 1.135 18.18 1.137 18.18 C 1.139 18.18 1.142 18.18 1.144 18.18 C 1.146 18.18 1.149 18.18 1.151 18.18 C 1.153 18.18 1.156 18.18 1.158 18.18 C 1.16 18.18 1.163 18.18 1.165 18.18 C 1.167 18.18 1.17 18.18 1.172 18.18 C 1.174 18.18 1.177 18.18 1.179 18.18 C 1.182 18.18 1.184 18.18 1.186 18.18 C 1.189 18.18 1.191 18.18 1.193 18.18 C 1.196 18.18 1.198 18.18 1.201 18.18 C 1.203 18.18 1.205 18.18 1.208 18.18 C 1.21 18.18 1.213 18.18 1.215 18.18 C 1.217 18.18 1.22 18.18 1.222 18.18 C 1.225 18.18 1.227 18.18 1.229 18.18 C 1.232 18.18 1.234 18.18 1.237 18.18 C 1.239 18.18 1.242 18.18 1.244 18.18 C 1.246 18.18 1.249 18.18 1.251 18.18 C 1.254 18.18 1.256 18.18 1.259 18.18 C 1.261 18.18 1.263 18.18 1.266 18.18 C 1.268 18.18 1.271 18.18 1.273 18.18 C 1.276 18.18 1.278 18.18 1.281 18.18 C 1.283 18.18 1.286 18.18 1.288 18.18 C 1.29 18.18 1.293 18.18 1.295 18.18 C 1.298 18.18 1.3 18.18 1.303 18.18 C 1.305 18.18 1.308 18.18 1.31 18.18 C 1.313 18.18 1.315 18.18 1.318 18.18 C 1.32 18.18 1.323 18.18 1.325 18.18 C 1.328 18.18 1.33 18.18 1.333 18.18 C 1.335 18.18 1.338 18.18 1.34 18.18 C 1.343 18.18 1.345 18.18 1.348 18.18 C 1.351 18.18 1.353 18.18 1.356 18.18 C 1.358 18.18 1.361 18.18 1.363 18.18 C 1.366 18.18 1.368 18.18 1.371 18.18 C 1.373 18.18 1.376 18.18 1.378 18.18 C 1.381 18.18 1.384 18.18 1.386 18.18 C 1.389 18.18 1.391 18.18 1.394 18.18 C 1.396 18.18 1.399 18.18 1.402 18.18 C 1.404 18.18 1.407 18.18 1.409 18.18 C 1.412 18.18 1.414 18.18 1.417 18.18 C 1.42 18.18 1.422 18.18 1.425 18.18 C 1.427 18.18 1.43 18.18 1.433 18.18 C 1.435 18.18 1.438 18.18 1.44 18.18 C 1.443 18.18 1.446 18.18 1.448 18.18 C 1.451 18.18 1.453 18.18 1.456 18.18 C 1.459 18.18 1.461 18.18 1.464 18.18 C 1.467 18.18 1.469 18.18 1.472 18.18 C 1.475 18.18 1.477 18.18 1.48 18.18 C 1.482 18.18 1.485 18.18 1.488 18.18 C 1.49 18.18 1.493 18.18 1.496 18.18 C 1.498 18.18 1.501 18.18 1.504 18.18 C 1.506 18.18 1.509 18.18 1.512 18.18 C 1.514 18.18 1.517 18.18 1.52 18.18 C 1.522 18.18 1.525 18.18 1.528 18.18 C 1.53 18.18 1.533 18.18 1.536 18.18 C 1.539 18.18 1.541 18.18 1.544 18.18 C 1.547 18.18 1.549 18.18 1.552 18.18 C 1.555 18.18 1.557 18.18 1.56 18.18 C 1.563 18.18 1.566 18.18 1.568 18.18 C 1.571 18.18 1.574 18.18 1.576 18.18 C 1.579 18.18 1.582 18.18 1.585 18.18 C 1.587 18.18 1.59 18.18 1.593 18.18 C 1.596 18.18 1.598 18.18 1.601 18.18 C 1.604 18.18 1.607 18.18 1.609 18.18 C 1.612 18.18 1.615 18.18 1.618 18.18 C 1.62 18.18 1.623 18.18 1.626 18.18 C 1.629 18.18 1.631 18.18 1.634 18.18 C 1.637 18.18 1.64 18.18 1.643 18.18 C 1.645 18.18 1.648 18.18 1.651 18.18 C 1.654 18.18 1.657 18.18 1.659 18.18 C 1.662 18.18 1.665 18.18 1.668 18.18 C 1.671 18.18 1.673 18.18 1.676 18.18 C 1.679 18.18 1.682 18.18 1.685 18.18 C 1.687 18.18 1.69 18.18 1.693 18.18 C 1.696 18.18 1.699 18.18 1.702 18.18 C 1.704 18.18 1.707 18.18 1.71 18.18 C 1.713 18.18 1.716 18.18 1.719 18.18 C 1.721 18.18 1.724 18.18 1.727 18.18 C 1.73 18.18 1.733 18.18 1.736 18.18 C 1.739 18.18 1.741 18.18 1.744 18.18 C 1.747 18.18 1.75 18.18 1.753 18.18 C 1.756 18.18 1.759 18.18 1.761 18.18 C 1.764 18.18 1.767 18.18 1.77 18.18 C 1.773 18.18 1.776 18.18 1.779 18.18 C 1.782 18.18 1.785 18.18 1.787 18.18 C 1.79 18.18 1.793 18.18 1.796 18.18 C 1.799 18.18 1.802 18.18 1.805 18.18 C 1.808 18.18 1.811 18.18 1.814 18.18 C 1.817 18.18 1.82 18.18 1.822 18.18 C 1.825 18.18 1.828 18.18 1.831 18.18 C 1.834 18.18 1.837 18.18 1.84 18.18 C 1.843 18.18 1.846 18.18 1.849 18.18 C 1.852 18.18 1.855 18.18 1.858 18.18 C 1.861 18.18 1.864 18.18 1.867 18.18 C 1.87 18.18 1.873 18.18 1.875 18.18 C 1.878 18.18 1.881 18.18 1.884 18.18 C 1.887 18.18 1.89 18.18 1.893 18.18 C 1.896 18.18 1.899 18.18 1.902 18.18 C 1.905 18.18 1.908 18.18 1.911 18.18 C 1.914 18.18 1.917 18.18 1.92 18.18 C 1.923 18.18 1.926 18.18 1.929 18.18 C 1.932 18.18 1.935 18.18 1.938 18.18 C 1.941 18.18 1.944 18.18 1.947 18.18 C 1.95 18.18 1.953 18.18 1.956 18.18 C 1.959 18.18 1.963 18.18 1.966 18.18 C 1.969 18.18 1.972 18.18 1.975 18.18 C 1.978 18.18 1.981 18.18 1.984 18.18 C 1.987 18.18 1.99 18.18 1.993 18.18 C 1.996 18.18 1.999 18.18 2.002 18.18 C 2.005 18.18 2.008 18.18 2.011 18.18 C 2.014 18.18 2.018 18.18 2.021 18.18 C 2.024 18.18 2.027 18.18 2.03 18.18 C 2.033 18.18 2.036 18.18 2.039 18.18 C 2.042 18.18 2.045 18.18 2.048 18.18 C 2.051 18.18 2.055 18.18 2.058 18.18 C 2.061 18.18 2.064 18.18 2.067 18.18 C 2.07 18.18 2.073 18.18 2.076 18.18 C 2.079 18.18 2.083 18.18 2.086 18.18 C 2.089 18.18 2.092 18.18 2.095 18.18 C 2.098 18.18 2.101 18.18 2.105 18.18 C 2.108 18.18 2.111 18.18 2.114 18.18 C 2.117 18.18 2.12 18.18 2.123 18.18 C 2.127 18.18 2.13 18.18 2.133 18.18 C 2.136 18.18 2.139 18.18 2.142 18.18 C 2.146 18.18 2.149 18.18 2.152 18.18 C 2.155 18.18 2.158 18.18 2.161 18.18 C 2.165 18.18 2.168 18.18 2.171 18.18 C 2.174 18.18 2.177 18.18 2.181 18.18 C 2.184 18.18 2.187 18.18 2.19 18.18 C 2.193 18.18 2.197 18.18 2.2 18.18 C 2.203 18.18 2.206 18.18 2.209 18.18 C 2.213 18.18 2.216 18.18 2.219 18.18 C 2.222 18.18 2.225 18.18 2.229 18.18 C 2.232 18.18 2.235 18.18 2.238 18.18 C 2.242 18.18 2.245 18.18 2.248 18.18 C 2.251 18.18 2.255 18.18 2.258 18.18 C 2.261 18.18 2.264 18.18 2.268 18.18 C 2.271 18.18 2.274 18.18 2.277 18.18 C 2.281 18.18 2.284 18.18 2.287 18.18 C 2.29 18.18 2.294 18.18 2.297 18.18 C 2.3 18.18 2.304 18.18 2.307 18.18 C 2.31 18.18 2.313 18.18 2.317 18.18 C 2.32 18.18 2.323 18.18 2.327 18.18 C 2.33 18.18 2.333 18.18 2.336 18.18 C 2.34 18.18 2.343 18.18 2.346 18.18 C 2.35 18.18 2.353 18.18 2.356 18.18 C 2.36 18.18 2.363 18.18 2.366 18.18 C 2.37 18.18 2.373 18.18 2.376 18.18 C 2.38 18.18 2.383 18.18 2.386 18.18 C 2.39 18.18 2.393 18.18 2.396 18.18 C 2.4 18.18 2.403 18.18 2.406 18.18 C 2.41 18.18 2.413 18.18 2.416 18.18 C 2.42 18.18 2.423 18.18 2.426 18.18 C 2.43 18.18 2.433 18.18 2.437 18.18 C 2.44 18.18 2.443 18.18 2.447 18.18 C 2.45 18.18 2.453 18.18 2.457 18.18 C 2.46 18.18 2.464 18.18 2.467 18.18 C 2.47 18.18 2.474 18.18 2.477 18.18 C 2.481 18.18 2.484 18.18 2.487 18.18 C 2.491 18.18 2.494 18.18 2.498 18.18 C 2.501 18.18 2.504 18.18 2.508 18.18 C 2.511 18.18 2.515 18.18 2.518 18.18 C 2.522 18.18 2.525 18.18 2.528 18.18 C 2.532 18.18 2.535 18.18 2.539 18.18 C 2.542 18.18 2.546 18.18 2.549 18.18 C 2.552 18.18 2.556 18.18 2.559 18.18 C 2.563 18.18 2.566 18.18 2.57 18.18 C 2.573 18.18 2.577 18.18 2.58 18.18 C 2.584 18.18 2.587 18.18 2.591 18.18 C 2.594 18.18 2.597 18.18 2.601 18.18 C 2.604 18.18 2.608 18.18 2.611 18.18 C 2.615 18.18 2.618 18.18 2.622 18.18 C 2.625 18.18 2.629 18.18 2.632 18.18 C 2.636 18.18 2.639 18.18 2.643 18.18 C 2.646 18.18 2.65 18.18 2.653 18.18 C 2.657 18.18 2.66 18.18 2.664 18.18 C 2.667 18.18 2.671 18.18 2.674 18.18 C 2.678 18.18 2.682 18.18 2.685 18.18 C 2.689 18.18 2.692 18.18 2.696 18.18 C 2.699 18.18 2.703 18.18 2.706 18.18 C 2.71 18.18 2.713 18.18 2.717 18.18 C 2.721 18.18 2.724 18.18 2.728 18.18 C 2.731 18.18 2.735 18.18 2.738 18.18 C 2.742 18.18 2.745 18.18 2.749 18.18 C 2.753 18.18 2.756 18.18 2.76 18.18 C 2.763 18.18 2.767 18.18 2.771 18.18 C 2.774 18.18 2.778 18.18 2.781 18.18 C 2.785 18.18 2.788 18.18 2.792 18.18 C 2.796 18.18 2.799 18.18 2.803 18.18 C 2.807 18.18 2.81 18.18 2.814 18.18 C 2.817 18.18 2.821 18.18 2.825 18.18 L 2.825 16.805 L 2.825 15.43 C 2.821 15.43 2.817 15.43 2.814 15.43 C 2.81 15.43 2.807 15.43 2.803 15.43 C 2.799 15.43 2.796 15.43 2.792 15.43 C 2.788 15.43 2.785 15.43 2.781 15.43 C 2.778 15.43 2.774 15.43 2.771 15.43 C 2.767 15.43 2.763 15.43 2.76 15.43 C 2.756 15.43 2.753 15.43 2.749 15.43 C 2.745 15.43 2.742 15.43 2.738 15.43 C 2.735 15.43 2.731 15.43 2.728 15.43 C 2.724 15.43 2.721 15.43 2.717 15.43 C 2.713 15.43 2.71 15.43 2.706 15.43 C 2.703 15.43 2.699 15.43 2.696 15.43 C 2.692 15.43 2.689 15.43 2.685 15.43 C 2.682 15.43 2.678 15.43 2.674 15.43 C 2.671 15.43 2.667 15.43 2.664 15.43 C 2.66 15.43 2.657 15.43 2.653 15.43 C 2.65 15.43 2.646 15.43 2.643 15.43 C 2.639 15.43 2.636 15.43 2.632 15.43 C 2.629 15.43 2.625 15.43 2.622 15.43 C 2.618 15.43 2.615 15.43 2.611 15.43 C 2.608 15.43 2.604 15.43 2.601 15.43 C 2.597 15.43 2.594 15.43 2.591 15.43 C 2.587 15.43 2.584 15.43 2.58 15.43 C 2.577 15.43 2.573 15.43 2.57 15.43 C 2.566 15.43 2.563 15.43 2.559 15.43 C 2.556 15.43 2.552 15.43 2.549 15.43 C 2.546 15.43 2.542 15.43 2.539 15.43 C 2.535 15.43 2.532 15.43 2.528 15.43 C 2.525 15.43 2.522 15.43 2.518 15.43 C 2.515 15.43 2.511 15.43 2.508 15.43 C 2.504 15.43 2.501 15.43 2.498 15.43 C 2.494 15.43 2.491 15.43 2.487 15.43 C 2.484 15.43 2.481 15.43 2.477 15.43 C 2.474 15.43 2.47 15.43 2.467 15.43 C 2.464 15.43 2.46 15.43 2.457 15.43 C 2.453 15.43 2.45 15.43 2.447 15.43 C 2.443 15.43 2.44 15.43 2.437 15.43 C 2.433 15.43 2.43 15.43 2.426 15.43 C 2.423 15.43 2.42 15.43 2.416 15.43 C 2.413 15.43 2.41 15.43 2.406 15.43 C 2.403 15.43 2.4 15.43 2.396 15.43 C 2.393 15.43 2.39 15.43 2.386 15.43 C 2.383 15.43 2.38 15.43 2.376 15.43 C 2.373 15.43 2.37 15.43 2.366 15.43 C 2.363 15.43 2.36 15.43 2.356 15.43 C 2.353 15.43 2.35 15.43 2.346 15.43 C 2.343 15.43 2.34 15.43 2.336 15.43 C 2.333 15.43 2.33 15.43 2.327 15.43 C 2.323 15.43 2.32 15.43 2.317 15.43 C 2.313 15.43 2.31 15.43 2.307 15.43 C 2.304 15.43 2.3 15.43 2.297 15.43 C 2.294 15.43 2.29 15.43 2.287 15.43 C 2.284 15.43 2.281 15.43 2.277 15.43 C 2.274 15.43 2.271 15.43 2.268 15.43 C 2.264 15.43 2.261 15.43 2.258 15.43 C 2.255 15.43 2.251 15.43 2.248 15.43 C 2.245 15.43 2.242 15.43 2.238 15.43 C 2.235 15.43 2.232 15.43 2.229 15.43 C 2.225 15.43 2.222 15.43 2.219 15.43 C 2.216 15.43 2.213 15.43 2.209 15.43 C 2.206 15.43 2.203 15.43 2.2 15.43 C 2.197 15.43 2.193 15.43 2.19 15.43 C 2.187 15.43 2.184 15.43 2.181 15.43 C 2.177 15.43 2.174 15.43 2.171 15.43 C 2.168 15.43 2.165 15.43 2.161 15.43 C 2.158 15.43 2.155 15.43 2.152 15.43 C 2.149 15.43 2.146 15.43 2.142 15.43 C 2.139 15.43 2.136 15.43 2.133 15.43 C 2.13 15.43 2.127 15.43 2.123 15.43 C 2.12 15.43 2.117 15.43 2.114 15.43 C 2.111 15.43 2.108 15.43 2.105 15.43 C 2.101 15.43 2.098 15.43 2.095 15.43 C 2.092 15.43 2.089 15.43 2.086 15.43 C 2.083 15.43 2.079 15.43 2.076 15.43 C 2.073 15.43 2.07 15.43 2.067 15.43 C 2.064 15.43 2.061 15.43 2.058 15.43 C 2.055 15.43 2.051 15.43 2.048 15.43 C 2.045 15.43 2.042 15.43 2.039 15.43 C 2.036 15.43 2.033 15.43 2.03 15.43 C 2.027 15.43 2.024 15.43 2.021 15.43 C 2.018 15.43 2.014 15.43 2.011 15.43 C 2.008 15.43 2.005 15.43 2.002 15.43 C 1.999 15.43 1.996 15.43 1.993 15.43 C 1.99 15.43 1.987 15.43 1.984 15.43 C 1.981 15.43 1.978 15.43 1.975 15.43 C 1.972 15.43 1.969 15.43 1.966 15.43 C 1.963 15.43 1.959 15.43 1.956 15.43 C 1.953 15.43 1.95 15.43 1.947 15.43 C 1.944 15.43 1.941 15.43 1.938 15.43 C 1.935 15.43 1.932 15.43 1.929 15.43 C 1.926 15.43 1.923 15.43 1.92 15.43 C 1.917 15.43 1.914 15.43 1.911 15.43 C 1.908 15.43 1.905 15.43 1.902 15.43 C 1.899 15.43 1.896 15.43 1.893 15.43 C 1.89 15.43 1.887 15.43 1.884 15.43 C 1.881 15.43 1.878 15.43 1.875 15.43 C 1.873 15.43 1.87 15.43 1.867 15.43 C 1.864 15.43 1.861 15.43 1.858 15.43 C 1.855 15.43 1.852 15.43 1.849 15.43 C 1.846 15.43 1.843 15.43 1.84 15.43 C 1.837 15.43 1.834 15.43 1.831 15.43 C 1.828 15.43 1.825 15.43 1.822 15.43 C 1.82 15.43 1.817 15.43 1.814 15.43 C 1.811 15.43 1.808 15.43 1.805 15.43 C 1.802 15.43 1.799 15.43 1.796 15.43 C 1.793 15.43 1.79 15.43 1.787 15.43 C 1.785 15.43 1.782 15.43 1.779 15.43 C 1.776 15.43 1.773 15.43 1.77 15.43 C 1.767 15.43 1.764 15.43 1.761 15.43 C 1.759 15.43 1.756 15.43 1.753 15.43 C 1.75 15.43 1.747 15.43 1.744 15.43 C 1.741 15.43 1.739 15.43 1.736 15.43 C 1.733 15.43 1.73 15.43 1.727 15.43 C 1.724 15.43 1.721 15.43 1.719 15.43 C 1.716 15.43 1.713 15.43 1.71 15.43 C 1.707 15.43 1.704 15.43 1.702 15.43 C 1.699 15.43 1.696 15.43 1.693 15.43 C 1.69 15.43 1.687 15.43 1.685 15.43 C 1.682 15.43 1.679 15.43 1.676 15.43 C 1.673 15.43 1.671 15.43 1.668 15.43 C 1.665 15.43 1.662 15.43 1.659 15.43 C 1.657 15.43 1.654 15.43 1.651 15.43 C 1.648 15.43 1.645 15.43 1.643 15.43 C 1.64 15.43 1.637 15.43 1.634 15.43 C 1.631 15.43 1.629 15.43 1.626 15.43 C 1.623 15.43 1.62 15.43 1.618 15.43 C 1.615 15.43 1.612 15.43 1.609 15.43 C 1.607 15.43 1.604 15.43 1.601 15.43 C 1.598 15.43 1.596 15.43 1.593 15.43 C 1.59 15.43 1.587 15.43 1.585 15.43 C 1.582 15.43 1.579 15.43 1.576 15.43 C 1.574 15.43 1.571 15.43 1.568 15.43 C 1.566 15.43 1.563 15.43 1.56 15.43 C 1.557 15.43 1.555 15.43 1.552 15.43 C 1.549 15.43 1.547 15.43 1.544 15.43 C 1.541 15.43 1.539 15.43 1.536 15.43 C 1.533 15.43 1.53 15.43 1.528 15.43 C 1.525 15.43 1.522 15.43 1.52 15.43 C 1.517 15.43 1.514 15.43 1.512 15.43 C 1.509 15.43 1.506 15.43 1.504 15.43 C 1.501 15.43 1.498 15.43 1.496 15.43 C 1.493 15.43 1.49 15.43 1.488 15.43 C 1.485 15.43 1.482 15.43 1.48 15.43 C 1.477 15.43 1.475 15.43 1.472 15.43 C 1.469 15.43 1.467 15.43 1.464 15.43 C 1.461 15.43 1.459 15.43 1.456 15.43 C 1.453 15.43 1.451 15.43 1.448 15.43 C 1.446 15.43 1.443 15.43 1.44 15.43 C 1.438 15.43 1.435 15.43 1.433 15.43 C 1.43 15.43 1.427 15.43 1.425 15.43 C 1.422 15.43 1.42 15.43 1.417 15.43 C 1.414 15.43 1.412 15.43 1.409 15.43 C 1.407 15.43 1.404 15.43 1.402 15.43 C 1.399 15.43 1.396 15.43 1.394 15.43 C 1.391 15.43 1.389 15.43 1.386 15.43 C 1.384 15.43 1.381 15.43 1.378 15.43 C 1.376 15.43 1.373 15.43 1.371 15.43 C 1.368 15.43 1.366 15.43 1.363 15.43 C 1.361 15.43 1.358 15.43 1.356 15.43 C 1.353 15.43 1.351 15.43 1.348 15.43 C 1.345 15.43 1.343 15.43 1.34 15.43 C 1.338 15.43 1.335 15.43 1.333 15.43 C 1.33 15.43 1.328 15.43 1.325 15.43 C 1.323 15.43 1.32 15.43 1.318 15.43 C 1.315 15.43 1.313 15.43 1.31 15.43 C 1.308 15.43 1.305 15.43 1.303 15.43 C 1.3 15.43 1.298 15.43 1.295 15.43 C 1.293 15.43 1.29 15.43 1.288 15.43 C 1.286 15.43 1.283 15.43 1.281 15.43 C 1.278 15.43 1.276 15.43 1.273 15.43 C 1.271 15.43 1.268 15.43 1.266 15.43 C 1.263 15.43 1.261 15.43 1.259 15.43 C 1.256 15.43 1.254 15.43 1.251 15.43 C 1.249 15.43 1.246 15.43 1.244 15.43 C 1.242 15.43 1.239 15.43 1.237 15.43 C 1.234 15.43 1.232 15.43 1.229 15.43 C 1.227 15.43 1.225 15.43 1.222 15.43 C 1.22 15.43 1.217 15.43 1.215 15.43 C 1.213 15.43 1.21 15.43 1.208 15.43 C 1.205 15.43 1.203 15.43 1.201 15.43 C 1.198 15.43 1.196 15.43 1.193 15.43 C 1.191 15.43 1.189 15.43 1.186 15.43 C 1.184 15.43 1.182 15.43 1.179 15.43 C 1.177 15.43 1.174 15.43 1.172 15.43 C 1.17 15.43 1.167 15.43 1.165 15.43 C 1.163 15.43 1.16 15.43 1.158 15.43 C 1.156 15.43 1.153 15.43 1.151 15.43 C 1.149 15.43 1.146 15.43 1.144 15.43 C 1.142 15.43 1.139 15.43 1.137 15.43 C 1.135 15.43 1.132 15.43 1.13 15.43 C 1.128 15.43 1.125 15.43 1.123 15.43 C 1.121 15.43 1.118 15.43 1.116 15.43 C 1.114 15.43 1.112 15.43 1.109 15.43 C 1.107 15.43 1.105 15.43 1.102 15.43 C 1.1 15.43 1.098 15.43 1.096 15.43 C 1.093 15.43 1.091 15.43 1.089 15.43 C 1.086 15.43 1.084 15.43 1.082 15.43 C 1.08 15.43 1.077 15.43 1.075 15.43 C 1.073 15.43 1.071 15.43 1.068 15.43 C 1.066 15.43 1.064 15.43 1.062 15.43 C 1.059 15.43 1.057 15.43 1.055 15.43 C 1.053 15.43 1.05 15.43 1.048 15.43 C 1.046 15.43 1.044 15.43 1.041 15.43 C 1.039 15.43 1.037 15.43 1.035 15.43 C 1.033 15.43 1.03 15.43 1.028 15.43 C 1.026 15.43 1.024 15.43 1.022 15.43 C 1.019 15.43 1.017 15.43 1.015 15.43 C 1.013 15.43 1.011 15.43 1.008 15.43 C 1.006 15.43 1.004 15.43 1.002 15.43 C 1 15.43 0.997 15.43 0.995 15.43 C 0.993 15.43 0.991 15.43 0.989 15.43 C 0.987 15.43 0.984 15.43 0.982 15.43 C 0.98 15.43 0.978 15.43 0.976 15.43 C 0.974 15.43 0.971 15.43 0.969 15.43 C 0.967 15.43 0.965 15.43 0.963 15.43 C 0.961 15.43 0.959 15.43 0.956 15.43 C 0.954 15.43 0.952 15.43 0.95 15.43 C 0.948 15.43 0.946 15.43 0.944 15.43 C 0.942 15.43 0.939 15.43 0.937 15.43 C 0.935 15.43 0.933 15.43 0.931 15.43 C 0.929 15.43 0.927 15.43 0.925 15.43 C 0.923 15.43 0.92 15.43 0.918 15.43 C 0.916 15.43 0.914 15.43 0.912 15.43 C 0.91 15.43 0.908 15.43 0.906 15.43 C 0.904 15.43 0.902 15.43 0.9 15.43 C 0.898 15.43 0.895 15.43 0.893 15.43 C 0.891 15.43 0.889 15.43 0.887 15.43 C 0.885 15.43 0.883 15.43 0.881 15.43 C 0.879 15.43 0.877 15.43 0.875 15.43 C 0.873 15.43 0.871 15.43 0.869 15.43 C 0.867 15.43 0.865 15.43 0.863 15.43 C 0.861 15.43 0.859 15.43 0.857 15.43 C 0.855 15.43 0.853 15.43 0.851 15.43 C 0.849 15.43 0.847 15.43 0.845 15.43 C 0.843 15.43 0.841 15.43 0.839 15.43 C 0.837 15.43 0.835 15.43 0.833 15.43 C 0.831 15.43 0.829 15.43 0.827 15.43 C 0.825 15.43 0.823 15.43 0.821 15.43 C 0.819 15.43 0.817 15.43 0.815 15.43 C 0.813 15.43 0.811 15.43 0.809 15.43 C 0.807 15.43 0.805 15.43 0.803 15.43 C 0.801 15.43 0.799 15.43 0.797 15.43 C 0.795 15.43 0.793 15.43 0.791 15.43 C 0.789 15.43 0.787 15.43 0.785 15.43 C 0.783 15.43 0.781 15.43 0.78 15.43 C 0.778 15.43 0.776 15.43 0.774 15.43 C 0.772 15.43 0.77 15.43 0.768 15.43 C 0.766 15.43 0.764 15.43 0.762 15.43 C 0.76 15.43 0.758 15.43 0.757 15.43 C 0.755 15.43 0.753 15.43 0.751 15.43 C 0.749 15.43 0.747 15.43 0.745 15.43 C 0.743 15.43 0.741 15.43 0.74 15.43 C 0.738 15.43 0.736 15.43 0.734 15.43 C 0.732 15.43 0.73 15.43 0.728 15.43 C 0.726 15.43 0.725 15.43 0.723 15.43 C 0.721 15.43 0.719 15.43 0.717 15.43 C 0.715 15.43 0.713 15.43 0.712 15.43 C 0.71 15.43 0.708 15.43 0.706 15.43 C 0.704 15.43 0.702 15.43 0.701 15.43 C 0.699 15.43 0.697 15.43 0.695 15.43 C 0.693 15.43 0.691 15.43 0.69 15.43 C 0.688 15.43 0.686 15.43 0.684 15.43 C 0.682 15.43 0.681 15.43 0.679 15.43 C 0.677 15.43 0.675 15.43 0.673 15.43 C 0.672 15.43 0.67 15.43 0.668 15.43 C 0.666 15.43 0.664 15.43 0.663 15.43 C 0.661 15.43 0.659 15.43 0.657 15.43 C 0.655 15.43 0.654 15.43 0.652 15.43 C 0.65 15.43 0.648 15.43 0.647 15.43 C 0.645 15.43 0.643 15.43 0.641 15.43 C 0.64 15.43 0.638 15.43 0.636 15.43 C 0.634 15.43 0.633 15.43 0.631 15.43 C 0.629 15.43 0.627 15.43 0.626 15.43 C 0.624 15.43 0.622 15.43 0.62 15.43 C 0.619 15.43 0.617 15.43 0.615 15.43 C 0.614 15.43 0.612 15.43 0.61 15.43 C 0.608 15.43 0.607 15.43 0.605 15.43 C 0.603 15.43 0.602 15.43 0.6 15.43 C 0.598 15.43 0.597 15.43 0.595 15.43 C 0.593 15.43 0.591 15.43 0.59 15.43 C 0.588 15.43 0.586 15.43 0.585 15.43 C 0.583 15.43 0.581 15.43 0.58 15.43 C 0.578 15.43 0.576 15.43 0.575 15.43 C 0.573 15.43 0.571 15.43 0.57 15.43 C 0.568 15.43 0.566 15.43 0.565 15.43 C 0.563 15.43 0.562 15.43 0.56 15.43 C 0.558 15.43 0.557 15.43 0.555 15.43 C 0.553 15.43 0.552 15.43 0.55 15.43 C 0.548 15.43 0.547 15.43 0.545 15.43 C 0.544 15.43 0.542 15.43 0.54 15.43 C 0.539 15.43 0.537 15.43 0.536 15.43 C 0.534 15.43 0.532 15.43 0.531 15.43 C 0.529 15.43 0.528 15.43 0.526 15.43 C 0.524 15.43 0.523 15.43 0.521 15.43 C 0.52 15.43 0.518 15.43 0.516 15.43 C 0.515 15.43 0.513 15.43 0.512 15.43 C 0.51 15.43 0.509 15.43 0.507 15.43 C 0.505 15.43 0.504 15.43 0.502 15.43 C 0.501 15.43 0.499 15.43 0.498 15.43 C 0.496 15.43 0.495 15.43 0.493 15.43 C 0.492 15.43 0.49 15.43 0.488 15.43 C 0.487 15.43 0.485 15.43 0.484 15.43 C 0.482 15.43 0.481 15.43 0.479 15.43 C 0.478 15.43 0.476 15.43 0.475 15.43 C 0.473 15.43 0.472 15.43 0.47 15.43 C 0.469 15.43 0.467 15.43 0.466 15.43 C 0.464 15.43 0.463 15.43 0.461 15.43 C 0.46 15.43 0.458 15.43 0.457 15.43 C 0.455 15.43 0.454 15.43 0.452 15.43 C 0.451 15.43 0.449 15.43 0.448 15.43 C 0.446 15.43 0.445 15.43 0.444 15.43 C 0.442 15.43 0.441 15.43 0.439 15.43 C 0.438 15.43 0.436 15.43 0.435 15.43 C 0.433 15.43 0.432 15.43 0.43 15.43 C 0.429 15.43 0.428 15.43 0.426 15.43 C 0.425 15.43 0.423 15.43 0.422 15.43 C 0.42 15.43 0.419 15.43 0.418 15.43 C 0.416 15.43 0.415 15.43 0.413 15.43 C 0.412 15.43 0.411 15.43 0.409 15.43 C 0.408 15.43 0.406 15.43 0.405 15.43 C 0.404 15.43 0.402 15.43 0.401 15.43 C 0.399 15.43 0.398 15.43 0.397 15.43 C 0.395 15.43 0.394 15.43 0.392 15.43 C 0.391 15.43 0.39 15.43 0.388 15.43 C 0.387 15.43 0.386 15.43 0.384 15.43 C 0.383 15.43 0.382 15.43 0.38 15.43 C 0.379 15.43 0.377 15.43 0.376 15.43 C 0.375 15.43 0.373 15.43 0.372 15.43 C 0.371 15.43 0.369 15.43 0.368 15.43 C 0.367 15.43 0.365 15.43 0.364 15.43 C 0.363 15.43 0.361 15.43 0.36 15.43 C 0.359 15.43 0.357 15.43 0.356 15.43 C 0.355 15.43 0.354 15.43 0.352 15.43 C 0.351 15.43 0.35 15.43 0.348 15.43 C 0.347 15.43 0.346 15.43 0.344 15.43 C 0.343 15.43 0.342 15.43 0.341 15.43 C 0.339 15.43 0.338 15.43 0.337 15.43 C 0.335 15.43 0.334 15.43 0.333 15.43 C 0.332 15.43 0.33 15.43 0.329 15.43 C 0.328 15.43 0.327 15.43 0.325 15.43 C 0.324 15.43 0.323 15.43 0.322 15.43 C 0.32 15.43 0.319 15.43 0.318 15.43 C 0.317 15.43 0.315 15.43 0.314 15.43 C 0.313 15.43 0.312 15.43 0.31 15.43 C 0.309 15.43 0.308 15.43 0.307 15.43 C 0.306 15.43 0.304 15.43 0.303 15.43 C 0.302 15.43 0.301 15.43 0.3 15.43 C 0.298 15.43 0.297 15.43 0.296 15.43 C 0.295 15.43 0.294 15.43 0.292 15.43 C 0.291 15.43 0.29 15.43 0.289 15.43 C 0.288 15.43 0.286 15.43 0.285 15.43 C 0.284 15.43 0.283 15.43 0.282 15.43 C 0.281 15.43 0.279 15.43 0.278 15.43 C 0.277 15.43 0.276 15.43 0.275 15.43 C 0.274 15.43 0.272 15.43 0.271 15.43 C 0.27 15.43 0.269 15.43 0.268 15.43 C 0.267 15.43 0.266 15.43 0.264 15.43 C 0.263 15.43 0.262 15.43 0.261 15.43 C 0.26 15.43 0.259 15.43 0.258 15.43 C 0.257 15.43 0.256 15.43 0.254 15.43 C 0.253 15.43 0.252 15.43 0.251 15.43 C 0.25 15.43 0.249 15.43 0.248 15.43 C 0.247 15.43 0.246 15.43 0.244 15.43 C 0.243 15.43 0.242 15.43 0.241 15.43 C 0.24 15.43 0.239 15.43 0.238 15.43 C 0.237 15.43 0.236 15.43 0.235 15.43 C 0.234 15.43 0.233 15.43 0.232 15.43 C 0.231 15.43 0.229 15.43 0.228 15.43 C 0.227 15.43 0.226 15.43 0.225 15.43 C 0.224 15.43 0.223 15.43 0.222 15.43 C 0.221 15.43 0.22 15.43 0.219 15.43 C 0.218 15.43 0.217 15.43 0.216 15.43 C 0.215 15.43 0.214 15.43 0.213 15.43 C 0.212 15.43 0.211 15.43 0.21 15.43 C 0.209 15.43 0.208 15.43 0.207 15.43 C 0.206 15.43 0.205 15.43 0.204 15.43 C 0.203 15.43 0.202 15.43 0.201 15.43 C 0.2 15.43 0.199 15.43 0.198 15.43 C 0.197 15.43 0.196 15.43 0.195 15.43 C 0.194 15.43 0.193 15.43 0.192 15.43 C 0.191 15.43 0.19 15.43 0.189 15.43 C 0.188 15.43 0.187 15.43 0.186 15.43 C 0.185 15.43 0.184 15.43 0.183 15.43 C 0.183 15.43 0.182 15.43 0.181 15.43 C 0.18 15.43 0.179 15.43 0.178 15.43 C 0.177 15.43 0.176 15.43 0.175 15.43 C 0.174 15.43 0.173 15.43 0.172 15.43 C 0.171 15.43 0.171 15.43 0.17 15.43 C 0.169 15.43 0.168 15.43 0.167 15.43 C 0.166 15.43 0.165 15.43 0.164 15.43 C 0.163 15.43 0.162 15.43 0.162 15.43 C 0.161 15.43 0.16 15.43 0.159 15.43 C 0.158 15.43 0.157 15.43 0.156 15.43 C 0.155 15.43 0.155 15.43 0.154 15.43 C 0.153 15.43 0.152 15.43 0.151 15.43 C 0.15 15.43 0.149 15.43 0.148 15.43 C 0.148 15.43 0.147 15.43 0.146 15.43 C 0.145 15.43 0.144 15.43 0.143 15.43 C 0.143 15.43 0.142 15.43 0.141 15.43 C 0.14 15.43 0.139 15.43 0.138 15.43 C 0.138 15.43 0.137 15.43 0.136 15.43 C 0.135 15.43 0.134 15.43 0.134 15.43 C 0.133 15.43 0.132 15.43 0.131 15.43 C 0.13 15.43 0.13 15.43 0.129 15.43 C 0.128 15.43 0.127 15.43 0.126 15.43 C 0.126 15.43 0.125 15.43 0.124 15.43 C 0.123 15.43 0.123 15.43 0.122 15.43 C 0.121 15.43 0.12 15.43 0.119 15.43 C 0.119 15.43 0.118 15.43 0.117 15.43 C 0.116 15.43 0.116 15.43 0.115 15.43 C 0.114 15.43 0.113 15.43 0.113 15.43 C 0.112 15.43 0.111 15.43 0.11 15.43 C 0.11 15.43 0.109 15.43 0.108 15.43 C 0.108 15.43 0.107 15.43 0.106 15.43 C 0.105 15.43 0.105 15.43 0.104 15.43 C 0.103 15.43 0.103 15.43 0.102 15.43 C 0.101 15.43 0.1 15.43 0.1 15.43 C 0.099 15.43 0.098 15.43 0.098 15.43 C 0.097 15.43 0.096 15.43 0.096 15.43 C 0.095 15.43 0.094 15.43 0.094 15.43 C 0.093 15.43 0.092 15.43 0.092 15.43 C 0.091 15.43 0.09 15.43 0.09 15.43 C 0.089 15.43 0.088 15.43 0.088 15.43 C 0.087 15.43 0.086 15.43 0.086 15.43 C 0.085 15.43 0.084 15.43 0.084 15.43 C 0.083 15.43 0.082 15.43 0.082 15.43 C 0.081 15.43 0.081 15.43 0.08 15.43 C 0.079 15.43 0.079 15.43 0.078 15.43 C 0.077 15.43 0.077 15.43 0.076 15.43 C 0.076 15.43 0.075 15.43 0.074 15.43 C 0.074 15.43 0.073 15.43 0.073 15.43 C 0.072 15.43 0.071 15.43 0.071 15.43 C 0.07 15.43 0.07 15.43 0.069 15.43 C 0.068 15.43 0.068 15.43 0.067 15.43 C 0.067 15.43 0.066 15.43 0.066 15.43 C 0.065 15.43 0.064 15.43 0.064 15.43 C 0.063 15.43 0.063 15.43 0.062 15.43 C 0.062 15.43 0.061 15.43 0.061 15.43 C 0.06 15.43 0.06 15.43 0.059 15.43 C 0.058 15.43 0.058 15.43 0.057 15.43 C 0.057 15.43 0.056 15.43 0.056 15.43 C 0.055 15.43 0.055 15.43 0.054 15.43 C 0.054 15.43 0.053 15.43 0.053 15.43 C 0.052 15.43 0.052 15.43 0.051 15.43 C 0.051 15.43 0.05 15.43 0.05 15.43 C 0.049 15.43 0.049 15.43 0.048 15.43 C 0.048 15.43 0.047 15.43 0.047 15.43 C 0.046 15.43 0.046 15.43 0.045 15.43 C 0.045 15.43 0.044 15.43 0.044 15.43 C 0.044 15.43 0.043 15.43 0.043 15.43 C 0.042 15.43 0.042 15.43 0.041 15.43 C 0.041 15.43 0.04 15.43 0.04 15.43 C 0.039 15.43 0.039 15.43 0.039 15.43 C 0.038 15.43 0.038 15.43 0.037 15.43 C 0.037 15.43 0.036 15.43 0.036 15.43 C 0.036 15.43 0.035 15.43 0.035 15.43 C 0.034 15.43 0.034 15.43 0.034 15.43 C 0.033 15.43 0.033 15.43 0.032 15.43 C 0.032 15.43 0.032 15.43 0.031 15.43 C 0.031 15.43 0.03 15.43 0.03 15.43 C 0.03 15.43 0.029 15.43 0.029 15.43 C 0.028 15.43 0.028 15.43 0.028 15.43 C 0.027 15.43 0.027 15.43 0.027 15.43 C 0.026 15.43 0.026 15.43 0.026 15.43 C 0.025 15.43 0.025 15.43 0.025 15.43 C 0.024 15.43 0.024 15.43 0.023 15.43 C 0.023 15.43 0.023 15.43 0.022 15.43 C 0.022 15.43 0.022 15.43 0.021 15.43 C 0.021 15.43 0.021 15.43 0.021 15.43 C 0.02 15.43 0.02 15.43 0.02 15.43 C 0.019 15.43 0.019 15.43 0.019 15.43 C 0.018 15.43 0.018 15.43 0.018 15.43 C 0.017 15.43 0.017 15.43 0.017 15.43 C 0.017 15.43 0.016 15.43 0.016 15.43 C 0.016 15.43 0.015 15.43 0.015 15.43 C 0.015 15.43 0.015 15.43 0.014 15.43 C 0.014 15.43 0.014 15.43 0.014 15.43 C 0.013 15.43 0.013 15.43 0.013 15.43 C 0.013 15.43 0.012 15.43 0.012 15.43 C 0.012 15.43 0.012 15.43 0.011 15.43 C 0.011 15.43 0.011 15.43 0.011 15.43 C 0.01 15.43 0.01 15.43 0.01 15.43 C 0.01 15.43 0.01 15.43 0.009 15.43 C 0.009 15.43 0.009 15.43 0.009 15.43 C 0.009 15.43 0.008 15.43 0.008 15.43 C 0.008 15.43 0.008 15.43 0.008 15.43 C 0.007 15.43 0.007 15.43 0.007 15.43 C 0.007 15.43 0.007 15.43 0.006 15.43 C 0.006 15.43 0.006 15.43 0.006 15.43 C 0.006 15.43 0.006 15.43 0.005 15.43 C 0.005 15.43 0.005 15.43 0.005 15.43 C 0.005 15.43 0.005 15.43 0.004 15.43 C 0.004 15.43 0.004 15.43 0.004 15.43 C 0.004 15.43 0.004 15.43 0.004 15.43 C 0.004 15.43 0.003 15.43 0.003 15.43 C 0.003 15.43 0.003 15.43 0.003 15.43 C 0.003 15.43 0.003 15.43 0.003 15.43 C 0.002 15.43 0.002 15.43 0.002 15.43 C 0.002 15.43 0.002 15.43 0.002 15.43 C 0.002 15.43 0.002 15.43 0.002 15.43 C 0.002 15.43 0.001 15.43 0.001 15.43 C 0.001 15.43 0.001 15.43 0.001 15.43 C 0.001 15.43 0.001 15.43 0.001 15.43 C 0.001 15.43 0.001 15.43 0.001 15.43 C 0.001 15.43 0.001 15.43 0.001 15.43 C 0.001 15.43 0 15.43 0 15.43 C 0 15.43 0 15.43 0 15.43 C 0 15.43 0 15.43 0 15.43 C 0 15.43 0 15.43 0 15.43 C 0 15.43 0 15.43 0 15.43 C 0 15.43 0 15.43 0 15.43 C 0 15.43 0 15.43 0 16.805 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-black36)",
      flexShrink: 0
    }
  }, "\uD56D\uAD6C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-grayaa)",
      flexShrink: 0
    }
  }, "\uBC14\uB2E4\uD3EC\uC778\uD2B8")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-grayaa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC804\uB77C\uB0A8\uB3C4 \uC9C4\uB3C4\uAD70 \uC784\uD68C\uBA74 \uB0A8\uB3D9\uB9AC")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      background: "linear-gradient(var(--gray-white-ff),var(--gray-white-ff)), linear-gradient(var(--background-blue-neutral-blue-neutral1),var(--background-blue-neutral-blue-neutral1))",
      boxShadow: "inset 0 0 0 1px var(--gray-gray4-ee)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ControlSegmentedBoxDynamic, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "조황",
    selected: "off"
  }), /*#__PURE__*/React.createElement(ControlSegmentedBoxDynamic, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "물때",
    selected: "off"
  }), /*#__PURE__*/React.createElement(ControlSegmentedBoxDynamic, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "낚싯배",
    selected: "on"
  }), /*#__PURE__*/React.createElement(ControlSegmentedBoxDynamic, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "날씨",
    selected: "off"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 362,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 68,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-bd56731c94baf833",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC81C\uBE44\uD638")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC778\uCC9C \uC911\uAD6C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(117,124,169)",
      flexShrink: 0
    }
  }, "55.1km")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--old-black36)",
      flexShrink: 0
    }
  }, "90,000\uC6D0~"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(BadgeBadge3, {
    style: {
      position: "relative",
      width: 47,
      flexShrink: 0
    },
    showLeadingIcon: false,
    showTrailingIcon: false,
    test: "갑오징어",
    variant: "solid",
    size: "sm"
  }), /*#__PURE__*/React.createElement(BadgeBadge3, {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0
    },
    showLeadingIcon: false,
    showTrailingIcon: false,
    test: "광어",
    variant: "solid",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--label-primary-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10,
      height: 10,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 7.9 L 10 7.926 C 10 8.187 10 8.412 9.985 8.598 C 9.969 8.795 9.933 8.992 9.836 9.181 C 9.693 9.463 9.463 9.693 9.181 9.836 C 8.992 9.933 8.795 9.969 8.598 9.985 C 8.412 10 8.187 10 7.926 10 L 7.9 10 L 2.1 10 L 2.074 10 C 1.813 10 1.588 10 1.402 9.985 C 1.205 9.969 1.008 9.933 0.819 9.836 C 0.537 9.693 0.307 9.463 0.164 9.181 C 0.067 8.992 0.031 8.795 0.015 8.598 C 0 8.412 0 8.187 0 7.926 L 0 7.9 L 0 6 L 0 2.1 C 0 1.828 -0.001 1.594 0.015 1.402 C 0.031 1.205 0.067 1.008 0.164 0.819 C 0.307 0.537 0.537 0.307 0.819 0.164 C 1.008 0.067 1.205 0.031 1.402 0.015 C 1.594 -0.001 1.828 0 2.1 0 L 7.9 0 L 7.926 0 C 8.187 0 8.412 0 8.598 0.015 C 8.795 0.031 8.992 0.067 9.181 0.164 C 9.463 0.307 9.693 0.537 9.836 0.819 C 9.933 1.008 9.969 1.205 9.985 1.402 C 10 1.588 10 1.813 10 2.074 L 10 2.1 L 10 7.9 Z M 8.988 1.484 C 8.999 1.626 9 1.812 9 2.1 L 9 7.9 C 9 8.188 8.999 8.374 8.988 8.516 C 8.977 8.652 8.958 8.702 8.945 8.727 C 8.897 8.821 8.821 8.897 8.727 8.945 C 8.702 8.958 8.652 8.977 8.516 8.988 C 8.374 8.999 8.188 9 7.9 9 L 2.1 9 C 1.812 9 1.626 8.999 1.484 8.988 C 1.348 8.977 1.298 8.958 1.273 8.945 C 1.179 8.897 1.103 8.821 1.055 8.727 C 1.042 8.702 1.023 8.652 1.012 8.516 L 1 3.063 L 1 2.1 C 1 1.812 1.001 1.626 1.012 1.484 C 1.023 1.348 1.042 1.298 1.055 1.273 C 1.103 1.179 1.179 1.103 1.273 1.055 C 1.298 1.042 1.348 1.023 1.484 1.012 C 1.626 1.001 1.812 1 2.1 1 L 7.9 1 C 8.188 1 8.374 1.001 8.516 1.012 C 8.652 1.023 8.702 1.042 8.727 1.055 C 8.821 1.103 8.897 1.179 8.945 1.273 C 8.958 1.298 8.977 1.348 8.988 1.484 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9 2.1 C 9 1.812 8.999 1.626 8.988 1.484 C 8.977 1.348 8.958 1.298 8.945 1.273 C 8.897 1.179 8.821 1.103 8.727 1.055 C 8.702 1.042 8.652 1.023 8.516 1.012 C 8.374 1.001 8.188 1 7.9 1 L 2.1 1 C 1.812 1 1.626 1.001 1.484 1.012 C 1.348 1.023 1.298 1.042 1.273 1.055 C 1.179 1.103 1.103 1.179 1.055 1.273 C 1.042 1.298 1.023 1.348 1.012 1.484 C 1.001 1.626 1 1.812 1 2.1 L 1 3.063 L 1.012 8.516 C 1.023 8.652 1.042 8.702 1.055 8.727 C 1.103 8.821 1.179 8.897 1.273 8.945 C 1.298 8.958 1.348 8.977 1.484 8.988 C 1.626 8.999 1.812 9 2.1 9 L 7.9 9 C 8.188 9 8.374 8.999 8.516 8.988 C 8.652 8.977 8.702 8.958 8.727 8.945 C 8.821 8.897 8.897 8.821 8.945 8.727 C 8.958 8.702 8.977 8.652 8.988 8.516 C 8.999 8.374 9 8.188 9 7.9 L 9 2.1 Z M 2.96 5.003 C 2.96 6.299 3.757 7.19 5.093 7.19 C 6.273 7.19 7.007 6.503 7.046 5.471 L 5.819 5.471 C 5.765 5.924 5.483 6.167 5.108 6.167 C 4.616 6.167 4.304 5.753 4.304 4.987 C 4.304 4.229 4.624 3.815 5.108 3.815 C 5.507 3.815 5.757 4.088 5.819 4.518 L 7.046 4.518 C 7.015 3.487 6.257 2.815 5.093 2.815 C 3.765 2.815 2.96 3.706 2.96 5.003 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uD560\uC778\uCFE0\uD3F0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      background: "linear-gradient(var(--gray-gray3-f3),var(--gray-gray3-f3)), linear-gradient(rgba(151,34,16,0.08),rgba(151,34,16,0.08)), linear-gradient(var(--gray-white-ff),var(--gray-white-ff))",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 5 C 9 2.791 7.209 1 5 1 C 2.791 1 1 2.791 1 5 C 1 7.209 2.791 9 5 9 C 7.209 9 9 7.209 9 5 Z M 2.9 5.5 C 3.121 5.334 3.434 5.379 3.6 5.6 C 3.602 5.603 3.607 5.609 3.614 5.617 C 3.629 5.634 3.652 5.661 3.684 5.695 C 3.749 5.762 3.846 5.854 3.972 5.946 C 4.226 6.131 4.575 6.3 5 6.3 C 5.425 6.3 5.774 6.131 6.028 5.946 C 6.154 5.854 6.251 5.762 6.316 5.695 C 6.348 5.661 6.371 5.634 6.386 5.617 C 6.393 5.609 6.398 5.603 6.4 5.6 C 6.566 5.379 6.879 5.334 7.1 5.5 C 7.321 5.666 7.366 5.979 7.2 6.2 L 7.2 6.201 L 7.199 6.202 L 7.198 6.203 L 7.184 6.221 C 7.176 6.231 7.165 6.244 7.152 6.26 C 7.125 6.292 7.087 6.336 7.038 6.387 C 6.941 6.488 6.799 6.621 6.616 6.754 C 6.251 7.02 5.7 7.3 5 7.3 C 4.3 7.3 3.749 7.02 3.384 6.754 C 3.201 6.621 3.059 6.488 2.962 6.387 C 2.913 6.336 2.875 6.292 2.848 6.26 C 2.835 6.244 2.824 6.231 2.816 6.221 L 2.802 6.203 L 2.801 6.202 L 2.8 6.201 C 2.802 6.199 2.825 6.181 3.2 5.9 L 2.8 6.2 C 2.634 5.979 2.679 5.666 2.9 5.5 Z M 4.375 3.65 C 4.375 3.25 4.05 2.925 3.65 2.925 C 3.25 2.925 2.925 3.25 2.925 3.65 C 2.925 4.05 3.25 4.375 3.65 4.375 C 4.05 4.375 4.375 4.05 4.375 3.65 Z M 7.075 3.65 C 7.075 3.275 6.79 2.966 6.424 2.929 L 6.35 2.925 C 5.95 2.925 5.625 3.25 5.625 3.65 C 5.625 4.05 5.95 4.375 6.35 4.375 C 6.75 4.375 7.075 4.05 7.075 3.65 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 1 C 7.209 1 9 2.791 9 5 C 9 7.209 7.209 9 5 9 C 2.791 9 1 7.209 1 5 C 1 2.791 2.791 1 5 1 Z M 5 10 C 7.761 10 10 7.761 10 5 C 10 2.239 7.761 0 5 0 C 2.239 0 0 2.239 0 5 C 0 7.761 2.239 10 5 10 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--accent-orange)",
      flexShrink: 0
    }
  }, "\uCD08\uBCF4\uC790 \uC120\uD638")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      background: "linear-gradient(var(--gray-gray3-f3),var(--gray-gray3-f3)), linear-gradient(rgba(6,15,176,0.08),rgba(6,15,176,0.08)), linear-gradient(var(--gray-white-ff),var(--gray-white-ff))",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.900,
    height: 9.900,
    viewBox: "0 0 9.900 9.900",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.05,
      top: 1.05,
      width: 9.9,
      height: 9.9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.45 0 C 7.699 0 7.9 0.202 7.9 0.45 L 7.9 1 C 8.151 1 8.366 1.001 8.543 1.015 C 8.738 1.031 8.927 1.066 9.108 1.158 C 9.381 1.297 9.603 1.519 9.742 1.792 C 9.834 1.973 9.869 2.162 9.885 2.357 C 9.9 2.542 9.9 2.769 9.9 3.034 L 9.9 7.866 C 9.9 8.132 9.9 8.358 9.885 8.543 C 9.869 8.738 9.834 8.927 9.742 9.108 C 9.603 9.381 9.381 9.603 9.108 9.742 C 8.927 9.834 8.738 9.869 8.543 9.885 C 8.358 9.9 8.132 9.9 7.866 9.9 L 2.034 9.9 C 1.769 9.9 1.542 9.9 1.357 9.885 C 1.162 9.869 0.973 9.834 0.792 9.742 C 0.519 9.603 0.297 9.381 0.158 9.108 C 0.066 8.927 0.031 8.738 0.015 8.543 C 0 8.358 0 8.132 0 7.866 L 0 3.034 C 0 2.769 0 2.542 0.015 2.357 C 0.031 2.162 0.066 1.973 0.158 1.792 C 0.297 1.519 0.519 1.297 0.792 1.158 C 0.973 1.066 1.162 1.031 1.357 1.015 C 1.534 1.001 1.749 1 2 1 L 2 0.45 C 2 0.202 2.202 0 2.45 0 C 2.699 0 2.9 0.202 2.9 0.45 L 2.9 1 L 7 1 L 7 0.45 C 7 0.202 7.202 0 7.45 0 Z M 4.817 6.503 C 3.493 6.562 2.397 7.493 2.087 8.735 C 2.077 8.777 2.068 8.819 2.059 8.861 C 2.05 8.908 2.048 8.955 2.053 9 L 7.848 9 C 7.853 8.955 7.851 8.908 7.841 8.861 C 7.833 8.819 7.823 8.777 7.813 8.735 C 7.504 7.493 6.407 6.562 5.083 6.503 C 5.039 6.501 4.995 6.5 4.95 6.5 C 4.906 6.5 4.861 6.501 4.817 6.503 Z M 4.95 3 C 4.149 3 3.5 3.649 3.5 4.45 C 3.5 5.251 4.149 5.9 4.95 5.9 C 5.751 5.9 6.4 5.251 6.4 4.45 C 6.4 3.649 5.751 3 4.95 3 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--accent-alliance-blue)",
      flexShrink: 0
    }
  }, "\uD3C9\uC77C\uB2E8\uCCB4\uD658\uC601"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-neutral2-f3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 362,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 68,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-661d4a9fc228ddf2",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uD0B9\uCF696\uD638")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC778\uCC9C \uC911\uAD6C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(117,124,169)",
      flexShrink: 0
    }
  }, "55.1km")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--old-black36)",
      flexShrink: 0
    }
  }, "90,000\uC6D0~"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(BadgeBadge3, {
    style: {
      position: "relative",
      width: 47,
      flexShrink: 0
    },
    showLeadingIcon: false,
    showTrailingIcon: false,
    test: "갑오징어",
    variant: "solid",
    size: "sm"
  }), /*#__PURE__*/React.createElement(BadgeBadge3, {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0
    },
    showLeadingIcon: false,
    showTrailingIcon: false,
    test: "광어",
    variant: "solid",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--label-primary-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10,
      height: 10,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 7.9 L 10 7.926 C 10 8.187 10 8.412 9.985 8.598 C 9.969 8.795 9.933 8.992 9.836 9.181 C 9.693 9.463 9.463 9.693 9.181 9.836 C 8.992 9.933 8.795 9.969 8.598 9.985 C 8.412 10 8.187 10 7.926 10 L 7.9 10 L 2.1 10 L 2.074 10 C 1.813 10 1.588 10 1.402 9.985 C 1.205 9.969 1.008 9.933 0.819 9.836 C 0.537 9.693 0.307 9.463 0.164 9.181 C 0.067 8.992 0.031 8.795 0.015 8.598 C 0 8.412 0 8.187 0 7.926 L 0 7.9 L 0 6 L 0 2.1 C 0 1.828 -0.001 1.594 0.015 1.402 C 0.031 1.205 0.067 1.008 0.164 0.819 C 0.307 0.537 0.537 0.307 0.819 0.164 C 1.008 0.067 1.205 0.031 1.402 0.015 C 1.594 -0.001 1.828 0 2.1 0 L 7.9 0 L 7.926 0 C 8.187 0 8.412 0 8.598 0.015 C 8.795 0.031 8.992 0.067 9.181 0.164 C 9.463 0.307 9.693 0.537 9.836 0.819 C 9.933 1.008 9.969 1.205 9.985 1.402 C 10 1.588 10 1.813 10 2.074 L 10 2.1 L 10 7.9 Z M 8.988 1.484 C 8.999 1.626 9 1.812 9 2.1 L 9 7.9 C 9 8.188 8.999 8.374 8.988 8.516 C 8.977 8.652 8.958 8.702 8.945 8.727 C 8.897 8.821 8.821 8.897 8.727 8.945 C 8.702 8.958 8.652 8.977 8.516 8.988 C 8.374 8.999 8.188 9 7.9 9 L 2.1 9 C 1.812 9 1.626 8.999 1.484 8.988 C 1.348 8.977 1.298 8.958 1.273 8.945 C 1.179 8.897 1.103 8.821 1.055 8.727 C 1.042 8.702 1.023 8.652 1.012 8.516 L 1 3.063 L 1 2.1 C 1 1.812 1.001 1.626 1.012 1.484 C 1.023 1.348 1.042 1.298 1.055 1.273 C 1.103 1.179 1.179 1.103 1.273 1.055 C 1.298 1.042 1.348 1.023 1.484 1.012 C 1.626 1.001 1.812 1 2.1 1 L 7.9 1 C 8.188 1 8.374 1.001 8.516 1.012 C 8.652 1.023 8.702 1.042 8.727 1.055 C 8.821 1.103 8.897 1.179 8.945 1.273 C 8.958 1.298 8.977 1.348 8.988 1.484 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9 2.1 C 9 1.812 8.999 1.626 8.988 1.484 C 8.977 1.348 8.958 1.298 8.945 1.273 C 8.897 1.179 8.821 1.103 8.727 1.055 C 8.702 1.042 8.652 1.023 8.516 1.012 C 8.374 1.001 8.188 1 7.9 1 L 2.1 1 C 1.812 1 1.626 1.001 1.484 1.012 C 1.348 1.023 1.298 1.042 1.273 1.055 C 1.179 1.103 1.103 1.179 1.055 1.273 C 1.042 1.298 1.023 1.348 1.012 1.484 C 1.001 1.626 1 1.812 1 2.1 L 1 3.063 L 1.012 8.516 C 1.023 8.652 1.042 8.702 1.055 8.727 C 1.103 8.821 1.179 8.897 1.273 8.945 C 1.298 8.958 1.348 8.977 1.484 8.988 C 1.626 8.999 1.812 9 2.1 9 L 7.9 9 C 8.188 9 8.374 8.999 8.516 8.988 C 8.652 8.977 8.702 8.958 8.727 8.945 C 8.821 8.897 8.897 8.821 8.945 8.727 C 8.958 8.702 8.977 8.652 8.988 8.516 C 8.999 8.374 9 8.188 9 7.9 L 9 2.1 Z M 2.96 5.003 C 2.96 6.299 3.757 7.19 5.093 7.19 C 6.273 7.19 7.007 6.503 7.046 5.471 L 5.819 5.471 C 5.765 5.924 5.483 6.167 5.108 6.167 C 4.616 6.167 4.304 5.753 4.304 4.987 C 4.304 4.229 4.624 3.815 5.108 3.815 C 5.507 3.815 5.757 4.088 5.819 4.518 L 7.046 4.518 C 7.015 3.487 6.257 2.815 5.093 2.815 C 3.765 2.815 2.96 3.706 2.96 5.003 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uD560\uC778\uCFE0\uD3F0"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-neutral2-f3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 362,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 68,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-45f4c6672e1c0652",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uB274\uC2B9\uC9C4\uD638")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC778\uCC9C \uC911\uAD6C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(117,124,169)",
      flexShrink: 0
    }
  }, "55.1km")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--old-black36)",
      flexShrink: 0
    }
  }, "90,000\uC6D0~"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(BadgeBadge3, {
    style: {
      position: "relative",
      width: 47,
      flexShrink: 0
    },
    showLeadingIcon: false,
    showTrailingIcon: false,
    test: "갑오징어",
    variant: "solid",
    size: "sm"
  }), /*#__PURE__*/React.createElement(BadgeBadge3, {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0
    },
    showLeadingIcon: false,
    showTrailingIcon: false,
    test: "광어",
    variant: "solid",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--label-primary-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10,
      height: 10,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 7.9 L 10 7.926 C 10 8.187 10 8.412 9.985 8.598 C 9.969 8.795 9.933 8.992 9.836 9.181 C 9.693 9.463 9.463 9.693 9.181 9.836 C 8.992 9.933 8.795 9.969 8.598 9.985 C 8.412 10 8.187 10 7.926 10 L 7.9 10 L 2.1 10 L 2.074 10 C 1.813 10 1.588 10 1.402 9.985 C 1.205 9.969 1.008 9.933 0.819 9.836 C 0.537 9.693 0.307 9.463 0.164 9.181 C 0.067 8.992 0.031 8.795 0.015 8.598 C 0 8.412 0 8.187 0 7.926 L 0 7.9 L 0 6 L 0 2.1 C 0 1.828 -0.001 1.594 0.015 1.402 C 0.031 1.205 0.067 1.008 0.164 0.819 C 0.307 0.537 0.537 0.307 0.819 0.164 C 1.008 0.067 1.205 0.031 1.402 0.015 C 1.594 -0.001 1.828 0 2.1 0 L 7.9 0 L 7.926 0 C 8.187 0 8.412 0 8.598 0.015 C 8.795 0.031 8.992 0.067 9.181 0.164 C 9.463 0.307 9.693 0.537 9.836 0.819 C 9.933 1.008 9.969 1.205 9.985 1.402 C 10 1.588 10 1.813 10 2.074 L 10 2.1 L 10 7.9 Z M 8.988 1.484 C 8.999 1.626 9 1.812 9 2.1 L 9 7.9 C 9 8.188 8.999 8.374 8.988 8.516 C 8.977 8.652 8.958 8.702 8.945 8.727 C 8.897 8.821 8.821 8.897 8.727 8.945 C 8.702 8.958 8.652 8.977 8.516 8.988 C 8.374 8.999 8.188 9 7.9 9 L 2.1 9 C 1.812 9 1.626 8.999 1.484 8.988 C 1.348 8.977 1.298 8.958 1.273 8.945 C 1.179 8.897 1.103 8.821 1.055 8.727 C 1.042 8.702 1.023 8.652 1.012 8.516 L 1 3.063 L 1 2.1 C 1 1.812 1.001 1.626 1.012 1.484 C 1.023 1.348 1.042 1.298 1.055 1.273 C 1.103 1.179 1.179 1.103 1.273 1.055 C 1.298 1.042 1.348 1.023 1.484 1.012 C 1.626 1.001 1.812 1 2.1 1 L 7.9 1 C 8.188 1 8.374 1.001 8.516 1.012 C 8.652 1.023 8.702 1.042 8.727 1.055 C 8.821 1.103 8.897 1.179 8.945 1.273 C 8.958 1.298 8.977 1.348 8.988 1.484 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9 2.1 C 9 1.812 8.999 1.626 8.988 1.484 C 8.977 1.348 8.958 1.298 8.945 1.273 C 8.897 1.179 8.821 1.103 8.727 1.055 C 8.702 1.042 8.652 1.023 8.516 1.012 C 8.374 1.001 8.188 1 7.9 1 L 2.1 1 C 1.812 1 1.626 1.001 1.484 1.012 C 1.348 1.023 1.298 1.042 1.273 1.055 C 1.179 1.103 1.103 1.179 1.055 1.273 C 1.042 1.298 1.023 1.348 1.012 1.484 C 1.001 1.626 1 1.812 1 2.1 L 1 3.063 L 1.012 8.516 C 1.023 8.652 1.042 8.702 1.055 8.727 C 1.103 8.821 1.179 8.897 1.273 8.945 C 1.298 8.958 1.348 8.977 1.484 8.988 C 1.626 8.999 1.812 9 2.1 9 L 7.9 9 C 8.188 9 8.374 8.999 8.516 8.988 C 8.652 8.977 8.702 8.958 8.727 8.945 C 8.821 8.897 8.897 8.821 8.945 8.727 C 8.958 8.702 8.977 8.652 8.988 8.516 C 8.999 8.374 9 8.188 9 7.9 L 9 2.1 Z M 2.96 5.003 C 2.96 6.299 3.757 7.19 5.093 7.19 C 6.273 7.19 7.007 6.503 7.046 5.471 L 5.819 5.471 C 5.765 5.924 5.483 6.167 5.108 6.167 C 4.616 6.167 4.304 5.753 4.304 4.987 C 4.304 4.229 4.624 3.815 5.108 3.815 C 5.507 3.815 5.757 4.088 5.819 4.518 L 7.046 4.518 C 7.015 3.487 6.257 2.815 5.093 2.815 C 3.765 2.815 2.96 3.706 2.96 5.003 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uD560\uC778\uCFE0\uD3F0"))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1008,
      width: 393,
      backgroundColor: "var(--gray-white-ff)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 60,
      display: "flex",
      flexDirection: "column",
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--margin-spacing-8) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--gray-gray3-f3)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      borderRadius: 2,
      color: "var(--gray-black3-00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.225 L 0 13.012 C 0 12.594 0.34 12.255 0.758 12.255 C 1.176 12.255 1.516 12.594 1.516 13.012 L 1.516 14.225 C 1.516 14.737 1.93 15.151 2.441 15.151 L 3.655 15.151 C 4.073 15.151 4.412 15.49 4.412 15.909 C 4.412 16.327 4.073 16.667 3.655 16.667 L 2.441 16.667 C 1.093 16.667 0 15.573 0 14.225 Z M 10.24 15.151 C 10.658 15.151 10.997 15.49 10.997 15.909 C 10.997 16.327 10.658 16.667 10.24 16.667 L 6.427 16.667 C 6.009 16.667 5.669 16.327 5.669 15.909 C 5.669 15.49 6.009 15.151 6.427 15.151 L 10.24 15.151 Z M 15.151 14.225 L 15.151 13.012 C 15.151 12.594 15.49 12.255 15.909 12.255 C 16.327 12.255 16.667 12.594 16.667 13.012 L 16.667 14.225 C 16.667 15.573 15.573 16.667 14.225 16.667 L 13.012 16.667 C 12.594 16.667 12.255 16.327 12.255 15.909 C 12.255 15.49 12.594 15.151 13.012 15.151 L 14.225 15.151 C 14.737 15.151 15.151 14.737 15.151 14.225 Z M 0 10.24 L 0 6.427 C 0 6.009 0.339 5.669 0.758 5.669 C 1.176 5.669 1.516 6.009 1.516 6.427 L 1.516 10.24 C 1.516 10.658 1.176 10.997 0.758 10.997 C 0.339 10.997 0 10.658 0 10.24 Z M 15.151 10.24 L 15.151 6.427 C 15.151 6.009 15.49 5.669 15.909 5.669 C 16.327 5.669 16.667 6.009 16.667 6.427 L 16.667 10.24 C 16.667 10.658 16.327 10.997 15.909 10.997 C 15.49 10.997 15.151 10.658 15.151 10.24 Z M 0 3.655 L 0 2.441 C 0 1.093 1.093 0 2.441 0 L 3.655 0 C 4.073 0 4.412 0.34 4.412 0.758 C 4.412 1.176 4.073 1.516 3.655 1.516 L 2.441 1.516 C 1.93 1.516 1.516 1.93 1.516 2.441 L 1.516 3.655 C 1.516 4.073 1.176 4.412 0.758 4.412 C 0.34 4.412 0 4.073 0 3.655 Z M 15.151 3.655 L 15.151 2.441 C 15.151 1.93 14.737 1.516 14.225 1.516 L 13.012 1.516 C 12.594 1.516 12.255 1.176 12.255 0.758 C 12.255 0.34 12.594 0 13.012 0 L 14.225 0 C 15.573 0 16.667 1.093 16.667 2.441 L 16.667 3.655 C 16.667 4.073 16.327 4.412 15.909 4.412 C 15.49 4.412 15.151 4.073 15.151 3.655 Z M 10.24 0 C 10.658 0 10.997 0.339 10.997 0.758 C 10.997 1.176 10.658 1.516 10.24 1.516 L 6.427 1.516 C 6.009 1.516 5.669 1.176 5.669 0.758 C 5.669 0.339 6.009 0 6.427 0 L 10.24 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      minHeight: 20,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC0C1\uC138\uC815\uBCF4"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      borderRadius: 2,
      color: "var(--gray-black3-00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.225 L 0 13.012 C 0 12.594 0.34 12.255 0.758 12.255 C 1.176 12.255 1.516 12.594 1.516 13.012 L 1.516 14.225 C 1.516 14.737 1.93 15.151 2.441 15.151 L 3.655 15.151 C 4.073 15.151 4.412 15.49 4.412 15.909 C 4.412 16.327 4.073 16.667 3.655 16.667 L 2.441 16.667 C 1.093 16.667 0 15.573 0 14.225 Z M 10.24 15.151 C 10.658 15.151 10.997 15.49 10.997 15.909 C 10.997 16.327 10.658 16.667 10.24 16.667 L 6.427 16.667 C 6.009 16.667 5.669 16.327 5.669 15.909 C 5.669 15.49 6.009 15.151 6.427 15.151 L 10.24 15.151 Z M 15.151 14.225 L 15.151 13.012 C 15.151 12.594 15.49 12.255 15.909 12.255 C 16.327 12.255 16.667 12.594 16.667 13.012 L 16.667 14.225 C 16.667 15.573 15.573 16.667 14.225 16.667 L 13.012 16.667 C 12.594 16.667 12.255 16.327 12.255 15.909 C 12.255 15.49 12.594 15.151 13.012 15.151 L 14.225 15.151 C 14.737 15.151 15.151 14.737 15.151 14.225 Z M 0 10.24 L 0 6.427 C 0 6.009 0.339 5.669 0.758 5.669 C 1.176 5.669 1.516 6.009 1.516 6.427 L 1.516 10.24 C 1.516 10.658 1.176 10.997 0.758 10.997 C 0.339 10.997 0 10.658 0 10.24 Z M 15.151 10.24 L 15.151 6.427 C 15.151 6.009 15.49 5.669 15.909 5.669 C 16.327 5.669 16.667 6.009 16.667 6.427 L 16.667 10.24 C 16.667 10.658 16.327 10.997 15.909 10.997 C 15.49 10.997 15.151 10.658 15.151 10.24 Z M 0 3.655 L 0 2.441 C 0 1.093 1.093 0 2.441 0 L 3.655 0 C 4.073 0 4.412 0.34 4.412 0.758 C 4.412 1.176 4.073 1.516 3.655 1.516 L 2.441 1.516 C 1.93 1.516 1.516 1.93 1.516 2.441 L 1.516 3.655 C 1.516 4.073 1.176 4.412 0.758 4.412 C 0.34 4.412 0 4.073 0 3.655 Z M 15.151 3.655 L 15.151 2.441 C 15.151 1.93 14.737 1.516 14.225 1.516 L 13.012 1.516 C 12.594 1.516 12.255 1.176 12.255 0.758 C 12.255 0.34 12.594 0 13.012 0 L 14.225 0 C 15.573 0 16.667 1.093 16.667 2.441 L 16.667 3.655 C 16.667 4.073 16.327 4.412 15.909 4.412 C 15.49 4.412 15.151 4.073 15.151 3.655 Z M 10.24 0 C 10.658 0 10.997 0.339 10.997 0.758 C 10.997 1.176 10.658 1.516 10.24 1.516 L 6.427 1.516 C 6.009 1.516 5.669 1.176 5.669 0.758 C 5.669 0.339 6.009 0 6.427 0 L 10.24 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--accent-primary-violet)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.089,
    height: 15.762,
    viewBox: "0 0 13.089 15.762",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.458,
      top: 2.125,
      width: 13.089,
      height: 15.762,
      color: "var(--label-neutral-white)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.089 3.923 L 11.911 5.101 L 10 3.19 L 10 10.345 L 1.667 10.345 L 1.667 15.762 L 0 15.762 L 0 8.678 L 8.333 8.678 L 8.333 3.19 L 6.423 5.101 L 5.244 3.923 L 9.167 0 L 13.089 3.923 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      minHeight: 20,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-white)",
      flexShrink: 0
    }
  }, "\uAE38\uC548\uB0B4 \uC2DC\uC791"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.501,
    height: 16.501,
    viewBox: "0 0 16.501 16.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.75,
      top: 1.75,
      width: 16.501,
      height: 16.501,
      borderRadius: 2,
      color: "var(--gray-white-ff)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.084 L 0 12.882 C 0 12.468 0.336 12.133 0.75 12.133 C 1.164 12.133 1.501 12.468 1.501 12.882 L 1.501 14.084 C 1.501 14.59 1.911 15 2.417 15 L 3.618 15 C 4.032 15 4.368 15.336 4.368 15.75 C 4.368 16.164 4.032 16.501 3.618 16.501 L 2.417 16.501 C 1.082 16.501 0 15.418 0 14.084 Z M 10.138 15 C 10.552 15 10.888 15.336 10.888 15.75 C 10.888 16.165 10.552 16.501 10.138 16.501 L 6.363 16.501 C 5.949 16.501 5.613 16.165 5.613 15.75 C 5.613 15.336 5.949 15 6.363 15 L 10.138 15 Z M 15 14.084 L 15 12.882 C 15 12.468 15.336 12.133 15.75 12.133 C 16.164 12.133 16.501 12.468 16.501 12.882 L 16.501 14.084 C 16.501 15.418 15.418 16.501 14.084 16.501 L 12.882 16.501 C 12.468 16.501 12.133 16.164 12.133 15.75 C 12.133 15.336 12.468 15 12.882 15 L 14.084 15 C 14.59 15 15 14.59 15 14.084 Z M 0 10.138 L 0 6.363 C 0 5.949 0.336 5.613 0.75 5.613 C 1.165 5.613 1.501 5.949 1.501 6.363 L 1.501 10.138 C 1.501 10.552 1.165 10.888 0.75 10.888 C 0.336 10.888 0 10.552 0 10.138 Z M 15 10.138 L 15 6.363 C 15 5.949 15.336 5.613 15.75 5.613 C 16.165 5.613 16.501 5.949 16.501 6.363 L 16.501 10.138 C 16.501 10.552 16.165 10.888 15.75 10.888 C 15.336 10.888 15 10.552 15 10.138 Z M 0 3.618 L 0 2.417 C 0 1.082 1.082 0 2.417 0 L 3.618 0 C 4.032 0 4.368 0.336 4.368 0.75 C 4.368 1.164 4.032 1.501 3.618 1.501 L 2.417 1.501 C 1.911 1.501 1.501 1.911 1.501 2.417 L 1.501 3.618 C 1.501 4.032 1.164 4.368 0.75 4.368 C 0.336 4.368 0 4.032 0 3.618 Z M 15 3.618 L 15 2.417 C 15 1.911 14.59 1.501 14.084 1.501 L 12.882 1.501 C 12.468 1.501 12.133 1.164 12.133 0.75 C 12.133 0.336 12.468 0 12.882 0 L 14.084 0 C 15.418 0 16.501 1.082 16.501 2.417 L 16.501 3.618 C 16.501 4.032 16.164 4.368 15.75 4.368 C 15.336 4.368 15 4.032 15 3.618 Z M 10.138 0 C 10.552 0 10.888 0.336 10.888 0.75 C 10.888 1.165 10.552 1.501 10.138 1.501 L 6.363 1.501 C 5.949 1.501 5.613 1.165 5.613 0.75 C 5.613 0.336 5.949 0 6.363 0 L 10.138 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "row",
      padding: "0px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      boxSizing: "border-box",
      paddingBottom: "calc(var(--margin-spacing-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.12,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "iOS Home Indicator"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--gray-gray1-fb)",
      display: "flex",
      flexDirection: "row",
      gap: 150.55224609375,
      padding: "17.500px 27px 19.500px 15.500px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 110,
      height: 22,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27.5,
      top: 2,
      width: 39,
      height: 20,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 590,
      fontSize: 17,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.500px",
      color: "var(--gray-black00)"
    }
  }, "8:00"), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 69,
      top: 5.5,
      width: 13,
      height: 13,
      color: "var(--gray-black00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.084 7.101 C 0.834 7.096 0.626 7.041 0.459 6.936 C 0.297 6.825 0.176 6.687 0.097 6.519 C 0.018 6.348 -0.013 6.167 0.005 5.978 C 0.022 5.784 0.088 5.606 0.202 5.443 C 0.316 5.275 0.485 5.141 0.709 5.04 L 11.239 0.172 C 11.542 0.035 11.82 -0.02 12.075 0.006 C 12.329 0.028 12.538 0.119 12.7 0.277 C 12.862 0.431 12.959 0.634 12.989 0.885 C 13.025 1.132 12.972 1.409 12.832 1.717 L 7.994 12.246 C 7.889 12.484 7.751 12.663 7.58 12.781 C 7.409 12.905 7.227 12.975 7.033 12.993 C 6.84 13.015 6.658 12.986 6.487 12.907 C 6.316 12.828 6.178 12.704 6.073 12.537 C 5.967 12.374 5.915 12.172 5.915 11.929 L 5.902 7.22 C 5.902 7.149 5.866 7.114 5.796 7.114 L 1.084 7.101 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 21.507,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.370,
    height: 12.305,
    viewBox: "0 0 19.370 12.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.939,
      top: 5.277,
      width: 19.37,
      height: 12.305,
      color: "var(--gray-black00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.37 1.121 C 19.37 1.121 19.37 0 18.327 0 L 16.885 0 C 16.041 0 16.041 1.121 16.041 1.121 L 16.041 11.182 C 16.041 11.182 16.041 12.303 16.885 12.303 L 18.327 12.303 C 19.37 12.303 19.37 11.182 19.37 11.182 L 19.37 1.121 Z M 11.702 2.591 L 12.945 2.591 C 13.521 2.591 13.988 3.104 13.988 3.738 L 13.988 11.155 C 13.988 11.789 13.521 12.303 12.945 12.303 L 11.702 12.303 C 11.127 12.303 10.66 11.789 10.66 11.155 L 10.66 3.738 C 10.66 3.104 11.127 2.591 11.702 2.591 Z M 7.668 5.18 L 6.425 5.18 C 5.849 5.18 5.382 5.701 5.382 6.342 L 5.382 11.141 C 5.382 11.782 5.849 12.303 6.425 12.303 L 7.668 12.303 C 8.244 12.303 8.71 11.782 8.71 11.141 L 8.71 6.342 C 8.71 5.701 8.244 5.18 7.668 5.18 Z M 2.286 7.571 L 0.914 7.574 C 0.264 7.581 0 8.084 0 8.716 L 0 11.157 C 0 11.976 0.38 12.305 0.914 12.305 L 2.286 12.303 C 3.009 12.303 3.328 11.976 3.328 11.157 L 3.328 8.716 C 3.328 7.976 3.009 7.571 2.286 7.571 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31,
      top: 1.754,
      width: 54.5,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 19,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 590,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.500px",
      color: "var(--gray-black00)"
    }
  }, "5G"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26,
      top: -2,
      width: 27.336,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 27.336,
    height: 13.700,
    viewBox: "0 0 27.336 13.700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4.75,
      width: 27.336,
      height: 13.7,
      color: "var(--gray-black00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.4 C 0 4.16 0 3.04 0.436 2.184 C 0.819 1.431 1.431 0.819 2.184 0.436 C 3.04 0 4.16 0 6.4 0 L 18.307 0 C 20.029 0 20.889 0 21.59 0.21 C 23.203 0.692 24.465 1.954 24.948 3.567 C 25.157 4.268 25.157 5.129 25.157 6.85 C 25.157 8.571 25.157 9.432 24.948 10.133 C 24.465 11.746 23.203 13.008 21.59 13.49 C 20.889 13.7 20.029 13.7 18.307 13.7 L 6.4 13.7 C 4.16 13.7 3.04 13.7 2.184 13.264 C 1.431 12.881 0.819 12.269 0.436 11.516 C 0 10.66 0 9.54 0 7.3 L 0 6.4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 26 4.965 L 26 8.865 C 26.81 8.535 27.336 7.766 27.336 6.915 C 27.336 6.064 26.81 5.295 26 4.965 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 20,
      height: 19,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.500px",
      color: "var(--gray-whiteff)"
    }
  }, "85"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--gray-gray1-fb)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Head, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    prop: "common"
  }))));
}

// figma node: 987:8518 포인트/민물/댐
function Screen2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 1646,
      backgroundColor: "var(--background-neutral-neutral1)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 120,
      width: 393,
      height: 732,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      height: 732,
      overflow: "hidden",
      backgroundColor: "rgb(165,210,243)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-46f8bbe5fb52420d-c47c4af4",
    style: {
      position: "absolute",
      left: -53,
      top: -186,
      width: 517,
      height: 975
    }
  })), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 196,
      top: 254
    },
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "reservoir",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 216,
      top: 175,
      width: 103
    },
    text1: "양평군(봉상교)",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "bridge",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 102,
      top: 267,
      width: 76
    },
    text1: "가덕도항"
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 49,
      top: 257,
      width: 67
    },
    text1: "비앙도",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "salt water",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 72,
      top: 230,
      width: 104
    },
    text1: "새만금너울쉼터",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "salt water",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 70,
      top: 159,
      width: 76
    },
    text1: "야미도항"
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 52,
      top: 178,
      width: 94
    },
    text1: "신시도선착장",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "salt water",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 621,
      width: 46,
      height: 15,
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.309,
    height: 6.577,
    viewBox: "0 0 34.309 6.577",
    fill: "none",
    style: {
      position: "relative",
      width: 34.309,
      height: 6.577,
      flexShrink: 0,
      color: "rgb(3,199,90)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.493 0 L 4.493 3.52 L 2.096 0 L 0 0 L 0 6.576 L 2.082 6.576 L 2.082 3.056 L 4.48 6.576 L 6.576 6.576 L 6.576 0 L 4.493 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.863 0 L 7.284 6.576 L 9.465 6.576 L 9.779 5.7 L 12.269 5.7 L 12.584 6.576 L 14.764 6.576 L 12.185 0 L 9.863 0 Z M 11.024 2.111 L 11.759 4.165 L 10.289 4.165 L 11.024 2.111 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 21.81 0 L 21.81 6.576 L 26.96 6.576 L 26.96 4.932 L 23.892 4.932 L 23.892 4.055 L 26.851 4.055 L 26.851 2.521 L 23.892 2.521 L 23.892 1.644 L 26.96 1.644 L 26.96 0 L 21.81 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.374 4.324 L 18.921 0 L 21.114 0 L 18.534 6.576 L 16.213 6.576 L 13.635 0 L 15.827 0 L 17.374 4.324 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 32.847 4.237 L 32.648 4.32 L 32.647 4.321 L 34.309 6.577 L 32.156 6.577 L 30.887 4.714 L 30.139 4.714 L 30.139 6.577 L 28.056 6.577 L 28.056 0.001 L 30.832 0.001 C 31.824 0.001 32.545 0.166 33.1 0.52 C 33.698 0.901 34 1.517 34 2.347 C 34 3.225 33.611 3.917 32.847 4.237 Z M 30.03 3.069 L 31.189 3.069 L 31.189 3.07 C 31.657 3.07 32.019 2.619 31.866 2.13 C 31.775 1.836 31.491 1.645 31.183 1.645 L 30.03 1.645 L 30.03 3.069 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 337,
      top: 73,
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconStar2, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "star",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "linear-gradient(var(--old-grayfb),var(--old-grayfb)), linear-gradient(var(--gray-whiteff),var(--gray-whiteff))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconLayer, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "layer",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconTrafficCone, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "traffic-cone",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconLocation, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "location",
    fill: false
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 16,
      width: 393,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uD3EC\uC778\uD2B8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC870\uD669")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      background: "linear-gradient(var(--background-neutral-neutral0),var(--background-neutral-neutral0)), linear-gradient(rgb(26,26,26),rgb(26,26,26))",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC120\uBC15")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uD654\uC7A5\uC2E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "CCTV")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uB09A\uC2DC\uC6A9\uD488\uC810")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC8FC\uCC28\uC7A5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC219\uC18C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uB9DB\uC9D1"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 384,
      width: 393,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(ModalBottomHead, {
    style: {
      position: "relative",
      height: 58,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    showTitle: true,
    showDiscription: false,
    text1: "포인트 정보",
    text2: "피싱포인트",
    headEmpty: false,
    variant: "map"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-neutral-neutral0)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 24px 60px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-neutral-neutral0)",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 60,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(247,251,243)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 44,
      height: 44,
      borderRadius: 13750,
      display: "flex",
      flexDirection: "column",
      gap: 7.5,
      padding: "6px 4.500px 6px 4.500px",
      alignItems: "flex-start",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 15,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.500,
    height: 10.500,
    viewBox: "0 0 13.500 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.75,
      width: 13.5,
      height: 10.5,
      color: "rgb(23,145,7)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.193 0 L 8.193 -1.375 C 7.434 -1.375 6.818 -0.759 6.818 0 L 8.193 0 Z M 5.5 19.25 L 5.5 20.625 C 6.173 20.625 6.747 20.138 6.857 19.475 L 5.5 19.25 Z M 16.42 0 L 17.795 0 C 17.795 -0.759 17.18 -1.375 16.42 -1.375 L 16.42 0 Z M 19.25 19.25 L 17.895 19.486 C 18.01 20.144 18.582 20.625 19.25 20.625 L 19.25 19.25 Z M 8.193 2.984 L 9.55 3.209 C 9.562 3.135 9.568 3.06 9.568 2.984 L 8.193 2.984 Z M 0 2.984 L 0 1.609 C -0.759 1.609 -1.375 2.225 -1.375 2.984 L 0 2.984 Z M 0 19.25 L -1.375 19.25 C -1.375 20.009 -0.759 20.625 0 20.625 L 0 19.25 Z M 16.42 2.984 L 15.045 2.984 C 15.045 3.063 15.052 3.142 15.066 3.22 L 16.42 2.984 Z M 24.75 2.984 L 26.125 2.984 C 26.125 2.225 25.509 1.609 24.75 1.609 L 24.75 2.984 Z M 24.75 19.25 L 24.75 20.625 C 25.509 20.625 26.125 20.009 26.125 19.25 L 24.75 19.25 Z M 10.027 17.875 C 9.267 17.875 8.652 18.491 8.652 19.25 C 8.652 20.009 9.267 20.625 10.027 20.625 L 10.027 19.25 L 10.027 17.875 Z M 14.587 20.625 C 15.347 20.625 15.962 20.009 15.962 19.25 C 15.962 18.491 15.347 17.875 14.587 17.875 L 14.587 19.25 L 14.587 20.625 Z M 8.193 0 L 8.193 1.375 L 16.42 1.375 L 16.42 0 L 16.42 -1.375 L 8.193 -1.375 L 8.193 0 Z M 8.193 0 L 6.818 0 L 6.818 2.984 L 8.193 2.984 L 9.568 2.984 L 9.568 0 L 8.193 0 Z M 8.193 2.984 L 6.837 2.76 L 4.143 19.025 L 5.5 19.25 L 6.857 19.475 L 9.55 3.209 L 8.193 2.984 Z M 8.193 2.984 L 8.193 1.609 L 0 1.609 L 0 2.984 L 0 4.359 L 8.193 4.359 L 8.193 2.984 Z M 0 19.25 L 0 20.625 L 5.5 20.625 L 5.5 19.25 L 5.5 17.875 L 0 17.875 L 0 19.25 Z M 16.42 0 L 15.045 0 L 15.045 2.984 L 16.42 2.984 L 17.795 2.984 L 17.795 0 L 16.42 0 Z M 16.42 2.984 L 15.066 3.22 L 17.895 19.486 L 19.25 19.25 L 20.605 19.014 L 17.775 2.749 L 16.42 2.984 Z M 16.42 2.984 L 16.42 4.359 L 24.75 4.359 L 24.75 2.984 L 24.75 1.609 L 16.42 1.609 L 16.42 2.984 Z M 24.75 19.25 L 24.75 17.875 L 19.25 17.875 L 19.25 19.25 L 19.25 20.625 L 24.75 20.625 L 24.75 19.25 Z M 24.75 2.984 L 23.375 2.984 L 23.375 19.25 L 24.75 19.25 L 26.125 19.25 L 26.125 2.984 L 24.75 2.984 Z M 0 2.984 L -1.375 2.984 L -1.375 19.25 L 0 19.25 L 1.375 19.25 L 1.375 2.984 L 0 2.984 Z M 10.027 19.25 L 10.027 20.625 L 14.587 20.625 L 14.587 19.25 L 14.587 17.875 L 10.027 17.875 L 10.027 19.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-black36)",
      flexShrink: 0
    }
  }, "\uB310"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-grayaa)",
      flexShrink: 0
    }
  }, "\uBBFC\uBB3C\uD3EC\uC778\uD2B8")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-grayaa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC8FC\uC18C")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      background: "linear-gradient(var(--gray-white-ff),var(--gray-white-ff)), linear-gradient(var(--background-blue-neutral-blue-neutral1),var(--background-blue-neutral-blue-neutral1))",
      boxShadow: "inset 0 0 0 1px var(--gray-gray4-ee)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ControlSegmentedBoxDynamic, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "조황",
    selected: "off"
  }), /*#__PURE__*/React.createElement(ControlSegmentedBoxDynamic, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "댐 정보",
    selected: "on"
  }), /*#__PURE__*/React.createElement(ControlSegmentedBoxDynamic, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "날씨",
    selected: "off"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-end",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--background-neutral-neutral2)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "2026\uB144 6\uC6D4 16\uC77C(\uD654)"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "7\uBD84\uC804 \uC5C5\uB370\uC774\uD2B8 \uB428")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-neutral3-ee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 11,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC800\uC218\uC704"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "187.1EL.m")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 49,
      backgroundColor: "var(--line-line-neutral3-ee)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 11,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uCD1D\uBC29\uB958\uB7C9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "5.1m\xB3/sec")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 49,
      backgroundColor: "var(--line-line-neutral3-ee)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 11,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC800\uC218\uC728"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "5.1%")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexGrow: 1
    }
  }, "\uC790\uB8CC\uC81C\uACF5: \uD55C\uAD6D\uC218\uC790\uC6D0\uACF5\uC0AC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "100%",
      letterSpacing: "-0.030em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC2DC\uAC04\uBCC4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "100%",
      letterSpacing: "-0.030em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "\uC77C\uBCC4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC218\uC704"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC0C1\uC2DC \uB9CC\uC218\uC704  187.1EL.m ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 207.831,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 2,
      width: 318,
      display: "flex",
      flexDirection: "column",
      gap: 35,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 321,
    height: 1,
    viewBox: "0 0 321 1",
    fill: "none",
    style: {
      position: "relative",
      width: 321,
      height: 1,
      flexShrink: 0,
      color: "var(--label-neutral-gray2-e0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.764 L 321 0.764 L 321 0.5 L 321 0.236 L 0 0.236 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 321,
    height: 1,
    viewBox: "0 0 321 1",
    fill: "none",
    style: {
      position: "relative",
      width: 321,
      height: 1,
      flexShrink: 0,
      color: "var(--label-neutral-gray2-e0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.764 L 321 0.764 L 321 0.5 L 321 0.236 L 0 0.236 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 321,
    height: 1,
    viewBox: "0 0 321 1",
    fill: "none",
    style: {
      position: "relative",
      width: 321,
      height: 1,
      flexShrink: 0,
      color: "var(--label-neutral-gray2-e0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.764 L 321 0.764 L 321 0.5 L 321 0.236 L 0 0.236 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 321,
    height: 1,
    viewBox: "0 0 321 1",
    fill: "none",
    style: {
      position: "relative",
      width: 321,
      height: 1,
      flexShrink: 0,
      color: "var(--label-neutral-gray2-e0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.764 L 321 0.764 L 321 0.5 L 321 0.236 L 0 0.236 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 321,
    height: 1,
    viewBox: "0 0 321 1",
    fill: "none",
    style: {
      position: "relative",
      width: 321,
      height: 1,
      flexShrink: 0,
      color: "var(--label-neutral-gray2-e0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.764 L 321 0.764 L 321 0.5 L 321 0.236 L 0 0.236 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      display: "flex",
      flexDirection: "column",
      gap: 23,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "200"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "150"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "100"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "50"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 151,
      top: 194,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 2,
      backgroundColor: "var(--accent-secondary)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      lineHeight: "100%",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC218\uC704")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 46,
      top: 75,
      width: 308,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "75"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      backgroundColor: "var(--accent-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "24\uC77C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "82"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 57,
      backgroundColor: "var(--accent-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "25\uC77C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "63"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      backgroundColor: "var(--accent-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "26\uC77C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "58"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 39,
      backgroundColor: "var(--accent-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "27\uC77C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "53"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      backgroundColor: "var(--accent-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "28\uC77C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "47"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      backgroundColor: "var(--accent-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "29\uC77C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "51"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      backgroundColor: "var(--accent-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "30\uC77C"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC720\uC785/\uBC29\uC720\uB7C9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uB2E8\uC704 : m/s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 213,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 5.555,
      width: 321,
      display: "flex",
      flexDirection: "column",
      gap: 28,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 329,
    height: 1,
    viewBox: "0 0 329 1",
    fill: "none",
    style: {
      position: "relative",
      width: 329,
      height: 1,
      flexShrink: 0,
      color: "var(--label-neutral-gray2-e0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.769 L 329 0.769 L 329 0.5 L 329 0.231 L 0 0.231 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 329,
    height: 1,
    viewBox: "0 0 329 1",
    fill: "none",
    style: {
      position: "relative",
      width: 329,
      height: 1,
      flexShrink: 0,
      color: "var(--label-neutral-gray2-e0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.769 L 329 0.769 L 329 0.5 L 329 0.231 L 0 0.231 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 329,
    height: 1,
    viewBox: "0 0 329 1",
    fill: "none",
    style: {
      position: "relative",
      width: 329,
      height: 1,
      flexShrink: 0,
      color: "var(--label-neutral-gray2-e0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.769 L 329 0.769 L 329 0.5 L 329 0.231 L 0 0.231 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 329,
    height: 1,
    viewBox: "0 0 329 1",
    fill: "none",
    style: {
      position: "relative",
      width: 329,
      height: 1,
      flexShrink: 0,
      color: "var(--label-neutral-gray2-e0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.769 L 329 0.769 L 329 0.5 L 329 0.231 L 0 0.231 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 329,
    height: 1,
    viewBox: "0 0 329 1",
    fill: "none",
    style: {
      position: "relative",
      width: 329,
      height: 1,
      flexShrink: 0,
      color: "var(--label-neutral-gray2-e0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.769 L 329 0.769 L 329 0.5 L 329 0.231 L 0 0.231 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 329,
    height: 1,
    viewBox: "0 0 329 1",
    fill: "none",
    style: {
      position: "relative",
      width: 329,
      height: 1,
      flexShrink: 0,
      color: "var(--label-neutral-gray2-e0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.769 L 329 0.769 L 329 0.5 L 329 0.231 L 0 0.231 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 38,
      top: 162,
      display: "flex",
      flexDirection: "row",
      gap: 21,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 26,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "24\uC77C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 26,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "25\uC77C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 26,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "26\uC77C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 26,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "27\uC77C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 26,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "28\uC77C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 26,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "29\uC77C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 26,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "30\uC77C")), /*#__PURE__*/React.createElement("svg", {
    width: 282.094,
    height: 48,
    viewBox: "0 0 282.094 48",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.23,
      top: 78.717,
      width: 282.094,
      height: 48,
      color: "var(--accent-blue)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 61.762 9.553 L 62.222 8.579 L 62.081 8.513 L 61.927 8.489 L 61.762 9.553 Z M 143.238 48 L 142.779 48.974 L 143.382 49.258 L 143.905 48.845 L 143.238 48 Z M 189.161 11.751 L 189.35 10.691 L 188.873 10.606 L 188.493 10.906 L 189.161 11.751 Z M 0 0 L -0.165 1.064 L 61.598 10.617 L 61.762 9.553 L 61.927 8.489 L 0.165 -1.064 L 0 0 Z M 61.762 9.553 L 61.303 10.527 L 142.779 48.974 L 143.238 48 L 143.698 47.026 L 62.222 8.579 L 61.762 9.553 Z M 143.238 48 L 143.905 48.845 L 189.828 12.596 L 189.161 11.751 L 188.493 10.906 L 142.571 47.155 L 143.238 48 Z M 189.161 11.751 L 188.971 12.811 L 281.905 29.4 L 282.094 28.34 L 282.283 27.28 L 189.35 10.691 L 189.161 11.751 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 282.094,
    height: 52,
    viewBox: "0 0 282.094 52",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.23,
      top: 57.717,
      width: 282.094,
      height: 52,
      color: "var(--accent-orange)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42.567 0 L 43.062 -0.956 L 42.51 -1.242 L 41.986 -0.907 L 42.567 0 Z M 124.224 42.323 L 123.728 43.279 L 123.914 43.375 L 124.123 43.395 L 124.224 42.323 Z M 192.711 48.774 L 192.61 49.846 L 192.628 49.848 L 192.647 49.849 L 192.711 48.774 Z M 247.05 52 L 246.986 53.075 L 247.054 53.079 L 247.121 53.074 L 247.05 52 Z M 0 27.267 L 0.581 28.174 L 43.147 0.907 L 42.567 0 L 41.986 -0.907 L -0.581 26.361 L 0 27.267 Z M 42.567 0 L 42.071 0.956 L 123.728 43.279 L 124.224 42.323 L 124.719 41.367 L 43.062 -0.956 L 42.567 0 Z M 124.224 42.323 L 124.123 43.395 L 192.61 49.846 L 192.711 48.774 L 192.812 47.702 L 124.325 41.251 L 124.224 42.323 Z M 192.711 48.774 L 192.647 49.849 L 246.986 53.075 L 247.05 52 L 247.114 50.925 L 192.775 47.7 L 192.711 48.774 Z M 247.05 52 L 247.121 53.074 L 282.166 50.739 L 282.094 49.664 L 282.022 48.59 L 246.978 50.926 L 247.05 52 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 111.977,
      top: 199,
      width: 122.744,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17,
    height: 1,
    viewBox: "0 0 17 1",
    fill: "none",
    style: {
      position: "relative",
      width: 17,
      height: 1,
      flexShrink: 0,
      color: "var(--accent-blue)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 1.577 L 17 1.577 L 17 0.5 L 17 -0.577 L 0 -0.577 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC720\uC785\uB7C9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17,
    height: 1,
    viewBox: "0 0 17 1",
    fill: "none",
    style: {
      position: "relative",
      width: 17,
      height: 1,
      flexShrink: 0,
      color: "var(--accent-orange)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 1.577 L 17 1.577 L 17 0.5 L 17 -0.577 L 0 -0.577 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uBC29\uB958\uB7C9"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.445,
      width: 22,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "25"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "20"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "15"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "10"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "5"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "0")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 25,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 156,
      height: 111,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 89,
      width: 156,
      height: 1,
      backgroundColor: "var(--line-line-neutral3-ee)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29,
      top: 0.445,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "187"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 62,
      backgroundColor: "var(--accent-blue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC5B4\uC81C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "200"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 70,
      backgroundColor: "var(--accent-orange)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC791\uB144")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 156,
      height: 111,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 89,
      width: 156,
      height: 1,
      backgroundColor: "var(--line-line-neutral3-ee)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29,
      top: 0.445,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "80"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 62,
      backgroundColor: "var(--accent-blue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC5B4\uC81C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "210"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 70,
      backgroundColor: "var(--accent-orange)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC791\uB144"))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1552,
      width: 393,
      backgroundColor: "var(--gray-white-ff)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 60,
      display: "flex",
      flexDirection: "column",
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--margin-spacing-8) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--gray-gray3-f3)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      borderRadius: 2,
      color: "var(--gray-black3-00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.225 L 0 13.012 C 0 12.594 0.34 12.255 0.758 12.255 C 1.176 12.255 1.516 12.594 1.516 13.012 L 1.516 14.225 C 1.516 14.737 1.93 15.151 2.441 15.151 L 3.655 15.151 C 4.073 15.151 4.412 15.49 4.412 15.909 C 4.412 16.327 4.073 16.667 3.655 16.667 L 2.441 16.667 C 1.093 16.667 0 15.573 0 14.225 Z M 10.24 15.151 C 10.658 15.151 10.997 15.49 10.997 15.909 C 10.997 16.327 10.658 16.667 10.24 16.667 L 6.427 16.667 C 6.009 16.667 5.669 16.327 5.669 15.909 C 5.669 15.49 6.009 15.151 6.427 15.151 L 10.24 15.151 Z M 15.151 14.225 L 15.151 13.012 C 15.151 12.594 15.49 12.255 15.909 12.255 C 16.327 12.255 16.667 12.594 16.667 13.012 L 16.667 14.225 C 16.667 15.573 15.573 16.667 14.225 16.667 L 13.012 16.667 C 12.594 16.667 12.255 16.327 12.255 15.909 C 12.255 15.49 12.594 15.151 13.012 15.151 L 14.225 15.151 C 14.737 15.151 15.151 14.737 15.151 14.225 Z M 0 10.24 L 0 6.427 C 0 6.009 0.339 5.669 0.758 5.669 C 1.176 5.669 1.516 6.009 1.516 6.427 L 1.516 10.24 C 1.516 10.658 1.176 10.997 0.758 10.997 C 0.339 10.997 0 10.658 0 10.24 Z M 15.151 10.24 L 15.151 6.427 C 15.151 6.009 15.49 5.669 15.909 5.669 C 16.327 5.669 16.667 6.009 16.667 6.427 L 16.667 10.24 C 16.667 10.658 16.327 10.997 15.909 10.997 C 15.49 10.997 15.151 10.658 15.151 10.24 Z M 0 3.655 L 0 2.441 C 0 1.093 1.093 0 2.441 0 L 3.655 0 C 4.073 0 4.412 0.34 4.412 0.758 C 4.412 1.176 4.073 1.516 3.655 1.516 L 2.441 1.516 C 1.93 1.516 1.516 1.93 1.516 2.441 L 1.516 3.655 C 1.516 4.073 1.176 4.412 0.758 4.412 C 0.34 4.412 0 4.073 0 3.655 Z M 15.151 3.655 L 15.151 2.441 C 15.151 1.93 14.737 1.516 14.225 1.516 L 13.012 1.516 C 12.594 1.516 12.255 1.176 12.255 0.758 C 12.255 0.34 12.594 0 13.012 0 L 14.225 0 C 15.573 0 16.667 1.093 16.667 2.441 L 16.667 3.655 C 16.667 4.073 16.327 4.412 15.909 4.412 C 15.49 4.412 15.151 4.073 15.151 3.655 Z M 10.24 0 C 10.658 0 10.997 0.339 10.997 0.758 C 10.997 1.176 10.658 1.516 10.24 1.516 L 6.427 1.516 C 6.009 1.516 5.669 1.176 5.669 0.758 C 5.669 0.339 6.009 0 6.427 0 L 10.24 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      minHeight: 20,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC0C1\uC138\uC815\uBCF4"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      borderRadius: 2,
      color: "var(--gray-black3-00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.225 L 0 13.012 C 0 12.594 0.34 12.255 0.758 12.255 C 1.176 12.255 1.516 12.594 1.516 13.012 L 1.516 14.225 C 1.516 14.737 1.93 15.151 2.441 15.151 L 3.655 15.151 C 4.073 15.151 4.412 15.49 4.412 15.909 C 4.412 16.327 4.073 16.667 3.655 16.667 L 2.441 16.667 C 1.093 16.667 0 15.573 0 14.225 Z M 10.24 15.151 C 10.658 15.151 10.997 15.49 10.997 15.909 C 10.997 16.327 10.658 16.667 10.24 16.667 L 6.427 16.667 C 6.009 16.667 5.669 16.327 5.669 15.909 C 5.669 15.49 6.009 15.151 6.427 15.151 L 10.24 15.151 Z M 15.151 14.225 L 15.151 13.012 C 15.151 12.594 15.49 12.255 15.909 12.255 C 16.327 12.255 16.667 12.594 16.667 13.012 L 16.667 14.225 C 16.667 15.573 15.573 16.667 14.225 16.667 L 13.012 16.667 C 12.594 16.667 12.255 16.327 12.255 15.909 C 12.255 15.49 12.594 15.151 13.012 15.151 L 14.225 15.151 C 14.737 15.151 15.151 14.737 15.151 14.225 Z M 0 10.24 L 0 6.427 C 0 6.009 0.339 5.669 0.758 5.669 C 1.176 5.669 1.516 6.009 1.516 6.427 L 1.516 10.24 C 1.516 10.658 1.176 10.997 0.758 10.997 C 0.339 10.997 0 10.658 0 10.24 Z M 15.151 10.24 L 15.151 6.427 C 15.151 6.009 15.49 5.669 15.909 5.669 C 16.327 5.669 16.667 6.009 16.667 6.427 L 16.667 10.24 C 16.667 10.658 16.327 10.997 15.909 10.997 C 15.49 10.997 15.151 10.658 15.151 10.24 Z M 0 3.655 L 0 2.441 C 0 1.093 1.093 0 2.441 0 L 3.655 0 C 4.073 0 4.412 0.34 4.412 0.758 C 4.412 1.176 4.073 1.516 3.655 1.516 L 2.441 1.516 C 1.93 1.516 1.516 1.93 1.516 2.441 L 1.516 3.655 C 1.516 4.073 1.176 4.412 0.758 4.412 C 0.34 4.412 0 4.073 0 3.655 Z M 15.151 3.655 L 15.151 2.441 C 15.151 1.93 14.737 1.516 14.225 1.516 L 13.012 1.516 C 12.594 1.516 12.255 1.176 12.255 0.758 C 12.255 0.34 12.594 0 13.012 0 L 14.225 0 C 15.573 0 16.667 1.093 16.667 2.441 L 16.667 3.655 C 16.667 4.073 16.327 4.412 15.909 4.412 C 15.49 4.412 15.151 4.073 15.151 3.655 Z M 10.24 0 C 10.658 0 10.997 0.339 10.997 0.758 C 10.997 1.176 10.658 1.516 10.24 1.516 L 6.427 1.516 C 6.009 1.516 5.669 1.176 5.669 0.758 C 5.669 0.339 6.009 0 6.427 0 L 10.24 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--accent-primary-violet)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.089,
    height: 15.762,
    viewBox: "0 0 13.089 15.762",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.458,
      top: 2.125,
      width: 13.089,
      height: 15.762,
      color: "var(--label-neutral-white)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.089 3.923 L 11.911 5.101 L 10 3.19 L 10 10.345 L 1.667 10.345 L 1.667 15.762 L 0 15.762 L 0 8.678 L 8.333 8.678 L 8.333 3.19 L 6.423 5.101 L 5.244 3.923 L 9.167 0 L 13.089 3.923 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      minHeight: 20,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-white)",
      flexShrink: 0
    }
  }, "\uAE38\uC548\uB0B4 \uC2DC\uC791"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.501,
    height: 16.501,
    viewBox: "0 0 16.501 16.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.75,
      top: 1.75,
      width: 16.501,
      height: 16.501,
      borderRadius: 2,
      color: "var(--gray-white-ff)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.084 L 0 12.882 C 0 12.468 0.336 12.133 0.75 12.133 C 1.164 12.133 1.501 12.468 1.501 12.882 L 1.501 14.084 C 1.501 14.59 1.911 15 2.417 15 L 3.618 15 C 4.032 15 4.368 15.336 4.368 15.75 C 4.368 16.164 4.032 16.501 3.618 16.501 L 2.417 16.501 C 1.082 16.501 0 15.418 0 14.084 Z M 10.138 15 C 10.552 15 10.888 15.336 10.888 15.75 C 10.888 16.165 10.552 16.501 10.138 16.501 L 6.363 16.501 C 5.949 16.501 5.613 16.165 5.613 15.75 C 5.613 15.336 5.949 15 6.363 15 L 10.138 15 Z M 15 14.084 L 15 12.882 C 15 12.468 15.336 12.133 15.75 12.133 C 16.164 12.133 16.501 12.468 16.501 12.882 L 16.501 14.084 C 16.501 15.418 15.418 16.501 14.084 16.501 L 12.882 16.501 C 12.468 16.501 12.133 16.164 12.133 15.75 C 12.133 15.336 12.468 15 12.882 15 L 14.084 15 C 14.59 15 15 14.59 15 14.084 Z M 0 10.138 L 0 6.363 C 0 5.949 0.336 5.613 0.75 5.613 C 1.165 5.613 1.501 5.949 1.501 6.363 L 1.501 10.138 C 1.501 10.552 1.165 10.888 0.75 10.888 C 0.336 10.888 0 10.552 0 10.138 Z M 15 10.138 L 15 6.363 C 15 5.949 15.336 5.613 15.75 5.613 C 16.165 5.613 16.501 5.949 16.501 6.363 L 16.501 10.138 C 16.501 10.552 16.165 10.888 15.75 10.888 C 15.336 10.888 15 10.552 15 10.138 Z M 0 3.618 L 0 2.417 C 0 1.082 1.082 0 2.417 0 L 3.618 0 C 4.032 0 4.368 0.336 4.368 0.75 C 4.368 1.164 4.032 1.501 3.618 1.501 L 2.417 1.501 C 1.911 1.501 1.501 1.911 1.501 2.417 L 1.501 3.618 C 1.501 4.032 1.164 4.368 0.75 4.368 C 0.336 4.368 0 4.032 0 3.618 Z M 15 3.618 L 15 2.417 C 15 1.911 14.59 1.501 14.084 1.501 L 12.882 1.501 C 12.468 1.501 12.133 1.164 12.133 0.75 C 12.133 0.336 12.468 0 12.882 0 L 14.084 0 C 15.418 0 16.501 1.082 16.501 2.417 L 16.501 3.618 C 16.501 4.032 16.164 4.368 15.75 4.368 C 15.336 4.368 15 4.032 15 3.618 Z M 10.138 0 C 10.552 0 10.888 0.336 10.888 0.75 C 10.888 1.165 10.552 1.501 10.138 1.501 L 6.363 1.501 C 5.949 1.501 5.613 1.165 5.613 0.75 C 5.613 0.336 5.949 0 6.363 0 L 10.138 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "row",
      padding: "0px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      boxSizing: "border-box",
      paddingBottom: "calc(var(--margin-spacing-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.12,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "iOS Home Indicator"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--gray-gray1-fb)",
      display: "flex",
      flexDirection: "row",
      gap: 150.55224609375,
      padding: "17.500px 27px 19.500px 15.500px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 110,
      height: 22,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27.5,
      top: 2,
      width: 39,
      height: 20,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 590,
      fontSize: 17,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.500px",
      color: "var(--gray-black00)"
    }
  }, "8:00"), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 69,
      top: 5.5,
      width: 13,
      height: 13,
      color: "var(--gray-black00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.084 7.101 C 0.834 7.096 0.626 7.041 0.459 6.936 C 0.297 6.825 0.176 6.687 0.097 6.519 C 0.018 6.348 -0.013 6.167 0.005 5.978 C 0.022 5.784 0.088 5.606 0.202 5.443 C 0.316 5.275 0.485 5.141 0.709 5.04 L 11.239 0.172 C 11.542 0.035 11.82 -0.02 12.075 0.006 C 12.329 0.028 12.538 0.119 12.7 0.277 C 12.862 0.431 12.959 0.634 12.989 0.885 C 13.025 1.132 12.972 1.409 12.832 1.717 L 7.994 12.246 C 7.889 12.484 7.751 12.663 7.58 12.781 C 7.409 12.905 7.227 12.975 7.033 12.993 C 6.84 13.015 6.658 12.986 6.487 12.907 C 6.316 12.828 6.178 12.704 6.073 12.537 C 5.967 12.374 5.915 12.172 5.915 11.929 L 5.902 7.22 C 5.902 7.149 5.866 7.114 5.796 7.114 L 1.084 7.101 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 21.507,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.370,
    height: 12.305,
    viewBox: "0 0 19.370 12.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.939,
      top: 5.277,
      width: 19.37,
      height: 12.305,
      color: "var(--gray-black00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.37 1.121 C 19.37 1.121 19.37 0 18.327 0 L 16.885 0 C 16.041 0 16.041 1.121 16.041 1.121 L 16.041 11.182 C 16.041 11.182 16.041 12.303 16.885 12.303 L 18.327 12.303 C 19.37 12.303 19.37 11.182 19.37 11.182 L 19.37 1.121 Z M 11.702 2.591 L 12.945 2.591 C 13.521 2.591 13.988 3.104 13.988 3.738 L 13.988 11.155 C 13.988 11.789 13.521 12.303 12.945 12.303 L 11.702 12.303 C 11.127 12.303 10.66 11.789 10.66 11.155 L 10.66 3.738 C 10.66 3.104 11.127 2.591 11.702 2.591 Z M 7.668 5.18 L 6.425 5.18 C 5.849 5.18 5.382 5.701 5.382 6.342 L 5.382 11.141 C 5.382 11.782 5.849 12.303 6.425 12.303 L 7.668 12.303 C 8.244 12.303 8.71 11.782 8.71 11.141 L 8.71 6.342 C 8.71 5.701 8.244 5.18 7.668 5.18 Z M 2.286 7.571 L 0.914 7.574 C 0.264 7.581 0 8.084 0 8.716 L 0 11.157 C 0 11.976 0.38 12.305 0.914 12.305 L 2.286 12.303 C 3.009 12.303 3.328 11.976 3.328 11.157 L 3.328 8.716 C 3.328 7.976 3.009 7.571 2.286 7.571 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31,
      top: 1.754,
      width: 54.5,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 19,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 590,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.500px",
      color: "var(--gray-black00)"
    }
  }, "5G"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26,
      top: -2,
      width: 27.336,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 27.336,
    height: 13.700,
    viewBox: "0 0 27.336 13.700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4.75,
      width: 27.336,
      height: 13.7,
      color: "var(--gray-black00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.4 C 0 4.16 0 3.04 0.436 2.184 C 0.819 1.431 1.431 0.819 2.184 0.436 C 3.04 0 4.16 0 6.4 0 L 18.307 0 C 20.029 0 20.889 0 21.59 0.21 C 23.203 0.692 24.465 1.954 24.948 3.567 C 25.157 4.268 25.157 5.129 25.157 6.85 C 25.157 8.571 25.157 9.432 24.948 10.133 C 24.465 11.746 23.203 13.008 21.59 13.49 C 20.889 13.7 20.029 13.7 18.307 13.7 L 6.4 13.7 C 4.16 13.7 3.04 13.7 2.184 13.264 C 1.431 12.881 0.819 12.269 0.436 11.516 C 0 10.66 0 9.54 0 7.3 L 0 6.4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 26 4.965 L 26 8.865 C 26.81 8.535 27.336 7.766 27.336 6.915 C 27.336 6.064 26.81 5.295 26 4.965 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 20,
      height: 19,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.500px",
      color: "var(--gray-whiteff)"
    }
  }, "85"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--gray-gray1-fb)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Head, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    prop: "common"
  }))));
}

// figma node: 992:10056 포인트/민물/강
function Screen3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 1590,
      backgroundColor: "var(--background-neutral-neutral1)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 120,
      width: 393,
      height: 732,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      height: 732,
      overflow: "hidden",
      backgroundColor: "rgb(165,210,243)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-46f8bbe5fb52420d-c47c4af4",
    style: {
      position: "absolute",
      left: -53,
      top: -186,
      width: 517,
      height: 975
    }
  })), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 196,
      top: 254
    },
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "reservoir",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 216,
      top: 175,
      width: 103
    },
    text1: "양평군(봉상교)",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "bridge",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 102,
      top: 267,
      width: 76
    },
    text1: "가덕도항"
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 49,
      top: 257,
      width: 67
    },
    text1: "비앙도",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "salt water",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 72,
      top: 230,
      width: 104
    },
    text1: "새만금너울쉼터",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "salt water",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 70,
      top: 159,
      width: 76
    },
    text1: "야미도항"
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 52,
      top: 178,
      width: 94
    },
    text1: "신시도선착장",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "salt water",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 621,
      width: 46,
      height: 15,
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.309,
    height: 6.577,
    viewBox: "0 0 34.309 6.577",
    fill: "none",
    style: {
      position: "relative",
      width: 34.309,
      height: 6.577,
      flexShrink: 0,
      color: "rgb(3,199,90)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.493 0 L 4.493 3.52 L 2.096 0 L 0 0 L 0 6.576 L 2.082 6.576 L 2.082 3.056 L 4.48 6.576 L 6.576 6.576 L 6.576 0 L 4.493 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.863 0 L 7.284 6.576 L 9.465 6.576 L 9.779 5.7 L 12.269 5.7 L 12.584 6.576 L 14.764 6.576 L 12.185 0 L 9.863 0 Z M 11.024 2.111 L 11.759 4.165 L 10.289 4.165 L 11.024 2.111 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 21.81 0 L 21.81 6.576 L 26.96 6.576 L 26.96 4.932 L 23.892 4.932 L 23.892 4.055 L 26.851 4.055 L 26.851 2.521 L 23.892 2.521 L 23.892 1.644 L 26.96 1.644 L 26.96 0 L 21.81 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.374 4.324 L 18.921 0 L 21.114 0 L 18.534 6.576 L 16.213 6.576 L 13.635 0 L 15.827 0 L 17.374 4.324 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 32.847 4.237 L 32.648 4.32 L 32.647 4.321 L 34.309 6.577 L 32.156 6.577 L 30.887 4.714 L 30.139 4.714 L 30.139 6.577 L 28.056 6.577 L 28.056 0.001 L 30.832 0.001 C 31.824 0.001 32.545 0.166 33.1 0.52 C 33.698 0.901 34 1.517 34 2.347 C 34 3.225 33.611 3.917 32.847 4.237 Z M 30.03 3.069 L 31.189 3.069 L 31.189 3.07 C 31.657 3.07 32.019 2.619 31.866 2.13 C 31.775 1.836 31.491 1.645 31.183 1.645 L 30.03 1.645 L 30.03 3.069 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 337,
      top: 73,
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconStar2, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "star",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "linear-gradient(var(--old-grayfb),var(--old-grayfb)), linear-gradient(var(--gray-whiteff),var(--gray-whiteff))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconLayer, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "layer",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconTrafficCone, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "traffic-cone",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconLocation, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "location",
    fill: false
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 16,
      width: 393,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uD3EC\uC778\uD2B8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC870\uD669")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      background: "linear-gradient(var(--background-neutral-neutral0),var(--background-neutral-neutral0)), linear-gradient(rgb(26,26,26),rgb(26,26,26))",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC120\uBC15")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uD654\uC7A5\uC2E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "CCTV")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uB09A\uC2DC\uC6A9\uD488\uC810")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC8FC\uCC28\uC7A5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC219\uC18C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uB9DB\uC9D1"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 384,
      width: 393,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(ModalBottomHead, {
    style: {
      position: "relative",
      height: 58,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    showTitle: true,
    showDiscription: false,
    text1: "포인트 정보",
    text2: "피싱포인트",
    headEmpty: false,
    variant: "map"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-neutral-neutral0)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 24px 60px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-neutral-neutral0)",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 60,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(247,251,243)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 44,
      height: 44,
      borderRadius: 13750
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 11,
    viewBox: "0 0 16 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6.5,
      width: 16,
      height: 11,
      color: "rgb(23,145,7)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.278 0 L 12.278 -1.315 C 11.992 -1.315 11.713 -1.221 11.485 -1.048 L 12.278 0 Z M 2.448 7.441 L 1.654 6.393 C 1.31 6.653 1.116 7.066 1.134 7.497 C 1.152 7.928 1.38 8.322 1.745 8.553 L 2.448 7.441 Z M 11.046 12.875 L 11.77 13.972 C 12.143 13.726 12.365 13.308 12.361 12.862 C 12.356 12.416 12.126 12.002 11.748 11.764 L 11.046 12.875 Z M -0.724 19.069 C -1.33 19.469 -1.497 20.285 -1.097 20.891 C -0.697 21.497 0.118 21.664 0.724 21.264 L 0 20.167 L -0.724 19.069 Z M 17.139 0 L 18.043 0.955 C 18.434 0.585 18.56 0.014 18.361 -0.487 C 18.161 -0.987 17.677 -1.315 17.139 -1.315 L 17.139 0 Z M 11.12 5.698 L 10.216 4.743 C 9.897 5.046 9.75 5.488 9.825 5.922 C 9.899 6.355 10.186 6.723 10.589 6.901 L 11.12 5.698 Z M 29.333 13.75 L 30.387 14.537 C 30.626 14.216 30.707 13.804 30.605 13.416 C 30.504 13.029 30.231 12.709 29.865 12.547 L 29.333 13.75 Z M 23.488 19.38 C 23.054 19.962 23.173 20.786 23.755 21.22 C 24.337 21.655 25.161 21.535 25.595 20.953 L 24.542 20.167 L 23.488 19.38 Z M 17.271 11.451 C 16.668 11.047 15.851 11.209 15.447 11.812 C 15.043 12.416 15.205 13.232 15.809 13.636 L 16.54 12.543 L 17.271 11.451 Z M 21.083 15.583 L 22.08 16.441 C 22.325 16.156 22.437 15.779 22.386 15.406 C 22.335 15.033 22.127 14.7 21.815 14.491 L 21.083 15.583 Z M 16.142 19.309 C 15.669 19.859 15.731 20.69 16.281 21.163 C 16.832 21.637 17.662 21.575 18.136 21.024 L 17.139 20.167 L 16.142 19.309 Z M 14.571 17.527 C 15.138 17.073 15.23 16.246 14.777 15.679 C 14.323 15.112 13.496 15.02 12.929 15.473 L 13.75 16.5 L 14.571 17.527 Z M 8.345 19.14 C 7.778 19.594 7.686 20.421 8.14 20.988 C 8.594 21.555 9.421 21.647 9.988 21.193 L 9.167 20.167 L 8.345 19.14 Z M 12.278 0 L 11.485 -1.048 L 1.654 6.393 L 2.448 7.441 L 3.241 8.49 L 13.072 1.048 L 12.278 0 Z M 2.448 7.441 L 1.745 8.553 L 10.343 13.987 L 11.046 12.875 L 11.748 11.764 L 3.15 6.33 L 2.448 7.441 Z M 11.046 12.875 L 10.321 11.778 L -0.724 19.069 L 0 20.167 L 0.724 21.264 L 11.77 13.972 L 11.046 12.875 Z M 17.139 0 L 16.235 -0.955 L 10.216 4.743 L 11.12 5.698 L 12.024 6.653 L 18.043 0.955 L 17.139 0 Z M 11.12 5.698 L 10.589 6.901 L 28.802 14.953 L 29.333 13.75 L 29.865 12.547 L 11.652 4.496 L 11.12 5.698 Z M 29.333 13.75 L 28.28 12.963 L 23.488 19.38 L 24.542 20.167 L 25.595 20.953 L 30.387 14.537 L 29.333 13.75 Z M 17.139 0 L 17.139 -1.315 L 12.278 -1.315 L 12.278 0 L 12.278 1.315 L 17.139 1.315 L 17.139 0 Z M 16.54 12.543 L 15.809 13.636 L 20.352 16.676 L 21.083 15.583 L 21.815 14.491 L 17.271 11.451 L 16.54 12.543 Z M 21.083 15.583 L 20.087 14.726 L 16.142 19.309 L 17.139 20.167 L 18.136 21.024 L 22.08 16.441 L 21.083 15.583 Z M 13.75 16.5 L 12.929 15.473 L 8.345 19.14 L 9.167 20.167 L 9.988 21.193 L 14.571 17.527 L 13.75 16.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-black36)",
      flexShrink: 0
    }
  }, "\uAC15"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-grayaa)",
      flexShrink: 0
    }
  }, "\uBBFC\uBB3C\uD3EC\uC778\uD2B8")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-grayaa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC8FC\uC18C")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      background: "linear-gradient(var(--gray-white-ff),var(--gray-white-ff)), linear-gradient(var(--background-blue-neutral-blue-neutral1),var(--background-blue-neutral-blue-neutral1))",
      boxShadow: "inset 0 0 0 1px var(--gray-gray4-ee)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ControlSegmentedBoxDynamic, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "조황",
    selected: "off"
  }), /*#__PURE__*/React.createElement(ControlSegmentedBoxDynamic, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "강 정보",
    selected: "on"
  }), /*#__PURE__*/React.createElement(ControlSegmentedBoxDynamic, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "날씨",
    selected: "off"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-end",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--background-neutral-neutral2)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: "100%",
      color: "var(--old-black36)",
      flexShrink: 0
    }
  }, "2026\uB144 6\uC6D4 16\uC77C(\uD654)"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "7\uBD84\uC804 \uC5C5\uB370\uC774\uD2B8 \uB428")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-neutral3-ee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 11,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC218\uC704"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "8m(\uAD00\uC2EC\uC218\uC704)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 49,
      backgroundColor: "var(--line-line-neutral3-ee)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 11,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC720\uB7C9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "30m\xB3/sec")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexGrow: 1
    }
  }, "\uC790\uB8CC\uC81C\uACF5: \uD658\uACBD\uBD80"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "100%",
      letterSpacing: "-0.030em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC2DC\uAC04\uBCC4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "100%",
      letterSpacing: "-0.030em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "\uC77C\uBCC4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC720\uC785/\uBC29\uC720\uB7C9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC0C1\uC2DC \uB9CC\uC218\uC704  187.1EL.m ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 15,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 296,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 5,
      width: 318,
      display: "flex",
      flexDirection: "column",
      gap: 45,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 324,
    height: 1,
    viewBox: "0 0 324 1",
    fill: "none",
    style: {
      position: "relative",
      width: 324,
      height: 1,
      flexShrink: 0,
      color: "var(--old-graye0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.764 L 324 0.764 L 324 0.5 L 324 0.236 L 0 0.236 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 324,
    height: 1,
    viewBox: "0 0 324 1",
    fill: "none",
    style: {
      position: "relative",
      width: 324,
      height: 1,
      flexShrink: 0,
      color: "var(--old-graye0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.764 L 324 0.764 L 324 0.5 L 324 0.236 L 0 0.236 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 324,
    height: 1,
    viewBox: "0 0 324 1",
    fill: "none",
    style: {
      position: "relative",
      width: 324,
      height: 1,
      flexShrink: 0,
      color: "var(--old-graye0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.764 L 324 0.764 L 324 0.5 L 324 0.236 L 0 0.236 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 324,
    height: 1,
    viewBox: "0 0 324 1",
    fill: "none",
    style: {
      position: "relative",
      width: 324,
      height: 1,
      flexShrink: 0,
      color: "var(--old-graye0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.764 L 324 0.764 L 324 0.5 L 324 0.236 L 0 0.236 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 324,
    height: 1,
    viewBox: "0 0 324 1",
    fill: "none",
    style: {
      position: "relative",
      width: 324,
      height: 1,
      flexShrink: 0,
      color: "var(--old-graye0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.764 L 324 0.764 L 324 0.5 L 324 0.236 L 0 0.236 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 324,
    height: 1,
    viewBox: "0 0 324 1",
    fill: "none",
    style: {
      position: "relative",
      width: 324,
      height: 1,
      flexShrink: 0,
      color: "var(--old-graye0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 0.764 L 324 0.764 L 324 0.5 L 324 0.236 L 0 0.236 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      display: "flex",
      flexDirection: "column",
      gap: 33,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "5"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "3"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "2"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "1"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 111,
      top: 283,
      width: 122.744,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17,
    height: 1,
    viewBox: "0 0 17 1",
    fill: "none",
    style: {
      position: "relative",
      width: 17,
      height: 1,
      flexShrink: 0,
      color: "rgb(121,87,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 1.577 L 17 1.577 L 17 0.5 L 17 -0.577 L 0 -0.577 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      lineHeight: "100%",
      color: "rgb(137,137,137)",
      flexShrink: 0
    }
  }, "\uC720\uC785\uB7C9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17,
    height: 1,
    viewBox: "0 0 17 1",
    fill: "none",
    style: {
      position: "relative",
      width: 17,
      height: 1,
      flexShrink: 0,
      color: "rgb(246,114,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 1.577 L 17 1.577 L 17 0.5 L 17 -0.577 L 0 -0.577 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      lineHeight: "100%",
      color: "rgb(137,137,137)",
      flexShrink: 0
    }
  }, "\uBC29\uB958\uB7C9"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 43,
      top: 164,
      width: 308,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "1.12"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      backgroundColor: "var(--label-purple-assitive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "14\uC2DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "1.21"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 55,
      backgroundColor: "var(--label-purple-assitive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "15\uC2DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "1.12"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      backgroundColor: "var(--label-purple-assitive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "16\uC2DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "1.13"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 51,
      backgroundColor: "var(--label-purple-assitive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "17\uC2DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "1.24"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 57,
      backgroundColor: "var(--label-purple-assitive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "18\uC2DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "1.12"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      backgroundColor: "var(--label-purple-assitive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "19\uC2DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "1.24"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 57,
      backgroundColor: "var(--label-purple-assitive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0
    }
  }, "20\uC2DC"))), /*#__PURE__*/React.createElement("svg", {
    width: 279.145,
    height: 1,
    viewBox: "0 0 279.145 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 54.06,
      top: 27,
      width: 279.145,
      height: 1,
      color: "var(--accent-red)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 0 1.593 L 279.145 1.593 L 279.145 0.5 L 279.145 -0.593 L 0 -0.593 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--background-neutral-neutral2)",
      display: "flex",
      flexDirection: "row",
      padding: "20px 20px 20px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      color: "rgb(79,79,79)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "관심"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 13
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "수위"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 13
    }
  }, " : 3.9")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      color: "rgb(79,79,79)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "경보"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 13
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "수위"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 13
    }
  }, " : 10.5"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      color: "rgb(79,79,79)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "주의보"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 13
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "수위"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 13
    }
  }, " : 8.5")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      color: "rgb(79,79,79)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "심각"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 13
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "수위"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 13
    }
  }, " : 13.3")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 351,
      display: "flex",
      flexDirection: "row",
      gap: 25,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 25,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "flex-end",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC218\uC704"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "m ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 156,
      height: 111,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 89,
      width: 156,
      height: 1,
      backgroundColor: "var(--old-grayee)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29,
      top: 0.445,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "187"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 62,
      backgroundColor: "var(--accent-blue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC5B4\uC81C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "200"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 70,
      backgroundColor: "var(--accent-orange)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC791\uB144"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 25,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "flex-end",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC720\uB7C9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      textAlign: "right",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "m\xB3/sec")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 156,
      height: 111,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 89,
      width: 156,
      height: 1,
      backgroundColor: "var(--old-grayee)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29,
      top: 0.445,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "80"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 62,
      backgroundColor: "var(--accent-blue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC5B4\uC81C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "210"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 70,
      backgroundColor: "var(--accent-orange)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC791\uB144"))))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1496,
      width: 393,
      backgroundColor: "var(--gray-white-ff)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 60,
      display: "flex",
      flexDirection: "column",
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--margin-spacing-8) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--gray-gray3-f3)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      borderRadius: 2,
      color: "var(--gray-black3-00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.225 L 0 13.012 C 0 12.594 0.34 12.255 0.758 12.255 C 1.176 12.255 1.516 12.594 1.516 13.012 L 1.516 14.225 C 1.516 14.737 1.93 15.151 2.441 15.151 L 3.655 15.151 C 4.073 15.151 4.412 15.49 4.412 15.909 C 4.412 16.327 4.073 16.667 3.655 16.667 L 2.441 16.667 C 1.093 16.667 0 15.573 0 14.225 Z M 10.24 15.151 C 10.658 15.151 10.997 15.49 10.997 15.909 C 10.997 16.327 10.658 16.667 10.24 16.667 L 6.427 16.667 C 6.009 16.667 5.669 16.327 5.669 15.909 C 5.669 15.49 6.009 15.151 6.427 15.151 L 10.24 15.151 Z M 15.151 14.225 L 15.151 13.012 C 15.151 12.594 15.49 12.255 15.909 12.255 C 16.327 12.255 16.667 12.594 16.667 13.012 L 16.667 14.225 C 16.667 15.573 15.573 16.667 14.225 16.667 L 13.012 16.667 C 12.594 16.667 12.255 16.327 12.255 15.909 C 12.255 15.49 12.594 15.151 13.012 15.151 L 14.225 15.151 C 14.737 15.151 15.151 14.737 15.151 14.225 Z M 0 10.24 L 0 6.427 C 0 6.009 0.339 5.669 0.758 5.669 C 1.176 5.669 1.516 6.009 1.516 6.427 L 1.516 10.24 C 1.516 10.658 1.176 10.997 0.758 10.997 C 0.339 10.997 0 10.658 0 10.24 Z M 15.151 10.24 L 15.151 6.427 C 15.151 6.009 15.49 5.669 15.909 5.669 C 16.327 5.669 16.667 6.009 16.667 6.427 L 16.667 10.24 C 16.667 10.658 16.327 10.997 15.909 10.997 C 15.49 10.997 15.151 10.658 15.151 10.24 Z M 0 3.655 L 0 2.441 C 0 1.093 1.093 0 2.441 0 L 3.655 0 C 4.073 0 4.412 0.34 4.412 0.758 C 4.412 1.176 4.073 1.516 3.655 1.516 L 2.441 1.516 C 1.93 1.516 1.516 1.93 1.516 2.441 L 1.516 3.655 C 1.516 4.073 1.176 4.412 0.758 4.412 C 0.34 4.412 0 4.073 0 3.655 Z M 15.151 3.655 L 15.151 2.441 C 15.151 1.93 14.737 1.516 14.225 1.516 L 13.012 1.516 C 12.594 1.516 12.255 1.176 12.255 0.758 C 12.255 0.34 12.594 0 13.012 0 L 14.225 0 C 15.573 0 16.667 1.093 16.667 2.441 L 16.667 3.655 C 16.667 4.073 16.327 4.412 15.909 4.412 C 15.49 4.412 15.151 4.073 15.151 3.655 Z M 10.24 0 C 10.658 0 10.997 0.339 10.997 0.758 C 10.997 1.176 10.658 1.516 10.24 1.516 L 6.427 1.516 C 6.009 1.516 5.669 1.176 5.669 0.758 C 5.669 0.339 6.009 0 6.427 0 L 10.24 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      minHeight: 20,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC0C1\uC138\uC815\uBCF4"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      borderRadius: 2,
      color: "var(--gray-black3-00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.225 L 0 13.012 C 0 12.594 0.34 12.255 0.758 12.255 C 1.176 12.255 1.516 12.594 1.516 13.012 L 1.516 14.225 C 1.516 14.737 1.93 15.151 2.441 15.151 L 3.655 15.151 C 4.073 15.151 4.412 15.49 4.412 15.909 C 4.412 16.327 4.073 16.667 3.655 16.667 L 2.441 16.667 C 1.093 16.667 0 15.573 0 14.225 Z M 10.24 15.151 C 10.658 15.151 10.997 15.49 10.997 15.909 C 10.997 16.327 10.658 16.667 10.24 16.667 L 6.427 16.667 C 6.009 16.667 5.669 16.327 5.669 15.909 C 5.669 15.49 6.009 15.151 6.427 15.151 L 10.24 15.151 Z M 15.151 14.225 L 15.151 13.012 C 15.151 12.594 15.49 12.255 15.909 12.255 C 16.327 12.255 16.667 12.594 16.667 13.012 L 16.667 14.225 C 16.667 15.573 15.573 16.667 14.225 16.667 L 13.012 16.667 C 12.594 16.667 12.255 16.327 12.255 15.909 C 12.255 15.49 12.594 15.151 13.012 15.151 L 14.225 15.151 C 14.737 15.151 15.151 14.737 15.151 14.225 Z M 0 10.24 L 0 6.427 C 0 6.009 0.339 5.669 0.758 5.669 C 1.176 5.669 1.516 6.009 1.516 6.427 L 1.516 10.24 C 1.516 10.658 1.176 10.997 0.758 10.997 C 0.339 10.997 0 10.658 0 10.24 Z M 15.151 10.24 L 15.151 6.427 C 15.151 6.009 15.49 5.669 15.909 5.669 C 16.327 5.669 16.667 6.009 16.667 6.427 L 16.667 10.24 C 16.667 10.658 16.327 10.997 15.909 10.997 C 15.49 10.997 15.151 10.658 15.151 10.24 Z M 0 3.655 L 0 2.441 C 0 1.093 1.093 0 2.441 0 L 3.655 0 C 4.073 0 4.412 0.34 4.412 0.758 C 4.412 1.176 4.073 1.516 3.655 1.516 L 2.441 1.516 C 1.93 1.516 1.516 1.93 1.516 2.441 L 1.516 3.655 C 1.516 4.073 1.176 4.412 0.758 4.412 C 0.34 4.412 0 4.073 0 3.655 Z M 15.151 3.655 L 15.151 2.441 C 15.151 1.93 14.737 1.516 14.225 1.516 L 13.012 1.516 C 12.594 1.516 12.255 1.176 12.255 0.758 C 12.255 0.34 12.594 0 13.012 0 L 14.225 0 C 15.573 0 16.667 1.093 16.667 2.441 L 16.667 3.655 C 16.667 4.073 16.327 4.412 15.909 4.412 C 15.49 4.412 15.151 4.073 15.151 3.655 Z M 10.24 0 C 10.658 0 10.997 0.339 10.997 0.758 C 10.997 1.176 10.658 1.516 10.24 1.516 L 6.427 1.516 C 6.009 1.516 5.669 1.176 5.669 0.758 C 5.669 0.339 6.009 0 6.427 0 L 10.24 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--accent-primary-violet)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.089,
    height: 15.762,
    viewBox: "0 0 13.089 15.762",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.458,
      top: 2.125,
      width: 13.089,
      height: 15.762,
      color: "var(--label-neutral-white)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.089 3.923 L 11.911 5.101 L 10 3.19 L 10 10.345 L 1.667 10.345 L 1.667 15.762 L 0 15.762 L 0 8.678 L 8.333 8.678 L 8.333 3.19 L 6.423 5.101 L 5.244 3.923 L 9.167 0 L 13.089 3.923 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      minHeight: 20,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-white)",
      flexShrink: 0
    }
  }, "\uAE38\uC548\uB0B4 \uC2DC\uC791"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.501,
    height: 16.501,
    viewBox: "0 0 16.501 16.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.75,
      top: 1.75,
      width: 16.501,
      height: 16.501,
      borderRadius: 2,
      color: "var(--gray-white-ff)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.084 L 0 12.882 C 0 12.468 0.336 12.133 0.75 12.133 C 1.164 12.133 1.501 12.468 1.501 12.882 L 1.501 14.084 C 1.501 14.59 1.911 15 2.417 15 L 3.618 15 C 4.032 15 4.368 15.336 4.368 15.75 C 4.368 16.164 4.032 16.501 3.618 16.501 L 2.417 16.501 C 1.082 16.501 0 15.418 0 14.084 Z M 10.138 15 C 10.552 15 10.888 15.336 10.888 15.75 C 10.888 16.165 10.552 16.501 10.138 16.501 L 6.363 16.501 C 5.949 16.501 5.613 16.165 5.613 15.75 C 5.613 15.336 5.949 15 6.363 15 L 10.138 15 Z M 15 14.084 L 15 12.882 C 15 12.468 15.336 12.133 15.75 12.133 C 16.164 12.133 16.501 12.468 16.501 12.882 L 16.501 14.084 C 16.501 15.418 15.418 16.501 14.084 16.501 L 12.882 16.501 C 12.468 16.501 12.133 16.164 12.133 15.75 C 12.133 15.336 12.468 15 12.882 15 L 14.084 15 C 14.59 15 15 14.59 15 14.084 Z M 0 10.138 L 0 6.363 C 0 5.949 0.336 5.613 0.75 5.613 C 1.165 5.613 1.501 5.949 1.501 6.363 L 1.501 10.138 C 1.501 10.552 1.165 10.888 0.75 10.888 C 0.336 10.888 0 10.552 0 10.138 Z M 15 10.138 L 15 6.363 C 15 5.949 15.336 5.613 15.75 5.613 C 16.165 5.613 16.501 5.949 16.501 6.363 L 16.501 10.138 C 16.501 10.552 16.165 10.888 15.75 10.888 C 15.336 10.888 15 10.552 15 10.138 Z M 0 3.618 L 0 2.417 C 0 1.082 1.082 0 2.417 0 L 3.618 0 C 4.032 0 4.368 0.336 4.368 0.75 C 4.368 1.164 4.032 1.501 3.618 1.501 L 2.417 1.501 C 1.911 1.501 1.501 1.911 1.501 2.417 L 1.501 3.618 C 1.501 4.032 1.164 4.368 0.75 4.368 C 0.336 4.368 0 4.032 0 3.618 Z M 15 3.618 L 15 2.417 C 15 1.911 14.59 1.501 14.084 1.501 L 12.882 1.501 C 12.468 1.501 12.133 1.164 12.133 0.75 C 12.133 0.336 12.468 0 12.882 0 L 14.084 0 C 15.418 0 16.501 1.082 16.501 2.417 L 16.501 3.618 C 16.501 4.032 16.164 4.368 15.75 4.368 C 15.336 4.368 15 4.032 15 3.618 Z M 10.138 0 C 10.552 0 10.888 0.336 10.888 0.75 C 10.888 1.165 10.552 1.501 10.138 1.501 L 6.363 1.501 C 5.949 1.501 5.613 1.165 5.613 0.75 C 5.613 0.336 5.949 0 6.363 0 L 10.138 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "row",
      padding: "0px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      boxSizing: "border-box",
      paddingBottom: "calc(var(--margin-spacing-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.12,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "iOS Home Indicator"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--gray-gray1-fb)",
      display: "flex",
      flexDirection: "row",
      gap: 150.55224609375,
      padding: "17.500px 27px 19.500px 15.500px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 110,
      height: 22,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27.5,
      top: 2,
      width: 39,
      height: 20,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 590,
      fontSize: 17,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.500px",
      color: "var(--gray-black00)"
    }
  }, "8:00"), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 69,
      top: 5.5,
      width: 13,
      height: 13,
      color: "var(--gray-black00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.084 7.101 C 0.834 7.096 0.626 7.041 0.459 6.936 C 0.297 6.825 0.176 6.687 0.097 6.519 C 0.018 6.348 -0.013 6.167 0.005 5.978 C 0.022 5.784 0.088 5.606 0.202 5.443 C 0.316 5.275 0.485 5.141 0.709 5.04 L 11.239 0.172 C 11.542 0.035 11.82 -0.02 12.075 0.006 C 12.329 0.028 12.538 0.119 12.7 0.277 C 12.862 0.431 12.959 0.634 12.989 0.885 C 13.025 1.132 12.972 1.409 12.832 1.717 L 7.994 12.246 C 7.889 12.484 7.751 12.663 7.58 12.781 C 7.409 12.905 7.227 12.975 7.033 12.993 C 6.84 13.015 6.658 12.986 6.487 12.907 C 6.316 12.828 6.178 12.704 6.073 12.537 C 5.967 12.374 5.915 12.172 5.915 11.929 L 5.902 7.22 C 5.902 7.149 5.866 7.114 5.796 7.114 L 1.084 7.101 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 21.507,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.370,
    height: 12.305,
    viewBox: "0 0 19.370 12.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.939,
      top: 5.277,
      width: 19.37,
      height: 12.305,
      color: "var(--gray-black00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.37 1.121 C 19.37 1.121 19.37 0 18.327 0 L 16.885 0 C 16.041 0 16.041 1.121 16.041 1.121 L 16.041 11.182 C 16.041 11.182 16.041 12.303 16.885 12.303 L 18.327 12.303 C 19.37 12.303 19.37 11.182 19.37 11.182 L 19.37 1.121 Z M 11.702 2.591 L 12.945 2.591 C 13.521 2.591 13.988 3.104 13.988 3.738 L 13.988 11.155 C 13.988 11.789 13.521 12.303 12.945 12.303 L 11.702 12.303 C 11.127 12.303 10.66 11.789 10.66 11.155 L 10.66 3.738 C 10.66 3.104 11.127 2.591 11.702 2.591 Z M 7.668 5.18 L 6.425 5.18 C 5.849 5.18 5.382 5.701 5.382 6.342 L 5.382 11.141 C 5.382 11.782 5.849 12.303 6.425 12.303 L 7.668 12.303 C 8.244 12.303 8.71 11.782 8.71 11.141 L 8.71 6.342 C 8.71 5.701 8.244 5.18 7.668 5.18 Z M 2.286 7.571 L 0.914 7.574 C 0.264 7.581 0 8.084 0 8.716 L 0 11.157 C 0 11.976 0.38 12.305 0.914 12.305 L 2.286 12.303 C 3.009 12.303 3.328 11.976 3.328 11.157 L 3.328 8.716 C 3.328 7.976 3.009 7.571 2.286 7.571 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31,
      top: 1.754,
      width: 54.5,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 19,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 590,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.500px",
      color: "var(--gray-black00)"
    }
  }, "5G"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26,
      top: -2,
      width: 27.336,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 27.336,
    height: 13.700,
    viewBox: "0 0 27.336 13.700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4.75,
      width: 27.336,
      height: 13.7,
      color: "var(--gray-black00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.4 C 0 4.16 0 3.04 0.436 2.184 C 0.819 1.431 1.431 0.819 2.184 0.436 C 3.04 0 4.16 0 6.4 0 L 18.307 0 C 20.029 0 20.889 0 21.59 0.21 C 23.203 0.692 24.465 1.954 24.948 3.567 C 25.157 4.268 25.157 5.129 25.157 6.85 C 25.157 8.571 25.157 9.432 24.948 10.133 C 24.465 11.746 23.203 13.008 21.59 13.49 C 20.889 13.7 20.029 13.7 18.307 13.7 L 6.4 13.7 C 4.16 13.7 3.04 13.7 2.184 13.264 C 1.431 12.881 0.819 12.269 0.436 11.516 C 0 10.66 0 9.54 0 7.3 L 0 6.4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 26 4.965 L 26 8.865 C 26.81 8.535 27.336 7.766 27.336 6.915 C 27.336 6.064 26.81 5.295 26 4.965 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 20,
      height: 19,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.500px",
      color: "var(--gray-whiteff)"
    }
  }, "85"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--gray-gray1-fb)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Head, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    prop: "common"
  }))));
}

// figma node: 1045:18277 포인트/민물/공통
function Screen4(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 1012,
      backgroundColor: "var(--background-neutral-neutral1)",
      position: "relative",
      color: "rgb(3,199,90)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 120,
      width: 393,
      height: 732,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      height: 732,
      overflow: "hidden",
      backgroundColor: "rgb(165,210,243)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-46f8bbe5fb52420d-c47c4af4",
    style: {
      position: "absolute",
      left: -53,
      top: -186,
      width: 517,
      height: 975
    }
  })), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 196,
      top: 254
    },
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "reservoir",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 216,
      top: 175,
      width: 103
    },
    text1: "양평군(봉상교)",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "bridge",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 102,
      top: 267,
      width: 76
    },
    text1: "가덕도항"
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 49,
      top: 257,
      width: 67
    },
    text1: "비앙도",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "salt water",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 72,
      top: 230,
      width: 104
    },
    text1: "새만금너울쉼터",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "salt water",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 70,
      top: 159,
      width: 76
    },
    text1: "야미도항"
  }), /*#__PURE__*/React.createElement(PinLabel, {
    style: {
      position: "absolute",
      left: 52,
      top: 178,
      width: 94
    },
    text1: "신시도선착장",
    icon1: /*#__PURE__*/React.createElement(Icon, {
      prop: "salt water",
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 621,
      width: 46,
      height: 15,
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.309,
    height: 6.577,
    viewBox: "0 0 34.309 6.577",
    fill: "none",
    style: {
      position: "relative",
      width: 34.309,
      height: 6.577,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.493 0 L 4.493 3.52 L 2.096 0 L 0 0 L 0 6.576 L 2.082 6.576 L 2.082 3.056 L 4.48 6.576 L 6.576 6.576 L 6.576 0 L 4.493 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.863 0 L 7.284 6.576 L 9.465 6.576 L 9.779 5.7 L 12.269 5.7 L 12.584 6.576 L 14.764 6.576 L 12.185 0 L 9.863 0 Z M 11.024 2.111 L 11.759 4.165 L 10.289 4.165 L 11.024 2.111 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 21.81 0 L 21.81 6.576 L 26.96 6.576 L 26.96 4.932 L 23.892 4.932 L 23.892 4.055 L 26.851 4.055 L 26.851 2.521 L 23.892 2.521 L 23.892 1.644 L 26.96 1.644 L 26.96 0 L 21.81 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.374 4.324 L 18.921 0 L 21.114 0 L 18.534 6.576 L 16.213 6.576 L 13.635 0 L 15.827 0 L 17.374 4.324 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 32.847 4.237 L 32.648 4.32 L 32.647 4.321 L 34.309 6.577 L 32.156 6.577 L 30.887 4.714 L 30.139 4.714 L 30.139 6.577 L 28.056 6.577 L 28.056 0.001 L 30.832 0.001 C 31.824 0.001 32.545 0.166 33.1 0.52 C 33.698 0.901 34 1.517 34 2.347 C 34 3.225 33.611 3.917 32.847 4.237 Z M 30.03 3.069 L 31.189 3.069 L 31.189 3.07 C 31.657 3.07 32.019 2.619 31.866 2.13 C 31.775 1.836 31.491 1.645 31.183 1.645 L 30.03 1.645 L 30.03 3.069 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 337,
      top: 73,
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconStar2, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "star",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "linear-gradient(var(--old-grayfb),var(--old-grayfb)), linear-gradient(var(--gray-whiteff),var(--gray-whiteff))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconLayer, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "layer",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconTrafficCone, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "traffic-cone",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "var(--gray-white-ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(IconLocation, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    variant: "location",
    fill: false
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 16,
      width: 393,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uD3EC\uC778\uD2B8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC870\uD669")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      background: "linear-gradient(var(--background-neutral-neutral0),var(--background-neutral-neutral0)), linear-gradient(rgb(26,26,26),rgb(26,26,26))",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC120\uBC15")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uD654\uC7A5\uC2E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "CCTV")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uB09A\uC2DC\uC6A9\uD488\uC810")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC8FC\uCC28\uC7A5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uC219\uC18C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "\uB9DB\uC9D1"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 384,
      width: 393,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(ModalBottomHead, {
    style: {
      position: "relative",
      height: 58,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    showTitle: true,
    showDiscription: false,
    text1: "포인트 정보",
    text2: "피싱포인트",
    headEmpty: false,
    variant: "map"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-neutral-neutral0)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 24px 60px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-neutral-neutral0)",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 60,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(247,251,243)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 44,
      height: 44,
      borderRadius: 13750
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.500,
    height: 15.167,
    viewBox: "0 0 10.500 15.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.75,
      top: 4.667,
      width: 10.5,
      height: 15.167,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.625 0 L 10.726 -0.824 C 10.466 -1.171 10.058 -1.375 9.625 -1.375 C 9.192 -1.375 8.784 -1.171 8.524 -0.824 L 9.625 0 Z M 5.597 18.141 C 5.44 17.398 4.711 16.923 3.968 17.079 C 3.225 17.236 2.749 17.965 2.906 18.708 L 4.251 18.425 L 5.597 18.141 Z M 8.738 24.485 C 9.476 24.665 10.219 24.213 10.399 23.475 C 10.579 22.738 10.127 21.994 9.389 21.814 L 9.064 23.15 L 8.738 24.485 Z M 19.25 18.181 L 17.875 18.181 C 17.875 22.737 14.181 26.431 9.625 26.431 L 9.625 27.806 L 9.625 29.181 C 15.7 29.181 20.625 24.256 20.625 18.181 L 19.25 18.181 Z M 9.625 27.806 L 9.625 26.431 C 5.069 26.431 1.375 22.737 1.375 18.181 L 0 18.181 L -1.375 18.181 C -1.375 24.256 3.55 29.181 9.625 29.181 L 9.625 27.806 Z M 0 18.181 L 1.375 18.181 C 1.375 17.174 1.858 15.609 2.752 13.674 C 3.621 11.792 4.792 9.738 5.981 7.821 C 7.167 5.909 8.355 4.157 9.248 2.882 C 9.693 2.245 10.065 1.728 10.324 1.371 C 10.453 1.193 10.555 1.055 10.623 0.962 C 10.658 0.916 10.684 0.881 10.701 0.857 C 10.71 0.846 10.716 0.837 10.72 0.831 C 10.722 0.829 10.724 0.826 10.725 0.825 C 10.725 0.825 10.726 0.824 10.726 0.824 C 10.726 0.824 10.726 0.824 10.726 0.824 C 10.726 0.824 10.726 0.824 9.625 0 C 8.524 -0.824 8.524 -0.824 8.524 -0.823 C 8.524 -0.823 8.523 -0.823 8.523 -0.823 C 8.523 -0.822 8.522 -0.821 8.522 -0.821 C 8.52 -0.819 8.518 -0.816 8.516 -0.813 C 8.511 -0.806 8.503 -0.796 8.494 -0.783 C 8.475 -0.757 8.447 -0.72 8.411 -0.671 C 8.338 -0.573 8.233 -0.429 8.099 -0.245 C 7.832 0.123 7.451 0.653 6.995 1.305 C 6.083 2.608 4.864 4.404 3.644 6.372 C 2.426 8.336 1.191 10.496 0.256 12.521 C -0.655 14.493 -1.375 16.529 -1.375 18.181 L 0 18.181 Z M 9.625 0 C 8.524 0.824 8.524 0.824 8.524 0.824 C 8.524 0.824 8.524 0.824 8.524 0.824 C 8.524 0.824 8.525 0.825 8.525 0.825 C 8.526 0.826 8.528 0.829 8.53 0.831 C 8.534 0.837 8.54 0.846 8.549 0.857 C 8.566 0.881 8.592 0.916 8.627 0.962 C 8.695 1.055 8.797 1.193 8.926 1.371 C 9.185 1.728 9.557 2.245 10.002 2.882 C 10.895 4.157 12.083 5.909 13.269 7.821 C 14.458 9.738 15.629 11.792 16.498 13.674 C 17.392 15.609 17.875 17.174 17.875 18.181 L 19.25 18.181 L 20.625 18.181 C 20.625 16.529 19.905 14.493 18.994 12.521 C 18.059 10.496 16.824 8.336 15.606 6.372 C 14.386 4.404 13.167 2.608 12.255 1.305 C 11.799 0.653 11.418 0.123 11.151 -0.245 C 11.017 -0.429 10.912 -0.573 10.839 -0.671 C 10.803 -0.72 10.775 -0.757 10.756 -0.783 C 10.747 -0.796 10.739 -0.806 10.734 -0.813 C 10.732 -0.816 10.73 -0.819 10.728 -0.821 C 10.728 -0.821 10.727 -0.822 10.727 -0.823 C 10.727 -0.823 10.726 -0.823 10.726 -0.823 C 10.726 -0.824 10.726 -0.824 9.625 0 Z M 4.251 18.425 L 2.906 18.708 C 3.216 20.184 3.864 21.457 4.885 22.459 C 5.9 23.455 7.211 24.113 8.738 24.485 L 9.064 23.15 L 9.389 21.814 C 8.234 21.532 7.401 21.075 6.812 20.496 C 6.228 19.924 5.811 19.161 5.597 18.141 L 4.251 18.425 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-black36)",
      flexShrink: 0
    }
  }, "\uBBFC\uBB3C\uACF5\uD1B5"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-grayaa)",
      flexShrink: 0
    }
  }, "\uBBFC\uBB3C\uD3EC\uC778\uD2B8")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-grayaa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC8FC\uC18C")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      background: "linear-gradient(var(--gray-white-ff),var(--gray-white-ff)), linear-gradient(var(--background-blue-neutral-blue-neutral1),var(--background-blue-neutral-blue-neutral1))",
      boxShadow: "inset 0 0 0 1px var(--gray-gray4-ee)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ControlSegmentedBoxDynamic, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "조황",
    selected: "on"
  }), /*#__PURE__*/React.createElement(ControlSegmentedBoxDynamic, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "날씨",
    selected: "off"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 68,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uBC30\uC2A4 21cm"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uBC30\uC2A4\uC640"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 10,
      backgroundColor: "var(--label-cool-neutral-cn1)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "5\uC6D4 3\uC77C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(118,118,118)",
      flexShrink: 0
    }
  }, "\uB8E8\uC5B4\uB09A\uC2DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(118,118,118)",
      flexShrink: 0
    }
  }, "\u2219"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(118,118,118)",
      flexShrink: 0
    }
  }, "\uC2A4\uD53C\uB2DD\uBCA0\uC774\uD2B8")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-neutral2-f3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 68,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-76066c8a7db80480",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uAC00\uBB3C\uCE58 107cm"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uD480\uBCBC\uB9AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 10,
      backgroundColor: "var(--label-cool-neutral-cn1)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "6\uC6D4 13\uC77C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(118,118,118)",
      flexShrink: 0
    }
  }, "\uB8E8\uC5B4\uB09A\uC2DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(118,118,118)",
      flexShrink: 0
    }
  }, "\u2219"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(118,118,118)",
      flexShrink: 0
    }
  }, "\uC6DC/\uC9C0\uADF8\uD5E4\uB4DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 77,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      borderRadius: 10000,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "var(--accent-green1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4,
      height: 12,
      backgroundColor: "rgb(255,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 0,
      width: 4,
      height: 12,
      backgroundColor: "rgb(0,106,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 0,
      width: 4,
      height: 12,
      backgroundColor: "rgb(255,200,0)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(118,118,118)",
      flexShrink: 0
    }
  }, "\uC0C9\uB3D9(\uD63C\uD569)")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-neutral2-f3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 68,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uB044\uB9AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uACFC\uC57C\uC544\uBE75"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 10,
      backgroundColor: "var(--label-cool-neutral-cn1)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "25\uB144 12\uC6D4 11\uC77C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "rgb(118,118,118)",
      flexShrink: 0
    }
  }, "\uB8E8\uC5B4\uB09A\uC2DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(118,118,118)",
      flexShrink: 0
    }
  }, "\u2219"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(118,118,118)",
      flexShrink: 0
    }
  }, "\uBC14\uC774\uBE0C\uB808\uC774\uC158")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 47,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "var(--accent-green1)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(118,118,118)",
      flexShrink: 0
    }
  }, "\uADF8\uB9B0")))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 918,
      width: 393,
      backgroundColor: "var(--gray-white-ff)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 60,
      display: "flex",
      flexDirection: "column",
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--margin-spacing-8) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--gray-gray3-f3)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      borderRadius: 2,
      color: "var(--gray-black3-00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.225 L 0 13.012 C 0 12.594 0.34 12.255 0.758 12.255 C 1.176 12.255 1.516 12.594 1.516 13.012 L 1.516 14.225 C 1.516 14.737 1.93 15.151 2.441 15.151 L 3.655 15.151 C 4.073 15.151 4.412 15.49 4.412 15.909 C 4.412 16.327 4.073 16.667 3.655 16.667 L 2.441 16.667 C 1.093 16.667 0 15.573 0 14.225 Z M 10.24 15.151 C 10.658 15.151 10.997 15.49 10.997 15.909 C 10.997 16.327 10.658 16.667 10.24 16.667 L 6.427 16.667 C 6.009 16.667 5.669 16.327 5.669 15.909 C 5.669 15.49 6.009 15.151 6.427 15.151 L 10.24 15.151 Z M 15.151 14.225 L 15.151 13.012 C 15.151 12.594 15.49 12.255 15.909 12.255 C 16.327 12.255 16.667 12.594 16.667 13.012 L 16.667 14.225 C 16.667 15.573 15.573 16.667 14.225 16.667 L 13.012 16.667 C 12.594 16.667 12.255 16.327 12.255 15.909 C 12.255 15.49 12.594 15.151 13.012 15.151 L 14.225 15.151 C 14.737 15.151 15.151 14.737 15.151 14.225 Z M 0 10.24 L 0 6.427 C 0 6.009 0.339 5.669 0.758 5.669 C 1.176 5.669 1.516 6.009 1.516 6.427 L 1.516 10.24 C 1.516 10.658 1.176 10.997 0.758 10.997 C 0.339 10.997 0 10.658 0 10.24 Z M 15.151 10.24 L 15.151 6.427 C 15.151 6.009 15.49 5.669 15.909 5.669 C 16.327 5.669 16.667 6.009 16.667 6.427 L 16.667 10.24 C 16.667 10.658 16.327 10.997 15.909 10.997 C 15.49 10.997 15.151 10.658 15.151 10.24 Z M 0 3.655 L 0 2.441 C 0 1.093 1.093 0 2.441 0 L 3.655 0 C 4.073 0 4.412 0.34 4.412 0.758 C 4.412 1.176 4.073 1.516 3.655 1.516 L 2.441 1.516 C 1.93 1.516 1.516 1.93 1.516 2.441 L 1.516 3.655 C 1.516 4.073 1.176 4.412 0.758 4.412 C 0.34 4.412 0 4.073 0 3.655 Z M 15.151 3.655 L 15.151 2.441 C 15.151 1.93 14.737 1.516 14.225 1.516 L 13.012 1.516 C 12.594 1.516 12.255 1.176 12.255 0.758 C 12.255 0.34 12.594 0 13.012 0 L 14.225 0 C 15.573 0 16.667 1.093 16.667 2.441 L 16.667 3.655 C 16.667 4.073 16.327 4.412 15.909 4.412 C 15.49 4.412 15.151 4.073 15.151 3.655 Z M 10.24 0 C 10.658 0 10.997 0.339 10.997 0.758 C 10.997 1.176 10.658 1.516 10.24 1.516 L 6.427 1.516 C 6.009 1.516 5.669 1.176 5.669 0.758 C 5.669 0.339 6.009 0 6.427 0 L 10.24 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      minHeight: 20,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC0C1\uC138\uC815\uBCF4"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      borderRadius: 2,
      color: "var(--gray-black3-00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.225 L 0 13.012 C 0 12.594 0.34 12.255 0.758 12.255 C 1.176 12.255 1.516 12.594 1.516 13.012 L 1.516 14.225 C 1.516 14.737 1.93 15.151 2.441 15.151 L 3.655 15.151 C 4.073 15.151 4.412 15.49 4.412 15.909 C 4.412 16.327 4.073 16.667 3.655 16.667 L 2.441 16.667 C 1.093 16.667 0 15.573 0 14.225 Z M 10.24 15.151 C 10.658 15.151 10.997 15.49 10.997 15.909 C 10.997 16.327 10.658 16.667 10.24 16.667 L 6.427 16.667 C 6.009 16.667 5.669 16.327 5.669 15.909 C 5.669 15.49 6.009 15.151 6.427 15.151 L 10.24 15.151 Z M 15.151 14.225 L 15.151 13.012 C 15.151 12.594 15.49 12.255 15.909 12.255 C 16.327 12.255 16.667 12.594 16.667 13.012 L 16.667 14.225 C 16.667 15.573 15.573 16.667 14.225 16.667 L 13.012 16.667 C 12.594 16.667 12.255 16.327 12.255 15.909 C 12.255 15.49 12.594 15.151 13.012 15.151 L 14.225 15.151 C 14.737 15.151 15.151 14.737 15.151 14.225 Z M 0 10.24 L 0 6.427 C 0 6.009 0.339 5.669 0.758 5.669 C 1.176 5.669 1.516 6.009 1.516 6.427 L 1.516 10.24 C 1.516 10.658 1.176 10.997 0.758 10.997 C 0.339 10.997 0 10.658 0 10.24 Z M 15.151 10.24 L 15.151 6.427 C 15.151 6.009 15.49 5.669 15.909 5.669 C 16.327 5.669 16.667 6.009 16.667 6.427 L 16.667 10.24 C 16.667 10.658 16.327 10.997 15.909 10.997 C 15.49 10.997 15.151 10.658 15.151 10.24 Z M 0 3.655 L 0 2.441 C 0 1.093 1.093 0 2.441 0 L 3.655 0 C 4.073 0 4.412 0.34 4.412 0.758 C 4.412 1.176 4.073 1.516 3.655 1.516 L 2.441 1.516 C 1.93 1.516 1.516 1.93 1.516 2.441 L 1.516 3.655 C 1.516 4.073 1.176 4.412 0.758 4.412 C 0.34 4.412 0 4.073 0 3.655 Z M 15.151 3.655 L 15.151 2.441 C 15.151 1.93 14.737 1.516 14.225 1.516 L 13.012 1.516 C 12.594 1.516 12.255 1.176 12.255 0.758 C 12.255 0.34 12.594 0 13.012 0 L 14.225 0 C 15.573 0 16.667 1.093 16.667 2.441 L 16.667 3.655 C 16.667 4.073 16.327 4.412 15.909 4.412 C 15.49 4.412 15.151 4.073 15.151 3.655 Z M 10.24 0 C 10.658 0 10.997 0.339 10.997 0.758 C 10.997 1.176 10.658 1.516 10.24 1.516 L 6.427 1.516 C 6.009 1.516 5.669 1.176 5.669 0.758 C 5.669 0.339 6.009 0 6.427 0 L 10.24 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--accent-primary-violet)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.089,
    height: 15.762,
    viewBox: "0 0 13.089 15.762",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.458,
      top: 2.125,
      width: 13.089,
      height: 15.762,
      color: "var(--label-neutral-white)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.089 3.923 L 11.911 5.101 L 10 3.19 L 10 10.345 L 1.667 10.345 L 1.667 15.762 L 0 15.762 L 0 8.678 L 8.333 8.678 L 8.333 3.19 L 6.423 5.101 L 5.244 3.923 L 9.167 0 L 13.089 3.923 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      minHeight: 20,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-white)",
      flexShrink: 0
    }
  }, "\uAE38\uC548\uB0B4 \uC2DC\uC791"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.501,
    height: 16.501,
    viewBox: "0 0 16.501 16.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.75,
      top: 1.75,
      width: 16.501,
      height: 16.501,
      borderRadius: 2,
      color: "var(--gray-white-ff)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.084 L 0 12.882 C 0 12.468 0.336 12.133 0.75 12.133 C 1.164 12.133 1.501 12.468 1.501 12.882 L 1.501 14.084 C 1.501 14.59 1.911 15 2.417 15 L 3.618 15 C 4.032 15 4.368 15.336 4.368 15.75 C 4.368 16.164 4.032 16.501 3.618 16.501 L 2.417 16.501 C 1.082 16.501 0 15.418 0 14.084 Z M 10.138 15 C 10.552 15 10.888 15.336 10.888 15.75 C 10.888 16.165 10.552 16.501 10.138 16.501 L 6.363 16.501 C 5.949 16.501 5.613 16.165 5.613 15.75 C 5.613 15.336 5.949 15 6.363 15 L 10.138 15 Z M 15 14.084 L 15 12.882 C 15 12.468 15.336 12.133 15.75 12.133 C 16.164 12.133 16.501 12.468 16.501 12.882 L 16.501 14.084 C 16.501 15.418 15.418 16.501 14.084 16.501 L 12.882 16.501 C 12.468 16.501 12.133 16.164 12.133 15.75 C 12.133 15.336 12.468 15 12.882 15 L 14.084 15 C 14.59 15 15 14.59 15 14.084 Z M 0 10.138 L 0 6.363 C 0 5.949 0.336 5.613 0.75 5.613 C 1.165 5.613 1.501 5.949 1.501 6.363 L 1.501 10.138 C 1.501 10.552 1.165 10.888 0.75 10.888 C 0.336 10.888 0 10.552 0 10.138 Z M 15 10.138 L 15 6.363 C 15 5.949 15.336 5.613 15.75 5.613 C 16.165 5.613 16.501 5.949 16.501 6.363 L 16.501 10.138 C 16.501 10.552 16.165 10.888 15.75 10.888 C 15.336 10.888 15 10.552 15 10.138 Z M 0 3.618 L 0 2.417 C 0 1.082 1.082 0 2.417 0 L 3.618 0 C 4.032 0 4.368 0.336 4.368 0.75 C 4.368 1.164 4.032 1.501 3.618 1.501 L 2.417 1.501 C 1.911 1.501 1.501 1.911 1.501 2.417 L 1.501 3.618 C 1.501 4.032 1.164 4.368 0.75 4.368 C 0.336 4.368 0 4.032 0 3.618 Z M 15 3.618 L 15 2.417 C 15 1.911 14.59 1.501 14.084 1.501 L 12.882 1.501 C 12.468 1.501 12.133 1.164 12.133 0.75 C 12.133 0.336 12.468 0 12.882 0 L 14.084 0 C 15.418 0 16.501 1.082 16.501 2.417 L 16.501 3.618 C 16.501 4.032 16.164 4.368 15.75 4.368 C 15.336 4.368 15 4.032 15 3.618 Z M 10.138 0 C 10.552 0 10.888 0.336 10.888 0.75 C 10.888 1.165 10.552 1.501 10.138 1.501 L 6.363 1.501 C 5.949 1.501 5.613 1.165 5.613 0.75 C 5.613 0.336 5.949 0 6.363 0 L 10.138 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "row",
      padding: "0px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      boxSizing: "border-box",
      paddingBottom: "calc(var(--margin-spacing-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.12,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "iOS Home Indicator"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--gray-gray1-fb)",
      display: "flex",
      flexDirection: "row",
      gap: 150.55224609375,
      padding: "17.500px 27px 19.500px 15.500px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 110,
      height: 22,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27.5,
      top: 2,
      width: 39,
      height: 20,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 590,
      fontSize: 17,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.500px",
      color: "var(--gray-black00)"
    }
  }, "8:00"), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 69,
      top: 5.5,
      width: 13,
      height: 13,
      color: "var(--gray-black00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.084 7.101 C 0.834 7.096 0.626 7.041 0.459 6.936 C 0.297 6.825 0.176 6.687 0.097 6.519 C 0.018 6.348 -0.013 6.167 0.005 5.978 C 0.022 5.784 0.088 5.606 0.202 5.443 C 0.316 5.275 0.485 5.141 0.709 5.04 L 11.239 0.172 C 11.542 0.035 11.82 -0.02 12.075 0.006 C 12.329 0.028 12.538 0.119 12.7 0.277 C 12.862 0.431 12.959 0.634 12.989 0.885 C 13.025 1.132 12.972 1.409 12.832 1.717 L 7.994 12.246 C 7.889 12.484 7.751 12.663 7.58 12.781 C 7.409 12.905 7.227 12.975 7.033 12.993 C 6.84 13.015 6.658 12.986 6.487 12.907 C 6.316 12.828 6.178 12.704 6.073 12.537 C 5.967 12.374 5.915 12.172 5.915 11.929 L 5.902 7.22 C 5.902 7.149 5.866 7.114 5.796 7.114 L 1.084 7.101 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 21.507,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.370,
    height: 12.305,
    viewBox: "0 0 19.370 12.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.939,
      top: 5.277,
      width: 19.37,
      height: 12.305,
      color: "var(--gray-black00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.37 1.121 C 19.37 1.121 19.37 0 18.327 0 L 16.885 0 C 16.041 0 16.041 1.121 16.041 1.121 L 16.041 11.182 C 16.041 11.182 16.041 12.303 16.885 12.303 L 18.327 12.303 C 19.37 12.303 19.37 11.182 19.37 11.182 L 19.37 1.121 Z M 11.702 2.591 L 12.945 2.591 C 13.521 2.591 13.988 3.104 13.988 3.738 L 13.988 11.155 C 13.988 11.789 13.521 12.303 12.945 12.303 L 11.702 12.303 C 11.127 12.303 10.66 11.789 10.66 11.155 L 10.66 3.738 C 10.66 3.104 11.127 2.591 11.702 2.591 Z M 7.668 5.18 L 6.425 5.18 C 5.849 5.18 5.382 5.701 5.382 6.342 L 5.382 11.141 C 5.382 11.782 5.849 12.303 6.425 12.303 L 7.668 12.303 C 8.244 12.303 8.71 11.782 8.71 11.141 L 8.71 6.342 C 8.71 5.701 8.244 5.18 7.668 5.18 Z M 2.286 7.571 L 0.914 7.574 C 0.264 7.581 0 8.084 0 8.716 L 0 11.157 C 0 11.976 0.38 12.305 0.914 12.305 L 2.286 12.303 C 3.009 12.303 3.328 11.976 3.328 11.157 L 3.328 8.716 C 3.328 7.976 3.009 7.571 2.286 7.571 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31,
      top: 1.754,
      width: 54.5,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 19,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 590,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.500px",
      color: "var(--gray-black00)"
    }
  }, "5G"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26,
      top: -2,
      width: 27.336,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 27.336,
    height: 13.700,
    viewBox: "0 0 27.336 13.700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4.75,
      width: 27.336,
      height: 13.7,
      color: "var(--gray-black00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.4 C 0 4.16 0 3.04 0.436 2.184 C 0.819 1.431 1.431 0.819 2.184 0.436 C 3.04 0 4.16 0 6.4 0 L 18.307 0 C 20.029 0 20.889 0 21.59 0.21 C 23.203 0.692 24.465 1.954 24.948 3.567 C 25.157 4.268 25.157 5.129 25.157 6.85 C 25.157 8.571 25.157 9.432 24.948 10.133 C 24.465 11.746 23.203 13.008 21.59 13.49 C 20.889 13.7 20.029 13.7 18.307 13.7 L 6.4 13.7 C 4.16 13.7 3.04 13.7 2.184 13.264 C 1.431 12.881 0.819 12.269 0.436 11.516 C 0 10.66 0 9.54 0 7.3 L 0 6.4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 26 4.965 L 26 8.865 C 26.81 8.535 27.336 7.766 27.336 6.915 C 27.336 6.064 26.81 5.295 26 4.965 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 20,
      height: 19,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.500px",
      color: "var(--gray-whiteff)"
    }
  }, "85"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--gray-gray1-fb)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Head, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    prop: "common"
  }))));
}

// Globals for scripts loaded after this file.
window.ResourceIconBlank = ResourceIconBlank;
window.BadgeBadge3 = BadgeBadge3;
window.ControlSegmentedBoxDynamic = ControlSegmentedBoxDynamic;
window.IconSearch = IconSearch;
window.Head = Head;
window.Icon = Icon;
window.IconLayer = IconLayer;
window.IconLocation = IconLocation;
window.IconStar2 = IconStar2;
window.IconTrafficCone = IconTrafficCone;
window.IconXmark = IconXmark;
window.ModalBottomHead = ModalBottomHead;
window.PinLabel = PinLabel;
window.Screen = Screen;
window.Screen2 = Screen2;
window.Screen3 = Screen3;
window.Screen4 = Screen4;