webpackHotUpdate_N_E("pages/photography",{

/***/ "./components/PhotoCarousel.jsx":
/*!**************************************!*\
  !*** ./components/PhotoCarousel.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/PhotoCarousel.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar myLoader = function myLoader(_ref) {\n  var src = _ref.src,\n      width = _ref.width,\n      quality = _ref.quality;\n  return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n};\n\nvar PhotoCarousel = function PhotoCarousel(props) {\n  _s();\n\n  var images = props.data.images;\n  var length = images.length - 1;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var dots = images.map(function (dot) {\n    if (images.indexOf(dot) === index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"solidDot\"\n      }, images.indexOf(dot), false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 14\n      }, _this);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"dot\"\n    }, images.indexOf(dot), false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 12\n    }, _this);\n  });\n\n  var nextImage = function nextImage() {\n    {\n      index < length ? setIndex(index + 1) : setIndex(0);\n    }\n  };\n\n  var prevImage = function prevImage() {\n    {\n      index > 0 ? setIndex(index - 1) : setIndex(length);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"photoProj\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"photoHead\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"bigImage\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"slideImage\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            loader: myLoader,\n            src: \"\".concat(images[index], \".jpg\"),\n            alt: \"pile\",\n            layout: \"fill\",\n            objectFit: \"cover\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 9\n          }, _this)\n        }, images[index], false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"projDescription\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: props.data.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: props.data.date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: props.data.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"imageArrows\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            onClick: prevImage,\n            \"class\": \"arrow\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n              src: \"/leftArrow.png\",\n              alt: \"leftArrow\",\n              width: \"43\",\n              height: \"25\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"dots\",\n            children: dots\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            onClick: nextImage,\n            \"class\": \"arrow\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n              src: \"/rightArrow.png\",\n              alt: \"rightArrow\",\n              width: \"43\",\n              height: \"25\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PhotoCarousel, \"tvG7BiaZbXFtBDdFEo6oh4e01hI=\");\n\n_c = PhotoCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"PhotoCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG90b0Nhcm91c2VsLmpzeD8zYTU4Il0sIm5hbWVzIjpbIm15TG9hZGVyIiwic3JjIiwid2lkdGgiLCJxdWFsaXR5IiwiUGhvdG9DYXJvdXNlbCIsInByb3BzIiwiaW1hZ2VzIiwiZGF0YSIsImxlbmd0aCIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsImRvdHMiLCJtYXAiLCJkb3QiLCJpbmRleE9mIiwibmV4dEltYWdlIiwicHJldkltYWdlIiwibmFtZSIsImRhdGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNkI7QUFBQSxNQUExQkMsR0FBMEIsUUFBMUJBLEdBQTBCO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM1QyxvRUFBMkRGLEdBQTNELGdCQUFvRUMsS0FBcEUsZ0JBQStFQyxPQUFPLElBQUksRUFBMUY7QUFDRCxDQUZEOztBQU1BLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRS9CLE1BQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxJQUFOLENBQVdELE1BQTFCO0FBQ0EsTUFBTUUsTUFBTSxHQUFHRixNQUFNLENBQUNFLE1BQVAsR0FBZ0IsQ0FBL0I7O0FBSCtCLGtCQUlKQyxzREFBUSxDQUFDLENBQUQsQ0FKSjtBQUFBLE1BSXZCQyxLQUp1QjtBQUFBLE1BSWhCQyxRQUpnQjs7QUFNL0IsTUFBTUMsSUFBSSxHQUFHTixNQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFBQyxHQUFHLEVBQUk7QUFDN0IsUUFBSVIsTUFBTSxDQUFDUyxPQUFQLENBQWVELEdBQWYsTUFBd0JKLEtBQTVCLEVBQW1DO0FBQ2pDLDBCQUFPO0FBQUssaUJBQU07QUFBWCxTQUEyQkosTUFB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cblxuY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgcmV0dXJuIGBodHRwczovL2hlbnJ5LXdlYnNpdGUuczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuXG5cblxuY29uc3QgUGhvdG9DYXJvdXNlbCA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGltYWdlcyA9IHByb3BzLmRhdGEuaW1hZ2VzO1xuICBjb25zdCBsZW5ndGggPSBpbWFnZXMubGVuZ3RoIC0gMTtcbiAgY29uc3QgWyBpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgZG90cyA9IGltYWdlcy5tYXAoZG90ID0+IHtcbiAgICBpZiAoaW1hZ2VzLmluZGV4T2YoZG90KSA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzPVwic29saWREb3RcIiBrZXk9e2ltYWdlcy5pbmRleE9mKGRvdCl9PjwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4gPGRpdiBjbGFzcz1cImRvdFwiIGtleT17aW1hZ2VzLmluZGV4T2YoZG90KX0+PC9kaXY+XG4gIH0pO1xuXG4gIGNvbnN0IG5leHRJbWFnZSA9ICgpID0+IHtcbiAgICB7aW5kZXggPCBsZW5ndGggPyBzZXRJbmRleChpbmRleCArIDEpIDogc2V0SW5kZXgoMCl9XG4gIH1cblxuICBjb25zdCBwcmV2SW1hZ2UgPSAoKSA9PiB7XG4gICAge2luZGV4ID4gMCA/IHNldEluZGV4KGluZGV4IC0gMSkgOiBzZXRJbmRleChsZW5ndGgpfVxuICB9XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInBob3RvUHJvalwiPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicGhvdG9IZWFkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmlnSW1hZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlSW1hZ2VcIiBrZXk9e2ltYWdlc1tpbmRleF19PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgbG9hZGVyPXtteUxvYWRlcn1cbiAgICAgICAgc3JjPXtgJHtpbWFnZXNbaW5kZXhdfS5qcGdgfVxuICAgICAgICBhbHQ9XCJwaWxlXCJcbiAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInByb2pEZXNjcmlwdGlvblwiPlxuICAgICAgICA8aDE+e3Byb3BzLmRhdGEubmFtZX08L2gxPlxuICAgICAgICA8aDM+e3Byb3BzLmRhdGEuZGF0ZX08L2gzPlxuICAgICAgICA8cD57cHJvcHMuZGF0YS5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlQXJyb3dzXCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtwcmV2SW1hZ2V9IGNsYXNzPVwiYXJyb3dcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvbGVmdEFycm93LnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cImxlZnRBcnJvd1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDNcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyNVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90c1wiPntkb3RzfTwvZGl2PlxuICAgICAgICAgIDxkaXYgb25DbGljaz17bmV4dEltYWdlfSBjbGFzcz1cImFycm93XCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL3JpZ2h0QXJyb3cucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwicmlnaHRBcnJvd1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDNcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyNVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvQ2Fyb3VzZWw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PhotoCarousel.jsx\n");

/***/ })

})