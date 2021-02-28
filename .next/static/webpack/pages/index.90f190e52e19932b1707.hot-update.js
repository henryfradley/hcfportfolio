webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Menu = function Menu() {\n  _s();\n\n  var images = [1, 2, 3];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisibile = _useState2[1];\n\n  var showMenu = function showMenu() {\n    setVisibile(true);\n  };\n\n  var hideMenu = function hideMenu() {\n    setVisibile(false);\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var linkList = ['HOME', 'ABOUT', 'PROJECTS', 'PHOTOGRAPHY', 'CONTACT'];\n  var links = linkList.map(function (link) {\n    if (linkList.indexOf(link) === index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"selected\",\n        children: link\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 14\n      }, _this);\n    } else {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"link\",\n        children: link\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 14\n      }, _this);\n    }\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      onClick: showMenu,\n      \"class\": \"menu\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuLine\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuLine\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 19\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: \"X\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 16\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"menuPage\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"greenBackgroundLines\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"pageList\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          \"class\": \"pages\",\n          children: links\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"menuPhoto\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"PyEr5fJCMtybnego5euqM6H+Bvc=\");\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJ2aXNpYmxlIiwic2V0VmlzaWJpbGUiLCJzaG93TWVudSIsImhpZGVNZW51IiwibXlMb2FkZXIiLCJzcmMiLCJ3aWR0aCIsInF1YWxpdHkiLCJsaW5rTGlzdCIsImxpbmtzIiwibWFwIiwibGluayIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFFakIsTUFBTUMsTUFBTSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWY7O0FBRmlCLGtCQUlTQyxzREFBUSxDQUFDLENBQUQsQ0FKakI7QUFBQSxNQUlWQyxLQUpVO0FBQUEsTUFJSEMsUUFKRzs7QUFBQSxtQkFLY0Ysc0RBQVEsQ0FBQyxLQUFELENBTHRCO0FBQUEsTUFLVkcsT0FMVTtBQUFBLE1BS0RDLFdBTEM7O0FBT2pCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJELGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJGLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDRCxHQUZEOztBQU1BLE1BQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZCO0FBQUEsUUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUFBLFFBQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxRQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDNUMsc0VBQTJERixHQUEzRCxnQkFBb0VDLEtBQXBFLGdCQUErRUMsT0FBTyxJQUFJLEVBQTFGO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixVQUFsQixFQUE4QixhQUE5QixFQUE2QyxTQUE3QyxDQUFqQjtBQUVBLE1BQU1DLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxHQUFULENBQWEsVUFBQUMsSUFBSSxFQUFJO0FBQ2pDLFFBQUlILFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQkQsSUFBakIsTUFBMkJiLEtBQS9CLEVBQXNDO0FBQ3BDLDBCQUFPO0FBQUksaUJBQU0sVUFBVjtBQUFBLGtCQUFzQmE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsMEJBQU87QUFBSSxpQkFBTSxNQUFWO0FBQUEsa0JBQWtCQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRDtBQUNGLEdBTmEsQ0FBZDtBQVdBLHNCQUVFO0FBQUEsZUFDRyxDQUFDWCxPQUFELGdCQUFXO0FBQUssYUFBTyxFQUFFRSxRQUFkO0FBQXdCLGVBQU0sTUFBOUI7QUFBQSw4QkFDVjtBQUFLLGlCQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVLGVBRVY7QUFBSyxpQkFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWCxnQkFHUTtBQUFHLGFBQU8sRUFBRUMsUUFBWjtBQUFzQixlQUFNLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSlgsRUFNR0gsT0FBTyxnQkFDUjtBQUFLLGVBQU0sVUFBWDtBQUFBLDhCQUNFO0FBQUssaUJBQU0sc0JBQVg7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0U7QUFBSyxpQkFBTSxVQUFYO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBTSxPQUFWO0FBQUEsb0JBQ0dTO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUssbUJBQU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLEdBeUJDLElBL0JYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGO0FBd0NELENBMUVEOztHQUFNZCxJOztLQUFBQSxJO0FBNEVTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWVudS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgTWVudSA9ICgpID0+IHtcblxuICBjb25zdCBpbWFnZXMgPSBbMSwgMiwgM107XG5cbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2liaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNob3dNZW51ID0gKCkgPT4ge1xuICAgIHNldFZpc2liaWxlKHRydWUpXG4gIH07XG5cbiAgY29uc3QgaGlkZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJpbGUoZmFsc2UpXG4gIH07XG5cblxuXG4gIGNvbnN0IG15TG9hZGVyID0gKHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9KSA9PiB7XG4gICAgcmV0dXJuIGBodHRwczovL2hlbnJ5LXdlYnNpdGUuczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxuICB9XG5cbiAgY29uc3QgbGlua0xpc3QgPSBbJ0hPTUUnLCAnQUJPVVQnLCAnUFJPSkVDVFMnLCAnUEhPVE9HUkFQSFknLCAnQ09OVEFDVCddO1xuXG4gIGNvbnN0IGxpbmtzID0gbGlua0xpc3QubWFwKGxpbmsgPT4ge1xuICAgIGlmIChsaW5rTGlzdC5pbmRleE9mKGxpbmspID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuIDxsaSBjbGFzcz1cInNlbGVjdGVkXCI+e2xpbmt9PC9saT5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxsaSBjbGFzcz1cImxpbmtcIj57bGlua308L2xpPlxuICAgIH1cbiAgfSlcblxuXG5cblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIHshdmlzaWJsZSA/IDxkaXYgb25DbGljaz17c2hvd01lbnV9IGNsYXNzPVwibWVudVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudUxpbmVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVMaW5lXCI+PC9kaXY+XG4gICAgICA8L2Rpdj4gOiA8cCBvbkNsaWNrPXtoaWRlTWVudX0gY2xhc3M9XCJtZW51XCI+WDwvcD59XG5cbiAgICAgIHt2aXNpYmxlID9cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51UGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JlZW5CYWNrZ3JvdW5kTGluZXNcIj5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VMaXN0XCI+XG4gICAgICAgICAgPHVsIGNsYXNzPVwicGFnZXNcIj5cbiAgICAgICAgICAgIHtsaW5rc31cblxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVQaG90b1wiPlxuICAgICAgICAgIHsvKiA8SW1hZ2VcbiAgICAgICAgICAgIGNsYXNzPVwiY2Fyb3VzZWxQaG90b1wiXG4gICAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgICAgc3JjPXtgJHtpbWFnZXNbaW5kZXhdfS5qcGdgfVxuICAgICAgICAgICAgYWx0PVwicGlsZVwiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+ICovfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgfVxuXG5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})