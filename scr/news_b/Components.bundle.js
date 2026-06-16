// Components bundle — 13 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 579:9578 Icon/Chevron (80 variants)
const __venc_IconChevron = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconChevron = p => "variant=" + __venc_IconChevron(p.variant) + '|' + "small=" + __venc_IconChevron(p.small) + '|' + "double=" + __venc_IconChevron(p.double) + '|' + "thick=" + __venc_IconChevron(p.thick) + '|' + "tight=" + __venc_IconChevron(p.tight);
function IconChevron(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "chevron-left",
    small: _p.small ?? false,
    double: _p.double ?? true,
    thick: _p.thick ?? true,
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
    width: 8,
    height: 14.000,
    viewBox: "0 0 8 14.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 5,
      width: 8,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.707 0.293 C 7.317 -0.098 6.683 -0.098 6.293 0.293 L 0.293 6.293 C 0.105 6.48 0 6.735 0 7 C 0 7.265 0.105 7.519 0.293 7.707 L 6.293 13.707 C 6.683 14.097 7.317 14.097 7.707 13.707 C 8.098 13.316 8.098 12.683 7.707 12.293 L 2.414 7 L 7.707 1.707 C 8.098 1.316 8.098 0.683 7.707 0.293 Z",
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
    width: 14.000,
    height: 8,
    viewBox: "0 0 14.000 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 8,
      width: 14,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 8 C 7.265 8 7.519 7.894 7.707 7.707 L 13.707 1.707 C 14.097 1.316 14.097 0.683 13.707 0.293 C 13.316 -0.098 12.683 -0.098 12.293 0.293 L 7 5.586 L 1.707 0.293 C 1.316 -0.098 0.683 -0.098 0.293 0.293 C -0.098 0.683 -0.098 1.316 0.293 1.707 L 6.293 7.707 L 6.366 7.773 C 6.544 7.919 6.768 8 7 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 8.000,
    height: 14.000,
    viewBox: "0 0 8.000 14.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 5,
      width: 8,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.293 0.293 C 0.683 -0.098 1.316 -0.098 1.707 0.293 L 7.707 6.293 C 8.097 6.683 8.097 7.316 7.707 7.707 L 1.707 13.707 C 1.316 14.097 0.683 14.097 0.293 13.707 C -0.098 13.316 -0.098 12.683 0.293 12.293 L 5.586 7 L 0.293 1.707 C -0.098 1.316 -0.098 0.683 0.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 14.000,
    height: 8.000,
    viewBox: "0 0 14.000 8.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 8,
      width: 14,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.369 0.224 C 6.762 -0.096 7.341 -0.073 7.707 0.293 L 13.707 6.293 C 14.097 6.683 14.097 7.316 13.707 7.707 C 13.316 8.097 12.683 8.097 12.293 7.707 L 7 2.414 L 1.707 7.707 C 1.316 8.097 0.683 8.097 0.293 7.707 C -0.098 7.316 -0.098 6.683 0.293 6.293 L 6.293 0.293 L 6.369 0.224 Z",
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
    width: 14.000,
    height: 12.000,
    viewBox: "0 0 14.000 12.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 6,
      width: 14,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.293 0.293 C 5.683 -0.098 6.316 -0.098 6.707 0.293 C 7.097 0.683 7.097 1.316 6.707 1.707 L 2.414 6 L 6.707 10.293 C 7.097 10.683 7.097 11.316 6.707 11.707 C 6.316 12.097 5.683 12.097 5.293 11.707 L 0.293 6.707 C -0.098 6.316 -0.098 5.683 0.293 5.293 L 5.293 0.293 Z M 12.293 0.293 C 12.683 -0.098 13.316 -0.098 13.707 0.293 C 14.097 0.683 14.097 1.316 13.707 1.707 L 9.414 6 L 13.707 10.293 C 14.097 10.683 14.097 11.316 13.707 11.707 C 13.316 12.097 12.683 12.097 12.293 11.707 L 7.293 6.707 C 6.902 6.316 6.902 5.683 7.293 5.293 L 12.293 0.293 Z",
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
    width: 12.000,
    height: 14.000,
    viewBox: "0 0 12.000 14.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 5,
      width: 12,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.293 7.293 C 10.683 6.902 11.316 6.902 11.707 7.293 C 12.097 7.683 12.097 8.316 11.707 8.707 L 6.707 13.707 C 6.316 14.097 5.683 14.097 5.293 13.707 L 0.293 8.707 C -0.098 8.316 -0.098 7.683 0.293 7.293 C 0.683 6.902 1.316 6.902 1.707 7.293 L 6 11.586 L 10.293 7.293 Z M 10.293 0.293 C 10.683 -0.098 11.316 -0.098 11.707 0.293 C 12.097 0.683 12.097 1.316 11.707 1.707 L 6.707 6.707 C 6.316 7.097 5.683 7.097 5.293 6.707 L 0.293 1.707 C -0.098 1.316 -0.098 0.683 0.293 0.293 C 0.683 -0.098 1.316 -0.098 1.707 0.293 L 6 4.586 L 10.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 14.000,
    height: 12.000,
    viewBox: "0 0 14.000 12.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 6,
      width: 14,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.293 0.293 C 0.683 -0.098 1.316 -0.098 1.707 0.293 L 6.707 5.293 C 7.097 5.683 7.097 6.316 6.707 6.707 L 1.707 11.707 C 1.316 12.097 0.683 12.097 0.293 11.707 C -0.098 11.316 -0.098 10.683 0.293 10.293 L 4.586 6 L 0.293 1.707 C -0.098 1.316 -0.098 0.683 0.293 0.293 Z M 7.293 0.293 C 7.683 -0.098 8.316 -0.098 8.707 0.293 L 13.707 5.293 C 14.097 5.683 14.097 6.316 13.707 6.707 L 8.707 11.707 C 8.316 12.097 7.683 12.097 7.293 11.707 C 6.902 11.316 6.902 10.683 7.293 10.293 L 11.586 6 L 7.293 1.707 C 6.902 1.316 6.902 0.683 7.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 12.000,
    height: 14.000,
    viewBox: "0 0 12.000 14.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 5,
      width: 12,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.369 7.224 C 5.762 6.904 6.341 6.927 6.707 7.293 L 11.707 12.293 C 12.097 12.683 12.097 13.316 11.707 13.707 C 11.316 14.097 10.683 14.097 10.293 13.707 L 6 9.414 L 1.707 13.707 C 1.316 14.097 0.683 14.097 0.293 13.707 C -0.098 13.316 -0.098 12.683 0.293 12.293 L 5.293 7.293 L 5.369 7.224 Z M 5.369 0.224 C 5.762 -0.096 6.341 -0.073 6.707 0.293 L 11.707 5.293 C 12.097 5.683 12.097 6.316 11.707 6.707 C 11.316 7.097 10.683 7.097 10.293 6.707 L 6 2.414 L 1.707 6.707 C 1.316 7.097 0.683 7.097 0.293 6.707 C -0.098 6.316 -0.098 5.683 0.293 5.293 L 5.293 0.293 L 5.369 0.224 Z",
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
    width: 18.000,
    height: 12.000,
    viewBox: "0 0 18.000 12.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 18,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.293 0.293 C 5.683 -0.098 6.316 -0.098 6.707 0.293 C 7.097 0.683 7.097 1.316 6.707 1.707 L 2.414 6 L 6.707 10.293 C 7.097 10.683 7.097 11.316 6.707 11.707 C 6.316 12.097 5.683 12.097 5.293 11.707 L 0.293 6.707 C -0.098 6.316 -0.098 5.683 0.293 5.293 L 5.293 0.293 Z M 11.293 0.293 C 11.683 -0.098 12.316 -0.098 12.707 0.293 L 17.707 5.293 C 18.097 5.683 18.097 6.316 17.707 6.707 L 12.707 11.707 C 12.316 12.097 11.683 12.097 11.293 11.707 C 10.902 11.316 10.902 10.683 11.293 10.293 L 15.586 6 L 11.293 1.707 C 10.902 1.316 10.902 0.683 11.293 0.293 Z",
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
    width: 12.000,
    height: 18.000,
    viewBox: "0 0 12.000 18.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 3,
      width: 12,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.293 11.293 C 10.683 10.902 11.316 10.902 11.707 11.293 C 12.097 11.683 12.097 12.316 11.707 12.707 L 6.707 17.707 C 6.316 18.097 5.683 18.097 5.293 17.707 L 0.293 12.707 C -0.098 12.316 -0.098 11.683 0.293 11.293 C 0.683 10.902 1.316 10.902 1.707 11.293 L 6 15.586 L 10.293 11.293 Z M 5.369 0.224 C 5.762 -0.096 6.341 -0.073 6.707 0.293 L 11.707 5.293 C 12.097 5.683 12.097 6.316 11.707 6.707 C 11.316 7.097 10.683 7.097 10.293 6.707 L 6 2.414 L 1.707 6.707 C 1.316 7.097 0.683 7.097 0.293 6.707 C -0.098 6.316 -0.098 5.683 0.293 5.293 L 5.293 0.293 L 5.369 0.224 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 6.000,
    height: 10.500,
    viewBox: "0 0 6.000 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 3.75,
      width: 6,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.78 0.22 C 5.487 -0.073 5.013 -0.073 4.72 0.22 L 0.22 4.72 C -0.073 5.013 -0.073 5.487 0.22 5.78 L 4.72 10.28 C 5.013 10.573 5.487 10.573 5.78 10.28 C 6.073 9.987 6.073 9.513 5.78 9.22 L 1.81 5.25 L 5.78 1.28 C 6.073 0.987 6.073 0.513 5.78 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10.500,
    height: 6,
    viewBox: "0 0 10.500 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.75,
      top: 6,
      width: 10.5,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.776 5.832 C 5.071 6.072 5.506 6.055 5.78 5.78 L 10.28 1.28 C 10.573 0.987 10.573 0.513 10.28 0.22 C 9.987 -0.073 9.513 -0.073 9.22 0.22 L 5.25 4.189 L 1.28 0.22 C 0.987 -0.073 0.513 -0.073 0.22 0.22 C -0.073 0.513 -0.073 0.987 0.22 1.28 L 4.72 5.78 L 4.776 5.832 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 6.000,
    height: 10.500,
    viewBox: "0 0 6.000 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 3.75,
      width: 6,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 5.78 4.72 C 6.073 5.013 6.073 5.487 5.78 5.78 L 1.28 10.28 C 0.987 10.573 0.513 10.573 0.22 10.28 C -0.073 9.987 -0.073 9.513 0.22 9.22 L 4.189 5.25 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10.500,
    height: 6,
    viewBox: "0 0 10.500 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.75,
      top: 6,
      width: 10.5,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.776 0.168 C 5.071 -0.072 5.506 -0.055 5.78 0.22 L 10.28 4.72 C 10.573 5.013 10.573 5.487 10.28 5.78 C 9.987 6.073 9.513 6.073 9.22 5.78 L 5.25 1.811 L 1.28 5.78 C 0.987 6.073 0.513 6.073 0.22 5.78 C -0.073 5.487 -0.073 5.013 0.22 4.72 L 4.72 0.22 L 4.776 0.168 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10.500,
    height: 9.000,
    viewBox: "0 0 10.500 9.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.75,
      top: 4.5,
      width: 10.5,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.97 0.22 C 4.263 -0.073 4.737 -0.073 5.03 0.22 C 5.323 0.513 5.323 0.987 5.03 1.28 L 1.811 4.5 L 5.03 7.72 C 5.323 8.013 5.323 8.487 5.03 8.78 C 4.737 9.073 4.263 9.073 3.97 8.78 L 0.22 5.03 C 0.079 4.89 0 4.699 0 4.5 C 0 4.301 0.079 4.11 0.22 3.97 L 3.97 0.22 Z M 9.22 0.22 C 9.513 -0.073 9.987 -0.073 10.28 0.22 C 10.573 0.513 10.573 0.987 10.28 1.28 L 7.061 4.5 L 10.28 7.72 C 10.573 8.013 10.573 8.487 10.28 8.78 C 9.987 9.073 9.513 9.073 9.22 8.78 L 5.47 5.03 C 5.329 4.89 5.25 4.699 5.25 4.5 C 5.25 4.301 5.329 4.11 5.47 3.97 L 9.22 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 9.000,
    height: 10.500,
    viewBox: "0 0 9.000 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 3.75,
      width: 9,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.72 5.47 C 8.013 5.177 8.487 5.177 8.78 5.47 C 9.073 5.763 9.073 6.237 8.78 6.53 L 5.03 10.28 C 4.89 10.421 4.699 10.5 4.5 10.5 C 4.301 10.5 4.11 10.421 3.97 10.28 L 0.22 6.53 C -0.073 6.237 -0.073 5.763 0.22 5.47 C 0.513 5.177 0.987 5.177 1.28 5.47 L 4.5 8.689 L 7.72 5.47 Z M 7.72 0.22 C 8.013 -0.073 8.487 -0.073 8.78 0.22 C 9.073 0.513 9.073 0.987 8.78 1.28 L 5.03 5.03 C 4.89 5.171 4.699 5.25 4.5 5.25 C 4.301 5.25 4.11 5.171 3.97 5.03 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 4.5 3.439 L 7.72 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10.500,
    height: 9.000,
    viewBox: "0 0 10.500 9.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.75,
      top: 4.5,
      width: 10.5,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 5.03 3.97 C 5.171 4.11 5.25 4.301 5.25 4.5 C 5.25 4.699 5.171 4.89 5.03 5.03 L 1.28 8.78 C 0.987 9.073 0.513 9.073 0.22 8.78 C -0.073 8.487 -0.073 8.013 0.22 7.72 L 3.439 4.5 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 Z M 5.47 0.22 C 5.763 -0.073 6.237 -0.073 6.53 0.22 L 10.28 3.97 C 10.421 4.11 10.5 4.301 10.5 4.5 C 10.5 4.699 10.421 4.89 10.28 5.03 L 6.53 8.78 C 6.237 9.073 5.763 9.073 5.47 8.78 C 5.177 8.487 5.177 8.013 5.47 7.72 L 8.689 4.5 L 5.47 1.28 C 5.177 0.987 5.177 0.513 5.47 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 9.000,
    height: 10.500,
    viewBox: "0 0 9.000 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 3.75,
      width: 9,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 5.25 C 4.699 5.25 4.89 5.329 5.03 5.47 L 8.78 9.22 C 9.073 9.513 9.073 9.987 8.78 10.28 C 8.487 10.573 8.013 10.573 7.72 10.28 L 4.5 7.061 L 1.28 10.28 C 0.987 10.573 0.513 10.573 0.22 10.28 C -0.073 9.987 -0.073 9.513 0.22 9.22 L 3.97 5.47 L 4.084 5.376 C 4.206 5.294 4.351 5.25 4.5 5.25 Z M 4.5 0 C 4.699 0 4.89 0.079 5.03 0.22 L 8.78 3.97 C 9.073 4.263 9.073 4.737 8.78 5.03 C 8.487 5.323 8.013 5.323 7.72 5.03 L 4.5 1.811 L 1.28 5.03 C 0.987 5.323 0.513 5.323 0.22 5.03 C -0.073 4.737 -0.073 4.263 0.22 3.97 L 3.97 0.22 L 4.084 0.126 C 4.206 0.044 4.351 0 4.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.500,
    height: 9.000,
    viewBox: "0 0 13.500 9.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 4.5,
      width: 13.5,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.97 0.22 C 4.263 -0.073 4.737 -0.073 5.03 0.22 C 5.323 0.513 5.323 0.987 5.03 1.28 L 1.81 4.5 L 5.03 7.72 C 5.323 8.013 5.323 8.487 5.03 8.78 C 4.737 9.073 4.263 9.073 3.97 8.78 L 0.22 5.03 C -0.073 4.737 -0.073 4.263 0.22 3.97 L 3.97 0.22 Z M 8.47 0.22 C 8.763 -0.073 9.237 -0.073 9.53 0.22 L 13.28 3.97 C 13.573 4.263 13.573 4.737 13.28 5.03 L 9.53 8.78 C 9.237 9.073 8.763 9.073 8.47 8.78 C 8.177 8.487 8.177 8.013 8.47 7.72 L 11.689 4.5 L 8.47 1.28 C 8.177 0.987 8.177 0.513 8.47 0.22 Z",
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
    width: 9.000,
    height: 13.500,
    viewBox: "0 0 9.000 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.25,
      width: 9,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.72 8.47 C 8.013 8.177 8.487 8.177 8.78 8.47 C 9.073 8.763 9.073 9.237 8.78 9.53 L 5.03 13.28 C 4.737 13.573 4.263 13.573 3.97 13.28 L 0.22 9.53 C -0.073 9.237 -0.073 8.763 0.22 8.47 C 0.513 8.177 0.987 8.177 1.28 8.47 L 4.5 11.69 L 7.72 8.47 Z M 4.026 0.168 C 4.321 -0.072 4.756 -0.055 5.03 0.22 L 8.78 3.97 C 9.073 4.263 9.073 4.737 8.78 5.03 C 8.487 5.323 8.013 5.323 7.72 5.03 L 4.5 1.811 L 1.28 5.03 C 0.987 5.323 0.513 5.323 0.22 5.03 C -0.073 4.737 -0.073 4.263 0.22 3.97 L 3.97 0.22 L 4.026 0.168 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 7.301,
    height: 13.301,
    viewBox: "0 0 7.301 13.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.35,
      top: 5.35,
      width: 7.301,
      height: 13.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.11 0.19 C 6.857 -0.063 6.444 -0.063 6.19 0.19 L 0.19 6.19 C 0.069 6.312 0 6.478 0 6.65 C 0 6.823 0.069 6.988 0.19 7.11 L 6.19 13.11 C 6.444 13.364 6.857 13.364 7.11 13.11 C 7.364 12.856 7.364 12.444 7.11 12.19 L 1.57 6.65 L 7.11 1.11 C 7.364 0.856 7.364 0.444 7.11 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.301,
    height: 7.301,
    viewBox: "0 0 13.301 7.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.35,
      top: 8.35,
      width: 13.301,
      height: 7.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.65 7.301 C 6.823 7.301 6.988 7.232 7.11 7.11 L 13.11 1.11 C 13.364 0.856 13.364 0.444 13.11 0.19 C 12.856 -0.063 12.444 -0.063 12.19 0.19 L 6.65 5.73 L 1.11 0.19 C 0.856 -0.063 0.444 -0.063 0.19 0.19 C -0.063 0.444 -0.063 0.856 0.19 1.11 L 6.19 7.11 L 6.29 7.191 C 6.396 7.262 6.521 7.301 6.65 7.301 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 7.301,
    height: 13.301,
    viewBox: "0 0 7.301 13.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.35,
      top: 5.35,
      width: 7.301,
      height: 13.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.19 0.19 C 0.444 -0.063 0.856 -0.063 1.11 0.19 L 7.11 6.19 C 7.364 6.444 7.364 6.856 7.11 7.11 L 1.11 13.11 C 0.856 13.364 0.444 13.364 0.19 13.11 C -0.063 12.856 -0.063 12.444 0.19 12.19 L 5.73 6.65 L 0.19 1.11 C -0.063 0.856 -0.063 0.444 0.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.301,
    height: 7.300,
    viewBox: "0 0 13.301 7.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.35,
      top: 8.35,
      width: 13.301,
      height: 7.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.293 0.107 C 6.545 -0.059 6.888 -0.032 7.11 0.19 L 13.11 6.19 C 13.364 6.444 13.364 6.856 13.11 7.11 C 12.856 7.364 12.444 7.364 12.19 7.11 L 6.65 1.57 L 1.11 7.11 C 0.856 7.364 0.444 7.364 0.19 7.11 C -0.063 6.856 -0.063 6.444 0.19 6.19 L 6.19 0.19 L 6.293 0.107 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.301,
    height: 11.301,
    viewBox: "0 0 13.301 11.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.35,
      top: 6.35,
      width: 13.301,
      height: 11.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.19 0.19 C 5.444 -0.063 5.856 -0.063 6.11 0.19 C 6.364 0.444 6.364 0.856 6.11 1.11 L 1.57 5.65 L 6.11 10.19 C 6.364 10.444 6.364 10.856 6.11 11.11 C 5.856 11.364 5.444 11.364 5.19 11.11 L 0.19 6.11 C -0.063 5.856 -0.063 5.444 0.19 5.19 L 5.19 0.19 Z M 12.19 0.19 C 12.444 -0.063 12.856 -0.063 13.11 0.19 C 13.364 0.444 13.364 0.856 13.11 1.11 L 8.57 5.65 L 13.11 10.19 C 13.364 10.444 13.364 10.856 13.11 11.11 C 12.856 11.364 12.444 11.364 12.19 11.11 L 7.19 6.11 C 6.937 5.856 6.937 5.444 7.19 5.19 L 12.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 11.301,
    height: 13.301,
    viewBox: "0 0 11.301 13.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.35,
      top: 5.35,
      width: 11.301,
      height: 13.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.19 7.19 C 10.444 6.937 10.856 6.937 11.11 7.19 C 11.364 7.444 11.364 7.856 11.11 8.11 L 6.11 13.11 C 5.856 13.364 5.444 13.364 5.19 13.11 L 0.19 8.11 C -0.063 7.856 -0.063 7.444 0.19 7.19 C 0.444 6.937 0.856 6.937 1.11 7.19 L 5.65 11.73 L 10.19 7.19 Z M 10.19 0.19 C 10.444 -0.063 10.856 -0.063 11.11 0.19 C 11.364 0.444 11.364 0.856 11.11 1.11 L 6.11 6.11 C 5.856 6.364 5.444 6.364 5.19 6.11 L 0.19 1.11 C -0.063 0.856 -0.063 0.444 0.19 0.19 C 0.444 -0.063 0.856 -0.063 1.11 0.19 L 5.65 4.73 L 10.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.301,
    height: 11.301,
    viewBox: "0 0 13.301 11.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.35,
      top: 6.35,
      width: 13.301,
      height: 11.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.19 0.19 C 0.444 -0.063 0.856 -0.063 1.11 0.19 L 6.11 5.19 C 6.364 5.444 6.364 5.856 6.11 6.11 L 1.11 11.11 C 0.856 11.364 0.444 11.364 0.19 11.11 C -0.063 10.856 -0.063 10.444 0.19 10.19 L 4.73 5.65 L 0.19 1.11 C -0.063 0.856 -0.063 0.444 0.19 0.19 Z M 7.19 0.19 C 7.444 -0.063 7.856 -0.063 8.11 0.19 L 13.11 5.19 C 13.364 5.444 13.364 5.856 13.11 6.11 L 8.11 11.11 C 7.856 11.364 7.444 11.364 7.19 11.11 C 6.937 10.856 6.937 10.444 7.19 10.19 L 11.73 5.65 L 7.19 1.11 C 6.937 0.856 6.937 0.444 7.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 11.301,
    height: 13.300,
    viewBox: "0 0 11.301 13.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.35,
      top: 5.35,
      width: 11.301,
      height: 13.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.19 7.19 C 5.444 6.936 5.856 6.936 6.11 7.19 L 11.11 12.19 C 11.364 12.444 11.364 12.856 11.11 13.11 C 10.856 13.364 10.444 13.364 10.19 13.11 L 5.65 8.57 L 1.11 13.11 C 0.856 13.364 0.444 13.364 0.19 13.11 C -0.063 12.856 -0.063 12.444 0.19 12.19 L 5.19 7.19 Z M 5.293 0.107 C 5.545 -0.059 5.888 -0.032 6.11 0.19 L 11.11 5.19 C 11.364 5.444 11.364 5.856 11.11 6.11 C 10.856 6.364 10.444 6.364 10.19 6.11 L 5.65 1.57 L 1.11 6.11 C 0.856 6.364 0.444 6.364 0.19 6.11 C -0.063 5.856 -0.063 5.444 0.19 5.19 L 5.19 0.19 L 5.293 0.107 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 17.301,
    height: 11.301,
    viewBox: "0 0 17.301 11.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.35,
      top: 6.35,
      width: 17.301,
      height: 11.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.19 0.19 C 5.444 -0.063 5.856 -0.063 6.11 0.19 C 6.364 0.444 6.364 0.856 6.11 1.11 L 1.57 5.65 L 6.11 10.19 C 6.364 10.444 6.364 10.856 6.11 11.11 C 5.856 11.364 5.444 11.364 5.19 11.11 L 0.19 6.11 C -0.063 5.856 -0.063 5.444 0.19 5.19 L 5.19 0.19 Z M 11.19 0.19 C 11.444 -0.063 11.856 -0.063 12.11 0.19 L 17.11 5.19 C 17.364 5.444 17.364 5.856 17.11 6.11 L 12.11 11.11 C 11.856 11.364 11.444 11.364 11.19 11.11 C 10.937 10.856 10.937 10.444 11.19 10.19 L 15.73 5.65 L 11.19 1.11 C 10.937 0.856 10.937 0.444 11.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 11.301,
    height: 17.300,
    viewBox: "0 0 11.301 17.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.35,
      top: 3.35,
      width: 11.301,
      height: 17.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.19 11.19 C 10.444 10.936 10.856 10.936 11.11 11.19 C 11.364 11.444 11.364 11.856 11.11 12.11 L 6.11 17.11 C 5.856 17.364 5.444 17.364 5.19 17.11 L 0.19 12.11 C -0.063 11.856 -0.063 11.444 0.19 11.19 C 0.444 10.936 0.856 10.936 1.11 11.19 L 5.65 15.73 L 10.19 11.19 Z M 5.293 0.107 C 5.545 -0.059 5.888 -0.032 6.11 0.19 L 11.11 5.19 C 11.364 5.444 11.364 5.856 11.11 6.11 C 10.856 6.364 10.444 6.364 10.19 6.11 L 5.65 1.57 L 1.11 6.11 C 0.856 6.364 0.444 6.364 0.19 6.11 C -0.063 5.856 -0.063 5.444 0.19 5.19 L 5.19 0.19 L 5.293 0.107 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 5.500,
    height: 10,
    viewBox: "0 0 5.500 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.25,
      top: 4,
      width: 5.5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.353 0.146 C 5.158 -0.049 4.842 -0.049 4.646 0.146 L 0.146 4.646 C -0.049 4.842 -0.049 5.158 0.146 5.353 L 4.646 9.853 C 4.842 10.049 5.158 10.049 5.353 9.853 C 5.549 9.658 5.549 9.342 5.353 9.146 L 1.207 5 L 5.353 0.853 C 5.549 0.658 5.549 0.342 5.353 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10,
    height: 5.500,
    viewBox: "0 0 10 5.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6.25,
      width: 10,
      height: 5.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.725 5.418 C 4.919 5.546 5.183 5.524 5.353 5.353 L 9.853 0.853 C 10.049 0.658 10.049 0.342 9.853 0.146 C 9.658 -0.049 9.342 -0.049 9.146 0.146 L 5 4.293 L 0.853 0.146 C 0.658 -0.049 0.342 -0.049 0.146 0.146 C -0.049 0.342 -0.049 0.658 0.146 0.853 L 4.646 5.353 L 4.725 5.418 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 5.500,
    height: 10,
    viewBox: "0 0 5.500 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.25,
      top: 4,
      width: 5.5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.853 0.146 L 5.353 4.646 C 5.549 4.842 5.549 5.158 5.353 5.353 L 0.853 9.853 C 0.658 10.049 0.342 10.049 0.146 9.853 C -0.049 9.658 -0.049 9.342 0.146 9.146 L 4.293 5 L 0.146 0.853 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10,
    height: 5.500,
    viewBox: "0 0 10 5.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6.25,
      width: 10,
      height: 5.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.725 0.082 C 4.919 -0.046 5.183 -0.024 5.353 0.147 L 9.853 4.647 C 10.049 4.842 10.049 5.158 9.853 5.354 C 9.658 5.549 9.342 5.549 9.146 5.354 L 5 1.207 L 0.853 5.354 C 0.658 5.549 0.342 5.549 0.146 5.354 C -0.049 5.158 -0.049 4.842 0.146 4.647 L 4.646 0.147 L 4.725 0.082 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10,
    height: 8.500,
    viewBox: "0 0 10 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4.75,
      width: 10,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.896 0.146 C 4.092 -0.049 4.408 -0.049 4.604 0.146 C 4.799 0.342 4.799 0.658 4.604 0.853 L 1.207 4.25 L 4.604 7.646 C 4.799 7.842 4.799 8.158 4.604 8.353 C 4.408 8.549 4.092 8.549 3.896 8.353 L 0.146 4.603 C 0.053 4.51 0 4.383 0 4.25 C 0 4.117 0.053 3.99 0.146 3.896 L 3.896 0.146 Z M 9.146 0.146 C 9.342 -0.049 9.658 -0.049 9.854 0.146 C 10.049 0.342 10.049 0.658 9.854 0.853 L 6.457 4.25 L 9.854 7.646 C 10.049 7.842 10.049 8.158 9.854 8.353 C 9.658 8.549 9.342 8.549 9.146 8.353 L 5.396 4.603 C 5.303 4.51 5.25 4.383 5.25 4.25 C 5.25 4.117 5.303 3.99 5.396 3.896 L 9.146 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 8.500,
    height: 10,
    viewBox: "0 0 8.500 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.75,
      top: 4,
      width: 8.5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.646 5.396 C 7.842 5.201 8.158 5.201 8.353 5.396 C 8.549 5.592 8.549 5.908 8.353 6.103 L 4.603 9.853 C 4.51 9.947 4.383 10 4.25 10 C 4.117 10 3.99 9.947 3.896 9.853 L 0.146 6.103 C -0.049 5.908 -0.049 5.592 0.146 5.396 C 0.342 5.201 0.658 5.201 0.853 5.396 L 4.25 8.793 L 7.646 5.396 Z M 7.646 0.146 C 7.842 -0.049 8.158 -0.049 8.353 0.146 C 8.549 0.342 8.549 0.658 8.353 0.853 L 4.603 4.603 C 4.51 4.697 4.383 4.75 4.25 4.75 C 4.117 4.75 3.99 4.697 3.896 4.603 L 0.146 0.853 C -0.049 0.658 -0.049 0.342 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.853 0.146 L 4.25 3.543 L 7.646 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10,
    height: 8.500,
    viewBox: "0 0 10 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4.75,
      width: 10,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.853 0.146 L 4.603 3.896 C 4.697 3.99 4.75 4.117 4.75 4.25 C 4.75 4.383 4.697 4.51 4.603 4.603 L 0.853 8.353 C 0.658 8.549 0.342 8.549 0.146 8.353 C -0.049 8.158 -0.049 7.842 0.146 7.646 L 3.543 4.25 L 0.146 0.853 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z M 5.396 0.146 C 5.592 -0.049 5.908 -0.049 6.103 0.146 L 9.853 3.896 C 9.947 3.99 10 4.117 10 4.25 C 10 4.383 9.947 4.51 9.853 4.603 L 6.103 8.353 C 5.908 8.549 5.592 8.549 5.396 8.353 C 5.201 8.158 5.201 7.842 5.396 7.646 L 8.793 4.25 L 5.396 0.853 C 5.201 0.658 5.201 0.342 5.396 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 8.500,
    height: 10,
    viewBox: "0 0 8.500 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.75,
      top: 4,
      width: 8.5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.25 5.25 C 4.383 5.25 4.51 5.303 4.603 5.396 L 8.353 9.146 C 8.549 9.342 8.549 9.658 8.353 9.854 C 8.158 10.049 7.842 10.049 7.646 9.854 L 4.25 6.457 L 0.853 9.854 C 0.658 10.049 0.342 10.049 0.146 9.854 C -0.049 9.658 -0.049 9.342 0.146 9.146 L 3.896 5.396 L 3.973 5.334 C 4.054 5.28 4.151 5.25 4.25 5.25 Z M 4.25 0 C 4.383 0 4.51 0.053 4.603 0.146 L 8.353 3.896 C 8.549 4.092 8.549 4.408 8.353 4.604 C 8.158 4.799 7.842 4.799 7.646 4.604 L 4.25 1.207 L 0.853 4.604 C 0.658 4.799 0.342 4.799 0.146 4.604 C -0.049 4.408 -0.049 4.092 0.146 3.896 L 3.896 0.146 L 3.973 0.084 C 4.054 0.03 4.151 0 4.25 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 8.500,
    viewBox: "0 0 13 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 4.75,
      width: 13,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.896 0.146 C 4.092 -0.049 4.408 -0.049 4.603 0.146 C 4.799 0.342 4.799 0.658 4.603 0.853 L 1.207 4.25 L 4.603 7.646 C 4.799 7.842 4.799 8.158 4.603 8.353 C 4.408 8.549 4.092 8.549 3.896 8.353 L 0.146 4.603 C -0.049 4.408 -0.049 4.092 0.146 3.896 L 3.896 0.146 Z M 8.396 0.146 C 8.592 -0.049 8.908 -0.049 9.103 0.146 L 12.853 3.896 C 13.049 4.092 13.049 4.408 12.853 4.603 L 9.103 8.353 C 8.908 8.549 8.592 8.549 8.396 8.353 C 8.201 8.158 8.201 7.842 8.396 7.646 L 11.793 4.25 L 8.396 0.853 C 8.201 0.658 8.201 0.342 8.396 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 8.500,
    height: 13.000,
    viewBox: "0 0 8.500 13.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.75,
      top: 2.5,
      width: 8.5,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.646 8.397 C 7.842 8.201 8.158 8.201 8.353 8.397 C 8.549 8.592 8.549 8.908 8.353 9.104 L 4.603 12.854 C 4.408 13.049 4.092 13.049 3.896 12.854 L 0.146 9.104 C -0.049 8.908 -0.049 8.592 0.146 8.397 C 0.342 8.201 0.658 8.201 0.853 8.397 L 4.25 11.793 L 7.646 8.397 Z M 3.975 0.082 C 4.169 -0.046 4.433 -0.024 4.603 0.147 L 8.353 3.897 C 8.549 4.092 8.549 4.408 8.353 4.604 C 8.158 4.799 7.842 4.799 7.646 4.604 L 4.25 1.207 L 0.853 4.604 C 0.658 4.799 0.342 4.799 0.146 4.604 C -0.049 4.408 -0.049 4.092 0.146 3.897 L 3.896 0.147 L 3.975 0.082 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 14.000,
    viewBox: "0 0 8 14.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.707 0.293 C 7.317 -0.098 6.683 -0.098 6.293 0.293 L 0.293 6.293 C 0.105 6.48 0 6.735 0 7 C 0 7.265 0.105 7.519 0.293 7.707 L 6.293 13.707 C 6.683 14.097 7.317 14.097 7.707 13.707 C 8.098 13.316 8.098 12.683 7.707 12.293 L 2.414 7 L 7.707 1.707 C 8.098 1.316 8.098 0.683 7.707 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 14,
      height: 8,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.000,
    height: 8,
    viewBox: "0 0 14.000 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 8 C 7.265 8 7.519 7.894 7.707 7.707 L 13.707 1.707 C 14.097 1.316 14.097 0.683 13.707 0.293 C 13.316 -0.098 12.683 -0.098 12.293 0.293 L 7 5.586 L 1.707 0.293 C 1.316 -0.098 0.683 -0.098 0.293 0.293 C -0.098 0.683 -0.098 1.316 0.293 1.707 L 6.293 7.707 L 6.366 7.773 C 6.544 7.919 6.768 8 7 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.000,
    height: 14.000,
    viewBox: "0 0 8.000 14.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.293 0.293 C 0.683 -0.098 1.316 -0.098 1.707 0.293 L 7.707 6.293 C 8.097 6.683 8.097 7.316 7.707 7.707 L 1.707 13.707 C 1.316 14.097 0.683 14.097 0.293 13.707 C -0.098 13.316 -0.098 12.683 0.293 12.293 L 5.586 7 L 0.293 1.707 C -0.098 1.316 -0.098 0.683 0.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 14,
      height: 8,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.000,
    height: 8.000,
    viewBox: "0 0 14.000 8.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.369 0.224 C 6.762 -0.096 7.341 -0.073 7.707 0.293 L 13.707 6.293 C 14.097 6.683 14.097 7.316 13.707 7.707 C 13.316 8.097 12.683 8.097 12.293 7.707 L 7 2.414 L 1.707 7.707 C 1.316 8.097 0.683 8.097 0.293 7.707 C -0.098 7.316 -0.098 6.683 0.293 6.293 L 6.293 0.293 L 6.369 0.224 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 14,
      height: 12,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.000,
    height: 12.000,
    viewBox: "0 0 14.000 12.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.293 0.293 C 5.683 -0.098 6.316 -0.098 6.707 0.293 C 7.097 0.683 7.097 1.316 6.707 1.707 L 2.414 6 L 6.707 10.293 C 7.097 10.683 7.097 11.316 6.707 11.707 C 6.316 12.097 5.683 12.097 5.293 11.707 L 0.293 6.707 C -0.098 6.316 -0.098 5.683 0.293 5.293 L 5.293 0.293 Z M 12.293 0.293 C 12.683 -0.098 13.316 -0.098 13.707 0.293 C 14.097 0.683 14.097 1.316 13.707 1.707 L 9.414 6 L 13.707 10.293 C 14.097 10.683 14.097 11.316 13.707 11.707 C 13.316 12.097 12.683 12.097 12.293 11.707 L 7.293 6.707 C 6.902 6.316 6.902 5.683 7.293 5.293 L 12.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.000,
    height: 14.000,
    viewBox: "0 0 12.000 14.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.293 7.293 C 10.683 6.902 11.316 6.902 11.707 7.293 C 12.097 7.683 12.097 8.316 11.707 8.707 L 6.707 13.707 C 6.316 14.097 5.683 14.097 5.293 13.707 L 0.293 8.707 C -0.098 8.316 -0.098 7.683 0.293 7.293 C 0.683 6.902 1.316 6.902 1.707 7.293 L 6 11.586 L 10.293 7.293 Z M 10.293 0.293 C 10.683 -0.098 11.316 -0.098 11.707 0.293 C 12.097 0.683 12.097 1.316 11.707 1.707 L 6.707 6.707 C 6.316 7.097 5.683 7.097 5.293 6.707 L 0.293 1.707 C -0.098 1.316 -0.098 0.683 0.293 0.293 C 0.683 -0.098 1.316 -0.098 1.707 0.293 L 6 4.586 L 10.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 14,
      height: 12,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.000,
    height: 12.000,
    viewBox: "0 0 14.000 12.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.293 0.293 C 0.683 -0.098 1.316 -0.098 1.707 0.293 L 6.707 5.293 C 7.097 5.683 7.097 6.316 6.707 6.707 L 1.707 11.707 C 1.316 12.097 0.683 12.097 0.293 11.707 C -0.098 11.316 -0.098 10.683 0.293 10.293 L 4.586 6 L 0.293 1.707 C -0.098 1.316 -0.098 0.683 0.293 0.293 Z M 7.293 0.293 C 7.683 -0.098 8.316 -0.098 8.707 0.293 L 13.707 5.293 C 14.097 5.683 14.097 6.316 13.707 6.707 L 8.707 11.707 C 8.316 12.097 7.683 12.097 7.293 11.707 C 6.902 11.316 6.902 10.683 7.293 10.293 L 11.586 6 L 7.293 1.707 C 6.902 1.316 6.902 0.683 7.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.000,
    height: 14.000,
    viewBox: "0 0 12.000 14.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.369 7.224 C 5.762 6.904 6.341 6.927 6.707 7.293 L 11.707 12.293 C 12.097 12.683 12.097 13.316 11.707 13.707 C 11.316 14.097 10.683 14.097 10.293 13.707 L 6 9.414 L 1.707 13.707 C 1.316 14.097 0.683 14.097 0.293 13.707 C -0.098 13.316 -0.098 12.683 0.293 12.293 L 5.293 7.293 L 5.369 7.224 Z M 5.369 0.224 C 5.762 -0.096 6.341 -0.073 6.707 0.293 L 11.707 5.293 C 12.097 5.683 12.097 6.316 11.707 6.707 C 11.316 7.097 10.683 7.097 10.293 6.707 L 6 2.414 L 1.707 6.707 C 1.316 7.097 0.683 7.097 0.293 6.707 C -0.098 6.316 -0.098 5.683 0.293 5.293 L 5.293 0.293 L 5.369 0.224 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 18,
      height: 12,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.000,
    height: 12.000,
    viewBox: "0 0 18.000 12.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.293 0.293 C 5.683 -0.098 6.316 -0.098 6.707 0.293 C 7.097 0.683 7.097 1.316 6.707 1.707 L 2.414 6 L 6.707 10.293 C 7.097 10.683 7.097 11.316 6.707 11.707 C 6.316 12.097 5.683 12.097 5.293 11.707 L 0.293 6.707 C -0.098 6.316 -0.098 5.683 0.293 5.293 L 5.293 0.293 Z M 11.293 0.293 C 11.683 -0.098 12.316 -0.098 12.707 0.293 L 17.707 5.293 C 18.097 5.683 18.097 6.316 17.707 6.707 L 12.707 11.707 C 12.316 12.097 11.683 12.097 11.293 11.707 C 10.902 11.316 10.902 10.683 11.293 10.293 L 15.586 6 L 11.293 1.707 C 10.902 1.316 10.902 0.683 11.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 18,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.000,
    height: 18.000,
    viewBox: "0 0 12.000 18.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.293 11.293 C 10.683 10.902 11.316 10.902 11.707 11.293 C 12.097 11.683 12.097 12.316 11.707 12.707 L 6.707 17.707 C 6.316 18.097 5.683 18.097 5.293 17.707 L 0.293 12.707 C -0.098 12.316 -0.098 11.683 0.293 11.293 C 0.683 10.902 1.316 10.902 1.707 11.293 L 6 15.586 L 10.293 11.293 Z M 5.369 0.224 C 5.762 -0.096 6.341 -0.073 6.707 0.293 L 11.707 5.293 C 12.097 5.683 12.097 6.316 11.707 6.707 C 11.316 7.097 10.683 7.097 10.293 6.707 L 6 2.414 L 1.707 6.707 C 1.316 7.097 0.683 7.097 0.293 6.707 C -0.098 6.316 -0.098 5.683 0.293 5.293 L 5.293 0.293 L 5.369 0.224 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 6,
      height: 12,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.000,
    height: 10.500,
    viewBox: "0 0 6.000 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.75,
      width: 6,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.78 0.22 C 5.487 -0.073 5.013 -0.073 4.72 0.22 L 0.22 4.72 C -0.073 5.013 -0.073 5.487 0.22 5.78 L 4.72 10.28 C 5.013 10.573 5.487 10.573 5.78 10.28 C 6.073 9.987 6.073 9.513 5.78 9.22 L 1.81 5.25 L 5.78 1.28 C 6.073 0.987 6.073 0.513 5.78 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 6,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.500,
    height: 6,
    viewBox: "0 0 10.500 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0,
      width: 10.5,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.776 5.832 C 5.071 6.072 5.506 6.055 5.78 5.78 L 10.28 1.28 C 10.573 0.987 10.573 0.513 10.28 0.22 C 9.987 -0.073 9.513 -0.073 9.22 0.22 L 5.25 4.189 L 1.28 0.22 C 0.987 -0.073 0.513 -0.073 0.22 0.22 C -0.073 0.513 -0.073 0.987 0.22 1.28 L 4.72 5.78 L 4.776 5.832 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 6,
      height: 12,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.000,
    height: 10.500,
    viewBox: "0 0 6.000 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.75,
      width: 6,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 5.78 4.72 C 6.073 5.013 6.073 5.487 5.78 5.78 L 1.28 10.28 C 0.987 10.573 0.513 10.573 0.22 10.28 C -0.073 9.987 -0.073 9.513 0.22 9.22 L 4.189 5.25 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 6,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.500,
    height: 6,
    viewBox: "0 0 10.500 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0,
      width: 10.5,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.776 0.168 C 5.071 -0.072 5.506 -0.055 5.78 0.22 L 10.28 4.72 C 10.573 5.013 10.573 5.487 10.28 5.78 C 9.987 6.073 9.513 6.073 9.22 5.78 L 5.25 1.811 L 1.28 5.78 C 0.987 6.073 0.513 6.073 0.22 5.78 C -0.073 5.487 -0.073 5.013 0.22 4.72 L 4.72 0.22 L 4.776 0.168 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body54 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 10,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.500,
    height: 9.000,
    viewBox: "0 0 10.500 9.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.5,
      width: 10.5,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.97 0.22 C 4.263 -0.073 4.737 -0.073 5.03 0.22 C 5.323 0.513 5.323 0.987 5.03 1.28 L 1.811 4.5 L 5.03 7.72 C 5.323 8.013 5.323 8.487 5.03 8.78 C 4.737 9.073 4.263 9.073 3.97 8.78 L 0.22 5.03 C 0.079 4.89 0 4.699 0 4.5 C 0 4.301 0.079 4.11 0.22 3.97 L 3.97 0.22 Z M 9.22 0.22 C 9.513 -0.073 9.987 -0.073 10.28 0.22 C 10.573 0.513 10.573 0.987 10.28 1.28 L 7.061 4.5 L 10.28 7.72 C 10.573 8.013 10.573 8.487 10.28 8.78 C 9.987 9.073 9.513 9.073 9.22 8.78 L 5.47 5.03 C 5.329 4.89 5.25 4.699 5.25 4.5 C 5.25 4.301 5.329 4.11 5.47 3.97 L 9.22 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body55 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 10,
      height: 12,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.000,
    height: 10.500,
    viewBox: "0 0 9.000 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.5,
      top: 0.75,
      width: 9,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.72 5.47 C 8.013 5.177 8.487 5.177 8.78 5.47 C 9.073 5.763 9.073 6.237 8.78 6.53 L 5.03 10.28 C 4.737 10.573 4.263 10.573 3.97 10.28 L 0.22 6.53 C -0.073 6.237 -0.073 5.763 0.22 5.47 C 0.513 5.177 0.987 5.177 1.28 5.47 L 4.5 8.689 L 7.72 5.47 Z M 7.72 0.22 C 8.013 -0.073 8.487 -0.073 8.78 0.22 C 9.073 0.513 9.073 0.987 8.78 1.28 L 5.03 5.03 C 4.737 5.323 4.263 5.323 3.97 5.03 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 4.5 3.439 L 7.72 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body56 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 10,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.500,
    height: 9.000,
    viewBox: "0 0 10.500 9.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.5,
      width: 10.5,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 5.03 3.97 C 5.171 4.11 5.25 4.301 5.25 4.5 C 5.25 4.699 5.171 4.89 5.03 5.03 L 1.28 8.78 C 0.987 9.073 0.513 9.073 0.22 8.78 C -0.073 8.487 -0.073 8.013 0.22 7.72 L 3.439 4.5 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 Z M 5.47 0.22 C 5.763 -0.073 6.237 -0.073 6.53 0.22 L 10.28 3.97 C 10.421 4.11 10.5 4.301 10.5 4.5 C 10.5 4.699 10.421 4.89 10.28 5.03 L 6.53 8.78 C 6.237 9.073 5.763 9.073 5.47 8.78 C 5.177 8.487 5.177 8.013 5.47 7.72 L 8.689 4.5 L 5.47 1.28 C 5.177 0.987 5.177 0.513 5.47 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body57 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 10,
      height: 12,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.000,
    height: 10.500,
    viewBox: "0 0 9.000 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.5,
      top: 0.75,
      width: 9,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.026 5.418 C 4.321 5.178 4.756 5.195 5.03 5.47 L 8.78 9.22 C 9.073 9.513 9.073 9.987 8.78 10.28 C 8.487 10.573 8.013 10.573 7.72 10.28 L 4.5 7.061 L 1.28 10.28 C 0.987 10.573 0.513 10.573 0.22 10.28 C -0.073 9.987 -0.073 9.513 0.22 9.22 L 3.97 5.47 L 4.026 5.418 Z M 4.026 0.168 C 4.321 -0.072 4.756 -0.055 5.03 0.22 L 8.78 3.97 C 9.073 4.263 9.073 4.737 8.78 5.03 C 8.487 5.323 8.013 5.323 7.72 5.03 L 4.5 1.811 L 1.28 5.03 C 0.987 5.323 0.513 5.323 0.22 5.03 C -0.073 4.737 -0.073 4.263 0.22 3.97 L 3.97 0.22 L 4.026 0.168 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body58 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 15,
      height: 10,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.500,
    height: 9.000,
    viewBox: "0 0 13.500 9.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.5,
      width: 13.5,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.97 0.22 C 4.263 -0.073 4.737 -0.073 5.03 0.22 C 5.323 0.513 5.323 0.987 5.03 1.28 L 1.81 4.5 L 5.03 7.72 C 5.323 8.013 5.323 8.487 5.03 8.78 C 4.737 9.073 4.263 9.073 3.97 8.78 L 0.22 5.03 C -0.073 4.737 -0.073 4.263 0.22 3.97 L 3.97 0.22 Z M 8.47 0.22 C 8.763 -0.073 9.237 -0.073 9.53 0.22 L 13.28 3.97 C 13.573 4.263 13.573 4.737 13.28 5.03 L 9.53 8.78 C 9.237 9.073 8.763 9.073 8.47 8.78 C 8.177 8.487 8.177 8.013 8.47 7.72 L 11.689 4.5 L 8.47 1.28 C 8.177 0.987 8.177 0.513 8.47 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body59 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 11,
      height: 18,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.000,
    height: 13.500,
    viewBox: "0 0 9.000 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 2.25,
      width: 9,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.72 8.47 C 8.013 8.177 8.487 8.177 8.78 8.47 C 9.073 8.763 9.073 9.237 8.78 9.53 L 5.03 13.28 C 4.737 13.573 4.263 13.573 3.97 13.28 L 0.22 9.53 C -0.073 9.237 -0.073 8.763 0.22 8.47 C 0.513 8.177 0.987 8.177 1.28 8.47 L 4.5 11.69 L 7.72 8.47 Z M 4.026 0.168 C 4.321 -0.072 4.756 -0.055 5.03 0.22 L 8.78 3.97 C 9.073 4.263 9.073 4.737 8.78 5.03 C 8.487 5.323 8.013 5.323 7.72 5.03 L 4.5 1.811 L 1.28 5.03 C 0.987 5.323 0.513 5.323 0.22 5.03 C -0.073 4.737 -0.073 4.263 0.22 3.97 L 3.97 0.22 L 4.026 0.168 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body60 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 14,
      height: 8,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.301,
    height: 7.301,
    viewBox: "0 0 13.301 7.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.35,
      top: 0.35,
      width: 13.301,
      height: 7.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.65 7.301 C 6.823 7.301 6.988 7.232 7.11 7.11 L 13.11 1.11 C 13.364 0.856 13.364 0.444 13.11 0.19 C 12.856 -0.063 12.444 -0.063 12.19 0.19 L 6.65 5.73 L 1.11 0.19 C 0.856 -0.063 0.444 -0.063 0.19 0.19 C -0.063 0.444 -0.063 0.856 0.19 1.11 L 6.19 7.11 L 6.29 7.191 C 6.396 7.262 6.521 7.301 6.65 7.301 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body61 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.301,
    height: 13.301,
    viewBox: "0 0 7.301 13.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.35,
      top: 0.35,
      width: 7.301,
      height: 13.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.19 0.19 C 0.444 -0.063 0.856 -0.063 1.11 0.19 L 7.11 6.19 C 7.364 6.444 7.364 6.856 7.11 7.11 L 1.11 13.11 C 0.856 13.364 0.444 13.364 0.19 13.11 C -0.063 12.856 -0.063 12.444 0.19 12.19 L 5.73 6.65 L 0.19 1.11 C -0.063 0.856 -0.063 0.444 0.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body62 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 14,
      height: 8,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.301,
    height: 7.300,
    viewBox: "0 0 13.301 7.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.35,
      top: 0.35,
      width: 13.301,
      height: 7.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.293 0.107 C 6.545 -0.059 6.888 -0.032 7.11 0.19 L 13.11 6.19 C 13.364 6.444 13.364 6.856 13.11 7.11 C 12.856 7.364 12.444 7.364 12.19 7.11 L 6.65 1.57 L 1.11 7.11 C 0.856 7.364 0.444 7.364 0.19 7.11 C -0.063 6.856 -0.063 6.444 0.19 6.19 L 6.19 0.19 L 6.293 0.107 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body63 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 14,
      height: 12,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.301,
    height: 11.301,
    viewBox: "0 0 13.301 11.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.35,
      top: 0.35,
      width: 13.301,
      height: 11.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.19 0.19 C 5.444 -0.063 5.856 -0.063 6.11 0.19 C 6.364 0.444 6.364 0.856 6.11 1.11 L 1.57 5.65 L 6.11 10.19 C 6.364 10.444 6.364 10.856 6.11 11.11 C 5.856 11.364 5.444 11.364 5.19 11.11 L 0.19 6.11 C -0.063 5.856 -0.063 5.444 0.19 5.19 L 5.19 0.19 Z M 12.19 0.19 C 12.444 -0.063 12.856 -0.063 13.11 0.19 C 13.364 0.444 13.364 0.856 13.11 1.11 L 8.57 5.65 L 13.11 10.19 C 13.364 10.444 13.364 10.856 13.11 11.11 C 12.856 11.364 12.444 11.364 12.19 11.11 L 7.19 6.11 C 6.937 5.856 6.937 5.444 7.19 5.19 L 12.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body64 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.301,
    height: 13.301,
    viewBox: "0 0 11.301 13.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.35,
      top: 0.35,
      width: 11.301,
      height: 13.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.19 7.19 C 10.444 6.937 10.856 6.937 11.11 7.19 C 11.364 7.444 11.364 7.856 11.11 8.11 L 6.11 13.11 C 5.856 13.364 5.444 13.364 5.19 13.11 L 0.19 8.11 C -0.063 7.856 -0.063 7.444 0.19 7.19 C 0.444 6.937 0.856 6.937 1.11 7.19 L 5.65 11.73 L 10.19 7.19 Z M 10.19 0.19 C 10.444 -0.063 10.856 -0.063 11.11 0.19 C 11.364 0.444 11.364 0.856 11.11 1.11 L 6.11 6.11 C 5.856 6.364 5.444 6.364 5.19 6.11 L 0.19 1.11 C -0.063 0.856 -0.063 0.444 0.19 0.19 C 0.444 -0.063 0.856 -0.063 1.11 0.19 L 5.65 4.73 L 10.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body65 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 14,
      height: 12,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.301,
    height: 11.301,
    viewBox: "0 0 13.301 11.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.35,
      top: 0.35,
      width: 13.301,
      height: 11.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.19 0.19 C 0.444 -0.063 0.856 -0.063 1.11 0.19 L 6.11 5.19 C 6.364 5.444 6.364 5.856 6.11 6.11 L 1.11 11.11 C 0.856 11.364 0.444 11.364 0.19 11.11 C -0.063 10.856 -0.063 10.444 0.19 10.19 L 4.73 5.65 L 0.19 1.11 C -0.063 0.856 -0.063 0.444 0.19 0.19 Z M 7.19 0.19 C 7.444 -0.063 7.856 -0.063 8.11 0.19 L 13.11 5.19 C 13.364 5.444 13.364 5.856 13.11 6.11 L 8.11 11.11 C 7.856 11.364 7.444 11.364 7.19 11.11 C 6.937 10.856 6.937 10.444 7.19 10.19 L 11.73 5.65 L 7.19 1.11 C 6.937 0.856 6.937 0.444 7.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body66 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.301,
    height: 13.300,
    viewBox: "0 0 11.301 13.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.35,
      top: 0.35,
      width: 11.301,
      height: 13.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.19 7.19 C 5.444 6.936 5.856 6.936 6.11 7.19 L 11.11 12.19 C 11.364 12.444 11.364 12.856 11.11 13.11 C 10.856 13.364 10.444 13.364 10.19 13.11 L 5.65 8.57 L 1.11 13.11 C 0.856 13.364 0.444 13.364 0.19 13.11 C -0.063 12.856 -0.063 12.444 0.19 12.19 L 5.19 7.19 Z M 5.293 0.107 C 5.545 -0.059 5.888 -0.032 6.11 0.19 L 11.11 5.19 C 11.364 5.444 11.364 5.856 11.11 6.11 C 10.856 6.364 10.444 6.364 10.19 6.11 L 5.65 1.57 L 1.11 6.11 C 0.856 6.364 0.444 6.364 0.19 6.11 C -0.063 5.856 -0.063 5.444 0.19 5.19 L 5.19 0.19 L 5.293 0.107 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body67 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 18,
      height: 12,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.301,
    height: 11.301,
    viewBox: "0 0 17.301 11.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.35,
      top: 0.35,
      width: 17.301,
      height: 11.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.19 0.19 C 5.444 -0.063 5.856 -0.063 6.11 0.19 C 6.364 0.444 6.364 0.856 6.11 1.11 L 1.57 5.65 L 6.11 10.19 C 6.364 10.444 6.364 10.856 6.11 11.11 C 5.856 11.364 5.444 11.364 5.19 11.11 L 0.19 6.11 C -0.063 5.856 -0.063 5.444 0.19 5.19 L 5.19 0.19 Z M 11.19 0.19 C 11.444 -0.063 11.856 -0.063 12.11 0.19 L 17.11 5.19 C 17.364 5.444 17.364 5.856 17.11 6.11 L 12.11 11.11 C 11.856 11.364 11.444 11.364 11.19 11.11 C 10.937 10.856 10.937 10.444 11.19 10.19 L 15.73 5.65 L 11.19 1.11 C 10.937 0.856 10.937 0.444 11.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body68 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 18,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.301,
    height: 17.300,
    viewBox: "0 0 11.301 17.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.35,
      top: 0.35,
      width: 11.301,
      height: 17.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.19 11.19 C 10.444 10.936 10.856 10.936 11.11 11.19 C 11.364 11.444 11.364 11.856 11.11 12.11 L 6.11 17.11 C 5.856 17.364 5.444 17.364 5.19 17.11 L 0.19 12.11 C -0.063 11.856 -0.063 11.444 0.19 11.19 C 0.444 10.936 0.856 10.936 1.11 11.19 L 5.65 15.73 L 10.19 11.19 Z M 5.293 0.107 C 5.545 -0.059 5.888 -0.032 6.11 0.19 L 11.11 5.19 C 11.364 5.444 11.364 5.856 11.11 6.11 C 10.856 6.364 10.444 6.364 10.19 6.11 L 5.65 1.57 L 1.11 6.11 C 0.856 6.364 0.444 6.364 0.19 6.11 C -0.063 5.856 -0.063 5.444 0.19 5.19 L 5.19 0.19 L 5.293 0.107 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body69 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 6,
      height: 10,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.500,
    height: 10,
    viewBox: "0 0 5.500 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.25,
      top: 0,
      width: 5.5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.353 0.146 C 5.158 -0.049 4.842 -0.049 4.646 0.146 L 0.146 4.646 C -0.049 4.842 -0.049 5.158 0.146 5.353 L 4.646 9.853 C 4.842 10.049 5.158 10.049 5.353 9.853 C 5.549 9.658 5.549 9.342 5.353 9.146 L 1.207 5 L 5.353 0.853 C 5.549 0.658 5.549 0.342 5.353 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body70 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 10,
      height: 6,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5.500,
    viewBox: "0 0 10 5.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.25,
      width: 10,
      height: 5.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.725 5.418 C 4.919 5.546 5.183 5.524 5.353 5.353 L 9.853 0.853 C 10.049 0.658 10.049 0.342 9.853 0.146 C 9.658 -0.049 9.342 -0.049 9.146 0.146 L 5 4.293 L 0.853 0.146 C 0.658 -0.049 0.342 -0.049 0.146 0.146 C -0.049 0.342 -0.049 0.658 0.146 0.853 L 4.646 5.353 L 4.725 5.418 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body71 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 6,
      height: 10,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.500,
    height: 10,
    viewBox: "0 0 5.500 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.25,
      top: 0,
      width: 5.5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.853 0.146 L 5.353 4.646 C 5.549 4.842 5.549 5.158 5.353 5.353 L 0.853 9.853 C 0.658 10.049 0.342 10.049 0.146 9.853 C -0.049 9.658 -0.049 9.342 0.146 9.146 L 4.293 5 L 0.146 0.853 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body72 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 10,
      height: 6,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5.500,
    viewBox: "0 0 10 5.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.25,
      width: 10,
      height: 5.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.725 0.082 C 4.919 -0.046 5.183 -0.024 5.353 0.147 L 9.853 4.647 C 10.049 4.842 10.049 5.158 9.853 5.354 C 9.658 5.549 9.342 5.549 9.146 5.354 L 5 1.207 L 0.853 5.354 C 0.658 5.549 0.342 5.549 0.146 5.354 C -0.049 5.158 -0.049 4.842 0.146 4.647 L 4.646 0.147 L 4.725 0.082 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body73 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 10,
      height: 10,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 8.500,
    viewBox: "0 0 10 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.75,
      width: 10,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.896 0.146 C 4.092 -0.049 4.408 -0.049 4.604 0.146 C 4.799 0.342 4.799 0.658 4.604 0.853 L 1.207 4.25 L 4.604 7.646 C 4.799 7.842 4.799 8.158 4.604 8.353 C 4.408 8.549 4.092 8.549 3.896 8.353 L 0.146 4.603 C 0.053 4.51 0 4.383 0 4.25 C 0 4.117 0.053 3.99 0.146 3.896 L 3.896 0.146 Z M 9.146 0.146 C 9.342 -0.049 9.658 -0.049 9.854 0.146 C 10.049 0.342 10.049 0.658 9.854 0.853 L 6.457 4.25 L 9.854 7.646 C 10.049 7.842 10.049 8.158 9.854 8.353 C 9.658 8.549 9.342 8.549 9.146 8.353 L 5.396 4.603 C 5.303 4.51 5.25 4.383 5.25 4.25 C 5.25 4.117 5.303 3.99 5.396 3.896 L 9.146 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body74 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 10,
      height: 10,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.500,
    height: 10,
    viewBox: "0 0 8.500 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0,
      width: 8.5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.646 5.396 C 7.842 5.201 8.158 5.201 8.353 5.396 C 8.549 5.592 8.549 5.908 8.353 6.103 L 4.603 9.853 C 4.408 10.049 4.092 10.049 3.896 9.853 L 0.146 6.103 C -0.049 5.908 -0.049 5.592 0.146 5.396 C 0.342 5.201 0.658 5.201 0.853 5.396 L 4.25 8.793 L 7.646 5.396 Z M 7.646 0.146 C 7.842 -0.049 8.158 -0.049 8.353 0.146 C 8.549 0.342 8.549 0.658 8.353 0.853 L 4.603 4.603 C 4.408 4.799 4.092 4.799 3.896 4.603 L 0.146 0.853 C -0.049 0.658 -0.049 0.342 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.853 0.146 L 4.25 3.543 L 7.646 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body75 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 10,
      height: 10,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 8.500,
    viewBox: "0 0 10 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.75,
      width: 10,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.853 0.146 L 4.603 3.896 C 4.697 3.99 4.75 4.117 4.75 4.25 C 4.75 4.383 4.697 4.51 4.603 4.603 L 0.853 8.353 C 0.658 8.549 0.342 8.549 0.146 8.353 C -0.049 8.158 -0.049 7.842 0.146 7.646 L 3.543 4.25 L 0.146 0.853 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z M 5.396 0.146 C 5.592 -0.049 5.908 -0.049 6.103 0.146 L 9.853 3.896 C 9.947 3.99 10 4.117 10 4.25 C 10 4.383 9.947 4.51 9.853 4.603 L 6.103 8.353 C 5.908 8.549 5.592 8.549 5.396 8.353 C 5.201 8.158 5.201 7.842 5.396 7.646 L 8.793 4.25 L 5.396 0.853 C 5.201 0.658 5.201 0.342 5.396 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body76 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 10,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.500,
    height: 10.000,
    viewBox: "0 0 8.500 10.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 2,
      width: 8.5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.975 5.332 C 4.169 5.204 4.433 5.226 4.603 5.397 L 8.353 9.147 C 8.549 9.342 8.549 9.658 8.353 9.854 C 8.158 10.049 7.842 10.049 7.646 9.854 L 4.25 6.457 L 0.853 9.854 C 0.658 10.049 0.342 10.049 0.146 9.854 C -0.049 9.658 -0.049 9.342 0.146 9.147 L 3.896 5.397 L 3.975 5.332 Z M 3.975 0.082 C 4.169 -0.046 4.433 -0.024 4.603 0.147 L 8.353 3.897 C 8.549 4.092 8.549 4.408 8.353 4.604 C 8.158 4.799 7.842 4.799 7.646 4.604 L 4.25 1.207 L 0.853 4.604 C 0.658 4.799 0.342 4.799 0.146 4.604 C -0.049 4.408 -0.049 4.092 0.146 3.897 L 3.896 0.147 L 3.975 0.082 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body77 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 13,
      height: 10,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 8.500,
    viewBox: "0 0 13 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.75,
      width: 13,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.896 0.146 C 4.092 -0.049 4.408 -0.049 4.603 0.146 C 4.799 0.342 4.799 0.658 4.603 0.853 L 1.207 4.25 L 4.603 7.646 C 4.799 7.842 4.799 8.158 4.603 8.353 C 4.408 8.549 4.092 8.549 3.896 8.353 L 0.146 4.603 C -0.049 4.408 -0.049 4.092 0.146 3.896 L 3.896 0.146 Z M 8.396 0.146 C 8.592 -0.049 8.908 -0.049 9.103 0.146 L 12.853 3.896 C 13.049 4.092 13.049 4.408 12.853 4.603 L 9.103 8.353 C 8.908 8.549 8.592 8.549 8.396 8.353 C 8.201 8.158 8.201 7.842 8.396 7.646 L 11.793 4.25 L 8.396 0.853 C 8.201 0.658 8.201 0.342 8.396 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body78 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 9,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.500,
    height: 13.000,
    viewBox: "0 0 8.500 13.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.25,
      top: 0.5,
      width: 8.5,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.646 8.397 C 7.842 8.201 8.158 8.201 8.353 8.397 C 8.549 8.592 8.549 8.908 8.353 9.104 L 4.603 12.854 C 4.408 13.049 4.092 13.049 3.896 12.854 L 0.146 9.104 C -0.049 8.908 -0.049 8.592 0.146 8.397 C 0.342 8.201 0.658 8.201 0.853 8.397 L 4.25 11.793 L 7.646 8.397 Z M 3.975 0.082 C 4.169 -0.046 4.433 -0.024 4.603 0.147 L 8.353 3.897 C 8.549 4.092 8.549 4.408 8.353 4.604 C 8.158 4.799 7.842 4.799 7.646 4.604 L 4.25 1.207 L 0.853 4.604 C 0.658 4.799 0.342 4.799 0.146 4.604 C -0.049 4.408 -0.049 4.092 0.146 3.897 L 3.896 0.147 L 3.975 0.082 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body79 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.301,
    height: 13.301,
    viewBox: "0 0 7.301 13.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.35,
      top: 0.35,
      width: 7.301,
      height: 13.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.11 0.19 C 6.857 -0.063 6.444 -0.063 6.19 0.19 L 0.19 6.19 C 0.069 6.312 0 6.478 0 6.65 C 0 6.823 0.069 6.988 0.19 7.11 L 6.19 13.11 C 6.444 13.364 6.857 13.364 7.11 13.11 C 7.364 12.856 7.364 12.444 7.11 12.19 L 1.57 6.65 L 7.11 1.11 C 7.364 0.856 7.364 0.444 7.11 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Variant=chevron-left, Double=False, Tight=False, Thick=True, Small=False
    "variant=chevron-left|small=false|double=false|thick=true|tight=false": __body0,
    // figma: Variant=chevron-down, Double=False, Tight=False, Thick=True, Small=False
    "variant=chevron-down|small=false|double=false|thick=true|tight=false": __body1,
    // figma: Variant=chevron-right, Double=False, Tight=False, Thick=True, Small=False
    "variant=chevron-right|small=false|double=false|thick=true|tight=false": __body2,
    // figma: Variant=chevron-up, Double=False, Tight=False, Thick=True, Small=False
    "variant=chevron-up|small=false|double=false|thick=true|tight=false": __body3,
    // figma: Variant=chevron-left-double, Double=True, Tight=False, Thick=True, Small=False
    "variant=chevron-left-double|small=false|double=true|thick=true|tight=false": __body4,
    // figma: Variant=chevron-down-double, Double=True, Tight=False, Thick=True, Small=False
    "variant=chevron-down-double|small=false|double=true|thick=true|tight=false": __body5,
    // figma: Variant=chevron-right-double, Double=True, Tight=False, Thick=True, Small=False
    "variant=chevron-right-double|small=false|double=true|thick=true|tight=false": __body6,
    // figma: Variant=chevron-up-double, Double=True, Tight=False, Thick=True, Small=False
    "variant=chevron-up-double|small=false|double=true|thick=true|tight=false": __body7,
    // figma: Variant=chevron-selector-horizontal, Double=False, Tight=False, Thick=True, Small=False
    "variant=chevron-selector-horizontal|small=false|double=false|thick=true|tight=false": __body8,
    // figma: Variant=chevron-selector-vertical, Double=False, Tight=False, Thick=True, Small=False
    "variant=chevron-selector-vertical|small=false|double=false|thick=true|tight=false": __body9,
    // figma: Variant=chevron-left, Double=False, Tight=False, Thick=True, Small=True
    "variant=chevron-left|small=true|double=false|thick=true|tight=false": __body10,
    // figma: Variant=chevron-down, Double=False, Tight=False, Thick=True, Small=True
    "variant=chevron-down|small=true|double=false|thick=true|tight=false": __body11,
    // figma: Variant=chevron-right, Double=False, Tight=False, Thick=True, Small=True
    "variant=chevron-right|small=true|double=false|thick=true|tight=false": __body12,
    // figma: Variant=chevron-up, Double=False, Tight=False, Thick=True, Small=True
    "variant=chevron-up|small=true|double=false|thick=true|tight=false": __body13,
    // figma: Variant=chevron-left-double, Double=True, Tight=False, Thick=True, Small=True
    "variant=chevron-left-double|small=true|double=true|thick=true|tight=false": __body14,
    // figma: Variant=chevron-down-double, Double=True, Tight=False, Thick=True, Small=True
    "variant=chevron-down-double|small=true|double=true|thick=true|tight=false": __body15,
    // figma: Variant=chevron-right-double, Double=True, Tight=False, Thick=True, Small=True
    "variant=chevron-right-double|small=true|double=true|thick=true|tight=false": __body16,
    // figma: Variant=chevron-up-double, Double=True, Tight=False, Thick=True, Small=True
    "variant=chevron-up-double|small=true|double=true|thick=true|tight=false": __body17,
    // figma: Variant=chevron-selector-horizontal, Double=False, Tight=False, Thick=True, Small=True
    "variant=chevron-selector-horizontal|small=true|double=false|thick=true|tight=false": __body18,
    // figma: Variant=chevron-selector-vertical, Double=False, Tight=False, Thick=True, Small=True
    "variant=chevron-selector-vertical|small=true|double=false|thick=true|tight=false": __body19,
    // figma: Variant=chevron-left, Double=False, Tight=False, Thick=False, Small=False
    "variant=chevron-left|small=false|double=false|thick=false|tight=false": __body20,
    // figma: Variant=chevron-down, Double=False, Tight=False, Thick=False, Small=False
    "variant=chevron-down|small=false|double=false|thick=false|tight=false": __body21,
    // figma: Variant=chevron-right, Double=False, Tight=False, Thick=False, Small=False
    "variant=chevron-right|small=false|double=false|thick=false|tight=false": __body22,
    // figma: Variant=chevron-up, Double=False, Tight=False, Thick=False, Small=False
    "variant=chevron-up|small=false|double=false|thick=false|tight=false": __body23,
    // figma: Variant=chevron-left-double, Double=True, Tight=False, Thick=False, Small=False
    "variant=chevron-left-double|small=false|double=true|thick=false|tight=false": __body24,
    // figma: Variant=chevron-down-double, Double=True, Tight=False, Thick=False, Small=False
    "variant=chevron-down-double|small=false|double=true|thick=false|tight=false": __body25,
    // figma: Variant=chevron-right-double, Double=True, Tight=False, Thick=False, Small=False
    "variant=chevron-right-double|small=false|double=true|thick=false|tight=false": __body26,
    // figma: Variant=chevron-up-double, Double=True, Tight=False, Thick=False, Small=False
    "variant=chevron-up-double|small=false|double=true|thick=false|tight=false": __body27,
    // figma: Variant=chevron-selector-horizontal, Double=False, Tight=False, Thick=False, Small=False
    "variant=chevron-selector-horizontal|small=false|double=false|thick=false|tight=false": __body28,
    // figma: Variant=chevron-selector-vertical, Double=False, Tight=False, Thick=False, Small=False
    "variant=chevron-selector-vertical|small=false|double=false|thick=false|tight=false": __body29,
    // figma: Variant=chevron-left, Double=False, Tight=False, Thick=False, Small=True
    "variant=chevron-left|small=true|double=false|thick=false|tight=false": __body30,
    // figma: Variant=chevron-down, Double=False, Tight=False, Thick=False, Small=True
    "variant=chevron-down|small=true|double=false|thick=false|tight=false": __body31,
    // figma: Variant=chevron-right, Double=False, Tight=False, Thick=False, Small=True
    "variant=chevron-right|small=true|double=false|thick=false|tight=false": __body32,
    // figma: Variant=chevron-up, Double=False, Tight=False, Thick=False, Small=True
    "variant=chevron-up|small=true|double=false|thick=false|tight=false": __body33,
    // figma: Variant=chevron-left-double, Double=True, Tight=False, Thick=False, Small=True
    "variant=chevron-left-double|small=true|double=true|thick=false|tight=false": __body34,
    // figma: Variant=chevron-down-double, Double=True, Tight=False, Thick=False, Small=True
    "variant=chevron-down-double|small=true|double=true|thick=false|tight=false": __body35,
    // figma: Variant=chevron-right-double, Double=True, Tight=False, Thick=False, Small=True
    "variant=chevron-right-double|small=true|double=true|thick=false|tight=false": __body36,
    // figma: Variant=chevron-up-double, Double=True, Tight=False, Thick=False, Small=True
    "variant=chevron-up-double|small=true|double=true|thick=false|tight=false": __body37,
    // figma: Variant=chevron-selector-horizontal, Double=False, Tight=False, Thick=False, Small=True
    "variant=chevron-selector-horizontal|small=true|double=false|thick=false|tight=false": __body38,
    // figma: Variant=chevron-selector-vertical, Double=False, Tight=False, Thick=False, Small=True
    "variant=chevron-selector-vertical|small=true|double=false|thick=false|tight=false": __body39,
    // figma: Variant=chevron-left, Double=False, Tight=True, Thick=True, Small=False
    "variant=chevron-left|small=false|double=false|thick=true|tight=true": __body40,
    // figma: Variant=chevron-down, Double=False, Tight=True, Thick=True, Small=False
    "variant=chevron-down|small=false|double=false|thick=true|tight=true": __body41,
    // figma: Variant=chevron-right, Double=False, Tight=True, Thick=True, Small=False
    "variant=chevron-right|small=false|double=false|thick=true|tight=true": __body42,
    // figma: Variant=chevron-up, Double=False, Tight=True, Thick=True, Small=False
    "variant=chevron-up|small=false|double=false|thick=true|tight=true": __body43,
    // figma: Variant=chevron-left-double, Double=True, Tight=True, Thick=True, Small=False
    "variant=chevron-left-double|small=false|double=true|thick=true|tight=true": __body44,
    // figma: Variant=chevron-down-double, Double=True, Tight=True, Thick=True, Small=False
    "variant=chevron-down-double|small=false|double=true|thick=true|tight=true": __body45,
    // figma: Variant=chevron-right-double, Double=True, Tight=True, Thick=True, Small=False
    "variant=chevron-right-double|small=false|double=true|thick=true|tight=true": __body46,
    // figma: Variant=chevron-up-double, Double=True, Tight=True, Thick=True, Small=False
    "variant=chevron-up-double|small=false|double=true|thick=true|tight=true": __body47,
    // figma: Variant=chevron-selector-horizontal, Double=False, Tight=True, Thick=True, Small=False
    "variant=chevron-selector-horizontal|small=false|double=false|thick=true|tight=true": __body48,
    // figma: Variant=chevron-selector-vertical, Double=False, Tight=True, Thick=True, Small=False
    "variant=chevron-selector-vertical|small=false|double=false|thick=true|tight=true": __body49,
    // figma: Variant=chevron-left, Double=False, Tight=True, Thick=True, Small=True
    "variant=chevron-left|small=true|double=false|thick=true|tight=true": __body50,
    // figma: Variant=chevron-down, Double=False, Tight=True, Thick=True, Small=True
    "variant=chevron-down|small=true|double=false|thick=true|tight=true": __body51,
    // figma: Variant=chevron-right, Double=False, Tight=True, Thick=True, Small=True
    "variant=chevron-right|small=true|double=false|thick=true|tight=true": __body52,
    // figma: Variant=chevron-up, Double=False, Tight=True, Thick=True, Small=True
    "variant=chevron-up|small=true|double=false|thick=true|tight=true": __body53,
    // figma: Variant=chevron-left-double, Double=True, Tight=True, Thick=True, Small=True
    "variant=chevron-left-double|small=true|double=true|thick=true|tight=true": __body54,
    // figma: Variant=chevron-down-double, Double=True, Tight=True, Thick=True, Small=True
    "variant=chevron-down-double|small=true|double=true|thick=true|tight=true": __body55,
    // figma: Variant=chevron-right-double, Double=True, Tight=True, Thick=True, Small=True
    "variant=chevron-right-double|small=true|double=true|thick=true|tight=true": __body56,
    // figma: Variant=chevron-up-double, Double=True, Tight=True, Thick=True, Small=True
    "variant=chevron-up-double|small=true|double=true|thick=true|tight=true": __body57,
    // figma: Variant=chevron-selector-horizontal, Double=False, Tight=True, Thick=True, Small=True
    "variant=chevron-selector-horizontal|small=true|double=false|thick=true|tight=true": __body58,
    // figma: Variant=chevron-selector-vertical, Double=False, Tight=True, Thick=True, Small=True
    "variant=chevron-selector-vertical|small=true|double=false|thick=true|tight=true": __body59,
    // figma: Variant=chevron-down, Double=False, Tight=True, Thick=False, Small=False
    "variant=chevron-down|small=false|double=false|thick=false|tight=true": __body60,
    // figma: Variant=chevron-right, Double=False, Tight=True, Thick=False, Small=False
    "variant=chevron-right|small=false|double=false|thick=false|tight=true": __body61,
    // figma: Variant=chevron-up, Double=False, Tight=True, Thick=False, Small=False
    "variant=chevron-up|small=false|double=false|thick=false|tight=true": __body62,
    // figma: Variant=chevron-left-double, Double=True, Tight=True, Thick=False, Small=False
    "variant=chevron-left-double|small=false|double=true|thick=false|tight=true": __body63,
    // figma: Variant=chevron-down-double, Double=True, Tight=True, Thick=False, Small=False
    "variant=chevron-down-double|small=false|double=true|thick=false|tight=true": __body64,
    // figma: Variant=chevron-right-double, Double=True, Tight=True, Thick=False, Small=False
    "variant=chevron-right-double|small=false|double=true|thick=false|tight=true": __body65,
    // figma: Variant=chevron-up-double, Double=True, Tight=True, Thick=False, Small=False
    "variant=chevron-up-double|small=false|double=true|thick=false|tight=true": __body66,
    // figma: Variant=chevron-selector-horizontal, Double=False, Tight=True, Thick=False, Small=False
    "variant=chevron-selector-horizontal|small=false|double=false|thick=false|tight=true": __body67,
    // figma: Variant=chevron-selector-vertical, Double=False, Tight=True, Thick=False, Small=False
    "variant=chevron-selector-vertical|small=false|double=false|thick=false|tight=true": __body68,
    // figma: Variant=chevron-left, Double=False, Tight=True, Thick=False, Small=True
    "variant=chevron-left|small=true|double=false|thick=false|tight=true": __body69,
    // figma: Variant=chevron-down, Double=False, Tight=True, Thick=False, Small=True
    "variant=chevron-down|small=true|double=false|thick=false|tight=true": __body70,
    // figma: Variant=chevron-right, Double=False, Tight=True, Thick=False, Small=True
    "variant=chevron-right|small=true|double=false|thick=false|tight=true": __body71,
    // figma: Variant=chevron-up, Double=False, Tight=True, Thick=False, Small=True
    "variant=chevron-up|small=true|double=false|thick=false|tight=true": __body72,
    // figma: Variant=chevron-left-double, Double=True, Tight=True, Thick=False, Small=True
    "variant=chevron-left-double|small=true|double=true|thick=false|tight=true": __body73,
    // figma: Variant=chevron-down-double, Double=True, Tight=True, Thick=False, Small=True
    "variant=chevron-down-double|small=true|double=true|thick=false|tight=true": __body74,
    // figma: Variant=chevron-right-double, Double=True, Tight=True, Thick=False, Small=True
    "variant=chevron-right-double|small=true|double=true|thick=false|tight=true": __body75,
    // figma: Variant=chevron-up-double, Double=True, Tight=True, Thick=False, Small=True
    "variant=chevron-up-double|small=true|double=true|thick=false|tight=true": __body76,
    // figma: Variant=chevron-selector-horizontal, Double=False, Tight=True, Thick=False, Small=True
    "variant=chevron-selector-horizontal|small=true|double=false|thick=false|tight=true": __body77,
    // figma: Variant=chevron-selector-vertical, Double=False, Tight=True, Thick=False, Small=True
    "variant=chevron-selector-vertical|small=true|double=false|thick=false|tight=true": __body78,
    // figma: Variant=chevron-left, Double=False, Tight=True, Thick=False, Small=False
    "variant=chevron-left|small=false|double=false|thick=false|tight=true": __body79
  };
  return (__impls[__vkey_IconChevron(props)] ?? __body0)();
}

