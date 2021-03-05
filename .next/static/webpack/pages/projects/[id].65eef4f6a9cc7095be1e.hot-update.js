webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Menu = function Menu(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var path = router.asPath();\n  var images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      closed = _useState3[0],\n      setClosed = _useState3[1];\n\n  var showMenu = function showMenu() {\n    setVisible(true);\n    setClosed(false);\n    document.body.style.overflow = 'hidden';\n  };\n\n  var hideMenu = function hideMenu() {\n    setClosed(true);\n    setVisible(false);\n    document.body.style.overflow = 'visible';\n  };\n\n  var setClassName = function setClassName(name) {\n    if (linkList.indexOf(name) === index) {\n      return 'selected';\n    } else {\n      return 'link';\n    }\n  };\n\n  var closeWindow = function closeWindow(src) {\n    if (src === router.asPath) {\n      hideMenu();\n    }\n\n    console.log('src', src);\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://d13gv6jsteq2nf.cloudfront.net/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var linkList = [['HOME', '../', 400], ['ABOUT', '/about', 600], ['PROJECTS', '/projects/micaela-designs', 800], ['PHOTOGRAPHY', '/photography', 1000], ['CONTACT', '/contact', 1200]];\n  var links = linkList.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      onClick: closeWindow(link[1]),\n      href: link[1],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": setClassName(link),\n        style: {\n          animationDelay: \"\".concat(link[2], \"ms\")\n        },\n        onMouseEnter: function onMouseEnter() {\n          setIndex(linkList.indexOf(link));\n        },\n        children: link[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 64\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menu\",\n        children: [!props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"whiteMenuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"menuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 71\n        }, _this), !props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"whiteMenuLines\",\n          onClick: showMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"blackMenuLines\",\n          onClick: showMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 12\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_cg__WEBPACK_IMPORTED_MODULE_5__[\"CgClose\"], {\n        color: \"#F8FCF0\",\n        size: \"30px\",\n        \"class\": \"x\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 51\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 16\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"henryBoxMenu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"henry fradley.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 50\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuPage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"greenBackgroundLines\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"pageList\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            \"class\": \"pages\",\n            children: links\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          distance: \"5vh\",\n          delay: 1000,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"menuPhoto\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                loader: myLoader,\n                src: \"\".concat(images[index], \".jpg\"),\n                alt: \"photo\",\n                width: \"625\",\n                height: \"500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 104,\n                columnNumber: 11\n              }, _this)\n            }, \"\".concat(images[index], \".jpg\"), false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 11\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this) : null, closed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"closed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 17\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"WxT3YwLoHvxn+k9T8Sp6OM+JIig=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGgiLCJhc1BhdGgiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImNsb3NlZCIsInNldENsb3NlZCIsInNob3dNZW51IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsImhpZGVNZW51Iiwic2V0Q2xhc3NOYW1lIiwibmFtZSIsImxpbmtMaXN0IiwiaW5kZXhPZiIsImNsb3NlV2luZG93Iiwic3JjIiwiY29uc29sZSIsImxvZyIsIm15TG9hZGVyIiwid2lkdGgiLCJxdWFsaXR5IiwibGlua3MiLCJtYXAiLCJsaW5rIiwiYW5pbWF0aW9uRGVsYXkiLCJibGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXRCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdGLE1BQU0sQ0FBQ0csTUFBUCxFQUFiO0FBRUEsTUFBTUMsTUFBTSxHQUFHLENBQUMsWUFBRCxFQUFlLFNBQWYsRUFBMEIsVUFBMUIsRUFBc0MsTUFBdEMsRUFBOEMsUUFBOUMsQ0FBZjs7QUFMc0Isa0JBTUlDLHNEQUFRLENBQUMsQ0FBRCxDQU5aO0FBQUEsTUFNZkMsS0FOZTtBQUFBLE1BTVJDLFFBTlE7O0FBQUEsbUJBT1FGLHNEQUFRLENBQUMsS0FBRCxDQVBoQjtBQUFBLE1BT2ZHLE9BUGU7QUFBQSxNQU9OQyxVQVBNOztBQUFBLG1CQVFNSixzREFBUSxDQUFDLEtBQUQsQ0FSZDtBQUFBLE1BUWZLLE1BUmU7QUFBQSxNQVFQQyxT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QVY7QUFBQSxzQkFDR3FCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEEsZUFhQSxxRUFBQyx3REFBRDtBQUFNLGtCQUFRLEVBQUMsS0FBZjtBQUFxQixlQUFLLEVBQUUsSUFBNUI7QUFBa0MsZ0JBQU0sTUFBeEM7QUFBQSxpQ0FDRTtBQUFBLG1DQUNBO0FBQUssdUJBQU0sV0FBWDtBQUFBLHFDQUNBLHFFQUFDLGlEQUFEO0FBQ0Usc0JBQU0sRUFBRUgsUUFEVjtBQUVFLG1CQUFHLFlBQUt0QixNQUFNLENBQUNFLEtBQUQsQ0FBWCxTQUZMO0FBR0UsbUJBQUcsRUFBQyxPQUhOO0FBSUUscUJBQUssRUFBQyxLQUpSO0FBS0Usc0JBQU0sRUFBQztBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSx5QkFBK0JGLE1BQU0sQ0FBQ0UsS0FBRCxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFEsR0FrQ0MsSUFsRFgsRUFvREdJLE1BQU0sZ0JBQUc7QUFBSyxlQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILEdBQWdDLElBcER6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBERCxDQXBIRDs7R0FBTVosSTtVQUVXRyxxRDs7O0tBRlhILEk7QUFzSFNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NZW51LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuaW1wb3J0IHsgQ2dDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHBhdGggPSByb3V0ZXIuYXNQYXRoKCk7XG5cbiAgY29uc3QgaW1hZ2VzID0gWyd3aWxoZWxtaW5hJywgJ2J1YmJsZXMnLCAndHJvbGxpbmcnLCAncm9jaycsICdjbG91ZHMnXTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2xvc2VkLCBzZXRDbG9zZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgY29uc3Qgc2hvd01lbnUgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICBzZXRDbG9zZWQoZmFsc2UpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICB9O1xuXG4gIGNvbnN0IGhpZGVNZW51ID0gKCkgPT4ge1xuICAgIHNldENsb3NlZCh0cnVlKTtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXG4gIH07XG5cblxuXG4gIGNvbnN0IHNldENsYXNzTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAobGlua0xpc3QuaW5kZXhPZihuYW1lKSA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiAnc2VsZWN0ZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbGluaydcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xvc2VXaW5kb3cgPSAoc3JjKSA9PiB7XG4gICAgaWYgKHNyYyA9PT0gcm91dGVyLmFzUGF0aCkge1xuICAgICAgaGlkZU1lbnUoKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3NyYycsIHNyYylcbiAgfTtcblxuXG5cbiAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICByZXR1cm4gYGh0dHBzOi8vZDEzZ3Y2anN0ZXEybmYuY2xvdWRmcm9udC5uZXQvJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxuICB9XG5cbiAgY29uc3QgbGlua0xpc3QgPSBbWydIT01FJywgJy4uLycsIDQwMF0sIFsnQUJPVVQnLCAnL2Fib3V0JywgNjAwXSwgWydQUk9KRUNUUycsICcvcHJvamVjdHMvbWljYWVsYS1kZXNpZ25zJywgODAwXSwgWydQSE9UT0dSQVBIWScsICcvcGhvdG9ncmFwaHknLCAxMDAwXSwgWydDT05UQUNUJywgJy9jb250YWN0JywgMTIwMF1dO1xuXG5cbiAgY29uc3QgbGlua3MgPSBsaW5rTGlzdC5tYXAobGluayA9PiB7XG4gICAgcmV0dXJuIDxMaW5rIG9uQ2xpY2s9e2Nsb3NlV2luZG93KGxpbmtbMV0pfSBocmVmPXtsaW5rWzFdfT48bGkgY2xhc3M9e3NldENsYXNzTmFtZShsaW5rKX0gc3R5bGU9e3thbmltYXRpb25EZWxheTogYCR7bGlua1syXX1tc2B9fSBvbk1vdXNlRW50ZXI9eygpID0+IHtzZXRJbmRleChsaW5rTGlzdC5pbmRleE9mKGxpbmspKX19PntsaW5rWzBdfTwvbGk+PC9MaW5rPlxufSk7XG5cblxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHshdmlzaWJsZSA/XG4gICAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgeyFwcm9wcy5ibGFjayA/IDxwIGNsYXNzPVwid2hpdGVNZW51SGVhZGVyXCI+e3Byb3BzLm5hbWV9PC9wPiA6IDxwIGNsYXNzPVwibWVudUhlYWRlclwiPntwcm9wcy5uYW1lfTwvcD59XG4gICAgICAgICAgeyFwcm9wcy5ibGFjayA/XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndoaXRlTWVudUxpbmVzXCIgb25DbGljaz17c2hvd01lbnV9PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDpcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsYWNrTWVudUxpbmVzXCIgb25DbGljaz17c2hvd01lbnV9PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiA6IDxwIG9uQ2xpY2s9e2hpZGVNZW51fSBjbGFzcz1cIm1lbnVcIj48Q2dDbG9zZSBjb2xvcj1cIiNGOEZDRjBcIiBzaXplPVwiMzBweFwiIGNsYXNzPVwieFwiIC8+PC9wPn1cblxuICAgICAge3Zpc2libGUgP1xuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48ZGl2IGNsYXNzPVwiaGVucnlCb3hNZW51XCI+PHA+aGVucnkgZnJhZGxleS48L3A+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudVBhZ2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JlZW5CYWNrZ3JvdW5kTGluZXNcIj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlTGlzdFwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2VzXCI+XG4gICAgICAgICAgICB7bGlua3N9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17MTAwMH0gYm90dG9tPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVQaG90b1wiIGtleT17YCR7aW1hZ2VzW2luZGV4XX0uanBnYH0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgICAgc3JjPXtgJHtpbWFnZXNbaW5kZXhdfS5qcGdgfVxuICAgICAgICAgICAgYWx0PVwicGhvdG9cIlxuICAgICAgICAgICAgd2lkdGg9XCI2MjVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L0ZhZGU+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj4gOiBudWxsfVxuXG4gICAgICB7Y2xvc2VkID8gPGRpdiBjbGFzcz1cImNsb3NlZFwiPjwvZGl2PiA6IG51bGx9XG5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})