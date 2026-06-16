// Components bundle — 4 component(s) materialized from a .fig as one
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

// figma node: 836:28442 search-업체
function Search(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 1904,
      overflow: "hidden",
      backgroundColor: "var(--gray-white-ff)",
      position: "relative",
      color: "var(--colwhite-2)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 197,
      width: 393,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
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
      top: 123,
      width: 393,
      height: 54,
      backgroundColor: "var(--background-neutral-neutral0)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 0px 12px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 42,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "12px 0px 12px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC2DC\uB9C8\uB178"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--gray-gray3-f3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 42,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "12px 0px 12px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC2DC\uB9C8\uB178"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "rgb(26,26,26)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 42,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "12px 0px 12px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "전체"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--gray-gray3-f3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 42,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "12px 0px 12px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "전체"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--gray-gray3-f3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 59,
      width: 393,
      height: 64,
      backgroundColor: "var(--gray-white-ff)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 8px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--gray-gray3-f3)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 14px 16px 16px",
      justifyContent: "space-between",
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
      gap: 10,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 17,
      lineHeight: "100%",
      letterSpacing: "-0.030em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uAD11\uC5B4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      borderRadius: "50%",
      backgroundColor: "var(--text-gray-2-aa)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.273,
      top: 3.273,
      width: 11.455,
      height: 11.455,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.727,
    height: 5.727,
    viewBox: "0 0 5.727 5.727",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.864,
      top: 2.864,
      width: 5.727,
      height: 5.727
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 5.197 6.258 C 5.49 6.55 5.965 6.55 6.258 6.258 C 6.55 5.965 6.55 5.49 6.258 5.197 L 5.727 5.727 L 5.197 6.258 Z M 6.258 0.53 C 6.55 0.237 6.55 -0.237 6.258 -0.53 C 5.965 -0.823 5.49 -0.823 5.197 -0.53 L 5.727 0 L 6.258 0.53 Z M -0.53 5.197 C -0.823 5.49 -0.823 5.965 -0.53 6.258 C -0.237 6.55 0.237 6.55 0.53 6.258 L 0 5.727 L -0.53 5.197 Z M 0 0 L -0.53 0.53 L 5.197 6.258 L 5.727 5.727 L 6.258 5.197 L 0.53 -0.53 L 0 0 Z M 5.727 0 L 5.197 -0.53 L -0.53 5.197 L 0 5.727 L 0.53 6.258 L 6.258 0.53 L 5.727 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(25,25,25)"
    },
    variant: "search",
    fill: false
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      backgroundColor: "var(--gray-white-ff)",
      display: "flex",
      flexDirection: "row",
      gap: 150.55224609375,
      padding: "17.500px 27px 19.500px 15.500px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
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
  }, "85"))))));
}

// Globals for scripts loaded after this file.
window.ResourceIconBlank = ResourceIconBlank;
window.BadgeBadge3 = BadgeBadge3;
window.IconSearch = IconSearch;
window.Search = Search;
;try{window.AFSearch=window.Search;}catch(e){}
