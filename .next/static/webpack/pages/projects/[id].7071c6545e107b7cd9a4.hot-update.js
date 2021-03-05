webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Menu = function Menu(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var path = router.asPath;\n  var images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      closed = _useState3[0],\n      setClosed = _useState3[1];\n\n  var showMenu = function showMenu() {\n    setVisible(true);\n    setClosed(false);\n    document.body.style.overflow = 'hidden';\n  };\n\n  var hideMenu = function hideMenu() {\n    setClosed(true);\n    setVisible(false);\n    document.body.style.overflow = 'visible';\n  };\n\n  var setClassName = function setClassName(name) {\n    if (linkList.indexOf(name) === index) {\n      return 'selected';\n    } else {\n      return 'link';\n    }\n  };\n\n  var closeWindow = function closeWindow(src) {\n    if (src === path) {\n      return hideMenu();\n    }\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://d13gv6jsteq2nf.cloudfront.net/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  }; // const linkList = [['HOME', '../', 400], ['ABOUT', '/about', 600], ['PROJECTS', '/projects/micaela-designs', 800], ['PHOTOGRAPHY', '/photography', 1000], ['CONTACT', '/contact', 1200]];\n\n\n  var linkList = [['HOME', '/', 400], ['ABOUT', '/about', 600], ['PROJECTS', '/projects/micaela-designs', 800], ['PHOTOGRAPHY', '/photography', 1000], ['CONTACT', '/contact', 1200]];\n  var links = linkList.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: link[1],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": setClassName(link),\n        style: {\n          animationDelay: \"\".concat(link[2], \"ms\")\n        },\n        onMouseEnter: function onMouseEnter() {\n          setIndex(linkList.indexOf(link));\n        },\n        children: link[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 33\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menu\",\n        children: [!props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"whiteMenuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"menuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 71\n        }, _this), !props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"whiteMenuLines\",\n          onClick: showMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"blackMenuLines\",\n          onClick: showMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 12\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_cg__WEBPACK_IMPORTED_MODULE_5__[\"CgClose\"], {\n        color: \"#F8FCF0\",\n        size: \"30px\",\n        \"class\": \"x\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 51\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 16\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"henryBoxMenu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"henry fradley.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 50\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuPage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"greenBackgroundLines\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"pageList\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            \"class\": \"pages\",\n            children: links\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          distance: \"5vh\",\n          delay: 1000,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"menuPhoto\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                loader: myLoader,\n                src: \"\".concat(images[index], \".jpg\"),\n                alt: \"photo\",\n                width: \"625\",\n                height: \"500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 106,\n                columnNumber: 11\n              }, _this)\n            }, \"\".concat(images[index], \".jpg\"), false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 11\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this) : null, closed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"closed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 17\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"WxT3YwLoHvxn+k9T8Sp6OM+JIig=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGgiLCJhc1BhdGgiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImNsb3NlZCIsInNldENsb3NlZCIsInNob3dNZW51IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsImhpZGVNZW51Iiwic2V0Q2xhc3NOYW1lIiwibmFtZSIsImxpbmtMaXN0IiwiaW5kZXhPZiIsImNsb3NlV2luZG93Iiwic3JjIiwibXlMb2FkZXIiLCJ3aWR0aCIsInF1YWxpdHkiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJhbmltYXRpb25EZWxheSIsImJsYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFdEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLElBQUksR0FBR0YsTUFBTSxDQUFDRyxNQUFwQjtBQUVBLE1BQU1DLE1BQU0sR0FBRyxDQUFDLFlBQUQsRUFBZSxTQUFmLEVBQTBCLFVBQTFCLEVBQXNDLE1BQXRDLEVBQThDLFFBQTlDLENBQWY7O0FBTHNCLGtCQU1JQyxzREFBUSxDQUFDLENBQUQsQ0FOWjtBQUFBLE1BTWZDLEtBTmU7QUFBQSxNQU1SQyxRQU5ROztBQUFBLG1CQU9RRixzREFBUSxDQUFDLEtBQUQsQ0FQaEI7QUFBQSxNQU9mRyxPQVBlO0FBQUEsTUFPTkMsVUFQTTs7QUFBQSxtQkFRTUosc0RBQVEsQ0FBQyxLQUFELENBUmQ7QUFBQSxNQVFmSyxNQVJlO0FBQUEsTUFRUEMsU0FSTzs7QUFXdEIsTUFBTUMsUUFB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O0FBQXFCLGVBQUssRUFBRSxJQUE1QjtBQUFrQyxnQkFBTSxNQUF4QztBQUFBLGlDQUNFO0FBQUEsbUNBQ0E7QUFBSyx1QkFBTSxXQUFYO0FBQUEscUNBQ0EscUVBQUMsaURBQUQ7QUFDRSxzQkFBTSxFQUFFSCxRQURWO0FBRUUsbUJBQUcsWUFBS3BCLE1BQU0sQ0FBQ0UsS0FBRCxDQUFYLFNBRkw7QUFHRSxtQkFBRyxFQUFDLE9BSE47QUFJRSxxQkFBSyxFQUFDLEtBSlI7QUFLRSxzQkFBTSxFQUFDO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLHlCQUErQkYsTUFBTSxDQUFDRSxLQUFELENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxHQWtDQyxJQWxEWCxFQW9ER0ksTUFBTSxnQkFBRztBQUFLLGVBQU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsR0FBZ0MsSUFwRHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMERELENBdEhEOztHQUFNWixJO1VBRVdHLHFEOzs7S0FGWEgsSTtBQXdIU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgeyBDZ0Nsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2NnXCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcGF0aCA9IHJvdXRlci5hc1BhdGg7XG5cbiAgY29uc3QgaW1hZ2VzID0gWyd3aWxoZWxtaW5hJywgJ2J1YmJsZXMnLCAndHJvbGxpbmcnLCAncm9jaycsICdjbG91ZHMnXTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2xvc2VkLCBzZXRDbG9zZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgY29uc3Qgc2hvd01lbnUgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICBzZXRDbG9zZWQoZmFsc2UpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICB9O1xuXG4gIGNvbnN0IGhpZGVNZW51ID0gKCkgPT4ge1xuICAgIHNldENsb3NlZCh0cnVlKTtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXG4gIH07XG5cblxuXG4gIGNvbnN0IHNldENsYXNzTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAobGlua0xpc3QuaW5kZXhPZihuYW1lKSA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiAnc2VsZWN0ZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbGluaydcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xvc2VXaW5kb3cgPSAoc3JjKSA9PiB7XG4gICAgaWYgKHNyYyA9PT0gcGF0aCkge1xuICAgICAgcmV0dXJuIGhpZGVNZW51KCk7XG4gICAgfVxuXG4gIH07XG5cblxuXG4gIGNvbnN0IG15TG9hZGVyID0gKHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9KSA9PiB7XG4gICAgcmV0dXJuIGBodHRwczovL2QxM2d2NmpzdGVxMm5mLmNsb3VkZnJvbnQubmV0LyR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbiAgfVxuXG4gIC8vIGNvbnN0IGxpbmtMaXN0ID0gW1snSE9NRScsICcuLi8nLCA0MDBdLCBbJ0FCT1VUJywgJy9hYm91dCcsIDYwMF0sIFsnUFJPSkVDVFMnLCAnL3Byb2plY3RzL21pY2FlbGEtZGVzaWducycsIDgwMF0sIFsnUEhPVE9HUkFQSFknLCAnL3Bob3RvZ3JhcGh5JywgMTAwMF0sIFsnQ09OVEFDVCcsICcvY29udGFjdCcsIDEyMDBdXTtcblxuICBjb25zdCBsaW5rTGlzdCA9IFtbJ0hPTUUnLCAnLycsIDQwMF0sIFsnQUJPVVQnLCAnL2Fib3V0JywgNjAwXSwgWydQUk9KRUNUUycsICcvcHJvamVjdHMvbWljYWVsYS1kZXNpZ25zJywgODAwXSwgWydQSE9UT0dSQVBIWScsICcvcGhvdG9ncmFwaHknLCAxMDAwXSwgWydDT05UQUNUJywgJy9jb250YWN0JywgMTIwMF1dO1xuXG5cbiAgY29uc3QgbGlua3MgPSBsaW5rTGlzdC5tYXAobGluayA9PiB7XG4gICAgcmV0dXJuIDxMaW5rIGhyZWY9e2xpbmtbMV19PjxsaSBjbGFzcz17c2V0Q2xhc3NOYW1lKGxpbmspfSBzdHlsZT17e2FuaW1hdGlvbkRlbGF5OiBgJHtsaW5rWzJdfW1zYH19IG9uTW91c2VFbnRlcj17KCkgPT4ge3NldEluZGV4KGxpbmtMaXN0LmluZGV4T2YobGluaykpfX0+e2xpbmtbMF19PC9saT48L0xpbms+XG59KTtcblxuXG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyF2aXNpYmxlID9cbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVudVwiPlxuICAgICAgICB7IXByb3BzLmJsYWNrID8gPHAgY2xhc3M9XCJ3aGl0ZU1lbnVIZWFkZXJcIj57cHJvcHMubmFtZX08L3A+IDogPHAgY2xhc3M9XCJtZW51SGVhZGVyXCI+e3Byb3BzLm5hbWV9PC9wPn1cbiAgICAgICAgICB7IXByb3BzLmJsYWNrID9cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hpdGVNZW51TGluZXNcIiBvbkNsaWNrPXtzaG93TWVudX0+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgOlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxhY2tNZW51TGluZXNcIiBvbkNsaWNrPXtzaG93TWVudX0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+IDogPHAgb25DbGljaz17aGlkZU1lbnV9IGNsYXNzPVwibWVudVwiPjxDZ0Nsb3NlIGNvbG9yPVwiI0Y4RkNGMFwiIHNpemU9XCIzMHB4XCIgY2xhc3M9XCJ4XCIgLz48L3A+fVxuXG4gICAgICB7dmlzaWJsZSA/XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPjxkaXYgY2xhc3M9XCJoZW5yeUJveE1lbnVcIj48cD5oZW5yeSBmcmFkbGV5LjwvcD48L2Rpdj48L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51UGFnZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmVlbkJhY2tncm91bmRMaW5lc1wiPlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VMaXN0XCI+XG4gICAgICAgICAgPHVsIGNsYXNzPVwicGFnZXNcIj5cbiAgICAgICAgICAgIHtsaW5rc31cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXsxMDAwfSBib3R0b20+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudVBob3RvXCIga2V5PXtgJHtpbWFnZXNbaW5kZXhdfS5qcGdgfT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XG4gICAgICAgICAgICBzcmM9e2Ake2ltYWdlc1tpbmRleF19LmpwZ2B9XG4gICAgICAgICAgICBhbHQ9XCJwaG90b1wiXG4gICAgICAgICAgICB3aWR0aD1cIjYyNVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvRmFkZT5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PiA6IG51bGx9XG5cbiAgICAgIHtjbG9zZWQgPyA8ZGl2IGNsYXNzPVwiY2xvc2VkXCI+PC9kaXY+IDogbnVsbH1cblxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})