// figma node: 247:15356 Button/More (2 variants)
const __venc_ButtonMore = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ButtonMore = p => "prop=" + __venc_ButtonMore(p.prop) + '|' + "fill=" + __venc_ButtonMore(p.fill);
function ButtonMore(_p = {}) {
  const props = {
    ..._p,
    prop: _p.prop ?? "moreFill",
    fill: _p.fill ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 361,
      borderRadius: 4,
      background: "linear-gradient(var(--gray-gray2-f8),var(--gray-gray2-f8)), linear-gradient(var(--background-cool-neutral-cool-neutral3),var(--background-cool-neutral-cool-neutral3))",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 0px 12px 0px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "더보기"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 6,
      height: 11,
      flexShrink: 0,
      color: "rgb(118,118,118)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevron, {
    variant: "chevron-right",
    small: false,
    double: false,
    thick: true,
    tight: true,
    style: {
      transform: "scale(0.750, 0.786)",
      transformOrigin: "0 0"
    }
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 361,
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 0px 6px 0px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "더보기"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 6,
      height: 11,
      flexShrink: 0,
      color: "rgb(118,118,118)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevron, {
    variant: "chevron-right",
    small: false,
    double: false,
    thick: true,
    tight: true,
    style: {
      transform: "scale(0.750, 0.786)",
      transformOrigin: "0 0"
    }
  })));
  const __impls = {
    // figma: 속성 1=moreFill, Fill=True
    "prop=moreFill|fill=true": __body0,
    // figma: 속성 1=more, Fill=False
    "prop=more|fill=false": __body1
  };
  return (__impls[__vkey_ButtonMore(props)] ?? __body0)();
}

