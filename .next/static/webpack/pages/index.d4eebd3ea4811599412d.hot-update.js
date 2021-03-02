webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Menu = function Menu(props) {\n  _s();\n\n  var images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      closed = _useState3[0],\n      setClosed = _useState3[1];\n\n  var showMenu = function showMenu() {\n    setVisible(true); // document.body.style.overflow = 'hidden'\n  };\n\n  var hideMenu = function hideMenu() {\n    setClosed(true);\n    setVisible(false); // document.body.style.overflow = 'visible'\n  };\n\n  var setClassName = function setClassName(name) {\n    if (linkList.indexOf(name) === index) {\n      return 'selected';\n    } else {\n      return 'link';\n    }\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var linkList = [['HOME', '../'], ['ABOUT', '/about'], ['PROJECTS', '/projects/micaela-designs'], ['PHOTOGRAPHY', '/photography'], ['CONTACT', '/contact']];\n  var links = linkList.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: link[1],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": setClassName(link),\n        onMouseEnter: function onMouseEnter() {\n          setIndex(linkList.indexOf(link));\n        },\n        children: link[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 35\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 14\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menu\",\n        children: [!props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"whiteMenuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"menuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 71\n        }, _this), !props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          onClick: showMenu,\n          src: \"/whiteMenu.png\",\n          alt: \"menu\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          onClick: showMenu,\n          src: \"/blackMenu.png\",\n          alt: \"menu\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: \"X\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 22\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"henryBoxMenu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"henry fradley.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 50\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuPage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"greenBackgroundLines\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"pageList\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            \"class\": \"pages\",\n            children: links\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"menuPhoto\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            loader: myLoader,\n            src: \"\".concat(images[index], \".jpg\"),\n            alt: \"photo\",\n            layout: \"fill\",\n            objectFit: \"contain\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 11\n          }, _this)\n        }, images[index], false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this) : null, closed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"closed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"u+58HHkMdWSUTIiQbmUrYgVm6qY=\");\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJwcm9wcyIsImltYWdlcyIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiY2xvc2VkIiwic2V0Q2xvc2VkIiwic2hvd01lbnUiLCJoaWRlTWVudSIsInNldENsYXNzTmFtZSIsIm5hbWUiLCJsaW5rTGlzdCIsImluZGV4T2YiLCJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsImxpbmtzIiwibWFwIiwibGluayIsImJsYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXRCLE1BQU1DLE1BQU0sR0FBRyxDQUFDLFlBQUQsRUFBZSxTQUFmLEVBQTBCLFVBQTFCLEVBQXNDLE1BQXRDLEVBQThDLFFBQTlDLENBQWY7O0FBRnNCLGtCQUlJQyxzREFBUSxDQUFDLENBQUQsQ0FKWjtBQUFBLE1BSWZDLEtBSmU7QUFBQSxNQUlSQyxRQUpROztBQUFBLG1CQUtRRixzREFBUSxDQUFDLEtBQUQsQ0FMaEI7QUFBQSxNQUtmRyxPQUxlO0FBQUEsTUFLTkMsVUFMTTs7QUFBQSxtQkFNTUosc0RBQVEsQ0FBQyxLQUFELENBTmQ7QUFBQSxNQU1mSyxNQU5lO0FBQUEsTUFNUEMsU0FOTzs7QUFVdEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkgsY0FBVSxDQUFDLElBQUQsQ0FBVixDQURxQixDQUVyQjtBQUNELEdBSEQ7O0FBS0EsTUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkYsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBRixjQUFVLENBQUMsS0FBRCxDQUFWLENBRnFCLENBR3JCO0FBQ0QsR0FKRDs7QUFRQSxNQUFNSyxZ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QUFBQSxlQUZGLGVBR0U7QUFBSyxpQkFBTSxVQUFYO0FBQUEsZ0NBQ0E7QUFBSyxtQkFBTSxzQkFBWDtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBT0E7QUFBSyxtQkFBTSxVQUFYO0FBQUEsaUNBQ0U7QUFBSSxxQkFBTSxPQUFWO0FBQUEsc0JBQ0djO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEEsZUFhQTtBQUFLLG1CQUFNLFdBQVg7QUFBQSxpQ0FDRSxxRUFBQyxpREFBRDtBQUNFLGtCQUFNLEVBQUVKLFFBRFY7QUFFRSxlQUFHLFlBQUtkLE1BQU0sQ0FBQ0UsS0FBRCxDQUFYLFNBRkw7QUFHRSxlQUFHLEVBQUMsT0FITjtBQUlFLGtCQUFNLEVBQUMsTUFKVDtBQUtFLHFCQUFTLEVBQUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBNEJGLE1BQU0sQ0FBQ0UsS0FBRCxDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLEdBNkJOLElBckRKLEVBeURFSSxNQUFNLGdCQUNOO0FBQUssZUFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETSxHQUVKLElBM0RKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhGO0FBc0VELENBckhEOztHQUFNUixJOztLQUFBQSxJO0FBdUhTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWVudS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTWVudSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGltYWdlcyA9IFsnd2lsaGVsbWluYScsICdidWJibGVzJywgJ3Ryb2xsaW5nJywgJ3JvY2snLCAnY2xvdWRzJ107XG5cbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2xvc2VkLCBzZXRDbG9zZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cblxuICBjb25zdCBzaG93TWVudSA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICB9O1xuXG4gIGNvbnN0IGhpZGVNZW51ID0gKCkgPT4ge1xuICAgIHNldENsb3NlZCh0cnVlKTtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXG4gIH07XG5cblxuXG4gIGNvbnN0IHNldENsYXNzTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAobGlua0xpc3QuaW5kZXhPZihuYW1lKSA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiAnc2VsZWN0ZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbGluaydcbiAgICB9XG4gIH1cblxuXG5cbiAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICByZXR1cm4gYGh0dHBzOi8vaGVucnktd2Vic2l0ZS5zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS8ke3NyY30/dz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG4gIH1cblxuICBjb25zdCBsaW5rTGlzdCA9IFtbJ0hPTUUnLCAnLi4vJ10sIFsnQUJPVVQnLCAnL2Fib3V0J10sIFsnUFJPSkVDVFMnLCAnL3Byb2plY3RzL21pY2FlbGEtZGVzaWducyddLCBbJ1BIT1RPR1JBUEhZJywgJy9waG90b2dyYXBoeSddLCBbJ0NPTlRBQ1QnLCAnL2NvbnRhY3QnXV07XG5cbiAgY29uc3QgbGlua3MgPSBsaW5rTGlzdC5tYXAobGluayA9PiB7XG4gICAgICByZXR1cm4gPExpbmsgaHJlZj17bGlua1sxXX0+PGxpIGNsYXNzPXtzZXRDbGFzc05hbWUobGluayl9IG9uTW91c2VFbnRlcj17KCkgPT4ge3NldEluZGV4KGxpbmtMaXN0LmluZGV4T2YobGluaykpfX0+e2xpbmtbMF19PC9saT48L0xpbms+XG4gIH0pO1xuXG5cblxuXG5cbiAgcmV0dXJuIChcblxuXG4gICAgPGRpdj5cblxuICAgICAgeyF2aXNpYmxlID9cbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVudVwiPlxuICAgICAgICB7IXByb3BzLmJsYWNrID8gPHAgY2xhc3M9XCJ3aGl0ZU1lbnVIZWFkZXJcIj57cHJvcHMubmFtZX08L3A+IDogPHAgY2xhc3M9XCJtZW51SGVhZGVyXCI+e3Byb3BzLm5hbWV9PC9wPn1cblxuICAgICAgICB7IXByb3BzLmJsYWNrID8gPEltYWdlXG4gICAgICAgICAgICBvbkNsaWNrPXtzaG93TWVudX1cbiAgICAgICAgICAgIHNyYz1cIi93aGl0ZU1lbnUucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIm1lbnVcIlxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAvPiA6XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBvbkNsaWNrPXtzaG93TWVudX1cbiAgICAgICAgICAgIHNyYz1cIi9ibGFja01lbnUucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIm1lbnVcIlxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgIDwvZGl2PjwvZGl2PiA6IDxwIG9uQ2xpY2s9e2hpZGVNZW51fSBjbGFzcz1cIm1lbnVcIj5YPC9wPn1cblxuICAgICAge3Zpc2libGUgP1xuICAgICAgPGRpdj5cblxuICAgICAgICA8TGluayBocmVmPVwiL1wiPjxkaXYgY2xhc3M9XCJoZW5yeUJveE1lbnVcIj48cD5oZW5yeSBmcmFkbGV5LjwvcD48L2Rpdj48L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51UGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JlZW5CYWNrZ3JvdW5kTGluZXNcIj5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VMaXN0XCI+XG4gICAgICAgICAgPHVsIGNsYXNzPVwicGFnZXNcIj5cbiAgICAgICAgICAgIHtsaW5rc31cblxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudVBob3RvXCIga2V5PXtpbWFnZXNbaW5kZXhdfT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XG4gICAgICAgICAgICBzcmM9e2Ake2ltYWdlc1tpbmRleF19LmpwZ2B9XG4gICAgICAgICAgICBhbHQ9XCJwaG90b1wiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgICA6IG51bGxcbiAgICAgIH1cblxuICAgICAge1xuICAgICAgY2xvc2VkID9cbiAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZWRcIj48L2Rpdj5cbiAgICAgIDogbnVsbFxuICAgICAgfVxuXG5cblxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})