webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Menu = function Menu(props) {\n  _s();\n\n  var images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      closed = _useState3[0],\n      setClosed = _useState3[1];\n\n  var showMenu = function showMenu() {\n    setVisible(true);\n    setClosed(false);\n    document.body.style.overflow = 'hidden';\n  };\n\n  var hideMenu = function hideMenu() {\n    setClosed(true);\n    setVisible(false);\n    document.body.style.overflow = 'visible';\n  };\n\n  var setClassName = function setClassName(name) {\n    if (linkList.indexOf(name) === index) {\n      return 'selected';\n    } else {\n      return 'link';\n    }\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://d13gv6jsteq2nf.cloudfront.net/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var linkList = [['HOME', '../', 400], ['ABOUT', '/about', 600], ['PROJECTS', '/projects/micaela-designs', 800], ['PHOTOGRAPHY', '/photography', 1000], ['CONTACT', '/contact', 1200]];\n  var links = linkList.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: link[1],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": setClassName(link),\n        style: {\n          animationDelay: \"\".concat(link[2], \"ms\")\n        },\n        onMouseEnter: function onMouseEnter() {\n          setIndex(linkList.indexOf(link));\n        },\n        children: link[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 33\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menu\",\n        children: [!props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"whiteMenuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"menuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 71\n        }, _this), !props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"whiteMenuLines\",\n          onClick: showMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"blackMenuLines\",\n          onClick: showMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 12\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: \"X\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 16\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"henryBoxMenu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"henry fradley.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 50\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuPage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"greenBackgroundLines\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"pageList\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            \"class\": \"pages\",\n            children: links\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          distance: \"5vh\",\n          delay: 1000,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"menuPhoto\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                loader: myLoader,\n                src: \"\".concat(images[index], \".jpg\"),\n                alt: \"photo\",\n                width: \"625\",\n                height: \"500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 11\n              }, _this)\n            }, \"\".concat(images[index], \".jpg\"), false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 11\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this) : null, closed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"closed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 17\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"u+58HHkMdWSUTIiQbmUrYgVm6qY=\");\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJwcm9wcyIsImltYWdlcyIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiY2xvc2VkIiwic2V0Q2xvc2VkIiwic2hvd01lbnUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiaGlkZU1lbnUiLCJzZXRDbGFzc05hbWUiLCJuYW1lIiwibGlua0xpc3QiLCJpbmRleE9mIiwibXlMb2FkZXIiLCJzcmMiLCJ3aWR0aCIsInF1YWxpdHkiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJhbmltYXRpb25EZWxheSIsImJsYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUV0QixNQUFNQyxNQUFNLEdBQUcsQ0FBQyxZQUFELEVBQWUsU0FBZixFQUEwQixVQUExQixFQUFzQyxNQUF0QyxFQUE4QyxRQUE5QyxDQUFmOztBQUZzQixrQkFHSUMsc0RBQVEsQ0FBQyxDQUFELENBSFo7QUFBQSxNQUdmQyxLQUhlO0FBQUEsTUFHUkMsUUFIUTs7QUFBQSxtQkFJUUYsc0RBQVEsQ0FBQyxLQUFELENBSmhCO0FBQUEsTUFJZkcsT0FKZTtBQUFBLE1BSU5DLFVBSk07O0FBQUEsbUJBS01KLHNEQUFRLENBQUMsS0FBRCxDQUxkO0FBQUEsTUFLZkssTUFMZTtBQUFBLE1BS1BDLFNBTE87O0FBUXRCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJILGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUUsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBRSxZQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsUUFBL0I7QUFD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QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLEdBa0NDLElBN0VYLEVBK0VHSSxNQUFNLGdCQUFHO0FBQUssZUFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSCxHQUFnQyxJQS9FekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxRkQsQ0FySUQ7O0dBQU1SLEk7O0tBQUFBLEk7QUF1SVNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NZW51LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5cbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBpbWFnZXMgPSBbJ3dpbGhlbG1pbmEnLCAnYnViYmxlcycsICd0cm9sbGluZycsICdyb2NrJywgJ2Nsb3VkcyddO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjbG9zZWQsIHNldENsb3NlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICBjb25zdCBzaG93TWVudSA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgIHNldENsb3NlZChmYWxzZSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gIH07XG5cbiAgY29uc3QgaGlkZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0Q2xvc2VkKHRydWUpO1xuICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcbiAgfTtcblxuXG5cbiAgY29uc3Qgc2V0Q2xhc3NOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGlmIChsaW5rTGlzdC5pbmRleE9mKG5hbWUpID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuICdzZWxlY3RlZCdcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdsaW5rJ1xuICAgIH1cbiAgfVxuXG5cblxuICBjb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xuICAgIHJldHVybiBgaHR0cHM6Ly9kMTNndjZqc3RlcTJuZi5jbG91ZGZyb250Lm5ldC8ke3NyY30/dz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG4gIH1cblxuICBjb25zdCBsaW5rTGlzdCA9IFtbJ0hPTUUnLCAnLi4vJywgNDAwXSwgWydBQk9VVCcsICcvYWJvdXQnLCA2MDBdLCBbJ1BST0pFQ1RTJywgJy9wcm9qZWN0cy9taWNhZWxhLWRlc2lnbnMnLCA4MDBdLCBbJ1BIT1RPR1JBUEhZJywgJy9waG90b2dyYXBoeScsIDEwMDBdLCBbJ0NPTlRBQ1QnLCAnL2NvbnRhY3QnLCAxMjAwXV07XG5cblxuICBjb25zdCBsaW5rcyA9IGxpbmtMaXN0Lm1hcChsaW5rID0+IHtcbiAgICByZXR1cm4gPExpbmsgaHJlZj17bGlua1sxXX0+PGxpIGNsYXNzPXtzZXRDbGFzc05hbWUobGluayl9IHN0eWxlPXt7YW5pbWF0aW9uRGVsYXk6IGAke2xpbmtbMl19bXNgfX0gb25Nb3VzZUVudGVyPXsoKSA9PiB7c2V0SW5kZXgobGlua0xpc3QuaW5kZXhPZihsaW5rKSl9fT57bGlua1swXX08L2xpPjwvTGluaz5cbn0pO1xuXG5cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7IXZpc2libGUgP1xuICAgICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51XCI+XG4gICAgICAgIHshcHJvcHMuYmxhY2sgPyA8cCBjbGFzcz1cIndoaXRlTWVudUhlYWRlclwiPntwcm9wcy5uYW1lfTwvcD4gOiA8cCBjbGFzcz1cIm1lbnVIZWFkZXJcIj57cHJvcHMubmFtZX08L3A+fVxuXG4gICAgICAgIHsvKiB7IXByb3BzLmJsYWNrID9cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNZW51fVxuICAgICAgICAgICAgc3JjPVwiL3doaXRlTWVudS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwibWVudVwiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+IDpcbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNZW51fVxuICAgICAgICAgICAgc3JjPVwiL2JsYWNrTWVudS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwibWVudVwiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+fSAqL31cbiAgICAgICAgICB7LyogeyFwcm9wcy5ibGFjayA/XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVMaW5lc1wiIG9uQ2xpY2s9e3Nob3dNZW51fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aGl0ZU1lbnVcIiBvbkNsaWNrPXtzaG93TWVudX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hpdGVNZW51XCIgb25DbGljaz17c2hvd01lbnV9PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA6XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51TGluZXNcIiBvbkNsaWNrPXtzaG93TWVudX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGFja01lbnVcIiBvbkNsaWNrPXtzaG93TWVudX0+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGFja01lbnVcIiBvbkNsaWNrPXtzaG93TWVudX0+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9ICovfVxuICAgICAgICAgIHshcHJvcHMuYmxhY2sgP1xuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aGl0ZU1lbnVMaW5lc1wiIG9uQ2xpY2s9e3Nob3dNZW51fT5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA6XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGFja01lbnVMaW5lc1wiIG9uQ2xpY2s9e3Nob3dNZW51fT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gOiA8cCBvbkNsaWNrPXtoaWRlTWVudX0gY2xhc3M9XCJtZW51XCI+WDwvcD59XG5cbiAgICAgIHt2aXNpYmxlID9cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGRpdiBjbGFzcz1cImhlbnJ5Qm94TWVudVwiPjxwPmhlbnJ5IGZyYWRsZXkuPC9wPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVQYWdlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuQmFja2dyb3VuZExpbmVzXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZUxpc3RcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdlc1wiPlxuICAgICAgICAgICAge2xpbmtzfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezEwMDB9IGJvdHRvbT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51UGhvdG9cIiBrZXk9e2Ake2ltYWdlc1tpbmRleF19LmpwZ2B9PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgbG9hZGVyPXtteUxvYWRlcn1cbiAgICAgICAgICAgIHNyYz17YCR7aW1hZ2VzW2luZGV4XX0uanBnYH1cbiAgICAgICAgICAgIGFsdD1cInBob3RvXCJcbiAgICAgICAgICAgIHdpZHRoPVwiNjI1XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9GYWRlPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+IDogbnVsbH1cblxuICAgICAge2Nsb3NlZCA/IDxkaXYgY2xhc3M9XCJjbG9zZWRcIj48L2Rpdj4gOiBudWxsfVxuXG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})