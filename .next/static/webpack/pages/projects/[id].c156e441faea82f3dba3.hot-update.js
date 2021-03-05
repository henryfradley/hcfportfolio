webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Menu = function Menu(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var path = router.asPath;\n  console.log('path', path);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      closed = _useState3[0],\n      setClosed = _useState3[1];\n\n  var showMenu = function showMenu() {\n    setVisible(true);\n    setClosed(false);\n    document.body.style.overflow = 'hidden';\n  };\n\n  var hideMenu = function hideMenu() {\n    setClosed(true);\n    setVisible(false);\n    document.body.style.overflow = 'visible';\n  };\n\n  var checkLink = function checkLink() {};\n\n  var setClassName = function setClassName(name) {\n    if (linkList.indexOf(name) === index) {\n      return 'selected';\n    } else {\n      return 'link';\n    }\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://d13gv6jsteq2nf.cloudfront.net/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];\n  var linkList = [['HOME', '../', 400], ['ABOUT', '/about', 600], ['PROJECTS', '/projects/micaela-designs', 800], ['PHOTOGRAPHY', '/photography', 1000], ['CONTACT', '/contact', 1200]];\n  var links = linkList.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      onMouseDown: function onMouseDown() {\n        hideMenu();\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: link[1],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          \"class\": setClassName(link),\n          style: {\n            animationDelay: \"\".concat(link[2], \"ms\")\n          },\n          onMouseEnter: function onMouseEnter() {\n            setIndex(linkList.indexOf(link));\n          },\n          children: link[0]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 29\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 8\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menu\",\n        children: [!props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"whiteMenuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 27\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"menuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 73\n        }, _this), !props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"whiteMenuLines\",\n          onClick: showMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 27\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"blackMenuLines\",\n          onClick: showMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__[\"CgClose\"], {\n        color: \"#F8FCF0\",\n        size: \"30px\",\n        \"class\": \"x\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 42\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"henryBoxMenu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"henry fradley.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 50\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuPage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"greenBackgroundLines\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"pageList\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            \"class\": \"pages\",\n            children: links\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          distance: \"5vh\",\n          delay: 1000,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"menuPhoto\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                loader: myLoader,\n                src: \"\".concat(images[index], \".jpg\"),\n                alt: \"photo\",\n                width: \"625\",\n                height: \"500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 15\n              }, _this)\n            }, \"\".concat(images[index], \".jpg\"), false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this) : null, closed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"closed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"WxT3YwLoHvxn+k9T8Sp6OM+JIig=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGgiLCJhc1BhdGgiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJpbmRleCIsInNldEluZGV4IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJjbG9zZWQiLCJzZXRDbG9zZWQiLCJzaG93TWVudSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJoaWRlTWVudSIsImNoZWNrTGluayIsInNldENsYXNzTmFtZSIsIm5hbWUiLCJsaW5rTGlzdCIsImluZGV4T2YiLCJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsImltYWdlcyIsImxpbmtzIiwibWFwIiwibGluayIsImFuaW1hdGlvbkRlbGF5IiwiYmxhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUV0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBR0EsTUFBTUMsSUFBSSxHQUFHRixNQUFNLENBQUNHLE1BQXBCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JILElBQXBCOztBQU5zQixrQkFPSUksc0RBQVEsQ0FBQyxDQUFELENBUFo7QUFBQSxNQU9mQyxLQVBlO0FBQUEsTUFPUkMsUUFQUTs7QUFBQSxtQkFRUUYsc0RBQVEsQ0FBQyxLQUFELENBUmhCO0FBQUEsTUFRZkcsT0FSZTtBQUFBLE1BUU5DLFVBUk07O0FBQUEsbUJBU01KLHNEQUFRLENBQUMsS0FBRCxDQVRkO0FBQUEsTUFTZkssTUFUZTtBQUFBLE1BU1BDLFNBVE87O0FBWXRCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJILGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUUsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBRSxZQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsUUFBL0I7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJOLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUYsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBSSxZQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsU0FBL0I7QUFDRCxHQUpEOztBQU1BLE1BQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU0sQ0FFdkIsQ0FGRDs7QUFJQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFTQyxJQUFULEVBQWU7QUFDbEMsUUFBSUMsUUFBUSxDQUFDQyxPQUFULENBQWlCRixJQUFqQixNQUEyQmQsS0FBL0IsRUFBc0M7QUFDcEMsYUFBTyxVQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxNQUFQO0FBQ0Q7QUFDRixHQU5EOztBQVFBLE1BQU1pQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE2QjtBQUFBLFFBQTFCQyxHQUEwQixRQUExQkEsR0FBMEI7QUFBQSxRQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsUUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzVDLDJEQUFnREYsR0FBaEQsZ0JBQXlEQyxLQUF6RCxnQkFBb0VDLE9BQU8sSUFBSSxFQUEvRTtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsTUFBTSxHQUFHLENBQUMsWUFBRCxFQUFlLFNBQWYsRUFBMEIsVUFBMUIsRUFBc0MsTUFBdEMsRUFBOEMsUUFBOUMsQ0FBZjtBQUNBLE1BQU1OLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsR0FBaEIsQ0FBRCxFQUF1QixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLEdBQXBCLENBQXZCLEVBQWlELENBQUMsVUFBRCxFQUFhLDJCQUFiLEVBQTBDLEdBQTFDLENBQWpELEVBQWlHLENBQUMsYUFBRCxFQUFnQixjQUFoQixFQUFnQyxJQUFoQyxDQUFqRyxFQUF3SSxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLElBQXhCLENBQXhJLENBQWpCO0FBRUEsTUFBTU8sS0FBSyxHQUFHUCxRQUFRLENBQUNRLEdBQVQsQ0FBYSxVQUFBQyxJQUFJLEVBQUk7QUFDakMsd0JBQU87QUFBSyxpQkFBVyxFQUFFLHVCQUFNO0FBQzdCYixnQkFBUTtBQUNULE9BRk07QUFBQSw2QkFFSixxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRWEsSUFBSSxDQUFDLENBQUQsQ0FBaEI7QUFBQSwrQkFBcUI7QUFBSSxtQkFBT1gsWUFBWSxDQUFDVyxJQUFELENBQXZCO0FBQStCLGVBQUssRUFBRTtBQUFDQywwQkFBYyxZQUFLRCxJQUFJLENBQUMsQ0FBRCxDQUFUO0FBQWYsV0FBdEM7QUFBd0Usc0JBQVksRUFBRSx3QkFBTTtBQUFDdkIsb0JBQVEsQ0FBQ2MsUUFBUSxDQUFDQyxPQUFULENBQWlCUSxJQUFqQixDQUFELENBQVI7QUFBaUMsV0FBOUg7QUFBQSxvQkFBaUlBLElBQUksQ0FBQyxDQUFEO0FBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUdILEdBSmUsQ0FBZDtBQVFBLHNCQUNFO0FBQUEsZUFDRyxDQUFDdEIsT0FBRCxnQkFDRDtBQUFBLDZCQUNFO0FBQUssaUJBQU0sTUFBWDtBQUFBLG1CQUNHLENBQUNWLEtBQUssQ0FBQ2tDLEtBQVAsZ0JBQWU7QUFBRyxtQkFBTSxpQkFBVDtBQUFBLG9CQUE0QmxDLEtBQUssQ0FBQ3NCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWYsZ0JBQTZEO0FBQUcsbUJBQU0sWUFBVDtBQUFBLG9CQUF1QnRCLEtBQUssQ0FBQ3NCO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGhFLEVBRUcsQ0FBQ3RCLEtBQUssQ0FBQ2tDLEtBQVAsZ0JBQWU7QUFBSyxtQkFBTSxnQkFBWDtBQUE0QixpQkFBTyxFQUFFcEI7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZixnQkFDQztBQUFLLG1CQUFNLGdCQUFYO0FBQTRCLGlCQUFPLEVBQUVBO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURDLGdCQVNEO0FBQUcsYUFBTyxFQUFFSyxRQUFaO0FBQXNCLGVBQU0sTUFBNUI7QUFBQSw2QkFBbUMscUVBQUMsc0RBQUQ7QUFBUyxhQUFLLEVBQUMsU0FBZjtBQUF5QixZQUFJLEVBQUMsTUFBOUI7QUFBcUMsaUJBQU07QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsRUFhR1QsT0FBTyxnQkFDUjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFBZTtBQUFLLG1CQUFNLGNBQVg7QUFBQSxpQ0FBMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssaUJBQU0sVUFBWDtBQUFBLGdDQUNFO0FBQUssbUJBQU0sc0JBQVg7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9BO0FBQUssbUJBQU0sVUFBWDtBQUFBLGlDQUNFO0FBQUkscUJBQU0sT0FBVjtBQUFBLHNCQUNHb0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQQSxlQWFBLHFFQUFDLHdEQUFEO0FBQU0sa0JBQVEsRUFBQyxLQUFmO0FBQXFCLGVBQUssRUFBRSxJQUE1QjtBQUFrQyxnQkFBTSxNQUF4QztBQUFBLGlDQUNFO0FBQUEsbUNBQ0U7QUFBSyx1QkFBTSxXQUFYO0FBQUEscUNBQ0UscUVBQUMsaURBQUQ7QUFDRSxzQkFBTSxFQUFFTCxRQURWO0FBRUUsbUJBQUcsWUFBS0ksTUFBTSxDQUFDckIsS0FBRCxDQUFYLFNBRkw7QUFHRSxtQkFBRyxFQUFDLE9BSE47QUFJRSxxQkFBSyxFQUFDLEtBSlI7QUFLRSxzQkFBTSxFQUFDO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHlCQUErQnFCLE1BQU0sQ0FBQ3JCLEtBQUQsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLEdBOEJDLElBM0NYLEVBNENHSSxNQUFNLGdCQUFHO0FBQUssZUFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSCxHQUFnQyxJQTVDekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnREQsQ0FuR0Q7O0dBQU1iLEk7VUFFV0cscUQ7OztLQUZYSCxJO0FBcUdTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWVudS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuaW1wb3J0IHsgQ2dDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xuXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuICBjb25zdCBwYXRoID0gcm91dGVyLmFzUGF0aDtcbiAgY29uc29sZS5sb2coJ3BhdGgnLCBwYXRoKVxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjbG9zZWQsIHNldENsb3NlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICBjb25zdCBzaG93TWVudSA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgIHNldENsb3NlZChmYWxzZSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gIH07XG5cbiAgY29uc3QgaGlkZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0Q2xvc2VkKHRydWUpO1xuICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcbiAgfTtcblxuICBjb25zdCBjaGVja0xpbmsgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIGNvbnN0IHNldENsYXNzTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAobGlua0xpc3QuaW5kZXhPZihuYW1lKSA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiAnc2VsZWN0ZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbGluaydcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICByZXR1cm4gYGh0dHBzOi8vZDEzZ3Y2anN0ZXEybmYuY2xvdWRmcm9udC5uZXQvJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxuICB9XG5cbiAgY29uc3QgaW1hZ2VzID0gWyd3aWxoZWxtaW5hJywgJ2J1YmJsZXMnLCAndHJvbGxpbmcnLCAncm9jaycsICdjbG91ZHMnXTtcbiAgY29uc3QgbGlua0xpc3QgPSBbWydIT01FJywgJy4uLycsIDQwMF0sIFsnQUJPVVQnLCAnL2Fib3V0JywgNjAwXSwgWydQUk9KRUNUUycsICcvcHJvamVjdHMvbWljYWVsYS1kZXNpZ25zJywgODAwXSwgWydQSE9UT0dSQVBIWScsICcvcGhvdG9ncmFwaHknLCAxMDAwXSwgWydDT05UQUNUJywgJy9jb250YWN0JywgMTIwMF1dO1xuXG4gIGNvbnN0IGxpbmtzID0gbGlua0xpc3QubWFwKGxpbmsgPT4ge1xuICAgIHJldHVybiA8ZGl2IG9uTW91c2VEb3duPXsoKSA9PiB7XG4gICAgICBoaWRlTWVudSgpO1xuICAgIH19PjxMaW5rIGhyZWY9e2xpbmtbMV19PjxsaSBjbGFzcz17c2V0Q2xhc3NOYW1lKGxpbmspfSBzdHlsZT17e2FuaW1hdGlvbkRlbGF5OiBgJHtsaW5rWzJdfW1zYH19IG9uTW91c2VFbnRlcj17KCkgPT4ge3NldEluZGV4KGxpbmtMaXN0LmluZGV4T2YobGluaykpfX0+e2xpbmtbMF19PC9saT48L0xpbms+PC9kaXY+XG59KTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyF2aXNpYmxlID9cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51XCI+XG4gICAgICAgICAgeyFwcm9wcy5ibGFjayA/IDxwIGNsYXNzPVwid2hpdGVNZW51SGVhZGVyXCI+e3Byb3BzLm5hbWV9PC9wPiA6IDxwIGNsYXNzPVwibWVudUhlYWRlclwiPntwcm9wcy5uYW1lfTwvcD59XG4gICAgICAgICAgeyFwcm9wcy5ibGFjayA/IDxkaXYgY2xhc3M9XCJ3aGl0ZU1lbnVMaW5lc1wiIG9uQ2xpY2s9e3Nob3dNZW51fT48L2Rpdj5cbiAgICAgICAgICA6IDxkaXYgY2xhc3M9XCJibGFja01lbnVMaW5lc1wiIG9uQ2xpY2s9e3Nob3dNZW51fT48L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+IDpcbiAgICAgIDxwIG9uQ2xpY2s9e2hpZGVNZW51fSBjbGFzcz1cIm1lbnVcIj48Q2dDbG9zZSBjb2xvcj1cIiNGOEZDRjBcIiBzaXplPVwiMzBweFwiIGNsYXNzPVwieFwiIC8+PC9wPlxuICAgICAgfVxuXG4gICAgICB7dmlzaWJsZSA/XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPjxkaXYgY2xhc3M9XCJoZW5yeUJveE1lbnVcIj48cD5oZW5yeSBmcmFkbGV5LjwvcD48L2Rpdj48L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51UGFnZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmVlbkJhY2tncm91bmRMaW5lc1wiPlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VMaXN0XCI+XG4gICAgICAgICAgPHVsIGNsYXNzPVwicGFnZXNcIj5cbiAgICAgICAgICAgIHtsaW5rc31cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXsxMDAwfSBib3R0b20+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51UGhvdG9cIiBrZXk9e2Ake2ltYWdlc1tpbmRleF19LmpwZ2B9PlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgICAgICAgIHNyYz17YCR7aW1hZ2VzW2luZGV4XX0uanBnYH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJwaG90b1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI2MjVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gOiBudWxsfVxuICAgICAge2Nsb3NlZCA/IDxkaXYgY2xhc3M9XCJjbG9zZWRcIj48L2Rpdj4gOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})