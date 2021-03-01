webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects.jsx":
/*!*********************************!*\
  !*** ./components/Projects.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/cjs/index.js\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_projectData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/projectData.js */ \"./data/projectData.js\");\n/* harmony import */ var _data_projectData_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_projectData_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Projects.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar myLoader = function myLoader(_ref) {\n  var src = _ref.src,\n      width = _ref.width,\n      quality = _ref.quality;\n  return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n};\n\nvar Project = function Project(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: props.data.left ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"project\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"highlightImage\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          loader: myLoader,\n          src: \"\".concat(props.data.images[0], \".jpg\"),\n          alt: \"pile\",\n          width: \"800\",\n          height: \"450\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"projectDescription\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: props.data.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: props.data.tech\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/projects/\".concat(props.data.link),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"projectButton\",\n            children: \"VIEW PROJECT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 55\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"projectRight\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"projectDescription\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: props.data.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: props.data.tech\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/projects/\".concat(props.data.link),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"projectButton\",\n            children: \"VIEW PROJECT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 57\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 10\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Project;\n\nvar Projects = function Projects() {\n  var myLoader = function myLoader(_ref2) {\n    var src = _ref2.src,\n        width = _ref2.width,\n        quality = _ref2.quality;\n    return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var data = _data_projectData_js__WEBPACK_IMPORTED_MODULE_4___default.a.data;\n  var list = data.map(function (project) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Project, {\n      data: project\n    }, data.indexOf(project), false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__[\"ParallaxProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"projects\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Featured Projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__[\"Parallax\"], {\n          y: [30, -30],\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"image1\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              loader: myLoader,\n              src: \"plant.jpg\",\n              alt: \"plant\",\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 11\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__[\"Parallax\"], {\n          y: [-20, 20],\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"image2\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              loader: myLoader,\n              \"class\": \"image2\",\n              src: \"surf.jpg\",\n              alt: \"surf\",\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 9\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__[\"Parallax\"], {\n          y: [20, -20],\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"image3\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              loader: myLoader,\n              \"class\": \"image3\",\n              src: \"desk.jpg\",\n              alt: \"desk\",\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 11\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 7\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 8\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this), list]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Project\");\n$RefreshReg$(_c2, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy5qc3g/NmFiMiJdLCJuYW1lcyI6WyJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsIlByb2plY3QiLCJwcm9wcyIsImRhdGEiLCJsZWZ0IiwiaW1hZ2VzIiwibmFtZSIsInRlY2giLCJsaW5rIiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsImxpc3QiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNkI7QUFBQSxNQUExQkMsR0FBMEIsUUFBMUJBLEdBQTBCO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM1QyxvRUFBMkRGLEdBQTNELGdCQUFvRUMsS0FBcEUsZ0JBQStFQyxPQUFPLElBQUksRUFBMUY7QUFDRCxDQUZEOztBQUlBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUV6QixzQkFDRTtBQUFBLGNBQ0dBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLGdCQUNEO0FBQUssZUFBTSxTQUFYO0FBQUEsOEJBQ0U7QUFBSyxpQkFBTSxnQkFBWDtBQUFBLCtCQUNFLHFFQUFDLGlEQUFEO0FBQ0EsZ0JBQU0sRUFBRVAsUUFEUjtBQUVBLGFBQUcsWUFBS0ssS0FBSyxDQUFDQyxJQUFOLENBQVdFLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FBTCxTQUZIO0FBR0EsYUFBRyxFQUFDLE1BSEo7QUFJQSxlQUFLLEVBQUMsS0FKTjtBQUtBLGdCQUFNLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBV0U7QUFBSyxpQkFBTSxvQkFBWDtBQUFBLGdDQUNFO0FBQUEsb0JBQUtILEtB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REFBRDtBQUNJLG9CQUFNLEVBQUVBLFFBRFo7QUFFSSx1QkFBTSxRQUZWO0FBR0ksaUJBQUcsRUFBQyxVQUhSO0FBSUksaUJBQUcsRUFBQyxNQUpSO0FBS0ksb0JBQU0sRUFBQyxNQUxYO0FBTUksdUJBQVMsRUFBQztBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkMsZUE4QkQscUVBQUMsOERBQUQ7QUFBVSxXQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssQ0FBQyxFQUFOLENBQWI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFNLFFBQVg7QUFBQSxtQ0FDRSxxRUFBQyxpREFBRDtBQUNJLG9CQUFNLEVBQUVBLFFBRFo7QUFFSSx1QkFBTSxRQUZWO0FBR0ksaUJBQUcsRUFBQyxVQUhSO0FBSUksaUJBQUcsRUFBQyxNQUpSO0FBS0ksb0JBQU0sRUFBQyxNQUxYO0FBTUksdUJBQVMsRUFBQztBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5QkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBaURHYyxJQWpESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNERCxDQWxFRDs7TUFBTUYsUTtBQXFFU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgUGFyYWxsYXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi4vZGF0YS9wcm9qZWN0RGF0YS5qcyc7XG5cblxuY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgcmV0dXJuIGBodHRwczovL2hlbnJ5LXdlYnNpdGUuczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuXG5jb25zdCBQcm9qZWN0ID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Byb3BzLmRhdGEubGVmdCA/XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGlnaGxpZ2h0SW1hZ2VcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgIHNyYz17YCR7cHJvcHMuZGF0YS5pbWFnZXNbMF19LmpwZ2B9XG4gICAgICAgICAgYWx0PVwicGlsZVwiXG4gICAgICAgICAgd2lkdGg9XCI4MDBcIlxuICAgICAgICAgIGhlaWdodD1cIjQ1MFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3REZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxoMz57cHJvcHMuZGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgPHA+e3Byb3BzLmRhdGEudGVjaH08L3A+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9qZWN0cy8ke3Byb3BzLmRhdGEubGlua31gfT48ZGl2IGNsYXNzPVwicHJvamVjdEJ1dHRvblwiPlZJRVcgUFJPSkVDVDwvZGl2PjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICA6IDxkaXYgY2xhc3M9XCJwcm9qZWN0UmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0RGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxoMz57cHJvcHMuZGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8cD57cHJvcHMuZGF0YS50ZWNofTwvcD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvamVjdHMvJHtwcm9wcy5kYXRhLmxpbmt9YH0+PGRpdiBjbGFzcz1cInByb2plY3RCdXR0b25cIj5WSUVXIFBST0pFQ1Q8L2Rpdj48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWc+PC9pbWc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgfVxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG5cbiAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICByZXR1cm4gYGh0dHBzOi8vaGVucnktd2Vic2l0ZS5zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS8ke3NyY30/dz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG4gIH1cblxuICBjb25zdCBkYXRhID0gcHJvamVjdHMuZGF0YTtcbiAgY29uc3QgbGlzdCA9IGRhdGEubWFwKHByb2plY3QgPT4ge1xuICAgIHJldHVybiA8UHJvamVjdCBkYXRhPXtwcm9qZWN0fSBrZXk9e2RhdGEuaW5kZXhPZihwcm9qZWN0KX0gLz5cbiAgfSlcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQYXJhbGxheFByb3ZpZGVyPlxuICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0c1wiPlxuICAgICAgICA8aDE+RmVhdHVyZWQgUHJvamVjdHM8L2gxPlxuXG5cbiAgICAgIDxQYXJhbGxheCB5PXtbMzAsIC0zMF19PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UxXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XG4gICAgICAgICAgICAgIHNyYz1cInBsYW50LmpwZ1wiXG4gICAgICAgICAgICAgIGFsdD1cInBsYW50XCJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhcmFsbGF4PlxuXG4gICAgICA8UGFyYWxsYXggeT17Wy0yMCwgMjBdfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlMlwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XG4gICAgICAgICAgICBjbGFzcz1cImltYWdlMlwiXG4gICAgICAgICAgICBzcmM9XCJzdXJmLmpwZ1wiXG4gICAgICAgICAgICBhbHQ9XCJzdXJmXCJcbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgLz5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFyYWxsYXg+XG5cbiAgICAgIDxQYXJhbGxheCB5PXtbMjAsIC0yMF19PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UzXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XG4gICAgICAgICAgICAgIGNsYXNzPVwiaW1hZ2UzXCJcbiAgICAgICAgICAgICAgc3JjPVwiZGVzay5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJkZXNrXCJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9QYXJhbGxheD5cblxuICAgIDwvZGl2PlxuICAgIDwvUGFyYWxsYXhQcm92aWRlcj5cbiAgICAgIHtsaXN0fVxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects.jsx\n");

/***/ })

})