webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Menu = function Menu() {\n  _s();\n\n  var images = [1, 2, 3];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisibile = _useState2[1];\n\n  var showMenu = function showMenu() {\n    setVisibile(true);\n  };\n\n  var hideMenu = function hideMenu() {\n    setVisibile(false);\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var linkList = ['HOME', 'ABOUT', 'PROJECTS', 'PHOTOGRAPHY', 'CONTACT'];\n  var links = linkList.map(function (link) {\n    return;\n    {\n      linkList.indexOf(link) === index ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"selected\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          onMouseEnter: function onMouseEnter() {\n            return setIndex(1);\n          },\n          children: link\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }, _this)\n      }, linkList.indexOf(link), false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"link\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: link\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 55\n        }, _this)\n      }, images.indexOf(link), false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, _this);\n    }\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      onClick: showMenu,\n      \"class\": \"menu\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuLine\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuLine\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 19\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: \"X\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 16\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"menuPage\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"greenBackgroundLines\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"pageList\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          \"class\": \"pages\",\n          children: links\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"menuPhoto\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"PyEr5fJCMtybnego5euqM6H+Bvc=\");\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJ2aXNpYmxlIiwic2V0VmlzaWJpbGUiLCJzaG93TWVudSIsImhpZGVNZW51IiwibXlMb2FkZXIiLCJzcmMiLCJ3aWR0aCIsInF1YWxpdHkiLCJsaW5rTGlzdCIsImxpbmtzIiwibWFwIiwibGluayIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFFakIsTUFBTUMsTUFBTSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWY7O0FBRmlCLGtCQUlTQyxzREFBUSxDQUFDLENBQUQsQ0FKakI7QUFBQSxNQUlWQyxLQUpVO0FBQUEsTUFJSEMsUUFKRzs7QUFBQSxtQkFLY0Ysc0RBQVEsQ0FBQyxLQUFELENBTHRCO0FBQUEsTUFLVkcsT0FMVTtBQUFBLE1BS0RDLFdBTEM7O0FBT2pCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJELGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJGLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDRCxHQUZEOztBQU1BLE1BQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZCO0FBQUEsUUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUFBLFFBQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxRQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDNUMsc0VBQTJERixHQUEzRCxnQkFBb0VDLEtBQXBFLGdCQUErRUMsT0FBTyxJQUFJLEVBQTFGO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixVQUFsQixFQUE4QixhQUE5QixFQUE2QyxTQUE3QyxDQUFqQjtBQUdBLE1BQU1DLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxHQUFULENBQWEsVUFBQUMsSUFBSSxFQUFJO0FBQ2pDO0FBQ0E7QUFBQ0gsY0FBUSxDQUFDSSxPQUFULENBQWlCRCxJQUFqQixNQUEyQmIsS0FBM0IsZ0JBQ0M7QUFBSSxpQkFBTSxVQUFWO0FBQUEsK0JBQ0U7QUFBTSxzQkFBWSxFQUFFO0FBQUEsbUJBQU1DLFFBQVEsQ0FBQyxDQUFELENBQWQ7QUFBQSxXQUFwQjtBQUFBLG9CQUF3Q1k7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQTBCSCxRQUFRLENBQUNJLE9BQVQsQ0FBaUJELElBQWpCLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxnQkFHSztBQUFJLGlCQUFNLE1BQVY7QUFBQSwrQkFBNEM7QUFBQSxvQkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVDLFNBQXNCZixNQUFNLENBQUNnQixPQUFQLENBQWVELElBQWYsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhMO0FBSUE7QUFFRixHQVJhLENBQWQ7QUFXQSxzQkFDRTtBQUFBLGVBQ0csQ0FBQ1gsT0FBRCxnQkFBVztBQUFLLGFBQU8sRUFBRUUsUUFBZDtBQUF3QixlQUFNLE1BQTlCO0FBQUEsOEJBQ1Y7QUFBSyxpQkFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVSxlQUVWO0FBQUssaUJBQU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVgsZ0JBR1E7QUFBRyxhQUFPLEVBQUVDLFFBQVo7QUFBc0IsZUFBTSxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpYLEVBTUdILE9BQU8sZ0JBQ1I7QUFBSyxlQUFNLFVBQVg7QUFBQSw4QkFDRTtBQUFLLGlCQUFNLHNCQUFYO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQUssaUJBQU0sVUFBWDtBQUFBLGdDQUNFO0FBQUksbUJBQU0sT0FBVjtBQUFBLG9CQUNHUztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFLLG1CQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxHQXlCQyxJQS9CWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQTFFRDs7R0FBTWQsSTs7S0FBQUEsSTtBQTRFU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IE1lbnUgPSAoKSA9PiB7XG5cbiAgY29uc3QgaW1hZ2VzID0gWzEsIDIsIDNdO1xuXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzaG93TWVudSA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmlsZSh0cnVlKVxuICB9O1xuXG4gIGNvbnN0IGhpZGVNZW51ID0gKCkgPT4ge1xuICAgIHNldFZpc2liaWxlKGZhbHNlKVxuICB9O1xuXG5cblxuICBjb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xuICAgIHJldHVybiBgaHR0cHM6Ly9oZW5yeS13ZWJzaXRlLnMzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tLyR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbiAgfVxuXG4gIGNvbnN0IGxpbmtMaXN0ID0gWydIT01FJywgJ0FCT1VUJywgJ1BST0pFQ1RTJywgJ1BIT1RPR1JBUEhZJywgJ0NPTlRBQ1QnXVxuXG5cbiAgY29uc3QgbGlua3MgPSBsaW5rTGlzdC5tYXAobGluayA9PiB7XG4gICAgcmV0dXJuXG4gICAge2xpbmtMaXN0LmluZGV4T2YobGluaykgPT09IGluZGV4ID9cbiAgICAgIDxsaSBjbGFzcz1cInNlbGVjdGVkXCIga2V5PXtsaW5rTGlzdC5pbmRleE9mKGxpbmspfT5cbiAgICAgICAgPHNwYW4gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJbmRleCgxKX0+e2xpbmt9PC9zcGFuPjwvbGk+XG4gICAgICAgIDogPGxpIGNsYXNzPVwibGlua1wiIGtleT17aW1hZ2VzLmluZGV4T2YobGluayl9PjxzcGFuPntsaW5rfTwvc3Bhbj48L2xpPlxuICAgIH1cblxuICB9KTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHshdmlzaWJsZSA/IDxkaXYgb25DbGljaz17c2hvd01lbnV9IGNsYXNzPVwibWVudVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudUxpbmVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVMaW5lXCI+PC9kaXY+XG4gICAgICA8L2Rpdj4gOiA8cCBvbkNsaWNrPXtoaWRlTWVudX0gY2xhc3M9XCJtZW51XCI+WDwvcD59XG5cbiAgICAgIHt2aXNpYmxlID9cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51UGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JlZW5CYWNrZ3JvdW5kTGluZXNcIj5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VMaXN0XCI+XG4gICAgICAgICAgPHVsIGNsYXNzPVwicGFnZXNcIj5cbiAgICAgICAgICAgIHtsaW5rc31cblxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVQaG90b1wiPlxuICAgICAgICAgIHsvKiA8SW1hZ2VcbiAgICAgICAgICAgIGNsYXNzPVwiY2Fyb3VzZWxQaG90b1wiXG4gICAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgICAgc3JjPXtgJHtpbWFnZXNbaW5kZXhdfS5qcGdgfVxuICAgICAgICAgICAgYWx0PVwicGlsZVwiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+ICovfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgfVxuXG5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})