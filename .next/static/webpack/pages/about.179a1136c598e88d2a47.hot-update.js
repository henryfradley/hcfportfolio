webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Menu = function Menu(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var path = router.asPath;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      closed = _useState3[0],\n      setClosed = _useState3[1];\n\n  var showMenu = function showMenu() {\n    setVisible(true);\n    setClosed(false);\n    document.body.style.overflow = 'hidden';\n  };\n\n  var hideMenu = function hideMenu() {\n    setClosed(true);\n    setVisible(false);\n    document.body.style.overflow = 'visible';\n  };\n\n  var checkLink = function checkLink(src) {\n    if (src === path) {\n      return hideMenu();\n    }\n  };\n\n  var setClassName = function setClassName(name) {\n    if (linkList.indexOf(name) === index) {\n      return 'selected';\n    } else {\n      return 'link';\n    }\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://d13gv6jsteq2nf.cloudfront.net/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];\n  var linkList = [['HOME', '../', 400], ['ABOUT', '/about', 600], ['PROJECTS', '/projects/micaela-designs', 800], ['PHOTOGRAPHY', '/photography', 1000], ['CONTACT', '/contact', 1200]];\n  var links = linkList.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      onMouseDown: function onMouseDown() {\n        checkLink(link[1]);\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: link[1],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          \"class\": setClassName(link),\n          style: {\n            animationDelay: \"\".concat(link[2], \"ms\")\n          },\n          onMouseEnter: function onMouseEnter() {\n            setIndex(linkList.indexOf(link));\n          },\n          children: link[0]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 29\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 8\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menu\",\n        children: [!props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"whiteMenuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 27\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"menuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 73\n        }, _this), !props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"whiteMenuLines\",\n          onClick: showMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 27\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"blackMenuLines\",\n          onClick: showMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__[\"CgClose\"], {\n        color: \"#F8FCF0\",\n        size: \"30px\",\n        \"class\": \"x\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 42\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"henryBoxMenu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"henry fradley.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 50\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuPage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"greenBackgroundLines\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"pageList\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            \"class\": \"pages\",\n            children: links\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          distance: \"5vh\",\n          delay: 1000,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"menuPhoto\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                loader: myLoader,\n                src: \"\".concat(images[index], \".jpg\"),\n                alt: \"photo\",\n                width: \"625\",\n                height: \"500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 15\n              }, _this)\n            }, \"\".concat(images[index], \".jpg\"), false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this) : null, closed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"closed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"WxT3YwLoHvxn+k9T8Sp6OM+JIig=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGgiLCJhc1BhdGgiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImNsb3NlZCIsInNldENsb3NlZCIsInNob3dNZW51IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsImhpZGVNZW51IiwiY2hlY2tMaW5rIiwic3JjIiwic2V0Q2xhc3NOYW1lIiwibmFtZSIsImxpbmtMaXN0IiwiaW5kZXhPZiIsIm15TG9hZGVyIiwid2lkdGgiLCJxdWFsaXR5IiwiaW1hZ2VzIiwibGlua3MiLCJtYXAiLCJsaW5rIiwiYW5pbWF0aW9uRGVsYXkiLCJibGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXRCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdGLE1BQU0sQ0FBQ0csTUFBcEI7O0FBSHNCLGtCQUtJQyxzREFBUSxDQUFDLENBQUQsQ0FMWjtBQUFBLE1BS2ZDLEtBTGU7QUFBQSxNQUtSQyxRQUxROztBQUFBLG1CQU1RRixzREFBUSxDQUFDLEtBQUQsQ0FOaEI7QUFBQSxNQU1mRyxPQU5lO0FBQUEsTUFNTkMsVUFOTTs7QUFBQSxtQkFPTUosc0RBQVEsQ0FBQyxLQUFELENBUGQ7QUFBQSxNQU9mSyxNQVBlO0FBQUEsTUFPUEMsU0FQTzs7QUFVdEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkgsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRSxhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0FFLFlB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b0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQQSxlQWFBLHFFQUFDLHdEQUFEO0FBQU0sa0JBQVEsRUFBQyxLQUFmO0FBQXFCLGVBQUssRUFBRSxJQUE1QjtBQUFrQyxnQkFBTSxNQUF4QztBQUFBLGlDQUNFO0FBQUEsbUNBQ0U7QUFBSyx1QkFBTSxXQUFYO0FBQUEscUNBQ0UscUVBQUMsaURBQUQ7QUFDRSxzQkFBTSxFQUFFSixRQURWO0FBRUUsbUJBQUcsWUFBS0csTUFBTSxDQUFDckIsS0FBRCxDQUFYLFNBRkw7QUFHRSxtQkFBRyxFQUFDLE9BSE47QUFJRSxxQkFBSyxFQUFDLEtBSlI7QUFLRSxzQkFBTSxFQUFDO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHlCQUErQnFCLE1BQU0sQ0FBQ3JCLEtBQUQsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLEdBOEJDLElBM0NYLEVBNENHSSxNQUFNLGdCQUFHO0FBQUssZUFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSCxHQUFnQyxJQTVDekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnREQsQ0FuR0Q7O0dBQU1YLEk7VUFFV0cscUQ7OztLQUZYSCxJO0FBcUdTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWVudS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuaW1wb3J0IHsgQ2dDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xuXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHBhdGggPSByb3V0ZXIuYXNQYXRoO1xuXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Nsb3NlZCwgc2V0Q2xvc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIGNvbnN0IHNob3dNZW51ID0gKCkgPT4ge1xuICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgc2V0Q2xvc2VkKGZhbHNlKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgfTtcblxuICBjb25zdCBoaWRlTWVudSA9ICgpID0+IHtcbiAgICBzZXRDbG9zZWQodHJ1ZSk7XG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrTGluayA9IChzcmMpID0+IHtcbiAgICBpZiAoc3JjID09PSBwYXRoKSB7XG4gICAgICByZXR1cm4gaGlkZU1lbnUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXRDbGFzc05hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKGxpbmtMaXN0LmluZGV4T2YobmFtZSkgPT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gJ3NlbGVjdGVkJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2xpbmsnXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG15TG9hZGVyID0gKHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9KSA9PiB7XG4gICAgcmV0dXJuIGBodHRwczovL2QxM2d2NmpzdGVxMm5mLmNsb3VkZnJvbnQubmV0LyR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbiAgfVxuXG4gIGNvbnN0IGltYWdlcyA9IFsnd2lsaGVsbWluYScsICdidWJibGVzJywgJ3Ryb2xsaW5nJywgJ3JvY2snLCAnY2xvdWRzJ107XG4gIGNvbnN0IGxpbmtMaXN0ID0gW1snSE9NRScsICcuLi8nLCA0MDBdLCBbJ0FCT1VUJywgJy9hYm91dCcsIDYwMF0sIFsnUFJPSkVDVFMnLCAnL3Byb2plY3RzL21pY2FlbGEtZGVzaWducycsIDgwMF0sIFsnUEhPVE9HUkFQSFknLCAnL3Bob3RvZ3JhcGh5JywgMTAwMF0sIFsnQ09OVEFDVCcsICcvY29udGFjdCcsIDEyMDBdXTtcblxuICBjb25zdCBsaW5rcyA9IGxpbmtMaXN0Lm1hcChsaW5rID0+IHtcbiAgICByZXR1cm4gPGRpdiBvbk1vdXNlRG93bj17KCkgPT4ge1xuICAgICAgY2hlY2tMaW5rKGxpbmtbMV0pXG4gICAgfX0+PExpbmsgaHJlZj17bGlua1sxXX0+PGxpIGNsYXNzPXtzZXRDbGFzc05hbWUobGluayl9IHN0eWxlPXt7YW5pbWF0aW9uRGVsYXk6IGAke2xpbmtbMl19bXNgfX0gb25Nb3VzZUVudGVyPXsoKSA9PiB7c2V0SW5kZXgobGlua0xpc3QuaW5kZXhPZihsaW5rKSl9fT57bGlua1swXX08L2xpPjwvTGluaz48L2Rpdj5cbn0pO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7IXZpc2libGUgP1xuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgICB7IXByb3BzLmJsYWNrID8gPHAgY2xhc3M9XCJ3aGl0ZU1lbnVIZWFkZXJcIj57cHJvcHMubmFtZX08L3A+IDogPHAgY2xhc3M9XCJtZW51SGVhZGVyXCI+e3Byb3BzLm5hbWV9PC9wPn1cbiAgICAgICAgICB7IXByb3BzLmJsYWNrID8gPGRpdiBjbGFzcz1cIndoaXRlTWVudUxpbmVzXCIgb25DbGljaz17c2hvd01lbnV9PjwvZGl2PlxuICAgICAgICAgIDogPGRpdiBjbGFzcz1cImJsYWNrTWVudUxpbmVzXCIgb25DbGljaz17c2hvd01lbnV9PjwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gOlxuICAgICAgPHAgb25DbGljaz17aGlkZU1lbnV9IGNsYXNzPVwibWVudVwiPjxDZ0Nsb3NlIGNvbG9yPVwiI0Y4RkNGMFwiIHNpemU9XCIzMHB4XCIgY2xhc3M9XCJ4XCIgLz48L3A+XG4gICAgICB9XG5cbiAgICAgIHt2aXNpYmxlID9cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGRpdiBjbGFzcz1cImhlbnJ5Qm94TWVudVwiPjxwPmhlbnJ5IGZyYWRsZXkuPC9wPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVQYWdlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuQmFja2dyb3VuZExpbmVzXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZUxpc3RcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdlc1wiPlxuICAgICAgICAgICAge2xpbmtzfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezEwMDB9IGJvdHRvbT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVQaG90b1wiIGtleT17YCR7aW1hZ2VzW2luZGV4XX0uanBnYH0+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XG4gICAgICAgICAgICAgICAgc3JjPXtgJHtpbWFnZXNbaW5kZXhdfS5qcGdgfVxuICAgICAgICAgICAgICAgIGFsdD1cInBob3RvXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjYyNVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiA6IG51bGx9XG4gICAgICB7Y2xvc2VkID8gPGRpdiBjbGFzcz1cImNsb3NlZFwiPjwvZGl2PiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})