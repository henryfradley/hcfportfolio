webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./components/Carousel.jsx":
/*!*********************************!*\
  !*** ./components/Carousel.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Carousel.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Carousel = function Carousel(props) {\n  _s();\n\n  var images = props.data.images;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(images[0]),\n      image = _useState[0],\n      setImage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var nextImage = function nextImage() {\n    {\n      index < length ? setIndex(index + 1) : setIndex(0);\n    }\n  };\n\n  var prevImage = function prevImage() {\n    {\n      index > 0 ? setIndex(index - 1) : setIndex(length);\n    }\n  };\n\n  var dots = images.map(function (dot) {\n    if (images.indexOf(dot) === index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"solidDot\"\n      }, images.indexOf(dot), false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 14\n      }, _this);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"whitedot\"\n    }, images.indexOf(dot), false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 12\n    }, _this);\n  });\n\n  /*#__PURE__*/\n  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/projects/\".concat(props.data.next)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 1\n  }, _this);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"carousel\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"arrows\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: \"Feature Description\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.data.details\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"imageArrows\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: prevImage,\n        \"class\": \"arrow\",\n        children: \"ARROW\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"dots\",\n        children: dots\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: nextImage,\n        \"class\": \"arrow\",\n        children: \"ARROW\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"nextProject\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects/\".concat(props.data.prev),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"prev\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"PREVIOUS PROJECT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 69\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 51\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects/\".concat(props.data.next),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"next\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"NEXT PROJECT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 69\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 51\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"u+njNzSHRPGjMQ15HGwOJa9nNlQ=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qc3g/NTJjNyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInByb3BzIiwiaW1hZ2VzIiwiZGF0YSIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImluZGV4Iiwic2V0SW5kZXgiLCJuZXh0SW1hZ2UiLCJsZW5ndGgiLCJwcmV2SW1hZ2UiLCJkb3RzIiwibWFwIiwiZG90IiwiaW5kZXhPZiIsIm5leHQiLCJkZXRhaWxzIiwicHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUMxQixNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixDQUFXRCxNQUExQjs7QUFEMEIsa0JBR0VFLHNEQUFRLENBQUNGLE1BQU0sQ0FBQyxDQUFELENBQVAsQ0FIVjtBQUFBLE1BR2xCRyxLQUhrQjtBQUFBLE1BR1hDLFFBSFc7O0FBQUEsbUJBSUVGLHNEQUFRLENBQUMsQ0FBRCxDQUpWO0FBQUEsTUFJbEJHLEtBSmtCO0FBQUEsTUFJWEMsUUFKVzs7QUFNMUIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QjtBQUFDRixXQUFLLEdBQUdHLE1BQVIsR0FBaUJGLFFBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBekIsR0FBdUNDLFFBQVEsQ0FBQyxDQUFELENBQS9DO0FBQW1EO0FBQ3JELEdBRkQ7O0FBSUEsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QjtBQUFDSixXQUFLLEdBQUcsQ0FBUixHQUFZQyxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQXBCLEdBQWtDQyxRQUFRLENBQUNFLE1BQUQsQ0FBMUM7QUFBbUQ7QUFDckQsR0FGRDs7QUFHQSxNQUFNRSxJQUFJLEdBQUdWLE1BQU0sQ0FBQ1csR0FBUCxDQUFXLFVBQUFDLEdBQUcsRUFBSTtBQUM3QixRQUFJWixNQUFNLENBQUNhLE9BQVAsQ0FBZUQsR0FBZixNQUF3QlAsS0FBNUIsRUFBbUM7QUFDakMsMEJBQU87QUFBSyxpQkFBTTtBQUFYLFNBQTJCTCxNQUFNLENBQUNhLE9BQVAsQ0FBZUQsR0FBZixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRDs7QUFDRCx3QkFBTztBQUFLLGVBQU07QUFBWCxPQUEyQlosTUFBTSxDQUFDYSxPQUFQLENBQWVELEdBQWYsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsR0FMWSxDQUFiOztBQU9GO0FBQUEsdUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLHNCQUFlYixLQUFLLENBQUNFLElBQU4sQ0FBV2EsSUFBMUI7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlFLHNCQUNFO0FBQUssYUFBTSxVQUFYO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUEsZ0JBQUlmLEtBQUssQ0FBQ0UsSUFBTixDQUFXYztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQUtFO0FBQUssZUFBTSxhQUFYO0FBQUEsOEJBQ0k7QUFBSyxlQUFPLEVBQUVOLFNBQWQ7QUFBeUIsaUJBQU0sT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssaUJBQU0sTUFBWDtBQUFBLGtCQUFtQkM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBSyxlQUFPLEVBQUVILFNBQWQ7QUFBeUIsaUJBQU0sT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQVVFO0FBQUssZUFBTSxhQUFYO0FBQUEsOEJBQ0EscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLHNCQUFlUixLQUFLLENBQUNFLElBQU4sQ0FBV2UsSUFBMUIsQ0FBVjtBQUFBLCtCQUE0QztBQUFLLG1CQUFNLE1BQVg7QUFBQSxpQ0FBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQSxxRUFBQyxnREFBRDtBQUFNLFlBQUksc0JBQWVqQixLQUFLLENBQUNFLElBQU4sQ0FBV2EsSUFBMUIsQ0FBVjtBQUFBLCtCQUE0QztBQUFLLG1CQUFNLE1BQVg7QUFBQSxpQ0FBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0ExQ0Q7O0dBQU1oQixROztLQUFBQSxRO0FBNENTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cblxuY29uc3QgQ2Fyb3VzZWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaW1hZ2VzID0gcHJvcHMuZGF0YS5pbWFnZXM7XG5cbiAgY29uc3QgWyBpbWFnZSwgc2V0SW1hZ2UgXSA9IHVzZVN0YXRlKGltYWdlc1swXSk7XG4gIGNvbnN0IFsgaW5kZXgsIHNldEluZGV4IF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBuZXh0SW1hZ2UgPSAoKSA9PiB7XG4gICAge2luZGV4IDwgbGVuZ3RoID8gc2V0SW5kZXgoaW5kZXggKyAxKSA6IHNldEluZGV4KDApfVxuICB9XG5cbiAgY29uc3QgcHJldkltYWdlID0gKCkgPT4ge1xuICAgIHtpbmRleCA+IDAgPyBzZXRJbmRleChpbmRleCAtIDEpIDogc2V0SW5kZXgobGVuZ3RoKX1cbiAgfVxuICBjb25zdCBkb3RzID0gaW1hZ2VzLm1hcChkb3QgPT4ge1xuICAgIGlmIChpbWFnZXMuaW5kZXhPZihkb3QpID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJzb2xpZERvdFwiIGtleT17aW1hZ2VzLmluZGV4T2YoZG90KX0+PC9kaXY+XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IGNsYXNzPVwid2hpdGVkb3RcIiBrZXk9e2ltYWdlcy5pbmRleE9mKGRvdCl9PjwvZGl2PlxuICB9KTtcblxuPExpbmsgaHJlZj17YC9wcm9qZWN0cy8ke3Byb3BzLmRhdGEubmV4dH1gfT48L0xpbms+XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImNhcm91c2VsXCI+XG4gICAgICA8aW1nPjwvaW1nPlxuICAgICAgPGRpdiBjbGFzcz1cImFycm93c1wiPjwvZGl2PlxuICAgICAgPGgzPkZlYXR1cmUgRGVzY3JpcHRpb248L2gzPlxuICAgICAgPHA+e3Byb3BzLmRhdGEuZGV0YWlsc308L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VBcnJvd3NcIj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3ByZXZJbWFnZX0gY2xhc3M9XCJhcnJvd1wiPkFSUk9XPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRvdHNcIj57ZG90c308L2Rpdj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e25leHRJbWFnZX0gY2xhc3M9XCJhcnJvd1wiPkFSUk9XPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5leHRQcm9qZWN0XCI+XG4gICAgICA8TGluayBocmVmPXtgL3Byb2plY3RzLyR7cHJvcHMuZGF0YS5wcmV2fWB9PjxkaXYgY2xhc3M9XCJwcmV2XCI+PHA+UFJFVklPVVMgUFJPSkVDVDwvcD48L2Rpdj48L0xpbms+XG4gICAgICA8TGluayBocmVmPXtgL3Byb2plY3RzLyR7cHJvcHMuZGF0YS5uZXh0fWB9PjxkaXYgY2xhc3M9XCJuZXh0XCI+PHA+TkVYVCBQUk9KRUNUPC9wPjwvZGl2PjwvTGluaz5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel.jsx\n");

/***/ })

})