// figma node: 554:8113 AD-mark (2 variants)
const __venc_ADMark = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ADMark = p => "color=" + __venc_ADMark(p.color);
function ADMark(_p = {}) {
  const props = {
    ..._p,
    color: _p.color ?? "black"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 25,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 4px",
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
      fontWeight: 700,
      fontSize: 11.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgba(0,0,0,0.3)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "AD"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 25,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.52)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.52,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-white)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "AD"));
  const __impls = {
    // figma: Color=Black
    "color=black": __body0,
    // figma: Color=White
    "color=white": __body1
  };
  return (__impls[__vkey_ADMark(props)] ?? __body0)();
}

// figma node: 579:9173 Icon/Arrow/Narrow (80 variants)
const __venc_IconArrowNarrow = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconArrowNarrow = p => "variant=" + __venc_IconArrowNarrow(p.variant) + '|' + "type=" + __venc_IconArrowNarrow(p.type) + '|' + "small=" + __venc_IconArrowNarrow(p.small) + '|' + "thick=" + __venc_IconArrowNarrow(p.thick);
function IconArrowNarrow(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "arrow-left",
    type: _p.type ?? "narrow",
    small: _p.small ?? false,
    thick: _p.thick ?? true
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
    width: 17.000,
    height: 14.857,
    viewBox: "0 0 17.000 14.857",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.5,
      top: 4.572,
      width: 17,
      height: 14.857
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.722 0.293 C 7.112 -0.098 7.745 -0.098 8.136 0.293 C 8.526 0.683 8.526 1.316 8.136 1.707 L 3.414 6.429 L 16 6.429 C 16.552 6.429 17 6.876 17 7.429 C 17 7.981 16.552 8.429 16 8.429 L 3.414 8.429 L 8.136 13.15 C 8.526 13.541 8.526 14.174 8.136 14.564 C 7.745 14.955 7.112 14.955 6.722 14.564 L 0.293 8.136 C -0.098 7.745 -0.098 7.112 0.293 6.722 L 6.722 0.293 Z",
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
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.5,
      top: 5.5,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.293 0.293 C 11.683 -0.098 12.317 -0.098 12.707 0.293 C 13.098 0.683 13.098 1.317 12.707 1.707 L 3.414 11 L 12 11 C 12.552 11 13 11.448 13 12 C 13 12.552 12.552 13 12 13 L 1 13 C 0.448 13 0 12.552 0 12 L 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 L 2 9.586 L 11.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 14.857,
    height: 17.000,
    viewBox: "0 0 14.857 17.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.572,
      top: 3.5,
      width: 14.857,
      height: 17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.429 1 C 6.429 0.448 6.876 0 7.429 0 C 7.981 0 8.429 0.448 8.429 1 L 8.429 13.586 L 13.15 8.864 C 13.541 8.474 14.174 8.474 14.564 8.864 C 14.955 9.255 14.955 9.888 14.564 10.278 L 8.136 16.707 C 7.745 17.098 7.112 17.097 6.722 16.707 L 0.293 10.278 C -0.098 9.888 -0.098 9.255 0.293 8.864 C 0.683 8.474 1.316 8.474 1.707 8.864 L 6.429 13.586 L 6.429 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.5,
      top: 5.5,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.293 0.293 C 0.683 -0.098 1.317 -0.098 1.707 0.293 L 11 9.586 L 11 1 C 11 0.448 11.448 0 12 0 C 12.552 0 13 0.448 13 1 L 13 12 C 13 12.552 12.552 13 12 13 L 1 13 C 0.448 13 0 12.552 0 12 C 0 11.448 0.448 11 1 11 L 9.586 11 L 0.293 1.707 C -0.098 1.317 -0.098 0.683 0.293 0.293 Z",
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
    width: 17,
    height: 14.857,
    viewBox: "0 0 17 14.857",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.5,
      top: 4.572,
      width: 17,
      height: 14.857
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.864 0.293 C 9.255 -0.098 9.888 -0.098 10.278 0.293 L 16.707 6.722 C 16.895 6.909 17 7.163 17 7.429 C 17 7.694 16.895 7.948 16.707 8.136 L 10.278 14.564 C 9.888 14.955 9.255 14.955 8.864 14.564 C 8.474 14.174 8.474 13.541 8.864 13.15 L 13.586 8.429 L 1 8.429 C 0.448 8.429 0 7.981 0 7.429 C 0 6.876 0.448 6.429 1 6.429 L 13.586 6.429 L 8.864 1.707 C 8.474 1.316 8.474 0.683 8.864 0.293 Z",
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
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.5,
      top: 5.5,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13 10.9 C 13 11.452 12.552 11.9 12 11.9 C 11.448 11.9 11 11.452 11 10.9 L 11 3.414 L 1.707 12.707 C 1.316 13.098 0.683 13.098 0.293 12.707 C -0.098 12.317 -0.098 11.683 0.293 11.293 L 9.586 2 L 2.1 2 C 1.547 2 1.1 1.552 1.1 1 C 1.1 0.448 1.547 0 2.1 0 L 12 0 C 12.552 0 13 0.448 13 1 L 13 10.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 14.857,
    height: 17.000,
    viewBox: "0 0 14.857 17.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 14.857,
      height: 17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.429 16 L 6.429 3.414 L 1.707 8.135 C 1.316 8.526 0.683 8.526 0.293 8.135 C -0.098 7.745 -0.098 7.112 0.293 6.721 L 6.722 0.293 L 6.798 0.224 C 7.191 -0.096 7.77 -0.073 8.136 0.293 L 14.564 6.721 C 14.955 7.112 14.955 7.745 14.564 8.135 C 14.174 8.526 13.541 8.526 13.15 8.135 L 8.429 3.414 L 8.429 16 C 8.429 16.552 7.981 17 7.429 17 C 6.876 17 6.429 16.552 6.429 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10.9 L 0 1 C 0 0.448 0.448 0 1 0 L 10.9 0 C 11.452 0 11.9 0.448 11.9 1 C 11.9 1.552 11.452 2 10.9 2 L 3.414 2 L 12.707 11.293 C 13.098 11.683 13.098 12.317 12.707 12.707 C 12.317 13.098 11.683 13.098 11.293 12.707 L 2 3.414 L 2 10.9 C 2 11.452 1.552 11.9 1 11.9 C 0.448 11.9 0 11.452 0 10.9 Z",
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
    width: 16.301,
    height: 14.157,
    viewBox: "0 0 16.301 14.157",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.85,
      top: 4.921,
      width: 16.301,
      height: 14.157
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.619 0.19 C 6.873 -0.063 7.285 -0.063 7.539 0.19 C 7.793 0.444 7.793 0.856 7.539 1.11 L 2.221 6.429 L 15.65 6.429 C 16.009 6.429 16.301 6.72 16.301 7.079 C 16.301 7.438 16.009 7.728 15.65 7.728 L 2.22 7.728 L 7.539 13.048 C 7.792 13.301 7.792 13.713 7.539 13.967 C 7.285 14.221 6.873 14.221 6.619 13.967 L 0.19 7.539 C -0.063 7.285 -0.063 6.873 0.19 6.619 L 6.619 0.19 Z",
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
    width: 12.301,
    height: 12.301,
    viewBox: "0 0 12.301 12.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.85,
      top: 5.85,
      width: 12.301,
      height: 12.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.19 0.19 C 11.444 -0.063 11.857 -0.063 12.11 0.19 C 12.364 0.444 12.364 0.857 12.11 1.11 L 2.221 11 L 11.65 11 C 12.009 11 12.301 11.291 12.301 11.65 C 12.301 12.009 12.009 12.301 11.65 12.301 L 0.65 12.301 C 0.291 12.301 0 12.009 0 11.65 L 0 0.65 C 0 0.291 0.291 0 0.65 0 C 1.009 0 1.301 0.291 1.301 0.65 L 1.301 10.08 L 11.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 14.157,
    height: 16.301,
    viewBox: "0 0 14.157 16.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.921,
      top: 3.85,
      width: 14.157,
      height: 16.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.429 0.65 C 6.429 0.291 6.72 0 7.079 0 C 7.438 0 7.728 0.291 7.728 0.65 L 7.728 14.081 L 13.048 8.762 C 13.301 8.508 13.713 8.508 13.967 8.762 C 14.221 9.016 14.221 9.428 13.967 9.682 L 7.539 16.11 C 7.285 16.364 6.873 16.364 6.619 16.11 L 0.19 9.682 C -0.063 9.428 -0.063 9.016 0.19 8.762 C 0.444 8.508 0.856 8.508 1.11 8.762 L 6.429 14.08 L 6.429 0.65 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 12.301,
    height: 12.301,
    viewBox: "0 0 12.301 12.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.85,
      top: 5.85,
      width: 12.301,
      height: 12.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.19 0.19 C 0.444 -0.063 0.857 -0.063 1.11 0.19 L 11 10.08 L 11 0.65 C 11 0.291 11.291 0 11.65 0 C 12.009 0 12.301 0.291 12.301 0.65 L 12.301 11.65 C 12.301 12.009 12.009 12.301 11.65 12.301 L 0.65 12.301 C 0.291 12.301 0 12.009 0 11.65 C 0 11.291 0.291 11 0.65 11 L 10.08 11 L 0.19 1.11 C -0.063 0.857 -0.063 0.444 0.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 16.301,
    height: 14.157,
    viewBox: "0 0 16.301 14.157",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.85,
      top: 4.921,
      width: 16.301,
      height: 14.157
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.762 0.19 C 9.016 -0.063 9.428 -0.063 9.682 0.19 L 16.11 6.619 C 16.232 6.741 16.301 6.907 16.301 7.079 C 16.301 7.251 16.232 7.417 16.11 7.539 L 9.682 13.967 C 9.428 14.221 9.016 14.221 8.762 13.967 C 8.508 13.713 8.508 13.301 8.762 13.048 L 14.081 7.728 L 0.65 7.728 C 0.291 7.728 0 7.438 0 7.079 C 0 6.72 0.291 6.429 0.65 6.429 L 14.08 6.429 L 8.762 1.11 C 8.508 0.856 8.508 0.444 8.762 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 11,
    height: 11,
    viewBox: "0 0 11 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.5,
      top: 6.5,
      width: 11,
      height: 11
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.46 10.54 C -0.713 10.794 -0.713 11.206 -0.46 11.46 C -0.206 11.713 0.206 11.713 0.46 11.46 L 0 11 L -0.46 10.54 Z M 11 0 L 11.65 0 C 11.65 -0.359 11.359 -0.65 11 -0.65 L 11 0 Z M 1.1 -0.65 C 0.741 -0.65 0.45 -0.359 0.45 0 C 0.45 0.359 0.741 0.65 1.1 0.65 L 1.1 0 L 1.1 -0.65 Z M 10.35 9.9 C 10.35 10.259 10.641 10.55 11 10.55 C 11.359 10.55 11.65 10.259 11.65 9.9 L 11 9.9 L 10.35 9.9 Z M 0 11 L 0.46 11.46 L 11.46 0.46 L 11 0 L 10.54 -0.46 L -0.46 10.54 L 0 11 Z M 1.1 0 L 1.1 0.65 L 11 0.65 L 11 0 L 11 -0.65 L 1.1 -0.65 L 1.1 0 Z M 11 0 L 10.35 0 L 10.35 9.9 L 11 9.9 L 11.65 9.9 L 11.65 0 L 11 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.301,
    height: 12.301,
    viewBox: "0 0 12.301 12.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.85,
      top: 5.85,
      width: 12.301,
      height: 12.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.301 10.551 C 12.301 10.91 12.009 11.2 11.65 11.2 C 11.291 11.2 11 10.91 11 10.551 L 11 2.221 L 1.11 12.11 C 0.856 12.364 0.444 12.364 0.19 12.11 C -0.063 11.857 -0.063 11.444 0.19 11.19 L 10.08 1.301 L 1.75 1.301 C 1.391 1.301 1.101 1.009 1.101 0.65 C 1.101 0.292 1.391 0 1.75 0 L 11.65 0 C 12.009 0 12.301 0.291 12.301 0.65 L 12.301 10.551 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 12.857,
    height: 15,
    viewBox: "0 0 12.857 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.572,
      top: 4.5,
      width: 12.857,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.429 0 L 6.888 -0.46 C 6.634 -0.713 6.223 -0.713 5.969 -0.46 L 6.429 0 Z M 5.779 15 C 5.779 15.359 6.07 15.65 6.429 15.65 C 6.788 15.65 7.079 15.359 7.079 15 L 6.429 15 L 5.779 15 Z M -0.46 5.969 C -0.713 6.223 -0.713 6.634 -0.46 6.888 C -0.206 7.142 0.206 7.142 0.46 6.888 L 0 6.429 L -0.46 5.969 Z M 12.398 6.888 C 12.651 7.142 13.063 7.142 13.317 6.888 C 13.571 6.634 13.571 6.223 13.317 5.969 L 12.857 6.429 L 12.398 6.888 Z M 6.429 0 L 5.779 0 L 5.779 15 L 6.429 15 L 7.079 15 L 7.079 0 L 6.429 0 Z M 6.429 0 L 5.969 -0.46 L -0.46 5.969 L 0 6.429 L 0.46 6.888 L 6.888 0.46 L 6.429 0 Z M 6.429 0 L 5.969 0.46 L 12.398 6.888 L 12.857 6.429 L 13.317 5.969 L 6.888 -0.46 L 6.429 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.157,
    height: 16.300,
    viewBox: "0 0 14.157 16.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.921,
      top: 3.85,
      width: 14.157,
      height: 16.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.429 15.65 L 6.429 2.22 L 1.11 7.539 C 0.856 7.792 0.444 7.792 0.19 7.539 C -0.063 7.285 -0.063 6.873 0.19 6.619 L 6.619 0.19 L 6.722 0.107 C 6.974 -0.059 7.317 -0.032 7.539 0.19 L 13.967 6.619 C 14.221 6.873 14.221 7.285 13.967 7.539 C 13.713 7.792 13.301 7.792 13.048 7.539 L 7.728 2.219 L 7.728 15.65 C 7.728 16.009 7.438 16.3 7.079 16.3 C 6.72 16.3 6.429 16.009 6.429 15.65 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 11,
    height: 11,
    viewBox: "0 0 11 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.5,
      top: 6.5,
      width: 11,
      height: 11
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.54 11.46 C 10.794 11.713 11.206 11.713 11.46 11.46 C 11.713 11.206 11.713 10.794 11.46 10.54 L 11 11 L 10.54 11.46 Z M 0 0 L 0 -0.65 C -0.359 -0.65 -0.65 -0.359 -0.65 0 L 0 0 Z M -0.65 9.9 C -0.65 10.259 -0.359 10.55 0 10.55 C 0.359 10.55 0.65 10.259 0.65 9.9 L 0 9.9 L -0.65 9.9 Z M 9.9 0.65 C 10.259 0.65 10.55 0.359 10.55 0 C 10.55 -0.359 10.259 -0.65 9.9 -0.65 L 9.9 0 L 9.9 0.65 Z M 11 11 L 11.46 10.54 L 0.46 -0.46 L 0 0 L -0.46 0.46 L 10.54 11.46 L 11 11 Z M 0 9.9 L 0.65 9.9 L 0.65 0 L 0 0 L -0.65 0 L -0.65 9.9 L 0 9.9 Z M 0 0 L 0 0.65 L 9.9 0.65 L 9.9 0 L 9.9 -0.65 L 0 -0.65 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.301,
    height: 12.301,
    viewBox: "0 0 12.301 12.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.85,
      top: 5.85,
      width: 12.301,
      height: 12.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10.551 L 0 0.65 C 0 0.291 0.291 0 0.65 0 L 10.551 0 C 10.91 0 11.2 0.292 11.2 0.65 C 11.2 1.009 10.91 1.301 10.551 1.301 L 2.221 1.301 L 12.11 11.19 C 12.364 11.444 12.364 11.857 12.11 12.11 C 11.857 12.364 11.444 12.364 11.19 12.11 L 1.301 2.221 L 1.301 10.551 C 1.301 10.91 1.009 11.2 0.65 11.2 C 0.292 11.2 0 10.91 0 10.551 Z",
    fill: "currentColor",
    fillRule: "nonzero"
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
    width: 18,
    height: 10.000,
    viewBox: "0 0 18 10.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 7,
      width: 18,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.293 0.293 C 4.683 -0.098 5.316 -0.098 5.707 0.293 C 6.097 0.683 6.097 1.316 5.707 1.707 L 3.414 4 L 17 4 C 17.552 4 18 4.448 18 5 C 18 5.552 17.552 6 17 6 L 3.414 6 L 5.707 8.293 C 6.097 8.683 6.097 9.316 5.707 9.707 C 5.316 10.097 4.683 10.097 4.293 9.707 L 0.293 5.707 C -0.098 5.316 -0.098 4.683 0.293 4.293 L 4.293 0.293 Z",
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
    width: 10.000,
    height: 18,
    viewBox: "0 0 10.000 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 3,
      width: 10,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 1 C 4 0.448 4.448 0 5 0 C 5.552 0 6 0.448 6 1 L 6 14.586 L 8.293 12.293 C 8.683 11.902 9.316 11.902 9.707 12.293 C 10.097 12.683 10.097 13.317 9.707 13.707 L 5.707 17.707 C 5.519 17.895 5.265 18 5 18 C 4.735 18 4.48 17.895 4.293 17.707 L 0.293 13.707 C -0.098 13.317 -0.098 12.683 0.293 12.293 C 0.683 11.902 1.316 11.902 1.707 12.293 L 4 14.586 L 4 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 18,
    height: 10.000,
    viewBox: "0 0 18 10.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 7,
      width: 18,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.293 0.293 C 12.683 -0.098 13.317 -0.098 13.707 0.293 L 17.707 4.293 C 18.098 4.683 18.098 5.316 17.707 5.707 L 13.707 9.707 C 13.317 10.097 12.683 10.097 12.293 9.707 C 11.902 9.316 11.902 8.683 12.293 8.293 L 14.586 6 L 1 6 C 0.448 6 0 5.552 0 5 C 0 4.448 0.448 4 1 4 L 14.586 4 L 12.293 1.707 C 11.902 1.316 11.902 0.683 12.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10.000,
    height: 18,
    viewBox: "0 0 10.000 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 3,
      width: 10,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 17 L 4 3.414 L 1.707 5.707 C 1.316 6.098 0.683 6.098 0.293 5.707 C -0.098 5.317 -0.098 4.683 0.293 4.293 L 4.293 0.293 L 4.366 0.227 C 4.544 0.081 4.768 0 5 0 C 5.265 0 5.519 0.105 5.707 0.293 L 9.707 4.293 C 10.097 4.683 10.097 5.317 9.707 5.707 C 9.316 6.098 8.683 6.098 8.293 5.707 L 6 3.414 L 6 17 C 6 17.552 5.552 18 5 18 C 4.448 18 4 17.552 4 17 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
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
    d: "M 16 17 L 16 1 C 16 0.448 16.448 0 17 0 C 17.552 0 18 0.448 18 1 L 18 17 C 18 17.552 17.552 18 17 18 C 16.448 18 16 17.552 16 17 Z M 4.293 4.293 C 4.683 3.902 5.316 3.902 5.707 4.293 C 6.097 4.683 6.097 5.317 5.707 5.707 L 3.414 8 L 13 8 C 13.552 8 14 8.448 14 9 C 14 9.552 13.552 10 13 10 L 3.414 10 L 5.707 12.293 C 6.097 12.683 6.097 13.317 5.707 13.707 C 5.316 14.098 4.683 14.098 4.293 13.707 L 0.293 9.707 C -0.098 9.317 -0.098 8.683 0.293 8.293 L 4.293 4.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
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
    d: "M 0 17 L 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 L 2 17 C 2 17.552 1.552 18 1 18 C 0.448 18 0 17.552 0 17 Z M 8.293 4.293 C 8.683 3.902 9.317 3.902 9.707 4.293 C 10.098 4.683 10.098 5.317 9.707 5.707 L 7.414 8 L 17 8 C 17.552 8 18 8.448 18 9 C 18 9.552 17.552 10 17 10 L 7.414 10 L 9.707 12.293 C 10.098 12.683 10.098 13.317 9.707 13.707 C 9.317 14.098 8.683 14.098 8.293 13.707 L 4.293 9.707 C 3.902 9.317 3.902 8.683 4.293 8.293 L 8.293 4.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
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
    d: "M 17 16 C 17.552 16 18 16.448 18 17 C 18 17.552 17.552 18 17 18 L 1 18 C 0.448 18 0 17.552 0 17 C 0 16.448 0.448 16 1 16 L 17 16 Z M 8 1 C 8 0.448 8.448 0 9 0 C 9.552 0 10 0.448 10 1 L 10 10.586 L 12.293 8.293 C 12.683 7.902 13.317 7.902 13.707 8.293 C 14.098 8.683 14.098 9.317 13.707 9.707 L 9.707 13.707 C 9.317 14.098 8.683 14.098 8.293 13.707 L 4.293 9.707 C 3.902 9.317 3.902 8.683 4.293 8.293 C 4.683 7.902 5.317 7.902 5.707 8.293 L 8 10.586 L 8 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
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
    d: "M 8 5 C 8 4.448 8.448 4 9 4 C 9.552 4 10 4.448 10 5 L 10 14.586 L 12.293 12.293 C 12.683 11.902 13.317 11.902 13.707 12.293 C 14.098 12.683 14.098 13.317 13.707 13.707 L 9.707 17.707 C 9.317 18.098 8.683 18.098 8.293 17.707 L 4.293 13.707 C 3.902 13.317 3.902 12.683 4.293 12.293 C 4.683 11.902 5.317 11.902 5.707 12.293 L 8 14.586 L 8 5 Z M 17 0 C 17.552 0 18 0.448 18 1 C 18 1.552 17.552 2 17 2 L 1 2 C 0.448 2 0 1.552 0 1 C 0 0.448 0.448 0 1 0 L 17 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
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
    d: "M 8 17 L 8 7.414 L 5.707 9.707 C 5.317 10.098 4.683 10.098 4.293 9.707 C 3.902 9.317 3.902 8.683 4.293 8.293 L 8.293 4.293 L 8.369 4.225 C 8.762 3.904 9.341 3.927 9.707 4.293 L 13.707 8.293 C 14.098 8.683 14.098 9.317 13.707 9.707 C 13.317 10.098 12.683 10.098 12.293 9.707 L 10 7.414 L 10 17 C 10 17.552 9.552 18 9 18 C 8.448 18 8 17.552 8 17 Z M 17 0 C 17.552 0 18 0.448 18 1 C 18 1.552 17.552 2 17 2 L 1 2 C 0.448 2 0 1.552 0 1 C 0 0.448 0.448 0 1 0 L 17 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 18,
    height: 18.000,
    viewBox: "0 0 18 18.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17 16 C 17.552 16 18 16.447 18 17 C 18 17.552 17.552 18 17 18 L 1 18 C 0.448 18 0 17.552 0 17 C 0 16.447 0.448 16 1 16 L 17 16 Z M 8 13 L 8 3.414 L 5.707 5.707 C 5.317 6.097 4.683 6.097 4.293 5.707 C 3.902 5.316 3.902 4.683 4.293 4.293 L 8.293 0.293 L 8.369 0.224 C 8.762 -0.096 9.341 -0.073 9.707 0.293 L 13.707 4.293 C 14.098 4.683 14.098 5.316 13.707 5.707 C 13.317 6.097 12.683 6.097 12.293 5.707 L 10 3.414 L 10 13 C 10 13.552 9.552 14 9 14 C 8.448 14 8 13.552 8 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
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
    d: "M 16 17 L 16 1 C 16 0.448 16.448 0 17 0 C 17.552 0 18 0.448 18 1 L 18 17 C 18 17.552 17.552 18 17 18 C 16.448 18 16 17.552 16 17 Z M 8.293 4.293 C 8.683 3.902 9.317 3.902 9.707 4.293 L 13.707 8.293 C 14.098 8.683 14.098 9.317 13.707 9.707 L 9.707 13.707 C 9.317 14.098 8.683 14.098 8.293 13.707 C 7.902 13.317 7.902 12.683 8.293 12.293 L 10.586 10 L 1 10 C 0.448 10 0 9.552 0 9 C 0 8.448 0.448 8 1 8 L 10.586 8 L 8.293 5.707 C 7.902 5.317 7.902 4.683 8.293 4.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
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
    d: "M 0 17 L 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 L 2 17 C 2 17.552 1.552 18 1 18 C 0.448 18 0 17.552 0 17 Z M 12.293 4.293 C 12.683 3.902 13.317 3.902 13.707 4.293 L 17.707 8.293 C 18.098 8.683 18.098 9.317 17.707 9.707 L 13.707 13.707 C 13.317 14.098 12.683 14.098 12.293 13.707 C 11.902 13.317 11.902 12.683 12.293 12.293 L 14.586 10 L 5 10 C 4.448 10 4 9.552 4 9 C 4 8.448 4.448 8 5 8 L 14.586 8 L 12.293 5.707 C 11.902 5.317 11.902 4.683 12.293 4.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 17.301,
    height: 9.301,
    viewBox: "0 0 17.301 9.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.35,
      top: 7.35,
      width: 17.301,
      height: 9.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.19 0.19 C 4.444 -0.063 4.856 -0.063 5.11 0.19 C 5.364 0.444 5.364 0.856 5.11 1.11 L 2.221 4 L 16.65 4 C 17.009 4 17.301 4.291 17.301 4.65 C 17.301 5.009 17.009 5.301 16.65 5.301 L 2.221 5.301 L 5.11 8.19 C 5.364 8.444 5.364 8.856 5.11 9.11 C 4.856 9.364 4.444 9.364 4.19 9.11 L 0.19 5.11 C -0.063 4.856 -0.063 4.444 0.19 4.19 L 4.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 9.301,
    height: 17.301,
    viewBox: "0 0 9.301 17.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.35,
      top: 3.35,
      width: 9.301,
      height: 17.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0.65 C 4 0.291 4.291 0 4.65 0 C 5.009 0 5.301 0.291 5.301 0.65 L 5.301 15.08 L 8.19 12.19 C 8.444 11.937 8.856 11.937 9.11 12.19 C 9.364 12.444 9.364 12.857 9.11 13.11 L 5.11 17.11 C 4.988 17.232 4.823 17.301 4.65 17.301 C 4.478 17.301 4.312 17.232 4.19 17.11 L 0.19 13.11 C -0.063 12.857 -0.063 12.444 0.19 12.19 C 0.444 11.937 0.856 11.937 1.11 12.19 L 4 15.08 L 4 0.65 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 17.301,
    height: 9.301,
    viewBox: "0 0 17.301 9.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.35,
      top: 7.35,
      width: 17.301,
      height: 9.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.19 0.19 C 12.444 -0.063 12.857 -0.063 13.11 0.19 L 17.11 4.19 C 17.364 4.444 17.364 4.856 17.11 5.11 L 13.11 9.11 C 12.857 9.364 12.444 9.364 12.19 9.11 C 11.937 8.856 11.937 8.444 12.19 8.19 L 15.08 5.301 L 0.65 5.301 C 0.291 5.301 0 5.009 0 4.65 C 0 4.291 0.291 4 0.65 4 L 15.08 4 L 12.19 1.11 C 11.937 0.856 11.937 0.444 12.19 0.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 9.301,
    height: 17.301,
    viewBox: "0 0 9.301 17.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.35,
      top: 3.35,
      width: 9.301,
      height: 17.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 16.65 L 4 2.221 L 1.11 5.11 C 0.856 5.364 0.444 5.364 0.19 5.11 C -0.063 4.857 -0.063 4.444 0.19 4.19 L 4.19 0.19 L 4.29 0.109 C 4.396 0.039 4.521 0 4.65 0 C 4.823 0 4.988 0.069 5.11 0.19 L 9.11 4.19 C 9.364 4.444 9.364 4.857 9.11 5.11 C 8.856 5.364 8.444 5.364 8.19 5.11 L 5.301 2.221 L 5.301 16.65 C 5.301 17.009 5.009 17.301 4.65 17.301 C 4.291 17.301 4 17.009 4 16.65 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 17.301,
    height: 17.301,
    viewBox: "0 0 17.301 17.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.35,
      top: 3.35,
      width: 17.301,
      height: 17.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 16.65 L 16 0.65 C 16 0.291 16.291 0 16.65 0 C 17.009 0 17.301 0.291 17.301 0.65 L 17.301 16.65 C 17.301 17.009 17.009 17.301 16.65 17.301 C 16.291 17.301 16 17.009 16 16.65 Z M 4.19 4.19 C 4.444 3.937 4.856 3.937 5.11 4.19 C 5.364 4.444 5.364 4.857 5.11 5.11 L 2.221 8 L 12.65 8 C 13.009 8 13.301 8.291 13.301 8.65 C 13.301 9.009 13.009 9.301 12.65 9.301 L 2.221 9.301 L 5.11 12.19 C 5.364 12.444 5.364 12.857 5.11 13.11 C 4.856 13.364 4.444 13.364 4.19 13.11 L 0.19 9.11 C -0.063 8.857 -0.063 8.444 0.19 8.19 L 4.19 4.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 17.301,
    height: 17.301,
    viewBox: "0 0 17.301 17.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.35,
      top: 3.35,
      width: 17.301,
      height: 17.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 16.65 L 0 0.65 C 0 0.291 0.291 0 0.65 0 C 1.009 0 1.301 0.291 1.301 0.65 L 1.301 16.65 C 1.301 17.009 1.009 17.301 0.65 17.301 C 0.291 17.301 0 17.009 0 16.65 Z M 8.19 4.19 C 8.444 3.937 8.857 3.937 9.11 4.19 C 9.364 4.444 9.364 4.857 9.11 5.11 L 6.221 8 L 16.65 8 C 17.009 8 17.301 8.291 17.301 8.65 C 17.301 9.009 17.009 9.301 16.65 9.301 L 6.221 9.301 L 9.11 12.19 C 9.364 12.444 9.364 12.857 9.11 13.11 C 8.857 13.364 8.444 13.364 8.19 13.11 L 4.19 9.11 C 3.937 8.857 3.937 8.444 4.19 8.19 L 8.19 4.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 17.301,
    height: 17.301,
    viewBox: "0 0 17.301 17.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.35,
      top: 3.35,
      width: 17.301,
      height: 17.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.65 16 C 17.009 16 17.301 16.291 17.301 16.65 C 17.301 17.009 17.009 17.301 16.65 17.301 L 0.65 17.301 C 0.291 17.301 0 17.009 0 16.65 C 0 16.291 0.291 16 0.65 16 L 16.65 16 Z M 8 0.65 C 8 0.291 8.291 0 8.65 0 C 9.009 0 9.301 0.291 9.301 0.65 L 9.301 11.08 L 12.19 8.19 C 12.444 7.937 12.857 7.937 13.11 8.19 C 13.364 8.444 13.364 8.857 13.11 9.11 L 9.11 13.11 C 8.857 13.364 8.444 13.364 8.19 13.11 L 4.19 9.11 C 3.937 8.857 3.937 8.444 4.19 8.19 C 4.444 7.937 4.857 7.937 5.11 8.19 L 8 11.08 L 8 0.65 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 17.301,
    height: 17.301,
    viewBox: "0 0 17.301 17.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.35,
      top: 3.35,
      width: 17.301,
      height: 17.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 4.65 C 8 4.291 8.291 4 8.65 4 C 9.009 4 9.301 4.291 9.301 4.65 L 9.301 15.08 L 12.19 12.19 C 12.444 11.937 12.857 11.937 13.11 12.19 C 13.364 12.444 13.364 12.857 13.11 13.11 L 9.11 17.11 C 8.857 17.364 8.444 17.364 8.19 17.11 L 4.19 13.11 C 3.937 12.857 3.937 12.444 4.19 12.19 C 4.444 11.937 4.857 11.937 5.11 12.19 L 8 15.08 L 8 4.65 Z M 16.65 0 C 17.009 0 17.301 0.291 17.301 0.65 C 17.301 1.009 17.009 1.301 16.65 1.301 L 0.65 1.301 C 0.291 1.301 0 1.009 0 0.65 C 0 0.291 0.291 0 0.65 0 L 16.65 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 17.301,
    height: 17.301,
    viewBox: "0 0 17.301 17.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.35,
      top: 3.35,
      width: 17.301,
      height: 17.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16.65 L 8 6.221 L 5.11 9.11 C 4.857 9.364 4.444 9.364 4.19 9.11 C 3.937 8.857 3.937 8.444 4.19 8.19 L 8.19 4.19 C 8.444 3.937 8.857 3.937 9.11 4.19 L 13.11 8.19 C 13.364 8.444 13.364 8.857 13.11 9.11 C 12.857 9.364 12.444 9.364 12.19 9.11 L 9.301 6.221 L 9.301 16.65 C 9.301 17.009 9.009 17.301 8.65 17.301 C 8.291 17.301 8 17.009 8 16.65 Z M 16.65 0 C 17.009 0 17.301 0.291 17.301 0.65 C 17.301 1.009 17.009 1.301 16.65 1.301 L 0.65 1.301 C 0.291 1.301 0 1.009 0 0.65 C 0 0.291 0.291 0 0.65 0 L 16.65 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 17.301,
    height: 17.300,
    viewBox: "0 0 17.301 17.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.35,
      top: 3.35,
      width: 17.301,
      height: 17.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.65 16 C 17.009 16 17.301 16.291 17.301 16.65 C 17.301 17.009 17.009 17.3 16.65 17.3 L 0.65 17.3 C 0.291 17.3 0 17.009 0 16.65 C 0 16.291 0.291 16 0.65 16 L 16.65 16 Z M 8 12.65 L 8 2.22 L 5.11 5.11 C 4.857 5.364 4.444 5.364 4.19 5.11 C 3.937 4.856 3.937 4.444 4.19 4.19 L 8.19 0.19 L 8.293 0.107 C 8.545 -0.059 8.888 -0.032 9.11 0.19 L 13.11 4.19 C 13.364 4.444 13.364 4.856 13.11 5.11 C 12.857 5.364 12.444 5.364 12.19 5.11 L 9.301 2.22 L 9.301 12.65 C 9.301 13.009 9.009 13.3 8.65 13.3 C 8.291 13.3 8 13.009 8 12.65 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 17.301,
    height: 17.301,
    viewBox: "0 0 17.301 17.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.35,
      top: 3.35,
      width: 17.301,
      height: 17.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 16.65 L 16 0.65 C 16 0.291 16.291 0 16.65 0 C 17.009 0 17.301 0.291 17.301 0.65 L 17.301 16.65 C 17.301 17.009 17.009 17.301 16.65 17.301 C 16.291 17.301 16 17.009 16 16.65 Z M 8.19 4.19 C 8.444 3.937 8.857 3.937 9.11 4.19 L 13.11 8.19 C 13.364 8.444 13.364 8.857 13.11 9.11 L 9.11 13.11 C 8.857 13.364 8.444 13.364 8.19 13.11 C 7.937 12.857 7.937 12.444 8.19 12.19 L 11.08 9.301 L 0.65 9.301 C 0.291 9.301 0 9.009 0 8.65 C 0 8.291 0.291 8 0.65 8 L 11.08 8 L 8.19 5.11 C 7.937 4.857 7.937 4.444 8.19 4.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 17.301,
    height: 17.301,
    viewBox: "0 0 17.301 17.301",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.35,
      top: 3.35,
      width: 17.301,
      height: 17.301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 16.65 L 0 0.65 C 0 0.291 0.291 0 0.65 0 C 1.009 0 1.301 0.291 1.301 0.65 L 1.301 16.65 C 1.301 17.009 1.009 17.301 0.65 17.301 C 0.291 17.301 0 17.009 0 16.65 Z M 12.19 4.19 C 12.444 3.937 12.857 3.937 13.11 4.19 L 17.11 8.19 C 17.364 8.444 17.364 8.857 17.11 9.11 L 13.11 13.11 C 12.857 13.364 12.444 13.364 12.19 13.11 C 11.937 12.857 11.937 12.444 12.19 12.19 L 15.08 9.301 L 4.65 9.301 C 4.291 9.301 4 9.009 4 8.65 C 4 8.291 4.291 8 4.65 8 L 15.08 8 L 12.19 5.11 C 11.937 4.857 11.937 4.444 12.19 4.19 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 12,
    height: 10.500,
    viewBox: "0 0 12 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3.75,
      width: 12,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.72 0.22 C 5.013 -0.073 5.487 -0.073 5.78 0.22 C 6.073 0.513 6.073 0.987 5.78 1.28 L 2.56 4.5 L 11.25 4.5 C 11.664 4.5 12 4.836 12 5.25 C 12 5.664 11.664 6 11.25 6 L 2.56 6 L 5.78 9.22 C 6.073 9.513 6.073 9.987 5.78 10.28 C 5.487 10.573 5.013 10.573 4.72 10.28 L 0.22 5.78 C -0.073 5.487 -0.073 5.013 0.22 4.72 L 4.72 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 9,
    height: 9,
    viewBox: "0 0 9 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 4.5,
      width: 9,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.72 0.22 C 8.013 -0.073 8.487 -0.073 8.78 0.22 C 9.073 0.513 9.073 0.987 8.78 1.28 L 2.561 7.5 L 8.25 7.5 C 8.664 7.5 9 7.836 9 8.25 C 9 8.664 8.664 9 8.25 9 L 0.75 9 C 0.336 9 0 8.664 0 8.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 C 1.164 0 1.5 0.336 1.5 0.75 L 1.5 6.439 L 7.72 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10.500,
    height: 12,
    viewBox: "0 0 10.500 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.75,
      top: 3,
      width: 10.5,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 0.75 C 4.5 0.336 4.836 0 5.25 0 C 5.664 0 6 0.336 6 0.75 L 6 9.439 L 9.22 6.22 C 9.513 5.927 9.987 5.927 10.28 6.22 C 10.573 6.513 10.573 6.987 10.28 7.28 L 5.78 11.78 C 5.487 12.073 5.013 12.073 4.72 11.78 L 0.22 7.28 C -0.073 6.987 -0.073 6.513 0.22 6.22 C 0.513 5.927 0.987 5.927 1.28 6.22 L 4.5 9.439 L 4.5 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 9,
    height: 9,
    viewBox: "0 0 9 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 4.5,
      width: 9,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 7.5 6.439 L 7.5 0.75 C 7.5 0.336 7.836 0 8.25 0 C 8.664 0 9 0.336 9 0.75 L 9 8.25 C 9 8.664 8.664 9 8.25 9 L 0.75 9 C 0.336 9 0 8.664 0 8.25 C 0 7.836 0.336 7.5 0.75 7.5 L 6.439 7.5 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 12,
    height: 10.500,
    viewBox: "0 0 12 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3.75,
      width: 12,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.22 0.22 C 6.513 -0.073 6.987 -0.073 7.28 0.22 L 11.78 4.72 C 11.921 4.86 12 5.051 12 5.25 C 12 5.449 11.921 5.64 11.78 5.78 L 7.28 10.28 C 6.987 10.573 6.513 10.573 6.22 10.28 C 5.927 9.987 5.927 9.513 6.22 9.22 L 9.439 6 L 0.75 6 C 0.336 6 0 5.664 0 5.25 C 0 4.836 0.336 4.5 0.75 4.5 L 9.439 4.5 L 6.22 1.28 C 5.927 0.987 5.927 0.513 6.22 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 9,
    height: 9,
    viewBox: "0 0 9 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 4.5,
      width: 9,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 7.5 C 9 7.914 8.664 8.25 8.25 8.25 C 7.836 8.25 7.5 7.914 7.5 7.5 L 7.5 2.561 L 1.28 8.78 C 0.987 9.073 0.513 9.073 0.22 8.78 C -0.073 8.487 -0.073 8.013 0.22 7.72 L 6.439 1.5 L 1.5 1.5 C 1.086 1.5 0.75 1.164 0.75 0.75 C 0.75 0.336 1.086 0 1.5 0 L 8.25 0 C 8.664 0 9 0.336 9 0.75 L 9 7.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10.500,
    height: 12.000,
    viewBox: "0 0 10.500 12.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.75,
      top: 3,
      width: 10.5,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 11.25 L 4.5 2.561 L 1.28 5.78 C 0.987 6.073 0.513 6.073 0.22 5.78 C -0.073 5.487 -0.073 5.013 0.22 4.72 L 4.72 0.22 L 4.776 0.168 C 5.071 -0.072 5.506 -0.055 5.78 0.22 L 10.28 4.72 C 10.573 5.013 10.573 5.487 10.28 5.78 C 9.987 6.073 9.513 6.073 9.22 5.78 L 6 2.561 L 6 11.25 C 6 11.664 5.664 12 5.25 12 C 4.836 12 4.5 11.664 4.5 11.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 9,
    height: 9,
    viewBox: "0 0 9 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 4.5,
      width: 9,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 7.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 7.5 0 C 7.914 0 8.25 0.336 8.25 0.75 C 8.25 1.164 7.914 1.5 7.5 1.5 L 2.561 1.5 L 8.78 7.72 C 9.073 8.013 9.073 8.487 8.78 8.78 C 8.487 9.073 8.013 9.073 7.72 8.78 L 1.5 2.561 L 1.5 7.5 C 1.5 7.914 1.164 8.25 0.75 8.25 C 0.336 8.25 0 7.914 0 7.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 11.500,
    height: 10,
    viewBox: "0 0 11.500 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.25,
      top: 4,
      width: 11.5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.646 0.146 C 4.842 -0.049 5.158 -0.049 5.353 0.146 C 5.549 0.342 5.549 0.658 5.353 0.853 L 1.707 4.5 L 11 4.5 C 11.276 4.5 11.5 4.724 11.5 5 C 11.5 5.276 11.276 5.5 11 5.5 L 1.707 5.5 L 5.353 9.146 C 5.549 9.342 5.549 9.658 5.353 9.853 C 5.158 10.049 4.842 10.049 4.646 9.853 L 0.146 5.353 C -0.049 5.158 -0.049 4.842 0.146 4.646 L 4.646 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 8.500,
    height: 8.500,
    viewBox: "0 0 8.500 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.75,
      top: 4.75,
      width: 8.5,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.646 0.146 C 7.842 -0.049 8.158 -0.049 8.354 0.146 C 8.549 0.342 8.549 0.658 8.354 0.854 L 1.707 7.5 L 8 7.5 C 8.276 7.5 8.5 7.724 8.5 8 C 8.5 8.276 8.276 8.5 8 8.5 L 0.5 8.5 C 0.224 8.5 0 8.276 0 8 L 0 0.5 C 0 0.224 0.224 0 0.5 0 C 0.776 0 1 0.224 1 0.5 L 1 6.793 L 7.646 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10,
    height: 11.500,
    viewBox: "0 0 10 11.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 3.25,
      width: 10,
      height: 11.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 0.5 C 4.5 0.224 4.724 0 5 0 C 5.276 0 5.5 0.224 5.5 0.5 L 5.5 9.793 L 9.146 6.146 C 9.342 5.951 9.658 5.951 9.853 6.146 C 10.049 6.342 10.049 6.658 9.853 6.854 L 5.353 11.354 C 5.158 11.549 4.842 11.549 4.646 11.354 L 0.146 6.854 C -0.049 6.658 -0.049 6.342 0.146 6.146 C 0.342 5.951 0.658 5.951 0.853 6.146 L 4.5 9.793 L 4.5 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 8.500,
    height: 8.500,
    viewBox: "0 0 8.500 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.75,
      top: 4.75,
      width: 8.5,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 7.5 6.793 L 7.5 0.5 C 7.5 0.224 7.724 0 8 0 C 8.276 0 8.5 0.224 8.5 0.5 L 8.5 8 C 8.5 8.276 8.276 8.5 8 8.5 L 0.5 8.5 C 0.224 8.5 0 8.276 0 8 C 0 7.724 0.224 7.5 0.5 7.5 L 6.793 7.5 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 11.500,
    height: 10,
    viewBox: "0 0 11.500 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.25,
      top: 4,
      width: 11.5,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.146 0.146 C 6.342 -0.049 6.658 -0.049 6.854 0.146 L 11.354 4.646 C 11.447 4.74 11.5 4.867 11.5 5 C 11.5 5.133 11.447 5.26 11.354 5.353 L 6.854 9.853 C 6.658 10.049 6.342 10.049 6.146 9.853 C 5.951 9.658 5.951 9.342 6.146 9.146 L 9.793 5.5 L 0.5 5.5 C 0.224 5.5 0 5.276 0 5 C 0 4.724 0.224 4.5 0.5 4.5 L 9.793 4.5 L 6.146 0.853 C 5.951 0.658 5.951 0.342 6.146 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 8.500,
    height: 8.500,
    viewBox: "0 0 8.500 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.75,
      top: 4.75,
      width: 8.5,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.5 7.25 C 8.5 7.526 8.276 7.75 8 7.75 C 7.724 7.75 7.5 7.526 7.5 7.25 L 7.5 1.707 L 0.853 8.354 C 0.658 8.549 0.342 8.549 0.146 8.354 C -0.049 8.158 -0.049 7.842 0.146 7.646 L 6.793 1 L 1.25 1 C 0.974 1 0.75 0.776 0.75 0.5 C 0.75 0.224 0.974 0 1.25 0 L 8 0 C 8.276 0 8.5 0.224 8.5 0.5 L 8.5 7.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body54 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 10,
    height: 11.500,
    viewBox: "0 0 10 11.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 3.25,
      width: 10,
      height: 11.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 11 L 4.5 1.707 L 0.853 5.354 C 0.658 5.549 0.342 5.549 0.146 5.354 C -0.049 5.158 -0.049 4.842 0.146 4.647 L 4.646 0.147 L 4.725 0.082 C 4.919 -0.046 5.183 -0.024 5.353 0.147 L 9.853 4.647 C 10.049 4.842 10.049 5.158 9.853 5.354 C 9.658 5.549 9.342 5.549 9.146 5.354 L 5.5 1.707 L 5.5 11 C 5.5 11.276 5.276 11.5 5 11.5 C 4.724 11.5 4.5 11.276 4.5 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body55 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 8.500,
    height: 8.500,
    viewBox: "0 0 8.500 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.75,
      top: 4.75,
      width: 8.5,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 7.25 L 0 0.5 C 0 0.224 0.224 0 0.5 0 L 7.25 0 C 7.526 0 7.75 0.224 7.75 0.5 C 7.75 0.776 7.526 1 7.25 1 L 1.707 1 L 8.354 7.646 C 8.549 7.842 8.549 8.158 8.354 8.354 C 8.158 8.549 7.842 8.549 7.646 8.354 L 1 1.707 L 1 7.25 C 1 7.526 0.776 7.75 0.5 7.75 C 0.224 7.75 0 7.526 0 7.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body56 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.500,
    height: 7.500,
    viewBox: "0 0 13.500 7.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 5.25,
      width: 13.5,
      height: 7.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.22 0.22 C 3.513 -0.073 3.987 -0.073 4.28 0.22 C 4.573 0.513 4.573 0.987 4.28 1.28 L 2.56 3 L 12.75 3 C 13.164 3 13.5 3.336 13.5 3.75 C 13.5 4.164 13.164 4.5 12.75 4.5 L 2.56 4.5 L 4.28 6.22 C 4.573 6.513 4.573 6.987 4.28 7.28 C 3.987 7.573 3.513 7.573 3.22 7.28 L 0.22 4.28 C -0.073 3.987 -0.073 3.513 0.22 3.22 L 3.22 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body57 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 7.500,
    height: 13.500,
    viewBox: "0 0 7.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.25,
      top: 2.25,
      width: 7.5,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0.75 C 3 0.336 3.336 0 3.75 0 C 4.164 0 4.5 0.336 4.5 0.75 L 4.5 10.939 L 6.22 9.22 C 6.513 8.927 6.987 8.927 7.28 9.22 C 7.573 9.513 7.573 9.987 7.28 10.28 L 4.28 13.28 C 4.14 13.421 3.949 13.5 3.75 13.5 C 3.551 13.5 3.36 13.421 3.22 13.28 L 0.22 10.28 C -0.073 9.987 -0.073 9.513 0.22 9.22 C 0.513 8.927 0.987 8.927 1.28 9.22 L 3 10.939 L 3 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body58 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.500,
    height: 7.500,
    viewBox: "0 0 13.500 7.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 5.25,
      width: 13.5,
      height: 7.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.22 0.22 C 9.513 -0.073 9.987 -0.073 10.28 0.22 L 13.28 3.22 C 13.573 3.513 13.573 3.987 13.28 4.28 L 10.28 7.28 C 9.987 7.573 9.513 7.573 9.22 7.28 C 8.927 6.987 8.927 6.513 9.22 6.22 L 10.939 4.5 L 0.75 4.5 C 0.336 4.5 0 4.164 0 3.75 C 0 3.336 0.336 3 0.75 3 L 10.939 3 L 9.22 1.28 C 8.927 0.987 8.927 0.513 9.22 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body59 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 7.500,
    height: 13.500,
    viewBox: "0 0 7.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.25,
      top: 2.25,
      width: 7.5,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 12.75 L 3 2.561 L 1.28 4.28 C 0.987 4.573 0.513 4.573 0.22 4.28 C -0.073 3.987 -0.073 3.513 0.22 3.22 L 3.22 0.22 L 3.334 0.126 C 3.456 0.044 3.601 0 3.75 0 C 3.949 0 4.14 0.079 4.28 0.22 L 7.28 3.22 C 7.573 3.513 7.573 3.987 7.28 4.28 C 6.987 4.573 6.513 4.573 6.22 4.28 L 4.5 2.561 L 4.5 12.75 C 4.5 13.164 4.164 13.5 3.75 13.5 C 3.336 13.5 3 13.164 3 12.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body60 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.500,
    height: 13.500,
    viewBox: "0 0 13.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 2.25,
      width: 13.5,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 12.75 L 12 0.75 C 12 0.336 12.336 0 12.75 0 C 13.164 0 13.5 0.336 13.5 0.75 L 13.5 12.75 C 13.5 13.164 13.164 13.5 12.75 13.5 C 12.336 13.5 12 13.164 12 12.75 Z M 3.22 3.22 C 3.513 2.927 3.987 2.927 4.28 3.22 C 4.573 3.513 4.573 3.987 4.28 4.28 L 2.56 6 L 9.75 6 C 10.164 6 10.5 6.336 10.5 6.75 C 10.5 7.164 10.164 7.5 9.75 7.5 L 2.56 7.5 L 4.28 9.22 C 4.573 9.513 4.573 9.987 4.28 10.28 C 3.987 10.573 3.513 10.573 3.22 10.28 L 0.22 7.28 C -0.073 6.987 -0.073 6.513 0.22 6.22 L 3.22 3.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body61 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.500,
    height: 13.500,
    viewBox: "0 0 13.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 2.25,
      width: 13.5,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 C 1.164 0 1.5 0.336 1.5 0.75 L 1.5 12.75 C 1.5 13.164 1.164 13.5 0.75 13.5 C 0.336 13.5 0 13.164 0 12.75 Z M 6.22 3.22 C 6.513 2.927 6.987 2.927 7.28 3.22 C 7.573 3.513 7.573 3.987 7.28 4.28 L 5.561 6 L 12.75 6 C 13.164 6 13.5 6.336 13.5 6.75 C 13.5 7.164 13.164 7.5 12.75 7.5 L 5.561 7.5 L 7.28 9.22 C 7.573 9.513 7.573 9.987 7.28 10.28 C 6.987 10.573 6.513 10.573 6.22 10.28 L 3.22 7.28 C 2.927 6.987 2.927 6.513 3.22 6.22 L 6.22 3.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body62 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.500,
    height: 13.500,
    viewBox: "0 0 13.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 2.25,
      width: 13.5,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.75 12 C 13.164 12 13.5 12.336 13.5 12.75 C 13.5 13.164 13.164 13.5 12.75 13.5 L 0.75 13.5 C 0.336 13.5 0 13.164 0 12.75 C 0 12.336 0.336 12 0.75 12 L 12.75 12 Z M 6 0.75 C 6 0.336 6.336 0 6.75 0 C 7.164 0 7.5 0.336 7.5 0.75 L 7.5 7.939 L 9.22 6.22 C 9.513 5.927 9.987 5.927 10.28 6.22 C 10.573 6.513 10.573 6.987 10.28 7.28 L 7.28 10.28 C 6.987 10.573 6.513 10.573 6.22 10.28 L 3.22 7.28 C 2.927 6.987 2.927 6.513 3.22 6.22 C 3.513 5.927 3.987 5.927 4.28 6.22 L 6 7.939 L 6 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body63 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.500,
    height: 13.500,
    viewBox: "0 0 13.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 2.25,
      width: 13.5,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 3.75 C 6 3.336 6.336 3 6.75 3 C 7.164 3 7.5 3.336 7.5 3.75 L 7.5 10.939 L 9.22 9.22 C 9.513 8.927 9.987 8.927 10.28 9.22 C 10.573 9.513 10.573 9.987 10.28 10.28 L 7.28 13.28 C 6.987 13.573 6.513 13.573 6.22 13.28 L 3.22 10.28 C 2.927 9.987 2.927 9.513 3.22 9.22 C 3.513 8.927 3.987 8.927 4.28 9.22 L 6 10.939 L 6 3.75 Z M 12.75 0 C 13.164 0 13.5 0.336 13.5 0.75 C 13.5 1.164 13.164 1.5 12.75 1.5 L 0.75 1.5 C 0.336 1.5 0 1.164 0 0.75 C 0 0.336 0.336 0 0.75 0 L 12.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body64 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.500,
    height: 13.500,
    viewBox: "0 0 13.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 2.25,
      width: 13.5,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 12.75 L 6 5.561 L 4.28 7.28 C 3.987 7.573 3.513 7.573 3.22 7.28 C 2.927 6.987 2.927 6.513 3.22 6.22 L 6.22 3.22 L 6.276 3.168 C 6.571 2.928 7.006 2.945 7.28 3.22 L 10.28 6.22 C 10.573 6.513 10.573 6.987 10.28 7.28 C 9.987 7.573 9.513 7.573 9.22 7.28 L 7.5 5.561 L 7.5 12.75 C 7.5 13.164 7.164 13.5 6.75 13.5 C 6.336 13.5 6 13.164 6 12.75 Z M 12.75 0 C 13.164 0 13.5 0.336 13.5 0.75 C 13.5 1.164 13.164 1.5 12.75 1.5 L 0.75 1.5 C 0.336 1.5 0 1.164 0 0.75 C 0 0.336 0.336 0 0.75 0 L 12.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body65 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.500,
    height: 13.500,
    viewBox: "0 0 13.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 2.25,
      width: 13.5,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.75 12 C 13.164 12 13.5 12.336 13.5 12.75 C 13.5 13.164 13.164 13.5 12.75 13.5 L 0.75 13.5 C 0.336 13.5 0 13.164 0 12.75 C 0 12.336 0.336 12 0.75 12 L 12.75 12 Z M 6 9.75 L 6 2.561 L 4.28 4.28 C 3.987 4.573 3.513 4.573 3.22 4.28 C 2.927 3.987 2.927 3.513 3.22 3.22 L 6.22 0.22 L 6.276 0.168 C 6.571 -0.072 7.006 -0.055 7.28 0.22 L 10.28 3.22 C 10.573 3.513 10.573 3.987 10.28 4.28 C 9.987 4.573 9.513 4.573 9.22 4.28 L 7.5 2.561 L 7.5 9.75 C 7.5 10.164 7.164 10.5 6.75 10.5 C 6.336 10.5 6 10.164 6 9.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body66 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.500,
    height: 13.500,
    viewBox: "0 0 13.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 2.25,
      width: 13.5,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 12.75 L 12 0.75 C 12 0.336 12.336 0 12.75 0 C 13.164 0 13.5 0.336 13.5 0.75 L 13.5 12.75 C 13.5 13.164 13.164 13.5 12.75 13.5 C 12.336 13.5 12 13.164 12 12.75 Z M 6.22 3.22 C 6.513 2.927 6.987 2.927 7.28 3.22 L 10.28 6.22 C 10.573 6.513 10.573 6.987 10.28 7.28 L 7.28 10.28 C 6.987 10.573 6.513 10.573 6.22 10.28 C 5.927 9.987 5.927 9.513 6.22 9.22 L 7.939 7.5 L 0.75 7.5 C 0.336 7.5 0 7.164 0 6.75 C 0 6.336 0.336 6 0.75 6 L 7.939 6 L 6.22 4.28 C 5.927 3.987 5.927 3.513 6.22 3.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body67 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13.500,
    height: 13.500,
    viewBox: "0 0 13.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 2.25,
      width: 13.5,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 C 1.164 0 1.5 0.336 1.5 0.75 L 1.5 12.75 C 1.5 13.164 1.164 13.5 0.75 13.5 C 0.336 13.5 0 13.164 0 12.75 Z M 9.22 3.22 C 9.513 2.927 9.987 2.927 10.28 3.22 L 13.28 6.22 C 13.573 6.513 13.573 6.987 13.28 7.28 L 10.28 10.28 C 9.987 10.573 9.513 10.573 9.22 10.28 C 8.927 9.987 8.927 9.513 9.22 9.22 L 10.939 7.5 L 3.75 7.5 C 3.336 7.5 3 7.164 3 6.75 C 3 6.336 3.336 6 3.75 6 L 10.939 6 L 9.22 4.28 C 8.927 3.987 8.927 3.513 9.22 3.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body68 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 7,
    viewBox: "0 0 13 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 5.5,
      width: 13,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.146 0.146 C 3.342 -0.049 3.658 -0.049 3.853 0.146 C 4.049 0.342 4.049 0.658 3.853 0.853 L 1.707 3 L 12.5 3 C 12.776 3 13 3.224 13 3.5 C 13 3.776 12.776 4 12.5 4 L 1.707 4 L 3.853 6.146 C 4.049 6.342 4.049 6.658 3.853 6.853 C 3.658 7.049 3.342 7.049 3.146 6.853 L 0.146 3.853 C -0.049 3.658 -0.049 3.342 0.146 3.146 L 3.146 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body69 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 7,
    height: 13,
    viewBox: "0 0 7 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.5,
      top: 2.5,
      width: 7,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0.5 C 3 0.224 3.224 0 3.5 0 C 3.776 0 4 0.224 4 0.5 L 4 11.293 L 6.146 9.146 C 6.342 8.951 6.658 8.951 6.853 9.146 C 7.049 9.342 7.049 9.658 6.853 9.854 L 3.853 12.854 C 3.76 12.947 3.633 13 3.5 13 C 3.367 13 3.24 12.947 3.146 12.854 L 0.146 9.854 C -0.049 9.658 -0.049 9.342 0.146 9.146 C 0.342 8.951 0.658 8.951 0.853 9.146 L 3 11.293 L 3 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body70 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 7,
    viewBox: "0 0 13 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 5.5,
      width: 13,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.146 0.146 C 9.342 -0.049 9.658 -0.049 9.854 0.146 L 12.854 3.146 C 13.049 3.342 13.049 3.658 12.854 3.853 L 9.854 6.853 C 9.658 7.049 9.342 7.049 9.146 6.853 C 8.951 6.658 8.951 6.342 9.146 6.146 L 11.293 4 L 0.5 4 C 0.224 4 0 3.776 0 3.5 C 0 3.224 0.224 3 0.5 3 L 11.293 3 L 9.146 0.853 C 8.951 0.658 8.951 0.342 9.146 0.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body71 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 7,
    height: 13,
    viewBox: "0 0 7 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.5,
      top: 2.5,
      width: 7,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 12.5 L 3 1.707 L 0.853 3.854 C 0.658 4.049 0.342 4.049 0.146 3.854 C -0.049 3.658 -0.049 3.342 0.146 3.146 L 3.146 0.146 L 3.223 0.084 C 3.304 0.03 3.401 0 3.5 0 C 3.633 0 3.76 0.053 3.853 0.146 L 6.853 3.146 C 7.049 3.342 7.049 3.658 6.853 3.854 C 6.658 4.049 6.342 4.049 6.146 3.854 L 4 1.707 L 4 12.5 C 4 12.776 3.776 13 3.5 13 C 3.224 13 3 12.776 3 12.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body72 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 12.5 L 12 0.5 C 12 0.224 12.224 0 12.5 0 C 12.776 0 13 0.224 13 0.5 L 13 12.5 C 13 12.776 12.776 13 12.5 13 C 12.224 13 12 12.776 12 12.5 Z M 3.146 3.146 C 3.342 2.951 3.658 2.951 3.853 3.146 C 4.049 3.342 4.049 3.658 3.853 3.854 L 1.707 6 L 9.5 6 C 9.776 6 10 6.224 10 6.5 C 10 6.776 9.776 7 9.5 7 L 1.707 7 L 3.853 9.146 C 4.049 9.342 4.049 9.658 3.853 9.854 C 3.658 10.049 3.342 10.049 3.146 9.854 L 0.146 6.854 C -0.049 6.658 -0.049 6.342 0.146 6.146 L 3.146 3.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body73 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.5 L 0 0.5 C 0 0.224 0.224 0 0.5 0 C 0.776 0 1 0.224 1 0.5 L 1 12.5 C 1 12.776 0.776 13 0.5 13 C 0.224 13 0 12.776 0 12.5 Z M 6.146 3.146 C 6.342 2.951 6.658 2.951 6.854 3.146 C 7.049 3.342 7.049 3.658 6.854 3.854 L 4.707 6 L 12.5 6 C 12.776 6 13 6.224 13 6.5 C 13 6.776 12.776 7 12.5 7 L 4.707 7 L 6.854 9.146 C 7.049 9.342 7.049 9.658 6.854 9.854 C 6.658 10.049 6.342 10.049 6.146 9.854 L 3.146 6.854 C 2.951 6.658 2.951 6.342 3.146 6.146 L 6.146 3.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body74 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 12 C 12.776 12 13 12.224 13 12.5 C 13 12.776 12.776 13 12.5 13 L 0.5 13 C 0.224 13 0 12.776 0 12.5 C 0 12.224 0.224 12 0.5 12 L 12.5 12 Z M 6 0.5 C 6 0.224 6.224 0 6.5 0 C 6.776 0 7 0.224 7 0.5 L 7 8.293 L 9.146 6.146 C 9.342 5.951 9.658 5.951 9.854 6.146 C 10.049 6.342 10.049 6.658 9.854 6.854 L 6.854 9.854 C 6.658 10.049 6.342 10.049 6.146 9.854 L 3.146 6.854 C 2.951 6.658 2.951 6.342 3.146 6.146 C 3.342 5.951 3.658 5.951 3.854 6.146 L 6 8.293 L 6 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body75 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 3.5 C 6 3.224 6.224 3 6.5 3 C 6.776 3 7 3.224 7 3.5 L 7 11.293 L 9.146 9.146 C 9.342 8.951 9.658 8.951 9.854 9.146 C 10.049 9.342 10.049 9.658 9.854 9.854 L 6.854 12.854 C 6.658 13.049 6.342 13.049 6.146 12.854 L 3.146 9.854 C 2.951 9.658 2.951 9.342 3.146 9.146 C 3.342 8.951 3.658 8.951 3.854 9.146 L 6 11.293 L 6 3.5 Z M 12.5 0 C 12.776 0 13 0.224 13 0.5 C 13 0.776 12.776 1 12.5 1 L 0.5 1 C 0.224 1 0 0.776 0 0.5 C 0 0.224 0.224 0 0.5 0 L 12.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body76 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 12.5 L 6 4.707 L 3.854 6.854 C 3.658 7.049 3.342 7.049 3.146 6.854 C 2.951 6.658 2.951 6.342 3.146 6.146 L 6.146 3.146 L 6.225 3.082 C 6.419 2.954 6.683 2.976 6.854 3.146 L 9.854 6.146 C 10.049 6.342 10.049 6.658 9.854 6.854 C 9.658 7.049 9.342 7.049 9.146 6.854 L 7 4.707 L 7 12.5 C 7 12.776 6.776 13 6.5 13 C 6.224 13 6 12.776 6 12.5 Z M 12.5 0 C 12.776 0 13 0.224 13 0.5 C 13 0.776 12.776 1 12.5 1 L 0.5 1 C 0.224 1 0 0.776 0 0.5 C 0 0.224 0.224 0 0.5 0 L 12.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body77 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 13.000,
    viewBox: "0 0 13 13.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 12 C 12.776 12 13 12.224 13 12.5 C 13 12.776 12.776 13 12.5 13 L 0.5 13 C 0.224 13 0 12.776 0 12.5 C 0 12.224 0.224 12 0.5 12 L 12.5 12 Z M 6 9.5 L 6 1.707 L 3.854 3.854 C 3.658 4.049 3.342 4.049 3.146 3.854 C 2.951 3.658 2.951 3.342 3.146 3.147 L 6.146 0.147 L 6.225 0.082 C 6.419 -0.046 6.683 -0.024 6.854 0.147 L 9.854 3.147 C 10.049 3.342 10.049 3.658 9.854 3.854 C 9.658 4.049 9.342 4.049 9.146 3.854 L 7 1.707 L 7 9.5 C 7 9.776 6.776 10 6.5 10 C 6.224 10 6 9.776 6 9.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body78 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 12.5 L 12 0.5 C 12 0.224 12.224 0 12.5 0 C 12.776 0 13 0.224 13 0.5 L 13 12.5 C 13 12.776 12.776 13 12.5 13 C 12.224 13 12 12.776 12 12.5 Z M 6.146 3.146 C 6.342 2.951 6.658 2.951 6.854 3.146 L 9.854 6.146 C 10.049 6.342 10.049 6.658 9.854 6.854 L 6.854 9.854 C 6.658 10.049 6.342 10.049 6.146 9.854 C 5.951 9.658 5.951 9.342 6.146 9.146 L 8.293 7 L 0.5 7 C 0.224 7 0 6.776 0 6.5 C 0 6.224 0.224 6 0.5 6 L 8.293 6 L 6.146 3.854 C 5.951 3.658 5.951 3.342 6.146 3.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body79 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.5 L 0 0.5 C 0 0.224 0.224 0 0.5 0 C 0.776 0 1 0.224 1 0.5 L 1 12.5 C 1 12.776 0.776 13 0.5 13 C 0.224 13 0 12.776 0 12.5 Z M 9.146 3.146 C 9.342 2.951 9.658 2.951 9.854 3.146 L 12.854 6.146 C 13.049 6.342 13.049 6.658 12.854 6.854 L 9.854 9.854 C 9.658 10.049 9.342 10.049 9.146 9.854 C 8.951 9.658 8.951 9.342 9.146 9.146 L 11.293 7 L 3.5 7 C 3.224 7 3 6.776 3 6.5 C 3 6.224 3.224 6 3.5 6 L 11.293 6 L 9.146 3.854 C 8.951 3.658 8.951 3.342 9.146 3.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Variant=arrow-left, Type=Normal, Thick=True, Small=False
    "variant=arrow-left|type=normal|small=false|thick=true": __body0,
    // figma: Variant=arrow-down-left, Type=Normal, Thick=True, Small=False
    "variant=arrow-down-left|type=normal|small=false|thick=true": __body1,
    // figma: Variant=arrow-down, Type=Normal, Thick=True, Small=False
    "variant=arrow-down|type=normal|small=false|thick=true": __body2,
    // figma: Variant=arrow-down-right, Type=Normal, Thick=True, Small=False
    "variant=arrow-down-right|type=normal|small=false|thick=true": __body3,
    // figma: Variant=arrow-right, Type=Normal, Thick=True, Small=False
    "variant=arrow-right|type=normal|small=false|thick=true": __body4,
    // figma: Variant=arrow-up-right, Type=Normal, Thick=True, Small=False
    "variant=arrow-up-right|type=normal|small=false|thick=true": __body5,
    // figma: Variant=arrow-up, Type=Normal, Thick=True, Small=False
    "variant=arrow-up|type=normal|small=false|thick=true": __body6,
    // figma: Variant=arrow-up-left, Type=Normal, Thick=True, Small=False
    "variant=arrow-up-left|type=normal|small=false|thick=true": __body7,
    // figma: Variant=arrow-left, Type=Normal, Thick=False, Small=False
    "variant=arrow-left|type=normal|small=false|thick=false": __body8,
    // figma: Variant=arrow-down-left, Type=Normal, Thick=False, Small=False
    "variant=arrow-down-left|type=normal|small=false|thick=false": __body9,
    // figma: Variant=arrow-down, Type=Normal, Thick=False, Small=False
    "variant=arrow-down|type=normal|small=false|thick=false": __body10,
    // figma: Variant=arrow-down-right, Type=Normal, Thick=False, Small=False
    "variant=arrow-down-right|type=normal|small=false|thick=false": __body11,
    // figma: Variant=arrow-right, Type=Normal, Thick=False, Small=False
    "variant=arrow-right|type=normal|small=false|thick=false": __body12,
    // figma: Variant=arrow-up-right, Type=Normal, Thick=False, Small=False
    "variant=arrow-up-right|type=normal|small=false|thick=false": __body13,
    // figma: Variant=arrow-up, Type=Normal, Thick=False, Small=False
    "variant=arrow-up|type=normal|small=false|thick=false": __body14,
    // figma: Variant=arrow-up-left, Type=Normal, Thick=False, Small=False
    "variant=arrow-up-left|type=normal|small=false|thick=false": __body15,
    // figma: Variant=arrow-narrow-left, Type=Narrow, Thick=True, Small=False
    "variant=arrow-narrow-left|type=narrow|small=false|thick=true": __body16,
    // figma: Variant=arrow-narrow-down, Type=Narrow, Thick=True, Small=False
    "variant=arrow-narrow-down|type=narrow|small=false|thick=true": __body17,
    // figma: Variant=arrow-narrow-right, Type=Narrow, Thick=True, Small=False
    "variant=arrow-narrow-right|type=narrow|small=false|thick=true": __body18,
    // figma: Variant=arrow-narrow-up, Type=Narrow, Thick=True, Small=False
    "variant=arrow-narrow-up|type=narrow|small=false|thick=true": __body19,
    // figma: Variant=arrow-narrow-left-move, Type=Narrow, Thick=True, Small=False
    "variant=arrow-narrow-left-move|type=narrow|small=false|thick=true": __body20,
    // figma: Variant=arrow-narrow-left-alignment, Type=Narrow, Thick=True, Small=False
    "variant=arrow-narrow-left-alignment|type=narrow|small=false|thick=true": __body21,
    // figma: Variant=arrow-narrow-bottom-alignment, Type=Narrow, Thick=True, Small=False
    "variant=arrow-narrow-bottom-alignment|type=narrow|small=false|thick=true": __body22,
    // figma: Variant=arrow-narrow-down-move, Type=Narrow, Thick=True, Small=False
    "variant=arrow-narrow-down-move|type=narrow|small=false|thick=true": __body23,
    // figma: Variant=arrow-narrow-top-alignment, Type=Narrow, Thick=True, Small=False
    "variant=arrow-narrow-top-alignment|type=narrow|small=false|thick=true": __body24,
    // figma: Variant=arrow-narrow-up-move, Type=Narrow, Thick=True, Small=False
    "variant=arrow-narrow-up-move|type=narrow|small=false|thick=true": __body25,
    // figma: Variant=arrow-narrow-right-alignment, Type=Narrow, Thick=True, Small=False
    "variant=arrow-narrow-right-alignment|type=narrow|small=false|thick=true": __body26,
    // figma: Variant=arrow-narrow-right-move, Type=Narrow, Thick=True, Small=False
    "variant=arrow-narrow-right-move|type=narrow|small=false|thick=true": __body27,
    // figma: Variant=arrow-narrow-left, Type=Narrow, Thick=False, Small=False
    "variant=arrow-narrow-left|type=narrow|small=false|thick=false": __body28,
    // figma: Variant=arrow-narrow-down, Type=Narrow, Thick=False, Small=False
    "variant=arrow-narrow-down|type=narrow|small=false|thick=false": __body29,
    // figma: Variant=arrow-narrow-right, Type=Narrow, Thick=False, Small=False
    "variant=arrow-narrow-right|type=narrow|small=false|thick=false": __body30,
    // figma: Variant=arrow-narrow-up, Type=Narrow, Thick=False, Small=False
    "variant=arrow-narrow-up|type=narrow|small=false|thick=false": __body31,
    // figma: Variant=arrow-narrow-left-move, Type=Narrow, Thick=False, Small=False
    "variant=arrow-narrow-left-move|type=narrow|small=false|thick=false": __body32,
    // figma: Variant=arrow-narrow-left-alignment, Type=Narrow, Thick=False, Small=False
    "variant=arrow-narrow-left-alignment|type=narrow|small=false|thick=false": __body33,
    // figma: Variant=arrow-narrow-bottom-alignment, Type=Narrow, Thick=False, Small=False
    "variant=arrow-narrow-bottom-alignment|type=narrow|small=false|thick=false": __body34,
    // figma: Variant=arrow-narrow-down-move, Type=Narrow, Thick=False, Small=False
    "variant=arrow-narrow-down-move|type=narrow|small=false|thick=false": __body35,
    // figma: Variant=arrow-narrow-top-alignment, Type=Narrow, Thick=False, Small=False
    "variant=arrow-narrow-top-alignment|type=narrow|small=false|thick=false": __body36,
    // figma: Variant=arrow-narrow-up-move, Type=Narrow, Thick=False, Small=False
    "variant=arrow-narrow-up-move|type=narrow|small=false|thick=false": __body37,
    // figma: Variant=arrow-narrow-right-alignment, Type=Narrow, Thick=False, Small=False
    "variant=arrow-narrow-right-alignment|type=narrow|small=false|thick=false": __body38,
    // figma: Variant=arrow-narrow-right-move, Type=Narrow, Thick=False, Small=False
    "variant=arrow-narrow-right-move|type=narrow|small=false|thick=false": __body39,
    // figma: Variant=arrow-left, Type=Normal, Thick=True, Small=True
    "variant=arrow-left|type=normal|small=true|thick=true": __body40,
    // figma: Variant=arrow-down-left, Type=Normal, Thick=True, Small=True
    "variant=arrow-down-left|type=normal|small=true|thick=true": __body41,
    // figma: Variant=arrow-down, Type=Normal, Thick=True, Small=True
    "variant=arrow-down|type=normal|small=true|thick=true": __body42,
    // figma: Variant=arrow-down-right, Type=Normal, Thick=True, Small=True
    "variant=arrow-down-right|type=normal|small=true|thick=true": __body43,
    // figma: Variant=arrow-right, Type=Normal, Thick=True, Small=True
    "variant=arrow-right|type=normal|small=true|thick=true": __body44,
    // figma: Variant=arrow-up-right, Type=Normal, Thick=True, Small=True
    "variant=arrow-up-right|type=normal|small=true|thick=true": __body45,
    // figma: Variant=arrow-up, Type=Normal, Thick=True, Small=True
    "variant=arrow-up|type=normal|small=true|thick=true": __body46,
    // figma: Variant=arrow-up-left, Type=Normal, Thick=True, Small=True
    "variant=arrow-up-left|type=normal|small=true|thick=true": __body47,
    // figma: Variant=arrow-left, Type=Normal, Thick=False, Small=True
    "variant=arrow-left|type=normal|small=true|thick=false": __body48,
    // figma: Variant=arrow-down-left, Type=Normal, Thick=False, Small=True
    "variant=arrow-down-left|type=normal|small=true|thick=false": __body49,
    // figma: Variant=arrow-down, Type=Normal, Thick=False, Small=True
    "variant=arrow-down|type=normal|small=true|thick=false": __body50,
    // figma: Variant=arrow-down-right, Type=Normal, Thick=False, Small=True
    "variant=arrow-down-right|type=normal|small=true|thick=false": __body51,
    // figma: Variant=arrow-right, Type=Normal, Thick=False, Small=True
    "variant=arrow-right|type=normal|small=true|thick=false": __body52,
    // figma: Variant=arrow-up-right, Type=Normal, Thick=False, Small=True
    "variant=arrow-up-right|type=normal|small=true|thick=false": __body53,
    // figma: Variant=arrow-up, Type=Normal, Thick=False, Small=True
    "variant=arrow-up|type=normal|small=true|thick=false": __body54,
    // figma: Variant=arrow-up-left, Type=Normal, Thick=False, Small=True
    "variant=arrow-up-left|type=normal|small=true|thick=false": __body55,
    // figma: Variant=arrow-narrow-left, Type=Narrow, Thick=True, Small=True
    "variant=arrow-narrow-left|type=narrow|small=true|thick=true": __body56,
    // figma: Variant=arrow-narrow-down, Type=Narrow, Thick=True, Small=True
    "variant=arrow-narrow-down|type=narrow|small=true|thick=true": __body57,
    // figma: Variant=arrow-narrow-right, Type=Narrow, Thick=True, Small=True
    "variant=arrow-narrow-right|type=narrow|small=true|thick=true": __body58,
    // figma: Variant=arrow-narrow-up, Type=Narrow, Thick=True, Small=True
    "variant=arrow-narrow-up|type=narrow|small=true|thick=true": __body59,
    // figma: Variant=arrow-narrow-left-move, Type=Narrow, Thick=True, Small=True
    "variant=arrow-narrow-left-move|type=narrow|small=true|thick=true": __body60,
    // figma: Variant=arrow-narrow-left-alignment, Type=Narrow, Thick=True, Small=True
    "variant=arrow-narrow-left-alignment|type=narrow|small=true|thick=true": __body61,
    // figma: Variant=arrow-narrow-bottom-alignment, Type=Narrow, Thick=True, Small=True
    "variant=arrow-narrow-bottom-alignment|type=narrow|small=true|thick=true": __body62,
    // figma: Variant=arrow-narrow-down-move, Type=Narrow, Thick=True, Small=True
    "variant=arrow-narrow-down-move|type=narrow|small=true|thick=true": __body63,
    // figma: Variant=arrow-narrow-top-alignment, Type=Narrow, Thick=True, Small=True
    "variant=arrow-narrow-top-alignment|type=narrow|small=true|thick=true": __body64,
    // figma: Variant=arrow-narrow-up-move, Type=Narrow, Thick=True, Small=True
    "variant=arrow-narrow-up-move|type=narrow|small=true|thick=true": __body65,
    // figma: Variant=arrow-narrow-right-alignment, Type=Narrow, Thick=True, Small=True
    "variant=arrow-narrow-right-alignment|type=narrow|small=true|thick=true": __body66,
    // figma: Variant=arrow-narrow-right-move, Type=Narrow, Thick=True, Small=True
    "variant=arrow-narrow-right-move|type=narrow|small=true|thick=true": __body67,
    // figma: Variant=arrow-narrow-left, Type=Narrow, Thick=False, Small=True
    "variant=arrow-narrow-left|type=narrow|small=true|thick=false": __body68,
    // figma: Variant=arrow-narrow-down, Type=Narrow, Thick=False, Small=True
    "variant=arrow-narrow-down|type=narrow|small=true|thick=false": __body69,
    // figma: Variant=arrow-narrow-right, Type=Narrow, Thick=False, Small=True
    "variant=arrow-narrow-right|type=narrow|small=true|thick=false": __body70,
    // figma: Variant=arrow-narrow-up, Type=Narrow, Thick=False, Small=True
    "variant=arrow-narrow-up|type=narrow|small=true|thick=false": __body71,
    // figma: Variant=arrow-narrow-left-move, Type=Narrow, Thick=False, Small=True
    "variant=arrow-narrow-left-move|type=narrow|small=true|thick=false": __body72,
    // figma: Variant=arrow-narrow-left-alignment, Type=Narrow, Thick=False, Small=True
    "variant=arrow-narrow-left-alignment|type=narrow|small=true|thick=false": __body73,
    // figma: Variant=arrow-narrow-bottom-alignment, Type=Narrow, Thick=False, Small=True
    "variant=arrow-narrow-bottom-alignment|type=narrow|small=true|thick=false": __body74,
    // figma: Variant=arrow-narrow-down-move, Type=Narrow, Thick=False, Small=True
    "variant=arrow-narrow-down-move|type=narrow|small=true|thick=false": __body75,
    // figma: Variant=arrow-narrow-top-alignment, Type=Narrow, Thick=False, Small=True
    "variant=arrow-narrow-top-alignment|type=narrow|small=true|thick=false": __body76,
    // figma: Variant=arrow-narrow-up-move, Type=Narrow, Thick=False, Small=True
    "variant=arrow-narrow-up-move|type=narrow|small=true|thick=false": __body77,
    // figma: Variant=arrow-narrow-right-alignment, Type=Narrow, Thick=False, Small=True
    "variant=arrow-narrow-right-alignment|type=narrow|small=true|thick=false": __body78,
    // figma: Variant=arrow-narrow-right-move, Type=Narrow, Thick=False, Small=True
    "variant=arrow-narrow-right-move|type=narrow|small=true|thick=false": __body79
  };
  return (__impls[__vkey_IconArrowNarrow(props)] ?? __body0)();
}

