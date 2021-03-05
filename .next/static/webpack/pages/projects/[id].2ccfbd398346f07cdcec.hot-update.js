webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./components/Carousel.jsx":
/*!*********************************!*\
  !*** ./components/Carousel.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Carousel.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Carousel = function Carousel(props) {\n  _s();\n\n  var images = props.data.images;\n  var length = images.length - 1;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(images[0]),\n      image = _useState[0],\n      setImage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      hover = _useState3[0],\n      setHover = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      left = _useState4[0],\n      moveLeft = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      right = _useState5[0],\n      moveRight = _useState5[1];\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://d13gv6jsteq2nf.cloudfront.net/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var toggleMoveRight = function toggleMoveRight() {\n    moveRight(!right);\n  };\n\n  var toggleMoveLeft = function toggleMoveLeft() {\n    moveLeft(!left);\n  };\n\n  var nextImage = function nextImage() {\n    {\n      index < length ? setIndex(index + 1) : setIndex(0);\n    }\n    console.log('index', index);\n  };\n\n  var prevImage = function prevImage() {\n    {\n      index > 0 ? setIndex(index - 1) : setIndex(length);\n    }\n  };\n\n  var dots = images.map(function (dot) {\n    if (images.indexOf(dot) === index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"solidwhiteDot\"\n      }, images.indexOf(dot), false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 14\n      }, _this);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"whitedot\"\n    }, images.indexOf(dot), false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"carousel\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"carouselImage\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        loader: myLoader,\n        src: \"\".concat(images[index], \".png\"),\n        alt: \"proj\",\n        layout: \"fill\",\n        objectFit: \"contain\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)\n    }, images[index], false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), dots.length > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"projArrows\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: prevImage,\n        \"class\": \"arrow\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          src: \"/whiteLeftArrow.png\",\n          alt: \"leftArrow\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"dots\",\n        children: dots\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: nextImage,\n        \"class\": \"arrow\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          src: \"/whiteRightArrow.png\",\n          alt: \"rightArrow\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"nextProject\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects/\".concat(props.data.prev),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"prev\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": left ? \"viewLeft\" : \"viewLeftHover\",\n            onMouseEnter: toggleMoveLeft,\n            onMouseLeave: toggleMoveLeft,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              src: \"/prevProject.png\",\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 51\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects/\".concat(props.data.next),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"next\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": right ? \"viewRight\" : \"viewRightHover\",\n            onMouseEnter: toggleMoveRight,\n            onMouseLeave: toggleMoveRight,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              src: \"/nextProject.png\",\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"Mkmpe+XWTrm/vUnsf5rQA2zlHy0=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qc3g/NTJjNyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInByb3BzIiwiaW1hZ2VzIiwiZGF0YSIsImxlbmd0aCIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImluZGV4Iiwic2V0SW5kZXgiLCJob3ZlciIsInNldEhvdmVyIiwibGVmdCIsIm1vdmVMZWZ0IiwicmlnaHQiLCJtb3ZlUmlnaHQiLCJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsInRvZ2dsZU1vdmVSaWdodCIsInRvZ2dsZU1vdmVMZWZ0IiwibmV4dEltYWdlIiwiY29uc29sZSIsImxvZyIsInByZXZJbWFnZSIsImRvdHMiLCJtYXAiLCJkb3QiLCJpbmRleE9mIiwicHJldiIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV0QsTUFBMUI7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixDQUEvQjs7QUFGMEIsa0JBSUVDLHNEQUFRLENBQUNILE1BQU0sQ0FBQyxDQUFELENBQVAsQ0FKVjtBQUFBLE1BSWxCSSxLQUprQjtBQUFBLE1BSVhDLFFBSlc7O0FBQUEsbUJBS0VGLHNEQUFRLENBQUMsQ0FBRCxDQUxWO0FBQUEsTUFLbEJHLEtBTGtCO0FBQUEsTUFLWEMsUUFMVzs7QUFBQSxtQkFNRUosc0RBQVEsQ0FBQyxJQUFELENBTlY7QUFBQSxNQU1sQkssS0FOa0I7QUFBQSxNQU1YQyxRQU5XOztBQUFBLG1CQU9DTixzREFBUSxDQUFDLElBQUQsQ0FQVDtBQUFBLE1BT2xCTyxJQVBrQjtBQUFBLE1BT1pDLFFBUFk7O0FBQUEsbUJBUUdSLHNEQUFRLENBQUMsSUFB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QTtBQUFBO0FBQUE7QUFBQSxlQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlFRCxDQTVHRDs7R0FBTXBCLFE7O0tBQUFBLFE7QUE4R1NBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuXG5cblxuY29uc3QgQ2Fyb3VzZWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaW1hZ2VzID0gcHJvcHMuZGF0YS5pbWFnZXM7XG4gIGNvbnN0IGxlbmd0aCA9IGltYWdlcy5sZW5ndGggLSAxO1xuXG4gIGNvbnN0IFsgaW1hZ2UsIHNldEltYWdlIF0gPSB1c2VTdGF0ZShpbWFnZXNbMF0pO1xuICBjb25zdCBbIGluZGV4LCBzZXRJbmRleCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgaG92ZXIsIHNldEhvdmVyIF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgWyBsZWZ0LCBtb3ZlTGVmdCBdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFsgcmlnaHQsIG1vdmVSaWdodCBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICByZXR1cm4gYGh0dHBzOi8vZDEzZ3Y2anN0ZXEybmYuY2xvdWRmcm9udC5uZXQvJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxuICB9XG5cblxuXG4gIGNvbnN0IHRvZ2dsZU1vdmVSaWdodCA9ICgpID0+IHtcbiAgICBtb3ZlUmlnaHQoIXJpZ2h0KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVNb3ZlTGVmdCA9ICgpID0+IHtcbiAgICBtb3ZlTGVmdCghbGVmdCk7XG4gIH07XG5cbiAgY29uc3QgbmV4dEltYWdlID0gKCkgPT4ge1xuICAgIHtpbmRleCA8IGxlbmd0aCA/IHNldEluZGV4KGluZGV4ICsgMSkgOiBzZXRJbmRleCgwKX1cbiAgICBjb25zb2xlLmxvZygnaW5kZXgnLCBpbmRleClcbiAgfVxuXG4gIGNvbnN0IHByZXZJbWFnZSA9ICgpID0+IHtcbiAgICB7aW5kZXggPiAwID8gc2V0SW5kZXgoaW5kZXggLSAxKSA6IHNldEluZGV4KGxlbmd0aCl9XG4gIH1cblxuICBjb25zdCBkb3RzID0gaW1hZ2VzLm1hcChkb3QgPT4ge1xuICAgIGlmIChpbWFnZXMuaW5kZXhPZihkb3QpID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJzb2xpZHdoaXRlRG90XCIga2V5PXtpbWFnZXMuaW5kZXhPZihkb3QpfT48L2Rpdj5cbiAgICB9XG4gICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJ3aGl0ZWRvdFwiIGtleT17aW1hZ2VzLmluZGV4T2YoZG90KX0+PC9kaXY+XG4gIH0pO1xuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImNhcm91c2VsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxJbWFnZVwiIGtleT17aW1hZ2VzW2luZGV4XX0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XG4gICAgICAgICAgc3JjPXtgJHtpbWFnZXNbaW5kZXhdfS5wbmdgfVxuICAgICAgICAgIGFsdD1cInByb2pcIlxuICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtkb3RzLmxlbmd0aCA+IDEgP1xuICAgICAgPGRpdiBjbGFzcz1cInByb2pBcnJvd3NcIj5cbiAgICAgIDxkaXYgb25DbGljaz17cHJldkltYWdlfSBjbGFzcz1cImFycm93XCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi93aGl0ZUxlZnRBcnJvdy5wbmdcIlxuICAgICAgICAgIGFsdD1cImxlZnRBcnJvd1wiXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkb3RzXCI+e2RvdHN9PC9kaXY+XG4gICAgICAgIDxkaXYgb25DbGljaz17bmV4dEltYWdlfSBjbGFzcz1cImFycm93XCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi93aGl0ZVJpZ2h0QXJyb3cucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwicmlnaHRBcnJvd1wiXG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiA6IG51bGx9XG5cbiAgICAgIHsvKiA8cD57cHJvcHMuZGF0YS5kZXRhaWxzfTwvcD4gKi99XG4gICAgICA8ZGl2IGNsYXNzPVwibmV4dFByb2plY3RcIj5cbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvamVjdHMvJHtwcm9wcy5kYXRhLnByZXZ9YH0+PGRpdiBjbGFzcz1cInByZXZcIj5cblxuICAgICAgPGRpdiBjbGFzcz17bGVmdCA/IFwidmlld0xlZnRcIiA6IFwidmlld0xlZnRIb3ZlclwifSBvbk1vdXNlRW50ZXI9e3RvZ2dsZU1vdmVMZWZ0fVxuICAgICAgb25Nb3VzZUxlYXZlPXt0b2dnbGVNb3ZlTGVmdH0+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvcHJldlByb2plY3QucG5nXCJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPXtgL3Byb2plY3RzLyR7cHJvcHMuZGF0YS5uZXh0fWB9PlxuICAgICAgPGRpdiBjbGFzcz1cIm5leHRcIj5cbiAgICAgIDxkaXYgY2xhc3M9e3JpZ2h0ID8gXCJ2aWV3UmlnaHRcIiA6IFwidmlld1JpZ2h0SG92ZXJcIn0gb25Nb3VzZUVudGVyPXt0b2dnbGVNb3ZlUmlnaHR9XG4gICAgICBvbk1vdXNlTGVhdmU9e3RvZ2dsZU1vdmVSaWdodH0+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvbmV4dFByb2plY3QucG5nXCJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.jsx\n");

/***/ })

})