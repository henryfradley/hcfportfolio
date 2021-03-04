webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Menu.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Menu = function Menu(props) {\n  _s();\n\n  var images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      closed = _useState3[0],\n      setClosed = _useState3[1];\n\n  var showMenu = function showMenu() {\n    setVisible(true);\n    setClosed(false);\n    document.body.style.overflow = 'hidden';\n  };\n\n  var hideMenu = function hideMenu() {\n    setClosed(true);\n    setVisible(false);\n    document.body.style.overflow = 'visible';\n  };\n\n  var setClassName = function setClassName(name) {\n    if (linkList.indexOf(name) === index) {\n      return 'selected';\n    } else {\n      return 'link';\n    }\n  };\n\n  var myLoader = function myLoader(_ref) {\n    var src = _ref.src,\n        width = _ref.width,\n        quality = _ref.quality;\n    return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var linkList = [['HOME', '../', 400], ['ABOUT', '/about', 500], ['PROJECTS', '/projects/micaela-designs', 600], ['PHOTOGRAPHY', '/photography', 700], ['CONTACT', '/contact', 800]]; // const links = linkList.map(link => {\n  //     return <Fade distance=\"5vh\" delay={link[2]} bottom>\n  //     <Link href={link[1]}><li class={setClassName(link)} onMouseEnter={() => {setIndex(linkList.indexOf(link))}}>{link[0]}</li></Link></Fade>\n  // });\n\n  var links = linkList.map(function (link) {\n    return;\n\n    /*#__PURE__*/\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: link[1],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": setClassName(link),\n        onMouseEnter: function onMouseEnter() {\n          setIndex(linkList.indexOf(link));\n        },\n        children: link[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 26\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [!visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menu\",\n        children: [!props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"whiteMenuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"menuHeader\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 71\n        }, _this), !props.black ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          onClick: showMenu,\n          src: \"/whiteMenu.png\",\n          alt: \"menu\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          onClick: showMenu,\n          src: \"/blackMenu.png\",\n          alt: \"menu\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: hideMenu,\n      \"class\": \"menu\",\n      children: \"X\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 22\n    }, _this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"henryBoxMenu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"henry fradley.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 50\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"menuPage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"greenBackgroundLines\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"pageList\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            \"class\": \"pages\",\n            children: links\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          distance: \"5vh\",\n          delay: 1200,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"menuPhoto\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n              loader: myLoader,\n              src: \"\".concat(images[index], \".jpg\"),\n              alt: \"photo\",\n              width: \"625\",\n              height: \"500\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 11\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this) : null, closed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"closed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menu, \"u+58HHkMdWSUTIiQbmUrYgVm6qY=\");\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzeD9mOWNlIl0sIm5hbWVzIjpbIk1lbnUiLCJwcm9wcyIsImltYWdlcyIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiY2xvc2VkIiwic2V0Q2xvc2VkIiwic2hvd01lbnUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiaGlkZU1lbnUiLCJzZXRDbGFzc05hbWUiLCJuYW1lIiwibGlua0xpc3QiLCJpbmRleE9mIiwibXlMb2FkZXIiLCJzcmMiLCJ3aWR0aCIsInF1YWxpdHkiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJibGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFdEIsTUFBTUMsTUFBTSxHQUFHLENBQUMsWUFBRCxFQUFlLFNBQWYsRUFBMEIsVUFBMUIsRUFBc0MsTUFBdEMsRUFBOEMsUUFBOUMsQ0FBZjs7QUFGc0Isa0JBR0lDLHNEQUFRLENBQUMsQ0FBRCxDQUhaO0FBQUEsTUFHZkMsS0FIZTtBQUFBLE1BR1JDLFFBSFE7O0FBQUEsbUJBSVFGLHNEQUFRLENBQUMsS0FBRCxDQUpoQjtBQUFBLE1BSWZHLE9BSmU7QUFBQSxNQUlOQyxVQUpNOztBQUFBLG1CQUtNSixzREFBUSxDQUFDLEtBQUQsQ0FMZDtBQUFBLE1BS2ZLLE1BTGU7QUFBQSxNQUtQQyxTQUxPOztBQVF0QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCSCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLGFBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUUsWUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCLFFBQS9CO0FBQ0QsR0FKRDs7QUFNQSxNQUFN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RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLEdBa0NOLElBMURKLEVBOERFSSxNQUFNLGdCQUNOO0FBQUssZUFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETSxHQUVKLElBaEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhGO0FBMkVELENBbElEOztHQUFNUixJOztLQUFBQSxJO0FBb0lTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWVudS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgaW1hZ2VzID0gWyd3aWxoZWxtaW5hJywgJ2J1YmJsZXMnLCAndHJvbGxpbmcnLCAncm9jaycsICdjbG91ZHMnXTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2xvc2VkLCBzZXRDbG9zZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgY29uc3Qgc2hvd01lbnUgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICBzZXRDbG9zZWQoZmFsc2UpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICB9O1xuXG4gIGNvbnN0IGhpZGVNZW51ID0gKCkgPT4ge1xuICAgIHNldENsb3NlZCh0cnVlKTtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXG4gIH07XG5cblxuXG4gIGNvbnN0IHNldENsYXNzTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAobGlua0xpc3QuaW5kZXhPZihuYW1lKSA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiAnc2VsZWN0ZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbGluaydcbiAgICB9XG4gIH1cblxuXG5cbiAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICByZXR1cm4gYGh0dHBzOi8vaGVucnktd2Vic2l0ZS5zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS8ke3NyY30/dz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG4gIH1cblxuICBjb25zdCBsaW5rTGlzdCA9IFtbJ0hPTUUnLCAnLi4vJywgNDAwXSwgWydBQk9VVCcsICcvYWJvdXQnLCA1MDBdLCBbJ1BST0pFQ1RTJywgJy9wcm9qZWN0cy9taWNhZWxhLWRlc2lnbnMnLCA2MDBdLCBbJ1BIT1RPR1JBUEhZJywgJy9waG90b2dyYXBoeScsIDcwMF0sIFsnQ09OVEFDVCcsICcvY29udGFjdCcsIDgwMF1dO1xuXG5cblxuICAvLyBjb25zdCBsaW5rcyA9IGxpbmtMaXN0Lm1hcChsaW5rID0+IHtcbiAgLy8gICAgIHJldHVybiA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXtsaW5rWzJdfSBib3R0b20+XG4gIC8vICAgICA8TGluayBocmVmPXtsaW5rWzFdfT48bGkgY2xhc3M9e3NldENsYXNzTmFtZShsaW5rKX0gb25Nb3VzZUVudGVyPXsoKSA9PiB7c2V0SW5kZXgobGlua0xpc3QuaW5kZXhPZihsaW5rKSl9fT57bGlua1swXX08L2xpPjwvTGluaz48L0ZhZGU+XG4gIC8vIH0pO1xuXG4gIGNvbnN0IGxpbmtzID0gbGlua0xpc3QubWFwKGxpbmsgPT4ge1xuICAgIHJldHVyblxuICAgIDxMaW5rIGhyZWY9e2xpbmtbMV19PjxsaSBjbGFzcz17c2V0Q2xhc3NOYW1lKGxpbmspfSBvbk1vdXNlRW50ZXI9eygpID0+IHtzZXRJbmRleChsaW5rTGlzdC5pbmRleE9mKGxpbmspKX19PntsaW5rWzBdfTwvbGk+PC9MaW5rPlxufSk7XG5cblxuXG5cblxuXG4gIHJldHVybiAoXG5cblxuICAgIDxkaXY+XG5cbiAgICAgIHshdmlzaWJsZSA/XG4gICAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgeyFwcm9wcy5ibGFjayA/IDxwIGNsYXNzPVwid2hpdGVNZW51SGVhZGVyXCI+e3Byb3BzLm5hbWV9PC9wPiA6IDxwIGNsYXNzPVwibWVudUhlYWRlclwiPntwcm9wcy5uYW1lfTwvcD59XG5cbiAgICAgICAgeyFwcm9wcy5ibGFjayA/IDxJbWFnZVxuICAgICAgICAgICAgb25DbGljaz17c2hvd01lbnV9XG4gICAgICAgICAgICBzcmM9XCIvd2hpdGVNZW51LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJtZW51XCJcbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgLz4gOlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgb25DbGljaz17c2hvd01lbnV9XG4gICAgICAgICAgICBzcmM9XCIvYmxhY2tNZW51LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJtZW51XCJcbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICA8L2Rpdj48L2Rpdj4gOiA8cCBvbkNsaWNrPXtoaWRlTWVudX0gY2xhc3M9XCJtZW51XCI+WDwvcD59XG5cbiAgICAgIHt2aXNpYmxlID9cbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48ZGl2IGNsYXNzPVwiaGVucnlCb3hNZW51XCI+PHA+aGVucnkgZnJhZGxleS48L3A+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudVBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuQmFja2dyb3VuZExpbmVzXCI+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlTGlzdFwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2VzXCI+XG4gICAgICAgICAgICB7bGlua3N9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17MTIwMH0gYm90dG9tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51UGhvdG9cIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XG4gICAgICAgICAgICBzcmM9e2Ake2ltYWdlc1tpbmRleF19LmpwZ2B9XG4gICAgICAgICAgICBhbHQ9XCJwaG90b1wiXG4gICAgICAgICAgICB3aWR0aD1cIjYyNVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GYWRlPlxuXG5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgOiBudWxsXG4gICAgICB9XG5cbiAgICAgIHtcbiAgICAgIGNsb3NlZCA/XG4gICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VkXCI+PC9kaXY+XG4gICAgICA6IG51bGxcbiAgICAgIH1cblxuXG5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n");

/***/ })

})