// figma node: 471:20916 Card/Horizontal-banner (2 variants)
const __venc_CardHorizontalBanner = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_CardHorizontalBanner = p => "variant=" + __venc_CardHorizontalBanner(p.variant) + '|' + "full=" + __venc_CardHorizontalBanner(p.full);
function CardHorizontalBanner(_p = {}) {
  const props = {
    ..._p,
    showADBadge: _p.showADBadge ?? true,
    variant: _p.variant ?? "box",
    showCategoryBadge: _p.showCategoryBadge ?? true,
    full: _p.full ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 361,
      height: 96,
      overflow: "hidden",
      borderRadius: 4,
      background: "linear-gradient(var(--gray-white-ff),var(--gray-white-ff)), linear-gradient(rgb(238,240,249),rgb(238,240,249))",
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 14,
      width: 68,
      height: 68,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(247,226,222)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 68
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 104,
      top: 18.5,
      width: 217,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      justifyContent: "center",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, props.text1 ?? "인천 갑오징어 일왕!\n조황으로 증명합니다."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 15,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "인천 에프투호"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 5,
      height: 9,
      flexShrink: 0,
      color: "rgb(119,54,169)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevron, {
    variant: "chevron-right",
    small: false,
    double: false,
    thick: false,
    tight: true,
    style: {
      transform: "scale(0.625, 0.643)",
      transformOrigin: "0 0"
    }
  })))), props.showADBadge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 328,
      top: 74,
      width: 25
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(ADMark, {
    color: "black"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 120,
      background: "linear-gradient(var(--background-neutral-neutral3),var(--background-neutral-neutral3)), linear-gradient(var(--label-purple-assitive),var(--label-purple-assitive))",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3c8ed8085761c337-14056deb",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      height: 120
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 23.5,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "flex-start"
    }
  }, props.showCategoryBadge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 59,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(26,26,26)",
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
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
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
      borderRadius: 2,
      color: "var(--gray-black3-00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8.535 L 0 7.807 C 0 7.556 0.204 7.353 0.455 7.353 C 0.706 7.353 0.909 7.556 0.909 7.807 L 0.909 8.535 C 0.909 8.842 1.158 9.091 1.465 9.091 L 2.193 9.091 C 2.444 9.091 2.647 9.294 2.647 9.545 C 2.647 9.796 2.444 10 2.193 10 L 1.465 10 C 0.656 10 0 9.344 0 8.535 Z M 6.144 9.091 C 6.395 9.091 6.598 9.294 6.598 9.545 C 6.598 9.796 6.395 10 6.144 10 L 3.856 10 C 3.605 10 3.402 9.796 3.402 9.545 C 3.402 9.294 3.605 9.091 3.856 9.091 L 6.144 9.091 Z M 9.091 8.535 L 9.091 7.807 C 9.091 7.556 9.294 7.353 9.545 7.353 C 9.796 7.353 10 7.556 10 7.807 L 10 8.535 C 10 9.344 9.344 10 8.535 10 L 7.807 10 C 7.556 10 7.353 9.796 7.353 9.545 C 7.353 9.294 7.556 9.091 7.807 9.091 L 8.535 9.091 C 8.842 9.091 9.091 8.842 9.091 8.535 Z M 0 6.144 L 0 3.856 C 0 3.605 0.204 3.402 0.455 3.402 C 0.706 3.402 0.909 3.605 0.909 3.856 L 0.909 6.144 C 0.909 6.395 0.706 6.598 0.455 6.598 C 0.204 6.598 0 6.395 0 6.144 Z M 9.091 6.144 L 9.091 3.856 C 9.091 3.605 9.294 3.402 9.545 3.402 C 9.796 3.402 10 3.605 10 3.856 L 10 6.144 C 10 6.395 9.796 6.598 9.545 6.598 C 9.294 6.598 9.091 6.395 9.091 6.144 Z M 0 2.193 L 0 1.465 C 0 0.656 0.656 0 1.465 0 L 2.193 0 C 2.444 0 2.647 0.204 2.647 0.455 C 2.647 0.706 2.444 0.909 2.193 0.909 L 1.465 0.909 C 1.158 0.909 0.909 1.158 0.909 1.465 L 0.909 2.193 C 0.909 2.444 0.706 2.647 0.455 2.647 C 0.204 2.647 0 2.444 0 2.193 Z M 9.091 2.193 L 9.091 1.465 C 9.091 1.158 8.842 0.909 8.535 0.909 L 7.807 0.909 C 7.556 0.909 7.353 0.706 7.353 0.455 C 7.353 0.204 7.556 0 7.807 0 L 8.535 0 C 9.344 0 10 0.656 10 1.465 L 10 2.193 C 10 2.444 9.796 2.647 9.545 2.647 C 9.294 2.647 9.091 2.444 9.091 2.193 Z M 6.144 0 C 6.395 0 6.598 0.204 6.598 0.455 C 6.598 0.706 6.395 0.909 6.144 0.909 L 3.856 0.909 C 3.605 0.909 3.402 0.706 3.402 0.455 C 3.402 0.204 3.605 0 3.856 0 L 6.144 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(200,244,51)",
      flexShrink: 0
    }
  }, "\uD560\uC778\uC774\uBCA4\uD2B8"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
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
      borderRadius: 2,
      color: "var(--gray-black3-00)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8.535 L 0 7.807 C 0 7.556 0.204 7.353 0.455 7.353 C 0.706 7.353 0.909 7.556 0.909 7.807 L 0.909 8.535 C 0.909 8.842 1.158 9.091 1.465 9.091 L 2.193 9.091 C 2.444 9.091 2.647 9.294 2.647 9.545 C 2.647 9.796 2.444 10 2.193 10 L 1.465 10 C 0.656 10 0 9.344 0 8.535 Z M 6.144 9.091 C 6.395 9.091 6.598 9.294 6.598 9.545 C 6.598 9.796 6.395 10 6.144 10 L 3.856 10 C 3.605 10 3.402 9.796 3.402 9.545 C 3.402 9.294 3.605 9.091 3.856 9.091 L 6.144 9.091 Z M 9.091 8.535 L 9.091 7.807 C 9.091 7.556 9.294 7.353 9.545 7.353 C 9.796 7.353 10 7.556 10 7.807 L 10 8.535 C 10 9.344 9.344 10 8.535 10 L 7.807 10 C 7.556 10 7.353 9.796 7.353 9.545 C 7.353 9.294 7.556 9.091 7.807 9.091 L 8.535 9.091 C 8.842 9.091 9.091 8.842 9.091 8.535 Z M 0 6.144 L 0 3.856 C 0 3.605 0.204 3.402 0.455 3.402 C 0.706 3.402 0.909 3.605 0.909 3.856 L 0.909 6.144 C 0.909 6.395 0.706 6.598 0.455 6.598 C 0.204 6.598 0 6.395 0 6.144 Z M 9.091 6.144 L 9.091 3.856 C 9.091 3.605 9.294 3.402 9.545 3.402 C 9.796 3.402 10 3.605 10 3.856 L 10 6.144 C 10 6.395 9.796 6.598 9.545 6.598 C 9.294 6.598 9.091 6.395 9.091 6.144 Z M 0 2.193 L 0 1.465 C 0 0.656 0.656 0 1.465 0 L 2.193 0 C 2.444 0 2.647 0.204 2.647 0.455 C 2.647 0.706 2.444 0.909 2.193 0.909 L 1.465 0.909 C 1.158 0.909 0.909 1.158 0.909 1.465 L 0.909 2.193 C 0.909 2.444 0.706 2.647 0.455 2.647 C 0.204 2.647 0 2.444 0 2.193 Z M 9.091 2.193 L 9.091 1.465 C 9.091 1.158 8.842 0.909 8.535 0.909 L 7.807 0.909 C 7.556 0.909 7.353 0.706 7.353 0.455 C 7.353 0.204 7.556 0 7.807 0 L 8.535 0 C 9.344 0 10 0.656 10 1.465 L 10 2.193 C 10 2.444 9.796 2.647 9.545 2.647 C 9.294 2.647 9.091 2.444 9.091 2.193 Z M 6.144 0 C 6.395 0 6.598 0.204 6.598 0.455 C 6.598 0.706 6.395 0.909 6.144 0.909 L 3.856 0.909 C 3.605 0.909 3.402 0.706 3.402 0.455 C 3.402 0.204 3.605 0 3.856 0 L 6.144 0 Z",
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
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 19,
      lineHeight: "100%",
      letterSpacing: "-0.030em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "홍원항 선단 20% 할인"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "9월 주꾸미도 예약 가능!"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 349,
      top: 76,
      width: 28,
      height: 28,
      borderRadius: 15.999999046325684,
      backgroundColor: "var(--gray-whiteff)",
      boxShadow: "0 0 0 0.914px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowNarrow, {
    variant: "arrow-narrow-right",
    type: "narrow",
    small: false,
    thick: true,
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), props.showADBadge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 360,
      top: 8,
      width: 25
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(ADMark, {
    color: "black"
  })));
  const __impls = {
    // figma: Variant=Box, Full=False
    "variant=box|full=false": __body0,
    // figma: Variant=Full, Full=True
    "variant=full|full=true": __body1
  };
  return (__impls[__vkey_CardHorizontalBanner(props)] ?? __body0)();
}

