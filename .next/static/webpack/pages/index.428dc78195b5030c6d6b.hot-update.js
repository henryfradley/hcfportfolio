webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Menu = function Menu(props) {\n  _s();\n\n  var images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      closed = _useState3[0],\n      setClosed = _useState3[1];\n\n  var showMenu = function showMenu() {\n    setVisible(true);\n    setClosed(false);\n    document.body.style.overflow = 'hidden';\n    document.menuPage.style.overflowY = 'hidden';\n  };\n\n  var hideMenu = function hideMenu() {\n    setClosed(true);\n    setVisible(false);\n    document.body.style.overflow = 'visible';\n  };\n\n  var setClassName = function setClassName(name) {\n    if (linkList.indexOf(name) === index) {\n      return 'selected';\n    } else {\n      return 'link';\n    }\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://d13gv6jsteq2nf.cloudfront.net/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var linkList = [['HOME', '../', 400], ['ABOUT', '/about', 600], ['PROJECTS', '/projects/micaela-designs', 800], ['PHOTOGRAPHY', '/photography', 1000], ['CONTACT', '/contact', 1200]];\n  var links = linkList.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: link[1],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": setClassName(link),\n        style: {\n          animationDelay: \"\".concat(link[2], \"ms\")\n        },\n        onMouseEnter: function onMouseEnter() {\n          setIndex(linkList.indexOf(link));\n        },\n        children: link[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 33\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menu\",\n        children: [!props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"whiteMenuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"menuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 71\n        }, _this), !props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          onClick: showMenu,\n          src: \"/whiteMenu.png\",\n          alt: \"menu\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          onClick: showMenu,\n          src: \"/blackMenu.png\",\n          alt: \"menu\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: \"X\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 16\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"henryBoxMenu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"henry fradley.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 50\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuPage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"greenBackgroundLines\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"pageList\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            \"class\": \"pages\",\n            children: links\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          distance: \"5vh\",\n          delay: 1000,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"menuPhoto\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                loader: myLoader,\n                src: \"\".concat(images[index], \".jpg\"),\n                alt: \"photo\",\n                width: \"625\",\n                height: \"500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 11\n              }, _this)\n            }, \"\".concat(images[index], \".jpg\"), false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 11\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this) : null, closed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"closed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 17\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"u+58HHkMdWSUTIiQbmUrYgVm6qY=\");\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJwcm9wcyIsImltYWdlcyIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiY2xvc2VkIiwic2V0Q2xvc2VkIiwic2hvd01lbnUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwibWVudVBhZ2UiLCJvdmVyZmxvd1kiLCJoaWRlTWVudSIsInNldENsYXNzTmFtZSIsIm5hbWUiLCJsaW5rTGlzdCIsImluZGV4T2YiLCJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsImxpbmtzIiwibWFwIiwibGluayIsImFuaW1hdGlvbkRlbGF5IiwiYmxhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXRCLE1BQU1DLE1BQU0sR0FBRyxDQUFDLFlBQUQsRUFBZSxTQUFmLEVBQTBCLFVBQTFCLEVBQXNDLE1BQXRDLEVBQThDLFFBQTlDLENBQWY7O0FBRnNCLGtCQUdJQyxzREFBUSxDQUFDLENBQUQsQ0FIWjtBQUFBLE1BR2ZDLEtBSGU7QUFBQSxNQUdSQyxRQUhROztBQUFBLG1CQUlRRixzREFBUSxDQUFDLEtBQUQsQ0FKaEI7QUFBQSxNQUlmRyxPQUplO0FBQUEsTUFJTkMsVUFKTTs7QUFBQSxtQkFLTUosc0RBQVEsQ0FBQyxLQUFELENBTGQ7QUFBQSxNQUtmSyxNQUxlO0FBQUEsTUFLUEMsU0FMTzs7QUFRdEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkgsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRSxhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0FFLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9C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LFlBQUtwQixNQUFNLENBQUNFLEtBQUQsQ0FBWCxTQUZMO0FBR0UsbUJBQUcsRUFBQyxPQUhOO0FBSUUscUJBQUssRUFBQyxLQUpSO0FBS0Usc0JBQU0sRUFBQztBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSx5QkFBK0JGLE1BQU0sQ0FBQ0UsS0FBRCxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFEsR0FrQ0MsSUExRFgsRUE0REdJLE1BQU0sZ0JBQUc7QUFBSyxlQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILEdBQWdDLElBNUR6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtFRCxDQW5IRDs7R0FBTVIsSTs7S0FBQUEsSTtBQXFIU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cblxuY29uc3QgTWVudSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGltYWdlcyA9IFsnd2lsaGVsbWluYScsICdidWJibGVzJywgJ3Ryb2xsaW5nJywgJ3JvY2snLCAnY2xvdWRzJ107XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Nsb3NlZCwgc2V0Q2xvc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIGNvbnN0IHNob3dNZW51ID0gKCkgPT4ge1xuICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgc2V0Q2xvc2VkKGZhbHNlKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICBkb2N1bWVudC5tZW51UGFnZS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICB9O1xuXG4gIGNvbnN0IGhpZGVNZW51ID0gKCkgPT4ge1xuICAgIHNldENsb3NlZCh0cnVlKTtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXG4gIH07XG5cblxuXG4gIGNvbnN0IHNldENsYXNzTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAobGlua0xpc3QuaW5kZXhPZihuYW1lKSA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiAnc2VsZWN0ZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbGluaydcbiAgICB9XG4gIH1cblxuXG5cbiAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICByZXR1cm4gYGh0dHBzOi8vZDEzZ3Y2anN0ZXEybmYuY2xvdWRmcm9udC5uZXQvJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxuICB9XG5cbiAgY29uc3QgbGlua0xpc3QgPSBbWydIT01FJywgJy4uLycsIDQwMF0sIFsnQUJPVVQnLCAnL2Fib3V0JywgNjAwXSwgWydQUk9KRUNUUycsICcvcHJvamVjdHMvbWljYWVsYS1kZXNpZ25zJywgODAwXSwgWydQSE9UT0dSQVBIWScsICcvcGhvdG9ncmFwaHknLCAxMDAwXSwgWydDT05UQUNUJywgJy9jb250YWN0JywgMTIwMF1dO1xuXG5cbiAgY29uc3QgbGlua3MgPSBsaW5rTGlzdC5tYXAobGluayA9PiB7XG4gICAgcmV0dXJuIDxMaW5rIGhyZWY9e2xpbmtbMV19PjxsaSBjbGFzcz17c2V0Q2xhc3NOYW1lKGxpbmspfSBzdHlsZT17e2FuaW1hdGlvbkRlbGF5OiBgJHtsaW5rWzJdfW1zYH19IG9uTW91c2VFbnRlcj17KCkgPT4ge3NldEluZGV4KGxpbmtMaXN0LmluZGV4T2YobGluaykpfX0+e2xpbmtbMF19PC9saT48L0xpbms+XG59KTtcblxuXG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyF2aXNpYmxlID9cbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVudVwiPlxuICAgICAgICB7IXByb3BzLmJsYWNrID8gPHAgY2xhc3M9XCJ3aGl0ZU1lbnVIZWFkZXJcIj57cHJvcHMubmFtZX08L3A+IDogPHAgY2xhc3M9XCJtZW51SGVhZGVyXCI+e3Byb3BzLm5hbWV9PC9wPn1cblxuICAgICAgICB7IXByb3BzLmJsYWNrID9cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNZW51fVxuICAgICAgICAgICAgc3JjPVwiL3doaXRlTWVudS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwibWVudVwiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+IDpcbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNZW51fVxuICAgICAgICAgICAgc3JjPVwiL2JsYWNrTWVudS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwibWVudVwiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiA6IDxwIG9uQ2xpY2s9e2hpZGVNZW51fSBjbGFzcz1cIm1lbnVcIj5YPC9wPn1cblxuICAgICAge3Zpc2libGUgP1xuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48ZGl2IGNsYXNzPVwiaGVucnlCb3hNZW51XCI+PHA+aGVucnkgZnJhZGxleS48L3A+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudVBhZ2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JlZW5CYWNrZ3JvdW5kTGluZXNcIj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlTGlzdFwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2VzXCI+XG4gICAgICAgICAgICB7bGlua3N9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17MTAwMH0gYm90dG9tPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVQaG90b1wiIGtleT17YCR7aW1hZ2VzW2luZGV4XX0uanBnYH0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgICAgc3JjPXtgJHtpbWFnZXNbaW5kZXhdfS5qcGdgfVxuICAgICAgICAgICAgYWx0PVwicGhvdG9cIlxuICAgICAgICAgICAgd2lkdGg9XCI2MjVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L0ZhZGU+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj4gOiBudWxsfVxuXG4gICAgICB7Y2xvc2VkID8gPGRpdiBjbGFzcz1cImNsb3NlZFwiPjwvZGl2PiA6IG51bGx9XG5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})