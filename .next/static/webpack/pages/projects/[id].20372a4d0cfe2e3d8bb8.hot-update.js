webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Menu = function Menu(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  console.log('router', router.asPath);\n  var images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      closed = _useState3[0],\n      setClosed = _useState3[1];\n\n  var showMenu = function showMenu() {\n    setVisible(true);\n    setClosed(false);\n    document.body.style.overflow = 'hidden';\n  };\n\n  var hideMenu = function hideMenu() {\n    setClosed(true);\n    setVisible(false);\n    document.body.style.overflow = 'visible';\n  };\n\n  var setClassName = function setClassName(name) {\n    if (linkList.indexOf(name) === index) {\n      return 'selected';\n    } else {\n      return 'link';\n    }\n  };\n\n  var closeWindow = function closeWindow(src) {\n    // if (src === router.asPath) {\n    //   hideMenu();\n    // }\n    console.log('src', src);\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://d13gv6jsteq2nf.cloudfront.net/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var linkList = [['HOME', '../', 400], ['ABOUT', '/about', 600], ['PROJECTS', '/projects/micaela-designs', 800], ['PHOTOGRAPHY', '/photography', 1000], ['CONTACT', '/contact', 1200]];\n  var links = linkList.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      onClick: closeWindow(link[1]),\n      href: link[1],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": setClassName(link),\n        style: {\n          animationDelay: \"\".concat(link[2], \"ms\")\n        },\n        onMouseEnter: function onMouseEnter() {\n          setIndex(linkList.indexOf(link));\n        },\n        children: link[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 64\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menu\",\n        children: [!props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"whiteMenuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"menuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 71\n        }, _this), !props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"whiteMenuLines\",\n          onClick: showMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"blackMenuLines\",\n          onClick: showMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 12\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_cg__WEBPACK_IMPORTED_MODULE_5__[\"CgClose\"], {\n        color: \"#F8FCF0\",\n        size: \"30px\",\n        \"class\": \"x\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 51\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 16\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"henryBoxMenu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"henry fradley.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 50\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuPage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"greenBackgroundLines\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"pageList\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            \"class\": \"pages\",\n            children: links\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          distance: \"5vh\",\n          delay: 1000,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"menuPhoto\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                loader: myLoader,\n                src: \"\".concat(images[index], \".jpg\"),\n                alt: \"photo\",\n                width: \"625\",\n                height: \"500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 105,\n                columnNumber: 11\n              }, _this)\n            }, \"\".concat(images[index], \".jpg\"), false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 11\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this) : null, closed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"closed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 17\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"WxT3YwLoHvxn+k9T8Sp6OM+JIig=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJhc1BhdGgiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImNsb3NlZCIsInNldENsb3NlZCIsInNob3dNZW51IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsImhpZGVNZW51Iiwic2V0Q2xhc3NOYW1lIiwibmFtZSIsImxpbmtMaXN0IiwiaW5kZXhPZiIsImNsb3NlV2luZG93Iiwic3JjIiwibXlMb2FkZXIiLCJ3aWR0aCIsInF1YWxpdHkiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJhbmltYXRpb25EZWxheSIsImJsYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFdEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSCxNQUFNLENBQUNJLE1BQTdCO0FBRUEsTUFBTUMsTUFBTSxHQUFHLENBQUMsWUFBRCxFQUFlLFNBQWYsRUFBMEIsVUFBMUIsRUFBc0MsTUFBdEMsRUFBOEMsUUFBOUMsQ0FBZjs7QUFOc0Isa0JBT0lDLHNEQUFRLENBQUMsQ0FBRCxDQVBaO0FBQUEsTUFPZkMsS0FQZTtBQUFBLE1BT1JDLFFBUFE7O0FBQUEsbUJBUVFGLHNEQUFRLENBQUMsS0FBRCxDQVJoQjtBQUFBLE1BUWZHLE9BUmU7QUFBQSxNQVFOQyxVQVJNOztBQUFBLG1CQVNNSixzREFBUSxDQUFDLEtBQUQsQ0FUZDtBQUFBLE1BU2ZLLE1BVGU7QUFBQSxN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QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBBLGVBYUEscUVBQUMsd0RBQUQ7QUFBTSxrQkFBUSxFQUFDLEtBQWY7QUFBcUIsZUFBSyxFQUFFLElBQTVCO0FBQWtDLGdCQUFNLE1BQXhDO0FBQUEsaUNBQ0U7QUFBQSxtQ0FDQTtBQUFLLHVCQUFNLFdBQVg7QUFBQSxxQ0FDQSxxRUFBQyxpREFBRDtBQUNFLHNCQUFNLEVBQUVILFFBRFY7QUFFRSxtQkFBRyxZQUFLcEIsTUFBTSxDQUFDRSxLQUFELENBQVgsU0FGTDtBQUdFLG1CQUFHLEVBQUMsT0FITjtBQUlFLHFCQUFLLEVBQUMsS0FKUjtBQUtFLHNCQUFNLEVBQUM7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEseUJBQStCRixNQUFNLENBQUNFLEtBQUQsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLEdBa0NDLElBbERYLEVBb0RHSSxNQUFNLGdCQUFHO0FBQUssZUFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSCxHQUFnQyxJQXBEekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwREQsQ0FySEQ7O0dBQU1iLEk7VUFFV0cscUQ7OztLQUZYSCxJO0FBdUhTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWVudS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcbmltcG9ydCB7IENnQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuY29uc3QgTWVudSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnNvbGUubG9nKCdyb3V0ZXInLCByb3V0ZXIuYXNQYXRoKVxuXG4gIGNvbnN0IGltYWdlcyA9IFsnd2lsaGVsbWluYScsICdidWJibGVzJywgJ3Ryb2xsaW5nJywgJ3JvY2snLCAnY2xvdWRzJ107XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Nsb3NlZCwgc2V0Q2xvc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIGNvbnN0IHNob3dNZW51ID0gKCkgPT4ge1xuICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgc2V0Q2xvc2VkKGZhbHNlKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgfTtcblxuICBjb25zdCBoaWRlTWVudSA9ICgpID0+IHtcbiAgICBzZXRDbG9zZWQodHJ1ZSk7XG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xuICB9O1xuXG5cblxuICBjb25zdCBzZXRDbGFzc05hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKGxpbmtMaXN0LmluZGV4T2YobmFtZSkgPT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gJ3NlbGVjdGVkJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2xpbmsnXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsb3NlV2luZG93ID0gKHNyYykgPT4ge1xuICAgIC8vIGlmIChzcmMgPT09IHJvdXRlci5hc1BhdGgpIHtcbiAgICAvLyAgIGhpZGVNZW51KCk7XG4gICAgLy8gfVxuICAgIGNvbnNvbGUubG9nKCdzcmMnLCBzcmMpXG4gIH07XG5cblxuXG4gIGNvbnN0IG15TG9hZGVyID0gKHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9KSA9PiB7XG4gICAgcmV0dXJuIGBodHRwczovL2QxM2d2NmpzdGVxMm5mLmNsb3VkZnJvbnQubmV0LyR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbiAgfVxuXG4gIGNvbnN0IGxpbmtMaXN0ID0gW1snSE9NRScsICcuLi8nLCA0MDBdLCBbJ0FCT1VUJywgJy9hYm91dCcsIDYwMF0sIFsnUFJPSkVDVFMnLCAnL3Byb2plY3RzL21pY2FlbGEtZGVzaWducycsIDgwMF0sIFsnUEhPVE9HUkFQSFknLCAnL3Bob3RvZ3JhcGh5JywgMTAwMF0sIFsnQ09OVEFDVCcsICcvY29udGFjdCcsIDEyMDBdXTtcblxuXG4gIGNvbnN0IGxpbmtzID0gbGlua0xpc3QubWFwKGxpbmsgPT4ge1xuICAgIHJldHVybiA8TGluayBvbkNsaWNrPXtjbG9zZVdpbmRvdyhsaW5rWzFdKX0gaHJlZj17bGlua1sxXX0+PGxpIGNsYXNzPXtzZXRDbGFzc05hbWUobGluayl9IHN0eWxlPXt7YW5pbWF0aW9uRGVsYXk6IGAke2xpbmtbMl19bXNgfX0gb25Nb3VzZUVudGVyPXsoKSA9PiB7c2V0SW5kZXgobGlua0xpc3QuaW5kZXhPZihsaW5rKSl9fT57bGlua1swXX08L2xpPjwvTGluaz5cbn0pO1xuXG5cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7IXZpc2libGUgP1xuICAgICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51XCI+XG4gICAgICAgIHshcHJvcHMuYmxhY2sgPyA8cCBjbGFzcz1cIndoaXRlTWVudUhlYWRlclwiPntwcm9wcy5uYW1lfTwvcD4gOiA8cCBjbGFzcz1cIm1lbnVIZWFkZXJcIj57cHJvcHMubmFtZX08L3A+fVxuICAgICAgICAgIHshcHJvcHMuYmxhY2sgP1xuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aGl0ZU1lbnVMaW5lc1wiIG9uQ2xpY2s9e3Nob3dNZW51fT5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA6XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGFja01lbnVMaW5lc1wiIG9uQ2xpY2s9e3Nob3dNZW51fT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gOiA8cCBvbkNsaWNrPXtoaWRlTWVudX0gY2xhc3M9XCJtZW51XCI+PENnQ2xvc2UgY29sb3I9XCIjRjhGQ0YwXCIgc2l6ZT1cIjMwcHhcIiBjbGFzcz1cInhcIiAvPjwvcD59XG5cbiAgICAgIHt2aXNpYmxlID9cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGRpdiBjbGFzcz1cImhlbnJ5Qm94TWVudVwiPjxwPmhlbnJ5IGZyYWRsZXkuPC9wPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVQYWdlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuQmFja2dyb3VuZExpbmVzXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZUxpc3RcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdlc1wiPlxuICAgICAgICAgICAge2xpbmtzfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezEwMDB9IGJvdHRvbT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51UGhvdG9cIiBrZXk9e2Ake2ltYWdlc1tpbmRleF19LmpwZ2B9PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgbG9hZGVyPXtteUxvYWRlcn1cbiAgICAgICAgICAgIHNyYz17YCR7aW1hZ2VzW2luZGV4XX0uanBnYH1cbiAgICAgICAgICAgIGFsdD1cInBob3RvXCJcbiAgICAgICAgICAgIHdpZHRoPVwiNjI1XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9GYWRlPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+IDogbnVsbH1cblxuICAgICAge2Nsb3NlZCA/IDxkaXYgY2xhc3M9XCJjbG9zZWRcIj48L2Rpdj4gOiBudWxsfVxuXG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})