// figma node: 178:11085 clock-eight (4 variants)
const __venc_ClockEight = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ClockEight = p => "style2=" + __venc_ClockEight(p.style2);
function ClockEight(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "linear"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
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
    d: "M 9 9 L 9.514 9.857 C 9.816 9.677 10 9.351 10 9 L 9 9 Z M 10 4 C 10 3.448 9.552 3 9 3 C 8.448 3 8 3.448 8 4 L 9 4 L 10 4 Z M 5.986 9.643 C 5.512 9.927 5.358 10.541 5.643 11.014 C 5.927 11.488 6.541 11.642 7.014 11.357 L 6.5 10.5 L 5.986 9.643 Z M 18 9 L 17 9 C 17 13.418 13.418 17 9 17 L 9 18 L 9 19 C 14.523 19 19 14.523 19 9 L 18 9 Z M 9 18 L 9 17 C 4.582 17 1 13.418 1 9 L 0 9 L -1 9 C -1 14.523 3.477 19 9 19 L 9 18 Z M 0 9 L 1 9 C 1 4.582 4.582 1 9 1 L 9 0 L 9 -1 C 3.477 -1 -1 3.477 -1 9 L 0 9 Z M 9 0 L 9 1 C 13.418 1 17 4.582 17 9 L 18 9 L 19 9 C 19 3.477 14.523 -1 9 -1 L 9 0 Z M 9 9 L 10 9 L 10 4 L 9 4 L 8 4 L 8 9 L 9 9 Z M 9 9 L 8.486 8.143 L 5.986 9.643 L 6.5 10.5 L 7.014 11.357 L 9.514 9.857 L 9 9 Z",
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
      color: "rgb(0,0,0)",
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
    d: "M 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 Z M 11 5 C 11 4.448 10.552 4 10 4 C 9.448 4 9 4.448 9 5 L 9 9.434 L 6.986 10.643 C 6.512 10.927 6.359 11.541 6.643 12.014 C 6.927 12.488 7.541 12.642 8.015 12.357 L 10.515 10.857 C 10.816 10.677 11 10.351 11 10 L 11 5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
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
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      opacity: 0.14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
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
    d: "M 9 9 L 9.514 9.857 C 9.816 9.677 10 9.351 10 9 L 9 9 Z M 10 4 C 10 3.448 9.552 3 9 3 C 8.448 3 8 3.448 8 4 L 9 4 L 10 4 Z M 5.986 9.643 C 5.512 9.927 5.358 10.541 5.643 11.014 C 5.927 11.488 6.541 11.642 7.014 11.357 L 6.5 10.5 L 5.986 9.643 Z M 18 9 L 17 9 C 17 13.418 13.418 17 9 17 L 9 18 L 9 19 C 14.523 19 19 14.523 19 9 L 18 9 Z M 9 18 L 9 17 C 4.582 17 1 13.418 1 9 L 0 9 L -1 9 C -1 14.523 3.477 19 9 19 L 9 18 Z M 0 9 L 1 9 C 1 4.582 4.582 1 9 1 L 9 0 L 9 -1 C 3.477 -1 -1 3.477 -1 9 L 0 9 Z M 9 0 L 9 1 C 13.418 1 17 4.582 17 9 L 18 9 L 19 9 C 19 3.477 14.523 -1 9 -1 L 9 0 Z M 9 9 L 10 9 L 10 4 L 9 4 L 8 4 L 8 9 L 9 9 Z M 9 9 L 8.486 8.143 L 5.986 9.643 L 6.5 10.5 L 7.014 11.357 L 9.514 9.857 L 9 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
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
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.500,
    height: 8.500,
    viewBox: "0 0 4.500 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.5,
      top: 6,
      width: 4.5,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 1 C 4.5 0.448 4.052 0 3.5 0 C 2.948 0 2.5 0.448 2.5 1 L 2.5 5.434 L 0.486 6.643 C 0.012 6.927 -0.141 7.541 0.143 8.014 C 0.427 8.488 1.041 8.642 1.515 8.357 L 4.015 6.857 C 4.316 6.677 4.5 6.351 4.5 6 L 4.5 1 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Style=Linear
    "style2=linear": __body0,
    // figma: Style=Solid
    "style2=solid": __body1,
    // figma: Style=Duotone
    "style2=duotone": __body2,
    // figma: Style=Monochrome
    "style2=monochrome": __body3
  };
  return (__impls[__vkey_ClockEight(props)] ?? __body0)();
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

