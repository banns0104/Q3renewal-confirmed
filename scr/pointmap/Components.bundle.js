// Components bundle — 2 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 1:2919 ic-MapFloating (6 variants)
const __venc_IcMapFloating = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IcMapFloating = p => "prop=" + __venc_IcMapFloating(p.prop) + '|' + "selected=" + __venc_IcMapFloating(p.selected);
function IcMapFloating(_p = {}) {
  const props = {
    ..._p,
    prop: _p.prop ?? "내위치",
    selected: _p.selected ?? "off"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      color: "var(--old-gray76)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.500,
    height: 17.958,
    viewBox: "0 0 18.500 17.958",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 1.02,
      width: 18.5,
      height: 17.958,
      borderRadius: 0.4000000059604645
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.749 16.85 L 15.373 16.667 L 15.373 16.667 L 14.749 16.85 Z M 14.133 17.289 L 13.756 17.818 L 14.133 17.289 Z M 13.225 10.832 L 12.798 10.342 L 13.225 10.832 Z M 13.104 11.246 L 12.48 11.429 L 13.104 11.246 Z M 11.778 5.996 L 11.179 6.249 L 11.778 5.996 Z M 6.722 5.996 L 6.123 5.744 L 6.722 5.996 Z M 0.806 6.942 L 1.233 6.452 L 0.806 6.942 Z M 5.396 11.246 L 6.02 11.429 L 5.396 11.246 Z M 3.751 16.85 L 3.127 16.667 L 3.751 16.85 Z M 9.018 13.979 L 9.395 14.509 L 9.018 13.979 Z M 9.482 13.979 L 9.105 14.509 L 9.482 13.979 Z M 9.018 13.979 L 8.641 13.45 L 3.99 16.759 L 4.367 17.289 L 4.744 17.818 L 9.395 14.509 L 9.018 13.979 Z M 3.751 16.85 L 4.375 17.033 L 6.02 11.429 L 5.396 11.246 L 4.772 11.063 L 3.127 16.667 L 3.751 16.85 Z M 5.275 10.832 L 5.702 10.342 L 1.233 6.452 L 0.806 6.942 L 0.379 7.433 L 4.848 11.322 L 5.275 10.832 Z M 1.069 6.241 L 1.069 6.891 L 6.354 6.891 L 6.354 6.241 L 6.354 5.591 L 1.069 5.591 L 1.069 6.241 Z M 6.722 5.996 L 7.321 6.249 L 9.48 1.127 L 8.881 0.874 L 8.282 0.622 L 6.123 5.744 L 6.722 5.996 Z M 9.619 0.874 L 9.02 1.127 L 11.179 6.249 L 11.778 5.996 L 12.377 5.744 L 10.218 0.622 L 9.619 0.874 Z M 12.146 6.241 L 12.146 6.891 L 17.431 6.891 L 17.431 6.241 L 17.431 5.591 L 12.146 5.591 L 12.146 6.241 Z M 17.694 6.942 L 17.267 6.452 L 12.798 10.342 L 13.225 10.832 L 13.652 11.322 L 18.121 7.433 L 17.694 6.942 Z M 13.104 11.246 L 12.48 11.429 L 14.125 17.033 L 14.749 16.85 L 15.373 16.667 L 13.728 11.063 L 13.104 11.246 Z M 14.133 17.289 L 14.51 16.759 L 9.859 13.45 L 9.482 13.979 L 9.105 14.509 L 13.756 17.818 L 14.133 17.289 Z M 14.749 16.85 L 14.125 17.033 C 14.058 16.805 14.317 16.621 14.51 16.759 L 14.133 17.289 L 13.756 17.818 C 14.568 18.396 15.653 17.623 15.373 16.667 L 14.749 16.85 Z M 13.225 10.832 L 12.798 10.342 C 12.489 10.611 12.365 11.036 12.48 11.429 L 13.104 11.246 L 13.728 11.063 C 13.755 11.157 13.725 11.258 13.652 11.322 L 13.225 10.832 Z M 17.431 6.241 L 17.431 6.891 C 17.2 6.891 17.093 6.604 17.267 6.452 L 17.694 6.942 L 18.121 7.433 C 18.853 6.795 18.402 5.591 17.431 5.591 L 17.431 6.241 Z M 11.778 5.996 L 11.179 6.249 C 11.343 6.638 11.724 6.891 12.146 6.891 L 12.146 6.241 L 12.146 5.591 C 12.247 5.591 12.338 5.651 12.377 5.744 L 11.778 5.996 Z M 8.881 0.874 L 9.48 1.127 C 9.394 1.331 9.106 1.331 9.02 1.127 L 9.619 0.874 L 10.218 0.622 C 9.857 -0.234 8.643 -0.234 8.282 0.622 L 8.881 0.874 Z M 6.354 6.241 L 6.354 6.891 C 6.776 6.891 7.157 6.638 7.321 6.249 L 6.722 5.996 L 6.123 5.744 C 6.162 5.651 6.253 5.591 6.354 5.591 L 6.354 6.241 Z M 0.806 6.942 L 1.233 6.452 C 1.407 6.604 1.3 6.891 1.069 6.891 L 1.069 6.241 L 1.069 5.591 C 0.098 5.591 -0.353 6.795 0.379 7.433 L 0.806 6.942 Z M 5.396 11.246 L 6.02 11.429 C 6.135 11.036 6.011 10.611 5.702 10.342 L 5.275 10.832 L 4.848 11.322 C 4.775 11.258 4.745 11.157 4.772 11.063 L 5.396 11.246 Z M 4.367 17.289 L 3.99 16.759 C 4.183 16.621 4.442 16.805 4.375 17.033 L 3.751 16.85 L 3.127 16.667 C 2.847 17.623 3.932 18.396 4.744 17.818 L 4.367 17.289 Z M 9.018 13.979 L 9.395 14.509 C 9.308 14.57 9.192 14.57 9.105 14.509 L 9.482 13.979 L 9.859 13.45 C 9.494 13.19 9.006 13.19 8.641 13.45 L 9.018 13.979 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      color: "var(--brandcolor-primaryblue)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.500,
    height: 17.958,
    viewBox: "0 0 18.500 17.958",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 1.02,
      width: 18.5,
      height: 17.958,
      borderRadius: 0.4000000059604645
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.482 13.979 C 9.343 13.88 9.157 13.88 9.018 13.979 L 4.367 17.289 C 4.057 17.509 3.644 17.214 3.751 16.85 L 5.396 11.246 C 5.44 11.096 5.393 10.935 5.275 10.832 L 0.806 6.942 C 0.527 6.7 0.699 6.241 1.069 6.241 L 6.354 6.241 C 6.514 6.241 6.66 6.144 6.722 5.996 L 8.881 0.874 C 9.019 0.548 9.481 0.548 9.619 0.874 L 11.778 5.996 C 11.84 6.144 11.986 6.241 12.146 6.241 L 17.431 6.241 C 17.801 6.241 17.973 6.7 17.694 6.942 L 13.225 10.832 C 13.107 10.935 13.06 11.096 13.104 11.246 L 14.749 16.85 C 14.856 17.214 14.443 17.509 14.133 17.289 L 9.482 13.979 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      color: "var(--text-secondary-76)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.826,
    height: 13.502,
    viewBox: "0 0 18.826 13.502",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.586,
      top: 1.35,
      width: 18.826,
      height: 13.502,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.003 0.413 C 9.656 0.166 9.19 0.166 8.843 0.413 L 1.137 5.895 C 0.579 6.292 0.577 7.12 1.132 7.521 L 8.837 13.079 C 9.187 13.331 9.659 13.331 10.008 13.078 L 17.697 7.52 C 18.252 7.119 18.249 6.292 17.692 5.895 L 10.003 0.413 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.697 7.52 L 16.936 6.466 L 17.697 7.52 Z M 8.837 13.079 L 8.077 14.133 L 8.837 13.079 Z M 10.008 13.078 L 10.77 14.132 L 10.008 13.078 Z M 1.132 7.521 L 0.372 8.575 L 1.132 7.521 Z M 10.003 0.413 L 10.758 -0.645 L 10.003 0.413 Z M 8.843 0.413 L 8.089 -0.646 L 0.384 4.836 L 1.137 5.895 L 1.891 6.954 L 9.596 1.472 L 8.843 0.413 Z M 1.132 7.521 L 0.372 8.575 L 8.077 14.133 L 8.837 13.079 L 9.598 12.025 L 1.893 6.466 L 1.132 7.521 Z M 10.008 13.078 L 10.77 14.132 L 18.459 8.573 L 17.697 7.52 L 16.936 6.466 L 9.247 12.025 L 10.008 13.078 Z M 17.692 5.895 L 18.446 4.836 L 10.758 -0.645 L 10.003 0.413 L 9.248 1.472 L 16.937 6.953 L 17.692 5.895 Z M 17.697 7.52 L 18.459 8.573 C 19.734 7.651 19.728 5.75 18.446 4.836 L 17.692 5.895 L 16.937 6.953 C 16.77 6.834 16.769 6.586 16.936 6.466 L 17.697 7.52 Z M 8.837 13.079 L 8.077 14.133 C 8.881 14.713 9.967 14.713 10.77 14.132 L 10.008 13.078 L 9.247 12.025 C 9.352 11.949 9.493 11.949 9.598 12.025 L 8.837 13.079 Z M 1.137 5.895 L 0.384 4.836 C -0.9 5.749 -0.906 7.653 0.372 8.575 L 1.132 7.521 L 1.893 6.466 C 2.059 6.587 2.058 6.835 1.891 6.954 L 1.137 5.895 Z M 8.843 0.413 L 9.596 1.472 C 9.492 1.546 9.353 1.546 9.248 1.472 L 10.003 0.413 L 10.758 -0.645 C 9.959 -1.214 8.888 -1.215 8.089 -0.646 L 8.843 0.413 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.023,
    height: 6.189,
    viewBox: "0 0 16.023 6.189",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.988,
      top: 12.578,
      width: 16.023,
      height: 6.189
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.397 -0.514 C 0.113 -0.733 -0.295 -0.681 -0.515 -0.396 C -0.734 -0.112 -0.681 0.296 -0.397 0.515 L 0 0.001 L 0.397 -0.514 Z M 16.42 0.514 C 16.704 0.295 16.756 -0.114 16.537 -0.398 C 16.317 -0.682 15.909 -0.734 15.625 -0.514 L 16.023 0 L 16.42 0.514 Z M 8.632 5.716 L 8.234 5.202 L 8.632 5.716 Z M 0 0.001 L -0.397 0.515 L 7.012 6.231 L 7.409 5.717 L 7.806 5.202 L 0.397 -0.514 L 0 0.001 Z M 8.632 5.716 L 9.029 6.23 L 16.42 0.514 L 16.023 0 L 15.625 -0.514 L 8.234 5.202 L 8.632 5.716 Z M 7.409 5.717 L 7.012 6.231 C 7.606 6.69 8.435 6.689 9.029 6.23 L 8.632 5.716 L 8.234 5.202 C 8.108 5.299 7.932 5.299 7.806 5.202 L 7.409 5.717 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      color: "var(--text-primary-36)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.826,
    height: 13.502,
    viewBox: "0 0 18.826 13.502",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.586,
      top: 1.35,
      width: 18.826,
      height: 13.502,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.003 0.413 C 9.656 0.166 9.19 0.166 8.843 0.413 L 1.137 5.895 C 0.579 6.292 0.577 7.12 1.132 7.521 L 8.837 13.079 C 9.187 13.331 9.659 13.331 10.008 13.078 L 17.697 7.52 C 18.252 7.119 18.249 6.292 17.692 5.895 L 10.003 0.413 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.697 7.52 L 16.936 6.466 L 17.697 7.52 Z M 8.837 13.079 L 8.077 14.133 L 8.837 13.079 Z M 10.008 13.078 L 10.77 14.132 L 10.008 13.078 Z M 1.132 7.521 L 0.372 8.575 L 1.132 7.521 Z M 10.003 0.413 L 10.758 -0.645 L 10.003 0.413 Z M 8.843 0.413 L 8.089 -0.646 L 0.384 4.836 L 1.137 5.895 L 1.891 6.954 L 9.596 1.472 L 8.843 0.413 Z M 1.132 7.521 L 0.372 8.575 L 8.077 14.133 L 8.837 13.079 L 9.598 12.025 L 1.893 6.466 L 1.132 7.521 Z M 10.008 13.078 L 10.77 14.132 L 18.459 8.573 L 17.697 7.52 L 16.936 6.466 L 9.247 12.025 L 10.008 13.078 Z M 17.692 5.895 L 18.446 4.836 L 10.758 -0.645 L 10.003 0.413 L 9.248 1.472 L 16.937 6.953 L 17.692 5.895 Z M 17.697 7.52 L 18.459 8.573 C 19.734 7.651 19.728 5.75 18.446 4.836 L 17.692 5.895 L 16.937 6.953 C 16.77 6.834 16.769 6.586 16.936 6.466 L 17.697 7.52 Z M 8.837 13.079 L 8.077 14.133 C 8.881 14.713 9.967 14.713 10.77 14.132 L 10.008 13.078 L 9.247 12.025 C 9.352 11.949 9.493 11.949 9.598 12.025 L 8.837 13.079 Z M 1.137 5.895 L 0.384 4.836 C -0.9 5.749 -0.906 7.653 0.372 8.575 L 1.132 7.521 L 1.893 6.466 C 2.059 6.587 2.058 6.835 1.891 6.954 L 1.137 5.895 Z M 8.843 0.413 L 9.596 1.472 C 9.492 1.546 9.353 1.546 9.248 1.472 L 10.003 0.413 L 10.758 -0.645 C 9.959 -1.214 8.888 -1.215 8.089 -0.646 L 8.843 0.413 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.023,
    height: 6.189,
    viewBox: "0 0 16.023 6.189",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.988,
      top: 12.578,
      width: 16.023,
      height: 6.189
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.397 -0.514 C 0.113 -0.733 -0.295 -0.681 -0.515 -0.396 C -0.734 -0.112 -0.681 0.296 -0.397 0.515 L 0 0.001 L 0.397 -0.514 Z M 16.42 0.514 C 16.704 0.295 16.756 -0.114 16.537 -0.398 C 16.317 -0.682 15.909 -0.734 15.625 -0.514 L 16.023 0 L 16.42 0.514 Z M 8.632 5.716 L 8.234 5.202 L 8.632 5.716 Z M 0 0.001 L -0.397 0.515 L 7.012 6.231 L 7.409 5.717 L 7.806 5.202 L 0.397 -0.514 L 0 0.001 Z M 8.632 5.716 L 9.029 6.23 L 16.42 0.514 L 16.023 0 L 15.625 -0.514 L 8.234 5.202 L 8.632 5.716 Z M 7.409 5.717 L 7.012 6.231 C 7.606 6.69 8.435 6.689 9.029 6.23 L 8.632 5.716 L 8.234 5.202 C 8.108 5.299 7.932 5.299 7.806 5.202 L 7.409 5.717 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.77,
      top: 0.77,
      width: 18.462,
      height: 18.462,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.300px var(--old-gray76)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.539,
      top: 0.77,
      width: 0.923,
      height: 3.692,
      backgroundColor: "var(--old-gray76)",
      boxShadow: "inset 0 0 0 1px var(--old-gray76)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,19.232,9.539)",
      transformOrigin: "0 0",
      width: 0.923,
      height: 3.692,
      backgroundColor: "var(--old-gray76)",
      boxShadow: "inset 0 0 0 1px var(--old-gray76)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.539,
      top: 15.539,
      width: 0.923,
      height: 3.692,
      backgroundColor: "var(--old-gray76)",
      boxShadow: "inset 0 0 0 1px var(--old-gray76)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,4.463,9.539)",
      transformOrigin: "0 0",
      width: 0.923,
      height: 3.692,
      backgroundColor: "var(--old-gray76)",
      boxShadow: "inset 0 0 0 1px var(--old-gray76)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.617,
      top: 8.615,
      width: 2.769,
      height: 2.769,
      borderRadius: "50%",
      backgroundColor: "var(--old-gray76)",
      boxShadow: "inset 0 0 0 1px var(--old-gray76)"
    }
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.77,
      top: 0.77,
      width: 18.462,
      height: 18.462,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.300px var(--text-primary-36)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.539,
      top: 0.77,
      width: 0.923,
      height: 3.692,
      backgroundColor: "var(--text-primary-36)",
      boxShadow: "inset 0 0 0 1px var(--text-primary-36)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,19.232,9.539)",
      transformOrigin: "0 0",
      width: 0.923,
      height: 3.692,
      backgroundColor: "var(--text-primary-36)",
      boxShadow: "inset 0 0 0 1px var(--text-primary-36)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.539,
      top: 15.539,
      width: 0.923,
      height: 3.692,
      backgroundColor: "var(--text-primary-36)",
      boxShadow: "inset 0 0 0 1px var(--text-primary-36)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,4.463,9.539)",
      transformOrigin: "0 0",
      width: 0.923,
      height: 3.692,
      backgroundColor: "var(--text-primary-36)",
      boxShadow: "inset 0 0 0 1px var(--text-primary-36)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.617,
      top: 8.615,
      width: 2.769,
      height: 2.769,
      borderRadius: "50%",
      backgroundColor: "var(--text-primary-36)",
      boxShadow: "inset 0 0 0 1px var(--text-primary-36)"
    }
  }));
  const __impls = {
    // figma: 속성 1=내장소, Selected=off
    "prop=내장소|selected=off": __body0,
    // figma: 속성 1=내장소, Selected=on
    "prop=내장소|selected=on": __body1,
    // figma: 속성 1=위성, Selected=off
    "prop=위성|selected=off": __body2,
    // figma: 속성 1=위성, Selected=on
    "prop=위성|selected=on": __body3,
    // figma: 속성 1=내위치, Selected=off
    "prop=내위치|selected=off": __body4,
    // figma: 속성 1=내위치, Selected=on
    "prop=내위치|selected=on": __body5
  };
  return (__impls[__vkey_IcMapFloating(props)] ?? __body4)();
}

