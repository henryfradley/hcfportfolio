webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Menu = function Menu() {\n  _s();\n\n  var images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var showMenu = function showMenu() {\n    setVisible(true);\n  };\n\n  var hideMenu = function hideMenu() {\n    setVisible(false);\n  };\n\n  var setClassName = function setClassName(name) {\n    if (linkList.indexOf(name) === index) {\n      return 'selected';\n    } else {\n      return 'link';\n    }\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var linkList = ['HOME', 'ABOUT', 'PROJECTS', 'PHOTOGRAPHY', 'CONTACT'];\n  var links = linkList.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      \"class\": setClassName(link),\n      onMouseEnter: function onMouseEnter() {\n        setIndex(linkList.indexOf(link));\n      },\n      children: link\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 14\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      onClick: showMenu,\n      \"class\": \"menu\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuLine\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuLine\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 19\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: \"X\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 16\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"menuPage\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"greenBackgroundLines\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"pageList\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          \"class\": \"pages\",\n          children: links\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"menuPhoto\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"rurrCmnc55V+dQtRQvf3lEGp2oM=\");\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNob3dNZW51IiwiaGlkZU1lbnUiLCJzZXRDbGFzc05hbWUiLCJuYW1lIiwibGlua0xpc3QiLCJpbmRleE9mIiwibXlMb2FkZXIiLCJzcmMiLCJ3aWR0aCIsInF1YWxpdHkiLCJsaW5rcyIsIm1hcCIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFFakIsTUFBTUMsTUFBTSxHQUFHLENBQUMsWUFBRCxFQUFlLFNBQWYsRUFBMEIsVUFBMUIsRUFBc0MsTUFBdEMsRUFBOEMsUUFBOUMsQ0FBZjs7QUFGaUIsa0JBSVNDLHNEQUFRLENBQUMsQ0FBRCxDQUpqQjtBQUFBLE1BSVZDLEtBSlU7QUFBQSxNQUlIQyxRQUpHOztBQUFBLG1CQUthRixzREFBUSxDQUFDLEtBQUQsQ0FMckI7QUFBQSxNQUtWRyxPQUxVO0FBQUEsTUFLREMsVUFMQzs7QUFPakIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkYsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBU0MsSUFBVCxFQUFlO0FBQ2xDLFFBQUlDLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkYsSUFBakIsTUFBMkJQLEtBQS9CLEVBQXNDO0FBQ3BDLGFBQU8sVUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU8sTUFBUDtBQUNEO0FBQ0YsR0FORDs7QUFVQSxNQUFNVSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE2QjtBQUFBLFFBQTFCQyxHQUEwQixRQUExQkEsR0FBMEI7QUFBQSxRQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsUUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzVDLHNFQUEyREYsR0FBM0QsZ0JBQW9FQyxLQUFwRSxnQkFBK0VDLE9BQU8sSUFBSSxFQUExRjtBQUNELEdBRkQ7O0FBSUEsTUFBTUwsUUFBUSxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsRUFBOEIsYUFBOUIsRUFBNkMsU0FBN0MsQ0FBakI7QUFFQSxNQUFNTSxLQUFLLEdBQUdOLFFBQVEsQ0FBQ08sR0FBVCxDQUFhLFVBQUFDLElBQUksRUFBSTtBQUMvQix3QkFBTztBQUFJLGVBQU9WLFlBQVksQ0FBQ1UsSUFBRCxDQUF2QjtBQUErQixrQkFBWSxFQUFFLHdCQUFNO0FBQUNmLGdCQUFRLENBQUNPLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQk8sSUFBakIsQ0FBRCxDQUFSO0FBQWlDLE9BQXJGO0FBQUEsZ0JBQXdGQTtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDSCxHQUZhLENBQWQ7QUFPQSxzQkFDRTtBQUFBLGVBQ0csQ0FBQ2QsT0FBRCxnQkFBVztBQUFLLGFBQU8sRUFBRUUsUUFBZDtBQUF3QixlQUFNLE1BQTlCO0FBQUEsOEJBQ1Y7QUFBSyxpQkFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVSxlQUVWO0FBQUssaUJBQU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVgsZ0JBR1E7QUFBRyxhQUFPLEVBQUVDLFFBQVo7QUFBc0IsZUFBTSxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpYLEVBTUdILE9BQU8sZ0JBQ1I7QUFBSyxlQUFNLFVBQVg7QUFBQSw4QkFDRTtBQUFLLGlCQUFNLHNCQUFYO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQUssaUJBQU0sVUFBWDtBQUFBLGdDQUNFO0FBQUksbUJBQU0sT0FBVjtBQUFBLG9CQUNHWTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFLLG1CQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxHQXdCQyxJQTlCWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNDRCxDQTVFRDs7R0FBTWpCLEk7O0tBQUFBLEk7QUE4RVNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NZW51LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBNZW51ID0gKCkgPT4ge1xuXG4gIGNvbnN0IGltYWdlcyA9IFsnd2lsaGVsbWluYScsICdidWJibGVzJywgJ3Ryb2xsaW5nJywgJ3JvY2snLCAnY2xvdWRzJ107XG5cbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2hvd01lbnUgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKVxuICB9O1xuXG4gIGNvbnN0IGhpZGVNZW51ID0gKCkgPT4ge1xuICAgIHNldFZpc2libGUoZmFsc2UpXG4gIH07XG5cbiAgY29uc3Qgc2V0Q2xhc3NOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGlmIChsaW5rTGlzdC5pbmRleE9mKG5hbWUpID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuICdzZWxlY3RlZCdcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdsaW5rJ1xuICAgIH1cbiAgfVxuXG5cblxuICBjb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xuICAgIHJldHVybiBgaHR0cHM6Ly9oZW5yeS13ZWJzaXRlLnMzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tLyR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbiAgfVxuXG4gIGNvbnN0IGxpbmtMaXN0ID0gWydIT01FJywgJ0FCT1VUJywgJ1BST0pFQ1RTJywgJ1BIT1RPR1JBUEhZJywgJ0NPTlRBQ1QnXTtcblxuICBjb25zdCBsaW5rcyA9IGxpbmtMaXN0Lm1hcChsaW5rID0+IHtcbiAgICAgIHJldHVybiA8bGkgY2xhc3M9e3NldENsYXNzTmFtZShsaW5rKX0gb25Nb3VzZUVudGVyPXsoKSA9PiB7c2V0SW5kZXgobGlua0xpc3QuaW5kZXhPZihsaW5rKSl9fT57bGlua308L2xpPlxuICB9KTtcblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7IXZpc2libGUgPyA8ZGl2IG9uQ2xpY2s9e3Nob3dNZW51fSBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVMaW5lXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51TGluZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+IDogPHAgb25DbGljaz17aGlkZU1lbnV9IGNsYXNzPVwibWVudVwiPlg8L3A+fVxuXG4gICAgICB7dmlzaWJsZSA/XG4gICAgICA8ZGl2IGNsYXNzPVwibWVudVBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuQmFja2dyb3VuZExpbmVzXCI+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlTGlzdFwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2VzXCI+XG4gICAgICAgICAgICB7bGlua3N9XG5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51UGhvdG9cIj5cbiAgICAgICAgICB7LyogPEltYWdlXG4gICAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgICAgc3JjPXtgJHtpbWFnZXNbaW5kZXhdfS5qcGdgfVxuICAgICAgICAgICAgYWx0PVwicGlsZVwiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+ICovfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgfVxuXG5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})