// figma node: 768:24305 Icon/Reward-money (2 variants)
const __venc_IconRewardMoney = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconRewardMoney = p => "variant=" + __venc_IconRewardMoney(p.variant) + '|' + "fill=" + __venc_IconRewardMoney(p.fill);
function IconRewardMoney(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "money",
    fill: _p.fill ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 120.00000762939453,
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 16.209,
    viewBox: "0 0 18 16.209",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.001,
      top: 3.896,
      width: 18,
      height: 16.209
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 4.724 0 L 8.91 10.209 L 9.09 10.209 L 13.276 0 L 18 0 L 18 16.209 L 14.284 16.209 L 14.284 6.134 L 14.149 6.134 L 10.209 16.119 L 7.791 16.119 L 3.851 6.09 L 3.716 6.09 L 3.716 16.209 L 0 16.209 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 120.00000762939453,
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
    d: "M 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 Z M 4.751 5.272 L 4.751 14.728 L 6.919 14.728 L 6.919 8.824 L 6.997 8.824 L 9.296 14.676 L 10.706 14.676 L 13.005 8.851 L 13.083 8.851 L 13.083 14.728 L 15.251 14.728 L 15.251 5.272 L 12.495 5.272 L 10.053 11.228 L 9.949 11.228 L 7.507 5.272 L 4.751 5.272 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Variant=Money, Fill=False
    "variant=money|fill=false": __body0,
    // figma: Variant=MoneyFill, Fill=True
    "variant=moneyfill|fill=true": __body1
  };
  return (__impls[__vkey_IconRewardMoney(props)] ?? __body0)();
}

