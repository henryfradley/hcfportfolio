webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Menu = function Menu(props) {\n  _s();\n\n  var images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      closed = _useState3[0],\n      setClosed = _useState3[1];\n\n  var showMenu = function showMenu() {\n    setVisible(true);\n    setClosed(false);\n    document.body.style.overflow = 'hidden';\n  };\n\n  var hideMenu = function hideMenu() {\n    setClosed(true);\n    setVisible(false);\n    document.body.style.overflow = 'visible';\n  };\n\n  var setClassName = function setClassName(name) {\n    if (linkList.indexOf(name) === index) {\n      return 'selected';\n    } else {\n      return 'link';\n    }\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://d13gv6jsteq2nf.cloudfront.net/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var linkList = [['HOME', '../', 400], ['ABOUT', '/about', 600], ['PROJECTS', '/projects/micaela-designs', 800], ['PHOTOGRAPHY', '/photography', 1000], ['CONTACT', '/contact', 1200]];\n  var links = linkList.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: link[1],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": setClassName(link),\n        style: {\n          animationDelay: \"\".concat(link[2], \"ms\")\n        },\n        onMouseEnter: function onMouseEnter() {\n          setIndex(linkList.indexOf(link));\n        },\n        children: link[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 33\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menu\",\n        children: [!props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"whiteMenuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"menuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 71\n        }, _this), !props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"menuLines\",\n          onClick: showMenu,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"whiteMenu\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"whiteMenu\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"menulines\",\n          onClick: showMenu,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"blackMenu\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"blackMenu\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 12\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: \"X\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 16\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"henryBoxMenu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"henry fradley.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 50\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuPage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"greenBackgroundLines\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"pageList\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            \"class\": \"pages\",\n            children: links\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          distance: \"5vh\",\n          delay: 1000,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"menuPhoto\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                loader: myLoader,\n                src: \"\".concat(images[index], \".jpg\"),\n                alt: \"photo\",\n                width: \"625\",\n                height: \"500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 110,\n                columnNumber: 11\n              }, _this)\n            }, \"\".concat(images[index], \".jpg\"), false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 11\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, _this) : null, closed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"closed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 17\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"u+58HHkMdWSUTIiQbmUrYgVm6qY=\");\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJwcm9wcyIsImltYWdlcyIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiY2xvc2VkIiwic2V0Q2xvc2VkIiwic2hvd01lbnUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiaGlkZU1lbnUiLCJzZXRDbGFzc05hbWUiLCJuYW1lIiwibGlua0xpc3QiLCJpbmRleE9mIiwibXlMb2FkZXIiLCJzcmMiLCJ3aWR0aCIsInF1YWxpdHkiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJhbmltYXRpb25EZWxheSIsImJsYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUV0QixNQUFNQyxNQUFNLEdBQUcsQ0FBQyxZQUFELEVBQWUsU0FBZixFQUEwQixVQUExQixFQUFzQyxNQUF0QyxFQUE4QyxRQUE5QyxDQUFmOztBQUZzQixrQkFHSUMsc0RBQVEsQ0FBQyxDQUFELENBSFo7QUFBQSxNQUdmQyxLQUhlO0FBQUEsTUFHUkMsUUFIUTs7QUFBQSxtQkFJUUYsc0RBQVEsQ0FBQyxLQUFELENBSmhCO0FBQUEsTUFJZkcsT0FKZTtBQUFBLE1BSU5DLFVBSk07O0FBQUEsbUJBS01KLHNEQUFRLENBQUMsS0FBRCxDQUxkO0FBQUEsTUFLZkssTUFMZTtBQUFBLE1BS1BDLFNBTE87O0FBUXRCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJILGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUUsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBRSxZQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsUUFBL0I7QUFD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QUFYLFNBRkw7QUFHRSxtQkFBRyxFQUFDLE9BSE47QUFJRSxxQkFBSyxFQUFDLEtBSlI7QUFLRSxzQkFBTSxFQUFDO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLHlCQUErQkYsTUFBTSxDQUFDRSxLQUFELENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxHQWtDQyxJQXJFWCxFQXVFR0ksTUFBTSxnQkFBRztBQUFLLGVBQU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsR0FBZ0MsSUF2RXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkVELENBN0hEOztHQUFNUixJOztLQUFBQSxJO0FBK0hTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWVudS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgaW1hZ2VzID0gWyd3aWxoZWxtaW5hJywgJ2J1YmJsZXMnLCAndHJvbGxpbmcnLCAncm9jaycsICdjbG91ZHMnXTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2xvc2VkLCBzZXRDbG9zZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgY29uc3Qgc2hvd01lbnUgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICBzZXRDbG9zZWQoZmFsc2UpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICB9O1xuXG4gIGNvbnN0IGhpZGVNZW51ID0gKCkgPT4ge1xuICAgIHNldENsb3NlZCh0cnVlKTtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXG4gIH07XG5cblxuXG4gIGNvbnN0IHNldENsYXNzTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAobGlua0xpc3QuaW5kZXhPZihuYW1lKSA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiAnc2VsZWN0ZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbGluaydcbiAgICB9XG4gIH1cblxuXG5cbiAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICByZXR1cm4gYGh0dHBzOi8vZDEzZ3Y2anN0ZXEybmYuY2xvdWRmcm9udC5uZXQvJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxuICB9XG5cbiAgY29uc3QgbGlua0xpc3QgPSBbWydIT01FJywgJy4uLycsIDQwMF0sIFsnQUJPVVQnLCAnL2Fib3V0JywgNjAwXSwgWydQUk9KRUNUUycsICcvcHJvamVjdHMvbWljYWVsYS1kZXNpZ25zJywgODAwXSwgWydQSE9UT0dSQVBIWScsICcvcGhvdG9ncmFwaHknLCAxMDAwXSwgWydDT05UQUNUJywgJy9jb250YWN0JywgMTIwMF1dO1xuXG5cbiAgY29uc3QgbGlua3MgPSBsaW5rTGlzdC5tYXAobGluayA9PiB7XG4gICAgcmV0dXJuIDxMaW5rIGhyZWY9e2xpbmtbMV19PjxsaSBjbGFzcz17c2V0Q2xhc3NOYW1lKGxpbmspfSBzdHlsZT17e2FuaW1hdGlvbkRlbGF5OiBgJHtsaW5rWzJdfW1zYH19IG9uTW91c2VFbnRlcj17KCkgPT4ge3NldEluZGV4KGxpbmtMaXN0LmluZGV4T2YobGluaykpfX0+e2xpbmtbMF19PC9saT48L0xpbms+XG59KTtcblxuXG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyF2aXNpYmxlID9cbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVudVwiPlxuICAgICAgICB7IXByb3BzLmJsYWNrID8gPHAgY2xhc3M9XCJ3aGl0ZU1lbnVIZWFkZXJcIj57cHJvcHMubmFtZX08L3A+IDogPHAgY2xhc3M9XCJtZW51SGVhZGVyXCI+e3Byb3BzLm5hbWV9PC9wPn1cblxuICAgICAgICB7LyogeyFwcm9wcy5ibGFjayA/XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBvbkNsaWNrPXtzaG93TWVudX1cbiAgICAgICAgICAgIHNyYz1cIi93aGl0ZU1lbnUucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIm1lbnVcIlxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAvPiA6XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBvbkNsaWNrPXtzaG93TWVudX1cbiAgICAgICAgICAgIHNyYz1cIi9ibGFja01lbnUucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIm1lbnVcIlxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAvPn0gKi99XG4gICAgICAgICAgeyFwcm9wcy5ibGFjayA/XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVMaW5lc1wiIG9uQ2xpY2s9e3Nob3dNZW51fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aGl0ZU1lbnVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aGl0ZU1lbnVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgOlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudWxpbmVzXCIgb25DbGljaz17c2hvd01lbnV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxhY2tNZW51XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGFja01lbnVcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gOiA8cCBvbkNsaWNrPXtoaWRlTWVudX0gY2xhc3M9XCJtZW51XCI+WDwvcD59XG5cbiAgICAgIHt2aXNpYmxlID9cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGRpdiBjbGFzcz1cImhlbnJ5Qm94TWVudVwiPjxwPmhlbnJ5IGZyYWRsZXkuPC9wPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVQYWdlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuQmFja2dyb3VuZExpbmVzXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZUxpc3RcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdlc1wiPlxuICAgICAgICAgICAge2xpbmtzfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezEwMDB9IGJvdHRvbT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51UGhvdG9cIiBrZXk9e2Ake2ltYWdlc1tpbmRleF19LmpwZ2B9PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgbG9hZGVyPXtteUxvYWRlcn1cbiAgICAgICAgICAgIHNyYz17YCR7aW1hZ2VzW2luZGV4XX0uanBnYH1cbiAgICAgICAgICAgIGFsdD1cInBob3RvXCJcbiAgICAgICAgICAgIHdpZHRoPVwiNjI1XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9GYWRlPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+IDogbnVsbH1cblxuICAgICAge2Nsb3NlZCA/IDxkaXYgY2xhc3M9XCJjbG9zZWRcIj48L2Rpdj4gOiBudWxsfVxuXG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})