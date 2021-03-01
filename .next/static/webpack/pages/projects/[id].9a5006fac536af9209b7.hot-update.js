webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./components/Carousel.jsx":
/*!*********************************!*\
  !*** ./components/Carousel.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Carousel.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar myLoader = function myLoader(_ref) {\n  var src = _ref.src,\n      width = _ref.width,\n      quality = _ref.quality;\n  return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n};\n\nvar Carousel = function Carousel(props) {\n  _s();\n\n  var images = props.data.images;\n  var length = images.length - 1;\n  console.log('images', images);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(images[0]),\n      image = _useState[0],\n      setImage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var nextImage = function nextImage() {\n    {\n      index < length ? setIndex(index + 1) : setIndex(0);\n    }\n    console.log('index', index);\n  };\n\n  var prevImage = function prevImage() {\n    {\n      index > 0 ? setIndex(index - 1) : setIndex(length);\n    }\n  };\n\n  var dots = images.map(function (dot) {\n    if (images.indexOf(dot) === index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"solidwhiteDot\"\n      }, images.indexOf(dot), false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 14\n      }, _this);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"whitedot\"\n    }, images.indexOf(dot), false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 12\n    }, _this);\n  });\n\n  /*#__PURE__*/\n  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/projects/\".concat(props.data.next)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 1\n  }, _this);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"carousel\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"carouselImage\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        loader: myLoader,\n        src: \"\".concat(images[index], \".jpg\"),\n        alt: \"pile\",\n        layout: \"fill\",\n        objectFit: \"contain\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, images[index], false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: \"Feature Description\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"projArrows\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: prevImage,\n        \"class\": \"arrow\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          src: \"/whiteLeftArrow.png\",\n          alt: \"leftArrow\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"dots\",\n        children: dots\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: nextImage,\n        \"class\": \"arrow\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          src: \"/whiteRightArrow.png\",\n          alt: \"rightArrow\",\n          width: 43,\n          height: 25\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.data.details\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"nextProject\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects/\".concat(props.data.prev),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"prev\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"PREVIOUS PROJECT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 69\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 51\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects/\".concat(props.data.next),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"next\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"NEXT PROJECT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 69\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 51\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"u+njNzSHRPGjMQ15HGwOJa9nNlQ=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qc3g/NTJjNyJdLCJuYW1lcyI6WyJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsIkNhcm91c2VsIiwicHJvcHMiLCJpbWFnZXMiLCJkYXRhIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImluZGV4Iiwic2V0SW5kZXgiLCJuZXh0SW1hZ2UiLCJwcmV2SW1hZ2UiLCJkb3RzIiwibWFwIiwiZG90IiwiaW5kZXhPZiIsIm5leHQiLCJkZXRhaWxzIiwicHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZCO0FBQUEsTUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDNUMsb0VBQTJERixHQUEzRCxnQkFBb0VDLEtBQXBFLGdCQUErRUMsT0FBTyxJQUFJLEVBQTFGO0FBQ0QsQ0FGRDs7QUFNQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV0QsTUFBMUI7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixDQUEvQjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSixNQUF0Qjs7QUFKMEIsa0JBTUVLLHNEQUFRLENBQUNMLE1BQU0sQ0FBQyxDQUFELENBQVAsQ0FOVjtBQUFBLE1BTWxCTSxLQU5rQjtBQUFBLE1BTVhDLFFBTlc7O0FBQUEsbUJBT0VGLHNEQUFRLENBQUMsQ0FBRCxDQVBWO0FBQUEsTUFPbEJHLEtBUGtCO0FBQUEsTUFPWEMsUUFQVzs7QUFT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Q0FBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQSxxRUFBQyxnREFBRDtBQUFNLFlBQUksc0JBQWVuQixLQUFLLENBQUNFLElBQU4sQ0FBV2UsSUFBMUIsQ0FBVjtBQUFBLCtCQUE0QztBQUFLLG1CQUFNLE1BQVg7QUFBQSxpQ0FBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUNELENBckVEOztHQUFNbEIsUTs7S0FBQUEsUTtBQXVFU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xuICByZXR1cm4gYGh0dHBzOi8vaGVucnktd2Vic2l0ZS5zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS8ke3NyY30/dz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG5cblxuXG5jb25zdCBDYXJvdXNlbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBpbWFnZXMgPSBwcm9wcy5kYXRhLmltYWdlcztcbiAgY29uc3QgbGVuZ3RoID0gaW1hZ2VzLmxlbmd0aCAtIDE7XG5cbiAgY29uc29sZS5sb2coJ2ltYWdlcycsIGltYWdlcylcblxuICBjb25zdCBbIGltYWdlLCBzZXRJbWFnZSBdID0gdXNlU3RhdGUoaW1hZ2VzWzBdKTtcbiAgY29uc3QgWyBpbmRleCwgc2V0SW5kZXggXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IG5leHRJbWFnZSA9ICgpID0+IHtcbiAgICB7aW5kZXggPCBsZW5ndGggPyBzZXRJbmRleChpbmRleCArIDEpIDogc2V0SW5kZXgoMCl9XG4gICAgY29uc29sZS5sb2coJ2luZGV4JywgaW5kZXgpXG4gIH1cblxuICBjb25zdCBwcmV2SW1hZ2UgPSAoKSA9PiB7XG4gICAge2luZGV4ID4gMCA/IHNldEluZGV4KGluZGV4IC0gMSkgOiBzZXRJbmRleChsZW5ndGgpfVxuICB9XG4gIGNvbnN0IGRvdHMgPSBpbWFnZXMubWFwKGRvdCA9PiB7XG4gICAgaWYgKGltYWdlcy5pbmRleE9mKGRvdCkgPT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzcz1cInNvbGlkd2hpdGVEb3RcIiBrZXk9e2ltYWdlcy5pbmRleE9mKGRvdCl9PjwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4gPGRpdiBjbGFzcz1cIndoaXRlZG90XCIga2V5PXtpbWFnZXMuaW5kZXhPZihkb3QpfT48L2Rpdj5cbiAgfSk7XG5cbjxMaW5rIGhyZWY9e2AvcHJvamVjdHMvJHtwcm9wcy5kYXRhLm5leHR9YH0+PC9MaW5rPlxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsSW1hZ2VcIiBrZXk9e2ltYWdlc1tpbmRleF19PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgIHNyYz17YCR7aW1hZ2VzW2luZGV4XX0uanBnYH1cbiAgICAgICAgICBhbHQ9XCJwaWxlXCJcbiAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoMz5GZWF0dXJlIERlc2NyaXB0aW9uPC9oMz5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qQXJyb3dzXCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtwcmV2SW1hZ2V9IGNsYXNzPVwiYXJyb3dcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvd2hpdGVMZWZ0QXJyb3cucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsZWZ0QXJyb3dcIlxuICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3RzXCI+e2RvdHN9PC9kaXY+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtuZXh0SW1hZ2V9IGNsYXNzPVwiYXJyb3dcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi93aGl0ZVJpZ2h0QXJyb3cucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJyaWdodEFycm93XCJcbiAgICAgICAgICAgICAgICB3aWR0aD17NDN9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPntwcm9wcy5kYXRhLmRldGFpbHN9PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cIm5leHRQcm9qZWN0XCI+XG4gICAgICA8TGluayBocmVmPXtgL3Byb2plY3RzLyR7cHJvcHMuZGF0YS5wcmV2fWB9PjxkaXYgY2xhc3M9XCJwcmV2XCI+PHA+UFJFVklPVVMgUFJPSkVDVDwvcD48L2Rpdj48L0xpbms+XG4gICAgICA8TGluayBocmVmPXtgL3Byb2plY3RzLyR7cHJvcHMuZGF0YS5uZXh0fWB9PjxkaXYgY2xhc3M9XCJuZXh0XCI+PHA+TkVYVCBQUk9KRUNUPC9wPjwvZGl2PjwvTGluaz5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel.jsx\n");

/***/ })

})