// figma node: 756:24081 Icon/Trophy (2 variants)
const __venc_IconTrophy4 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconTrophy4 = p => "variant=" + __venc_IconTrophy4(p.variant) + '|' + "fill=" + __venc_IconTrophy4(p.fill);
function IconTrophy4(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "trophy",
    fill: _p.fill ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--label-neutral-black)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.000,
    height: 20,
    viewBox: "0 0 20.000 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.998 4.011 C 17.998 4.008 17.997 4.005 17.997 4.002 C 17.995 4.002 17.992 4.002 17.989 4.002 C 17.94 4 17.873 4 17.75 4 L 16 4 L 16 6.993 C 16.194 6.988 16.301 6.98 16.391 6.962 C 17.184 6.804 17.804 6.184 17.962 5.391 C 17.996 5.222 18 4.995 18 4.25 C 18 4.127 18 4.06 17.998 4.011 Z M 10 16 C 9.006 16 8.705 16.009 8.483 16.068 C 7.792 16.253 7.253 16.792 7.069 17.482 C 7.037 17.601 7.02 17.742 7.011 18 L 12.989 18 C 12.98 17.742 12.964 17.601 12.932 17.482 C 12.747 16.792 12.208 16.253 11.518 16.068 C 11.295 16.009 10.995 16 10 16 Z M 6.571 2 C 6.289 2 6.135 2.001 6.024 2.01 C 6.019 2.01 6.015 2.01 6.011 2.011 C 6.011 2.015 6.01 2.019 6.01 2.023 C 6.001 2.135 6 2.289 6 2.571 L 6 7 C 6 7.275 6.028 7.543 6.08 7.801 C 6.451 9.626 8.066 11 10 11 C 11.934 11 13.55 9.626 13.92 7.801 C 13.972 7.543 14 7.275 14 7 L 14 2.571 C 14 2.289 13.999 2.135 13.99 2.023 C 13.99 2.019 13.989 2.015 13.988 2.011 C 13.985 2.01 13.981 2.01 13.977 2.01 C 13.866 2.001 13.711 2 13.429 2 L 6.571 2 Z M 2 4.25 C 2 4.995 2.005 5.222 2.038 5.391 C 2.196 6.184 2.816 6.804 3.61 6.962 C 3.7 6.98 3.807 6.988 4 6.993 L 4 4 L 2.25 4 C 2.127 4 2.06 4 2.011 4.002 C 2.008 4.002 2.005 4.002 2.002 4.002 C 2.002 4.005 2.002 4.008 2.002 4.011 C 2 4.06 2 4.127 2 4.25 Z M 20 4.25 C 20 4.899 20.005 5.37 19.923 5.78 C 19.607 7.367 18.367 8.607 16.78 8.923 C 16.461 8.986 16.106 8.994 15.658 8.996 C 14.943 11.024 13.17 12.551 11 12.915 L 11 14.01 C 11.392 14.023 11.728 14.054 12.035 14.137 C 13.416 14.507 14.494 15.584 14.863 16.965 C 15.008 17.506 15 18.134 15 19 C 15 19.552 14.552 20 14 20 L 6 20 C 5.448 20 5 19.552 5 19 C 5 18.134 4.992 17.506 5.137 16.965 C 5.507 15.584 6.585 14.507 7.965 14.137 C 8.272 14.054 8.608 14.023 9 14.01 L 9 12.915 C 6.83 12.551 5.057 11.024 4.341 8.996 C 3.894 8.994 3.539 8.986 3.22 8.923 C 1.633 8.607 0.393 7.367 0.077 5.78 C -0.004 5.37 0 4.899 0 4.25 C 0 4.066 -0.005 3.827 0.038 3.609 C 0.196 2.816 0.816 2.196 1.61 2.038 C 1.827 1.995 2.066 2 2.25 2 L 4.01 2 C 4.012 1.955 4.013 1.91 4.016 1.868 C 4.033 1.651 4.073 1.393 4.198 1.132 C 4.395 0.724 4.724 0.395 5.132 0.198 C 5.393 0.072 5.651 0.033 5.868 0.016 C 6.075 0 6.321 0 6.571 0 L 13.429 0 C 13.68 0 13.925 0 14.132 0.016 C 14.35 0.033 14.607 0.072 14.868 0.198 C 15.276 0.395 15.605 0.724 15.802 1.132 C 15.928 1.393 15.968 1.651 15.985 1.868 C 15.988 1.91 15.988 1.955 15.99 2 L 17.75 2 C 17.935 2 18.173 1.995 18.391 2.038 C 19.134 2.186 19.726 2.741 19.927 3.463 L 19.962 3.609 L 19.986 3.775 C 20.002 3.943 20 4.112 20 4.25 Z",
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
    height: 20,
    viewBox: "0 0 20.000 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.541 0 C 6.551 0 6.561 0 6.572 0 L 13.459 0 C 13.699 0 13.933 0 14.132 0.015 C 14.349 0.032 14.607 0.072 14.868 0.198 C 15.276 0.395 15.606 0.724 15.802 1.132 C 15.928 1.393 15.968 1.651 15.985 1.868 C 15.988 1.911 15.991 1.955 15.993 2 L 17.75 2 C 17.767 2 17.784 2 17.801 2 C 17.977 2 18.192 1.999 18.39 2.038 C 19.184 2.196 19.804 2.816 19.962 3.61 C 20.001 3.808 20.001 4.023 20 4.199 C 20 4.217 20 4.234 20 4.25 C 20 4.285 20 4.319 20 4.353 C 20 4.949 20.001 5.392 19.923 5.78 C 19.608 7.367 18.367 8.608 16.781 8.923 C 16.461 8.987 16.106 8.998 15.659 9 C 14.942 11.026 13.169 12.553 11 12.917 L 11 14.008 C 11.392 14.021 11.728 14.054 12.035 14.136 C 13.416 14.506 14.494 15.584 14.864 16.965 C 15.001 17.476 15.001 18.067 15 18.862 C 15 18.908 15 18.953 15 19 C 15 19.552 14.552 20 14 20 L 6 20 C 5.448 20 5 19.552 5 19 C 5 18.953 5 18.908 5 18.862 C 5 18.067 4.999 17.476 5.136 16.965 C 5.506 15.584 6.585 14.506 7.965 14.136 C 8.272 14.054 8.608 14.021 9 14.008 L 9 12.917 C 6.831 12.553 5.058 11.026 4.342 9 C 3.894 8.998 3.539 8.987 3.22 8.923 C 1.633 8.608 0.393 7.367 0.077 5.78 C 0 5.392 0 4.949 0 4.353 C 0 4.319 0 4.285 0 4.25 C 0 4.234 0 4.217 0 4.199 C 0 4.023 -0.001 3.808 0.039 3.61 C 0.196 2.816 0.817 2.196 1.61 2.038 C 1.808 1.999 2.023 2 2.199 2 C 2.217 2 2.234 2 2.25 2 L 4.008 2 C 4.01 1.955 4.012 1.911 4.016 1.868 C 4.033 1.651 4.072 1.393 4.198 1.132 C 4.395 0.724 4.724 0.395 5.132 0.198 C 5.394 0.072 5.651 0.032 5.869 0.015 C 6.067 0 6.301 0 6.541 0 Z M 4 4 L 2.25 4 C 2.127 4 2.06 4 2.011 4.002 C 2.008 4.002 2.005 4.002 2.002 4.002 C 2.002 4.005 2.002 4.008 2.002 4.011 C 2 4.06 2 4.127 2 4.25 C 2 4.995 2.005 5.221 2.039 5.39 C 2.196 6.184 2.817 6.804 3.61 6.962 C 3.7 6.98 3.807 6.989 4 6.994 L 4 4 Z M 16 4 L 16 6.994 C 16.194 6.989 16.3 6.98 16.39 6.962 C 17.184 6.804 17.804 6.184 17.962 5.39 C 17.995 5.221 18 4.995 18 4.25 C 18 4.127 18 4.06 17.998 4.011 C 17.998 4.008 17.998 4.005 17.998 4.002 C 17.995 4.002 17.993 4.002 17.989 4.002 C 17.94 4 17.873 4 17.75 4 L 16 4 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Variant=Trophy, Fill=False
    "variant=trophy|fill=false": __body0,
    // figma: Variant=TrophyFill, Fill=True
    "variant=trophyfill|fill=true": __body1
  };
  return (__impls[__vkey_IconTrophy4(props)] ?? __body0)();
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

