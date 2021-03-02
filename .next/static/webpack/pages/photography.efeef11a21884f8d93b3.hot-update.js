webpackHotUpdate_N_E("pages/photography",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Menu = function Menu(props) {\n  _s();\n\n  var images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      closed = _useState3[0],\n      setClosed = _useState3[1];\n\n  var showMenu = function showMenu() {\n    setVisible(true);\n    setClosed(false);\n    document.body.style.overflow = 'hidden';\n  };\n\n  var hideMenu = function hideMenu() {\n    setClosed(true);\n    setVisible(false);\n    document.body.style.overflow = 'visible';\n  };\n\n  var setClassName = function setClassName(name) {\n    if (linkList.indexOf(name) === index) {\n      return 'selected';\n    } else {\n      return 'link';\n    }\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var linkList = [['HOME', '../'], ['ABOUT', '/about'], ['PROJECTS', '/projects/micaela-designs'], ['PHOTOGRAPHY', '/photography'], ['CONTACT', '/contact']];\n  var links = linkList.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: link[1],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": setClassName(link),\n        onMouseEnter: function onMouseEnter() {\n          setIndex(linkList.indexOf(link));\n        },\n        children: link[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 35\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 14\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menu\",\n        children: [!props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"whiteMenuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"menuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 71\n        }, _this), !props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          onClick: showMenu,\n          src: \"/whiteMenu.png\",\n          alt: \"menu\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          onClick: showMenu,\n          src: \"/blackMenu.png\",\n          alt: \"menu\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: \"X\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 22\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"henryBoxMenu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"henry fradley.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 50\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuPage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"greenBackgroundLines\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"pageList\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            \"class\": \"pages\",\n            children: links\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"menuPhoto\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            loader: myLoader,\n            src: \"\".concat(images[index], \".jpg\"),\n            alt: \"photo\",\n            layout: \"fill\",\n            objectFit: \"contain\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 11\n          }, _this)\n        }, images[index], false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this) : null, closed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"closed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"u+58HHkMdWSUTIiQbmUrYgVm6qY=\");\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJwcm9wcyIsImltYWdlcyIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiY2xvc2VkIiwic2V0Q2xvc2VkIiwic2hvd01lbnUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiaGlkZU1lbnUiLCJzZXRDbGFzc05hbWUiLCJuYW1lIiwibGlua0xpc3QiLCJpbmRleE9mIiwibXlMb2FkZXIiLCJzcmMiLCJ3aWR0aCIsInF1YWxpdHkiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJibGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUV0QixNQUFNQyxNQUFNLEdBQUcsQ0FBQyxZQUFELEVBQWUsU0FBZixFQUEwQixVQUExQixFQUFzQyxNQUF0QyxFQUE4QyxRQUE5QyxDQUFmOztBQUZzQixrQkFTSUMsc0RBQVEsQ0FBQyxDQUFELENBVFo7QUFBQSxNQVNmQyxLQVRlO0FBQUEsTUFTUkMsUUFUUTs7QUFBQSxtQkFVUUYsc0RBQVEsQ0FBQyxLQUFELENBVmhCO0FBQUEsTUFVZkcsT0FWZTtBQUFBLE1BVU5DLFVBVk07O0FBQUEsbUJBV01KLHNEQUFRLENBQUMsS0FBRCxDQVhkO0FBQUEsTUFXZkssTUFYZTtBQUFBLE1BV1BDLFNBWE87O0FBZXRCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJILGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUUsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBRSxZQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsUUFBL0I7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJOLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUYsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBSSxZQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsU0FBL0I7QUFDRCxHQUpEOztBQVFBLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQVNDLElBQVQsRUFBZTtBQUNsQyxRQUFJQyxRQUFRLENBQUNDLE9BQVQsQ0FBaUJGLElBQWpCLE1BQTJCYixLQUEvQixFQUFzQztBQUNwQyxhQUFPLFVBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLE1BQVA7QUFDRDtBQUNGLEdBTkQ7O0FBVUEsTUFBTWdCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZCO0FBQUEsUUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUFBLFFBQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxRQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDNUMsc0VBQTJERixHQUEzRCxnQkFBb0VDLEtBQXBFLGdCQUErRUMsT0FBTyxJQUFJLEVBQTFGO0FBQ0QsR0FGRDs7QUFJQSxNQUFNTCxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQUQsRUFBUyxLQUFULENBQUQsRUFBa0IsQ0FBQyxPQUFELEVBQVUsUUFBVixDQUFsQixFQUF1QyxDQUFDLFVBQUQsRUFBYSwyQkFBYixDQUF2QyxFQUFrRixDQUFDLGFBQUQsRUFBZ0IsY0FBaEIsQ0FBbEYsRUFBbUgsQ0FBQyxTQUFELEVBQVksVUFBWixDQUFuSCxDQUFqQjtBQUVBLE1BQU1NLEtBQUssR0FBR04sUUFBUSxDQUFDTyxHQUFULENBQWEsVUFBQUMsSUFBSSxFQUFJO0FBQy9CLHdCQUFPLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFQSxJQUFJLENBQUMsQ0FBRCxDQUFoQjtBQUFBLDZCQUFxQjtBQUFJLGlCQUFPVixZQUFZLENBQUNVLElBQUQsQ0FBdkI7QUFBK0Isb0JBQVksRUFBRSx3QkFBTTtBQUFDckIsa0JBQVEsQ0FBQ2EsUUFBUSxDQUFDQyxPQUFULENBQWlCTyxJQUFqQixDQUFELENBQVI7QUFBaUMsU0FBckY7QUFBQSxrQkFBd0ZBLElBQUksQ0FBQyxDQUFEO0FBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0gsR0FGYSxDQUFkO0FBUUEsc0JBR0U7QUFBQSxlQUVHLENBQUNwQixPQUFELGdCQUNEO0FBQUEsNkJBQ0E7QUFBSyxpQkFBTSxNQUFYO0FBQUEsbUJBQ0csQ0FBQ0wsS0FBSyxDQUFDMEIsS0FBUCxnQkFBZTtBQUFHLG1CQUFNLGlCQUFUO0FBQUEsb0JBQTRCMUIsS0FBSyxDQUFDZ0I7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZixnQkFBNkQ7QUFBRyxtQkFBTSxZQUFUO0FBQUEsb0JBQXVCaEIsS0FBSyxDQUFDZ0I7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEaEUsRUFHRyxDQUFDaEIsS0FBSyxDQUFDMEIsS0FBUCxnQkFBZSxxRUFBQyxpREFBRDtBQUNaLGlCQUFPLEVBQUVqQixRQURHO0FBRVosYUFBRyxFQUFDLGdCQUZRO0FBR1osYUFBRyxFQUFDLE1BSFE7QUFJWixnQkFBTSxFQUFDLE1BSks7QUFLWixtQkFBUyxFQUFDO0FBTEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZixnQkFPQyxxRUFBQyxpREFBRDtBQUNFLGlCQUFPLEVBQUVBLFFBRFg7QUFFRSxhQUFHLEVBQUMsZ0JBRk47QUFHRSxhQUFHLEVBQUMsTUFITjtBQUlFLGdCQUFNLEVBQUMsTUFKVDtBQUtFLG1CQUFTLEVBQUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQyxnQkFvQmM7QUFBRyxhQUFPLEVBQUVLLFFBQVo7QUFBc0IsZUFBTSxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCakIsRUF3QkdULE9BQU8sZ0JBQ1I7QUFBQSw4QkFFRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQWU7QUFBSyxtQkFBTSxjQUFYO0FBQUEsaUNBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFLLGlCQUFNLFVBQVg7QUFBQSxnQ0FDQTtBQUFLLG1CQUFNLHNCQUFYO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFPQTtBQUFLLG1CQUFNLFVBQVg7QUFBQSxpQ0FDRTtBQUFJLHFCQUFNLE9BQVY7QUFBQSxzQkFDR2tCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEEsZUFhQTtBQUFLLG1CQUFNLFdBQVg7QUFBQSxpQ0FDRSxxRUFBQyxpREFBRDtBQUNFLGtCQUFNLEVBQUVKLFFBRFY7QUFFRSxlQUFHLFlBQUtsQixNQUFNLENBQUNFLEtBQUQsQ0FBWCxTQUZMO0FBR0UsZUFBRyxFQUFDLE9BSE47QUFJRSxrQkFBTSxFQUFDLE1BSlQ7QUFLRSxxQkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQTRCRixNQUFNLENBQUNFLEtBQUQsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxHQTZCTixJQXJESixFQXlERUksTUFBTSxnQkFDTjtBQUFLLGVBQU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE0sR0FFSixJQTNESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FIRjtBQXNFRCxDQTNIRDs7R0FBTVIsSTs7S0FBQUEsSTtBQTZIU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBpbWFnZXMgPSBbJ3dpbGhlbG1pbmEnLCAnYnViYmxlcycsICd0cm9sbGluZycsICdyb2NrJywgJ2Nsb3VkcyddO1xuXG5cblxuXG5cblxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjbG9zZWQsIHNldENsb3NlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuXG4gIGNvbnN0IHNob3dNZW51ID0gKCkgPT4ge1xuICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgc2V0Q2xvc2VkKGZhbHNlKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgfTtcblxuICBjb25zdCBoaWRlTWVudSA9ICgpID0+IHtcbiAgICBzZXRDbG9zZWQodHJ1ZSk7XG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xuICB9O1xuXG5cblxuICBjb25zdCBzZXRDbGFzc05hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKGxpbmtMaXN0LmluZGV4T2YobmFtZSkgPT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gJ3NlbGVjdGVkJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2xpbmsnXG4gICAgfVxuICB9XG5cblxuXG4gIGNvbnN0IG15TG9hZGVyID0gKHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9KSA9PiB7XG4gICAgcmV0dXJuIGBodHRwczovL2hlbnJ5LXdlYnNpdGUuczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxuICB9XG5cbiAgY29uc3QgbGlua0xpc3QgPSBbWydIT01FJywgJy4uLyddLCBbJ0FCT1VUJywgJy9hYm91dCddLCBbJ1BST0pFQ1RTJywgJy9wcm9qZWN0cy9taWNhZWxhLWRlc2lnbnMnXSwgWydQSE9UT0dSQVBIWScsICcvcGhvdG9ncmFwaHknXSwgWydDT05UQUNUJywgJy9jb250YWN0J11dO1xuXG4gIGNvbnN0IGxpbmtzID0gbGlua0xpc3QubWFwKGxpbmsgPT4ge1xuICAgICAgcmV0dXJuIDxMaW5rIGhyZWY9e2xpbmtbMV19PjxsaSBjbGFzcz17c2V0Q2xhc3NOYW1lKGxpbmspfSBvbk1vdXNlRW50ZXI9eygpID0+IHtzZXRJbmRleChsaW5rTGlzdC5pbmRleE9mKGxpbmspKX19PntsaW5rWzBdfTwvbGk+PC9MaW5rPlxuICB9KTtcblxuXG5cblxuXG4gIHJldHVybiAoXG5cblxuICAgIDxkaXY+XG5cbiAgICAgIHshdmlzaWJsZSA/XG4gICAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgeyFwcm9wcy5ibGFjayA/IDxwIGNsYXNzPVwid2hpdGVNZW51SGVhZGVyXCI+e3Byb3BzLm5hbWV9PC9wPiA6IDxwIGNsYXNzPVwibWVudUhlYWRlclwiPntwcm9wcy5uYW1lfTwvcD59XG5cbiAgICAgICAgeyFwcm9wcy5ibGFjayA/IDxJbWFnZVxuICAgICAgICAgICAgb25DbGljaz17c2hvd01lbnV9XG4gICAgICAgICAgICBzcmM9XCIvd2hpdGVNZW51LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJtZW51XCJcbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgLz4gOlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgb25DbGljaz17c2hvd01lbnV9XG4gICAgICAgICAgICBzcmM9XCIvYmxhY2tNZW51LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJtZW51XCJcbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICA8L2Rpdj48L2Rpdj4gOiA8cCBvbkNsaWNrPXtoaWRlTWVudX0gY2xhc3M9XCJtZW51XCI+WDwvcD59XG5cbiAgICAgIHt2aXNpYmxlID9cbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48ZGl2IGNsYXNzPVwiaGVucnlCb3hNZW51XCI+PHA+aGVucnkgZnJhZGxleS48L3A+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudVBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuQmFja2dyb3VuZExpbmVzXCI+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlTGlzdFwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2VzXCI+XG4gICAgICAgICAgICB7bGlua3N9XG5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVQaG90b1wiIGtleT17aW1hZ2VzW2luZGV4XX0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgICAgc3JjPXtgJHtpbWFnZXNbaW5kZXhdfS5qcGdgfVxuICAgICAgICAgICAgYWx0PVwicGhvdG9cIlxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgOiBudWxsXG4gICAgICB9XG5cbiAgICAgIHtcbiAgICAgIGNsb3NlZCA/XG4gICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VkXCI+PC9kaXY+XG4gICAgICA6IG51bGxcbiAgICAgIH1cblxuXG5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})