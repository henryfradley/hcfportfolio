webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./components/Carousel.jsx":
/*!*********************************!*\
  !*** ./components/Carousel.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Carousel.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar myLoader = function myLoader(_ref) {\n  var src = _ref.src,\n      width = _ref.width,\n      quality = _ref.quality;\n  return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n};\n\nvar Carousel = function Carousel(props) {\n  _s();\n\n  var images = props.data.images;\n  var length = images.length - 1;\n  console.log('images', images);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(images[0]),\n      image = _useState[0],\n      setImage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var nextImage = function nextImage() {\n    {\n      index < length ? setIndex(index + 1) : setIndex(0);\n    }\n    console.log('index', index);\n  };\n\n  var prevImage = function prevImage() {\n    {\n      index > 0 ? setIndex(index - 1) : setIndex(length);\n    }\n  };\n\n  var dots = images.map(function (dot) {\n    if (images.indexOf(dot) === index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"solidwhiteDot\"\n      }, images.indexOf(dot), false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 14\n      }, _this);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"whitedot\"\n    }, images.indexOf(dot), false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 12\n    }, _this);\n  });\n\n  /*#__PURE__*/\n  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/projects/\".concat(props.data.next)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 1\n  }, _this);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"carousel\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"carouselImage\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        loader: myLoader,\n        src: \"\".concat(images[index], \".jpg\"),\n        alt: \"pile\",\n        layout: \"fill\",\n        objectFit: \"contain\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, images[index], false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: \"Feature Description\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"projArrows\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: prevImage,\n        \"class\": \"arrow\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          src: \"/whiteLeftArrow.png\",\n          alt: \"leftArrow\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"dots\",\n        children: dots\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: nextImage,\n        \"class\": \"arrow\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          src: \"/whiteRightArrow.png\",\n          alt: \"rightArrow\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.data.details\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"nextProject\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects/\".concat(props.data.prev),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"prev\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"viewLeft\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              src: \"/prevProject.png\",\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 51\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects/\".concat(props.data.next),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"next\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"viewRight\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              src: \"/nextProject.png\",\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"u+njNzSHRPGjMQ15HGwOJa9nNlQ=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qc3g/NTJjNyJdLCJuYW1lcyI6WyJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsIkNhcm91c2VsIiwicHJvcHMiLCJpbWFnZXMiLCJkYXRhIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImluZGV4Iiwic2V0SW5kZXgiLCJuZXh0SW1hZ2UiLCJwcmV2SW1hZ2UiLCJkb3RzIiwibWFwIiwiZG90IiwiaW5kZXhPZiIsIm5leHQiLCJkZXRhaWxzIiwicHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZCO0FBQUEsTUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDNUMsb0VBQTJERixHQUEzRCxnQkFBb0VDLEtBQXBFLGdCQUErRUMsT0FBTyxJQUFJLEVBQTFGO0FBQ0QsQ0FGRDs7QUFNQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV0QsTUFBMUI7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixDQUEvQjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSixNQUF0Qjs7QUFKMEIsa0JBTUVLLHNEQUFRLENBQUNMLE1BQU0sQ0FBQyxDQUFELENBQVAsQ0FOVjtBQUFBLE1BTWxCTSxLQU5rQjtBQUFBLE1BTVhDLFFBTlc7O0FBQUEsbUJBT0VGLHNEQUFRLENBQUMsQ0FBRCxDQVBWO0FBQUEsTUFPbEJHLEtBUGtCO0FBQUEsTUFPWEMsUUFQVzs7QUFT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aUNBQzVDO0FBQUsscUJBQU0sVUFBWDtBQUFBLG1DQUNRLHFFQUFDLGlEQUFEO0FBQ0EsaUJBQUcsRUFBQyxrQkFESjtBQUVBLG9CQUFNLEVBQUMsTUFGUDtBQUdBLHVCQUFTLEVBQUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQ0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQVdBLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxzQkFBZW5CLEtBQUssQ0FBQ0UsSUFBTixDQUFXZSxJQUExQixDQUFWO0FBQUEsK0JBQ0E7QUFBSyxtQkFBTSxNQUFYO0FBQUEsaUNBQ0E7QUFBSyxxQkFBTSxXQUFYO0FBQUEsbUNBQ1EscUVBQUMsaURBQUQ7QUFDQSxpQkFBRyxFQUFDLGtCQURKO0FBRUEsb0JBQU0sRUFBQyxNQUZQO0FBR0EsdUJBQVMsRUFBQztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4REQsQ0ExRkQ7O0dBQU1sQixROztLQUFBQSxRO0FBNEZTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IG15TG9hZGVyID0gKHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9KSA9PiB7XG4gIHJldHVybiBgaHR0cHM6Ly9oZW5yeS13ZWJzaXRlLnMzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tLyR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cblxuXG5cbmNvbnN0IENhcm91c2VsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGltYWdlcyA9IHByb3BzLmRhdGEuaW1hZ2VzO1xuICBjb25zdCBsZW5ndGggPSBpbWFnZXMubGVuZ3RoIC0gMTtcblxuICBjb25zb2xlLmxvZygnaW1hZ2VzJywgaW1hZ2VzKVxuXG4gIGNvbnN0IFsgaW1hZ2UsIHNldEltYWdlIF0gPSB1c2VTdGF0ZShpbWFnZXNbMF0pO1xuICBjb25zdCBbIGluZGV4LCBzZXRJbmRleCBdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgbmV4dEltYWdlID0gKCkgPT4ge1xuICAgIHtpbmRleCA8IGxlbmd0aCA/IHNldEluZGV4KGluZGV4ICsgMSkgOiBzZXRJbmRleCgwKX1cbiAgICBjb25zb2xlLmxvZygnaW5kZXgnLCBpbmRleClcbiAgfVxuXG4gIGNvbnN0IHByZXZJbWFnZSA9ICgpID0+IHtcbiAgICB7aW5kZXggPiAwID8gc2V0SW5kZXgoaW5kZXggLSAxKSA6IHNldEluZGV4KGxlbmd0aCl9XG4gIH1cbiAgY29uc3QgZG90cyA9IGltYWdlcy5tYXAoZG90ID0+IHtcbiAgICBpZiAoaW1hZ2VzLmluZGV4T2YoZG90KSA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzPVwic29saWR3aGl0ZURvdFwiIGtleT17aW1hZ2VzLmluZGV4T2YoZG90KX0+PC9kaXY+XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IGNsYXNzPVwid2hpdGVkb3RcIiBrZXk9e2ltYWdlcy5pbmRleE9mKGRvdCl9PjwvZGl2PlxuICB9KTtcblxuPExpbmsgaHJlZj17YC9wcm9qZWN0cy8ke3Byb3BzLmRhdGEubmV4dH1gfT48L0xpbms+XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImNhcm91c2VsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxJbWFnZVwiIGtleT17aW1hZ2VzW2luZGV4XX0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XG4gICAgICAgICAgc3JjPXtgJHtpbWFnZXNbaW5kZXhdfS5qcGdgfVxuICAgICAgICAgIGFsdD1cInBpbGVcIlxuICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgzPkZlYXR1cmUgRGVzY3JpcHRpb248L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2pBcnJvd3NcIj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3ByZXZJbWFnZX0gY2xhc3M9XCJhcnJvd1wiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi93aGl0ZUxlZnRBcnJvdy5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cImxlZnRBcnJvd1wiXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRvdHNcIj57ZG90c308L2Rpdj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e25leHRJbWFnZX0gY2xhc3M9XCJhcnJvd1wiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL3doaXRlUmlnaHRBcnJvdy5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cInJpZ2h0QXJyb3dcIlxuICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+e3Byb3BzLmRhdGEuZGV0YWlsc308L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwibmV4dFByb2plY3RcIj5cbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvamVjdHMvJHtwcm9wcy5kYXRhLnByZXZ9YH0+PGRpdiBjbGFzcz1cInByZXZcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3TGVmdFwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL3ByZXZQcm9qZWN0LnBuZ1wiXG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj17YC9wcm9qZWN0cy8ke3Byb3BzLmRhdGEubmV4dH1gfT5cbiAgICAgIDxkaXYgY2xhc3M9XCJuZXh0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidmlld1JpZ2h0XCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvbmV4dFByb2plY3QucG5nXCJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.jsx\n");

/***/ })

})