// figma node: 130:10290 Ratio/Vertical (19 variants)
const __venc_RatioVertical2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_RatioVertical2 = p => "aspectRatio=" + __venc_RatioVertical2(p.aspectRatio);
function RatioVertical2(_p = {}) {
  const props = {
    ..._p,
    showImage: _p.showImage ?? true,
    aspectRatio: _p.aspectRatio ?? "1:1"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 120,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 83.33,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 125,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 133.33,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 150,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 160,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 80,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 75,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 66.67,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 62.5,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 61.73,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 56.25,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 50,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 42.86,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 161.8,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 177.78,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 200,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 233.33,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, props.showImage && /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __impls = {
    // figma: Aspect Ratio=1:1
    "aspectRatio=1:1": __body0,
    // figma: Aspect Ratio=5:6
    "aspectRatio=5:6": __body1,
    // figma: Aspect Ratio=6:5
    "aspectRatio=6:5": __body2,
    // figma: Aspect Ratio=4:5
    "aspectRatio=4:5": __body3,
    // figma: Aspect Ratio=3:4
    "aspectRatio=3:4": __body4,
    // figma: Aspect Ratio=2:3
    "aspectRatio=2:3": __body5,
    // figma: Aspect Ratio=10:16
    "aspectRatio=10:16": __body6,
    // figma: Aspect Ratio=5:4
    "aspectRatio=5:4": __body7,
    // figma: Aspect Ratio=4:3
    "aspectRatio=4:3": __body8,
    // figma: Aspect Ratio=3:2
    "aspectRatio=3:2": __body9,
    // figma: Aspect Ratio=16:10
    "aspectRatio=16:10": __body10,
    // figma: Aspect Ratio=1.618:1
    "aspectRatio=1.618:1": __body11,
    // figma: Aspect Ratio=16:9
    "aspectRatio=16:9": __body12,
    // figma: Aspect Ratio=2:1
    "aspectRatio=2:1": __body13,
    // figma: Aspect Ratio=21:9
    "aspectRatio=21:9": __body14,
    // figma: Aspect Ratio=1:1.618
    "aspectRatio=1:1.618": __body15,
    // figma: Aspect Ratio=9:16
    "aspectRatio=9:16": __body16,
    // figma: Aspect Ratio=1:2
    "aspectRatio=1:2": __body17,
    // figma: Aspect Ratio=9:21
    "aspectRatio=9:21": __body18
  };
  return (__impls[__vkey_RatioVertical2(props)] ?? __body0)();
}

// figma node: 857:29903 새소식-B[피드타입]
function B(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 3543,
      overflow: "hidden",
      backgroundColor: "var(--background-neutral-neutral1)",
      position: "relative",
      color: "var(--label-neutral-gray6-aa)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 116,
      width: 393,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 22,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "5\uC6D4 21\uC77C(\uBAA9)"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray4-cc)",
      flexShrink: 0
    }
  }, "/"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC2E0\uC9C4\uB3C4\uD56D"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--background-neutral-neutral4)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "1px 1px 1px 1px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement(IconChevron, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(26,26,26)"
    },
    variant: "chevron-down",
    small: false,
    double: false,
    thick: true,
    tight: false
  }))))), /*#__PURE__*/React.createElement("div", {
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
      gap: 8,
      padding: "0px 20px 0px 20px",
      alignItems: "flex-start",
      boxSizing: "border-box",
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
      fontWeight: 500,
      fontSize: 24,
      lineHeight: "100%",
      letterSpacing: "-0.030em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "오늘은 출조하기", "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(0,65,255)"
    }
  }, "딱 좋은 날"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(54,54,54)"
    }
  }, "이에요.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      height: 50,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconWeather, {
    style: {
      transform: "scale(2.083, 2.083)",
      transformOrigin: "0 0"
    },
    variant: "a-little-cloud"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 20px 0px 20px",
      alignItems: "center",
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
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uD30C\uACE0 0.5m"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 12,
      backgroundColor: "var(--line-line-neutral5-e0)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC218\uC628 17\xB0C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 12,
      backgroundColor: "var(--line-line-neutral5-e0)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uD48D\uC18D 3m/s"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 12,
      backgroundColor: "var(--line-line-neutral5-e0)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uB9CC\uC870 06:42"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      boxSizing: "border-box",
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
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC2E0\uC9C4\uB3C4\uD56D \uC8FC\uB9D0 \uB0A0\uC528\uB294?")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      width: 361,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-white-ff)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
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
      fontWeight: 600,
      fontSize: 14.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0
    }
  }, "\uB0B4 \uC608\uC57D"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 4,
      height: 4,
      borderRadius: "50%",
      backgroundColor: "var(--label-cool-neutral-cn5)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 4,
      height: 4,
      borderRadius: "50%",
      backgroundColor: "var(--label-cool-neutral-cn2)",
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
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
      gap: 16,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      overflow: "hidden",
      borderRadius: 4,
      background: "linear-gradient(var(--gray-grayee),var(--gray-grayee)), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      display: "flex",
      flexDirection: "row",
      gap: 15.094339370727539,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexShrink: 0,
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-cool-neutral-cn5)",
      flexShrink: 0
    }
  }, "\uB9CC\uC120\uD638 \xB7 \uAE40\uD0DC\uC218 \uC120\uC7A5"), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--text-secondary-76)",
      flexShrink: 0
    }
  }, "\uC778\uCC9C \uC911\uAD6C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 10,
      backgroundColor: "var(--line-line-neutral5-e0)",
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
      color: "var(--text-secondary-76)",
      flexShrink: 0
    }
  }, "2\uBA85"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 10,
      backgroundColor: "var(--line-line-neutral5-e0)",
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
      color: "var(--text-secondary-76)",
      flexShrink: 0
    }
  }, "\uACB0\uC81C\uC644\uB8CC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(26,26,26)",
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
      flexShrink: 0
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
      color: "rgb(45,20,120)",
      flexShrink: 0
    }
  }, "D-3")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "5\uC6D4 24\uC77C(\uD1A0) 04:30")))), /*#__PURE__*/React.createElement(IconChevron, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--gray-gray11-76)"
    },
    variant: "chevron-right",
    small: false,
    double: false,
    thick: true,
    tight: false
  })))))), /*#__PURE__*/React.createElement("div", {
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
      gap: "calc(var(--margin-spacing-16) * 1px)",
      padding: "0px 16px 24px 16px",
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 53,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.800px",
      color: "rgb(106,110,128)",
      flexShrink: 0
    }
  }, "\uB0B4\uC608\uC57D")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 53,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.800px",
      color: "rgb(106,110,128)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC2E4\uC2DC\uAC04\uC870\uD669")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 53,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.800px",
      color: "rgb(106,110,128)",
      flexShrink: 0
    }
  }, "\uB9AC\uBDF0\uB9CC\uC810")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 53,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.800px",
      color: "rgb(106,110,128)",
      flexShrink: 0
    }
  }, "\uB9C8\uAC10\uC784\uBC15")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 53,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.800px",
      color: "rgb(106,110,128)",
      flexShrink: 0
    }
  }, "\uC2E0\uADDC\uC120\uBC15"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 53,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.800px",
      color: "rgb(106,110,128)",
      flexShrink: 0
    }
  }, "\uCC54\uD53C\uC5B8\uC2ED")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 53,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.800px",
      color: "rgb(106,110,128)",
      flexShrink: 0
    }
  }, "\uCC4C\uB9B0\uC9C0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 53,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.800px",
      color: "rgb(106,110,128)",
      flexShrink: 0
    }
  }, "\uC774\uBCA4\uD2B8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 53,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.800px",
      color: "rgb(106,110,128)",
      flexShrink: 0
    }
  }, "\uC778\uAE30\uAE00")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 53,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.800px",
      color: "rgb(106,110,128)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC778\uAE30\uD3EC\uC778\uD2B8"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-neutral2-f3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
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
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uCC1C\uD55C \uC120\uBC15"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      flexGrow: 1
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
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 115,
      height: 115,
      flexShrink: 0
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
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
  }, "\uB4DC\uB798\uACE4\uD638")), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "6/1(\uC77C) 04:30"), /*#__PURE__*/React.createElement("span", {
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
  }, "\uC6B0\uB7ED"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(0,65,255)",
      flexShrink: 0
    }
  }, "\uC794\uC5EC 5\uC790\uB9AC")))), /*#__PURE__*/React.createElement("div", {
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
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 115,
      height: 115,
      flexShrink: 0
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
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
  }, "\uD654\uC778\uD638")), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "6/1(\uC77C) 04:30"), /*#__PURE__*/React.createElement("span", {
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
  }, "\uC6B0\uB7ED"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(0,65,255)",
      flexShrink: 0
    }
  }, "1\uC790\uB9AC \u2219 \uB9C8\uAC10\uC784\uBC15")))), /*#__PURE__*/React.createElement("div", {
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
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 115,
      height: 115,
      flexShrink: 0
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
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
  }, "\uC5D0\uC774\uC2A4\uD638")), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "6/1(\uC77C) 04:30"), /*#__PURE__*/React.createElement("span", {
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
  }, "\uC6B0\uB7ED"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(0,65,255)",
      flexShrink: 0
    }
  }, "\uC794\uC5EC 8\uC790\uB9AC")))), /*#__PURE__*/React.createElement("div", {
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
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 115,
      height: 115,
      flexShrink: 0
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
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
  }, "\uB355\uC801\uD638")), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "6/1(\uC77C) 04:30"), /*#__PURE__*/React.createElement("span", {
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
  }, "\uC6B0\uB7ED"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(0,65,255)",
      flexShrink: 0
    }
  }, "\uC794\uC5EC 5\uC790\uB9AC")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ButtonMore, {
    style: {
      position: "relative",
      width: 361,
      flexShrink: 0
    },
    prop: "more",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uC774\uBC88 \uC8FC \uC778\uAE30 \uC5B4\uC885")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 361,
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 8px 0px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 67,
      height: 67,
      borderRadius: 4,
      backgroundColor: "rgb(243,239,231)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "6px 6px 6px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 27.554,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 80,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC6B0\uB7ED"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "24% ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "↑"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 8px 0px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 67,
      height: 67,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(229,245,248)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "17px 6px 17px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 25.123,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 80,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uAE34\uAF2C\uB9AC\uBCB5\uC5D0\uB3D4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "22% ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "↑"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 8px 0px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 67,
      height: 67,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,243,239)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "15px 6px 15px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 28.507,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 80,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uCC38\uB3D4"), /*#__PURE__*/React.createElement("span", {
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
  }, "18% \u2191")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 8px 0px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 67,
      height: 67,
      borderRadius: 4,
      backgroundColor: "var(--gray-gray4-ee)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "6px 6px 6px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24.935,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 80,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uAC08\uCE58"), /*#__PURE__*/React.createElement("span", {
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
  }, "12% \u2191")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uD314\uB85C\uC789 \uD65C\uB3D9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 361,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
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
      width: 52,
      height: 52,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(243,243,243)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-0a94d2da7a45af5a-bf7c4531",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 52,
      height: 52
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 253,
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
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uBBFC\uC218\uD615\uB2D8\uC774 \uC6B0\uB7ED 48cm \uC870\uD669\uC744 \uC62C\uB838\uC5B4\uC694"), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uD0DC\uC548 \uC2E0\uC9C4\uB3C4\uD56D"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 10,
      backgroundColor: "var(--label-cool-neutral-cn1)",
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
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "12\uBD84 \uC804")))), /*#__PURE__*/React.createElement("div", {
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
      width: 52,
      height: 52,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(240,243,254)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-45f4c6672e1c0652",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 52,
      height: 52
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 253,
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
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uBC15\uC9C0\uD6C8 \uC120\uC7A5\uB2D8\uC774 \uB300\uBC15\uD638 5\uC6D4 \uCD9C\uC870 \uC77C\uC815\uC744 \uC5F4\uC5C8\uC5B4\uC694"), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uD3EC\uD56D \uAD6C\uB8E1\uD3EC\uD56D "), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 10,
      backgroundColor: "var(--label-cool-neutral-cn1)",
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
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "1\uC2DC\uAC04 \uC804")))), /*#__PURE__*/React.createElement("div", {
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
      width: 52,
      height: 52,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,243,239)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.118,
      top: 15.312,
      width: 39.765,
      height: 20.61
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 253,
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
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC9C0\uC601\uB204\uB098\uB2D8\uC774 \uB9CC\uC120\uD638\uC5D0 \u2605 5\uC810 \uD6C4\uAE30\uB97C \uB0A8\uACBC\uC5B4\uC694"), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "3\uC2DC\uAC04 \uC804")))), /*#__PURE__*/React.createElement("div", {
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
      width: 52,
      height: 52,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(240,243,254)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-45f4c6672e1c0652",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 52,
      height: 52
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 253,
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
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uBC15\uC9C0\uD6C8 \uC120\uC7A5\uB2D8\uC774 \uB300\uBC15\uD638 5\uC6D4 \uCD9C\uC870 \uC77C\uC815\uC744 \uC5F4\uC5C8\uC5B4\uC694"), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uD3EC\uD56D \uAD6C\uB8E1\uD3EC\uD56D "), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 10,
      backgroundColor: "var(--label-cool-neutral-cn1)",
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
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "1\uC2DC\uAC04 \uC804")))), /*#__PURE__*/React.createElement("div", {
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
      width: 52,
      height: 52,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,243,239)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.118,
      top: 15.312,
      width: 39.765,
      height: 20.61
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 253,
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
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC9C0\uC601\uB204\uB098\uB2D8\uC774 \uB9CC\uC120\uD638\uC5D0 \u2605 5\uC810 \uD6C4\uAE30\uB97C \uB0A8\uACBC\uC5B4\uC694"), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "3\uC2DC\uAC04 \uC804")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 37,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ButtonMore, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    prop: "more",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uB0B4 \uD65C\uB3D9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 16px 0px 16px",
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
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      background: "linear-gradient(var(--background-neutral-neutral0),var(--background-neutral-neutral0)), linear-gradient(var(--background-blue-neutral-blue-neutral3),var(--background-blue-neutral-blue-neutral3))",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--item-spacing-10) * 1px)",
      padding: "14px 14px 14px 14px",
      alignItems: "flex-end",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minWidth: 104.5,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--item-spacing-xxs) * 1px)",
      alignItems: "flex-start",
      flexShrink: 0
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC5B4\uBC14\uC6C3\uD53C\uC2F1 \uBA38\uB2C8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--item-spacing-2) * 1px)",
      alignItems: "flex-end",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "100%",
      letterSpacing: "-0.030em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "12,400", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(118,118,118)"
    }
  }, "원"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC624\uB298 +1,200"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: "var(--color-yellow-50)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconRewardMoney, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    },
    variant: "money",
    fill: false
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      background: "linear-gradient(var(--background-neutral-neutral0),var(--background-neutral-neutral0)), linear-gradient(var(--background-blue-neutral-blue-neutral3),var(--background-blue-neutral-blue-neutral3))",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--item-spacing-10) * 1px)",
      padding: "14px 14px 14px 14px",
      alignItems: "flex-end",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minWidth: 104.5,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--item-spacing-xxs) * 1px)",
      alignItems: "flex-start",
      flexShrink: 0
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uC6B0\uB7ED \uCC54\uD53C\uC5B8\uC2ED")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--item-spacing-2) * 1px)",
      alignItems: "flex-end",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "100%",
      letterSpacing: "-0.030em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "28", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(118,118,118)"
    }
  }, "위"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(118,118,118)"
    }
  }, "↑ "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(118,118,118)"
    }
  }, "3위")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: "var(--gray-gray4-ee)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement(IconTrophy4, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0",
      color: "rgb(255,255,255)"
    },
    variant: "trophy",
    fill: false
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      background: "linear-gradient(131.269deg, rgb(241,236,255) 2.54%, rgb(232,239,255) 97.46%)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "18px 16px 16px 16px",
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
      gap: 5,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "var(--label-purple-assitive)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-white)",
      flexShrink: 0
    }
  }, "AI \uCD94\uCC9C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      lineHeight: "100%",
      color: "rgb(25,25,25)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(54,54,54)"
    }
  }, "이번 주말, "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(100,51,223)"
    }
  }, "태안 우럭"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(54,54,54)"
    }
  }, "이 제철이에요")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uD604\uC77C\uB2D8 \uCD5C\uADFC \uAD00\uC2EC \uC5B4\uC885 \uBD84\uC11D \xB7 \uB9E4\uCE6D\uB960 94%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-purple-assitive)",
      flexShrink: 0
    }
  }, "\uB9DE\uCDA4 \uC120\uBC15 3\uCC99 \uBCF4\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 6,
      height: 11,
      flexShrink: 0,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement(IconChevron, {
    style: {
      transform: "scale(0.750, 0.786)",
      transformOrigin: "0 0",
      color: "rgb(26,26,26)"
    },
    variant: "chevron-right",
    small: false,
    double: false,
    thick: false,
    tight: true
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 16px 0px 16px",
      alignItems: "flex-end",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 96,
      overflow: "hidden",
      borderRadius: 4,
      background: "linear-gradient(var(--gray-white-ff),var(--gray-white-ff)), linear-gradient(rgb(231,238,247),rgb(231,238,247))",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 14,
      width: 68,
      height: 68,
      overflow: "hidden",
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -29,
      top: -35,
      width: 298,
      height: 129
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 104,
      top: 18.5,
      width: 217,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      justifyContent: "center",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "인천에서\n미터급 대광어를 만나고 싶다면!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 15,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uB300\uAD11\uC5B4 \uC804\uBB38 \uD0DC\uD3C9\uD638"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 5,
      height: 9,
      flexShrink: 0,
      color: "rgb(85,85,85)"
    }
  }, /*#__PURE__*/React.createElement(IconChevron, {
    style: {
      transform: "scale(0.625, 0.643)",
      transformOrigin: "0 0",
      color: "rgb(85,85,85)"
    },
    variant: "chevron-right",
    small: false,
    double: false,
    thick: false,
    tight: true
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 328,
      top: 74,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.52,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "AD")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uB2E8\uACE8 \uC120\uC7A5 \uC870\uD669")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      width: 115,
      height: 175,
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 0px 12px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 115,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
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
  }, "\uBCFC\uB77D")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
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
  }, "\uB9CC\uC120\uD638"), /*#__PURE__*/React.createElement("span", {
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
  }, "8\uB9C8\uB9AC"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115,
      height: 175,
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 0px 12px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 115,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
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
  }, "\uB119\uCE58")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
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
  }, "\uB300\uBC15\uD638"), /*#__PURE__*/React.createElement("span", {
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
  }, "5\uB9C8\uB9AC"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115,
      height: 175,
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 0px 12px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 115,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
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
  }, "\uAC11\uC624\uC9D5\uC5B4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
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
  }, "\uB9C8\uC774\uC6E8\uC774\uD638"), /*#__PURE__*/React.createElement("span", {
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
  }, "14\uB9C8\uB9AC"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115,
      height: 175,
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 0px 12px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 115,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--gray-graye7)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    aspectRatio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
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
  }, "\uB300\uAD6C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
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
  }, "\uB808\uC778\uBCF4\uC6B0\uD638"), /*#__PURE__*/React.createElement("span", {
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
  }, "11\uB9C8\uB9AC")))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ButtonMore, {
    style: {
      position: "relative",
      width: 361,
      flexShrink: 0
    },
    prop: "more",
    fill: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-module-title-indent) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexGrow: 1
    }
  }, "\uC774\uBCA4\uD2B8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 361,
      height: 160,
      overflow: "hidden",
      background: "linear-gradient(rgba(51,88,223,0.12),rgba(51,88,223,0.12)), linear-gradient(rgb(255,255,255),rgb(255,255,255)), linear-gradient(rgb(210,229,240),rgb(210,229,240))",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 30,
      top: 50,
      width: 300,
      height: 80,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 900,
      fontSize: 40,
      lineHeight: "40px",
      letterSpacing: "-0.030em",
      color: "rgb(197,209,254)",
      whiteSpace: "pre-wrap"
    }
  }, "CHAMPIONSHIP\n2ND"), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-cd155f2f84c87981-d7c89306",
    style: {
      position: "absolute",
      left: 86,
      top: 9.2,
      width: 188,
      height: 483
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 361,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "12px 0px 20px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 20px 0px 20px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: "100%",
      letterSpacing: "-0.030em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "어바웃피싱\n챔피언십 2차전"), /*#__PURE__*/React.createElement(IconArrowNarrow, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    variant: "arrow-narrow-right",
    type: "narrow",
    small: false,
    thick: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "총 상금 4,000만원 상당!\n6월 12일 홍원항 광어 다운샷")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 2,
      backgroundColor: "var(--lightbackground-lightblue-1)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(ClockEight, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    },
    style2: "linear"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      color: "var(--text-primary-36)",
      flexShrink: 0
    }
  }, "26\uB144 6\uC6D4 12\uC77C  02:00~04:30"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 16px 0px 16px",
      alignItems: "flex-end",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 96,
      overflow: "hidden",
      borderRadius: 4,
      background: "linear-gradient(var(--gray-white-ff),var(--gray-white-ff)), linear-gradient(rgb(249,240,238),rgb(249,240,238))",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.04)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 14,
      width: 68,
      height: 68,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(247,226,222)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-811faa4dc6b9e82c-46440468",
    style: {
      position: "absolute",
      left: 8,
      top: 6,
      width: 54,
      height: 88
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 104,
      top: 18.5,
      width: 217,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      justifyContent: "center",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "어바웃피싱 예약이\n처음이시라면!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 15,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "10,000\uC6D0 \uD560\uC778\uBC1B\uACE0 \uC608\uC57D\uD558\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 5,
      height: 9,
      flexShrink: 0,
      color: "rgb(119,54,169)"
    }
  }, /*#__PURE__*/React.createElement(IconChevron, {
    style: {
      transform: "scale(0.625, 0.643)",
      transformOrigin: "0 0",
      color: "rgb(119,54,169)"
    },
    variant: "chevron-right",
    small: false,
    double: false,
    thick: false,
    tight: true
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 328,
      top: 74,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.52,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "AD")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 120,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(CardHorizontalBanner, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      height: 120
    },
    variant: "full",
    full: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      height: 120,
      opacity: 0.2,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 103,
      top: 42,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14.5,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "Scale Animation Banner"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "40px 0px 40px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-neutral3-ee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uBC95\uC801\uACE0\uC9C0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "(\uC8FC)\uC5B4\uBC14\uC6C3\uD53C\uC2F1\uC740 \uD1B5\uC2E0\uD310\uB9E4\uC911\uAC1C\uC790\uC774\uBA70, \uD1B5\uC2E0\uD310\uB9E4\uC758 \uB2F9\uC0AC\uC790\uAC00 \uC544\uB2D9\uB2C8\uB2E4. \uD310\uB9E4\uC790\uAC00 \uB4F1\uB85D\uD55C \uC0C1\uD488\uC815\uBCF4 \uBC0F \uAC70\uB798 \uB4F1\uC5D0 \uB300\uD574 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E8, (\uC8FC)\uC5B4\uBC14\uC6C3\uD53C\uC2F1\uC774 \uD310\uB9E4\uC790\uB85C \uB4F1\uB85D \uD310\uB9E4\uD55C \uC0C1\uD488\uC740 \uD310\uB9E4\uC790\uB85C\uC11C \uCC45\uC784\uC744 \uBD80\uB2F4\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uD604\uAE08 \uACB0\uC81C \uC2DC \uC8FC\uC758\uC0AC\uD56D"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uBB34\uD1B5\uC7A5\uC785\uAE08 \uB4F1\uC758 \uD604\uAE08 \uACB0\uC81C \uC2DC \uAC70\uB798\uC548\uC804 \uD655\uBCF4\uB97C \uC704\uD574 \uBC18\uB4DC\uC2DC \uC5D0\uC2A4\uD06C\uB85C \uACB0\uC81C\uB97C \uC774\uC6A9\uD558\uC5EC \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-neutral3-ee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      paddingRight: "calc(var(--spacing-layout-margin-layout-side) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uACE0\uAC1D\uC13C\uD130"), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0
    }
  }, "contact@aboutfishing.kr"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 10,
      backgroundColor: "rgba(133,137,160,0.12)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0
    }
  }, "02-722-0365"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 5,
      height: 9,
      flexShrink: 0,
      color: "rgb(25,25,25)"
    }
  }, /*#__PURE__*/React.createElement(IconChevron, {
    style: {
      transform: "scale(0.625, 0.643)",
      transformOrigin: "0 0",
      color: "rgb(25,25,25)"
    },
    variant: "chevron-right",
    small: false,
    double: false,
    thick: false,
    tight: true
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--line-line-neutral3-ee)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
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
      height: 86,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 0px 4px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72,
      height: 19,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 72,
    height: 18.607,
    viewBox: "0 0 72 18.607",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 72,
      height: 18.607
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.084 10.669 L 12.084 6.371 L 7.837 6.371 L 7.837 4.399 L 12.084 4.399 L 12.084 0 L 14.157 0 L 14.157 10.669 L 12.084 10.669 Z M 3.034 10.315 C 1.365 10.315 0 9 0 7.331 C 0 5.663 1.365 4.298 3.034 4.298 C 4.702 4.298 6.067 5.663 6.067 7.331 C 6.067 9 4.702 10.315 3.034 10.315 Z M 3.034 6.371 C 2.528 6.371 2.073 6.876 2.073 7.382 C 2.073 7.888 2.528 8.393 3.034 8.393 C 3.539 8.393 4.045 7.938 4.045 7.382 C 4.045 6.826 3.59 6.371 3.034 6.371 Z M 26.596 10.669 L 26.596 0 L 28.669 0 L 28.669 4.399 L 32.208 4.399 L 32.208 6.371 L 28.669 6.371 L 28.669 10.669 L 26.596 10.669 Z M 16.433 10.669 L 16.433 2.174 L 18.455 2.174 L 18.455 4.955 L 21.287 4.955 L 21.287 2.174 L 23.309 2.174 L 23.309 10.669 L 16.433 10.669 Z M 21.287 8.697 L 21.287 6.978 L 18.455 6.978 L 18.455 8.697 L 21.287 8.697 Z M 35.292 18.607 L 37.82 16.281 L 40.399 18.607 L 41.764 17.14 L 38.882 14.511 L 38.882 10.719 L 43.433 10.719 L 43.433 8.747 L 32.208 8.747 L 32.208 10.719 L 36.809 10.719 L 36.809 14.511 L 33.927 17.09 L 35.292 18.607 Z M 37.82 6.624 C 36.152 6.624 34.787 5.309 34.787 3.64 C 34.787 1.972 36.152 0.607 37.82 0.607 C 39.489 0.607 40.854 1.972 40.854 3.64 C 40.854 5.309 39.489 6.624 37.82 6.624 Z M 37.82 2.68 C 37.315 2.68 36.86 3.135 36.86 3.691 C 36.86 4.247 37.315 4.702 37.82 4.702 C 38.326 4.702 38.831 4.197 38.831 3.691 C 38.831 3.185 38.376 2.68 37.82 2.68 Z M 55.163 10.669 L 55.163 0 L 57.236 0 L 57.236 10.669 L 55.163 10.669 Z M 44.393 10.669 L 44.393 8.697 L 45.657 8.697 L 45.657 6.371 L 44.393 6.371 L 44.393 4.399 L 52.888 4.399 L 52.888 6.371 L 51.674 6.371 L 51.674 8.697 L 52.888 8.697 L 52.888 10.669 L 44.393 10.669 Z M 49.601 8.697 L 49.601 6.371 L 47.68 6.371 L 47.68 8.697 L 49.601 8.697 Z M 68.916 18.556 C 67.247 18.556 65.882 17.242 65.882 15.573 C 65.882 13.904 67.247 12.539 68.916 12.539 C 70.584 12.539 71.949 13.904 71.949 15.573 C 71.949 17.242 70.584 18.556 68.916 18.556 Z M 68.916 14.612 C 68.41 14.612 67.955 15.118 67.955 15.624 C 67.955 16.129 68.41 16.635 68.916 16.635 C 69.421 16.635 69.927 16.129 69.927 15.624 C 69.927 15.118 69.472 14.612 68.916 14.612 Z M 69.927 10.669 L 69.927 0 L 72 0 L 72 10.669 L 69.927 10.669 Z M 58.955 9.101 L 61.837 6.522 L 61.837 3.59 L 63.91 3.59 L 63.91 6.522 L 66.792 9.152 L 65.427 10.669 L 62.848 8.343 L 60.32 10.669 L 58.955 9.152 L 58.955 9.101 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
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
      gap: 8,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0
    }
  }, "\uB300\uD45C   \uC1A1\uB3D9\uD604"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 10,
      backgroundColor: "rgba(133,137,160,0.12)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0
    }
  }, "\uC0AC\uC5C5\uC790 \uB4F1\uB85D\uBC88\uD638   631-81-02422")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uD1B5\uC2E0\uD310\uB9E4\uC5C5 \uC2E0\uACE0\uBC88\uD638   2021-\uC11C\uC6B8\uC885\uB85C-1872"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC885\uB85C\uAD6C \uD6A8\uC790\uB85C 15, 3\uCE35(\uD1B5\uC758\uB3D9, \uB2E4\uBAA8\uC5EC\uBE4C\uB529)"))), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0
    }
  }, "\uC774\uC6A9\uC57D\uAD00"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 10,
      backgroundColor: "rgba(133,137,160,0.12)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0
    }
  }, "\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 10,
      backgroundColor: "rgba(133,137,160,0.12)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "var(--label-neutral-gray7-91)",
      flexShrink: 0
    }
  }, "\uC704\uCE58\uC815\uBCF4 \uCDE8\uAE09\uBC29\uCE68"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 3459,
      width: 393,
      overflow: "hidden",
      borderRadius: "24px 24px 0px 0px",
      background: "linear-gradient(180deg, rgba(255,255,255,0) 0.00%, rgb(255,255,255) 100.00%)",
      borderTop: "1px solid rgba(133,137,160,0.12)",
      borderRight: "1px solid rgba(133,137,160,0.12)",
      borderBottom: "1px solid rgba(133,137,160,0.12)",
      borderLeft: "1px solid rgba(133,137,160,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "linear-gradient(var(--gray-white-ff),var(--gray-white-ff)), linear-gradient(var(--violet-800),var(--violet-800))",
      display: "flex",
      flexDirection: "row",
      padding: "10px 28px 10px 28px",
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
      gap: 28,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "0px 0px 1px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-black)",
      flexShrink: 0
    }
  }, "\uC0C8\uC18C\uC2DD")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "0px 0px 1px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.52,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uD0D0\uC0C9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "0px 0px 1px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.52,
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--label-neutral-asisstive)",
      flexShrink: 0
    }
  }, "\uCD9C\uC870"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 10000,
      backgroundColor: "var(--background-neutral-neutral3)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      backgroundColor: "rgb(255,255,255)",
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      backgroundColor: "var(--background-neutral-neutral1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-neutral-neutral1)",
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
  }, "85"))))), /*#__PURE__*/React.createElement(Head, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    prop: "common"
  })));
}

// Globals for scripts loaded after this file.
window.IconChevron = IconChevron;
window.ButtonMore = ButtonMore;
window.ADMark = ADMark;
window.IconArrowNarrow = IconArrowNarrow;
window.CardHorizontalBanner = CardHorizontalBanner;
window.ClockEight = ClockEight;
window.IconSearch = IconSearch;
window.Head = Head;
window.IconRewardMoney = IconRewardMoney;
window.IconTrophy4 = IconTrophy4;
window.IconWeather = IconWeather;
window.RatioVertical2 = RatioVertical2;
window.B = B;
;try{window.AFNewsB=window.B;}catch(e){}
