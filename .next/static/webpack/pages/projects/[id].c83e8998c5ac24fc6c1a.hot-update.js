webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./components/Carousel.jsx":
/*!*********************************!*\
  !*** ./components/Carousel.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Carousel.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar myLoader = function myLoader(_ref) {\n  var src = _ref.src,\n      width = _ref.width,\n      quality = _ref.quality;\n  return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n};\n\nvar Carousel = function Carousel(props) {\n  _s();\n\n  var images = props.data.images;\n  var length = images.length - 1;\n  console.log('images', images);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(images[0]),\n      image = _useState[0],\n      setImage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var nextImage = function nextImage() {\n    {\n      index < length ? setIndex(index + 1) : setIndex(0);\n    }\n    console.log('index', index);\n  };\n\n  var prevImage = function prevImage() {\n    {\n      index > 0 ? setIndex(index - 1) : setIndex(length);\n    }\n  };\n\n  var dots = images.map(function (dot) {\n    if (images.indexOf(dot) === index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"solidwhiteDot\"\n      }, images.indexOf(dot), false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 14\n      }, _this);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"whitedot\"\n    }, images.indexOf(dot), false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 12\n    }, _this);\n  });\n\n  /*#__PURE__*/\n  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/projects/\".concat(props.data.next)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 1\n  }, _this);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"carousel\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"carouselImage\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        loader: myLoader,\n        src: \"\".concat(images[index], \".jpg\"),\n        alt: \"pile\",\n        layout: \"fill\",\n        objectFit: \"contain\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, images[index], false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"arrows\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: \"Feature Description\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"projArrows\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: prevImage,\n        \"class\": \"whitearrow\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          src: \"/whiteLeftArrow.png\",\n          alt: \"leftArrow\",\n          width: 300,\n          height: 25\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"dots\",\n        children: dots\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: nextImage,\n        \"class\": \"whitearrow\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          src: \"/whiteRightArrow.png\",\n          alt: \"rightArrow\",\n          width: \"43\",\n          height: \"25\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.data.details\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"nextProject\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects/\".concat(props.data.prev),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"prev\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"PREVIOUS PROJECT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 69\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 51\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects/\".concat(props.data.next),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"next\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"NEXT PROJECT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 69\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 51\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"u+njNzSHRPGjMQ15HGwOJa9nNlQ=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qc3g/NTJjNyJdLCJuYW1lcyI6WyJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsIkNhcm91c2VsIiwicHJvcHMiLCJpbWFnZXMiLCJkYXRhIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImluZGV4Iiwic2V0SW5kZXgiLCJuZXh0SW1hZ2UiLCJwcmV2SW1hZ2UiLCJkb3RzIiwibWFwIiwiZG90IiwiaW5kZXhPZiIsIm5leHQiLCJkZXRhaWxzIiwicHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZCO0FBQUEsTUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDNUMsb0VBQTJERixHQUEzRCxnQkFBb0VDLEtBQXBFLGdCQUErRUMsT0FBTyxJQUFJLEVBQTFGO0FBQ0QsQ0FGRDs7QUFNQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV0QsTUFBMUI7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixDQUEvQjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSixNQUF0Qjs7QUFKMEIsa0JBTUVLLHNEQUFRLENBQUNMLE1BQU0sQ0FBQyxDQUFELENBQVAsQ0FOVjtBQUFBLE1BTWxCTSxLQU5rQjtBQUFBLE1BTVhDLFFBTlc7O0FBQUEsbUJBT0VGLHNEQUFRLENBQUMsQ0FBRCxDQVBWO0FBQUEsTUFPbEJHLEtBUGtCO0FBQUEsTUFPWEMsUUFQVzs7QUFT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QTFCLENBQVY7QUFBQSwrQkFBNEM7QUFBSyxtQkFBTSxNQUFYO0FBQUEsaUNBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUEscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLHNCQUFlbkIsS0FBSyxDQUFDRSxJQUFOLENBQVdlLElBQTFCLENBQVY7QUFBQSwrQkFBNEM7QUFBSyxtQkFBTSxNQUFYO0FBQUEsaUNBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQXRFRDs7R0FBTWxCLFE7O0tBQUFBLFE7QUF3RVNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgcmV0dXJuIGBodHRwczovL2hlbnJ5LXdlYnNpdGUuczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuXG5cblxuY29uc3QgQ2Fyb3VzZWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaW1hZ2VzID0gcHJvcHMuZGF0YS5pbWFnZXM7XG4gIGNvbnN0IGxlbmd0aCA9IGltYWdlcy5sZW5ndGggLSAxO1xuXG4gIGNvbnNvbGUubG9nKCdpbWFnZXMnLCBpbWFnZXMpXG5cbiAgY29uc3QgWyBpbWFnZSwgc2V0SW1hZ2UgXSA9IHVzZVN0YXRlKGltYWdlc1swXSk7XG4gIGNvbnN0IFsgaW5kZXgsIHNldEluZGV4IF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBuZXh0SW1hZ2UgPSAoKSA9PiB7XG4gICAge2luZGV4IDwgbGVuZ3RoID8gc2V0SW5kZXgoaW5kZXggKyAxKSA6IHNldEluZGV4KDApfVxuICAgIGNvbnNvbGUubG9nKCdpbmRleCcsIGluZGV4KVxuICB9XG5cbiAgY29uc3QgcHJldkltYWdlID0gKCkgPT4ge1xuICAgIHtpbmRleCA+IDAgPyBzZXRJbmRleChpbmRleCAtIDEpIDogc2V0SW5kZXgobGVuZ3RoKX1cbiAgfVxuICBjb25zdCBkb3RzID0gaW1hZ2VzLm1hcChkb3QgPT4ge1xuICAgIGlmIChpbWFnZXMuaW5kZXhPZihkb3QpID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJzb2xpZHdoaXRlRG90XCIga2V5PXtpbWFnZXMuaW5kZXhPZihkb3QpfT48L2Rpdj5cbiAgICB9XG4gICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJ3aGl0ZWRvdFwiIGtleT17aW1hZ2VzLmluZGV4T2YoZG90KX0+PC9kaXY+XG4gIH0pO1xuXG48TGluayBocmVmPXtgL3Byb2plY3RzLyR7cHJvcHMuZGF0YS5uZXh0fWB9PjwvTGluaz5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbEltYWdlXCIga2V5PXtpbWFnZXNbaW5kZXhdfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgbG9hZGVyPXtteUxvYWRlcn1cbiAgICAgICAgICBzcmM9e2Ake2ltYWdlc1tpbmRleF19LmpwZ2B9XG4gICAgICAgICAgYWx0PVwicGlsZVwiXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYXJyb3dzXCI+PC9kaXY+XG4gICAgICA8aDM+RmVhdHVyZSBEZXNjcmlwdGlvbjwvaDM+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvakFycm93c1wiPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17cHJldkltYWdlfSBjbGFzcz1cIndoaXRlYXJyb3dcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvd2hpdGVMZWZ0QXJyb3cucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsZWZ0QXJyb3dcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90c1wiPntkb3RzfTwvZGl2PlxuICAgICAgICAgIDxkaXYgb25DbGljaz17bmV4dEltYWdlfSBjbGFzcz1cIndoaXRlYXJyb3dcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi93aGl0ZVJpZ2h0QXJyb3cucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJyaWdodEFycm93XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjQzXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8cD57cHJvcHMuZGF0YS5kZXRhaWxzfTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJuZXh0UHJvamVjdFwiPlxuICAgICAgPExpbmsgaHJlZj17YC9wcm9qZWN0cy8ke3Byb3BzLmRhdGEucHJldn1gfT48ZGl2IGNsYXNzPVwicHJldlwiPjxwPlBSRVZJT1VTIFBST0pFQ1Q8L3A+PC9kaXY+PC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj17YC9wcm9qZWN0cy8ke3Byb3BzLmRhdGEubmV4dH1gfT48ZGl2IGNsYXNzPVwibmV4dFwiPjxwPk5FWFQgUFJPSkVDVDwvcD48L2Rpdj48L0xpbms+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel.jsx\n");

/***/ })

})