// Components bundle — 15 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

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

// figma node: 1004:15610 Icon/Water (2 variants)
const __venc_IconWater = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconWater = p => "variant=" + __venc_IconWater(p.variant) + '|' + "fill=" + __venc_IconWater(p.fill);
function IconWater(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "water",
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
    width: 14,
    height: 18,
    viewBox: "0 0 14 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 3,
      width: 14,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 11.462 C 12 10.951 11.725 10.097 11.168 8.984 C 10.632 7.914 9.908 6.741 9.17 5.642 C 8.434 4.546 7.696 3.54 7.141 2.809 C 7.093 2.745 7.045 2.685 7 2.626 C 6.955 2.685 6.907 2.745 6.859 2.809 C 6.304 3.54 5.566 4.546 4.83 5.642 C 4.092 6.741 3.368 7.914 2.832 8.984 C 2.275 10.097 2 10.951 2 11.462 C 2 13.894 4.162 16 7 16 C 9.838 16 12 13.894 12 11.462 Z M 14 11.462 C 14 15.147 10.789 18 7 18 C 3.211 18 0 15.147 0 11.462 C 0 10.444 0.475 9.224 1.043 8.089 C 1.632 6.911 2.409 5.66 3.17 4.526 C 3.934 3.389 4.696 2.352 5.266 1.601 C 5.551 1.224 5.789 0.918 5.956 0.705 C 6.04 0.599 6.106 0.516 6.151 0.459 C 6.174 0.431 6.192 0.409 6.204 0.395 C 6.21 0.387 6.215 0.381 6.218 0.377 C 6.219 0.375 6.221 0.373 6.222 0.372 L 6.223 0.371 L 6.223 0.37 L 6.299 0.287 C 6.485 0.104 6.736 0 7 0 C 7.302 0 7.587 0.136 7.777 0.37 L 7.777 0.371 L 7.778 0.372 C 7.779 0.373 7.781 0.375 7.782 0.377 C 7.785 0.381 7.79 0.387 7.796 0.395 C 7.808 0.409 7.826 0.431 7.849 0.459 C 7.894 0.516 7.96 0.599 8.044 0.705 C 8.211 0.918 8.449 1.224 8.734 1.601 C 9.304 2.352 10.066 3.389 10.83 4.526 C 11.591 5.66 12.368 6.911 12.957 8.089 C 13.525 9.224 14 10.444 14 11.462 Z",
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
    width: 14,
    height: 18,
    viewBox: "0 0 14 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 3,
      width: 14,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 11.462 C 12 10.951 11.725 10.097 11.168 8.984 C 10.632 7.914 9.908 6.741 9.17 5.642 C 8.434 4.546 7.696 3.54 7.141 2.809 C 7.093 2.745 7.045 2.685 7 2.626 C 6.955 2.685 6.907 2.745 6.859 2.809 C 6.304 3.54 5.566 4.546 4.83 5.642 C 4.092 6.741 3.368 7.914 2.832 8.984 C 2.275 10.097 2 10.951 2 11.462 C 2 13.894 4.162 16 7 16 C 9.838 16 12 13.894 12 11.462 Z M 14 11.462 C 14 15.147 10.789 18 7 18 C 3.211 18 0 15.147 0 11.462 C 0 10.444 0.475 9.224 1.043 8.089 C 1.632 6.911 2.409 5.66 3.17 4.526 C 3.934 3.389 4.696 2.352 5.266 1.601 C 5.551 1.224 5.789 0.918 5.956 0.705 C 6.04 0.599 6.106 0.516 6.151 0.459 C 6.174 0.431 6.192 0.409 6.204 0.395 C 6.21 0.387 6.215 0.381 6.218 0.377 C 6.219 0.375 6.222 0.372 6.222 0.372 L 6.223 0.371 L 6.299 0.287 C 6.485 0.104 6.736 0 7 0 C 7.302 0 7.587 0.136 7.777 0.37 L 7.778 0.372 C 7.778 0.372 7.781 0.375 7.782 0.377 C 7.785 0.381 7.79 0.387 7.796 0.395 C 7.808 0.409 7.826 0.431 7.849 0.459 C 7.894 0.516 7.96 0.599 8.044 0.705 C 8.211 0.918 8.449 1.224 8.734 1.601 C 9.304 2.352 10.066 3.389 10.83 4.526 C 11.591 5.66 12.368 6.911 12.957 8.089 C 13.525 9.224 14 10.444 14 11.462 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12 11.462 C 12 10.951 11.725 10.097 11.168 8.984 C 10.632 7.914 9.908 6.741 9.17 5.642 C 8.434 4.546 7.696 3.54 7.141 2.809 C 7.093 2.745 7.045 2.685 7 2.626 C 6.955 2.685 6.907 2.745 6.859 2.809 C 6.304 3.54 5.566 4.546 4.83 5.642 C 4.092 6.741 3.368 7.914 2.832 8.984 C 2.275 10.097 2 10.951 2 11.462 C 2 13.894 4.162 16 7 16 C 9.838 16 12 13.894 12 11.462 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Variant=Water, Fill=False
    "variant=water|fill=false": __body0,
    // figma: Variant=WaterFill, Fill=True
    "variant=waterfill|fill=true": __body1
  };
  return (__impls[__vkey_IconWater(props)] ?? __body0)();
}

// figma node: 190:11502 Icon/Weather (22 variants)
const __venc_IconWeather = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconWeather = p => "variant=" + __venc_IconWeather(p.variant);
function IconWeather(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "a-little-cloud"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--weather-sunny)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.500,
    height: 21.500,
    viewBox: "0 0 21.500 21.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.25,
      top: 1.25,
      width: 21.5,
      height: 21.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.75 18 C 11.164 18 11.5 18.336 11.5 18.75 L 11.5 20.75 C 11.5 21.164 11.164 21.5 10.75 21.5 C 10.336 21.5 10 21.164 10 20.75 L 10 18.75 C 10 18.336 10.336 18 10.75 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.86 16.58 C 4.153 16.287 4.629 16.287 4.922 16.58 C 5.214 16.873 5.214 17.348 4.922 17.641 L 4.211 18.352 C 4.064 18.497 3.873 18.57 3.681 18.57 C 3.489 18.57 3.297 18.497 3.15 18.352 C 2.857 18.059 2.857 17.583 3.15 17.29 L 3.86 16.58 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.58 16.58 C 16.873 16.287 17.348 16.287 17.641 16.58 L 18.351 17.29 C 18.644 17.583 18.644 18.059 18.351 18.352 C 18.204 18.497 18.012 18.57 17.82 18.57 C 17.628 18.57 17.437 18.497 17.29 18.352 L 16.58 17.641 C 16.287 17.348 16.287 16.873 16.58 16.58 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.685 6.685 C 8.925 4.443 12.572 4.442 14.816 6.685 C 17.058 8.926 17.058 12.574 14.816 14.815 C 13.695 15.936 12.222 16.498 10.751 16.498 C 9.278 16.498 7.805 15.936 6.685 14.815 C 4.443 12.574 4.443 8.926 6.685 6.685 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.75 10 C 3.164 10 3.5 10.336 3.5 10.75 C 3.5 11.164 3.164 11.5 2.75 11.5 L 0.75 11.5 C 0.336 11.5 0 11.164 0 10.75 C 0 10.336 0.336 10 0.75 10 L 2.75 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 20.75 10 C 21.164 10 21.5 10.336 21.5 10.75 C 21.5 11.164 21.164 11.5 20.75 11.5 L 18.75 11.5 C 18.336 11.5 18 11.164 18 10.75 C 18 10.336 18.336 10 18.75 10 L 20.75 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.15 3.148 C 3.443 2.857 3.918 2.857 4.211 3.148 L 4.922 3.859 C 5.214 4.152 5.214 4.627 4.922 4.92 C 4.775 5.066 4.584 5.14 4.391 5.14 C 4.199 5.14 4.006 5.066 3.86 4.92 L 3.15 4.21 C 2.857 3.917 2.857 3.441 3.15 3.148 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.29 3.149 C 17.583 2.856 18.058 2.856 18.351 3.149 C 18.644 3.442 18.644 3.917 18.351 4.21 L 17.641 4.92 C 17.495 5.067 17.302 5.14 17.11 5.14 C 16.918 5.14 16.726 5.067 16.58 4.92 C 16.287 4.627 16.287 4.152 16.58 3.859 L 17.29 3.149 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.75 0 C 11.164 0 11.5 0.336 11.5 0.75 L 11.5 2.75 C 11.5 3.164 11.164 3.5 10.75 3.5 C 10.336 3.5 10 3.164 10 2.75 L 10 0.75 C 10 0.336 10.336 0 10.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 19.568,
      height: 20.6,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.250,
    height: 13.649,
    viewBox: "0 0 18.250 13.649",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18.25,
      height: 13.649,
      color: "var(--weather-sunny)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.233 11.904 C 1.613 11.75 2.053 11.933 2.21 12.318 C 2.365 12.702 2.179 13.14 1.795 13.296 L 1.054 13.595 C 0.962 13.633 0.867 13.649 0.773 13.649 C 0.477 13.649 0.196 13.472 0.078 13.181 C -0.078 12.798 0.108 12.359 0.491 12.204 L 1.233 11.904 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.019 4.605 C 8.96 3.868 11.047 4.213 12.607 5.533 C 13.954 6.675 14.594 8.347 14.281 9.898 C 14.197 10.306 5.357 13.714 5.228 13.627 C 4.007 12.799 3.334 10.984 3.551 9.11 C 3.797 6.995 5.061 5.352 7.019 4.605 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.894 6.937 L 1.68 7.09 C 2.086 7.169 2.351 7.564 2.273 7.97 C 2.202 8.328 1.889 8.576 1.537 8.576 C 1.49 8.576 1.442 8.571 1.393 8.563 L 0.607 8.409 C 0.201 8.33 -0.065 7.936 0.014 7.529 C 0.094 7.122 0.487 6.867 0.894 6.937 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.25 6.534 C 17.641 6.396 18.069 6.6 18.207 6.991 C 18.345 7.382 18.141 7.81 17.75 7.948 L 16.996 8.216 C 16.913 8.245 16.829 8.259 16.746 8.259 C 16.437 8.259 16.147 8.066 16.039 7.759 C 15.901 7.368 16.105 6.939 16.496 6.802 L 17.25 6.534 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.869 2.563 C 14.158 2.269 14.634 2.263 14.931 2.556 C 15.225 2.846 15.229 3.322 14.938 3.617 L 14.377 4.186 C 14.23 4.334 14.038 4.41 13.844 4.41 C 13.653 4.41 13.464 4.337 13.317 4.193 C 13.022 3.903 13.018 3.428 13.309 3.133 L 13.869 2.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.567 2.556 C 2.863 2.263 3.337 2.269 3.627 2.563 L 4.188 3.133 C 4.479 3.428 4.475 3.903 4.18 4.193 C 4.034 4.338 3.844 4.409 3.654 4.409 C 3.46 4.409 3.266 4.334 3.119 4.186 L 2.559 3.616 C 2.268 3.321 2.272 2.846 2.567 2.556 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.743 0 C 9.157 0 9.493 0.336 9.493 0.75 L 9.493 1.55 C 9.493 1.964 9.157 2.3 8.743 2.3 C 8.329 2.3 7.993 1.964 7.993 1.55 L 7.993 0.75 C 7.993 0.336 8.329 0 8.743 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.499,
    height: 11.600,
    viewBox: "0 0 17.499 11.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.069,
      top: 9,
      width: 17.499,
      height: 11.6,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.84 11.6 L 4.098 11.6 C 1.838 11.6 0 9.758 0 7.494 C 0 5.229 1.838 3.387 4.098 3.387 C 4.407 3.387 4.706 3.418 4.99 3.481 C 5.684 1.446 7.633 0 9.84 0 C 12.396 0 14.56 1.934 14.918 4.419 C 16.425 4.884 17.499 6.3 17.499 7.934 C 17.499 9.955 15.858 11.6 13.84 11.6",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--weather-cloud)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.500,
    height: 14.289,
    viewBox: "0 0 19.500 14.289",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 4.856,
      width: 19.5,
      height: 14.289
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.96 14.289 L 4.539 14.289 C 2.036 14.289 0 12.253 0 9.75 C 0 7.488 1.662 5.607 3.829 5.266 C 4.175 2.305 6.698 0 9.75 0 C 12.802 0 15.325 2.306 15.671 5.267 C 17.838 5.608 19.5 7.488 19.5 9.75 C 19.5 12.253 17.463 14.289 14.96 14.289",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.25,
      top: 2.75,
      width: 19.5,
      height: 18.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.5,
      height: 12.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.49959945678711,
      height: 12.5,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.500,
    height: 12.500,
    viewBox: "0 0 19.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.5,
      height: 12.5,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.983 12.5 L 4.023 12.5 C 1.804 12.5 0 10.739 0 8.574 C 0 6.802 1.209 5.271 2.897 4.793 C 3.276 2.101 5.68 0 8.523 0 C 10.989 0 13.166 1.587 13.911 3.809 C 14.252 3.729 14.61 3.689 14.983 3.689 C 17.473 3.689 19.5 5.666 19.5 8.094 C 19.5 10.523 17.473 12.5 14.983 12.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 14.000,
    height: 4.500,
    viewBox: "0 0 14.000 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.75,
      top: 14,
      width: 14,
      height: 4.5,
      color: "var(--weather-rain)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 3.5 C 0.636 3.5 0.522 3.475 0.414 3.421 C 0.043 3.235 -0.106 2.785 0.079 2.415 L 1.079 0.415 C 1.265 0.044 1.715 -0.105 2.085 0.079 C 2.456 0.265 2.605 0.715 2.42 1.085 L 1.42 3.085 C 1.289 3.349 1.024 3.5 0.749 3.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.749 3.5 C 8.637 3.5 8.522 3.475 8.415 3.421 C 8.044 3.235 7.894 2.785 8.079 2.415 L 9.079 0.415 C 9.266 0.044 9.714 -0.105 10.085 0.079 C 10.456 0.265 10.606 0.715 10.421 1.085 L 9.421 3.085 C 9.289 3.349 9.024 3.5 8.749 3.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.749 4.5 C 4.636 4.5 4.522 4.475 4.414 4.421 C 4.043 4.235 3.894 3.785 4.079 3.415 L 5.079 1.415 C 5.264 1.044 5.715 0.895 6.085 1.079 C 6.456 1.265 6.605 1.715 6.42 2.085 L 5.42 4.085 C 5.289 4.349 5.024 4.5 4.749 4.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.749 3.5 C 12.637 3.5 12.522 3.475 12.415 3.421 C 12.044 3.235 11.894 2.785 12.079 2.415 L 12.579 1.415 C 12.766 1.044 13.215 0.894 13.585 1.079 C 13.956 1.265 14.106 1.715 13.921 2.085 L 13.421 3.085 C 13.289 3.349 13.024 3.5 12.749 3.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.763,
      top: 1.75,
      width: 18.475,
      height: 20.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.000,
    height: 4.500,
    viewBox: "0 0 14.000 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.274,
      top: 16,
      width: 14,
      height: 4.5,
      color: "var(--weather-rain)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 3.5 C 0.637 3.5 0.522 3.475 0.415 3.421 C 0.044 3.235 -0.106 2.785 0.079 2.415 L 1.079 0.415 C 1.265 0.044 1.715 -0.105 2.085 0.079 C 2.456 0.265 2.606 0.715 2.421 1.085 L 1.421 3.085 C 1.289 3.349 1.024 3.5 0.749 3.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.749 3.5 C 8.637 3.5 8.522 3.475 8.415 3.421 C 8.044 3.235 7.894 2.785 8.079 2.415 L 9.079 0.415 C 9.265 0.044 9.715 -0.105 10.085 0.079 C 10.456 0.265 10.606 0.715 10.421 1.085 L 9.421 3.085 C 9.289 3.349 9.024 3.5 8.749 3.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.749 4.5 C 4.637 4.5 4.522 4.475 4.415 4.421 C 4.044 4.235 3.894 3.785 4.079 3.415 L 5.079 1.415 C 5.265 1.044 5.715 0.895 6.085 1.079 C 6.456 1.265 6.606 1.715 6.421 2.085 L 5.421 4.085 C 5.289 4.349 5.024 4.5 4.749 4.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.749 3.5 C 12.637 3.5 12.522 3.475 12.415 3.421 C 12.044 3.235 11.894 2.785 12.079 2.415 L 12.579 1.415 C 12.766 1.044 13.214 0.895 13.585 1.079 C 13.956 1.265 14.106 1.715 13.921 2.085 L 13.421 3.085 C 13.289 3.349 13.024 3.5 12.749 3.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.729,
    height: 9.029,
    viewBox: "0 0 10.729 9.029",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.746,
      top: 0,
      width: 10.729,
      height: 9.029,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.56 3.529 C 8.207 1.536 6.377 0 4.222 0 C 2.871 0 1.52 0.621 0.7 1.623 C 0.361 2.036 0.134 2.499 0 2.991 C 1.972 3.191 3.703 4.383 4.606 6.093 C 6.654 6.03 8.452 7.259 9.237 9.029 C 9.432 8.91 9.618 8.776 9.787 8.616 C 10.395 8.036 10.73 7.263 10.729 6.44 C 10.729 5.099 9.831 3.936 8.56 3.529",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.353,
    height: 10.865,
    viewBox: "0 0 16.353 10.865",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4,
      width: 16.353,
      height: 10.865,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.496 3.141 C 12.222 3.141 11.956 3.167 11.702 3.219 C 11.039 1.335 9.222 0 7.165 0 C 4.776 0 2.752 1.796 2.401 4.11 C 0.997 4.558 0 5.883 0 7.411 C -0.001 8.333 0.357 9.2 1.009 9.852 C 1.661 10.506 2.527 10.865 3.449 10.865 L 12.494 10.865 C 14.622 10.865 16.353 9.133 16.353 7.003 C 16.353 4.873 14.623 3.141 12.496 3.141",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.75,
      top: 2.05,
      width: 20.5,
      height: 19.9,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.500,
    height: 13.500,
    viewBox: "0 0 20.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20.5,
      height: 13.5,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.773 4.025 C 15.371 4.025 14.985 4.071 14.619 4.162 C 13.854 1.736 11.559 0 8.954 0 C 5.957 0 3.425 2.292 3.05 5.219 C 1.274 5.724 0 7.375 0 9.284 C -0.001 10.41 0.436 11.467 1.23 12.264 C 2.024 13.061 3.081 13.5 4.267 13.5 L 6.542 13.5 C 6.771 13.321 7.058 13.229 7.348 13.254 C 7.493 13.089 7.67 12.95 7.898 12.888 C 8.056 12.846 8.215 12.842 8.368 12.865 C 8.424 12.721 8.507 12.586 8.624 12.469 C 8.809 12.284 9.043 12.195 9.284 12.163 C 9.486 11.832 9.834 11.599 10.25 11.599 C 10.665 11.599 11.013 11.832 11.215 12.162 C 11.455 12.195 11.69 12.284 11.876 12.469 C 11.992 12.585 12.075 12.721 12.131 12.864 C 12.284 12.841 12.442 12.846 12.601 12.888 C 12.829 12.949 13.006 13.088 13.151 13.254 C 13.442 13.229 13.728 13.32 13.958 13.5 L 15.773 13.5 C 18.379 13.5 20.5 11.375 20.5 8.762 C 20.5 6.15 18.379 4.025 15.773 4.025",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.800,
    height: 7.551,
    viewBox: "0 0 6.800 7.551",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.85,
      top: 12.349,
      width: 6.8,
      height: 7.551,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.6 5.161 L 6.195 4.927 L 6.371 4.88 C 6.584 4.822 6.711 4.603 6.655 4.39 C 6.597 4.177 6.381 4.052 6.164 4.106 L 5.214 4.361 L 4.2 3.775 L 5.213 3.191 L 6.164 3.445 C 6.2 3.454 6.234 3.459 6.268 3.459 C 6.445 3.459 6.607 3.341 6.655 3.162 C 6.711 2.948 6.584 2.729 6.371 2.672 L 6.194 2.624 L 6.6 2.39 C 6.791 2.279 6.857 2.034 6.746 1.843 C 6.635 1.651 6.39 1.588 6.2 1.696 L 5.794 1.93 L 5.841 1.754 C 5.898 1.54 5.771 1.321 5.558 1.264 C 5.341 1.21 5.124 1.333 5.068 1.547 L 4.814 2.496 L 3.8 3.082 L 3.8 1.913 L 4.496 1.217 C 4.652 1.06 4.652 0.807 4.496 0.65 C 4.339 0.494 4.086 0.494 3.93 0.65 L 3.8 0.781 L 3.8 0.4 C 3.8 0.18 3.621 0 3.4 0 C 3.179 0 3 0.18 3 0.4 L 3 0.781 L 2.87 0.65 C 2.713 0.494 2.46 0.494 2.304 0.65 C 2.148 0.807 2.148 1.06 2.304 1.217 L 3 1.913 L 3 3.082 L 1.985 2.496 L 1.731 1.547 C 1.674 1.333 1.452 1.208 1.242 1.264 C 1.028 1.321 0.902 1.54 0.959 1.754 L 1.006 1.931 L 0.6 1.696 C 0.408 1.586 0.163 1.651 0.054 1.843 C -0.057 2.034 0.009 2.279 0.2 2.39 L 0.606 2.624 L 0.429 2.672 C 0.215 2.729 0.089 2.948 0.146 3.162 C 0.194 3.341 0.355 3.459 0.532 3.459 C 0.566 3.459 0.601 3.454 0.636 3.445 L 1.587 3.191 L 2.599 3.775 L 1.586 4.36 L 0.636 4.106 C 0.426 4.054 0.203 4.176 0.146 4.39 C 0.089 4.603 0.215 4.822 0.429 4.88 L 0.605 4.927 L 0.2 5.161 C 0.009 5.271 -0.057 5.516 0.054 5.708 C 0.127 5.836 0.262 5.908 0.4 5.908 C 0.468 5.908 0.537 5.89 0.6 5.854 L 1.006 5.62 L 0.959 5.797 C 0.902 6.011 1.028 6.229 1.242 6.287 C 1.276 6.296 1.311 6.301 1.345 6.301 C 1.522 6.301 1.683 6.182 1.731 6.004 L 1.986 5.054 L 3 4.468 L 3 5.639 L 2.304 6.335 C 2.148 6.491 2.148 6.745 2.304 6.901 C 2.46 7.057 2.713 7.057 2.87 6.901 L 3 6.771 L 3 7.15 C 3 7.371 3.179 7.551 3.4 7.551 C 3.621 7.551 3.8 7.371 3.8 7.15 L 3.8 6.771 L 3.93 6.901 C 4.008 6.979 4.11 7.018 4.213 7.018 C 4.315 7.018 4.417 6.979 4.496 6.901 C 4.652 6.745 4.652 6.491 4.496 6.335 L 3.8 5.639 L 3.8 4.468 L 4.814 5.054 L 5.068 6.004 C 5.116 6.182 5.278 6.301 5.454 6.301 C 5.489 6.301 5.523 6.296 5.558 6.287 C 5.771 6.229 5.898 6.011 5.841 5.797 L 5.794 5.62 L 6.2 5.854 C 6.263 5.89 6.331 5.908 6.4 5.908 C 6.538 5.908 6.672 5.836 6.746 5.708 C 6.857 5.516 6.791 5.271 6.6 5.161",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.516,
      top: 2.444,
      width: 18.967,
      height: 19.113,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.967,
    height: 12.500,
    viewBox: "0 0 18.967 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18.967,
      height: 12.5,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.562 12.5 L 3.925 12.5 C 2.877 12.5 1.891 12.092 1.15 11.35 C 0.408 10.608 -0.001 9.622 0 8.574 C 0 6.809 1.172 5.281 2.811 4.798 C 3.178 2.104 5.522 0 8.292 0 C 10.694 0 12.812 1.584 13.541 3.803 C 13.866 3.728 14.207 3.689 14.562 3.689 C 16.991 3.689 18.967 5.666 18.967 8.094 C 18.967 10.523 16.991 12.5 14.562 12.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.267,
    height: 4.500,
    viewBox: "0 0 8.267 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.234,
      top: 14,
      width: 8.267,
      height: 4.5,
      color: "var(--weather-rain)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.016 4.5 C 5.904 4.5 5.789 4.475 5.682 4.421 C 5.311 4.235 5.161 3.785 5.346 3.415 L 6.846 0.415 C 7.032 0.044 7.483 -0.106 7.852 0.079 C 8.223 0.265 8.373 0.715 8.188 1.085 L 6.688 4.085 C 6.556 4.349 6.291 4.5 6.016 4.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 4.5 C 0.637 4.5 0.522 4.475 0.415 4.421 C 0.044 4.235 -0.106 3.785 0.079 3.415 L 1.579 0.415 C 1.765 0.044 2.215 -0.106 2.585 0.079 C 2.956 0.265 3.106 0.715 2.921 1.085 L 1.421 4.085 C 1.289 4.349 1.024 4.5 0.749 4.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.100,
    height: 5.663,
    viewBox: "0 0 5.100 5.663",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.184,
      top: 13.45,
      width: 5.1,
      height: 5.663,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.645 3.695 L 4.778 3.66 C 4.938 3.617 5.034 3.453 4.991 3.292 C 4.948 3.132 4.783 3.039 4.624 3.08 L 3.91 3.27 L 3.151 2.832 L 3.91 2.393 L 4.623 2.584 C 4.649 2.591 4.675 2.594 4.701 2.594 C 4.834 2.594 4.955 2.506 4.991 2.373 C 5.034 2.212 4.939 2.047 4.779 2.004 L 4.646 1.969 L 4.951 1.792 C 5.094 1.709 5.143 1.526 5.06 1.382 C 4.977 1.24 4.794 1.19 4.65 1.273 L 4.346 1.449 L 4.381 1.316 C 4.424 1.156 4.33 0.991 4.169 0.948 C 4.007 0.907 3.845 1 3.801 1.16 L 3.61 1.874 L 2.85 2.312 L 2.85 1.434 L 3.372 0.913 C 3.489 0.795 3.489 0.606 3.372 0.489 C 3.254 0.372 3.065 0.372 2.948 0.489 L 2.85 0.586 L 2.85 0.3 C 2.85 0.134 2.716 0 2.55 0 C 2.384 0 2.251 0.134 2.251 0.3 L 2.251 0.587 L 2.152 0.489 C 2.035 0.372 1.845 0.372 1.728 0.489 C 1.611 0.606 1.611 0.796 1.728 0.913 L 2.251 1.434 L 2.251 2.312 L 1.49 1.873 L 1.299 1.161 C 1.256 1 1.092 0.907 0.932 0.948 C 0.772 0.991 0.676 1.155 0.719 1.315 L 0.755 1.449 L 0.451 1.273 C 0.306 1.191 0.124 1.24 0.041 1.382 C -0.042 1.526 0.006 1.709 0.15 1.792 L 0.455 1.969 L 0.321 2.004 C 0.161 2.047 0.066 2.212 0.109 2.373 C 0.145 2.506 0.266 2.594 0.399 2.594 C 0.424 2.594 0.451 2.591 0.477 2.584 L 1.19 2.393 L 1.95 2.832 L 1.191 3.271 L 0.476 3.08 C 0.32 3.039 0.152 3.132 0.109 3.292 C 0.066 3.453 0.162 3.617 0.322 3.66 L 0.455 3.695 L 0.15 3.872 C 0.006 3.955 -0.042 4.138 0.041 4.282 C 0.096 4.377 0.197 4.431 0.3 4.431 C 0.351 4.431 0.403 4.418 0.451 4.391 L 0.755 4.215 L 0.719 4.349 C 0.676 4.509 0.772 4.673 0.932 4.716 C 0.958 4.723 0.984 4.726 1.009 4.726 C 1.142 4.726 1.263 4.638 1.299 4.503 L 1.489 3.791 L 2.251 3.352 L 2.251 4.23 L 1.728 4.751 C 1.611 4.868 1.611 5.058 1.728 5.175 C 1.845 5.292 2.035 5.292 2.152 5.175 L 2.251 5.077 L 2.251 5.363 C 2.251 5.529 2.384 5.663 2.55 5.663 C 2.716 5.663 2.85 5.529 2.85 5.363 L 2.85 5.078 L 2.948 5.175 C 3.006 5.234 3.083 5.263 3.16 5.263 C 3.237 5.263 3.313 5.234 3.372 5.175 C 3.489 5.058 3.489 4.869 3.372 4.751 L 2.85 4.23 L 2.85 3.352 L 3.61 3.791 L 3.801 4.504 C 3.837 4.638 3.959 4.726 4.091 4.726 C 4.117 4.726 4.143 4.723 4.169 4.716 C 4.329 4.673 4.424 4.508 4.381 4.348 L 4.346 4.215 L 4.65 4.391 C 4.698 4.418 4.75 4.431 4.8 4.431 C 4.904 4.431 5.004 4.377 5.06 4.282 C 5.143 4.138 5.094 3.955 4.951 3.872 L 4.645 3.695 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.75,
      top: 2.125,
      width: 20.5,
      height: 19.751,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.497,
    height: 7.725,
    viewBox: "0 0 6.497 7.725",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.501,
      top: 12.026,
      width: 6.497,
      height: 7.725,
      color: "var(--weather-rain)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.249 7.725 C 2.014 7.725 0.902 7.038 0.348 5.932 C -0.207 4.826 -0.091 3.522 0.65 2.53 L 2.148 0.526 C 2.674 -0.175 3.824 -0.175 4.35 0.526 L 5.848 2.53 C 6.589 3.522 6.705 4.826 6.15 5.933 C 5.597 7.038 4.484 7.725 3.249 7.725",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.500,
    height: 13.500,
    viewBox: "0 0 20.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20.5,
      height: 13.5,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.773 4.025 C 15.371 4.025 14.985 4.071 14.619 4.162 C 13.854 1.736 11.559 0 8.954 0 C 5.957 0 3.425 2.292 3.049 5.22 C 1.274 5.725 0 7.375 0 9.285 C -0.001 10.41 0.436 11.468 1.23 12.264 C 2.024 13.061 3.081 13.5 4.267 13.5 L 6.666 13.5 L 8.69 11.201 C 9.22 10.6 10.28 10.6 10.81 11.201 L 12.833 13.5 L 15.773 13.5 C 18.379 13.5 20.5 11.375 20.5 8.762 C 20.5 6.15 18.379 4.025 15.773 4.025",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--weather-snow)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.499,
    height: 19.500,
    viewBox: "0 0 17.499 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.25,
      top: 2.25,
      width: 17.499,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.125 13.721 L 15.378 12.712 L 16.592 12.387 C 16.991 12.28 17.229 11.868 17.122 11.468 C 17.015 11.07 16.613 10.829 16.203 10.938 L 13.54 11.651 L 10.25 9.75 L 13.54 7.85 L 16.203 8.563 C 16.269 8.58 16.334 8.588 16.397 8.588 C 16.729 8.588 17.032 8.367 17.122 8.033 C 17.229 7.632 16.991 7.221 16.592 7.114 L 15.378 6.789 L 17.125 5.78 C 17.483 5.573 17.606 5.114 17.399 4.755 C 17.193 4.398 16.735 4.272 16.375 4.481 L 14.63 5.489 L 14.954 4.278 C 15.062 3.877 14.823 3.466 14.424 3.359 C 14.018 3.25 13.612 3.491 13.505 3.889 L 12.793 6.55 L 9.5 8.451 L 9.5 4.651 L 11.448 2.701 C 11.741 2.408 11.741 1.934 11.448 1.641 C 11.155 1.348 10.681 1.348 10.388 1.641 L 9.5 2.529 L 9.5 0.75 C 9.5 0.336 9.164 0 8.75 0 C 8.336 0 8 0.336 8 0.75 L 8 2.529 L 7.112 1.641 C 6.82 1.348 6.346 1.347 6.052 1.641 C 5.759 1.934 5.759 2.408 6.052 2.701 L 8 4.651 L 8 8.451 L 4.709 6.55 L 3.996 3.889 C 3.89 3.491 3.485 3.25 3.077 3.359 C 2.678 3.466 2.439 3.877 2.547 4.278 L 2.872 5.489 L 1.125 4.481 C 0.766 4.272 0.308 4.398 0.101 4.755 C -0.106 5.114 0.017 5.573 0.375 5.78 L 2.123 6.789 L 0.909 7.114 C 0.51 7.221 0.271 7.632 0.379 8.033 C 0.469 8.367 0.771 8.588 1.104 8.588 C 1.167 8.588 1.232 8.58 1.298 8.563 L 3.96 7.85 L 7.25 9.75 L 3.96 11.651 L 1.298 10.938 C 0.893 10.829 0.486 11.07 0.379 11.468 C 0.271 11.868 0.51 12.28 0.909 12.387 L 2.123 12.712 L 0.375 13.721 C 0.017 13.928 -0.106 14.387 0.101 14.745 C 0.239 14.986 0.491 15.12 0.751 15.12 C 0.878 15.12 1.007 15.088 1.125 15.02 L 2.872 14.011 L 2.547 15.223 C 2.439 15.623 2.678 16.034 3.077 16.142 C 3.143 16.159 3.208 16.167 3.271 16.167 C 3.604 16.167 3.906 15.947 3.996 15.612 L 4.709 12.95 L 8 11.049 L 8 14.85 L 6.052 16.799 C 5.759 17.092 5.759 17.567 6.052 17.86 C 6.345 18.153 6.819 18.153 7.112 17.86 L 8 16.971 L 8 18.75 C 8 19.164 8.336 19.5 8.75 19.5 C 9.164 19.5 9.5 19.164 9.5 18.75 L 9.5 16.971 L 10.388 17.86 C 10.534 18.006 10.726 18.079 10.918 18.079 C 11.109 18.079 11.302 18.006 11.448 17.86 C 11.741 17.567 11.741 17.092 11.448 16.799 L 9.5 14.85 L 9.5 11.049 L 12.793 12.951 L 13.505 15.612 C 13.595 15.947 13.897 16.167 14.229 16.167 C 14.293 16.167 14.358 16.159 14.424 16.142 C 14.823 16.034 15.062 15.623 14.954 15.223 L 14.63 14.012 L 16.375 15.02 C 16.493 15.088 16.622 15.12 16.749 15.12 C 17.009 15.12 17.261 14.986 17.399 14.745 C 17.606 14.387 17.483 13.928 17.125 13.721",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--weather-cloud)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.967,
    height: 19.500,
    viewBox: "0 0 18.967 19.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.516,
      top: 2.25,
      width: 18.967,
      height: 19.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.482 18 C 16.896 18 17.232 18.336 17.232 18.75 C 17.232 19.164 16.896 19.5 16.482 19.5 L 2.482 19.5 C 2.069 19.5 1.732 19.164 1.732 18.75 C 1.732 18.336 2.069 18 2.482 18 L 16.482 18 Z M 16.482 14.5 C 16.896 14.5 17.232 14.836 17.232 15.25 C 17.232 15.664 16.896 16 16.482 16 L 2.482 16 C 2.069 16 1.732 15.664 1.732 15.25 C 1.732 14.836 2.069 14.5 2.482 14.5 L 16.482 14.5 Z M 8.292 0 C 10.694 0 12.812 1.583 13.54 3.803 C 13.866 3.727 14.207 3.689 14.561 3.688 C 16.99 3.688 18.967 5.665 18.967 8.094 C 18.967 10.523 16.991 12.5 14.561 12.5 L 3.925 12.5 C 2.877 12.5 1.891 12.091 1.15 11.35 C 0.408 10.607 -0.001 9.621 0 8.573 C 0 6.808 1.172 5.28 2.811 4.797 C 3.178 2.103 5.522 0 8.292 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--weather-lightning)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 11.182,
    viewBox: "0 0 12 11.182",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 6.409,
      width: 12,
      height: 11.182
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.74 11.182 C 4.438 11.182 4.136 11.067 3.905 10.836 C 3.444 10.376 3.444 9.628 3.905 9.167 L 6.301 6.771 L 0 6.771 L 6.426 0.346 C 6.887 -0.115 7.634 -0.115 8.095 0.346 C 8.556 0.807 8.556 1.554 8.095 2.015 L 5.699 4.411 L 12 4.411 L 5.575 10.836 C 5.344 11.067 5.042 11.182 4.74 11.182",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--weather-cloud)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.25,
      top: 2,
      width: 19.5,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.414,
    height: 10.377,
    viewBox: "0 0 16.414 10.377",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.785,
      top: 0,
      width: 16.414,
      height: 10.377
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.676 8.727 C 1.921 7.331 3.74 6.45 5.737 6.45 C 8.298 6.45 10.667 7.936 11.779 10.153 C 11.917 10.144 12.057 10.139 12.197 10.139 C 12.762 10.139 13.307 10.223 13.822 10.377 C 14.404 10.23 14.944 9.95 15.383 9.532 C 16.049 8.897 16.415 8.052 16.414 7.151 C 16.414 5.666 15.405 4.379 13.985 3.949 C 13.62 1.724 11.586 0 9.188 0 C 7.12 0 5.291 1.284 4.618 3.098 C 4.358 3.045 4.086 3.019 3.804 3.019 C 2.576 3.019 1.472 3.495 0.775 4.323 C 0.41 4.758 0.023 5.451 0.001 6.481 C -0.013 7.112 0.169 7.728 0.452 8.292 C 0.519 8.424 0.594 8.57 0.676 8.727",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.500,
    height: 12.500,
    viewBox: "0 0 19.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 7.5,
      width: 19.5,
      height: 12.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.897 4.793 C 1.209 5.271 0 6.802 0 8.574 L 0 8.574 C 0 10.739 1.804 12.5 4.023 12.5 L 4.023 12.5 L 14.983 12.5 C 17.473 12.5 19.5 10.523 19.5 8.094 L 19.5 8.094 C 19.5 5.665 17.473 3.689 14.983 3.689 L 14.983 3.689 C 14.61 3.689 14.252 3.729 13.911 3.809 L 13.911 3.809 C 13.166 1.586 10.989 0 8.523 0 L 8.523 0 C 5.68 0 3.276 2.101 2.897 4.793 L 2.897 4.793 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.75,
      top: 2.863,
      width: 20.5,
      height: 18.273,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.500,
    height: 13.500,
    viewBox: "0 0 20.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20.5,
      height: 13.5,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.772 4.025 C 15.371 4.025 14.985 4.071 14.619 4.162 C 13.854 1.736 11.559 0 8.954 0 C 5.957 0 3.424 2.291 3.049 5.22 C 1.274 5.724 0 7.375 0 9.284 C -0.001 10.409 0.436 11.468 1.23 12.264 C 2.024 13.062 3.081 13.5 4.266 13.5 L 7.176 13.5 L 9.361 11.315 C 9.98 10.696 10.987 10.696 11.606 11.314 C 12.182 11.891 12.222 12.801 11.731 13.422 L 11.673 13.497 L 15.344 13.497 L 15.341 13.5 L 15.772 13.5 C 18.378 13.5 20.5 11.374 20.5 8.762 C 20.5 6.15 18.378 4.025 15.772 4.025",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 6.523,
    viewBox: "0 0 7 6.523",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.249,
      top: 11.75,
      width: 7,
      height: 6.523,
      color: "var(--weather-lightning)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.278 6.321 C 2.009 6.052 2.009 5.616 2.278 5.347 L 3.676 3.95 L 0 3.95 L 3.748 0.201 C 4.017 -0.067 4.453 -0.067 4.722 0.201 C 4.991 0.47 4.991 0.906 4.722 1.175 L 3.324 2.573 L 7 2.573 L 3.252 6.321 C 3.117 6.455 2.941 6.523 2.765 6.523 C 2.589 6.523 2.412 6.455 2.278 6.321",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.712,
      top: 1.7,
      width: 18.575,
      height: 20.599,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.510,
    height: 1.510,
    viewBox: "0 0 1.510 1.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.775,
      top: 16.08,
      width: 1.51,
      height: 1.51,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.755 1.51 C 0.341 1.51 0 1.169 0 0.755 C 0 0.341 0.341 0 0.755 0 C 1.169 0 1.51 0.341 1.51 0.755 C 1.51 1.169 1.169 1.51 0.755 1.51",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.510,
    height: 1.510,
    viewBox: "0 0 1.510 1.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.775,
      top: 16.084,
      width: 1.51,
      height: 1.51,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.755 1.51 C 0.341 1.51 0 1.169 0 0.755 C 0 0.341 0.341 0 0.755 0 C 1.169 0 1.51 0.341 1.51 0.755 C 1.51 1.169 1.169 1.51 0.755 1.51",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.510,
    height: 1.510,
    viewBox: "0 0 1.510 1.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.775,
      top: 16.08,
      width: 1.51,
      height: 1.51,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.755 1.51 C 0.341 1.51 0 1.169 0 0.755 C 0 0.341 0.341 0 0.755 0 C 1.169 0 1.51 0.341 1.51 0.755 C 1.51 1.169 1.169 1.51 0.755 1.51",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.510,
    height: 1.510,
    viewBox: "0 0 1.510 1.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.775,
      top: 19.089,
      width: 1.51,
      height: 1.51,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.755 1.51 C 0.341 1.51 0 1.169 0 0.755 C 0 0.341 0.341 0 0.755 0 C 1.169 0 1.51 0.341 1.51 0.755 C 1.51 1.169 1.169 1.51 0.755 1.51",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.510,
    height: 1.510,
    viewBox: "0 0 1.510 1.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.77,
      top: 19.084,
      width: 1.51,
      height: 1.51,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.755 1.51 C 0.341 1.51 0 1.169 0 0.755 C 0 0.341 0.341 0 0.755 0 C 1.169 0 1.51 0.341 1.51 0.755 C 1.51 1.169 1.169 1.51 0.755 1.51",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.732,
    height: 9.068,
    viewBox: "0 0 10.732 9.068",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.843,
      top: 0,
      width: 10.732,
      height: 9.068,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.563 3.529 C 8.21 1.536 6.38 0 4.225 0 C 2.874 0 1.523 0.621 0.703 1.623 C 0.362 2.038 0.135 2.503 0 2.998 C 1.932 3.227 3.62 4.411 4.508 6.093 C 6.589 6.03 8.394 7.276 9.163 9.068 C 9.387 8.94 9.6 8.796 9.79 8.616 C 10.398 8.036 10.733 7.263 10.732 6.44 C 10.732 5.099 9.834 3.937 8.563 3.529",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.354,
    height: 10.865,
    viewBox: "0 0 16.354 10.865",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4,
      width: 16.354,
      height: 10.865,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.495 10.865 L 3.45 10.865 C 2.528 10.865 1.661 10.506 1.01 9.853 C 0.357 9.2 -0.001 8.333 0 7.41 C 0 5.883 0.998 4.557 2.402 4.11 C 2.753 1.796 4.776 0 7.165 0 C 9.222 0 11.039 1.334 11.702 3.219 C 11.956 3.167 12.222 3.141 12.496 3.141 C 14.624 3.141 16.354 4.873 16.354 7.003 C 16.354 9.133 14.623 10.865 12.495 10.865",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.712,
      top: 1.703,
      width: 18.575,
      height: 20.595,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.732,
    height: 9.070,
    viewBox: "0 0 10.732 9.070",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.843,
      top: 0,
      width: 10.732,
      height: 9.07,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.563 3.529 C 8.209 1.536 6.379 0 4.225 0 C 2.874 0 1.523 0.622 0.703 1.623 C 0.362 2.038 0.135 2.503 0 2.999 C 1.932 3.228 3.62 4.412 4.508 6.093 C 6.57 6.03 8.385 7.277 9.16 9.07 C 9.385 8.942 9.599 8.797 9.79 8.616 C 10.398 8.037 10.733 7.264 10.732 6.44 C 10.732 5.1 9.834 3.937 8.563 3.529",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.510,
    height: 1.510,
    viewBox: "0 0 1.510 1.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.775,
      top: 16.08,
      width: 1.51,
      height: 1.51,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.755 1.51 C 0.341 1.51 0 1.169 0 0.755 C 0 0.341 0.341 0 0.755 0 C 1.169 0 1.51 0.341 1.51 0.755 C 1.51 1.169 1.169 1.51 0.755 1.51",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.511,
    height: 1.510,
    viewBox: "0 0 1.511 1.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.474,
      top: 16.085,
      width: 1.511,
      height: 1.51,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.756 1.51 C 0.342 1.51 0 1.169 0 0.755 C 0 0.341 0.342 0 0.756 0 C 1.17 0 1.511 0.341 1.511 0.755 C 1.511 1.169 1.17 1.51 0.756 1.51",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.510,
    height: 1.510,
    viewBox: "0 0 1.510 1.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.67,
      top: 19.085,
      width: 1.51,
      height: 1.51,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.755 1.51 C 0.341 1.51 0 1.169 0 0.755 C 0 0.341 0.341 0 0.755 0 C 1.169 0 1.51 0.341 1.51 0.755 C 1.51 1.169 1.169 1.51 0.755 1.51",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.500,
    height: 3.500,
    viewBox: "0 0 2.500 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.575,
      top: 16,
      width: 2.5,
      height: 3.5,
      color: "var(--weather-rain)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 3.5 C 0.637 3.5 0.522 3.475 0.415 3.421 C 0.044 3.235 -0.106 2.785 0.079 2.415 L 1.079 0.415 C 1.265 0.044 1.715 -0.105 2.085 0.079 C 2.456 0.265 2.606 0.715 2.421 1.085 L 1.421 3.085 C 1.289 3.349 1.024 3.5 0.749 3.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.500,
    height: 3.500,
    viewBox: "0 0 2.500 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.575,
      top: 17,
      width: 2.5,
      height: 3.5,
      color: "var(--weather-rain)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 3.5 C 0.637 3.5 0.522 3.475 0.415 3.421 C 0.044 3.235 -0.106 2.785 0.079 2.415 L 1.079 0.415 C 1.265 0.044 1.715 -0.105 2.085 0.079 C 2.456 0.265 2.606 0.715 2.421 1.085 L 1.421 3.085 C 1.289 3.349 1.024 3.5 0.749 3.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.354,
    height: 10.865,
    viewBox: "0 0 16.354 10.865",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4,
      width: 16.354,
      height: 10.865,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.495 10.865 L 3.45 10.865 C 2.528 10.865 1.661 10.506 1.01 9.853 C 0.357 9.2 -0.001 8.333 0 7.41 C 0 5.883 0.997 4.557 2.401 4.11 C 2.753 1.796 4.777 0 7.165 0 C 9.222 0 11.039 1.334 11.702 3.219 C 11.956 3.167 12.222 3.141 12.496 3.141 C 14.624 3.141 16.354 4.873 16.354 7.003 C 16.354 9.133 14.623 10.865 12.495 10.865",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.981,
      top: 2.45,
      width: 20.037,
      height: 19.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.674,
    height: 9.471,
    viewBox: "0 0 10.674 9.471",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.363,
      top: 0,
      width: 10.674,
      height: 9.471,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.952 3.702 C 3.011 4.439 3.759 5.496 4.113 6.677 C 5.676 7.095 7.005 8.115 7.833 9.471 C 8.548 9.398 9.214 9.11 9.731 8.617 C 10.34 8.037 10.675 7.264 10.674 6.44 C 10.674 5.1 9.776 3.937 8.506 3.53 C 8.151 1.536 6.321 0 4.167 0 C 2.815 0 1.465 0.622 0.644 1.623 C 0.343 1.99 0.141 2.4 0 2.83 C 0.693 2.995 1.353 3.285 1.952 3.702",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.663,
    height: 12.782,
    viewBox: "0 0 12.663 12.782",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.743,
      width: 12.663,
      height: 12.782,
      color: "var(--weather-sunny)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.035 3.352 C 7.68 2.726 9.385 2.897 10.716 3.82 C 11.949 4.679 12.677 6.06 12.663 7.515 C 12.661 7.686 12.601 7.85 12.494 7.981 L 8.801 12.507 C 8.655 12.685 8.44 12.781 8.22 12.781 C 8.131 12.781 8.04 12.766 7.954 12.733 L 4.609 11.465 C 4.555 11.445 4.503 11.417 4.454 11.385 C 3.361 10.644 2.757 9.024 2.951 7.356 C 3.169 5.476 4.294 4.017 6.035 3.352 Z M 1.029 9.666 C 1.364 9.421 1.834 9.496 2.077 9.831 C 2.321 10.166 2.247 10.635 1.912 10.879 L 1.265 11.349 C 1.133 11.446 0.977 11.493 0.825 11.493 C 0.593 11.493 0.364 11.387 0.218 11.184 C -0.027 10.849 0.048 10.381 0.383 10.137 L 1.029 9.666 Z M 1.637 5.812 C 2.048 5.863 2.34 6.237 2.289 6.648 C 2.242 7.028 1.919 7.307 1.546 7.307 C 1.516 7.307 1.484 7.305 1.453 7.302 L 0.658 7.203 C 0.247 7.152 -0.045 6.778 0.006 6.367 C 0.057 5.956 0.43 5.672 0.842 5.714 L 1.637 5.812 Z M 1.977 1.953 C 2.285 1.675 2.758 1.699 3.036 2.009 L 3.572 2.604 C 3.849 2.911 3.825 3.385 3.517 3.663 C 3.373 3.792 3.193 3.854 3.015 3.855 C 2.81 3.855 2.605 3.772 2.456 3.606 L 1.922 3.012 C 1.645 2.704 1.67 2.23 1.977 1.953 Z M 6.033 0.035 C 6.432 -0.091 6.85 0.132 6.974 0.526 L 7.213 1.288 C 7.337 1.683 7.117 2.105 6.722 2.229 C 6.646 2.252 6.571 2.264 6.497 2.264 C 6.178 2.264 5.882 2.058 5.781 1.738 L 5.542 0.976 C 5.418 0.581 5.638 0.159 6.033 0.035 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.499,
    height: 11.600,
    viewBox: "0 0 17.499 11.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.073,
      top: 7.5,
      width: 17.499,
      height: 11.6,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.84 11.6 L 4.099 11.6 C 1.839 11.6 0 9.758 0 7.495 C 0 5.23 1.839 3.387 4.099 3.387 C 4.408 3.387 4.706 3.418 4.991 3.481 C 5.683 1.446 7.632 0 9.84 0 C 12.397 0 14.561 1.934 14.918 4.42 C 16.425 4.883 17.499 6.299 17.499 7.934 C 17.499 9.955 15.858 11.6 13.84 11.6",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.425,
      top: 1.513,
      width: 19.149,
      height: 20.974,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.900,
    height: 5.500,
    viewBox: "0 0 3.900 5.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.875,
      top: 15.475,
      width: 3.9,
      height: 5.5,
      color: "var(--weather-lightning)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.15 5.5 C 2.038 5.5 1.923 5.475 1.816 5.421 C 1.445 5.235 1.295 4.785 1.48 4.415 L 1.937 3.5 L 0.751 3.5 C 0.491 3.5 0.25 3.365 0.113 3.145 C -0.024 2.923 -0.037 2.647 0.08 2.415 L 1.08 0.415 C 1.266 0.044 1.714 -0.105 2.086 0.079 C 2.457 0.265 2.607 0.715 2.421 1.085 L 1.964 2 L 3.151 2 C 3.411 2 3.652 2.135 3.789 2.355 C 3.925 2.577 3.938 2.853 3.822 3.085 L 2.822 5.085 C 2.69 5.349 2.425 5.5 2.15 5.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.804,
    height: 10.020,
    viewBox: "0 0 10.804 10.020",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.346,
      top: 0,
      width: 10.804,
      height: 10.02,
      color: "var(--weather-sunny)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 5.257 C 1.018 3.122 2.695 2.223 4.844 2.665 C 6.962 3.199 7.773 5.052 7.837 6.611 C 7.905 8.262 7.225 9.665 6.185 10.02 L 5.7 8.6 L 3.23 8.285 L 2.4 7.25 L 1.357 5.901 L 0.002 5.257 Z M 9.229 7.722 L 10.016 7.867 C 10.287 7.918 10.467 8.179 10.416 8.45 C 10.372 8.691 10.162 8.859 9.926 8.86 C 9.896 8.86 9.864 8.858 9.834 8.852 L 9.047 8.705 C 8.776 8.654 8.596 8.393 8.647 8.122 C 8.697 7.85 8.959 7.669 9.229 7.722 Z M 10.16 4.369 C 10.424 4.29 10.703 4.439 10.782 4.704 C 10.862 4.969 10.712 5.247 10.447 5.327 L 9.681 5.557 C 9.633 5.571 9.585 5.578 9.537 5.578 C 9.322 5.578 9.123 5.438 9.058 5.222 C 8.978 4.957 9.129 4.679 9.393 4.599 L 10.16 4.369 Z M 0.177 1.201 C 0.387 1.024 0.705 1.049 0.882 1.259 L 1.398 1.87 C 1.576 2.081 1.551 2.396 1.34 2.575 C 1.246 2.654 1.131 2.693 1.017 2.693 C 0.875 2.693 0.734 2.633 0.635 2.517 L 0.118 1.906 C -0.06 1.695 -0.034 1.38 0.177 1.201 Z M 7.685 1.252 C 7.881 1.056 8.198 1.054 8.392 1.249 C 8.588 1.443 8.589 1.759 8.396 1.956 L 7.831 2.525 C 7.733 2.623 7.605 2.672 7.477 2.672 C 7.35 2.672 7.222 2.624 7.125 2.527 C 6.929 2.334 6.926 2.016 7.121 1.82 L 7.685 1.252 Z M 3.537 0.016 C 3.805 -0.053 4.079 0.111 4.145 0.378 L 4.341 1.152 C 4.41 1.42 4.247 1.693 3.98 1.761 C 3.939 1.771 3.896 1.776 3.856 1.776 C 3.632 1.776 3.428 1.625 3.372 1.399 L 3.176 0.623 C 3.108 0.356 3.269 0.084 3.537 0.016 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.775,
    height: 10.500,
    viewBox: "0 0 15.775 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4.174,
      width: 15.775,
      height: 10.5,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.037 10.5 L 3.345 10.5 C 2.451 10.5 1.61 10.151 0.978 9.52 C 0.347 8.887 -0.001 8.046 0 7.151 C 0 5.677 0.959 4.396 2.311 3.957 C 2.658 1.728 4.611 0 6.915 0 C 8.895 0 10.646 1.28 11.295 3.089 C 11.533 3.042 11.781 3.019 12.038 3.019 C 14.099 3.019 15.775 4.697 15.775 6.76 C 15.775 8.822 14.099 10.5 12.037 10.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.500,
    height: 4.500,
    viewBox: "0 0 13.500 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.075,
      top: 15.475,
      width: 13.5,
      height: 4.5,
      color: "var(--weather-rain)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.249 4.5 C 11.137 4.5 11.022 4.475 10.915 4.421 C 10.544 4.235 10.394 3.785 10.579 3.415 L 12.079 0.415 C 12.265 0.044 12.716 -0.105 13.085 0.079 C 13.456 0.265 13.606 0.715 13.421 1.085 L 11.921 4.085 C 11.789 4.349 11.524 4.5 11.249 4.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 4.5 C 0.637 4.5 0.522 4.475 0.415 4.421 C 0.044 4.235 -0.106 3.785 0.079 3.415 L 1.579 0.415 C 1.766 0.044 2.216 -0.105 2.585 0.079 C 2.956 0.265 3.106 0.715 2.921 1.085 L 1.421 4.085 C 1.289 4.349 1.024 4.5 0.749 4.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.425,
      top: 1.663,
      width: 19.149,
      height: 20.674,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.804,
    height: 10.019,
    viewBox: "0 0 10.804 10.019",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.346,
      top: 0,
      width: 10.804,
      height: 10.019,
      color: "var(--weather-sunny)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 5.257 C 1.018 3.123 2.694 2.228 4.844 2.666 C 6.962 3.2 7.773 5.053 7.837 6.612 C 7.904 8.263 7.225 9.664 6.185 10.019 L 5.7 8.599 C 5.988 8.502 3.363 8.286 3.349 8.285 L 1.74 7.067 L 1.358 5.9 L 0.002 5.257 Z M 9.229 7.722 L 10.016 7.867 C 10.287 7.918 10.467 8.179 10.416 8.45 C 10.372 8.691 10.162 8.859 9.926 8.859 C 9.896 8.859 9.864 8.857 9.834 8.851 L 9.047 8.705 C 8.776 8.654 8.596 8.393 8.647 8.122 C 8.696 7.85 8.961 7.668 9.229 7.722 Z M 10.16 4.37 C 10.43 4.292 10.704 4.441 10.782 4.705 C 10.862 4.97 10.712 5.248 10.447 5.328 L 9.682 5.557 C 9.634 5.571 9.585 5.578 9.538 5.578 C 9.323 5.578 9.124 5.438 9.059 5.223 C 8.979 4.958 9.13 4.68 9.394 4.599 L 10.16 4.37 Z M 0.177 1.202 C 0.388 1.025 0.705 1.05 0.882 1.26 L 1.399 1.871 C 1.576 2.082 1.551 2.397 1.34 2.576 C 1.246 2.655 1.131 2.694 1.017 2.694 C 0.875 2.694 0.734 2.633 0.635 2.516 L 0.118 1.907 C -0.06 1.696 -0.034 1.381 0.177 1.202 Z M 7.685 1.253 C 7.88 1.057 8.197 1.055 8.392 1.25 C 8.588 1.444 8.59 1.76 8.396 1.957 L 7.831 2.524 C 7.733 2.623 7.606 2.673 7.477 2.673 C 7.35 2.673 7.222 2.625 7.125 2.528 C 6.929 2.334 6.927 2.017 7.121 1.821 L 7.685 1.253 Z M 3.537 0.016 C 3.806 -0.055 4.077 0.111 4.145 0.379 L 4.342 1.153 C 4.411 1.421 4.249 1.694 3.981 1.761 C 3.94 1.772 3.898 1.776 3.858 1.776 C 3.634 1.776 3.43 1.626 3.373 1.399 L 3.176 0.624 C 3.108 0.356 3.269 0.085 3.537 0.016 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.775,
    height: 10.500,
    viewBox: "0 0 15.775 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4.174,
      width: 15.775,
      height: 10.5,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.037 10.5 L 3.345 10.5 C 2.451 10.5 1.61 10.151 0.978 9.519 C 0.347 8.886 -0.001 8.045 0 7.151 C 0 5.676 0.959 4.396 2.311 3.957 C 2.658 1.728 4.611 0 6.915 0 C 8.895 0 10.646 1.279 11.295 3.089 C 11.533 3.042 11.781 3.019 12.038 3.019 C 14.099 3.019 15.775 4.697 15.775 6.759 C 15.775 8.822 14.099 10.5 12.037 10.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.000,
    height: 4.500,
    viewBox: "0 0 14.000 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.974,
      top: 16.175,
      width: 14,
      height: 4.5,
      color: "var(--weather-rain)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 3.5 C 0.637 3.5 0.522 3.475 0.415 3.421 C 0.044 3.235 -0.106 2.785 0.079 2.415 L 1.079 0.415 C 1.266 0.044 1.716 -0.105 2.085 0.079 C 2.456 0.265 2.606 0.715 2.421 1.085 L 1.421 3.085 C 1.289 3.349 1.024 3.5 0.749 3.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.749 3.5 C 8.637 3.5 8.522 3.475 8.415 3.421 C 8.044 3.235 7.894 2.785 8.079 2.415 L 9.079 0.415 C 9.266 0.044 9.716 -0.105 10.085 0.079 C 10.456 0.265 10.606 0.715 10.421 1.085 L 9.421 3.085 C 9.289 3.349 9.024 3.5 8.749 3.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.749 4.5 C 4.637 4.5 4.522 4.475 4.415 4.421 C 4.044 4.235 3.894 3.785 4.079 3.415 L 5.079 1.415 C 5.265 1.044 5.716 0.896 6.085 1.079 C 6.456 1.265 6.606 1.715 6.421 2.085 L 5.421 4.085 C 5.289 4.349 5.024 4.5 4.749 4.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.749 3.5 C 12.637 3.5 12.522 3.475 12.415 3.421 C 12.044 3.235 11.894 2.785 12.079 2.415 L 12.579 1.415 C 12.766 1.044 13.215 0.896 13.585 1.079 C 13.956 1.265 14.106 1.715 13.921 2.085 L 13.421 3.085 C 13.289 3.349 13.024 3.5 12.749 3.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.4,
      top: 1.613,
      width: 19.201,
      height: 20.774,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.905,
    height: 10.018,
    viewBox: "0 0 10.905 10.018",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.296,
      top: 0,
      width: 10.905,
      height: 10.018,
      color: "var(--weather-sunny)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.21 C 1.026 3.057 2.716 2.155 4.887 2.595 C 7.025 3.134 7.844 5.004 7.908 6.578 C 7.977 8.245 7.292 9.66 6.242 10.018 L 5.753 8.586 L 2.483 8.049 L 1.367 5.861 L 0 5.21 Z M 9.315 7.699 L 10.108 7.847 C 10.383 7.898 10.564 8.161 10.513 8.434 C 10.468 8.678 10.255 8.848 10.018 8.848 C 9.987 8.848 9.955 8.846 9.925 8.84 L 9.131 8.692 C 8.858 8.641 8.676 8.377 8.728 8.103 C 8.777 7.829 9.046 7.648 9.315 7.699 Z M 10.255 4.316 C 10.527 4.235 10.804 4.388 10.883 4.654 C 10.964 4.922 10.812 5.202 10.545 5.283 L 9.771 5.515 C 9.723 5.529 9.673 5.535 9.626 5.535 C 9.408 5.535 9.208 5.394 9.143 5.176 C 9.062 4.908 9.214 4.627 9.48 4.547 L 10.255 4.316 Z M 0.226 1.201 C 0.437 1.024 0.752 1.048 0.931 1.259 L 1.447 1.87 C 1.626 2.08 1.601 2.396 1.39 2.574 C 1.296 2.654 1.18 2.693 1.066 2.693 C 0.924 2.693 0.785 2.633 0.685 2.516 L 0.168 1.906 C -0.011 1.695 0.015 1.38 0.226 1.201 Z M 7.755 1.169 C 7.95 0.97 8.27 0.968 8.469 1.164 C 8.667 1.361 8.668 1.68 8.473 1.878 L 7.904 2.453 C 7.806 2.553 7.676 2.601 7.546 2.601 C 7.418 2.601 7.289 2.554 7.19 2.456 C 6.993 2.26 6.991 1.941 7.188 1.742 L 7.755 1.169 Z M 3.586 0.016 C 3.856 -0.055 4.125 0.111 4.193 0.378 L 4.391 1.151 C 4.46 1.419 4.297 1.693 4.029 1.76 C 3.988 1.771 3.946 1.775 3.906 1.775 C 3.682 1.775 3.479 1.625 3.422 1.399 L 3.225 0.624 C 3.157 0.356 3.318 0.085 3.586 0.016 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.774,
    height: 10.500,
    viewBox: "0 0 15.774 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4.174,
      width: 15.774,
      height: 10.5,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.037 10.5 L 3.345 10.5 C 2.45 10.5 1.61 10.151 0.978 9.519 C 0.347 8.886 -0.001 8.045 0 7.151 C 0 5.676 0.958 4.396 2.31 3.957 C 2.657 1.728 4.61 0 6.914 0 C 8.894 0 10.645 1.279 11.294 3.089 C 11.533 3.042 11.781 3.019 12.038 3.019 C 14.099 3.019 15.774 4.697 15.774 6.759 C 15.774 8.822 14.098 10.5 12.037 10.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.510,
    height: 4.520,
    viewBox: "0 0 13.510 4.520",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.774,
      top: 16.254,
      width: 13.51,
      height: 4.52,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.755 1.51 C 12.341 1.51 12 1.169 12 0.755 C 12 0.341 12.341 0 12.755 0 C 13.169 0 13.51 0.341 13.51 0.755 C 13.51 1.169 13.169 1.51 12.755 1.51 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.755 1.515 C 6.341 1.515 6 1.174 6 0.76 C 6 0.346 6.341 0.005 6.755 0.005 C 7.169 0.005 7.51 0.346 7.51 0.76 C 7.51 1.174 7.169 1.515 6.755 1.515 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.755 1.51 C 0.341 1.51 0 1.169 0 0.755 C 0 0.341 0.341 0 0.755 0 C 1.169 0 1.51 0.341 1.51 0.755 C 1.51 1.169 1.169 1.51 0.755 1.51 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.755 4.52 C 3.341 4.52 3 4.179 3 3.765 C 3 3.351 3.341 3.01 3.755 3.01 C 4.169 3.01 4.51 3.351 4.51 3.765 C 4.51 4.179 4.169 4.52 3.755 4.52 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.75 4.515 C 9.336 4.515 8.995 4.174 8.995 3.76 C 8.995 3.346 9.336 3.005 9.75 3.005 C 10.164 3.005 10.505 3.346 10.505 3.76 C 10.505 4.174 10.164 4.515 9.75 4.515 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.425,
      top: 1.413,
      width: 19.149,
      height: 21.174,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.804,
    height: 10.018,
    viewBox: "0 0 10.804 10.018",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.345,
      top: 0,
      width: 10.804,
      height: 10.018,
      color: "var(--weather-sunny)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 5.255 C 1.017 3.122 2.69 2.227 4.845 2.664 C 6.962 3.199 7.772 5.052 7.837 6.611 C 7.904 8.262 7.224 9.662 6.185 10.018 L 5.7 8.598 L 1.879 8.305 L 1.357 5.9 L 0.002 5.255 Z M 9.228 7.72 L 10.016 7.867 C 10.287 7.918 10.467 8.179 10.416 8.45 C 10.372 8.69 10.162 8.858 9.926 8.858 C 9.896 8.858 9.864 8.856 9.834 8.85 L 9.047 8.705 C 8.776 8.654 8.596 8.392 8.646 8.122 C 8.696 7.85 8.961 7.669 9.228 7.72 Z M 10.16 4.369 C 10.427 4.288 10.704 4.44 10.782 4.704 C 10.862 4.969 10.712 5.247 10.447 5.327 L 9.682 5.556 C 9.634 5.57 9.584 5.577 9.537 5.577 C 9.321 5.577 9.124 5.437 9.059 5.221 C 8.979 4.956 9.13 4.677 9.394 4.598 L 10.16 4.369 Z M 0.177 1.2 C 0.39 1.022 0.705 1.047 0.882 1.258 L 1.398 1.87 C 1.577 2.081 1.551 2.397 1.34 2.575 C 1.246 2.654 1.131 2.693 1.017 2.693 C 0.875 2.693 0.734 2.633 0.635 2.516 L 0.119 1.905 C -0.06 1.694 -0.034 1.379 0.177 1.2 Z M 7.685 1.251 C 7.879 1.056 8.197 1.054 8.392 1.249 C 8.588 1.443 8.589 1.759 8.395 1.956 L 7.832 2.524 C 7.734 2.623 7.606 2.671 7.477 2.671 C 7.35 2.671 7.222 2.624 7.125 2.527 C 6.929 2.333 6.927 2.016 7.122 1.82 L 7.685 1.251 Z M 3.537 0.015 C 3.806 -0.052 4.078 0.11 4.144 0.377 L 4.341 1.152 C 4.41 1.42 4.247 1.692 3.979 1.76 C 3.939 1.77 3.896 1.775 3.856 1.775 C 3.632 1.775 3.428 1.624 3.372 1.398 L 3.176 0.623 C 3.108 0.355 3.269 0.083 3.537 0.015 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.775,
    height: 10.500,
    viewBox: "0 0 15.775 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4.174,
      width: 15.775,
      height: 10.5,
      color: "var(--weather-cloud)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.037 10.5 L 3.345 10.5 C 2.451 10.5 1.61 10.151 0.978 9.519 C 0.347 8.886 -0.001 8.045 0 7.151 C 0 5.676 0.959 4.396 2.311 3.957 C 2.658 1.728 4.611 0 6.915 0 C 8.895 0 10.646 1.279 11.295 3.089 C 11.533 3.042 11.781 3.019 12.038 3.019 C 14.099 3.019 15.775 4.697 15.775 6.759 C 15.775 8.822 14.099 10.5 12.037 10.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.000,
    height: 2.500,
    viewBox: "0 0 2.000 2.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.785,
      top: 15.674,
      width: 2,
      height: 2.5,
      color: "var(--weather-rain)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 2.5 C 0.637 2.5 0.522 2.475 0.415 2.421 C 0.044 2.235 -0.106 1.785 0.079 1.415 L 0.579 0.415 C 0.765 0.044 1.215 -0.105 1.585 0.079 C 1.956 0.265 2.106 0.715 1.921 1.085 L 1.421 2.085 C 1.289 2.349 1.024 2.5 0.749 2.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.000,
    height: 2.500,
    viewBox: "0 0 2.000 2.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.785,
      top: 18.674,
      width: 2,
      height: 2.5,
      color: "var(--weather-rain)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 2.5 C 0.637 2.5 0.522 2.475 0.415 2.421 C 0.044 2.235 -0.106 1.785 0.079 1.415 L 0.579 0.415 C 0.765 0.044 1.215 -0.105 1.585 0.079 C 1.956 0.265 2.106 0.715 1.921 1.085 L 1.421 2.085 C 1.289 2.349 1.024 2.5 0.749 2.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.510,
    height: 1.510,
    viewBox: "0 0 1.510 1.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.275,
      top: 15.668,
      width: 1.51,
      height: 1.51,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.755 1.51 C 0.341 1.51 0 1.169 0 0.755 C 0 0.341 0.341 0 0.755 0 C 1.169 0 1.51 0.341 1.51 0.755 C 1.51 1.169 1.169 1.51 0.755 1.51",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.510,
    height: 1.510,
    viewBox: "0 0 1.510 1.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.275,
      top: 15.668,
      width: 1.51,
      height: 1.51,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.755 1.51 C 0.341 1.51 0 1.169 0 0.755 C 0 0.341 0.341 0 0.755 0 C 1.169 0 1.51 0.341 1.51 0.755 C 1.51 1.169 1.169 1.51 0.755 1.51",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.510,
    height: 1.510,
    viewBox: "0 0 1.510 1.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.28,
      top: 18.664,
      width: 1.51,
      height: 1.51,
      color: "var(--weather-snow)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.755 1.51 C 0.341 1.51 0 1.169 0 0.755 C 0 0.341 0.341 0 0.755 0 C 1.169 0 1.51 0.341 1.51 0.755 C 1.51 1.169 1.169 1.51 0.755 1.51",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--weather-cloud)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.500,
    height: 15.500,
    viewBox: "0 0 21.500 15.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.25,
      top: 4.25,
      width: 21.5,
      height: 15.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.75 15.5 L 5.75 15.5 C 2.579 15.5 0 12.921 0 9.75 C 0 7.054 1.915 4.724 4.523 4.154 C 5.564 1.652 8.012 0 10.75 0 C 14.237 0 17.114 2.658 17.464 6.054 C 19.746 6.399 21.5 8.374 21.5 10.75 C 21.5 13.369 19.369 15.5 16.75 15.5 L 16.75 15.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--weather-snow)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 17.979,
    viewBox: "0 0 18 17.979",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3.011,
      width: 18,
      height: 17.979
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.929 1.871 C 9.895 1.871 9.859 1.869 9.824 1.864 C 9.763 1.857 9.702 1.851 9.642 1.846 C 9.133 1.8 8.758 1.351 8.803 0.843 C 8.848 0.334 9.3 -0.042 9.806 0.004 C 9.882 0.011 9.958 0.018 10.033 0.027 C 10.54 0.085 10.905 0.543 10.847 1.05 C 10.794 1.522 10.394 1.871 9.929 1.871 M 10.336 5.851 C 9.991 5.851 9.659 5.656 9.501 5.323 C 9.282 4.862 9.478 4.31 9.939 4.091 C 10.008 4.058 10.077 4.026 10.148 3.995 C 10.614 3.788 11.161 3.999 11.367 4.466 C 11.574 4.933 11.364 5.479 10.896 5.686 C 10.842 5.71 10.787 5.735 10.733 5.761 C 10.605 5.822 10.47 5.851 10.336 5.851 M 9.039 9.851 C 8.693 9.851 8.361 9.656 8.203 9.323 C 7.984 8.862 8.18 8.31 8.641 8.09 C 8.71 8.058 8.779 8.026 8.85 7.995 C 9.316 7.788 9.863 7.999 10.07 8.466 C 10.277 8.933 10.066 9.479 9.599 9.685 C 9.544 9.71 9.489 9.735 9.435 9.761 C 9.307 9.822 9.172 9.851 9.039 9.851 M 12.996 9.276 C 12.65 9.276 12.319 9.081 12.16 8.748 C 11.941 8.287 12.137 7.735 12.598 7.516 C 12.667 7.483 12.737 7.451 12.807 7.42 C 13.274 7.213 13.82 7.424 14.027 7.891 C 14.234 8.358 14.023 8.904 13.556 9.111 C 13.501 9.135 13.447 9.161 13.392 9.186 C 13.264 9.247 13.129 9.276 12.996 9.276 M 12.166 13.34 C 11.82 13.34 11.489 13.145 11.331 12.812 C 11.111 12.351 11.307 11.799 11.769 11.58 C 11.837 11.547 11.907 11.515 11.977 11.484 C 12.444 11.277 12.991 11.488 13.197 11.955 C 13.404 12.422 13.193 12.968 12.726 13.175 C 12.672 13.199 12.617 13.224 12.563 13.25 C 12.435 13.311 12.3 13.34 12.166 13.34 M 7.401 14.297 C 7.055 14.297 6.723 14.102 6.565 13.77 C 6.345 13.308 6.541 12.756 7.003 12.537 C 7.072 12.504 7.141 12.472 7.211 12.441 C 7.678 12.234 8.225 12.446 8.431 12.912 C 8.638 13.379 8.427 13.925 7.961 14.132 C 7.906 14.156 7.851 14.182 7.797 14.208 C 7.669 14.268 7.534 14.297 7.401 14.297 M 5.166 10.872 C 4.821 10.872 4.489 10.677 4.331 10.344 C 4.111 9.883 4.308 9.331 4.769 9.112 C 4.838 9.079 4.907 9.047 4.977 9.016 C 5.444 8.809 5.991 9.02 6.197 9.487 C 6.404 9.954 6.194 10.5 5.726 10.707 C 5.672 10.731 5.617 10.756 5.563 10.782 C 5.435 10.843 5.3 10.872 5.166 10.872 M 6.188 6.659 C 5.842 6.659 5.51 6.464 5.352 6.132 C 5.133 5.67 5.329 5.119 5.79 4.899 C 5.859 4.866 5.929 4.834 5.999 4.803 C 6.465 4.596 7.012 4.808 7.219 5.274 C 7.425 5.741 7.215 6.287 6.748 6.494 C 6.693 6.519 6.639 6.543 6.584 6.57 C 6.456 6.63 6.321 6.659 6.188 6.659 M 5.528 2.596 C 5.182 2.596 4.851 2.401 4.692 2.068 C 4.473 1.607 4.669 1.055 5.13 0.836 C 5.199 0.803 5.269 0.771 5.339 0.74 C 5.806 0.533 6.352 0.744 6.559 1.211 C 6.766 1.677 6.555 2.224 6.088 2.431 C 6.034 2.455 5.979 2.48 5.925 2.506 C 5.796 2.567 5.661 2.596 5.528 2.596 M 13.882 3.463 C 13.686 3.463 13.49 3.402 13.322 3.274 C 13.274 3.238 13.225 3.201 13.176 3.166 C 12.762 2.867 12.669 2.289 12.968 1.875 C 13.267 1.461 13.845 1.368 14.259 1.666 C 14.321 1.711 14.382 1.757 14.443 1.803 C 14.849 2.113 14.928 2.693 14.618 3.099 C 14.436 3.338 14.161 3.463 13.882 3.463 M 2.294 5.375 C 2.115 5.375 1.935 5.324 1.776 5.216 C 1.353 4.93 1.242 4.355 1.529 3.932 C 1.571 3.869 1.615 3.806 1.659 3.744 C 1.956 3.328 2.534 3.232 2.949 3.529 C 3.365 3.825 3.461 4.403 3.164 4.818 C 3.129 4.868 3.094 4.918 3.06 4.968 C 2.882 5.233 2.59 5.375 2.294 5.375 M 16.479 6.845 C 16.114 6.845 15.769 6.628 15.622 6.27 C 15.599 6.214 15.576 6.158 15.552 6.103 C 15.346 5.635 15.559 5.09 16.027 4.885 C 16.495 4.679 17.04 4.892 17.245 5.36 C 17.276 5.429 17.305 5.499 17.334 5.57 C 17.528 6.043 17.301 6.583 16.828 6.776 C 16.714 6.823 16.595 6.845 16.479 6.845 M 0.926 9.411 C 0.907 9.411 0.888 9.411 0.869 9.41 C 0.359 9.379 -0.029 8.941 0.002 8.431 C 0.006 8.355 0.012 8.279 0.018 8.203 C 0.062 7.694 0.507 7.317 1.019 7.361 C 1.527 7.404 1.905 7.852 1.861 8.361 C 1.856 8.421 1.852 8.482 1.848 8.542 C 1.818 9.033 1.411 9.411 0.926 9.411 M 17.073 10.105 L 17.05 10.105 C 16.539 10.092 16.136 9.668 16.149 9.157 C 16.15 9.097 16.151 9.036 16.151 8.975 C 16.151 8.464 16.565 8.05 17.075 8.05 C 17.586 8.05 18 8.464 18 8.975 C 18 9.051 17.999 9.127 17.997 9.203 C 17.985 9.706 17.573 10.105 17.073 10.105 M 1.797 13.584 C 1.462 13.584 1.138 13.4 0.974 13.08 C 0.939 13.013 0.906 12.946 0.873 12.877 C 0.651 12.418 0.844 11.865 1.303 11.643 C 1.763 11.421 2.316 11.614 2.538 12.074 C 2.565 12.128 2.592 12.183 2.62 12.237 C 2.852 12.692 2.673 13.249 2.219 13.482 C 2.083 13.551 1.94 13.584 1.797 13.584 M 15.845 14.188 C 15.677 14.188 15.507 14.142 15.354 14.046 C 14.922 13.775 14.791 13.204 15.062 12.772 C 15.094 12.72 15.126 12.669 15.156 12.617 C 15.416 12.177 15.983 12.031 16.423 12.291 C 16.863 12.551 17.009 13.118 16.749 13.558 C 16.71 13.624 16.67 13.689 16.629 13.754 C 16.453 14.034 16.152 14.188 15.845 14.188 M 4.672 16.732 C 4.502 16.732 4.331 16.685 4.178 16.588 C 4.113 16.547 4.049 16.506 3.985 16.463 C 3.561 16.179 3.447 15.604 3.732 15.18 C 4.016 14.756 4.591 14.642 5.015 14.927 C 5.065 14.96 5.116 14.993 5.167 15.026 C 5.599 15.299 5.727 15.87 5.454 16.302 C 5.278 16.58 4.978 16.732 4.672 16.732 M 12.713 17.078 C 12.378 17.078 12.056 16.896 11.891 16.579 C 11.656 16.126 11.833 15.568 12.286 15.332 C 12.339 15.304 12.393 15.276 12.446 15.247 C 12.893 15 13.455 15.162 13.702 15.609 C 13.949 16.057 13.787 16.619 13.339 16.866 C 13.273 16.903 13.205 16.939 13.138 16.974 C 13.002 17.044 12.856 17.078 12.713 17.078 M 8.749 17.979 L 8.721 17.978 C 8.645 17.976 8.568 17.973 8.492 17.968 C 7.982 17.94 7.592 17.503 7.62 16.994 C 7.649 16.484 8.083 16.095 8.595 16.122 C 8.655 16.125 8.715 16.128 8.776 16.13 C 9.286 16.145 9.688 16.571 9.673 17.081 C 9.658 17.582 9.247 17.979 8.749 17.979",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __impls = {
    // figma: Variant=sunny
    "variant=sunny": __body0,
    // figma: Variant=a-little-cloud
    "variant=a-little-cloud": __body1,
    // figma: Variant=much-cloud
    "variant=much-cloud": __body2,
    // figma: Variant=rain
    "variant=rain": __body3,
    // figma: Variant=gradually-cloudy-and-rain
    "variant=gradually-cloudy-and-rain": __body4,
    // figma: Variant=snow
    "variant=snow": __body5,
    // figma: Variant=snow-and-rain
    "variant=snow-and-rain": __body6,
    // figma: Variant=shower
    "variant=shower": __body7,
    // figma: Variant=a-shower-of-snow
    "variant=a-shower-of-snow": __body8,
    // figma: Variant=fog
    "variant=fog": __body9,
    // figma: Variant=thunderstorm
    "variant=thunderstorm": __body10,
    // figma: Variant=gradually-cloudy
    "variant=gradually-cloudy": __body11,
    // figma: Variant=gradually-cloudy-and-thunderstorm
    "variant=gradually-cloudy-and-thunderstorm": __body12,
    // figma: Variant=gradually-cloudy-and-snow
    "variant=gradually-cloudy-and-snow": __body13,
    // figma: Variant=gradually-cloudy-and-snow-and-rain
    "variant=gradually-cloudy-and-snow-and-rain": __body14,
    // figma: Variant=clear-after-cloudy
    "variant=clear-after-cloudy": __body15,
    // figma: Variant=clear-after-thunderstorm
    "variant=clear-after-thunderstorm": __body16,
    // figma: Variant=clear-after-rain
    "variant=clear-after-rain": __body17,
    // figma: Variant=clear-after-snow
    "variant=clear-after-snow": __body18,
    // figma: Variant=clear-after-snow-and-rain
    "variant=clear-after-snow-and-rain": __body19,
    // figma: Variant=cloud
    "variant=cloud": __body20,
    // figma: Variant=dust
    "variant=dust": __body21
  };
  return (__impls[__vkey_IconWeather(props)] ?? __body1)();
}

// figma node: 1028:15921 Icon/Wind (1 variants)
const __venc_IconWind = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconWind = p => "variant=" + __venc_IconWind(p.variant) + '|' + "fill=" + __venc_IconWind(p.fill);
function IconWind(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "wind",
    fill: _p.fill ?? "false"
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
    height: 18,
    viewBox: "0 0 20 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3,
      width: 20,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 15 C 12 14.448 11.552 14 11 14 L 1 14 C 0.448 14 0 13.552 0 13 C 0 12.448 0.448 12 1 12 L 11 12 C 12.657 12 14 13.343 14 15 C 14 16.657 12.657 18 11 18 C 10.111 18 9.312 17.612 8.764 17 C 8.396 16.588 8.431 15.956 8.843 15.588 C 9.254 15.22 9.887 15.255 10.255 15.666 C 10.439 15.872 10.704 16 11 16 C 11.552 16 12 15.552 12 15 Z M 18 6 C 18 4.895 17.105 4 16 4 C 15.408 4 14.876 4.256 14.509 4.667 C 14.14 5.078 13.508 5.113 13.097 4.745 C 12.685 4.377 12.65 3.744 13.019 3.333 C 13.75 2.516 14.815 2 16 2 C 18.209 2 20 3.791 20 6 C 20 8.209 18.209 10 16 10 L 1 10 C 0.448 10 0 9.552 0 9 C 0 8.448 0.448 8 1 8 L 16 8 C 17.105 8 18 7.105 18 6 Z M 9 3 C 9 2.448 8.552 2 8 2 C 7.704 2 7.439 2.128 7.255 2.334 C 6.887 2.745 6.254 2.78 5.843 2.412 C 5.431 2.044 5.396 1.412 5.764 1 C 6.312 0.388 7.111 0 8 0 C 9.657 0 11 1.343 11 3 C 11 4.657 9.657 6 8 6 L 1 6 C 0.448 6 0 5.552 0 5 C 0 4.448 0.448 4 1 4 L 8 4 C 8.552 4 9 3.552 9 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Variant=wind, Fill=False
    "variant=wind|fill=false": __body0
  };
  return (__impls[__vkey_IconWind(props)] ?? __body0)();
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

// figma node: 1004:13272 Wind (16 variants)
const __venc_Wind2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Wind2 = p => "prop=" + __venc_Wind2(p.prop);
function Wind2(_p = {}) {
  const props = {
    ..._p,
    prop: _p.prop ?? "e"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20.001,
    viewBox: "0 0 20 20.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20.001 L 20 20.001 L 20 0 L 0 0 L 0 20.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3.002,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14 L 14 14 L 14 0 L 0 0 L 0 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.500,
    height: 14,
    viewBox: "0 0 8.500 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.75,
      top: 3,
      width: 8.5,
      height: 14,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.25 12.091 L 0 14 L 4.25 0 L 8.5 14 L 4.25 12.091 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20.001,
    viewBox: "0 0 20 20.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.002,
      width: 20,
      height: 20.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20.001 L 20 20.001 L 20 0 L 0 0 L 0 20.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.292,
    height: 18.293,
    viewBox: "0 0 18.292 18.293",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.854,
      top: 0.855,
      width: 18.292,
      height: 18.293
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.358 L 5.358 18.293 L 18.292 12.935 L 12.935 0 L 0 5.358 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.284,
    height: 14.561,
    viewBox: "0 0 9.284 14.561",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.359,
      top: 2.734,
      width: 9.284,
      height: 14.561,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.627 11.171 L 1.431 14.561 L 0 0 L 9.284 11.308 L 4.627 11.171 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20.001,
    viewBox: "0 0 20 20.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.002,
      width: 20,
      height: 20.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20.001 L 20 20.001 L 20 0 L 0 0 L 0 20.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.798,
    height: 19.799,
    viewBox: "0 0 19.798 19.799",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.102,
      top: 0.104,
      width: 19.798,
      height: 19.799
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9.9 L 9.899 19.799 L 19.798 9.9 L 9.899 0 L 0 9.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.905,
    height: 12.905,
    viewBox: "0 0 12.905 12.905",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.549,
      top: 3.553,
      width: 12.905,
      height: 12.905,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.55 8.55 L 6.895 12.905 L 0 0 L 12.905 6.895 L 8.55 8.55 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20.001,
    viewBox: "0 0 20 20.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.004,
      width: 20,
      height: 20.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20.001 L 20 20.001 L 20 0 L 0 0 L 0 20.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.292,
    height: 18.293,
    viewBox: "0 0 18.292 18.293",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.854,
      top: 0.858,
      width: 18.292,
      height: 18.293
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.935 L 12.935 18.293 L 18.292 5.358 L 5.358 0 L 0 12.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.561,
    height: 9.284,
    viewBox: "0 0 14.561 9.284",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.721,
      top: 5.324,
      width: 14.561,
      height: 9.284,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.171 4.627 L 11.308 9.284 L 0 0 L 14.561 1.431 L 11.171 4.627 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20.001,
    viewBox: "0 0 20 20.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.004,
      width: 20,
      height: 20.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20.001 L 20 20.001 L 20 0 L 0 0 L 0 20.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3.006,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14 L 0 0 L 14 0 L 14 14 L 0 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 8.500,
    viewBox: "0 0 14 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5.756,
      width: 14,
      height: 8.5,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.091 4.25 L 14 8.5 L 0 4.25 L 14 0 L 12.091 4.25 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20.001,
    viewBox: "0 0 20 20.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.006,
      width: 20,
      height: 20.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20.001 L 20 20.001 L 20 0 L 0 0 L 0 20.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.292,
    height: 18.293,
    viewBox: "0 0 18.292 18.293",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.855,
      top: 0.859,
      width: 18.292,
      height: 18.293
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.358 L 5.357 18.293 L 18.292 12.935 L 12.934 0 L 0 5.358 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.561,
    height: 9.284,
    viewBox: "0 0 14.561 9.284",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.721,
      top: 5.301,
      width: 14.561,
      height: 9.284,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.171 4.657 L 14.561 7.853 L 0 9.284 L 11.308 0 L 11.171 4.657 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20.001,
    viewBox: "0 0 20 20.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.006,
      width: 20,
      height: 20.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20.001 L 20 20.001 L 20 0 L 0 0 L 0 20.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.799,
    height: 19.799,
    viewBox: "0 0 19.799 19.799",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.102,
      top: 0.107,
      width: 19.799,
      height: 19.799
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9.9 L 9.899 19.799 L 19.799 9.9 L 9.899 0 L 0 9.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.905,
    height: 12.905,
    viewBox: "0 0 12.905 12.905",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.549,
      top: 3.551,
      width: 12.905,
      height: 12.905,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.55 4.355 L 12.905 6.01 L 0 12.905 L 6.895 0 L 8.55 4.355 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20.001,
    viewBox: "0 0 20 20.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.008,
      width: 20,
      height: 20.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20.001 L 20 20.001 L 20 0 L 0 0 L 0 20.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.292,
    height: 18.293,
    viewBox: "0 0 18.292 18.293",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.854,
      top: 0.861,
      width: 18.292,
      height: 18.293
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.935 L 12.934 18.293 L 18.292 5.358 L 5.357 0 L 0 12.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.284,
    height: 14.561,
    viewBox: "0 0 9.284 14.561",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.359,
      top: 2.715,
      width: 9.284,
      height: 14.561,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.627 3.39 L 9.284 3.253 L 0 14.561 L 1.431 0 L 4.627 3.39 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
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
      top: 0.008,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20 L 20 20 L 20 0 L 0 0 L 0 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3.008,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14 L 14 14 L 14 0 L 0 0 L 0 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.500,
    height: 14,
    viewBox: "0 0 8.500 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.75,
      top: 3.008,
      width: 8.5,
      height: 14,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.25 1.909 L 8.5 0 L 4.25 14 L 0 0 L 4.25 1.909 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
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
      top: 0.008,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20 L 20 20 L 20 0 L 0 0 L 0 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.292,
    height: 18.292,
    viewBox: "0 0 18.292 18.292",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.854,
      top: 0.863,
      width: 18.292,
      height: 18.292
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.358 L 5.358 18.292 L 18.292 12.934 L 12.935 0 L 0 5.358 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.284,
    height: 14.561,
    viewBox: "0 0 9.284 14.561",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.561,
      top: 2.715,
      width: 9.284,
      height: 14.561,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.657 3.39 L 7.853 0 L 9.284 14.561 L 0 3.253 L 4.657 3.39 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
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
      top: 0.008,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20 L 20 20 L 20 0 L 0 0 L 0 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.798,
    height: 19.799,
    viewBox: "0 0 19.798 19.799",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.102,
      top: 0.109,
      width: 19.798,
      height: 19.799
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9.9 L 9.899 19.799 L 19.798 9.9 L 9.899 0 L 0 9.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.905,
    height: 12.905,
    viewBox: "0 0 12.905 12.905",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.545,
      top: 3.553,
      width: 12.905,
      height: 12.905,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.355 4.355 L 6.01 0 L 12.905 12.905 L 0 6.01 L 4.355 4.355 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
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
      top: 0.008,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20 L 20 20 L 20 0 L 0 0 L 0 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.292,
    height: 18.292,
    viewBox: "0 0 18.292 18.292",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.854,
      top: 0.861,
      width: 18.292,
      height: 18.292
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.934 L 12.935 18.292 L 18.292 5.358 L 5.358 0 L 0 12.934 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.561,
    height: 9.284,
    viewBox: "0 0 14.561 9.284",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.707,
      top: 5.402,
      width: 14.561,
      height: 9.284,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.39 4.657 L 3.253 0 L 14.561 9.284 L 0 7.853 L 3.39 4.657 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
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
    d: "M 0 20 L 20 20 L 20 0 L 0 0 L 0 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 8.500,
    viewBox: "0 0 14 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5.758,
      width: 14,
      height: 8.5,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.909 4.25 L 0 0 L 14 4.25 L 0 8.5 L 1.909 4.25 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
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
      top: 0.008,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20 L 20 20 L 20 0 L 0 0 L 0 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.292,
    height: 18.292,
    viewBox: "0 0 18.292 18.292",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.855,
      top: 0.863,
      width: 18.292,
      height: 18.292
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.358 L 5.357 18.292 L 18.292 12.934 L 12.934 0 L 0 5.358 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.561,
    height: 9.284,
    viewBox: "0 0 14.561 9.284",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.906,
      top: 5.328,
      width: 14.561,
      height: 9.284,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.39 4.627 L 0 1.431 L 14.561 0 L 3.253 9.284 L 3.39 4.627 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
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
      top: 0.008,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20 L 20 20 L 20 0 L 0 0 L 0 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.799,
    height: 19.799,
    viewBox: "0 0 19.799 19.799",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.102,
      top: 0.109,
      width: 19.799,
      height: 19.799
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9.9 L 9.899 19.799 L 19.799 9.9 L 9.899 0 L 0 9.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.905,
    height: 12.905,
    viewBox: "0 0 12.905 12.905",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.545,
      top: 3.559,
      width: 12.905,
      height: 12.905,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.355 8.55 L 0 6.895 L 12.905 0 L 6.01 12.905 L 4.355 8.55 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
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
      top: 0.008,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20 L 20 20 L 20 0 L 0 0 L 0 20 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.292,
    height: 18.292,
    viewBox: "0 0 18.292 18.292",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.854,
      top: 0.863,
      width: 18.292,
      height: 18.292
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.934 L 12.934 18.292 L 18.292 5.358 L 5.357 0 L 0 12.934 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.284,
    height: 14.561,
    viewBox: "0 0 9.284 14.561",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.359,
      top: 2.74,
      width: 9.284,
      height: 14.561,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.657 11.171 L 0 11.308 L 9.284 0 L 7.853 14.561 L 4.657 11.171 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: 속성 1=s
    "prop=s": __body0,
    // figma: 속성 1=sse
    "prop=sse": __body1,
    // figma: 속성 1=se
    "prop=se": __body2,
    // figma: 속성 1=see
    "prop=see": __body3,
    // figma: 속성 1=e
    "prop=e": __body4,
    // figma: 속성 1=een
    "prop=een": __body5,
    // figma: 속성 1=ne
    "prop=ne": __body6,
    // figma: 속성 1=nne
    "prop=nne": __body7,
    // figma: 속성 1=n
    "prop=n": __body8,
    // figma: 속성 1=nnw
    "prop=nnw": __body9,
    // figma: 속성 1=nw
    "prop=nw": __body10,
    // figma: 속성 1=wwn
    "prop=wwn": __body11,
    // figma: 속성 1=w
    "prop=w": __body12,
    // figma: 속성 1=wws
    "prop=wws": __body13,
    // figma: 속성 1=sw
    "prop=sw": __body14,
    // figma: 속성 1=ssw
    "prop=ssw": __body15
  };
  return (__impls[__vkey_Wind2(props)] ?? __body4)();
}

// figma node: 1032:17562 드래그-프로토타입
function Screen(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 852,
      backgroundColor: "var(--background-neutral-neutral0)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 59,
      width: 393,
      height: 793,
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
      height: 641,
      overflow: "hidden",
      backgroundColor: "var(--background-neutral-neutral0)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 24px 12px 24px",
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
    width: 16.836,
    height: 7.330,
    viewBox: "0 0 16.836 7.330",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.83,
      top: 8,
      width: 16.836,
      height: 7.33,
      color: "rgb(0,65,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.208 C -0.759 3.208 -1.375 3.824 -1.375 4.583 C -1.375 5.343 -0.759 5.958 0 5.958 L 0 4.583 L 0 3.208 Z M 6.111 0 L 7.416 -0.435 C 7.228 -0.996 6.703 -1.375 6.111 -1.375 C 5.519 -1.375 4.994 -0.996 4.807 -0.435 L 6.111 0 Z M 18.333 0 L 19.638 -0.435 C 19.451 -0.996 18.925 -1.375 18.333 -1.375 C 17.741 -1.375 17.216 -0.996 17.029 -0.435 L 18.333 0 Z M 24.444 5.958 C 25.204 5.958 25.819 5.343 25.819 4.583 C 25.819 3.824 25.204 3.208 24.444 3.208 L 24.444 4.583 L 24.444 5.958 Z M 6.422 12.063 C 5.663 12.063 5.047 12.679 5.047 13.438 C 5.047 14.198 5.663 14.813 6.422 14.813 L 6.422 13.438 L 6.422 12.063 Z M 12.533 8.855 L 13.838 8.42 C 13.651 7.859 13.125 7.48 12.533 7.48 C 11.941 7.48 11.416 7.859 11.229 8.42 L 12.533 8.855 Z M 24.756 8.855 L 26.06 8.42 C 25.873 7.859 25.347 7.48 24.756 7.48 C 24.164 7.48 23.638 7.859 23.451 8.42 L 24.756 8.855 Z M 30.867 14.813 C 31.626 14.813 32.242 14.198 32.242 13.438 C 32.242 12.679 31.626 12.063 30.867 12.063 L 30.867 13.438 L 30.867 14.813 Z M 0 4.583 L 0 5.958 C 2.252 5.958 3.977 5.01 5.186 3.862 C 6.372 2.736 7.097 1.39 7.416 0.435 L 6.111 0 L 4.807 -0.435 C 4.616 0.138 4.119 1.083 3.293 1.867 C 2.49 2.629 1.415 3.208 0 3.208 L 0 4.583 Z M 6.111 0 L 4.807 0.435 C 5.125 1.39 5.85 2.736 7.036 3.862 C 8.245 5.01 9.971 5.958 12.222 5.958 L 12.222 4.583 L 12.222 3.208 C 10.807 3.208 9.732 2.629 8.929 1.867 C 8.103 1.083 7.606 0.138 7.416 -0.435 L 6.111 0 Z M 12.222 4.583 L 12.222 5.958 C 14.474 5.958 16.199 5.01 17.409 3.862 C 18.594 2.736 19.319 1.39 19.638 0.435 L 18.333 0 L 17.029 -0.435 C 16.838 0.138 16.341 1.083 15.515 1.867 C 14.713 2.629 13.637 3.208 12.222 3.208 L 12.222 4.583 Z M 18.333 0 L 17.029 0.435 C 17.347 1.39 18.072 2.736 19.258 3.862 C 20.467 5.01 22.193 5.958 24.444 5.958 L 24.444 4.583 L 24.444 3.208 C 23.029 3.208 21.954 2.629 21.152 1.867 C 20.326 1.083 19.829 0.138 19.638 -0.435 L 18.333 0 Z M 6.422 13.438 L 6.422 14.813 C 9.311 14.813 11.14 13.948 12.28 12.612 C 13.321 11.392 13.65 9.854 13.838 9.29 L 12.533 8.855 L 11.229 8.42 C 10.908 9.383 10.777 10.137 10.189 10.827 C 9.699 11.4 8.728 12.063 6.422 12.063 L 6.422 13.438 Z M 12.533 8.855 L 11.229 9.29 C 11.547 10.245 12.272 11.591 13.458 12.717 C 14.667 13.865 16.393 14.813 18.644 14.813 L 18.644 13.438 L 18.644 12.063 C 17.229 12.063 16.154 11.484 15.352 10.722 C 14.526 9.938 14.029 8.993 13.838 8.42 L 12.533 8.855 Z M 18.644 13.438 L 18.644 14.813 C 20.896 14.813 22.622 13.865 23.831 12.717 C 25.016 11.591 25.742 10.245 26.06 9.29 L 24.756 8.855 L 23.451 8.42 C 23.26 8.993 22.763 9.938 21.937 10.722 C 21.135 11.484 20.059 12.063 18.644 12.063 L 18.644 13.438 Z M 24.756 8.855 L 23.451 9.29 C 23.77 10.245 24.495 11.591 25.68 12.717 C 26.889 13.865 28.615 14.813 30.867 14.813 L 30.867 13.438 L 30.867 12.063 C 29.452 12.063 28.376 11.484 27.574 10.722 C 26.748 9.938 26.251 8.993 26.06 8.42 L 24.756 8.855 Z",
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
  }, "\uC548\uB9C8\uB3C4"), /*#__PURE__*/React.createElement("span", {
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
    text1: "날씨",
    selected: "on"
  }))), /*#__PURE__*/React.createElement("div", {
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
  }, "\uC2DC\uAC04\uBCC4 \uB0A0\uC528")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
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
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 224,
      top: 0,
      width: 55,
      height: 169,
      backgroundColor: "rgb(241,248,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)"
    }
  }, "0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)",
      fontSize: 13.5
    }
  }, "시")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.500,
    viewBox: "0 0 21.500 21.500",
    fill: "none",
    style: {
      position: "relative",
      width: 21.5,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.75 18 C 11.164 18 11.5 18.336 11.5 18.75 L 11.5 20.75 C 11.5 21.164 11.164 21.5 10.75 21.5 C 10.336 21.5 10 21.164 10 20.75 L 10 18.75 C 10 18.336 10.336 18 10.75 18 Z M 3.86 16.58 C 4.153 16.287 4.629 16.287 4.922 16.58 C 5.214 16.873 5.214 17.348 4.922 17.641 L 4.211 18.352 C 4.064 18.497 3.873 18.57 3.681 18.57 C 3.489 18.57 3.297 18.497 3.15 18.352 C 2.857 18.059 2.857 17.583 3.15 17.29 L 3.86 16.58 Z M 16.58 16.58 C 16.873 16.287 17.348 16.287 17.641 16.58 L 18.351 17.29 C 18.644 17.583 18.644 18.059 18.351 18.352 C 18.204 18.497 18.012 18.57 17.82 18.57 C 17.628 18.57 17.437 18.497 17.29 18.352 L 16.58 17.641 C 16.287 17.348 16.287 16.873 16.58 16.58 Z M 6.685 6.685 C 8.925 4.443 12.572 4.442 14.816 6.685 C 17.058 8.926 17.058 12.574 14.816 14.815 C 13.695 15.936 12.222 16.498 10.751 16.498 C 9.278 16.498 7.805 15.936 6.685 14.815 C 4.443 12.574 4.443 8.926 6.685 6.685 Z M 2.75 10 C 3.164 10 3.5 10.336 3.5 10.75 C 3.5 11.164 3.164 11.5 2.75 11.5 L 0.75 11.5 C 0.336 11.5 0 11.164 0 10.75 C 0 10.336 0.336 10 0.75 10 L 2.75 10 Z M 20.75 10 C 21.164 10 21.5 10.336 21.5 10.75 C 21.5 11.164 21.164 11.5 20.75 11.5 L 18.75 11.5 C 18.336 11.5 18 11.164 18 10.75 C 18 10.336 18.336 10 18.75 10 L 20.75 10 Z M 3.15 3.148 C 3.443 2.857 3.918 2.857 4.211 3.148 L 4.922 3.859 C 5.214 4.152 5.214 4.627 4.922 4.92 C 4.775 5.066 4.584 5.14 4.391 5.14 C 4.199 5.14 4.006 5.066 3.86 4.92 L 3.15 4.21 C 2.857 3.917 2.857 3.441 3.15 3.148 Z M 17.29 3.149 C 17.583 2.856 18.058 2.856 18.351 3.149 C 18.644 3.442 18.644 3.917 18.351 4.21 L 17.641 4.92 C 17.495 5.067 17.302 5.14 17.11 5.14 C 16.918 5.14 16.726 5.067 16.58 4.92 C 16.287 4.627 16.287 4.152 16.58 3.859 L 17.29 3.149 Z M 10.75 0 C 11.164 0 11.5 0.336 11.5 0.75 L 11.5 2.75 C 11.5 3.164 11.164 3.5 10.75 3.5 C 10.336 3.5 10 3.164 10 2.75 L 10 0.75 C 10 0.336 10.336 0 10.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "26\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--brandcolor-primaryblue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "1mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Wind2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    prop: "s"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "4m/s"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)"
    }
  }, "2"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)",
      fontSize: 13.5
    }
  }, "시")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 19.568,
      height: 20.6,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.250,
    height: 13.649,
    viewBox: "0 0 18.250 13.649",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18.25,
      height: 13.649
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.233 11.904 C 1.613 11.75 2.053 11.933 2.21 12.318 C 2.365 12.702 2.179 13.14 1.795 13.296 L 1.054 13.595 C 0.962 13.633 0.867 13.649 0.773 13.649 C 0.477 13.649 0.196 13.472 0.078 13.181 C -0.078 12.798 0.108 12.359 0.491 12.204 L 1.233 11.904 Z M 7.019 4.605 C 8.96 3.868 11.047 4.213 12.607 5.533 C 13.954 6.675 14.594 8.347 14.281 9.898 C 14.197 10.306 5.357 13.714 5.228 13.627 C 4.007 12.799 3.334 10.984 3.551 9.11 C 3.797 6.995 5.061 5.352 7.019 4.605 Z M 0.894 6.937 L 1.68 7.09 C 2.086 7.169 2.351 7.564 2.273 7.97 C 2.202 8.328 1.889 8.576 1.537 8.576 C 1.49 8.576 1.442 8.571 1.393 8.563 L 0.607 8.409 C 0.201 8.33 -0.065 7.936 0.014 7.529 C 0.094 7.122 0.487 6.867 0.894 6.937 Z M 17.25 6.534 C 17.641 6.396 18.069 6.6 18.207 6.991 C 18.345 7.382 18.141 7.81 17.75 7.948 L 16.996 8.216 C 16.913 8.245 16.829 8.259 16.746 8.259 C 16.437 8.259 16.147 8.066 16.039 7.759 C 15.901 7.368 16.105 6.939 16.496 6.802 L 17.25 6.534 Z M 13.869 2.563 C 14.158 2.269 14.634 2.263 14.931 2.556 C 15.225 2.846 15.229 3.322 14.938 3.617 L 14.377 4.186 C 14.23 4.334 14.038 4.41 13.844 4.41 C 13.653 4.41 13.464 4.337 13.317 4.193 C 13.022 3.903 13.018 3.428 13.309 3.133 L 13.869 2.563 Z M 2.567 2.556 C 2.863 2.263 3.337 2.269 3.627 2.563 L 4.188 3.133 C 4.479 3.428 4.475 3.903 4.18 4.193 C 4.034 4.338 3.844 4.409 3.654 4.409 C 3.46 4.409 3.266 4.334 3.119 4.186 L 2.559 3.616 C 2.268 3.321 2.272 2.846 2.567 2.556 Z M 8.743 0 C 9.157 0 9.493 0.336 9.493 0.75 L 9.493 1.55 C 9.493 1.964 9.157 2.3 8.743 2.3 C 8.329 2.3 7.993 1.964 7.993 1.55 L 7.993 0.75 C 7.993 0.336 8.329 0 8.743 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.499,
    height: 11.600,
    viewBox: "0 0 17.499 11.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.069,
      top: 9,
      width: 17.499,
      height: 11.6,
      color: "var(--weather-cloud-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.84 11.6 L 4.098 11.6 C 1.838 11.6 0 9.758 0 7.494 C 0 5.229 1.838 3.387 4.098 3.387 C 4.407 3.387 4.706 3.418 4.99 3.481 C 5.684 1.446 7.633 0 9.84 0 C 12.396 0 14.56 1.934 14.918 4.419 C 16.425 4.884 17.499 6.3 17.499 7.934 C 17.499 9.955 15.858 11.6 13.84 11.6",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "27\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--brandcolor-primaryblue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "1mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Wind2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    prop: "sw"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "2m/s"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)"
    }
  }, "4"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)",
      fontSize: 13.5
    }
  }, "시")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 15.500,
    viewBox: "0 0 21.500 15.500",
    fill: "none",
    style: {
      position: "relative",
      height: 15.5,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--weather-cloud-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.75 15.5 L 5.75 15.5 C 2.579 15.5 0 12.921 0 9.75 C 0 7.054 1.915 4.724 4.523 4.154 C 5.564 1.652 8.012 0 10.75 0 C 14.237 0 17.114 2.658 17.464 6.054 C 19.746 6.399 21.5 8.374 21.5 10.75 C 21.5 13.369 19.369 15.5 16.75 15.5 L 16.75 15.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "28\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--brandcolor-primaryblue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "1mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Wind2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    prop: "w"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3m/s"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)"
    }
  }, "6"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)",
      fontSize: 13.5
    }
  }, "시")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 19.5,
      height: 18.5,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.5,
      height: 12.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.49959945678711,
      height: 12.5,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.500,
    height: 12.500,
    viewBox: "0 0 19.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.5,
      height: 12.5,
      color: "var(--weather-cloud-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.983 12.5 L 4.023 12.5 C 1.804 12.5 0 10.739 0 8.574 C 0 6.802 1.209 5.271 2.897 4.793 C 3.276 2.101 5.68 0 8.523 0 C 10.989 0 13.166 1.587 13.911 3.809 C 14.252 3.729 14.61 3.689 14.983 3.689 C 17.473 3.689 19.5 5.666 19.5 8.094 C 19.5 10.523 17.473 12.5 14.983 12.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 2.500,
    height: 3.500,
    viewBox: "0 0 2.500 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.75,
      top: 14,
      width: 2.5,
      height: 3.5,
      color: "var(--weather-rain-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 3.5 C 0.636 3.5 0.522 3.475 0.414 3.421 C 0.043 3.235 -0.106 2.785 0.079 2.415 L 1.079 0.415 C 1.265 0.044 1.715 -0.105 2.085 0.079 C 2.456 0.265 2.605 0.715 2.42 1.085 L 1.42 3.085 C 1.289 3.349 1.024 3.5 0.749 3.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.500,
    height: 3.500,
    viewBox: "0 0 2.500 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.749,
      top: 14,
      width: 2.5,
      height: 3.5,
      color: "var(--weather-rain-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 3.5 C 0.637 3.5 0.522 3.475 0.415 3.421 C 0.044 3.235 -0.106 2.785 0.079 2.415 L 1.079 0.415 C 1.266 0.044 1.714 -0.105 2.085 0.079 C 2.456 0.265 2.606 0.715 2.421 1.085 L 1.421 3.085 C 1.289 3.349 1.024 3.5 0.749 3.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.500,
    height: 3.500,
    viewBox: "0 0 2.500 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.75,
      top: 15,
      width: 2.5,
      height: 3.5,
      color: "var(--weather-rain-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 3.5 C 0.636 3.5 0.522 3.475 0.414 3.421 C 0.043 3.235 -0.106 2.785 0.079 2.415 L 1.079 0.415 C 1.264 0.044 1.715 -0.105 2.085 0.079 C 2.456 0.265 2.605 0.715 2.42 1.085 L 1.42 3.085 C 1.289 3.349 1.024 3.5 0.749 3.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.000,
    height: 2.500,
    viewBox: "0 0 2.000 2.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.749,
      top: 15,
      width: 2,
      height: 2.5,
      color: "var(--weather-rain-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 2.5 C 0.637 2.5 0.522 2.475 0.415 2.421 C 0.044 2.235 -0.106 1.785 0.079 1.415 L 0.579 0.415 C 0.766 0.044 1.215 -0.106 1.585 0.079 C 1.956 0.265 2.106 0.715 1.921 1.085 L 1.421 2.085 C 1.289 2.349 1.024 2.5 0.749 2.5",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "25\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--brandcolor-primaryblue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Wind2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    prop: "nw"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "2m/s"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "8\uC2DC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 19.5,
      height: 18.5,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.5,
      height: 12.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.49959945678711,
      height: 12.5,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.500,
    height: 12.500,
    viewBox: "0 0 19.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.5,
      height: 12.5,
      color: "var(--weather-cloud-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.983 12.5 L 4.023 12.5 C 1.804 12.5 0 10.739 0 8.574 C 0 6.802 1.209 5.271 2.897 4.793 C 3.276 2.101 5.68 0 8.523 0 C 10.989 0 13.166 1.587 13.911 3.809 C 14.252 3.729 14.61 3.689 14.983 3.689 C 17.473 3.689 19.5 5.666 19.5 8.094 C 19.5 10.523 17.473 12.5 14.983 12.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 2.500,
    height: 3.500,
    viewBox: "0 0 2.500 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.75,
      top: 14,
      width: 2.5,
      height: 3.5,
      color: "var(--weather-rain-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 3.5 C 0.636 3.5 0.522 3.475 0.414 3.421 C 0.043 3.235 -0.106 2.785 0.079 2.415 L 1.079 0.415 C 1.265 0.044 1.715 -0.105 2.085 0.079 C 2.456 0.265 2.605 0.715 2.42 1.085 L 1.42 3.085 C 1.289 3.349 1.024 3.5 0.749 3.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.500,
    height: 3.500,
    viewBox: "0 0 2.500 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.749,
      top: 14,
      width: 2.5,
      height: 3.5,
      color: "var(--weather-rain-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 3.5 C 0.637 3.5 0.522 3.475 0.415 3.421 C 0.044 3.235 -0.106 2.785 0.079 2.415 L 1.079 0.415 C 1.266 0.044 1.714 -0.105 2.085 0.079 C 2.456 0.265 2.606 0.715 2.421 1.085 L 1.421 3.085 C 1.289 3.349 1.024 3.5 0.749 3.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.500,
    height: 3.500,
    viewBox: "0 0 2.500 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.75,
      top: 15,
      width: 2.5,
      height: 3.5,
      color: "var(--weather-rain-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 3.5 C 0.636 3.5 0.522 3.475 0.414 3.421 C 0.043 3.235 -0.106 2.785 0.079 2.415 L 1.079 0.415 C 1.264 0.044 1.715 -0.105 2.085 0.079 C 2.456 0.265 2.605 0.715 2.42 1.085 L 1.42 3.085 C 1.289 3.349 1.024 3.5 0.749 3.5",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.000,
    height: 2.500,
    viewBox: "0 0 2.000 2.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.749,
      top: 15,
      width: 2,
      height: 2.5,
      color: "var(--weather-rain-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.749 2.5 C 0.637 2.5 0.522 2.475 0.415 2.421 C 0.044 2.235 -0.106 1.785 0.079 1.415 L 0.579 0.415 C 0.766 0.044 1.215 -0.106 1.585 0.079 C 1.956 0.265 2.106 0.715 1.921 1.085 L 1.421 2.085 C 1.289 2.349 1.024 2.5 0.749 2.5",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "21\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--brandcolor-primaryblue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Wind2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    prop: "n"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "1m/s"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)"
    }
  }, "10"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)",
      fontSize: 13.5
    }
  }, "시")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 15.500,
    viewBox: "0 0 21.500 15.500",
    fill: "none",
    style: {
      position: "relative",
      height: 15.5,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--weather-cloud-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.75 15.5 L 5.75 15.5 C 2.579 15.5 0 12.921 0 9.75 C 0 7.054 1.915 4.724 4.523 4.154 C 5.564 1.652 8.012 0 10.75 0 C 14.237 0 17.114 2.658 17.464 6.054 C 19.746 6.399 21.5 8.374 21.5 10.75 C 21.5 13.369 19.369 15.5 16.75 15.5 L 16.75 15.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "19\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--brandcolor-primaryblue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Wind2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    prop: "wwn"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3m/s"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)"
    }
  }, "12"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)",
      fontSize: 13.5
    }
  }, "시")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 15.500,
    viewBox: "0 0 21.500 15.500",
    fill: "none",
    style: {
      position: "relative",
      height: 15.5,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--weather-cloud-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.75 15.5 L 5.75 15.5 C 2.579 15.5 0 12.921 0 9.75 C 0 7.054 1.915 4.724 4.523 4.154 C 5.564 1.652 8.012 0 10.75 0 C 14.237 0 17.114 2.658 17.464 6.054 C 19.746 6.399 21.5 8.374 21.5 10.75 C 21.5 13.369 19.369 15.5 16.75 15.5 L 16.75 15.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "21\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--brandcolor-primaryblue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Wind2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    prop: "se"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "1m/s"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)"
    }
  }, "14"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)",
      fontSize: 13.5
    }
  }, "시")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 19.568,
      height: 20.6,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.250,
    height: 13.649,
    viewBox: "0 0 18.250 13.649",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18.25,
      height: 13.649
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.233 11.904 C 1.613 11.75 2.053 11.933 2.21 12.318 C 2.365 12.702 2.179 13.14 1.795 13.296 L 1.054 13.595 C 0.962 13.633 0.867 13.649 0.773 13.649 C 0.477 13.649 0.196 13.472 0.078 13.181 C -0.078 12.798 0.108 12.359 0.491 12.204 L 1.233 11.904 Z M 7.019 4.605 C 8.96 3.868 11.047 4.213 12.607 5.533 C 13.954 6.675 14.594 8.347 14.281 9.898 C 14.197 10.306 5.357 13.714 5.228 13.627 C 4.007 12.799 3.334 10.984 3.551 9.11 C 3.797 6.995 5.061 5.352 7.019 4.605 Z M 0.894 6.937 L 1.68 7.09 C 2.086 7.169 2.351 7.564 2.273 7.97 C 2.202 8.328 1.889 8.576 1.537 8.576 C 1.49 8.576 1.442 8.571 1.393 8.563 L 0.607 8.409 C 0.201 8.33 -0.065 7.936 0.014 7.529 C 0.094 7.122 0.487 6.867 0.894 6.937 Z M 17.25 6.534 C 17.641 6.396 18.069 6.6 18.207 6.991 C 18.345 7.382 18.141 7.81 17.75 7.948 L 16.996 8.216 C 16.913 8.245 16.829 8.259 16.746 8.259 C 16.437 8.259 16.147 8.066 16.039 7.759 C 15.901 7.368 16.105 6.939 16.496 6.802 L 17.25 6.534 Z M 13.869 2.563 C 14.158 2.269 14.634 2.263 14.931 2.556 C 15.225 2.846 15.229 3.322 14.938 3.617 L 14.377 4.186 C 14.23 4.334 14.038 4.41 13.844 4.41 C 13.653 4.41 13.464 4.337 13.317 4.193 C 13.022 3.903 13.018 3.428 13.309 3.133 L 13.869 2.563 Z M 2.567 2.556 C 2.863 2.263 3.337 2.269 3.627 2.563 L 4.188 3.133 C 4.479 3.428 4.475 3.903 4.18 4.193 C 4.034 4.338 3.844 4.409 3.654 4.409 C 3.46 4.409 3.266 4.334 3.119 4.186 L 2.559 3.616 C 2.268 3.321 2.272 2.846 2.567 2.556 Z M 8.743 0 C 9.157 0 9.493 0.336 9.493 0.75 L 9.493 1.55 C 9.493 1.964 9.157 2.3 8.743 2.3 C 8.329 2.3 7.993 1.964 7.993 1.55 L 7.993 0.75 C 7.993 0.336 8.329 0 8.743 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.499,
    height: 11.600,
    viewBox: "0 0 17.499 11.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.069,
      top: 9,
      width: 17.499,
      height: 11.6,
      color: "var(--weather-cloud-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.84 11.6 L 4.098 11.6 C 1.838 11.6 0 9.758 0 7.494 C 0 5.229 1.838 3.387 4.098 3.387 C 4.407 3.387 4.706 3.418 4.99 3.481 C 5.684 1.446 7.633 0 9.84 0 C 12.396 0 14.56 1.934 14.918 4.419 C 16.425 4.884 17.499 6.3 17.499 7.934 C 17.499 9.955 15.858 11.6 13.84 11.6",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "19\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--brandcolor-primaryblue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Wind2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    prop: "see"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3m/s"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)"
    }
  }, "16"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)",
      fontSize: 13.5
    }
  }, "시")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 19.568,
      height: 20.6,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.250,
    height: 13.649,
    viewBox: "0 0 18.250 13.649",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18.25,
      height: 13.649
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.233 11.904 C 1.613 11.75 2.053 11.933 2.21 12.318 C 2.365 12.702 2.179 13.14 1.795 13.296 L 1.054 13.595 C 0.962 13.633 0.867 13.649 0.773 13.649 C 0.477 13.649 0.196 13.472 0.078 13.181 C -0.078 12.798 0.108 12.359 0.491 12.204 L 1.233 11.904 Z M 7.019 4.605 C 8.96 3.868 11.047 4.213 12.607 5.533 C 13.954 6.675 14.594 8.347 14.281 9.898 C 14.197 10.306 5.357 13.714 5.228 13.627 C 4.007 12.799 3.334 10.984 3.551 9.11 C 3.797 6.995 5.061 5.352 7.019 4.605 Z M 0.894 6.937 L 1.68 7.09 C 2.086 7.169 2.351 7.564 2.273 7.97 C 2.202 8.328 1.889 8.576 1.537 8.576 C 1.49 8.576 1.442 8.571 1.393 8.563 L 0.607 8.409 C 0.201 8.33 -0.065 7.936 0.014 7.529 C 0.094 7.122 0.487 6.867 0.894 6.937 Z M 17.25 6.534 C 17.641 6.396 18.069 6.6 18.207 6.991 C 18.345 7.382 18.141 7.81 17.75 7.948 L 16.996 8.216 C 16.913 8.245 16.829 8.259 16.746 8.259 C 16.437 8.259 16.147 8.066 16.039 7.759 C 15.901 7.368 16.105 6.939 16.496 6.802 L 17.25 6.534 Z M 13.869 2.563 C 14.158 2.269 14.634 2.263 14.931 2.556 C 15.225 2.846 15.229 3.322 14.938 3.617 L 14.377 4.186 C 14.23 4.334 14.038 4.41 13.844 4.41 C 13.653 4.41 13.464 4.337 13.317 4.193 C 13.022 3.903 13.018 3.428 13.309 3.133 L 13.869 2.563 Z M 2.567 2.556 C 2.863 2.263 3.337 2.269 3.627 2.563 L 4.188 3.133 C 4.479 3.428 4.475 3.903 4.18 4.193 C 4.034 4.338 3.844 4.409 3.654 4.409 C 3.46 4.409 3.266 4.334 3.119 4.186 L 2.559 3.616 C 2.268 3.321 2.272 2.846 2.567 2.556 Z M 8.743 0 C 9.157 0 9.493 0.336 9.493 0.75 L 9.493 1.55 C 9.493 1.964 9.157 2.3 8.743 2.3 C 8.329 2.3 7.993 1.964 7.993 1.55 L 7.993 0.75 C 7.993 0.336 8.329 0 8.743 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.499,
    height: 11.600,
    viewBox: "0 0 17.499 11.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.069,
      top: 9,
      width: 17.499,
      height: 11.6,
      color: "var(--weather-cloud-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.84 11.6 L 4.098 11.6 C 1.838 11.6 0 9.758 0 7.494 C 0 5.229 1.838 3.387 4.098 3.387 C 4.407 3.387 4.706 3.418 4.99 3.481 C 5.684 1.446 7.633 0 9.84 0 C 12.396 0 14.56 1.934 14.918 4.419 C 16.425 4.884 17.499 6.3 17.499 7.934 C 17.499 9.955 15.858 11.6 13.84 11.6",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "19\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--brandcolor-primaryblue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Wind2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    prop: "see"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3m/s"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)"
    }
  }, "18"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)",
      fontSize: 13.5
    }
  }, "시")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.500,
    viewBox: "0 0 21.500 21.500",
    fill: "none",
    style: {
      position: "relative",
      width: 21.5,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.75 18 C 11.164 18 11.5 18.336 11.5 18.75 L 11.5 20.75 C 11.5 21.164 11.164 21.5 10.75 21.5 C 10.336 21.5 10 21.164 10 20.75 L 10 18.75 C 10 18.336 10.336 18 10.75 18 Z M 3.86 16.58 C 4.153 16.287 4.629 16.287 4.922 16.58 C 5.214 16.873 5.214 17.348 4.922 17.641 L 4.211 18.352 C 4.064 18.497 3.873 18.57 3.681 18.57 C 3.489 18.57 3.297 18.497 3.15 18.352 C 2.857 18.059 2.857 17.583 3.15 17.29 L 3.86 16.58 Z M 16.58 16.58 C 16.873 16.287 17.348 16.287 17.641 16.58 L 18.351 17.29 C 18.644 17.583 18.644 18.059 18.351 18.352 C 18.204 18.497 18.012 18.57 17.82 18.57 C 17.628 18.57 17.437 18.497 17.29 18.352 L 16.58 17.641 C 16.287 17.348 16.287 16.873 16.58 16.58 Z M 6.685 6.685 C 8.925 4.443 12.572 4.442 14.816 6.685 C 17.058 8.926 17.058 12.574 14.816 14.815 C 13.695 15.936 12.222 16.498 10.751 16.498 C 9.278 16.498 7.805 15.936 6.685 14.815 C 4.443 12.574 4.443 8.926 6.685 6.685 Z M 2.75 10 C 3.164 10 3.5 10.336 3.5 10.75 C 3.5 11.164 3.164 11.5 2.75 11.5 L 0.75 11.5 C 0.336 11.5 0 11.164 0 10.75 C 0 10.336 0.336 10 0.75 10 L 2.75 10 Z M 20.75 10 C 21.164 10 21.5 10.336 21.5 10.75 C 21.5 11.164 21.164 11.5 20.75 11.5 L 18.75 11.5 C 18.336 11.5 18 11.164 18 10.75 C 18 10.336 18.336 10 18.75 10 L 20.75 10 Z M 3.15 3.148 C 3.443 2.857 3.918 2.857 4.211 3.148 L 4.922 3.859 C 5.214 4.152 5.214 4.627 4.922 4.92 C 4.775 5.066 4.584 5.14 4.391 5.14 C 4.199 5.14 4.006 5.066 3.86 4.92 L 3.15 4.21 C 2.857 3.917 2.857 3.441 3.15 3.148 Z M 17.29 3.149 C 17.583 2.856 18.058 2.856 18.351 3.149 C 18.644 3.442 18.644 3.917 18.351 4.21 L 17.641 4.92 C 17.495 5.067 17.302 5.14 17.11 5.14 C 16.918 5.14 16.726 5.067 16.58 4.92 C 16.287 4.627 16.287 4.152 16.58 3.859 L 17.29 3.149 Z M 10.75 0 C 11.164 0 11.5 0.336 11.5 0.75 L 11.5 2.75 C 11.5 3.164 11.164 3.5 10.75 3.5 C 10.336 3.5 10 3.164 10 2.75 L 10 0.75 C 10 0.336 10.336 0 10.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "19\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--brandcolor-primaryblue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Wind2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    prop: "see"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3m/s"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)"
    }
  }, "20"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)",
      fontSize: 13.5
    }
  }, "시")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.500,
    viewBox: "0 0 21.500 21.500",
    fill: "none",
    style: {
      position: "relative",
      width: 21.5,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.75 18 C 11.164 18 11.5 18.336 11.5 18.75 L 11.5 20.75 C 11.5 21.164 11.164 21.5 10.75 21.5 C 10.336 21.5 10 21.164 10 20.75 L 10 18.75 C 10 18.336 10.336 18 10.75 18 Z M 3.86 16.58 C 4.153 16.287 4.629 16.287 4.922 16.58 C 5.214 16.873 5.214 17.348 4.922 17.641 L 4.211 18.352 C 4.064 18.497 3.873 18.57 3.681 18.57 C 3.489 18.57 3.297 18.497 3.15 18.352 C 2.857 18.059 2.857 17.583 3.15 17.29 L 3.86 16.58 Z M 16.58 16.58 C 16.873 16.287 17.348 16.287 17.641 16.58 L 18.351 17.29 C 18.644 17.583 18.644 18.059 18.351 18.352 C 18.204 18.497 18.012 18.57 17.82 18.57 C 17.628 18.57 17.437 18.497 17.29 18.352 L 16.58 17.641 C 16.287 17.348 16.287 16.873 16.58 16.58 Z M 6.685 6.685 C 8.925 4.443 12.572 4.442 14.816 6.685 C 17.058 8.926 17.058 12.574 14.816 14.815 C 13.695 15.936 12.222 16.498 10.751 16.498 C 9.278 16.498 7.805 15.936 6.685 14.815 C 4.443 12.574 4.443 8.926 6.685 6.685 Z M 2.75 10 C 3.164 10 3.5 10.336 3.5 10.75 C 3.5 11.164 3.164 11.5 2.75 11.5 L 0.75 11.5 C 0.336 11.5 0 11.164 0 10.75 C 0 10.336 0.336 10 0.75 10 L 2.75 10 Z M 20.75 10 C 21.164 10 21.5 10.336 21.5 10.75 C 21.5 11.164 21.164 11.5 20.75 11.5 L 18.75 11.5 C 18.336 11.5 18 11.164 18 10.75 C 18 10.336 18.336 10 18.75 10 L 20.75 10 Z M 3.15 3.148 C 3.443 2.857 3.918 2.857 4.211 3.148 L 4.922 3.859 C 5.214 4.152 5.214 4.627 4.922 4.92 C 4.775 5.066 4.584 5.14 4.391 5.14 C 4.199 5.14 4.006 5.066 3.86 4.92 L 3.15 4.21 C 2.857 3.917 2.857 3.441 3.15 3.148 Z M 17.29 3.149 C 17.583 2.856 18.058 2.856 18.351 3.149 C 18.644 3.442 18.644 3.917 18.351 4.21 L 17.641 4.92 C 17.495 5.067 17.302 5.14 17.11 5.14 C 16.918 5.14 16.726 5.067 16.58 4.92 C 16.287 4.627 16.287 4.152 16.58 3.859 L 17.29 3.149 Z M 10.75 0 C 11.164 0 11.5 0.336 11.5 0.75 L 11.5 2.75 C 11.5 3.164 11.164 3.5 10.75 3.5 C 10.336 3.5 10 3.164 10 2.75 L 10 0.75 C 10 0.336 10.336 0 10.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "19\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--brandcolor-primaryblue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Wind2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    prop: "see"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3m/s"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)"
    }
  }, "22"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(118,118,118)",
      fontSize: 13.5
    }
  }, "시")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 19.568,
      height: 20.6,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.250,
    height: 13.649,
    viewBox: "0 0 18.250 13.649",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18.25,
      height: 13.649
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.233 11.904 C 1.613 11.75 2.053 11.933 2.21 12.318 C 2.365 12.702 2.179 13.14 1.795 13.296 L 1.054 13.595 C 0.962 13.633 0.867 13.649 0.773 13.649 C 0.477 13.649 0.196 13.472 0.078 13.181 C -0.078 12.798 0.108 12.359 0.491 12.204 L 1.233 11.904 Z M 7.019 4.605 C 8.96 3.868 11.047 4.213 12.607 5.533 C 13.954 6.675 14.594 8.347 14.281 9.898 C 14.197 10.306 5.357 13.714 5.228 13.627 C 4.007 12.799 3.334 10.984 3.551 9.11 C 3.797 6.995 5.061 5.352 7.019 4.605 Z M 0.894 6.937 L 1.68 7.09 C 2.086 7.169 2.351 7.564 2.273 7.97 C 2.202 8.328 1.889 8.576 1.537 8.576 C 1.49 8.576 1.442 8.571 1.393 8.563 L 0.607 8.409 C 0.201 8.33 -0.065 7.936 0.014 7.529 C 0.094 7.122 0.487 6.867 0.894 6.937 Z M 17.25 6.534 C 17.641 6.396 18.069 6.6 18.207 6.991 C 18.345 7.382 18.141 7.81 17.75 7.948 L 16.996 8.216 C 16.913 8.245 16.829 8.259 16.746 8.259 C 16.437 8.259 16.147 8.066 16.039 7.759 C 15.901 7.368 16.105 6.939 16.496 6.802 L 17.25 6.534 Z M 13.869 2.563 C 14.158 2.269 14.634 2.263 14.931 2.556 C 15.225 2.846 15.229 3.322 14.938 3.617 L 14.377 4.186 C 14.23 4.334 14.038 4.41 13.844 4.41 C 13.653 4.41 13.464 4.337 13.317 4.193 C 13.022 3.903 13.018 3.428 13.309 3.133 L 13.869 2.563 Z M 2.567 2.556 C 2.863 2.263 3.337 2.269 3.627 2.563 L 4.188 3.133 C 4.479 3.428 4.475 3.903 4.18 4.193 C 4.034 4.338 3.844 4.409 3.654 4.409 C 3.46 4.409 3.266 4.334 3.119 4.186 L 2.559 3.616 C 2.268 3.321 2.272 2.846 2.567 2.556 Z M 8.743 0 C 9.157 0 9.493 0.336 9.493 0.75 L 9.493 1.55 C 9.493 1.964 9.157 2.3 8.743 2.3 C 8.329 2.3 7.993 1.964 7.993 1.55 L 7.993 0.75 C 7.993 0.336 8.329 0 8.743 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.499,
    height: 11.600,
    viewBox: "0 0 17.499 11.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.069,
      top: 9,
      width: 17.499,
      height: 11.6,
      color: "var(--weather-cloud-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.84 11.6 L 4.098 11.6 C 1.838 11.6 0 9.758 0 7.494 C 0 5.229 1.838 3.387 4.098 3.387 C 4.407 3.387 4.706 3.418 4.99 3.481 C 5.684 1.446 7.633 0 9.84 0 C 12.396 0 14.56 1.934 14.918 4.419 C 16.425 4.884 17.499 6.3 17.499 7.934 C 17.499 9.955 15.858 11.6 13.84 11.6",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "19\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--brandcolor-primaryblue)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Wind2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    prop: "see"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-secondary-76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3m/s"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-4-f3f3f3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))))), /*#__PURE__*/React.createElement("div", {
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
  }, "\uC8FC\uAC04 \uB0A0\uC528")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--gray-whiteff)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      backgroundColor: "var(--gray-whiteff)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 88,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "6.16"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "\uD654")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(IconWeather, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    variant: "sunny"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement(IconWind, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(26,26,26)"
    },
    variant: "wind",
    fill: "false"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "4.2m/s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(118,118,118)"
    }
  }, /*#__PURE__*/React.createElement(IconWater, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(118,118,118)"
    },
    variant: "water",
    fill: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--accent-blue)",
      flexShrink: 0
    }
  }, "16%")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 58,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "right",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(74,134,254)",
      fontSize: 15
    }
  }, "22"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(204,204,204)",
      fontSize: 15
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(240,38,42)",
      fontSize: 15
    }
  }, "32°"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      backgroundColor: "var(--gray-whiteff)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 0px 6px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 88,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "6.17"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "\uC218")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(IconWeather, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    variant: "a-little-cloud"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement(IconWind, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(26,26,26)"
    },
    variant: "wind",
    fill: "false"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "2.4m/s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(118,118,118)"
    }
  }, /*#__PURE__*/React.createElement(IconWater, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(118,118,118)"
    },
    variant: "water",
    fill: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--accent-blue)",
      flexShrink: 0
    }
  }, "24%")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 58,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "right",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(74,134,254)",
      fontSize: 15
    }
  }, "21"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(204,204,204)",
      fontSize: 15
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(240,38,42)",
      fontSize: 15
    }
  }, "31°"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      backgroundColor: "var(--gray-whiteff)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 0px 6px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 88,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "6.18"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "\uBAA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(IconWeather, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    variant: "gradually-cloudy-and-rain"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement(IconWind, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(26,26,26)"
    },
    variant: "wind",
    fill: "false"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "3.5m/s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(118,118,118)"
    }
  }, /*#__PURE__*/React.createElement(IconWater, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(118,118,118)"
    },
    variant: "water",
    fill: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--accent-blue)",
      flexShrink: 0
    }
  }, "87%")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 58,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "right",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(74,134,254)",
      fontSize: 15
    }
  }, "22"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(204,204,204)",
      fontSize: 15
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(240,38,42)",
      fontSize: 15
    }
  }, "33°"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      backgroundColor: "var(--gray-whiteff)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 0px 6px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 88,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "6.19"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "\uAE08")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(IconWeather, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    variant: "clear-after-rain"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement(IconWind, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(26,26,26)"
    },
    variant: "wind",
    fill: "false"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "1.8m/s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(118,118,118)"
    }
  }, /*#__PURE__*/React.createElement(IconWater, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(118,118,118)"
    },
    variant: "water",
    fill: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--accent-blue)",
      flexShrink: 0
    }
  }, "84%")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 58,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "right",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(74,134,254)",
      fontSize: 15
    }
  }, "23"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(204,204,204)",
      fontSize: 15
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(240,38,42)",
      fontSize: 15
    }
  }, "28°"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      backgroundColor: "var(--gray-whiteff)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 0px 6px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 88,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "6.20"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(IconWeather, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    variant: "a-little-cloud"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement(IconWind, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(26,26,26)"
    },
    variant: "wind",
    fill: "false"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "1.6m/s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(118,118,118)"
    }
  }, /*#__PURE__*/React.createElement(IconWater, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(118,118,118)"
    },
    variant: "water",
    fill: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--accent-blue)",
      flexShrink: 0
    }
  }, "37%")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 58,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "right",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(74,134,254)",
      fontSize: 15
    }
  }, "21"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(204,204,204)",
      fontSize: 15
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(240,38,42)",
      fontSize: 15
    }
  }, "30°"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      backgroundColor: "var(--gray-whiteff)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 0px 6px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 88,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "6.21"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "\uC77C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(IconWeather, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    variant: "a-little-cloud"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement(IconWind, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(26,26,26)"
    },
    variant: "wind",
    fill: "false"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "2.4m/s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(118,118,118)"
    }
  }, /*#__PURE__*/React.createElement(IconWater, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(118,118,118)"
    },
    variant: "water",
    fill: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--accent-blue)",
      flexShrink: 0
    }
  }, "32%")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 58,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "right",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(74,134,254)",
      fontSize: 15
    }
  }, "19"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(204,204,204)",
      fontSize: 15
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(240,38,42)",
      fontSize: 15
    }
  }, "29°"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      backgroundColor: "var(--gray-whiteff)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 0px 6px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 88,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "6.22"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0
    }
  }, "\uC6D4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(IconWeather, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    variant: "a-little-cloud"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement(IconWind, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(26,26,26)"
    },
    variant: "wind",
    fill: "false"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "2.5m/s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(118,118,118)"
    }
  }, /*#__PURE__*/React.createElement(IconWater, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(118,118,118)"
    },
    variant: "water",
    fill: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--accent-blue)",
      flexShrink: 0
    }
  }, "14%")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 58,
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "right",
      lineHeight: "100%",
      color: "rgb(54,54,54)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(74,134,254)",
      fontSize: 15
    }
  }, "18"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(204,204,204)",
      fontSize: 15
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(238,238,238)",
      fontSize: 15
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(240,38,42)",
      fontSize: 15
    }
  }, "30°"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
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
  }, "\uD30C\uACE0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-f5b712fd166deb43-2716ef71",
    style: {
      position: "relative",
      height: 131,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-f5b712fd166deb43-9fc01195",
    style: {
      position: "relative",
      width: 133,
      height: 27,
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "0px 0px 60px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
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
      color: "var(--label-neutral-gray6-aa)",
      flexGrow: 1
    }
  }, "\uC2DC\uAC04"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexGrow: 1
    }
  }, "\uD48D\uD5A5"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexGrow: 1
    }
  }, "\uD48D\uC18D"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexGrow: 1
    }
  }, "\uD30C\uD5A5"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexGrow: 1
    }
  }, "\uD30C\uACE0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray6-aa)",
      flexGrow: 1
    }
  }, "\uC8FC\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "rgb(26,26,26)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "14px 0px 14px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "00\uC2DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uBD81\uD48D"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "2.0m/s"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uBD81"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "0.5m"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "4s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-neutral-neutral1)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 0px 14px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "03\uC2DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uB0A8\uB3D9\uD48D"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "4.0m/s"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uB0A8\uB3D9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "0.9m"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "7s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "14px 0px 14px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "06\uC2DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uC11C\uD48D"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "5.0m/s"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uC11C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "1.2m"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "6s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-neutral-neutral1)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 0px 14px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "09\uC2DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uBD81\uB3D9\uD48D"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "4.3m/s"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uBD81\uB3D9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "1.3m"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "5s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "14px 0px 14px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "12\uC2DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uB0A8\uD48D"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "2.4m/s"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uB0A8"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "1.2m"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "4s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-neutral-neutral1)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 0px 14px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "15\uC2DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uBD81\uC11C\uD48D"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "3.7m/s"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uBD81\uC11C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "1.0m"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "7s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "14px 0px 14px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "18\uC2DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uB3D9\uD48D"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "4.9m/s"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uB3D9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "0.6m"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "6s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-neutral-neutral1)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 0px 14px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "21\uC2DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uB0A8\uC11C\uD48D"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "4.6m/s"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uB0A8\uC11C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "0.8m"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "5s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-3-eeeeee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 758,
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
      backgroundColor: "var(--background-neutral-neutral0)",
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
  }, "85")))))));
}

// figma node: 928:7521 Fade Gradient (4 variants)
const __venc_FadeGradient = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_FadeGradient = p => "prop=" + __venc_FadeGradient(p.prop);
function FadeGradient(_p = {}) {
  const props = {
    ..._p,
    prop: _p.prop ?? "bottom"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      overflow: "hidden",
      background: "linear-gradient(180deg, rgba(255,255,255,0) 50.00%, rgba(255,255,255,0.3) 70.00%, rgba(255,255,255,0.75) 85.00%, rgb(255,255,255) 100.00%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  });
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100,
      height: 100,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100,
      height: 100,
      backgroundColor: "rgb(255,255,255)"
    }
  })));
  const __impls = {
    // figma: 속성 1=Top
    "prop=top": __body0,
    // figma: 속성 1=Bottom
    "prop=bottom": __body1,
    // figma: 속성 1=Left
    "prop=left": __body1,
    // figma: 속성 1=Right
    "prop=right": __body1
  };
  return (__impls[__vkey_FadeGradient(props)] ?? __body1)();
}

// figma node: 857:24606 splash
function Splash(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 852,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -66,
      top: 0,
      width: 525,
      height: 852,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 525,
      height: 852,
      overflow: "hidden",
      background: "linear-gradient(rgb(232,232,232),rgb(232,232,232)), linear-gradient(rgb(85,11,154),rgb(85,11,154))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-66324d1bcfd5b8e7",
    style: {
      position: "absolute",
      left: 56,
      top: 183,
      width: 417,
      height: 642
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 201,
      top: 150,
      width: 122,
      height: 20,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "21px",
      color: "var(--label-primary-primary)"
    }
  }, "\uC2E0\uB098\uB294 \uD53C\uC2F1\uB77C\uC774\uD504"), /*#__PURE__*/React.createElement("svg", {
    width: 173,
    height: 44.708,
    viewBox: "0 0 173 44.708",
    fill: "none",
    style: {
      position: "absolute",
      left: 176,
      top: 92.292,
      width: 173,
      height: 44.708,
      color: "rgb(50,0,140)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.036 25.634 L 29.036 15.308 L 18.831 15.308 L 18.831 10.57 L 29.036 10.57 L 29.036 0 L 34.017 0 L 34.017 25.634 L 29.036 25.634 Z M 7.289 24.784 C 3.28 24.784 0 21.625 0 17.616 C 0 13.607 3.28 10.327 7.289 10.327 C 11.298 10.327 14.579 13.607 14.579 17.616 C 14.579 21.625 11.298 24.784 7.289 24.784 Z M 7.289 15.308 C 6.074 15.308 4.981 16.522 4.981 17.737 C 4.981 18.952 6.074 20.167 7.289 20.167 C 8.504 20.167 9.719 19.074 9.719 17.737 C 9.719 16.401 8.626 15.308 7.289 15.308 Z M 63.903 25.634 L 63.903 0 L 68.884 0 L 68.884 10.57 L 77.388 10.57 L 77.388 15.308 L 68.884 15.308 L 68.884 25.634 L 63.903 25.634 Z M 39.484 25.634 L 39.484 5.224 L 44.343 5.224 L 44.343 11.906 L 51.147 11.906 L 51.147 5.224 L 56.006 5.224 L 56.006 25.634 L 39.484 25.634 Z M 51.147 20.896 L 51.147 16.765 L 44.343 16.765 L 44.343 20.896 L 51.147 20.896 Z M 84.799 44.708 L 90.874 39.119 L 97.07 44.708 L 100.35 41.185 L 93.425 34.867 L 93.425 25.756 L 104.359 25.756 L 104.359 21.018 L 77.388 21.018 L 77.388 25.756 L 88.444 25.756 L 88.444 34.867 L 81.519 41.063 L 84.799 44.708 Z M 90.874 15.915 C 86.864 15.915 83.584 12.756 83.584 8.747 C 83.584 4.738 86.864 1.458 90.874 1.458 C 94.883 1.458 98.163 4.738 98.163 8.747 C 98.163 12.756 94.883 15.915 90.874 15.915 Z M 90.874 6.439 C 89.659 6.439 88.565 7.532 88.565 8.869 C 88.565 10.205 89.659 11.298 90.874 11.298 C 92.088 11.298 93.303 10.084 93.303 8.869 C 93.303 7.654 92.21 6.439 90.874 6.439 Z M 132.544 25.634 L 132.544 0 L 137.525 0 L 137.525 25.634 L 132.544 25.634 Z M 106.667 25.634 L 106.667 20.896 L 109.704 20.896 L 109.704 15.308 L 106.667 15.308 L 106.667 10.57 L 127.077 10.57 L 127.077 15.308 L 124.162 15.308 L 124.162 20.896 L 127.077 20.896 L 127.077 25.634 L 106.667 25.634 Z M 119.18 20.896 L 119.18 15.308 L 114.564 15.308 L 114.564 20.896 L 119.18 20.896 Z M 165.589 44.586 C 161.58 44.586 158.3 41.428 158.3 37.419 C 158.3 33.409 161.58 30.129 165.589 30.129 C 169.598 30.129 172.879 33.409 172.879 37.419 C 172.879 41.428 169.598 44.586 165.589 44.586 Z M 165.589 35.11 C 164.374 35.11 163.281 36.325 163.281 37.54 C 163.281 38.755 164.374 39.97 165.589 39.97 C 166.804 39.97 168.019 38.755 168.019 37.54 C 168.019 36.325 166.926 35.11 165.589 35.11 Z M 168.019 25.634 L 168.019 0 L 173 0 L 173 25.634 L 168.019 25.634 Z M 141.656 21.868 L 148.581 15.672 L 148.581 8.626 L 153.562 8.626 L 153.562 15.672 L 160.487 21.989 L 157.206 25.634 L 151.011 20.046 L 144.936 25.634 L 141.656 21.989 L 141.656 21.868 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 772,
      width: 393,
      height: 80,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement(FadeGradient, {
    style: {
      position: "absolute",
      left: 0,
      top: 472,
      width: 393,
      height: 300
    },
    prop: "top"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 581,
      width: 353,
      display: "flex",
      flexDirection: "column",
      gap: 15,
      justifyContent: "flex-end",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      justifyContent: "flex-end",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(254,229,0)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23,
      top: 15.5,
      width: 20.255,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.249,
    height: 18.997,
    viewBox: "0 0 20.249 18.997",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20.249,
      height: 18.997,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.127 0 C 4.535 0 0 3.522 0 7.86 C 0 10.561 1.755 12.94 4.422 14.358 L 3.297 18.482 C 3.196 18.848 3.612 19.135 3.933 18.927 L 8.856 15.658 C 9.272 15.697 9.694 15.72 10.122 15.72 C 15.714 15.72 20.249 12.198 20.249 7.86 C 20.249 3.522 15.72 0 10.127 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(25,25,25)",
      flexShrink: 0
    }
  }, "\uCE74\uCE74\uC624\uB85C \uC2DC\uC791\uD558\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colblack00-2)",
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
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--cowhiteff-2)",
      flexShrink: 0
    }
  }, "Apple\uB85C \uC2DC\uC791\uD558\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23,
      top: 15,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 19.649,
    viewBox: "0 0 16 19.649",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 16,
      height: 19.649,
      color: "var(--cowhiteff-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.895 4.749 C 12.532 4.777 14.331 5.013 15.485 6.702 C 15.394 6.758 13.341 7.952 13.363 10.438 C 13.389 13.414 15.971 14.405 16 14.415 C 15.977 14.486 15.584 15.826 14.638 17.212 C 13.821 18.405 12.972 19.599 11.634 19.627 C 10.317 19.647 9.892 18.843 8.39 18.843 C 6.885 18.843 6.414 19.599 5.167 19.647 C 3.876 19.695 2.894 18.355 2.069 17.161 C 0.378 14.723 -0.91 10.268 0.822 7.261 C 1.682 5.771 3.217 4.823 4.889 4.8 C 6.156 4.775 7.355 5.652 8.131 5.652 C 8.905 5.652 10.363 4.595 11.895 4.749 Z M 11.911 0 C 12.039 1.151 11.576 2.306 10.888 3.136 C 10.204 3.968 9.075 4.613 7.975 4.529 C 7.823 3.404 8.382 2.226 9.019 1.487 C 9.726 0.66 10.924 0.038 11.911 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--colblack36-2)",
      flexShrink: 0
    }
  }, "\uB2E4\uB978 \uBC29\uBC95\uC73C\uB85C \uB85C\uADF8\uC778")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "\uB458\uB7EC\uBCF4\uAE30")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
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

// figma node: 857:24707 로그인_black
function Black(_p = {}) {
  const props = _p;
  return null;
}

// figma node: 3:9522 quick-flag (2 variants)
const __venc_QuickFlag = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_QuickFlag = p => "prop=" + __venc_QuickFlag(p.prop);
function QuickFlag(_p = {}) {
  const props = {
    ..._p,
    prop: _p.prop ?? "hot"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 61,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 15px 0px 15px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 13,
      borderRadius: 100,
      backgroundColor: "var(--old-colpointorange1)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6.500px 0.500px 6.500px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,-0.208,0.978,7.955,2.826)",
      transformOrigin: "0 0",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "hot")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 61,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 15px 0px 15px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 13,
      borderRadius: 100,
      backgroundColor: "rgb(253,229,0)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4.800px 1.300px 5px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,-0.208,0.978,6.455,2.426)",
      transformOrigin: "0 0",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--old-primaryblue)",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "new")));
  const __impls = {
    // figma: 속성 1=hot
    "prop=hot": __body0,
    // figma: 속성 1=new
    "prop=new": __body1
  };
  return (__impls[__vkey_QuickFlag(props)] ?? __body0)();
}

// figma node: 3:9529 Home Quick
function HomeQuick(_p = {}) {
  const props = {
    ..._p,
    showFlag: _p.showFlag ?? true
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 9,
      alignItems: "center",
      position: "relative",
      color: "var(--old-primaryblue)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 61,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(248,248,248)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 61,
    height: 61,
    viewBox: "0 0 61 61",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 61,
      height: 61
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 61 L 61 61 L 61 0 L 0 0 L 0 61 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(102,102,102)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "선박예약"), props.showFlag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 54,
      width: 61
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(QuickFlag, {
    prop: "hot"
  })));
}

// figma node: 1054:9557 Quick Menu Icon
function QuickMenuIcon(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 333,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 13,
      padding: "0px 18px 0px 18px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(HomeQuick, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    showFlag: false,
    text1: "주꾸미배"
  }), /*#__PURE__*/React.createElement(HomeQuick, {
    style: {
      position: "relative",
      flexShrink: 0,
      color: "rgb(0,65,255)"
    },
    showFlag: false,
    text1: "인기선박"
  }), /*#__PURE__*/React.createElement(HomeQuick, {
    style: {
      position: "relative",
      flexShrink: 0,
      color: "rgb(0,65,255)"
    },
    showFlag: false,
    text1: "쭈갑필수템"
  }), /*#__PURE__*/React.createElement(HomeQuick, {
    style: {
      position: "relative",
      flexShrink: 0,
      color: "rgb(0,65,255)"
    },
    showFlag: false,
    text1: "이달의신상"
  }), /*#__PURE__*/React.createElement(HomeQuick, {
    style: {
      position: "relative",
      flexShrink: 0,
      color: "rgb(0,65,255)"
    },
    showFlag: false,
    text1: "출석체크"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 13,
      padding: "0px 18px 0px 18px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(HomeQuick, {
    style: {
      position: "relative",
      flexShrink: 0,
      color: "rgb(0,65,255)"
    },
    showFlag: false,
    text1: "이벤트"
  }), /*#__PURE__*/React.createElement(HomeQuick, {
    style: {
      position: "relative",
      flexShrink: 0,
      color: "rgb(0,65,255)"
    },
    showFlag: false,
    text1: "인기글"
  }), /*#__PURE__*/React.createElement(HomeQuick, {
    style: {
      position: "relative",
      flexShrink: 0,
      color: "rgb(0,65,255)"
    },
    showFlag: false,
    text1: "포인트맵"
  }), /*#__PURE__*/React.createElement(HomeQuick, {
    style: {
      position: "relative",
      flexShrink: 0,
      color: "rgb(0,65,255)"
    },
    showFlag: false,
    text1: "챌린지"
  }), /*#__PURE__*/React.createElement(HomeQuick, {
    style: {
      position: "relative",
      flexShrink: 0,
      color: "rgb(0,65,255)"
    },
    showFlag: false,
    text1: "낚시대회"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 86,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(HomeQuick, {
    style: {
      position: "absolute",
      left: 18,
      top: 0,
      color: "rgb(0,65,255)"
    },
    showFlag: false,
    text1: "최신조황"
  }), /*#__PURE__*/React.createElement(HomeQuick, {
    style: {
      position: "absolute",
      left: 92,
      top: 0,
      color: "rgb(0,65,255)"
    },
    showFlag: false,
    text1: "주말선박"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 166,
      top: 198,
      width: 61,
      height: 61,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.5,
      top: 10.356,
      width: 30,
      height: 40.27
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 240,
      top: 198,
      width: 61,
      height: 61,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b5fdb0d417974c3c",
    style: {
      position: "absolute",
      left: 9,
      top: 12.626,
      width: 43,
      height: 36.267
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 0,
      width: 61,
      height: 61,
      overflow: "hidden",
      backgroundColor: "var(--background-neutral-neutral0)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 61.000,
    height: 15.500,
    viewBox: "0 0 61.000 15.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 45.5,
      width: 61,
      height: 15.5,
      color: "rgb(153,201,224)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 21.5 4 L 52 4.5 L 61 2.5 L 61 15.5 L 0 15.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-f0eba8a1c011734a",
    style: {
      position: "absolute",
      left: -11,
      top: 2,
      width: 82,
      height: 64
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 92,
      top: 0,
      width: 61,
      height: 61,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d1d99f09f684e1f1",
    style: {
      position: "absolute",
      left: 6.98,
      top: 15.877,
      width: 47,
      height: 29.413
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 166,
      top: 0,
      width: 61,
      height: 61,
      overflow: "hidden",
      backgroundColor: "var(--background-neutral-neutral0)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 47,
      height: 26
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 47.000,
    height: 26.000,
    viewBox: "0 0 47.000 26.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 47,
      height: 26,
      color: "rgb(182,146,88)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.95 9.621 C 3.022 9.526 3.093 9.431 3.166 9.337 C 3.325 9.134 3.491 8.936 3.669 8.748 C 3.771 8.64 3.864 8.523 3.962 8.41 C 4.056 8.301 4.153 8.195 4.244 8.083 C 4.328 7.98 4.413 7.875 4.486 7.763 C 4.582 7.617 4.69 7.48 4.825 7.37 C 5.105 7.142 5.34 6.874 5.564 6.595 C 5.617 6.529 5.679 6.471 5.742 6.415 C 5.802 6.362 5.852 6.302 5.89 6.231 C 5.945 6.126 6.002 6.021 6.062 5.918 C 6.112 5.833 6.169 5.752 6.224 5.669 C 6.332 5.502 6.469 5.358 6.584 5.196 C 6.855 4.817 7.202 4.526 7.61 4.304 C 7.658 4.278 7.704 4.249 7.75 4.22 C 7.758 4.216 7.761 4.204 7.769 4.192 C 7.673 4.131 7.617 4.039 7.577 3.936 C 7.362 3.386 7.31 2.831 7.526 2.267 C 7.574 2.141 7.637 2.024 7.717 1.915 C 7.945 1.605 8.212 1.332 8.532 1.115 C 8.791 0.939 9.058 0.776 9.354 0.665 C 9.409 0.644 9.462 0.616 9.517 0.592 C 9.585 0.561 9.656 0.539 9.733 0.543 C 9.767 0.544 9.802 0.537 9.835 0.53 C 10.084 0.476 10.337 0.457 10.59 0.435 C 10.725 0.423 10.859 0.437 10.99 0.473 C 11.223 0.536 11.439 0.632 11.58 0.847 C 11.603 0.835 11.621 0.827 11.637 0.817 C 11.894 0.655 12.169 0.525 12.444 0.399 C 12.763 0.253 13.099 0.166 13.442 0.104 C 13.692 0.058 13.944 0.031 14.197 0.01 C 14.578 -0.021 14.951 0.022 15.322 0.109 C 15.618 0.179 15.902 0.281 16.18 0.404 C 16.443 0.52 16.673 0.681 16.879 0.879 C 17.082 1.076 17.276 1.283 17.454 1.504 C 17.693 1.803 17.854 2.142 17.957 2.508 C 17.993 2.636 18.016 2.768 18.046 2.899 C 18.054 2.931 18.067 2.961 18.077 2.993 C 18.169 2.95 18.251 2.9 18.339 2.874 C 18.448 2.842 18.563 2.829 18.676 2.812 C 18.72 2.805 18.765 2.805 18.81 2.807 C 19.118 2.824 19.426 2.838 19.733 2.862 C 20.017 2.884 20.292 2.953 20.568 3.016 C 21.813 3.298 23.012 3.72 24.196 4.187 C 25.011 4.509 25.754 4.956 26.447 5.488 C 27.079 5.972 27.675 6.499 28.242 7.057 C 28.338 7.152 28.442 7.234 28.558 7.304 C 28.893 7.509 29.239 7.694 29.591 7.868 C 30.054 8.096 30.519 8.322 30.982 8.551 C 31.496 8.806 31.979 9.111 32.43 9.464 C 32.662 9.645 32.864 9.858 33.052 10.083 C 33.097 10.136 33.141 10.19 33.183 10.246 C 33.377 10.505 33.626 10.7 33.904 10.859 C 34.051 10.943 34.196 11.029 34.344 11.111 C 34.74 11.332 35.075 11.623 35.358 11.976 C 35.47 12.116 35.59 12.248 35.71 12.381 C 35.863 12.552 36.036 12.701 36.219 12.839 C 36.322 12.917 36.427 12.993 36.529 13.072 C 36.775 13.263 37.049 13.4 37.345 13.495 C 37.695 13.608 38.046 13.716 38.397 13.827 C 38.786 13.949 39.172 14.078 39.546 14.243 C 40.116 14.495 40.619 14.845 41.05 15.296 C 41.287 15.544 41.511 15.803 41.719 16.076 C 42.03 16.485 42.388 16.849 42.771 17.19 C 42.968 17.365 43.156 17.55 43.349 17.729 C 43.516 17.884 43.682 18.042 43.872 18.171 C 44 18.257 44.128 18.343 44.258 18.424 C 44.824 18.775 45.39 19.126 45.931 19.515 C 46.116 19.648 46.297 19.789 46.469 19.94 C 46.756 20.191 46.921 20.513 46.974 20.891 C 46.975 20.901 46.974 20.911 46.977 20.921 C 47.022 21.12 47.001 21.306 46.928 21.501 C 46.854 21.698 46.776 21.888 46.654 22.06 C 46.594 22.145 46.533 22.23 46.462 22.306 C 46.335 22.445 46.205 22.583 46.067 22.711 C 45.932 22.836 45.787 22.949 45.643 23.063 C 45.577 23.115 45.506 23.164 45.431 23.202 C 45.139 23.355 44.83 23.465 44.504 23.517 C 44.353 23.542 44.197 23.54 44.043 23.541 C 43.899 23.542 43.754 23.531 43.61 23.526 C 43.539 23.523 43.474 23.506 43.412 23.47 C 43.375 23.448 43.346 23.465 43.335 23.507 C 43.324 23.545 43.314 23.584 43.308 23.623 C 43.277 23.805 43.209 23.975 43.134 24.143 C 42.972 24.512 42.744 24.845 42.545 25.194 C 42.501 25.271 42.457 25.349 42.42 25.429 C 42.287 25.72 42.059 25.894 41.756 25.981 C 41.651 26.01 41.551 26.004 41.448 25.97 C 41.089 25.852 40.89 25.605 40.846 25.234 C 40.833 25.131 40.829 25.026 40.833 24.922 C 40.845 24.655 40.864 24.388 40.896 24.122 C 40.948 23.693 40.987 23.263 40.968 22.83 C 40.959 22.622 40.963 22.412 40.916 22.208 C 40.88 22.049 40.831 21.893 40.786 21.736 C 40.771 21.681 40.737 21.646 40.686 21.614 C 40.245 21.336 39.764 21.15 39.267 21.003 C 38.767 20.854 38.262 20.722 37.748 20.627 C 37.404 20.564 37.057 20.537 36.708 20.569 C 36.485 20.589 36.262 20.609 36.04 20.635 C 35.837 20.659 35.639 20.707 35.446 20.775 C 35.413 20.787 35.379 20.793 35.331 20.806 C 35.257 20.934 35.178 21.071 35.099 21.207 C 34.928 21.504 34.759 21.801 34.585 22.096 C 34.354 22.487 34.071 22.837 33.743 23.152 C 33.391 23.489 32.986 23.728 32.527 23.884 C 32.077 24.036 31.616 24.089 31.144 24.025 C 30.952 23.999 30.759 23.976 30.571 23.929 C 30.009 23.791 29.557 23.479 29.207 23.024 C 29.068 22.843 28.94 22.653 28.823 22.457 C 28.628 22.128 28.413 21.812 28.177 21.511 C 27.935 21.203 27.688 20.898 27.437 20.597 C 27.215 20.331 26.95 20.113 26.648 19.944 C 26.327 19.765 26.001 19.595 25.677 19.422 C 25.594 19.377 25.507 19.338 25.427 19.289 C 25.158 19.127 24.874 18.995 24.587 18.871 C 24.298 18.746 23.993 18.673 23.684 18.621 C 23.537 18.596 23.389 18.576 23.241 18.558 C 22.839 18.512 22.437 18.511 22.034 18.534 C 21.74 18.551 21.448 18.572 21.155 18.591 C 21.006 18.601 20.857 18.617 20.708 18.619 C 20.197 18.625 19.696 18.558 19.214 18.379 C 19.154 18.357 19.095 18.33 19.036 18.304 C 18.651 18.139 18.386 17.853 18.217 17.478 C 18.148 17.324 18.097 17.163 18.045 17.003 C 17.997 16.855 17.994 16.7 17.997 16.546 C 18.003 16.157 18.065 15.776 18.175 15.403 C 18.244 15.171 18.324 14.941 18.396 14.709 C 18.457 14.51 18.521 14.312 18.571 14.11 C 18.646 13.803 18.655 13.491 18.597 13.18 C 18.583 13.102 18.567 13.024 18.551 12.946 C 18.525 12.818 18.47 12.702 18.389 12.599 C 18.34 12.537 18.295 12.473 18.245 12.405 C 18.134 12.437 18.053 12.516 17.951 12.553 C 17.849 12.591 17.75 12.638 17.644 12.683 C 17.521 13.028 17.289 13.306 17.042 13.572 C 16.886 13.739 16.724 13.901 16.566 14.066 C 16.366 14.275 16.135 14.448 15.901 14.617 C 15.572 14.856 15.242 15.096 14.911 15.333 C 14.797 15.415 14.695 15.508 14.6 15.61 C 14.476 15.745 14.345 15.875 14.217 16.007 C 14.208 16.017 14.201 16.029 14.183 16.054 C 14.218 16.052 14.24 16.052 14.261 16.05 C 14.331 16.042 14.399 16.03 14.468 16.024 C 14.673 16.007 14.862 16.055 15.039 16.16 C 15.184 16.246 15.329 16.332 15.462 16.438 C 15.566 16.522 15.675 16.602 15.78 16.684 C 15.823 16.718 15.867 16.752 15.906 16.79 C 16.187 17.064 16.455 17.35 16.669 17.683 C 16.901 18.044 16.904 18.042 17.273 18.254 C 17.398 18.326 17.526 18.394 17.643 18.477 C 17.991 18.726 18.378 18.888 18.785 19.012 C 19.065 19.097 19.342 19.192 19.621 19.282 C 19.654 19.292 19.689 19.297 19.722 19.306 C 19.871 19.344 20.022 19.378 20.169 19.422 C 20.26 19.45 20.351 19.469 20.446 19.474 C 20.689 19.487 20.93 19.518 21.168 19.552 C 21.187 19.598 21.154 19.612 21.128 19.621 C 21.001 19.666 20.872 19.698 20.736 19.706 C 20.677 19.71 20.618 19.714 20.56 19.725 C 20.209 19.796 19.86 19.875 19.508 19.94 C 18.986 20.037 18.459 20.052 17.932 20.009 C 17.403 19.966 16.891 19.841 16.415 19.598 C 16.021 19.398 15.629 19.193 15.238 18.987 C 15.023 18.873 14.804 18.767 14.571 18.693 C 14.465 18.659 14.359 18.644 14.249 18.642 C 14.013 18.637 13.782 18.661 13.558 18.738 C 13.502 18.757 13.444 18.773 13.393 18.828 C 13.419 19.012 13.348 19.191 13.316 19.375 C 13.305 19.434 13.3 19.494 13.286 19.551 C 13.212 19.845 13.523 20.249 13.794 20.298 C 13.922 20.321 14.047 20.347 14.177 20.35 C 14.448 20.356 14.712 20.31 14.978 20.27 C 15.189 20.238 15.401 20.212 15.617 20.22 C 15.802 20.227 15.982 20.258 16.158 20.317 C 16.643 20.48 17.067 20.738 17.405 21.128 C 17.466 21.199 17.532 21.267 17.592 21.34 C 17.726 21.501 17.839 21.675 17.926 21.866 C 18.024 22.083 18.141 22.291 18.232 22.51 C 18.327 22.738 18.42 22.969 18.407 23.226 C 18.401 23.359 18.414 23.494 18.415 23.628 C 18.415 23.707 18.412 23.787 18.403 23.865 C 18.397 23.913 18.378 23.959 18.347 24.004 C 18.315 23.861 18.286 23.717 18.25 23.575 C 18.228 23.489 18.198 23.405 18.167 23.322 C 18.113 23.171 18.001 23.079 17.854 23.025 C 17.713 22.974 17.57 22.934 17.422 22.908 C 17.319 22.891 17.218 22.869 17.115 22.85 C 16.905 22.813 16.734 22.706 16.601 22.543 C 16.485 22.401 16.373 22.255 16.267 22.106 C 16.188 21.996 16.105 21.891 15.999 21.808 C 15.874 21.709 15.749 21.61 15.619 21.52 C 15.449 21.402 15.256 21.334 15.053 21.301 C 14.373 21.19 13.689 21.153 13 21.207 C 12.842 21.219 12.684 21.239 12.525 21.247 C 12.127 21.269 11.741 21.209 11.37 21.065 C 11.183 20.992 11.014 20.891 10.856 20.767 C 10.711 20.653 10.572 20.535 10.444 20.402 C 10.355 20.309 10.253 20.228 10.153 20.146 C 10.104 20.106 10.054 20.063 9.986 20.055 C 9.976 20.042 9.962 20.024 9.949 20.047 C 9.944 20.054 9.96 20.073 9.967 20.087 C 9.97 20.096 9.972 20.107 9.978 20.114 C 10.274 20.5 10.388 20.933 10.324 21.414 C 10.32 21.447 10.325 21.483 10.328 21.517 C 10.34 21.631 10.341 21.745 10.308 21.856 C 10.298 21.887 10.278 21.918 10.255 21.942 C 10.227 21.971 10.167 21.953 10.158 21.914 C 10.148 21.871 10.139 21.825 10.142 21.782 C 10.158 21.558 10.067 21.362 9.969 21.175 C 9.876 20.997 9.719 20.868 9.545 20.765 C 9.369 20.662 9.18 20.585 8.988 20.518 C 8.928 20.496 8.863 20.479 8.799 20.478 C 8.601 20.475 8.402 20.456 8.203 20.479 C 8.129 20.487 8.054 20.48 7.973 20.48 C 7.976 20.501 7.973 20.518 7.98 20.525 C 8.117 20.652 8.164 20.815 8.168 20.995 C 8.173 21.183 8.164 21.371 8.128 21.557 C 8.105 21.674 8.091 21.792 8.066 21.909 C 8.048 21.99 8.02 22.07 7.992 22.15 C 7.983 22.177 7.967 22.205 7.946 22.224 C 7.93 22.239 7.899 22.25 7.88 22.244 C 7.862 22.238 7.837 22.208 7.839 22.191 C 7.848 22.091 7.817 21.996 7.805 21.899 C 7.79 21.78 7.737 21.681 7.659 21.595 C 7.62 21.551 7.575 21.508 7.525 21.479 C 7.132 21.249 6.725 21.061 6.261 21.023 C 5.909 20.994 5.558 20.95 5.208 20.904 C 4.972 20.874 4.735 20.837 4.501 20.79 C 4.266 20.743 4.046 20.652 3.851 20.508 C 3.743 20.429 3.635 20.35 3.529 20.268 C 3.492 20.239 3.454 20.225 3.409 20.216 C 3.088 20.15 2.764 20.094 2.447 20.011 C 1.914 19.872 1.454 19.611 1.116 19.162 C 0.94 18.927 0.786 18.678 0.65 18.419 C 0.481 18.099 0.31 17.78 0.197 17.434 C 0.062 17.025 -0.007 16.607 0.001 16.176 C 0.007 15.789 0.041 15.405 0.109 15.023 C 0.167 14.7 0.223 14.379 0.332 14.069 C 0.399 13.877 0.47 13.687 0.541 13.497 C 0.674 13.144 0.819 12.797 0.98 12.456 C 1.159 12.078 1.36 11.714 1.608 11.377 C 1.755 11.177 1.899 10.975 2.046 10.775 C 2.063 10.751 2.086 10.732 2.106 10.71 C 2.119 10.722 2.131 10.734 2.143 10.746 C 2.136 10.76 2.131 10.774 2.122 10.786 C 1.906 11.092 1.726 11.421 1.534 11.742 C 1.444 11.894 1.366 12.053 1.282 12.209 C 1.178 12.359 1.115 12.529 1.045 12.695 C 1.041 12.703 1.045 12.714 1.046 12.724 L 1.048 12.722 C 1.001 12.745 0.995 12.791 0.987 12.835 C 0.976 12.852 0.963 12.867 0.956 12.885 C 0.876 13.085 0.797 13.285 0.719 13.486 C 0.711 13.507 0.717 13.533 0.717 13.557 L 0.718 13.554 C 0.703 13.572 0.682 13.587 0.674 13.607 C 0.547 13.934 0.42 14.262 0.331 14.601 C 0.196 15.115 0.138 15.639 0.159 16.171 C 0.151 16.23 0.14 16.29 0.173 16.346 C 0.184 16.407 0.194 16.468 0.204 16.53 C 0.223 16.637 0.237 16.745 0.26 16.851 C 0.328 17.161 0.432 17.46 0.526 17.762 C 0.596 17.99 0.686 18.21 0.798 18.42 C 0.978 18.761 1.21 19.061 1.515 19.302 C 1.711 19.457 1.924 19.58 2.161 19.663 C 2.288 19.739 2.43 19.779 2.57 19.822 C 2.667 19.859 2.764 19.895 2.86 19.932 C 2.981 19.978 3.101 20.025 3.222 20.069 C 3.243 20.078 3.269 20.076 3.292 20.078 C 3.299 20.027 3.261 20.015 3.234 19.995 C 3.104 19.896 2.973 19.797 2.842 19.699 C 2.739 19.621 2.635 19.545 2.534 19.466 C 2.373 19.341 2.214 19.215 2.056 19.087 C 1.998 19.041 1.947 18.986 1.891 18.937 C 1.885 18.932 1.867 18.94 1.855 18.942 L 1.857 18.945 C 1.875 18.914 1.87 18.904 1.825 18.884 L 1.826 18.886 C 1.826 18.844 1.788 18.842 1.764 18.824 L 1.766 18.827 C 1.772 18.789 1.749 18.773 1.715 18.767 C 1.69 18.719 1.668 18.67 1.638 18.624 C 1.449 18.333 1.287 18.027 1.158 17.704 C 1.153 17.691 1.147 17.679 1.142 17.666 L 1.139 17.661 C 1.128 17.623 1.12 17.584 1.106 17.547 C 0.998 17.248 0.925 16.939 0.889 16.623 C 0.872 16.476 0.859 16.327 0.856 16.179 C 0.849 15.877 0.837 15.574 0.852 15.273 C 0.874 14.831 0.966 14.398 1.075 13.971 C 1.214 13.433 1.397 12.91 1.594 12.39 C 1.604 12.363 1.61 12.334 1.617 12.306 L 1.615 12.309 C 1.626 12.293 1.636 12.277 1.647 12.261 L 1.648 12.26 C 1.654 12.255 1.66 12.249 1.665 12.243 C 1.675 12.239 1.678 12.233 1.676 12.223 C 1.731 12.112 1.783 11.999 1.842 11.89 C 1.949 11.694 2.053 11.496 2.17 11.307 C 2.358 11.003 2.567 10.712 2.786 10.43 C 2.85 10.348 2.916 10.265 2.988 10.191 C 3.308 9.865 3.631 9.542 3.954 9.218 C 4.003 9.169 4.054 9.122 4.107 9.077 C 4.293 8.919 4.465 8.748 4.615 8.554 C 4.867 8.227 5.091 7.882 5.273 7.512 C 5.509 7.093 5.597 6.9 5.61 6.772 C 5.554 6.796 5.529 6.846 5.493 6.885 C 5.364 7.022 5.244 7.169 5.107 7.298 C 4.929 7.465 4.758 7.637 4.598 7.82 C 4.444 7.996 4.295 8.175 4.179 8.378 C 4.094 8.526 3.988 8.656 3.871 8.778 C 3.576 9.087 3.286 9.4 2.957 9.674 C 2.954 9.656 2.952 9.638 2.95 9.621 Z M 19.289 8.704 C 19.291 8.694 19.293 8.684 19.295 8.674 L 19.294 8.677 C 19.33 8.653 19.323 8.614 19.329 8.579 C 19.456 8.286 19.486 7.975 19.494 7.661 C 19.495 7.547 19.499 7.433 19.497 7.32 C 19.496 7.281 19.487 7.24 19.471 7.205 C 19.421 7.091 19.371 6.978 19.312 6.87 C 19.233 6.726 19.142 6.59 19.063 6.447 C 18.99 6.316 18.911 6.192 18.808 6.082 C 18.747 6.017 18.696 5.943 18.637 5.876 C 18.534 5.755 18.436 5.629 18.322 5.519 C 18.17 5.369 18.027 5.211 17.896 5.043 C 17.859 4.996 17.818 4.953 17.778 4.908 C 17.737 4.861 17.696 4.813 17.644 4.754 C 17.595 4.832 17.547 4.893 17.512 4.964 C 17.479 5.008 17.446 5.051 17.414 5.095 C 17.279 5.279 17.137 5.457 16.977 5.621 C 16.872 5.728 16.754 5.817 16.62 5.886 C 16.404 5.998 16.189 6.11 15.975 6.226 C 15.765 6.34 15.545 6.431 15.321 6.512 C 15.241 6.541 15.16 6.565 15.075 6.565 C 14.951 6.565 14.827 6.563 14.703 6.56 C 14.583 6.558 14.465 6.536 14.353 6.494 C 14.13 6.409 13.91 6.317 13.715 6.177 C 13.691 6.16 13.666 6.143 13.645 6.122 C 13.606 6.083 13.614 6.019 13.665 5.998 C 13.71 5.98 13.761 5.97 13.809 5.968 C 14.127 5.955 14.423 5.86 14.709 5.729 C 14.743 5.725 14.778 5.726 14.811 5.716 C 15.15 5.618 15.479 5.495 15.782 5.311 C 16.104 5.114 16.416 4.904 16.682 4.633 C 16.714 4.602 16.748 4.573 16.781 4.543 C 16.942 4.393 17.082 4.226 17.187 4.034 C 17.283 3.856 17.365 3.669 17.441 3.482 C 17.487 3.368 17.509 3.245 17.542 3.126 C 17.602 2.956 17.641 2.784 17.595 2.604 C 17.593 2.594 17.593 2.584 17.592 2.574 C 17.57 2.345 17.498 2.131 17.395 1.925 C 17.211 1.559 16.968 1.237 16.674 0.951 C 16.556 0.836 16.427 0.737 16.288 0.65 C 15.887 0.401 15.456 0.231 14.986 0.171 C 14.81 0.148 14.632 0.119 14.453 0.146 C 14.044 0.157 13.643 0.225 13.246 0.32 C 13.174 0.337 13.107 0.37 13.038 0.395 C 12.99 0.392 12.943 0.394 12.904 0.428 C 12.88 0.433 12.855 0.435 12.832 0.444 C 12.157 0.693 11.545 1.04 11.038 1.56 C 10.828 1.775 10.649 2.009 10.506 2.272 C 10.351 2.556 10.284 2.854 10.315 3.175 C 10.322 3.254 10.327 3.333 10.338 3.412 C 10.365 3.613 10.4 3.814 10.498 3.996 C 10.587 4.162 10.674 4.331 10.778 4.487 C 10.898 4.669 11.036 4.839 11.201 4.985 L 11.2 4.981 C 11.205 4.99 11.21 4.999 11.215 5.008 C 11.331 5.115 11.448 5.223 11.564 5.33 C 11.698 5.455 11.83 5.583 11.967 5.705 C 12.049 5.776 12.14 5.837 12.226 5.904 C 12.244 5.917 12.269 5.931 12.246 5.966 C 12.156 5.953 12.063 5.949 11.974 5.991 C 11.953 6.001 11.925 5.995 11.9 5.996 C 11.831 6 11.761 6.003 11.692 6.008 C 11.339 6.036 11.041 5.915 10.783 5.681 C 10.693 5.599 10.64 5.492 10.573 5.395 C 10.569 5.376 10.567 5.356 10.559 5.338 C 10.502 5.206 10.444 5.075 10.386 4.943 C 10.323 4.802 10.279 4.655 10.246 4.505 C 10.203 4.307 10.161 4.108 10.12 3.909 C 10.071 3.671 10.035 3.431 10.039 3.187 C 10.04 3.164 10.033 3.141 10.028 3.111 C 10.002 3.127 9.985 3.137 9.968 3.147 C 9.94 3.158 9.911 3.166 9.885 3.179 C 9.405 3.429 8.908 3.646 8.434 3.909 C 8.326 3.969 8.222 4.038 8.122 4.111 C 7.862 4.302 7.604 4.497 7.346 4.691 C 7.231 4.777 7.109 4.857 7.006 4.956 C 6.696 5.255 6.457 5.608 6.265 5.992 C 6.256 6.009 6.257 6.031 6.249 6.077 C 6.286 6.04 6.304 6.023 6.321 6.005 C 6.609 5.698 6.89 5.383 7.21 5.105 C 7.431 4.913 7.659 4.729 7.898 4.559 C 8.32 4.259 8.766 3.998 9.208 3.731 C 9.297 3.677 9.389 3.628 9.481 3.578 C 9.529 3.552 9.579 3.529 9.641 3.566 C 9.631 3.588 9.626 3.615 9.61 3.63 C 9.563 3.673 9.514 3.717 9.46 3.751 C 9.309 3.847 9.156 3.939 9.002 4.03 C 8.612 4.26 8.232 4.505 7.867 4.77 C 7.782 4.832 7.701 4.897 7.619 4.961 C 7.556 5.007 7.494 5.053 7.431 5.1 C 7.422 5.101 7.415 5.106 7.41 5.113 C 7.389 5.134 7.368 5.155 7.346 5.176 C 7.231 5.27 7.11 5.358 7.002 5.459 C 6.579 5.856 6.229 6.311 5.939 6.813 C 5.875 6.925 5.801 7.031 5.736 7.142 C 5.691 7.219 5.653 7.299 5.613 7.378 C 5.495 7.579 5.375 7.779 5.263 7.983 C 5.196 8.105 5.135 8.23 5.043 8.335 C 4.944 8.447 4.846 8.558 4.741 8.664 C 4.52 8.885 4.293 9.101 4.073 9.323 C 3.979 9.417 3.889 9.518 3.806 9.623 C 3.569 9.923 3.363 10.245 3.15 10.562 C 3.103 10.632 3.064 10.707 3.023 10.78 C 2.947 10.914 2.872 11.048 2.796 11.182 C 2.316 12.023 1.944 12.904 1.776 13.864 C 1.698 14.308 1.645 14.756 1.617 15.206 C 1.6 15.473 1.594 15.74 1.576 16.007 C 1.557 16.295 1.554 16.582 1.586 16.868 C 1.608 17.07 1.632 17.272 1.667 17.472 C 1.72 17.785 1.823 18.086 1.93 18.384 C 1.965 18.482 2.014 18.575 2.064 18.666 C 2.174 18.862 2.322 19.029 2.473 19.194 C 2.482 19.204 2.498 19.207 2.511 19.214 L 2.509 19.211 C 2.514 19.223 2.519 19.235 2.523 19.246 C 2.54 19.268 2.556 19.289 2.573 19.311 C 2.62 19.359 2.668 19.406 2.715 19.454 C 2.762 19.503 2.808 19.552 2.855 19.601 C 2.922 19.668 2.983 19.744 3.077 19.778 C 3.081 19.786 3.084 19.793 3.088 19.799 C 3.091 19.795 3.095 19.79 3.099 19.786 C 3.092 19.783 3.085 19.78 3.078 19.777 C 3.089 19.732 3.054 19.703 3.034 19.672 C 2.94 19.53 2.872 19.377 2.815 19.218 C 2.641 18.724 2.543 18.215 2.508 17.694 C 2.49 17.428 2.479 17.16 2.475 16.893 C 2.473 16.735 2.487 16.577 2.502 16.419 C 2.517 16.252 2.541 16.085 2.561 15.919 C 2.567 15.883 2.573 15.846 2.578 15.81 C 2.635 15.539 2.691 15.268 2.749 14.997 C 2.817 14.682 2.885 14.367 2.993 14.062 C 3.195 13.494 3.469 12.96 3.8 12.457 C 4.079 12.034 4.375 11.622 4.701 11.234 C 5.007 10.869 5.323 10.512 5.636 10.151 C 5.73 10.043 5.825 9.935 5.921 9.827 C 5.942 9.803 5.957 9.779 5.946 9.746 C 5.96 9.745 5.981 9.749 5.987 9.741 C 6.044 9.674 6.099 9.605 6.154 9.536 L 6.153 9.538 C 6.163 9.527 6.173 9.517 6.184 9.506 L 6.182 9.508 C 6.223 9.476 6.262 9.443 6.273 9.388 L 6.296 9.359 C 6.308 9.352 6.324 9.348 6.333 9.338 C 6.47 9.181 6.608 9.025 6.74 8.865 C 7.067 8.472 7.362 8.057 7.635 7.625 C 7.718 7.495 7.788 7.358 7.84 7.214 C 7.923 6.986 8.005 6.758 8.078 6.528 C 8.122 6.392 8.165 6.256 8.148 6.107 C 8.138 6.011 8.201 5.941 8.281 5.89 C 8.311 5.871 8.336 5.879 8.37 5.914 C 8.38 5.925 8.388 5.938 8.397 5.95 C 8.402 6.09 8.384 6.228 8.35 6.362 C 8.242 6.786 8.098 7.197 7.898 7.587 C 7.733 7.909 7.573 8.234 7.408 8.556 C 7.178 9.001 6.948 9.445 6.672 9.864 C 6.33 10.383 5.957 10.878 5.556 11.351 C 5.277 11.681 4.989 12.003 4.71 12.332 C 4.386 12.715 4.07 13.104 3.845 13.557 C 3.789 13.668 3.725 13.774 3.666 13.884 C 3.452 14.281 3.264 14.691 3.143 15.128 C 3.079 15.357 3.019 15.587 2.96 15.817 C 2.875 16.149 2.816 16.485 2.774 16.825 C 2.738 17.11 2.7 17.395 2.675 17.681 C 2.656 17.893 2.665 18.107 2.705 18.318 C 2.754 18.582 2.845 18.833 2.928 19.087 C 3.031 19.4 3.209 19.666 3.419 19.913 C 3.499 20.008 3.595 20.088 3.703 20.151 C 3.735 20.174 3.765 20.2 3.799 20.22 C 3.996 20.343 4.183 20.483 4.413 20.544 C 4.541 20.605 4.68 20.623 4.817 20.64 C 5.177 20.683 5.538 20.721 5.899 20.754 C 6.246 20.785 6.589 20.841 6.922 20.945 C 7.178 21.024 7.431 21.114 7.643 21.29 C 7.647 21.294 7.659 21.289 7.678 21.288 C 7.651 21.165 7.607 21.052 7.527 20.955 C 7.514 20.931 7.511 20.893 7.467 20.907 L 7.469 20.908 C 7.467 20.891 7.47 20.869 7.461 20.856 C 7.386 20.751 7.298 20.657 7.185 20.592 C 6.997 20.482 6.808 20.373 6.607 20.289 C 6.374 20.192 6.146 20.083 5.938 19.939 C 5.832 19.866 5.72 19.802 5.611 19.735 C 5.607 19.703 5.595 19.679 5.556 19.687 L 5.558 19.688 C 5.557 19.679 5.56 19.666 5.555 19.66 C 5.482 19.573 5.409 19.486 5.333 19.401 C 5.247 19.305 5.157 19.213 5.07 19.117 C 4.817 18.836 4.652 18.505 4.54 18.147 C 4.457 17.881 4.418 17.606 4.402 17.329 C 4.379 16.948 4.371 16.567 4.443 16.189 C 4.464 16.077 4.474 15.964 4.489 15.851 C 4.516 15.741 4.542 15.632 4.568 15.522 C 4.609 15.385 4.651 15.248 4.689 15.11 C 4.78 14.776 4.88 14.445 5.049 14.14 C 5.068 14.106 5.078 14.067 5.093 14.031 C 5.185 13.924 5.254 13.802 5.314 13.675 C 5.368 13.612 5.421 13.547 5.476 13.484 C 5.739 13.181 6.001 12.876 6.266 12.575 C 6.338 12.493 6.42 12.42 6.499 12.345 C 6.618 12.232 6.738 12.12 6.859 12.01 C 7.009 11.874 7.157 11.734 7.315 11.605 C 7.66 11.322 8.011 11.045 8.359 10.766 C 8.72 10.478 9.09 10.202 9.434 9.893 C 9.778 9.585 10.113 9.269 10.42 8.923 C 10.646 8.669 10.827 8.388 10.962 8.076 C 11.054 7.864 11.067 7.645 11.043 7.42 C 11.041 7.401 11.029 7.384 11.022 7.366 C 11.005 7.294 10.992 7.221 10.972 7.15 C 10.944 7.045 10.91 6.941 10.881 6.836 C 10.871 6.801 10.854 6.763 10.884 6.717 C 10.905 6.734 10.925 6.747 10.941 6.765 C 11.238 7.084 11.354 7.457 11.274 7.886 C 11.247 8.031 11.201 8.173 11.163 8.316 C 11.111 8.416 11.058 8.515 11.006 8.614 C 10.98 8.656 10.955 8.698 10.929 8.74 C 10.916 8.757 10.903 8.775 10.89 8.793 C 10.867 8.824 10.844 8.855 10.821 8.886 C 10.788 8.923 10.755 8.96 10.724 8.998 C 10.557 9.202 10.383 9.398 10.169 9.557 C 10.106 9.604 10.051 9.663 9.993 9.717 C 9.681 10.009 9.383 10.315 9.051 10.584 C 8.83 10.762 8.614 10.944 8.412 11.142 C 8.383 11.17 8.354 11.197 8.324 11.222 C 8.042 11.458 7.784 11.72 7.523 11.979 C 7.212 12.286 6.923 12.614 6.636 12.943 C 6.555 13.036 6.483 13.138 6.412 13.239 C 6.278 13.43 6.149 13.624 6.018 13.817 C 5.922 13.957 5.833 14.099 5.766 14.255 C 5.755 14.28 5.744 14.306 5.733 14.331 L 5.735 14.329 C 5.698 14.35 5.686 14.386 5.676 14.424 C 5.554 14.629 5.441 14.837 5.357 15.061 C 5.31 15.186 5.258 15.31 5.212 15.435 C 5.094 15.757 5.012 16.088 4.956 16.426 C 4.906 16.724 4.88 17.024 4.857 17.326 C 4.837 17.589 4.854 17.85 4.875 18.111 C 4.882 18.194 4.914 18.274 4.935 18.355 C 4.954 18.406 4.972 18.456 4.991 18.506 C 5.025 18.651 5.064 18.799 5.151 18.919 C 5.271 19.082 5.4 19.241 5.542 19.384 C 5.725 19.567 5.944 19.706 6.184 19.809 C 6.204 19.818 6.224 19.828 6.244 19.837 L 6.242 19.836 C 6.291 19.862 6.34 19.887 6.389 19.913 C 6.462 19.942 6.534 19.978 6.61 20 C 6.858 20.073 7.111 20.124 7.37 20.131 C 7.544 20.136 7.716 20.155 7.888 20.182 C 8.172 20.227 8.456 20.275 8.744 20.291 C 8.887 20.299 9.03 20.318 9.172 20.34 C 9.32 20.362 9.462 20.406 9.573 20.517 C 9.582 20.525 9.601 20.524 9.616 20.527 C 9.634 20.537 9.653 20.547 9.671 20.557 C 9.683 20.565 9.695 20.572 9.707 20.58 L 9.706 20.581 C 9.697 20.571 9.687 20.561 9.678 20.551 C 9.673 20.541 9.668 20.532 9.664 20.522 C 9.586 20.431 9.508 20.341 9.43 20.25 C 9.357 20.163 9.284 20.076 9.211 19.989 C 8.92 19.641 8.561 19.4 8.117 19.291 C 8.029 19.24 7.934 19.217 7.833 19.211 C 7.749 19.206 7.665 19.194 7.582 19.18 C 7.335 19.139 7.117 19.035 6.934 18.865 C 6.688 18.636 6.598 18.346 6.615 18.018 C 6.622 17.889 6.623 17.76 6.633 17.631 C 6.65 17.379 6.677 17.128 6.773 16.89 C 6.829 16.752 6.887 16.615 6.943 16.477 C 6.959 16.436 6.974 16.395 6.99 16.353 L 6.988 16.356 C 6.999 16.335 7.01 16.314 7.02 16.294 C 7.036 16.269 7.053 16.244 7.068 16.219 C 7.267 15.876 7.486 15.546 7.727 15.233 C 7.966 14.924 8.221 14.626 8.522 14.373 C 8.553 14.347 8.578 14.316 8.606 14.288 C 8.643 14.259 8.695 14.243 8.693 14.182 L 8.692 14.184 C 8.736 14.194 8.752 14.156 8.776 14.134 C 8.927 13.998 9.076 13.86 9.227 13.723 C 9.367 13.597 9.511 13.475 9.649 13.346 C 9.877 13.131 10.117 12.932 10.368 12.745 C 10.596 12.577 10.825 12.411 11.05 12.24 C 11.235 12.098 11.426 11.961 11.595 11.802 C 11.933 11.487 12.247 11.15 12.513 10.769 C 12.696 10.506 12.835 10.225 12.933 9.921 C 13.034 9.609 13.099 9.289 13.164 8.969 C 13.184 8.872 13.185 8.772 13.194 8.674 C 13.197 8.6 13.199 8.526 13.202 8.452 C 13.212 8.237 13.251 8.029 13.353 7.836 C 13.402 7.744 13.462 7.658 13.539 7.587 C 13.568 7.561 13.602 7.539 13.638 7.523 C 13.677 7.505 13.717 7.515 13.746 7.548 C 13.773 7.578 13.771 7.611 13.751 7.644 C 13.745 7.652 13.74 7.661 13.735 7.669 C 13.669 7.691 13.632 7.744 13.595 7.797 C 13.528 7.896 13.479 8.004 13.443 8.118 C 13.365 8.369 13.365 8.625 13.397 8.883 C 13.441 9.242 13.491 9.6 13.442 9.963 C 13.42 10.125 13.397 10.286 13.351 10.444 C 13.137 11.176 12.729 11.788 12.163 12.296 C 11.786 12.634 11.376 12.932 10.966 13.228 C 10.869 13.298 10.774 13.368 10.678 13.438 C 10.637 13.47 10.58 13.483 10.554 13.534 C 10.566 13.543 10.573 13.553 10.58 13.553 C 10.76 13.565 10.929 13.619 11.094 13.685 C 11.232 13.74 11.368 13.798 11.503 13.857 C 11.528 13.868 11.561 13.876 11.56 13.915 C 11.526 13.91 11.491 13.909 11.459 13.9 C 11.326 13.863 11.194 13.822 11.061 13.784 C 10.821 13.715 10.577 13.689 10.329 13.736 C 10.281 13.746 10.229 13.755 10.19 13.78 C 10.116 13.828 10.05 13.888 9.98 13.942 C 9.782 14.08 9.584 14.22 9.384 14.356 C 9.076 14.564 8.796 14.806 8.524 15.057 C 8.471 15.107 8.427 15.167 8.378 15.222 C 8.353 15.218 8.338 15.23 8.332 15.254 L 8.333 15.252 C 8.209 15.329 8.123 15.446 8.034 15.556 C 7.9 15.722 7.777 15.896 7.645 16.062 C 7.378 16.398 7.173 16.769 6.99 17.154 C 6.882 17.381 6.817 17.617 6.786 17.864 C 6.767 18.015 6.756 18.169 6.814 18.318 C 6.835 18.43 6.89 18.527 6.96 18.615 C 6.973 18.631 6.999 18.638 7.019 18.649 L 7.017 18.647 C 7.013 18.689 7.045 18.699 7.074 18.712 C 7.076 18.719 7.08 18.723 7.086 18.727 C 7.208 18.832 7.348 18.903 7.503 18.944 C 7.676 18.991 7.849 19.027 8.028 19.039 C 8.181 19.05 8.334 19.072 8.482 19.115 C 8.586 19.145 8.691 19.174 8.796 19.203 C 8.871 19.227 8.946 19.252 9.021 19.277 C 9.029 19.283 9.035 19.291 9.044 19.295 C 9.238 19.378 9.409 19.494 9.555 19.648 C 9.571 19.665 9.592 19.681 9.613 19.692 C 9.679 19.726 9.746 19.758 9.814 19.787 C 10.012 19.873 10.186 19.992 10.349 20.134 C 10.566 20.323 10.793 20.5 11.034 20.658 C 11.203 20.769 11.384 20.844 11.583 20.879 C 11.773 20.912 11.965 20.94 12.155 20.977 C 12.327 21.01 12.499 21.025 12.673 21.032 C 13.007 21.045 13.339 21.012 13.67 20.985 C 14.04 20.955 14.405 20.973 14.767 21.044 C 15.049 21.1 15.329 21.169 15.607 21.242 C 15.785 21.288 15.956 21.354 16.121 21.438 C 16.33 21.544 16.532 21.66 16.718 21.802 C 16.933 21.965 17.181 22.019 17.44 22.043 L 17.438 22.041 C 17.447 22.068 17.469 22.062 17.489 22.061 C 17.509 22.065 17.53 22.068 17.55 22.071 C 17.664 22.113 17.778 22.155 17.893 22.196 C 17.9 22.198 17.911 22.191 17.92 22.188 C 17.909 22.208 17.917 22.212 17.935 22.206 L 17.917 22.19 C 17.902 22.16 17.89 22.127 17.87 22.101 C 17.786 21.99 17.697 21.884 17.614 21.773 C 17.392 21.477 17.108 21.244 16.843 20.991 C 16.832 20.981 16.819 20.973 16.808 20.964 C 16.579 20.785 16.325 20.653 16.059 20.542 C 16.005 20.519 15.945 20.508 15.889 20.492 C 15.859 20.464 15.821 20.463 15.783 20.463 C 15.677 20.443 15.571 20.414 15.464 20.405 C 15.194 20.382 14.931 20.429 14.672 20.502 C 14.544 20.539 14.415 20.572 14.285 20.602 C 14.073 20.652 13.862 20.638 13.655 20.571 C 13.53 20.53 13.421 20.465 13.332 20.368 C 13.285 20.318 13.24 20.265 13.195 20.213 C 13.176 20.188 13.157 20.162 13.139 20.136 C 13.121 20.098 13.104 20.061 13.086 20.022 C 13.077 19.989 13.067 19.956 13.059 19.922 C 13.036 19.831 13.016 19.739 13.026 19.644 C 13.037 19.541 13.05 19.437 13.064 19.335 C 13.087 19.178 13.112 19.022 13.134 18.866 C 13.14 18.822 13.141 18.776 13.138 18.732 C 13.132 18.625 13.081 18.546 12.984 18.496 C 12.873 18.439 12.757 18.422 12.637 18.455 C 12.394 18.523 12.149 18.588 11.932 18.725 C 11.829 18.791 11.713 18.817 11.59 18.805 C 11.428 18.788 11.316 18.669 11.318 18.507 C 11.319 18.439 11.335 18.369 11.355 18.304 C 11.385 18.207 11.39 18.109 11.384 18.01 C 11.377 17.897 11.338 17.851 11.225 17.829 C 11.167 17.818 11.107 17.818 11.048 17.813 L 11.051 17.814 C 11.034 17.787 11.008 17.787 10.981 17.794 C 10.881 17.792 10.782 17.795 10.683 17.788 C 10.589 17.782 10.496 17.766 10.403 17.751 C 10.376 17.747 10.351 17.73 10.302 17.708 C 10.552 17.67 10.776 17.637 10.999 17.603 C 11.053 17.599 11.108 17.599 11.161 17.589 C 11.287 17.563 11.412 17.529 11.538 17.503 C 11.855 17.439 12.141 17.308 12.407 17.129 C 12.662 16.958 12.918 16.788 13.173 16.615 C 13.234 16.574 13.288 16.524 13.346 16.477 C 13.417 16.427 13.416 16.426 13.445 16.369 C 13.345 16.351 13.24 16.345 13.144 16.312 C 12.939 16.243 12.733 16.172 12.539 16.07 C 12.36 15.974 12.172 15.903 11.966 15.88 C 11.889 15.872 11.808 15.85 11.741 15.812 C 11.577 15.721 11.42 15.617 11.261 15.518 C 11.26 15.502 11.258 15.486 11.257 15.469 C 11.288 15.48 11.32 15.49 11.351 15.501 C 11.501 15.588 11.66 15.655 11.828 15.697 C 12.087 15.763 12.341 15.842 12.58 15.964 C 12.641 15.996 12.706 16.022 12.77 16.048 C 12.792 16.057 12.817 16.055 12.841 16.059 L 12.84 16.057 C 12.848 16.09 12.878 16.086 12.902 16.092 C 12.97 16.121 13.037 16.152 13.108 16.176 C 13.223 16.214 13.341 16.22 13.459 16.183 C 13.544 16.156 13.629 16.13 13.715 16.105 C 13.828 16.072 13.921 16.005 14.001 15.924 C 14.139 15.782 14.271 15.634 14.404 15.487 C 14.426 15.463 14.438 15.43 14.454 15.401 L 14.453 15.403 C 14.476 15.405 14.485 15.393 14.484 15.371 L 14.482 15.373 C 14.552 15.337 14.594 15.274 14.632 15.21 C 14.677 15.165 14.726 15.123 14.752 15.062 C 14.683 15.027 14.617 14.996 14.554 14.958 C 14.375 14.853 14.189 14.762 13.994 14.687 C 13.856 14.635 13.724 14.567 13.59 14.506 C 13.59 14.488 13.591 14.47 13.592 14.452 C 13.622 14.463 13.653 14.473 13.684 14.483 C 13.742 14.502 13.8 14.521 13.858 14.539 L 13.856 14.538 C 13.879 14.57 13.91 14.578 13.947 14.57 L 13.945 14.569 C 13.968 14.586 13.989 14.608 14.015 14.617 C 14.165 14.668 14.315 14.724 14.469 14.763 C 14.642 14.808 14.822 14.808 15.003 14.808 C 15.086 14.679 15.203 14.587 15.296 14.457 C 15.249 14.448 15.216 14.441 15.182 14.434 C 15.087 14.409 14.992 14.379 14.895 14.358 C 14.769 14.331 14.666 14.268 14.585 14.168 C 14.557 14.134 14.531 14.098 14.503 14.063 C 14.415 13.953 14.309 13.862 14.178 13.811 C 13.999 13.741 13.848 13.633 13.704 13.509 C 13.559 13.383 13.411 13.258 13.263 13.135 C 13.112 13.008 12.936 12.932 12.744 12.89 C 12.706 12.881 12.667 12.872 12.63 12.859 C 12.619 12.855 12.608 12.836 12.608 12.824 C 12.608 12.813 12.62 12.794 12.63 12.791 C 12.673 12.779 12.717 12.773 12.76 12.764 C 13.018 12.816 13.249 12.925 13.443 13.102 C 13.534 13.186 13.616 13.279 13.702 13.367 C 13.761 13.427 13.82 13.487 13.88 13.545 C 13.939 13.601 14.009 13.635 14.092 13.639 C 14.191 13.672 14.289 13.705 14.388 13.736 C 14.553 13.79 14.707 13.866 14.843 13.974 C 14.988 14.161 15.192 14.261 15.403 14.35 C 15.573 14.234 15.95 13.846 16.107 13.626 C 16.095 13.619 16.084 13.607 16.071 13.605 C 16.022 13.597 15.973 13.592 15.923 13.586 C 15.824 13.558 15.725 13.523 15.624 13.503 C 15.302 13.441 15.046 13.276 14.846 13.022 C 14.718 12.859 14.585 12.7 14.431 12.56 C 14.452 12.534 14.478 12.523 14.508 12.538 C 14.543 12.556 14.577 12.577 14.607 12.602 C 14.722 12.696 14.83 12.796 14.921 12.913 C 14.964 12.968 15.011 13.018 15.059 13.068 C 15.07 13.079 15.093 13.078 15.11 13.083 L 15.109 13.081 C 15.101 13.109 15.121 13.118 15.14 13.127 C 15.159 13.142 15.178 13.156 15.197 13.17 C 15.248 13.208 15.296 13.252 15.352 13.281 C 15.435 13.325 15.522 13.361 15.61 13.395 C 15.79 13.463 15.97 13.532 16.164 13.58 C 16.4 13.324 16.634 13.07 16.867 12.815 C 16.876 12.805 16.876 12.788 16.883 12.766 C 16.839 12.766 16.801 12.766 16.762 12.766 C 16.728 12.762 16.694 12.755 16.659 12.755 C 16.52 12.756 16.384 12.732 16.25 12.694 C 16.198 12.666 16.148 12.634 16.094 12.611 C 15.947 12.548 15.837 12.444 15.738 12.323 C 15.567 12.117 15.516 11.816 15.672 11.546 C 15.792 11.339 15.947 11.171 16.148 11.042 C 16.597 10.754 17.071 10.515 17.564 10.313 C 18.05 10.115 18.474 9.825 18.836 9.447 C 19.004 9.27 19.153 9.078 19.242 8.847 C 19.256 8.811 19.28 8.776 19.264 8.734 L 19.263 8.736 C 19.289 8.74 19.288 8.722 19.287 8.705 L 19.289 8.704 Z M 28.759 21.802 C 28.76 21.821 28.767 21.835 28.79 21.834 L 28.789 21.833 C 28.822 21.943 28.893 22.03 28.965 22.117 C 28.968 22.138 28.972 22.158 28.999 22.162 L 28.997 22.161 C 29 22.175 28.998 22.192 29.006 22.202 C 29.094 22.325 29.183 22.447 29.272 22.57 C 29.291 22.611 29.308 22.653 29.357 22.667 L 29.357 22.666 C 29.36 22.68 29.359 22.697 29.366 22.707 C 29.472 22.844 29.576 22.982 29.715 23.089 C 29.927 23.321 30.188 23.479 30.481 23.588 C 30.742 23.686 31.013 23.748 31.289 23.789 C 31.373 23.802 31.456 23.8 31.541 23.779 C 31.797 23.717 32.051 23.647 32.298 23.558 C 32.509 23.482 32.72 23.404 32.891 23.252 C 33.2 22.978 33.497 22.693 33.729 22.348 C 33.923 22.059 34.088 21.754 34.254 21.449 C 34.462 21.065 34.666 20.679 34.873 20.295 C 35.115 19.844 35.379 19.408 35.66 18.98 C 35.673 18.96 35.679 18.936 35.688 18.914 L 35.687 18.916 C 35.717 18.906 35.732 18.888 35.72 18.856 L 35.718 18.858 C 35.751 18.857 35.754 18.836 35.75 18.811 C 35.775 18.788 35.803 18.766 35.826 18.74 C 35.941 18.611 36.054 18.478 36.17 18.349 C 36.402 18.089 36.649 17.845 36.927 17.633 C 36.942 17.621 36.953 17.602 36.984 17.564 C 36.853 17.592 36.755 17.623 36.661 17.668 C 36.329 17.828 36.005 18.002 35.704 18.215 C 35.149 18.609 34.602 19.015 34.07 19.44 C 33.744 19.7 33.409 19.949 33.072 20.196 C 32.856 20.355 32.621 20.487 32.375 20.595 C 31.851 20.826 31.305 20.888 30.74 20.804 C 30.449 20.761 30.165 20.692 29.89 20.587 C 29.864 20.577 29.835 20.559 29.806 20.58 L 29.807 20.581 C 29.795 20.529 29.75 20.53 29.711 20.522 C 29.676 20.503 29.642 20.483 29.607 20.464 C 29.392 20.349 29.175 20.239 28.963 20.119 C 28.544 19.881 28.145 19.61 27.752 19.331 C 27.37 19.061 26.966 18.829 26.55 18.615 C 26.135 18.403 25.698 18.258 25.234 18.209 C 25.091 18.193 24.946 18.182 24.802 18.184 C 24.529 18.186 24.256 18.204 23.983 18.206 C 23.714 18.209 23.446 18.177 23.182 18.132 C 22.523 18.018 21.965 17.714 21.507 17.228 C 21.344 17.054 21.197 16.866 21.109 16.64 C 21.016 16.4 20.938 16.155 20.9 15.898 C 20.879 15.756 20.842 15.617 20.813 15.477 C 20.801 15.412 20.789 15.347 20.778 15.283 C 20.755 15.136 20.737 14.989 20.708 14.844 C 20.634 14.464 20.509 14.099 20.382 13.734 C 20.34 13.612 20.273 13.502 20.191 13.401 C 20.116 13.308 20.04 13.217 19.964 13.125 C 19.719 12.828 19.428 12.584 19.086 12.402 C 18.952 12.331 18.804 12.311 18.661 12.276 C 18.658 12.287 18.655 12.297 18.653 12.308 C 18.783 12.51 18.873 12.73 18.949 12.955 C 19.076 13.328 19.155 13.709 19.155 14.106 C 19.155 14.548 19.111 14.986 19.043 15.422 C 19.005 15.663 18.988 15.904 18.989 16.148 C 18.99 16.354 19.029 16.552 19.105 16.742 C 19.152 16.857 19.206 16.969 19.261 17.079 C 19.347 17.251 19.471 17.391 19.62 17.512 C 20 17.822 20.434 18.023 20.908 18.139 C 21.155 18.199 21.404 18.248 21.66 18.228 C 21.887 18.242 22.114 18.255 22.341 18.269 C 22.351 18.269 22.36 18.264 22.37 18.262 L 22.368 18.261 C 22.383 18.294 22.413 18.286 22.44 18.284 C 22.493 18.286 22.547 18.289 22.601 18.291 C 22.822 18.298 23.043 18.294 23.262 18.329 C 23.344 18.343 23.428 18.342 23.512 18.348 C 23.565 18.358 23.619 18.371 23.673 18.379 C 23.899 18.413 24.123 18.46 24.337 18.544 C 24.559 18.63 24.78 18.72 25 18.812 C 25.298 18.937 25.591 19.075 25.892 19.192 C 26.452 19.411 26.968 19.701 27.416 20.105 C 27.432 20.123 27.444 20.147 27.475 20.137 L 27.474 20.136 C 27.477 20.15 27.477 20.167 27.485 20.176 C 27.58 20.277 27.677 20.377 27.773 20.477 C 27.784 20.505 27.789 20.54 27.834 20.525 L 27.831 20.524 C 27.811 20.557 27.837 20.579 27.853 20.6 C 27.931 20.705 28.011 20.808 28.091 20.912 C 28.105 20.921 28.119 20.931 28.133 20.941 L 28.131 20.94 C 28.121 20.974 28.147 20.994 28.163 21.016 C 28.24 21.118 28.317 21.22 28.394 21.321 C 28.5 21.462 28.607 21.602 28.714 21.742 C 28.729 21.762 28.745 21.783 28.761 21.803 L 28.759 21.802 Z M 18.459 4.061 C 18.448 4.045 18.438 4.03 18.427 4.014 C 18.375 3.955 18.349 3.879 18.309 3.812 C 18.25 3.712 18.217 3.604 18.214 3.487 C 18.212 3.413 18.215 3.339 18.215 3.265 C 18.215 3.248 18.226 3.224 18.182 3.219 C 18.132 3.305 18.1 3.404 18.078 3.502 C 18.043 3.664 18.05 3.827 18.124 3.981 C 18.162 4.062 18.193 4.146 18.237 4.223 C 18.367 4.452 18.494 4.683 18.637 4.903 C 18.824 5.19 18.989 5.489 19.161 5.785 C 19.301 6.025 19.408 6.281 19.512 6.539 C 19.676 6.946 19.721 7.372 19.741 7.803 C 19.744 7.853 19.742 7.903 19.734 7.952 C 19.712 8.078 19.692 8.206 19.661 8.331 C 19.61 8.532 19.55 8.732 19.496 8.933 C 19.483 8.984 19.479 9.039 19.47 9.092 L 19.473 9.089 C 19.466 9.099 19.46 9.109 19.453 9.119 C 19.41 9.244 19.368 9.368 19.325 9.493 C 19.307 9.526 19.29 9.559 19.273 9.591 C 19.194 9.724 19.112 9.853 19.01 9.97 C 18.863 10.14 18.692 10.282 18.514 10.419 C 18.206 10.656 17.882 10.864 17.507 10.987 C 17.3 11.056 17.094 11.132 16.902 11.236 C 16.882 11.247 16.854 11.253 16.856 11.287 C 16.871 11.287 16.885 11.289 16.9 11.287 C 17.087 11.268 17.266 11.297 17.437 11.377 C 17.455 11.385 17.475 11.389 17.494 11.395 C 17.705 11.513 17.898 11.658 18.091 11.803 C 18.193 11.879 18.293 11.961 18.415 12.007 C 18.467 12.034 18.518 12.067 18.573 12.087 C 18.746 12.151 18.925 12.194 19.108 12.216 C 19.18 12.225 19.252 12.254 19.337 12.235 C 19.311 12.071 19.312 11.914 19.352 11.76 C 19.414 11.646 19.473 11.532 19.584 11.455 C 19.614 11.434 19.632 11.392 19.649 11.357 C 19.744 11.158 19.811 10.953 19.803 10.728 C 19.797 10.526 19.853 10.335 19.928 10.15 C 19.955 10.082 20.001 10.021 20.04 9.959 C 20.048 9.946 20.067 9.939 20.085 9.926 C 20.085 9.947 20.088 9.957 20.085 9.965 C 19.987 10.203 19.943 10.448 19.964 10.706 C 19.98 10.906 19.956 11.102 19.848 11.28 C 19.842 11.291 19.843 11.306 19.841 11.322 L 19.889 11.322 C 19.905 11.324 19.922 11.325 19.938 11.327 C 19.809 11.434 19.712 11.568 19.621 11.707 C 19.506 11.871 19.487 12.086 19.572 12.26 C 19.757 12.3 19.943 12.33 20.122 12.382 C 20.301 12.433 20.474 12.504 20.647 12.566 C 20.691 12.477 20.724 12.388 20.776 12.312 C 20.869 12.177 20.977 12.055 21.107 11.954 C 21.181 11.896 21.248 11.831 21.319 11.77 C 21.432 11.659 21.505 11.525 21.55 11.376 C 21.63 11.111 21.656 10.842 21.591 10.569 C 21.573 10.497 21.557 10.425 21.541 10.352 C 21.526 10.282 21.527 10.278 21.549 10.196 C 21.607 10.299 21.668 10.405 21.726 10.513 C 21.746 10.552 21.763 10.595 21.773 10.638 C 21.827 10.856 21.803 11.071 21.726 11.28 C 21.679 11.41 21.609 11.531 21.533 11.648 C 21.523 11.669 21.513 11.69 21.502 11.712 L 21.504 11.709 C 21.429 11.773 21.393 11.854 21.382 11.95 L 21.384 11.947 C 21.374 11.963 21.364 11.978 21.354 11.994 C 21.325 12.044 21.296 12.094 21.267 12.144 C 21.256 12.168 21.245 12.193 21.233 12.218 L 21.234 12.215 C 21.058 12.35 20.962 12.533 20.907 12.751 C 21.12 12.919 21.283 13.123 21.391 13.374 C 21.523 13.317 21.645 13.264 21.753 13.184 C 21.791 13.155 21.822 13.115 21.856 13.08 C 21.879 13.055 21.902 13.029 21.925 13.004 C 21.99 12.931 22.055 12.857 22.121 12.785 C 22.135 12.77 22.152 12.746 22.182 12.768 C 22.172 12.846 22.147 12.919 22.11 12.988 C 22.094 13.018 22.084 13.05 22.071 13.081 C 22.067 13.083 22.062 13.084 22.059 13.087 C 22.059 13.087 22.059 13.093 22.06 13.096 C 22.063 13.09 22.065 13.085 22.068 13.079 C 22.096 13.077 22.126 13.082 22.152 13.074 C 22.223 13.052 22.291 13.023 22.361 13 C 22.38 12.993 22.405 12.978 22.422 13.013 C 22.378 13.068 22.316 13.097 22.259 13.134 C 22.115 13.227 21.963 13.309 21.832 13.421 C 21.717 13.486 21.668 13.603 21.599 13.705 C 21.562 13.76 21.56 13.81 21.581 13.873 C 21.648 14.07 21.705 14.27 21.771 14.468 C 21.827 14.637 21.889 14.804 21.951 14.971 C 21.958 14.991 21.975 15.008 21.996 15.038 C 22.042 14.927 22.119 14.869 22.21 14.82 C 22.28 14.782 22.339 14.728 22.343 14.637 C 22.384 14.607 22.38 14.558 22.39 14.516 C 22.426 14.362 22.457 14.207 22.491 14.052 C 22.494 14.042 22.505 14.034 22.529 14.003 C 22.529 14.057 22.529 14.086 22.529 14.114 C 22.528 14.218 22.525 14.322 22.525 14.426 C 22.525 14.441 22.537 14.456 22.551 14.49 C 22.617 14.386 22.673 14.299 22.728 14.212 C 22.741 14.225 22.755 14.237 22.768 14.249 C 22.729 14.406 22.676 14.557 22.564 14.68 C 22.558 14.687 22.554 14.696 22.549 14.705 C 22.465 14.777 22.404 14.865 22.369 14.971 C 22.344 15.047 22.3 15.113 22.248 15.173 C 22.222 15.203 22.202 15.237 22.183 15.271 C 22.156 15.319 22.159 15.364 22.195 15.408 C 22.269 15.501 22.339 15.597 22.414 15.689 C 22.628 15.956 22.91 16.107 23.246 16.161 C 23.316 16.172 23.384 16.174 23.452 16.157 C 23.63 16.111 23.809 16.07 23.963 15.964 C 23.983 15.95 24.006 15.938 24.029 15.931 C 24.118 15.905 24.17 15.846 24.191 15.758 L 24.189 15.76 C 24.199 15.749 24.21 15.739 24.22 15.728 L 24.219 15.73 C 24.28 15.702 24.307 15.653 24.305 15.587 C 24.376 15.498 24.425 15.399 24.457 15.291 C 24.466 15.258 24.481 15.227 24.493 15.196 C 24.502 15.196 24.512 15.195 24.521 15.194 C 24.53 15.25 24.496 15.307 24.523 15.373 C 24.56 15.355 24.59 15.34 24.62 15.325 C 24.718 15.278 24.816 15.229 24.914 15.183 C 24.934 15.174 24.957 15.174 25.014 15.162 C 24.939 15.228 24.892 15.271 24.844 15.313 C 24.736 15.407 24.628 15.501 24.52 15.595 C 24.451 15.627 24.414 15.681 24.4 15.755 C 24.38 15.862 24.319 15.945 24.233 16.011 C 24.186 16.047 24.135 16.078 24.088 16.114 C 24.057 16.137 24.021 16.16 24.002 16.191 C 23.944 16.292 23.915 16.399 23.938 16.519 C 23.987 16.781 24.133 16.986 24.328 17.153 C 24.573 17.363 24.86 17.499 25.177 17.568 C 25.306 17.596 25.423 17.57 25.525 17.481 C 25.627 17.391 25.709 17.286 25.756 17.158 C 25.785 17.095 25.813 17.031 25.844 16.969 C 25.869 16.917 25.87 16.864 25.861 16.809 C 25.843 16.702 25.823 16.594 25.812 16.486 C 25.801 16.373 25.777 16.261 25.79 16.146 C 25.805 16.011 25.838 15.883 25.892 15.76 C 25.91 15.759 25.928 15.759 25.945 15.758 C 25.937 15.837 25.928 15.915 25.922 15.993 C 25.92 16.016 25.917 16.044 25.946 16.05 C 26.054 15.977 26.159 15.905 26.265 15.833 C 26.277 15.844 26.289 15.856 26.301 15.867 C 26.266 15.914 26.238 15.97 26.194 16.006 C 26.092 16.089 26.04 16.195 26.013 16.32 C 26.002 16.372 26.004 16.417 26.028 16.463 C 26.11 16.615 26.144 16.777 26.129 16.949 C 26.102 17.053 26.075 17.158 26.046 17.262 C 26.035 17.304 26.046 17.34 26.073 17.371 C 26.095 17.398 26.116 17.426 26.143 17.447 C 26.307 17.575 26.482 17.688 26.688 17.735 C 26.837 17.769 26.989 17.789 27.14 17.812 C 27.167 17.816 27.196 17.808 27.229 17.806 C 27.232 17.733 27.235 17.67 27.238 17.607 C 27.259 17.551 27.28 17.496 27.298 17.44 C 27.363 17.246 27.452 17.065 27.567 16.897 C 27.628 16.807 27.683 16.713 27.741 16.621 C 27.762 16.622 27.782 16.623 27.803 16.623 C 27.8 16.638 27.798 16.652 27.794 16.666 C 27.748 16.855 27.701 17.043 27.655 17.232 C 27.584 17.364 27.547 17.507 27.513 17.651 C 27.499 17.707 27.497 17.768 27.528 17.83 C 27.682 17.845 27.834 17.864 27.987 17.874 C 28.091 17.881 28.196 17.879 28.3 17.873 C 28.414 17.865 28.527 17.843 28.633 17.799 C 28.755 17.748 28.841 17.665 28.858 17.527 C 28.865 17.473 28.872 17.419 28.879 17.365 C 28.899 17.286 28.92 17.207 28.94 17.128 L 28.939 17.131 C 28.98 17.077 29.022 17.024 29.062 16.969 C 29.073 16.954 29.083 16.935 29.086 16.917 C 29.099 16.821 29.11 16.724 29.121 16.627 C 29.131 16.528 29.097 16.436 29.067 16.344 C 29.04 16.261 29.014 16.178 28.987 16.095 C 29 16.083 29.013 16.071 29.026 16.059 C 29.067 16.14 29.093 16.23 29.172 16.3 C 29.189 16.269 29.202 16.249 29.213 16.227 C 29.281 16.089 29.344 15.949 29.418 15.814 C 29.488 15.684 29.568 15.558 29.646 15.432 C 29.658 15.412 29.67 15.376 29.717 15.394 C 29.711 15.418 29.708 15.442 29.7 15.465 C 29.633 15.661 29.567 15.859 29.498 16.054 C 29.429 16.247 29.391 16.446 29.38 16.65 C 29.374 16.673 29.359 16.698 29.364 16.719 C 29.393 16.824 29.365 16.925 29.344 17.026 C 29.324 17.127 29.302 17.228 29.284 17.315 C 29.313 17.372 29.335 17.416 29.357 17.46 C 29.36 17.52 29.394 17.556 29.447 17.577 L 29.445 17.574 C 29.455 17.583 29.465 17.592 29.475 17.6 C 29.635 17.707 29.818 17.751 30.002 17.793 C 30.224 17.843 30.443 17.833 30.658 17.749 C 30.889 17.659 31.114 17.558 31.329 17.434 C 31.393 17.397 31.455 17.355 31.513 17.311 C 31.6 17.245 31.655 17.159 31.664 17.049 C 31.674 16.936 31.683 16.823 31.692 16.71 C 31.704 16.668 31.711 16.624 31.73 16.585 C 31.752 16.537 31.777 16.488 31.811 16.448 C 31.852 16.4 31.91 16.406 31.949 16.457 C 31.991 16.513 32.009 16.579 32.014 16.648 C 32.018 16.702 32.021 16.755 32.025 16.809 C 32.01 16.857 32.03 16.896 32.058 16.933 C 32.158 17.065 32.274 17.18 32.429 17.246 C 32.516 17.284 32.604 17.317 32.694 17.346 C 32.745 17.363 32.801 17.375 32.854 17.375 C 33.074 17.375 33.291 17.343 33.497 17.264 C 33.718 17.18 33.838 17.033 33.902 16.789 C 33.94 16.739 33.979 16.689 34.016 16.637 C 34.051 16.589 34.088 16.542 34.144 16.517 C 34.191 16.495 34.238 16.5 34.268 16.531 C 34.3 16.564 34.272 16.595 34.263 16.626 C 34.262 16.631 34.262 16.636 34.261 16.641 C 34.242 16.697 34.227 16.755 34.202 16.809 C 34.174 16.868 34.183 16.924 34.199 16.981 C 34.223 17.067 34.276 17.132 34.35 17.176 C 34.538 17.289 34.743 17.336 34.962 17.332 C 35.013 17.331 35.058 17.315 35.095 17.278 C 35.284 17.091 35.434 16.878 35.535 16.632 C 35.569 16.55 35.603 16.468 35.638 16.385 C 35.715 16.202 35.735 16.013 35.703 15.818 L 35.746 15.82 C 35.76 15.888 35.768 15.958 35.789 16.023 C 35.811 16.091 35.79 16.169 35.841 16.244 C 35.903 16.173 35.955 16.107 36.013 16.048 C 36.098 15.962 36.163 15.864 36.219 15.759 C 36.268 15.667 36.32 15.577 36.372 15.487 C 36.383 15.47 36.403 15.458 36.437 15.428 C 36.428 15.476 36.427 15.501 36.419 15.523 C 36.358 15.695 36.294 15.867 36.234 16.039 C 36.202 16.129 36.155 16.209 36.096 16.284 C 36.032 16.365 35.966 16.446 35.901 16.527 C 35.843 16.563 35.812 16.614 35.799 16.682 C 35.768 16.834 35.71 16.976 35.618 17.103 C 35.609 17.115 35.61 17.136 35.607 17.153 C 35.74 17.157 35.864 17.161 35.989 17.166 C 36.207 17.176 36.426 17.187 36.644 17.196 C 36.679 17.197 36.717 17.2 36.748 17.189 C 36.892 17.136 37.04 17.084 37.153 16.975 C 37.304 16.829 37.439 16.67 37.524 16.476 C 37.558 16.416 37.592 16.356 37.624 16.296 C 37.669 16.214 37.711 16.13 37.756 16.048 C 37.768 16.028 37.783 16.005 37.816 16.013 C 37.84 16.17 37.746 16.314 37.752 16.484 C 37.791 16.467 37.821 16.461 37.842 16.443 C 37.891 16.402 37.935 16.356 37.982 16.312 C 38.059 16.242 38.135 16.172 38.213 16.103 C 38.229 16.089 38.252 16.071 38.283 16.099 C 38.275 16.119 38.268 16.142 38.255 16.161 C 38.179 16.276 38.099 16.389 38.025 16.506 C 37.952 16.621 37.86 16.714 37.736 16.775 C 37.662 16.786 37.614 16.829 37.572 16.89 C 37.522 16.964 37.46 17.029 37.404 17.098 C 37.389 17.116 37.364 17.131 37.383 17.167 C 37.444 17.167 37.508 17.167 37.572 17.167 C 37.741 17.168 37.91 17.168 38.08 17.171 C 38.179 17.173 38.278 17.176 38.377 17.185 C 38.457 17.191 38.527 17.17 38.588 17.124 C 38.69 17.047 38.789 16.964 38.889 16.883 C 38.925 16.845 38.962 16.807 38.998 16.769 C 39.006 16.763 39.014 16.757 39.02 16.75 C 39.096 16.658 39.17 16.566 39.246 16.475 C 39.279 16.435 39.299 16.381 39.36 16.362 C 39.378 16.423 39.356 16.473 39.335 16.523 C 39.308 16.587 39.28 16.65 39.252 16.713 C 39.186 16.855 39.083 16.967 38.968 17.07 C 38.95 17.086 38.931 17.102 38.914 17.12 C 38.898 17.136 38.871 17.149 38.886 17.187 C 38.962 17.189 39.04 17.194 39.118 17.195 C 39.158 17.195 39.198 17.192 39.236 17.185 C 39.446 17.144 39.657 17.126 39.871 17.132 C 39.99 17.148 40.108 17.165 40.227 17.182 C 40.35 17.215 40.473 17.249 40.597 17.283 L 40.673 17.313 C 40.74 17.343 40.807 17.372 40.874 17.402 C 40.888 17.41 40.902 17.417 40.916 17.425 C 41.064 17.503 41.213 17.582 41.361 17.66 C 41.381 17.671 41.401 17.683 41.421 17.694 C 41.539 17.766 41.656 17.838 41.774 17.91 C 41.838 17.953 41.903 17.996 41.967 18.039 C 42.17 18.184 42.375 18.328 42.556 18.501 C 42.581 18.524 42.609 18.544 42.635 18.566 C 42.668 18.602 42.702 18.637 42.735 18.673 C 42.789 18.739 42.843 18.805 42.897 18.871 C 42.955 18.957 43.014 19.042 43.072 19.128 C 43.097 19.186 43.113 19.25 43.166 19.296 C 43.23 19.302 43.294 19.308 43.358 19.315 C 43.687 19.353 43.965 19.25 44.198 19.019 C 44.26 18.968 44.311 18.91 44.338 18.83 C 44.261 18.745 44.172 18.682 44.082 18.623 C 43.953 18.538 43.821 18.459 43.693 18.374 C 43.644 18.342 43.59 18.306 43.559 18.259 C 43.527 18.209 43.487 18.18 43.439 18.153 C 43.155 17.99 42.869 17.83 42.586 17.664 C 42.373 17.538 42.159 17.411 41.953 17.273 C 41.628 17.053 41.311 16.823 40.989 16.599 C 40.713 16.405 40.433 16.217 40.128 16.068 C 39.864 15.94 39.601 15.812 39.337 15.686 C 39.274 15.656 39.209 15.633 39.145 15.607 C 39.102 15.578 39.062 15.543 39.004 15.555 C 38.957 15.529 38.911 15.499 38.863 15.476 C 38.671 15.382 38.477 15.292 38.286 15.197 C 37.944 15.026 37.604 14.851 37.262 14.68 C 37.238 14.667 37.207 14.665 37.18 14.659 L 37.181 14.66 C 37.176 14.616 37.136 14.613 37.108 14.596 C 36.94 14.499 36.771 14.407 36.605 14.307 C 36.171 14.043 35.765 13.745 35.418 13.371 C 35.169 13.102 34.913 12.839 34.66 12.574 C 34.557 12.467 34.452 12.362 34.349 12.256 C 34.338 12.245 34.326 12.234 34.315 12.223 C 34.204 12.106 34.092 11.99 33.981 11.874 C 33.941 11.831 33.903 11.787 33.864 11.744 C 33.87 11.739 33.875 11.734 33.881 11.728 C 33.907 11.742 33.935 11.753 33.958 11.771 C 34.191 11.948 34.419 12.133 34.628 12.338 C 35.011 12.713 35.391 13.091 35.769 13.471 C 36.011 13.715 36.273 13.934 36.555 14.129 C 37.048 14.469 37.587 14.723 38.125 14.978 C 38.146 14.988 38.173 14.985 38.196 14.988 L 38.195 14.986 C 38.198 15.014 38.22 15.016 38.241 15.018 C 38.416 15.119 38.606 15.187 38.797 15.253 C 38.831 15.284 38.869 15.295 38.914 15.283 C 38.92 15.288 38.926 15.292 38.932 15.297 C 38.925 15.293 38.919 15.289 38.913 15.285 C 38.886 15.239 38.842 15.216 38.796 15.197 C 38.772 15.179 38.75 15.158 38.725 15.142 C 38.504 14.999 38.282 14.859 38.062 14.714 C 37.925 14.624 37.788 14.533 37.659 14.433 C 37.24 14.106 36.84 13.756 36.447 13.398 C 36.411 13.364 36.372 13.332 36.332 13.304 C 35.953 13.033 35.629 12.705 35.339 12.344 C 35.199 12.169 35.063 11.992 34.897 11.841 C 34.625 11.592 34.331 11.372 34.008 11.193 C 33.934 11.152 33.861 11.109 33.788 11.067 C 33.477 10.89 33.208 10.666 32.998 10.376 C 32.805 10.108 32.571 9.882 32.314 9.674 C 31.868 9.314 31.394 8.998 30.879 8.744 C 30.299 8.459 29.72 8.174 29.14 7.891 C 29.115 7.879 29.084 7.879 29.056 7.874 C 29.057 7.869 29.058 7.865 29.057 7.861 C 29.056 7.859 29.051 7.858 29.048 7.856 C 29.052 7.861 29.055 7.867 29.058 7.872 C 29.212 8.04 29.365 8.208 29.518 8.375 C 29.598 8.463 29.676 8.553 29.758 8.638 C 30.27 9.171 30.833 9.647 31.414 10.104 C 31.604 10.253 31.794 10.403 31.984 10.552 L 31.986 10.597 C 31.958 10.588 31.926 10.584 31.902 10.569 C 31.636 10.406 31.364 10.251 31.117 10.058 C 30.949 9.927 30.779 9.798 30.61 9.668 C 30.441 9.538 30.273 9.407 30.104 9.277 C 30.083 9.242 30.06 9.211 30.014 9.21 L 30.015 9.211 C 30.015 9.19 30.004 9.18 29.984 9.181 L 29.986 9.182 C 29.979 9.147 29.956 9.13 29.923 9.121 L 29.925 9.123 C 29.875 9.075 29.824 9.027 29.774 8.979 C 29.761 8.964 29.749 8.948 29.736 8.934 C 29.561 8.757 29.386 8.58 29.21 8.405 C 28.9 8.097 28.589 7.79 28.277 7.483 C 28.246 7.452 28.211 7.422 28.175 7.397 C 27.855 7.178 27.531 6.965 27.216 6.74 C 26.892 6.509 26.577 6.267 26.258 6.03 C 26.154 5.953 26.054 5.87 25.946 5.8 C 25.445 5.474 24.92 5.192 24.377 4.942 C 23.934 4.738 23.48 4.562 23.024 4.39 C 22.634 4.243 22.242 4.097 21.85 3.953 C 21.29 3.748 20.741 3.514 20.163 3.359 C 19.994 3.314 19.824 3.28 19.649 3.288 C 19.505 3.294 19.361 3.309 19.217 3.322 C 19.178 3.326 19.139 3.337 19.101 3.348 C 19.039 3.367 19.01 3.411 19.025 3.473 C 19.033 3.505 19.051 3.538 19.073 3.563 C 19.185 3.689 19.299 3.813 19.412 3.938 C 19.468 4.026 19.529 4.111 19.578 4.202 C 19.931 4.864 20.175 5.561 20.242 6.313 C 20.264 6.56 20.269 6.808 20.209 7.051 C 20.157 7.261 20.149 7.471 20.186 7.684 C 20.19 7.708 20.192 7.733 20.191 7.758 C 20.189 7.839 20.154 7.884 20.076 7.912 C 20.026 7.93 19.99 7.914 19.968 7.866 C 19.941 7.808 19.949 7.75 19.965 7.692 C 19.979 7.639 20.002 7.587 20.005 7.534 C 20.01 7.436 20.012 7.335 20 7.237 C 19.967 6.947 19.918 6.659 19.847 6.375 C 19.748 5.983 19.578 5.62 19.376 5.272 C 19.277 5.1 19.176 4.928 19.057 4.77 C 18.894 4.552 18.713 4.347 18.538 4.138 C 18.528 4.126 18.506 4.124 18.489 4.118 L 18.49 4.12 C 18.508 4.085 18.487 4.07 18.458 4.06 L 18.459 4.061 Z M 11.113 1.172 L 11.111 1.174 C 11.176 1.151 11.221 1.103 11.267 1.056 C 11.313 1.038 11.353 1.014 11.377 0.971 C 11.269 0.843 11.164 0.763 11.015 0.708 C 10.784 0.623 10.546 0.581 10.299 0.627 C 10.226 0.64 10.152 0.651 10.08 0.668 C 9.824 0.73 9.572 0.8 9.331 0.909 C 9.018 1.05 8.75 1.249 8.522 1.503 C 8.502 1.527 8.462 1.545 8.481 1.589 L 8.483 1.587 C 8.433 1.578 8.424 1.622 8.403 1.65 C 8.323 1.725 8.26 1.814 8.213 1.912 C 8.177 1.987 8.141 2.065 8.124 2.146 C 8.086 2.325 8.081 2.508 8.1 2.69 C 8.109 2.782 8.129 2.876 8.162 2.963 C 8.233 3.147 8.327 3.321 8.456 3.473 C 8.503 3.558 8.549 3.643 8.601 3.739 C 8.678 3.697 8.761 3.654 8.842 3.607 C 9.043 3.491 9.243 3.374 9.443 3.257 C 9.469 3.242 9.495 3.228 9.52 3.211 C 9.667 3.111 9.824 3.029 9.989 2.962 C 10.012 2.959 10.035 2.957 10.057 2.954 C 10.063 2.932 10.066 2.918 10.07 2.903 C 10.189 2.381 10.427 1.92 10.784 1.521 C 10.853 1.443 10.928 1.37 10.999 1.295 C 11.015 1.278 11.039 1.263 11.025 1.233 L 11.023 1.235 C 11.076 1.248 11.092 1.207 11.113 1.172 Z M 15.445 17.261 C 14.991 17.004 14.503 16.855 13.984 16.796 C 13.736 16.767 13.501 16.806 13.276 16.912 C 13.128 16.982 12.977 17.043 12.829 17.112 C 12.789 17.13 12.757 17.162 12.721 17.188 C 12.575 17.273 12.43 17.359 12.284 17.441 C 12.067 17.563 11.846 17.675 11.608 17.75 C 11.581 17.758 11.554 17.768 11.525 17.779 C 11.535 17.858 11.553 17.932 11.551 18.004 C 11.548 18.113 11.53 18.22 11.518 18.328 C 11.514 18.363 11.504 18.397 11.504 18.431 C 11.503 18.513 11.552 18.562 11.633 18.559 C 11.676 18.557 11.722 18.548 11.762 18.531 C 11.868 18.488 11.97 18.437 12.074 18.392 C 12.188 18.343 12.302 18.294 12.418 18.252 C 12.512 18.218 12.61 18.205 12.711 18.218 C 12.76 18.225 12.81 18.223 12.86 18.226 C 12.961 18.27 13.061 18.258 13.161 18.218 C 13.202 18.202 13.244 18.187 13.285 18.171 C 13.564 18.061 13.836 17.932 14.127 17.854 C 14.131 17.852 14.135 17.848 14.139 17.845 C 14.182 17.835 14.224 17.825 14.267 17.815 C 14.307 17.811 14.346 17.808 14.385 17.802 C 14.513 17.784 14.64 17.76 14.769 17.748 C 14.981 17.728 15.195 17.712 15.408 17.701 C 15.708 17.686 16.005 17.694 16.296 17.778 C 16.304 17.781 16.314 17.776 16.333 17.773 C 16.246 17.674 16.14 17.613 16.025 17.566 C 15.908 17.504 15.791 17.441 15.673 17.381 C 15.648 17.368 15.617 17.365 15.589 17.358 C 15.564 17.292 15.498 17.286 15.445 17.261 Z M 18.432 19.375 C 18.494 19.36 18.557 19.347 18.619 19.329 C 18.635 19.325 18.648 19.31 18.671 19.293 C 18.63 19.277 18.603 19.266 18.575 19.257 C 18.235 19.141 17.914 18.989 17.62 18.779 C 17.325 18.567 17.008 18.391 16.685 18.226 C 16.512 18.138 16.333 18.062 16.148 18.005 C 16.039 17.971 15.931 17.931 15.815 17.932 C 15.613 17.875 15.407 17.849 15.197 17.853 C 14.909 17.859 14.622 17.879 14.339 17.935 C 14.113 17.979 13.896 18.05 13.7 18.169 C 13.56 18.254 13.427 18.35 13.274 18.41 C 13.27 18.411 13.268 18.417 13.261 18.426 C 13.291 18.479 13.323 18.534 13.354 18.59 C 13.369 18.631 13.402 18.617 13.429 18.611 C 13.569 18.579 13.709 18.543 13.849 18.514 C 14.304 18.418 14.739 18.476 15.152 18.686 C 15.325 18.773 15.498 18.857 15.679 18.927 C 16.022 19.059 16.362 19.2 16.721 19.282 C 16.948 19.334 17.179 19.369 17.41 19.403 C 17.751 19.452 18.093 19.442 18.432 19.375 Z M 42.32 17.19 C 42.34 17.218 42.36 17.245 42.404 17.236 C 42.407 17.194 42.378 17.178 42.348 17.162 C 42.277 17.08 42.205 16.998 42.134 16.915 C 41.798 16.523 41.492 16.106 41.128 15.738 C 40.942 15.551 40.761 15.361 40.574 15.176 C 40.51 15.113 40.438 15.06 40.365 15.007 C 40.074 14.798 39.758 14.63 39.431 14.483 C 39.064 14.318 38.685 14.181 38.299 14.064 C 38.052 13.989 37.805 13.915 37.557 13.841 C 37.537 13.835 37.515 13.834 37.483 13.83 C 37.58 13.944 37.82 14.145 37.979 14.249 C 38.017 14.281 38.053 14.315 38.093 14.344 C 38.29 14.487 38.487 14.63 38.686 14.77 C 39.132 15.085 39.552 15.435 40.01 15.733 C 40.085 15.781 40.159 15.832 40.239 15.871 C 40.624 16.06 40.988 16.281 41.341 16.522 C 41.575 16.681 41.811 16.838 42.045 16.995 C 42.137 17.06 42.228 17.125 42.32 17.19 Z M 38.552 17.628 C 38.408 17.657 38.273 17.707 38.154 17.794 C 38.019 17.847 37.902 17.932 37.786 18.017 C 37.622 18.138 37.463 18.264 37.299 18.385 C 36.978 18.623 36.686 18.891 36.431 19.197 C 36.311 19.342 36.188 19.485 36.098 19.652 C 36.094 19.661 36.089 19.671 36.085 19.681 C 36.096 19.677 36.106 19.674 36.117 19.67 C 36.166 19.646 36.216 19.625 36.263 19.598 C 36.442 19.498 36.63 19.42 36.827 19.365 C 37.119 19.283 37.413 19.211 37.718 19.196 C 38.029 19.18 38.336 19.202 38.631 19.304 C 38.938 19.41 39.226 19.553 39.492 19.742 C 39.716 19.901 39.922 20.08 40.121 20.267 C 40.397 20.526 40.647 20.81 40.853 21.128 C 41.22 21.694 41.348 22.322 41.288 22.99 C 41.274 23.137 41.269 23.286 41.231 23.431 C 41.159 23.71 41.091 23.989 41.046 24.273 C 41.008 24.508 40.983 24.745 40.976 24.983 C 40.968 25.215 41.043 25.422 41.179 25.607 C 41.222 25.666 41.278 25.719 41.338 25.761 C 41.465 25.852 41.605 25.86 41.749 25.803 C 41.819 25.776 41.882 25.736 41.936 25.683 C 42.058 25.565 42.162 25.433 42.244 25.284 C 42.303 25.175 42.367 25.069 42.428 24.961 C 42.452 24.917 42.474 24.873 42.495 24.828 C 42.599 24.603 42.701 24.377 42.806 24.153 C 42.902 23.95 42.981 23.742 43.016 23.52 C 43.041 23.409 43.07 23.299 43.092 23.188 C 43.182 22.746 43.266 22.303 43.325 21.856 C 43.343 21.718 43.367 21.582 43.381 21.444 C 43.4 21.261 43.398 21.077 43.35 20.897 C 43.244 20.505 43.137 20.114 43.028 19.722 C 42.998 19.612 42.952 19.508 42.891 19.41 C 42.744 19.173 42.574 18.954 42.378 18.756 C 41.929 18.301 41.397 17.966 40.823 17.694 C 40.482 17.533 40.114 17.474 39.739 17.454 C 39.524 17.443 39.312 17.472 39.1 17.498 C 38.913 17.521 38.727 17.554 38.552 17.628 Z M 43.369 20.05 C 43.387 20.111 43.405 20.173 43.425 20.234 C 43.48 20.408 43.539 20.582 43.592 20.757 C 43.672 21.022 43.676 21.293 43.643 21.566 C 43.613 21.816 43.582 22.067 43.552 22.317 C 43.547 22.351 43.538 22.385 43.538 22.42 C 43.537 22.457 43.51 22.496 43.531 22.524 C 43.605 22.551 43.671 22.572 43.735 22.597 C 43.875 22.65 44.018 22.687 44.169 22.696 C 44.544 22.717 44.913 22.677 45.277 22.589 C 45.591 22.514 45.871 22.367 46.132 22.181 C 46.452 21.952 46.496 21.9 46.688 21.557 C 46.712 21.513 46.731 21.468 46.752 21.423 C 46.771 21.38 46.772 21.337 46.749 21.295 C 46.711 21.228 46.704 21.154 46.699 21.079 C 46.694 21.015 46.687 20.951 46.68 20.887 C 46.653 20.633 46.55 20.412 46.383 20.219 C 46.265 20.084 46.132 19.965 45.987 19.859 C 45.551 19.54 45.113 19.222 44.674 18.905 C 44.664 18.897 44.648 18.897 44.63 18.893 C 44.616 18.915 44.604 18.936 44.589 18.956 C 44.416 19.181 44.231 19.393 43.989 19.548 C 43.867 19.626 43.753 19.714 43.633 19.792 C 43.558 19.841 43.478 19.881 43.4 19.924 C 43.38 19.935 43.36 19.945 43.336 19.957 C 43.349 19.994 43.359 20.022 43.369 20.05 Z M 3.327 20.096 L 3.332 20.09 L 3.324 20.088 L 3.327 20.096 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.240,
    height: 0.328,
    viewBox: "0 0 0.240 0.328",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.121,
      top: 10.394,
      width: 0.24,
      height: 0.328,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.3 L 0.231 0 L 0.24 0.007 C 0.192 0.126 0.12 0.229 0.039 0.328 C 0.026 0.318 0.013 0.309 0 0.3 L 0 0.3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.164,
    height: 0.201,
    viewBox: "0 0 0.164 0.201",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.771,
      top: 9.664,
      width: 0.164,
      height: 0.201,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.191 C 0.047 0.128 0.095 0.064 0.142 0 C 0.149 0.01 0.157 0.019 0.164 0.029 C 0.124 0.097 0.073 0.155 0.008 0.201 L 0 0.191 L 0 0.191 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.119,
    height: 0.160,
    viewBox: "0 0 0.119 0.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.66,
      top: 9.856,
      width: 0.119,
      height: 0.16,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 0.16 C 0.01 0.087 0.065 0.046 0.111 0 L 0.119 0.009 C 0.097 0.073 0.047 0.114 0 0.159 L 0.002 0.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.066,
    height: 0.083,
    viewBox: "0 0 0.066 0.083",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.597,
      top: 10.014,
      width: 0.066,
      height: 0.083,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.058 C 0.013 0.048 0.026 0.038 0.039 0.027 C 0.048 0.019 0.057 0.01 0.066 0.001 L 0.064 0 C 0.054 0.008 0.043 0.015 0.036 0.026 C 0.024 0.044 0.014 0.064 0.004 0.083 C 0.008 0.074 0.007 0.065 0 0.058 L 0 0.058 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.060,
    height: 0.063,
    viewBox: "0 0 0.060 0.063",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.48,
      top: 10.16,
      width: 0.06,
      height: 0.063,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 0.063 C 0.02 0.042 0.038 0.021 0.057 0 L 0.06 0.003 C 0.051 0.034 0.034 0.056 0 0.062 L 0.001 0.063 L 0.002 0.063 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.060,
    height: 0.065,
    viewBox: "0 0 0.060 0.065",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.391,
      top: 10.277,
      width: 0.06,
      height: 0.065,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.001 0.065 C 0.018 0.043 0.036 0.022 0.054 0 L 0.06 0.005 C 0.05 0.035 0.037 0.061 0 0.064 L 0.001 0.065 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.057,
    height: 0.062,
    viewBox: "0 0 0.057 0.062",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.546,
      top: 10.072,
      width: 0.057,
      height: 0.062,
      color: "rgb(150,100,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.051 0 C 0.058 0.007 0.059 0.016 0.054 0.025 C 0.044 0.036 0.034 0.048 0.023 0.059 C 0.015 0.063 0.008 0.063 0 0.06 C 0.017 0.04 0.034 0.02 0.051 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.039,
    height: 0.072,
    viewBox: "0 0 0.039 0.072",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.913,
      top: 9.621,
      width: 0.039,
      height: 0.072,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.033 0 C 0.035 0.018 0.037 0.035 0.039 0.053 C 0.033 0.059 0.026 0.066 0.02 0.072 C 0.013 0.062 0.007 0.053 0 0.043 C 0.011 0.028 0.022 0.014 0.033 0 L 0.033 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.035,
    height: 0.060,
    viewBox: "0 0 0.035 0.060",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.352,
      top: 10.341,
      width: 0.035,
      height: 0.06,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.053 C 0.012 0.035 0.023 0.018 0.035 0.001 L 0.034 0 C 0.032 0.023 0.034 0.049 0.008 0.06 L 0 0.053 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.033,
    height: 0.060,
    viewBox: "0 0 0.033 0.060",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.444,
      top: 10.222,
      width: 0.033,
      height: 0.06,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.055 C 0.011 0.037 0.022 0.019 0.033 0.001 L 0.032 0 C 0.023 0.02 0.014 0.04 0.005 0.06 L 0 0.055 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.028,
    height: 0.031,
    viewBox: "0 0 0.028 0.031",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.537,
      top: 10.131,
      width: 0.028,
      height: 0.031,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.008 0.001 C 0.015 0.004 0.021 0.003 0.028 0 C 0.02 0.01 0.011 0.021 0.003 0.031 L 0 0.028 C 0.003 0.019 0.005 0.01 0.008 0.001 L 0.008 0.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.705,
    height: 15.682,
    viewBox: "0 0 26.705 15.682",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.494,
      top: 3.639,
      width: 26.705,
      height: 15.682,
      color: "rgb(255,186,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.824 1.839 C 6.839 1.961 6.848 2.085 6.9 2.201 C 6.991 2.407 7.009 2.618 6.948 2.839 C 6.919 2.94 6.888 3.046 6.907 3.156 C 6.926 3.129 6.951 3.105 6.963 3.075 C 6.997 2.987 7.025 2.898 7.057 2.809 C 7.069 2.773 7.084 2.739 7.102 2.692 C 7.161 2.793 7.18 2.892 7.164 2.99 C 7.134 3.17 7.094 3.349 7.05 3.527 C 7.017 3.661 6.973 3.793 6.969 3.933 C 6.968 3.951 6.962 3.974 6.993 3.978 C 7.039 3.953 7.063 3.909 7.08 3.863 C 7.123 3.752 7.161 3.64 7.201 3.528 C 7.218 3.481 7.233 3.434 7.249 3.388 C 7.277 3.309 7.305 3.23 7.334 3.151 C 7.341 3.133 7.352 3.117 7.361 3.099 C 7.421 3.121 7.446 3.173 7.484 3.211 C 7.547 3.274 7.61 3.336 7.675 3.397 C 7.686 3.407 7.706 3.408 7.73 3.416 C 7.724 3.331 7.688 3.272 7.66 3.209 C 7.519 2.904 7.336 2.618 7.232 2.295 C 7.157 2.187 7.169 2.067 7.176 1.937 L 6.815 1.721 C 6.818 1.762 6.82 1.801 6.824 1.839 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.79 1.715 C 4.783 1.588 4.751 1.469 4.684 1.365 C 4.619 1.262 4.546 1.164 4.473 1.066 C 4.451 1.037 4.43 1.008 4.408 0.979 C 4.4 0.968 4.387 0.959 4.37 0.947 C 4.362 0.942 4.353 0.935 4.342 0.927 C 4.342 0.943 4.342 0.956 4.341 0.968 C 4.341 0.991 4.34 1.009 4.343 1.027 C 4.37 1.176 4.433 1.311 4.497 1.447 L 4.501 1.456 L 4.517 1.49 C 4.56 1.582 4.604 1.676 4.622 1.773 C 4.645 1.896 4.681 2.013 4.717 2.131 C 4.741 2.206 4.764 2.282 4.783 2.358 C 4.786 2.368 4.791 2.377 4.799 2.39 C 4.804 2.397 4.81 2.406 4.816 2.417 C 4.853 2.347 4.847 2.288 4.842 2.231 L 4.84 2.216 C 4.834 2.154 4.827 2.093 4.82 2.031 C 4.809 1.926 4.797 1.821 4.79 1.715 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.048 3.44 C 4.153 3.28 4.2 3.11 4.141 2.921 C 4.103 2.802 4.085 2.68 4.093 2.555 L 4.093 2.545 C 4.096 2.504 4.099 2.463 4.096 2.422 C 4.085 2.236 4.025 2.064 3.936 1.902 C 3.916 1.865 3.89 1.823 3.836 1.826 C 3.805 1.827 3.794 1.879 3.816 1.958 C 3.842 2.054 3.869 2.15 3.897 2.245 C 3.915 2.306 3.932 2.367 3.95 2.429 C 3.97 2.502 3.99 2.576 4.009 2.649 L 4.015 2.672 C 4.042 2.775 4.036 2.875 4.005 2.979 C 3.96 3.133 3.973 3.29 4.014 3.45 C 4.025 3.447 4.032 3.445 4.037 3.444 C 4.044 3.442 4.047 3.441 4.048 3.44 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.265 2.679 C 3.34 2.611 3.353 2.533 3.354 2.455 L 3.354 2.415 C 3.355 2.3 3.357 2.184 3.343 2.071 C 3.33 1.967 3.303 1.864 3.275 1.762 L 3.262 1.711 C 3.248 1.659 3.221 1.61 3.172 1.578 C 3.133 1.552 3.074 1.563 3.059 1.606 C 3.047 1.642 3.043 1.683 3.047 1.721 C 3.054 1.785 3.065 1.848 3.076 1.911 L 3.086 1.969 L 3.108 2.097 C 3.128 2.22 3.149 2.343 3.172 2.465 C 3.185 2.537 3.201 2.61 3.265 2.679 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.283 4.252 C 5.396 4.004 5.501 3.752 5.527 3.476 L 5.531 3.436 C 5.539 3.351 5.547 3.265 5.55 3.18 C 5.552 3.119 5.52 3.078 5.484 3.078 C 5.452 3.077 5.42 3.105 5.409 3.158 C 5.4 3.201 5.394 3.245 5.388 3.288 C 5.383 3.323 5.378 3.358 5.371 3.393 C 5.354 3.484 5.337 3.576 5.319 3.667 C 5.296 3.79 5.272 3.912 5.25 4.035 C 5.246 4.056 5.243 4.076 5.239 4.096 C 5.224 4.171 5.209 4.247 5.211 4.326 C 5.254 4.321 5.267 4.291 5.277 4.264 C 5.279 4.26 5.281 4.256 5.283 4.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.051 9.347 C 11.921 9.483 11.788 9.616 11.655 9.748 C 11.638 9.764 11.618 9.776 11.597 9.787 C 11.588 9.793 11.578 9.798 11.569 9.804 L 11.538 9.825 L 11.536 9.83 L 11.532 9.829 L 11.518 9.838 L 11.52 9.835 C 11.521 9.832 11.524 9.829 11.524 9.829 C 11.526 9.828 11.529 9.828 11.532 9.829 L 11.534 9.828 L 11.538 9.825 L 11.549 9.785 C 11.57 9.758 11.591 9.73 11.612 9.703 C 11.662 9.636 11.712 9.568 11.767 9.505 C 11.836 9.425 11.888 9.338 11.92 9.237 C 11.941 9.172 11.967 9.107 11.996 9.044 C 12.012 9.009 12.034 8.975 12.061 8.947 C 12.075 8.931 12.105 8.919 12.126 8.921 C 12.161 8.926 12.164 8.961 12.166 8.991 C 12.174 9.125 12.145 9.248 12.051 9.347 Z M 3.013 7.252 L 3.023 7.255 C 3.019 7.256 3.015 7.258 3.011 7.259 L 3 7.264 L 2.998 7.265 L 2.995 7.269 L 2.965 7.299 L 2.963 7.299 C 2.96 7.334 2.939 7.351 2.906 7.357 L 2.906 7.359 L 2.845 7.388 L 2.843 7.389 C 2.843 7.426 2.819 7.44 2.786 7.446 L 2.786 7.448 L 2.784 7.448 C 2.771 7.471 2.751 7.478 2.727 7.476 L 2.726 7.478 L 2.722 7.48 L 2.718 7.487 C 2.712 7.498 2.706 7.51 2.699 7.52 C 2.698 7.522 2.691 7.52 2.684 7.518 C 2.681 7.517 2.678 7.516 2.676 7.515 L 2.677 7.511 C 2.677 7.508 2.678 7.504 2.68 7.503 C 2.691 7.496 2.703 7.49 2.714 7.484 L 2.722 7.48 L 2.724 7.475 L 2.727 7.476 C 2.738 7.451 2.759 7.445 2.784 7.448 L 2.785 7.446 L 2.786 7.446 C 2.786 7.408 2.811 7.395 2.843 7.389 L 2.843 7.386 L 2.904 7.357 L 2.906 7.357 C 2.908 7.321 2.933 7.307 2.963 7.299 L 2.963 7.298 C 2.973 7.287 2.983 7.277 2.993 7.267 L 2.998 7.265 L 3 7.264 C 3.004 7.26 3.008 7.255 3.013 7.252 Z M 13.306 10.225 L 13.276 10.243 C 13.272 10.261 13.269 10.275 13.266 10.287 C 13.262 10.309 13.259 10.323 13.253 10.336 C 13.238 10.371 13.223 10.406 13.207 10.441 C 13.187 10.487 13.166 10.533 13.147 10.579 C 13.098 10.699 13.078 10.825 13.077 10.955 C 13.076 11.044 13.066 11.133 13.054 11.221 C 13.039 11.324 13.002 11.422 12.949 11.512 C 12.94 11.526 12.926 11.538 12.909 11.552 C 12.901 11.559 12.891 11.567 12.882 11.576 C 12.821 11.452 12.791 11.336 12.802 11.21 C 12.805 11.181 12.808 11.15 12.818 11.123 C 12.878 10.945 12.939 10.768 13.001 10.591 C 13.007 10.573 13.019 10.555 13.032 10.541 C 13.095 10.471 13.148 10.395 13.191 10.31 C 13.198 10.296 13.213 10.286 13.235 10.272 C 13.246 10.265 13.259 10.257 13.273 10.246 C 13.272 10.243 13.27 10.239 13.269 10.235 C 13.265 10.227 13.262 10.218 13.264 10.213 C 13.268 10.201 13.277 10.192 13.285 10.182 C 13.288 10.178 13.292 10.173 13.295 10.169 C 13.31 10.089 13.348 10.019 13.386 9.95 C 13.403 9.919 13.42 9.888 13.435 9.857 C 13.42 9.99 13.386 10.116 13.306 10.225 Z M 7.349 6.358 C 7.333 6.505 7.142 6.707 6.994 6.735 C 6.988 6.736 6.981 6.735 6.974 6.733 L 6.967 6.732 L 6.967 6.733 L 6.961 6.742 L 6.965 6.731 L 6.967 6.732 C 6.97 6.728 6.972 6.725 6.974 6.721 C 6.979 6.713 6.984 6.704 6.992 6.698 C 7.094 6.621 7.152 6.515 7.188 6.394 C 7.196 6.366 7.205 6.338 7.218 6.312 C 7.232 6.282 7.277 6.272 7.309 6.287 C 7.339 6.301 7.353 6.326 7.349 6.358 Z M 14.162 8.34 C 14.118 8.334 14.107 8.314 14.129 8.28 C 14.131 8.261 14.133 8.242 14.135 8.224 C 14.14 8.179 14.145 8.134 14.152 8.09 C 14.161 8.034 14.194 8.007 14.241 8.01 C 14.285 8.013 14.32 8.048 14.326 8.098 C 14.328 8.117 14.327 8.137 14.324 8.156 C 14.298 8.307 14.272 8.457 14.245 8.607 C 14.241 8.628 14.233 8.649 14.223 8.676 C 14.218 8.69 14.213 8.706 14.206 8.724 C 14.199 8.712 14.192 8.703 14.187 8.695 C 14.178 8.682 14.172 8.674 14.171 8.665 C 14.168 8.584 14.166 8.503 14.164 8.422 L 14.162 8.34 Z M 2.509 5.519 C 2.492 5.547 2.473 5.58 2.429 5.574 L 2.413 5.588 C 2.417 5.582 2.421 5.576 2.426 5.571 C 2.426 5.564 2.426 5.558 2.427 5.552 C 2.427 5.538 2.428 5.525 2.431 5.512 C 2.454 5.428 2.478 5.344 2.501 5.26 C 2.526 5.168 2.552 5.076 2.577 4.984 C 2.589 4.94 2.599 4.895 2.609 4.85 L 2.618 4.812 C 2.62 4.801 2.622 4.791 2.624 4.781 C 2.626 4.767 2.628 4.753 2.632 4.739 C 2.646 4.686 2.683 4.654 2.723 4.658 C 2.771 4.663 2.811 4.712 2.801 4.766 C 2.796 4.79 2.791 4.815 2.786 4.84 C 2.761 4.975 2.735 5.11 2.667 5.234 C 2.65 5.264 2.633 5.295 2.617 5.325 C 2.581 5.39 2.546 5.455 2.509 5.519 Z M 3.767 3.908 C 3.792 4.035 3.797 4.165 3.764 4.291 C 3.75 4.343 3.737 4.396 3.724 4.448 C 3.685 4.607 3.646 4.765 3.58 4.916 C 3.56 4.962 3.535 5.005 3.51 5.049 C 3.498 5.07 3.487 5.09 3.475 5.111 C 3.46 5.192 3.425 5.264 3.352 5.348 C 3.366 5.254 3.4 5.185 3.433 5.119 C 3.443 5.098 3.453 5.078 3.463 5.057 L 3.467 5.011 L 3.465 5.003 C 3.463 4.997 3.461 4.991 3.461 4.984 C 3.46 4.982 3.463 4.979 3.465 4.977 L 3.469 4.973 L 3.473 4.918 C 3.495 4.626 3.517 4.333 3.593 4.049 C 3.618 3.959 3.647 3.871 3.71 3.786 C 3.75 3.823 3.758 3.866 3.766 3.906 L 3.767 3.908 Z M 7.38 9.287 C 7.412 9.225 7.447 9.165 7.487 9.109 C 7.552 9.018 7.619 8.928 7.685 8.838 C 7.713 8.801 7.741 8.763 7.769 8.725 L 7.847 8.555 L 8.009 8.198 C 8.024 8.167 8.039 8.135 8.057 8.097 L 8.089 8.03 C 8.079 8.172 7.954 8.486 7.821 8.727 C 7.811 8.749 7.801 8.771 7.791 8.793 C 7.769 8.844 7.747 8.894 7.722 8.943 C 7.676 9.031 7.635 9.121 7.616 9.219 C 7.611 9.246 7.603 9.271 7.595 9.297 C 7.586 9.323 7.578 9.35 7.573 9.377 C 7.537 9.575 7.419 9.72 7.268 9.838 C 7.198 9.893 7.123 9.942 7.047 9.989 C 7.036 9.996 7.025 10.002 7.014 10.009 C 6.991 10.024 6.968 10.038 6.945 10.052 C 6.933 10.06 6.902 10.057 6.894 10.047 C 6.884 10.036 6.883 10.007 6.892 9.995 C 6.903 9.977 6.915 9.959 6.927 9.942 C 6.967 9.881 7.008 9.819 7.059 9.768 C 7.197 9.627 7.29 9.459 7.38 9.287 Z M 9.017 7.759 L 8.995 7.748 C 8.995 7.737 8.995 7.726 8.994 7.715 C 8.994 7.691 8.994 7.668 8.995 7.645 L 9.002 7.527 C 9.011 7.379 9.019 7.23 9.032 7.082 C 9.038 7.018 9.055 6.955 9.072 6.893 L 9.076 6.879 L 9.078 6.871 C 9.12 6.716 9.162 6.562 9.165 6.398 C 9.167 6.34 9.182 6.282 9.197 6.225 C 9.203 6.2 9.21 6.176 9.215 6.151 C 9.224 6.111 9.233 6.072 9.242 6.032 C 9.261 5.951 9.279 5.87 9.294 5.789 C 9.325 5.623 9.36 5.458 9.43 5.303 C 9.448 5.264 9.473 5.225 9.502 5.193 C 9.531 5.161 9.576 5.161 9.612 5.181 C 9.648 5.199 9.66 5.231 9.658 5.267 C 9.656 5.296 9.649 5.326 9.639 5.354 C 9.526 5.656 9.448 5.968 9.381 6.283 C 9.378 6.297 9.376 6.311 9.373 6.325 C 9.367 6.36 9.36 6.395 9.348 6.428 C 9.295 6.57 9.284 6.718 9.291 6.867 C 9.296 7.008 9.27 7.142 9.224 7.275 C 9.212 7.31 9.201 7.345 9.189 7.381 C 9.155 7.487 9.121 7.593 9.064 7.69 C 9.054 7.707 9.043 7.723 9.032 7.739 L 9.017 7.759 Z M 13.608 7.271 C 13.555 7.507 13.501 7.743 13.442 7.979 C 13.427 8.041 13.403 8.102 13.38 8.163 C 13.373 8.181 13.366 8.199 13.36 8.217 C 13.356 8.227 13.348 8.236 13.337 8.249 C 13.331 8.256 13.324 8.264 13.316 8.275 C 13.308 8.149 13.333 8.049 13.366 7.953 C 13.425 7.783 13.422 7.614 13.398 7.44 C 13.381 7.313 13.366 7.185 13.378 7.056 C 13.384 6.996 13.381 6.936 13.377 6.875 C 13.376 6.851 13.375 6.827 13.374 6.804 C 13.373 6.765 13.386 6.736 13.42 6.718 C 13.455 6.7 13.5 6.707 13.527 6.744 C 13.555 6.784 13.581 6.828 13.594 6.874 C 13.633 7.004 13.637 7.138 13.608 7.271 Z M 4.684 1.365 C 4.751 1.469 4.783 1.588 4.79 1.715 C 4.797 1.821 4.809 1.926 4.82 2.031 C 4.827 2.093 4.834 2.154 4.84 2.216 L 4.842 2.231 C 4.847 2.288 4.853 2.347 4.816 2.417 C 4.81 2.406 4.804 2.397 4.799 2.39 C 4.791 2.377 4.786 2.368 4.783 2.358 C 4.764 2.282 4.741 2.206 4.717 2.131 C 4.681 2.013 4.645 1.896 4.622 1.773 C 4.604 1.676 4.56 1.582 4.517 1.49 L 4.501 1.456 L 4.497 1.447 C 4.433 1.311 4.37 1.176 4.343 1.027 C 4.34 1.009 4.341 0.991 4.341 0.968 C 4.342 0.956 4.342 0.943 4.342 0.927 C 4.353 0.935 4.362 0.942 4.37 0.947 C 4.387 0.959 4.4 0.968 4.408 0.979 C 4.43 1.008 4.451 1.037 4.473 1.066 C 4.546 1.164 4.619 1.262 4.684 1.365 Z M 4.141 2.921 C 4.2 3.11 4.153 3.28 4.048 3.44 C 4.047 3.441 4.044 3.442 4.037 3.444 C 4.032 3.445 4.025 3.447 4.014 3.45 C 3.973 3.29 3.96 3.133 4.005 2.979 C 4.036 2.875 4.042 2.775 4.015 2.672 L 4.009 2.649 C 3.99 2.576 3.97 2.502 3.95 2.429 C 3.932 2.367 3.915 2.306 3.897 2.245 C 3.869 2.15 3.842 2.054 3.816 1.958 C 3.794 1.879 3.805 1.827 3.836 1.826 C 3.89 1.823 3.916 1.865 3.936 1.902 C 4.025 2.064 4.085 2.236 4.096 2.422 C 4.099 2.463 4.096 2.504 4.093 2.545 L 4.093 2.555 C 4.085 2.68 4.103 2.802 4.141 2.921 Z M 3.354 2.455 C 3.353 2.533 3.34 2.611 3.265 2.679 C 3.201 2.61 3.185 2.537 3.172 2.465 C 3.149 2.343 3.128 2.22 3.108 2.097 L 3.086 1.969 L 3.076 1.911 C 3.065 1.848 3.054 1.785 3.047 1.721 C 3.043 1.683 3.047 1.642 3.059 1.606 C 3.074 1.563 3.133 1.552 3.172 1.578 C 3.221 1.61 3.248 1.659 3.262 1.711 L 3.275 1.762 C 3.303 1.864 3.33 1.967 3.343 2.071 C 3.357 2.184 3.355 2.3 3.354 2.415 L 3.354 2.455 Z M 12.172 7.653 C 12.16 7.689 12.141 7.724 12.094 7.742 C 12.092 7.662 12.108 7.589 12.124 7.518 C 12.129 7.494 12.134 7.47 12.139 7.445 C 12.144 7.42 12.151 7.394 12.158 7.369 C 12.161 7.356 12.165 7.343 12.168 7.33 C 12.198 7.21 12.209 7.09 12.206 6.965 C 12.203 6.785 12.211 6.606 12.219 6.426 C 12.222 6.364 12.225 6.302 12.227 6.239 C 12.228 6.215 12.237 6.191 12.246 6.168 C 12.251 6.155 12.262 6.144 12.272 6.134 C 12.301 6.104 12.358 6.117 12.368 6.157 C 12.374 6.181 12.376 6.206 12.376 6.23 C 12.375 6.287 12.375 6.344 12.374 6.4 C 12.374 6.566 12.373 6.732 12.365 6.897 C 12.36 7.01 12.342 7.124 12.313 7.233 C 12.284 7.343 12.245 7.451 12.206 7.559 C 12.194 7.59 12.183 7.622 12.172 7.653 Z M 7.956 10.042 C 7.973 10.007 7.995 9.973 8.019 9.942 C 8.12 9.815 8.221 9.687 8.322 9.56 L 8.509 9.324 C 8.536 9.29 8.562 9.255 8.589 9.221 C 8.614 9.189 8.638 9.156 8.663 9.125 C 8.673 9.113 8.683 9.103 8.696 9.09 C 8.702 9.083 8.71 9.076 8.718 9.067 C 8.734 9.155 8.71 9.222 8.682 9.284 C 8.551 9.57 8.385 9.833 8.161 10.056 C 8.13 10.087 8.092 10.113 8.055 10.137 C 8.027 10.155 7.997 10.145 7.973 10.124 C 7.949 10.101 7.943 10.07 7.956 10.042 Z M 10.175 7.793 C 10.159 7.847 10.14 7.904 10.075 7.959 C 10.095 7.769 10.117 7.605 10.145 7.441 C 10.165 7.326 10.182 7.211 10.199 7.096 C 10.208 7.04 10.216 6.984 10.225 6.929 C 10.231 6.885 10.239 6.841 10.246 6.797 L 10.247 6.791 C 10.249 6.778 10.251 6.765 10.254 6.753 C 10.277 6.681 10.332 6.635 10.378 6.649 C 10.428 6.664 10.46 6.722 10.455 6.795 C 10.454 6.819 10.449 6.844 10.442 6.867 L 10.413 6.969 C 10.334 7.244 10.256 7.518 10.175 7.793 Z M 13.795 10.497 C 13.766 10.695 13.767 10.891 13.769 11.09 C 13.772 11.231 13.771 11.372 13.771 11.513 C 13.77 11.575 13.77 11.637 13.77 11.698 C 13.761 11.66 13.752 11.622 13.742 11.584 C 13.686 11.355 13.631 11.128 13.656 10.892 C 13.673 10.728 13.697 10.565 13.722 10.401 L 13.73 10.348 C 13.734 10.323 13.738 10.299 13.742 10.274 C 13.759 10.167 13.777 10.06 13.768 9.95 C 13.767 9.931 13.764 9.912 13.762 9.893 C 13.758 9.868 13.755 9.842 13.754 9.817 C 13.753 9.783 13.757 9.748 13.767 9.715 C 13.771 9.701 13.795 9.684 13.81 9.684 C 13.825 9.684 13.851 9.701 13.853 9.715 C 13.861 9.753 13.865 9.793 13.861 9.832 C 13.856 9.886 13.852 9.94 13.848 9.993 C 13.834 10.162 13.82 10.33 13.795 10.497 Z M 9.78 10.389 L 9.748 10.381 C 9.747 10.374 9.745 10.367 9.743 10.36 C 9.74 10.344 9.736 10.328 9.739 10.315 C 9.743 10.3 9.747 10.285 9.75 10.27 C 9.766 10.208 9.781 10.146 9.809 10.089 C 9.852 10.003 9.899 9.918 9.946 9.834 C 9.978 9.776 10.011 9.717 10.042 9.658 C 10.094 9.559 10.144 9.459 10.194 9.359 C 10.224 9.3 10.254 9.24 10.284 9.181 C 10.304 9.143 10.327 9.106 10.367 9.075 C 10.367 9.083 10.367 9.092 10.367 9.1 C 10.367 9.119 10.368 9.137 10.363 9.153 C 10.343 9.217 10.322 9.28 10.3 9.344 L 10.274 9.421 C 10.262 9.456 10.251 9.491 10.24 9.526 C 10.213 9.609 10.186 9.692 10.156 9.773 C 10.129 9.847 10.097 9.92 10.06 9.99 C 9.984 10.135 9.884 10.263 9.78 10.389 Z M 8.082 6.726 C 8.161 6.438 8.29 6.172 8.445 5.918 C 8.452 5.907 8.464 5.898 8.476 5.889 C 8.48 5.886 8.484 5.883 8.488 5.88 C 8.49 5.879 8.494 5.881 8.498 5.882 L 8.502 5.884 C 8.504 5.886 8.505 5.888 8.507 5.891 C 8.51 5.896 8.514 5.901 8.514 5.907 C 8.495 6.195 8.445 6.475 8.274 6.719 C 8.263 6.735 8.252 6.752 8.24 6.769 C 8.219 6.801 8.197 6.834 8.172 6.864 C 8.16 6.88 8.125 6.891 8.108 6.885 C 8.091 6.878 8.074 6.849 8.072 6.828 C 8.069 6.795 8.073 6.759 8.082 6.726 Z M 14.937 8.232 C 14.932 8.068 14.93 7.904 14.936 7.741 C 14.939 7.665 14.952 7.588 14.965 7.512 L 14.974 7.462 C 14.977 7.447 14.985 7.434 14.995 7.416 C 15.001 7.407 15.007 7.397 15.013 7.385 C 15.019 7.395 15.025 7.405 15.031 7.413 C 15.041 7.43 15.05 7.443 15.052 7.456 L 15.053 7.466 C 15.065 7.566 15.077 7.666 15.082 7.767 C 15.088 7.93 15.091 8.094 15.09 8.257 C 15.09 8.314 15.084 8.371 15.079 8.428 C 15.076 8.455 15.074 8.482 15.072 8.509 L 15.066 8.583 C 15.062 8.632 15.059 8.681 15.055 8.731 C 15.047 8.859 15.032 8.986 14.982 9.129 C 14.983 9.081 14.985 9.035 14.986 8.991 C 14.99 8.885 14.993 8.786 14.992 8.688 C 14.991 8.631 14.983 8.575 14.975 8.518 C 14.971 8.496 14.968 8.474 14.965 8.452 C 14.962 8.427 14.958 8.402 14.954 8.377 C 14.946 8.328 14.938 8.28 14.937 8.232 Z M 5.527 3.476 C 5.501 3.752 5.396 4.004 5.283 4.252 C 5.281 4.256 5.279 4.26 5.277 4.264 C 5.267 4.291 5.254 4.321 5.211 4.326 C 5.209 4.247 5.224 4.171 5.239 4.096 C 5.243 4.076 5.246 4.056 5.25 4.035 C 5.272 3.912 5.296 3.79 5.319 3.667 C 5.337 3.576 5.354 3.484 5.371 3.393 C 5.378 3.358 5.383 3.323 5.388 3.288 C 5.394 3.245 5.4 3.201 5.409 3.158 C 5.42 3.105 5.452 3.077 5.484 3.078 C 5.52 3.078 5.552 3.119 5.55 3.18 C 5.547 3.265 5.539 3.351 5.531 3.436 L 5.527 3.476 Z M 12.697 8.434 C 12.697 8.459 12.691 8.483 12.66 8.491 C 12.649 8.427 12.637 8.364 12.626 8.301 C 12.603 8.17 12.579 8.039 12.557 7.908 C 12.537 7.79 12.535 7.672 12.571 7.555 C 12.578 7.531 12.585 7.507 12.591 7.483 C 12.601 7.445 12.611 7.406 12.625 7.37 C 12.675 7.239 12.715 7.107 12.706 6.965 C 12.705 6.936 12.707 6.904 12.738 6.888 C 12.76 6.877 12.789 6.906 12.802 6.956 C 12.826 7.054 12.826 7.152 12.803 7.25 C 12.791 7.303 12.775 7.356 12.755 7.406 C 12.668 7.624 12.658 7.848 12.683 8.078 C 12.693 8.164 12.694 8.25 12.695 8.336 C 12.695 8.369 12.696 8.401 12.697 8.434 Z M 15.452 10.421 C 15.421 10.55 15.387 10.68 15.352 10.808 C 15.347 10.827 15.338 10.845 15.329 10.863 C 15.325 10.872 15.321 10.88 15.317 10.889 C 15.273 10.864 15.276 10.828 15.279 10.794 L 15.279 10.781 C 15.285 10.661 15.292 10.541 15.299 10.422 C 15.302 10.359 15.306 10.296 15.31 10.232 C 15.314 10.149 15.318 10.065 15.322 9.981 C 15.325 9.91 15.339 9.843 15.385 9.787 C 15.427 9.735 15.486 9.74 15.516 9.8 C 15.553 9.873 15.559 9.951 15.541 10.031 L 15.532 10.073 C 15.506 10.189 15.48 10.305 15.452 10.421 Z M 6.895 8.14 C 6.846 8.223 6.787 8.295 6.706 8.347 C 6.696 8.353 6.684 8.356 6.671 8.36 C 6.664 8.361 6.657 8.363 6.65 8.366 C 6.649 8.358 6.648 8.35 6.647 8.344 C 6.645 8.332 6.643 8.322 6.646 8.315 L 6.652 8.297 C 6.667 8.256 6.681 8.215 6.702 8.177 C 6.777 8.044 6.805 7.9 6.81 7.749 C 6.814 7.614 6.848 7.485 6.924 7.37 C 6.932 7.357 6.944 7.348 6.959 7.336 C 6.967 7.33 6.975 7.323 6.984 7.315 C 6.99 7.329 6.995 7.343 7.001 7.355 C 7.011 7.379 7.02 7.4 7.022 7.421 C 7.047 7.672 7.027 7.916 6.895 8.14 Z M 14.516 11.092 C 14.532 11.063 14.554 11.033 14.599 11.044 C 14.599 11.072 14.6 11.099 14.601 11.127 C 14.602 11.187 14.604 11.248 14.598 11.307 C 14.578 11.504 14.526 11.695 14.474 11.885 L 14.462 11.929 C 14.454 11.956 14.437 11.982 14.418 12.004 C 14.394 12.031 14.353 12.033 14.323 12.016 C 14.295 12 14.281 11.975 14.28 11.943 L 14.28 11.941 C 14.28 11.937 14.279 11.932 14.28 11.928 C 14.304 11.843 14.318 11.756 14.333 11.668 C 14.355 11.537 14.376 11.405 14.429 11.28 C 14.456 11.217 14.484 11.154 14.516 11.092 Z M 16.059 8.816 C 16.064 8.96 16.068 9.103 16.066 9.246 C 16.065 9.323 16.054 9.4 16.042 9.477 L 16.042 9.482 C 16.04 9.495 16.031 9.508 16.019 9.525 C 16.012 9.535 16.005 9.546 15.997 9.559 L 15.95 9.342 L 15.95 9.341 C 15.912 9.16 15.875 8.988 15.839 8.815 C 15.833 8.787 15.832 8.756 15.833 8.727 C 15.834 8.654 15.864 8.607 15.911 8.598 C 15.963 8.589 16.017 8.629 16.039 8.7 C 16.05 8.737 16.058 8.777 16.059 8.816 Z M 5.915 2.731 L 5.896 2.728 C 5.892 2.7 5.889 2.672 5.886 2.644 C 5.879 2.575 5.871 2.505 5.861 2.435 C 5.847 2.343 5.83 2.25 5.81 2.159 C 5.79 2.065 5.769 1.971 5.748 1.877 C 5.728 1.788 5.708 1.698 5.688 1.609 C 5.682 1.581 5.682 1.549 5.687 1.521 C 5.697 1.462 5.771 1.436 5.814 1.477 C 5.838 1.5 5.859 1.532 5.866 1.564 L 5.869 1.575 C 5.887 1.653 5.905 1.733 5.907 1.812 C 5.914 2.03 5.917 2.248 5.92 2.466 L 5.922 2.658 C 5.922 2.675 5.92 2.692 5.918 2.709 C 5.917 2.716 5.915 2.724 5.915 2.731 Z M 17.505 10.25 C 17.498 10.529 17.447 10.8 17.331 11.056 C 17.327 11.067 17.318 11.075 17.31 11.084 L 17.304 11.09 C 17.303 11.092 17.3 11.093 17.293 11.095 C 17.288 11.096 17.282 11.098 17.271 11.101 C 17.261 10.998 17.264 10.905 17.273 10.813 C 17.291 10.635 17.309 10.458 17.331 10.282 C 17.337 10.233 17.352 10.185 17.368 10.139 C 17.373 10.125 17.387 10.113 17.4 10.102 L 17.407 10.096 C 17.424 10.082 17.464 10.088 17.473 10.107 C 17.484 10.129 17.494 10.152 17.499 10.176 C 17.504 10.2 17.505 10.225 17.505 10.25 Z M 1.456 6.975 C 1.553 6.892 1.659 6.82 1.803 6.748 C 1.767 6.854 1.722 6.913 1.671 6.966 C 1.605 7.033 1.539 7.1 1.467 7.161 C 1.335 7.272 1.199 7.38 1.063 7.487 C 1.033 7.511 0.996 7.529 0.959 7.54 C 0.94 7.545 0.909 7.533 0.894 7.518 C 0.875 7.498 0.889 7.472 0.908 7.453 C 0.913 7.448 0.918 7.443 0.924 7.438 L 0.93 7.433 C 0.982 7.387 1.035 7.341 1.088 7.295 C 1.21 7.188 1.332 7.08 1.456 6.975 Z M 17.195 11.621 C 17.125 11.822 17.048 12.02 16.939 12.204 C 16.935 12.211 16.928 12.216 16.918 12.223 C 16.913 12.227 16.907 12.231 16.9 12.237 C 16.897 12.228 16.894 12.22 16.891 12.213 C 16.885 12.2 16.88 12.189 16.88 12.178 C 16.88 12.158 16.88 12.138 16.879 12.119 C 16.878 12.059 16.876 11.999 16.886 11.941 C 16.908 11.815 16.939 11.69 16.974 11.566 C 16.986 11.52 17.016 11.477 17.045 11.439 C 17.071 11.405 17.113 11.397 17.154 11.411 C 17.197 11.426 17.215 11.462 17.213 11.505 C 17.211 11.544 17.208 11.585 17.195 11.621 Z M 18.178 11.023 C 18.167 11.044 18.151 11.064 18.136 11.082 C 18.133 11.086 18.126 11.087 18.118 11.089 C 18.113 11.089 18.107 11.09 18.1 11.092 C 18.068 11.017 18.047 10.937 18.044 10.854 C 18.042 10.778 18.042 10.701 18.043 10.625 L 18.044 10.544 C 18.044 10.492 18.06 10.447 18.098 10.411 C 18.158 10.353 18.247 10.366 18.283 10.441 C 18.297 10.471 18.307 10.508 18.304 10.54 C 18.286 10.707 18.254 10.871 18.178 11.023 Z M 4.457 5.719 L 4.427 5.704 C 4.43 5.689 4.433 5.674 4.435 5.659 C 4.441 5.626 4.447 5.593 4.458 5.561 L 4.471 5.521 C 4.521 5.375 4.571 5.229 4.629 5.086 C 4.651 5.032 4.686 4.983 4.722 4.935 C 4.731 4.923 4.739 4.911 4.748 4.899 C 4.756 4.887 4.77 4.879 4.787 4.869 C 4.796 4.864 4.806 4.858 4.816 4.851 C 4.82 4.861 4.825 4.87 4.829 4.878 C 4.837 4.895 4.844 4.909 4.843 4.922 L 4.839 4.955 C 4.832 5.013 4.825 5.072 4.804 5.125 C 4.732 5.304 4.65 5.48 4.536 5.638 C 4.521 5.659 4.501 5.677 4.482 5.695 C 4.473 5.703 4.465 5.711 4.457 5.719 Z M 9.889 8.473 C 9.836 8.633 9.758 8.774 9.582 8.829 C 9.576 8.83 9.57 8.829 9.561 8.828 C 9.557 8.827 9.552 8.827 9.546 8.826 C 9.545 8.821 9.544 8.815 9.543 8.809 C 9.541 8.797 9.539 8.784 9.541 8.772 C 9.556 8.664 9.573 8.556 9.592 8.449 C 9.597 8.415 9.606 8.38 9.621 8.35 C 9.652 8.292 9.708 8.269 9.772 8.28 C 9.832 8.29 9.88 8.337 9.89 8.399 C 9.893 8.423 9.896 8.45 9.889 8.473 Z M 14.526 10.123 C 14.458 10.226 14.387 10.327 14.315 10.427 C 14.311 10.433 14.308 10.438 14.304 10.443 C 14.281 10.478 14.256 10.515 14.196 10.514 C 14.197 10.504 14.199 10.494 14.2 10.485 C 14.203 10.465 14.205 10.447 14.212 10.429 C 14.235 10.367 14.257 10.304 14.279 10.242 C 14.331 10.095 14.382 9.949 14.451 9.809 C 14.464 9.783 14.478 9.756 14.496 9.734 C 14.527 9.697 14.589 9.711 14.604 9.757 C 14.61 9.775 14.614 9.795 14.614 9.815 C 14.615 9.926 14.587 10.03 14.526 10.123 Z M 11.301 7.89 C 11.256 8.087 11.194 8.279 11.12 8.467 L 11.117 8.476 C 11.105 8.508 11.092 8.543 11.037 8.563 C 11.043 8.342 11.065 8.137 11.102 7.933 C 11.105 7.917 11.108 7.899 11.11 7.882 C 11.115 7.851 11.119 7.819 11.128 7.788 C 11.142 7.737 11.181 7.71 11.225 7.715 C 11.272 7.72 11.312 7.764 11.313 7.818 C 11.313 7.84 11.308 7.863 11.303 7.885 L 11.301 7.89 Z M 8.783 11.241 C 8.785 11.212 8.789 11.18 8.803 11.155 L 8.832 11.104 C 8.909 10.965 8.987 10.826 9.095 10.708 C 9.105 10.698 9.117 10.689 9.136 10.674 C 9.148 10.666 9.162 10.655 9.18 10.64 C 9.165 10.75 9.144 10.821 9.122 10.891 C 9.089 11 9.056 11.109 9.02 11.217 C 9.009 11.249 8.992 11.281 8.972 11.308 C 8.944 11.347 8.906 11.368 8.856 11.356 C 8.808 11.344 8.778 11.299 8.783 11.241 Z M 11.109 10.339 C 11.101 10.363 11.091 10.386 11.079 10.407 L 11.048 10.455 C 10.957 10.602 10.865 10.749 10.772 10.894 C 10.758 10.916 10.738 10.934 10.718 10.952 C 10.709 10.96 10.7 10.968 10.692 10.977 L 10.679 10.969 L 10.666 10.961 C 10.674 10.936 10.681 10.911 10.688 10.886 C 10.706 10.827 10.723 10.768 10.744 10.71 C 10.775 10.622 10.809 10.535 10.847 10.449 C 10.869 10.401 10.898 10.353 10.931 10.311 C 10.95 10.285 10.982 10.263 11.013 10.252 C 11.037 10.243 11.073 10.247 11.096 10.26 C 11.126 10.276 11.118 10.311 11.109 10.339 Z M 9.728 11.944 C 9.739 11.892 9.754 11.839 9.774 11.789 C 9.853 11.598 9.968 11.427 10.083 11.257 L 10.086 11.252 C 10.089 11.248 10.095 11.246 10.105 11.242 C 10.112 11.239 10.121 11.236 10.133 11.231 C 10.13 11.247 10.128 11.262 10.127 11.276 C 10.124 11.303 10.121 11.325 10.114 11.346 L 10.111 11.355 C 10.045 11.537 9.979 11.72 9.907 11.9 C 9.89 11.941 9.86 11.978 9.83 12.014 L 9.815 12.032 C 9.797 12.055 9.752 12.044 9.741 12.015 C 9.733 11.993 9.724 11.966 9.728 11.944 Z M 20.086 12.011 C 20.074 12.033 20.061 12.055 20.029 12.038 C 19.994 11.874 19.973 11.708 20.016 11.542 C 20.024 11.509 20.036 11.476 20.054 11.448 C 20.079 11.409 20.13 11.396 20.173 11.409 C 20.215 11.421 20.237 11.454 20.247 11.494 C 20.251 11.512 20.252 11.534 20.247 11.552 C 20.239 11.578 20.232 11.605 20.225 11.631 C 20.189 11.762 20.154 11.892 20.086 12.011 Z M 18.778 10.781 C 18.835 10.789 18.883 10.846 18.871 10.911 L 18.869 10.916 C 18.839 11.073 18.807 11.231 18.734 11.376 C 18.727 11.39 18.716 11.402 18.705 11.414 C 18.7 11.42 18.694 11.425 18.69 11.431 C 18.685 11.427 18.68 11.424 18.676 11.421 C 18.669 11.416 18.664 11.412 18.663 11.408 C 18.619 11.234 18.614 11.059 18.653 10.883 C 18.654 10.88 18.655 10.877 18.656 10.873 L 18.658 10.869 C 18.682 10.805 18.724 10.774 18.778 10.781 Z M 7.245 10.739 C 7.336 10.664 7.439 10.605 7.559 10.546 C 7.557 10.56 7.557 10.573 7.556 10.584 C 7.556 10.607 7.555 10.626 7.548 10.642 C 7.506 10.737 7.461 10.831 7.414 10.923 C 7.401 10.949 7.38 10.973 7.358 10.992 C 7.316 11.029 7.25 11.031 7.206 11.001 C 7.154 10.965 7.134 10.901 7.164 10.844 C 7.185 10.805 7.212 10.767 7.245 10.739 Z M 13.918 13.123 C 13.902 13.156 13.882 13.194 13.827 13.201 C 13.828 13.191 13.829 13.181 13.83 13.172 C 13.831 13.152 13.833 13.133 13.839 13.115 C 13.894 12.961 13.921 12.801 13.946 12.64 C 13.954 12.592 13.968 12.544 13.986 12.498 C 13.994 12.477 14.014 12.457 14.032 12.443 C 14.059 12.423 14.109 12.442 14.119 12.473 C 14.125 12.492 14.13 12.512 14.128 12.531 C 14.126 12.549 14.125 12.567 14.123 12.585 C 14.12 12.636 14.116 12.688 14.098 12.734 C 14.049 12.859 13.989 12.98 13.93 13.1 L 13.918 13.123 Z M 12.738 9.556 C 12.807 9.392 12.888 9.234 13.005 9.097 C 13.011 9.089 13.022 9.084 13.032 9.079 L 13.041 9.074 C 13.043 9.073 13.045 9.074 13.05 9.075 C 13.053 9.076 13.057 9.076 13.061 9.077 C 13.06 9.088 13.058 9.098 13.057 9.109 C 13.054 9.132 13.051 9.154 13.044 9.176 C 13.001 9.312 12.957 9.449 12.909 9.583 C 12.895 9.624 12.872 9.664 12.843 9.696 C 12.807 9.736 12.735 9.711 12.73 9.658 C 12.726 9.624 12.726 9.586 12.738 9.556 Z M 4.769 6.659 C 4.788 6.548 4.824 6.44 4.887 6.344 C 4.891 6.338 4.9 6.335 4.912 6.33 C 4.919 6.328 4.926 6.325 4.935 6.322 C 4.938 6.332 4.943 6.343 4.947 6.353 C 4.956 6.375 4.965 6.396 4.968 6.417 C 4.975 6.465 4.979 6.514 4.982 6.563 C 4.984 6.583 4.985 6.602 4.987 6.622 C 4.993 6.693 4.975 6.759 4.943 6.82 C 4.92 6.863 4.863 6.87 4.831 6.834 C 4.786 6.785 4.757 6.723 4.769 6.659 Z M 12.106 10.748 L 12.132 10.765 C 12.112 10.828 12.095 10.892 12.078 10.956 C 12.049 11.061 12.02 11.167 11.98 11.27 C 11.971 11.292 11.958 11.317 11.939 11.33 C 11.921 11.342 11.894 11.347 11.871 11.345 C 11.843 11.344 11.829 11.319 11.827 11.294 C 11.825 11.265 11.825 11.234 11.833 11.206 C 11.876 11.069 11.935 10.939 12.022 10.824 C 12.037 10.803 12.058 10.787 12.078 10.771 C 12.088 10.763 12.097 10.756 12.106 10.748 Z M 21.423 12.243 C 21.423 12.248 21.424 12.253 21.424 12.258 C 21.425 12.398 21.364 12.514 21.29 12.656 L 21.277 12.681 C 21.212 12.53 21.192 12.416 21.209 12.298 C 21.215 12.261 21.232 12.223 21.254 12.192 C 21.274 12.164 21.309 12.151 21.346 12.162 C 21.386 12.175 21.415 12.199 21.423 12.243 Z M 3.596 6.143 C 3.552 6.221 3.505 6.297 3.455 6.371 C 3.444 6.388 3.426 6.401 3.403 6.417 C 3.391 6.426 3.377 6.436 3.362 6.448 C 3.393 6.269 3.439 6.119 3.5 5.974 L 3.502 5.97 C 3.505 5.962 3.509 5.953 3.515 5.949 C 3.519 5.946 3.523 5.943 3.528 5.94 C 3.544 5.929 3.561 5.916 3.577 5.916 C 3.608 5.917 3.631 5.942 3.637 5.974 C 3.641 5.992 3.641 6.014 3.636 6.032 L 3.635 6.037 C 3.624 6.074 3.614 6.111 3.596 6.143 Z M 16.702 10.624 C 16.701 10.739 16.678 10.851 16.637 10.958 C 16.632 10.973 16.619 10.986 16.6 11.005 C 16.59 11.015 16.577 11.028 16.562 11.045 C 16.536 10.876 16.539 10.743 16.555 10.611 C 16.561 10.562 16.572 10.509 16.632 10.495 C 16.67 10.486 16.703 10.544 16.702 10.624 Z M 14.023 8.611 C 13.989 8.73 13.941 8.843 13.88 8.951 C 13.866 8.975 13.854 9 13.843 9.025 C 13.817 9.079 13.791 9.133 13.746 9.179 C 13.747 9.171 13.748 9.164 13.748 9.156 C 13.749 9.14 13.751 9.124 13.756 9.109 L 13.76 9.1 C 13.854 8.856 13.948 8.612 14.093 8.388 C 14.093 8.394 14.092 8.4 14.092 8.406 C 14.091 8.42 14.09 8.433 14.086 8.446 C 14.078 8.469 14.069 8.491 14.059 8.514 C 14.046 8.546 14.033 8.578 14.023 8.611 Z M 8.899 8.291 C 8.868 8.395 8.823 8.492 8.71 8.557 C 8.715 8.527 8.72 8.498 8.724 8.468 C 8.735 8.396 8.747 8.324 8.761 8.253 C 8.773 8.193 8.81 8.164 8.848 8.171 C 8.894 8.18 8.918 8.23 8.899 8.291 Z M 8.117 7.973 L 8.123 7.983 L 8.119 7.995 L 8.116 7.991 C 8.113 7.988 8.111 7.985 8.109 7.982 L 8.117 7.973 Z M 3.249 5.561 L 3.243 5.556 L 3.25 5.553 L 3.249 5.561 Z M 3.282 5.495 L 3.277 5.505 L 3.274 5.494 L 3.282 5.495 Z M 3.308 5.429 L 3.315 5.439 L 3.307 5.446 L 3.305 5.444 C 3.303 5.441 3.301 5.437 3.301 5.437 C 3.301 5.435 3.303 5.433 3.306 5.431 L 3.308 5.429 Z M 3.338 5.369 L 3.346 5.38 L 3.337 5.388 L 3.334 5.385 C 3.332 5.382 3.33 5.38 3.331 5.377 C 3.331 5.375 3.333 5.373 3.335 5.371 L 3.338 5.369 Z M 6.415 10.656 L 6.407 10.65 L 6.416 10.645 L 6.415 10.656 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.764 4.291 C 3.797 4.165 3.792 4.035 3.767 3.908 L 3.766 3.906 C 3.758 3.866 3.75 3.823 3.71 3.786 C 3.647 3.871 3.618 3.959 3.593 4.049 C 3.517 4.333 3.495 4.626 3.473 4.918 L 3.469 4.973 L 3.465 4.977 C 3.463 4.979 3.46 4.982 3.461 4.984 C 3.461 4.991 3.463 4.997 3.465 5.003 L 3.467 5.011 L 3.463 5.057 C 3.453 5.078 3.443 5.098 3.433 5.119 C 3.4 5.185 3.366 5.254 3.352 5.348 C 3.425 5.264 3.46 5.192 3.475 5.111 C 3.487 5.09 3.498 5.07 3.51 5.049 C 3.535 5.005 3.56 4.962 3.58 4.916 C 3.646 4.765 3.685 4.607 3.724 4.448 C 3.737 4.396 3.75 4.343 3.764 4.291 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.429 5.574 C 2.473 5.58 2.492 5.547 2.509 5.519 C 2.546 5.455 2.581 5.39 2.617 5.325 C 2.633 5.295 2.65 5.264 2.667 5.234 C 2.735 5.11 2.761 4.975 2.786 4.84 C 2.791 4.815 2.796 4.79 2.801 4.766 C 2.811 4.712 2.771 4.663 2.723 4.658 C 2.683 4.654 2.646 4.686 2.632 4.739 C 2.628 4.753 2.626 4.767 2.624 4.781 C 2.622 4.791 2.62 4.801 2.618 4.812 L 2.609 4.85 C 2.599 4.895 2.589 4.94 2.577 4.984 C 2.552 5.076 2.526 5.168 2.501 5.26 C 2.478 5.344 2.454 5.428 2.431 5.512 C 2.428 5.525 2.427 5.538 2.427 5.552 C 2.426 5.558 2.426 5.564 2.426 5.571 C 2.421 5.576 2.417 5.582 2.413 5.588 L 2.429 5.574 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.427 5.704 L 4.457 5.719 C 4.465 5.711 4.473 5.703 4.482 5.695 C 4.501 5.677 4.521 5.659 4.536 5.638 C 4.65 5.48 4.732 5.304 4.804 5.125 C 4.825 5.072 4.832 5.013 4.839 4.955 L 4.843 4.922 C 4.844 4.909 4.837 4.895 4.829 4.878 C 4.825 4.87 4.82 4.861 4.816 4.851 C 4.806 4.858 4.796 4.864 4.787 4.869 C 4.77 4.879 4.756 4.887 4.748 4.899 C 4.739 4.911 4.731 4.923 4.722 4.935 C 4.686 4.983 4.651 5.032 4.629 5.086 C 4.571 5.229 4.521 5.375 4.471 5.521 L 4.458 5.561 C 4.447 5.593 4.441 5.626 4.435 5.659 C 4.433 5.674 4.43 5.689 4.427 5.704 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.455 6.371 C 3.505 6.297 3.552 6.221 3.596 6.143 C 3.614 6.111 3.624 6.074 3.635 6.037 L 3.636 6.032 C 3.641 6.014 3.641 5.992 3.637 5.974 C 3.631 5.942 3.608 5.917 3.577 5.916 C 3.561 5.916 3.544 5.929 3.528 5.94 C 3.523 5.943 3.519 5.946 3.515 5.949 C 3.509 5.953 3.505 5.962 3.502 5.97 L 3.5 5.974 C 3.439 6.119 3.393 6.269 3.362 6.448 C 3.377 6.436 3.391 6.426 3.403 6.417 C 3.426 6.401 3.444 6.388 3.455 6.371 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.887 6.344 C 4.824 6.44 4.788 6.548 4.769 6.659 C 4.757 6.723 4.786 6.785 4.831 6.834 C 4.863 6.87 4.92 6.863 4.943 6.82 C 4.975 6.759 4.993 6.693 4.987 6.622 C 4.985 6.602 4.984 6.583 4.982 6.563 C 4.979 6.514 4.975 6.465 4.968 6.417 C 4.965 6.396 4.956 6.375 4.947 6.353 C 4.943 6.343 4.938 6.332 4.935 6.322 C 4.926 6.325 4.919 6.328 4.912 6.33 C 4.9 6.335 4.891 6.338 4.887 6.344 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.706 8.347 C 6.787 8.295 6.846 8.223 6.895 8.14 C 7.027 7.916 7.047 7.672 7.022 7.421 C 7.02 7.4 7.011 7.379 7.001 7.355 C 6.995 7.343 6.99 7.329 6.984 7.315 C 6.975 7.323 6.967 7.33 6.959 7.336 C 6.944 7.348 6.932 7.357 6.924 7.37 C 6.848 7.485 6.814 7.614 6.81 7.749 C 6.805 7.9 6.777 8.044 6.702 8.177 C 6.681 8.215 6.667 8.256 6.652 8.297 L 6.646 8.315 C 6.643 8.322 6.645 8.332 6.647 8.344 C 6.648 8.35 6.649 8.358 6.65 8.366 C 6.657 8.363 6.664 8.361 6.671 8.36 C 6.684 8.356 6.696 8.353 6.706 8.347 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.995 7.748 L 9.017 7.759 L 9.032 7.739 C 9.043 7.723 9.054 7.707 9.064 7.69 C 9.121 7.593 9.155 7.487 9.189 7.381 C 9.201 7.345 9.212 7.31 9.224 7.275 C 9.27 7.142 9.296 7.008 9.291 6.867 C 9.284 6.718 9.295 6.57 9.348 6.428 C 9.36 6.395 9.367 6.36 9.373 6.325 C 9.376 6.311 9.378 6.297 9.381 6.283 C 9.448 5.968 9.526 5.656 9.639 5.354 C 9.649 5.326 9.656 5.296 9.658 5.267 C 9.66 5.231 9.648 5.199 9.612 5.181 C 9.576 5.161 9.531 5.161 9.502 5.193 C 9.473 5.225 9.448 5.264 9.43 5.303 C 9.36 5.458 9.325 5.623 9.294 5.789 C 9.279 5.87 9.261 5.951 9.242 6.032 C 9.233 6.072 9.224 6.111 9.215 6.151 C 9.21 6.176 9.203 6.2 9.197 6.225 C 9.182 6.282 9.167 6.34 9.165 6.398 C 9.162 6.562 9.12 6.716 9.078 6.871 L 9.076 6.879 L 9.072 6.893 C 9.055 6.955 9.038 7.018 9.032 7.082 C 9.019 7.23 9.011 7.379 9.002 7.527 L 8.995 7.645 C 8.994 7.668 8.994 7.691 8.994 7.715 C 8.995 7.726 8.995 7.737 8.995 7.748 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.445 5.918 C 8.29 6.172 8.161 6.438 8.082 6.726 C 8.073 6.759 8.069 6.795 8.072 6.828 C 8.074 6.849 8.091 6.878 8.108 6.885 C 8.125 6.891 8.16 6.88 8.172 6.864 C 8.197 6.834 8.219 6.801 8.24 6.769 C 8.252 6.752 8.263 6.735 8.274 6.719 C 8.445 6.475 8.495 6.195 8.514 5.907 C 8.514 5.901 8.51 5.896 8.507 5.891 C 8.505 5.888 8.504 5.886 8.502 5.884 L 8.498 5.882 C 8.494 5.881 8.49 5.879 8.488 5.88 C 8.484 5.883 8.48 5.886 8.476 5.889 C 8.464 5.898 8.452 5.907 8.445 5.918 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.9 2.201 C 6.848 2.085 6.839 1.961 6.824 1.839 C 6.82 1.801 6.818 1.762 6.815 1.721 L 6.479 1.521 L 6.138 2.358 C 6.175 2.874 6.265 3.98 6.322 4.271 C 6.378 4.561 7.409 4.069 7.918 3.786 L 7.879 2.921 L 7.548 2.159 L 7.356 2.044 L 7.176 1.937 C 7.169 2.067 7.157 2.187 7.232 2.295 C 7.336 2.618 7.519 2.904 7.66 3.209 C 7.688 3.272 7.724 3.331 7.73 3.416 C 7.706 3.408 7.686 3.407 7.675 3.397 C 7.61 3.336 7.547 3.274 7.484 3.211 C 7.446 3.173 7.421 3.121 7.361 3.099 C 7.352 3.117 7.341 3.133 7.334 3.151 C 7.305 3.23 7.277 3.309 7.249 3.388 C 7.233 3.434 7.218 3.481 7.201 3.528 C 7.161 3.64 7.123 3.752 7.08 3.863 C 7.063 3.909 7.039 3.953 6.993 3.978 C 6.962 3.974 6.968 3.951 6.969 3.933 C 6.973 3.793 7.017 3.661 7.05 3.527 C 7.094 3.349 7.134 3.17 7.164 2.99 C 7.18 2.892 7.161 2.793 7.102 2.692 C 7.084 2.739 7.069 2.773 7.057 2.809 C 7.025 2.898 6.997 2.987 6.963 3.075 C 6.951 3.105 6.926 3.129 6.907 3.156 L 6.908 3.16 L 6.904 3.16 L 6.892 3.171 C 6.893 3.167 6.894 3.162 6.896 3.161 C 6.898 3.16 6.901 3.16 6.904 3.16 L 6.906 3.158 L 6.907 3.156 C 6.888 3.046 6.919 2.94 6.948 2.839 C 7.009 2.618 6.991 2.407 6.9 2.201 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.12 8.467 C 11.194 8.279 11.256 8.087 11.301 7.89 L 11.303 7.885 C 11.308 7.863 11.313 7.84 11.313 7.818 C 11.312 7.764 11.272 7.72 11.225 7.715 C 11.181 7.71 11.142 7.737 11.128 7.788 C 11.119 7.819 11.115 7.851 11.11 7.882 C 11.108 7.899 11.105 7.917 11.102 7.933 C 11.065 8.137 11.043 8.342 11.037 8.563 C 11.092 8.543 11.105 8.508 11.117 8.476 L 11.12 8.467 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.582 8.829 C 9.758 8.774 9.836 8.633 9.889 8.473 C 9.896 8.45 9.893 8.423 9.89 8.399 C 9.88 8.337 9.832 8.29 9.772 8.28 C 9.708 8.269 9.652 8.292 9.621 8.35 C 9.606 8.38 9.597 8.415 9.592 8.449 C 9.573 8.556 9.556 8.664 9.541 8.772 C 9.539 8.784 9.541 8.797 9.543 8.809 C 9.544 8.815 9.545 8.821 9.546 8.826 C 9.552 8.827 9.557 8.827 9.561 8.828 C 9.57 8.829 9.576 8.83 9.582 8.829 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.014 10.009 C 7.025 10.002 7.036 9.996 7.047 9.989 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.66 8.491 C 12.691 8.483 12.697 8.459 12.697 8.434 C 12.696 8.401 12.695 8.369 12.695 8.336 C 12.694 8.25 12.693 8.164 12.683 8.078 C 12.658 7.848 12.668 7.624 12.755 7.406 C 12.775 7.356 12.791 7.303 12.803 7.25 C 12.826 7.152 12.826 7.054 12.802 6.956 C 12.789 6.906 12.76 6.877 12.738 6.888 C 12.707 6.904 12.705 6.936 12.706 6.965 C 12.715 7.107 12.675 7.239 12.625 7.37 C 12.611 7.406 12.601 7.445 12.591 7.483 C 12.585 7.507 12.578 7.531 12.571 7.555 C 12.535 7.672 12.537 7.79 12.557 7.908 C 12.579 8.039 12.603 8.17 12.626 8.301 C 12.637 8.364 12.649 8.427 12.66 8.491 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.442 7.979 C 13.501 7.743 13.555 7.507 13.608 7.271 C 13.637 7.138 13.633 7.004 13.594 6.874 C 13.581 6.828 13.555 6.784 13.527 6.744 C 13.5 6.707 13.455 6.7 13.42 6.718 C 13.386 6.736 13.373 6.765 13.374 6.804 C 13.375 6.827 13.376 6.851 13.377 6.875 C 13.381 6.936 13.384 6.996 13.378 7.056 C 13.366 7.185 13.381 7.313 13.398 7.44 C 13.422 7.614 13.425 7.783 13.366 7.953 C 13.333 8.049 13.308 8.149 13.316 8.275 C 13.324 8.264 13.331 8.256 13.337 8.249 C 13.348 8.236 13.356 8.227 13.36 8.217 C 13.366 8.199 13.373 8.181 13.38 8.163 C 13.403 8.102 13.427 8.041 13.442 7.979 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.655 9.748 C 11.788 9.616 11.921 9.483 12.051 9.347 C 12.145 9.248 12.174 9.125 12.166 8.991 C 12.164 8.961 12.161 8.926 12.126 8.921 C 12.105 8.919 12.075 8.931 12.061 8.947 C 12.034 8.975 12.012 9.009 11.996 9.044 C 11.967 9.107 11.941 9.172 11.92 9.237 C 11.888 9.338 11.836 9.425 11.767 9.505 C 11.712 9.568 11.662 9.636 11.612 9.703 C 11.591 9.73 11.57 9.758 11.549 9.785 L 11.538 9.825 L 11.569 9.804 C 11.578 9.798 11.588 9.793 11.597 9.787 C 11.618 9.776 11.638 9.764 11.655 9.748 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.748 10.381 L 9.78 10.389 C 9.884 10.263 9.984 10.135 10.06 9.99 C 10.097 9.92 10.129 9.847 10.156 9.773 C 10.186 9.692 10.213 9.609 10.24 9.526 C 10.251 9.491 10.262 9.456 10.274 9.421 L 10.3 9.344 C 10.322 9.28 10.343 9.217 10.363 9.153 C 10.368 9.137 10.367 9.119 10.367 9.1 C 10.367 9.092 10.367 9.083 10.367 9.075 C 10.327 9.106 10.304 9.143 10.284 9.181 C 10.254 9.24 10.224 9.3 10.194 9.359 C 10.144 9.459 10.094 9.559 10.042 9.658 C 10.011 9.717 9.978 9.776 9.946 9.834 C 9.899 9.918 9.852 10.003 9.809 10.089 C 9.781 10.146 9.766 10.208 9.75 10.27 C 9.747 10.285 9.743 10.3 9.739 10.315 C 9.736 10.328 9.74 10.344 9.743 10.36 C 9.745 10.367 9.747 10.374 9.748 10.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.019 9.942 C 7.995 9.973 7.973 10.007 7.956 10.042 C 7.943 10.07 7.949 10.101 7.973 10.124 C 7.997 10.145 8.027 10.155 8.055 10.137 C 8.092 10.113 8.13 10.087 8.161 10.056 C 8.385 9.833 8.551 9.57 8.682 9.284 C 8.71 9.222 8.734 9.155 8.718 9.067 C 8.71 9.076 8.702 9.083 8.696 9.09 C 8.683 9.103 8.673 9.113 8.663 9.125 C 8.638 9.156 8.614 9.189 8.589 9.221 C 8.562 9.255 8.536 9.29 8.509 9.324 L 8.322 9.56 C 8.221 9.687 8.12 9.815 8.019 9.942 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.075 7.959 C 10.14 7.904 10.159 7.847 10.175 7.793 C 10.256 7.518 10.334 7.244 10.413 6.969 L 10.442 6.867 C 10.449 6.844 10.454 6.819 10.455 6.795 C 10.46 6.722 10.428 6.664 10.378 6.649 C 10.332 6.635 10.277 6.681 10.254 6.753 C 10.251 6.765 10.249 6.778 10.247 6.791 L 10.246 6.797 C 10.239 6.841 10.231 6.885 10.225 6.929 C 10.216 6.984 10.208 7.04 10.199 7.096 C 10.182 7.211 10.165 7.326 10.145 7.441 C 10.117 7.605 10.095 7.769 10.075 7.959 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.936 7.741 C 14.93 7.904 14.932 8.068 14.937 8.232 C 14.938 8.28 14.946 8.328 14.954 8.377 C 14.958 8.402 14.962 8.427 14.965 8.452 C 14.968 8.474 14.971 8.496 14.975 8.518 C 14.983 8.575 14.991 8.631 14.992 8.688 C 14.993 8.786 14.99 8.885 14.986 8.991 C 14.985 9.035 14.983 9.081 14.982 9.129 C 15.032 8.986 15.047 8.859 15.055 8.731 C 15.059 8.681 15.062 8.632 15.066 8.583 L 15.072 8.509 C 15.074 8.482 15.076 8.455 15.079 8.428 C 15.084 8.371 15.09 8.314 15.09 8.257 C 15.091 8.094 15.088 7.93 15.082 7.767 C 15.077 7.666 15.065 7.566 15.053 7.466 L 15.052 7.456 C 15.05 7.443 15.041 7.43 15.031 7.413 C 15.025 7.405 15.019 7.395 15.013 7.385 C 15.007 7.397 15.001 7.407 14.995 7.416 C 14.985 7.434 14.977 7.447 14.974 7.462 L 14.965 7.512 C 14.952 7.588 14.939 7.665 14.936 7.741 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.136 11.082 C 18.151 11.064 18.167 11.044 18.178 11.023 C 18.254 10.871 18.286 10.707 18.304 10.54 C 18.307 10.508 18.297 10.471 18.283 10.441 C 18.247 10.366 18.158 10.353 18.098 10.411 C 18.06 10.447 18.044 10.492 18.044 10.544 L 18.043 10.625 C 18.042 10.701 18.042 10.778 18.044 10.854 C 18.047 10.937 18.068 11.017 18.1 11.092 C 18.107 11.09 18.113 11.089 18.118 11.089 C 18.126 11.087 18.133 11.086 18.136 11.082 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.871 10.911 C 18.883 10.846 18.835 10.789 18.778 10.781 C 18.724 10.774 18.682 10.805 18.658 10.869 L 18.656 10.873 C 18.655 10.877 18.654 10.88 18.653 10.883 C 18.614 11.059 18.619 11.234 18.663 11.408 C 18.664 11.412 18.669 11.416 18.676 11.421 C 18.68 11.424 18.685 11.427 18.69 11.431 C 18.694 11.425 18.7 11.42 18.705 11.414 C 18.716 11.402 18.727 11.39 18.734 11.376 C 18.807 11.231 18.839 11.073 18.869 10.916 L 18.871 10.911 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.331 11.056 C 17.447 10.8 17.498 10.529 17.505 10.25 C 17.505 10.225 17.504 10.2 17.499 10.176 C 17.494 10.152 17.484 10.129 17.473 10.107 C 17.464 10.088 17.424 10.082 17.407 10.096 L 17.4 10.102 C 17.387 10.113 17.373 10.125 17.368 10.139 C 17.352 10.185 17.337 10.233 17.331 10.282 C 17.309 10.458 17.291 10.635 17.273 10.813 C 17.264 10.905 17.261 10.998 17.271 11.101 C 17.282 11.098 17.288 11.096 17.293 11.095 C 17.3 11.093 17.303 11.092 17.304 11.09 L 17.31 11.084 C 17.318 11.075 17.327 11.067 17.331 11.056 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.939 12.204 C 17.048 12.02 17.125 11.822 17.195 11.621 C 17.208 11.585 17.211 11.544 17.213 11.505 C 17.215 11.462 17.197 11.426 17.154 11.411 C 17.113 11.397 17.071 11.405 17.045 11.439 C 17.016 11.477 16.986 11.52 16.974 11.566 C 16.939 11.69 16.908 11.815 16.886 11.941 C 16.876 11.999 16.878 12.059 16.879 12.119 C 16.88 12.138 16.88 12.158 16.88 12.178 C 16.88 12.189 16.885 12.2 16.891 12.213 C 16.894 12.22 16.897 12.228 16.9 12.237 C 16.907 12.231 16.913 12.227 16.918 12.223 C 16.928 12.216 16.935 12.211 16.939 12.204 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.599 11.044 C 14.554 11.033 14.532 11.063 14.516 11.092 C 14.484 11.154 14.456 11.217 14.429 11.28 C 14.376 11.405 14.355 11.537 14.333 11.668 C 14.318 11.756 14.304 11.843 14.28 11.928 C 14.279 11.932 14.28 11.937 14.28 11.941 L 14.28 11.943 C 14.281 11.975 14.295 12 14.323 12.016 C 14.353 12.033 14.394 12.031 14.418 12.004 C 14.437 11.982 14.454 11.956 14.462 11.929 L 14.474 11.885 C 14.526 11.695 14.578 11.504 14.598 11.307 C 14.604 11.248 14.602 11.187 14.601 11.127 C 14.6 11.099 14.599 11.072 14.599 11.044 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.352 10.808 C 15.387 10.68 15.421 10.55 15.452 10.421 C 15.48 10.305 15.506 10.189 15.532 10.073 L 15.541 10.031 C 15.559 9.951 15.553 9.873 15.516 9.8 C 15.486 9.74 15.427 9.735 15.385 9.787 C 15.339 9.843 15.325 9.91 15.322 9.981 C 15.318 10.065 15.314 10.149 15.31 10.232 C 15.306 10.296 15.302 10.359 15.299 10.422 C 15.292 10.541 15.285 10.661 15.279 10.781 L 15.279 10.794 C 15.276 10.828 15.273 10.864 15.317 10.889 C 15.321 10.88 15.325 10.872 15.329 10.863 C 15.338 10.845 15.347 10.827 15.352 10.808 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.315 10.427 C 14.387 10.327 14.458 10.226 14.526 10.123 C 14.587 10.03 14.615 9.926 14.614 9.815 C 14.614 9.795 14.61 9.775 14.604 9.757 C 14.589 9.711 14.527 9.697 14.496 9.734 C 14.478 9.756 14.464 9.783 14.451 9.809 C 14.382 9.949 14.331 10.095 14.279 10.242 C 14.257 10.304 14.235 10.367 14.212 10.429 C 14.205 10.447 14.203 10.465 14.2 10.485 C 14.199 10.494 14.197 10.504 14.196 10.514 C 14.256 10.515 14.281 10.478 14.304 10.443 C 14.308 10.438 14.311 10.433 14.315 10.427 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.769 11.09 C 13.767 10.891 13.766 10.695 13.795 10.497 C 13.82 10.33 13.834 10.162 13.848 9.993 C 13.852 9.94 13.856 9.886 13.861 9.832 C 13.865 9.793 13.861 9.753 13.853 9.715 C 13.851 9.701 13.825 9.684 13.81 9.684 C 13.795 9.684 13.771 9.701 13.767 9.715 C 13.757 9.748 13.753 9.783 13.754 9.817 C 13.755 9.842 13.758 9.868 13.762 9.893 C 13.764 9.912 13.767 9.931 13.768 9.95 C 13.777 10.06 13.759 10.167 13.742 10.274 C 13.738 10.299 13.734 10.323 13.73 10.348 L 13.722 10.401 C 13.697 10.565 13.673 10.728 13.656 10.892 C 13.631 11.128 13.686 11.355 13.742 11.584 C 13.752 11.622 13.761 11.66 13.77 11.698 C 13.77 11.637 13.77 11.575 13.771 11.513 C 13.771 11.372 13.772 11.231 13.769 11.09 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.306 10.225 C 13.386 10.116 13.42 9.99 13.435 9.857 C 13.42 9.888 13.403 9.919 13.386 9.95 C 13.348 10.019 13.31 10.089 13.295 10.169 C 13.292 10.173 13.288 10.178 13.285 10.182 C 13.277 10.192 13.268 10.201 13.264 10.213 C 13.262 10.218 13.265 10.227 13.269 10.235 C 13.27 10.239 13.272 10.243 13.273 10.246 L 13.276 10.243 L 13.306 10.225 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.276 10.243 L 13.273 10.246 C 13.259 10.257 13.246 10.265 13.235 10.272 C 13.213 10.286 13.198 10.296 13.191 10.31 C 13.148 10.395 13.095 10.471 13.032 10.541 C 13.019 10.555 13.007 10.573 13.001 10.591 C 12.939 10.768 12.878 10.945 12.818 11.123 C 12.808 11.15 12.805 11.181 12.802 11.21 C 12.791 11.336 12.821 11.452 12.882 11.576 C 12.891 11.567 12.901 11.559 12.909 11.552 C 12.926 11.538 12.94 11.526 12.949 11.512 C 13.002 11.422 13.039 11.324 13.054 11.221 C 13.066 11.133 13.076 11.044 13.077 10.955 C 13.078 10.825 13.098 10.699 13.147 10.579 C 13.166 10.533 13.187 10.487 13.207 10.441 C 13.223 10.406 13.238 10.371 13.253 10.336 C 13.259 10.323 13.262 10.309 13.266 10.287 C 13.269 10.275 13.272 10.261 13.276 10.243 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.132 10.765 L 12.106 10.748 C 12.097 10.756 12.088 10.763 12.078 10.771 C 12.058 10.787 12.037 10.803 12.022 10.824 C 11.935 10.939 11.876 11.069 11.833 11.206 C 11.825 11.234 11.825 11.265 11.827 11.294 C 11.829 11.319 11.843 11.344 11.871 11.345 C 11.894 11.347 11.921 11.342 11.939 11.33 C 11.958 11.317 11.971 11.292 11.98 11.27 C 12.02 11.167 12.049 11.061 12.078 10.956 C 12.095 10.892 12.112 10.828 12.132 10.765 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.774 11.789 C 9.754 11.839 9.739 11.892 9.728 11.944 C 9.724 11.966 9.733 11.993 9.741 12.015 C 9.752 12.044 9.797 12.055 9.815 12.032 L 9.83 12.014 C 9.86 11.978 9.89 11.941 9.907 11.9 C 9.979 11.72 10.045 11.537 10.111 11.355 L 10.114 11.346 C 10.121 11.325 10.124 11.303 10.127 11.276 C 10.128 11.262 10.13 11.247 10.133 11.231 C 10.121 11.236 10.112 11.239 10.105 11.242 C 10.095 11.246 10.089 11.248 10.086 11.252 L 10.083 11.257 C 9.968 11.427 9.853 11.598 9.774 11.789 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.827 13.201 C 13.882 13.194 13.902 13.156 13.918 13.123 L 13.93 13.1 C 13.989 12.98 14.049 12.859 14.098 12.734 C 14.116 12.688 14.12 12.636 14.123 12.585 C 14.125 12.567 14.126 12.549 14.128 12.531 C 14.13 12.512 14.125 12.492 14.119 12.473 C 14.109 12.442 14.059 12.423 14.032 12.443 C 14.014 12.457 13.994 12.477 13.986 12.498 C 13.968 12.544 13.954 12.592 13.946 12.64 C 13.921 12.801 13.894 12.961 13.839 13.115 C 13.833 13.133 13.831 13.152 13.83 13.172 C 13.829 13.181 13.828 13.191 13.827 13.201 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 19.603 11.02 C 19.533 11.023 19.491 11.057 19.478 11.123 C 19.473 11.144 19.473 11.167 19.472 11.189 L 19.472 11.196 C 19.468 11.404 19.477 11.611 19.517 11.815 C 19.518 11.819 19.523 11.822 19.53 11.826 C 19.533 11.828 19.537 11.83 19.541 11.833 C 19.543 11.83 19.546 11.827 19.549 11.824 C 19.556 11.817 19.563 11.811 19.566 11.802 C 19.642 11.619 19.68 11.425 19.714 11.23 C 19.724 11.171 19.722 11.113 19.688 11.059 C 19.684 11.052 19.685 11.041 19.686 11.031 C 19.686 11.027 19.687 11.023 19.687 11.019 L 19.662 11.019 C 19.642 11.019 19.623 11.019 19.603 11.02 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 20.029 12.038 C 20.061 12.055 20.074 12.033 20.086 12.011 C 20.154 11.892 20.189 11.762 20.225 11.631 C 20.232 11.605 20.239 11.578 20.247 11.552 C 20.252 11.534 20.251 11.512 20.247 11.494 C 20.237 11.454 20.215 11.421 20.173 11.409 C 20.13 11.396 20.079 11.409 20.054 11.448 C 20.036 11.476 20.024 11.509 20.016 11.542 C 19.973 11.708 19.994 11.874 20.029 12.038 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 21.424 12.258 C 21.424 12.253 21.423 12.248 21.423 12.243 C 21.415 12.199 21.386 12.175 21.346 12.162 C 21.309 12.151 21.274 12.164 21.254 12.192 C 21.232 12.223 21.215 12.261 21.209 12.298 C 21.192 12.416 21.212 12.53 21.277 12.681 L 21.29 12.656 C 21.364 12.514 21.425 12.398 21.424 12.258 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.051 9.347 C 11.921 9.483 11.788 9.616 11.655 9.748 C 11.638 9.764 11.618 9.776 11.597 9.787 C 11.588 9.793 11.578 9.798 11.569 9.804 L 11.538 9.825 L 11.536 9.83 L 11.532 9.829 L 11.518 9.838 L 11.52 9.835 C 11.521 9.832 11.524 9.829 11.524 9.829 C 11.526 9.828 11.529 9.828 11.532 9.829 L 11.534 9.828 L 11.538 9.825 L 11.549 9.785 C 11.57 9.758 11.591 9.73 11.612 9.703 C 11.662 9.636 11.712 9.568 11.767 9.505 C 11.836 9.425 11.888 9.338 11.92 9.237 C 11.941 9.172 11.967 9.107 11.996 9.044 C 12.012 9.009 12.034 8.975 12.061 8.947 C 12.075 8.931 12.105 8.919 12.126 8.921 C 12.161 8.926 12.164 8.961 12.166 8.991 C 12.174 9.125 12.145 9.248 12.051 9.347 Z M 3.013 7.252 L 3.023 7.255 L 3.011 7.259 L 3 7.264 L 2.998 7.265 L 2.995 7.269 L 2.965 7.299 L 2.963 7.299 C 2.96 7.334 2.939 7.351 2.906 7.357 L 2.906 7.359 L 2.845 7.388 L 2.843 7.389 C 2.843 7.426 2.819 7.44 2.786 7.446 L 2.786 7.448 L 2.784 7.448 C 2.771 7.471 2.751 7.478 2.727 7.476 L 2.726 7.478 L 2.722 7.48 L 2.718 7.487 C 2.712 7.498 2.706 7.51 2.699 7.52 C 2.698 7.522 2.691 7.52 2.684 7.518 C 2.681 7.517 2.678 7.516 2.676 7.515 L 2.677 7.511 C 2.677 7.508 2.678 7.504 2.68 7.503 C 2.691 7.496 2.703 7.49 2.714 7.484 L 2.722 7.48 L 2.724 7.475 L 2.727 7.476 C 2.738 7.451 2.759 7.445 2.784 7.448 L 2.785 7.446 L 2.786 7.446 C 2.786 7.408 2.811 7.395 2.843 7.389 L 2.843 7.386 L 2.904 7.357 L 2.906 7.357 C 2.908 7.321 2.933 7.307 2.963 7.299 L 2.963 7.298 C 2.973 7.287 2.983 7.277 2.993 7.267 L 2.998 7.265 L 3 7.264 C 3.004 7.26 3.008 7.255 3.013 7.252 Z M 13.306 10.225 L 13.276 10.243 C 13.272 10.261 13.269 10.275 13.266 10.287 C 13.262 10.309 13.259 10.323 13.253 10.336 C 13.238 10.371 13.223 10.406 13.207 10.441 C 13.187 10.487 13.166 10.533 13.147 10.579 C 13.098 10.699 13.078 10.825 13.077 10.955 C 13.076 11.044 13.066 11.133 13.054 11.221 C 13.039 11.324 13.002 11.422 12.949 11.512 C 12.94 11.526 12.926 11.538 12.909 11.552 C 12.901 11.559 12.891 11.567 12.882 11.576 C 12.821 11.452 12.791 11.336 12.802 11.21 C 12.805 11.181 12.808 11.15 12.818 11.123 C 12.878 10.945 12.939 10.768 13.001 10.591 C 13.007 10.573 13.019 10.555 13.032 10.541 C 13.095 10.471 13.148 10.395 13.191 10.31 C 13.198 10.296 13.213 10.286 13.235 10.272 C 13.246 10.265 13.259 10.257 13.273 10.246 C 13.272 10.243 13.27 10.239 13.269 10.235 C 13.265 10.227 13.262 10.218 13.264 10.213 C 13.268 10.201 13.277 10.192 13.285 10.182 C 13.288 10.178 13.292 10.173 13.295 10.169 C 13.31 10.089 13.348 10.019 13.386 9.95 C 13.403 9.919 13.42 9.888 13.435 9.857 C 13.42 9.99 13.386 10.116 13.306 10.225 Z M 7.349 6.358 C 7.333 6.505 7.142 6.707 6.994 6.735 C 6.988 6.736 6.981 6.735 6.974 6.733 L 6.967 6.732 L 6.967 6.733 L 6.961 6.742 L 6.965 6.731 L 6.967 6.732 C 6.97 6.728 6.972 6.725 6.974 6.721 C 6.979 6.713 6.984 6.704 6.992 6.698 C 7.094 6.621 7.152 6.515 7.188 6.394 C 7.196 6.366 7.205 6.338 7.218 6.312 C 7.232 6.282 7.277 6.272 7.309 6.287 C 7.339 6.301 7.353 6.326 7.349 6.358 Z M 14.162 8.34 C 14.118 8.334 14.107 8.314 14.129 8.28 C 14.131 8.261 14.133 8.242 14.135 8.224 C 14.14 8.179 14.145 8.134 14.152 8.09 C 14.161 8.034 14.194 8.007 14.241 8.01 C 14.285 8.013 14.32 8.048 14.326 8.098 C 14.328 8.117 14.327 8.137 14.324 8.156 C 14.298 8.307 14.272 8.457 14.245 8.607 C 14.241 8.628 14.233 8.649 14.223 8.676 C 14.218 8.69 14.213 8.706 14.206 8.724 C 14.199 8.712 14.192 8.703 14.187 8.695 C 14.178 8.682 14.172 8.674 14.171 8.665 C 14.168 8.584 14.166 8.503 14.164 8.422 L 14.162 8.34 Z M 2.509 5.519 C 2.492 5.547 2.473 5.58 2.429 5.574 L 2.413 5.588 C 2.417 5.582 2.421 5.576 2.426 5.571 C 2.426 5.564 2.426 5.558 2.427 5.552 C 2.427 5.538 2.428 5.525 2.431 5.512 C 2.454 5.428 2.478 5.344 2.501 5.26 C 2.526 5.168 2.552 5.076 2.577 4.984 C 2.589 4.94 2.599 4.895 2.609 4.85 L 2.618 4.812 C 2.62 4.801 2.622 4.791 2.624 4.781 C 2.626 4.767 2.628 4.753 2.632 4.739 C 2.646 4.686 2.683 4.654 2.723 4.658 C 2.771 4.663 2.811 4.712 2.801 4.766 C 2.796 4.79 2.791 4.815 2.786 4.84 C 2.761 4.975 2.735 5.11 2.667 5.234 C 2.65 5.264 2.633 5.295 2.617 5.325 C 2.581 5.39 2.546 5.455 2.509 5.519 Z M 3.767 3.908 C 3.792 4.035 3.797 4.165 3.764 4.291 C 3.75 4.343 3.737 4.396 3.724 4.448 C 3.685 4.607 3.646 4.765 3.58 4.916 C 3.56 4.962 3.535 5.005 3.51 5.049 C 3.498 5.07 3.487 5.09 3.475 5.111 C 3.46 5.192 3.425 5.264 3.352 5.348 C 3.366 5.254 3.4 5.185 3.433 5.119 C 3.443 5.098 3.453 5.078 3.463 5.057 L 3.467 5.011 L 3.465 5.003 C 3.463 4.997 3.461 4.991 3.461 4.984 C 3.46 4.982 3.463 4.979 3.465 4.977 L 3.469 4.973 L 3.473 4.918 C 3.495 4.626 3.517 4.333 3.593 4.049 C 3.618 3.959 3.647 3.871 3.71 3.786 C 3.75 3.823 3.758 3.866 3.766 3.906 L 3.767 3.908 Z M 7.38 9.287 C 7.412 9.225 7.447 9.165 7.487 9.109 C 7.552 9.018 7.619 8.928 7.685 8.838 C 7.713 8.801 7.741 8.763 7.769 8.725 L 7.847 8.555 L 8.009 8.198 C 8.024 8.167 8.039 8.135 8.057 8.097 L 8.089 8.03 C 8.079 8.172 7.954 8.486 7.821 8.727 C 7.811 8.749 7.801 8.771 7.791 8.793 C 7.769 8.844 7.747 8.894 7.722 8.943 C 7.676 9.031 7.635 9.121 7.616 9.219 C 7.611 9.246 7.603 9.271 7.595 9.297 C 7.586 9.323 7.578 9.35 7.573 9.377 C 7.537 9.575 7.419 9.72 7.268 9.838 C 7.198 9.893 7.123 9.942 7.047 9.989 L 7.014 10.009 C 6.991 10.024 6.968 10.038 6.945 10.052 C 6.933 10.06 6.902 10.057 6.894 10.047 C 6.884 10.036 6.883 10.007 6.892 9.995 C 6.903 9.977 6.915 9.959 6.927 9.942 C 6.967 9.881 7.008 9.819 7.059 9.768 C 7.197 9.627 7.29 9.459 7.38 9.287 Z M 9.017 7.759 L 8.995 7.748 C 8.995 7.737 8.995 7.726 8.994 7.715 C 8.994 7.691 8.994 7.668 8.995 7.645 L 9.002 7.527 C 9.011 7.379 9.019 7.23 9.032 7.082 C 9.038 7.018 9.055 6.955 9.072 6.893 L 9.076 6.879 L 9.078 6.871 C 9.12 6.716 9.162 6.562 9.165 6.398 C 9.167 6.34 9.182 6.282 9.197 6.225 C 9.203 6.2 9.21 6.176 9.215 6.151 C 9.224 6.111 9.233 6.072 9.242 6.032 C 9.261 5.951 9.279 5.87 9.294 5.789 C 9.325 5.623 9.36 5.458 9.43 5.303 C 9.448 5.264 9.473 5.225 9.502 5.193 C 9.531 5.161 9.576 5.161 9.612 5.181 C 9.648 5.199 9.66 5.231 9.658 5.267 C 9.656 5.296 9.649 5.326 9.639 5.354 C 9.526 5.656 9.448 5.968 9.381 6.283 C 9.378 6.297 9.376 6.311 9.373 6.325 C 9.367 6.36 9.36 6.395 9.348 6.428 C 9.295 6.57 9.284 6.718 9.291 6.867 C 9.296 7.008 9.27 7.142 9.224 7.275 C 9.212 7.31 9.201 7.345 9.189 7.381 C 9.155 7.487 9.121 7.593 9.064 7.69 C 9.054 7.707 9.043 7.723 9.032 7.739 L 9.017 7.759 Z M 13.608 7.271 C 13.555 7.507 13.501 7.743 13.442 7.979 C 13.427 8.041 13.403 8.102 13.38 8.163 C 13.373 8.181 13.366 8.199 13.36 8.217 C 13.356 8.227 13.348 8.236 13.337 8.249 C 13.331 8.256 13.324 8.264 13.316 8.275 C 13.308 8.149 13.333 8.049 13.366 7.953 C 13.425 7.783 13.422 7.614 13.398 7.44 C 13.381 7.313 13.366 7.185 13.378 7.056 C 13.384 6.996 13.381 6.936 13.377 6.875 C 13.376 6.851 13.375 6.827 13.374 6.804 C 13.373 6.765 13.386 6.736 13.42 6.718 C 13.455 6.7 13.5 6.707 13.527 6.744 C 13.555 6.784 13.581 6.828 13.594 6.874 C 13.633 7.004 13.637 7.138 13.608 7.271 Z M 4.684 1.365 C 4.751 1.469 4.783 1.588 4.79 1.715 C 4.797 1.821 4.809 1.926 4.82 2.031 C 4.827 2.093 4.834 2.154 4.84 2.216 L 4.842 2.231 C 4.847 2.288 4.853 2.347 4.816 2.417 C 4.81 2.406 4.804 2.397 4.799 2.39 C 4.791 2.377 4.786 2.368 4.783 2.358 C 4.764 2.282 4.741 2.206 4.717 2.131 C 4.681 2.013 4.645 1.896 4.622 1.773 C 4.604 1.676 4.56 1.582 4.517 1.49 L 4.501 1.456 L 4.497 1.447 C 4.433 1.311 4.37 1.176 4.343 1.027 C 4.34 1.009 4.341 0.991 4.341 0.968 C 4.342 0.956 4.342 0.943 4.342 0.927 C 4.353 0.935 4.362 0.942 4.37 0.947 C 4.387 0.959 4.4 0.968 4.408 0.979 C 4.43 1.008 4.451 1.037 4.473 1.066 C 4.546 1.164 4.619 1.262 4.684 1.365 Z M 4.141 2.921 C 4.2 3.11 4.153 3.28 4.048 3.44 C 4.047 3.441 4.044 3.442 4.037 3.444 C 4.032 3.445 4.025 3.447 4.014 3.45 C 3.973 3.29 3.96 3.133 4.005 2.979 C 4.036 2.875 4.042 2.775 4.015 2.672 L 4.009 2.649 C 3.99 2.576 3.97 2.502 3.95 2.429 C 3.932 2.367 3.915 2.306 3.897 2.245 C 3.869 2.15 3.842 2.054 3.816 1.958 C 3.794 1.879 3.805 1.827 3.836 1.826 C 3.89 1.823 3.916 1.865 3.936 1.902 C 4.025 2.064 4.085 2.236 4.096 2.422 C 4.099 2.463 4.096 2.504 4.093 2.545 L 4.093 2.555 C 4.085 2.68 4.103 2.802 4.141 2.921 Z M 3.354 2.455 C 3.353 2.533 3.34 2.611 3.265 2.679 C 3.201 2.61 3.185 2.537 3.172 2.465 C 3.149 2.343 3.128 2.22 3.108 2.097 L 3.086 1.969 L 3.076 1.911 C 3.065 1.848 3.054 1.785 3.047 1.721 C 3.043 1.683 3.047 1.642 3.059 1.606 C 3.074 1.563 3.133 1.552 3.172 1.578 C 3.221 1.61 3.248 1.659 3.262 1.711 L 3.275 1.762 C 3.303 1.864 3.33 1.967 3.343 2.071 C 3.357 2.184 3.355 2.3 3.354 2.415 L 3.354 2.455 Z M 12.172 7.653 C 12.16 7.689 12.141 7.724 12.094 7.742 C 12.092 7.662 12.108 7.589 12.124 7.518 C 12.129 7.494 12.134 7.47 12.139 7.445 C 12.144 7.42 12.151 7.394 12.158 7.369 C 12.161 7.356 12.165 7.343 12.168 7.33 C 12.198 7.21 12.209 7.09 12.206 6.965 C 12.203 6.785 12.211 6.606 12.219 6.426 C 12.222 6.364 12.225 6.302 12.227 6.239 C 12.228 6.215 12.237 6.191 12.246 6.168 C 12.251 6.155 12.262 6.144 12.272 6.134 C 12.301 6.104 12.358 6.117 12.368 6.157 C 12.374 6.181 12.376 6.206 12.376 6.23 C 12.375 6.287 12.375 6.344 12.374 6.4 C 12.374 6.566 12.373 6.732 12.365 6.897 C 12.36 7.01 12.342 7.124 12.313 7.233 C 12.284 7.343 12.245 7.451 12.206 7.559 C 12.194 7.59 12.183 7.622 12.172 7.653 Z M 7.956 10.042 C 7.973 10.007 7.995 9.973 8.019 9.942 C 8.12 9.815 8.221 9.687 8.322 9.56 L 8.509 9.324 C 8.536 9.29 8.562 9.255 8.589 9.221 C 8.614 9.189 8.638 9.156 8.663 9.125 C 8.673 9.113 8.683 9.103 8.696 9.09 C 8.702 9.083 8.71 9.076 8.718 9.067 C 8.734 9.155 8.71 9.222 8.682 9.284 C 8.551 9.57 8.385 9.833 8.161 10.056 C 8.13 10.087 8.092 10.113 8.055 10.137 C 8.027 10.155 7.997 10.145 7.973 10.124 C 7.949 10.101 7.943 10.07 7.956 10.042 Z M 10.175 7.793 C 10.159 7.847 10.14 7.904 10.075 7.959 C 10.095 7.769 10.117 7.605 10.145 7.441 C 10.165 7.326 10.182 7.211 10.199 7.096 C 10.208 7.04 10.216 6.984 10.225 6.929 C 10.231 6.885 10.239 6.841 10.246 6.797 L 10.247 6.791 C 10.249 6.778 10.251 6.765 10.254 6.753 C 10.277 6.681 10.332 6.635 10.378 6.649 C 10.428 6.664 10.46 6.722 10.455 6.795 C 10.454 6.819 10.449 6.844 10.442 6.867 L 10.413 6.969 C 10.334 7.244 10.256 7.518 10.175 7.793 Z M 13.795 10.497 C 13.766 10.695 13.767 10.891 13.769 11.09 C 13.772 11.231 13.771 11.372 13.771 11.513 C 13.77 11.575 13.77 11.637 13.77 11.698 C 13.761 11.66 13.752 11.622 13.742 11.584 C 13.686 11.355 13.631 11.128 13.656 10.892 C 13.673 10.728 13.697 10.565 13.722 10.401 L 13.73 10.348 C 13.734 10.323 13.738 10.299 13.742 10.274 C 13.759 10.167 13.777 10.06 13.768 9.95 C 13.767 9.931 13.764 9.912 13.762 9.893 C 13.758 9.868 13.755 9.842 13.754 9.817 C 13.753 9.783 13.757 9.748 13.767 9.715 C 13.771 9.701 13.795 9.684 13.81 9.684 C 13.825 9.684 13.851 9.701 13.853 9.715 C 13.861 9.753 13.865 9.793 13.861 9.832 C 13.856 9.886 13.852 9.94 13.848 9.993 C 13.834 10.162 13.82 10.33 13.795 10.497 Z M 9.78 10.389 L 9.748 10.381 C 9.747 10.374 9.745 10.367 9.743 10.36 C 9.74 10.344 9.736 10.328 9.739 10.315 C 9.743 10.3 9.747 10.285 9.75 10.27 C 9.766 10.208 9.781 10.146 9.809 10.089 C 9.852 10.003 9.899 9.918 9.946 9.834 C 9.978 9.776 10.011 9.717 10.042 9.658 C 10.094 9.559 10.144 9.459 10.194 9.359 C 10.224 9.3 10.254 9.24 10.284 9.181 C 10.304 9.143 10.327 9.106 10.367 9.075 C 10.367 9.083 10.367 9.092 10.367 9.1 C 10.367 9.119 10.368 9.137 10.363 9.153 C 10.343 9.217 10.322 9.28 10.3 9.344 L 10.274 9.421 C 10.262 9.456 10.251 9.491 10.24 9.526 C 10.213 9.609 10.186 9.692 10.156 9.773 C 10.129 9.847 10.097 9.92 10.06 9.99 C 9.984 10.135 9.884 10.263 9.78 10.389 Z M 8.082 6.726 C 8.161 6.438 8.29 6.172 8.445 5.918 C 8.452 5.907 8.464 5.898 8.476 5.889 C 8.48 5.886 8.484 5.883 8.488 5.88 C 8.49 5.879 8.494 5.881 8.498 5.882 L 8.502 5.884 C 8.504 5.886 8.505 5.888 8.507 5.891 C 8.51 5.896 8.514 5.901 8.514 5.907 C 8.495 6.195 8.445 6.475 8.274 6.719 C 8.263 6.735 8.252 6.752 8.24 6.769 C 8.219 6.801 8.197 6.834 8.172 6.864 C 8.16 6.88 8.125 6.891 8.108 6.885 C 8.091 6.878 8.074 6.849 8.072 6.828 C 8.069 6.795 8.073 6.759 8.082 6.726 Z M 14.937 8.232 C 14.932 8.068 14.93 7.904 14.936 7.741 C 14.939 7.665 14.952 7.588 14.965 7.512 L 14.974 7.462 C 14.977 7.447 14.985 7.434 14.995 7.416 C 15.001 7.407 15.007 7.397 15.013 7.385 C 15.019 7.395 15.025 7.405 15.031 7.413 C 15.041 7.43 15.05 7.443 15.052 7.456 L 15.053 7.466 C 15.065 7.566 15.077 7.666 15.082 7.767 C 15.088 7.93 15.091 8.094 15.09 8.257 C 15.09 8.314 15.084 8.371 15.079 8.428 C 15.076 8.455 15.074 8.482 15.072 8.509 L 15.066 8.583 C 15.062 8.632 15.059 8.681 15.055 8.731 C 15.047 8.859 15.032 8.986 14.982 9.129 C 14.983 9.081 14.985 9.035 14.986 8.991 C 14.99 8.885 14.993 8.786 14.992 8.688 C 14.991 8.631 14.983 8.575 14.975 8.518 C 14.971 8.496 14.968 8.474 14.965 8.452 C 14.962 8.427 14.958 8.402 14.954 8.377 C 14.946 8.328 14.938 8.28 14.937 8.232 Z M 5.527 3.476 C 5.501 3.752 5.396 4.004 5.283 4.252 C 5.281 4.256 5.279 4.26 5.277 4.264 C 5.267 4.291 5.254 4.321 5.211 4.326 C 5.209 4.247 5.224 4.171 5.239 4.096 C 5.243 4.076 5.246 4.056 5.25 4.035 C 5.272 3.912 5.296 3.79 5.319 3.667 C 5.337 3.576 5.354 3.484 5.371 3.393 C 5.378 3.358 5.383 3.323 5.388 3.288 C 5.394 3.245 5.4 3.201 5.409 3.158 C 5.42 3.105 5.452 3.077 5.484 3.078 C 5.52 3.078 5.552 3.119 5.55 3.18 C 5.547 3.265 5.539 3.351 5.531 3.436 L 5.527 3.476 Z M 12.697 8.434 C 12.697 8.459 12.691 8.483 12.66 8.491 C 12.649 8.427 12.637 8.364 12.626 8.301 C 12.603 8.17 12.579 8.039 12.557 7.908 C 12.537 7.79 12.535 7.672 12.571 7.555 C 12.578 7.531 12.585 7.507 12.591 7.483 C 12.601 7.445 12.611 7.406 12.625 7.37 C 12.675 7.239 12.715 7.107 12.706 6.965 C 12.705 6.936 12.707 6.904 12.738 6.888 C 12.76 6.877 12.789 6.906 12.802 6.956 C 12.826 7.054 12.826 7.152 12.803 7.25 C 12.791 7.303 12.775 7.356 12.755 7.406 C 12.668 7.624 12.658 7.848 12.683 8.078 C 12.693 8.164 12.694 8.25 12.695 8.336 C 12.695 8.369 12.696 8.401 12.697 8.434 Z M 15.452 10.421 C 15.421 10.55 15.387 10.68 15.352 10.808 C 15.347 10.827 15.338 10.845 15.329 10.863 C 15.325 10.872 15.321 10.88 15.317 10.889 C 15.273 10.864 15.276 10.828 15.279 10.794 L 15.279 10.781 C 15.285 10.661 15.292 10.541 15.299 10.422 C 15.302 10.359 15.306 10.296 15.31 10.232 C 15.314 10.149 15.318 10.065 15.322 9.981 C 15.325 9.91 15.339 9.843 15.385 9.787 C 15.427 9.735 15.486 9.74 15.516 9.8 C 15.553 9.873 15.559 9.951 15.541 10.031 L 15.532 10.073 C 15.506 10.189 15.48 10.305 15.452 10.421 Z M 6.895 8.14 C 6.846 8.223 6.787 8.295 6.706 8.347 C 6.696 8.353 6.684 8.356 6.671 8.36 C 6.664 8.361 6.657 8.363 6.65 8.366 C 6.649 8.358 6.648 8.35 6.647 8.344 C 6.645 8.332 6.643 8.322 6.646 8.315 L 6.652 8.297 C 6.667 8.256 6.681 8.215 6.702 8.177 C 6.777 8.044 6.805 7.9 6.81 7.749 C 6.814 7.614 6.848 7.485 6.924 7.37 C 6.932 7.357 6.944 7.348 6.959 7.336 C 6.967 7.33 6.975 7.323 6.984 7.315 C 6.99 7.329 6.995 7.343 7.001 7.355 C 7.011 7.379 7.02 7.4 7.022 7.421 C 7.047 7.672 7.027 7.916 6.895 8.14 Z M 14.516 11.092 C 14.532 11.063 14.554 11.033 14.599 11.044 C 14.599 11.072 14.6 11.099 14.601 11.127 C 14.602 11.187 14.604 11.248 14.598 11.307 C 14.578 11.504 14.526 11.695 14.474 11.885 L 14.462 11.929 C 14.454 11.956 14.437 11.982 14.418 12.004 C 14.394 12.031 14.353 12.033 14.323 12.016 C 14.295 12 14.281 11.975 14.28 11.943 L 14.28 11.941 C 14.28 11.937 14.279 11.932 14.28 11.928 C 14.304 11.843 14.318 11.756 14.333 11.668 C 14.355 11.537 14.376 11.405 14.429 11.28 C 14.456 11.217 14.484 11.154 14.516 11.092 Z M 16.059 8.816 C 16.064 8.96 16.068 9.103 16.066 9.246 C 16.065 9.323 16.054 9.4 16.042 9.477 L 16.042 9.482 C 16.04 9.495 16.031 9.508 16.019 9.525 C 16.012 9.535 16.005 9.546 15.997 9.559 L 15.95 9.342 L 15.95 9.341 C 15.912 9.16 15.875 8.988 15.839 8.815 C 15.833 8.787 15.832 8.756 15.833 8.727 C 15.834 8.654 15.864 8.607 15.911 8.598 C 15.963 8.589 16.017 8.629 16.039 8.7 C 16.05 8.737 16.058 8.777 16.059 8.816 Z M 5.915 2.731 L 5.896 2.728 C 5.892 2.7 5.889 2.672 5.886 2.644 C 5.879 2.575 5.871 2.505 5.861 2.435 C 5.847 2.343 5.83 2.25 5.81 2.159 C 5.79 2.065 5.769 1.971 5.748 1.877 C 5.728 1.788 5.708 1.698 5.688 1.609 C 5.682 1.581 5.682 1.549 5.687 1.521 C 5.697 1.462 5.771 1.436 5.814 1.477 C 5.838 1.5 5.859 1.532 5.866 1.564 L 5.869 1.575 C 5.887 1.653 5.905 1.733 5.907 1.812 C 5.914 2.03 5.917 2.248 5.92 2.466 L 5.922 2.658 C 5.922 2.675 5.92 2.692 5.918 2.709 C 5.917 2.716 5.915 2.724 5.915 2.731 Z M 17.505 10.25 C 17.498 10.529 17.447 10.8 17.331 11.056 C 17.327 11.067 17.318 11.075 17.31 11.084 L 17.304 11.09 C 17.303 11.092 17.3 11.093 17.293 11.095 C 17.288 11.096 17.282 11.098 17.271 11.101 C 17.261 10.998 17.264 10.905 17.273 10.813 C 17.291 10.635 17.309 10.458 17.331 10.282 C 17.337 10.233 17.352 10.185 17.368 10.139 C 17.373 10.125 17.387 10.113 17.4 10.102 L 17.407 10.096 C 17.424 10.082 17.464 10.088 17.473 10.107 C 17.484 10.129 17.494 10.152 17.499 10.176 C 17.504 10.2 17.505 10.225 17.505 10.25 Z M 1.456 6.975 C 1.553 6.892 1.659 6.82 1.803 6.748 C 1.767 6.854 1.722 6.913 1.671 6.966 C 1.605 7.033 1.539 7.1 1.467 7.161 C 1.335 7.272 1.199 7.38 1.063 7.487 C 1.033 7.511 0.996 7.529 0.959 7.54 C 0.94 7.545 0.909 7.533 0.894 7.518 C 0.875 7.498 0.889 7.472 0.908 7.453 C 0.913 7.448 0.918 7.443 0.924 7.438 L 0.93 7.433 C 0.982 7.387 1.035 7.341 1.088 7.295 C 1.21 7.188 1.332 7.08 1.456 6.975 Z M 17.195 11.621 C 17.125 11.822 17.048 12.02 16.939 12.204 C 16.935 12.211 16.928 12.216 16.918 12.223 C 16.913 12.227 16.907 12.231 16.9 12.237 C 16.897 12.228 16.894 12.22 16.891 12.213 C 16.885 12.2 16.88 12.189 16.88 12.178 C 16.88 12.158 16.88 12.138 16.879 12.119 C 16.878 12.059 16.876 11.999 16.886 11.941 C 16.908 11.815 16.939 11.69 16.974 11.566 C 16.986 11.52 17.016 11.477 17.045 11.439 C 17.071 11.405 17.113 11.397 17.154 11.411 C 17.197 11.426 17.215 11.462 17.213 11.505 C 17.211 11.544 17.208 11.585 17.195 11.621 Z M 18.178 11.023 C 18.167 11.044 18.151 11.064 18.136 11.082 C 18.133 11.086 18.126 11.087 18.118 11.089 C 18.113 11.089 18.107 11.09 18.1 11.092 C 18.068 11.017 18.047 10.937 18.044 10.854 C 18.042 10.778 18.042 10.701 18.043 10.625 L 18.044 10.544 C 18.044 10.492 18.06 10.447 18.098 10.411 C 18.158 10.353 18.247 10.366 18.283 10.441 C 18.297 10.471 18.307 10.508 18.304 10.54 C 18.286 10.707 18.254 10.871 18.178 11.023 Z M 4.457 5.719 L 4.427 5.704 C 4.43 5.689 4.433 5.674 4.435 5.659 C 4.441 5.626 4.447 5.593 4.458 5.561 L 4.471 5.521 C 4.521 5.375 4.571 5.229 4.629 5.086 C 4.651 5.032 4.686 4.983 4.722 4.935 C 4.731 4.923 4.739 4.911 4.748 4.899 C 4.756 4.887 4.77 4.879 4.787 4.869 C 4.796 4.864 4.806 4.858 4.816 4.851 C 4.82 4.861 4.825 4.87 4.829 4.878 C 4.837 4.895 4.844 4.909 4.843 4.922 L 4.839 4.955 C 4.832 5.013 4.825 5.072 4.804 5.125 C 4.732 5.304 4.65 5.48 4.536 5.638 C 4.521 5.659 4.501 5.677 4.482 5.695 C 4.473 5.703 4.465 5.711 4.457 5.719 Z M 9.889 8.473 C 9.836 8.633 9.758 8.774 9.582 8.829 C 9.576 8.83 9.57 8.829 9.561 8.828 C 9.557 8.827 9.552 8.827 9.546 8.826 C 9.545 8.821 9.544 8.815 9.543 8.809 C 9.541 8.797 9.539 8.784 9.541 8.772 C 9.556 8.664 9.573 8.556 9.592 8.449 C 9.597 8.415 9.606 8.38 9.621 8.35 C 9.652 8.292 9.708 8.269 9.772 8.28 C 9.832 8.29 9.88 8.337 9.89 8.399 C 9.893 8.423 9.896 8.45 9.889 8.473 Z M 14.526 10.123 C 14.458 10.226 14.387 10.327 14.315 10.427 C 14.311 10.433 14.308 10.438 14.304 10.443 C 14.281 10.478 14.256 10.515 14.196 10.514 C 14.197 10.504 14.199 10.494 14.2 10.485 C 14.203 10.465 14.205 10.447 14.212 10.429 C 14.235 10.367 14.257 10.304 14.279 10.242 C 14.331 10.095 14.382 9.949 14.451 9.809 C 14.464 9.783 14.478 9.756 14.496 9.734 C 14.527 9.697 14.589 9.711 14.604 9.757 C 14.61 9.775 14.614 9.795 14.614 9.815 C 14.615 9.926 14.587 10.03 14.526 10.123 Z M 11.301 7.89 C 11.256 8.087 11.194 8.279 11.12 8.467 L 11.117 8.476 C 11.105 8.508 11.092 8.543 11.037 8.563 C 11.043 8.342 11.065 8.137 11.102 7.933 C 11.105 7.917 11.108 7.899 11.11 7.882 C 11.115 7.851 11.119 7.819 11.128 7.788 C 11.142 7.737 11.181 7.71 11.225 7.715 C 11.272 7.72 11.312 7.764 11.313 7.818 C 11.313 7.84 11.308 7.863 11.303 7.885 L 11.301 7.89 Z M 8.783 11.241 C 8.785 11.212 8.789 11.18 8.803 11.155 L 8.832 11.104 C 8.909 10.965 8.987 10.826 9.095 10.708 C 9.105 10.698 9.117 10.689 9.136 10.674 C 9.148 10.666 9.162 10.655 9.18 10.64 C 9.165 10.75 9.144 10.821 9.122 10.891 C 9.089 11 9.056 11.109 9.02 11.217 C 9.009 11.249 8.992 11.281 8.972 11.308 C 8.944 11.347 8.906 11.368 8.856 11.356 C 8.808 11.344 8.778 11.299 8.783 11.241 Z M 11.109 10.339 C 11.101 10.363 11.091 10.386 11.079 10.407 L 11.048 10.455 C 10.957 10.602 10.865 10.749 10.772 10.894 C 10.758 10.916 10.738 10.934 10.718 10.952 C 10.709 10.96 10.7 10.968 10.692 10.977 L 10.679 10.969 L 10.666 10.961 C 10.674 10.936 10.681 10.911 10.688 10.886 C 10.706 10.827 10.723 10.768 10.744 10.71 C 10.775 10.622 10.809 10.535 10.847 10.449 C 10.869 10.401 10.898 10.353 10.931 10.311 C 10.95 10.285 10.982 10.263 11.013 10.252 C 11.037 10.243 11.073 10.247 11.096 10.26 C 11.126 10.276 11.118 10.311 11.109 10.339 Z M 9.728 11.944 C 9.739 11.892 9.754 11.839 9.774 11.789 C 9.853 11.598 9.968 11.427 10.083 11.257 L 10.086 11.252 C 10.089 11.248 10.095 11.246 10.105 11.242 C 10.112 11.239 10.121 11.236 10.133 11.231 C 10.13 11.247 10.128 11.262 10.127 11.276 C 10.124 11.303 10.121 11.325 10.114 11.346 L 10.111 11.355 C 10.045 11.537 9.979 11.72 9.907 11.9 C 9.89 11.941 9.86 11.978 9.83 12.014 L 9.815 12.032 C 9.797 12.055 9.752 12.044 9.741 12.015 C 9.733 11.993 9.724 11.966 9.728 11.944 Z M 20.086 12.011 C 20.074 12.033 20.061 12.055 20.029 12.038 C 19.994 11.874 19.973 11.708 20.016 11.542 C 20.024 11.509 20.036 11.476 20.054 11.448 C 20.079 11.409 20.13 11.396 20.173 11.409 C 20.215 11.421 20.237 11.454 20.247 11.494 C 20.251 11.512 20.252 11.534 20.247 11.552 C 20.239 11.578 20.232 11.605 20.225 11.631 C 20.189 11.762 20.154 11.892 20.086 12.011 Z M 18.778 10.781 C 18.835 10.789 18.883 10.846 18.871 10.911 L 18.869 10.916 C 18.839 11.073 18.807 11.231 18.734 11.376 C 18.727 11.39 18.716 11.402 18.705 11.414 C 18.7 11.42 18.694 11.425 18.69 11.431 C 18.685 11.427 18.68 11.424 18.676 11.421 C 18.669 11.416 18.664 11.412 18.663 11.408 C 18.619 11.234 18.614 11.059 18.653 10.883 C 18.654 10.88 18.655 10.877 18.656 10.873 L 18.658 10.869 C 18.682 10.805 18.724 10.774 18.778 10.781 Z M 7.245 10.739 C 7.336 10.664 7.439 10.605 7.559 10.546 C 7.557 10.56 7.557 10.573 7.556 10.584 C 7.556 10.607 7.555 10.626 7.548 10.642 C 7.506 10.737 7.461 10.831 7.414 10.923 C 7.401 10.949 7.38 10.973 7.358 10.992 C 7.316 11.029 7.25 11.031 7.206 11.001 C 7.154 10.965 7.134 10.901 7.164 10.844 C 7.185 10.805 7.212 10.767 7.245 10.739 Z M 13.918 13.123 C 13.902 13.156 13.882 13.194 13.827 13.201 C 13.828 13.191 13.829 13.181 13.83 13.172 C 13.831 13.152 13.833 13.133 13.839 13.115 C 13.894 12.961 13.921 12.801 13.946 12.64 C 13.954 12.592 13.968 12.544 13.986 12.498 C 13.994 12.477 14.014 12.457 14.032 12.443 C 14.059 12.423 14.109 12.442 14.119 12.473 C 14.125 12.492 14.13 12.512 14.128 12.531 C 14.126 12.549 14.125 12.567 14.123 12.585 C 14.12 12.636 14.116 12.688 14.098 12.734 C 14.049 12.859 13.989 12.98 13.93 13.1 L 13.918 13.123 Z M 12.738 9.556 C 12.807 9.392 12.888 9.234 13.005 9.097 C 13.011 9.089 13.022 9.084 13.032 9.079 L 13.041 9.074 C 13.043 9.073 13.045 9.074 13.05 9.075 C 13.053 9.076 13.057 9.076 13.061 9.077 C 13.06 9.088 13.058 9.098 13.057 9.109 C 13.054 9.132 13.051 9.154 13.044 9.176 C 13.001 9.312 12.957 9.449 12.909 9.583 C 12.895 9.624 12.872 9.664 12.843 9.696 C 12.807 9.736 12.735 9.711 12.73 9.658 C 12.726 9.624 12.726 9.586 12.738 9.556 Z M 4.769 6.659 C 4.788 6.548 4.824 6.44 4.887 6.344 C 4.891 6.338 4.9 6.335 4.912 6.33 C 4.919 6.328 4.926 6.325 4.935 6.322 C 4.938 6.332 4.943 6.343 4.947 6.353 C 4.956 6.375 4.965 6.396 4.968 6.417 C 4.975 6.465 4.979 6.514 4.982 6.563 C 4.984 6.583 4.985 6.602 4.987 6.622 C 4.993 6.693 4.975 6.759 4.943 6.82 C 4.92 6.863 4.863 6.87 4.831 6.834 C 4.786 6.785 4.757 6.723 4.769 6.659 Z M 12.106 10.748 L 12.132 10.765 C 12.112 10.828 12.095 10.892 12.078 10.956 C 12.049 11.061 12.02 11.167 11.98 11.27 C 11.971 11.292 11.958 11.317 11.939 11.33 C 11.921 11.342 11.894 11.347 11.871 11.345 C 11.843 11.344 11.829 11.319 11.827 11.294 C 11.825 11.265 11.825 11.234 11.833 11.206 C 11.876 11.069 11.935 10.939 12.022 10.824 C 12.037 10.803 12.058 10.787 12.078 10.771 C 12.088 10.763 12.097 10.756 12.106 10.748 Z M 21.423 12.243 C 21.423 12.248 21.424 12.253 21.424 12.258 C 21.425 12.398 21.364 12.514 21.29 12.656 L 21.277 12.681 C 21.212 12.53 21.192 12.416 21.209 12.298 C 21.215 12.261 21.232 12.223 21.254 12.192 C 21.274 12.164 21.309 12.151 21.346 12.162 C 21.386 12.175 21.415 12.199 21.423 12.243 Z M 3.596 6.143 C 3.552 6.221 3.505 6.297 3.455 6.371 C 3.444 6.388 3.426 6.401 3.403 6.417 C 3.391 6.426 3.377 6.436 3.362 6.448 C 3.393 6.269 3.439 6.119 3.5 5.974 L 3.502 5.97 C 3.505 5.962 3.509 5.953 3.515 5.949 C 3.519 5.946 3.523 5.943 3.528 5.94 C 3.544 5.929 3.561 5.916 3.577 5.916 C 3.608 5.917 3.631 5.942 3.637 5.974 C 3.641 5.992 3.641 6.014 3.636 6.032 L 3.635 6.037 C 3.624 6.074 3.614 6.111 3.596 6.143 Z M 16.702 10.624 C 16.701 10.739 16.678 10.851 16.637 10.958 C 16.632 10.973 16.619 10.986 16.6 11.005 C 16.59 11.015 16.577 11.028 16.562 11.045 C 16.536 10.876 16.539 10.743 16.555 10.611 C 16.561 10.562 16.572 10.509 16.632 10.495 C 16.67 10.486 16.703 10.544 16.702 10.624 Z M 14.023 8.611 C 13.989 8.73 13.941 8.843 13.88 8.951 C 13.866 8.975 13.854 9 13.843 9.025 C 13.817 9.079 13.791 9.133 13.746 9.179 C 13.747 9.171 13.748 9.164 13.748 9.156 C 13.749 9.14 13.751 9.124 13.756 9.109 L 13.76 9.1 C 13.854 8.856 13.948 8.612 14.093 8.388 C 14.093 8.394 14.092 8.4 14.092 8.406 C 14.091 8.42 14.09 8.433 14.086 8.446 C 14.078 8.469 14.069 8.491 14.059 8.514 C 14.046 8.546 14.033 8.578 14.023 8.611 Z M 8.899 8.291 C 8.868 8.395 8.823 8.492 8.71 8.557 C 8.715 8.527 8.72 8.498 8.724 8.468 C 8.735 8.396 8.747 8.324 8.761 8.253 C 8.773 8.193 8.81 8.164 8.848 8.171 C 8.894 8.18 8.918 8.23 8.899 8.291 Z M 8.117 7.973 L 8.123 7.983 L 8.119 7.995 L 8.116 7.991 C 8.113 7.988 8.111 7.985 8.109 7.982 L 8.117 7.973 Z M 3.249 5.561 L 3.243 5.556 L 3.25 5.553 L 3.249 5.561 Z M 3.282 5.495 L 3.277 5.505 L 3.274 5.494 L 3.282 5.495 Z M 3.308 5.429 L 3.315 5.439 L 3.307 5.446 L 3.305 5.444 C 3.303 5.441 3.301 5.437 3.301 5.437 C 3.301 5.435 3.303 5.433 3.306 5.431 L 3.308 5.429 Z M 3.338 5.369 L 3.346 5.38 L 3.337 5.388 L 3.334 5.385 C 3.332 5.382 3.33 5.38 3.331 5.377 C 3.331 5.375 3.333 5.373 3.335 5.371 L 3.338 5.369 Z M 6.415 10.656 L 6.407 10.65 L 6.416 10.645 L 6.415 10.656 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 22.733 13.542 L 23.102 13.643 L 23.103 13.641 L 23.118 13.602 C 23.129 13.574 23.14 13.546 23.151 13.517 C 23.156 13.504 23.163 13.49 23.172 13.479 C 23.189 13.458 23.214 13.449 23.236 13.466 C 23.249 13.476 23.263 13.503 23.258 13.515 C 23.242 13.555 23.221 13.593 23.201 13.632 C 23.194 13.645 23.187 13.659 23.18 13.672 L 23.381 13.761 C 23.385 13.751 23.387 13.74 23.39 13.728 C 23.398 13.694 23.406 13.658 23.456 13.642 C 23.472 13.685 23.456 13.717 23.44 13.747 C 23.433 13.759 23.427 13.771 23.423 13.784 L 23.868 14.019 C 23.874 14.007 23.881 13.995 23.887 13.983 C 23.902 13.953 23.917 13.922 23.937 13.894 C 23.95 13.874 23.978 13.87 24.001 13.889 C 24.023 13.907 24.024 13.933 24.01 13.953 C 23.993 13.978 23.973 14 23.953 14.023 C 23.945 14.033 23.936 14.043 23.928 14.053 L 24.281 14.269 C 24.345 14.212 24.423 14.181 24.504 14.159 C 24.531 14.151 24.563 14.152 24.59 14.159 C 24.641 14.172 24.674 14.22 24.674 14.268 C 24.674 14.316 24.641 14.364 24.591 14.378 C 24.564 14.385 24.537 14.389 24.51 14.393 C 24.498 14.394 24.486 14.396 24.474 14.398 L 24.508 14.422 C 24.7 14.559 24.891 14.697 25.063 14.86 C 25.08 14.876 25.099 14.891 25.117 14.906 C 25.126 14.912 25.134 14.918 25.142 14.925 L 25.207 14.894 C 25.261 14.868 25.314 14.842 25.369 14.818 C 25.395 14.806 25.425 14.8 25.454 14.799 C 25.495 14.798 25.53 14.827 25.542 14.866 C 25.556 14.911 25.541 14.961 25.5 14.98 C 25.475 14.992 25.446 14.997 25.418 15.002 L 25.401 15.005 C 25.363 15.012 25.324 15.018 25.285 15.025 L 25.242 15.032 L 25.404 15.23 C 25.408 15.23 25.413 15.228 25.418 15.227 C 25.428 15.225 25.438 15.222 25.447 15.224 C 25.555 15.245 25.663 15.244 25.771 15.244 C 25.826 15.244 25.88 15.243 25.935 15.246 C 25.945 15.247 25.954 15.25 25.963 15.252 C 25.967 15.254 25.97 15.255 25.974 15.256 C 25.991 15.286 25.974 15.305 25.956 15.322 C 25.906 15.372 25.842 15.399 25.776 15.422 C 25.731 15.437 25.685 15.452 25.639 15.467 L 25.579 15.487 C 25.584 15.498 25.588 15.509 25.593 15.521 C 25.612 15.569 25.631 15.618 25.674 15.655 L 25.736 15.661 C 25.779 15.665 25.822 15.67 25.866 15.675 C 26.194 15.712 26.472 15.609 26.705 15.378 C 26.616 15.32 26.525 15.262 26.435 15.205 C 26.236 15.079 26.037 14.953 25.846 14.815 C 25.738 14.738 25.622 14.671 25.506 14.605 C 25.441 14.567 25.376 14.53 25.312 14.49 C 25.177 14.407 25.043 14.322 24.912 14.232 C 24.614 14.026 24.318 13.818 24.023 13.608 C 23.938 13.548 23.858 13.48 23.778 13.413 C 23.616 13.274 23.444 13.148 23.266 13.029 C 23.102 12.919 22.938 12.807 22.777 12.69 C 22.528 12.508 22.263 12.352 21.988 12.213 C 21.864 12.15 21.741 12.086 21.631 11.998 L 21.511 11.914 C 21.497 11.906 21.482 11.897 21.468 11.888 C 21.436 11.87 21.404 11.851 21.37 11.834 C 21.291 11.796 21.212 11.758 21.133 11.72 C 21.02 11.666 20.906 11.612 20.794 11.555 C 20.6 11.459 20.407 11.361 20.213 11.263 C 20.066 11.188 19.918 11.113 19.77 11.038 C 19.753 11.03 19.733 11.026 19.714 11.023 C 19.705 11.021 19.697 11.021 19.688 11.019 L 19.687 11.019 C 19.687 11.023 19.686 11.027 19.686 11.031 C 19.685 11.041 19.684 11.052 19.688 11.059 C 19.722 11.113 19.724 11.171 19.714 11.23 C 19.68 11.425 19.642 11.619 19.566 11.802 C 19.563 11.811 19.556 11.817 19.549 11.824 C 19.546 11.827 19.543 11.83 19.541 11.833 C 19.537 11.83 19.533 11.828 19.53 11.826 C 19.523 11.822 19.518 11.819 19.517 11.815 C 19.477 11.611 19.468 11.404 19.472 11.196 L 19.472 11.189 C 19.473 11.167 19.473 11.144 19.478 11.123 C 19.491 11.057 19.533 11.023 19.603 11.02 C 19.623 11.019 19.642 11.019 19.662 11.019 L 19.687 11.019 L 19.687 11.017 L 19.688 11.019 C 19.684 10.986 19.66 10.975 19.637 10.965 C 19.629 10.962 19.622 10.959 19.615 10.955 C 19.556 10.921 19.497 10.888 19.438 10.854 C 19.329 10.792 19.22 10.73 19.112 10.665 C 18.678 10.402 18.272 10.104 17.925 9.729 C 17.738 9.528 17.548 9.329 17.357 9.131 C 17.294 9.065 17.23 8.999 17.167 8.933 C 17.096 8.859 17.025 8.786 16.953 8.714 L 16.856 8.614 L 16.822 8.581 L 16.718 8.473 C 16.641 8.393 16.564 8.313 16.488 8.232 C 16.461 8.204 16.435 8.175 16.409 8.146 C 16.397 8.132 16.384 8.117 16.371 8.103 L 16.365 8.096 C 16.358 8.088 16.35 8.079 16.343 8.071 L 16.334 8.065 C 16.33 8.063 16.326 8.06 16.322 8.058 L 16.338 8.048 L 16.343 8.071 C 16.358 8.076 16.373 8.082 16.388 8.087 C 16.396 8.091 16.404 8.095 16.412 8.099 C 16.431 8.109 16.449 8.118 16.465 8.13 C 16.698 8.307 16.926 8.492 17.135 8.697 C 17.518 9.072 17.898 9.45 18.276 9.83 C 18.518 10.073 18.78 10.293 19.062 10.488 C 19.548 10.824 20.08 11.076 20.612 11.328 L 20.632 11.337 C 20.646 11.344 20.663 11.344 20.68 11.345 C 20.688 11.345 20.696 11.346 20.703 11.347 C 20.695 11.338 20.688 11.329 20.68 11.319 C 20.663 11.298 20.646 11.278 20.625 11.263 C 20.548 11.208 20.469 11.157 20.388 11.108 C 20.329 11.072 20.269 11.036 20.205 11.01 C 20.05 10.948 19.916 10.856 19.795 10.744 C 19.745 10.698 19.696 10.652 19.647 10.606 C 19.569 10.533 19.491 10.461 19.413 10.389 C 19.282 10.272 19.152 10.154 19.021 10.037 C 18.841 9.876 18.662 9.715 18.483 9.552 C 18.43 9.504 18.377 9.456 18.324 9.408 C 18.108 9.213 17.893 9.018 17.687 8.813 C 17.389 8.517 17.066 8.258 16.709 8.038 L 16.667 8.012 C 16.499 7.909 16.33 7.806 16.187 7.669 C 16.117 7.602 16.048 7.533 15.979 7.465 L 15.954 7.439 C 15.932 7.417 15.911 7.395 15.891 7.372 L 15.865 7.344 C 15.831 7.352 15.832 7.374 15.833 7.394 C 15.833 7.397 15.833 7.401 15.833 7.404 C 15.833 7.423 15.833 7.441 15.833 7.459 C 15.833 7.545 15.833 7.63 15.807 7.714 L 15.804 7.724 C 15.794 7.759 15.783 7.793 15.741 7.814 C 15.739 7.811 15.737 7.807 15.734 7.804 C 15.729 7.797 15.724 7.79 15.723 7.783 C 15.691 7.562 15.659 7.342 15.629 7.121 C 15.622 7.07 15.605 7.026 15.571 6.987 C 15.525 6.931 15.479 6.876 15.432 6.82 C 15.352 6.723 15.272 6.626 15.19 6.53 C 15.133 6.463 15.065 6.405 14.995 6.359 C 14.991 6.36 14.987 6.361 14.984 6.361 C 14.979 6.363 14.976 6.363 14.974 6.365 C 14.971 6.368 14.969 6.374 14.969 6.378 L 14.971 6.435 C 14.973 6.51 14.976 6.585 14.98 6.66 C 14.98 6.676 14.984 6.691 14.988 6.712 C 14.991 6.723 14.994 6.736 14.997 6.751 C 14.985 6.743 14.975 6.737 14.966 6.732 C 14.949 6.722 14.936 6.715 14.929 6.704 C 14.901 6.663 14.873 6.621 14.856 6.575 C 14.814 6.459 14.772 6.342 14.741 6.223 C 14.726 6.167 14.707 6.124 14.658 6.09 C 14.566 6.025 14.474 5.958 14.383 5.892 C 14.314 5.842 14.245 5.792 14.175 5.742 C 14.157 5.729 14.137 5.72 14.114 5.71 C 14.103 5.705 14.09 5.7 14.077 5.693 C 14.075 5.755 14.084 5.813 14.094 5.87 C 14.106 5.949 14.119 6.025 14.1 6.102 C 14.072 6.105 14.064 6.084 14.057 6.066 C 14.056 6.063 14.055 6.059 14.054 6.056 L 14.048 6.044 C 13.986 5.903 13.924 5.762 13.867 5.619 C 13.849 5.575 13.828 5.54 13.784 5.521 C 13.759 5.51 13.735 5.497 13.71 5.484 C 13.656 5.455 13.602 5.426 13.539 5.418 L 13.531 5.426 L 13.537 5.458 C 13.542 5.481 13.547 5.504 13.553 5.526 L 13.56 5.555 C 13.579 5.621 13.597 5.689 13.584 5.769 C 13.576 5.766 13.568 5.764 13.56 5.762 C 13.544 5.758 13.529 5.754 13.522 5.744 C 13.479 5.69 13.439 5.634 13.404 5.575 C 13.358 5.499 13.317 5.42 13.277 5.341 C 13.256 5.299 13.23 5.267 13.185 5.25 C 12.973 5.168 12.77 5.067 12.567 4.966 C 12.452 4.908 12.336 4.851 12.219 4.797 C 12.207 4.791 12.195 4.785 12.183 4.779 C 12.133 4.754 12.083 4.729 12.024 4.734 C 12.05 4.762 12.075 4.79 12.1 4.818 C 12.154 4.879 12.208 4.939 12.264 4.997 C 12.776 5.53 13.339 6.007 13.92 6.463 L 14.49 6.911 C 14.538 6.911 14.574 6.934 14.603 6.97 C 14.574 6.983 14.537 6.978 14.492 6.956 C 14.483 6.953 14.474 6.951 14.464 6.949 C 14.445 6.944 14.425 6.939 14.408 6.928 C 14.358 6.898 14.309 6.867 14.259 6.837 C 14.042 6.705 13.825 6.574 13.623 6.417 C 13.516 6.333 13.407 6.25 13.299 6.167 C 13.238 6.121 13.177 6.074 13.117 6.027 C 12.995 5.933 12.874 5.84 12.753 5.746 L 12.611 5.636 L 12.603 5.633 C 12.568 5.622 12.534 5.61 12.521 5.57 C 12.501 5.57 12.49 5.561 12.49 5.54 C 12.453 5.538 12.427 5.525 12.429 5.482 C 12.374 5.477 12.34 5.441 12.306 5.405 C 12.296 5.395 12.287 5.384 12.277 5.375 C 12.248 5.355 12.218 5.335 12.189 5.316 C 12.124 5.272 12.058 5.228 11.997 5.179 C 11.872 5.079 11.749 4.975 11.626 4.872 C 11.571 4.825 11.515 4.778 11.459 4.731 C 11.449 4.723 11.438 4.715 11.428 4.708 L 11.415 4.7 C 11.387 4.707 11.388 4.724 11.388 4.741 L 11.388 4.748 L 11.389 4.846 C 11.389 4.977 11.39 5.107 11.392 5.238 C 11.395 5.422 11.377 5.603 11.341 5.784 C 11.325 5.862 11.318 5.942 11.311 6.022 C 11.307 6.066 11.304 6.109 11.298 6.153 C 11.276 6.335 11.233 6.513 11.169 6.685 C 11.164 6.697 11.157 6.708 11.15 6.72 C 11.146 6.726 11.143 6.732 11.139 6.738 C 11.115 6.725 11.118 6.707 11.12 6.691 C 11.12 6.685 11.121 6.68 11.121 6.675 C 11.12 6.657 11.122 6.639 11.125 6.621 L 11.126 6.616 C 11.136 6.557 11.145 6.499 11.155 6.44 C 11.177 6.308 11.199 6.177 11.217 6.044 C 11.228 5.962 11.228 5.877 11.225 5.794 C 11.224 5.737 11.219 5.68 11.214 5.623 C 11.21 5.566 11.205 5.51 11.203 5.453 L 11.203 5.435 C 11.194 5.159 11.185 4.883 11.183 4.606 C 11.183 4.512 11.149 4.45 11.075 4.394 C 10.964 4.31 10.854 4.227 10.729 4.164 C 10.693 4.145 10.66 4.123 10.626 4.101 C 10.605 4.088 10.585 4.075 10.564 4.062 C 10.551 4.054 10.537 4.048 10.521 4.042 C 10.513 4.038 10.505 4.035 10.496 4.031 C 10.494 4.039 10.492 4.046 10.49 4.053 C 10.487 4.064 10.485 4.072 10.485 4.081 C 10.488 4.253 10.469 4.424 10.449 4.594 C 10.441 4.66 10.433 4.725 10.427 4.791 C 10.426 4.801 10.425 4.811 10.423 4.821 L 10.35 5.124 L 10.278 5.427 C 10.265 5.48 10.253 5.534 10.24 5.587 L 10.217 5.687 C 10.211 5.828 10.196 5.967 10.145 6.101 C 10.127 5.96 10.135 5.823 10.168 5.686 C 10.17 5.667 10.173 5.649 10.175 5.63 C 10.162 5.596 10.168 5.566 10.19 5.538 C 10.194 5.507 10.198 5.475 10.202 5.444 C 10.21 5.372 10.218 5.3 10.234 5.23 C 10.258 5.122 10.261 5.014 10.246 4.906 C 10.209 4.651 10.193 4.395 10.194 4.137 C 10.194 4.081 10.19 4.024 10.185 3.968 C 10.183 3.945 10.181 3.923 10.18 3.9 C 10.175 3.821 10.139 3.766 10.07 3.72 C 9.945 3.638 9.824 3.553 9.702 3.468 C 9.645 3.428 9.588 3.388 9.531 3.348 C 9.486 3.318 9.441 3.287 9.395 3.257 L 9.335 3.216 C 9.285 3.295 9.236 3.459 9.23 3.552 C 9.222 3.675 9.213 3.798 9.202 3.921 C 9.199 3.953 9.184 3.984 9.157 4.013 C 9.153 3.974 9.149 3.935 9.144 3.896 C 9.134 3.805 9.124 3.715 9.118 3.624 C 9.112 3.533 9.093 3.45 9.056 3.366 C 9.027 3.299 9.008 3.226 8.997 3.154 L 8.995 3.139 C 8.967 2.954 8.966 2.95 8.795 2.842 C 8.729 2.8 8.661 2.762 8.593 2.723 C 8.562 2.706 8.531 2.688 8.5 2.671 C 8.495 2.677 8.489 2.683 8.482 2.688 C 8.49 2.832 8.481 2.973 8.462 3.117 C 8.441 3.268 8.415 3.418 8.389 3.569 C 8.366 3.696 8.344 3.824 8.325 3.952 C 8.314 4.027 8.304 4.102 8.294 4.177 C 8.282 4.274 8.27 4.371 8.254 4.467 C 8.236 4.579 8.21 4.69 8.182 4.801 C 8.169 4.853 8.147 4.904 8.121 4.952 C 8.038 5.105 7.932 5.243 7.817 5.374 L 7.815 5.377 C 7.793 5.401 7.77 5.427 7.721 5.416 C 7.721 5.41 7.722 5.405 7.723 5.399 C 7.724 5.387 7.725 5.375 7.731 5.365 L 7.761 5.305 C 7.799 5.233 7.836 5.16 7.879 5.091 C 7.946 4.984 7.99 4.87 8.008 4.746 C 8.01 4.731 8.011 4.715 8.011 4.696 C 8.011 4.685 8.012 4.674 8.012 4.661 C 7.883 4.716 7.775 4.783 7.671 4.857 C 7.525 4.961 7.399 5.085 7.281 5.221 C 7.165 5.354 7.076 5.501 6.988 5.65 C 6.964 5.691 6.937 5.731 6.911 5.77 C 6.899 5.787 6.888 5.805 6.876 5.822 C 6.846 5.821 6.838 5.802 6.84 5.782 C 6.842 5.767 6.844 5.751 6.845 5.736 C 6.85 5.687 6.854 5.639 6.868 5.593 C 6.929 5.387 7.053 5.221 7.226 5.094 C 7.378 4.981 7.521 4.86 7.659 4.73 C 7.741 4.652 7.828 4.576 7.918 4.506 C 7.992 4.448 8.041 4.377 8.065 4.289 C 8.114 4.108 8.162 3.928 8.209 3.747 L 8.218 3.715 C 8.294 3.422 8.306 3.128 8.246 2.831 C 8.226 2.734 8.209 2.637 8.193 2.539 C 8.185 2.486 8.158 2.45 8.11 2.424 C 8.012 2.372 7.915 2.317 7.818 2.263 L 7.758 2.229 L 7.549 2.112 C 7.459 2.062 7.368 2.011 7.277 1.96 L 7.356 2.044 L 7.548 2.159 L 7.879 2.921 L 7.918 3.786 C 7.409 4.069 6.378 4.561 6.322 4.271 C 6.265 3.98 6.175 2.874 6.138 2.358 L 6.479 1.521 L 6.815 1.721 L 6.813 1.685 C 6.805 1.679 6.796 1.673 6.788 1.667 C 6.77 1.652 6.751 1.638 6.731 1.626 C 6.407 1.431 6.069 1.263 5.722 1.112 C 5.653 1.081 5.584 1.051 5.516 1.02 C 5.453 0.992 5.39 0.964 5.327 0.936 C 5.309 0.928 5.29 0.922 5.27 0.915 C 5.26 0.912 5.25 0.908 5.24 0.905 C 5.225 0.972 5.233 1.031 5.244 1.088 C 5.276 1.249 5.258 1.409 5.241 1.568 C 5.237 1.61 5.232 1.652 5.229 1.695 C 5.227 1.709 5.221 1.723 5.215 1.737 C 5.211 1.746 5.206 1.755 5.2 1.764 L 5.193 1.775 C 5.154 1.759 5.148 1.726 5.143 1.693 C 5.142 1.687 5.141 1.681 5.139 1.676 C 5.092 1.448 5.046 1.22 4.999 0.992 C 4.997 0.983 4.996 0.974 4.995 0.966 C 4.995 0.959 4.994 0.953 4.993 0.947 C 4.975 0.823 4.925 0.732 4.793 0.681 C 4.645 0.624 4.5 0.558 4.356 0.491 C 4.279 0.456 4.202 0.421 4.124 0.387 C 4.045 0.352 3.962 0.329 3.872 0.303 L 3.866 0.301 C 3.855 0.352 3.869 0.391 3.882 0.429 C 3.889 0.448 3.895 0.466 3.898 0.484 C 3.903 0.518 3.912 0.55 3.92 0.583 C 3.928 0.613 3.936 0.642 3.941 0.673 C 3.952 0.73 3.95 0.788 3.932 0.86 C 3.923 0.853 3.915 0.847 3.908 0.842 C 3.895 0.832 3.886 0.826 3.881 0.816 C 3.831 0.73 3.783 0.644 3.737 0.556 C 3.696 0.478 3.655 0.399 3.614 0.319 L 3.551 0.198 L 3.132 0.133 C 3.133 0.139 3.133 0.144 3.134 0.15 C 3.135 0.16 3.136 0.168 3.141 0.174 C 3.265 0.331 3.312 0.519 3.354 0.708 C 3.36 0.732 3.365 0.756 3.369 0.78 L 3.376 0.809 C 3.41 0.896 3.443 0.982 3.446 1.104 C 3.363 1.003 3.338 0.907 3.322 0.808 C 3.313 0.788 3.304 0.769 3.295 0.749 C 3.276 0.706 3.257 0.662 3.239 0.618 C 3.208 0.538 3.16 0.471 3.09 0.421 C 2.918 0.296 2.746 0.171 2.576 0.045 C 2.542 0.02 2.508 0.005 2.467 0.004 L 2.318 0.003 C 2.244 0.002 2.17 0.001 2.096 0 C 2.076 0 2.056 0.002 2.037 0.006 C 1.896 0.034 1.867 0.078 1.906 0.194 C 1.913 0.216 1.915 0.24 1.916 0.264 C 1.917 0.275 1.917 0.286 1.918 0.297 C 1.936 0.325 1.954 0.352 1.973 0.38 C 2.012 0.439 2.051 0.499 2.084 0.561 C 2.438 1.223 2.682 1.92 2.748 2.672 C 2.77 2.919 2.776 3.166 2.715 3.41 C 2.663 3.62 2.655 3.83 2.692 4.042 C 2.696 4.067 2.698 4.092 2.697 4.116 C 2.695 4.198 2.66 4.243 2.582 4.271 C 2.533 4.289 2.496 4.273 2.474 4.225 C 2.448 4.167 2.455 4.109 2.471 4.051 C 2.475 4.035 2.48 4.02 2.485 4.005 C 2.497 3.968 2.509 3.931 2.511 3.893 C 2.516 3.795 2.518 3.694 2.507 3.596 C 2.473 3.306 2.424 3.018 2.353 2.734 C 2.255 2.342 2.085 1.979 1.883 1.631 C 1.783 1.459 1.682 1.287 1.564 1.129 C 1.442 0.967 1.311 0.813 1.18 0.658 C 1.135 0.604 1.089 0.551 1.044 0.497 C 1.038 0.489 1.025 0.485 1.013 0.482 C 1.007 0.48 1.001 0.479 0.995 0.477 C 0.997 0.484 0.997 0.492 0.998 0.5 C 0.999 0.516 1.001 0.533 1.008 0.547 C 1.041 0.613 1.076 0.679 1.116 0.742 C 1.183 0.849 1.251 0.956 1.319 1.063 C 1.418 1.219 1.518 1.376 1.615 1.534 C 1.811 1.851 1.978 2.183 2.113 2.531 C 2.216 2.799 2.287 3.077 2.34 3.36 C 2.373 3.535 2.404 3.711 2.394 3.89 L 2.393 3.925 C 2.388 4.017 2.383 4.11 2.367 4.2 L 2.364 4.217 C 2.319 4.475 2.274 4.732 2.188 4.98 C 2.153 5.083 2.115 5.186 2.072 5.286 C 2.055 5.326 2.031 5.364 2.008 5.401 C 1.997 5.418 1.987 5.435 1.977 5.452 L 1.979 5.448 L 1.96 5.479 L 1.831 5.852 C 1.835 5.891 1.836 5.928 1.802 5.957 C 1.76 6.139 1.66 6.294 1.557 6.446 C 1.453 6.598 1.336 6.74 1.203 6.867 C 1.041 7.021 0.879 7.175 0.712 7.324 C 0.594 7.431 0.459 7.515 0.318 7.59 C 0.243 7.629 0.168 7.668 0.094 7.706 L 0 7.755 C 0.211 7.873 0.404 8.017 0.597 8.162 L 0.629 8.186 C 0.721 8.255 0.812 8.325 0.921 8.367 L 1.377 8.362 C 1.375 8.349 1.374 8.337 1.372 8.326 C 1.369 8.305 1.367 8.287 1.362 8.269 C 1.33 8.136 1.32 8.006 1.376 7.876 C 1.397 7.825 1.422 7.777 1.468 7.743 C 1.477 7.736 1.489 7.731 1.502 7.726 C 1.508 7.724 1.514 7.722 1.521 7.719 C 1.554 7.784 1.558 7.846 1.547 7.912 C 1.538 7.965 1.533 8.02 1.529 8.074 C 1.526 8.135 1.537 8.192 1.579 8.247 C 1.647 8.233 1.707 8.2 1.767 8.166 C 1.797 8.15 1.827 8.133 1.858 8.119 L 1.867 8.103 C 1.926 7.995 1.984 7.888 2.09 7.814 C 2.117 7.795 2.135 7.759 2.15 7.726 L 2.155 7.716 C 2.251 7.518 2.317 7.313 2.31 7.087 C 2.303 6.886 2.36 6.695 2.434 6.51 C 2.455 6.458 2.486 6.411 2.517 6.364 C 2.527 6.349 2.537 6.333 2.547 6.318 C 2.552 6.31 2.562 6.304 2.573 6.297 C 2.579 6.294 2.585 6.29 2.592 6.286 C 2.592 6.293 2.592 6.3 2.593 6.305 C 2.593 6.314 2.594 6.319 2.592 6.324 C 2.494 6.562 2.45 6.807 2.47 7.065 C 2.486 7.266 2.462 7.462 2.355 7.639 C 2.35 7.647 2.35 7.656 2.349 7.666 C 2.349 7.671 2.348 7.677 2.347 7.682 L 2.395 7.682 L 2.411 7.67 C 2.46 7.631 2.508 7.592 2.576 7.594 L 2.606 7.564 C 2.608 7.561 2.611 7.558 2.613 7.555 C 2.615 7.552 2.618 7.548 2.62 7.545 C 2.632 7.562 2.623 7.562 2.614 7.563 C 2.611 7.563 2.608 7.563 2.606 7.564 L 2.576 7.594 C 2.544 7.641 2.504 7.678 2.444 7.686 C 2.316 7.794 2.219 7.928 2.128 8.067 C 2.107 8.235 2.199 8.358 2.306 8.493 L 2.586 8.539 C 2.594 8.521 2.602 8.504 2.61 8.488 C 2.627 8.453 2.642 8.42 2.655 8.386 C 2.72 8.216 2.823 8.073 2.955 7.949 L 2.959 7.945 C 2.969 7.936 2.978 7.928 2.988 7.919 C 3.152 7.781 3.249 7.598 3.326 7.403 C 3.337 7.372 3.349 7.341 3.36 7.311 C 3.377 7.267 3.393 7.224 3.41 7.181 C 3.421 7.154 3.438 7.131 3.459 7.108 C 3.439 7.276 3.405 7.439 3.36 7.6 C 3.343 7.664 3.304 7.715 3.26 7.763 C 3.213 7.814 3.17 7.868 3.128 7.923 C 3.081 7.983 3.054 8.051 3.048 8.128 C 3.037 8.285 2.987 8.427 2.879 8.546 C 2.872 8.553 2.867 8.562 2.863 8.571 C 2.861 8.575 2.859 8.579 2.857 8.583 C 2.87 8.617 2.898 8.609 2.918 8.601 L 2.948 8.589 C 3.012 8.564 3.076 8.539 3.136 8.507 C 3.179 8.484 3.223 8.461 3.266 8.439 C 3.394 8.373 3.522 8.306 3.641 8.222 C 3.679 8.195 3.722 8.176 3.766 8.156 C 3.786 8.147 3.806 8.139 3.825 8.129 C 3.938 8.019 4.012 7.885 4.056 7.736 C 4.136 7.47 4.163 7.202 4.097 6.929 C 4.08 6.857 4.063 6.784 4.048 6.711 C 4.032 6.642 4.033 6.638 4.056 6.555 L 4.105 6.643 C 4.147 6.718 4.191 6.795 4.232 6.873 C 4.253 6.912 4.269 6.954 4.28 6.997 C 4.333 7.216 4.309 7.43 4.233 7.639 C 4.185 7.77 4.116 7.891 4.04 8.007 C 4.04 8.033 4.04 8.059 4.01 8.071 C 4.004 8.167 3.955 8.243 3.888 8.309 L 3.86 8.353 L 3.807 8.445 L 3.773 8.503 C 3.776 8.534 3.772 8.562 3.74 8.577 C 3.709 8.655 3.701 8.733 3.702 8.813 C 3.703 8.828 3.703 8.843 3.704 8.858 C 3.705 8.875 3.706 8.893 3.707 8.911 C 3.709 8.932 3.711 8.954 3.713 8.975 C 3.715 8.997 3.717 9.019 3.719 9.041 C 3.72 9.061 3.733 9.079 3.749 9.101 C 3.757 9.112 3.765 9.123 3.773 9.137 C 3.78 9.128 3.787 9.121 3.793 9.115 C 3.803 9.104 3.811 9.096 3.815 9.086 C 3.897 8.862 4.064 8.712 4.251 8.578 C 4.317 8.53 4.382 8.482 4.447 8.433 C 4.492 8.399 4.538 8.365 4.584 8.331 C 4.594 8.324 4.607 8.319 4.62 8.315 C 4.625 8.313 4.631 8.311 4.637 8.309 L 4.635 8.307 L 4.638 8.308 L 4.652 8.291 C 4.658 8.309 4.653 8.314 4.638 8.308 L 4.637 8.309 C 4.648 8.341 4.631 8.361 4.613 8.382 L 4.612 8.383 C 4.598 8.401 4.583 8.419 4.582 8.444 C 4.589 8.444 4.595 8.445 4.602 8.445 C 4.617 8.446 4.632 8.447 4.646 8.443 C 4.713 8.426 4.78 8.407 4.846 8.386 C 4.913 8.364 4.97 8.324 5.015 8.269 C 5.068 8.203 5.121 8.138 5.176 8.074 C 5.265 7.972 5.281 7.854 5.256 7.726 C 5.245 7.668 5.235 7.609 5.224 7.55 L 5.219 7.522 L 5.217 7.513 C 5.215 7.501 5.213 7.49 5.213 7.478 C 5.207 7.245 5.215 7.011 5.265 6.785 C 5.316 6.555 5.447 6.359 5.616 6.192 C 5.62 6.188 5.627 6.187 5.634 6.185 C 5.637 6.185 5.641 6.184 5.644 6.183 C 5.66 6.226 5.643 6.262 5.626 6.297 C 5.622 6.306 5.617 6.315 5.614 6.324 C 5.578 6.411 5.54 6.498 5.502 6.584 C 5.469 6.661 5.436 6.738 5.403 6.815 C 5.388 6.853 5.376 6.892 5.363 6.931 C 5.358 6.948 5.352 6.966 5.347 6.984 C 5.316 7.075 5.319 7.166 5.339 7.261 C 5.346 7.296 5.352 7.331 5.358 7.365 C 5.374 7.457 5.39 7.548 5.427 7.636 C 5.46 7.629 5.476 7.606 5.492 7.583 C 5.501 7.569 5.51 7.556 5.522 7.546 C 5.543 7.529 5.565 7.513 5.585 7.499 L 5.609 7.482 C 5.651 7.499 5.649 7.527 5.645 7.549 L 5.644 7.552 C 5.633 7.614 5.621 7.677 5.6 7.736 C 5.586 7.779 5.567 7.82 5.549 7.861 C 5.535 7.893 5.522 7.924 5.509 7.956 C 5.465 8.071 5.384 8.157 5.286 8.227 C 5.21 8.281 5.133 8.334 5.056 8.386 C 4.981 8.437 4.907 8.488 4.833 8.54 C 4.699 8.636 4.552 8.707 4.396 8.758 C 4.326 8.781 4.27 8.817 4.23 8.876 C 4.223 8.888 4.215 8.899 4.207 8.91 C 4.181 8.948 4.154 8.986 4.137 9.028 C 4.098 9.118 4.063 9.211 4.029 9.302 C 4.015 9.338 4.002 9.373 3.988 9.408 C 4.002 9.443 4.03 9.444 4.053 9.443 C 4.085 9.442 4.117 9.44 4.15 9.438 C 4.182 9.436 4.214 9.434 4.246 9.433 C 4.273 9.433 4.3 9.435 4.327 9.437 C 4.339 9.438 4.351 9.439 4.363 9.439 L 4.377 9.424 C 4.396 9.404 4.414 9.384 4.432 9.364 L 4.482 9.307 C 4.53 9.252 4.579 9.198 4.628 9.145 L 4.631 9.141 C 4.645 9.126 4.661 9.107 4.689 9.128 C 4.678 9.205 4.654 9.278 4.617 9.348 C 4.606 9.368 4.598 9.389 4.59 9.411 C 4.586 9.42 4.583 9.429 4.579 9.438 C 4.586 9.438 4.594 9.438 4.602 9.438 C 4.622 9.438 4.641 9.438 4.659 9.433 C 4.699 9.42 4.739 9.406 4.778 9.391 C 4.808 9.38 4.838 9.369 4.868 9.359 L 4.875 9.357 C 4.893 9.35 4.914 9.342 4.929 9.372 C 4.895 9.415 4.85 9.442 4.804 9.47 C 4.791 9.477 4.778 9.485 4.766 9.493 C 4.727 9.519 4.687 9.543 4.648 9.567 C 4.541 9.633 4.435 9.699 4.338 9.78 C 4.337 9.788 4.337 9.795 4.336 9.803 C 4.334 9.82 4.333 9.837 4.327 9.852 C 4.238 10.06 4.227 10.272 4.284 10.492 C 4.319 10.485 4.335 10.459 4.351 10.435 C 4.356 10.426 4.361 10.418 4.367 10.411 C 4.469 10.282 4.588 10.17 4.725 10.077 C 4.765 10.049 4.8 10.013 4.835 9.978 C 4.993 9.813 5.151 9.648 5.308 9.482 C 5.422 9.362 5.56 9.274 5.7 9.188 C 5.713 9.18 5.73 9.177 5.747 9.174 C 5.755 9.173 5.763 9.172 5.77 9.17 L 5.776 9.158 L 5.787 9.171 L 5.774 9.175 C 5.772 9.181 5.77 9.188 5.767 9.194 C 5.763 9.21 5.758 9.225 5.748 9.237 C 5.717 9.278 5.683 9.317 5.65 9.357 L 5.612 9.401 L 5.628 9.417 L 5.636 9.425 C 5.677 9.411 5.72 9.398 5.762 9.385 C 5.861 9.353 5.961 9.321 6.059 9.286 C 6.204 9.235 6.346 9.174 6.479 9.096 C 6.486 9.092 6.492 9.088 6.498 9.084 C 6.528 9.064 6.56 9.043 6.601 9.063 C 6.6 9.067 6.6 9.071 6.6 9.074 C 6.599 9.081 6.599 9.088 6.596 9.092 C 6.463 9.256 6.315 9.397 6.114 9.478 C 5.873 9.574 5.624 9.64 5.373 9.697 C 5.317 9.71 5.271 9.728 5.234 9.773 C 5.145 9.881 5.041 9.974 4.928 10.055 C 4.874 10.095 4.838 10.144 4.816 10.207 C 4.765 10.355 4.676 10.478 4.567 10.59 C 4.518 10.642 4.473 10.698 4.429 10.754 C 4.415 10.772 4.401 10.789 4.386 10.807 C 4.358 10.842 4.36 10.878 4.38 10.918 C 4.41 10.978 4.454 11.025 4.499 11.073 C 4.519 11.094 4.539 11.116 4.558 11.138 C 4.621 11.127 4.673 11.095 4.725 11.062 C 4.765 11.037 4.805 11.012 4.849 10.997 C 4.881 10.974 4.886 10.939 4.892 10.906 C 4.893 10.896 4.895 10.885 4.897 10.876 C 4.919 10.782 4.939 10.688 4.959 10.594 C 4.972 10.533 4.985 10.472 4.998 10.412 C 5 10.405 5.005 10.4 5.013 10.39 C 5.019 10.383 5.027 10.375 5.036 10.363 L 5.036 10.415 C 5.036 10.438 5.036 10.456 5.036 10.473 L 5.034 10.568 C 5.033 10.641 5.032 10.713 5.032 10.785 C 5.032 10.795 5.036 10.805 5.044 10.819 C 5.048 10.827 5.053 10.837 5.058 10.85 C 5.124 10.746 5.179 10.659 5.235 10.572 C 5.245 10.519 5.272 10.477 5.306 10.425 C 5.319 10.404 5.333 10.382 5.348 10.357 C 5.353 10.472 5.323 10.543 5.275 10.609 C 5.236 10.766 5.183 10.916 5.071 11.039 C 5.067 11.044 5.064 11.05 5.06 11.056 L 5.056 11.064 C 5.058 11.116 5.038 11.161 5.018 11.206 C 5.012 11.22 5.006 11.233 5.001 11.248 C 4.965 11.34 4.93 11.433 4.901 11.527 C 4.866 11.641 4.893 11.74 4.978 11.826 L 4.988 11.835 C 5.055 11.902 5.121 11.969 5.219 12.006 L 5.527 11.627 C 5.537 11.614 5.547 11.602 5.556 11.589 C 5.576 11.562 5.597 11.534 5.621 11.512 C 5.749 11.396 5.855 11.263 5.961 11.129 C 6.003 11.076 6.045 11.024 6.088 10.972 C 6.145 10.903 6.208 10.838 6.271 10.774 L 6.322 10.722 C 6.332 10.712 6.344 10.704 6.363 10.693 C 6.373 10.686 6.385 10.679 6.4 10.669 C 6.395 10.684 6.392 10.696 6.39 10.706 C 6.385 10.723 6.383 10.734 6.377 10.743 L 6.314 10.832 C 6.229 10.952 6.144 11.073 6.056 11.19 C 5.981 11.29 5.92 11.394 5.884 11.516 C 5.826 11.713 5.727 11.89 5.598 12.05 C 5.581 12.07 5.566 12.091 5.55 12.114 L 5.524 12.149 C 5.568 12.183 5.615 12.198 5.661 12.213 C 5.676 12.218 5.691 12.222 5.705 12.227 C 5.845 12.279 5.989 12.317 6.138 12.337 C 6.217 12.347 6.28 12.337 6.344 12.285 C 6.433 12.212 6.535 12.159 6.642 12.119 C 6.653 12.115 6.666 12.116 6.679 12.117 C 6.685 12.117 6.69 12.118 6.695 12.118 C 6.687 12.09 6.699 12.082 6.725 12.088 C 6.719 12.025 6.761 11.99 6.802 11.955 L 6.812 11.947 C 6.883 11.859 6.932 11.759 6.964 11.651 C 6.97 11.629 6.979 11.607 6.988 11.585 C 6.992 11.576 6.996 11.566 7 11.556 C 6.996 11.522 7.006 11.495 7.038 11.478 C 7.061 11.51 7.052 11.534 7.028 11.554 C 7.032 11.577 7.028 11.6 7.025 11.624 C 7.019 11.659 7.014 11.694 7.03 11.733 C 7.066 11.715 7.097 11.7 7.127 11.685 L 7.206 11.647 C 7.277 11.612 7.349 11.577 7.421 11.543 C 7.433 11.538 7.447 11.535 7.469 11.532 C 7.483 11.529 7.5 11.527 7.521 11.522 L 7.479 11.56 C 7.427 11.606 7.389 11.639 7.351 11.673 C 7.268 11.745 7.185 11.817 7.102 11.889 L 7.027 11.955 C 7.051 12.029 7.026 12.095 7.001 12.161 C 6.996 12.173 6.991 12.185 6.987 12.198 C 6.967 12.256 6.939 12.313 6.911 12.368 L 6.908 12.373 C 6.895 12.399 6.877 12.424 6.858 12.446 C 6.843 12.464 6.827 12.48 6.81 12.496 C 6.802 12.504 6.794 12.512 6.785 12.521 C 6.67 12.639 6.663 12.677 6.732 12.822 C 6.798 12.961 6.884 13.086 7.002 13.196 C 7.038 13.162 7.052 13.122 7.065 13.084 C 7.069 13.073 7.073 13.061 7.078 13.05 C 7.167 12.833 7.277 12.628 7.436 12.454 C 7.51 12.373 7.578 12.29 7.635 12.197 C 7.677 12.129 7.712 12.059 7.747 11.989 L 7.774 11.935 C 7.837 11.809 7.908 11.687 7.978 11.565 C 8.002 11.524 8.025 11.483 8.049 11.442 C 8.053 11.435 8.06 11.43 8.071 11.422 C 8.077 11.417 8.084 11.412 8.093 11.404 C 8.093 11.414 8.094 11.423 8.095 11.431 C 8.096 11.444 8.097 11.455 8.094 11.465 C 8.044 11.679 7.952 11.875 7.83 12.058 C 7.761 12.161 7.696 12.266 7.631 12.371 C 7.618 12.392 7.61 12.416 7.602 12.439 C 7.598 12.449 7.595 12.458 7.591 12.467 C 7.57 12.523 7.548 12.578 7.527 12.634 C 7.481 12.754 7.435 12.874 7.386 12.993 C 7.379 13.01 7.372 13.028 7.364 13.045 C 7.322 13.146 7.28 13.247 7.288 13.361 C 7.289 13.38 7.283 13.4 7.276 13.418 C 7.274 13.427 7.271 13.435 7.269 13.443 C 7.539 13.723 8.005 13.69 8.263 13.518 L 8.288 13.463 C 8.308 13.418 8.328 13.373 8.35 13.329 C 8.376 13.277 8.376 13.224 8.367 13.169 C 8.363 13.143 8.358 13.117 8.354 13.09 C 8.34 13.009 8.327 12.928 8.319 12.846 C 8.316 12.817 8.312 12.789 8.308 12.76 C 8.298 12.676 8.287 12.592 8.297 12.506 C 8.311 12.371 8.344 12.243 8.399 12.119 C 8.422 11.983 8.478 11.861 8.566 11.729 C 8.572 11.791 8.553 11.836 8.535 11.878 C 8.527 11.899 8.518 11.919 8.513 11.939 C 8.503 11.982 8.488 12.023 8.472 12.065 C 8.465 12.082 8.458 12.1 8.452 12.118 L 8.445 12.189 C 8.439 12.244 8.433 12.298 8.429 12.353 L 8.428 12.356 C 8.427 12.378 8.424 12.404 8.453 12.41 L 8.771 12.193 C 8.774 12.186 8.779 12.181 8.785 12.178 L 8.835 12.121 C 8.885 12.065 8.934 12.009 8.984 11.954 C 8.99 11.948 9 11.945 9.01 11.942 C 9.014 11.941 9.019 11.939 9.023 11.938 L 9.025 11.93 C 9.026 11.924 9.027 11.918 9.03 11.911 C 9.031 11.909 9.033 11.907 9.036 11.905 L 9.04 11.903 C 9.041 11.905 9.042 11.907 9.043 11.91 C 9.046 11.915 9.049 11.921 9.048 11.925 C 9.046 11.93 9.04 11.934 9.035 11.938 C 9.033 11.939 9.03 11.941 9.028 11.942 C 8.988 12.054 8.907 12.135 8.822 12.214 C 8.819 12.22 8.814 12.225 8.808 12.227 C 8.797 12.242 8.786 12.257 8.776 12.272 C 8.753 12.307 8.731 12.341 8.7 12.366 C 8.599 12.449 8.546 12.555 8.52 12.68 C 8.509 12.732 8.51 12.777 8.535 12.823 C 8.617 12.975 8.65 13.136 8.636 13.308 C 8.639 13.314 8.643 13.319 8.646 13.325 C 8.653 13.336 8.66 13.347 8.665 13.36 C 8.711 13.502 8.818 13.584 8.941 13.647 C 8.946 13.644 8.951 13.641 8.956 13.638 C 8.963 13.633 8.969 13.63 8.969 13.627 C 8.98 13.501 9.27 13.533 9.328 13.425 L 9.33 13.422 C 9.426 13.245 9.551 13.088 9.675 12.931 L 9.68 12.925 C 9.684 12.921 9.69 12.919 9.697 12.917 C 9.7 12.917 9.702 12.916 9.705 12.915 L 9.704 12.912 C 9.707 12.909 9.709 12.905 9.712 12.902 L 9.706 12.915 L 9.705 12.915 C 9.716 12.962 9.699 13.004 9.682 13.046 L 9.677 13.056 L 9.653 13.116 C 9.624 13.188 9.596 13.26 9.563 13.33 C 9.471 13.524 9.413 13.726 9.389 13.945 C 9.503 14.032 9.629 14.097 9.774 14.125 C 9.844 14.139 9.912 14.14 9.976 14.105 L 9.996 14.051 C 10.01 14.013 10.024 13.976 10.036 13.938 C 10.1 13.744 10.19 13.563 10.305 13.395 C 10.347 13.333 10.386 13.27 10.426 13.206 C 10.443 13.177 10.461 13.148 10.479 13.119 L 10.739 12.402 C 10.767 12.412 10.761 12.426 10.755 12.439 C 10.754 12.443 10.753 12.446 10.752 12.448 C 10.747 12.468 10.74 12.488 10.734 12.507 C 10.729 12.52 10.725 12.534 10.721 12.547 L 10.671 12.715 C 10.639 12.824 10.607 12.933 10.574 13.041 C 10.568 13.06 10.56 13.078 10.552 13.096 C 10.548 13.104 10.544 13.113 10.54 13.122 L 10.537 13.137 C 10.536 13.146 10.534 13.155 10.532 13.164 L 10.392 13.73 C 10.393 13.744 10.393 13.758 10.394 13.773 C 10.395 13.808 10.396 13.843 10.399 13.878 C 10.404 13.922 10.409 13.967 10.422 14.008 C 10.449 14.094 10.504 14.153 10.597 14.172 C 10.608 14.174 10.619 14.177 10.63 14.179 C 10.671 14.19 10.713 14.2 10.755 14.179 C 10.776 14.143 10.776 14.104 10.776 14.066 C 10.776 14.055 10.776 14.043 10.777 14.032 C 10.785 13.882 10.808 13.737 10.879 13.602 C 10.927 13.512 10.933 13.413 10.934 13.313 C 10.936 13.149 10.961 12.988 10.999 12.829 L 11.002 12.815 C 11.01 12.778 11.019 12.738 11.059 12.711 C 11.1 12.775 11.105 12.843 11.11 12.914 C 11.111 12.937 11.113 12.96 11.115 12.983 C 11.169 12.937 11.182 12.879 11.195 12.825 L 11.199 12.808 C 11.248 12.601 11.291 12.393 11.088 12.043 C 11.099 11.956 11.115 11.869 11.131 11.78 C 11.139 11.74 11.146 11.699 11.153 11.658 C 11.2 11.701 11.202 11.75 11.203 11.798 L 11.204 11.848 C 11.205 11.935 11.437 12.161 11.433 12.248 C 11.427 12.382 11.416 12.515 11.403 12.648 C 11.398 12.702 11.384 12.756 11.369 12.807 L 11.368 12.81 C 11.333 12.928 11.298 13.046 11.256 13.161 L 11.249 13.179 C 11.224 13.248 11.198 13.32 11.151 13.372 C 11.078 13.454 11.073 13.538 11.095 13.633 C 11.114 13.717 11.111 13.8 11.095 13.883 C 11.08 13.956 11.067 14.029 11.056 14.103 C 11.054 14.115 11.055 14.127 11.057 14.142 C 11.058 14.149 11.059 14.157 11.059 14.166 C 11.205 14.159 11.327 14.114 11.424 14.015 C 11.466 13.971 11.503 13.922 11.541 13.873 C 11.557 13.851 11.574 13.829 11.591 13.807 L 12.418 13.791 C 12.452 13.783 12.454 13.764 12.455 13.746 C 12.456 13.74 12.457 13.734 12.458 13.729 C 12.464 13.713 12.468 13.695 12.472 13.678 L 12.477 13.657 C 12.484 13.631 12.49 13.604 12.496 13.578 C 12.511 13.518 12.525 13.458 12.543 13.398 C 12.56 13.342 12.579 13.283 12.611 13.235 C 12.677 13.138 12.712 13.031 12.748 12.923 C 12.779 12.83 12.812 12.737 12.853 12.647 C 12.866 12.712 12.851 12.775 12.835 12.838 C 12.821 12.896 12.807 12.955 12.813 13.018 C 12.82 13.013 12.827 13.009 12.833 13.006 C 12.844 13 12.852 12.996 12.857 12.989 L 12.89 12.949 C 12.929 12.901 12.968 12.853 13.002 12.801 C 13.058 12.715 13.113 12.627 13.167 12.54 C 13.202 12.484 13.236 12.428 13.271 12.373 L 13.279 12.36 C 13.302 12.323 13.326 12.285 13.376 12.257 C 13.378 12.267 13.381 12.277 13.383 12.285 C 13.388 12.303 13.393 12.318 13.39 12.332 C 13.387 12.35 13.385 12.367 13.382 12.385 C 13.372 12.456 13.361 12.527 13.339 12.594 C 13.247 12.87 13.098 13.115 12.904 13.332 C 12.882 13.356 12.857 13.378 12.83 13.402 C 12.816 13.413 12.802 13.425 12.787 13.439 C 12.783 13.509 12.771 13.579 12.758 13.65 C 12.738 13.771 12.717 13.894 12.73 14.023 C 12.938 14.116 13.14 14.084 13.346 14.052 C 13.376 14.047 13.407 14.042 13.438 14.038 C 13.438 14.025 13.439 14.012 13.439 14.001 C 13.441 13.979 13.441 13.96 13.438 13.942 C 13.414 13.833 13.424 13.725 13.437 13.617 C 13.445 13.551 13.465 13.493 13.54 13.454 C 13.55 13.49 13.56 13.526 13.57 13.561 C 13.607 13.691 13.644 13.817 13.657 13.954 C 13.667 13.951 13.678 13.949 13.688 13.946 C 13.708 13.941 13.727 13.936 13.743 13.927 C 13.953 13.815 14.133 13.674 14.246 13.457 L 14.258 13.433 C 14.301 13.349 14.345 13.263 14.429 13.208 C 14.433 13.195 14.437 13.182 14.44 13.169 C 14.448 13.139 14.455 13.11 14.467 13.083 C 14.49 13.035 14.516 12.987 14.549 12.947 C 14.59 12.898 14.648 12.904 14.687 12.955 C 14.729 13.012 14.747 13.077 14.752 13.147 C 14.755 13.185 14.757 13.223 14.76 13.261 L 14.763 13.307 L 14.794 13.336 C 14.816 13.357 14.838 13.378 14.861 13.398 C 14.906 13.437 14.952 13.473 15.021 13.477 C 15.036 13.415 15.039 13.354 15.042 13.293 C 15.044 13.25 15.046 13.208 15.052 13.166 C 15.068 13.063 15.087 12.961 15.112 12.86 C 15.137 12.759 15.167 12.66 15.202 12.562 C 15.203 12.559 15.203 12.557 15.204 12.555 C 15.204 12.544 15.205 12.533 15.205 12.521 C 15.193 12.411 15.049 12.22 15.118 12.151 C 15.172 12.25 15.201 12.341 15.204 12.433 C 15.205 12.463 15.206 12.492 15.205 12.521 C 15.206 12.534 15.206 12.545 15.204 12.555 C 15.198 12.682 15.173 12.807 15.126 12.929 C 15.075 13.062 15.261 13.337 15.216 13.474 C 15.209 13.495 15.208 13.518 15.207 13.543 C 15.206 13.554 15.206 13.566 15.205 13.578 C 15.36 13.652 15.288 13.532 15.458 13.541 C 15.461 13.531 15.465 13.52 15.468 13.511 C 15.476 13.491 15.482 13.472 15.485 13.454 C 15.501 13.347 15.532 13.244 15.562 13.14 C 15.573 13.106 15.583 13.072 15.593 13.037 C 15.615 12.96 15.635 12.883 15.655 12.806 C 15.685 12.687 15.716 12.567 15.753 12.45 C 15.805 12.285 15.871 12.124 15.965 11.976 C 16.001 11.919 16.02 11.861 16.011 11.795 L 15.998 11.711 C 15.988 11.641 15.978 11.571 15.967 11.502 C 15.929 11.274 15.961 11.059 16.089 10.862 C 16.091 10.858 16.097 10.857 16.106 10.855 C 16.112 10.854 16.118 10.852 16.125 10.85 C 16.128 10.868 16.132 10.886 16.136 10.904 C 16.144 10.943 16.153 10.981 16.153 11.02 C 16.153 11.059 16.154 11.099 16.154 11.139 C 16.157 11.292 16.16 11.445 16.116 11.596 C 16.101 11.646 16.095 11.701 16.111 11.756 L 16.2 11.744 C 16.227 11.788 16.217 11.831 16.207 11.873 C 16.2 11.904 16.193 11.934 16.199 11.965 C 16.286 11.916 16.303 11.897 16.377 11.756 C 16.404 11.703 16.432 11.65 16.46 11.594 L 16.502 11.513 L 16.508 11.54 C 16.524 11.617 16.526 11.624 16.509 11.674 C 16.475 11.776 16.438 11.877 16.401 11.977 L 16.389 12.01 C 16.382 12.028 16.372 12.047 16.359 12.061 C 16.326 12.095 16.294 12.13 16.261 12.165 C 16.176 12.258 16.09 12.351 15.995 12.432 C 15.906 12.508 15.827 12.589 15.783 12.694 C 15.677 12.94 15.602 13.197 15.575 13.465 C 15.574 13.475 15.576 13.484 15.579 13.494 C 15.58 13.498 15.581 13.502 15.582 13.506 C 15.716 13.529 15.85 13.507 16.005 13.437 C 16.023 13.397 16.039 13.356 16.055 13.314 C 16.099 13.201 16.144 13.087 16.233 12.996 C 16.239 12.99 16.249 12.989 16.26 12.987 C 16.266 12.986 16.272 12.985 16.278 12.984 C 16.288 13.046 16.27 13.102 16.252 13.16 C 16.238 13.205 16.223 13.252 16.221 13.303 C 16.277 13.277 16.316 13.238 16.352 13.202 C 16.371 13.183 16.389 13.165 16.409 13.149 L 16.444 13.103 C 16.471 13.068 16.497 13.033 16.523 12.998 C 16.558 12.949 16.594 12.903 16.651 12.877 C 16.698 12.855 16.745 12.861 16.775 12.891 C 16.799 12.916 16.789 12.94 16.779 12.963 C 16.775 12.971 16.772 12.979 16.77 12.987 C 16.769 12.991 16.768 12.996 16.767 13.001 C 16.83 13.031 16.849 13.089 16.867 13.147 L 16.875 13.171 C 16.88 13.186 16.884 13.201 16.888 13.216 C 16.898 13.249 16.907 13.281 16.922 13.311 C 16.947 13.364 16.984 13.409 17.061 13.425 C 17.057 13.407 17.053 13.391 17.05 13.375 C 17.043 13.344 17.037 13.316 17.029 13.289 C 16.978 13.126 16.989 12.967 17.051 12.81 C 17.067 12.77 17.082 12.73 17.097 12.69 C 17.117 12.637 17.137 12.585 17.158 12.532 C 17.204 12.418 17.263 12.311 17.354 12.222 C 17.409 12.307 17.419 12.331 17.405 12.415 C 17.368 12.64 17.327 12.863 17.258 13.081 C 17.232 13.165 17.21 13.25 17.188 13.335 C 17.181 13.365 17.173 13.395 17.165 13.425 C 17.162 13.437 17.161 13.451 17.16 13.464 C 17.16 13.469 17.16 13.474 17.159 13.479 C 17.286 13.557 17.363 13.564 17.504 13.506 C 17.514 13.455 17.524 13.404 17.534 13.352 C 17.556 13.236 17.578 13.119 17.605 13.003 C 17.643 12.836 17.681 12.668 17.78 12.524 C 17.812 12.528 17.811 12.546 17.81 12.563 L 17.81 12.569 C 17.811 12.758 17.787 12.944 17.759 13.13 L 17.757 13.145 C 17.749 13.192 17.742 13.241 17.75 13.307 C 17.792 13.265 17.826 13.22 17.86 13.176 C 17.914 13.104 17.965 13.036 18.041 12.993 L 18.076 12.91 L 18.144 12.746 C 18.221 12.563 18.242 12.374 18.209 12.179 C 18.178 12.082 18.168 11.982 18.159 11.878 L 18.155 11.842 C 18.218 11.907 18.245 12.005 18.253 12.181 C 18.257 12.202 18.261 12.223 18.265 12.244 C 18.273 12.292 18.281 12.339 18.296 12.384 C 18.304 12.41 18.306 12.437 18.308 12.465 C 18.312 12.511 18.316 12.559 18.347 12.605 C 18.367 12.582 18.387 12.56 18.405 12.538 C 18.444 12.492 18.481 12.449 18.52 12.409 C 18.604 12.323 18.669 12.225 18.726 12.12 C 18.775 12.028 18.826 11.938 18.879 11.848 C 18.885 11.837 18.896 11.828 18.912 11.816 C 18.921 11.809 18.932 11.8 18.944 11.789 C 18.941 11.807 18.938 11.821 18.936 11.833 C 18.933 11.855 18.931 11.87 18.926 11.884 C 18.901 11.953 18.876 12.021 18.851 12.09 C 18.814 12.193 18.776 12.296 18.74 12.4 C 18.709 12.49 18.661 12.57 18.603 12.645 C 18.558 12.701 18.513 12.757 18.468 12.813 L 18.408 12.888 C 18.41 12.9 18.412 12.911 18.415 12.923 C 18.42 12.949 18.426 12.976 18.428 13.002 C 18.432 13.047 18.434 13.092 18.435 13.137 C 18.436 13.156 18.437 13.175 18.438 13.194 C 18.472 13.201 18.481 13.181 18.49 13.161 L 18.493 13.154 C 18.54 13.056 18.588 12.958 18.635 12.86 C 18.639 12.852 18.642 12.844 18.646 12.837 C 18.655 12.817 18.664 12.798 18.675 12.78 C 18.789 12.611 18.89 12.435 18.983 12.254 C 18.988 12.244 18.997 12.235 19.008 12.225 C 19.014 12.22 19.02 12.214 19.027 12.207 C 19.03 12.215 19.033 12.222 19.036 12.228 C 19.041 12.239 19.044 12.247 19.044 12.254 C 19.037 12.339 19.014 12.419 18.984 12.499 C 18.889 12.749 18.797 13 18.704 13.251 C 18.701 13.259 18.702 13.269 18.703 13.281 C 18.703 13.287 18.704 13.294 18.704 13.302 C 18.837 13.32 18.968 13.315 19.107 13.294 C 19.109 13.282 19.111 13.271 19.113 13.26 C 19.118 13.236 19.123 13.214 19.124 13.192 C 19.134 13.022 19.173 12.859 19.22 12.696 C 19.236 12.64 19.254 12.58 19.304 12.543 C 19.318 12.532 19.335 12.528 19.356 12.522 C 19.367 12.519 19.378 12.516 19.391 12.512 C 19.424 12.775 19.364 13.013 19.3 13.252 L 19.313 13.252 C 19.405 13.251 19.412 13.251 19.479 13.201 C 19.548 13.149 19.614 13.093 19.68 13.036 L 19.697 13.021 L 19.698 13.02 C 19.774 12.956 19.849 12.892 19.944 12.857 C 19.963 12.85 19.983 12.846 20.003 12.842 C 20.012 12.841 20.021 12.839 20.03 12.837 L 20.06 12.783 C 20.084 12.741 20.108 12.699 20.13 12.657 C 20.149 12.621 20.168 12.586 20.187 12.551 C 20.212 12.503 20.236 12.456 20.262 12.409 C 20.274 12.388 20.289 12.366 20.322 12.374 C 20.335 12.458 20.314 12.538 20.293 12.62 C 20.274 12.692 20.255 12.766 20.258 12.845 C 20.271 12.839 20.283 12.834 20.294 12.83 C 20.316 12.822 20.334 12.815 20.348 12.804 C 20.379 12.778 20.409 12.749 20.438 12.721 C 20.455 12.705 20.471 12.689 20.489 12.673 L 20.519 12.645 C 20.585 12.584 20.651 12.523 20.719 12.464 C 20.735 12.45 20.758 12.432 20.789 12.459 C 20.787 12.465 20.784 12.472 20.782 12.478 C 20.776 12.493 20.77 12.508 20.761 12.521 C 20.731 12.567 20.7 12.613 20.669 12.659 C 20.623 12.727 20.576 12.796 20.531 12.866 C 20.458 12.982 20.366 13.075 20.242 13.136 L 20.231 13.177 C 20.219 13.22 20.207 13.264 20.196 13.307 C 20.193 13.316 20.194 13.327 20.195 13.337 C 20.195 13.342 20.195 13.347 20.195 13.351 C 20.289 13.403 20.38 13.411 20.57 13.382 L 20.578 13.336 C 20.588 13.271 20.599 13.205 20.61 13.14 C 20.629 13.031 20.678 12.934 20.735 12.841 C 20.761 12.799 20.79 12.759 20.857 12.749 C 20.86 12.755 20.865 12.761 20.87 12.767 C 20.882 12.781 20.894 12.797 20.897 12.814 C 20.905 12.857 20.907 12.904 20.9 12.946 C 20.88 13.053 20.855 13.159 20.8 13.254 C 20.788 13.274 20.78 13.295 20.77 13.319 C 20.765 13.331 20.76 13.344 20.754 13.358 C 20.823 13.367 20.885 13.352 20.946 13.337 C 20.985 13.327 21.024 13.318 21.063 13.315 C 21.153 13.31 21.234 13.275 21.315 13.24 C 21.329 13.233 21.344 13.227 21.358 13.221 L 21.504 13.13 C 21.511 13.123 21.52 13.118 21.526 13.11 C 21.555 13.075 21.584 13.039 21.613 13.004 C 21.659 12.947 21.705 12.891 21.751 12.835 C 21.76 12.825 21.768 12.814 21.776 12.802 C 21.798 12.769 21.821 12.736 21.865 12.722 C 21.883 12.782 21.863 12.83 21.842 12.878 L 21.84 12.884 C 21.822 12.927 21.803 12.97 21.784 13.013 L 21.758 13.074 C 21.784 13.112 21.773 13.148 21.756 13.186 C 21.74 13.222 21.724 13.259 21.708 13.298 L 21.682 13.359 C 21.749 13.378 21.811 13.384 21.871 13.39 C 21.892 13.392 21.913 13.394 21.933 13.397 C 21.979 13.361 21.983 13.313 21.986 13.265 L 21.987 13.246 C 21.992 13.189 21.996 13.132 22.001 13.076 C 22.005 13.019 22.009 12.962 22.014 12.905 C 22.016 12.876 22.021 12.844 22.035 12.821 C 22.046 12.803 22.075 12.786 22.095 12.787 C 22.115 12.789 22.147 12.81 22.15 12.827 C 22.159 12.874 22.165 12.926 22.155 12.972 C 22.137 13.052 22.114 13.131 22.091 13.21 C 22.083 13.24 22.074 13.271 22.065 13.301 L 22.041 13.388 C 22.1 13.412 22.155 13.408 22.216 13.404 L 22.226 13.403 C 22.307 13.297 22.357 13.175 22.403 13.05 C 22.418 13.008 22.434 12.967 22.456 12.928 C 22.463 12.916 22.491 12.905 22.505 12.909 C 22.521 12.914 22.543 12.937 22.541 12.95 C 22.537 12.988 22.529 13.029 22.511 13.062 C 22.474 13.13 22.434 13.197 22.394 13.263 C 22.378 13.29 22.362 13.317 22.346 13.344 C 22.338 13.357 22.331 13.37 22.322 13.386 L 22.305 13.416 L 22.527 13.472 C 22.6 13.483 22.671 13.499 22.733 13.542 Z M 12.051 9.347 C 11.921 9.483 11.788 9.616 11.655 9.748 C 11.638 9.764 11.618 9.776 11.597 9.787 C 11.588 9.793 11.578 9.798 11.569 9.804 L 11.538 9.825 L 11.536 9.83 L 11.532 9.829 L 11.518 9.838 L 11.52 9.835 C 11.521 9.832 11.524 9.829 11.524 9.829 C 11.526 9.828 11.529 9.828 11.532 9.829 L 11.534 9.828 L 11.538 9.825 L 11.549 9.785 C 11.57 9.758 11.591 9.73 11.612 9.703 C 11.662 9.636 11.712 9.568 11.767 9.505 C 11.836 9.425 11.888 9.338 11.92 9.237 C 11.941 9.172 11.967 9.107 11.996 9.044 C 12.012 9.009 12.034 8.975 12.061 8.947 C 12.075 8.931 12.105 8.919 12.126 8.921 C 12.161 8.926 12.164 8.961 12.166 8.991 C 12.174 9.125 12.145 9.248 12.051 9.347 Z M 3.013 7.252 L 3.023 7.255 L 3.011 7.259 L 3 7.264 L 2.998 7.265 L 2.995 7.269 L 2.965 7.299 L 2.963 7.299 C 2.96 7.334 2.939 7.351 2.906 7.357 L 2.906 7.359 L 2.845 7.388 L 2.843 7.389 C 2.843 7.426 2.819 7.44 2.786 7.446 L 2.786 7.448 L 2.784 7.448 C 2.771 7.471 2.751 7.478 2.727 7.476 L 2.726 7.478 L 2.722 7.48 L 2.718 7.487 C 2.712 7.498 2.706 7.51 2.699 7.52 C 2.698 7.522 2.691 7.52 2.684 7.518 C 2.681 7.517 2.678 7.516 2.676 7.515 L 2.677 7.511 C 2.677 7.508 2.678 7.504 2.68 7.503 C 2.691 7.496 2.703 7.49 2.714 7.484 L 2.722 7.48 L 2.724 7.475 L 2.727 7.476 C 2.738 7.451 2.759 7.445 2.784 7.448 L 2.785 7.446 L 2.786 7.446 C 2.786 7.408 2.811 7.395 2.843 7.389 L 2.843 7.386 L 2.904 7.357 L 2.906 7.357 C 2.908 7.321 2.933 7.307 2.963 7.299 L 2.963 7.298 C 2.973 7.287 2.983 7.277 2.993 7.267 L 2.998 7.265 L 3 7.264 C 3.004 7.26 3.008 7.255 3.013 7.252 Z M 13.306 10.225 L 13.276 10.243 C 13.272 10.261 13.269 10.275 13.266 10.287 C 13.262 10.309 13.259 10.323 13.253 10.336 C 13.238 10.371 13.223 10.406 13.207 10.441 C 13.187 10.487 13.166 10.533 13.147 10.579 C 13.098 10.699 13.078 10.825 13.077 10.955 C 13.076 11.044 13.066 11.133 13.054 11.221 C 13.039 11.324 13.002 11.422 12.949 11.512 C 12.94 11.526 12.926 11.538 12.909 11.552 C 12.901 11.559 12.891 11.567 12.882 11.576 C 12.821 11.452 12.791 11.336 12.802 11.21 C 12.805 11.181 12.808 11.15 12.818 11.123 C 12.878 10.945 12.939 10.768 13.001 10.591 C 13.007 10.573 13.019 10.555 13.032 10.541 C 13.095 10.471 13.148 10.395 13.191 10.31 C 13.198 10.296 13.213 10.286 13.235 10.272 C 13.246 10.265 13.259 10.257 13.273 10.246 C 13.272 10.243 13.27 10.239 13.269 10.235 C 13.265 10.227 13.262 10.218 13.264 10.213 C 13.268 10.201 13.277 10.192 13.285 10.182 C 13.288 10.178 13.292 10.173 13.295 10.169 C 13.31 10.089 13.348 10.019 13.386 9.95 C 13.403 9.919 13.42 9.888 13.435 9.857 C 13.42 9.99 13.386 10.116 13.306 10.225 Z M 7.349 6.358 C 7.333 6.505 7.142 6.707 6.994 6.735 C 6.988 6.736 6.981 6.735 6.974 6.733 L 6.967 6.732 L 6.967 6.733 L 6.961 6.742 L 6.965 6.731 L 6.967 6.732 C 6.97 6.728 6.972 6.725 6.974 6.721 C 6.979 6.713 6.984 6.704 6.992 6.698 C 7.094 6.621 7.152 6.515 7.188 6.394 C 7.196 6.366 7.205 6.338 7.218 6.312 C 7.232 6.282 7.277 6.272 7.309 6.287 C 7.339 6.301 7.353 6.326 7.349 6.358 Z M 14.162 8.34 C 14.118 8.334 14.107 8.314 14.129 8.28 C 14.131 8.261 14.133 8.242 14.135 8.224 C 14.14 8.179 14.145 8.134 14.152 8.09 C 14.161 8.034 14.194 8.007 14.241 8.01 C 14.285 8.013 14.32 8.048 14.326 8.098 C 14.328 8.117 14.327 8.137 14.324 8.156 C 14.298 8.307 14.272 8.457 14.245 8.607 C 14.241 8.628 14.233 8.649 14.223 8.676 C 14.218 8.69 14.213 8.706 14.206 8.724 C 14.199 8.712 14.192 8.703 14.187 8.695 C 14.178 8.682 14.172 8.674 14.171 8.665 C 14.168 8.584 14.166 8.503 14.164 8.422 L 14.162 8.34 Z M 2.509 5.519 C 2.492 5.547 2.473 5.58 2.429 5.574 L 2.413 5.588 C 2.417 5.582 2.421 5.576 2.426 5.571 C 2.426 5.564 2.426 5.558 2.427 5.552 C 2.427 5.538 2.428 5.525 2.431 5.512 C 2.454 5.428 2.478 5.344 2.501 5.26 C 2.526 5.168 2.552 5.076 2.577 4.984 C 2.589 4.94 2.599 4.895 2.609 4.85 L 2.618 4.812 C 2.62 4.801 2.622 4.791 2.624 4.781 C 2.626 4.767 2.628 4.753 2.632 4.739 C 2.646 4.686 2.683 4.654 2.723 4.658 C 2.771 4.663 2.811 4.712 2.801 4.766 C 2.796 4.79 2.791 4.815 2.786 4.84 C 2.761 4.975 2.735 5.11 2.667 5.234 C 2.65 5.264 2.633 5.295 2.617 5.325 C 2.581 5.39 2.546 5.455 2.509 5.519 Z M 3.767 3.908 C 3.792 4.035 3.797 4.165 3.764 4.291 C 3.75 4.343 3.737 4.396 3.724 4.448 C 3.685 4.607 3.646 4.765 3.58 4.916 C 3.56 4.962 3.535 5.005 3.51 5.049 C 3.498 5.07 3.487 5.09 3.475 5.111 C 3.46 5.192 3.425 5.264 3.352 5.348 C 3.366 5.254 3.4 5.185 3.433 5.119 C 3.443 5.098 3.453 5.078 3.463 5.057 L 3.467 5.011 L 3.465 5.003 C 3.463 4.997 3.461 4.991 3.461 4.984 C 3.46 4.982 3.463 4.979 3.465 4.977 L 3.469 4.973 L 3.473 4.918 C 3.495 4.626 3.517 4.333 3.593 4.049 C 3.618 3.959 3.647 3.871 3.71 3.786 C 3.75 3.823 3.758 3.866 3.766 3.906 L 3.767 3.908 Z M 7.38 9.287 C 7.412 9.225 7.447 9.165 7.487 9.109 C 7.552 9.018 7.619 8.928 7.685 8.838 C 7.713 8.801 7.741 8.763 7.769 8.725 L 7.847 8.555 L 8.009 8.198 C 8.024 8.167 8.039 8.135 8.057 8.097 L 8.089 8.03 C 8.079 8.172 7.954 8.486 7.821 8.727 C 7.811 8.749 7.801 8.771 7.791 8.793 C 7.769 8.844 7.747 8.894 7.722 8.943 C 7.676 9.031 7.635 9.121 7.616 9.219 C 7.611 9.246 7.603 9.271 7.595 9.297 C 7.586 9.323 7.578 9.35 7.573 9.377 C 7.537 9.575 7.419 9.72 7.268 9.838 C 7.198 9.893 7.123 9.942 7.047 9.989 L 7.014 10.009 C 6.991 10.024 6.968 10.038 6.945 10.052 C 6.933 10.06 6.902 10.057 6.894 10.047 C 6.884 10.036 6.883 10.007 6.892 9.995 C 6.903 9.977 6.915 9.959 6.927 9.942 C 6.967 9.881 7.008 9.819 7.059 9.768 C 7.197 9.627 7.29 9.459 7.38 9.287 Z M 9.017 7.759 L 8.995 7.748 C 8.995 7.737 8.995 7.726 8.994 7.715 C 8.994 7.691 8.994 7.668 8.995 7.645 L 9.002 7.527 C 9.011 7.379 9.019 7.23 9.032 7.082 C 9.038 7.018 9.055 6.955 9.072 6.893 L 9.076 6.879 L 9.078 6.871 C 9.12 6.716 9.162 6.562 9.165 6.398 C 9.167 6.34 9.182 6.282 9.197 6.225 C 9.203 6.2 9.21 6.176 9.215 6.151 C 9.224 6.111 9.233 6.072 9.242 6.032 C 9.261 5.951 9.279 5.87 9.294 5.789 C 9.325 5.623 9.36 5.458 9.43 5.303 C 9.448 5.264 9.473 5.225 9.502 5.193 C 9.531 5.161 9.576 5.161 9.612 5.181 C 9.648 5.199 9.66 5.231 9.658 5.267 C 9.656 5.296 9.649 5.326 9.639 5.354 C 9.526 5.656 9.448 5.968 9.381 6.283 C 9.378 6.297 9.376 6.311 9.373 6.325 C 9.367 6.36 9.36 6.395 9.348 6.428 C 9.295 6.57 9.284 6.718 9.291 6.867 C 9.296 7.008 9.27 7.142 9.224 7.275 C 9.212 7.31 9.201 7.345 9.189 7.381 C 9.155 7.487 9.121 7.593 9.064 7.69 C 9.054 7.707 9.043 7.723 9.032 7.739 L 9.017 7.759 Z M 13.608 7.271 C 13.555 7.507 13.501 7.743 13.442 7.979 C 13.427 8.041 13.403 8.102 13.38 8.163 C 13.373 8.181 13.366 8.199 13.36 8.217 C 13.356 8.227 13.348 8.236 13.337 8.249 C 13.331 8.256 13.324 8.264 13.316 8.275 C 13.308 8.149 13.333 8.049 13.366 7.953 C 13.425 7.783 13.422 7.614 13.398 7.44 C 13.381 7.313 13.366 7.185 13.378 7.056 C 13.384 6.996 13.381 6.936 13.377 6.875 C 13.376 6.851 13.375 6.827 13.374 6.804 C 13.373 6.765 13.386 6.736 13.42 6.718 C 13.455 6.7 13.5 6.707 13.527 6.744 C 13.555 6.784 13.581 6.828 13.594 6.874 C 13.633 7.004 13.637 7.138 13.608 7.271 Z M 4.684 1.365 C 4.751 1.469 4.783 1.588 4.79 1.715 C 4.797 1.821 4.809 1.926 4.82 2.031 C 4.827 2.093 4.834 2.154 4.84 2.216 L 4.842 2.231 C 4.847 2.288 4.853 2.347 4.816 2.417 C 4.81 2.406 4.804 2.397 4.799 2.39 C 4.791 2.377 4.786 2.368 4.783 2.358 C 4.764 2.282 4.741 2.206 4.717 2.131 C 4.681 2.013 4.645 1.896 4.622 1.773 C 4.604 1.676 4.56 1.582 4.517 1.49 L 4.501 1.456 L 4.497 1.447 C 4.433 1.311 4.37 1.176 4.343 1.027 C 4.34 1.009 4.341 0.991 4.341 0.968 C 4.342 0.956 4.342 0.943 4.342 0.927 C 4.353 0.935 4.362 0.942 4.37 0.947 C 4.387 0.959 4.4 0.968 4.408 0.979 C 4.43 1.008 4.451 1.037 4.473 1.066 C 4.546 1.164 4.619 1.262 4.684 1.365 Z M 4.141 2.921 C 4.2 3.11 4.153 3.28 4.048 3.44 C 4.047 3.441 4.044 3.442 4.037 3.444 C 4.032 3.445 4.025 3.447 4.014 3.45 C 3.973 3.29 3.96 3.133 4.005 2.979 C 4.036 2.875 4.042 2.775 4.015 2.672 L 4.009 2.649 C 3.99 2.576 3.97 2.502 3.95 2.429 C 3.932 2.367 3.915 2.306 3.897 2.245 C 3.869 2.15 3.842 2.054 3.816 1.958 C 3.794 1.879 3.805 1.827 3.836 1.826 C 3.89 1.823 3.916 1.865 3.936 1.902 C 4.025 2.064 4.085 2.236 4.096 2.422 C 4.099 2.463 4.096 2.504 4.093 2.545 L 4.093 2.555 C 4.085 2.68 4.103 2.802 4.141 2.921 Z M 3.354 2.455 C 3.353 2.533 3.34 2.611 3.265 2.679 C 3.201 2.61 3.185 2.537 3.172 2.465 C 3.149 2.343 3.128 2.22 3.108 2.097 L 3.086 1.969 L 3.076 1.911 C 3.065 1.848 3.054 1.785 3.047 1.721 C 3.043 1.683 3.047 1.642 3.059 1.606 C 3.074 1.563 3.133 1.552 3.172 1.578 C 3.221 1.61 3.248 1.659 3.262 1.711 L 3.275 1.762 C 3.303 1.864 3.33 1.967 3.343 2.071 C 3.357 2.184 3.355 2.3 3.354 2.415 L 3.354 2.455 Z M 12.172 7.653 C 12.16 7.689 12.141 7.724 12.094 7.742 C 12.092 7.662 12.108 7.589 12.124 7.518 C 12.129 7.494 12.134 7.47 12.139 7.445 C 12.144 7.42 12.151 7.394 12.158 7.369 C 12.161 7.356 12.165 7.343 12.168 7.33 C 12.198 7.21 12.209 7.09 12.206 6.965 C 12.203 6.785 12.211 6.606 12.219 6.426 C 12.222 6.364 12.225 6.302 12.227 6.239 C 12.228 6.215 12.237 6.191 12.246 6.168 C 12.251 6.155 12.262 6.144 12.272 6.134 C 12.301 6.104 12.358 6.117 12.368 6.157 C 12.374 6.181 12.376 6.206 12.376 6.23 C 12.375 6.287 12.375 6.344 12.374 6.4 C 12.374 6.566 12.373 6.732 12.365 6.897 C 12.36 7.01 12.342 7.124 12.313 7.233 C 12.284 7.343 12.245 7.451 12.206 7.559 C 12.194 7.59 12.183 7.622 12.172 7.653 Z M 7.956 10.042 C 7.973 10.007 7.995 9.973 8.019 9.942 C 8.12 9.815 8.221 9.687 8.322 9.56 L 8.509 9.324 C 8.536 9.29 8.562 9.255 8.589 9.221 C 8.614 9.189 8.638 9.156 8.663 9.125 C 8.673 9.113 8.683 9.103 8.696 9.09 C 8.702 9.083 8.71 9.076 8.718 9.067 C 8.734 9.155 8.71 9.222 8.682 9.284 C 8.551 9.57 8.385 9.833 8.161 10.056 C 8.13 10.087 8.092 10.113 8.055 10.137 C 8.027 10.155 7.997 10.145 7.973 10.124 C 7.949 10.101 7.943 10.07 7.956 10.042 Z M 10.175 7.793 C 10.159 7.847 10.14 7.904 10.075 7.959 C 10.095 7.769 10.117 7.605 10.145 7.441 C 10.165 7.326 10.182 7.211 10.199 7.096 C 10.208 7.04 10.216 6.984 10.225 6.929 C 10.231 6.885 10.239 6.841 10.246 6.797 L 10.247 6.791 C 10.249 6.778 10.251 6.765 10.254 6.753 C 10.277 6.681 10.332 6.635 10.378 6.649 C 10.428 6.664 10.46 6.722 10.455 6.795 C 10.454 6.819 10.449 6.844 10.442 6.867 L 10.413 6.969 C 10.334 7.244 10.256 7.518 10.175 7.793 Z M 13.795 10.497 C 13.766 10.695 13.767 10.891 13.769 11.09 C 13.772 11.231 13.771 11.372 13.771 11.513 C 13.77 11.575 13.77 11.637 13.77 11.698 C 13.761 11.66 13.752 11.622 13.742 11.584 C 13.686 11.355 13.631 11.128 13.656 10.892 C 13.673 10.728 13.697 10.565 13.722 10.401 L 13.73 10.348 C 13.734 10.323 13.738 10.299 13.742 10.274 C 13.759 10.167 13.777 10.06 13.768 9.95 C 13.767 9.931 13.764 9.912 13.762 9.893 C 13.758 9.868 13.755 9.842 13.754 9.817 C 13.753 9.783 13.757 9.748 13.767 9.715 C 13.771 9.701 13.795 9.684 13.81 9.684 C 13.825 9.684 13.851 9.701 13.853 9.715 C 13.861 9.753 13.865 9.793 13.861 9.832 C 13.856 9.886 13.852 9.94 13.848 9.993 C 13.834 10.162 13.82 10.33 13.795 10.497 Z M 9.78 10.389 L 9.748 10.381 C 9.747 10.374 9.745 10.367 9.743 10.36 C 9.74 10.344 9.736 10.328 9.739 10.315 C 9.743 10.3 9.747 10.285 9.75 10.27 C 9.766 10.208 9.781 10.146 9.809 10.089 C 9.852 10.003 9.899 9.918 9.946 9.834 C 9.978 9.776 10.011 9.717 10.042 9.658 C 10.094 9.559 10.144 9.459 10.194 9.359 C 10.224 9.3 10.254 9.24 10.284 9.181 C 10.304 9.143 10.327 9.106 10.367 9.075 C 10.367 9.083 10.367 9.092 10.367 9.1 C 10.367 9.119 10.368 9.137 10.363 9.153 C 10.343 9.217 10.322 9.28 10.3 9.344 L 10.274 9.421 C 10.262 9.456 10.251 9.491 10.24 9.526 C 10.213 9.609 10.186 9.692 10.156 9.773 C 10.129 9.847 10.097 9.92 10.06 9.99 C 9.984 10.135 9.884 10.263 9.78 10.389 Z M 8.082 6.726 C 8.161 6.438 8.29 6.172 8.445 5.918 C 8.452 5.907 8.464 5.898 8.476 5.889 C 8.48 5.886 8.484 5.883 8.488 5.88 C 8.49 5.879 8.494 5.881 8.498 5.882 L 8.502 5.884 C 8.504 5.886 8.505 5.888 8.507 5.891 C 8.51 5.896 8.514 5.901 8.514 5.907 C 8.495 6.195 8.445 6.475 8.274 6.719 C 8.263 6.735 8.252 6.752 8.24 6.769 C 8.219 6.801 8.197 6.834 8.172 6.864 C 8.16 6.88 8.125 6.891 8.108 6.885 C 8.091 6.878 8.074 6.849 8.072 6.828 C 8.069 6.795 8.073 6.759 8.082 6.726 Z M 14.937 8.232 C 14.932 8.068 14.93 7.904 14.936 7.741 C 14.939 7.665 14.952 7.588 14.965 7.512 L 14.974 7.462 C 14.977 7.447 14.985 7.434 14.995 7.416 C 15.001 7.407 15.007 7.397 15.013 7.385 C 15.019 7.395 15.025 7.405 15.031 7.413 C 15.041 7.43 15.05 7.443 15.052 7.456 L 15.053 7.466 C 15.065 7.566 15.077 7.666 15.082 7.767 C 15.088 7.93 15.091 8.094 15.09 8.257 C 15.09 8.314 15.084 8.371 15.079 8.428 C 15.076 8.455 15.074 8.482 15.072 8.509 L 15.066 8.583 C 15.062 8.632 15.059 8.681 15.055 8.731 C 15.047 8.859 15.032 8.986 14.982 9.129 C 14.983 9.081 14.985 9.035 14.986 8.991 C 14.99 8.885 14.993 8.786 14.992 8.688 C 14.991 8.631 14.983 8.575 14.975 8.518 C 14.971 8.496 14.968 8.474 14.965 8.452 C 14.962 8.427 14.958 8.402 14.954 8.377 C 14.946 8.328 14.938 8.28 14.937 8.232 Z M 5.527 3.476 C 5.501 3.752 5.396 4.004 5.283 4.252 C 5.281 4.256 5.279 4.26 5.277 4.264 C 5.267 4.291 5.254 4.321 5.211 4.326 C 5.209 4.247 5.224 4.171 5.239 4.096 C 5.243 4.076 5.246 4.056 5.25 4.035 C 5.272 3.912 5.296 3.79 5.319 3.667 C 5.337 3.576 5.354 3.484 5.371 3.393 C 5.378 3.358 5.383 3.323 5.388 3.288 C 5.394 3.245 5.4 3.201 5.409 3.158 C 5.42 3.105 5.452 3.077 5.484 3.078 C 5.52 3.078 5.552 3.119 5.55 3.18 C 5.547 3.265 5.539 3.351 5.531 3.436 L 5.527 3.476 Z M 12.697 8.434 C 12.697 8.459 12.691 8.483 12.66 8.491 C 12.649 8.427 12.637 8.364 12.626 8.301 C 12.603 8.17 12.579 8.039 12.557 7.908 C 12.537 7.79 12.535 7.672 12.571 7.555 C 12.578 7.531 12.585 7.507 12.591 7.483 C 12.601 7.445 12.611 7.406 12.625 7.37 C 12.675 7.239 12.715 7.107 12.706 6.965 C 12.705 6.936 12.707 6.904 12.738 6.888 C 12.76 6.877 12.789 6.906 12.802 6.956 C 12.826 7.054 12.826 7.152 12.803 7.25 C 12.791 7.303 12.775 7.356 12.755 7.406 C 12.668 7.624 12.658 7.848 12.683 8.078 C 12.693 8.164 12.694 8.25 12.695 8.336 C 12.695 8.369 12.696 8.401 12.697 8.434 Z M 15.452 10.421 C 15.421 10.55 15.387 10.68 15.352 10.808 C 15.347 10.827 15.338 10.845 15.329 10.863 C 15.325 10.872 15.321 10.88 15.317 10.889 C 15.273 10.864 15.276 10.828 15.279 10.794 L 15.279 10.781 C 15.285 10.661 15.292 10.541 15.299 10.422 C 15.302 10.359 15.306 10.296 15.31 10.232 C 15.314 10.149 15.318 10.065 15.322 9.981 C 15.325 9.91 15.339 9.843 15.385 9.787 C 15.427 9.735 15.486 9.74 15.516 9.8 C 15.553 9.873 15.559 9.951 15.541 10.031 L 15.532 10.073 C 15.506 10.189 15.48 10.305 15.452 10.421 Z M 6.895 8.14 C 6.846 8.223 6.787 8.295 6.706 8.347 C 6.696 8.353 6.684 8.356 6.671 8.36 C 6.664 8.361 6.657 8.363 6.65 8.366 C 6.649 8.358 6.648 8.35 6.647 8.344 C 6.645 8.332 6.643 8.322 6.646 8.315 L 6.652 8.297 C 6.667 8.256 6.681 8.215 6.702 8.177 C 6.777 8.044 6.805 7.9 6.81 7.749 C 6.814 7.614 6.848 7.485 6.924 7.37 C 6.932 7.357 6.944 7.348 6.959 7.336 C 6.967 7.33 6.975 7.323 6.984 7.315 C 6.99 7.329 6.995 7.343 7.001 7.355 C 7.011 7.379 7.02 7.4 7.022 7.421 C 7.047 7.672 7.027 7.916 6.895 8.14 Z M 14.516 11.092 C 14.532 11.063 14.554 11.033 14.599 11.044 C 14.599 11.072 14.6 11.099 14.601 11.127 C 14.602 11.187 14.604 11.248 14.598 11.307 C 14.578 11.504 14.526 11.695 14.474 11.885 L 14.462 11.929 C 14.454 11.956 14.437 11.982 14.418 12.004 C 14.394 12.031 14.353 12.033 14.323 12.016 C 14.295 12 14.281 11.975 14.28 11.943 L 14.28 11.941 C 14.28 11.937 14.279 11.932 14.28 11.928 C 14.304 11.843 14.318 11.756 14.333 11.668 C 14.355 11.537 14.376 11.405 14.429 11.28 C 14.456 11.217 14.484 11.154 14.516 11.092 Z M 16.059 8.816 C 16.064 8.96 16.068 9.103 16.066 9.246 C 16.065 9.323 16.054 9.4 16.042 9.477 L 16.042 9.482 C 16.04 9.495 16.031 9.508 16.019 9.525 C 16.012 9.535 16.005 9.546 15.997 9.559 L 15.95 9.342 L 15.95 9.341 C 15.912 9.16 15.875 8.988 15.839 8.815 C 15.833 8.787 15.832 8.756 15.833 8.727 C 15.834 8.654 15.864 8.607 15.911 8.598 C 15.963 8.589 16.017 8.629 16.039 8.7 C 16.05 8.737 16.058 8.777 16.059 8.816 Z M 5.915 2.731 L 5.896 2.728 C 5.892 2.7 5.889 2.672 5.886 2.644 C 5.879 2.575 5.871 2.505 5.861 2.435 C 5.847 2.343 5.83 2.25 5.81 2.159 C 5.79 2.065 5.769 1.971 5.748 1.877 C 5.728 1.788 5.708 1.698 5.688 1.609 C 5.682 1.581 5.682 1.549 5.687 1.521 C 5.697 1.462 5.771 1.436 5.814 1.477 C 5.838 1.5 5.859 1.532 5.866 1.564 L 5.869 1.575 C 5.887 1.653 5.905 1.733 5.907 1.812 C 5.914 2.03 5.917 2.248 5.92 2.466 L 5.922 2.658 C 5.922 2.675 5.92 2.692 5.918 2.709 C 5.917 2.716 5.915 2.724 5.915 2.731 Z M 17.505 10.25 C 17.498 10.529 17.447 10.8 17.331 11.056 C 17.327 11.067 17.318 11.075 17.31 11.084 L 17.304 11.09 C 17.303 11.092 17.3 11.093 17.293 11.095 C 17.288 11.096 17.282 11.098 17.271 11.101 C 17.261 10.998 17.264 10.905 17.273 10.813 C 17.291 10.635 17.309 10.458 17.331 10.282 C 17.337 10.233 17.352 10.185 17.368 10.139 C 17.373 10.125 17.387 10.113 17.4 10.102 L 17.407 10.096 C 17.424 10.082 17.464 10.088 17.473 10.107 C 17.484 10.129 17.494 10.152 17.499 10.176 C 17.504 10.2 17.505 10.225 17.505 10.25 Z M 1.456 6.975 C 1.553 6.892 1.659 6.82 1.803 6.748 C 1.767 6.854 1.722 6.913 1.671 6.966 C 1.605 7.033 1.539 7.1 1.467 7.161 C 1.335 7.272 1.199 7.38 1.063 7.487 C 1.033 7.511 0.996 7.529 0.959 7.54 C 0.94 7.545 0.909 7.533 0.894 7.518 C 0.875 7.498 0.889 7.472 0.908 7.453 C 0.913 7.448 0.918 7.443 0.924 7.438 L 0.93 7.433 C 0.982 7.387 1.035 7.341 1.088 7.295 C 1.21 7.188 1.332 7.08 1.456 6.975 Z M 17.195 11.621 C 17.125 11.822 17.048 12.02 16.939 12.204 C 16.935 12.211 16.928 12.216 16.918 12.223 C 16.913 12.227 16.907 12.231 16.9 12.237 C 16.897 12.228 16.894 12.22 16.891 12.213 C 16.885 12.2 16.88 12.189 16.88 12.178 C 16.88 12.158 16.88 12.138 16.879 12.119 C 16.878 12.059 16.876 11.999 16.886 11.941 C 16.908 11.815 16.939 11.69 16.974 11.566 C 16.986 11.52 17.016 11.477 17.045 11.439 C 17.071 11.405 17.113 11.397 17.154 11.411 C 17.197 11.426 17.215 11.462 17.213 11.505 C 17.211 11.544 17.208 11.585 17.195 11.621 Z M 18.178 11.023 C 18.167 11.044 18.151 11.064 18.136 11.082 C 18.133 11.086 18.126 11.087 18.118 11.089 C 18.113 11.089 18.107 11.09 18.1 11.092 C 18.068 11.017 18.047 10.937 18.044 10.854 C 18.042 10.778 18.042 10.701 18.043 10.625 L 18.044 10.544 C 18.044 10.492 18.06 10.447 18.098 10.411 C 18.158 10.353 18.247 10.366 18.283 10.441 C 18.297 10.471 18.307 10.508 18.304 10.54 C 18.286 10.707 18.254 10.871 18.178 11.023 Z M 4.457 5.719 L 4.427 5.704 C 4.43 5.689 4.433 5.674 4.435 5.659 C 4.441 5.626 4.447 5.593 4.458 5.561 L 4.471 5.521 C 4.521 5.375 4.571 5.229 4.629 5.086 C 4.651 5.032 4.686 4.983 4.722 4.935 C 4.731 4.923 4.739 4.911 4.748 4.899 C 4.756 4.887 4.77 4.879 4.787 4.869 C 4.796 4.864 4.806 4.858 4.816 4.851 C 4.82 4.861 4.825 4.87 4.829 4.878 C 4.837 4.895 4.844 4.909 4.843 4.922 L 4.839 4.955 C 4.832 5.013 4.825 5.072 4.804 5.125 C 4.732 5.304 4.65 5.48 4.536 5.638 C 4.521 5.659 4.501 5.677 4.482 5.695 C 4.473 5.703 4.465 5.711 4.457 5.719 Z M 9.889 8.473 C 9.836 8.633 9.758 8.774 9.582 8.829 C 9.576 8.83 9.57 8.829 9.561 8.828 C 9.557 8.827 9.552 8.827 9.546 8.826 C 9.545 8.821 9.544 8.815 9.543 8.809 C 9.541 8.797 9.539 8.784 9.541 8.772 C 9.556 8.664 9.573 8.556 9.592 8.449 C 9.597 8.415 9.606 8.38 9.621 8.35 C 9.652 8.292 9.708 8.269 9.772 8.28 C 9.832 8.29 9.88 8.337 9.89 8.399 C 9.893 8.423 9.896 8.45 9.889 8.473 Z M 14.526 10.123 C 14.458 10.226 14.387 10.327 14.315 10.427 C 14.311 10.433 14.308 10.438 14.304 10.443 C 14.281 10.478 14.256 10.515 14.196 10.514 C 14.197 10.504 14.199 10.494 14.2 10.485 C 14.203 10.465 14.205 10.447 14.212 10.429 C 14.235 10.367 14.257 10.304 14.279 10.242 C 14.331 10.095 14.382 9.949 14.451 9.809 C 14.464 9.783 14.478 9.756 14.496 9.734 C 14.527 9.697 14.589 9.711 14.604 9.757 C 14.61 9.775 14.614 9.795 14.614 9.815 C 14.615 9.926 14.587 10.03 14.526 10.123 Z M 11.301 7.89 C 11.256 8.087 11.194 8.279 11.12 8.467 L 11.117 8.476 C 11.105 8.508 11.092 8.543 11.037 8.563 C 11.043 8.342 11.065 8.137 11.102 7.933 C 11.105 7.917 11.108 7.899 11.11 7.882 C 11.115 7.851 11.119 7.819 11.128 7.788 C 11.142 7.737 11.181 7.71 11.225 7.715 C 11.272 7.72 11.312 7.764 11.313 7.818 C 11.313 7.84 11.308 7.863 11.303 7.885 L 11.301 7.89 Z M 8.783 11.241 C 8.785 11.212 8.789 11.18 8.803 11.155 L 8.832 11.104 C 8.909 10.965 8.987 10.826 9.095 10.708 C 9.105 10.698 9.117 10.689 9.136 10.674 C 9.148 10.666 9.162 10.655 9.18 10.64 C 9.165 10.75 9.144 10.821 9.122 10.891 C 9.089 11 9.056 11.109 9.02 11.217 C 9.009 11.249 8.992 11.281 8.972 11.308 C 8.944 11.347 8.906 11.368 8.856 11.356 C 8.808 11.344 8.778 11.299 8.783 11.241 Z M 11.109 10.339 C 11.101 10.363 11.091 10.386 11.079 10.407 L 11.048 10.455 C 10.957 10.602 10.865 10.749 10.772 10.894 C 10.758 10.916 10.738 10.934 10.718 10.952 C 10.709 10.96 10.7 10.968 10.692 10.977 L 10.679 10.969 L 10.666 10.961 C 10.674 10.936 10.681 10.911 10.688 10.886 C 10.706 10.827 10.723 10.768 10.744 10.71 C 10.775 10.622 10.809 10.535 10.847 10.449 C 10.869 10.401 10.898 10.353 10.931 10.311 C 10.95 10.285 10.982 10.263 11.013 10.252 C 11.037 10.243 11.073 10.247 11.096 10.26 C 11.126 10.276 11.118 10.311 11.109 10.339 Z M 9.728 11.944 C 9.739 11.892 9.754 11.839 9.774 11.789 C 9.853 11.598 9.968 11.427 10.083 11.257 L 10.086 11.252 C 10.089 11.248 10.095 11.246 10.105 11.242 C 10.112 11.239 10.121 11.236 10.133 11.231 C 10.13 11.247 10.128 11.262 10.127 11.276 C 10.124 11.303 10.121 11.325 10.114 11.346 L 10.111 11.355 C 10.045 11.537 9.979 11.72 9.907 11.9 C 9.89 11.941 9.86 11.978 9.83 12.014 L 9.815 12.032 C 9.797 12.055 9.752 12.044 9.741 12.015 C 9.733 11.993 9.724 11.966 9.728 11.944 Z M 20.086 12.011 C 20.074 12.033 20.061 12.055 20.029 12.038 C 19.994 11.874 19.973 11.708 20.016 11.542 C 20.024 11.509 20.036 11.476 20.054 11.448 C 20.079 11.409 20.13 11.396 20.173 11.409 C 20.215 11.421 20.237 11.454 20.247 11.494 C 20.251 11.512 20.252 11.534 20.247 11.552 C 20.239 11.578 20.232 11.605 20.225 11.631 C 20.189 11.762 20.154 11.892 20.086 12.011 Z M 18.778 10.781 C 18.835 10.789 18.883 10.846 18.871 10.911 L 18.869 10.916 C 18.839 11.073 18.807 11.231 18.734 11.376 C 18.727 11.39 18.716 11.402 18.705 11.414 C 18.7 11.42 18.694 11.425 18.69 11.431 C 18.685 11.427 18.68 11.424 18.676 11.421 C 18.669 11.416 18.664 11.412 18.663 11.408 C 18.619 11.234 18.614 11.059 18.653 10.883 C 18.654 10.88 18.655 10.877 18.656 10.873 L 18.658 10.869 C 18.682 10.805 18.724 10.774 18.778 10.781 Z M 7.245 10.739 C 7.336 10.664 7.439 10.605 7.559 10.546 C 7.557 10.56 7.557 10.573 7.556 10.584 C 7.556 10.607 7.555 10.626 7.548 10.642 C 7.506 10.737 7.461 10.831 7.414 10.923 C 7.401 10.949 7.38 10.973 7.358 10.992 C 7.316 11.029 7.25 11.031 7.206 11.001 C 7.154 10.965 7.134 10.901 7.164 10.844 C 7.185 10.805 7.212 10.767 7.245 10.739 Z M 13.918 13.123 C 13.902 13.156 13.882 13.194 13.827 13.201 C 13.828 13.191 13.829 13.181 13.83 13.172 C 13.831 13.152 13.833 13.133 13.839 13.115 C 13.894 12.961 13.921 12.801 13.946 12.64 C 13.954 12.592 13.968 12.544 13.986 12.498 C 13.994 12.477 14.014 12.457 14.032 12.443 C 14.059 12.423 14.109 12.442 14.119 12.473 C 14.125 12.492 14.13 12.512 14.128 12.531 C 14.126 12.549 14.125 12.567 14.123 12.585 C 14.12 12.636 14.116 12.688 14.098 12.734 C 14.049 12.859 13.989 12.98 13.93 13.1 L 13.918 13.123 Z M 12.738 9.556 C 12.807 9.392 12.888 9.234 13.005 9.097 C 13.011 9.089 13.022 9.084 13.032 9.079 L 13.041 9.074 C 13.043 9.073 13.045 9.074 13.05 9.075 C 13.053 9.076 13.057 9.076 13.061 9.077 C 13.06 9.088 13.058 9.098 13.057 9.109 C 13.054 9.132 13.051 9.154 13.044 9.176 C 13.001 9.312 12.957 9.449 12.909 9.583 C 12.895 9.624 12.872 9.664 12.843 9.696 C 12.807 9.736 12.735 9.711 12.73 9.658 C 12.726 9.624 12.726 9.586 12.738 9.556 Z M 4.769 6.659 C 4.788 6.548 4.824 6.44 4.887 6.344 C 4.891 6.338 4.9 6.335 4.912 6.33 C 4.919 6.328 4.926 6.325 4.935 6.322 C 4.938 6.332 4.943 6.343 4.947 6.353 C 4.956 6.375 4.965 6.396 4.968 6.417 C 4.975 6.465 4.979 6.514 4.982 6.563 C 4.984 6.583 4.985 6.602 4.987 6.622 C 4.993 6.693 4.975 6.759 4.943 6.82 C 4.92 6.863 4.863 6.87 4.831 6.834 C 4.786 6.785 4.757 6.723 4.769 6.659 Z M 12.106 10.748 L 12.132 10.765 C 12.112 10.828 12.095 10.892 12.078 10.956 C 12.049 11.061 12.02 11.167 11.98 11.27 C 11.971 11.292 11.958 11.317 11.939 11.33 C 11.921 11.342 11.894 11.347 11.871 11.345 C 11.843 11.344 11.829 11.319 11.827 11.294 C 11.825 11.265 11.825 11.234 11.833 11.206 C 11.876 11.069 11.935 10.939 12.022 10.824 C 12.037 10.803 12.058 10.787 12.078 10.771 C 12.088 10.763 12.097 10.756 12.106 10.748 Z M 21.423 12.243 C 21.423 12.248 21.424 12.253 21.424 12.258 C 21.425 12.398 21.364 12.514 21.29 12.656 L 21.277 12.681 C 21.212 12.53 21.192 12.416 21.209 12.298 C 21.215 12.261 21.232 12.223 21.254 12.192 C 21.274 12.164 21.309 12.151 21.346 12.162 C 21.386 12.175 21.415 12.199 21.423 12.243 Z M 3.596 6.143 C 3.552 6.221 3.505 6.297 3.455 6.371 C 3.444 6.388 3.426 6.401 3.403 6.417 C 3.391 6.426 3.377 6.436 3.362 6.448 C 3.393 6.269 3.439 6.119 3.5 5.974 L 3.502 5.97 C 3.505 5.962 3.509 5.953 3.515 5.949 C 3.519 5.946 3.523 5.943 3.528 5.94 C 3.544 5.929 3.561 5.916 3.577 5.916 C 3.608 5.917 3.631 5.942 3.637 5.974 C 3.641 5.992 3.641 6.014 3.636 6.032 L 3.635 6.037 C 3.624 6.074 3.614 6.111 3.596 6.143 Z M 16.702 10.624 C 16.701 10.739 16.678 10.851 16.637 10.958 C 16.632 10.973 16.619 10.986 16.6 11.005 C 16.59 11.015 16.577 11.028 16.562 11.045 C 16.536 10.876 16.539 10.743 16.555 10.611 C 16.561 10.562 16.572 10.509 16.632 10.495 C 16.67 10.486 16.703 10.544 16.702 10.624 Z M 14.023 8.611 C 13.989 8.73 13.941 8.843 13.88 8.951 C 13.866 8.975 13.854 9 13.843 9.025 C 13.817 9.079 13.791 9.133 13.746 9.179 C 13.747 9.171 13.748 9.164 13.748 9.156 C 13.749 9.14 13.751 9.124 13.756 9.109 L 13.76 9.1 C 13.854 8.856 13.948 8.612 14.093 8.388 C 14.093 8.394 14.092 8.4 14.092 8.406 C 14.091 8.42 14.09 8.433 14.086 8.446 C 14.078 8.469 14.069 8.491 14.059 8.514 C 14.046 8.546 14.033 8.578 14.023 8.611 Z M 8.899 8.291 C 8.868 8.395 8.823 8.492 8.71 8.557 C 8.715 8.527 8.72 8.498 8.724 8.468 C 8.735 8.396 8.747 8.324 8.761 8.253 C 8.773 8.193 8.81 8.164 8.848 8.171 C 8.894 8.18 8.918 8.23 8.899 8.291 Z M 8.117 7.973 L 8.123 7.983 L 8.119 7.995 L 8.116 7.991 C 8.113 7.988 8.111 7.985 8.109 7.982 L 8.117 7.973 Z M 3.249 5.561 L 3.243 5.556 L 3.25 5.553 L 3.249 5.561 Z M 3.282 5.495 L 3.277 5.505 L 3.274 5.494 L 3.282 5.495 Z M 3.308 5.429 L 3.315 5.439 L 3.307 5.446 L 3.305 5.444 C 3.303 5.441 3.301 5.437 3.301 5.437 C 3.301 5.435 3.303 5.433 3.306 5.431 L 3.308 5.429 Z M 3.338 5.369 L 3.346 5.38 L 3.337 5.388 L 3.334 5.385 C 3.332 5.382 3.33 5.38 3.331 5.377 C 3.331 5.375 3.333 5.373 3.335 5.371 L 3.338 5.369 Z M 6.415 10.656 L 6.407 10.65 L 6.416 10.645 L 6.415 10.656 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 27.747,
    height: 13.445,
    viewBox: "0 0 27.747 13.445",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.825,
      top: 12.394,
      width: 27.747,
      height: 13.445,
      color: "rgb(182,146,88)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.59 7.711 C 8.142 7.307 7.626 7.018 7.066 6.799 C 6.766 6.681 6.473 6.544 6.175 6.419 C 5.955 6.326 5.734 6.237 5.512 6.15 C 5.298 6.067 5.074 6.019 4.847 5.985 C 4.793 5.977 4.74 5.965 4.686 5.954 C 4.64 5.936 4.596 5.912 4.549 5.902 C 4.227 5.831 3.919 5.718 3.607 5.617 C 3.456 5.567 3.309 5.506 3.174 5.419 C 3.04 5.334 2.908 5.246 2.775 5.159 C 2.515 4.99 2.283 4.789 2.071 4.564 C 1.829 4.307 1.591 4.047 1.396 3.752 C 1.393 3.747 1.381 3.748 1.374 3.747 C 1.372 3.757 1.367 3.768 1.37 3.776 C 1.385 3.813 1.4 3.85 1.417 3.885 C 1.527 4.109 1.673 4.31 1.834 4.499 C 1.953 4.639 2.077 4.776 2.197 4.914 C 2.546 5.313 2.96 5.623 3.456 5.819 C 3.487 5.831 3.515 5.851 3.545 5.868 C 3.535 5.87 3.525 5.875 3.516 5.875 C 3.289 5.862 3.062 5.848 2.834 5.835 C 2.812 5.826 2.79 5.814 2.766 5.808 C 2.462 5.728 2.164 5.633 1.89 5.476 C 1.697 5.365 1.508 5.243 1.324 5.117 C 1.112 4.972 0.941 4.784 0.821 4.556 C 0.747 4.416 0.677 4.273 0.621 4.125 C 0.474 3.737 0.386 3.337 0.405 2.919 C 0.41 2.785 0.426 2.652 0.433 2.518 C 0.455 2.072 0.458 1.625 0.379 1.183 C 0.306 0.772 0.215 0.366 0 0 C 0.022 0.01 0.047 0.018 0.067 0.032 C 0.301 0.198 0.549 0.349 0.73 0.579 C 0.748 0.602 0.772 0.621 0.793 0.642 C 0.932 0.784 1.06 0.936 1.172 1.1 C 1.42 1.463 1.596 1.86 1.721 2.28 C 1.782 2.484 1.847 2.686 1.911 2.889 C 1.936 2.954 1.962 3.018 1.988 3.083 C 2.017 3.224 2.053 3.363 2.074 3.505 C 2.113 3.761 2.191 4.006 2.284 4.247 C 2.372 4.472 2.518 4.661 2.682 4.835 C 3.139 5.32 3.698 5.625 4.356 5.738 C 4.621 5.784 4.888 5.815 5.157 5.813 C 5.43 5.811 5.704 5.793 5.977 5.79 C 6.121 5.789 6.265 5.8 6.408 5.815 C 6.873 5.865 7.309 6.009 7.724 6.222 C 8.14 6.436 8.545 6.667 8.927 6.938 C 9.32 7.216 9.718 7.488 10.138 7.726 C 10.35 7.846 10.567 7.956 10.781 8.071 C 10.816 8.09 10.85 8.109 10.885 8.129 C 10.91 8.16 10.933 8.195 10.982 8.188 L 10.98 8.186 C 10.991 8.233 11.034 8.242 11.068 8.259 C 11.485 8.457 11.921 8.582 12.387 8.583 C 12.477 8.583 12.567 8.578 12.656 8.58 C 12.877 8.585 13.092 8.545 13.302 8.482 C 13.679 8.37 14.042 8.221 14.389 8.035 C 14.52 7.965 14.642 7.879 14.771 7.804 C 15.155 7.582 15.51 7.32 15.853 7.04 C 15.957 6.956 16.058 6.867 16.161 6.782 C 16.177 6.769 16.2 6.763 16.24 6.745 C 16.229 6.784 16.227 6.803 16.218 6.818 C 16.175 6.896 16.128 6.972 16.084 7.05 C 15.921 7.345 15.766 7.644 15.638 7.957 C 15.615 8.011 15.59 8.066 15.557 8.114 C 15.306 8.481 15.014 8.81 14.671 9.094 C 14.611 9.144 14.56 9.205 14.505 9.261 C 14.503 9.265 14.501 9.269 14.498 9.272 C 14.5 9.268 14.501 9.264 14.503 9.259 C 14.567 9.276 14.62 9.244 14.671 9.214 C 14.821 9.127 14.972 9.041 15.103 8.925 C 15.124 8.906 15.147 8.883 15.18 8.904 C 15.198 8.937 15.177 8.961 15.162 8.985 C 15.119 9.058 15.074 9.129 15.032 9.201 C 15.01 9.239 14.976 9.273 14.983 9.322 L 14.984 9.32 C 14.932 9.344 14.916 9.386 14.92 9.438 L 14.921 9.437 C 14.911 9.439 14.9 9.441 14.89 9.443 C 14.873 9.461 14.855 9.477 14.84 9.497 C 14.566 9.848 14.253 10.158 13.872 10.393 C 13.695 10.502 13.514 10.607 13.331 10.706 C 13.16 10.798 12.978 10.864 12.789 10.912 C 12.517 10.981 12.239 10.992 11.962 11.01 C 11.927 11.012 11.892 11.006 11.858 11.002 C 11.647 10.981 11.45 10.917 11.264 10.818 C 11.202 10.786 11.14 10.754 11.077 10.724 C 11.018 10.696 10.956 10.678 10.89 10.696 C 10.752 10.589 10.647 10.451 10.542 10.314 C 10.534 10.304 10.535 10.286 10.532 10.273 C 10.577 10.248 10.606 10.281 10.639 10.301 C 10.847 10.431 11.072 10.52 11.313 10.569 C 11.625 10.632 11.94 10.666 12.259 10.659 C 12.602 10.652 12.911 10.551 13.179 10.332 C 13.225 10.295 13.274 10.261 13.32 10.223 C 13.465 10.103 13.609 9.983 13.753 9.86 C 13.77 9.846 13.778 9.82 13.79 9.799 C 13.801 9.793 13.818 9.79 13.798 9.775 C 13.798 9.775 13.788 9.786 13.783 9.792 C 13.751 9.804 13.716 9.81 13.688 9.827 C 13.577 9.894 13.47 9.967 13.359 10.032 C 13.235 10.104 13.11 10.176 12.981 10.239 C 12.796 10.33 12.594 10.361 12.393 10.394 C 12.24 10.42 12.086 10.436 11.933 10.413 C 11.727 10.383 11.521 10.345 11.318 10.301 C 11.014 10.234 10.728 10.127 10.482 9.928 C 10.417 9.875 10.342 9.835 10.27 9.79 C 10.241 9.772 10.21 9.753 10.173 9.767 L 10.174 9.769 C 10.163 9.754 10.152 9.739 10.141 9.724 C 10.069 9.637 9.998 9.55 9.964 9.44 C 10.021 9.428 10.056 9.47 10.095 9.495 C 10.269 9.61 10.459 9.689 10.656 9.752 C 10.683 9.761 10.713 9.761 10.742 9.765 C 10.822 9.833 10.92 9.851 11.023 9.861 C 10.929 9.823 10.835 9.785 10.741 9.747 C 10.645 9.686 10.547 9.628 10.454 9.564 C 10.377 9.511 10.299 9.456 10.231 9.392 C 10.098 9.267 9.973 9.133 9.841 9.007 C 9.698 8.871 9.551 8.738 9.405 8.605 C 9.377 8.579 9.352 8.544 9.306 8.547 L 9.308 8.548 C 9.294 8.538 9.28 8.529 9.266 8.519 C 9.187 8.415 9.107 8.312 9.029 8.207 C 9.013 8.186 8.987 8.164 9.007 8.131 C 9.033 8.141 9.063 8.148 9.086 8.163 C 9.174 8.22 9.257 8.283 9.345 8.337 C 9.617 8.502 9.899 8.647 10.201 8.75 C 10.351 8.801 10.5 8.855 10.656 8.885 C 10.703 8.895 10.752 8.899 10.799 8.906 C 10.79 8.885 10.778 8.877 10.766 8.873 C 10.441 8.761 10.126 8.631 9.844 8.431 C 9.832 8.422 9.818 8.416 9.805 8.408 C 9.614 8.293 9.42 8.183 9.234 8.061 C 9.068 7.952 8.895 7.854 8.719 7.763 C 8.698 7.753 8.673 7.75 8.649 7.744 L 8.651 7.745 C 8.641 7.715 8.628 7.693 8.591 7.712 L 8.59 7.711 Z M 11.411 9.997 C 11.361 9.949 11.322 9.955 11.281 9.968 C 11.317 9.977 11.354 9.984 11.411 9.997 Z M 11.184 9.941 C 11.156 9.918 11.132 9.875 11.089 9.913 C 11.123 9.923 11.153 9.932 11.184 9.941 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.272 7.258 C 17.363 7.091 17.485 6.948 17.606 6.803 C 17.861 6.497 18.153 6.229 18.474 5.991 C 18.637 5.87 18.797 5.744 18.961 5.623 C 19.077 5.538 19.193 5.453 19.329 5.4 C 19.503 5.404 19.676 5.415 19.85 5.411 C 20.129 5.403 20.405 5.426 20.681 5.468 C 20.947 5.509 21.203 5.586 21.464 5.648 C 21.673 5.697 21.874 5.767 22.073 5.844 C 22.203 5.894 22.33 5.951 22.459 6.004 C 22.526 6.031 22.593 6.065 22.681 6.067 C 22.675 6.038 22.671 6.016 22.666 5.995 C 22.959 6.178 23.227 6.393 23.432 6.672 C 23.658 6.979 23.872 7.296 24.083 7.615 C 24.207 7.801 24.307 8.004 24.351 8.224 C 24.387 8.403 24.405 8.587 24.418 8.769 C 24.441 9.093 24.4 9.413 24.347 9.731 C 24.33 9.834 24.311 9.937 24.304 10.04 C 24.288 10.283 24.248 10.522 24.192 10.759 C 24.164 10.88 24.149 11.003 24.191 11.126 C 24.157 11.349 24.077 11.556 23.982 11.759 C 23.876 11.983 23.774 12.209 23.67 12.434 C 23.649 12.479 23.627 12.524 23.603 12.567 C 23.542 12.675 23.479 12.781 23.419 12.89 C 23.337 13.039 23.233 13.171 23.111 13.29 C 23.057 13.342 22.995 13.382 22.924 13.409 C 22.78 13.466 22.64 13.458 22.513 13.367 C 22.454 13.325 22.397 13.272 22.354 13.213 C 22.219 13.028 22.143 12.821 22.151 12.589 C 22.159 12.35 22.184 12.115 22.221 11.879 C 22.266 11.595 22.334 11.316 22.406 11.038 C 22.444 10.892 22.45 10.743 22.463 10.596 C 22.524 9.928 22.396 9.301 22.028 8.734 C 21.823 8.416 21.573 8.132 21.296 7.873 C 21.097 7.686 20.891 7.507 20.668 7.348 C 20.402 7.159 20.113 7.017 19.806 6.91 C 19.511 6.808 19.205 6.786 18.894 6.802 C 18.588 6.818 18.294 6.889 18.002 6.971 C 17.805 7.026 17.617 7.104 17.439 7.204 C 17.391 7.231 17.341 7.252 17.292 7.276 C 17.286 7.27 17.279 7.264 17.272 7.258 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 24.726 9.923 C 24.757 9.673 24.787 9.422 24.818 9.172 C 24.851 8.899 24.846 8.628 24.766 8.363 C 24.713 8.188 24.655 8.014 24.599 7.84 C 24.58 7.779 24.562 7.717 24.544 7.656 C 24.587 7.644 24.632 7.638 24.672 7.621 C 25.084 7.447 25.453 7.208 25.769 6.89 C 25.793 6.866 25.818 6.843 25.844 6.819 C 25.867 6.828 25.886 6.834 25.903 6.843 C 26.168 6.982 26.424 7.134 26.651 7.329 C 26.783 7.443 26.914 7.557 27.044 7.672 C 27.307 7.906 27.524 8.175 27.679 8.491 C 27.757 8.647 27.76 8.647 27.729 8.816 C 27.695 9.007 27.616 9.174 27.466 9.304 C 27.407 9.356 27.349 9.411 27.292 9.466 C 27.176 9.577 27.045 9.666 26.9 9.734 C 26.601 9.872 26.293 9.983 25.972 10.056 C 25.796 10.096 25.617 10.118 25.439 10.082 C 25.2 10.034 24.964 9.977 24.726 9.923 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.261,
    height: 14.201,
    viewBox: "0 0 6.261 14.201",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.666,
      top: 5.95,
      width: 6.261,
      height: 14.201,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.638 1.347 C 5.737 1.259 5.835 1.17 5.935 1.083 C 5.96 1.062 5.99 1.038 6.028 1.059 L 6.025 1.057 C 6.017 1.075 6.009 1.094 6.002 1.112 C 5.937 1.135 5.905 1.186 5.882 1.246 C 5.855 1.281 5.822 1.312 5.801 1.35 C 5.755 1.437 5.716 1.527 5.673 1.616 C 5.687 1.62 5.7 1.622 5.713 1.628 C 5.729 1.635 5.743 1.645 5.759 1.654 C 5.677 1.72 5.6 1.79 5.514 1.848 C 5.425 1.909 5.355 1.982 5.304 2.075 C 5.277 2.122 5.249 2.169 5.224 2.212 C 5.242 2.244 5.261 2.231 5.276 2.222 C 5.409 2.15 5.557 2.126 5.699 2.08 C 5.727 2.071 5.758 2.068 5.787 2.068 C 5.917 2.068 6.046 2.07 6.175 2.073 C 6.188 2.073 6.201 2.08 6.212 2.084 C 6.22 2.117 6.196 2.122 6.179 2.126 C 6.01 2.166 5.841 2.206 5.672 2.246 C 5.633 2.255 5.594 2.264 5.557 2.279 C 5.395 2.343 5.239 2.42 5.095 2.519 C 5.063 2.541 5.031 2.567 5.01 2.599 C 4.944 2.698 4.887 2.802 4.84 2.917 C 4.882 2.943 4.92 2.927 4.957 2.925 C 5.051 2.918 5.145 2.906 5.239 2.904 C 5.438 2.901 5.637 2.903 5.856 2.903 C 5.76 2.97 5.669 2.957 5.583 2.966 C 5.499 2.975 5.415 2.984 5.316 2.995 C 5.334 3.017 5.342 3.035 5.355 3.041 C 5.478 3.095 5.602 3.146 5.725 3.199 C 5.863 3.257 6.004 3.304 6.153 3.326 C 6.18 3.33 6.206 3.344 6.261 3.363 C 6.1 3.387 5.975 3.36 5.853 3.331 C 5.679 3.289 5.508 3.236 5.336 3.188 C 5.249 3.164 5.161 3.147 5.078 3.114 C 5.016 3.09 4.963 3.109 4.904 3.116 C 4.758 3.134 4.663 3.211 4.6 3.342 C 4.557 3.431 4.498 3.512 4.448 3.598 C 4.436 3.619 4.429 3.642 4.414 3.677 C 4.734 3.625 5.042 3.588 5.353 3.671 C 5.322 3.681 5.29 3.697 5.258 3.7 C 4.935 3.731 4.624 3.823 4.31 3.896 C 4.288 3.901 4.26 3.912 4.248 3.93 C 4.182 4.028 4.113 4.124 4.067 4.239 C 4.283 4.289 4.51 4.252 4.724 4.365 C 4.699 4.376 4.688 4.385 4.677 4.385 C 4.587 4.384 4.497 4.389 4.409 4.378 C 4.278 4.361 4.151 4.373 4.022 4.39 C 3.986 4.395 3.957 4.407 3.934 4.438 C 3.878 4.514 3.821 4.589 3.765 4.665 C 3.761 4.671 3.763 4.683 3.762 4.703 C 3.803 4.726 3.854 4.717 3.901 4.726 C 3.954 4.737 4.009 4.744 4.061 4.76 C 4.105 4.772 4.157 4.777 4.198 4.834 C 4.074 4.834 3.967 4.834 3.859 4.834 C 3.712 4.835 3.593 4.895 3.504 5.013 C 3.465 5.064 3.426 5.115 3.387 5.167 C 3.385 5.17 3.385 5.176 3.385 5.18 C 3.457 5.202 3.457 5.203 3.535 5.194 C 3.589 5.188 3.643 5.176 3.697 5.171 C 3.749 5.166 3.802 5.157 3.854 5.174 C 3.842 5.219 3.808 5.218 3.782 5.226 C 3.62 5.274 3.459 5.324 3.295 5.366 C 3.199 5.391 3.122 5.438 3.068 5.521 C 3.033 5.573 2.981 5.614 2.949 5.683 C 3.07 5.713 3.182 5.741 3.32 5.776 C 3.144 5.857 2.987 5.845 2.829 5.831 C 2.724 5.906 2.523 6.11 2.436 6.232 C 2.43 6.238 2.424 6.245 2.418 6.251 C 2.43 6.251 2.442 6.25 2.454 6.25 C 2.528 6.239 2.601 6.225 2.674 6.216 C 2.736 6.21 2.8 6.192 2.876 6.241 C 2.824 6.257 2.787 6.257 2.752 6.266 C 2.713 6.276 2.675 6.285 2.636 6.296 C 2.584 6.312 2.533 6.331 2.48 6.345 C 2.27 6.402 2.113 6.535 1.976 6.697 C 1.971 6.703 1.973 6.715 1.97 6.732 C 2.029 6.764 2.103 6.735 2.162 6.764 C 2.173 6.802 2.144 6.813 2.124 6.819 C 2.02 6.85 1.915 6.877 1.783 6.912 C 1.754 6.947 1.705 7.002 1.657 7.059 C 1.61 7.115 1.551 7.163 1.515 7.246 C 1.585 7.237 1.641 7.23 1.701 7.222 C 1.698 7.237 1.698 7.249 1.693 7.253 C 1.609 7.314 1.527 7.378 1.439 7.432 C 1.399 7.458 1.371 7.485 1.353 7.528 C 1.313 7.618 1.27 7.707 1.226 7.799 C 1.298 7.838 1.365 7.778 1.44 7.803 C 1.423 7.817 1.412 7.833 1.396 7.841 C 1.333 7.87 1.268 7.895 1.205 7.924 C 1.179 7.937 1.147 7.95 1.133 7.972 C 1.064 8.074 1.029 8.191 0.975 8.301 C 1.052 8.337 1.117 8.278 1.178 8.313 C 1.149 8.361 1.107 8.398 1.052 8.425 C 1.003 8.449 0.954 8.472 0.905 8.496 C 0.872 8.587 0.832 8.671 0.823 8.775 C 0.875 8.785 0.921 8.793 0.975 8.803 C 0.933 8.906 0.841 8.934 0.747 8.982 C 0.716 9.085 0.682 9.198 0.649 9.307 C 0.689 9.342 0.707 9.299 0.734 9.297 C 0.746 9.309 0.758 9.321 0.77 9.333 C 0.579 9.513 0.613 9.439 0.546 9.717 C 0.54 9.745 0.538 9.773 0.532 9.813 C 0.6 9.8 0.656 9.79 0.733 9.775 C 0.661 9.875 0.577 9.925 0.488 9.974 C 0.472 10.059 0.442 10.143 0.445 10.244 C 0.541 10.232 0.624 10.164 0.719 10.203 C 0.699 10.295 0.699 10.295 0.574 10.417 C 0.514 10.476 0.456 10.537 0.388 10.608 C 0.382 10.655 0.363 10.717 0.384 10.784 C 0.441 10.776 0.493 10.768 0.562 10.759 C 0.508 10.85 0.426 10.88 0.353 10.924 C 0.344 11.012 0.335 11.099 0.325 11.195 C 0.408 11.175 0.457 11.104 0.534 11.103 C 0.557 11.124 0.539 11.141 0.529 11.155 C 0.479 11.229 0.434 11.308 0.374 11.373 C 0.317 11.434 0.307 11.502 0.31 11.577 C 0.312 11.611 0.315 11.646 0.319 11.688 C 0.367 11.68 0.409 11.672 0.451 11.664 C 0.453 11.673 0.46 11.684 0.457 11.689 C 0.426 11.739 0.398 11.793 0.359 11.837 C 0.322 11.878 0.309 11.92 0.313 11.971 C 0.317 12.02 0.318 12.069 0.321 12.124 C 0.409 12.115 0.439 12.024 0.513 12.012 C 0.519 12.02 0.53 12.03 0.528 12.034 C 0.477 12.13 0.414 12.217 0.336 12.303 C 0.345 12.684 0.411 13.062 0.547 13.428 C 0.617 13.617 0.73 13.779 0.854 13.935 C 0.901 13.993 0.95 14.049 0.994 14.109 C 1.013 14.136 1.023 14.17 1.038 14.201 C 0.929 14.138 0.834 14.058 0.754 13.963 C 0.544 13.716 0.366 13.45 0.263 13.137 C 0.18 12.883 0.088 12.632 0.039 12.368 C 0 12.157 -0.01 11.943 0.009 11.731 C 0.035 11.445 0.073 11.16 0.108 10.875 C 0.151 10.535 0.21 10.199 0.295 9.867 C 0.354 9.637 0.414 9.407 0.477 9.178 C 0.598 8.741 0.786 8.332 1.001 7.934 C 1.06 7.824 1.124 7.718 1.179 7.607 C 1.404 7.154 1.72 6.765 2.045 6.382 C 2.324 6.053 2.611 5.731 2.89 5.401 C 3.292 4.928 3.664 4.433 4.006 3.914 C 4.283 3.495 4.513 3.051 4.742 2.606 C 4.908 2.284 5.068 1.959 5.233 1.637 C 5.432 1.247 5.576 0.836 5.684 0.412 C 5.718 0.278 5.736 0.14 5.731 0 C 5.75 0.022 5.777 0.041 5.785 0.066 C 5.801 0.117 5.812 0.171 5.817 0.224 C 5.828 0.362 5.819 0.499 5.798 0.636 C 5.765 0.862 5.7 1.078 5.632 1.294 C 5.624 1.314 5.615 1.334 5.609 1.354 C 5.608 1.357 5.62 1.364 5.626 1.369 C 5.63 1.361 5.634 1.354 5.638 1.346 L 5.638 1.347 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.671,
    height: 9.470,
    viewBox: "0 0 6.671 9.470",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.85,
      top: 8.887,
      width: 6.671,
      height: 9.47,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.991 0.047 C 5.927 0.164 5.863 0.281 5.799 0.398 C 5.815 0.428 5.842 0.416 5.863 0.411 C 6.066 0.356 6.276 0.358 6.483 0.332 C 6.542 0.325 6.602 0.324 6.671 0.369 C 6.56 0.394 6.464 0.42 6.366 0.437 C 6.148 0.475 5.945 0.553 5.743 0.639 C 5.576 0.711 5.425 0.8 5.317 0.949 C 5.288 0.988 5.237 1.01 5.226 1.073 C 5.325 1.088 5.423 1.103 5.521 1.117 C 5.619 1.131 5.714 1.154 5.806 1.199 C 5.766 1.248 5.719 1.246 5.676 1.247 C 5.601 1.25 5.526 1.247 5.452 1.249 C 5.307 1.254 5.164 1.268 5.024 1.308 C 4.982 1.32 4.938 1.337 4.905 1.364 C 4.797 1.452 4.695 1.546 4.591 1.639 C 4.584 1.645 4.581 1.655 4.574 1.668 C 4.6 1.706 4.645 1.688 4.679 1.7 C 4.712 1.711 4.746 1.719 4.78 1.726 C 4.804 1.73 4.829 1.732 4.854 1.733 C 5.047 1.744 5.154 1.867 5.233 2.025 C 5.234 2.028 5.231 2.034 5.23 2.042 C 5.134 2.067 5.054 1.978 4.947 1.999 C 5.015 2.093 5.088 2.175 5.177 2.233 C 5.262 2.288 5.364 2.317 5.466 2.36 C 5.295 2.406 5.152 2.375 5.039 2.268 C 4.96 2.193 4.884 2.114 4.807 2.036 C 4.782 2.012 4.756 1.988 4.73 1.965 C 4.676 1.918 4.615 1.892 4.541 1.893 C 4.278 1.895 4.356 1.852 4.16 2.033 C 4.066 2.121 3.966 2.204 3.869 2.288 C 3.831 2.321 3.794 2.353 3.745 2.396 C 3.781 2.416 3.799 2.433 3.819 2.437 C 4.009 2.468 4.177 2.556 4.348 2.634 C 4.392 2.654 4.433 2.682 4.475 2.707 C 4.455 2.748 4.429 2.731 4.41 2.726 C 4.299 2.699 4.188 2.676 4.073 2.665 C 3.99 2.658 3.909 2.627 3.828 2.605 C 3.761 2.586 3.696 2.564 3.637 2.545 C 3.517 2.635 3.162 3.003 3.088 3.115 C 3.196 3.174 3.304 3.23 3.429 3.243 C 3.617 3.264 3.785 3.332 3.933 3.449 C 3.931 3.467 3.93 3.484 3.929 3.502 C 3.77 3.442 3.604 3.412 3.436 3.392 C 3.341 3.381 3.25 3.36 3.161 3.326 C 3.092 3.299 3.023 3.27 2.938 3.275 C 2.864 3.362 2.787 3.451 2.709 3.541 C 2.835 3.674 2.95 3.803 3.109 3.882 C 3.148 3.901 3.181 3.934 3.216 3.962 C 3.226 3.97 3.232 3.985 3.24 3.996 C 3.214 4.034 3.185 4.013 3.161 4.003 C 2.998 3.94 2.847 3.854 2.706 3.751 C 2.674 3.728 2.642 3.706 2.604 3.679 C 2.58 3.698 2.553 3.712 2.536 3.734 C 2.402 3.901 2.271 4.069 2.14 4.237 C 2.131 4.247 2.13 4.263 2.124 4.282 C 2.219 4.287 2.305 4.259 2.39 4.237 C 2.535 4.2 2.684 4.193 2.832 4.173 C 2.872 4.167 2.922 4.153 2.956 4.203 C 2.903 4.243 2.84 4.259 2.78 4.275 C 2.535 4.34 2.3 4.437 2.052 4.49 C 2.004 4.5 1.956 4.519 1.913 4.542 C 1.885 4.557 1.865 4.587 1.836 4.616 C 1.91 4.674 1.992 4.674 2.064 4.701 C 2.135 4.728 2.214 4.74 2.294 4.808 C 2.205 4.82 2.143 4.818 2.081 4.806 C 2.017 4.795 1.954 4.779 1.89 4.772 C 1.837 4.766 1.782 4.771 1.724 4.771 C 1.636 4.89 1.548 5.008 1.459 5.129 C 1.494 5.165 1.53 5.148 1.561 5.148 C 1.596 5.148 1.631 5.144 1.665 5.144 C 1.705 5.144 1.745 5.145 1.785 5.147 C 1.819 5.15 1.854 5.155 1.889 5.159 C 1.923 5.163 1.958 5.165 1.992 5.169 C 2.024 5.173 2.055 5.179 2.087 5.202 C 2.034 5.21 1.981 5.222 1.928 5.227 C 1.739 5.246 1.557 5.294 1.377 5.352 C 1.316 5.371 1.273 5.403 1.241 5.458 C 1.174 5.572 1.102 5.685 1.032 5.798 C 1.026 5.805 1.02 5.811 1.015 5.817 C 1.026 5.817 1.037 5.816 1.049 5.816 C 1.113 5.805 1.176 5.792 1.24 5.785 C 1.298 5.778 1.358 5.766 1.417 5.817 C 1.387 5.834 1.363 5.851 1.337 5.862 C 1.208 5.915 1.079 5.967 0.95 6.017 C 0.89 6.04 0.848 6.076 0.822 6.134 C 0.785 6.219 0.724 6.293 0.707 6.397 C 0.879 6.395 1.038 6.326 1.229 6.344 C 1.126 6.414 1.022 6.418 0.924 6.471 C 0.952 6.486 0.973 6.502 0.996 6.51 C 1.038 6.525 1.081 6.536 1.124 6.549 C 1.124 6.565 1.123 6.582 1.122 6.599 C 1.104 6.597 1.085 6.595 1.066 6.594 C 1.029 6.565 0.986 6.573 0.944 6.577 C 0.861 6.586 0.777 6.595 0.693 6.602 C 0.626 6.607 0.583 6.641 0.56 6.703 C 0.523 6.804 0.487 6.906 0.447 7.017 C 0.577 7.03 0.688 6.939 0.812 6.973 C 0.816 7.015 0.784 7.026 0.759 7.038 C 0.67 7.081 0.582 7.129 0.489 7.161 C 0.391 7.194 0.347 7.261 0.329 7.354 C 0.324 7.378 0.321 7.402 0.319 7.423 C 0.355 7.464 0.397 7.441 0.434 7.445 C 0.477 7.448 0.523 7.435 0.56 7.466 C 0.514 7.573 0.422 7.652 0.233 7.747 C 0.222 7.797 0.209 7.854 0.198 7.911 C 0.188 7.964 0.182 8.018 0.175 8.068 C 0.232 8.123 0.318 8.067 0.376 8.134 C 0.299 8.177 0.227 8.218 0.154 8.259 C 0.137 8.364 0.125 8.466 0.133 8.575 C 0.171 8.586 0.208 8.597 0.243 8.607 C 0.262 8.672 0.223 8.722 0.116 8.768 C 0.107 8.967 0.105 9.169 0.112 9.371 C 0.104 9.404 0.095 9.437 0.087 9.47 C 0.066 9.389 0.033 9.308 0.027 9.226 C 0.005 8.964 -0.011 8.704 0.009 8.44 C 0.032 8.138 0.058 7.838 0.107 7.54 C 0.164 7.202 0.246 6.871 0.364 6.55 C 0.41 6.424 0.461 6.3 0.508 6.175 C 0.593 5.952 0.706 5.743 0.828 5.539 C 0.848 5.507 0.867 5.475 0.886 5.443 L 0.885 5.446 C 0.914 5.428 0.92 5.4 0.918 5.369 C 0.984 5.213 1.074 5.071 1.169 4.931 C 1.301 4.739 1.43 4.545 1.563 4.354 C 1.634 4.252 1.707 4.151 1.788 4.057 C 2.074 3.728 2.364 3.401 2.674 3.093 C 2.935 2.835 3.193 2.573 3.475 2.336 C 3.506 2.311 3.535 2.284 3.563 2.256 C 3.765 2.058 3.982 1.876 4.202 1.698 C 4.535 1.43 4.833 1.123 5.144 0.831 C 5.202 0.777 5.257 0.719 5.321 0.671 C 5.534 0.513 5.708 0.316 5.875 0.113 C 5.907 0.074 5.94 0.038 5.972 0 C 5.978 0.016 5.985 0.032 5.991 0.048 L 5.991 0.047 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.883,
    height: 2.912,
    viewBox: "0 0 2.883 2.912",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.328,
      top: 0.827,
      width: 2.883,
      height: 2.912,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.66 2.135 C 1.495 2.203 1.338 2.285 1.191 2.385 C 1.166 2.401 1.14 2.415 1.114 2.43 C 0.914 2.547 0.714 2.665 0.513 2.781 C 0.432 2.827 0.35 2.87 0.273 2.912 C 0.22 2.817 0.174 2.731 0.127 2.646 C 0.117 2.603 0.109 2.56 0.096 2.517 C 0.078 2.456 0.051 2.396 0.039 2.333 C -0.065 1.783 0.035 1.277 0.388 0.836 C 0.527 0.662 0.688 0.506 0.839 0.343 C 0.875 0.313 0.911 0.284 0.947 0.255 C 1.077 0.176 1.219 0.122 1.365 0.081 C 1.467 0.052 1.57 0.015 1.68 0.019 C 1.658 0.076 1.645 0.132 1.68 0.19 C 1.716 0.248 1.778 0.275 1.846 0.258 C 1.91 0.243 1.955 0.185 1.947 0.114 C 1.943 0.076 1.923 0.04 1.91 0.003 C 2.183 -0.013 2.448 0.03 2.702 0.129 C 2.765 0.154 2.823 0.194 2.883 0.227 C 2.86 0.249 2.836 0.269 2.816 0.293 C 2.802 0.308 2.793 0.329 2.782 0.347 L 2.784 0.346 C 2.736 0.339 2.71 0.367 2.694 0.408 L 2.695 0.406 C 2.67 0.42 2.642 0.43 2.62 0.448 C 2.571 0.489 2.528 0.537 2.479 0.579 C 2.161 0.856 1.93 1.198 1.742 1.57 C 1.691 1.671 1.659 1.781 1.62 1.887 C 1.587 1.977 1.594 2.061 1.66 2.135 L 1.66 2.135 Z M 0.666 0.908 C 0.728 0.91 0.782 0.858 0.781 0.798 C 0.779 0.743 0.732 0.701 0.671 0.701 C 0.61 0.701 0.566 0.743 0.565 0.802 C 0.565 0.86 0.609 0.907 0.666 0.908 L 0.666 0.908 Z M 0.455 1.954 C 0.456 1.901 0.417 1.862 0.362 1.863 C 0.314 1.863 0.277 1.895 0.272 1.941 C 0.267 1.992 0.306 2.037 0.357 2.041 C 0.409 2.044 0.453 2.005 0.455 1.954 Z M 1.63 1.341 C 1.601 1.32 1.584 1.302 1.565 1.298 C 1.554 1.296 1.532 1.317 1.528 1.331 C 1.521 1.357 1.536 1.383 1.564 1.381 C 1.583 1.38 1.6 1.36 1.63 1.341 L 1.63 1.341 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.470,
    height: 12.013,
    viewBox: "0 0 4.470 12.013",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.563,
      top: 7.202,
      width: 4.47,
      height: 12.013,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.128 4.091 C 1.98 4.076 1.832 4.066 1.685 4.045 C 1.621 4.036 1.568 4.047 1.515 4.08 C 1.477 4.103 1.438 4.124 1.401 4.149 C 1.381 4.162 1.359 4.179 1.347 4.199 C 1.286 4.306 1.227 4.414 1.162 4.532 C 1.339 4.539 1.492 4.466 1.656 4.461 C 1.667 4.494 1.64 4.5 1.621 4.51 C 1.576 4.532 1.53 4.55 1.486 4.572 C 1.47 4.58 1.457 4.593 1.426 4.616 C 1.561 4.638 1.671 4.582 1.783 4.607 C 1.799 4.638 1.777 4.653 1.755 4.661 C 1.584 4.726 1.413 4.793 1.222 4.75 C 1.122 4.727 1.042 4.777 0.994 4.855 C 0.933 4.956 0.879 5.063 0.841 5.185 C 0.933 5.199 1.012 5.169 1.093 5.154 C 1.141 5.145 1.188 5.124 1.236 5.115 C 1.279 5.107 1.324 5.109 1.368 5.106 L 1.365 5.104 C 1.324 5.173 1.245 5.185 1.184 5.225 C 1.149 5.248 1.098 5.251 1.074 5.308 C 1.155 5.323 1.231 5.338 1.314 5.353 C 1.303 5.387 1.275 5.393 1.249 5.394 C 1.15 5.395 1.051 5.397 0.952 5.391 C 0.895 5.388 0.846 5.402 0.796 5.426 C 0.762 5.442 0.738 5.464 0.727 5.499 C 0.7 5.584 0.673 5.668 0.648 5.753 C 0.646 5.76 0.654 5.77 0.66 5.787 C 0.838 5.751 0.985 5.634 1.188 5.572 C 1.155 5.614 1.145 5.634 1.129 5.647 C 1.058 5.7 0.985 5.752 0.912 5.803 C 0.811 5.874 0.708 5.944 0.605 6.012 C 0.558 6.044 0.528 6.087 0.512 6.141 C 0.491 6.212 0.466 6.282 0.448 6.354 C 0.441 6.381 0.446 6.411 0.446 6.444 C 0.523 6.433 0.576 6.386 0.638 6.357 C 0.713 6.32 0.79 6.286 0.868 6.254 C 0.889 6.245 0.916 6.249 0.941 6.247 C 0.941 6.258 0.942 6.269 0.942 6.28 C 0.746 6.456 0.551 6.631 0.356 6.805 C 0.332 6.911 0.309 7.012 0.287 7.114 C 0.286 7.122 0.292 7.133 0.297 7.151 C 0.455 7.042 0.571 6.883 0.748 6.802 C 0.768 6.845 0.739 6.864 0.722 6.884 C 0.606 7.02 0.489 7.155 0.372 7.291 C 0.34 7.328 0.307 7.365 0.276 7.404 C 0.204 7.496 0.196 7.601 0.204 7.72 C 0.265 7.705 0.317 7.694 0.369 7.681 C 0.415 7.669 0.459 7.672 0.499 7.695 C 0.514 7.704 0.524 7.722 0.545 7.745 C 0.39 7.781 0.271 7.859 0.156 7.954 C 0.141 8.042 0.125 8.133 0.143 8.228 C 0.232 8.235 0.309 8.17 0.402 8.213 C 0.369 8.273 0.301 8.29 0.257 8.333 C 0.212 8.378 0.162 8.419 0.109 8.467 L 0.109 8.605 C 0.171 8.64 0.243 8.57 0.298 8.639 C 0.248 8.707 0.191 8.765 0.092 8.772 L 0.092 8.962 C 0.12 8.953 0.145 8.947 0.17 8.938 C 0.218 8.92 0.265 8.907 0.318 8.94 C 0.327 9.01 0.281 9.056 0.237 9.102 C 0.195 9.146 0.145 9.115 0.092 9.105 L 0.092 9.233 C 0.166 9.23 0.226 9.173 0.3 9.202 C 0.248 9.314 0.217 9.339 0.089 9.371 C 0.089 9.408 0.087 9.447 0.09 9.486 C 0.096 9.59 0.102 9.694 0.113 9.797 C 0.121 9.871 0.131 9.945 0.149 10.017 C 0.213 10.271 0.275 10.526 0.348 10.778 C 0.424 11.041 0.535 11.289 0.689 11.519 C 0.782 11.658 0.859 11.809 0.941 11.956 C 0.95 11.972 0.947 11.994 0.949 12.013 C 0.936 12.006 0.92 12.003 0.911 11.993 C 0.76 11.828 0.612 11.661 0.502 11.465 C 0.452 11.374 0.403 11.281 0.368 11.183 C 0.261 10.885 0.158 10.584 0.105 10.271 C 0.071 10.071 0.046 9.869 0.024 9.667 C -0.008 9.381 -0.005 9.094 0.015 8.807 C 0.033 8.54 0.039 8.272 0.055 8.005 C 0.083 7.555 0.136 7.108 0.214 6.663 C 0.382 5.703 0.754 4.822 1.234 3.981 C 1.31 3.848 1.385 3.713 1.461 3.58 C 1.503 3.506 1.542 3.431 1.589 3.361 C 1.801 3.044 2.007 2.722 2.244 2.422 C 2.327 2.317 2.417 2.216 2.511 2.122 C 2.731 1.9 2.958 1.685 3.179 1.463 C 3.284 1.358 3.382 1.246 3.481 1.134 C 3.573 1.029 3.634 0.904 3.701 0.782 C 3.813 0.578 3.934 0.379 4.051 0.177 C 4.143 0.13 4.235 0.082 4.328 0.037 C 4.371 0.016 4.416 -0.005 4.465 0.001 C 4.483 0.05 4.45 0.072 4.429 0.097 C 4.308 0.242 4.161 0.359 4.002 0.461 C 3.928 0.509 3.873 0.567 3.855 0.655 C 3.849 0.668 3.842 0.68 3.836 0.693 C 3.822 0.7 3.81 0.709 3.831 0.721 C 3.832 0.722 3.841 0.708 3.847 0.702 C 3.859 0.694 3.871 0.686 3.884 0.679 C 3.954 0.642 4.024 0.604 4.094 0.568 C 4.198 0.514 4.235 0.504 4.345 0.497 C 4.328 0.521 4.318 0.542 4.302 0.555 C 4.156 0.666 4.011 0.779 3.861 0.884 C 3.758 0.956 3.661 1.031 3.59 1.136 C 3.565 1.172 3.532 1.205 3.497 1.231 C 3.393 1.304 3.338 1.413 3.274 1.517 C 3.322 1.546 3.348 1.517 3.371 1.495 C 3.454 1.416 3.534 1.335 3.616 1.255 C 3.736 1.139 3.876 1.057 4.038 1.013 C 4.09 0.999 4.141 0.997 4.196 1.012 C 3.929 1.088 3.744 1.265 3.559 1.484 C 3.625 1.494 3.667 1.501 3.72 1.509 C 3.715 1.531 3.71 1.553 3.705 1.574 C 3.657 1.604 3.609 1.633 3.561 1.663 C 3.394 1.724 3.224 1.781 3.068 1.87 C 3.014 1.901 2.958 1.931 2.922 1.999 C 3.121 2.026 3.308 1.988 3.514 1.966 C 3.464 2.026 3.409 2.036 3.361 2.056 C 3.311 2.077 3.26 2.094 3.194 2.118 C 3.396 2.202 3.602 2.182 3.806 2.227 C 3.642 2.286 3.318 2.301 3.168 2.259 C 3.12 2.245 3.073 2.226 3.025 2.219 C 2.866 2.195 2.733 2.241 2.63 2.367 C 2.58 2.428 2.529 2.489 2.481 2.552 C 2.454 2.586 2.432 2.625 2.408 2.661 C 2.403 2.666 2.397 2.671 2.392 2.676 C 2.401 2.675 2.41 2.673 2.419 2.672 C 2.555 2.679 2.686 2.649 2.816 2.614 C 2.825 2.627 2.835 2.639 2.845 2.652 C 2.812 2.667 2.78 2.683 2.747 2.698 C 2.723 2.701 2.714 2.708 2.739 2.725 C 2.789 2.744 2.84 2.764 2.891 2.783 C 2.926 2.797 2.962 2.811 3.02 2.833 C 2.972 2.852 2.946 2.871 2.92 2.87 C 2.792 2.867 2.663 2.876 2.535 2.848 C 2.379 2.814 2.212 2.879 2.115 3.008 C 2.076 3.059 2.042 3.114 2.008 3.168 C 1.998 3.183 1.997 3.203 1.989 3.232 C 2.113 3.217 2.222 3.193 2.33 3.157 C 2.401 3.134 2.471 3.109 2.543 3.089 C 2.569 3.082 2.598 3.085 2.649 3.083 C 2.541 3.191 2.417 3.231 2.289 3.305 C 2.403 3.341 2.495 3.35 2.599 3.332 C 2.565 3.388 2.519 3.4 2.476 3.405 C 2.363 3.418 2.249 3.429 2.136 3.43 C 2.08 3.431 2.027 3.431 1.976 3.455 C 1.909 3.486 1.84 3.515 1.776 3.553 C 1.675 3.614 1.628 3.715 1.579 3.831 C 1.788 3.802 1.98 3.751 2.177 3.739 C 2.184 3.779 2.16 3.788 2.137 3.797 C 2.059 3.829 1.98 3.859 1.903 3.893 C 1.873 3.906 1.834 3.912 1.823 3.964 C 1.876 3.983 1.93 4.002 1.984 4.022 C 2.034 4.041 2.091 4.045 2.126 4.094 L 2.129 4.093 L 2.128 4.091 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.522,
    height: 1.604,
    viewBox: "0 0 4.522 1.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.504,
      top: 16.955,
      width: 4.522,
      height: 1.604,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.356 1.271 C 1.307 1.269 1.257 1.27 1.208 1.263 C 1.106 1.25 1.008 1.263 0.915 1.297 C 0.798 1.339 0.684 1.388 0.571 1.437 C 0.466 1.482 0.364 1.533 0.259 1.576 C 0.218 1.593 0.173 1.602 0.129 1.604 C 0.048 1.607 0 1.558 0 1.476 C 0 1.442 0.01 1.408 0.014 1.373 C 0.026 1.265 0.044 1.158 0.047 1.049 C 0.05 0.977 0.031 0.903 0.021 0.824 C 0.051 0.813 0.077 0.803 0.105 0.795 C 0.343 0.72 0.564 0.608 0.78 0.486 C 0.927 0.404 1.072 0.318 1.217 0.233 C 1.251 0.226 1.286 0.223 1.317 0.21 C 1.437 0.161 1.559 0.124 1.688 0.105 C 1.85 0.082 2.012 0.06 2.172 0.028 C 2.374 -0.012 2.578 -0.001 2.779 0.013 C 3.005 0.03 3.229 0.084 3.443 0.166 C 3.586 0.221 3.786 0.25 3.93 0.303 C 4 0.329 3.986 0.321 4.056 0.347 C 4.085 0.355 4.144 0.413 4.17 0.425 C 4.288 0.486 4.404 0.549 4.522 0.611 C 4.492 0.613 4.462 0.619 4.433 0.616 C 4.172 0.588 3.909 0.59 3.647 0.598 C 3.455 0.603 3.263 0.63 3.084 0.711 C 3.026 0.738 2.964 0.756 2.905 0.783 C 2.856 0.805 2.811 0.834 2.763 0.86 C 2.72 0.87 2.678 0.88 2.635 0.89 C 2.6 0.893 2.565 0.894 2.532 0.901 C 2.339 0.942 2.146 0.983 1.954 1.028 C 1.892 1.042 1.83 1.059 1.77 1.083 C 1.642 1.133 1.516 1.188 1.389 1.243 C 1.376 1.248 1.367 1.261 1.356 1.271 Z M 1.634 0.757 C 1.686 0.756 1.729 0.714 1.729 0.664 C 1.729 0.614 1.687 0.57 1.637 0.569 C 1.587 0.568 1.545 0.61 1.544 0.662 C 1.543 0.715 1.584 0.758 1.634 0.757 Z M 0.44 0.937 C 0.437 0.99 0.475 1.032 0.528 1.034 C 0.579 1.036 0.623 0.993 0.622 0.943 C 0.622 0.896 0.588 0.86 0.54 0.855 C 0.485 0.849 0.442 0.884 0.44 0.937 Z M 2.254 0.659 C 2.29 0.663 2.322 0.638 2.327 0.601 C 2.333 0.559 2.304 0.518 2.265 0.517 C 2.225 0.515 2.188 0.551 2.188 0.591 C 2.188 0.625 2.218 0.656 2.254 0.659 Z M 2.877 0.255 C 2.866 0.268 2.844 0.285 2.834 0.307 C 2.824 0.331 2.855 0.365 2.881 0.366 C 2.908 0.367 2.936 0.342 2.94 0.313 C 2.944 0.285 2.92 0.256 2.877 0.255 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.973,
    height: 4.884,
    viewBox: "0 0 5.973 4.884",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.714,
      top: 18.913,
      width: 5.973,
      height: 4.884,
      color: "rgb(255,233,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.093 2.803 C 4.109 2.796 4.133 2.794 4.141 2.782 C 4.275 2.597 4.409 2.413 4.539 2.225 C 4.814 1.829 5.03 1.399 5.249 0.971 C 5.406 0.665 5.597 0.383 5.818 0.12 C 5.853 0.079 5.893 0.041 5.933 0.004 C 5.941 -0.003 5.96 0.001 5.973 0.001 C 5.964 0.023 5.959 0.047 5.946 0.067 C 5.665 0.494 5.4 0.931 5.158 1.382 C 4.952 1.766 4.748 2.152 4.539 2.536 C 4.374 2.841 4.209 3.146 4.014 3.435 C 3.782 3.78 3.485 4.064 3.176 4.339 C 3.005 4.491 2.794 4.569 2.584 4.645 C 2.336 4.734 2.082 4.804 1.826 4.866 C 1.741 4.887 1.659 4.889 1.575 4.876 C 1.299 4.835 1.028 4.773 0.766 4.675 C 0.474 4.566 0.212 4.408 0 4.176 C 0.067 4.159 0.129 4.177 0.188 4.205 C 0.251 4.234 0.312 4.266 0.374 4.299 C 0.56 4.397 0.758 4.461 0.968 4.483 C 1.002 4.486 1.037 4.492 1.072 4.49 C 1.349 4.473 1.627 4.461 1.899 4.392 C 2.088 4.345 2.27 4.279 2.441 4.187 C 2.625 4.088 2.805 3.983 2.982 3.873 C 3.363 3.638 3.676 3.328 3.95 2.977 C 3.965 2.958 3.983 2.941 4 2.923 C 4.006 2.93 4.013 2.936 4.019 2.943 C 4.023 2.934 4.027 2.926 4.031 2.917 L 4.03 2.919 C 4.072 2.891 4.11 2.861 4.094 2.801 L 4.093 2.803 L 4.093 2.803 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.064,
    height: 1.505,
    viewBox: "0 0 5.064 1.505",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.261,
      top: 17.853,
      width: 5.064,
      height: 1.505,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.093 0.737 C 0.062 0.682 0.03 0.626 0 0.573 C 0.007 0.564 0.009 0.559 0.013 0.557 C 0.166 0.497 0.299 0.401 0.438 0.317 C 0.635 0.197 0.852 0.126 1.078 0.082 C 1.361 0.026 1.648 0.006 1.936 0 C 2.146 -0.004 2.352 0.022 2.554 0.079 C 2.642 0.124 2.737 0.158 2.816 0.217 C 2.94 0.309 3.072 0.385 3.213 0.446 C 3.253 0.464 3.292 0.487 3.329 0.512 C 3.502 0.628 3.675 0.744 3.846 0.862 C 4.202 1.107 4.567 1.336 4.984 1.466 C 5.012 1.475 5.037 1.492 5.064 1.505 C 5 1.503 4.935 1.506 4.871 1.499 C 4.739 1.485 4.607 1.468 4.475 1.446 C 4.276 1.414 4.075 1.382 3.883 1.315 C 3.909 1.302 3.94 1.295 3.96 1.276 C 4.005 1.235 4.012 1.177 3.985 1.13 C 3.953 1.075 3.892 1.05 3.835 1.067 C 3.777 1.085 3.744 1.137 3.752 1.204 C 3.754 1.228 3.766 1.25 3.773 1.274 C 3.712 1.254 3.65 1.236 3.59 1.213 C 3.442 1.156 3.296 1.092 3.146 1.04 C 2.887 0.951 2.634 0.85 2.385 0.736 C 2.25 0.674 2.11 0.624 1.965 0.585 C 1.634 0.498 1.298 0.476 0.959 0.494 C 0.654 0.511 0.359 0.573 0.094 0.737 L 0.093 0.737 Z M 2.587 0.646 C 2.596 0.631 2.618 0.611 2.624 0.587 C 2.631 0.557 2.601 0.53 2.57 0.53 C 2.535 0.53 2.506 0.562 2.509 0.599 C 2.512 0.629 2.541 0.651 2.587 0.646 L 2.587 0.646 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.430,
    height: 3.808,
    viewBox: "0 0 3.430 3.808",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.337,
      top: 18.893,
      width: 3.43,
      height: 3.808,
      color: "rgb(255,233,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.215 3.424 C 0.453 3.477 0.689 3.535 0.928 3.583 C 1.106 3.619 1.285 3.597 1.461 3.557 C 1.782 3.484 2.09 3.373 2.388 3.235 C 2.534 3.167 2.665 3.078 2.781 2.967 C 2.838 2.912 2.895 2.857 2.955 2.805 C 3.104 2.675 3.184 2.508 3.218 2.317 C 3.249 2.148 3.245 2.148 3.168 1.992 C 3.012 1.676 2.795 1.407 2.533 1.173 C 2.403 1.058 2.272 0.944 2.14 0.83 C 1.913 0.635 1.656 0.483 1.392 0.344 C 1.374 0.335 1.356 0.329 1.332 0.32 C 1.307 0.344 1.281 0.367 1.258 0.391 C 0.942 0.709 0.573 0.948 0.161 1.122 C 0.121 1.139 0.075 1.145 0.032 1.157 C 0.023 1.129 0.013 1.101 0 1.064 C 0.023 1.052 0.044 1.043 0.064 1.032 C 0.142 0.988 0.222 0.948 0.296 0.899 C 0.417 0.821 0.531 0.733 0.652 0.655 C 0.895 0.5 1.08 0.288 1.253 0.063 C 1.268 0.044 1.28 0.022 1.294 0 C 1.311 0.004 1.327 0.004 1.338 0.012 C 1.776 0.33 2.214 0.647 2.651 0.966 C 2.795 1.072 2.929 1.191 3.046 1.327 C 3.213 1.519 3.316 1.74 3.344 1.994 C 3.351 2.058 3.358 2.122 3.363 2.187 C 3.368 2.261 3.375 2.335 3.412 2.402 C 3.436 2.444 3.435 2.487 3.415 2.53 C 3.395 2.575 3.375 2.621 3.351 2.664 C 3.159 3.007 3.115 3.059 2.795 3.288 C 2.535 3.474 2.254 3.622 1.941 3.697 C 1.576 3.784 1.207 3.824 0.832 3.803 C 0.682 3.795 0.539 3.758 0.399 3.704 C 0.334 3.679 0.269 3.658 0.194 3.632 C 0.174 3.603 0.201 3.565 0.201 3.527 C 0.202 3.493 0.21 3.458 0.215 3.424 L 0.215 3.424 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.725,
    height: 2.930,
    viewBox: "0 0 3.725 2.930",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.249,
      top: 3.147,
      width: 3.725,
      height: 2.93,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.667 0.303 C 3.581 0.398 3.494 0.493 3.41 0.59 C 3.394 0.607 3.379 0.631 3.376 0.653 C 3.368 0.731 3.316 0.777 3.258 0.817 C 3.165 0.881 3.069 0.945 2.971 1.002 C 2.698 1.161 2.467 1.371 2.25 1.596 C 2.216 1.632 2.186 1.672 2.158 1.713 C 2.018 1.911 1.892 2.118 1.795 2.342 C 1.777 2.383 1.754 2.421 1.732 2.459 C 1.728 2.467 1.717 2.47 1.706 2.478 C 1.655 2.438 1.638 2.383 1.636 2.322 C 1.633 2.219 1.629 2.114 1.637 2.011 C 1.64 1.958 1.663 1.905 1.685 1.857 C 1.716 1.789 1.755 1.726 1.79 1.661 C 1.798 1.65 1.807 1.639 1.815 1.627 C 1.82 1.625 1.825 1.624 1.828 1.621 C 1.829 1.619 1.828 1.615 1.828 1.611 C 1.824 1.617 1.821 1.623 1.817 1.629 C 1.802 1.633 1.787 1.638 1.772 1.642 C 1.7 1.681 1.628 1.72 1.556 1.758 C 1.505 1.786 1.453 1.812 1.402 1.838 C 1.391 1.83 1.381 1.822 1.37 1.813 C 1.452 1.75 1.534 1.685 1.618 1.623 C 1.984 1.357 2.364 1.112 2.753 0.883 C 2.907 0.792 3.06 0.699 3.211 0.604 C 3.265 0.57 3.314 0.526 3.361 0.483 C 3.377 0.468 3.382 0.441 3.392 0.419 C 3.33 0.382 3.28 0.405 3.232 0.431 C 3.14 0.481 3.048 0.53 2.959 0.584 C 2.517 0.851 2.071 1.112 1.649 1.412 C 1.41 1.582 1.183 1.765 0.961 1.958 C 0.642 2.236 0.361 2.551 0.072 2.858 C 0.056 2.876 0.038 2.892 0 2.93 C 0.008 2.884 0.008 2.862 0.016 2.845 C 0.208 2.46 0.447 2.108 0.758 1.809 C 0.861 1.71 0.983 1.63 1.098 1.543 C 1.356 1.349 1.613 1.155 1.874 0.964 C 1.974 0.891 2.077 0.822 2.186 0.762 C 2.659 0.499 3.156 0.282 3.636 0.032 C 3.663 0.019 3.692 0.011 3.72 0 C 3.734 0.113 3.717 0.213 3.668 0.303 L 3.667 0.303 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.841,
    height: 6.068,
    viewBox: "0 0 4.841 6.068",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.552,
      top: 17.452,
      width: 4.841,
      height: 6.068,
      color: "rgb(255,233,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.464 6.068 C 4.422 5.946 4.437 5.822 4.465 5.701 C 4.521 5.464 4.561 5.226 4.577 4.982 C 4.584 4.879 4.603 4.776 4.62 4.674 C 4.673 4.355 4.714 4.035 4.691 3.712 C 4.679 3.529 4.66 3.346 4.624 3.167 C 4.58 2.946 4.48 2.744 4.356 2.557 C 4.145 2.239 3.931 1.922 3.705 1.614 C 3.5 1.335 3.233 1.12 2.94 0.937 C 2.731 0.783 2.51 0.65 2.268 0.555 C 1.944 0.429 1.611 0.329 1.274 0.241 C 1.12 0.201 0.96 0.192 0.803 0.173 C 0.579 0.146 0.357 0.138 0.134 0.172 C 0.09 0.179 0.045 0.175 0 0.176 C 0.175 0.102 0.362 0.069 0.548 0.046 C 0.76 0.02 0.973 -0.009 1.187 0.003 C 1.562 0.022 1.93 0.081 2.272 0.243 C 2.845 0.515 3.378 0.85 3.827 1.304 C 4.023 1.503 4.193 1.722 4.34 1.959 C 4.401 2.057 4.446 2.161 4.477 2.271 C 4.585 2.662 4.693 3.054 4.798 3.446 C 4.847 3.625 4.849 3.809 4.83 3.992 C 4.816 4.13 4.791 4.267 4.773 4.404 C 4.715 4.852 4.63 5.294 4.541 5.736 C 4.518 5.847 4.49 5.957 4.464 6.068 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.066,
    height: 2.746,
    viewBox: "0 0 4.066 2.746",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.979,
      top: 14.249,
      width: 4.066,
      height: 2.746,
      color: "rgb(150,100,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.066 2.746 C 3.831 2.588 3.595 2.432 3.362 2.273 C 3.009 2.031 2.644 1.81 2.26 1.622 C 2.18 1.583 2.106 1.532 2.031 1.484 C 1.572 1.186 1.152 0.836 0.706 0.521 C 0.508 0.38 0.311 0.238 0.114 0.095 C 0.074 0.066 0.038 0.032 0 0 C 0.167 0.048 0.334 0.096 0.501 0.145 C 0.936 0.271 1.366 0.409 1.772 0.613 C 1.959 0.708 2.139 0.811 2.306 0.937 C 2.577 1.141 2.825 1.371 3.05 1.623 C 3.365 1.975 3.669 2.335 4.01 2.662 C 4.034 2.684 4.048 2.718 4.066 2.746 L 4.066 2.746 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.007,
    height: 5.925,
    viewBox: "0 0 3.007 5.925",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.652,
      top: 12.308,
      width: 3.007,
      height: 5.925,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.173 0.085 C 0.387 0.452 0.478 0.857 0.552 1.268 C 0.631 1.711 0.627 2.157 0.605 2.603 C 0.599 2.737 0.583 2.87 0.577 3.004 C 0.559 3.422 0.646 3.822 0.793 4.211 C 0.849 4.358 0.92 4.502 0.994 4.642 C 1.114 4.869 1.284 5.057 1.497 5.202 C 1.681 5.328 1.869 5.45 2.063 5.561 C 2.336 5.718 2.635 5.813 2.939 5.893 C 2.962 5.899 2.984 5.911 3.007 5.92 C 2.75 5.94 2.502 5.891 2.255 5.831 C 1.78 5.714 1.347 5.514 0.967 5.203 C 0.818 5.082 0.694 4.943 0.608 4.771 C 0.553 4.661 0.499 4.549 0.452 4.434 C 0.376 4.244 0.337 4.046 0.336 3.84 C 0.335 3.596 0.352 3.355 0.39 3.114 C 0.459 2.678 0.502 2.24 0.502 1.797 C 0.502 1.4 0.424 1.02 0.297 0.647 C 0.22 0.422 0.13 0.202 0 0 C 0.058 0.028 0.115 0.057 0.172 0.085 L 0.173 0.085 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.327,
    height: 5.473,
    viewBox: "0 0 4.327 5.473",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.282,
      top: 6.773,
      width: 4.327,
      height: 5.473,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.258 3.39 C 1.267 3.379 1.277 3.369 1.286 3.359 C 1.297 3.347 1.308 3.336 1.318 3.324 C 1.329 3.305 1.338 3.285 1.351 3.267 C 1.357 3.257 1.369 3.25 1.378 3.242 C 1.425 3.197 1.474 3.156 1.497 3.092 C 1.562 3.046 1.613 2.988 1.653 2.92 C 1.66 2.914 1.668 2.908 1.675 2.901 C 2.004 2.627 2.294 2.315 2.589 2.006 C 2.706 1.884 2.812 1.753 2.896 1.606 C 3.013 1.402 3.162 1.223 3.316 1.047 C 3.476 0.864 3.647 0.693 3.825 0.526 C 3.962 0.397 4.082 0.25 4.21 0.112 C 4.246 0.074 4.272 0.023 4.327 0 C 4.315 0.128 4.227 0.321 3.991 0.739 C 3.97 0.75 3.944 0.757 3.929 0.772 C 3.881 0.823 3.836 0.876 3.791 0.929 C 3.676 1.065 3.563 1.204 3.447 1.339 C 3.172 1.659 2.895 1.978 2.619 2.296 C 2.56 2.363 2.5 2.43 2.437 2.492 C 2.317 2.611 2.194 2.726 2.073 2.845 C 1.775 3.138 1.538 3.483 1.277 3.807 C 1.146 3.969 1.032 4.144 0.883 4.292 C 0.855 4.32 0.833 4.353 0.809 4.385 C 0.629 4.634 0.449 4.884 0.27 5.133 C 0.189 5.246 0.11 5.36 0.03 5.473 C 0.02 5.461 0.01 5.449 0 5.437 C 0.084 5.281 0.162 5.122 0.253 4.97 C 0.444 4.649 0.624 4.32 0.84 4.013 C 0.849 4.001 0.854 3.987 0.861 3.974 C 0.867 3.966 0.872 3.957 0.877 3.949 C 0.958 3.851 1.031 3.747 1.079 3.628 C 1.108 3.618 1.106 3.592 1.108 3.568 C 1.145 3.566 1.159 3.539 1.168 3.509 C 1.178 3.489 1.188 3.469 1.198 3.45 C 1.232 3.444 1.249 3.421 1.258 3.39 L 1.258 3.39 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.632,
    height: 4.556,
    viewBox: "0 0 2.632 4.556",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.308,
      top: 0.429,
      width: 2.632,
      height: 4.556,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.04 1.184 C 0.994 1.229 0.942 1.269 0.904 1.32 C 0.708 1.584 0.538 1.863 0.436 2.178 C 0.331 2.504 0.298 2.836 0.327 3.176 C 0.329 3.201 0.333 3.225 0.339 3.25 C 0.404 3.536 0.506 3.809 0.652 4.066 C 0.732 4.208 0.805 4.354 0.88 4.5 C 0.889 4.517 0.889 4.537 0.894 4.556 C 0.728 4.411 0.591 4.241 0.47 4.059 C 0.366 3.902 0.28 3.734 0.19 3.568 C 0.092 3.386 0.058 3.185 0.03 2.983 C 0.019 2.905 0.014 2.825 0.007 2.746 C -0.023 2.426 0.044 2.127 0.198 1.844 C 0.342 1.58 0.52 1.347 0.731 1.131 C 1.238 0.612 1.85 0.265 2.525 0.015 C 2.548 0.007 2.573 0.005 2.597 0 C 2.609 0.002 2.621 0.003 2.632 0.004 C 2.595 0.027 2.559 0.055 2.519 0.072 C 2.359 0.142 2.213 0.232 2.072 0.334 C 1.847 0.496 1.611 0.643 1.404 0.829 C 1.283 0.937 1.169 1.055 1.053 1.168 C 1.048 1.173 1.044 1.178 1.04 1.184 L 1.04 1.184 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.058,
    height: 5.769,
    viewBox: "0 0 3.058 5.769",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.679,
      top: 7.67,
      width: 3.058,
      height: 5.769,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.058 0 C 3.044 0.047 3.033 0.096 3.016 0.142 C 2.925 0.396 2.875 0.657 2.886 0.928 C 2.89 1.036 2.905 1.144 2.916 1.253 C 2.929 1.391 2.947 1.528 2.956 1.666 C 2.982 2.014 2.966 2.359 2.885 2.699 C 2.836 2.902 2.785 3.102 2.718 3.3 C 2.615 3.605 2.454 3.874 2.245 4.117 C 2.145 4.234 2.048 4.353 1.949 4.471 C 1.92 4.505 1.891 4.539 1.859 4.571 C 1.585 4.845 1.296 5.101 0.957 5.295 C 0.901 5.327 0.845 5.36 0.792 5.397 C 0.685 5.469 0.571 5.528 0.45 5.576 C 0.344 5.619 0.243 5.671 0.139 5.717 C 0.094 5.737 0.046 5.752 0 5.769 C 0.096 5.699 0.192 5.629 0.288 5.559 C 0.699 5.263 1.108 4.965 1.485 4.627 C 2.052 4.119 2.459 3.507 2.674 2.774 C 2.72 2.617 2.742 2.456 2.764 2.293 C 2.814 1.93 2.763 1.573 2.719 1.214 C 2.687 0.956 2.687 0.7 2.766 0.449 C 2.802 0.334 2.85 0.227 2.918 0.128 C 2.954 0.075 2.992 0.022 3.058 0 L 3.058 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.949,
    height: 3.410,
    viewBox: "0 0 4.949 3.410",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.482,
      top: 13.83,
      width: 4.949,
      height: 3.41,
      color: "rgb(255,233,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.563 3.166 C 4.545 3.137 4.531 3.104 4.507 3.081 C 4.166 2.754 3.862 2.394 3.547 2.042 C 3.322 1.79 3.074 1.561 2.803 1.357 C 2.636 1.231 2.456 1.127 2.269 1.033 C 1.863 0.828 1.433 0.691 0.998 0.564 C 0.831 0.516 0.664 0.468 0.497 0.419 C 0.338 0.316 0.098 0.114 0 0 C 0.032 0.005 0.054 0.005 0.075 0.011 C 0.322 0.085 0.569 0.16 0.817 0.235 C 1.202 0.352 1.581 0.488 1.948 0.653 C 2.275 0.8 2.591 0.968 2.883 1.178 C 2.955 1.23 3.028 1.284 3.091 1.346 C 3.278 1.531 3.46 1.721 3.645 1.908 C 4.009 2.276 4.315 2.693 4.651 3.085 C 4.722 3.168 4.878 3.308 4.949 3.39 C 4.94 3.399 4.891 3.444 4.838 3.36 C 4.746 3.295 4.655 3.231 4.563 3.166 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.026,
    height: 3.952,
    viewBox: "0 0 2.026 3.952",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.772,
      top: 15.252,
      width: 2.026,
      height: 3.952,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.562 0 C 1.551 0.026 1.544 0.055 1.528 0.078 C 1.441 0.199 1.352 0.318 1.264 0.437 C 1.002 0.794 0.762 1.164 0.57 1.563 C 0.472 1.768 0.368 1.972 0.323 2.198 C 0.303 2.3 0.286 2.403 0.278 2.506 C 0.266 2.68 0.316 2.84 0.409 2.986 C 0.475 3.09 0.551 3.188 0.62 3.291 C 0.678 3.378 0.76 3.426 0.859 3.456 C 1.073 3.521 1.286 3.587 1.497 3.661 C 1.614 3.702 1.726 3.755 1.838 3.809 C 1.91 3.842 1.978 3.884 2.026 3.952 C 1.921 3.922 1.816 3.894 1.711 3.864 C 1.563 3.821 1.411 3.799 1.258 3.788 C 1.079 3.775 0.905 3.739 0.733 3.693 C 0.578 3.651 0.437 3.581 0.315 3.475 C 0.314 3.469 0.31 3.463 0.303 3.46 L 0.303 3.461 C 0.284 3.439 0.265 3.417 0.247 3.396 L 0.248 3.397 C 0.199 3.275 0.112 3.176 0.043 3.067 C -0.015 2.918 -0.004 2.764 0.015 2.612 C 0.046 2.366 0.112 2.129 0.219 1.903 C 0.402 1.518 0.607 1.146 0.874 0.811 C 1.006 0.645 1.129 0.47 1.263 0.305 C 1.353 0.194 1.438 0.078 1.562 0 L 1.562 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.844,
    height: 3.149,
    viewBox: "0 0 2.844 3.149",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.709,
      top: 2.581,
      width: 2.844,
      height: 3.149,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.149 C 0.059 3.114 0.116 3.072 0.179 3.044 C 0.487 2.909 0.748 2.703 1.009 2.498 C 1.028 2.483 1.046 2.465 1.066 2.451 C 1.345 2.266 1.586 2.038 1.83 1.812 C 1.969 1.684 2.087 1.537 2.205 1.391 C 2.246 1.341 2.285 1.29 2.325 1.239 C 2.524 0.99 2.643 0.705 2.703 0.394 C 2.729 0.263 2.75 0.131 2.773 0 C 2.829 0.158 2.864 0.319 2.832 0.488 C 2.829 0.506 2.833 0.526 2.833 0.546 C 2.8 0.665 2.778 0.788 2.732 0.902 C 2.656 1.089 2.575 1.276 2.478 1.454 C 2.374 1.645 2.233 1.813 2.072 1.963 C 2.04 1.993 2.005 2.021 1.974 2.053 C 1.708 2.324 1.395 2.534 1.073 2.73 C 0.771 2.915 0.441 3.037 0.102 3.136 C 0.07 3.146 0.034 3.145 0 3.149 L 0 3.149 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.092,
    height: 2.229,
    viewBox: "0 0 2.092 2.229",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.05,
      top: 17.814,
      width: 2.092,
      height: 2.229,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.007 2.229 C 1.929 2.111 1.89 1.982 1.879 1.84 C 1.868 1.686 1.863 1.535 1.874 1.381 C 1.883 1.253 1.868 1.124 1.857 0.996 C 1.854 0.954 1.834 0.911 1.812 0.872 C 1.772 0.799 1.704 0.775 1.623 0.782 C 1.463 0.794 1.311 0.828 1.169 0.908 C 0.991 1.008 0.805 1.089 0.607 1.14 C 0.602 1.142 0.597 1.143 0.592 1.144 C 0.341 1.209 0.144 1.12 0.097 0.809 C 0.08 0.701 0.082 0.592 0.116 0.485 C 0.14 0.41 0.153 0.332 0.152 0.252 C 0.152 0.154 0.12 0.079 0.034 0.028 C 0.022 0.02 0.012 0.009 0 0 C 0.059 0.005 0.119 0.004 0.178 0.016 C 0.29 0.037 0.329 0.084 0.336 0.197 C 0.342 0.296 0.337 0.394 0.307 0.491 C 0.287 0.556 0.272 0.626 0.271 0.693 C 0.268 0.856 0.381 0.974 0.543 0.991 C 0.666 1.004 0.781 0.977 0.884 0.912 C 1.102 0.774 1.346 0.709 1.59 0.642 C 1.71 0.608 1.825 0.626 1.936 0.683 C 2.033 0.733 2.084 0.812 2.091 0.919 C 2.093 0.963 2.092 1.008 2.086 1.052 C 2.065 1.209 2.039 1.365 2.017 1.521 C 2.002 1.624 1.99 1.727 1.978 1.83 C 1.968 1.926 1.989 2.018 2.011 2.109 C 2.02 2.142 2.029 2.176 2.038 2.209 C 2.028 2.216 2.018 2.222 2.007 2.229 L 2.007 2.229 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.275,
    height: 0.637,
    viewBox: "0 0 3.275 0.637",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.39,
      top: 19.892,
      width: 3.275,
      height: 0.637,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.099 0 C 0.192 0.014 0.286 0.026 0.378 0.044 C 0.516 0.07 0.655 0.077 0.794 0.071 C 1.047 0.059 1.301 0.035 1.554 0.041 C 1.941 0.05 2.328 0.087 2.698 0.216 C 2.815 0.256 2.927 0.311 3.041 0.36 C 3.119 0.45 3.197 0.541 3.275 0.631 C 3.259 0.633 3.243 0.635 3.227 0.637 C 3.212 0.633 3.193 0.635 3.184 0.626 C 3.073 0.516 2.932 0.472 2.783 0.449 C 2.641 0.428 2.498 0.409 2.355 0.401 C 2.067 0.385 1.783 0.337 1.499 0.292 C 1.327 0.265 1.155 0.246 0.981 0.241 C 0.722 0.233 0.469 0.182 0.221 0.11 C 0.145 0.088 0.073 0.052 0 0.023 C 0.033 0.015 0.066 0.008 0.099 0 L 0.099 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.986,
    height: 2.908,
    viewBox: "0 0 1.986 2.908",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.512,
      top: 4.754,
      width: 1.986,
      height: 2.908,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.982 2.908 C 1.929 2.77 1.873 2.633 1.822 2.494 C 1.741 2.273 1.618 2.08 1.457 1.907 C 1.351 1.791 1.267 1.655 1.173 1.527 C 0.927 1.192 0.655 0.879 0.358 0.587 C 0.234 0.466 0.119 0.336 0 0.21 C 0.035 0.14 0.084 0.079 0.133 0 C 0.184 0.059 0.226 0.107 0.267 0.154 C 0.306 0.199 0.348 0.242 0.384 0.289 C 0.515 0.458 0.658 0.615 0.811 0.765 C 0.924 0.876 1.022 1.002 1.126 1.122 C 1.184 1.19 1.235 1.264 1.296 1.329 C 1.4 1.438 1.479 1.562 1.551 1.693 C 1.631 1.836 1.721 1.973 1.8 2.116 C 1.859 2.224 1.91 2.338 1.96 2.451 C 1.975 2.486 1.984 2.527 1.985 2.566 C 1.987 2.68 1.983 2.794 1.982 2.908 L 1.982 2.908 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.441,
    height: 1.804,
    viewBox: "0 0 2.441 1.804",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.855,
      top: 9.592,
      width: 2.441,
      height: 1.804,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.441 0.006 C 2.398 0.188 2.298 0.343 2.195 0.495 C 2.091 0.647 1.974 0.789 1.841 0.916 C 1.679 1.07 1.517 1.224 1.351 1.373 C 1.232 1.48 1.097 1.564 0.956 1.639 C 0.85 1.695 0.744 1.749 0.638 1.804 C 0.619 1.798 0.599 1.794 0.581 1.786 C 0.411 1.706 0.232 1.676 0.044 1.696 C 0.03 1.697 0.015 1.696 0 1.696 C -0.002 1.662 0.026 1.656 0.046 1.645 C 0.239 1.54 0.445 1.464 0.652 1.396 C 1.026 1.273 1.35 1.064 1.659 0.827 C 1.836 0.691 2.008 0.548 2.155 0.378 C 2.256 0.261 2.339 0.132 2.417 0 C 2.424 0.004 2.432 0.006 2.44 0.006 L 2.441 0.006 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.266,
    height: 0.763,
    viewBox: "0 0 3.266 0.763",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.414,
      top: 20.529,
      width: 3.266,
      height: 0.763,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.016 C 0.123 0.01 0.247 -0.002 0.37 0 C 0.594 0.005 0.817 0.019 1.04 0.027 C 1.144 0.03 1.249 0.032 1.353 0.027 C 1.543 0.017 1.73 0.046 1.917 0.065 C 1.996 0.073 2.075 0.082 2.153 0.096 C 2.433 0.145 2.701 0.236 2.96 0.351 C 2.99 0.365 3.024 0.371 3.056 0.38 L 3.054 0.379 C 3.059 0.414 3.091 0.415 3.114 0.426 C 3.195 0.524 3.238 0.636 3.266 0.759 C 3.247 0.761 3.235 0.765 3.23 0.761 C 3.019 0.586 2.765 0.496 2.509 0.416 C 2.176 0.313 1.833 0.257 1.486 0.225 C 1.125 0.192 0.764 0.155 0.404 0.112 C 0.267 0.095 0.128 0.076 0 0.016 L 0 0.016 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.856,
    height: 1.443,
    viewBox: "0 0 2.856 1.443",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.815,
      top: 17.933,
      width: 2.856,
      height: 1.443,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.617 1.443 C 2.581 1.437 2.546 1.431 2.51 1.426 C 2.484 1.413 2.458 1.396 2.431 1.387 C 2.013 1.257 1.649 1.028 1.293 0.782 C 1.121 0.664 0.948 0.549 0.775 0.433 C 0.738 0.408 0.7 0.385 0.659 0.367 C 0.518 0.305 0.386 0.229 0.262 0.137 C 0.184 0.079 0.088 0.045 0 0 C 0.117 -0.001 0.225 0.039 0.333 0.073 C 0.519 0.13 0.697 0.206 0.87 0.294 C 1.193 0.458 1.51 0.635 1.805 0.846 C 2.099 1.057 2.42 1.208 2.761 1.324 C 2.788 1.334 2.815 1.345 2.856 1.361 C 2.833 1.377 2.82 1.392 2.805 1.397 C 2.743 1.414 2.68 1.428 2.617 1.443 L 2.617 1.443 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.956,
    height: 3.157,
    viewBox: "0 0 1.956 3.157",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.204,
      top: 16.506,
      width: 1.956,
      height: 3.157,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.035 0 C 0.129 0.292 0.221 0.584 0.317 0.875 C 0.399 1.125 0.502 1.365 0.633 1.594 C 0.765 1.827 0.903 2.056 1.061 2.272 C 1.201 2.464 1.348 2.652 1.538 2.8 C 1.651 2.889 1.761 2.981 1.872 3.073 C 1.902 3.099 1.928 3.129 1.956 3.157 C 1.72 3.074 1.506 2.95 1.31 2.796 C 1.005 2.555 0.774 2.255 0.593 1.914 C 0.482 1.703 0.392 1.484 0.321 1.256 C 0.227 0.954 0.123 0.654 0.055 0.345 C 0.032 0.239 0.018 0.131 0 0.024 C 0.012 0.016 0.023 0.008 0.035 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.082,
    height: 2.343,
    viewBox: "0 0 1.082 2.343",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.089,
      top: 1.13,
      width: 1.082,
      height: 2.343,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.079 0.04 C 0.928 0.203 0.766 0.359 0.627 0.533 C 0.275 0.975 0.174 1.48 0.279 2.03 C 0.291 2.093 0.318 2.152 0.336 2.214 C 0.348 2.257 0.356 2.3 0.367 2.343 C 0.237 2.191 0.144 2.017 0.072 1.833 C 0.039 1.747 0.02 1.653 0.01 1.561 C -0.008 1.379 -0.003 1.195 0.035 1.016 C 0.052 0.935 0.087 0.857 0.123 0.783 C 0.171 0.685 0.234 0.596 0.314 0.521 C 0.348 0.509 0.385 0.501 0.394 0.457 L 0.392 0.459 C 0.503 0.409 0.605 0.345 0.697 0.265 C 0.816 0.163 0.937 0.065 1.082 0 C 1.081 0.013 1.08 0.026 1.079 0.039 L 1.079 0.04 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.058,
    height: 1.704,
    viewBox: "0 0 2.058 1.704",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.863,
      top: 20.493,
      width: 2.058,
      height: 1.704,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.688 1.579 C 1.512 1.34 1.33 1.106 1.11 0.906 C 0.967 0.776 0.819 0.653 0.673 0.527 C 0.639 0.497 0.603 0.47 0.572 0.439 C 0.413 0.28 0.232 0.152 0.036 0.043 C 0.024 0.036 0.012 0.026 0 0.018 C 0.009 0.012 0.018 0.006 0.027 0 C 0.084 0.016 0.143 0.027 0.197 0.049 C 0.463 0.161 0.718 0.293 0.946 0.472 C 0.958 0.481 0.971 0.489 0.981 0.499 C 1.246 0.752 1.531 0.985 1.752 1.281 C 1.836 1.392 1.924 1.498 2.009 1.608 C 2.029 1.635 2.04 1.668 2.056 1.698 L 2.058 1.696 C 2.049 1.699 2.038 1.706 2.031 1.703 C 1.917 1.663 1.802 1.621 1.688 1.579 L 1.688 1.579 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.724,
    height: 0.493,
    viewBox: "0 0 2.724 0.493",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.721,
      top: 16.787,
      width: 2.724,
      height: 0.493,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.658 0.493 C 2.514 0.44 2.369 0.389 2.226 0.334 C 2.011 0.253 1.788 0.198 1.561 0.182 C 1.36 0.167 1.157 0.156 0.955 0.196 C 0.794 0.228 0.632 0.25 0.47 0.273 C 0.342 0.292 0.22 0.329 0.1 0.378 C 0.069 0.391 0.033 0.394 0 0.401 C 0.036 0.376 0.068 0.344 0.108 0.325 C 0.256 0.256 0.407 0.195 0.555 0.126 C 0.781 0.019 1.015 -0.019 1.263 0.009 C 1.782 0.068 2.27 0.217 2.724 0.474 C 2.702 0.48 2.68 0.487 2.658 0.493 L 2.658 0.493 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.347,
    height: 1.126,
    viewBox: "0 0 2.347 1.126",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.001,
      top: 16.478,
      width: 2.347,
      height: 1.126,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.126 C -0.001 1.078 0.027 1.053 0.069 1.041 C 0.135 1.022 0.202 0.999 0.27 0.989 C 0.384 0.971 0.49 0.929 0.593 0.882 C 0.697 0.834 0.803 0.796 0.916 0.772 C 1.058 0.741 1.182 0.664 1.3 0.583 C 1.423 0.499 1.551 0.424 1.687 0.362 C 1.831 0.296 1.97 0.221 2.097 0.125 C 2.171 0.068 2.249 0.013 2.347 0 C 2.289 0.046 2.234 0.097 2.174 0.138 C 1.919 0.311 1.663 0.48 1.408 0.652 C 1.142 0.831 0.855 0.962 0.539 1.026 C 0.413 1.051 0.288 1.086 0.162 1.111 C 0.109 1.122 0.054 1.121 0 1.126 L 0 1.126 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.686,
    height: 0.814,
    viewBox: "0 0 1.686 0.814",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.198,
      top: 12.766,
      width: 1.686,
      height: 0.814,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.404 C 0.102 0.385 0.189 0.425 0.264 0.482 C 0.369 0.561 0.49 0.583 0.612 0.606 C 0.743 0.63 0.868 0.592 0.991 0.549 C 1.026 0.537 1.057 0.507 1.087 0.481 C 1.203 0.381 1.318 0.278 1.434 0.178 C 1.492 0.128 1.539 0.072 1.566 0 C 1.604 0 1.642 0 1.686 0 C 1.68 0.022 1.679 0.039 1.671 0.048 C 1.437 0.303 1.203 0.558 0.968 0.814 C 0.773 0.766 0.593 0.697 0.414 0.628 C 0.326 0.595 0.238 0.558 0.155 0.515 C 0.1 0.486 0.052 0.442 0 0.404 L 0 0.404 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.264,
    height: 0.764,
    viewBox: "0 0 1.264 0.764",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.846,
      top: 13.586,
      width: 1.264,
      height: 0.764,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.387 C 0.057 0.373 0.089 0.419 0.127 0.444 C 0.254 0.527 0.392 0.571 0.544 0.571 C 0.608 0.571 0.659 0.557 0.697 0.503 C 0.754 0.423 0.812 0.344 0.871 0.266 C 0.94 0.176 1.01 0.089 1.08 0 C 1.129 0.006 1.179 0.011 1.228 0.019 C 1.241 0.021 1.252 0.032 1.264 0.04 C 1.107 0.26 0.73 0.648 0.56 0.764 C 0.349 0.675 0.145 0.575 0 0.387 L 0 0.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.640,
    height: 0.813,
    viewBox: "0 0 1.640 0.813",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.817,
      top: 15.396,
      width: 1.64,
      height: 0.813,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.027 0.663 C 0.018 0.643 0.009 0.623 0 0.602 C 0.186 0.66 0.378 0.672 0.571 0.677 C 0.813 0.682 0.855 0.671 1.043 0.516 C 1.123 0.45 1.194 0.374 1.27 0.304 C 1.367 0.213 1.464 0.122 1.563 0.033 C 1.583 0.015 1.605 -0.012 1.64 0.006 C 1.623 0.035 1.612 0.068 1.59 0.092 C 1.457 0.239 1.325 0.387 1.186 0.528 C 1.106 0.61 1.013 0.677 0.9 0.71 C 0.815 0.735 0.729 0.761 0.644 0.788 C 0.526 0.825 0.409 0.819 0.293 0.78 C 0.223 0.757 0.156 0.725 0.087 0.697 C 0.073 0.673 0.055 0.657 0.025 0.662 L 0.027 0.663 L 0.027 0.663 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.579,
    height: 0.237,
    viewBox: "0 0 1.579 0.237",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.981,
      top: 13.713,
      width: 1.579,
      height: 0.237,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.579 0.233 C 1.477 0.249 1.382 0.211 1.285 0.193 C 1.05 0.15 0.815 0.122 0.575 0.159 C 0.384 0.188 0.192 0.207 0 0.23 C 0.069 0.176 0.135 0.116 0.209 0.068 C 0.249 0.043 0.301 0.034 0.349 0.024 C 0.596 -0.023 0.84 0.002 1.081 0.072 C 1.214 0.11 1.346 0.151 1.479 0.188 C 1.511 0.197 1.546 0.198 1.579 0.203 L 1.577 0.201 C 1.578 0.211 1.578 0.222 1.579 0.233 L 1.579 0.233 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.352,
    height: 0.374,
    viewBox: "0 0 1.352 0.374",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.946,
      top: 14.434,
      width: 1.352,
      height: 0.374,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.135 C 0.149 0.135 0.296 0.157 0.436 0.203 C 0.519 0.229 0.598 0.239 0.683 0.23 C 0.796 0.219 0.909 0.214 1.023 0.208 C 1.06 0.206 1.088 0.193 1.111 0.163 C 1.152 0.108 1.195 0.054 1.238 0 C 1.271 0.007 1.304 0.014 1.352 0.023 C 1.258 0.153 1.141 0.245 1.058 0.374 C 0.877 0.374 0.698 0.373 0.524 0.329 C 0.37 0.289 0.221 0.234 0.07 0.183 C 0.044 0.174 0.023 0.151 0 0.135 L 0 0.135 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.792,
    height: 0.487,
    viewBox: "0 0 0.792 0.487",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.007,
      top: 8.128,
      width: 0.792,
      height: 0.487,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.157 0.189 C 0.2 0.168 0.245 0.147 0.288 0.124 C 0.362 0.084 0.435 0.042 0.509 0.001 C 0.515 -0.002 0.526 0.002 0.542 0.004 C 0.497 0.09 0.4 0.126 0.353 0.213 C 0.494 0.286 0.651 0.297 0.792 0.357 C 0.767 0.398 0.724 0.393 0.686 0.393 C 0.552 0.395 0.418 0.398 0.284 0.395 C 0.197 0.393 0.118 0.404 0.055 0.473 C 0.044 0.484 0.019 0.483 0 0.487 C 0.052 0.388 0.105 0.289 0.157 0.189 L 0.157 0.189 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.279,
    height: 0.409,
    viewBox: "0 0 1.279 0.409",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.86,
      top: 17.845,
      width: 1.279,
      height: 0.409,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.381 C 0.011 0.371 0.02 0.358 0.033 0.353 C 0.16 0.298 0.286 0.243 0.414 0.193 C 0.474 0.169 0.536 0.152 0.598 0.137 C 0.791 0.093 0.983 0.052 1.176 0.01 C 1.21 0.003 1.245 0.003 1.279 0 C 1.275 0.003 1.272 0.007 1.267 0.009 C 0.976 0.087 0.704 0.216 0.425 0.326 C 0.384 0.342 0.342 0.356 0.301 0.373 C 0.201 0.413 0.102 0.425 0 0.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.281,
    height: 0.719,
    viewBox: "0 0 0.281 0.719",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.741,
      top: 15.904,
      width: 0.281,
      height: 0.719,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.717 C 0.087 0.478 0.173 0.24 0.26 0 C 0.294 0.012 0.276 0.032 0.273 0.046 C 0.264 0.08 0.252 0.112 0.242 0.145 C 0.193 0.309 0.144 0.474 0.095 0.639 C 0.086 0.667 0.072 0.693 0.061 0.719 C 0.041 0.719 0.02 0.718 0 0.717 L 0 0.717 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.512,
    height: 0.236,
    viewBox: "0 0 0.512 0.236",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.082,
      top: 14.27,
      width: 0.512,
      height: 0.236,
      color: "rgb(182,146,88)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.002 C 0.025 0.003 0.052 -0.003 0.074 0.005 C 0.22 0.063 0.366 0.123 0.512 0.182 C 0.511 0.2 0.511 0.218 0.51 0.236 C 0.335 0.17 0.159 0.105 0.002 0 L 0 0.002 L 0 0.002 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.268,
    height: 0.515,
    viewBox: "0 0 0.268 0.515",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.044,
      top: 12.209,
      width: 0.268,
      height: 0.515,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.102 0.378 C 0.069 0.424 0.036 0.47 0.003 0.515 C 0.002 0.505 -0.002 0.494 0.001 0.486 C 0.072 0.32 0.134 0.15 0.238 0 C 0.248 0.012 0.258 0.025 0.268 0.037 C 0.213 0.151 0.158 0.264 0.102 0.378 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.168,
    height: 0.390,
    viewBox: "0 0 0.168 0.390",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.893,
      top: 15.369,
      width: 0.168,
      height: 0.39,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.39 C 0.023 0.254 0.079 0.132 0.167 0 C 0.176 0.092 0.13 0.147 0.115 0.21 C 0.1 0.271 0.074 0.33 0.053 0.389 C 0.036 0.389 0.018 0.39 0 0.39 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.112,
    height: 0.377,
    viewBox: "0 0 0.112 0.377",
    fill: "none",
    style: {
      position: "absolute",
      left: 28.914,
      top: 15.719,
      width: 0.112,
      height: 0.377,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.074 0.377 C 0.009 0.263 -0.003 0.14 0.001 0 C 0.055 0.056 0.047 0.119 0.063 0.173 C 0.079 0.229 0.096 0.285 0.112 0.341 C 0.1 0.353 0.087 0.365 0.074 0.377 L 0.074 0.377 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.097,
    height: 0.339,
    viewBox: "0 0 0.097 0.339",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.649,
      top: 15.481,
      width: 0.097,
      height: 0.339,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.054 0.337 C 0.019 0.229 0.011 0.118 0 0 C 0.062 0.065 0.089 0.164 0.097 0.339 C 0.083 0.339 0.069 0.338 0.054 0.337 L 0.054 0.337 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.205,
    height: 0.331,
    viewBox: "0 0 0.205 0.331",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.814,
      top: 18.318,
      width: 0.205,
      height: 0.331,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.07 0.11 0.157 0.209 0.205 0.331 C 0.185 0.32 0.16 0.313 0.147 0.297 C 0.077 0.209 0.022 0.112 0 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.114,
    height: 0.252,
    viewBox: "0 0 0.114 0.252",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.729,
      top: 13.998,
      width: 0.114,
      height: 0.252,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.215 C 0.013 0.141 0.062 0.087 0.113 0 C 0.118 0.115 0.088 0.186 0.04 0.252 C 0.026 0.239 0.013 0.227 0 0.215 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.219,
    height: 0.139,
    viewBox: "0 0 0.219 0.139",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.432,
      top: 4.961,
      width: 0.219,
      height: 0.139,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.187 0 C 0.198 0.008 0.209 0.017 0.219 0.025 C 0.156 0.081 0.087 0.128 0 0.139 C 0.062 0.093 0.125 0.046 0.187 0 L 0.187 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.246,
    height: 0.077,
    viewBox: "0 0 0.246 0.077",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.243,
      top: 19.837,
      width: 0.246,
      height: 0.077,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.246 0.054 C 0.213 0.062 0.18 0.069 0.147 0.077 C 0.098 0.051 0.049 0.026 0 0 C 0.086 -0.001 0.167 0.025 0.246 0.054 L 0.246 0.054 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.150,
    height: 0.163,
    viewBox: "0 0 0.150 0.163",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.484,
      top: 15.21,
      width: 0.15,
      height: 0.163,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.163 C 0.003 0.147 0 0.124 0.01 0.115 C 0.054 0.074 0.103 0.038 0.15 0 C 0.111 0.065 0.07 0.127 0 0.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.181,
    height: 0.092,
    viewBox: "0 0 0.181 0.092",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.889,
      top: 11.235,
      width: 0.181,
      height: 0.092,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.088 C 0.054 0.046 0.106 -0.001 0.181 0 L 0.181 0 C 0.148 0.047 0.109 0.084 0.049 0.092 C 0.033 0.091 0.016 0.089 0 0.088 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.155,
    height: 0.144,
    viewBox: "0 0 0.155 0.144",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.77,
      top: 8.978,
      width: 0.155,
      height: 0.144,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.038 C 0.001 0.025 0.002 0.013 0.003 0 C 0.054 0.048 0.104 0.096 0.155 0.144 C 0.082 0.139 0.046 0.081 0 0.037 L 0 0.038 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.056,
    height: 0.249,
    viewBox: "0 0 0.056 0.249",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.937,
      top: 18.258,
      width: 0.056,
      height: 0.249,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.098 C 0.009 0.066 0.017 0.033 0.026 0 C 0.065 0.08 0.051 0.166 0.056 0.249 C 0.037 0.199 0.019 0.149 0 0.098 L 0 0.098 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.141,
    height: 0.087,
    viewBox: "0 0 0.141 0.087",
    fill: "none",
    style: {
      position: "absolute",
      left: 39.004,
      top: 15.552,
      width: 0.141,
      height: 0.087,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.141 0.054 C 0.134 0.065 0.127 0.076 0.12 0.087 C 0.08 0.059 0.04 0.031 0 0.002 C 0.058 -0.01 0.098 0.025 0.141 0.054 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.113,
    height: 0.066,
    viewBox: "0 0 0.113 0.066",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.983,
      top: 10.552,
      width: 0.113,
      height: 0.066,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.048 0 0.083 0.023 0.113 0.059 C 0.083 0.071 0.046 0.067 0.002 0.045 C 0.001 0.03 0.001 0.015 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.080,
    height: 0.141,
    viewBox: "0 0 0.080 0.141",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.822,
      top: 8.793,
      width: 0.08,
      height: 0.141,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.018 0.141 C 0.012 0.125 0.006 0.109 0 0.093 C 0.023 0.062 0.046 0.031 0.069 0 L 0.08 0.001 C 0.059 0.048 0.039 0.094 0.018 0.141 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.109,
    height: 0.084,
    viewBox: "0 0 0.109 0.084",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.153,
      top: 15.434,
      width: 0.109,
      height: 0.084,
      color: "rgb(182,146,88)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.109 0.084 C 0.068 0.07 0.03 0.05 0 0.008 C 0.046 -0.012 0.076 0.011 0.106 0.035 C 0.107 0.051 0.108 0.067 0.109 0.084 L 0.109 0.084 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.174,
    height: 0.058,
    viewBox: "0 0 0.174 0.058",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.686,
      top: 14.481,
      width: 0.174,
      height: 0.058,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.002 C 0.067 -0.006 0.127 0.007 0.174 0.058 C 0.116 0.04 0.058 0.021 0 0.002 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.084,
    height: 0.114,
    viewBox: "0 0 0.084 0.114",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.057,
      top: 20.023,
      width: 0.084,
      height: 0.114,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.02 C 0.01 0.014 0.021 0.007 0.031 0 C 0.049 0.038 0.066 0.076 0.084 0.114 C 0.024 0.112 0.017 0.062 0 0.02 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.090,
    height: 0.117,
    viewBox: "0 0 0.090 0.117",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.357,
      top: 17.46,
      width: 0.09,
      height: 0.117,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.03 0.039 0.06 0.078 0.09 0.117 C 0.037 0.096 0.003 0.059 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.061,
    height: 0.113,
    viewBox: "0 0 0.061 0.113",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.987,
      top: 12.722,
      width: 0.061,
      height: 0.113,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.061 0 C 0.064 0.051 0.018 0.074 0 0.113 C 0.008 0.069 0.014 0.023 0.061 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.085,
    height: 0.098,
    viewBox: "0 0 0.085 0.098",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.271,
      top: 22.57,
      width: 0.085,
      height: 0.098,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.025 0.015 0.052 0.028 0.073 0.047 C 0.084 0.057 0.082 0.08 0.085 0.098 C 0.036 0.084 0.019 0.041 0 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.053,
    height: 0.078,
    viewBox: "0 0 0.053 0.078",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.492,
      top: 15.118,
      width: 0.053,
      height: 0.078,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.001 0.078 C -0.003 0.044 0.007 0.017 0.039 0 C 0.063 0.033 0.053 0.056 0.029 0.076 C 0.02 0.078 0.01 0.078 0.001 0.078 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.097,
    height: 0.060,
    viewBox: "0 0 0.097 0.060",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.71,
      top: 20.522,
      width: 0.097,
      height: 0.06,
      color: "rgb(193,174,158)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.097 0.059 C 0.048 0.066 0.025 0.031 0 0 C 0.039 0.008 0.084 0.007 0.097 0.059 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.105,
    height: 0.047,
    viewBox: "0 0 0.105 0.047",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.785,
      top: 20.464,
      width: 0.105,
      height: 0.047,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.105 0.029 C 0.096 0.035 0.087 0.041 0.078 0.047 C 0.052 0.031 0.026 0.016 0 0 C 0.038 0 0.075 0 0.105 0.029 L 0.105 0.029 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.054,
    height: 0.105,
    viewBox: "0 0 0.054 0.105",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.272,
      top: 9.493,
      width: 0.054,
      height: 0.105,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.023 0.105 C 0.015 0.105 0.007 0.103 0 0.099 C 0.017 0.066 0.035 0.033 0.052 0 C 0.056 0.038 0.057 0.076 0.023 0.105 L 0.023 0.105 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.057,
    height: 0.077,
    viewBox: "0 0 0.057 0.077",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.14,
      top: 20.137,
      width: 0.057,
      height: 0.077,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.057 0.077 C 0.024 0.061 -0.006 0.044 0.001 0 C 0.019 0.026 0.038 0.052 0.057 0.077 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.133,
    height: 0.039,
    viewBox: "0 0 0.133 0.039",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.904,
      top: 0.395,
      width: 0.133,
      height: 0.039,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.036 0.039 C 0.024 0.037 0.012 0.035 0 0.034 C 0.039 0 0.085 -0.002 0.133 0.001 C 0.101 0.013 0.068 0.026 0.036 0.039 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.058,
    height: 0.096,
    viewBox: "0 0 0.058 0.096",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.678,
      top: 14.329,
      width: 0.058,
      height: 0.096,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.058 0 C 0.039 0.032 0.019 0.064 0 0.096 C 0.01 0.058 0.021 0.021 0.058 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.090,
    height: 0.067,
    viewBox: "0 0 0.090 0.067",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.014,
      top: 9.21,
      width: 0.09,
      height: 0.067,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.09 0.067 C 0.053 0.054 0.014 0.044 0 0 C 0.046 0.001 0.069 0.033 0.09 0.067 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.035,
    height: 0.054,
    viewBox: "0 0 0.035 0.054",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.892,
      top: 8.741,
      width: 0.035,
      height: 0.054,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.009 0.054 C 0.009 0.054 0 0.053 0 0.053 C 0.012 0.035 0.023 0.018 0.035 0 C 0.026 0.018 0.018 0.036 0.009 0.054 L 0.009 0.054 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.091,
    height: 0.037,
    viewBox: "0 0 0.091 0.037",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.858,
      top: 14.536,
      width: 0.091,
      height: 0.037,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.002 C 0.035 -0.002 0.071 -0.006 0.091 0.034 C 0.054 0.042 0.023 0.034 0 0.002 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.064,
    height: 0.063,
    viewBox: "0 0 0.064 0.063",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.347,
      top: 5.114,
      width: 0.064,
      height: 0.063,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.064 0 C 0.061 0.04 0.029 0.049 0 0.063 C 0.021 0.042 0.042 0.021 0.064 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.052,
    height: 0.070,
    viewBox: "0 0 0.052 0.070",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.524,
      top: 19.241,
      width: 0.052,
      height: 0.07,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.027 0 C 0.052 0.018 0.054 0.043 0.05 0.07 C 0.033 0.049 0.017 0.027 0 0.006 C 0.008 0.002 0.017 0 0.027 0 L 0.027 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.071,
    height: 0.024,
    viewBox: "0 0 0.071 0.024",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.982,
      top: 17.79,
      width: 0.071,
      height: 0.024,
      color: "rgb(150,100,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.071 0.024 C 0.047 0.017 0.024 0.01 0 0.004 C 0.028 -0.003 0.053 -0.003 0.071 0.024 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.057,
    height: 0.065,
    viewBox: "0 0 0.057 0.065",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.019,
      top: 18.647,
      width: 0.057,
      height: 0.065,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.019 0.022 0.038 0.044 0.057 0.065 C 0.028 0.052 -0.004 0.042 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.063,
    height: 0.060,
    viewBox: "0 0 0.063 0.060",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.923,
      top: 9.121,
      width: 0.063,
      height: 0.06,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.063 0.06 C 0.024 0.058 -0.003 0.045 0 0 C 0.033 0.008 0.056 0.025 0.063 0.06 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.038,
    height: 0.060,
    viewBox: "0 0 0.038 0.060",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.68,
      top: 18.856,
      width: 0.038,
      height: 0.06,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.005 0.06 C -0.01 0.024 0.011 0.011 0.035 0 C 0.045 0.033 0.032 0.051 0.005 0.06 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.030,
    height: 0.074,
    viewBox: "0 0 0.030 0.074",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.233,
      top: 12.144,
      width: 0.03,
      height: 0.074,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.03 0 C 0.032 0.031 0.029 0.059 0 0.074 C 0.01 0.049 0.02 0.025 0.03 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.060,
    height: 0.029,
    viewBox: "0 0 0.060 0.029",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.186,
      top: 19.809,
      width: 0.06,
      height: 0.029,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.02 0.01 0.04 0.019 0.06 0.029 C 0.04 0.019 0.02 0.009 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.072,
    height: 0.025,
    viewBox: "0 0 0.072 0.025",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.367,
      top: 18.261,
      width: 0.072,
      height: 0.025,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.024 0.008 0.048 0.015 0.072 0.023 C 0.045 0.025 0.016 0.033 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.061,
    height: 0.051,
    viewBox: "0 0 0.061 0.051",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.773,
      top: 20.478,
      width: 0.061,
      height: 0.051,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.02 0.016 0.04 0.032 0.061 0.047 C 0.016 0.063 0.01 0.028 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.062,
    height: 0.035,
    viewBox: "0 0 0.062 0.035",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.617,
      top: 20.523,
      width: 0.062,
      height: 0.035,
      color: "rgb(150,100,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.005 C 0.016 0.003 0.032 0.002 0.048 0 C 0.053 0.01 0.057 0.02 0.062 0.029 L 0.056 0.035 C 0.037 0.025 0.019 0.015 0 0.005 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.037,
    height: 0.060,
    viewBox: "0 0 0.037 0.060",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.454,
      top: 4.059,
      width: 0.037,
      height: 0.06,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.031 0.06 C 0 0.053 -0.004 0.029 0.002 0 C 0.028 0.01 0.047 0.025 0.031 0.06 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.060,
    height: 0.051,
    viewBox: "0 0 0.060 0.051",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.469,
      top: 20.905,
      width: 0.06,
      height: 0.051,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.06 0.051 C 0.037 0.039 0.005 0.038 0 0.003 C 0.044 -0.011 0.047 0.026 0.06 0.051 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.048,
    height: 0.061,
    viewBox: "0 0 0.048 0.061",
    fill: "none",
    style: {
      position: "absolute",
      left: 28.714,
      top: 21.743,
      width: 0.048,
      height: 0.061,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.03 0.009 0.051 0.026 0.047 0.061 C 0.031 0.041 0.016 0.02 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.028,
    height: 0.064,
    viewBox: "0 0 0.028 0.064",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.502,
      top: 11.648,
      width: 0.028,
      height: 0.064,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.028 0 C 0.028 0.027 0.028 0.053 0 0.064 C 0.009 0.043 0.019 0.021 0.028 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.030,
    height: 0.077,
    viewBox: "0 0 0.030 0.077",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.734,
      top: 14.255,
      width: 0.03,
      height: 0.077,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.029 0 C 0.031 0.031 0.026 0.059 0 0.077 C 0.01 0.051 0.02 0.026 0.029 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.030,
    height: 0.034,
    viewBox: "0 0 0.030 0.034",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.452,
      top: 15.369,
      width: 0.03,
      height: 0.034,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 0.034 C -0.005 0.005 0.004 -0.005 0.03 0.002 C 0.031 0.024 0.023 0.036 0.002 0.034 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.015,
    height: 0.011,
    viewBox: "0 0 0.015 0.011",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.912,
      top: 15.282,
      width: 0.015,
      height: 0.011,
      color: "rgb(150,100,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.001 C 0.005 0.005 0.01 0.008 0.015 0.011 C 0.011 0.008 0.006 0.004 0.001 0 L 0 0.001 L 0 0.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.010,
    height: 0.016,
    viewBox: "0 0 0.010 0.016",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.665,
      top: 12.223,
      width: 0.01,
      height: 0.016,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.001 0.016 L 0 0.006 L 0.009 0 C 0.011 0.008 0.008 0.013 0.001 0.016 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.041,
    height: 0.033,
    viewBox: "0 0 0.041 0.033",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.333,
      top: 15.222,
      width: 0.041,
      height: 0.033,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.041 0.001 C 0.028 0.011 0.014 0.022 0 0.033 C 0.005 0.009 0.019 -0.003 0.041 0.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.015,
    height: 0.006,
    viewBox: "0 0 0.015 0.006",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.629,
      top: 12.26,
      width: 0.015,
      height: 0.006,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.002 C 0.005 0.001 0.01 0 0.015 0 L 0.014 0.001 C 0.01 0.007 0.005 0.007 0 0.002 L 0 0.002 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.041,
    height: 0.032,
    viewBox: "0 0 0.041 0.032",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.194,
      top: 14.986,
      width: 0.041,
      height: 0.032,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.014 0.011 0.027 0.021 0.041 0.032 C 0.022 0.03 0.003 0.028 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.024,
    height: 0.021,
    viewBox: "0 0 0.024 0.021",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.445,
      top: 17.575,
      width: 0.024,
      height: 0.021,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.008 0.007 0.016 0.014 0.024 0.021 C 0.016 0.014 0.008 0.007 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.029,
    height: 0.047,
    viewBox: "0 0 0.029 0.047",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.718,
      top: 18.811,
      width: 0.029,
      height: 0.047,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.047 C 0.009 0.031 0.019 0.016 0.028 0 C 0.032 0.025 0.029 0.046 0 0.047 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.008,
    height: 0.014,
    viewBox: "0 0 0.008 0.014",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.048,
      top: 7.856,
      width: 0.008,
      height: 0.014,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.008 0.013 C 0.005 0.008 0.003 0.004 0 0 C 0.002 0.001 0.006 0.002 0.007 0.004 C 0.008 0.007 0.007 0.011 0.006 0.014 L 0.008 0.013 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.036,
    height: 0.035,
    viewBox: "0 0 0.036 0.035",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.51,
      top: 19.212,
      width: 0.036,
      height: 0.035,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.036 0.029 C 0.028 0.029 0.02 0.031 0.012 0.035 C 0.008 0.023 0.004 0.012 0 0 C 0.012 0.01 0.024 0.019 0.036 0.029 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.028,
    height: 0.029,
    viewBox: "0 0 0.028 0.029",
    fill: "none",
    style: {
      position: "absolute",
      left: 36.085,
      top: 19.652,
      width: 0.028,
      height: 0.029,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.028 0.019 C 0.019 0.022 0.009 0.026 0 0.029 C 0.004 0.02 0.007 0.01 0.011 0 C 0.017 0.006 0.022 0.013 0.028 0.019 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.013,
    height: 0.027,
    viewBox: "0 0 0.013 0.027",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.2,
      top: 4.982,
      width: 0.013,
      height: 0.027,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.005 0.009 0.009 0.018 0.013 0.027 C 0.009 0.018 0.004 0.009 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.354,
      top: 11.948,
      width: 0.026,
      height: 0.046,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Vector"), /*#__PURE__*/React.createElement("svg", {
    width: 0.034,
    height: 0.051,
    viewBox: "0 0 0.034 0.051",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.947,
      top: 20.036,
      width: 0.034,
      height: 0.051,
      color: "rgb(255,253,251)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.017 0.051 C 0.011 0.038 -0.003 0.018 0.001 0.011 C 0.013 -0.012 0.025 0.006 0.034 0.019 C 0.028 0.03 0.022 0.04 0.017 0.051 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.028,
    height: 0.030,
    viewBox: "0 0 0.028 0.030",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.983,
      top: 9.181,
      width: 0.028,
      height: 0.03,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.028 0.03 C 0.01 0.03 0 0.021 0 0 C 0.018 -0.001 0.028 0.009 0.028 0.03 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.032,
    height: 0.030,
    viewBox: "0 0 0.032 0.030",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.673,
      top: 20.552,
      width: 0.032,
      height: 0.03,
      color: "rgb(150,100,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.032 0.029 C 0.021 0.021 0.011 0.013 0 0.006 L 0.005 0 C 0.014 0.01 0.023 0.02 0.031 0.03 L 0.032 0.029 L 0.032 0.029 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.708,
      top: 20.581,
      width: 0.001,
      height: 0.001,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Vector"), /*#__PURE__*/React.createElement("svg", {
    width: 0.010,
    height: 0.014,
    viewBox: "0 0 0.010 0.014",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.059,
      top: 13.079,
      width: 0.01,
      height: 0.014,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.008 0 C 0.006 0.005 0.003 0.009 0.001 0.014 C 0.001 0.011 -0.001 0.007 0 0.007 C 0.003 0.004 0.007 0.003 0.01 0.002 L 0.008 0 L 0.008 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.028,
    height: 0.046,
    viewBox: "0 0 0.028 0.046",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.427,
      top: 4.015,
      width: 0.028,
      height: 0.046,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.028 0.046 C 0.005 0.042 0 0.023 0 0 C 0.009 0.015 0.019 0.031 0.028 0.046 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.027,
    height: 0.032,
    viewBox: "0 0 0.027 0.032",
    fill: "none",
    style: {
      position: "absolute",
      left: 28.76,
      top: 21.802,
      width: 0.027,
      height: 0.032,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.019 0 0.029 0.009 0.027 0.032 C 0.007 0.033 0.001 0.019 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.030,
    height: 0.045,
    viewBox: "0 0 0.030 0.045",
    fill: "none",
    style: {
      position: "absolute",
      left: 28.965,
      top: 22.117,
      width: 0.03,
      height: 0.045,
      color: "rgb(193,174,158)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.01 0.015 0.02 0.03 0.03 0.045 C 0.006 0.041 0.002 0.022 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.016,
    height: 0.016,
    viewBox: "0 0 0.016 0.016",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.917,
      top: 22.189,
      width: 0.016,
      height: 0.016,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 0.001 L 0.016 0.014 C 0.002 0.019 -0.005 0.016 0.004 0 L 0.002 0.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.010,
    height: 0.012,
    viewBox: "0 0 0.010 0.012",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.075,
      top: 18.712,
      width: 0.01,
      height: 0.012,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.006 0.003 0.009 0.007 0.01 0.012 C 0.005 0.01 0.002 0.005 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.318,
    height: 2.802,
    viewBox: "0 0 5.318 2.802",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.17,
      top: 1.293,
      width: 5.318,
      height: 2.802,
      color: "rgb(35,30,17)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.164 0 C 4.381 0.013 4.583 0.082 4.777 0.171 C 4.982 0.266 5.124 0.43 5.208 0.641 C 5.267 0.789 5.297 0.944 5.313 1.102 C 5.331 1.278 5.295 1.446 5.224 1.607 C 5.198 1.666 5.167 1.722 5.139 1.78 C 5.128 1.801 5.117 1.823 5.106 1.845 L 5.108 1.843 C 5.079 1.854 5.056 1.867 5.076 1.904 L 5.077 1.902 C 5.013 1.899 5 1.945 4.987 1.992 L 4.988 1.992 C 4.925 2.028 4.875 2.079 4.838 2.141 L 4.839 2.141 C 4.809 2.156 4.777 2.169 4.749 2.187 C 4.402 2.425 4.017 2.556 3.599 2.593 C 3.501 2.602 3.402 2.616 3.305 2.634 C 3.164 2.66 3.024 2.694 2.883 2.723 C 2.536 2.792 2.185 2.814 1.832 2.795 C 1.685 2.787 1.536 2.768 1.391 2.737 C 1.266 2.711 1.146 2.659 1.024 2.62 C 0.982 2.607 0.939 2.597 0.897 2.586 L 0.899 2.588 C 0.896 2.56 0.874 2.559 0.853 2.557 C 0.689 2.438 0.526 2.318 0.36 2.202 C 0.147 2.052 0.045 1.839 0.006 1.591 C -0.006 1.508 0.001 1.424 0.022 1.341 C 0.082 1.111 0.194 0.911 0.365 0.745 C 0.404 0.708 0.437 0.665 0.472 0.624 C 0.498 0.631 0.515 0.627 0.511 0.595 L 0.51 0.596 C 0.523 0.597 0.54 0.602 0.551 0.596 C 0.586 0.578 0.619 0.556 0.654 0.537 C 0.91 0.395 1.183 0.314 1.479 0.327 C 1.592 0.332 1.708 0.342 1.805 0.412 C 1.955 0.517 2.102 0.626 2.252 0.731 C 2.325 0.782 2.398 0.835 2.479 0.872 C 2.638 0.946 2.804 0.953 2.97 0.889 C 3.146 0.821 3.29 0.713 3.392 0.552 C 3.407 0.527 3.424 0.502 3.441 0.478 C 3.613 0.234 3.836 0.064 4.138 0.012 C 4.147 0.01 4.156 0.004 4.165 0 L 4.164 0 Z M 4.602 1.994 L 4.601 1.995 C 4.624 1.986 4.649 1.981 4.668 1.966 C 4.947 1.743 5.097 1.451 5.113 1.094 C 5.123 0.877 5.046 0.697 4.869 0.564 C 4.832 0.516 4.789 0.481 4.729 0.487 C 4.715 0.642 4.703 0.79 4.689 0.938 C 4.682 1.007 4.668 1.075 4.662 1.144 C 4.626 1.53 4.472 1.859 4.188 2.126 C 4.163 2.149 4.14 2.176 4.116 2.201 C 4.075 2.233 4.033 2.265 3.991 2.298 C 4.066 2.302 4.126 2.275 4.18 2.234 C 4.319 2.181 4.45 2.114 4.568 2.023 C 4.579 2.013 4.591 2.003 4.602 1.994 L 4.602 1.994 Z M 1.254 2.471 C 1.267 2.499 1.293 2.499 1.318 2.497 C 1.5 2.565 1.699 2.608 1.804 2.598 C 1.684 2.537 1.598 2.447 1.51 2.36 C 1.408 2.259 1.305 2.158 1.206 2.054 C 1.162 2.007 1.124 1.954 1.089 1.9 C 1.036 1.817 0.988 1.729 0.937 1.644 C 0.879 1.545 0.835 1.44 0.805 1.33 C 0.755 1.153 0.732 0.971 0.725 0.787 C 0.724 0.765 0.719 0.744 0.716 0.718 C 0.597 0.779 0.565 0.811 0.479 0.945 C 0.462 0.963 0.443 0.978 0.429 0.998 C 0.321 1.155 0.256 1.329 0.225 1.516 C 0.193 1.714 0.241 1.889 0.38 2.034 C 0.434 2.09 0.498 2.14 0.564 2.182 C 0.747 2.299 0.948 2.383 1.154 2.456 C 1.185 2.467 1.221 2.466 1.255 2.471 L 1.254 2.47 L 1.254 2.471 Z M 4.209 1.085 C 4.2 1.083 4.192 1.082 4.183 1.081 C 4.151 1.173 4.117 1.265 4.086 1.357 C 4.034 1.512 3.94 1.637 3.819 1.745 C 3.715 1.839 3.596 1.909 3.467 1.965 C 3.265 2.054 3.055 2.104 2.835 2.126 C 2.37 2.173 1.96 2.042 1.602 1.747 C 1.475 1.642 1.375 1.512 1.312 1.357 C 1.301 1.332 1.288 1.307 1.262 1.252 C 1.259 1.309 1.255 1.332 1.257 1.354 C 1.266 1.423 1.272 1.493 1.288 1.56 C 1.324 1.714 1.363 1.871 1.467 1.996 C 1.638 2.199 1.833 2.373 2.087 2.471 C 2.308 2.557 2.532 2.613 2.77 2.557 C 3.051 2.491 3.331 2.425 3.61 2.355 C 3.651 2.344 3.692 2.318 3.725 2.29 C 3.793 2.233 3.859 2.172 3.921 2.108 C 3.969 2.058 4.02 2.007 4.051 1.946 C 4.142 1.764 4.218 1.575 4.222 1.367 C 4.224 1.273 4.214 1.179 4.209 1.085 L 4.209 1.085 Z M 2.316 1.055 C 2.315 1.059 2.315 1.064 2.314 1.068 C 2.275 1.068 2.235 1.066 2.195 1.069 C 2.129 1.074 2.072 1.104 2.025 1.15 C 1.851 1.32 1.882 1.626 2.089 1.755 C 2.126 1.779 2.167 1.797 2.209 1.812 C 2.362 1.867 2.51 1.838 2.658 1.783 C 2.846 1.713 2.873 1.569 2.832 1.427 C 2.786 1.272 2.686 1.158 2.532 1.102 C 2.463 1.077 2.388 1.07 2.316 1.055 L 2.316 1.055 Z M 3.323 0.973 C 3.196 0.972 3.107 1.06 3.107 1.187 C 3.108 1.286 3.179 1.363 3.269 1.365 C 3.385 1.367 3.504 1.266 3.508 1.162 C 3.512 1.057 3.432 0.975 3.323 0.973 L 3.323 0.973 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.655,
    height: 0.995,
    viewBox: "0 0 3.655 0.995",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.679,
      top: 1.231,
      width: 3.655,
      height: 0.995,
      color: "rgb(193,174,158)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.655 0.063 C 3.646 0.067 3.637 0.073 3.628 0.074 C 3.327 0.127 3.104 0.296 2.932 0.541 C 2.915 0.565 2.898 0.59 2.882 0.615 C 2.781 0.776 2.636 0.884 2.461 0.952 C 2.295 1.016 2.128 1.008 1.969 0.934 C 1.889 0.897 1.815 0.845 1.743 0.794 C 1.592 0.689 1.445 0.58 1.296 0.474 C 1.198 0.405 1.082 0.395 0.969 0.39 C 0.674 0.376 0.401 0.457 0.144 0.6 C 0.109 0.619 0.076 0.641 0.041 0.659 C 0.03 0.664 0.014 0.659 0 0.659 C 0.021 0.633 0.038 0.6 0.065 0.581 C 0.217 0.47 0.369 0.358 0.525 0.253 C 0.691 0.141 0.88 0.096 1.077 0.1 C 1.306 0.104 1.516 0.179 1.7 0.316 C 1.791 0.383 1.875 0.462 1.957 0.54 C 2.149 0.724 2.372 0.747 2.59 0.592 C 2.674 0.532 2.746 0.455 2.824 0.386 C 2.909 0.311 2.991 0.23 3.082 0.163 C 3.154 0.111 3.234 0.068 3.316 0.033 C 3.431 -0.015 3.548 -0.016 3.655 0.063 L 3.655 0.063 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.407,
    height: 2.592,
    viewBox: "0 0 2.407 2.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.618,
      top: 7.686,
      width: 2.407,
      height: 2.592,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.407 0.003 C 2.388 0.08 2.374 0.158 2.348 0.232 C 2.187 0.702 1.97 1.146 1.715 1.57 C 1.559 1.829 1.343 2.03 1.077 2.179 C 0.76 2.357 0.428 2.497 0.073 2.58 C 0.049 2.586 0.024 2.588 0 2.592 C 0.085 2.54 0.168 2.487 0.254 2.438 C 0.353 2.38 0.448 2.319 0.527 2.233 C 0.57 2.186 0.625 2.149 0.677 2.112 C 0.734 2.073 0.795 2.038 0.854 2.001 C 1.016 1.901 1.16 1.78 1.29 1.642 C 1.378 1.548 1.468 1.455 1.566 1.37 C 1.711 1.244 1.821 1.094 1.916 0.929 C 2.08 0.645 2.233 0.356 2.358 0.053 C 2.365 0.034 2.376 0.017 2.385 0 C 2.392 0.003 2.4 0.005 2.407 0.004 L 2.407 0.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.990,
    height: 0.359,
    viewBox: "0 0 1.990 0.359",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.606,
      top: 9.866,
      width: 1.99,
      height: 0.359,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 0.359 C 0.023 0.34 0.041 0.314 0.066 0.305 C 0.312 0.211 0.565 0.141 0.827 0.11 C 0.862 0.106 0.897 0.108 0.931 0.109 C 0.986 0.111 1.04 0.113 1.095 0.118 C 1.321 0.138 1.54 0.108 1.753 0.029 C 1.802 0.01 1.858 0.003 1.911 0 C 1.936 -0.001 1.963 0.021 1.99 0.034 C 1.974 0.112 1.915 0.132 1.859 0.146 C 1.686 0.189 1.512 0.228 1.338 0.266 C 1.265 0.282 1.191 0.288 1.118 0.301 C 0.988 0.325 0.859 0.316 0.733 0.29 C 0.553 0.255 0.378 0.268 0.203 0.311 C 0.135 0.327 0.068 0.341 0 0.356 L 0.002 0.358 L 0.002 0.359 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.339,
    height: 0.266,
    viewBox: "0 0 1.339 0.266",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.38,
      top: 14.656,
      width: 1.339,
      height: 0.266,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.33 0.266 C 1.168 0.245 1.006 0.218 0.843 0.202 C 0.625 0.181 0.407 0.169 0.189 0.153 C 0.14 0.149 0.09 0.147 0.043 0.136 C 0.024 0.131 0.001 0.103 0 0.084 C -0.001 0.065 0.018 0.034 0.036 0.027 C 0.077 0.012 0.121 0.004 0.165 0.002 C 0.31 -0.006 0.454 0.013 0.595 0.044 C 0.813 0.094 1.028 0.155 1.244 0.212 C 1.276 0.221 1.307 0.235 1.339 0.247 C 1.336 0.253 1.333 0.26 1.33 0.266 L 1.33 0.266 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.842,
    height: 0.262,
    viewBox: "0 0 0.842 0.262",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.684,
      top: 13.41,
      width: 0.842,
      height: 0.262,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.842 0.226 C 0.792 0.264 0.733 0.266 0.676 0.259 C 0.563 0.247 0.45 0.23 0.338 0.213 C 0.274 0.204 0.21 0.192 0.148 0.177 C 0.11 0.168 0.072 0.155 0.038 0.135 C 0.019 0.125 0 0.098 0 0.078 C 0 0.06 0.022 0.035 0.041 0.026 C 0.071 0.011 0.107 -0.001 0.14 0 C 0.366 0.007 0.582 0.051 0.783 0.159 C 0.8 0.169 0.815 0.182 0.83 0.195 C 0.836 0.201 0.837 0.213 0.842 0.226 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.821,
    height: 0.479,
    viewBox: "0 0 0.821 0.479",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.773,
      top: 9.214,
      width: 0.821,
      height: 0.479,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.044 0 C 0.057 0.008 0.078 0.015 0.089 0.029 C 0.199 0.156 0.344 0.232 0.492 0.302 C 0.585 0.347 0.682 0.386 0.777 0.429 C 0.788 0.434 0.798 0.444 0.821 0.462 C 0.758 0.485 0.705 0.481 0.654 0.473 C 0.507 0.448 0.364 0.407 0.232 0.336 C 0.128 0.281 0.05 0.199 0.007 0.088 C -0.006 0.054 -0.005 0.019 0.043 0 L 0.044 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.719,
      top: 15.66,
      width: 0.716,
      height: 0.217,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Vector"), /*#__PURE__*/React.createElement("svg", {
    width: 0.262,
    height: 0.717,
    viewBox: "0 0 0.262 0.717",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.821,
      top: 11.152,
      width: 0.262,
      height: 0.717,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.232 0.717 C 0.186 0.69 0.156 0.681 0.14 0.661 C 0.009 0.496 -0.046 0.315 0.044 0.112 C 0.059 0.077 0.085 0.045 0.114 0.02 C 0.15 -0.011 0.201 -0.004 0.235 0.029 C 0.268 0.06 0.275 0.11 0.236 0.147 C 0.118 0.26 0.13 0.392 0.171 0.53 C 0.187 0.585 0.206 0.639 0.232 0.717 L 0.232 0.717 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.874,
    height: 0.283,
    viewBox: "0 0 0.874 0.283",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.987,
      top: 11.789,
      width: 0.874,
      height: 0.283,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.025 C 0.089 -0.016 0.173 0.002 0.253 0.019 C 0.385 0.047 0.515 0.067 0.65 0.07 C 0.703 0.071 0.756 0.09 0.807 0.108 C 0.828 0.115 0.848 0.137 0.86 0.156 C 0.896 0.213 0.857 0.286 0.791 0.282 C 0.753 0.28 0.71 0.269 0.681 0.247 C 0.583 0.173 0.473 0.142 0.353 0.122 C 0.233 0.101 0.118 0.058 0 0.025 L 0 0.025 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.826,
    height: 0.260,
    viewBox: "0 0 0.826 0.260",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.25,
      top: 14.364,
      width: 0.826,
      height: 0.26,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.009 C 0.118 -0.016 0.208 0.019 0.297 0.034 C 0.386 0.05 0.472 0.062 0.562 0.047 C 0.637 0.035 0.711 0.051 0.772 0.101 C 0.791 0.116 0.805 0.137 0.819 0.158 C 0.835 0.184 0.823 0.217 0.796 0.234 C 0.756 0.26 0.712 0.267 0.668 0.253 C 0.621 0.238 0.57 0.225 0.531 0.197 C 0.447 0.138 0.353 0.113 0.257 0.088 C 0.177 0.067 0.096 0.052 0 0.009 L 0 0.009 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.193,
    height: 0.190,
    viewBox: "0 0 0.193 0.190",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.337,
      top: 1.59,
      width: 0.193,
      height: 0.19,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 0.022 C 0.014 0.017 0.018 0.012 0.023 0.007 C 0.052 0.005 0.082 -0.004 0.109 0.002 C 0.132 0.006 0.154 0.023 0.17 0.041 C 0.205 0.08 0.198 0.141 0.157 0.172 C 0.12 0.2 0.069 0.194 0.036 0.159 C -0.003 0.119 -0.008 0.073 0.01 0.022 L 0.01 0.022 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.448,
    height: 0.207,
    viewBox: "0 0 0.448 0.207",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.755,
      top: 10.338,
      width: 0.448,
      height: 0.207,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.159 C 0.135 0.106 0.27 0.053 0.406 0.002 C 0.418 -0.003 0.434 0.002 0.448 0.002 C 0.445 0.006 0.444 0.013 0.44 0.014 C 0.294 0.079 0.147 0.143 0 0.207 C 0 0.191 0 0.175 0 0.158 L 0 0.159 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.167,
    height: 0.115,
    viewBox: "0 0 0.167 0.115",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.164,
      top: 18.94,
      width: 0.167,
      height: 0.115,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.167 0.02 C 0.147 0.091 0.104 0.104 0.062 0.114 C 0.035 0.121 0.005 0.094 0.001 0.064 C -0.004 0.033 0.018 -0.002 0.045 0 C 0.083 0.003 0.12 0.012 0.167 0.02 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.324,
    height: 0.152,
    viewBox: "0 0 0.324 0.152",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.34,
      top: 7.453,
      width: 0.324,
      height: 0.152,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.085 0.152 C 0.07 0.143 0.055 0.133 0.039 0.125 C 0.027 0.12 0.013 0.117 0 0.114 C 0.066 0.087 0.132 0.058 0.199 0.033 C 0.239 0.019 0.281 0.011 0.322 0 L 0.324 0.002 C 0.262 0.08 0.171 0.111 0.086 0.152 L 0.085 0.152 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.218,
    height: 0.108,
    viewBox: "0 0 0.218 0.108",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.073,
      top: 18.423,
      width: 0.218,
      height: 0.108,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.099 C 0.105 0.022 0.109 0.02 0.218 0 C 0.142 0.094 0.079 0.126 0 0.099 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.206,
    height: 0.140,
    viewBox: "0 0 0.206 0.140",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.401,
      top: 15.143,
      width: 0.206,
      height: 0.14,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.036 0.14 C 0.024 0.128 0.012 0.116 0 0.104 C 0.07 0.042 0.139 0.007 0.206 0 C 0.157 0.065 0.102 0.11 0.036 0.14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.118,
    height: 0.102,
    viewBox: "0 0 0.118 0.102",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.8,
      top: 5.798,
      width: 0.118,
      height: 0.102,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.118 0.071 C 0.112 0.08 0.104 0.101 0.095 0.102 C 0.073 0.103 0.047 0.101 0.028 0.091 C 0.006 0.079 -0.008 0.054 0.005 0.028 C 0.011 0.016 0.024 0.003 0.036 0.001 C 0.075 -0.006 0.116 0.029 0.118 0.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.105,
    height: 0.101,
    viewBox: "0 0 0.105 0.101",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.671,
      top: 1.297,
      width: 0.105,
      height: 0.101,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.097 0.004 C 0.097 0.004 0.105 0.015 0.105 0.014 C 0.103 0.033 0.105 0.054 0.097 0.071 C 0.087 0.095 0.063 0.109 0.037 0.097 C 0.022 0.089 0.006 0.071 0.001 0.055 C -0.005 0.028 0.012 0.006 0.039 0.001 C 0.057 -0.002 0.077 0.003 0.097 0.004 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.249,
    height: 0.057,
    viewBox: "0 0 0.249 0.057",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.972,
      top: 15.435,
      width: 0.249,
      height: 0.057,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.05 C 0.001 0.033 0.001 0.017 0.002 0 C 0.079 0.011 0.156 0.022 0.249 0.035 C 0.172 0.057 0.089 0.062 0 0.05 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.198,
    height: 0.117,
    viewBox: "0 0 0.198 0.117",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.414,
      top: 9.719,
      width: 0.198,
      height: 0.117,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.077 C 0.054 0.035 0.114 0.011 0.198 0 C 0.153 0.073 0.101 0.102 0.038 0.117 C 0.025 0.104 0.013 0.09 0 0.077 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.126,
    height: 0.079,
    viewBox: "0 0 0.126 0.079",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.758,
      top: 16.87,
      width: 0.126,
      height: 0.079,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.126 0.011 C 0.093 0.065 0.064 0.094 0.013 0.071 C 0.004 0.067 -0.003 0.044 0.001 0.033 C 0.013 -0.005 0.029 -0.007 0.126 0.011 L 0.126 0.011 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.152,
    height: 0.149,
    viewBox: "0 0 0.152 0.149",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.779,
      top: 12.336,
      width: 0.152,
      height: 0.149,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.052 C 0.001 0.035 0.002 0.017 0.003 0 C 0.069 0.034 0.129 0.074 0.152 0.149 L 0.152 0.149 C 0.086 0.141 0.048 0.089 0 0.052 L 0 0.052 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.115,
    height: 0.091,
    viewBox: "0 0 0.115 0.091",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.92,
      top: 0.788,
      width: 0.115,
      height: 0.091,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.114 0.045 C 0.087 0.065 0.072 0.084 0.052 0.089 C 0.028 0.096 0.005 0.083 0 0.054 C -0.004 0.024 0.022 -0.006 0.052 0.001 C 0.071 0.005 0.087 0.025 0.115 0.045 L 0.114 0.045 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.088,
    height: 0.104,
    viewBox: "0 0 0.088 0.104",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.496,
      top: 19.924,
      width: 0.088,
      height: 0.104,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.038 0.104 C 0.02 0.072 0.003 0.054 0 0.034 C -0.003 0.013 0.031 -0.008 0.055 0.003 C 0.069 0.009 0.09 0.033 0.087 0.042 C 0.082 0.061 0.062 0.076 0.038 0.104 L 0.038 0.104 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.088,
    height: 0.088,
    viewBox: "0 0 0.088 0.088",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.775,
      top: 7.782,
      width: 0.088,
      height: 0.088,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.04 0.088 C 0.03 0.078 0.01 0.065 0.002 0.047 C -0.007 0.028 0.022 -0.004 0.044 0.001 C 0.06 0.004 0.078 0.019 0.085 0.033 C 0.096 0.056 0.077 0.083 0.04 0.088 L 0.04 0.088 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.064,
    height: 0.094,
    viewBox: "0 0 0.064 0.094",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.723,
      top: 20.155,
      width: 0.064,
      height: 0.094,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.039 0 C 0.052 0.029 0.066 0.047 0.063 0.06 C 0.06 0.073 0.04 0.083 0.027 0.094 C 0.017 0.08 0 0.065 0 0.051 C 0 0.038 0.019 0.025 0.039 0 L 0.039 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.051,
    height: 0.152,
    viewBox: "0 0 0.051 0.152",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.004,
      top: 7.538,
      width: 0.051,
      height: 0.152,
      color: "rgb(150,100,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.022 0.151 C 0.014 0.153 0.007 0.151 0 0.148 C 0.017 0.099 0.034 0.049 0.051 0 C 0.048 0.052 0.06 0.107 0.022 0.151 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.083,
    height: 0.067,
    viewBox: "0 0 0.083 0.067",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.018,
      top: 4.459,
      width: 0.083,
      height: 0.067,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.083 0.032 C 0.057 0.05 0.043 0.066 0.028 0.067 C 0.005 0.069 -0.004 0.048 0.002 0.027 C 0.005 0.016 0.021 -0.001 0.028 0 C 0.044 0.003 0.057 0.017 0.083 0.032 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.122,
    height: 0.028,
    viewBox: "0 0 0.122 0.028",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.794,
      top: 15.459,
      width: 0.122,
      height: 0.028,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.004 C 0.042 0 0.084 -0.008 0.122 0.021 C 0.079 0.033 0.038 0.031 0 0.004 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.018,
    height: 0.019,
    viewBox: "0 0 0.018 0.019",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.152,
      top: 12.716,
      width: 0.018,
      height: 0.019,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.018 0.017 C 0.014 0.018 0.009 0.02 0.009 0.019 C 0.005 0.014 0.003 0.008 0 0.002 C 0.003 0.001 0.007 -0.001 0.008 0 C 0.012 0.005 0.015 0.011 0.018 0.017 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.025,
    height: 0.075,
    viewBox: "0 0 0.025 0.075",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.275,
      top: 7.245,
      width: 0.025,
      height: 0.075,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.025 0.052 C 0.022 0.059 0.019 0.067 0.015 0.075 C 0.01 0.07 -0.001 0.063 0 0.06 C 0.005 0.04 0.013 0.02 0.02 0 C 0.022 0.017 0.024 0.035 0.025 0.052 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.074,
    height: 0.057,
    viewBox: "0 0 0.074 0.057",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.378,
      top: 9.796,
      width: 0.074,
      height: 0.057,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.036 0 C 0.048 0.013 0.061 0.026 0.074 0.039 C 0.059 0.045 0.044 0.051 0.029 0.057 C 0.02 0.044 0.01 0.032 0 0.019 C 0.012 0.013 0.024 0.006 0.036 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.020,
    height: 0.013,
    viewBox: "0 0 0.020 0.013",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.582,
      top: 10.223,
      width: 0.02,
      height: 0.013,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.019 0 C 0.012 0.004 0.006 0.008 0 0.013 C 0.007 0.009 0.013 0.005 0.02 0.001 L 0.019 0 L 0.019 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.031,
    height: 0.027,
    viewBox: "0 0 0.031 0.027",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.329,
      top: 4.212,
      width: 0.031,
      height: 0.027,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 0.027 C 0.007 0.021 0.004 0.015 0 0.008 C 0.007 0.005 0.013 -0.001 0.02 0 C 0.024 0.001 0.027 0.011 0.031 0.017 C 0.024 0.02 0.017 0.023 0.01 0.027 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.032,
    height: 0.017,
    viewBox: "0 0 0.032 0.017",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.042,
      top: 14.251,
      width: 0.032,
      height: 0.017,
      color: "rgb(182,146,88)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.032 0.015 C 0.025 0.015 0.017 0.014 0.01 0.013 C 0.006 0.012 0.003 0.009 0 0.008 C 0.006 0.005 0.013 -0.001 0.018 0 C 0.023 0.003 0.027 0.011 0.031 0.017 L 0.032 0.015 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.028,
    height: 0.041,
    viewBox: "0 0 0.028 0.041",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.195,
      top: 11.264,
      width: 0.028,
      height: 0.041,
      color: "rgb(139,96,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.028 0.007 C 0.025 0.016 0.022 0.025 0.018 0.033 C 0.016 0.036 0.011 0.038 0.008 0.041 C 0.005 0.033 -0.002 0.023 0 0.018 C 0.003 0.01 0.012 0.006 0.019 0 L 0.028 0.007 L 0.028 0.007 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.035,
    height: 0.032,
    viewBox: "0 0 0.035 0.032",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.641,
      top: 1.888,
      width: 0.035,
      height: 0.032,
      color: "rgb(193,174,158)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.035 0 C 0.038 0.032 0.023 0.037 0 0.03 C 0.012 0.02 0.023 0.01 0.035 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.010,
    height: 0.013,
    viewBox: "0 0 0.010 0.013",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.928,
      top: 12.292,
      width: 0.01,
      height: 0.013,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 0.013 C 0.005 0.008 0.008 0.004 0.01 0 C 0.01 0.002 0.011 0.006 0.01 0.007 C 0.007 0.009 0.003 0.01 0 0.011 L 0.002 0.013 L 0.002 0.013 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.006,
    height: 0.007,
    viewBox: "0 0 0.006 0.007",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.797,
      top: 16.324,
      width: 0.006,
      height: 0.007,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.001 L 0.006 0.007 L 0.001 0 L 0 0.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.027,
    height: 0.030,
    viewBox: "0 0 0.027 0.030",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.932,
      top: 12.485,
      width: 0.027,
      height: 0.03,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.027 0.03 C 0.018 0.02 0.009 0.01 0 0 L 0 0 C 0.009 0.01 0.018 0.02 0.027 0.03 L 0.027 0.03 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.027,
    height: 0.030,
    viewBox: "0 0 0.027 0.030",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.961,
      top: 12.515,
      width: 0.027,
      height: 0.03,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.009 0.01 0.018 0.02 0.027 0.03 L 0.026 0.03 C 0.018 0.02 0.009 0.01 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.027,
    height: 0.031,
    viewBox: "0 0 0.027 0.031",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.991,
      top: 12.545,
      width: 0.027,
      height: 0.031,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.009 0.01 0.017 0.02 0.026 0.031 L 0.027 0.029 C 0.018 0.019 0.009 0.01 0 0 L 0 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.028,
    height: 0.032,
    viewBox: "0 0 0.028 0.032",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.021,
      top: 12.574,
      width: 0.028,
      height: 0.032,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.028 0.029 C 0.019 0.02 0.01 0.01 0.002 0 L 0 0.002 C 0.009 0.011 0.018 0.021 0.026 0.032 L 0.028 0.03 L 0.028 0.029 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.028,
    height: 0.032,
    viewBox: "0 0 0.028 0.032",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.05,
      top: 12.603,
      width: 0.028,
      height: 0.032,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.002 C 0.009 0.012 0.018 0.022 0.027 0.032 L 0.028 0.03 C 0.02 0.02 0.011 0.01 0.002 0 L 0 0.002 L 0 0.002 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.007,
    height: 0.007,
    viewBox: "0 0 0.007 0.007",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.639,
      top: 9.695,
      width: 0.007,
      height: 0.007,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.004 0 L 0.007 0.007 L 0 0.006 L 0.004 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.016,
    height: 0.017,
    viewBox: "0 0 0.016 0.017",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.661,
      top: 7.434,
      width: 0.016,
      height: 0.017,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.015 C 0.003 0.01 0.007 0.005 0.01 0 C 0.026 0.015 0.008 0.013 0.002 0.017 L 0 0.015 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.013,
    height: 0.017,
    viewBox: "0 0 0.013 0.017",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.692,
      top: 6.988,
      width: 0.013,
      height: 0.017,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 0.017 C 0.003 0.011 0.003 0.006 0.004 0 C 0.007 0.001 0.01 0.002 0.013 0.003 C 0.009 0.007 0.004 0.011 0 0.016 L 0.002 0.017 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.014,
    height: 0.003,
    viewBox: "0 0 0.014 0.003",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.558,
      top: 13.944,
      width: 0.014,
      height: 0.003,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.005 0 0.01 0.001 0.014 0.003 C 0.01 0.002 0.005 0.001 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.009,
    height: 0.013,
    viewBox: "0 0 0.009 0.013",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.08,
      top: 12.633,
      width: 0.009,
      height: 0.013,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.002 C 0.003 0.005 0.006 0.009 0.009 0.013 C 0.007 0.012 0.004 0.011 0.003 0.01 C 0.002 0.007 0.002 0.003 0.002 0 L 0 0.001 L 0 0.002 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.060,
    height: 0.023,
    viewBox: "0 0 0.060 0.023",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.457,
      top: 11.983,
      width: 0.06,
      height: 0.023,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.06 0.023 C 0.04 0.022 0.02 0.022 0 0.021 C 0.004 0.013 0.009 0.006 0.015 0 C 0.03 0.008 0.045 0.015 0.06 0.023 L 0.06 0.023 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.020,
    height: 0.026,
    viewBox: "0 0 0.020 0.026",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.286,
      top: 9.899,
      width: 0.02,
      height: 0.026,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.013 0.026 C -0.009 0.009 -0.001 0.003 0.02 0 C 0.019 0.009 0.016 0.018 0.013 0.026 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.243,
    height: 0.276,
    viewBox: "0 0 0.243 0.276",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.279,
      top: 15.578,
      width: 0.243,
      height: 0.276,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.24 C 0.066 0.165 0.132 0.09 0.199 0.016 C 0.207 0.007 0.224 0.005 0.237 0 L 0.243 0.005 C 0.202 0.116 0.122 0.198 0.037 0.276 C 0.025 0.264 0.012 0.252 0 0.24 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.124,
    height: 0.296,
    viewBox: "0 0 0.124 0.296",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.814,
      top: 4.448,
      width: 0.124,
      height: 0.296,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.018 0 0.036 0.001 0.054 0.001 C 0.088 0.088 0.121 0.174 0.124 0.296 C 0.042 0.194 0.017 0.099 0 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.124,
    height: 0.291,
    viewBox: "0 0 0.124 0.291",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.846,
      top: 8.696,
      width: 0.124,
      height: 0.291,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.111 0 C 0.115 0.018 0.119 0.036 0.124 0.054 C 0.108 0.136 0.073 0.207 0 0.291 C 0.019 0.167 0.072 0.086 0.111 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.456,
    height: 16.512,
    viewBox: "0 0 28.456 16.512",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.927,
      top: 2.824,
      width: 28.456,
      height: 16.512,
      color: "rgb(255,233,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.117 0.586 C 4.152 -0.057 2.667 -0.127 2.157 0.165 C 2.087 0.247 2.03 1.397 1.701 1.958 C 2.083 2.316 3.402 3.76 3.534 4.436 C 3.916 6.51 1.724 7.442 0 8.095 L 0.928 8.444 C 1.102 8.618 1.163 8.192 2.231 9.011 C 3.191 9.718 4.431 9.33 5.008 9.944 C 5.535 10.358 5.794 11.587 5.983 12.15 C 6.255 12.956 7.307 13.781 8.716 14.555 C 10.112 15.322 13.691 16.07 15.432 16.087 C 17.173 16.104 20.036 14.455 22.718 14.336 C 25.4 14.218 26.756 15.646 27.278 16.512 C 27.696 16.512 28.282 16.468 28.456 16.121 C 28.456 15.705 24.927 13.712 23.571 12.801 C 23.192 12.612 22.052 11.854 20.842 10.854 C 19.735 10.001 19.17 9.147 18.695 8.75 C 18.332 8.433 17.497 8.087 17.348 7.871 C 16.281 6.337 13.443 5.145 12.747 4.972 C 11.18 3.585 8.141 1.247 6.117 0.586 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.927,
      top: 2.824,
      width: 28.456,
      height: 16.512,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28.4556884765625,
      height: 16.512245178222656,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.020,
    height: 19.469,
    viewBox: "0 0 20.020 19.469",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.998,-0.065,0.065,0.998,0.116,-1.307)",
      transformOrigin: "0 0",
      width: 20.02,
      height: 19.469,
      color: "rgb(150,100,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.807 2.68 C 3.525 2.01 3.025 1.507 2.661 1.161 C 2.043 0.548 1.598 0.266 1.269 0.134 L 0.564 0 C 0.902 0.322 1.307 1.181 1.401 1.583 C 2.641 1.797 3.478 2.412 3.807 2.68 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.089 3.216 C 3.299 2.359 2.068 2.055 1.551 2.01 C 1.671 2.225 1.789 2.993 1.833 3.35 C 2.961 3.886 4.277 5.271 4.794 5.897 C 4.681 5.253 4.277 3.842 4.089 3.216 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.833 4.154 C 4.878 5.119 5.169 7.594 4.935 8.711 C 4.371 7.96 2.726 6.433 1.974 5.763 L 1.833 4.154 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.605 9.37 C 4.168 8.093 2.585 6.79 1.974 6.299 L 1.974 6.701 C 2.209 6.835 2.792 7.424 3.243 8.711 C 3.694 9.997 3.42 10.716 3.102 11.257 C 2.773 11.615 2.087 12.356 1.974 12.463 C 1.861 12.571 1.739 12.776 1.692 12.865 C 1.692 13.08 1.598 13.223 1.551 13.267 C 1.438 13.267 1.316 13.178 1.269 13.133 C 0.987 12.63 1.128 11.927 1.833 11.123 C 2.538 10.319 2.726 10.07 2.82 9.649 C 3.086 8.461 2.256 7.281 1.833 6.969 L 1.692 7.237 C 1.805 8.523 0.611 10.542 0 11.391 C 0.338 12.463 1.833 13.982 2.538 14.608 C 2.425 14.5 2.397 14.384 2.397 14.34 C 2.256 13.669 2.576 12.905 3.807 11.793 C 4.122 11.509 4.939 10.347 4.605 9.37 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.78 15.68 C 4.201 15.572 3.055 15.01 2.679 14.742 C 3.243 12.999 5.216 10.855 5.498 10.587 C 5.78 10.319 5.78 9.381 5.78 8.711 C 5.78 8.041 5.498 6.031 4.794 3.886 C 4.23 2.171 2.585 0.759 1.833 0.268 L 2.82 0.536 C 3.243 0.849 4.371 1.849 5.498 3.35 C 6.908 5.227 6.645 8.363 6.572 9.029 C 6.49 9.776 6.437 10.671 6.203 11.793 C 6.134 12.126 5.874 12.285 5.78 12.329 C 4.653 12.865 3.807 14.34 3.525 15.01 C 3.637 15.224 3.854 15.188 3.948 15.144 L 4.512 14.474 C 5.075 13.723 5.968 13.267 6.344 13.133 C 6.457 13.884 6.015 15.144 5.78 15.68 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.921 15.68 C 6.051 15.681 6.729 16.205 7.192 16.205 C 8.817 12.153 9.01 10.131 8.786 7.06 C 8.614 4.704 6.288 2.441 5.114 1.458 L 3.243 0.67 C 4.089 1.385 5.978 3.27 6.767 5.093 C 7.754 7.371 7.613 9.381 7.331 10.587 C 7.049 11.793 7.049 13.401 7.049 13.938 C 7.049 14.366 6.297 15.278 5.921 15.68 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.164 6.031 C 8.375 4.101 6.767 2.457 6.062 1.876 C 6.821 2.211 8.258 3.088 8.882 3.484 C 9.446 4.771 9.305 5.718 9.164 6.031 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.728 5.495 C 9.728 4.851 9.352 3.976 9.164 3.618 L 10.15 4.264 C 10.009 5.47 10.292 6.299 10.933 7.371 C 11.573 8.443 12.689 10.453 12.266 13.267 C 11.927 15.519 11.831 18.485 12.019 19.021 C 11.68 18.593 10.75 18.039 10.327 17.815 C 10.609 17.547 10.997 15.948 10.933 14.474 C 10.868 12.999 11.279 12.061 11.138 10.587 C 11.025 9.408 10.245 8.845 9.869 8.711 C 10.01 8.175 9.728 8.041 9.587 7.237 C 9.446 6.433 9.728 6.299 9.728 5.495 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.361 16.405 C 8.543 15.199 9.869 9.37 9.869 9.247 C 11.138 9.649 10.856 11.659 10.574 12.463 C 10.348 13.107 10.292 13.714 10.292 13.938 L 10.15 14.072 C 9.135 14.286 8.112 16.048 7.925 16.539 L 7.361 16.405 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.882 15.68 C 8.995 15.358 9.775 14.742 10.15 14.474 C 10.375 15.331 9.474 17.282 9.286 17.55 L 8.203 17.148 L 8.882 15.68 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.933 6.701 C 10.543 6.057 10.437 4.914 10.433 4.422 L 11.515 5.324 L 10.933 6.701 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.42 6.433 C 11.645 6.111 11.702 5.584 11.702 5.361 L 12.407 5.897 C 11.984 6.567 12.266 6.969 12.548 7.505 L 12.548 7.505 C 12.83 8.041 13.958 10.185 13.817 12.329 C 13.676 14.474 13.958 14.608 14.24 15.814 C 14.465 16.779 13.958 18.36 13.676 19.03 C 13.337 18.601 13.159 18.405 13.112 18.36 C 13.253 17.556 13.23 16.147 13.08 15.087 C 12.967 14.29 12.76 12.974 12.78 12.286 C 12.864 9.501 11.702 8.175 11.515 7.773 C 11.329 7.371 11.138 6.835 11.42 6.433 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.085 19.432 C 14.634 19.539 14.334 19.387 14.24 19.298 C 14.24 19.075 14.296 18.44 14.522 17.69 C 14.804 16.752 14.804 16.216 14.663 15.68 C 14.522 15.144 14.522 14.742 14.522 14.474 C 14.522 14.259 14.616 13.491 14.663 13.133 C 14.71 13.267 14.86 13.75 15.085 14.608 C 15.311 15.465 15.179 18.181 15.085 19.432 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.495 19.164 L 15.79 19.432 C 15.931 18.494 15.79 15.546 15.649 14.608 C 15.537 13.857 15.038 13.133 14.804 12.865 C 14.804 12.865 14.728 12.542 14.666 11.963 C 14.493 10.355 14.24 9.649 13.112 8.041 C 12.209 6.754 12.36 6.165 12.548 6.031 L 13.112 6.433 C 13.817 7.818 14.877 8.875 15.338 11.324 C 15.52 12.295 15.612 12.626 15.931 13.133 C 16.819 14.542 16.683 17.779 16.495 19.164 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.931 11.793 C 15.411 9.746 14.381 7.996 13.958 7.371 C 14.522 7.692 15.602 8.934 16.072 9.515 C 16.119 9.515 16.411 10.212 17.2 12.999 C 17.99 15.787 18.093 17.913 18.046 18.628 C 17.708 18.628 17.059 18.896 16.777 19.03 C 17.482 18.092 17.106 15.275 17.059 14.876 C 16.915 13.642 16.301 13.247 15.931 11.793 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.469 18.628 C 18.92 18.521 19.221 18.494 19.315 18.494 C 19.089 17.529 18.469 16.037 18.187 15.412 C 18.413 16.162 18.469 17.869 18.469 18.628 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 19.597 18.494 C 19.503 17.69 19.061 15.814 18.046 14.742 C 17.776 13.5 17.221 11.044 17.076 10.747 C 17.07 10.738 17.065 10.73 17.059 10.721 C 17.064 10.726 17.07 10.734 17.076 10.747 C 17.365 11.205 17.966 12.148 18.187 12.463 C 18.328 13.133 18.638 14.527 18.751 14.742 C 18.892 15.01 20.02 17.556 19.879 18.092 C 19.879 18.181 19.823 18.387 19.597 18.494 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 19.879 16.886 L 20.02 16.752 C 20.02 16.484 19.992 15.867 19.879 15.546 C 19.766 15.224 18.986 13.893 18.61 13.267 L 18.892 14.072 L 19.879 16.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.266,
    height: 9.792,
    viewBox: "0 0 9.266 9.792",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.999,-0.046,0.047,0.999,19.180,9.666)",
      transformOrigin: "0 0",
      width: 9.266,
      height: 9.792,
      color: "rgb(150,100,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.011 7.861 C 1.207 7.807 0.623 7.52 0.431 7.384 C 0.718 6.496 1.724 5.403 1.868 5.267 C 2.011 5.13 2.011 4.652 2.011 4.311 C 2.011 3.97 1.868 2.945 1.508 1.853 C 1.269 1.123 0.438 0.242 0.12 0.042 L 0 0.009 C 0.014 -0.011 0.057 0.002 0.12 0.042 L 0.503 0.146 C 0.718 0.305 1.293 0.815 1.868 1.58 C 2.586 2.536 2.452 4.134 2.415 4.473 C 2.373 4.853 2.346 5.31 2.227 5.881 C 2.191 6.051 2.059 6.132 2.011 6.154 C 1.437 6.428 1.006 7.179 0.862 7.52 C 0.919 7.629 1.03 7.611 1.077 7.588 L 1.365 7.247 C 1.652 6.865 2.107 6.632 2.299 6.564 C 2.356 6.947 2.131 7.588 2.011 7.861 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.083 7.861 C 2.149 7.862 2.637 7.862 2.873 7.861 C 3.497 6.635 3.657 5.034 3.542 3.47 C 3.455 2.27 2.27 1.116 1.672 0.616 L 0.718 0.214 C 1.149 0.578 2.112 1.539 2.514 2.467 C 3.017 3.628 2.945 4.652 2.801 5.267 C 2.658 5.881 2.658 6.701 2.658 6.974 C 2.658 7.192 2.275 7.657 2.083 7.861 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.735 2.945 C 3.333 1.962 2.514 1.125 2.155 0.829 C 2.542 0.999 3.274 1.446 3.592 1.648 C 3.879 2.303 3.807 2.786 3.735 2.945 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.023 2.672 C 4.023 2.345 3.831 1.898 3.735 1.716 L 4.238 2.045 C 4.166 2.66 4.31 3.082 4.636 3.628 C 4.963 4.174 5.531 5.199 5.316 6.632 C 5.143 7.779 5.094 9.291 5.19 9.564 C 5.017 9.346 4.543 9.063 4.328 8.95 C 4.471 8.813 4.669 7.998 4.636 7.247 C 4.604 6.496 4.813 6.018 4.741 5.267 C 4.683 4.666 4.286 4.379 4.094 4.311 C 4.166 4.038 4.023 3.97 3.951 3.56 C 3.879 3.15 4.023 3.082 4.023 2.672 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.816 8.231 C 3.419 7.617 4.094 4.647 4.094 4.584 C 4.741 4.789 4.597 5.813 4.454 6.223 C 4.339 6.55 4.31 6.86 4.31 6.974 L 4.238 7.042 C 3.72 7.151 3.199 8.049 3.104 8.299 L 2.816 8.231 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.592 7.861 C 3.649 7.698 4.046 7.384 4.238 7.247 C 4.352 7.684 3.893 8.678 3.797 8.814 L 3.245 8.61 L 3.592 7.861 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.636 3.287 C 4.438 2.959 4.384 2.376 4.382 2.126 L 4.933 2.585 L 4.636 3.287 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.885 3.15 C 5 2.986 5.028 2.718 5.028 2.604 L 5.387 2.877 C 5.172 3.218 5.316 3.423 5.459 3.696 C 5.603 3.97 6.178 5.062 6.106 6.154 C 6.034 7.247 6.178 7.315 6.321 7.93 C 6.436 8.421 6.178 9.227 6.034 9.568 C 5.862 9.35 5.771 9.25 5.747 9.227 C 5.818 8.817 5.807 8.1 5.73 7.559 C 5.673 7.153 5.567 6.483 5.578 6.133 C 5.62 4.714 5.028 4.038 4.933 3.833 C 4.838 3.628 4.741 3.355 4.885 3.15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.752 9.773 C 6.522 9.828 6.369 9.751 6.321 9.705 C 6.321 9.591 6.35 9.268 6.465 8.886 C 6.609 8.408 6.609 8.135 6.537 7.861 C 6.465 7.588 6.465 7.384 6.465 7.247 C 6.465 7.138 6.513 6.746 6.537 6.564 C 6.561 6.632 6.637 6.878 6.752 7.315 C 6.867 7.752 6.8 9.136 6.752 9.773 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.471 9.637 L 7.111 9.773 C 7.183 9.295 7.111 7.793 7.04 7.315 C 6.982 6.933 6.728 6.564 6.609 6.428 C 6.609 6.428 6.57 6.263 6.538 5.968 C 6.45 5.149 6.321 4.789 5.747 3.97 C 5.287 3.314 5.364 3.014 5.459 2.945 L 5.747 3.15 C 6.106 3.856 6.646 4.394 6.881 5.642 C 6.974 6.137 7.02 6.306 7.183 6.564 C 7.636 7.282 7.566 8.931 7.471 9.637 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.183 5.881 C 6.918 4.838 6.393 3.947 6.178 3.628 C 6.465 3.792 7.016 4.425 7.255 4.721 C 7.279 4.721 7.427 5.076 7.83 6.496 C 8.232 7.916 8.285 9 8.261 9.364 C 8.088 9.364 7.758 9.5 7.614 9.568 C 7.973 9.091 7.782 7.655 7.758 7.452 C 7.684 6.823 7.371 6.622 7.183 5.881 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.476 9.364 C 8.706 9.309 8.859 9.295 8.907 9.295 C 8.792 8.804 8.476 8.044 8.333 7.725 C 8.448 8.107 8.476 8.977 8.476 9.364 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.261 7.384 C 8.778 7.93 9.003 8.886 9.051 9.295 C 9.166 9.241 9.195 9.136 9.195 9.091 C 9.266 8.817 8.692 7.52 8.62 7.384 C 8.562 7.274 8.404 6.564 8.333 6.223 C 8.218 6.059 7.902 5.563 7.758 5.335 C 7.815 5.39 8.117 6.724 8.261 7.384 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.195 8.476 L 9.266 8.408 C 9.266 8.271 9.252 7.957 9.195 7.793 C 9.137 7.629 8.74 6.951 8.548 6.632 L 8.692 7.042 L 9.195 8.476 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 0.050,
    height: 0.045,
    viewBox: "0 0 0.050 0.045",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.17,
      top: 11.114,
      width: 0.05,
      height: 0.045,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.048 0 C 0.04 0.015 0.033 0.031 0.023 0.045 C 0.021 0.047 0.008 0.042 0 0.04 C 0.001 0.036 0.001 0.029 0.004 0.028 C 0.019 0.019 0.034 0.011 0.05 0.002 L 0.048 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.061,
    height: 0.062,
    viewBox: "0 0 0.061 0.062",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.278,
      top: 11.025,
      width: 0.061,
      height: 0.062,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 0.062 C 0 0.022 0.027 0.009 0.061 0.002 L 0.059 0 C 0.059 0.04 0.034 0.054 0 0.06 L 0.002 0.062 L 0.002 0.062 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.060,
    height: 0.061,
    viewBox: "0 0 0.060 0.061",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.398,
      top: 10.937,
      width: 0.06,
      height: 0.061,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.059 0 C 0.056 0.036 0.034 0.054 0 0.059 L 0.002 0.061 C 0.003 0.024 0.028 0.009 0.06 0.002 L 0.059 0 L 0.059 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.019,
    height: 0.092,
    viewBox: "0 0 0.019 0.092",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.661,
      top: 9.179,
      width: 0.019,
      height: 0.092,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.019 0 C 0.015 0.031 0.011 0.061 0.006 0.092 C -0.005 0.058 -0.001 0.028 0.019 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.024,
    height: 0.014,
    viewBox: "0 0 0.024 0.014",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.487,
      top: 10.89,
      width: 0.024,
      height: 0.014,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.001 0.014 C 0.006 0.009 0.01 0.004 0.016 0 C 0.017 -0.001 0.021 0.002 0.024 0.003 C 0.016 0.006 0.008 0.009 0 0.013 L 0.001 0.014 L 0.001 0.014 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.011,
    height: 0.018,
    viewBox: "0 0 0.011 0.018",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.603,
      top: 11.612,
      width: 0.011,
      height: 0.018,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.011 0.009 C 0.01 0.012 0.009 0.015 0.008 0.018 C 0.005 0.014 0.001 0.011 0 0.007 C 0 0.006 0.004 0.002 0.006 0 C 0.008 0.003 0.009 0.006 0.011 0.009 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.023,
    height: 0.040,
    viewBox: "0 0 0.023 0.040",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.516,
      top: 15.543,
      width: 0.023,
      height: 0.04,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.035 C 0.002 0.026 0.003 0.017 0.006 0.009 C 0.007 0.005 0.012 0.003 0.015 0 C 0.018 0.008 0.024 0.017 0.022 0.022 C 0.02 0.03 0.011 0.034 0.005 0.04 L 0 0.035 L 0 0.035 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.063,
    height: 0.032,
    viewBox: "0 0 0.063 0.032",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.218,
      top: 11.085,
      width: 0.063,
      height: 0.032,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.061 0 C 0.048 0.025 0.027 0.033 0 0.029 L 0.002 0.032 C 0.014 0.004 0.036 -0.001 0.063 0.002 L 0.061 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.063,
    height: 0.031,
    viewBox: "0 0 0.063 0.031",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.337,
      top: 10.996,
      width: 0.063,
      height: 0.031,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 0.031 C 0.022 0.021 0.042 0.012 0.063 0.002 L 0.061 0 C 0.041 0.01 0.02 0.019 0 0.029 L 0.002 0.031 L 0.002 0.031 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.038,
    height: 0.077,
    viewBox: "0 0 0.038 0.077",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.758,
      top: 13.808,
      width: 0.038,
      height: 0.077,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.028 0 C 0.031 0.019 0.034 0.038 0.038 0.056 C 0.028 0.063 0.018 0.07 0.009 0.077 C 0.006 0.066 -0.002 0.052 0.001 0.044 C 0.006 0.027 0.019 0.014 0.028 0 L 0.028 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.015,
    height: 0.015,
    viewBox: "0 0 0.015 0.015",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.129,
      top: 11.932,
      width: 0.015,
      height: 0.015,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.001 0.014 C 0.005 0.01 0.009 0.005 0.013 0 C 0.019 0.015 0.014 0.019 0 0.013 L 0.001 0.014 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.006,
    height: 0.010,
    viewBox: "0 0 0.006 0.010",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.967,
      top: 16.404,
      width: 0.006,
      height: 0.01,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 0.01 C 0.003 0.007 0.004 0.003 0.006 0 C 0.004 0.003 0.002 0.006 0 0.008 L 0.002 0.01 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.007,
    height: 0.038,
    viewBox: "0 0 0.007 0.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.955,
      top: 8.612,
      width: 0.007,
      height: 0.038,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.007 0 C 0.007 0.013 0.006 0.025 0.006 0.038 C 0.004 0.029 0.001 0.021 0 0.011 C 0 0.008 0.005 0.004 0.007 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.004,
    height: 0.009,
    viewBox: "0 0 0.004 0.009",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.455,
      top: 10.37,
      width: 0.004,
      height: 0.009,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.003 0 C 0.002 0.003 0.001 0.006 0 0.009 C 0.001 0.006 0.003 0.004 0.004 0.001 L 0.003 0 L 0.003 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.006,
    height: 0.007,
    viewBox: "0 0 0.006 0.007",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.737,
      top: 9.192,
      width: 0.006,
      height: 0.007,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.002 L 0.006 0 L 0.005 0.007 L 0 0.002 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.013,
    height: 0.014,
    viewBox: "0 0 0.013 0.014",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.907,
      top: 9.21,
      width: 0.013,
      height: 0.014,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.013 0.003 C 0.009 0.007 0.004 0.011 0 0.014 C 0.003 0.01 0.006 0.005 0.01 0 L 0.013 0.003 L 0.013 0.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.028,
    height: 0.032,
    viewBox: "0 0 0.028 0.032",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.457,
      top: 10.906,
      width: 0.028,
      height: 0.032,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.001 0.032 C 0.01 0.022 0.019 0.011 0.028 0.001 L 0.027 0 C 0.018 0.01 0.009 0.02 0 0.03 L 0.001 0.032 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.007,
    height: 0.009,
    viewBox: "0 0 0.007 0.009",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.768,
      top: 9.133,
      width: 0.007,
      height: 0.009,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 0.009 L 0 0 L 0.007 0.001 L 0.002 0.009 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.031,
    height: 0.046,
    viewBox: "0 0 0.031 0.046",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.028,
      top: 13.424,
      width: 0.031,
      height: 0.046,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 0.046 C 0.006 0.031 0.01 0.015 0.013 0 C 0.02 0.006 0.026 0.012 0.031 0.019 C 0.021 0.027 0.011 0.035 0 0.043 L 0.002 0.045 L 0.002 0.046 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.013,
    height: 0.010,
    viewBox: "0 0 0.013 0.010",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.386,
      top: 6.798,
      width: 0.013,
      height: 0.01,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.011 0 C 0.007 0.003 0.004 0.007 0 0.01 C 0.001 0.007 0.001 0.003 0.003 0.003 C 0.006 0.001 0.009 0.002 0.013 0.002 L 0.011 0 L 0.011 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.014,
    height: 0.009,
    viewBox: "0 0 0.014 0.009",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.012,
      top: 13.467,
      width: 0.014,
      height: 0.009,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.013 0 C 0.009 0.003 0.004 0.006 0 0.009 C 0.001 0.006 0.002 0.002 0.004 0.001 C 0.007 0 0.011 0.002 0.014 0.002 L 0.013 0 L 0.013 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.013,
    height: 0.013,
    viewBox: "0 0 0.013 0.013",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.264,
      top: 12.799,
      width: 0.013,
      height: 0.013,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.01 C 0.001 0.007 0.003 0.003 0.005 0 C 0.007 0.003 0.01 0.007 0.013 0.01 C 0.01 0.011 0.006 0.012 0.003 0.013 L 0 0.01 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.016,
    height: 0.016,
    viewBox: "0 0 0.016 0.016",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.1,
      top: 11.186,
      width: 0.016,
      height: 0.016,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.016 C 0.004 0.01 0.008 0.005 0.011 0 C 0.024 0.018 0.007 0.012 0 0.015 L 0.001 0.016 L 0 0.016 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.011,
    height: 0.014,
    viewBox: "0 0 0.011 0.014",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.795,
      top: 9.068,
      width: 0.011,
      height: 0.014,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.011 0.008 C 0.009 0.01 0.007 0.012 0.005 0.014 C 0.003 0.012 0 0.009 0 0.007 C 0 0.004 0.004 0.002 0.006 0 C 0.007 0.003 0.009 0.005 0.011 0.008 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.027,
    height: 0.030,
    viewBox: "0 0 0.027 0.030",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.069,
      top: 11.205,
      width: 0.027,
      height: 0.03,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.026 0 C 0.018 0.01 0.009 0.02 0 0.03 L 0 0.03 C 0.009 0.02 0.018 0.011 0.027 0.001 L 0.026 0 L 0.026 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.012,
    height: 0.015,
    viewBox: "0 0 0.012 0.015",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.824,
      top: 9.008,
      width: 0.012,
      height: 0.015,
      color: "rgb(131,132,141)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.012 0.009 C 0.01 0.011 0.007 0.013 0.005 0.015 C 0.003 0.012 0 0.01 0 0.007 C 0 0.005 0.004 0.002 0.006 0 C 0.008 0.003 0.01 0.005 0.012 0.009 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.007,
    height: 0.008,
    viewBox: "0 0 0.007 0.008",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.901,
      top: 14.285,
      width: 0.007,
      height: 0.008,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.004 L 0.007 0 L 0.006 0.008 L 0 0.004 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.854,
    height: 10.777,
    viewBox: "0 0 22.854 10.777",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.653,
      top: 12.276,
      width: 22.854,
      height: 10.777,
      color: "rgb(241,224,178)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.677 9.379 C 14.732 9.323 14.783 9.262 14.843 9.212 C 15.185 8.927 15.478 8.599 15.728 8.232 C 15.761 8.183 15.787 8.129 15.809 8.074 C 15.937 7.762 16.093 7.463 16.256 7.167 C 16.299 7.089 16.346 7.014 16.39 6.936 C 16.399 6.921 16.4 6.902 16.411 6.863 C 16.372 6.881 16.349 6.886 16.333 6.899 C 16.229 6.985 16.128 7.073 16.025 7.158 C 15.682 7.438 15.327 7.7 14.943 7.922 C 14.814 7.996 14.691 8.082 14.56 8.153 C 14.214 8.339 13.85 8.488 13.473 8.6 C 13.264 8.663 13.049 8.703 12.827 8.698 C 12.738 8.696 12.649 8.701 12.559 8.7 C 12.093 8.699 11.657 8.575 11.239 8.376 C 11.205 8.36 11.162 8.35 11.152 8.304 C 11.182 8.283 11.21 8.301 11.236 8.311 C 11.511 8.417 11.795 8.486 12.086 8.529 C 12.651 8.612 13.197 8.551 13.721 8.32 C 13.968 8.211 14.202 8.08 14.419 7.921 C 14.755 7.673 15.09 7.424 15.416 7.164 C 15.948 6.739 16.495 6.333 17.05 5.939 C 17.351 5.726 17.675 5.552 18.007 5.392 C 18.101 5.347 18.199 5.316 18.33 5.288 C 18.299 5.326 18.289 5.345 18.273 5.357 C 17.995 5.569 17.748 5.814 17.516 6.073 C 17.4 6.203 17.287 6.335 17.172 6.465 C 17.149 6.49 17.121 6.512 17.096 6.535 C 17.085 6.551 17.075 6.566 17.065 6.582 C 17.065 6.582 17.066 6.58 17.066 6.58 C 17.04 6.591 17.016 6.604 17.033 6.64 L 17.034 6.638 C 17.021 6.639 17.002 6.634 16.994 6.642 C 16.954 6.678 16.914 6.716 16.879 6.758 C 16.658 7.02 16.467 7.303 16.31 7.609 C 16.09 8.036 15.875 8.467 15.6 8.863 C 15.47 9.05 15.336 9.235 15.202 9.419 C 15.193 9.432 15.17 9.433 15.154 9.44 C 15.147 9.391 15.181 9.357 15.203 9.319 C 15.245 9.247 15.29 9.175 15.334 9.103 C 15.348 9.079 15.369 9.054 15.351 9.022 C 15.318 9.001 15.295 9.024 15.274 9.043 C 15.144 9.159 14.992 9.245 14.842 9.332 C 14.791 9.362 14.739 9.394 14.674 9.377 L 14.677 9.379 Z M 16.437 6.817 C 16.451 6.819 16.464 6.819 16.452 6.8 C 16.447 6.806 16.443 6.812 16.438 6.818 C 16.431 6.823 16.425 6.827 16.419 6.832 C 16.423 6.835 16.428 6.838 16.433 6.841 C 16.434 6.833 16.436 6.825 16.437 6.817 Z M 15.383 8.973 C 15.381 8.972 15.377 8.969 15.376 8.969 C 15.372 8.971 15.37 8.975 15.367 8.978 C 15.372 8.979 15.378 8.981 15.383 8.982 L 15.383 8.973 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.961 9.916 C 13.949 9.937 13.941 9.963 13.924 9.978 C 13.781 10.1 13.637 10.221 13.492 10.341 C 13.446 10.379 13.396 10.412 13.35 10.449 C 13.083 10.668 12.774 10.77 12.43 10.776 C 12.111 10.783 11.796 10.749 11.484 10.686 C 11.244 10.637 11.019 10.549 10.81 10.419 C 10.778 10.399 10.748 10.366 10.703 10.39 C 10.703 10.39 10.704 10.391 10.704 10.391 C 10.701 10.374 10.703 10.351 10.692 10.341 C 10.671 10.321 10.644 10.309 10.619 10.293 C 10.53 10.171 10.441 10.049 10.353 9.926 C 10.345 9.915 10.347 9.898 10.344 9.884 C 10.382 9.869 10.412 9.889 10.441 9.907 C 10.513 9.952 10.588 9.992 10.653 10.045 C 10.899 10.244 11.186 10.351 11.489 10.418 C 11.693 10.462 11.898 10.5 12.104 10.53 C 12.257 10.552 12.411 10.537 12.564 10.511 C 12.765 10.477 12.967 10.447 13.152 10.356 C 13.281 10.292 13.406 10.221 13.53 10.149 C 13.642 10.084 13.748 10.011 13.859 9.944 C 13.887 9.927 13.922 9.92 13.954 9.909 L 13.961 9.916 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.717 5.986 C 3.687 5.969 3.659 5.949 3.628 5.937 C 3.132 5.74 2.718 5.431 2.37 5.032 C 2.249 4.893 2.126 4.757 2.007 4.617 C 1.845 4.427 1.699 4.227 1.589 4.003 C 1.572 3.967 1.557 3.931 1.542 3.894 C 1.539 3.886 1.544 3.875 1.546 3.864 C 1.553 3.866 1.565 3.865 1.568 3.87 C 1.764 4.164 2.001 4.425 2.243 4.682 C 2.455 4.907 2.688 5.107 2.947 5.277 C 3.08 5.364 3.213 5.452 3.346 5.537 C 3.481 5.624 3.628 5.685 3.78 5.734 C 4.091 5.836 4.4 5.949 4.721 6.02 C 4.768 6.03 4.813 6.055 4.858 6.072 C 4.775 6.067 4.691 6.067 4.609 6.054 C 4.39 6.018 4.169 6.022 3.948 6.015 C 3.894 6.013 3.84 6.01 3.786 6.008 C 3.762 6.001 3.738 5.993 3.715 5.985 L 3.717 5.986 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 19.899 5.352 C 19.943 5.351 19.989 5.355 20.033 5.348 C 20.256 5.314 20.478 5.322 20.701 5.349 C 20.859 5.368 21.018 5.377 21.173 5.417 C 21.51 5.505 21.843 5.604 22.167 5.731 C 22.409 5.826 22.63 5.959 22.839 6.113 C 22.843 6.135 22.848 6.156 22.854 6.185 C 22.765 6.183 22.698 6.149 22.631 6.122 C 22.502 6.069 22.375 6.012 22.245 5.962 C 22.046 5.885 21.845 5.815 21.636 5.766 C 21.375 5.704 21.119 5.627 20.853 5.586 C 20.577 5.544 20.301 5.521 20.022 5.529 C 19.849 5.533 19.675 5.522 19.501 5.518 C 19.62 5.431 19.755 5.381 19.899 5.352 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.172 0.118 C 0.115 0.089 0.057 0.061 0 0.032 C 0.003 0.021 0.005 0.011 0.008 0 C 0.151 0.035 0.299 0.055 0.433 0.126 C 0.775 0.309 1.066 0.552 1.312 0.85 C 1.387 0.941 1.463 1.033 1.538 1.125 C 1.62 1.226 1.687 1.336 1.729 1.459 C 1.856 1.823 1.981 2.188 2.055 2.568 C 2.084 2.713 2.102 2.861 2.125 3.007 C 2.111 3.007 2.097 3.007 2.083 3.007 C 2.02 2.804 1.954 2.602 1.893 2.398 C 1.768 1.977 1.592 1.581 1.344 1.217 C 1.232 1.053 1.104 0.902 0.965 0.76 C 0.944 0.739 0.92 0.72 0.902 0.697 C 0.721 0.466 0.473 0.316 0.239 0.15 C 0.219 0.136 0.195 0.128 0.172 0.118 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.821 7.861 C 8.844 7.867 8.869 7.87 8.891 7.88 C 9.067 7.971 9.239 8.069 9.405 8.178 C 9.592 8.3 9.786 8.41 9.977 8.525 C 9.989 8.533 10.003 8.539 10.015 8.548 C 10.297 8.748 10.612 8.878 10.937 8.99 C 10.95 8.994 10.962 9.002 10.971 9.023 C 10.923 9.016 10.875 9.012 10.828 9.003 C 10.671 8.972 10.522 8.918 10.372 8.867 C 10.07 8.764 9.788 8.619 9.517 8.454 C 9.428 8.4 9.345 8.336 9.258 8.28 C 9.234 8.265 9.205 8.258 9.178 8.248 L 9.18 8.249 C 9.16 8.233 9.14 8.217 9.12 8.201 C 9.024 8.101 8.927 8.001 8.832 7.9 C 8.824 7.891 8.824 7.874 8.821 7.861 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.914 9.882 C 10.885 9.878 10.855 9.878 10.828 9.87 C 10.63 9.806 10.44 9.728 10.266 9.613 C 10.227 9.587 10.192 9.545 10.136 9.557 L 10.137 9.558 C 10.14 9.535 10.128 9.526 10.106 9.526 L 10.108 9.528 C 10.111 9.492 10.091 9.476 10.061 9.467 C 9.954 9.326 9.847 9.186 9.741 9.046 C 9.664 8.944 9.587 8.843 9.51 8.741 C 9.494 8.718 9.467 8.699 9.478 8.664 C 9.524 8.662 9.548 8.697 9.577 8.722 C 9.723 8.856 9.869 8.988 10.012 9.125 C 10.144 9.251 10.269 9.385 10.403 9.51 C 10.471 9.573 10.548 9.628 10.625 9.681 C 10.719 9.745 10.817 9.803 10.913 9.864 C 10.913 9.87 10.913 9.876 10.914 9.882 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.914 9.882 C 10.913 9.876 10.913 9.87 10.913 9.864 C 11.007 9.902 11.101 9.94 11.195 9.978 C 11.092 9.968 10.993 9.95 10.914 9.882 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.583 10.115 C 11.526 10.102 11.49 10.094 11.454 10.086 C 11.494 10.073 11.533 10.067 11.583 10.115 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.356 10.058 C 11.326 10.05 11.296 10.041 11.261 10.03 C 11.305 9.993 11.328 10.036 11.356 10.058 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.068,
    height: 0.118,
    viewBox: "0 0 0.068 0.118",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.744,
      top: 21.714,
      width: 0.068,
      height: 0.118,
      color: "rgb(193,174,158)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.064 0 C 0.081 0.06 0.043 0.09 0.001 0.118 C -0.004 0.065 0.013 0.023 0.064 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.005,
    height: 0.011,
    viewBox: "0 0 0.005 0.011",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.323,
      top: 21.653,
      width: 0.005,
      height: 0.011,
      color: "rgb(193,174,158)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.004 0 C 0.002 0.004 0.001 0.007 0 0.011 C 0.002 0.008 0.004 0.005 0.005 0.002 L 0.004 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.024,
    height: 0.020,
    viewBox: "0 0 0.024 0.020",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.715,
      top: 21.83,
      width: 0.024,
      height: 0.02,
      color: "rgb(193,174,158)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.024 0 C 0.021 0.007 0.018 0.014 0.015 0.02 C 0.01 0.015 0.005 0.01 0 0.005 C 0.008 0.003 0.016 0.002 0.024 0 L 0.024 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.019,
    height: 0.019,
    viewBox: "0 0 0.019 0.019",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.608,
      top: 22.168,
      width: 0.019,
      height: 0.019,
      color: "rgb(193,174,158)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.014 C 0.004 0.009 0.012 0 0.012 0 C 0.028 0.013 0.014 0.015 0.005 0.019 L 0 0.014 L 0 0.014 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.023,
    height: 0.016,
    viewBox: "0 0 0.023 0.016",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.964,
      top: 6.31,
      width: 0.023,
      height: 0.016,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.009 0.016 C 0.006 0.011 0.003 0.005 0 0 C 0.008 0.001 0.016 0.001 0.023 0.002 C 0.019 0.006 0.014 0.011 0.009 0.016 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.028,
    height: 0.016,
    viewBox: "0 0 0.028 0.016",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.085,
      top: 12.182,
      width: 0.028,
      height: 0.016,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.028 0.015 C 0.019 0.015 0.009 0.016 0 0.016 C 0.005 0.011 0.009 0.005 0.014 0 C 0.019 0.005 0.024 0.01 0.028 0.015 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.027,
    height: 0.015,
    viewBox: "0 0 0.027 0.015",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.864,
      top: 14.684,
      width: 0.027,
      height: 0.015,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.027 0.014 C 0.018 0.015 0.009 0.015 0 0.015 C 0.004 0.01 0.009 0.005 0.013 0 C 0.018 0.004 0.023 0.009 0.027 0.014 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.290,
    height: 0.294,
    viewBox: "0 0 0.290 0.294",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.986,
      top: 0.795,
      width: 0.29,
      height: 0.294,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.022 0.051 C 0.095 -0.009 0.171 -0.018 0.251 0.035 C 0.264 0.072 0.285 0.108 0.289 0.145 C 0.297 0.216 0.252 0.274 0.188 0.29 C 0.12 0.306 0.058 0.279 0.022 0.221 C -0.014 0.164 0 0.107 0.022 0.051 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.104,
    height: 0.083,
    viewBox: "0 0 0.104 0.083",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.854,
      top: 2.124,
      width: 0.104,
      height: 0.083,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.104 0.043 C 0.074 0.062 0.056 0.082 0.038 0.083 C 0.01 0.085 -0.005 0.059 0.002 0.033 C 0.006 0.019 0.029 -0.002 0.039 0 C 0.058 0.004 0.075 0.022 0.104 0.043 L 0.104 0.043 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.107,
    height: 0.087,
    viewBox: "0 0 0.107 0.087",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.168,
      top: 1.082,
      width: 0.107,
      height: 0.087,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.003 0.048 C 0.031 0.016 0.064 -0.002 0.107 0 C 0.072 0.029 0.036 0.058 0 0.087 C 0.001 0.074 0.002 0.061 0.003 0.048 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.024,
    height: 0.029,
    viewBox: "0 0 0.024 0.029",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.383,
      top: 7.894,
      width: 0.024,
      height: 0.029,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.024 0.009 C 0.019 0.016 0.011 0.029 0.01 0.029 C -0.008 0.016 0.002 0.008 0.014 0 L 0.024 0.009 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.047,
    height: 0.047,
    viewBox: "0 0 0.047 0.047",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.398,
      top: 7.856,
      width: 0.047,
      height: 0.047,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.038 C 0.006 0.025 0.013 0.013 0.019 0 C 0.028 0.008 0.038 0.016 0.047 0.024 C 0.035 0.032 0.023 0.039 0.011 0.047 L 0 0.038 L 0 0.038 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.021,
    height: 0.012,
    viewBox: "0 0 0.021 0.012",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.954,
      top: 9.862,
      width: 0.021,
      height: 0.012,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.021 0.008 C 0.014 0.01 0.007 0.011 0 0.012 C 0.004 0.008 0.009 0.004 0.013 0 L 0.021 0.008 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.015,
    height: 0.015,
    viewBox: "0 0 0.015 0.015",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.09,
      top: 19.076,
      width: 0.015,
      height: 0.015,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.001 0.015 C 0.004 0.01 0.008 0.005 0.012 0 C 0.021 0.016 0.011 0.016 0 0.014 L 0.001 0.015 L 0.001 0.015 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.015,
    height: 0.019,
    viewBox: "0 0 0.015 0.019",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.071,
      top: 19.094,
      width: 0.015,
      height: 0.019,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.015 0 C 0.014 0.006 0.012 0.013 0.011 0.019 C 0.008 0.016 0.004 0.014 0 0.012 C 0.005 0.008 0.01 0.004 0.015 0.001 L 0.015 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.013,
    height: 0.011,
    viewBox: "0 0 0.013 0.011",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.02,
      top: 21.246,
      width: 0.013,
      height: 0.011,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.013 0.003 L 0.013 0.011 C 0.009 0.009 0.004 0.008 0 0.007 C 0.002 0.004 0.004 0.001 0.007 0 C 0.008 0 0.011 0.002 0.013 0.003 L 0.013 0.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.014,
    height: 0.016,
    viewBox: "0 0 0.014 0.016",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.014,
      top: 9.048,
      width: 0.014,
      height: 0.016,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.008 0.016 C 0.005 0.01 0.003 0.005 0 0 C 0.005 0.003 0.009 0.006 0.014 0.009 L 0.008 0.016 L 0.008 0.016 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.040,
    height: 0.034,
    viewBox: "0 0 0.040 0.034",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.022,
      top: 4.775,
      width: 0.04,
      height: 0.034,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.038 0 C 0.031 0.011 0.023 0.022 0.016 0.034 C 0.01 0.028 0.005 0.022 0 0.015 C 0.013 0.011 0.027 0.006 0.04 0.002 L 0.038 0 L 0.038 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.010,
    height: 0.014,
    viewBox: "0 0 0.010 0.014",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.065,
      top: 4.759,
      width: 0.01,
      height: 0.014,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.001 0.014 C 0.004 0.009 0.007 0.005 0.01 0 C 0.01 0.002 0.011 0.006 0.01 0.007 C 0.007 0.01 0.003 0.011 0 0.013 L 0.001 0.014 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.062,
    height: 0.037,
    viewBox: "0 0 0.062 0.037",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.125,
      top: 12.747,
      width: 0.062,
      height: 0.037,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.036 C 0.01 0.005 0.029 -0.008 0.062 0.005 C 0.049 0.031 0.029 0.041 0 0.036 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.304,
    height: 0.168,
    viewBox: "0 0 0.304 0.168",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.201,
      top: 10.172,
      width: 0.304,
      height: 0.168,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.168 C 0.008 0.157 0.014 0.141 0.025 0.136 C 0.116 0.09 0.208 0.045 0.301 0 C 0.302 0.01 0.303 0.02 0.304 0.031 C 0.211 0.093 0.115 0.152 0 0.168 L 0 0.168 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.059,
    height: 0.048,
    viewBox: "0 0 0.059 0.048",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.502,
      top: 10.155,
      width: 0.059,
      height: 0.048,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.004 0.048 C 0.002 0.038 0.001 0.027 0 0.017 C 0.018 0.005 0.036 -0.008 0.059 0.006 C 0.055 0.039 0.027 0.04 0.004 0.048 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.061,
    height: 0.041,
    viewBox: "0 0 0.061 0.041",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.561,
      top: 10.124,
      width: 0.061,
      height: 0.041,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.038 C 0.013 -0.002 0.024 -0.007 0.061 0.007 C 0.053 0.043 0.029 0.045 0 0.038 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.032,
    height: 0.030,
    viewBox: "0 0 0.032 0.030",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.093,
      top: 13.041,
      width: 0.032,
      height: 0.03,
      color: "rgb(139,124,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.032 0.025 C 0.021 0.026 0.011 0.028 0 0.03 C 0.004 0.02 0.008 0.01 0.012 0 C 0.018 0.008 0.025 0.016 0.032 0.025 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.966,
    height: 1.499,
    viewBox: "0 0 2.966 1.499",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.426,
      top: 2.374,
      width: 2.966,
      height: 1.499,
      color: "rgb(246,244,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.952 0.004 C 2.957 0.098 2.967 0.192 2.966 0.286 C 2.961 0.494 2.885 0.683 2.794 0.865 C 2.764 0.926 2.712 0.977 2.665 1.027 C 2.603 1.091 2.537 1.152 2.468 1.21 C 2.435 1.237 2.395 1.264 2.354 1.274 C 2.075 1.344 1.794 1.41 1.514 1.476 C 1.276 1.532 1.051 1.476 0.83 1.39 C 0.577 1.292 0.382 1.119 0.211 0.915 C 0.107 0.79 0.068 0.634 0.031 0.479 C 0.015 0.412 0.009 0.342 0.001 0.273 C -0.002 0.251 0.003 0.228 0.005 0.172 C 0.032 0.227 0.045 0.251 0.055 0.277 C 0.119 0.432 0.218 0.562 0.346 0.667 C 0.704 0.962 1.113 1.092 1.579 1.046 C 1.798 1.024 2.009 0.973 2.211 0.885 C 2.339 0.828 2.458 0.758 2.563 0.665 C 2.684 0.557 2.777 0.431 2.83 0.277 C 2.861 0.184 2.894 0.092 2.927 0 C 2.935 0.001 2.944 0.003 2.952 0.004 L 2.952 0.004 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.937,
    height: 0.787,
    viewBox: "0 0 0.937 0.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.081,
      top: 2.348,
      width: 0.937,
      height: 0.787,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.404 0 C 0.476 0.015 0.552 0.022 0.62 0.047 C 0.774 0.103 0.874 0.217 0.92 0.373 C 0.962 0.514 0.934 0.658 0.746 0.728 C 0.598 0.784 0.451 0.812 0.297 0.757 C 0.256 0.742 0.214 0.724 0.177 0.701 C -0.03 0.571 -0.061 0.265 0.113 0.095 C 0.161 0.049 0.217 0.019 0.284 0.014 C 0.323 0.011 0.363 0.013 0.402 0.013 C 0.403 0.009 0.404 0.005 0.404 0 L 0.404 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.324,
    height: 1.882,
    viewBox: "0 0 1.324 1.882",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.649,
      top: 2.011,
      width: 1.324,
      height: 1.882,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.227 C 0.086 0.093 0.117 0.062 0.237 0 C 0.24 0.026 0.245 0.048 0.245 0.07 C 0.252 0.253 0.276 0.435 0.325 0.612 C 0.356 0.723 0.399 0.827 0.458 0.926 C 0.508 1.012 0.556 1.099 0.61 1.182 C 0.644 1.236 0.683 1.289 0.727 1.336 C 0.826 1.44 0.928 1.541 1.031 1.642 C 1.118 1.729 1.204 1.819 1.324 1.88 C 1.219 1.89 1.02 1.848 0.839 1.779 C 0.824 1.755 0.802 1.748 0.774 1.753 L 0.776 1.754 C 0.749 1.725 0.725 1.695 0.697 1.669 C 0.661 1.636 0.621 1.606 0.583 1.575 C 0.468 1.479 0.391 1.352 0.306 1.231 C 0.208 1.092 0.151 0.935 0.098 0.776 C 0.07 0.693 0.047 0.607 0.032 0.52 C 0.016 0.423 0.011 0.325 0.001 0.227 L 0 0.227 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.753,
    height: 1.748,
    viewBox: "0 0 0.753 1.748",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.286,
      top: 1.779,
      width: 0.753,
      height: 1.748,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.451 1.537 C 0.333 1.628 0.202 1.694 0.064 1.748 C 0.043 1.737 0.021 1.726 0 1.715 C 0.024 1.69 0.046 1.663 0.072 1.64 C 0.356 1.373 0.509 1.044 0.545 0.658 C 0.552 0.589 0.566 0.521 0.573 0.452 C 0.587 0.304 0.599 0.156 0.612 0.001 C 0.673 -0.005 0.716 0.03 0.753 0.078 C 0.75 0.284 0.764 0.49 0.725 0.695 C 0.682 0.928 0.638 1.159 0.524 1.37 C 0.501 1.413 0.475 1.456 0.485 1.509 L 0.485 1.508 C 0.474 1.517 0.463 1.527 0.451 1.537 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.401,
    height: 0.392,
    viewBox: "0 0 0.401 0.392",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.277,
      top: 2.267,
      width: 0.401,
      height: 0.392,
      color: "rgb(254,249,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.215 0 C 0.324 0.001 0.405 0.083 0.401 0.189 C 0.397 0.292 0.277 0.394 0.162 0.392 C 0.071 0.39 0 0.312 0 0.214 C -0.001 0.087 0.089 -0.001 0.215 0 L 0.215 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.065,
    height: 0.029,
    viewBox: "0 0 0.065 0.029",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.424,
      top: 3.763,
      width: 0.065,
      height: 0.029,
      color: "rgb(150,100,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.001 C 0.027 -0.004 0.049 0.004 0.065 0.028 C 0.039 0.03 0.014 0.03 0 0.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.738,
      top: 3.287,
      width: 0.03,
      height: 0.029,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Vector"), /*#__PURE__*/React.createElement("svg", {
    width: 33.722,
    height: 21.936,
    viewBox: "0 0 33.722 21.936",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.154,
      top: 0.136,
      width: 33.722,
      height: 21.936,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.372 10.98 C 7.414 10.995 7.436 10.962 7.46 10.94 C 7.577 10.834 7.694 10.726 7.81 10.618 C 7.926 10.509 8.054 10.415 8.194 10.34 C 8.353 10.253 8.489 10.139 8.618 10.016 C 8.75 9.889 8.888 9.769 9.033 9.656 C 9.151 9.566 9.258 9.462 9.366 9.36 C 9.457 9.275 9.539 9.183 9.63 9.098 C 9.756 8.979 9.88 8.857 10.016 8.751 C 10.159 8.64 10.278 8.508 10.389 8.369 C 10.475 8.261 10.556 8.148 10.635 8.034 C 10.703 7.936 10.748 7.827 10.781 7.711 C 10.824 7.553 10.842 7.391 10.868 7.23 C 10.875 7.249 10.887 7.266 10.889 7.285 C 10.914 7.51 10.9 7.729 10.809 7.94 C 10.674 8.253 10.492 8.534 10.266 8.788 C 9.959 9.134 9.624 9.45 9.28 9.758 C 8.936 10.067 8.566 10.343 8.206 10.631 C 7.857 10.91 7.506 11.187 7.161 11.47 C 7.004 11.598 6.856 11.739 6.705 11.875 C 6.584 11.985 6.464 12.097 6.345 12.21 C 6.266 12.285 6.185 12.358 6.113 12.44 C 5.847 12.741 5.585 13.046 5.322 13.349 C 5.267 13.412 5.214 13.476 5.161 13.54 C 5.151 13.53 5.142 13.519 5.132 13.509 C 5.13 13.447 5.18 13.412 5.208 13.368 C 5.294 13.235 5.386 13.105 5.481 12.978 C 5.557 12.875 5.64 12.775 5.723 12.677 C 5.806 12.578 5.896 12.485 5.976 12.384 C 6.13 12.188 6.309 12.018 6.5 11.857 C 6.598 11.774 6.686 11.678 6.779 11.589 C 6.964 11.41 7.151 11.231 7.337 11.052 C 7.357 11.032 7.385 11.015 7.373 10.979 L 7.372 10.98 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.868 19.141 C 8.985 19.126 9.096 19.15 9.202 19.197 C 9.406 19.288 9.611 19.378 9.812 19.476 C 9.882 19.51 9.947 19.559 10.008 19.609 C 10.212 19.776 10.41 19.949 10.614 20.115 C 10.787 20.255 10.967 20.388 11.161 20.501 C 11.357 20.615 11.57 20.676 11.793 20.712 C 12.172 20.772 12.554 20.786 12.937 20.774 C 13.036 20.771 13.135 20.758 13.234 20.751 C 13.352 20.742 13.472 20.735 13.59 20.724 C 13.808 20.706 14.025 20.676 14.243 20.669 C 14.396 20.663 14.551 20.68 14.703 20.699 C 15.06 20.745 15.398 20.863 15.73 20.998 C 15.872 21.056 16.014 21.116 16.153 21.182 C 16.265 21.235 16.373 21.296 16.48 21.359 C 16.562 21.406 16.638 21.462 16.717 21.514 C 16.747 21.6 16.748 21.6 16.832 21.59 C 16.963 21.676 17.095 21.762 17.225 21.85 C 17.249 21.865 17.267 21.888 17.288 21.908 C 17.028 21.884 16.78 21.83 16.565 21.666 C 16.38 21.525 16.177 21.409 15.968 21.303 C 15.804 21.219 15.632 21.153 15.455 21.106 C 15.176 21.033 14.897 20.965 14.615 20.909 C 14.253 20.838 13.887 20.82 13.517 20.85 C 13.186 20.877 12.854 20.91 12.52 20.897 C 12.346 20.89 12.174 20.875 12.003 20.841 C 11.813 20.805 11.621 20.777 11.43 20.743 C 11.232 20.709 11.05 20.634 10.882 20.523 C 10.64 20.365 10.413 20.187 10.196 19.998 C 10.034 19.857 9.86 19.737 9.662 19.652 C 9.594 19.623 9.527 19.59 9.461 19.557 C 9.439 19.546 9.419 19.53 9.402 19.513 C 9.257 19.359 9.086 19.243 8.891 19.16 C 8.883 19.156 8.875 19.148 8.868 19.141 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.334 3.981 C 18.338 4.005 18.336 4.031 18.346 4.052 C 18.38 4.118 18.415 4.184 18.454 4.247 C 18.62 4.511 18.79 4.773 18.954 5.039 C 19.15 5.356 19.317 5.688 19.451 6.035 C 19.555 6.304 19.625 6.582 19.678 6.865 C 19.711 7.04 19.743 7.216 19.733 7.395 C 19.727 7.498 19.723 7.603 19.706 7.705 C 19.66 7.968 19.614 8.232 19.527 8.485 C 19.491 8.588 19.454 8.691 19.411 8.791 C 19.386 8.849 19.348 8.901 19.315 8.956 C 19.324 8.903 19.328 8.848 19.342 8.797 C 19.395 8.596 19.455 8.397 19.506 8.195 C 19.537 8.07 19.557 7.943 19.579 7.816 C 19.587 7.767 19.589 7.717 19.586 7.668 C 19.566 7.236 19.522 6.81 19.357 6.403 C 19.253 6.145 19.146 5.889 19.007 5.649 C 18.834 5.353 18.669 5.054 18.482 4.767 C 18.339 4.547 18.212 4.316 18.082 4.088 C 18.038 4.01 18.007 3.926 17.969 3.845 C 17.895 3.691 17.888 3.528 17.924 3.367 C 17.945 3.269 17.977 3.169 18.027 3.083 C 18.071 3.088 18.06 3.112 18.06 3.129 C 18.06 3.203 18.058 3.277 18.059 3.351 C 18.062 3.468 18.095 3.576 18.154 3.676 C 18.195 3.743 18.22 3.819 18.272 3.879 C 18.272 3.902 18.278 3.92 18.304 3.925 L 18.303 3.923 C 18.296 3.952 18.3 3.976 18.335 3.983 L 18.334 3.981 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.168 12.623 C 1.241 12.502 1.314 12.379 1.389 12.259 C 1.409 12.226 1.438 12.199 1.463 12.17 C 1.455 12.198 1.45 12.227 1.44 12.255 C 1.243 12.774 1.059 13.297 0.921 13.835 C 0.811 14.262 0.719 14.695 0.697 15.137 C 0.682 15.438 0.695 15.741 0.701 16.043 C 0.704 16.192 0.717 16.34 0.734 16.488 C 0.77 16.804 0.843 17.112 0.952 17.411 C 0.965 17.448 0.974 17.487 0.984 17.525 C 0.969 17.502 0.956 17.478 0.939 17.456 C 0.925 17.439 0.908 17.425 0.893 17.41 L 0.894 17.411 C 0.908 17.369 0.886 17.335 0.872 17.298 C 0.809 17.132 0.746 16.966 0.686 16.799 C 0.66 16.725 0.642 16.648 0.617 16.56 C 0.582 16.586 0.554 16.61 0.523 16.628 C 0.461 16.665 0.398 16.66 0.344 16.614 C 0.295 16.573 0.269 16.521 0.286 16.457 C 0.304 16.384 0.361 16.336 0.435 16.335 C 0.474 16.334 0.513 16.343 0.559 16.349 C 0.58 16.216 0.55 16.086 0.542 15.955 C 0.534 15.822 0.534 15.688 0.531 15.555 C 0.529 15.526 0.534 15.495 0.526 15.468 C 0.505 15.391 0.451 15.349 0.378 15.346 C 0.303 15.344 0.249 15.378 0.221 15.455 C 0.212 15.481 0.212 15.512 0.208 15.541 C 0.164 15.486 0.168 15.42 0.176 15.357 C 0.192 15.242 0.329 15.179 0.426 15.242 C 0.462 15.266 0.491 15.3 0.527 15.334 C 0.569 15.135 0.571 14.939 0.564 14.744 C 0.563 14.706 0.534 14.698 0.502 14.696 C 0.516 14.666 0.538 14.637 0.543 14.605 C 0.552 14.546 0.512 14.498 0.455 14.491 C 0.397 14.483 0.344 14.514 0.329 14.567 C 0.312 14.623 0.336 14.678 0.391 14.698 C 0.418 14.708 0.449 14.706 0.478 14.709 C 0.44 14.718 0.402 14.735 0.365 14.734 C 0.272 14.733 0.205 14.639 0.225 14.548 C 0.251 14.43 0.376 14.346 0.506 14.361 C 0.535 14.365 0.563 14.372 0.597 14.379 C 0.638 14.327 0.629 14.264 0.643 14.209 C 0.679 14.066 0.707 13.921 0.737 13.777 C 0.744 13.744 0.743 13.709 0.746 13.675 C 0.773 13.664 0.805 13.658 0.826 13.64 C 0.871 13.603 0.877 13.54 0.846 13.494 C 0.817 13.448 0.754 13.431 0.702 13.453 C 0.651 13.475 0.623 13.531 0.638 13.587 C 0.644 13.61 0.659 13.631 0.67 13.653 C 0.592 13.633 0.564 13.579 0.563 13.504 C 0.563 13.476 0.563 13.447 0.563 13.419 L 0.563 13.421 C 0.575 13.413 0.589 13.407 0.599 13.397 C 0.656 13.335 0.722 13.316 0.801 13.347 C 0.814 13.352 0.829 13.352 0.85 13.356 C 0.862 13.329 0.879 13.304 0.887 13.277 C 0.94 13.09 1.024 12.916 1.114 12.745 C 1.134 12.705 1.15 12.664 1.168 12.623 Z M 0.474 16.518 C 0.449 16.499 0.435 16.481 0.422 16.482 C 0.409 16.483 0.397 16.503 0.385 16.515 C 0.397 16.527 0.407 16.546 0.421 16.548 C 0.434 16.55 0.449 16.533 0.474 16.518 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.989 19.033 C 17.181 19.1 17.382 19.132 17.581 19.164 C 17.713 19.185 17.845 19.202 17.977 19.217 C 18.041 19.224 18.106 19.221 18.17 19.222 C 18.205 19.228 18.241 19.234 18.277 19.24 C 17.938 19.306 17.597 19.316 17.255 19.267 C 17.024 19.234 16.793 19.199 16.566 19.147 C 16.207 19.065 15.867 18.923 15.525 18.791 C 15.344 18.721 15.17 18.638 14.997 18.55 C 14.585 18.341 14.149 18.283 13.695 18.378 C 13.554 18.408 13.414 18.444 13.274 18.475 C 13.247 18.481 13.215 18.495 13.2 18.454 C 13.465 18.29 13.76 18.228 14.065 18.212 C 14.405 18.193 14.741 18.215 15.071 18.303 C 15.216 18.341 15.356 18.391 15.491 18.454 C 15.74 18.568 15.993 18.668 16.252 18.758 C 16.402 18.809 16.548 18.874 16.696 18.931 C 16.756 18.954 16.818 18.971 16.879 18.991 C 16.916 19.005 16.953 19.019 16.989 19.033 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.031 12.618 C 10.107 12.564 10.188 12.514 10.258 12.454 C 10.446 12.291 10.635 12.131 10.841 11.992 C 10.862 11.978 10.88 11.961 10.868 11.932 L 10.866 11.933 C 10.898 11.953 10.925 11.936 10.948 11.919 C 11.015 11.867 11.085 11.818 11.143 11.758 C 11.38 11.518 11.614 11.274 11.847 11.03 C 11.895 10.98 11.939 10.926 11.976 10.868 C 12.091 10.688 12.21 10.51 12.312 10.323 C 12.413 10.137 12.505 9.943 12.585 9.746 C 12.669 9.54 12.73 9.325 12.808 9.116 C 12.881 8.922 12.963 8.731 13.041 8.539 C 13.031 8.637 13.03 8.737 13.011 8.833 C 12.945 9.153 12.88 9.473 12.779 9.785 C 12.681 10.09 12.542 10.37 12.359 10.634 C 12.094 11.015 11.779 11.351 11.442 11.667 C 11.272 11.825 11.082 11.963 10.896 12.104 C 10.671 12.276 10.442 12.441 10.215 12.61 C 9.963 12.797 9.723 12.996 9.495 13.211 C 9.358 13.34 9.214 13.462 9.074 13.588 C 8.923 13.725 8.774 13.863 8.622 13.999 C 8.598 14.021 8.582 14.059 8.538 14.048 C 8.541 13.993 8.583 13.961 8.617 13.927 C 8.77 13.773 8.926 13.621 9.083 13.47 C 9.158 13.398 9.237 13.331 9.311 13.258 C 9.508 13.063 9.698 12.861 9.928 12.702 C 9.947 12.69 9.957 12.665 9.972 12.646 L 9.97 12.648 C 9.998 12.653 10.019 12.642 10.032 12.617 L 10.031 12.618 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.464 9.996 C 17.496 9.99 17.533 9.991 17.562 9.976 C 17.672 9.92 17.781 9.863 17.887 9.799 C 18.047 9.701 18.203 9.597 18.362 9.497 C 18.531 9.39 18.675 9.254 18.788 9.091 C 18.884 8.953 18.968 8.808 19.059 8.667 C 19.074 8.643 19.093 8.621 19.111 8.598 C 19.127 8.64 19.103 8.675 19.09 8.711 C 19 8.942 18.851 9.134 18.683 9.311 C 18.321 9.689 17.897 9.979 17.412 10.177 C 16.918 10.379 16.444 10.618 15.995 10.906 C 15.794 11.035 15.639 11.203 15.52 11.41 C 15.363 11.68 15.415 11.981 15.585 12.187 C 15.684 12.308 15.794 12.412 15.941 12.475 C 15.995 12.498 16.045 12.53 16.097 12.558 C 15.976 12.571 15.861 12.542 15.75 12.497 C 15.583 12.428 15.435 12.33 15.315 12.194 C 15.105 11.955 15.065 11.659 15.24 11.356 C 15.395 11.089 15.603 10.874 15.886 10.74 C 16.101 10.638 16.319 10.542 16.535 10.443 C 16.557 10.433 16.579 10.42 16.601 10.409 C 16.747 10.345 16.894 10.281 17.041 10.216 C 17.044 10.215 17.046 10.208 17.049 10.204 L 17.047 10.205 C 17.161 10.188 17.257 10.129 17.351 10.067 C 17.374 10.059 17.402 10.059 17.406 10.025 L 17.405 10.026 C 17.434 10.033 17.459 10.031 17.466 9.995 L 17.464 9.996 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.262 18.935 C 4.216 18.867 4.233 18.805 4.285 18.75 C 4.311 18.722 4.344 18.7 4.379 18.671 C 4.321 18.543 4.263 18.415 4.205 18.287 C 4.209 18.268 4.215 18.249 4.217 18.229 C 4.221 18.185 4.207 18.15 4.166 18.13 C 4.126 18.111 4.083 18.121 4.047 18.161 C 4.035 18.175 4.029 18.196 4.02 18.213 C 4.002 18.196 3.98 18.183 3.968 18.163 C 3.932 18.104 3.937 18.049 3.987 18.003 C 4.019 17.975 4.059 17.955 4.103 17.927 C 4.082 17.827 4.055 17.723 4.042 17.618 C 4.029 17.517 4.03 17.415 4.024 17.306 C 3.994 17.33 3.971 17.348 3.949 17.366 C 3.947 17.352 3.945 17.337 3.943 17.323 C 3.936 17.273 3.902 17.248 3.855 17.243 C 3.81 17.238 3.768 17.277 3.759 17.331 C 3.755 17.354 3.76 17.379 3.761 17.403 C 3.708 17.386 3.677 17.349 3.669 17.296 C 3.66 17.241 3.663 17.188 3.695 17.139 C 3.769 17.029 3.872 17.021 4.024 17.12 C 4.035 17.04 4.046 16.964 4.055 16.887 C 4.1 16.523 4.175 16.166 4.269 15.811 C 4.277 15.778 4.292 15.746 4.303 15.713 C 4.314 15.714 4.325 15.714 4.336 15.715 C 4.321 15.828 4.311 15.941 4.29 16.053 C 4.218 16.431 4.225 16.812 4.248 17.193 C 4.265 17.47 4.304 17.745 4.386 18.011 C 4.498 18.369 4.663 18.7 4.917 18.981 C 5.003 19.077 5.093 19.169 5.179 19.265 C 5.255 19.35 5.328 19.438 5.402 19.525 C 5.407 19.53 5.404 19.543 5.405 19.552 C 5.345 19.554 5.303 19.517 5.259 19.487 C 5.059 19.351 4.863 19.209 4.688 19.039 C 4.657 19.008 4.621 18.982 4.587 18.953 C 4.577 18.926 4.572 18.896 4.557 18.872 C 4.496 18.774 4.373 18.766 4.3 18.857 C 4.282 18.879 4.274 18.909 4.262 18.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.424 15.675 C 2.421 15.537 2.412 15.398 2.415 15.259 C 2.419 15.031 2.463 14.806 2.521 14.586 C 2.646 14.117 2.795 13.656 2.997 13.213 C 3.107 12.973 3.235 12.745 3.384 12.528 C 3.491 12.373 3.588 12.211 3.7 12.06 C 3.884 11.808 4.068 11.555 4.269 11.316 C 4.579 10.949 4.867 10.563 5.202 10.216 C 5.295 10.12 5.375 10.011 5.463 9.912 C 5.549 9.815 5.638 9.722 5.727 9.629 C 5.744 9.611 5.765 9.596 5.792 9.612 C 5.803 9.644 5.788 9.669 5.767 9.692 C 5.672 9.8 5.576 9.908 5.482 10.017 C 5.169 10.377 4.853 10.734 4.547 11.099 C 4.221 11.488 3.925 11.899 3.646 12.322 C 3.315 12.825 3.041 13.359 2.839 13.927 C 2.731 14.232 2.663 14.547 2.595 14.862 C 2.537 15.133 2.481 15.404 2.424 15.675 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.701 19.465 C 2.714 19.458 2.727 19.452 2.745 19.442 C 2.738 19.423 2.734 19.404 2.724 19.389 C 2.565 19.141 2.437 18.88 2.344 18.601 C 2.291 18.442 2.218 18.289 2.194 18.121 C 2.161 17.881 2.113 17.643 2.121 17.398 C 2.126 17.255 2.11 17.111 2.114 16.967 C 2.122 16.669 2.162 16.376 2.272 16.096 C 2.313 15.99 2.336 15.876 2.408 15.784 C 2.388 15.951 2.363 16.117 2.348 16.285 C 2.334 16.442 2.319 16.601 2.322 16.759 C 2.325 17.026 2.337 17.293 2.355 17.56 C 2.389 18.081 2.488 18.59 2.662 19.083 C 2.718 19.243 2.787 19.396 2.88 19.537 C 2.901 19.569 2.935 19.597 2.925 19.643 L 2.924 19.644 C 2.83 19.609 2.768 19.533 2.701 19.465 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.387 2.991 C 17.387 2.971 17.383 2.951 17.386 2.932 C 17.418 2.763 17.383 2.603 17.327 2.445 C 17.236 2.074 17.065 1.742 16.838 1.437 C 16.771 1.346 16.694 1.263 16.621 1.176 L 16.621 1.175 L 16.613 1.166 C 16.613 1.165 16.613 1.165 16.612 1.164 C 16.501 1.011 16.36 0.887 16.218 0.765 C 16.01 0.587 15.776 0.447 15.533 0.321 C 15.404 0.253 15.267 0.211 15.128 0.178 C 14.93 0.131 14.73 0.095 14.531 0.055 C 14.454 0.039 14.376 0.026 14.298 0.011 C 14.477 -0.016 14.655 0.013 14.831 0.036 C 15.302 0.095 15.732 0.265 16.133 0.515 C 16.272 0.602 16.402 0.701 16.519 0.815 C 16.813 1.101 17.056 1.423 17.241 1.79 C 17.344 1.995 17.416 2.209 17.437 2.439 C 17.438 2.449 17.438 2.459 17.441 2.469 C 17.486 2.649 17.447 2.821 17.387 2.991 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.017 0.994 C 8.872 1.059 8.75 1.157 8.632 1.259 C 8.54 1.339 8.437 1.403 8.327 1.453 C 8.307 1.409 8.347 1.391 8.368 1.368 C 8.595 1.113 8.864 0.914 9.176 0.773 C 9.417 0.664 9.67 0.594 9.925 0.533 C 9.998 0.515 10.072 0.505 10.145 0.491 C 10.391 0.446 10.629 0.487 10.86 0.572 C 11.009 0.627 11.114 0.708 11.222 0.835 C 11.198 0.878 11.158 0.902 11.112 0.92 C 11.094 0.919 11.075 0.919 11.057 0.918 C 10.997 0.885 10.939 0.845 10.876 0.82 C 10.622 0.721 10.357 0.678 10.084 0.695 C 10.003 0.642 9.927 0.651 9.854 0.711 C 9.744 0.706 9.642 0.743 9.539 0.772 C 9.393 0.813 9.251 0.867 9.121 0.947 C 9.078 0.944 9.044 0.962 9.017 0.994 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.296 18.115 C 6.298 18.085 6.304 18.055 6.301 18.026 C 6.264 17.7 6.328 17.385 6.407 17.071 C 6.483 16.769 6.631 16.501 6.802 16.243 C 6.809 16.232 6.825 16.227 6.837 16.218 C 6.821 16.26 6.806 16.301 6.79 16.342 C 6.733 16.48 6.676 16.617 6.62 16.755 C 6.523 16.992 6.497 17.244 6.479 17.496 C 6.47 17.625 6.468 17.754 6.462 17.882 C 6.445 18.211 6.535 18.501 6.781 18.73 C 6.963 18.9 7.181 19.004 7.428 19.045 C 7.512 19.059 7.596 19.071 7.68 19.076 C 7.781 19.082 7.876 19.105 7.963 19.156 C 7.86 19.147 7.756 19.137 7.653 19.13 C 7.554 19.122 7.455 19.12 7.356 19.11 C 7.293 19.103 7.228 19.093 7.168 19.073 C 6.944 18.997 6.744 18.881 6.573 18.717 C 6.55 18.688 6.528 18.658 6.505 18.629 C 6.413 18.474 6.342 18.312 6.314 18.134 C 6.313 18.126 6.302 18.119 6.295 18.112 L 6.296 18.115 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.762 3.315 C 9.811 3.225 9.828 3.124 9.814 3.012 C 9.831 3.002 9.847 2.992 9.874 2.976 C 9.879 3.006 9.885 3.029 9.885 3.051 C 9.88 3.295 9.917 3.535 9.966 3.774 C 10.007 3.973 10.048 4.171 10.092 4.369 C 10.124 4.52 10.169 4.667 10.231 4.808 C 10.29 4.939 10.348 5.071 10.405 5.203 C 10.413 5.22 10.415 5.24 10.419 5.259 C 10.3 5.143 10.227 4.996 10.145 4.855 C 9.999 4.604 9.915 4.331 9.856 4.048 C 9.833 3.937 9.806 3.826 9.792 3.713 C 9.776 3.581 9.771 3.447 9.762 3.315 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.318 11.847 C 13.38 11.799 13.452 11.79 13.527 11.795 C 13.707 11.807 13.877 11.855 14.041 11.928 C 14.158 11.981 14.273 12.037 14.387 12.096 C 14.547 12.178 14.662 12.304 14.722 12.474 C 14.778 12.629 14.848 12.774 14.948 12.905 C 14.956 12.915 14.954 12.933 14.957 12.947 C 14.94 12.942 14.916 12.943 14.906 12.932 C 14.858 12.882 14.811 12.832 14.768 12.777 C 14.677 12.66 14.568 12.56 14.454 12.466 C 14.424 12.441 14.39 12.42 14.355 12.402 C 14.325 12.386 14.298 12.398 14.278 12.424 L 14.273 12.424 C 14.321 12.419 14.343 12.396 14.325 12.369 C 14.309 12.345 14.291 12.321 14.27 12.3 C 14.203 12.234 14.131 12.172 14.067 12.103 C 13.956 11.979 13.819 11.909 13.655 11.885 C 13.592 11.875 13.528 11.863 13.464 11.858 C 13.43 11.855 13.396 11.865 13.362 11.869 C 13.347 11.862 13.333 11.854 13.318 11.847 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.416 19.686 C 2.416 19.646 2.385 19.627 2.36 19.604 C 2.151 19.41 1.961 19.198 1.791 18.969 C 1.755 18.92 1.7 18.878 1.701 18.806 C 1.713 18.804 1.73 18.796 1.736 18.801 C 1.792 18.85 1.844 18.905 1.901 18.951 C 2.059 19.079 2.219 19.205 2.379 19.33 C 2.481 19.409 2.585 19.485 2.688 19.563 C 2.818 19.661 2.949 19.76 3.08 19.859 C 3.106 19.879 3.144 19.891 3.137 19.942 C 3.114 19.94 3.089 19.942 3.067 19.933 C 2.946 19.889 2.826 19.842 2.706 19.796 C 2.609 19.759 2.512 19.723 2.416 19.686 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.113 17.679 C 14.16 17.653 14.206 17.624 14.254 17.602 C 14.313 17.575 14.375 17.557 14.433 17.53 C 14.613 17.449 14.804 17.422 14.997 17.417 C 15.258 17.41 15.521 17.407 15.782 17.435 C 15.811 17.438 15.841 17.431 15.871 17.43 C 15.986 17.477 16.091 17.538 16.178 17.636 C 16.16 17.639 16.15 17.644 16.141 17.642 C 15.851 17.558 15.553 17.549 15.254 17.565 C 15.041 17.576 14.827 17.591 14.614 17.611 C 14.486 17.623 14.359 17.648 14.231 17.666 C 14.192 17.672 14.152 17.675 14.113 17.679 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.608 12.628 C 12.686 12.617 12.764 12.596 12.841 12.596 C 12.965 12.596 13.087 12.621 13.2 12.671 C 13.3 12.716 13.395 12.77 13.475 12.844 C 13.514 12.88 13.553 12.92 13.582 12.964 C 13.647 13.063 13.71 13.163 13.766 13.267 C 13.813 13.355 13.868 13.434 13.939 13.504 C 13.856 13.5 13.786 13.466 13.727 13.409 C 13.667 13.351 13.608 13.291 13.549 13.231 C 13.463 13.143 13.381 13.05 13.29 12.967 C 13.096 12.789 12.865 12.68 12.608 12.628 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.834 2.826 C 9.768 2.752 9.761 2.667 9.794 2.578 C 9.833 2.472 9.866 2.362 9.916 2.261 C 10.104 1.889 10.335 1.547 10.653 1.27 C 10.702 1.228 10.746 1.18 10.794 1.139 C 10.816 1.121 10.844 1.111 10.87 1.097 C 10.884 1.127 10.86 1.142 10.844 1.159 C 10.773 1.234 10.698 1.307 10.629 1.385 C 10.272 1.784 10.034 2.245 9.915 2.767 C 9.911 2.782 9.907 2.796 9.902 2.818 C 9.88 2.821 9.857 2.823 9.834 2.826 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.198 15.365 C 11.247 15.371 11.296 15.374 11.343 15.384 C 11.449 15.408 11.555 15.428 11.666 15.42 C 11.945 15.399 12.185 15.515 12.419 15.648 C 12.465 15.674 12.501 15.717 12.541 15.754 C 12.582 15.79 12.622 15.826 12.662 15.862 C 12.671 15.883 12.68 15.903 12.689 15.923 C 12.665 15.92 12.639 15.921 12.617 15.912 C 12.553 15.887 12.489 15.86 12.427 15.829 C 12.188 15.707 11.934 15.628 11.675 15.562 C 11.507 15.519 11.348 15.452 11.198 15.365 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.132 13.509 C 5.142 13.519 5.151 13.53 5.161 13.54 C 5.1 13.667 5.032 13.788 4.939 13.895 C 4.981 13.755 5.036 13.622 5.132 13.509 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.792 9.612 C 5.792 9.598 5.785 9.579 5.792 9.572 C 5.851 9.515 5.912 9.46 5.973 9.405 C 5.978 9.4 5.991 9.402 6.001 9.401 C 5.945 9.47 5.891 9.539 5.834 9.606 C 5.827 9.614 5.806 9.61 5.792 9.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.336 15.715 C 4.325 15.714 4.314 15.714 4.303 15.713 C 4.329 15.6 4.352 15.487 4.415 15.387 C 4.388 15.496 4.362 15.606 4.336 15.715 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 20.581 15.147 C 20.595 15.147 20.609 15.147 20.623 15.147 C 20.635 15.212 20.647 15.277 20.659 15.341 C 20.633 15.276 20.607 15.212 20.581 15.147 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.057 0.918 C 11.075 0.919 11.094 0.919 11.112 0.92 C 11.066 0.967 11.021 1.016 10.956 1.038 C 10.967 1.02 10.976 0.999 10.99 0.984 C 11.01 0.96 11.034 0.94 11.057 0.918 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.452 14.153 C 8.468 14.106 8.493 14.067 8.54 14.047 C 8.542 14.107 8.49 14.124 8.452 14.153 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.028 9.373 C 6.035 9.315 6.082 9.288 6.119 9.253 C 6.108 9.308 6.069 9.342 6.028 9.373 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.328 1.451 C 8.32 1.495 8.283 1.503 8.248 1.515 C 8.269 1.486 8.278 1.442 8.328 1.451 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.671 18.75 C 1.623 18.757 1.62 18.718 1.609 18.688 C 1.633 18.706 1.671 18.709 1.671 18.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.868 1.099 C 10.884 1.058 10.909 1.031 10.958 1.037 C 10.937 1.071 10.921 1.112 10.868 1.099 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.458 19.6 L 5.403 19.551 C 5.442 19.544 5.454 19.568 5.458 19.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 19.139 8.541 C 19.149 8.508 19.16 8.476 19.17 8.443 C 19.165 8.478 19.172 8.517 19.139 8.541 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.611 18.691 C 1.595 18.671 1.578 18.651 1.561 18.631 C 1.594 18.637 1.617 18.653 1.611 18.691 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 27.261 19.97 C 27.298 19.95 27.311 19.973 27.321 20.002 C 27.289 20.012 27.277 19.988 27.261 19.97 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.699 18.809 C 1.668 18.801 1.66 18.78 1.67 18.748 C 1.71 18.768 1.715 18.778 1.699 18.809 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.687 15.922 C 12.717 15.917 12.735 15.933 12.749 15.957 C 12.725 15.95 12.695 15.955 12.687 15.922 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.285 21.905 C 17.302 21.912 17.319 21.919 17.336 21.926 C 17.316 21.927 17.294 21.933 17.285 21.905 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.473 12.127 C 1.479 12.133 1.484 12.133 1.489 12.126 C 1.48 12.142 1.47 12.157 1.461 12.173 C 1.465 12.157 1.469 12.142 1.473 12.127 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.925 19.643 C 2.93 19.645 2.936 19.647 2.941 19.649 C 2.938 19.653 2.935 19.657 2.932 19.661 C 2.929 19.655 2.926 19.65 2.924 19.644 L 2.925 19.643 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.956 12.945 C 14.979 12.95 14.983 12.97 14.984 12.991 C 14.967 12.982 14.949 12.973 14.956 12.945 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.171 19.959 L 3.169 19.952 L 3.176 19.954 L 3.171 19.959 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 19.11 8.6 C 19.112 8.59 19.114 8.58 19.117 8.569 C 19.122 8.569 19.127 8.569 19.132 8.569 C 19.133 8.586 19.133 8.604 19.11 8.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 19.132 8.569 C 19.127 8.569 19.122 8.569 19.117 8.569 C 19.124 8.559 19.131 8.548 19.138 8.538 C 19.137 8.548 19.134 8.559 19.132 8.569 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.912 3.744 C 11.954 3.755 11.997 3.764 12.039 3.777 C 12.161 3.816 12.281 3.868 12.406 3.895 C 12.551 3.926 12.699 3.944 12.847 3.952 C 13.2 3.971 13.551 3.949 13.898 3.88 C 14.039 3.852 14.179 3.817 14.32 3.791 C 14.417 3.773 14.515 3.76 14.614 3.751 C 15.032 3.713 15.417 3.582 15.764 3.345 C 15.792 3.326 15.823 3.313 15.853 3.298 C 15.854 3.312 15.86 3.329 15.854 3.339 C 15.818 3.404 15.767 3.458 15.708 3.505 C 15.464 3.696 15.198 3.846 14.896 3.927 C 14.643 3.996 14.39 4.068 14.135 4.128 C 14 4.159 13.861 4.177 13.723 4.185 C 13.535 4.196 13.347 4.193 13.158 4.194 C 13.033 4.195 12.911 4.173 12.792 4.138 C 12.616 4.085 12.441 4.03 12.266 3.976 C 12.126 3.932 12.01 3.852 11.912 3.744 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.532 16.685 C 11.394 16.698 11.256 16.711 11.119 16.724 C 11.024 16.733 10.932 16.714 10.839 16.698 C 10.65 16.665 10.459 16.638 10.269 16.608 C 10.097 16.581 9.937 16.519 9.786 16.434 C 9.78 16.405 9.763 16.392 9.734 16.396 L 9.732 16.397 L 9.733 16.398 L 9.734 16.396 C 9.737 16.369 9.723 16.351 9.7 16.339 L 9.697 16.337 C 9.642 16.308 9.587 16.279 9.522 16.28 L 9.521 16.28 L 9.522 16.281 L 9.523 16.281 L 9.522 16.28 C 9.481 16.235 9.428 16.219 9.369 16.219 C 9.295 16.185 9.221 16.15 9.148 16.116 C 9.225 16.085 9.305 16.1 9.383 16.108 C 9.447 16.115 9.511 16.126 9.575 16.134 C 9.673 16.146 9.772 16.156 9.87 16.169 C 9.96 16.181 10.039 16.224 10.117 16.269 C 10.211 16.325 10.302 16.388 10.403 16.427 C 10.723 16.551 11.048 16.661 11.4 16.638 C 11.45 16.635 11.502 16.631 11.532 16.685 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.554 15.089 C 13.459 15.06 13.362 15.036 13.271 14.999 C 12.988 14.882 12.69 14.833 12.387 14.818 C 12.095 14.803 11.82 14.725 11.552 14.616 C 11.547 14.614 11.542 14.613 11.538 14.611 C 11.366 14.501 11.174 14.433 10.991 14.348 C 11.044 14.358 11.099 14.362 11.151 14.379 C 11.425 14.47 11.71 14.512 11.99 14.578 C 12.12 14.609 12.252 14.632 12.383 14.656 C 12.427 14.664 12.473 14.675 12.516 14.671 C 12.702 14.653 12.869 14.717 13.033 14.789 C 13.178 14.852 13.318 14.928 13.46 14.999 C 13.501 15.019 13.538 15.043 13.554 15.089 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.961 15.926 C 10.878 15.883 10.792 15.845 10.713 15.797 C 10.6 15.728 10.49 15.653 10.381 15.578 C 10.243 15.484 10.108 15.386 9.971 15.29 C 9.972 15.278 9.974 15.266 9.975 15.255 C 10.11 15.283 10.242 15.322 10.379 15.344 C 10.523 15.368 10.649 15.443 10.736 15.564 C 10.851 15.723 11.002 15.839 11.164 15.943 C 11.21 15.972 11.255 16.002 11.301 16.031 C 11.248 16.017 11.195 16.005 11.143 15.989 C 11.082 15.97 11.022 15.948 10.961 15.926 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.246 16.971 C 8.447 17.025 8.652 17.066 8.859 17.046 C 9.224 17.011 9.589 17.032 9.954 17.025 C 9.974 17.025 9.994 17.028 10.014 17.029 C 9.99 17.097 9.936 17.112 9.872 17.106 C 9.803 17.1 9.734 17.088 9.665 17.089 C 9.483 17.091 9.302 17.115 9.122 17.148 C 9.011 17.168 8.898 17.189 8.785 17.192 C 8.575 17.198 8.384 17.146 8.246 16.971 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.453 17.661 C 8.608 17.632 8.758 17.666 8.91 17.689 C 8.993 17.701 9.075 17.718 9.158 17.729 C 9.347 17.754 9.533 17.74 9.714 17.679 C 9.808 17.647 9.903 17.621 9.997 17.593 C 9.99 17.65 9.947 17.679 9.901 17.696 C 9.724 17.76 9.549 17.827 9.355 17.826 C 9.13 17.824 8.91 17.8 8.697 17.725 C 8.618 17.697 8.535 17.682 8.453 17.661 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.024 16.992 C 9.961 16.983 9.897 16.973 9.834 16.965 C 9.686 16.946 9.539 16.924 9.391 16.909 C 9.277 16.898 9.164 16.903 9.05 16.923 C 8.815 16.964 8.585 16.953 8.374 16.825 C 8.442 16.833 8.512 16.834 8.579 16.85 C 8.7 16.879 8.823 16.883 8.947 16.882 C 9.203 16.88 9.46 16.871 9.716 16.901 C 9.784 16.909 9.854 16.902 9.923 16.905 C 9.978 16.908 10.017 16.933 10.024 16.992 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.326 11.399 C 6.418 11.398 6.495 11.472 6.501 11.565 C 6.505 11.647 6.417 11.736 6.33 11.737 C 6.246 11.739 6.154 11.65 6.156 11.568 C 6.158 11.476 6.234 11.4 6.326 11.399 Z M 6.35 11.686 C 6.38 11.657 6.402 11.64 6.415 11.618 C 6.419 11.613 6.399 11.584 6.385 11.578 C 6.358 11.565 6.328 11.588 6.327 11.623 C 6.327 11.639 6.338 11.655 6.35 11.686 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.701 16.668 C 3.602 16.667 3.523 16.588 3.522 16.489 C 3.522 16.397 3.596 16.32 3.69 16.316 C 3.787 16.313 3.879 16.406 3.876 16.507 C 3.874 16.602 3.801 16.67 3.701 16.668 Z M 3.779 16.496 C 3.775 16.464 3.737 16.433 3.705 16.436 C 3.66 16.441 3.633 16.483 3.641 16.536 C 3.646 16.567 3.675 16.592 3.701 16.589 C 3.747 16.583 3.783 16.539 3.779 16.496 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.725 15.776 C 3.677 15.806 3.636 15.779 3.605 15.751 C 3.573 15.723 3.544 15.683 3.532 15.643 C 3.504 15.547 3.58 15.434 3.675 15.417 C 3.791 15.396 3.886 15.464 3.9 15.577 C 3.905 15.619 3.89 15.655 3.857 15.682 C 3.853 15.663 3.853 15.642 3.844 15.625 C 3.812 15.558 3.742 15.537 3.686 15.574 C 3.635 15.607 3.626 15.673 3.669 15.728 C 3.684 15.747 3.706 15.76 3.725 15.776 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.758 11.407 C 3.601 11.296 3.531 11.316 3.458 11.49 C 3.415 11.464 3.402 11.424 3.401 11.376 C 3.4 11.329 3.414 11.288 3.445 11.253 C 3.474 11.221 3.505 11.189 3.536 11.157 L 3.534 11.158 C 3.576 11.165 3.62 11.169 3.661 11.179 C 3.711 11.192 3.745 11.225 3.766 11.271 C 3.788 11.319 3.793 11.364 3.758 11.407 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.861 12.528 C 2.787 12.484 2.762 12.422 2.794 12.34 C 2.827 12.259 2.889 12.215 2.974 12.208 C 3.067 12.199 3.169 12.317 3.143 12.406 C 3.136 12.428 3.12 12.448 3.109 12.469 C 3.099 12.452 3.091 12.433 3.078 12.419 C 3.011 12.352 2.926 12.361 2.882 12.442 C 2.868 12.467 2.867 12.499 2.861 12.528 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.207 14.667 C 2.11 14.664 2.034 14.586 2.041 14.497 C 2.048 14.409 2.121 14.342 2.209 14.343 C 2.301 14.343 2.383 14.426 2.374 14.514 C 2.367 14.591 2.303 14.677 2.207 14.667 Z M 2.183 14.648 C 2.197 14.646 2.207 14.648 2.216 14.644 C 2.259 14.627 2.291 14.571 2.284 14.524 C 2.278 14.486 2.231 14.455 2.195 14.467 C 2.133 14.489 2.108 14.574 2.15 14.626 C 2.158 14.637 2.174 14.642 2.183 14.648 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.422 12.643 C 5.393 12.644 5.363 12.652 5.335 12.646 C 5.269 12.634 5.218 12.573 5.206 12.503 C 5.197 12.442 5.24 12.361 5.297 12.331 C 5.356 12.301 5.44 12.312 5.489 12.357 C 5.53 12.396 5.557 12.441 5.542 12.501 C 5.528 12.488 5.514 12.473 5.498 12.464 C 5.445 12.436 5.403 12.445 5.37 12.488 C 5.341 12.524 5.343 12.56 5.379 12.605 C 5.391 12.62 5.408 12.63 5.422 12.643 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.976 16.749 C 5.918 16.75 5.878 16.717 5.863 16.668 C 5.851 16.628 5.849 16.579 5.859 16.539 C 5.883 16.451 5.985 16.405 6.076 16.434 C 6.132 16.452 6.169 16.49 6.179 16.55 C 6.185 16.589 6.186 16.629 6.159 16.663 C 6.147 16.625 6.129 16.589 6.086 16.58 C 6.063 16.576 6.036 16.577 6.014 16.586 C 5.962 16.606 5.951 16.65 5.971 16.735 C 5.972 16.74 5.974 16.744 5.976 16.749 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.663 10.088 C 4.744 10.091 4.804 10.153 4.802 10.231 C 4.801 10.315 4.729 10.384 4.649 10.38 C 4.567 10.375 4.504 10.301 4.51 10.217 C 4.516 10.14 4.581 10.084 4.663 10.088 Z M 4.682 10.257 C 4.672 10.248 4.659 10.227 4.641 10.219 C 4.617 10.208 4.579 10.24 4.585 10.266 C 4.59 10.286 4.607 10.307 4.625 10.316 C 4.649 10.328 4.681 10.298 4.682 10.257 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.35 13.346 C 2.35 13.335 2.349 13.324 2.349 13.313 C 2.364 13.278 2.374 13.238 2.397 13.207 C 2.438 13.153 2.528 13.133 2.583 13.17 C 2.619 13.193 2.648 13.229 2.67 13.266 C 2.688 13.295 2.686 13.332 2.658 13.361 C 2.642 13.343 2.629 13.318 2.609 13.307 C 2.543 13.272 2.476 13.311 2.474 13.385 C 2.474 13.414 2.48 13.444 2.483 13.473 C 2.417 13.453 2.379 13.405 2.35 13.346 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.293 10.784 C 4.279 10.77 4.267 10.755 4.252 10.743 C 4.169 10.678 4.097 10.688 4.029 10.774 C 4.02 10.785 4.012 10.797 4.004 10.809 C 3.965 10.769 3.963 10.721 3.979 10.672 C 3.999 10.613 4.035 10.569 4.103 10.561 C 4.171 10.553 4.233 10.562 4.275 10.622 C 4.31 10.671 4.336 10.724 4.293 10.784 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.387 16.068 C 6.382 16.125 6.336 16.138 6.294 16.15 C 6.217 16.17 6.131 16.123 6.086 16.041 C 6.047 15.972 6.059 15.895 6.125 15.841 C 6.15 15.821 6.185 15.806 6.217 15.802 C 6.25 15.798 6.285 15.811 6.319 15.816 C 6.284 15.829 6.243 15.835 6.213 15.857 C 6.166 15.892 6.158 15.945 6.176 16.001 C 6.191 16.049 6.23 16.078 6.286 16.078 C 6.32 16.079 6.353 16.072 6.387 16.068 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.578 13.385 C 8.517 13.365 8.479 13.324 8.474 13.258 C 8.467 13.176 8.513 13.112 8.59 13.097 C 8.676 13.079 8.75 13.12 8.773 13.201 C 8.779 13.223 8.772 13.249 8.772 13.273 C 8.768 13.27 8.764 13.268 8.76 13.265 C 8.643 13.193 8.586 13.221 8.578 13.356 C 8.577 13.366 8.578 13.376 8.578 13.385 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.969 8.728 C 5.017 8.698 5.065 8.669 5.113 8.639 C 5.14 8.652 5.169 8.661 5.193 8.678 C 5.269 8.735 5.276 8.814 5.213 8.895 C 5.21 8.899 5.195 8.894 5.186 8.893 C 5.197 8.848 5.198 8.805 5.146 8.783 C 5.106 8.767 5.065 8.782 5.034 8.826 C 5.021 8.845 5.017 8.871 5.008 8.893 C 4.948 8.85 4.955 8.79 4.969 8.728 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.175 14.543 C 4.158 14.533 4.142 14.522 4.124 14.512 C 4.071 14.482 4.019 14.487 3.97 14.522 C 3.916 14.561 3.897 14.615 3.911 14.679 C 3.917 14.707 3.934 14.733 3.947 14.76 C 3.877 14.755 3.841 14.711 3.826 14.649 C 3.813 14.594 3.824 14.542 3.862 14.497 C 3.906 14.446 3.96 14.41 4.029 14.419 C 4.1 14.429 4.16 14.463 4.175 14.543 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.41 14.048 C 7.39 14.237 7.429 14.282 7.619 14.288 C 7.624 14.288 7.628 14.289 7.633 14.289 C 7.56 14.372 7.495 14.392 7.418 14.356 C 7.342 14.32 7.3 14.247 7.313 14.165 C 7.322 14.107 7.351 14.066 7.41 14.048 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.715 13.334 C 4.69 13.331 4.666 13.326 4.642 13.325 C 4.506 13.323 4.438 13.408 4.467 13.542 C 4.47 13.556 4.474 13.57 4.478 13.584 C 4.424 13.569 4.396 13.53 4.388 13.479 C 4.379 13.425 4.382 13.371 4.419 13.326 C 4.504 13.222 4.64 13.219 4.702 13.293 C 4.711 13.303 4.711 13.32 4.715 13.334 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.856 12.66 C 9.864 12.647 9.873 12.636 9.88 12.622 C 9.932 12.513 9.918 12.458 9.82 12.383 C 9.808 12.374 9.795 12.367 9.783 12.358 C 9.947 12.314 10.033 12.38 10.026 12.546 C 10.026 12.57 10.029 12.594 10.031 12.618 L 10.032 12.617 C 9.999 12.604 9.98 12.617 9.97 12.648 L 9.972 12.646 C 9.933 12.651 9.895 12.655 9.856 12.66 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.369 10.771 C 7.344 10.756 7.319 10.738 7.292 10.728 C 7.2 10.696 7.109 10.751 7.096 10.848 C 7.092 10.881 7.1 10.916 7.102 10.95 C 7.049 10.919 7.031 10.871 7.034 10.814 C 7.038 10.719 7.109 10.636 7.194 10.631 C 7.226 10.63 7.263 10.639 7.291 10.654 C 7.334 10.678 7.368 10.715 7.369 10.771 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.653 11.73 C 10.701 11.831 10.781 11.863 10.887 11.833 C 10.88 11.867 10.873 11.9 10.866 11.933 L 10.868 11.932 C 10.849 11.937 10.83 11.943 10.812 11.949 C 10.743 11.973 10.682 11.96 10.638 11.902 C 10.593 11.843 10.598 11.783 10.653 11.73 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.932 15.882 C 1.889 15.819 1.901 15.762 1.955 15.713 C 1.996 15.676 2.062 15.674 2.106 15.705 C 2.15 15.735 2.171 15.796 2.154 15.847 C 2.137 15.897 2.107 15.932 2.051 15.938 C 2.059 15.905 2.074 15.872 2.073 15.839 C 2.072 15.82 2.051 15.791 2.032 15.784 C 2.015 15.778 1.983 15.789 1.969 15.804 C 1.951 15.825 1.944 15.856 1.932 15.882 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.459 10.107 C 10.477 10.101 10.495 10.091 10.513 10.09 C 10.568 10.086 10.607 10.113 10.629 10.162 C 10.649 10.207 10.641 10.261 10.604 10.297 C 10.567 10.332 10.524 10.355 10.472 10.332 C 10.455 10.325 10.441 10.31 10.426 10.298 C 10.448 10.29 10.472 10.284 10.492 10.272 C 10.527 10.25 10.549 10.219 10.542 10.175 C 10.535 10.128 10.498 10.116 10.459 10.107 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.409 8.334 C 6.412 8.32 6.416 8.307 6.417 8.293 C 6.427 8.188 6.416 8.178 6.298 8.183 C 6.3 8.156 6.314 8.133 6.341 8.131 C 6.374 8.128 6.411 8.128 6.44 8.142 C 6.494 8.167 6.513 8.229 6.491 8.28 C 6.475 8.315 6.448 8.334 6.409 8.334 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.938 14.801 C 6.92 14.808 6.901 14.814 6.884 14.822 C 6.8 14.861 6.757 14.925 6.767 15.019 C 6.769 15.039 6.772 15.058 6.775 15.077 C 6.731 15.039 6.714 14.991 6.721 14.934 C 6.726 14.888 6.753 14.854 6.787 14.824 C 6.833 14.785 6.884 14.785 6.938 14.801 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.961 17.47 C 9.844 17.501 9.727 17.532 9.61 17.562 C 9.663 17.527 9.713 17.486 9.77 17.459 C 9.832 17.429 9.901 17.412 9.961 17.47 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.677 10.89 C 11.644 10.837 11.642 10.819 11.67 10.793 C 11.696 10.769 11.734 10.763 11.763 10.779 C 11.792 10.794 11.807 10.832 11.798 10.866 C 11.787 10.905 11.758 10.922 11.707 10.914 C 11.695 10.912 11.685 10.897 11.675 10.888 C 11.685 10.889 11.694 10.889 11.704 10.891 C 11.73 10.895 11.753 10.89 11.756 10.86 C 11.757 10.85 11.745 10.832 11.736 10.829 C 11.708 10.82 11.691 10.835 11.684 10.862 C 11.681 10.871 11.679 10.881 11.677 10.89 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.975 15.255 C 9.974 15.266 9.972 15.278 9.971 15.29 C 9.881 15.243 9.791 15.195 9.7 15.147 C 9.801 15.161 9.892 15.197 9.975 15.255 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.642 17.556 C 8.559 17.556 8.475 17.555 8.392 17.555 C 8.422 17.498 8.474 17.49 8.527 17.504 C 8.567 17.514 8.604 17.538 8.642 17.556 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.853 3.299 C 15.89 3.236 15.939 3.186 16.002 3.149 C 15.99 3.232 15.936 3.286 15.853 3.299 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.002 3.15 C 16.014 3.103 16.028 3.056 16.092 3.059 C 16.076 3.133 16.063 3.146 16.002 3.15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.704 15.149 C 9.671 15.139 9.639 15.13 9.606 15.12 C 9.641 15.122 9.678 15.116 9.704 15.149 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.121 3.002 C 16.131 2.98 16.14 2.959 16.15 2.937 C 16.149 2.963 16.152 2.992 16.121 3.002 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.297 8.181 C 6.289 8.201 6.281 8.221 6.273 8.241 C 6.273 8.217 6.271 8.192 6.297 8.181 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.09 3.061 C 16.072 3.025 16.093 3.011 16.119 3 C 16.123 3.028 16.119 3.052 16.09 3.061 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.868 3.714 C 11.887 3.716 11.907 3.717 11.91 3.746 C 11.896 3.735 11.882 3.725 11.868 3.714 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.893 17.41 C 0.89 17.438 0.888 17.467 0.882 17.496 C 0.871 17.552 0.84 17.595 0.783 17.612 C 0.729 17.628 0.677 17.627 0.638 17.576 C 0.677 17.577 0.708 17.564 0.713 17.523 C 0.715 17.507 0.705 17.481 0.693 17.475 C 0.681 17.468 0.654 17.474 0.641 17.484 C 0.614 17.505 0.62 17.537 0.627 17.566 C 0.595 17.547 0.572 17.518 0.576 17.483 C 0.579 17.45 0.592 17.415 0.611 17.389 C 0.654 17.33 0.731 17.316 0.796 17.35 C 0.83 17.368 0.862 17.391 0.894 17.411 L 0.893 17.41 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.495 2.103 C 11.505 2.2 11.51 2.299 11.527 2.395 C 11.542 2.482 11.564 2.568 11.592 2.652 C 11.646 2.81 11.702 2.967 11.8 3.106 C 11.885 3.227 11.962 3.354 12.078 3.45 C 12.115 3.482 12.155 3.511 12.191 3.544 C 12.219 3.57 12.244 3.6 12.27 3.629 C 12.236 3.624 12.2 3.624 12.168 3.613 C 11.963 3.54 11.762 3.457 11.578 3.339 C 11.512 3.297 11.448 3.248 11.394 3.191 C 11.256 3.046 11.207 2.871 11.24 2.674 C 11.271 2.486 11.336 2.312 11.444 2.155 C 11.457 2.135 11.478 2.12 11.495 2.103 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.616 3.152 C 15.606 3.099 15.632 3.056 15.656 3.013 C 15.77 2.802 15.813 2.571 15.857 2.339 C 15.896 2.133 15.882 1.927 15.884 1.721 C 16.061 1.854 16.138 2.034 16.128 2.251 C 16.112 2.609 15.962 2.9 15.683 3.124 C 15.664 3.138 15.639 3.143 15.616 3.152 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.131 3.358 C 15.153 3.369 15.174 3.38 15.195 3.391 C 15.141 3.432 15.081 3.459 15.006 3.455 C 15.048 3.422 15.09 3.39 15.131 3.358 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.041 20.078 C 13.087 20.13 13.132 20.182 13.179 20.233 C 13.268 20.33 13.377 20.395 13.502 20.435 C 13.709 20.503 13.919 20.516 14.132 20.467 C 14.262 20.437 14.391 20.403 14.519 20.367 C 14.778 20.293 15.041 20.246 15.311 20.269 C 15.418 20.278 15.524 20.308 15.63 20.328 C 15.656 20.343 15.682 20.359 15.708 20.375 C 15.72 20.383 15.732 20.393 15.745 20.4 C 15.94 20.509 16.122 20.637 16.28 20.796 C 16.311 20.827 16.347 20.854 16.381 20.883 C 16.527 21.009 16.675 21.133 16.818 21.262 C 17.038 21.463 17.221 21.697 17.397 21.936 C 17.377 21.932 17.356 21.929 17.336 21.926 C 17.319 21.919 17.302 21.912 17.285 21.905 L 17.288 21.908 C 17.267 21.888 17.249 21.865 17.225 21.85 C 17.095 21.762 16.963 21.676 16.832 21.59 C 16.844 21.56 16.862 21.53 16.867 21.499 C 16.871 21.468 16.848 21.441 16.819 21.436 C 16.799 21.432 16.771 21.441 16.754 21.454 C 16.737 21.467 16.729 21.493 16.717 21.514 C 16.638 21.462 16.562 21.406 16.48 21.359 C 16.373 21.296 16.265 21.235 16.153 21.182 C 16.014 21.116 15.872 21.056 15.73 20.998 C 15.398 20.863 15.06 20.745 14.703 20.699 C 14.551 20.68 14.396 20.663 14.243 20.669 C 14.025 20.676 13.808 20.706 13.59 20.724 C 13.472 20.735 13.352 20.742 13.234 20.751 C 13.135 20.758 13.036 20.771 12.937 20.774 C 12.554 20.786 12.172 20.772 11.793 20.712 C 11.57 20.676 11.357 20.615 11.161 20.501 C 10.967 20.388 10.787 20.255 10.614 20.115 C 10.41 19.949 10.212 19.776 10.008 19.609 C 9.947 19.559 9.882 19.51 9.812 19.476 C 9.611 19.378 9.406 19.288 9.202 19.197 C 9.096 19.15 8.985 19.126 8.868 19.141 C 8.793 19.117 8.717 19.092 8.642 19.067 C 8.595 19 8.527 18.958 8.455 18.924 C 8.343 18.871 8.231 18.817 8.114 18.777 C 7.903 18.703 7.69 18.637 7.476 18.572 C 7.377 18.542 7.295 18.494 7.237 18.407 C 7.168 18.304 7.092 18.206 7.026 18.101 C 6.933 17.956 6.882 17.795 6.895 17.622 C 6.902 17.519 6.92 17.416 6.94 17.314 C 6.985 17.088 7.088 16.883 7.187 16.678 C 7.379 16.28 7.619 15.91 7.881 15.553 C 7.969 15.433 8.058 15.314 8.145 15.194 C 8.161 15.171 8.168 15.142 8.179 15.116 L 8.178 15.118 C 8.193 15.108 8.209 15.097 8.224 15.086 C 8.273 15.031 8.317 14.971 8.37 14.922 C 8.643 14.67 8.923 14.428 9.23 14.22 C 9.431 14.084 9.628 13.945 9.826 13.807 C 10.018 13.783 10.211 13.764 10.402 13.735 C 10.642 13.698 10.876 13.726 11.112 13.77 C 11.209 13.787 11.304 13.825 11.405 13.809 L 11.402 13.807 C 11.409 13.808 11.415 13.81 11.421 13.811 C 11.432 13.804 11.443 13.797 11.453 13.791 C 11.441 13.785 11.43 13.778 11.417 13.773 C 11.414 13.772 11.408 13.775 11.404 13.777 L 11.406 13.779 C 11.407 13.74 11.374 13.732 11.349 13.721 C 11.214 13.662 11.077 13.604 10.94 13.549 C 10.775 13.483 10.606 13.43 10.426 13.417 C 10.419 13.417 10.412 13.407 10.4 13.398 C 10.426 13.347 10.483 13.334 10.524 13.302 C 10.57 13.285 10.617 13.27 10.662 13.251 C 10.767 13.204 10.868 13.152 10.974 13.11 C 11.095 13.061 11.208 13.002 11.316 12.93 C 11.369 12.894 11.425 12.86 11.48 12.828 C 11.819 12.634 12.108 12.378 12.383 12.104 C 12.415 12.072 12.443 12.038 12.472 12.004 C 12.571 11.887 12.668 11.767 12.768 11.651 C 12.977 11.407 13.138 11.138 13.242 10.833 C 13.309 10.635 13.36 10.435 13.408 10.233 C 13.489 9.892 13.505 9.547 13.48 9.2 C 13.47 9.062 13.453 8.924 13.439 8.786 C 13.429 8.678 13.414 8.569 13.409 8.461 C 13.398 8.19 13.449 7.929 13.54 7.675 C 13.557 7.629 13.568 7.581 13.581 7.534 C 13.587 7.525 13.591 7.516 13.597 7.508 C 13.617 7.475 13.619 7.442 13.592 7.412 C 13.563 7.379 13.523 7.369 13.484 7.387 C 13.449 7.403 13.414 7.425 13.385 7.452 C 13.308 7.522 13.248 7.608 13.199 7.701 C 13.097 7.893 13.058 8.101 13.048 8.316 C 13.045 8.39 13.043 8.465 13.041 8.539 C 12.963 8.731 12.881 8.922 12.808 9.116 C 12.73 9.325 12.669 9.54 12.585 9.746 C 12.505 9.943 12.413 10.137 12.312 10.323 C 12.21 10.51 12.091 10.688 11.976 10.868 C 11.939 10.926 11.895 10.98 11.847 11.03 C 11.614 11.274 11.38 11.518 11.143 11.758 C 11.085 11.818 11.015 11.867 10.948 11.919 C 10.925 11.936 10.898 11.953 10.866 11.933 C 10.873 11.9 10.88 11.867 10.887 11.833 C 10.903 11.815 10.922 11.797 10.933 11.776 C 10.982 11.687 10.951 11.595 10.861 11.559 C 10.781 11.526 10.697 11.567 10.664 11.657 C 10.655 11.679 10.657 11.705 10.653 11.73 C 10.598 11.783 10.593 11.843 10.638 11.902 C 10.682 11.96 10.743 11.973 10.812 11.949 C 10.83 11.943 10.849 11.937 10.868 11.932 C 10.88 11.961 10.862 11.978 10.841 11.992 C 10.635 12.131 10.446 12.291 10.258 12.454 C 10.188 12.514 10.107 12.564 10.031 12.618 C 10.029 12.594 10.026 12.57 10.026 12.546 C 10.033 12.38 9.947 12.314 9.783 12.358 C 9.744 12.364 9.703 12.364 9.667 12.377 C 9.586 12.405 9.541 12.487 9.556 12.564 C 9.571 12.643 9.658 12.708 9.744 12.697 C 9.782 12.692 9.819 12.673 9.856 12.66 C 9.895 12.655 9.933 12.651 9.972 12.646 C 9.957 12.665 9.947 12.69 9.928 12.702 C 9.698 12.861 9.508 13.063 9.311 13.258 C 9.237 13.331 9.158 13.398 9.083 13.47 C 8.926 13.621 8.77 13.773 8.617 13.927 C 8.583 13.961 8.541 13.993 8.538 14.048 L 8.54 14.047 C 8.493 14.067 8.468 14.106 8.452 14.153 C 8.425 14.181 8.399 14.212 8.369 14.237 C 8.067 14.491 7.812 14.789 7.573 15.098 C 7.332 15.41 7.113 15.741 6.914 16.083 C 6.899 16.109 6.883 16.133 6.867 16.158 C 6.856 16.179 6.846 16.2 6.835 16.221 L 6.837 16.218 C 6.825 16.227 6.809 16.232 6.802 16.243 C 6.631 16.501 6.483 16.769 6.407 17.071 C 6.328 17.385 6.264 17.7 6.301 18.026 C 6.304 18.055 6.298 18.085 6.296 18.115 C 6.274 18.106 6.252 18.091 6.23 18.091 C 6.205 18.091 6.186 18.113 6.19 18.14 C 6.193 18.155 6.207 18.177 6.221 18.181 C 6.234 18.185 6.256 18.174 6.268 18.162 C 6.281 18.15 6.286 18.129 6.295 18.112 C 6.302 18.119 6.313 18.126 6.314 18.134 C 6.342 18.312 6.413 18.474 6.505 18.629 C 6.465 18.636 6.428 18.648 6.418 18.694 C 6.41 18.73 6.418 18.761 6.443 18.789 C 6.48 18.828 6.554 18.835 6.564 18.761 C 6.566 18.746 6.57 18.732 6.573 18.717 C 6.744 18.881 6.944 18.997 7.168 19.073 C 7.228 19.093 7.293 19.103 7.356 19.11 C 7.455 19.12 7.554 19.122 7.653 19.13 C 7.756 19.137 7.86 19.147 7.963 19.156 C 8.407 19.265 8.767 19.506 9.057 19.854 C 9.13 19.941 9.203 20.028 9.276 20.115 C 9.162 20.067 9.05 20.012 8.933 19.971 C 8.563 19.843 8.176 19.805 7.789 19.796 C 7.536 19.79 7.282 19.815 7.029 19.826 C 6.89 19.832 6.751 19.826 6.614 19.799 C 6.521 19.781 6.427 19.77 6.334 19.755 C 6.255 19.725 6.174 19.7 6.088 19.701 L 6.09 19.702 C 6.07 19.693 6.05 19.683 6.03 19.674 C 5.79 19.571 5.571 19.432 5.388 19.249 C 5.246 19.106 5.117 18.947 4.997 18.784 C 4.91 18.664 4.871 18.516 4.837 18.371 C 4.832 18.287 4.846 18.201 4.807 18.122 C 4.799 17.919 4.802 17.717 4.811 17.518 C 4.918 17.472 4.956 17.423 4.938 17.357 C 4.903 17.347 4.866 17.336 4.827 17.325 C 4.82 17.216 4.831 17.114 4.848 17.009 C 4.921 16.968 4.994 16.928 5.071 16.884 C 5.012 16.817 4.926 16.874 4.869 16.818 C 4.877 16.768 4.883 16.715 4.893 16.662 C 4.903 16.604 4.917 16.547 4.927 16.497 C 5.116 16.402 5.209 16.323 5.255 16.216 C 5.217 16.185 5.171 16.199 5.129 16.195 C 5.091 16.192 5.05 16.214 5.013 16.174 C 5.016 16.153 5.019 16.128 5.023 16.105 C 5.041 16.011 5.085 15.945 5.183 15.911 C 5.276 15.88 5.364 15.832 5.454 15.789 C 5.479 15.777 5.511 15.766 5.506 15.724 C 5.383 15.689 5.272 15.78 5.142 15.767 C 5.181 15.657 5.218 15.555 5.255 15.453 C 5.277 15.391 5.321 15.358 5.388 15.352 C 5.472 15.346 5.555 15.336 5.639 15.328 C 5.677 15.354 5.718 15.357 5.761 15.344 C 5.779 15.346 5.798 15.347 5.817 15.349 C 5.906 15.361 5.989 15.357 6.066 15.334 C 5.973 15.321 5.896 15.31 5.819 15.299 C 5.776 15.286 5.732 15.275 5.691 15.26 C 5.667 15.252 5.647 15.237 5.619 15.221 C 5.716 15.169 5.82 15.165 5.924 15.094 C 5.733 15.077 5.573 15.146 5.401 15.147 C 5.419 15.044 5.48 14.969 5.517 14.884 C 5.542 14.826 5.585 14.79 5.644 14.767 C 5.774 14.718 5.903 14.665 6.031 14.612 C 6.058 14.601 6.081 14.584 6.111 14.567 C 6.053 14.517 5.992 14.528 5.934 14.535 C 5.87 14.543 5.807 14.555 5.743 14.566 C 5.738 14.56 5.732 14.554 5.726 14.548 C 5.796 14.435 5.868 14.323 5.936 14.208 C 5.968 14.153 6.011 14.121 6.072 14.102 C 6.252 14.045 6.434 13.996 6.622 13.977 C 6.676 13.972 6.729 13.96 6.782 13.952 C 6.75 13.929 6.718 13.923 6.687 13.92 C 6.652 13.915 6.618 13.913 6.583 13.909 C 6.549 13.905 6.514 13.9 6.479 13.898 C 6.44 13.895 6.4 13.894 6.36 13.894 C 6.325 13.894 6.29 13.898 6.256 13.898 C 6.224 13.898 6.189 13.915 6.153 13.879 C 6.243 13.758 6.33 13.64 6.418 13.521 C 6.477 13.521 6.531 13.516 6.585 13.522 C 6.649 13.529 6.712 13.545 6.775 13.557 C 6.837 13.568 6.899 13.57 6.988 13.558 C 6.908 13.49 6.83 13.478 6.759 13.451 C 6.687 13.424 6.604 13.424 6.53 13.366 C 6.56 13.337 6.58 13.307 6.607 13.292 C 6.651 13.269 6.698 13.251 6.746 13.24 C 6.995 13.187 7.23 13.09 7.474 13.025 C 7.535 13.009 7.597 12.994 7.65 12.953 C 7.617 12.903 7.567 12.917 7.526 12.923 C 7.379 12.943 7.23 12.95 7.085 12.988 C 6.999 13.009 6.913 13.038 6.818 13.032 C 6.825 13.013 6.826 12.997 6.834 12.987 C 6.965 12.819 7.097 12.651 7.23 12.484 C 7.247 12.463 7.274 12.449 7.299 12.429 C 7.337 12.456 7.369 12.479 7.4 12.502 C 7.542 12.604 7.693 12.69 7.855 12.754 C 7.879 12.763 7.909 12.784 7.934 12.746 C 7.927 12.735 7.921 12.721 7.91 12.712 C 7.876 12.684 7.843 12.652 7.803 12.632 C 7.644 12.553 7.529 12.424 7.404 12.291 C 7.481 12.202 7.558 12.112 7.633 12.026 C 7.718 12.021 7.787 12.05 7.856 12.076 C 7.945 12.111 8.036 12.131 8.13 12.142 C 8.298 12.163 8.464 12.192 8.624 12.252 C 8.672 12.289 8.71 12.34 8.776 12.349 C 8.786 12.359 8.796 12.369 8.806 12.379 C 8.816 12.389 8.826 12.399 8.836 12.409 C 8.846 12.418 8.856 12.428 8.866 12.437 C 8.876 12.447 8.886 12.457 8.896 12.467 C 8.906 12.477 8.916 12.487 8.926 12.497 C 8.927 12.501 8.927 12.505 8.928 12.509 C 8.929 12.511 8.934 12.512 8.936 12.513 C 8.932 12.508 8.928 12.503 8.924 12.499 C 8.914 12.489 8.904 12.479 8.894 12.469 C 8.885 12.459 8.875 12.449 8.865 12.439 C 8.855 12.429 8.846 12.419 8.836 12.409 C 8.826 12.399 8.816 12.389 8.806 12.379 C 8.796 12.369 8.786 12.359 8.776 12.349 C 8.752 12.274 8.693 12.234 8.627 12.2 C 8.479 12.082 8.311 12.015 8.123 11.994 C 7.999 11.98 7.891 11.925 7.782 11.866 C 7.856 11.754 8.211 11.386 8.331 11.296 C 8.39 11.314 8.456 11.337 8.522 11.355 C 8.603 11.378 8.684 11.408 8.767 11.416 C 8.882 11.426 8.993 11.449 9.104 11.477 C 9.123 11.481 9.15 11.498 9.17 11.458 C 9.127 11.433 9.087 11.405 9.043 11.385 C 8.871 11.307 8.703 11.218 8.514 11.187 C 8.494 11.184 8.475 11.167 8.439 11.146 C 8.488 11.103 8.526 11.071 8.563 11.039 C 8.66 10.954 8.76 10.872 8.855 10.784 C 9.05 10.603 8.972 10.645 9.235 10.643 C 9.31 10.643 9.371 10.668 9.425 10.716 C 9.451 10.739 9.476 10.762 9.501 10.787 C 9.579 10.864 9.654 10.943 9.733 11.018 C 9.846 11.126 9.99 11.157 10.161 11.111 C 10.059 11.067 9.957 11.038 9.872 10.983 C 9.782 10.926 9.71 10.843 9.641 10.749 C 9.748 10.729 9.828 10.817 9.924 10.793 C 9.926 10.784 9.929 10.779 9.927 10.776 C 9.848 10.617 9.742 10.494 9.548 10.484 C 9.524 10.482 9.499 10.481 9.474 10.476 C 9.44 10.469 9.406 10.462 9.373 10.45 C 9.339 10.438 9.294 10.456 9.268 10.418 C 9.275 10.406 9.278 10.395 9.285 10.389 C 9.389 10.297 9.492 10.202 9.599 10.114 C 9.632 10.087 9.677 10.07 9.719 10.058 C 9.858 10.019 10.002 10.004 10.146 10 C 10.221 9.998 10.295 10 10.37 9.998 C 10.414 9.996 10.461 9.999 10.501 9.949 C 10.408 9.905 10.313 9.882 10.215 9.867 C 10.117 9.853 10.02 9.839 9.921 9.824 C 9.931 9.76 9.983 9.738 10.011 9.7 C 10.12 9.55 10.271 9.461 10.438 9.39 C 10.639 9.304 10.842 9.225 11.06 9.188 C 11.158 9.171 11.254 9.145 11.365 9.12 C 11.297 9.074 11.236 9.075 11.178 9.082 C 10.971 9.108 10.76 9.106 10.557 9.161 C 10.537 9.166 10.51 9.178 10.493 9.148 C 10.557 9.031 10.601 8.865 10.665 8.749 C 10.759 8.643 10.785 8.587 10.852 8.479 C 10.871 8.474 10.896 8.476 10.907 8.464 C 10.97 8.395 11.049 8.384 11.136 8.386 C 11.27 8.389 11.404 8.387 11.538 8.385 C 11.576 8.384 11.619 8.39 11.644 8.348 C 11.503 8.288 11.346 8.278 11.205 8.204 C 11.252 8.118 11.349 8.081 11.394 7.995 C 11.378 7.994 11.367 7.989 11.361 7.993 C 11.287 8.033 11.214 8.075 11.14 8.116 C 11.097 8.139 11.052 8.159 11.009 8.181 C 11.046 8.038 11.093 7.896 11.12 7.751 C 11.2 7.322 11.084 6.948 10.787 6.629 C 10.771 6.612 10.751 6.599 10.73 6.582 C 10.7 6.627 10.717 6.665 10.727 6.7 C 10.756 6.806 10.79 6.909 10.818 7.014 C 10.838 7.085 10.852 7.158 10.868 7.23 C 10.842 7.391 10.824 7.553 10.781 7.711 C 10.748 7.827 10.703 7.936 10.635 8.034 C 10.556 8.148 10.475 8.261 10.389 8.369 C 10.278 8.508 10.159 8.64 10.016 8.751 C 9.88 8.857 9.756 8.979 9.63 9.098 C 9.539 9.183 9.457 9.275 9.366 9.36 C 9.258 9.462 9.151 9.566 9.033 9.656 C 8.888 9.769 8.75 9.889 8.618 10.016 C 8.489 10.139 8.353 10.253 8.194 10.34 C 8.054 10.415 7.926 10.509 7.81 10.618 C 7.694 10.726 7.577 10.834 7.46 10.94 C 7.436 10.962 7.414 10.995 7.372 10.98 C 7.382 10.91 7.413 10.84 7.369 10.771 C 7.368 10.715 7.334 10.678 7.291 10.654 C 7.263 10.639 7.226 10.63 7.194 10.631 C 7.109 10.636 7.038 10.719 7.034 10.814 C 7.031 10.871 7.049 10.919 7.102 10.95 C 7.169 11.022 7.245 11.036 7.332 10.987 C 7.344 10.981 7.359 10.982 7.373 10.979 C 7.385 11.015 7.357 11.032 7.337 11.052 C 7.151 11.231 6.964 11.41 6.779 11.589 C 6.686 11.678 6.598 11.774 6.5 11.857 C 6.309 12.018 6.13 12.188 5.976 12.384 C 5.896 12.485 5.806 12.578 5.723 12.677 C 5.64 12.775 5.557 12.875 5.481 12.978 C 5.386 13.105 5.294 13.235 5.208 13.368 C 5.18 13.412 5.13 13.447 5.132 13.509 C 5.036 13.622 4.981 13.755 4.939 13.895 C 4.925 13.932 4.914 13.97 4.895 14.004 C 4.725 14.31 4.626 14.64 4.534 14.975 C 4.497 15.113 4.455 15.25 4.415 15.387 C 4.352 15.487 4.329 15.6 4.303 15.713 C 4.292 15.746 4.277 15.778 4.269 15.811 C 4.175 16.166 4.1 16.523 4.055 16.887 C 4.046 16.964 4.035 17.04 4.024 17.12 C 3.872 17.021 3.769 17.029 3.695 17.139 C 3.663 17.188 3.66 17.241 3.669 17.296 C 3.677 17.349 3.708 17.386 3.761 17.403 C 3.863 17.454 3.867 17.454 3.949 17.366 C 3.971 17.348 3.994 17.33 4.024 17.306 C 4.03 17.415 4.029 17.517 4.042 17.618 C 4.055 17.723 4.082 17.827 4.103 17.927 C 4.059 17.955 4.019 17.975 3.987 18.003 C 3.937 18.049 3.932 18.104 3.968 18.163 C 3.98 18.183 4.002 18.196 4.02 18.213 C 4.063 18.33 4.081 18.338 4.192 18.293 C 4.196 18.291 4.201 18.289 4.205 18.287 C 4.263 18.415 4.321 18.543 4.379 18.671 C 4.344 18.7 4.311 18.722 4.285 18.75 C 4.233 18.805 4.216 18.867 4.262 18.935 C 4.27 18.963 4.272 18.994 4.286 19.018 C 4.347 19.126 4.479 19.134 4.551 19.033 C 4.567 19.01 4.575 18.98 4.587 18.953 C 4.621 18.982 4.657 19.008 4.688 19.039 C 4.863 19.209 5.059 19.351 5.259 19.487 C 5.303 19.517 5.345 19.554 5.405 19.552 L 5.403 19.551 L 5.458 19.6 C 5.567 19.667 5.678 19.73 5.783 19.803 C 5.992 19.948 6.219 20.057 6.452 20.154 C 6.654 20.238 6.842 20.347 7.03 20.456 C 7.143 20.522 7.231 20.615 7.307 20.72 C 7.316 20.733 7.312 20.755 7.315 20.773 C 7.282 20.763 7.249 20.758 7.218 20.744 C 6.959 20.628 6.692 20.538 6.412 20.488 C 6.334 20.475 6.254 20.466 6.175 20.458 C 5.988 20.438 5.801 20.41 5.611 20.419 C 5.507 20.425 5.403 20.423 5.299 20.42 C 5.076 20.412 4.852 20.398 4.629 20.393 C 4.506 20.391 4.382 20.403 4.259 20.409 C 4.029 20.348 3.841 20.208 3.645 20.085 C 3.611 20.064 3.581 20.039 3.549 20.016 C 3.534 19.985 3.524 19.951 3.505 19.924 C 3.461 19.864 3.412 19.808 3.365 19.749 C 3.241 19.594 3.128 19.431 3.058 19.243 C 2.922 18.877 2.856 18.499 2.847 18.117 C 2.925 18.032 2.988 17.944 3.039 17.848 C 3.041 17.845 3.03 17.834 3.024 17.826 C 2.95 17.839 2.92 17.93 2.832 17.939 C 2.829 17.883 2.828 17.835 2.824 17.786 C 2.82 17.734 2.833 17.692 2.87 17.651 C 2.909 17.608 2.937 17.553 2.968 17.503 C 2.971 17.499 2.965 17.488 2.962 17.479 C 2.92 17.486 2.878 17.494 2.83 17.503 C 2.826 17.46 2.823 17.426 2.821 17.392 C 2.818 17.316 2.828 17.249 2.885 17.187 C 2.945 17.122 2.99 17.043 3.04 16.97 C 3.05 16.955 3.068 16.939 3.045 16.918 C 2.968 16.919 2.919 16.99 2.836 17.009 C 2.846 16.914 2.855 16.826 2.864 16.739 C 2.937 16.694 3.019 16.665 3.073 16.573 C 3.004 16.583 2.952 16.59 2.895 16.598 C 2.874 16.532 2.893 16.47 2.899 16.422 C 2.967 16.352 3.025 16.291 3.085 16.232 C 3.21 16.109 3.21 16.11 3.23 16.018 C 3.135 15.979 3.052 16.047 2.956 16.058 C 2.953 15.958 2.983 15.874 2.999 15.789 C 3.088 15.739 3.172 15.69 3.244 15.59 C 3.167 15.604 3.111 15.615 3.043 15.627 C 3.049 15.588 3.051 15.559 3.057 15.532 C 3.124 15.253 3.09 15.327 3.281 15.148 C 3.348 15.117 3.401 15.072 3.451 15.007 C 3.383 15.014 3.315 15.049 3.245 15.112 C 3.218 15.113 3.201 15.156 3.16 15.121 C 3.193 15.012 3.227 14.9 3.258 14.797 C 3.352 14.749 3.444 14.721 3.486 14.618 C 3.432 14.608 3.386 14.599 3.334 14.59 C 3.343 14.486 3.383 14.402 3.416 14.31 C 3.465 14.287 3.514 14.263 3.563 14.24 C 3.618 14.213 3.66 14.175 3.689 14.128 C 3.628 14.092 3.563 14.152 3.486 14.116 C 3.54 14.006 3.575 13.889 3.644 13.787 C 3.658 13.764 3.69 13.751 3.716 13.739 C 3.779 13.709 3.844 13.684 3.907 13.655 C 3.923 13.648 3.934 13.632 3.951 13.617 C 3.876 13.592 3.809 13.653 3.737 13.613 C 3.781 13.521 3.824 13.433 3.864 13.343 C 3.882 13.3 3.91 13.272 3.95 13.247 C 4.038 13.192 4.12 13.129 4.204 13.068 C 4.209 13.064 4.209 13.052 4.212 13.037 C 4.152 13.044 4.096 13.052 4.026 13.061 C 4.062 12.977 4.121 12.929 4.168 12.873 C 4.216 12.817 4.265 12.761 4.294 12.727 C 4.426 12.691 4.531 12.664 4.635 12.634 C 4.655 12.628 4.684 12.617 4.673 12.579 C 4.614 12.549 4.54 12.579 4.481 12.547 C 4.484 12.529 4.482 12.517 4.487 12.511 C 4.624 12.35 4.781 12.217 4.991 12.16 C 5.044 12.145 5.095 12.126 5.147 12.111 C 5.185 12.1 5.224 12.09 5.263 12.081 C 5.298 12.072 5.335 12.072 5.387 12.055 C 5.311 12.007 5.247 12.024 5.185 12.031 C 5.112 12.039 5.039 12.053 4.965 12.064 C 4.959 12.058 4.953 12.052 4.947 12.046 C 5.034 11.924 5.235 11.721 5.34 11.646 C 5.497 11.66 5.655 11.671 5.831 11.59 C 5.693 11.556 5.581 11.528 5.46 11.497 C 5.492 11.428 5.544 11.388 5.579 11.335 C 5.633 11.252 5.71 11.206 5.806 11.181 C 5.97 11.138 6.131 11.088 6.293 11.04 C 6.319 11.033 6.353 11.033 6.365 10.989 C 6.313 10.971 6.26 10.98 6.208 10.985 C 6.154 10.99 6.1 11.002 6.046 11.009 C 5.968 11.018 5.968 11.017 5.896 10.995 C 5.896 10.99 5.896 10.984 5.898 10.981 C 5.937 10.93 5.976 10.878 6.015 10.827 C 6.104 10.709 6.223 10.65 6.37 10.649 C 6.478 10.648 6.585 10.649 6.709 10.649 C 6.668 10.591 6.616 10.587 6.572 10.574 C 6.52 10.559 6.465 10.551 6.412 10.54 C 6.365 10.531 6.314 10.54 6.273 10.518 C 6.274 10.498 6.272 10.486 6.276 10.479 C 6.332 10.403 6.389 10.328 6.445 10.252 C 6.468 10.222 6.497 10.209 6.533 10.204 C 6.662 10.188 6.789 10.175 6.92 10.192 C 7.008 10.204 7.098 10.199 7.188 10.2 C 7.199 10.2 7.21 10.191 7.235 10.18 C 7.021 10.067 6.794 10.104 6.578 10.054 C 6.624 9.938 6.693 9.842 6.759 9.744 C 6.77 9.727 6.799 9.715 6.821 9.71 C 7.135 9.637 7.446 9.546 7.769 9.514 C 7.801 9.511 7.833 9.495 7.864 9.485 C 7.553 9.402 7.245 9.439 6.925 9.492 C 6.94 9.456 6.947 9.433 6.959 9.412 C 7.009 9.327 7.068 9.246 7.111 9.157 C 7.174 9.025 7.269 8.949 7.415 8.93 C 7.474 8.923 7.527 8.904 7.589 8.929 C 7.672 8.961 7.76 8.979 7.847 9.003 C 8.019 9.051 8.19 9.103 8.364 9.145 C 8.486 9.174 8.611 9.201 8.772 9.177 C 8.717 9.158 8.691 9.145 8.663 9.14 C 8.515 9.118 8.374 9.072 8.236 9.013 C 8.113 8.961 7.989 8.909 7.866 8.855 C 7.853 8.849 7.845 8.831 7.827 8.809 C 7.926 8.799 8.01 8.789 8.094 8.781 C 8.18 8.772 8.271 8.784 8.367 8.718 C 8.148 8.718 7.949 8.715 7.75 8.719 C 7.656 8.72 7.562 8.732 7.468 8.739 C 7.431 8.742 7.393 8.757 7.351 8.732 C 7.398 8.616 7.455 8.513 7.521 8.414 C 7.542 8.382 7.574 8.355 7.606 8.333 C 7.75 8.235 7.906 8.158 8.068 8.093 C 8.105 8.078 8.144 8.07 8.183 8.06 C 8.352 8.02 8.521 7.981 8.69 7.94 C 8.707 7.936 8.73 7.932 8.723 7.899 C 8.712 7.895 8.699 7.887 8.686 7.887 C 8.557 7.885 8.428 7.883 8.298 7.883 C 8.269 7.883 8.238 7.885 8.21 7.894 C 8.068 7.94 7.92 7.964 7.787 8.037 C 7.772 8.045 7.753 8.059 7.735 8.026 C 7.76 7.983 7.788 7.937 7.815 7.889 C 7.866 7.797 7.936 7.723 8.025 7.663 C 8.111 7.605 8.188 7.534 8.27 7.469 C 8.355 7.428 8.446 7.396 8.508 7.319 C 8.517 7.314 8.539 7.317 8.519 7.298 C 8.515 7.304 8.51 7.31 8.506 7.317 C 8.465 7.327 8.423 7.335 8.384 7.35 C 8.316 7.374 8.251 7.403 8.184 7.431 C 8.227 7.342 8.266 7.251 8.312 7.164 C 8.333 7.126 8.366 7.095 8.393 7.061 C 8.413 7.1 8.425 7.146 8.454 7.176 C 8.517 7.242 8.615 7.214 8.644 7.128 C 8.659 7.084 8.657 7.041 8.634 6.999 C 8.609 6.95 8.564 6.933 8.513 6.926 C 8.521 6.908 8.529 6.89 8.536 6.871 C 8.542 6.866 8.548 6.861 8.553 6.855 C 8.549 6.854 8.545 6.853 8.541 6.852 C 8.541 6.859 8.54 6.866 8.539 6.873 C 8.501 6.852 8.471 6.876 8.447 6.898 C 8.346 6.984 8.248 7.073 8.149 7.161 C 8.147 7.144 8.145 7.126 8.143 7.109 C 8.211 6.893 8.276 6.677 8.309 6.452 C 8.33 6.314 8.339 6.177 8.328 6.039 C 8.323 5.986 8.312 5.932 8.296 5.881 C 8.288 5.856 8.261 5.837 8.242 5.815 C 8.233 5.803 8.226 5.79 8.215 5.78 C 8.181 5.744 8.157 5.737 8.127 5.756 C 8.047 5.806 7.983 5.876 7.994 5.972 C 8.011 6.121 7.967 6.258 7.924 6.393 C 7.85 6.624 7.768 6.852 7.686 7.08 C 7.633 7.224 7.563 7.361 7.481 7.491 C 7.208 7.922 6.912 8.337 6.586 8.73 C 6.453 8.89 6.315 9.046 6.179 9.203 C 6.17 9.213 6.154 9.218 6.142 9.225 C 6.134 9.235 6.126 9.244 6.118 9.254 C 6.081 9.289 6.035 9.315 6.028 9.373 L 6.029 9.371 C 6.019 9.382 6.009 9.392 5.999 9.403 L 6.001 9.401 C 5.991 9.402 5.978 9.4 5.973 9.405 C 5.912 9.46 5.851 9.515 5.792 9.572 C 5.785 9.579 5.791 9.599 5.791 9.612 C 5.764 9.597 5.744 9.611 5.727 9.629 C 5.638 9.722 5.549 9.815 5.463 9.912 C 5.375 10.011 5.295 10.12 5.202 10.216 C 4.867 10.563 4.579 10.949 4.269 11.316 C 4.068 11.555 3.884 11.808 3.7 12.06 C 3.588 12.211 3.491 12.373 3.384 12.528 C 3.235 12.745 3.107 12.973 2.997 13.213 C 2.795 13.656 2.646 14.117 2.521 14.586 C 2.463 14.806 2.419 15.031 2.415 15.259 C 2.412 15.398 2.421 15.537 2.424 15.675 C 2.419 15.711 2.413 15.748 2.408 15.784 C 2.336 15.876 2.313 15.99 2.272 16.096 C 2.162 16.376 2.122 16.669 2.114 16.967 C 2.11 17.111 2.126 17.255 2.121 17.398 C 2.113 17.643 2.161 17.881 2.194 18.121 C 2.218 18.289 2.291 18.442 2.344 18.601 C 2.437 18.88 2.565 19.141 2.724 19.389 C 2.734 19.404 2.738 19.423 2.745 19.442 C 2.727 19.452 2.714 19.458 2.701 19.465 C 2.654 19.417 2.608 19.367 2.561 19.319 C 2.514 19.271 2.466 19.223 2.419 19.176 C 2.423 19.148 2.421 19.123 2.395 19.105 C 2.382 19.096 2.368 19.086 2.355 19.076 L 2.357 19.078 C 2.354 19.059 2.357 19.037 2.349 19.022 C 2.266 18.875 2.19 18.724 2.096 18.584 C 1.942 18.355 1.832 18.107 1.756 17.844 C 1.683 17.592 1.62 17.337 1.556 17.082 C 1.538 17.011 1.528 16.936 1.521 16.863 C 1.51 16.759 1.504 16.655 1.497 16.552 C 1.495 16.513 1.497 16.473 1.497 16.436 C 1.625 16.405 1.655 16.38 1.707 16.267 C 1.634 16.238 1.574 16.295 1.499 16.298 L 1.499 16.17 C 1.552 16.181 1.603 16.212 1.645 16.167 C 1.688 16.122 1.734 16.075 1.725 16.005 C 1.672 15.972 1.625 15.986 1.578 16.004 C 1.553 16.013 1.527 16.019 1.5 16.027 L 1.5 15.838 C 1.598 15.831 1.655 15.772 1.706 15.704 C 1.651 15.636 1.579 15.706 1.516 15.67 L 1.516 15.532 C 1.57 15.485 1.619 15.443 1.665 15.399 C 1.709 15.356 1.776 15.339 1.81 15.279 C 1.717 15.236 1.639 15.301 1.55 15.294 C 1.532 15.199 1.548 15.108 1.564 15.02 C 1.679 14.925 1.798 14.847 1.952 14.811 C 1.932 14.787 1.922 14.769 1.907 14.761 C 1.867 14.738 1.822 14.735 1.777 14.746 C 1.725 14.759 1.673 14.771 1.612 14.785 C 1.604 14.667 1.612 14.561 1.684 14.47 C 1.714 14.431 1.748 14.394 1.78 14.356 C 1.896 14.221 2.013 14.086 2.129 13.949 C 2.146 13.929 2.175 13.911 2.156 13.867 C 1.979 13.948 1.862 14.108 1.704 14.217 C 1.699 14.198 1.693 14.188 1.695 14.179 C 1.717 14.078 1.74 13.977 1.763 13.871 C 1.958 13.696 2.155 13.522 2.35 13.346 C 2.379 13.405 2.417 13.453 2.483 13.473 C 2.498 13.471 2.512 13.468 2.526 13.469 C 2.603 13.472 2.647 13.436 2.658 13.361 C 2.686 13.332 2.688 13.295 2.67 13.266 C 2.648 13.229 2.619 13.193 2.583 13.17 C 2.528 13.133 2.438 13.153 2.397 13.207 C 2.374 13.238 2.364 13.278 2.349 13.313 C 2.324 13.315 2.297 13.311 2.275 13.32 C 2.198 13.351 2.121 13.386 2.045 13.422 C 1.984 13.452 1.93 13.499 1.854 13.509 C 1.854 13.476 1.848 13.446 1.855 13.42 C 1.874 13.348 1.899 13.278 1.92 13.207 C 1.936 13.153 1.965 13.11 2.013 13.078 C 2.116 13.009 2.218 12.94 2.32 12.869 C 2.393 12.818 2.465 12.766 2.536 12.713 C 2.553 12.7 2.563 12.679 2.595 12.637 C 2.393 12.7 2.245 12.816 2.068 12.853 C 2.061 12.836 2.053 12.826 2.055 12.819 C 2.081 12.734 2.108 12.65 2.135 12.565 C 2.146 12.53 2.17 12.508 2.203 12.492 C 2.253 12.468 2.302 12.454 2.36 12.457 C 2.459 12.463 2.558 12.461 2.657 12.459 C 2.682 12.459 2.71 12.453 2.722 12.419 C 2.639 12.404 2.563 12.389 2.482 12.374 C 2.506 12.317 2.556 12.314 2.592 12.291 C 2.652 12.251 2.732 12.239 2.773 12.169 C 2.777 12.168 2.782 12.167 2.785 12.164 C 2.785 12.164 2.786 12.159 2.786 12.156 C 2.783 12.161 2.779 12.166 2.775 12.171 C 2.732 12.174 2.687 12.173 2.644 12.181 C 2.595 12.19 2.549 12.21 2.5 12.22 C 2.42 12.235 2.34 12.264 2.249 12.251 C 2.287 12.128 2.341 12.021 2.402 11.921 C 2.449 11.843 2.53 11.793 2.629 11.815 C 2.82 11.859 2.991 11.792 3.163 11.727 C 3.185 11.719 3.207 11.703 3.191 11.673 C 3.079 11.647 2.968 11.704 2.834 11.682 C 2.865 11.659 2.878 11.645 2.894 11.638 C 2.938 11.616 2.984 11.597 3.029 11.575 C 3.048 11.566 3.075 11.559 3.063 11.527 C 2.9 11.532 2.747 11.605 2.57 11.598 C 2.635 11.479 2.693 11.371 2.755 11.265 C 2.767 11.244 2.788 11.228 2.808 11.215 C 2.845 11.19 2.885 11.169 2.923 11.145 C 2.976 11.113 3.028 11.101 3.093 11.111 C 3.24 11.132 3.388 11.143 3.536 11.157 C 3.505 11.189 3.474 11.221 3.445 11.253 C 3.414 11.288 3.4 11.329 3.401 11.376 C 3.402 11.424 3.415 11.464 3.458 11.49 C 3.471 11.521 3.481 11.554 3.5 11.582 C 3.539 11.636 3.596 11.645 3.658 11.632 C 3.717 11.619 3.76 11.571 3.765 11.508 C 3.768 11.474 3.76 11.441 3.758 11.407 C 3.793 11.364 3.788 11.319 3.766 11.271 C 3.745 11.225 3.711 11.192 3.661 11.179 C 3.62 11.169 3.576 11.165 3.534 11.158 C 3.499 11.11 3.441 11.105 3.391 11.087 C 3.338 11.066 3.283 11.047 3.23 11.028 C 3.241 10.976 3.28 10.971 3.31 10.957 C 3.387 10.923 3.466 10.893 3.544 10.861 C 3.567 10.852 3.591 10.843 3.584 10.803 C 3.388 10.815 3.196 10.866 2.987 10.895 C 3.035 10.779 3.083 10.678 3.184 10.617 C 3.247 10.579 3.316 10.55 3.384 10.519 C 3.434 10.495 3.487 10.495 3.543 10.494 C 3.657 10.493 3.771 10.482 3.884 10.469 C 3.926 10.464 3.973 10.452 4.006 10.396 C 3.903 10.414 3.81 10.405 3.697 10.369 C 3.825 10.295 3.949 10.255 4.057 10.147 C 4.006 10.149 3.976 10.146 3.95 10.153 C 3.879 10.173 3.808 10.198 3.738 10.221 C 3.63 10.257 3.52 10.281 3.397 10.296 C 3.405 10.267 3.406 10.247 3.415 10.232 C 3.449 10.178 3.484 10.123 3.523 10.072 C 3.62 9.943 3.786 9.878 3.942 9.912 C 4.07 9.94 4.199 9.931 4.328 9.934 C 4.353 9.935 4.379 9.916 4.427 9.897 C 4.369 9.875 4.334 9.861 4.298 9.847 C 4.248 9.828 4.197 9.808 4.146 9.789 C 4.15 9.78 4.152 9.771 4.154 9.762 C 4.187 9.747 4.22 9.731 4.253 9.716 C 4.267 9.71 4.282 9.704 4.297 9.699 C 4.36 9.684 4.412 9.655 4.457 9.582 C 4.373 9.593 4.312 9.617 4.259 9.659 C 4.247 9.666 4.235 9.672 4.223 9.678 C 4.093 9.713 3.963 9.743 3.827 9.736 L 3.816 9.725 C 3.84 9.689 3.862 9.65 3.888 9.616 C 3.936 9.553 3.987 9.492 4.037 9.431 C 4.14 9.305 4.274 9.259 4.432 9.283 C 4.481 9.29 4.528 9.309 4.575 9.323 C 4.725 9.365 5.05 9.35 5.213 9.291 C 5.01 9.246 4.803 9.266 4.602 9.182 C 4.667 9.158 4.719 9.141 4.769 9.12 C 4.817 9.1 4.872 9.09 4.922 9.031 C 4.715 9.052 4.529 9.09 4.329 9.063 C 4.365 8.995 4.422 8.965 4.476 8.934 C 4.632 8.846 4.802 8.789 4.969 8.728 C 4.955 8.79 4.948 8.85 5.008 8.893 C 5.027 8.941 5.05 8.982 5.114 8.981 C 5.137 8.952 5.162 8.923 5.186 8.893 C 5.195 8.894 5.21 8.899 5.213 8.895 C 5.276 8.814 5.269 8.735 5.193 8.678 C 5.169 8.661 5.14 8.652 5.113 8.639 C 5.118 8.618 5.122 8.596 5.127 8.573 C 5.075 8.565 5.033 8.559 4.966 8.548 C 5.151 8.329 5.337 8.152 5.603 8.076 C 5.548 8.061 5.498 8.063 5.445 8.077 C 5.283 8.121 5.143 8.203 5.023 8.319 C 4.941 8.399 4.861 8.48 4.779 8.559 C 4.755 8.581 4.729 8.61 4.681 8.581 C 4.745 8.477 4.8 8.368 4.904 8.295 C 4.94 8.27 4.973 8.236 4.997 8.2 C 5.068 8.095 5.165 8.021 5.268 7.949 C 5.419 7.843 5.563 7.73 5.709 7.619 C 5.726 7.607 5.735 7.585 5.752 7.561 C 5.642 7.568 5.605 7.579 5.501 7.632 C 5.431 7.668 5.361 7.706 5.291 7.743 C 5.281 7.735 5.272 7.727 5.262 7.719 C 5.28 7.631 5.335 7.573 5.41 7.525 C 5.568 7.424 5.715 7.307 5.837 7.161 C 5.857 7.136 5.891 7.114 5.872 7.065 C 5.823 7.059 5.779 7.08 5.735 7.101 C 5.642 7.147 5.55 7.195 5.458 7.242 C 5.499 7.163 5.537 7.082 5.582 7.006 C 5.647 6.895 5.72 6.788 5.785 6.677 C 6.075 6.175 6.424 5.719 6.847 5.323 C 6.955 5.221 7.077 5.134 7.192 5.04 C 7.22 5.026 7.253 5.017 7.255 4.977 C 7.261 4.969 7.268 4.965 7.277 4.963 C 7.364 4.952 7.432 4.905 7.496 4.849 C 7.547 4.823 7.599 4.796 7.65 4.769 C 7.722 4.731 7.794 4.692 7.866 4.653 C 7.872 4.66 7.878 4.666 7.884 4.671 C 7.849 4.737 7.81 4.8 7.779 4.867 C 7.757 4.916 7.734 4.969 7.731 5.021 C 7.723 5.125 7.727 5.229 7.73 5.333 C 7.732 5.393 7.749 5.449 7.8 5.488 C 7.811 5.481 7.822 5.478 7.826 5.47 C 7.849 5.432 7.872 5.393 7.889 5.353 C 7.986 5.129 8.112 4.922 8.252 4.724 C 8.281 4.683 8.31 4.642 8.344 4.607 C 8.561 4.381 8.792 4.172 9.065 4.013 C 9.164 3.956 9.259 3.892 9.353 3.827 C 9.41 3.788 9.462 3.742 9.471 3.664 C 9.473 3.642 9.488 3.618 9.504 3.6 C 9.589 3.504 9.676 3.41 9.762 3.315 C 9.771 3.447 9.776 3.581 9.792 3.713 C 9.806 3.826 9.833 3.937 9.856 4.048 C 9.915 4.331 9.999 4.604 10.145 4.855 C 10.227 4.996 10.3 5.143 10.419 5.259 C 10.485 5.357 10.538 5.463 10.627 5.545 C 10.886 5.779 11.184 5.9 11.537 5.872 C 11.606 5.867 11.676 5.864 11.745 5.86 C 11.77 5.859 11.798 5.865 11.819 5.855 C 11.908 5.813 12.001 5.817 12.091 5.83 C 12.114 5.795 12.089 5.781 12.071 5.768 C 11.985 5.701 11.894 5.64 11.812 5.569 C 11.675 5.447 11.543 5.319 11.409 5.194 C 11.293 5.086 11.176 4.979 11.06 4.872 C 11.055 4.863 11.05 4.854 11.045 4.845 L 11.046 4.848 C 11.042 4.829 11.041 4.809 11.032 4.792 C 10.957 4.646 10.885 4.5 10.804 4.358 C 10.659 4.101 10.557 3.828 10.491 3.542 C 10.486 3.517 10.481 3.493 10.479 3.468 C 10.451 3.129 10.483 2.795 10.589 2.47 C 10.691 2.155 10.861 1.876 11.056 1.612 C 11.094 1.561 11.147 1.521 11.192 1.476 C 11.175 1.526 11.179 1.573 11.218 1.613 C 11.252 1.648 11.303 1.653 11.339 1.625 C 11.38 1.594 11.388 1.533 11.352 1.494 C 11.336 1.477 11.314 1.46 11.292 1.455 C 11.264 1.45 11.234 1.458 11.205 1.46 C 11.322 1.347 11.435 1.23 11.556 1.121 C 11.763 0.935 11.999 0.789 12.224 0.626 C 12.365 0.524 12.512 0.434 12.672 0.364 C 12.711 0.347 12.747 0.319 12.785 0.297 C 12.817 0.284 12.85 0.272 12.882 0.259 C 12.952 0.234 13.019 0.201 13.09 0.184 C 13.487 0.089 13.889 0.02 14.297 0.01 C 14.375 0.024 14.453 0.038 14.531 0.053 C 14.73 0.094 14.93 0.13 15.127 0.177 C 15.267 0.21 15.404 0.252 15.533 0.319 C 15.776 0.445 16.009 0.585 16.217 0.764 C 16.36 0.886 16.502 1.01 16.613 1.164 C 16.613 1.164 16.612 1.164 16.612 1.164 C 16.593 1.163 16.573 1.158 16.555 1.161 C 16.528 1.167 16.511 1.188 16.518 1.215 C 16.522 1.231 16.538 1.249 16.553 1.257 C 16.579 1.269 16.603 1.255 16.614 1.231 C 16.621 1.215 16.619 1.194 16.621 1.175 C 16.621 1.175 16.621 1.175 16.621 1.174 C 16.693 1.261 16.77 1.345 16.838 1.436 C 17.065 1.74 17.236 2.073 17.327 2.444 C 17.304 2.575 17.283 2.707 17.257 2.838 C 17.197 3.148 17.078 3.433 16.879 3.683 C 16.839 3.733 16.8 3.785 16.759 3.834 C 16.64 3.981 16.523 4.127 16.384 4.256 C 16.14 4.482 15.898 4.71 15.62 4.894 C 15.6 4.908 15.582 4.926 15.563 4.941 C 15.301 5.147 15.04 5.352 14.733 5.488 C 14.67 5.515 14.613 5.557 14.554 5.592 C 14.268 5.724 13.972 5.818 13.654 5.832 C 13.606 5.834 13.555 5.844 13.511 5.862 C 13.459 5.882 13.451 5.946 13.49 5.985 C 13.511 6.006 13.536 6.023 13.56 6.04 C 13.756 6.18 13.975 6.273 14.198 6.357 C 14.31 6.399 14.428 6.421 14.548 6.424 C 14.672 6.426 14.796 6.428 14.92 6.428 C 15.005 6.428 15.086 6.405 15.166 6.376 C 15.391 6.295 15.61 6.203 15.82 6.089 C 16.034 5.973 16.249 5.861 16.465 5.749 C 16.599 5.68 16.717 5.591 16.822 5.484 C 16.982 5.321 17.124 5.142 17.259 4.958 C 17.291 4.914 17.324 4.871 17.357 4.827 C 17.476 4.953 17.591 5.083 17.714 5.204 C 18.012 5.495 18.283 5.808 18.53 6.144 C 18.624 6.271 18.707 6.408 18.814 6.523 C 18.975 6.697 19.098 6.889 19.179 7.111 C 19.23 7.249 19.285 7.386 19.339 7.524 C 19.331 7.839 19.301 8.149 19.174 8.442 C 19.162 8.475 19.15 8.508 19.139 8.541 L 19.141 8.537 C 19.133 8.547 19.125 8.557 19.118 8.568 C 19.115 8.578 19.112 8.589 19.11 8.599 L 19.111 8.597 C 19.093 8.62 19.074 8.642 19.059 8.666 C 18.968 8.807 18.884 8.952 18.788 9.09 C 18.674 9.253 18.531 9.389 18.362 9.496 C 18.203 9.596 18.047 9.7 17.887 9.798 C 17.781 9.862 17.672 9.919 17.562 9.975 C 17.533 9.989 17.496 9.989 17.464 9.995 C 17.457 9.956 17.491 9.947 17.514 9.931 C 17.615 9.86 17.72 9.793 17.819 9.719 C 18.005 9.577 18.158 9.4 18.313 9.227 C 18.498 9.021 18.631 8.787 18.726 8.528 C 18.845 8.202 18.923 7.864 19.013 7.53 C 19.027 7.478 19.034 7.423 19.04 7.369 C 19.044 7.324 19.034 7.281 19 7.246 C 18.979 7.224 18.934 7.227 18.926 7.256 C 18.914 7.303 18.909 7.352 18.9 7.401 C 18.883 7.45 18.866 7.499 18.849 7.549 C 18.84 7.566 18.829 7.583 18.822 7.601 C 18.697 7.905 18.544 8.194 18.38 8.478 C 18.285 8.642 18.175 8.793 18.03 8.919 C 17.932 9.003 17.842 9.096 17.754 9.19 C 17.624 9.329 17.48 9.45 17.318 9.55 C 17.259 9.586 17.198 9.621 17.141 9.661 C 17.089 9.698 17.034 9.735 16.991 9.782 C 16.912 9.868 16.817 9.928 16.718 9.986 C 16.632 10.036 16.549 10.089 16.464 10.14 C 16.431 10.151 16.398 10.163 16.365 10.172 C 16.081 10.246 15.795 10.31 15.505 10.355 C 15.309 10.385 15.113 10.429 14.938 10.527 C 14.73 10.643 14.525 10.765 14.322 10.89 C 14.247 10.937 14.181 10.999 14.113 11.057 C 14.091 11.075 14.078 11.103 14.061 11.127 C 14.054 11.132 14.043 11.137 14.041 11.144 C 14.038 11.15 14.046 11.16 14.049 11.167 C 14.053 11.165 14.059 11.163 14.061 11.159 C 14.065 11.151 14.068 11.142 14.072 11.134 C 14.104 11.122 14.137 11.113 14.167 11.097 C 14.329 11.012 14.49 10.926 14.651 10.838 C 14.92 10.69 15.211 10.616 15.514 10.588 C 15.811 10.561 16.103 10.514 16.387 10.419 C 16.457 10.396 16.529 10.379 16.601 10.359 C 16.601 10.375 16.601 10.391 16.601 10.408 C 16.579 10.419 16.557 10.431 16.535 10.441 C 16.319 10.54 16.101 10.636 15.886 10.738 C 15.603 10.872 15.395 11.088 15.24 11.354 C 15.065 11.657 15.105 11.954 15.315 12.192 C 15.435 12.329 15.583 12.426 15.75 12.495 C 15.861 12.541 15.976 12.569 16.097 12.557 C 16.231 12.594 16.367 12.619 16.507 12.618 C 16.541 12.618 16.575 12.625 16.61 12.629 C 16.583 12.701 16.535 12.757 16.478 12.806 C 16.362 12.907 16.247 13.009 16.13 13.11 C 16.101 13.136 16.07 13.166 16.034 13.178 C 15.912 13.22 15.787 13.259 15.655 13.235 C 15.534 13.212 15.413 13.189 15.308 13.111 C 15.232 13.054 15.145 13.013 15.044 13.033 C 15.025 13.018 15.006 13.004 14.987 12.99 C 14.986 12.968 14.982 12.948 14.956 12.943 L 14.957 12.945 C 14.954 12.931 14.956 12.914 14.948 12.903 C 14.848 12.772 14.778 12.627 14.722 12.473 C 14.662 12.303 14.547 12.177 14.387 12.094 C 14.273 12.035 14.158 11.979 14.041 11.927 C 13.877 11.853 13.707 11.806 13.527 11.793 C 13.452 11.788 13.38 11.797 13.318 11.845 C 13.312 11.851 13.307 11.858 13.303 11.866 C 13.249 11.872 13.194 11.87 13.142 11.884 C 13.062 11.906 13.014 11.971 13.023 12.032 C 13.032 12.09 13.079 12.128 13.163 12.143 C 13.25 12.159 13.338 12.173 13.425 12.189 C 13.551 12.213 13.676 12.245 13.803 12.261 C 13.971 12.284 14.132 12.325 14.273 12.423 L 14.278 12.422 C 14.433 12.562 14.565 12.721 14.693 12.885 C 14.893 13.139 15.15 13.303 15.471 13.366 C 15.572 13.385 15.671 13.42 15.77 13.448 C 15.701 13.537 15.63 13.625 15.561 13.714 C 15.502 13.792 15.444 13.872 15.387 13.952 C 15.349 14.005 15.298 14.02 15.234 14.02 C 15.082 14.019 14.944 13.976 14.817 13.893 C 14.779 13.867 14.747 13.822 14.69 13.836 C 14.553 13.728 14.4 13.652 14.234 13.599 C 14.136 13.567 14.037 13.534 13.939 13.502 C 13.868 13.432 13.813 13.353 13.766 13.265 C 13.71 13.161 13.647 13.061 13.582 12.962 C 13.553 12.918 13.514 12.878 13.475 12.842 C 13.394 12.768 13.3 12.714 13.2 12.669 C 13.086 12.619 12.965 12.594 12.841 12.594 C 12.763 12.594 12.685 12.615 12.607 12.626 C 12.564 12.635 12.52 12.642 12.477 12.653 C 12.467 12.656 12.455 12.675 12.455 12.686 C 12.455 12.698 12.466 12.717 12.477 12.721 C 12.514 12.734 12.553 12.743 12.591 12.752 C 12.783 12.794 12.959 12.87 13.11 12.997 C 13.258 13.12 13.405 13.245 13.551 13.371 C 13.694 13.495 13.846 13.603 14.025 13.673 C 14.156 13.724 14.262 13.815 14.35 13.925 C 14.378 13.96 14.404 13.996 14.432 14.03 C 14.513 14.13 14.616 14.193 14.742 14.22 C 14.839 14.242 14.934 14.271 15.029 14.296 C 14.987 14.351 14.944 14.404 14.902 14.459 C 14.88 14.489 14.852 14.502 14.814 14.504 C 14.701 14.51 14.587 14.516 14.475 14.527 C 14.39 14.535 14.31 14.526 14.228 14.499 C 14.087 14.453 13.94 14.432 13.791 14.432 L 13.794 14.432 C 13.774 14.392 13.738 14.397 13.703 14.401 L 13.704 14.401 C 13.657 14.35 13.597 14.337 13.531 14.346 C 13.5 14.335 13.469 14.325 13.438 14.315 C 13.292 14.255 13.147 14.195 13 14.138 C 12.978 14.129 12.951 14.135 12.926 14.134 C 12.921 14.127 12.917 14.116 12.909 14.114 C 12.904 14.111 12.895 14.119 12.887 14.122 C 12.891 14.125 12.895 14.129 12.9 14.129 C 12.909 14.131 12.919 14.131 12.928 14.132 C 13.085 14.238 13.261 14.302 13.436 14.368 C 13.571 14.429 13.703 14.497 13.841 14.549 C 14.036 14.624 14.221 14.715 14.4 14.821 C 14.463 14.858 14.53 14.889 14.599 14.925 C 14.533 15.076 14.389 15.219 14.271 15.326 C 14.173 15.415 14.028 15.47 13.931 15.561 C 13.896 15.627 13.801 15.744 13.721 15.809 C 13.532 15.964 13.457 15.965 13.215 15.96 C 13.022 15.955 12.862 15.944 12.676 15.887 C 12.636 15.85 12.581 15.787 12.54 15.751 C 12.5 15.715 12.464 15.672 12.418 15.645 C 12.184 15.512 11.944 15.396 11.664 15.417 C 11.554 15.426 11.448 15.406 11.342 15.382 C 11.295 15.372 11.246 15.369 11.197 15.363 C 11.166 15.352 11.135 15.342 11.103 15.331 C 11.074 15.307 11.044 15.284 10.998 15.304 C 11.028 15.346 11.065 15.366 11.107 15.38 C 11.267 15.479 11.423 15.583 11.587 15.674 C 11.654 15.712 11.735 15.734 11.812 15.742 C 12.018 15.765 12.206 15.836 12.386 15.932 C 12.579 16.034 12.785 16.105 12.99 16.174 C 13.087 16.207 13.191 16.213 13.291 16.231 C 13.262 16.288 13.263 16.289 13.192 16.339 C 13.095 16.352 13.017 16.407 12.942 16.464 C 12.815 16.56 12.676 16.636 12.532 16.702 C 12.396 16.764 12.269 16.838 12.145 16.922 C 12.027 17.003 11.904 17.081 11.761 17.111 C 11.649 17.135 11.542 17.173 11.438 17.221 C 11.335 17.269 11.23 17.31 11.115 17.328 C 11.047 17.338 10.981 17.362 10.914 17.38 C 10.872 17.392 10.845 17.418 10.846 17.465 C 10.622 17.498 10.399 17.532 10.149 17.57 C 10.197 17.591 10.222 17.609 10.249 17.613 C 10.342 17.628 10.435 17.644 10.529 17.65 C 10.628 17.657 10.728 17.654 10.827 17.655 C 10.851 17.662 10.874 17.669 10.898 17.676 L 10.894 17.675 C 10.906 17.684 10.916 17.695 10.929 17.703 C 11.014 17.754 11.046 17.829 11.047 17.927 C 11.047 18.008 11.034 18.085 11.01 18.16 C 10.976 18.267 10.975 18.377 10.991 18.484 C 11.038 18.795 11.235 18.884 11.487 18.82 C 11.492 18.818 11.496 18.817 11.501 18.816 C 11.699 18.764 11.886 18.683 12.063 18.583 C 12.205 18.503 12.358 18.469 12.518 18.457 C 12.599 18.45 12.666 18.474 12.707 18.547 C 12.728 18.586 12.748 18.629 12.752 18.671 C 12.763 18.799 12.778 18.929 12.768 19.056 C 12.757 19.21 12.762 19.361 12.774 19.515 C 12.784 19.657 12.823 19.786 12.902 19.904 C 12.918 19.946 12.925 19.996 12.986 19.999 C 12.979 20.042 13.009 20.059 13.041 20.075 L 13.041 20.078 Z M 16.122 3 L 16.121 3.002 C 16.155 2.992 16.152 2.963 16.153 2.937 C 16.182 2.879 16.213 2.823 16.239 2.765 C 16.309 2.604 16.346 2.435 16.328 2.259 C 16.312 2.102 16.282 1.946 16.223 1.798 C 16.139 1.588 15.997 1.423 15.791 1.328 C 15.598 1.239 15.396 1.17 15.179 1.157 C 15.072 1.078 14.955 1.08 14.84 1.128 C 14.758 1.162 14.678 1.205 14.607 1.257 C 14.515 1.325 14.433 1.405 14.348 1.48 C 14.27 1.549 14.198 1.626 14.114 1.686 C 13.896 1.842 13.673 1.818 13.482 1.635 C 13.399 1.556 13.315 1.478 13.224 1.41 C 13.04 1.273 12.83 1.198 12.601 1.194 C 12.404 1.191 12.215 1.236 12.049 1.348 C 11.893 1.453 11.741 1.564 11.589 1.675 C 11.563 1.695 11.546 1.727 11.524 1.753 L 11.526 1.752 C 11.513 1.762 11.499 1.772 11.486 1.781 C 11.451 1.822 11.418 1.864 11.38 1.902 C 11.209 2.068 11.097 2.268 11.037 2.498 C 11.015 2.581 11.008 2.665 11.021 2.748 C 11.06 2.996 11.162 3.209 11.375 3.359 C 11.54 3.475 11.703 3.596 11.868 3.714 C 11.883 3.725 11.898 3.735 11.914 3.745 L 11.912 3.744 C 12.01 3.852 12.126 3.932 12.266 3.976 C 12.441 4.03 12.616 4.085 12.792 4.138 C 12.911 4.173 13.033 4.195 13.158 4.194 C 13.347 4.193 13.535 4.196 13.723 4.185 C 13.861 4.177 14 4.159 14.135 4.128 C 14.39 4.068 14.643 3.996 14.896 3.927 C 15.198 3.846 15.464 3.696 15.708 3.505 C 15.767 3.458 15.818 3.404 15.854 3.339 C 15.86 3.329 15.854 3.312 15.853 3.298 C 15.937 3.285 15.99 3.232 16.002 3.149 C 16.064 3.145 16.077 3.133 16.092 3.059 L 16.09 3.061 C 16.123 3.052 16.127 3.028 16.122 3 Z M 9.704 15.149 C 9.678 15.116 9.641 15.122 9.606 15.12 C 9.577 15.117 9.546 15.118 9.517 15.111 C 9.395 15.081 9.27 15.086 9.146 15.093 C 9.098 15.095 9.05 15.113 9.003 15.128 C 8.98 15.135 8.975 15.175 8.994 15.19 C 9.012 15.206 9.032 15.224 9.054 15.231 C 9.102 15.245 9.15 15.256 9.199 15.264 C 9.468 15.307 9.72 15.393 9.951 15.537 C 10.014 15.576 10.076 15.619 10.141 15.655 C 10.228 15.703 10.314 15.754 10.407 15.789 C 10.588 15.856 10.773 15.913 10.957 15.974 C 11.109 16.032 11.26 16.09 11.412 16.147 C 11.485 16.175 11.561 16.193 11.64 16.189 L 11.644 16.189 L 11.65 16.197 L 11.642 16.19 L 11.64 16.189 C 11.527 16.136 11.414 16.083 11.301 16.031 C 11.255 16.002 11.21 15.972 11.164 15.943 C 11.002 15.839 10.851 15.723 10.736 15.564 C 10.649 15.443 10.523 15.368 10.379 15.344 C 10.242 15.322 10.11 15.283 9.975 15.255 C 9.892 15.197 9.801 15.161 9.7 15.147 L 9.704 15.149 Z M 11.677 10.89 L 11.675 10.888 C 11.685 10.897 11.695 10.912 11.707 10.914 C 11.758 10.922 11.787 10.905 11.798 10.866 C 11.807 10.832 11.792 10.794 11.763 10.779 C 11.734 10.763 11.696 10.769 11.67 10.793 C 11.642 10.819 11.644 10.837 11.677 10.89 Z M 6.3 8.181 C 6.271 8.192 6.273 8.217 6.273 8.241 C 6.275 8.311 6.291 8.371 6.372 8.384 C 6.387 8.364 6.398 8.349 6.409 8.334 C 6.448 8.334 6.475 8.315 6.491 8.28 C 6.513 8.229 6.494 8.167 6.44 8.142 C 6.411 8.128 6.374 8.128 6.341 8.131 C 6.314 8.133 6.3 8.156 6.298 8.183 L 6.3 8.181 Z M 10.426 10.298 C 10.441 10.31 10.455 10.325 10.472 10.332 C 10.524 10.355 10.567 10.332 10.604 10.297 C 10.641 10.261 10.649 10.207 10.629 10.162 C 10.607 10.113 10.568 10.086 10.513 10.09 C 10.495 10.091 10.477 10.101 10.459 10.107 C 10.41 10.124 10.374 10.154 10.367 10.207 C 10.362 10.251 10.392 10.277 10.426 10.298 Z M 2.051 15.938 C 2.107 15.932 2.137 15.897 2.154 15.847 C 2.171 15.796 2.15 15.735 2.106 15.705 C 2.062 15.674 1.996 15.676 1.955 15.713 C 1.901 15.762 1.889 15.819 1.932 15.882 C 1.966 15.964 1.967 15.964 2.051 15.938 Z M 4.714 13.331 L 4.715 13.334 C 4.711 13.32 4.711 13.303 4.702 13.293 C 4.64 13.219 4.504 13.222 4.419 13.326 C 4.382 13.371 4.379 13.425 4.388 13.479 C 4.396 13.53 4.424 13.569 4.478 13.584 C 4.513 13.602 4.546 13.628 4.583 13.637 C 4.688 13.665 4.783 13.586 4.782 13.478 C 4.781 13.43 4.763 13.391 4.731 13.357 C 4.726 13.349 4.72 13.34 4.714 13.331 Z M 8.578 13.385 C 8.601 13.394 8.622 13.405 8.645 13.411 C 8.713 13.428 8.756 13.401 8.773 13.331 C 8.777 13.313 8.772 13.292 8.772 13.273 C 8.772 13.249 8.779 13.223 8.773 13.201 C 8.75 13.12 8.676 13.079 8.59 13.097 C 8.513 13.112 8.467 13.176 8.474 13.258 C 8.479 13.324 8.517 13.365 8.578 13.385 Z M 6.386 16.071 C 6.396 16.054 6.406 16.037 6.416 16.021 C 6.437 15.928 6.421 15.852 6.319 15.816 C 6.285 15.811 6.25 15.798 6.217 15.802 C 6.185 15.806 6.15 15.821 6.125 15.841 C 6.059 15.895 6.047 15.972 6.086 16.041 C 6.131 16.123 6.217 16.17 6.294 16.15 C 6.336 16.138 6.382 16.125 6.387 16.068 L 6.386 16.071 Z M 5.976 16.749 C 6.105 16.771 6.11 16.769 6.159 16.663 C 6.186 16.629 6.185 16.589 6.179 16.55 C 6.169 16.49 6.132 16.452 6.076 16.434 C 5.985 16.405 5.883 16.451 5.859 16.539 C 5.849 16.579 5.851 16.628 5.863 16.668 C 5.878 16.717 5.918 16.75 5.976 16.749 Z M 4.293 10.784 C 4.336 10.724 4.31 10.671 4.275 10.622 C 4.233 10.562 4.171 10.553 4.103 10.561 C 4.035 10.569 3.999 10.613 3.979 10.672 C 3.963 10.721 3.965 10.769 4.004 10.809 C 4.011 10.838 4.014 10.869 4.027 10.895 C 4.052 10.947 4.097 10.978 4.157 10.976 C 4.216 10.975 4.269 10.934 4.287 10.872 C 4.295 10.844 4.291 10.813 4.293 10.784 Z M 5.542 12.501 C 5.557 12.441 5.53 12.396 5.489 12.357 C 5.44 12.312 5.356 12.301 5.297 12.331 C 5.24 12.361 5.197 12.442 5.206 12.503 C 5.218 12.573 5.269 12.634 5.335 12.646 C 5.363 12.652 5.393 12.644 5.422 12.643 C 5.53 12.614 5.536 12.607 5.542 12.501 Z M 2.861 12.528 C 2.869 12.539 2.876 12.552 2.887 12.562 C 2.969 12.633 3.045 12.62 3.096 12.525 C 3.104 12.508 3.105 12.488 3.109 12.469 C 3.12 12.448 3.136 12.428 3.143 12.406 C 3.169 12.317 3.067 12.199 2.974 12.208 C 2.889 12.215 2.827 12.259 2.794 12.34 C 2.762 12.422 2.787 12.484 2.861 12.528 Z M 4.175 14.543 C 4.16 14.463 4.1 14.429 4.029 14.419 C 3.96 14.41 3.906 14.446 3.862 14.497 C 3.824 14.542 3.813 14.594 3.826 14.649 C 3.841 14.711 3.877 14.755 3.947 14.76 C 3.969 14.768 3.992 14.78 4.015 14.783 C 4.128 14.796 4.209 14.712 4.193 14.598 C 4.19 14.579 4.181 14.561 4.175 14.543 Z M 3.857 15.682 C 3.89 15.655 3.905 15.619 3.9 15.577 C 3.886 15.464 3.791 15.396 3.675 15.417 C 3.58 15.434 3.504 15.547 3.532 15.643 C 3.544 15.683 3.573 15.723 3.605 15.751 C 3.636 15.779 3.677 15.806 3.725 15.776 C 3.789 15.773 3.831 15.738 3.857 15.682 Z M 6.938 14.801 C 6.884 14.785 6.833 14.785 6.787 14.824 C 6.753 14.854 6.726 14.888 6.721 14.934 C 6.714 14.991 6.731 15.039 6.775 15.077 C 6.794 15.093 6.811 15.111 6.833 15.123 C 6.932 15.177 7.052 15.139 7.097 15.042 C 7.142 14.944 7.097 14.857 6.981 14.813 C 6.967 14.808 6.953 14.805 6.938 14.801 Z M 7.41 14.048 C 7.351 14.066 7.322 14.107 7.313 14.165 C 7.3 14.247 7.342 14.32 7.418 14.356 C 7.495 14.392 7.56 14.372 7.633 14.289 C 7.662 14.27 7.693 14.254 7.718 14.231 C 7.768 14.183 7.783 14.103 7.754 14.043 C 7.723 13.979 7.669 13.953 7.599 13.951 C 7.516 13.948 7.463 13.997 7.41 14.048 Z M 7.612 17.707 C 7.695 17.703 7.779 17.701 7.863 17.697 C 8.06 17.686 8.256 17.673 8.453 17.661 C 8.535 17.682 8.618 17.697 8.697 17.725 C 8.91 17.8 9.13 17.824 9.355 17.826 C 9.549 17.827 9.724 17.76 9.901 17.696 C 9.947 17.679 9.99 17.65 9.997 17.593 C 10.017 17.58 10.039 17.568 10.056 17.553 C 10.082 17.531 10.076 17.495 10.045 17.485 C 10.019 17.477 9.989 17.475 9.961 17.47 C 9.901 17.412 9.832 17.429 9.77 17.459 C 9.713 17.486 9.663 17.527 9.61 17.562 C 9.389 17.641 9.163 17.647 8.935 17.611 C 8.836 17.596 8.739 17.575 8.642 17.556 C 8.604 17.538 8.567 17.514 8.527 17.504 C 8.474 17.49 8.422 17.498 8.392 17.555 C 8.221 17.579 8.05 17.599 7.88 17.63 C 7.789 17.647 7.701 17.68 7.612 17.707 Z M 14.451 10.087 L 14.456 10.086 C 14.522 10.071 14.589 10.057 14.654 10.041 C 14.829 9.998 15.005 9.985 15.184 10.021 C 15.311 10.046 15.44 10.055 15.569 10.032 C 15.642 10.018 15.717 10.012 15.789 9.997 C 15.964 9.959 16.138 9.919 16.311 9.876 C 16.367 9.863 16.425 9.842 16.441 9.765 C 16.414 9.752 16.388 9.73 16.363 9.731 C 16.309 9.733 16.254 9.741 16.204 9.759 C 15.991 9.839 15.772 9.869 15.546 9.849 C 15.492 9.844 15.437 9.842 15.383 9.84 C 15.348 9.839 15.313 9.837 15.279 9.841 C 15.016 9.872 14.764 9.942 14.518 10.035 C 14.494 10.044 14.476 10.068 14.456 10.086 L 14.453 10.089 C 14.444 10.094 14.436 10.098 14.428 10.103 C 14.435 10.098 14.444 10.092 14.451 10.087 Z M 10.014 17.029 C 10.027 17.02 10.053 17.014 10.024 16.992 C 10.017 16.933 9.978 16.908 9.923 16.905 C 9.854 16.902 9.784 16.909 9.716 16.901 C 9.46 16.871 9.203 16.88 8.947 16.882 C 8.823 16.883 8.7 16.879 8.579 16.85 C 8.512 16.834 8.442 16.833 8.374 16.825 C 8.322 16.808 8.27 16.793 8.218 16.775 C 8.063 16.721 7.907 16.673 7.745 16.647 C 7.693 16.639 7.639 16.623 7.576 16.65 C 7.586 16.67 7.59 16.692 7.603 16.699 C 7.641 16.722 7.681 16.742 7.722 16.759 C 7.897 16.831 8.072 16.901 8.246 16.971 C 8.384 17.146 8.575 17.198 8.785 17.192 C 8.898 17.189 9.011 17.168 9.122 17.148 C 9.302 17.115 9.483 17.091 9.665 17.089 C 9.734 17.088 9.803 17.1 9.872 17.106 C 9.936 17.112 9.99 17.097 10.014 17.029 Z M 9.148 16.116 C 9.106 16.103 9.063 16.09 9.021 16.077 C 8.918 16.042 8.814 16.007 8.711 15.973 C 8.692 15.967 8.672 15.968 8.653 15.966 C 8.67 15.994 8.69 16.007 8.711 16.018 C 8.964 16.156 9.217 16.294 9.471 16.43 C 9.802 16.607 10.146 16.743 10.53 16.749 C 10.64 16.751 10.747 16.775 10.851 16.811 C 10.893 16.825 10.936 16.837 10.979 16.85 C 11.177 16.912 11.38 16.92 11.584 16.903 C 11.643 16.898 11.702 16.883 11.759 16.866 C 11.795 16.855 11.838 16.835 11.836 16.787 C 11.833 16.74 11.79 16.726 11.752 16.713 C 11.725 16.703 11.695 16.699 11.665 16.696 C 11.621 16.691 11.576 16.688 11.532 16.685 C 11.502 16.631 11.45 16.635 11.4 16.638 C 11.048 16.661 10.723 16.551 10.403 16.427 C 10.302 16.388 10.211 16.325 10.117 16.269 C 10.039 16.224 9.96 16.181 9.87 16.169 C 9.772 16.156 9.673 16.146 9.575 16.134 C 9.511 16.126 9.447 16.115 9.383 16.108 C 9.305 16.1 9.225 16.085 9.148 16.116 Z M 13.554 15.089 C 13.538 15.043 13.501 15.019 13.46 14.999 C 13.318 14.928 13.178 14.852 13.033 14.789 C 12.869 14.717 12.702 14.653 12.516 14.671 C 12.473 14.675 12.427 14.664 12.383 14.656 C 12.252 14.632 12.12 14.609 11.99 14.578 C 11.71 14.512 11.425 14.47 11.151 14.379 C 11.099 14.362 11.044 14.358 10.991 14.348 C 10.803 14.302 10.615 14.255 10.427 14.211 C 10.337 14.19 10.246 14.187 10.126 14.201 C 10.166 14.215 10.179 14.221 10.192 14.224 C 10.436 14.273 10.673 14.346 10.902 14.443 C 11.03 14.497 11.158 14.553 11.29 14.594 C 11.433 14.638 11.57 14.691 11.706 14.752 C 11.933 14.854 12.163 14.947 12.406 15.003 C 12.575 15.043 12.743 15.083 12.918 15.094 C 13.121 15.107 13.324 15.131 13.512 15.219 C 13.548 15.235 13.588 15.243 13.627 15.247 C 13.642 15.249 13.668 15.234 13.673 15.221 C 13.679 15.207 13.672 15.18 13.66 15.169 C 13.627 15.139 13.59 15.115 13.554 15.089 Z M 13.071 0.609 C 13.077 0.612 13.082 0.616 13.086 0.615 C 13.12 0.607 13.154 0.601 13.187 0.59 C 13.408 0.514 13.633 0.459 13.865 0.423 C 14.126 0.383 14.387 0.352 14.65 0.382 C 14.808 0.4 14.965 0.425 15.12 0.461 C 15.318 0.506 15.512 0.566 15.709 0.617 C 15.731 0.623 15.762 0.653 15.784 0.612 C 15.777 0.603 15.773 0.592 15.766 0.588 C 15.703 0.558 15.64 0.53 15.577 0.5 C 15.217 0.33 14.833 0.263 14.439 0.237 C 14.193 0.221 13.953 0.256 13.715 0.306 C 13.516 0.347 13.325 0.422 13.151 0.53 C 13.119 0.55 13.079 0.565 13.071 0.609 Z M 10.296 17.975 C 10.228 17.98 10.183 17.979 10.14 17.988 C 9.979 18.018 9.818 18.051 9.658 18.085 C 9.522 18.113 9.386 18.144 9.256 18.195 C 9.166 18.229 9.072 18.234 8.977 18.227 C 8.818 18.217 8.659 18.208 8.5 18.205 C 8.447 18.203 8.392 18.215 8.34 18.229 C 8.323 18.233 8.312 18.262 8.298 18.28 C 8.349 18.328 8.404 18.332 8.459 18.334 C 8.628 18.339 8.796 18.34 8.964 18.309 C 9.095 18.285 9.231 18.287 9.364 18.268 C 9.67 18.223 9.962 18.124 10.251 18.017 C 10.259 18.014 10.265 18.005 10.296 17.975 Z M 9.823 18.675 C 9.863 18.693 9.883 18.71 9.904 18.712 C 9.963 18.715 10.023 18.719 10.082 18.712 C 10.245 18.691 10.404 18.653 10.56 18.602 C 10.675 18.565 10.771 18.494 10.867 18.423 C 10.886 18.409 10.903 18.387 10.912 18.366 C 10.918 18.35 10.916 18.324 10.906 18.312 C 10.896 18.299 10.871 18.288 10.855 18.29 C 10.827 18.296 10.8 18.312 10.773 18.324 C 10.719 18.347 10.665 18.375 10.61 18.395 C 10.465 18.447 10.319 18.495 10.174 18.545 C 10.117 18.565 10.062 18.586 10.006 18.607 C 9.951 18.627 9.897 18.648 9.823 18.675 Z M 10.555 14.786 C 10.558 14.78 10.561 14.774 10.564 14.767 C 10.532 14.755 10.501 14.741 10.469 14.732 C 10.253 14.675 10.038 14.614 9.82 14.565 C 9.68 14.533 9.535 14.514 9.39 14.522 C 9.347 14.524 9.302 14.532 9.261 14.547 C 9.243 14.554 9.224 14.585 9.225 14.604 C 9.227 14.623 9.249 14.651 9.268 14.656 C 9.315 14.668 9.365 14.669 9.415 14.673 C 9.632 14.689 9.851 14.702 10.068 14.723 C 10.231 14.738 10.393 14.765 10.555 14.786 Z M 12.371 13.499 C 12.366 13.486 12.365 13.475 12.358 13.469 C 12.344 13.455 12.329 13.442 12.312 13.433 C 12.111 13.325 11.894 13.28 11.669 13.274 C 11.636 13.273 11.6 13.285 11.57 13.299 C 11.551 13.308 11.529 13.334 11.529 13.352 C 11.529 13.371 11.548 13.398 11.567 13.409 C 11.6 13.428 11.639 13.442 11.677 13.451 C 11.739 13.466 11.803 13.477 11.866 13.487 C 11.979 13.504 12.091 13.52 12.204 13.533 C 12.262 13.539 12.321 13.537 12.371 13.499 Z M 13.662 9.078 C 13.614 9.097 13.613 9.132 13.626 9.166 C 13.668 9.277 13.747 9.358 13.85 9.414 C 13.982 9.485 14.125 9.525 14.273 9.55 C 14.323 9.559 14.376 9.563 14.439 9.54 C 14.417 9.522 14.407 9.512 14.395 9.506 C 14.301 9.464 14.204 9.425 14.11 9.38 C 13.963 9.309 13.818 9.234 13.708 9.106 C 13.696 9.092 13.676 9.086 13.662 9.078 Z M 9.28 15.717 C 9.133 15.609 8.877 15.519 8.719 15.524 C 8.681 15.525 8.64 15.537 8.607 15.556 C 8.55 15.589 8.55 15.671 8.607 15.704 C 8.64 15.723 8.681 15.737 8.719 15.738 C 8.888 15.742 9.057 15.741 9.226 15.74 C 9.242 15.74 9.259 15.726 9.28 15.717 Z M 14.899 11.733 C 14.873 11.655 14.854 11.601 14.838 11.547 C 14.797 11.409 14.785 11.277 14.903 11.163 C 14.942 11.126 14.935 11.077 14.902 11.045 C 14.868 11.012 14.818 11.005 14.781 11.037 C 14.752 11.061 14.726 11.094 14.711 11.128 C 14.622 11.331 14.677 11.512 14.807 11.678 C 14.823 11.698 14.853 11.706 14.899 11.733 Z M 8.833 11.678 C 8.95 11.711 9.066 11.754 9.186 11.775 C 9.305 11.795 9.415 11.826 9.514 11.9 C 9.543 11.922 9.586 11.933 9.623 11.935 C 9.689 11.939 9.729 11.866 9.693 11.809 C 9.681 11.79 9.661 11.768 9.64 11.761 C 9.589 11.744 9.535 11.724 9.483 11.723 C 9.348 11.72 9.217 11.7 9.086 11.672 C 9.006 11.655 8.922 11.637 8.833 11.678 Z M 15.913 7.083 C 15.815 7.084 15.733 7.168 15.735 7.265 C 15.737 7.352 15.811 7.425 15.898 7.425 C 15.991 7.425 16.078 7.336 16.077 7.242 C 16.075 7.155 16 7.083 15.913 7.083 Z M 12.095 14.236 C 12.191 14.279 12.272 14.295 12.352 14.316 C 12.448 14.341 12.543 14.365 12.626 14.425 C 12.665 14.452 12.716 14.466 12.763 14.481 C 12.807 14.494 12.851 14.487 12.891 14.462 C 12.918 14.445 12.93 14.411 12.914 14.385 C 12.901 14.365 12.886 14.344 12.867 14.329 C 12.806 14.279 12.732 14.263 12.657 14.275 C 12.567 14.289 12.481 14.278 12.392 14.262 C 12.303 14.246 12.213 14.211 12.095 14.236 Z M 6.326 11.399 C 6.234 11.4 6.158 11.476 6.156 11.568 C 6.154 11.65 6.246 11.739 6.33 11.737 C 6.417 11.736 6.505 11.647 6.501 11.565 C 6.495 11.472 6.418 11.398 6.326 11.399 Z M 3.701 16.668 C 3.801 16.67 3.874 16.602 3.876 16.507 C 3.879 16.406 3.787 16.313 3.69 16.316 C 3.596 16.32 3.522 16.397 3.522 16.489 C 3.523 16.588 3.602 16.667 3.701 16.668 Z M 11.699 19.155 C 11.773 19.159 11.845 19.093 11.846 19.019 C 11.847 18.948 11.777 18.878 11.703 18.878 C 11.635 18.878 11.569 18.938 11.563 19.006 C 11.557 19.076 11.625 19.15 11.699 19.155 Z M 2.207 14.667 C 2.303 14.677 2.367 14.591 2.374 14.514 C 2.383 14.426 2.301 14.343 2.209 14.343 C 2.121 14.342 2.048 14.409 2.041 14.497 C 2.034 14.586 2.11 14.664 2.207 14.667 Z M 4.663 10.088 C 4.581 10.084 4.516 10.14 4.51 10.217 C 4.504 10.301 4.567 10.375 4.649 10.38 C 4.729 10.384 4.801 10.315 4.802 10.231 C 4.804 10.153 4.744 10.091 4.663 10.088 Z M 13.702 1.327 C 13.77 1.323 13.826 1.266 13.824 1.201 C 13.822 1.139 13.769 1.093 13.703 1.098 C 13.633 1.103 13.58 1.157 13.581 1.223 C 13.582 1.283 13.638 1.331 13.702 1.327 Z M 15.84 20.74 C 15.782 20.74 15.737 20.784 15.737 20.84 C 15.737 20.901 15.785 20.953 15.844 20.955 C 15.908 20.957 15.96 20.908 15.956 20.848 C 15.952 20.786 15.903 20.74 15.84 20.74 Z M 12.504 19.939 C 12.443 19.936 12.393 19.977 12.391 20.032 C 12.39 20.086 12.44 20.136 12.495 20.137 C 12.55 20.138 12.6 20.088 12.599 20.033 C 12.598 19.981 12.559 19.942 12.504 19.939 Z M 15.171 8.566 C 15.151 8.572 15.121 8.575 15.095 8.587 C 15.058 8.605 15.045 8.655 15.063 8.69 C 15.082 8.728 15.126 8.75 15.162 8.732 C 15.197 8.714 15.23 8.691 15.258 8.664 C 15.288 8.635 15.267 8.58 15.225 8.572 C 15.211 8.569 15.196 8.569 15.171 8.566 Z M 7.048 6.048 C 7.045 6.002 7.007 5.966 6.959 5.966 C 6.906 5.966 6.864 6.007 6.863 6.058 C 6.863 6.109 6.909 6.152 6.96 6.148 C 7.012 6.144 7.051 6.1 7.048 6.048 Z M 5.045 19.458 C 5.042 19.404 4.998 19.366 4.945 19.372 C 4.897 19.376 4.864 19.414 4.864 19.463 C 4.865 19.518 4.905 19.559 4.957 19.557 C 5.009 19.556 5.047 19.512 5.045 19.458 Z M 14.839 20.508 C 14.788 20.509 14.748 20.553 14.75 20.604 C 14.752 20.65 14.787 20.686 14.833 20.688 C 14.887 20.691 14.928 20.653 14.929 20.601 C 14.931 20.549 14.89 20.507 14.839 20.508 Z M 17.97 8.119 C 17.933 8.12 17.902 8.145 17.897 8.179 C 17.891 8.212 17.908 8.236 17.934 8.252 C 17.977 8.279 18.03 8.28 18.056 8.248 C 18.07 8.232 18.078 8.203 18.074 8.183 C 18.066 8.141 18.022 8.118 17.97 8.119 Z M 17.368 5.884 C 17.382 5.84 17.41 5.794 17.359 5.754 C 17.334 5.733 17.291 5.739 17.264 5.761 C 17.236 5.785 17.222 5.825 17.238 5.853 C 17.268 5.907 17.313 5.907 17.368 5.884 Z M 16.494 8.513 C 16.478 8.483 16.47 8.454 16.452 8.436 C 16.431 8.418 16.39 8.436 16.363 8.467 C 16.339 8.495 16.337 8.535 16.36 8.56 C 16.382 8.583 16.412 8.594 16.439 8.577 C 16.46 8.563 16.474 8.537 16.494 8.513 Z M 16.973 3.172 C 16.972 3.146 16.934 3.118 16.909 3.125 C 16.909 3.125 16.909 3.125 16.909 3.125 C 16.899 3.128 16.89 3.131 16.882 3.136 C 16.83 3.171 16.803 3.219 16.816 3.257 C 16.819 3.265 16.829 3.274 16.837 3.276 C 16.884 3.286 16.944 3.252 16.968 3.201 C 16.973 3.193 16.972 3.182 16.973 3.172 Z M 17.235 9.272 C 17.237 9.236 17.211 9.202 17.179 9.197 C 17.129 9.189 17.083 9.227 17.079 9.28 C 17.077 9.315 17.105 9.343 17.143 9.346 C 17.194 9.349 17.231 9.319 17.235 9.272 Z M 3.176 18.825 C 3.13 18.817 3.092 18.808 3.054 18.805 C 3.027 18.802 3.005 18.837 3.01 18.868 C 3.015 18.899 3.044 18.925 3.071 18.919 C 3.113 18.908 3.156 18.896 3.176 18.825 Z M 12.589 0.86 C 12.593 0.828 12.568 0.797 12.53 0.789 C 12.493 0.782 12.457 0.806 12.455 0.839 C 12.453 0.872 12.479 0.904 12.514 0.912 C 12.547 0.92 12.584 0.894 12.589 0.86 Z M 7.165 19.23 C 7.162 19.173 7.117 19.133 7.076 19.146 C 7.058 19.151 7.036 19.176 7.033 19.195 C 7.026 19.237 7.073 19.275 7.12 19.265 C 7.139 19.261 7.154 19.239 7.165 19.23 Z M 2.919 18.386 C 2.998 18.413 3.061 18.381 3.137 18.287 C 3.028 18.307 3.024 18.309 2.919 18.386 Z M 8.828 8.391 C 8.888 8.393 8.927 8.358 8.926 8.311 C 8.925 8.283 8.905 8.268 8.878 8.266 C 8.827 8.263 8.78 8.295 8.787 8.336 C 8.791 8.359 8.817 8.377 8.828 8.391 Z M 8.071 19.598 C 8.045 19.626 8.02 19.643 8.013 19.665 C 8.004 19.695 8.042 19.729 8.076 19.726 C 8.105 19.724 8.134 19.696 8.125 19.668 C 8.117 19.645 8.094 19.628 8.071 19.598 Z M 5.587 19.872 C 5.564 19.907 5.543 19.928 5.537 19.952 C 5.53 19.978 5.566 20.004 5.597 20.001 C 5.628 19.998 5.656 19.97 5.646 19.942 C 5.637 19.919 5.613 19.902 5.587 19.872 Z M 10.751 19.431 C 10.738 19.419 10.722 19.391 10.699 19.384 C 10.663 19.374 10.625 19.414 10.626 19.454 C 10.627 19.483 10.653 19.509 10.682 19.508 C 10.717 19.507 10.747 19.478 10.751 19.431 Z M 6.083 17.421 C 6.069 17.412 6.05 17.39 6.032 17.39 C 5.991 17.391 5.961 17.436 5.975 17.474 C 5.979 17.487 6.004 17.502 6.019 17.501 C 6.052 17.5 6.08 17.465 6.083 17.421 Z M 9.763 5.733 C 9.761 5.691 9.72 5.656 9.681 5.663 C 9.669 5.665 9.655 5.678 9.65 5.689 C 9.637 5.716 9.651 5.741 9.672 5.752 C 9.692 5.763 9.718 5.765 9.74 5.764 C 9.749 5.763 9.757 5.742 9.763 5.733 Z M 1.729 16.745 C 1.632 16.727 1.616 16.729 1.604 16.767 C 1.601 16.777 1.608 16.801 1.616 16.804 C 1.667 16.827 1.697 16.799 1.729 16.745 Z M 11.912 8.596 C 11.903 8.607 11.883 8.623 11.878 8.643 C 11.871 8.67 11.907 8.694 11.939 8.69 C 11.968 8.687 11.984 8.669 11.987 8.642 C 11.991 8.616 11.956 8.591 11.912 8.596 Z M 13.036 6.567 C 13.066 6.547 13.096 6.527 13.126 6.504 C 13.131 6.501 13.131 6.485 13.127 6.478 C 13.124 6.47 13.112 6.46 13.107 6.461 C 13.081 6.47 13.053 6.479 13.031 6.495 C 13.01 6.511 13.01 6.537 13.036 6.567 Z M 14.88 0.697 C 14.853 0.677 14.837 0.658 14.818 0.654 C 14.788 0.647 14.762 0.677 14.766 0.706 C 14.77 0.736 14.793 0.749 14.818 0.742 C 14.837 0.737 14.853 0.717 14.88 0.697 Z M 4.38 19.892 C 4.403 19.864 4.423 19.849 4.429 19.83 C 4.431 19.821 4.41 19.797 4.396 19.791 C 4.372 19.78 4.338 19.8 4.341 19.822 C 4.344 19.842 4.361 19.86 4.38 19.892 Z M 18.104 6.796 C 18.084 6.826 18.065 6.842 18.062 6.861 C 18.06 6.872 18.081 6.895 18.096 6.899 C 18.122 6.906 18.147 6.89 18.146 6.863 C 18.145 6.844 18.124 6.826 18.104 6.796 Z M 9.66 7.734 C 9.697 7.729 9.716 7.702 9.705 7.679 C 9.698 7.664 9.68 7.65 9.664 7.646 C 9.642 7.641 9.613 7.673 9.622 7.692 C 9.63 7.711 9.65 7.724 9.66 7.734 Z M 11.608 20.019 C 11.587 20.044 11.569 20.057 11.568 20.07 C 11.568 20.084 11.586 20.098 11.596 20.113 C 11.608 20.102 11.629 20.092 11.632 20.079 C 11.635 20.065 11.62 20.048 11.608 20.019 Z M 8.946 4.356 C 8.921 4.34 8.907 4.326 8.892 4.323 C 8.884 4.322 8.868 4.339 8.865 4.35 C 8.859 4.371 8.868 4.392 8.891 4.39 C 8.906 4.39 8.92 4.373 8.946 4.356 Z M 9.02 12.601 C 9.016 12.594 9.012 12.587 9.007 12.58 C 9.007 12.58 9.001 12.582 8.997 12.583 C 9.001 12.59 9.004 12.597 9.008 12.604 C 9.008 12.604 9.016 12.602 9.02 12.601 Z M 11.186 4.102 C 11.194 4.099 11.201 4.096 11.209 4.092 C 11.205 4.087 11.201 4.077 11.196 4.076 C 11.19 4.075 11.182 4.081 11.174 4.084 C 11.178 4.09 11.182 4.096 11.186 4.102 Z M 4.489 9.559 L 4.484 9.567 L 4.493 9.567 L 4.489 9.559 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.416 19.686 C 2.275 19.643 2.133 19.604 2.006 19.527 C 1.978 19.499 1.952 19.469 1.921 19.444 C 1.811 19.352 1.701 19.259 1.588 19.171 C 1.398 19.022 1.251 18.834 1.111 18.642 C 0.953 18.427 0.815 18.197 0.683 17.965 C 0.552 17.735 0.449 17.495 0.367 17.246 C 0.271 16.954 0.178 16.662 0.084 16.37 C 0.067 16.297 0.049 16.223 0.031 16.15 C 0.022 16.111 0.013 16.073 0.004 16.035 C -0.016 15.503 0.041 14.979 0.177 14.465 C 0.266 14.126 0.392 13.798 0.52 13.471 C 0.528 13.451 0.548 13.436 0.563 13.419 C 0.563 13.447 0.563 13.476 0.563 13.504 C 0.564 13.579 0.592 13.633 0.67 13.653 C 0.695 13.66 0.721 13.668 0.746 13.675 C 0.743 13.709 0.744 13.744 0.737 13.777 C 0.707 13.921 0.679 14.066 0.643 14.209 C 0.629 14.264 0.638 14.327 0.597 14.379 C 0.563 14.372 0.535 14.365 0.506 14.361 C 0.376 14.346 0.251 14.43 0.225 14.548 C 0.205 14.639 0.272 14.733 0.365 14.734 C 0.402 14.735 0.44 14.718 0.478 14.709 C 0.485 14.703 0.494 14.699 0.502 14.696 C 0.534 14.698 0.563 14.706 0.564 14.744 C 0.571 14.939 0.569 15.135 0.527 15.334 C 0.491 15.3 0.462 15.266 0.426 15.242 C 0.329 15.179 0.192 15.242 0.176 15.357 C 0.168 15.42 0.164 15.486 0.208 15.541 C 0.314 15.692 0.397 15.698 0.52 15.565 C 0.523 15.561 0.527 15.559 0.531 15.555 C 0.534 15.688 0.534 15.822 0.542 15.955 C 0.55 16.086 0.58 16.216 0.559 16.349 C 0.513 16.343 0.474 16.334 0.435 16.335 C 0.361 16.336 0.304 16.384 0.286 16.457 C 0.269 16.521 0.295 16.573 0.344 16.614 C 0.398 16.66 0.461 16.665 0.523 16.628 C 0.554 16.61 0.582 16.586 0.617 16.56 C 0.642 16.648 0.66 16.725 0.686 16.799 C 0.746 16.966 0.809 17.132 0.872 17.298 C 0.886 17.335 0.908 17.369 0.894 17.411 C 0.862 17.391 0.83 17.368 0.796 17.35 C 0.731 17.316 0.654 17.33 0.611 17.389 C 0.592 17.415 0.579 17.45 0.576 17.483 C 0.572 17.518 0.595 17.547 0.627 17.566 C 0.632 17.568 0.636 17.571 0.638 17.576 C 0.677 17.627 0.729 17.628 0.783 17.612 C 0.84 17.595 0.871 17.552 0.882 17.496 C 0.888 17.467 0.89 17.438 0.893 17.41 C 0.908 17.425 0.925 17.439 0.939 17.456 C 0.956 17.478 0.969 17.502 0.984 17.525 L 0.987 17.53 C 0.992 17.543 0.998 17.555 1.003 17.568 C 1.132 17.891 1.294 18.197 1.484 18.488 C 1.513 18.534 1.535 18.583 1.561 18.631 C 1.578 18.651 1.595 18.671 1.611 18.691 L 1.609 18.688 C 1.62 18.718 1.623 18.757 1.671 18.75 L 1.67 18.748 C 1.659 18.78 1.669 18.801 1.702 18.809 L 1.701 18.806 C 1.7 18.878 1.755 18.92 1.791 18.969 C 1.961 19.198 2.151 19.41 2.36 19.604 C 2.385 19.627 2.416 19.646 2.416 19.686 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.157 12.11 C 1.238 11.997 1.317 11.883 1.398 11.77 C 1.577 11.52 1.757 11.271 1.937 11.022 C 1.96 10.99 1.983 10.956 2.011 10.929 C 2.16 10.781 2.274 10.606 2.405 10.444 C 2.666 10.12 2.902 9.775 3.201 9.481 C 3.322 9.363 3.445 9.248 3.565 9.129 C 3.628 9.066 3.688 9 3.746 8.933 C 4.023 8.614 4.299 8.296 4.575 7.976 C 4.691 7.841 4.804 7.702 4.919 7.565 C 4.964 7.512 5.008 7.459 5.057 7.409 C 5.072 7.393 5.098 7.387 5.118 7.376 C 4.936 7.747 4.712 8.091 4.46 8.419 C 4.311 8.612 4.138 8.783 3.953 8.941 C 3.9 8.987 3.848 9.033 3.799 9.082 C 3.477 9.406 3.154 9.729 2.834 10.055 C 2.761 10.13 2.696 10.212 2.632 10.294 C 2.413 10.577 2.204 10.867 2.016 11.171 C 1.899 11.361 1.794 11.558 1.688 11.754 C 1.629 11.863 1.577 11.976 1.522 12.087 L 1.51 12.094 L 1.511 12.107 C 1.506 12.113 1.5 12.119 1.494 12.124 C 1.487 12.124 1.481 12.125 1.474 12.126 C 1.47 12.142 1.465 12.157 1.461 12.173 L 1.463 12.17 C 1.438 12.199 1.409 12.226 1.389 12.259 C 1.314 12.379 1.241 12.502 1.168 12.623 C 1.161 12.616 1.153 12.608 1.146 12.6 C 1.153 12.583 1.165 12.565 1.166 12.547 C 1.17 12.479 1.136 12.451 1.067 12.464 C 1.054 12.466 1.041 12.476 1.028 12.483 C 1.016 12.472 1.004 12.462 0.992 12.451 C 1.047 12.337 1.102 12.224 1.157 12.11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.168 12.623 C 1.15 12.664 1.134 12.705 1.114 12.745 C 1.024 12.916 0.94 13.09 0.887 13.277 C 0.879 13.304 0.862 13.329 0.85 13.356 C 0.829 13.352 0.814 13.352 0.801 13.347 C 0.722 13.316 0.656 13.335 0.599 13.397 C 0.589 13.407 0.575 13.413 0.563 13.421 C 0.563 13.397 0.557 13.371 0.564 13.351 C 0.642 13.15 0.722 12.949 0.801 12.749 C 0.808 12.731 0.822 12.716 0.832 12.699 C 0.85 12.66 0.897 12.637 0.893 12.586 L 0.892 12.588 C 0.925 12.543 0.958 12.497 0.992 12.451 C 1.004 12.462 1.016 12.472 1.028 12.483 C 1.014 12.593 1.035 12.615 1.146 12.6 C 1.153 12.608 1.161 12.616 1.168 12.623 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.967 10.558 C 1.98 10.567 1.992 10.576 2.005 10.586 C 2 10.594 1.994 10.602 1.989 10.611 C 1.977 10.599 1.964 10.586 1.952 10.574 C 1.953 10.565 1.957 10.56 1.967 10.558 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.362 11.869 C 13.396 11.865 13.43 11.855 13.464 11.858 C 13.528 11.863 13.592 11.875 13.655 11.885 C 13.819 11.909 13.956 11.979 14.067 12.103 C 14.131 12.172 14.203 12.234 14.27 12.3 C 14.291 12.321 14.309 12.345 14.325 12.369 C 14.343 12.396 14.321 12.419 14.273 12.424 C 14.131 12.326 13.972 12.285 13.803 12.263 C 13.676 12.246 13.551 12.214 13.425 12.191 C 13.338 12.174 13.25 12.161 13.163 12.145 C 13.079 12.13 13.032 12.092 13.024 12.034 C 13.015 11.973 13.062 11.907 13.142 11.886 C 13.194 11.872 13.249 11.873 13.303 11.868 C 13.323 11.869 13.342 11.869 13.362 11.869 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.41 14.048 C 7.463 13.997 7.516 13.948 7.599 13.951 C 7.669 13.953 7.723 13.979 7.754 14.043 C 7.783 14.103 7.768 14.183 7.718 14.231 C 7.693 14.254 7.662 14.27 7.633 14.289 C 7.628 14.289 7.624 14.288 7.619 14.288 C 7.429 14.282 7.39 14.237 7.41 14.048 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.913 7.083 C 16 7.083 16.075 7.155 16.077 7.242 C 16.078 7.336 15.991 7.425 15.898 7.425 C 15.811 7.425 15.737 7.352 15.735 7.265 C 15.733 7.168 15.815 7.084 15.913 7.083 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.938 14.801 C 6.953 14.805 6.967 14.808 6.981 14.813 C 7.097 14.857 7.142 14.944 7.097 15.042 C 7.052 15.139 6.932 15.177 6.833 15.123 C 6.811 15.111 6.794 15.093 6.775 15.077 C 6.772 15.058 6.769 15.039 6.767 15.019 C 6.757 14.925 6.8 14.861 6.884 14.822 C 6.901 14.814 6.92 14.808 6.938 14.801 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.731 13.357 C 4.763 13.391 4.781 13.43 4.782 13.478 C 4.783 13.586 4.688 13.665 4.583 13.637 C 4.546 13.628 4.513 13.602 4.478 13.584 C 4.474 13.57 4.47 13.556 4.467 13.542 C 4.438 13.408 4.506 13.323 4.642 13.325 C 4.666 13.326 4.69 13.331 4.715 13.334 L 4.714 13.331 C 4.72 13.34 4.726 13.349 4.731 13.357 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.369 10.771 C 7.413 10.84 7.382 10.91 7.372 10.98 L 7.373 10.979 C 7.359 10.982 7.344 10.981 7.332 10.987 C 7.245 11.036 7.169 11.022 7.102 10.95 C 7.1 10.916 7.092 10.881 7.096 10.848 C 7.109 10.751 7.2 10.696 7.292 10.728 C 7.319 10.738 7.344 10.756 7.369 10.771 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.387 16.068 C 6.353 16.072 6.32 16.079 6.286 16.078 C 6.23 16.078 6.191 16.049 6.176 16.001 C 6.158 15.945 6.166 15.892 6.213 15.857 C 6.243 15.835 6.284 15.829 6.319 15.816 C 6.421 15.852 6.437 15.928 6.416 16.021 C 6.406 16.037 6.396 16.054 6.386 16.071 L 6.387 16.068 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.405 13.809 C 11.405 13.798 11.404 13.788 11.404 13.777 C 11.408 13.775 11.414 13.772 11.417 13.773 C 11.43 13.778 11.441 13.785 11.453 13.791 C 11.443 13.797 11.432 13.804 11.421 13.811 C 11.415 13.808 11.409 13.807 11.402 13.807 L 11.405 13.809 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 26.124 15.682 C 26.137 15.694 26.149 15.706 26.161 15.718 C 26.158 15.724 26.153 15.729 26.147 15.731 C 26.135 15.72 26.123 15.708 26.111 15.697 C 26.113 15.69 26.118 15.685 26.124 15.682 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 33.706 11.608 C 33.698 11.597 33.69 11.586 33.682 11.575 C 33.695 11.581 33.708 11.586 33.722 11.592 C 33.717 11.597 33.712 11.602 33.706 11.608 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 33.678 11.572 C 33.672 11.568 33.667 11.565 33.661 11.561 C 33.665 11.558 33.669 11.556 33.674 11.553 C 33.675 11.56 33.677 11.565 33.678 11.572 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.554 15.089 C 13.59 15.115 13.627 15.139 13.66 15.169 C 13.672 15.18 13.679 15.207 13.673 15.221 C 13.668 15.234 13.642 15.249 13.627 15.247 C 13.588 15.243 13.548 15.235 13.512 15.219 C 13.324 15.131 13.121 15.107 12.918 15.094 C 12.743 15.083 12.575 15.043 12.406 15.003 C 12.163 14.947 11.933 14.854 11.706 14.752 C 11.57 14.691 11.433 14.638 11.29 14.594 C 11.158 14.553 11.03 14.497 10.902 14.443 C 10.673 14.346 10.436 14.273 10.192 14.224 C 10.179 14.221 10.166 14.215 10.126 14.201 C 10.246 14.187 10.337 14.19 10.427 14.211 C 10.615 14.255 10.803 14.302 10.991 14.348 C 11.174 14.433 11.366 14.501 11.538 14.611 C 11.542 14.613 11.547 14.614 11.552 14.616 C 11.82 14.725 12.095 14.803 12.387 14.818 C 12.69 14.833 12.988 14.882 13.271 14.999 C 13.362 15.036 13.459 15.06 13.554 15.089 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.532 16.685 C 11.576 16.688 11.621 16.691 11.665 16.696 C 11.695 16.699 11.725 16.703 11.752 16.713 C 11.79 16.726 11.833 16.74 11.836 16.787 C 11.838 16.835 11.795 16.855 11.759 16.866 C 11.702 16.883 11.643 16.898 11.584 16.903 C 11.38 16.92 11.177 16.912 10.979 16.85 C 10.936 16.837 10.893 16.825 10.851 16.811 C 10.747 16.775 10.64 16.751 10.53 16.749 C 10.146 16.743 9.802 16.607 9.471 16.43 C 9.217 16.294 8.964 16.156 8.711 16.018 C 8.69 16.007 8.67 15.994 8.653 15.966 C 8.672 15.968 8.692 15.967 8.711 15.973 C 8.814 16.007 8.918 16.042 9.021 16.077 C 9.063 16.09 9.106 16.103 9.148 16.116 C 9.221 16.15 9.295 16.185 9.369 16.219 C 9.416 16.25 9.461 16.286 9.522 16.281 C 9.577 16.347 9.654 16.376 9.733 16.398 L 9.732 16.397 C 9.75 16.409 9.768 16.421 9.786 16.434 C 9.937 16.519 10.097 16.581 10.269 16.608 C 10.459 16.638 10.65 16.665 10.839 16.698 C 10.932 16.714 11.024 16.733 11.119 16.724 C 11.256 16.711 11.394 16.698 11.532 16.685 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.957 15.974 C 10.773 15.913 10.588 15.856 10.407 15.789 C 10.314 15.754 10.228 15.703 10.141 15.655 C 10.076 15.619 10.014 15.576 9.951 15.537 C 9.72 15.393 9.468 15.307 9.199 15.264 C 9.15 15.256 9.102 15.245 9.054 15.231 C 9.032 15.224 9.012 15.206 8.994 15.19 C 8.975 15.175 8.98 15.135 9.003 15.128 C 9.05 15.113 9.098 15.095 9.146 15.093 C 9.27 15.086 9.395 15.081 9.517 15.111 C 9.546 15.118 9.577 15.117 9.606 15.12 C 9.639 15.13 9.671 15.139 9.704 15.149 L 9.7 15.147 C 9.791 15.195 9.881 15.243 9.971 15.29 C 10.108 15.386 10.243 15.484 10.381 15.578 C 10.49 15.653 10.6 15.728 10.713 15.797 C 10.792 15.845 10.878 15.883 10.961 15.926 C 10.96 15.942 10.959 15.958 10.957 15.974 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.071 0.609 C 13.079 0.565 13.119 0.55 13.151 0.53 C 13.325 0.422 13.516 0.347 13.715 0.306 C 13.953 0.256 14.193 0.221 14.439 0.237 C 14.833 0.263 15.217 0.33 15.577 0.5 C 15.64 0.53 15.703 0.558 15.766 0.588 C 15.773 0.592 15.777 0.603 15.784 0.612 C 15.762 0.653 15.731 0.623 15.709 0.617 C 15.512 0.566 15.318 0.506 15.12 0.461 C 14.965 0.425 14.808 0.4 14.65 0.382 C 14.387 0.352 14.126 0.383 13.865 0.423 C 13.633 0.459 13.408 0.514 13.187 0.59 C 13.154 0.601 13.12 0.607 13.086 0.615 C 13.082 0.616 13.077 0.612 13.071 0.609 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.246 16.971 C 8.072 16.901 7.897 16.831 7.722 16.759 C 7.681 16.742 7.641 16.722 7.603 16.699 C 7.59 16.692 7.586 16.67 7.576 16.65 C 7.639 16.623 7.693 16.639 7.745 16.647 C 7.907 16.673 8.063 16.721 8.218 16.775 C 8.27 16.793 8.322 16.808 8.374 16.825 C 8.585 16.953 8.815 16.964 9.05 16.923 C 9.164 16.903 9.277 16.898 9.391 16.909 C 9.539 16.924 9.686 16.946 9.834 16.965 C 9.897 16.973 9.961 16.983 10.024 16.992 C 10.053 17.014 10.027 17.02 10.014 17.029 C 9.994 17.028 9.974 17.025 9.954 17.025 C 9.589 17.032 9.224 17.011 8.859 17.046 C 8.652 17.066 8.447 17.025 8.246 16.971 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.642 17.556 C 8.739 17.575 8.836 17.596 8.935 17.611 C 9.163 17.647 9.389 17.641 9.61 17.562 C 9.727 17.532 9.844 17.501 9.961 17.47 C 9.989 17.475 10.019 17.477 10.045 17.485 C 10.076 17.495 10.082 17.531 10.056 17.553 C 10.039 17.568 10.017 17.58 9.997 17.593 C 9.903 17.621 9.808 17.647 9.714 17.679 C 9.533 17.74 9.347 17.754 9.158 17.729 C 9.075 17.718 8.993 17.701 8.91 17.689 C 8.758 17.666 8.608 17.632 8.453 17.661 C 8.256 17.673 8.06 17.686 7.863 17.697 C 7.779 17.701 7.695 17.703 7.612 17.707 L 7.611 17.708 C 7.7 17.681 7.789 17.647 7.88 17.63 C 8.05 17.599 8.221 17.579 8.392 17.555 C 8.475 17.555 8.559 17.556 8.642 17.556 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.296 17.975 C 10.265 18.005 10.259 18.014 10.251 18.017 C 9.962 18.124 9.67 18.223 9.364 18.268 C 9.231 18.287 9.095 18.285 8.964 18.309 C 8.796 18.34 8.628 18.339 8.459 18.334 C 8.404 18.332 8.349 18.328 8.298 18.28 C 8.312 18.262 8.323 18.233 8.34 18.229 C 8.392 18.215 8.447 18.203 8.5 18.205 C 8.659 18.208 8.818 18.217 8.977 18.227 C 9.072 18.234 9.166 18.229 9.256 18.195 C 9.386 18.144 9.522 18.113 9.658 18.085 C 9.818 18.051 9.979 18.018 10.14 17.988 C 10.183 17.979 10.228 17.98 10.296 17.975 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.823 18.675 C 9.897 18.648 9.951 18.627 10.006 18.607 C 10.062 18.586 10.117 18.565 10.174 18.545 C 10.319 18.495 10.465 18.447 10.61 18.395 C 10.665 18.375 10.719 18.347 10.773 18.324 C 10.8 18.312 10.827 18.296 10.855 18.29 C 10.871 18.288 10.896 18.299 10.906 18.312 C 10.916 18.324 10.918 18.35 10.912 18.366 C 10.903 18.387 10.886 18.409 10.867 18.423 C 10.771 18.494 10.675 18.565 10.56 18.602 C 10.404 18.653 10.245 18.691 10.082 18.712 C 10.023 18.719 9.963 18.715 9.904 18.712 C 9.883 18.71 9.863 18.693 9.823 18.675 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.856 12.66 C 9.819 12.673 9.782 12.692 9.744 12.697 C 9.658 12.708 9.571 12.643 9.556 12.564 C 9.541 12.487 9.586 12.405 9.667 12.377 C 9.703 12.364 9.744 12.364 9.783 12.358 C 9.795 12.367 9.808 12.374 9.82 12.383 C 9.918 12.458 9.932 12.513 9.88 12.622 C 9.873 12.636 9.864 12.647 9.856 12.66 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.262 18.935 C 4.274 18.909 4.282 18.879 4.3 18.857 C 4.373 18.766 4.496 18.774 4.557 18.872 C 4.572 18.896 4.577 18.926 4.587 18.953 C 4.575 18.98 4.567 19.01 4.551 19.033 C 4.479 19.134 4.347 19.126 4.286 19.018 C 4.272 18.994 4.27 18.963 4.262 18.935 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.653 11.73 C 10.657 11.705 10.655 11.679 10.664 11.657 C 10.697 11.567 10.781 11.526 10.861 11.559 C 10.951 11.595 10.982 11.687 10.933 11.776 C 10.922 11.797 10.903 11.815 10.887 11.833 C 10.781 11.863 10.701 11.831 10.653 11.73 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.758 11.407 C 3.76 11.441 3.768 11.474 3.765 11.508 C 3.76 11.571 3.717 11.619 3.658 11.632 C 3.596 11.645 3.539 11.636 3.5 11.582 C 3.481 11.554 3.471 11.521 3.458 11.49 C 3.531 11.316 3.601 11.296 3.758 11.407 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.175 14.543 C 4.181 14.561 4.19 14.579 4.193 14.598 C 4.209 14.712 4.128 14.796 4.015 14.783 C 3.992 14.78 3.969 14.768 3.947 14.76 C 3.934 14.733 3.917 14.707 3.911 14.679 C 3.897 14.615 3.916 14.561 3.97 14.522 C 4.019 14.487 4.071 14.482 4.124 14.512 C 4.142 14.522 4.158 14.533 4.175 14.543 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.699 19.155 C 11.625 19.15 11.557 19.076 11.563 19.006 C 11.569 18.938 11.635 18.878 11.703 18.878 C 11.777 18.878 11.847 18.948 11.846 19.019 C 11.845 19.093 11.773 19.159 11.699 19.155 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.293 10.784 C 4.291 10.813 4.295 10.844 4.287 10.872 C 4.269 10.934 4.216 10.975 4.157 10.976 C 4.097 10.978 4.052 10.947 4.027 10.895 C 4.014 10.869 4.011 10.838 4.004 10.809 C 4.012 10.797 4.02 10.785 4.029 10.774 C 4.097 10.688 4.169 10.678 4.252 10.743 C 4.267 10.755 4.279 10.77 4.293 10.784 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.393 7.061 C 8.416 7 8.448 6.949 8.513 6.926 C 8.564 6.933 8.609 6.95 8.634 6.999 C 8.657 7.041 8.659 7.084 8.644 7.128 C 8.615 7.214 8.517 7.242 8.454 7.176 C 8.425 7.146 8.413 7.1 8.393 7.061 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.702 1.327 C 13.638 1.331 13.582 1.283 13.581 1.223 C 13.58 1.157 13.633 1.103 13.703 1.098 C 13.769 1.093 13.822 1.139 13.824 1.201 C 13.826 1.266 13.77 1.323 13.702 1.327 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.861 12.528 C 2.867 12.499 2.868 12.467 2.882 12.442 C 2.926 12.361 3.011 12.352 3.078 12.419 C 3.091 12.433 3.099 12.452 3.109 12.469 C 3.105 12.488 3.104 12.508 3.096 12.525 C 3.045 12.62 2.969 12.633 2.887 12.562 C 2.876 12.552 2.869 12.539 2.861 12.528 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.84 20.74 C 15.903 20.74 15.952 20.786 15.956 20.848 C 15.96 20.908 15.908 20.957 15.844 20.955 C 15.785 20.953 15.737 20.901 15.737 20.84 C 15.737 20.784 15.782 20.74 15.84 20.74 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.725 15.776 C 3.706 15.76 3.684 15.747 3.669 15.728 C 3.626 15.673 3.635 15.607 3.686 15.574 C 3.742 15.537 3.812 15.558 3.844 15.625 C 3.853 15.642 3.853 15.663 3.857 15.682 C 3.831 15.738 3.789 15.773 3.725 15.776 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.504 19.939 C 12.559 19.942 12.598 19.981 12.599 20.033 C 12.6 20.088 12.55 20.138 12.495 20.137 C 12.44 20.136 12.39 20.086 12.391 20.032 C 12.393 19.977 12.443 19.936 12.504 19.939 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.578 13.385 C 8.578 13.376 8.577 13.366 8.578 13.356 C 8.586 13.221 8.643 13.193 8.76 13.265 C 8.764 13.268 8.768 13.27 8.772 13.273 C 8.772 13.292 8.777 13.313 8.773 13.331 C 8.756 13.401 8.713 13.428 8.645 13.411 C 8.622 13.405 8.601 13.394 8.578 13.385 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.171 8.566 C 15.196 8.569 15.211 8.569 15.225 8.572 C 15.267 8.58 15.288 8.635 15.258 8.664 C 15.23 8.691 15.197 8.714 15.162 8.732 C 15.126 8.75 15.082 8.728 15.063 8.69 C 15.045 8.655 15.058 8.605 15.095 8.587 C 15.121 8.575 15.151 8.572 15.171 8.566 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.422 12.643 C 5.408 12.63 5.391 12.62 5.379 12.605 C 5.343 12.56 5.341 12.524 5.37 12.488 C 5.403 12.445 5.445 12.436 5.498 12.464 C 5.514 12.473 5.528 12.488 5.542 12.501 C 5.536 12.607 5.53 12.614 5.422 12.643 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.048 6.048 C 7.051 6.1 7.012 6.144 6.96 6.148 C 6.909 6.152 6.863 6.109 6.863 6.058 C 6.864 6.007 6.906 5.966 6.959 5.966 C 7.007 5.966 7.045 6.002 7.048 6.048 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.02 18.213 C 4.029 18.196 4.035 18.175 4.047 18.161 C 4.083 18.121 4.126 18.111 4.166 18.13 C 4.207 18.15 4.221 18.185 4.217 18.229 C 4.215 18.249 4.209 18.268 4.205 18.287 C 4.201 18.289 4.196 18.291 4.192 18.293 C 4.081 18.338 4.063 18.33 4.02 18.213 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.761 17.403 C 3.76 17.379 3.755 17.354 3.759 17.331 C 3.768 17.277 3.81 17.238 3.855 17.243 C 3.902 17.248 3.936 17.273 3.943 17.323 C 3.945 17.337 3.947 17.352 3.949 17.366 C 3.867 17.454 3.863 17.454 3.761 17.403 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.976 16.749 C 5.974 16.744 5.972 16.74 5.971 16.735 C 5.951 16.65 5.962 16.606 6.014 16.586 C 6.036 16.577 6.063 16.576 6.086 16.58 C 6.129 16.589 6.147 16.625 6.159 16.663 C 6.11 16.769 6.105 16.771 5.976 16.749 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.045 19.458 C 5.047 19.512 5.009 19.556 4.957 19.557 C 4.905 19.559 4.865 19.518 4.864 19.463 C 4.864 19.414 4.897 19.376 4.945 19.372 C 4.998 19.366 5.042 19.404 5.045 19.458 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.839 20.508 C 14.89 20.507 14.931 20.549 14.929 20.601 C 14.928 20.653 14.887 20.691 14.833 20.688 C 14.787 20.686 14.752 20.65 14.75 20.604 C 14.748 20.553 14.788 20.509 14.839 20.508 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.008 8.893 C 5.017 8.871 5.021 8.845 5.034 8.826 C 5.065 8.782 5.106 8.767 5.146 8.783 C 5.198 8.805 5.197 8.848 5.186 8.893 C 5.162 8.923 5.137 8.952 5.114 8.981 C 5.05 8.982 5.027 8.941 5.008 8.893 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.483 13.473 C 2.48 13.444 2.474 13.414 2.474 13.385 C 2.476 13.311 2.543 13.272 2.609 13.307 C 2.629 13.318 2.642 13.343 2.658 13.361 C 2.647 13.436 2.603 13.472 2.526 13.469 C 2.512 13.468 2.498 13.471 2.483 13.473 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.97 8.119 C 18.022 8.118 18.066 8.141 18.074 8.183 C 18.078 8.203 18.07 8.232 18.056 8.248 C 18.03 8.28 17.977 8.279 17.934 8.252 C 17.908 8.236 17.891 8.212 17.897 8.179 C 17.902 8.145 17.933 8.12 17.97 8.119 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.505 18.629 C 6.528 18.658 6.55 18.688 6.573 18.717 C 6.57 18.732 6.566 18.746 6.564 18.761 C 6.554 18.835 6.48 18.828 6.443 18.789 C 6.418 18.761 6.41 18.73 6.418 18.694 C 6.428 18.648 6.465 18.636 6.505 18.629 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.459 10.107 C 10.498 10.116 10.535 10.128 10.542 10.175 C 10.549 10.219 10.527 10.25 10.492 10.272 C 10.472 10.284 10.448 10.29 10.426 10.298 C 10.392 10.277 10.362 10.251 10.367 10.207 C 10.374 10.154 10.41 10.124 10.459 10.107 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.368 5.884 C 17.313 5.907 17.268 5.907 17.238 5.853 C 17.222 5.825 17.236 5.785 17.264 5.761 C 17.291 5.739 17.334 5.733 17.359 5.754 C 17.41 5.794 17.382 5.84 17.368 5.884 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.409 8.334 C 6.398 8.349 6.387 8.364 6.372 8.384 C 6.291 8.371 6.275 8.311 6.273 8.241 C 6.282 8.221 6.291 8.201 6.3 8.181 L 6.298 8.183 C 6.416 8.178 6.427 8.188 6.417 8.293 C 6.416 8.307 6.412 8.32 6.409 8.334 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.832 21.59 C 16.748 21.6 16.747 21.6 16.717 21.514 C 16.729 21.493 16.737 21.467 16.754 21.454 C 16.771 21.441 16.799 21.432 16.819 21.436 C 16.848 21.441 16.871 21.468 16.867 21.499 C 16.862 21.53 16.844 21.56 16.832 21.59 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.932 15.882 C 1.944 15.856 1.951 15.825 1.969 15.804 C 1.983 15.789 2.015 15.778 2.032 15.784 C 2.051 15.791 2.072 15.82 2.073 15.839 C 2.074 15.872 2.059 15.905 2.051 15.938 C 1.967 15.964 1.966 15.964 1.932 15.882 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.494 8.513 C 16.474 8.537 16.46 8.563 16.439 8.577 C 16.412 8.594 16.382 8.583 16.36 8.56 C 16.337 8.535 16.339 8.495 16.363 8.467 C 16.39 8.436 16.431 8.418 16.452 8.436 C 16.47 8.454 16.478 8.483 16.494 8.513 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.235 9.272 C 17.231 9.319 17.194 9.349 17.143 9.346 C 17.105 9.343 17.077 9.315 17.079 9.28 C 17.083 9.227 17.129 9.189 17.179 9.197 C 17.211 9.202 17.237 9.236 17.235 9.272 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.589 0.86 C 12.584 0.894 12.547 0.92 12.514 0.912 C 12.479 0.904 12.453 0.872 12.455 0.839 C 12.457 0.806 12.493 0.782 12.53 0.789 C 12.568 0.797 12.593 0.828 12.589 0.86 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.165 19.23 C 7.154 19.239 7.139 19.261 7.12 19.265 C 7.073 19.275 7.026 19.237 7.033 19.195 C 7.036 19.176 7.058 19.151 7.076 19.146 C 7.117 19.133 7.162 19.173 7.165 19.23 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.828 8.391 C 8.817 8.377 8.791 8.359 8.787 8.336 C 8.78 8.295 8.827 8.263 8.878 8.266 C 8.905 8.268 8.925 8.283 8.926 8.311 C 8.927 8.358 8.888 8.393 8.828 8.391 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.071 19.598 C 8.094 19.628 8.117 19.645 8.125 19.668 C 8.134 19.696 8.105 19.724 8.076 19.726 C 8.042 19.729 8.004 19.695 8.013 19.665 C 8.02 19.643 8.045 19.626 8.071 19.598 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.587 19.872 C 5.613 19.902 5.637 19.919 5.646 19.942 C 5.656 19.97 5.628 19.998 5.597 20.001 C 5.566 20.004 5.53 19.978 5.537 19.952 C 5.543 19.928 5.564 19.907 5.587 19.872 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.751 19.431 C 10.747 19.478 10.717 19.507 10.682 19.508 C 10.653 19.509 10.627 19.483 10.626 19.454 C 10.625 19.414 10.663 19.374 10.699 19.384 C 10.722 19.391 10.738 19.419 10.751 19.431 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.083 17.421 C 6.08 17.465 6.052 17.5 6.019 17.501 C 6.004 17.502 5.979 17.487 5.975 17.474 C 5.961 17.436 5.991 17.391 6.032 17.39 C 6.05 17.39 6.069 17.412 6.083 17.421 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.296 18.115 L 6.295 18.112 C 6.286 18.129 6.281 18.15 6.268 18.162 C 6.256 18.174 6.234 18.185 6.221 18.181 C 6.207 18.177 6.193 18.155 6.19 18.14 C 6.186 18.113 6.205 18.091 6.23 18.091 C 6.252 18.091 6.274 18.106 6.296 18.115 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.912 8.596 C 11.956 8.591 11.991 8.616 11.987 8.642 C 11.984 8.669 11.968 8.687 11.939 8.69 C 11.907 8.694 11.871 8.67 11.878 8.643 C 11.883 8.623 11.903 8.607 11.912 8.596 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.036 6.567 C 13.01 6.537 13.01 6.511 13.031 6.495 C 13.053 6.479 13.081 6.47 13.107 6.461 C 13.112 6.46 13.124 6.47 13.127 6.478 C 13.131 6.485 13.131 6.501 13.126 6.504 C 13.096 6.527 13.066 6.547 13.036 6.567 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.104 6.796 C 18.124 6.826 18.145 6.844 18.146 6.863 C 18.147 6.89 18.122 6.906 18.096 6.899 C 18.081 6.895 18.06 6.872 18.062 6.861 C 18.065 6.842 18.084 6.826 18.104 6.796 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.612 17.707 L 7.609 17.71 L 7.611 17.708 L 7.612 17.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.84 1.599 C 8.783 1.597 8.739 1.55 8.739 1.492 C 8.74 1.434 8.784 1.391 8.845 1.391 C 8.906 1.391 8.953 1.433 8.955 1.488 C 8.956 1.549 8.902 1.601 8.84 1.599 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.629 2.644 C 8.627 2.696 8.583 2.735 8.531 2.731 C 8.479 2.728 8.44 2.682 8.446 2.632 C 8.451 2.586 8.488 2.554 8.536 2.553 C 8.591 2.553 8.63 2.591 8.629 2.644 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.984 17.576 C 12.934 17.577 12.893 17.534 12.893 17.481 C 12.894 17.429 12.936 17.387 12.987 17.388 C 13.036 17.389 13.078 17.433 13.078 17.483 C 13.078 17.533 13.035 17.575 12.984 17.576 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.789 17.756 C 11.791 17.703 11.834 17.668 11.89 17.674 C 11.938 17.679 11.971 17.715 11.972 17.761 C 11.972 17.812 11.929 17.855 11.877 17.853 C 11.825 17.851 11.786 17.809 11.789 17.756 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.603 17.478 C 13.567 17.474 13.538 17.443 13.538 17.409 C 13.537 17.37 13.574 17.334 13.614 17.336 C 13.653 17.337 13.683 17.378 13.676 17.42 C 13.671 17.457 13.64 17.482 13.603 17.478 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.227 17.074 C 14.27 17.075 14.294 17.104 14.29 17.132 C 14.286 17.161 14.258 17.186 14.231 17.185 C 14.204 17.184 14.173 17.15 14.184 17.126 C 14.193 17.103 14.216 17.086 14.227 17.074 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.208 15.541 C 0.212 15.512 0.212 15.481 0.221 15.455 C 0.249 15.378 0.303 15.344 0.378 15.346 C 0.451 15.349 0.505 15.391 0.526 15.468 C 0.534 15.495 0.529 15.526 0.531 15.555 C 0.527 15.559 0.523 15.561 0.52 15.565 C 0.397 15.698 0.314 15.692 0.208 15.541 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.67 13.653 C 0.659 13.631 0.644 13.61 0.638 13.587 C 0.623 13.531 0.651 13.475 0.702 13.453 C 0.754 13.431 0.817 13.448 0.846 13.494 C 0.877 13.54 0.871 13.603 0.826 13.64 C 0.805 13.658 0.773 13.664 0.746 13.675 C 0.721 13.668 0.695 13.66 0.67 13.653 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.478 14.709 C 0.449 14.706 0.418 14.708 0.391 14.698 C 0.336 14.678 0.312 14.623 0.329 14.567 C 0.344 14.514 0.397 14.483 0.455 14.491 C 0.512 14.498 0.552 14.546 0.543 14.605 C 0.538 14.637 0.516 14.666 0.502 14.696 C 0.494 14.699 0.485 14.703 0.478 14.709 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.627 17.566 C 0.62 17.537 0.614 17.505 0.641 17.484 C 0.654 17.474 0.681 17.468 0.693 17.475 C 0.705 17.481 0.715 17.507 0.713 17.523 C 0.708 17.564 0.677 17.577 0.638 17.576 C 0.636 17.571 0.632 17.568 0.627 17.566 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.989 19.033 C 16.953 19.019 16.916 19.005 16.879 18.991 C 16.872 18.968 16.86 18.945 16.858 18.922 C 16.85 18.855 16.883 18.803 16.941 18.785 C 16.998 18.767 17.059 18.793 17.091 18.847 C 17.118 18.894 17.111 18.952 17.066 18.993 C 17.046 19.012 17.015 19.02 16.989 19.033 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.693 18.363 C 15.648 18.369 15.618 18.346 15.615 18.316 C 15.612 18.28 15.641 18.247 15.677 18.247 C 15.707 18.247 15.738 18.274 15.73 18.304 C 15.724 18.328 15.703 18.349 15.693 18.363 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.146 12.6 C 1.035 12.615 1.014 12.593 1.028 12.483 C 1.041 12.476 1.054 12.466 1.067 12.464 C 1.136 12.451 1.17 12.479 1.166 12.547 C 1.165 12.565 1.153 12.583 1.146 12.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.474 16.518 C 0.449 16.533 0.434 16.55 0.421 16.548 C 0.407 16.546 0.397 16.527 0.385 16.515 C 0.397 16.503 0.409 16.483 0.422 16.482 C 0.435 16.481 0.449 16.499 0.474 16.518 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.35 11.686 C 6.338 11.655 6.327 11.639 6.327 11.623 C 6.328 11.588 6.358 11.565 6.385 11.578 C 6.399 11.584 6.419 11.613 6.415 11.618 C 6.402 11.64 6.38 11.657 6.35 11.686 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.779 16.496 C 3.783 16.539 3.747 16.583 3.701 16.589 C 3.675 16.592 3.646 16.567 3.641 16.536 C 3.633 16.483 3.66 16.441 3.705 16.436 C 3.737 16.433 3.775 16.464 3.779 16.496 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.183 14.648 C 2.174 14.642 2.158 14.637 2.15 14.626 C 2.108 14.574 2.133 14.489 2.195 14.467 C 2.231 14.455 2.278 14.486 2.284 14.524 C 2.291 14.571 2.259 14.627 2.216 14.644 C 2.207 14.648 2.197 14.646 2.183 14.648 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.682 10.257 C 4.681 10.298 4.649 10.328 4.625 10.316 C 4.607 10.307 4.59 10.286 4.585 10.266 C 4.579 10.24 4.617 10.208 4.641 10.219 C 4.659 10.227 4.672 10.248 4.682 10.257 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.677 10.89 C 11.679 10.881 11.681 10.871 11.684 10.862 C 11.691 10.835 11.708 10.82 11.736 10.829 C 11.745 10.832 11.757 10.85 11.756 10.86 C 11.753 10.89 11.73 10.895 11.704 10.891 C 11.694 10.889 11.685 10.889 11.675 10.888 L 11.677 10.89 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.28 15.717 C 9.133 15.609 8.877 15.519 8.719 15.524 C 8.681 15.525 8.64 15.537 8.607 15.556 C 8.55 15.589 8.55 15.671 8.607 15.704 C 8.64 15.723 8.681 15.737 8.719 15.738 C 8.888 15.742 9.057 15.741 9.226 15.74 C 9.242 15.74 9.259 15.726 9.28 15.717 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.555 14.786 L 10.564 14.767 C 10.532 14.755 10.501 14.741 10.469 14.732 C 10.253 14.675 10.038 14.614 9.82 14.565 C 9.68 14.533 9.535 14.514 9.39 14.522 C 9.347 14.524 9.302 14.532 9.261 14.547 C 9.243 14.554 9.224 14.585 9.225 14.604 C 9.227 14.623 9.249 14.651 9.268 14.656 C 9.315 14.668 9.365 14.669 9.415 14.673 C 9.632 14.689 9.851 14.702 10.068 14.723 C 10.231 14.738 10.393 14.765 10.555 14.786 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.371 13.499 C 12.366 13.486 12.365 13.475 12.358 13.469 C 12.344 13.455 12.329 13.442 12.312 13.433 C 12.111 13.325 11.894 13.28 11.669 13.274 C 11.636 13.273 11.6 13.285 11.57 13.299 C 11.551 13.308 11.529 13.334 11.529 13.352 C 11.529 13.371 11.548 13.398 11.567 13.409 C 11.6 13.428 11.639 13.442 11.677 13.451 C 11.739 13.466 11.803 13.477 11.866 13.487 C 11.979 13.504 12.091 13.52 12.204 13.533 C 12.262 13.539 12.321 13.537 12.371 13.499 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.899 11.733 C 14.873 11.655 14.854 11.601 14.838 11.547 C 14.797 11.409 14.785 11.277 14.903 11.163 C 14.942 11.126 14.935 11.077 14.902 11.045 C 14.868 11.012 14.818 11.005 14.781 11.037 C 14.752 11.061 14.726 11.094 14.711 11.128 C 14.622 11.331 14.677 11.512 14.807 11.678 C 14.823 11.698 14.853 11.706 14.899 11.733 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.456 10.086 C 14.522 10.071 14.589 10.057 14.654 10.041 C 14.829 9.998 15.005 9.985 15.184 10.021 C 15.311 10.046 15.44 10.055 15.569 10.032 C 15.642 10.018 15.717 10.012 15.789 9.997 C 15.964 9.959 16.138 9.919 16.311 9.876 C 16.367 9.863 16.425 9.842 16.441 9.765 C 16.414 9.752 16.388 9.73 16.363 9.731 C 16.309 9.733 16.254 9.741 16.204 9.759 C 15.991 9.839 15.772 9.869 15.546 9.849 C 15.492 9.844 15.437 9.842 15.383 9.84 C 15.348 9.839 15.313 9.837 15.279 9.841 C 15.016 9.872 14.764 9.942 14.518 10.035 C 14.494 10.044 14.476 10.068 14.456 10.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.301 16.031 C 11.248 16.017 11.195 16.005 11.143 15.989 C 11.082 15.97 11.022 15.948 10.961 15.926 L 10.957 15.974 C 11.109 16.032 11.26 16.09 11.412 16.147 C 11.485 16.175 11.561 16.193 11.64 16.189 C 11.527 16.136 11.414 16.083 11.301 16.031 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.732 16.397 L 9.734 16.396 C 9.737 16.369 9.723 16.351 9.7 16.339 L 9.697 16.337 C 9.642 16.308 9.587 16.279 9.522 16.28 L 9.523 16.281 L 9.522 16.281 C 9.577 16.347 9.654 16.376 9.733 16.398 L 9.732 16.397 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.522 16.281 L 9.521 16.28 L 9.522 16.28 C 9.481 16.235 9.428 16.219 9.369 16.219 C 9.416 16.25 9.461 16.286 9.522 16.281 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.186 4.102 C 11.194 4.099 11.201 4.096 11.209 4.092 C 11.205 4.087 11.201 4.077 11.196 4.076 C 11.19 4.075 11.182 4.081 11.174 4.084 C 11.178 4.09 11.182 4.096 11.186 4.102 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.88 0.697 C 14.853 0.677 14.837 0.658 14.818 0.654 C 14.788 0.647 14.762 0.677 14.766 0.706 C 14.77 0.736 14.793 0.749 14.818 0.742 C 14.837 0.737 14.853 0.717 14.88 0.697 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.621 1.175 L 16.613 1.166 C 16.613 1.165 16.613 1.165 16.612 1.164 C 16.593 1.163 16.573 1.158 16.555 1.161 C 16.528 1.167 16.511 1.188 16.518 1.215 C 16.522 1.231 16.538 1.249 16.553 1.257 C 16.579 1.269 16.603 1.255 16.614 1.231 C 16.621 1.215 16.619 1.194 16.621 1.175 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.973 3.172 C 16.972 3.146 16.934 3.118 16.909 3.125 L 16.909 3.125 C 16.899 3.128 16.89 3.131 16.882 3.136 C 16.83 3.171 16.803 3.219 16.816 3.257 C 16.819 3.265 16.829 3.274 16.837 3.276 C 16.884 3.286 16.944 3.252 16.968 3.201 C 16.973 3.193 16.972 3.182 16.973 3.172 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.979,
    height: 3.903,
    viewBox: "0 0 4.979 3.903",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.216,
      top: 7.369,
      width: 4.979,
      height: 3.903,
      color: "rgb(139,96,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.539 3.128 C 2.468 3.148 2.396 3.165 2.326 3.188 C 2.042 3.283 1.75 3.33 1.453 3.357 C 1.149 3.384 0.859 3.459 0.589 3.607 C 0.429 3.695 0.267 3.781 0.105 3.866 C 0.076 3.882 0.042 3.891 0.01 3.903 L 0 3.895 C 0.017 3.872 0.03 3.843 0.051 3.825 C 0.119 3.767 0.185 3.706 0.261 3.659 C 0.464 3.534 0.669 3.412 0.876 3.296 C 1.052 3.198 1.247 3.154 1.444 3.123 C 1.734 3.078 2.02 3.015 2.303 2.941 C 2.337 2.932 2.369 2.92 2.402 2.909 C 2.427 2.905 2.451 2.903 2.475 2.898 C 2.83 2.814 3.162 2.674 3.48 2.496 C 3.745 2.348 3.961 2.147 4.117 1.888 C 4.373 1.463 4.589 1.019 4.751 0.549 C 4.776 0.475 4.79 0.397 4.81 0.321 C 4.848 0.276 4.836 0.221 4.839 0.169 C 4.847 0.121 4.852 0.072 4.865 0.025 C 4.872 -0.005 4.918 -0.008 4.939 0.015 C 4.973 0.05 4.983 0.093 4.978 0.138 C 4.972 0.192 4.966 0.247 4.952 0.299 C 4.862 0.633 4.784 0.97 4.665 1.297 C 4.57 1.556 4.437 1.79 4.252 1.995 C 4.096 2.169 3.944 2.346 3.757 2.487 C 3.659 2.562 3.554 2.629 3.453 2.7 C 3.43 2.716 3.396 2.724 3.402 2.764 L 3.405 2.763 C 3.367 2.748 3.357 2.754 3.344 2.793 L 3.345 2.793 C 3.322 2.778 3.304 2.791 3.286 2.804 C 3.194 2.849 3.101 2.893 3.01 2.94 C 2.999 2.945 2.993 2.961 2.985 2.972 L 2.987 2.971 C 2.973 2.971 2.957 2.966 2.945 2.971 C 2.809 3.022 2.674 3.075 2.539 3.128 L 2.539 3.128 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.469,
    height: 7.626,
    viewBox: "0 0 16.469 7.626",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.643,
      top: 12.483,
      width: 16.469,
      height: 7.626,
      color: "rgb(233,213,176)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.207 0.103 C 0.207 0.16 0.161 0.207 0.104 0.207 C 0.046 0.207 0 0.16 0 0.103 C 0 0.046 0.046 0 0.104 0 C 0.161 0 0.207 0.046 0.207 0.103 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.602 0.176 C 0.602 0.227 0.555 0.269 0.498 0.269 C 0.441 0.269 0.394 0.227 0.394 0.176 C 0.394 0.124 0.441 0.083 0.498 0.083 C 0.555 0.083 0.602 0.124 0.602 0.176 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.68 1.157 C 1.68 1.306 1.569 1.426 1.431 1.426 C 1.294 1.426 1.182 1.306 1.182 1.157 C 1.182 1.009 1.294 0.889 1.431 0.889 C 1.569 0.889 1.68 1.009 1.68 1.157 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.825 1.705 C 1.825 1.779 1.76 1.839 1.68 1.839 C 1.6 1.839 1.535 1.779 1.535 1.705 C 1.535 1.631 1.6 1.571 1.68 1.571 C 1.76 1.571 1.825 1.631 1.825 1.705 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.572 3.214 C 2.572 3.299 2.498 3.369 2.406 3.369 C 2.314 3.369 2.24 3.299 2.24 3.214 C 2.24 3.128 2.314 3.059 2.406 3.059 C 2.498 3.059 2.572 3.128 2.572 3.214 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.402 4.082 C 3.402 4.167 3.332 4.237 3.246 4.237 C 3.16 4.237 3.09 4.167 3.09 4.082 C 3.09 3.996 3.16 3.927 3.246 3.927 C 3.332 3.927 3.402 3.996 3.402 4.082 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.501 4.857 C 4.501 4.937 4.431 5.002 4.345 5.002 C 4.259 5.002 4.19 4.937 4.19 4.857 C 4.19 4.777 4.259 4.712 4.345 4.712 C 4.431 4.712 4.501 4.777 4.501 4.857 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.791 5.146 C 4.791 5.226 4.726 5.291 4.646 5.291 C 4.566 5.291 4.501 5.226 4.501 5.146 C 4.501 5.066 4.566 5.002 4.646 5.002 C 4.726 5.002 4.791 5.066 4.791 5.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.617 5.963 C 6.617 6.105 6.496 6.221 6.347 6.221 C 6.198 6.221 6.077 6.105 6.077 5.963 C 6.077 5.82 6.198 5.704 6.347 5.704 C 6.496 5.704 6.617 5.82 6.617 5.963 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.301 6.221 C 7.301 6.369 7.18 6.49 7.031 6.49 C 6.882 6.49 6.762 6.369 6.762 6.221 C 6.762 6.073 6.882 5.952 7.031 5.952 C 7.18 5.952 7.301 6.073 7.301 6.221 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.437 6.955 C 9.437 7.097 9.321 7.213 9.178 7.213 C 9.035 7.213 8.919 7.097 8.919 6.955 C 8.919 6.812 9.035 6.696 9.178 6.696 C 9.321 6.696 9.437 6.812 9.437 6.955 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.429 6.975 C 11.429 7.095 11.331 7.192 11.211 7.192 C 11.09 7.192 10.993 7.095 10.993 6.975 C 10.993 6.856 11.09 6.758 11.211 6.758 C 11.331 6.758 11.429 6.856 11.429 6.975 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.562 6.469 C 9.562 6.537 9.506 6.593 9.437 6.593 C 9.369 6.593 9.313 6.537 9.313 6.469 C 9.313 6.401 9.369 6.345 9.437 6.345 C 9.506 6.345 9.562 6.401 9.562 6.469 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.956 6.49 C 9.956 6.558 9.9 6.614 9.831 6.614 C 9.763 6.614 9.707 6.558 9.707 6.49 C 9.707 6.421 9.763 6.366 9.831 6.366 C 9.9 6.366 9.956 6.421 9.956 6.49 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.839 6.614 C 12.839 6.705 12.765 6.779 12.673 6.779 C 12.581 6.779 12.507 6.705 12.507 6.614 C 12.507 6.522 12.581 6.448 12.673 6.448 C 12.765 6.448 12.839 6.522 12.839 6.614 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.395 6.262 C 14.395 6.342 14.334 6.407 14.26 6.407 C 14.185 6.407 14.125 6.342 14.125 6.262 C 14.125 6.182 14.185 6.118 14.26 6.118 C 14.334 6.118 14.395 6.182 14.395 6.262 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.851 6.087 C 14.851 6.161 14.79 6.221 14.716 6.221 C 14.642 6.221 14.581 6.161 14.581 6.087 C 14.581 6.012 14.642 5.952 14.716 5.952 C 14.79 5.952 14.851 6.012 14.851 6.087 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.178 5.487 C 16.178 5.561 16.118 5.622 16.043 5.622 C 15.969 5.622 15.909 5.561 15.909 5.487 C 15.909 5.413 15.969 5.353 16.043 5.353 C 16.118 5.353 16.178 5.413 16.178 5.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.224 0.878 C 1.224 0.93 1.182 0.971 1.13 0.971 C 1.079 0.971 1.037 0.93 1.037 0.878 C 1.037 0.827 1.079 0.785 1.13 0.785 C 1.182 0.785 1.224 0.827 1.224 0.878 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.431 1.612 C 1.431 1.669 1.385 1.715 1.327 1.715 C 1.27 1.715 1.224 1.669 1.224 1.612 C 1.224 1.555 1.27 1.509 1.327 1.509 C 1.385 1.509 1.431 1.555 1.431 1.612 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.514 1.912 C 1.514 1.963 1.468 2.005 1.41 2.005 C 1.353 2.005 1.307 1.963 1.307 1.912 C 1.307 1.86 1.353 1.819 1.41 1.819 C 1.468 1.819 1.514 1.86 1.514 1.912 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.763 2.697 C 1.763 2.749 1.721 2.79 1.67 2.79 C 1.618 2.79 1.576 2.749 1.576 2.697 C 1.576 2.646 1.618 2.604 1.67 2.604 C 1.721 2.604 1.763 2.646 1.763 2.697 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.344 3.555 C 2.344 3.612 2.293 3.658 2.23 3.658 C 2.167 3.658 2.116 3.612 2.116 3.555 C 2.116 3.498 2.167 3.452 2.23 3.452 C 2.293 3.452 2.344 3.498 2.344 3.555 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.107 5.064 C 4.107 5.121 4.06 5.167 4.003 5.167 C 3.946 5.167 3.899 5.121 3.899 5.064 C 3.899 5.007 3.946 4.96 4.003 4.96 C 4.06 4.96 4.107 5.007 4.107 5.064 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.517 5.312 C 5.517 5.414 5.434 5.498 5.331 5.498 C 5.227 5.498 5.144 5.414 5.144 5.312 C 5.144 5.209 5.227 5.126 5.331 5.126 C 5.434 5.126 5.517 5.209 5.517 5.312 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.894 6.81 C 9.894 6.884 9.833 6.944 9.759 6.944 C 9.684 6.944 9.624 6.884 9.624 6.81 C 9.624 6.736 9.684 6.676 9.759 6.676 C 9.833 6.676 9.894 6.736 9.894 6.81 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.943 6.996 C 12.943 7.059 12.892 7.11 12.829 7.11 C 12.766 7.11 12.714 7.059 12.714 6.996 C 12.714 6.933 12.766 6.882 12.829 6.882 C 12.892 6.882 12.943 6.933 12.943 6.996 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.291 6.583 C 14.291 6.634 14.249 6.676 14.197 6.676 C 14.146 6.676 14.104 6.634 14.104 6.583 C 14.104 6.531 14.146 6.49 14.197 6.49 C 14.249 6.49 14.291 6.531 14.291 6.583 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.83 6.397 C 14.83 6.425 14.802 6.448 14.768 6.448 C 14.734 6.448 14.706 6.425 14.706 6.397 C 14.706 6.368 14.734 6.345 14.768 6.345 C 14.802 6.345 14.83 6.368 14.83 6.397 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.519 6.593 C 14.519 6.627 14.491 6.655 14.457 6.655 C 14.422 6.655 14.395 6.627 14.395 6.593 C 14.395 6.559 14.422 6.531 14.457 6.531 C 14.491 6.531 14.519 6.559 14.519 6.593 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.046 6.779 C 13.046 6.813 13.018 6.841 12.984 6.841 C 12.95 6.841 12.922 6.813 12.922 6.779 C 12.922 6.745 12.95 6.717 12.984 6.717 C 13.018 6.717 13.046 6.745 13.046 6.779 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.577 5.787 C 15.577 5.81 15.558 5.828 15.535 5.828 C 15.512 5.828 15.494 5.81 15.494 5.787 C 15.494 5.764 15.512 5.746 15.535 5.746 C 15.558 5.746 15.577 5.764 15.577 5.787 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.344 5.508 C 16.344 5.536 16.321 5.56 16.292 5.56 C 16.264 5.56 16.241 5.536 16.241 5.508 C 16.241 5.479 16.264 5.456 16.292 5.456 C 16.321 5.456 16.344 5.479 16.344 5.508 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.945 4.123 C 2.945 4.186 2.894 4.237 2.831 4.237 C 2.768 4.237 2.717 4.186 2.717 4.123 C 2.717 4.06 2.768 4.01 2.831 4.01 C 2.894 4.01 2.945 4.06 2.945 4.123 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.816 4.34 C 3.816 4.397 3.77 4.444 3.713 4.444 C 3.655 4.444 3.609 4.397 3.609 4.34 C 3.609 4.283 3.655 4.237 3.713 4.237 C 3.77 4.237 3.816 4.283 3.816 4.34 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.036 5.518 C 6.036 5.621 5.952 5.704 5.849 5.704 C 5.746 5.704 5.662 5.621 5.662 5.518 C 5.662 5.416 5.746 5.332 5.849 5.332 C 5.952 5.332 6.036 5.416 6.036 5.518 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.658 6.51 C 6.658 6.613 6.579 6.696 6.482 6.696 C 6.384 6.696 6.305 6.613 6.305 6.51 C 6.305 6.408 6.384 6.324 6.482 6.324 C 6.579 6.324 6.658 6.408 6.658 6.51 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.376 5.167 C 4.376 5.224 4.33 5.27 4.273 5.27 C 4.215 5.27 4.169 5.224 4.169 5.167 C 4.169 5.11 4.215 5.064 4.273 5.064 C 4.33 5.064 4.376 5.11 4.376 5.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.405 6.769 C 7.405 6.866 7.321 6.944 7.218 6.944 C 7.115 6.944 7.031 6.866 7.031 6.769 C 7.031 6.672 7.115 6.593 7.218 6.593 C 7.321 6.593 7.405 6.672 7.405 6.769 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.541 7.451 C 9.541 7.548 9.457 7.626 9.354 7.626 C 9.251 7.626 9.168 7.548 9.168 7.451 C 9.168 7.354 9.251 7.275 9.354 7.275 C 9.457 7.275 9.541 7.354 9.541 7.451 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.757 6.087 C 7.757 6.184 7.678 6.262 7.581 6.262 C 7.484 6.262 7.405 6.184 7.405 6.087 C 7.405 5.99 7.484 5.911 7.581 5.911 C 7.678 5.911 7.757 5.99 7.757 6.087 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.67 6.2 C 8.67 6.246 8.628 6.283 8.577 6.283 C 8.525 6.283 8.483 6.246 8.483 6.2 C 8.483 6.155 8.525 6.118 8.577 6.118 C 8.628 6.118 8.67 6.155 8.67 6.2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.677 6.696 C 11.677 6.765 11.626 6.82 11.563 6.82 C 11.5 6.82 11.449 6.765 11.449 6.696 C 11.449 6.628 11.5 6.572 11.563 6.572 C 11.626 6.572 11.677 6.628 11.677 6.696 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.59 6.893 C 12.59 6.955 12.534 7.006 12.466 7.006 C 12.397 7.006 12.341 6.955 12.341 6.893 C 12.341 6.83 12.397 6.779 12.466 6.779 C 12.534 6.779 12.59 6.83 12.59 6.893 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.503 6.438 C 13.503 6.489 13.461 6.531 13.409 6.531 C 13.358 6.531 13.316 6.489 13.316 6.438 C 13.316 6.387 13.358 6.345 13.409 6.345 C 13.461 6.345 13.503 6.387 13.503 6.438 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.664 6.386 C 14.664 6.443 14.618 6.49 14.56 6.49 C 14.503 6.49 14.457 6.443 14.457 6.386 C 14.457 6.329 14.503 6.283 14.56 6.283 C 14.618 6.283 14.664 6.329 14.664 6.386 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.577 5.632 C 15.577 5.672 15.544 5.704 15.504 5.704 C 15.464 5.704 15.432 5.672 15.432 5.632 C 15.432 5.592 15.464 5.56 15.504 5.56 C 15.544 5.56 15.577 5.592 15.577 5.632 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.846 5.549 C 15.846 5.601 15.805 5.642 15.753 5.642 C 15.702 5.642 15.66 5.601 15.66 5.549 C 15.66 5.498 15.702 5.456 15.753 5.456 C 15.805 5.456 15.846 5.498 15.846 5.549 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.469 5.343 C 16.469 5.394 16.427 5.436 16.375 5.436 C 16.324 5.436 16.282 5.394 16.282 5.343 C 16.282 5.291 16.324 5.25 16.375 5.25 C 16.427 5.25 16.469 5.291 16.469 5.343 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.514 0.775 C 1.514 0.826 1.472 0.868 1.421 0.868 C 1.369 0.868 1.327 0.826 1.327 0.775 C 1.327 0.724 1.369 0.682 1.421 0.682 C 1.472 0.682 1.514 0.724 1.514 0.775 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.954 0.806 C 0.954 0.863 0.908 0.909 0.85 0.909 C 0.793 0.909 0.747 0.863 0.747 0.806 C 0.747 0.749 0.793 0.703 0.85 0.703 C 0.908 0.703 0.954 0.749 0.954 0.806 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.456 0.465 C 0.456 0.516 0.41 0.558 0.353 0.558 C 0.295 0.558 0.249 0.516 0.249 0.465 C 0.249 0.414 0.295 0.372 0.353 0.372 C 0.41 0.372 0.456 0.414 0.456 0.465 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.97 2.273 C 1.97 2.388 1.873 2.48 1.753 2.48 C 1.632 2.48 1.535 2.388 1.535 2.273 C 1.535 2.159 1.632 2.067 1.753 2.067 C 1.873 2.067 1.97 2.159 1.97 2.273 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.016 0.413 C 1.016 0.516 0.937 0.599 0.84 0.599 C 0.743 0.599 0.664 0.516 0.664 0.413 C 0.664 0.311 0.743 0.227 0.84 0.227 C 0.937 0.227 1.016 0.311 1.016 0.413 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.24 2.945 C 2.24 3.076 2.133 3.183 2.002 3.183 C 1.87 3.183 1.763 3.076 1.763 2.945 C 1.763 2.814 1.87 2.707 2.002 2.707 C 2.133 2.707 2.24 2.814 2.24 2.945 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.945 3.648 C 2.945 3.802 2.825 3.927 2.676 3.927 C 2.527 3.927 2.406 3.802 2.406 3.648 C 2.406 3.494 2.527 3.369 2.676 3.369 C 2.825 3.369 2.945 3.494 2.945 3.648 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.107 4.692 C 4.107 4.829 3.995 4.94 3.858 4.94 C 3.72 4.94 3.609 4.829 3.609 4.692 C 3.609 4.555 3.72 4.444 3.858 4.444 C 3.995 4.444 4.107 4.555 4.107 4.692 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.38 6.397 C 8.38 6.551 8.254 6.676 8.1 6.676 C 7.945 6.676 7.82 6.551 7.82 6.397 C 7.82 6.243 7.945 6.118 8.1 6.118 C 8.254 6.118 8.38 6.243 8.38 6.397 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.474 6.686 C 10.474 6.806 10.377 6.903 10.257 6.903 C 10.136 6.903 10.039 6.806 10.039 6.686 C 10.039 6.566 10.136 6.469 10.257 6.469 C 10.377 6.469 10.474 6.566 10.474 6.686 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.714 7.192 C 12.714 7.261 12.659 7.316 12.59 7.316 C 12.521 7.316 12.466 7.261 12.466 7.192 C 12.466 7.124 12.521 7.068 12.59 7.068 C 12.659 7.068 12.714 7.124 12.714 7.192 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.147 6.376 C 9.147 6.496 9.054 6.593 8.94 6.593 C 8.825 6.593 8.732 6.496 8.732 6.376 C 8.732 6.256 8.825 6.159 8.94 6.159 C 9.054 6.159 9.147 6.256 9.147 6.376 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.237 6.717 C 12.237 6.831 12.145 6.924 12.03 6.924 C 11.915 6.924 11.823 6.831 11.823 6.717 C 11.823 6.603 11.915 6.51 12.03 6.51 C 12.145 6.51 12.237 6.603 12.237 6.717 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.042 6.459 C 14.042 6.59 13.935 6.696 13.803 6.696 C 13.672 6.696 13.565 6.59 13.565 6.459 C 13.565 6.327 13.672 6.221 13.803 6.221 C 13.935 6.221 14.042 6.327 14.042 6.459 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.432 5.818 C 15.432 5.915 15.353 5.994 15.255 5.994 C 15.158 5.994 15.079 5.915 15.079 5.818 C 15.079 5.721 15.158 5.642 15.255 5.642 C 15.353 5.642 15.432 5.721 15.432 5.818 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.327 0.548 C 1.327 0.622 1.267 0.682 1.193 0.682 C 1.118 0.682 1.058 0.622 1.058 0.548 C 1.058 0.474 1.118 0.413 1.193 0.413 C 1.267 0.413 1.327 0.474 1.327 0.548 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 240,
      top: 0,
      width: 61,
      height: 61,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15,
      width: 35,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.970,
    height: 8.049,
    viewBox: "0 0 20.970 8.049",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 18.049,
      width: 20.97,
      height: 8.049
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.648 L 19.785 8.049 L 20.97 0 L 0 5.648 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.078,
    height: 5.879,
    viewBox: "0 0 10.078 5.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.708,
      top: 25.121,
      width: 10.078,
      height: 5.879,
      color: "var(--label-purple-assitive)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.879 L 10.078 0.976 L 2.031 0 L 0 5.879 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 29,
    height: 18,
    viewBox: "0 0 29 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 29,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 L 29 0 L 28.5 10 L 0 18 L 0 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 35,
    height: 23.697,
    viewBox: "0 0 35 23.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 23.697,
      color: "var(--label-purple-assitive)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9.428 L 0 23.697 L 35 14.27 L 35 0 L 0 9.428 Z M 11.378 17.161 L 9.611 17.637 L 6.475 14.445 L 6.475 18.481 L 4.467 19.022 L 4.467 11.665 L 6.36 11.155 L 9.37 14.233 L 9.37 10.344 L 11.378 9.804 L 11.378 17.161 Z M 18.614 15.212 L 12.675 16.811 L 12.675 9.454 L 18.561 7.869 L 18.561 9.592 L 14.682 10.637 L 14.682 11.761 L 18.195 10.815 L 18.195 12.423 L 14.682 13.37 L 14.682 14.536 L 18.614 13.478 L 18.614 15.212 Z M 28.086 12.713 L 26.319 13.188 L 24.855 9.347 L 23.382 13.98 L 21.615 14.456 L 19.168 7.705 L 21.312 7.128 L 22.587 11.04 L 23.998 6.383 L 25.745 5.912 L 27.156 9.809 L 28.432 5.21 L 30.533 4.644 L 28.086 12.713 L 28.086 12.713 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 314,
      top: 0,
      width: 61,
      height: 61
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14.016,
      top: 13.333,
      width: 32.97,
      height: 34.32
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 98,
      width: 61,
      height: 61,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 47,
      height: 47
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.002,
      top: 6.972,
      width: 32.14,
      height: 32.335,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32.14,
      height: 32.335,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32.14,
      height: 32.335,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32.14,
      height: 32.335,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.526,
    height: 31.774,
    viewBox: "0 0 31.526 31.774",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.561,
      width: 31.526,
      height: 31.774
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 31.526 17.405 L 26.719 19.645 L 23.025 21.369 L 18.897 23.297 L 15.918 24.687 L 12.783 26.148 L 10.538 27.194 L 8.198 28.285 L 6.396 29.128 L 4.318 30.099 L 2.907 30.756 L 0.85 31.716 C 0.345 31.951 -0.178 31.425 0.059 30.92 L 1.017 28.854 L 1.67 27.439 L 2.642 25.352 L 3.48 23.546 L 4.569 21.195 L 5.611 18.948 L 7.071 15.805 L 8.457 12.818 L 10.379 8.679 L 12.09 4.985 L 14.401 0 L 31.522 17.394 L 31.526 17.405 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.301,
    height: 3.317,
    viewBox: "0 0 3.301 3.317",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.016,
      top: 28.003,
      width: 3.301,
      height: 3.317
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.301 2.66 L 1.891 3.317 C 1.552 3.044 1.216 2.741 0.891 2.414 C 0.566 2.087 0.269 1.756 0 1.415 L 0.654 0 C 1.007 0.484 1.417 0.964 1.873 1.422 C 2.329 1.881 2.813 2.297 3.301 2.656 L 3.301 2.66 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.560,
    height: 5.579,
    viewBox: "0 0 5.560 5.579",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.644,
      top: 24.114,
      width: 5.56,
      height: 5.579
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.56 4.736 L 3.757 5.579 C 3.061 5.088 2.372 4.509 1.711 3.844 C 1.057 3.186 0.484 2.496 0 1.806 L 0.838 0 C 1.393 0.889 2.103 1.778 2.934 2.617 C 3.775 3.463 4.665 4.178 5.56 4.74 L 5.56 4.736 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.214,
    height: 8.242,
    viewBox: "0 0 8.214 8.242",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.567,
      top: 19.516,
      width: 8.214,
      height: 8.242
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.214 7.197 L 5.97 8.242 C 4.846 7.549 3.708 6.649 2.637 5.572 C 1.566 4.494 0.689 3.371 0 2.247 L 1.043 0 C 1.778 1.372 2.813 2.784 4.111 4.089 C 5.422 5.408 6.836 6.457 8.214 7.197 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.340,
    height: 16.381,
    viewBox: "0 0 16.340 16.381",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.38,
      top: 5.55,
      width: 16.34,
      height: 16.381
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.34 14.656 L 12.646 16.381 C 10.197 15.229 7.631 13.412 5.273 11.04 C 2.937 8.69 1.149 6.137 0 3.694 L 1.711 0 C 2.778 2.837 4.786 5.927 7.571 8.729 C 10.381 11.556 13.494 13.593 16.34 14.653 L 16.34 14.656 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.826,
    height: 11.865,
    viewBox: "0 0 11.826 11.865",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.07,
      top: 13.383,
      width: 11.826,
      height: 11.865
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.826 10.475 L 8.847 11.865 C 7.154 10.916 5.429 9.607 3.824 7.99 C 2.22 6.372 0.944 4.672 0 2.987 L 1.385 0 C 2.347 2.012 3.828 4.11 5.754 6.048 C 7.694 8 9.808 9.504 11.826 10.471 L 11.826 10.475 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 29.661,
    height: 21.711,
    viewBox: "0 0 29.661 21.711",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.048,
      top: 10.57,
      width: 29.661,
      height: 21.711,
      mixBlendMode: "screen"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.2 0 L 0 21.387 C 0.06 21.533 0.17 21.647 0.311 21.711 L 29.661 5.547 L 24.2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.932,
    height: 18.040,
    viewBox: "0 0 17.932 18.040",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.208,
      top: 0,
      width: 17.932,
      height: 18.04
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.587 17.692 C 16.229 19.058 11.271 16.281 6.51 11.491 C 1.749 6.702 -1.012 1.713 0.346 0.348 C 1.703 -1.018 6.662 1.759 11.423 6.549 C 16.183 11.338 18.944 16.327 17.587 17.692 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32.14,
      height: 32.335,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.526,
    height: 31.774,
    viewBox: "0 0 31.526 31.774",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.561,
      width: 31.526,
      height: 31.774,
      color: "var(--label-purple-assitive)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 31.526 17.405 L 26.719 19.645 L 23.025 21.369 L 18.897 23.297 L 15.918 24.687 L 12.783 26.148 L 10.538 27.194 L 8.198 28.285 L 6.396 29.128 L 4.318 30.099 L 2.907 30.756 L 0.85 31.716 C 0.345 31.951 -0.178 31.425 0.059 30.92 L 1.017 28.854 L 1.67 27.439 L 2.642 25.352 L 3.48 23.546 L 4.569 21.195 L 5.611 18.948 L 7.071 15.805 L 8.457 12.818 L 10.379 8.679 L 12.09 4.985 L 14.401 0 L 31.522 17.394 L 31.526 17.405 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.301,
    height: 3.317,
    viewBox: "0 0 3.301 3.317",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.016,
      top: 28.003,
      width: 3.301,
      height: 3.317,
      color: "rgb(229,229,229)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.301 2.66 L 1.891 3.317 C 1.552 3.044 1.216 2.741 0.891 2.414 C 0.566 2.087 0.269 1.756 0 1.415 L 0.654 0 C 1.007 0.484 1.417 0.964 1.873 1.422 C 2.329 1.881 2.813 2.297 3.301 2.656 L 3.301 2.66 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.560,
    height: 5.579,
    viewBox: "0 0 5.560 5.579",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.644,
      top: 24.114,
      width: 5.56,
      height: 5.579,
      color: "rgb(229,229,229)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.56 4.736 L 3.757 5.579 C 3.061 5.088 2.372 4.509 1.711 3.844 C 1.057 3.186 0.484 2.496 0 1.806 L 0.838 0 C 1.393 0.889 2.103 1.778 2.934 2.617 C 3.775 3.463 4.665 4.178 5.56 4.74 L 5.56 4.736 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.214,
    height: 8.242,
    viewBox: "0 0 8.214 8.242",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.567,
      top: 19.516,
      width: 8.214,
      height: 8.242,
      color: "rgb(229,229,229)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.214 7.197 L 5.97 8.242 C 4.846 7.549 3.708 6.649 2.637 5.572 C 1.566 4.494 0.689 3.371 0 2.247 L 1.043 0 C 1.778 1.372 2.813 2.784 4.111 4.089 C 5.422 5.408 6.836 6.457 8.214 7.197 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.340,
    height: 16.381,
    viewBox: "0 0 16.340 16.381",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.38,
      top: 5.55,
      width: 16.34,
      height: 16.381,
      color: "rgb(229,229,229)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.34 14.656 L 12.646 16.381 C 10.197 15.229 7.631 13.412 5.273 11.04 C 2.937 8.69 1.149 6.137 0 3.694 L 1.711 0 C 2.778 2.837 4.786 5.927 7.571 8.729 C 10.381 11.556 13.494 13.593 16.34 14.653 L 16.34 14.656 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.826,
    height: 11.865,
    viewBox: "0 0 11.826 11.865",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.07,
      top: 13.383,
      width: 11.826,
      height: 11.865,
      color: "rgb(229,229,229)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.826 10.475 L 8.847 11.865 C 7.154 10.916 5.429 9.607 3.824 7.99 C 2.22 6.372 0.944 4.672 0 2.987 L 1.385 0 C 2.347 2.012 3.828 4.11 5.754 6.048 C 7.694 8 9.808 9.504 11.826 10.471 L 11.826 10.475 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 29.661,
    height: 21.711,
    viewBox: "0 0 29.661 21.711",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.048,
      top: 10.57,
      width: 29.661,
      height: 21.711,
      opacity: 0.1,
      mixBlendMode: "screen",
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.2 0 L 0 21.387 C 0.06 21.533 0.17 21.647 0.311 21.711 L 29.661 5.547 L 24.2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.932,
    height: 18.040,
    viewBox: "0 0 17.932 18.040",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.208,
      top: 0,
      width: 17.932,
      height: 18.04,
      color: "rgb(71,0,199)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.587 17.692 C 16.229 19.058 11.271 16.281 6.51 11.491 C 1.749 6.702 -1.012 1.713 0.346 0.348 C 1.703 -1.018 6.662 1.759 11.423 6.549 C 16.183 11.338 18.944 16.327 17.587 17.692 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 92,
      top: 98,
      width: 61,
      height: 61,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-85e5edf76e849278",
    style: {
      position: "absolute",
      left: 11,
      top: 21,
      width: 39,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 166,
      top: 98,
      width: 61,
      height: 61,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-52879351166b7a98-12b5c132",
    style: {
      position: "absolute",
      left: 16,
      top: 12,
      width: 29,
      height: 38
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 240,
      top: 98,
      width: 61,
      height: 61,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34,
    height: 34,
    viewBox: "0 0 34 34",
    fill: "none",
    style: {
      position: "absolute",
      left: 13,
      top: 13,
      width: 34,
      height: 34,
      color: "var(--label-purple-assitive)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17 0 C 7.611 0 0 7.611 0 17 C 0 26.389 7.611 34 17 34 C 26.389 34 34 26.389 34 17 C 34 7.611 26.389 0 17 0 Z M 17 31.226 C 9.143 31.226 2.774 24.857 2.774 17 C 2.774 9.143 9.143 2.774 17 2.774 C 24.857 2.774 31.226 9.143 31.226 17 C 31.226 24.857 24.857 31.226 17 31.226 Z M 17 5.363 C 10.573 5.363 5.363 10.573 5.363 17 C 5.363 23.427 10.573 28.637 17 28.637 C 23.427 28.637 28.637 23.427 28.637 17 C 28.637 10.573 23.427 5.363 17 5.363 Z M 17 25.67 C 12.212 25.67 8.33 21.788 8.33 17 C 8.33 12.212 12.212 8.33 17 8.33 C 21.788 8.33 25.67 12.212 25.67 17 C 25.67 21.788 21.788 25.67 17 25.67 Z M 17 11.256 C 13.828 11.256 11.256 13.828 11.256 17 C 11.256 20.172 13.828 22.744 17 22.744 C 20.172 22.744 22.744 20.172 22.744 17 C 22.744 13.828 20.172 11.256 17 11.256 Z M 17 20.037 C 15.322 20.037 13.963 18.677 13.963 17 C 13.963 15.323 15.323 13.963 17 13.963 C 18.677 13.963 20.037 15.323 20.037 17 C 20.037 18.677 18.677 20.037 17 20.037 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 314,
      top: 98,
      width: 61,
      height: 61,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-70bbda706b4087ec",
    style: {
      position: "absolute",
      left: 8,
      top: 14.939,
      width: 44,
      height: 32.122
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 196,
      width: 61,
      height: 61,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-445abae4427b6aed",
    style: {
      position: "absolute",
      left: 6,
      top: 18,
      width: 49,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 92,
      top: 196,
      width: 61,
      height: 61,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.5,
      top: 14.539,
      width: 33,
      height: 34.288
    }
  })));
}

// Globals for scripts loaded after this file.
window.ControlSegmentedBoxDynamic = ControlSegmentedBoxDynamic;
window.IconWater = IconWater;
window.IconWeather = IconWeather;
window.IconWind = IconWind;
window.IconStar2 = IconStar2;
window.IconXmark = IconXmark;
window.ModalBottomHead = ModalBottomHead;
window.Wind2 = Wind2;
window.Screen = Screen;
window.FadeGradient = FadeGradient;
window.Splash = Splash;
window.Black = Black;
window.QuickFlag = QuickFlag;
window.HomeQuick = HomeQuick;
window.QuickMenuIcon = QuickMenuIcon;