// figma node: 437:26734 포인트맵
function Screen(_p = {}) {
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
      left: 0,
      top: 0,
      width: 393,
      height: 852,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6b13f3cc9c0ab628",
    style: {
      position: "absolute",
      left: -274,
      top: -119,
      width: 918.667,
      height: 1029.333
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 52,
      top: 160,
      width: 314,
      height: 436,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 47,
      top: 114,
      width: 62,
      height: 62,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 62,
      height: 62,
      borderRadius: "50%",
      background: "radial-gradient(31px 31px at 50.00% 50.00%, rgb(73,45,253) 0.00%, rgba(73,45,253,0.6) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 21,
      top: 24,
      width: 21,
      height: 14,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)"
    }
  }, "126")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 219,
      top: 320,
      width: 62,
      height: 62,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 62,
      height: 62,
      borderRadius: "50%",
      background: "radial-gradient(31px 31px at 50.00% 50.00%, rgb(73,45,253) 0.00%, rgba(73,45,253,0.6) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20,
      top: 24,
      width: 23,
      height: 14,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)"
    }
  }, "242")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 118,
      top: 374,
      width: 62,
      height: 62,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 62,
      height: 62,
      borderRadius: "50%",
      background: "radial-gradient(31px 31px at 50.00% 50.00%, rgb(73,45,253) 0.00%, rgba(73,45,253,0.6) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20,
      top: 24,
      width: 22,
      height: 14,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)"
    }
  }, "198")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 243,
      width: 44,
      height: 44,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "radial-gradient(22px 22px at 50.00% 50.00%, rgb(42,104,253) 0.00%, rgba(42,104,253,0.6) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 15,
      width: 16,
      height: 14,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)"
    }
  }, "44")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 179,
      width: 35,
      height: 35,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 35,
      borderRadius: "50%",
      background: "radial-gradient(17.500px 17.500px at 50.00% 50.00%, rgb(26,133,253) 0.00%, rgba(26,133,253,0.6) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: 11,
      width: 15,
      height: 14,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)"
    }
  }, "27")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 279,
      top: 190,
      width: 35,
      height: 35,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 35,
      borderRadius: "50%",
      background: "radial-gradient(17.500px 17.500px at 50.00% 50.00%, rgb(26,133,253) 0.00%, rgba(26,133,253,0.6) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 9,
      top: 11,
      width: 16,
      height: 14,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)"
    }
  }, "26")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 393,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "radial-gradient(10px 10px at 50.00% 50.00%, rgb(1,182,254) 0.00%, rgba(1,182,254,0.6) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 6,
      top: 3,
      width: 8,
      height: 14,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)"
    }
  }, "2")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 163,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "radial-gradient(10px 10px at 50.00% 50.00%, rgb(1,182,254) 0.00%, rgba(1,182,254,0.6) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 6,
      top: 3,
      width: 8,
      height: 14,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)"
    }
  }, "6")))), /*#__PURE__*/React.createElement("div", {
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
  }, "85"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 59,
      width: 393,
      height: 211
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 337,
      top: 71,
      width: 40,
      height: 136
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 136,
      borderRadius: 10000,
      backgroundColor: "var(--lightbackground-lightblue-1)",
      boxShadow: "0px 2px 2px 0px rgba(0,0,0,0.1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 8,
      width: 40,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(IcMapFloating, {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    },
    prop: "내장소",
    selected: "off"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 48,
      width: 40,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(IcMapFloating, {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    },
    prop: "위성",
    selected: "off"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 88,
      width: 40,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(IcMapFloating, {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 20,
      height: 20
    },
    prop: "내위치",
    selected: "off"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 357,
      height: 46,
      borderRadius: 8,
      backgroundColor: "var(--lightbackground-lightblue-1)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "space-between",
      alignItems: "center",
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "var(--text-bluelight-8589a0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC5B4\uC885\uBA85\uC744 \uAC80\uC0C9\uD574 \uBCF4\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 15,
      height: 15,
      color: "var(--gray-black19)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.527 9.39 C 10.215 9.077 9.709 9.077 9.396 9.389 C 9.083 9.701 9.083 10.208 9.395 10.52 L 9.961 9.955 L 10.527 9.39 Z M 14.434 15.565 C 14.746 15.878 15.253 15.878 15.565 15.566 C 15.878 15.254 15.878 14.747 15.566 14.435 L 15 15 L 14.434 15.565 Z M 11.667 5.833 L 10.867 5.833 C 10.867 8.613 8.613 10.867 5.833 10.867 L 5.833 11.667 L 5.833 12.467 C 9.497 12.467 12.467 9.497 12.467 5.833 L 11.667 5.833 Z M 5.833 11.667 L 5.833 10.867 C 3.054 10.867 0.8 8.613 0.8 5.833 L 0 5.833 L -0.8 5.833 C -0.8 9.497 2.17 12.467 5.833 12.467 L 5.833 11.667 Z M 0 5.833 L 0.8 5.833 C 0.8 3.054 3.054 0.8 5.833 0.8 L 5.833 0 L 5.833 -0.8 C 2.17 -0.8 -0.8 2.17 -0.8 5.833 L 0 5.833 Z M 5.833 0 L 5.833 0.8 C 8.613 0.8 10.867 3.054 10.867 5.833 L 11.667 5.833 L 12.467 5.833 C 12.467 2.17 9.497 -0.8 5.833 -0.8 L 5.833 0 Z M 9.961 9.955 L 9.395 10.52 L 14.434 15.565 L 15 15 L 15.566 14.435 L 10.527 9.39 L 9.961 9.955 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 748,
      width: 393,
      height: 104
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23,
      top: 0,
      width: 347,
      borderRadius: 10000,
      backgroundColor: "var(--gray-whiteff)",
      boxShadow: "inset 0 0 0 1.800px var(--gray-black36), 0px 6px 8px 0px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 40px 16px 40px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      padding: "0px 0px 1px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 29,
      height: 29,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.870,
    height: 20.670,
    viewBox: "0 0 19.870 20.670",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.565,
      top: 4.565,
      width: 19.87,
      height: 20.67,
      color: "var(--gray-grayaa)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.623 C -0.552 5.623 -1 6.071 -1 6.623 C -1 7.176 -0.552 7.623 0 7.623 L 0 6.623 L 0 5.623 Z M 19.87 7.623 C 20.423 7.623 20.87 7.176 20.87 6.623 C 20.87 6.071 20.423 5.623 19.87 5.623 L 19.87 6.623 L 19.87 7.623 Z M 7.331 12.54 C 6.94 12.149 6.307 12.149 5.916 12.54 C 5.526 12.93 5.526 13.563 5.916 13.954 L 6.623 13.247 L 7.331 12.54 Z M 8.831 15.455 L 8.124 16.162 C 8.515 16.552 9.148 16.552 9.538 16.162 L 8.831 15.455 Z M 13.954 11.746 C 14.345 11.356 14.345 10.723 13.954 10.332 C 13.563 9.941 12.93 9.941 12.54 10.332 L 13.247 11.039 L 13.954 11.746 Z M 1.205 20.43 L 0.751 21.321 L 1.205 20.43 Z M 0.241 19.465 L -0.65 19.919 L 0.241 19.465 Z M 19.63 19.465 L 20.521 19.919 L 19.63 19.465 Z M 18.665 20.43 L 19.119 21.321 L 18.665 20.43 Z M 18.665 2.448 L 19.119 1.557 L 18.665 2.448 Z M 19.63 3.413 L 20.521 2.959 L 19.63 3.413 Z M 1.205 2.448 L 0.751 1.557 L 1.205 2.448 Z M 0.241 3.413 L -0.65 2.959 L 0.241 3.413 Z M 5.416 0 C 5.416 -0.552 4.968 -1 4.416 -1 C 3.863 -1 3.416 -0.552 3.416 0 L 4.416 0 L 5.416 0 Z M 3.416 2.208 C 3.416 2.76 3.863 3.208 4.416 3.208 C 4.968 3.208 5.416 2.76 5.416 2.208 L 4.416 2.208 L 3.416 2.208 Z M 16.455 0 C 16.455 -0.552 16.007 -1 15.455 -1 C 14.902 -1 14.455 -0.552 14.455 0 L 15.455 0 L 16.455 0 Z M 14.455 2.208 C 14.455 2.76 14.902 3.208 15.455 3.208 C 16.007 3.208 16.455 2.76 16.455 2.208 L 15.455 2.208 L 14.455 2.208 Z M 0 6.623 L 0 7.623 L 19.87 7.623 L 19.87 6.623 L 19.87 5.623 L 0 5.623 L 0 6.623 Z M 6.623 13.247 L 5.916 13.954 L 8.124 16.162 L 8.831 15.455 L 9.538 14.748 L 7.331 12.54 L 6.623 13.247 Z M 8.831 15.455 L 9.538 16.162 L 13.954 11.746 L 13.247 11.039 L 12.54 10.332 L 8.124 14.748 L 8.831 15.455 Z M 3.533 2.208 L 3.533 3.208 L 16.338 3.208 L 16.338 2.208 L 16.338 1.208 L 3.533 1.208 L 3.533 2.208 Z M 19.87 5.74 L 18.87 5.74 L 18.87 17.138 L 19.87 17.138 L 20.87 17.138 L 20.87 5.74 L 19.87 5.74 Z M 16.338 20.67 L 16.338 19.67 L 3.533 19.67 L 3.533 20.67 L 3.533 21.67 L 16.338 21.67 L 16.338 20.67 Z M 0 17.138 L 1 17.138 L 1 5.74 L 0 5.74 L -1 5.74 L -1 17.138 L 0 17.138 Z M 3.533 20.67 L 3.533 19.67 C 2.898 19.67 2.482 19.67 2.164 19.644 C 1.858 19.619 1.731 19.575 1.659 19.539 L 1.205 20.43 L 0.751 21.321 C 1.152 21.525 1.571 21.602 2.001 21.637 C 2.419 21.671 2.931 21.67 3.533 21.67 L 3.533 20.67 Z M 0 17.138 L -1 17.138 C -1 17.74 -1.001 18.251 -0.967 18.669 C -0.931 19.099 -0.854 19.518 -0.65 19.919 L 0.241 19.465 L 1.132 19.011 C 1.095 18.939 1.052 18.813 1.027 18.507 C 1.001 18.189 1 17.773 1 17.138 L 0 17.138 Z M 1.205 20.43 L 1.659 19.539 C 1.432 19.423 1.247 19.238 1.132 19.011 L 0.241 19.465 L -0.65 19.919 C -0.343 20.522 0.148 21.013 0.751 21.321 L 1.205 20.43 Z M 19.87 17.138 L 18.87 17.138 C 18.87 17.773 18.87 18.189 18.844 18.507 C 18.819 18.813 18.775 18.939 18.739 19.011 L 19.63 19.465 L 20.521 19.919 C 20.725 19.518 20.802 19.099 20.837 18.669 C 20.871 18.251 20.87 17.74 20.87 17.138 L 19.87 17.138 Z M 16.338 20.67 L 16.338 21.67 C 16.94 21.67 17.451 21.671 17.869 21.637 C 18.299 21.602 18.718 21.525 19.119 21.321 L 18.665 20.43 L 18.211 19.539 C 18.139 19.575 18.013 19.619 17.707 19.644 C 17.389 19.67 16.973 19.67 16.338 19.67 L 16.338 20.67 Z M 19.63 19.465 L 18.739 19.011 C 18.623 19.238 18.438 19.423 18.211 19.539 L 18.665 20.43 L 19.119 21.321 C 19.722 21.013 20.213 20.522 20.521 19.919 L 19.63 19.465 Z M 16.338 2.208 L 16.338 3.208 C 16.973 3.208 17.389 3.209 17.707 3.235 C 18.013 3.26 18.139 3.303 18.211 3.339 L 18.665 2.448 L 19.119 1.557 C 18.718 1.353 18.299 1.276 17.869 1.241 C 17.451 1.207 16.94 1.208 16.338 1.208 L 16.338 2.208 Z M 19.87 5.74 L 20.87 5.74 C 20.87 5.139 20.871 4.627 20.837 4.209 C 20.802 3.779 20.725 3.36 20.521 2.959 L 19.63 3.413 L 18.739 3.867 C 18.775 3.939 18.819 4.065 18.844 4.372 C 18.87 4.69 18.87 5.106 18.87 5.74 L 19.87 5.74 Z M 18.665 2.448 L 18.211 3.339 C 18.438 3.455 18.623 3.64 18.739 3.867 L 19.63 3.413 L 20.521 2.959 C 20.213 2.356 19.722 1.865 19.119 1.557 L 18.665 2.448 Z M 3.533 2.208 L 3.533 1.208 C 2.931 1.208 2.419 1.207 2.001 1.241 C 1.571 1.276 1.152 1.353 0.751 1.557 L 1.205 2.448 L 1.659 3.339 C 1.731 3.303 1.858 3.26 2.164 3.235 C 2.482 3.209 2.898 3.208 3.533 3.208 L 3.533 2.208 Z M 0 5.74 L 1 5.74 C 1 5.106 1.001 4.69 1.027 4.372 C 1.052 4.065 1.095 3.939 1.132 3.867 L 0.241 3.413 L -0.65 2.959 C -0.854 3.36 -0.931 3.779 -0.967 4.209 C -1.001 4.627 -1 5.139 -1 5.74 L 0 5.74 Z M 1.205 2.448 L 0.751 1.557 C 0.148 1.865 -0.343 2.356 -0.65 2.959 L 0.241 3.413 L 1.132 3.867 C 1.247 3.64 1.432 3.455 1.659 3.339 L 1.205 2.448 Z M 4.416 0 L 3.416 0 L 3.416 2.208 L 4.416 2.208 L 5.416 2.208 L 5.416 0 L 4.416 0 Z M 15.455 0 L 14.455 0 L 14.455 2.208 L 15.455 2.208 L 16.455 2.208 L 16.455 0 L 15.455 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--text-gray-2-aa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC608\uC57D")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      padding: "0px 0px 1px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 29,
      height: 29,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.333,
    height: 21.750,
    viewBox: "0 0 19.333 21.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.833,
      top: 3.625,
      width: 19.333,
      height: 21.75,
      color: "var(--gray-grayaa)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.639 21.223 L 3.093 20.332 L 2.639 21.223 Z M 0.527 19.111 L 1.418 18.657 L 1.418 18.657 L 0.527 19.111 Z M 18.807 19.111 L 17.916 18.657 L 17.916 18.657 L 18.807 19.111 Z M 16.694 21.223 L 16.24 20.332 L 16.694 21.223 Z M 18.014 7.513 L 17.56 8.404 L 18.014 7.513 Z M 19.07 8.57 L 18.179 9.024 L 18.179 9.024 L 19.07 8.57 Z M 1.32 7.513 L 1.774 8.404 L 1.32 7.513 Z M 0.263 8.57 L 1.154 9.024 L 1.154 9.024 L 0.263 8.57 Z M 5.042 9.667 C 5.042 10.219 5.489 10.667 6.042 10.667 C 6.594 10.667 7.042 10.219 7.042 9.667 L 6.042 9.667 L 5.042 9.667 Z M 12.292 9.627 C 12.292 10.179 12.739 10.627 13.292 10.627 C 13.844 10.627 14.292 10.179 14.292 9.627 L 13.292 9.627 L 12.292 9.627 Z M 3.867 7.25 L 3.867 8.25 L 15.467 8.25 L 15.467 7.25 L 15.467 6.25 L 3.867 6.25 L 3.867 7.25 Z M 19.333 11.117 L 18.333 11.117 L 18.333 14.017 L 19.333 14.017 L 20.333 14.017 L 20.333 11.117 L 19.333 11.117 Z M 11.6 21.75 L 11.6 20.75 L 7.733 20.75 L 7.733 21.75 L 7.733 22.75 L 11.6 22.75 L 11.6 21.75 Z M 0 14.017 L 1 14.017 L 1 11.117 L 0 11.117 L -1 11.117 L -1 14.017 L 0 14.017 Z M 7.733 21.75 L 7.733 20.75 C 6.363 20.75 5.396 20.749 4.64 20.687 C 3.896 20.627 3.446 20.512 3.093 20.332 L 2.639 21.223 L 2.185 22.114 C 2.866 22.461 3.61 22.61 4.477 22.681 C 5.334 22.751 6.396 22.75 7.733 22.75 L 7.733 21.75 Z M 0 14.017 L -1 14.017 C -1 15.354 -1.001 16.416 -0.931 17.273 C -0.86 18.14 -0.711 18.884 -0.364 19.565 L 0.527 19.111 L 1.418 18.657 C 1.238 18.304 1.123 17.854 1.063 17.11 C 1.001 16.354 1 15.387 1 14.017 L 0 14.017 Z M 2.639 21.223 L 3.093 20.332 C 2.372 19.965 1.785 19.378 1.418 18.657 L 0.527 19.111 L -0.364 19.565 C 0.195 20.663 1.087 21.555 2.185 22.114 L 2.639 21.223 Z M 19.333 14.017 L 18.333 14.017 C 18.333 15.387 18.333 16.354 18.271 17.11 C 18.21 17.854 18.095 18.304 17.916 18.657 L 18.807 19.111 L 19.698 19.565 C 20.045 18.884 20.193 18.14 20.264 17.273 C 20.334 16.416 20.333 15.354 20.333 14.017 L 19.333 14.017 Z M 11.6 21.75 L 11.6 22.75 C 12.937 22.75 14 22.751 14.856 22.681 C 15.724 22.61 16.467 22.461 17.148 22.114 L 16.694 21.223 L 16.24 20.332 C 15.888 20.512 15.437 20.627 14.693 20.687 C 13.937 20.749 12.97 20.75 11.6 20.75 L 11.6 21.75 Z M 18.807 19.111 L 17.916 18.657 C 17.548 19.378 16.962 19.965 16.24 20.332 L 16.694 21.223 L 17.148 22.114 C 18.246 21.555 19.138 20.663 19.698 19.565 L 18.807 19.111 Z M 15.467 7.25 L 15.467 8.25 C 16.16 8.25 16.62 8.251 16.972 8.28 C 17.314 8.307 17.466 8.357 17.56 8.404 L 18.014 7.513 L 18.468 6.622 C 18.045 6.407 17.6 6.324 17.135 6.286 C 16.682 6.249 16.127 6.25 15.467 6.25 L 15.467 7.25 Z M 19.333 11.117 L 20.333 11.117 C 20.333 10.456 20.334 9.901 20.297 9.448 C 20.259 8.983 20.176 8.538 19.961 8.116 L 19.07 8.57 L 18.179 9.024 C 18.227 9.118 18.276 9.27 18.304 9.611 C 18.333 9.964 18.333 10.423 18.333 11.117 L 19.333 11.117 Z M 18.014 7.513 L 17.56 8.404 C 17.826 8.54 18.043 8.757 18.179 9.024 L 19.07 8.57 L 19.961 8.116 C 19.633 7.473 19.111 6.95 18.468 6.622 L 18.014 7.513 Z M 3.867 7.25 L 3.867 6.25 C 3.206 6.25 2.651 6.249 2.198 6.286 C 1.733 6.324 1.288 6.407 0.866 6.622 L 1.32 7.513 L 1.774 8.404 C 1.868 8.357 2.02 8.307 2.361 8.28 C 2.714 8.251 3.173 8.25 3.867 8.25 L 3.867 7.25 Z M 0 11.117 L 1 11.117 C 1 10.423 1.001 9.964 1.03 9.611 C 1.057 9.27 1.107 9.118 1.154 9.024 L 0.263 8.57 L -0.628 8.116 C -0.843 8.538 -0.926 8.983 -0.964 9.448 C -1.001 9.901 -1 10.456 -1 11.117 L 0 11.117 Z M 1.32 7.513 L 0.866 6.622 C 0.223 6.95 -0.3 7.473 -0.628 8.116 L 0.263 8.57 L 1.154 9.024 C 1.29 8.757 1.507 8.54 1.774 8.404 L 1.32 7.513 Z M 6.042 9.667 L 7.042 9.667 L 7.042 3.625 L 6.042 3.625 L 5.042 3.625 L 5.042 9.667 L 6.042 9.667 Z M 13.292 3.625 L 12.292 3.625 L 12.292 9.627 L 13.292 9.627 L 14.292 9.627 L 14.292 3.625 L 13.292 3.625 Z M 9.667 0 L 9.667 1 C 11.116 1 12.292 2.175 12.292 3.625 L 13.292 3.625 L 14.292 3.625 C 14.292 1.071 12.221 -1 9.667 -1 L 9.667 0 Z M 9.667 0 L 9.667 -1 C 7.112 -1 5.042 1.071 5.042 3.625 L 6.042 3.625 L 7.042 3.625 C 7.042 2.175 8.217 1 9.667 1 L 9.667 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--text-gray-2-aa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC1FC\uD551")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      padding: "0px 0px 1px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 29,
      height: 29,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.870,
    height: 17.663,
    viewBox: "0 0 19.870 17.663",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.565,
      top: 5.669,
      width: 19.87,
      height: 17.663,
      color: "var(--gray-black36)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.351 L -1 14.351 C -1 14.73 -0.786 15.076 -0.447 15.245 L 0 14.351 Z M 6.623 17.663 L 6.176 18.557 C 6.458 18.698 6.789 18.698 7.071 18.557 L 6.623 17.663 Z M 13.247 14.351 L 13.694 13.456 C 13.413 13.316 13.081 13.316 12.8 13.456 L 13.247 14.351 Z M 19.87 17.663 L 19.423 18.557 C 19.733 18.712 20.101 18.695 20.396 18.513 C 20.691 18.331 20.87 18.009 20.87 17.663 L 19.87 17.663 Z M 0 0 L 0.447 -0.894 C 0.137 -1.049 -0.231 -1.033 -0.526 -0.851 C -0.821 -0.668 -1 -0.347 -1 0 L 0 0 Z M 6.623 3.312 L 6.176 4.206 C 6.458 4.347 6.789 4.347 7.071 4.206 L 6.623 3.312 Z M 13.247 0 L 13.694 -0.894 C 13.413 -1.035 13.081 -1.035 12.8 -0.894 L 13.247 0 Z M 19.87 3.312 L 20.87 3.312 C 20.87 2.933 20.656 2.587 20.318 2.417 L 19.87 3.312 Z M 0 14.351 L -0.447 15.245 L 6.176 18.557 L 6.623 17.663 L 7.071 16.768 L 0.447 13.456 L 0 14.351 Z M 6.623 17.663 L 7.071 18.557 L 13.694 15.245 L 13.247 14.351 L 12.8 13.456 L 6.176 16.768 L 6.623 17.663 Z M 13.247 14.351 L 12.8 15.245 L 19.423 18.557 L 19.87 17.663 L 20.318 16.768 L 13.694 13.456 L 13.247 14.351 Z M 0 0 L -0.447 0.894 L 6.176 4.206 L 6.623 3.312 L 7.071 2.417 L 0.447 -0.894 L 0 0 Z M 6.623 3.312 L 7.071 4.206 L 13.694 0.894 L 13.247 0 L 12.8 -0.894 L 6.176 2.417 L 6.623 3.312 Z M 13.247 0 L 12.8 0.894 L 19.423 4.206 L 19.87 3.312 L 20.318 2.417 L 13.694 -0.894 L 13.247 0 Z M 0 0 L -1 0 L -1 14.351 L 0 14.351 L 1 14.351 L 1 0 L 0 0 Z M 19.87 3.312 L 18.87 3.312 L 18.87 17.663 L 19.87 17.663 L 20.87 17.663 L 20.87 3.312 L 19.87 3.312 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.800,
    height: 13.909,
    viewBox: "-0.900 0 1.800 13.909",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.811,
      top: 5.889,
      width: 1.7999999523162842,
      height: 13.909,
      color: "var(--gray-black36)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -0.9 0 L -0.9 13.909 L 0 13.909 L 0.9 13.909 L 0.9 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.800,
    height: 13.909,
    viewBox: "-0.900 0 1.800 13.909",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.189,
      top: 9.2,
      width: 1.7999999523162842,
      height: 13.909,
      color: "var(--gray-black36)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -0.9 0 L -0.9 13.909 L 0 13.909 L 0.9 13.909 L 0.9 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--text-primary-36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uD3EC\uC778\uD2B8\uB9F5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      padding: "0px 0px 1px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 29,
      height: 29,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.119,
      top: 12.137,
      width: 2.363,
      height: 2.363,
      borderRadius: "50%",
      backgroundColor: "var(--gray-grayaa)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 26.854,
    height: 19.335,
    viewBox: "0 0 26.854 19.335",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.073,
      top: 4.833,
      width: 26.854,
      height: 19.335,
      color: "var(--gray-grayaa)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.001 9.508 L -0.998 9.556 L 1.001 9.508 L 0.001 9.508 Z M 3.677 5.355 L 3.169 4.494 L 3.169 4.494 L 3.677 5.355 Z M 10.975 3.448 L 10.946 4.447 L 10.946 4.447 L 10.975 3.448 Z M 21.17 8.951 L 20.404 9.595 L 20.417 9.61 L 20.431 9.625 L 21.17 8.951 Z M 21.82 9.665 L 21.081 10.338 L 21.143 10.407 L 21.217 10.463 L 21.82 9.665 Z M 25.759 12.644 L 26.363 11.847 L 26.362 11.847 L 25.759 12.644 Z M 25.754 6.639 L 26.365 7.431 L 26.365 7.431 L 25.754 6.639 Z M 21.838 9.66 L 21.227 8.868 L 21.099 8.966 L 21.009 9.1 L 21.838 9.66 Z M 3.51 13.964 L 3.017 14.835 L 3.017 14.835 L 3.51 13.964 Z M 0 9.496 L 0.999 9.447 L -1 9.496 L 0 9.496 Z M 12.45 0.327 L 12.988 1.17 L 12.989 1.17 L 12.45 0.327 Z M 12.45 19.028 L 11.911 19.87 L 11.912 19.871 L 12.45 19.028 Z M 0.001 9.508 L 1.001 9.508 C 1.001 9.298 1.01 8.994 1.344 8.513 C 1.71 7.986 2.495 7.213 4.185 6.216 L 3.677 5.355 L 3.169 4.494 C 1.35 5.567 0.296 6.516 -0.298 7.371 C -0.925 8.272 -0.999 9.008 -0.999 9.508 L 0.001 9.508 Z M 3.677 5.355 L 4.185 6.216 C 5.956 5.172 8.807 4.384 10.946 4.447 L 10.975 3.448 L 11.005 2.448 C 8.466 2.373 5.245 3.269 3.169 4.494 L 3.677 5.355 Z M 10.975 3.448 L 10.946 4.447 C 16.02 4.596 19.102 8.045 20.404 9.595 L 21.17 8.951 L 21.935 8.308 C 20.595 6.713 17.012 2.624 11.004 2.448 L 10.975 3.448 Z M 21.17 8.951 L 20.431 9.625 L 21.081 10.338 L 21.82 9.665 L 22.559 8.992 L 21.909 8.278 L 21.17 8.951 Z M 21.82 9.665 L 21.217 10.463 L 25.156 13.442 L 25.759 12.644 L 26.362 11.847 L 22.423 8.867 L 21.82 9.665 Z M 25.759 12.644 L 25.156 13.441 C 26.228 14.254 27.854 13.537 27.854 12.118 L 26.854 12.118 L 25.854 12.118 C 25.854 11.968 25.951 11.857 26.041 11.814 C 26.129 11.771 26.26 11.769 26.363 11.847 L 25.759 12.644 Z M 26.854 12.118 L 27.854 12.118 L 27.854 7.161 L 26.854 7.161 L 25.854 7.161 L 25.854 12.118 L 26.854 12.118 Z M 26.854 7.161 L 27.854 7.161 C 27.854 5.734 26.213 5.021 25.143 5.848 L 25.754 6.639 L 26.365 7.431 C 26.263 7.51 26.131 7.508 26.042 7.466 C 25.952 7.424 25.854 7.312 25.854 7.161 L 26.854 7.161 Z M 25.754 6.639 L 25.143 5.847 L 21.227 8.868 L 21.838 9.66 L 22.449 10.451 L 26.365 7.431 L 25.754 6.639 Z M 21.838 9.66 C 21.009 9.1 21.009 9.1 21.01 9.099 C 21.01 9.099 21.01 9.099 21.01 9.099 C 21.01 9.099 21.01 9.098 21.01 9.098 C 21.01 9.098 21.01 9.099 21.01 9.099 C 21.009 9.101 21.007 9.103 21.004 9.107 C 20.998 9.116 20.988 9.13 20.975 9.149 C 20.947 9.188 20.904 9.248 20.845 9.325 C 20.727 9.481 20.547 9.709 20.309 9.984 C 19.831 10.537 19.121 11.276 18.203 12.013 C 16.361 13.494 13.734 14.926 10.473 14.926 L 10.473 15.926 L 10.473 16.926 C 14.343 16.926 17.399 15.225 19.456 13.572 C 20.487 12.744 21.282 11.916 21.821 11.293 C 22.091 10.981 22.298 10.719 22.439 10.532 C 22.51 10.439 22.565 10.364 22.603 10.311 C 22.622 10.284 22.636 10.263 22.647 10.248 C 22.652 10.24 22.657 10.234 22.66 10.229 C 22.661 10.227 22.663 10.225 22.664 10.223 C 22.664 10.222 22.665 10.222 22.665 10.221 C 22.666 10.221 22.666 10.22 22.666 10.22 C 22.666 10.22 22.666 10.219 21.838 9.66 Z M 10.473 15.926 L 10.473 14.926 C 7.186 14.926 4.631 13.45 4.002 13.094 L 3.51 13.964 L 3.017 14.835 C 3.682 15.211 6.629 16.926 10.473 16.926 L 10.473 15.926 Z M 3.51 13.964 L 4.002 13.094 C 3.513 12.817 2.726 12.312 2.073 11.645 C 1.41 10.966 1 10.237 1 9.496 L 0 9.496 L -1 9.496 C -1 10.99 -0.185 12.195 0.643 13.042 C 1.48 13.9 2.448 14.513 3.017 14.835 L 3.51 13.964 Z M 0 9.496 L -0.999 9.545 L -0.998 9.556 L 0.001 9.508 L 0.999 9.459 L 0.999 9.447 L 0 9.496 Z M 14.501 4.098 L 15.501 4.098 L 15.501 1.191 L 14.501 1.191 L 13.501 1.191 L 13.501 4.098 L 14.501 4.098 Z M 14.501 1.191 L 15.501 1.191 C 15.501 0.618 15.369 0.067 15.007 -0.359 C 14.634 -0.797 14.143 -0.958 13.728 -0.992 C 13.328 -1.025 12.95 -0.947 12.663 -0.857 C 12.374 -0.766 12.108 -0.641 11.912 -0.516 L 12.45 0.327 L 12.989 1.17 C 13.021 1.149 13.124 1.095 13.263 1.051 C 13.403 1.007 13.51 0.996 13.565 1.001 C 13.606 1.004 13.542 1.006 13.483 0.936 C 13.434 0.879 13.501 0.904 13.501 1.191 L 14.501 1.191 Z M 12.45 0.327 L 11.913 -0.516 L 5.894 3.322 L 6.432 4.165 L 6.969 5.008 L 12.988 1.17 L 12.45 0.327 Z M 14.501 15.222 L 13.501 15.222 L 13.501 18 L 14.501 18 L 15.501 18 L 15.501 15.222 L 14.501 15.222 Z M 14.501 18 L 13.501 18 C 13.501 18.339 13.427 18.413 13.448 18.387 C 13.459 18.372 13.479 18.354 13.503 18.341 C 13.524 18.33 13.532 18.331 13.517 18.333 C 13.475 18.339 13.381 18.334 13.247 18.294 C 13.116 18.256 13.017 18.204 12.988 18.185 L 12.45 19.028 L 11.912 19.871 C 12.11 19.997 12.382 20.124 12.678 20.212 C 12.971 20.299 13.362 20.37 13.776 20.316 C 14.212 20.259 14.692 20.057 15.042 19.595 C 15.375 19.155 15.501 18.597 15.501 18 L 14.501 18 Z M 12.45 19.028 L 12.988 18.185 L 7.111 14.428 L 6.573 15.27 L 6.034 16.113 L 11.911 19.87 L 12.45 19.028 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard Variable\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-0.400px",
      color: "var(--text-gray-2-aa)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC870\uD669")))), /*#__PURE__*/React.createElement("div", {
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

// Globals for scripts loaded after this file.
window.IcMapFloating = IcMapFloating;
window.Screen = Screen;
;try{window.AFPointmap=window.Screen;}catch(e){}
