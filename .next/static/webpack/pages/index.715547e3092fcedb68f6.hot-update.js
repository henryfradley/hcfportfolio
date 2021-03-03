webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects.jsx":
/*!*********************************!*\
  !*** ./components/Projects.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/cjs/index.js\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_projectData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/projectData.js */ \"./data/projectData.js\");\n/* harmony import */ var _data_projectData_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_projectData_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Projects.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar myLoader = function myLoader(_ref) {\n  var src = _ref.src,\n      width = _ref.width,\n      quality = _ref.quality;\n  return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n};\n\nvar Project = function Project(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(true),\n      hover = _useState[0],\n      setHover = _useState[1];\n\n  var toggleHover = function toggleHover() {\n    setHover(!hover);\n  };\n\n  var arrow = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    src: \"/whiteRightArrow.png\",\n    alt: \"rightArrow\",\n    layout: \"fill\",\n    objectFit: \"contain\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 17\n  }, _this);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: props.data.left ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"project\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"highlightImage\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          distance: \"5vh\",\n          delay: 500,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            loader: myLoader,\n            src: \"\".concat(props.data.images[0], \".png\"),\n            alt: \"highlight\" // layout=\"fill\"\n            // objectFit=\"contain\"\n            ,\n            width: \"600\",\n            height: \"337.5\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"projectDescription\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          distance: \"5vh\",\n          delay: 500,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: props.data.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          distance: \"5vh\",\n          delay: 700,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: props.data.tech\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": hover ? \"moveBack\" : \"move\",\n          onMouseEnter: toggleHover,\n          onMouseLeave: toggleHover,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            distance: \"5vh\",\n            delay: 900,\n            bottom: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"projectArrow\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                href: \"/projects/\".concat(props.data.link),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  \"class\": \"arrow\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n                    src: \"/viewProject.png\",\n                    width: \"243.5\",\n                    height: \"26\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 63,\n                    columnNumber: 15\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 15\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 13\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 11\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"projectRight\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"projectDescription\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          distance: \"5vh\",\n          delay: 500,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: props.data.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          distance: \"5vh\",\n          delay: 700,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: props.data.tech\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": hover ? \"moveBack\" : \"move\",\n          onMouseEnter: toggleHover,\n          onMouseLeave: toggleHover,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            distance: \"5vh\",\n            delay: 1100,\n            bottom: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"projectArrow\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                href: \"/projects/\".concat(props.data.link),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n                  src: \"/viewProject.png\",\n                  width: \"243.5\",\n                  height: \"26\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 104,\n                  columnNumber: 15\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 13\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 11\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"highlightImage\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          distance: \"5vh\",\n          delay: 1100,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            loader: myLoader,\n            src: \"\".concat(props.data.images[0], \".png\"),\n            alt: \"highlight\" // layout=\"fill\"\n            // objectFit=\"contain\"\n            ,\n            width: \"350\",\n            height: \"500\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 10\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Project, \"fQtRpRCHcF2d2Dtbqyfx0Zp4GUo=\");\n\n_c = Project;\n\nvar Projects = function Projects() {\n  _s2();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    document.body.style.overflow = 'visible';\n  });\n\n  var myLoader = function myLoader(_ref2) {\n    var src = _ref2.src,\n        width = _ref2.width,\n        quality = _ref2.quality;\n    return \"https://henry-website.s3-us-west-1.amazonaws.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n  };\n\n  var data = _data_projectData_js__WEBPACK_IMPORTED_MODULE_4___default.a.data;\n  var list = data.map(function (project) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Project, {\n      data: project\n    }, data.indexOf(project), false, {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"projects\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        distance: \"5vh\",\n        delay: 500,\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Featured Projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 170,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 169,\n        columnNumber: 8\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"image1\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          distance: \"5vh\",\n          delay: 900,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            loader: myLoader,\n            src: \"plant.jpg\",\n            alt: \"plant\" // layout=\"fill\"\n            // objectFit=\"contain\"\n            ,\n            width: \"640\",\n            height: \"640\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 179,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 178,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 177,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"image2\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          distance: \"5vh\",\n          delay: 700,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            loader: myLoader,\n            \"class\": \"image2\",\n            src: \"surf.jpg\",\n            alt: \"surf\" // layout=\"fill\"\n            // objectFit=\"contain\"\n            ,\n            width: \"640\",\n            height: \"640\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 206,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 205,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 204,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"image3\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          distance: \"5vh\",\n          delay: 700,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            loader: myLoader,\n            \"class\": \"image3\",\n            src: \"desk.jpg\",\n            alt: \"desk\" // layout=\"fill\"\n            // objectFit=\"contain\"\n            ,\n            width: \"640\",\n            height: \"640\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 229,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 228,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 227,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 8\n    }, _this), list]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 166,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c2 = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Project\");\n$RefreshReg$(_c2, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy5qc3g/NmFiMiJdLCJuYW1lcyI6WyJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsIlByb2plY3QiLCJwcm9wcyIsInVzZVN0YXRlIiwiaG92ZXIiLCJzZXRIb3ZlciIsInRvZ2dsZUhvdmVyIiwiYXJyb3ciLCJkYXRhIiwibGVmdCIsImltYWdlcyIsIm5hbWUiLCJ0ZWNoIiwibGluayIsIlByb2plY3RzIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInByb2plY3RzIiwibGlzdCIsIm1hcCIsInByb2plY3QiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNkI7QUFBQSxNQUExQkMsR0FBMEIsUUFBMUJBLEdBQTBCO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM1QyxvRUFBMkRGLEdBQTNELGdCQUFvRUMsS0FBcEUsZ0JBQStFQyxPQUFPLElBQUksRUFBMUY7QUFDRCxDQUZEOztBQUlBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVHQyxzREFBUSxDQUFDLElBQUQsQ0FGWDtBQUFBLE1BRWpCQyxLQUZpQjtBQUFBLE1BRVZDLFFBRlU7O0FBR3pCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELFlBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1HLEtBQUssZ0JBQUcscUVBQUMsaURBQUQ7QUFDZCxPQUFHLEVBQUMsc0JBRFU7QUFFZCxPQUFHLEVBQUMsWUFGVTtBQUdkLFVBQU0sRUFBQyxNQUhP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QUNBO0FBTko7QUFPSSxpQkFBSyxFQUFDLEtBUFY7QUFRSSxrQkFBTSxFQUFDO0FBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZILEVBbUZHd0IsSUFuRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3RkQsQ0F6R0Q7O0lBQU1QLFE7O01BQUFBLFE7QUE0R1NBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0cy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IFBhcmFsbGF4UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4uL2RhdGEvcHJvamVjdERhdGEuanMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuXG5cbmNvbnN0IG15TG9hZGVyID0gKHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9KSA9PiB7XG4gIHJldHVybiBgaHR0cHM6Ly9oZW5yeS13ZWJzaXRlLnMzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tLyR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cblxuY29uc3QgUHJvamVjdCA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFsgaG92ZXIsIHNldEhvdmVyIF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgdG9nZ2xlSG92ZXIgPSAoKSA9PiB7XG4gICAgc2V0SG92ZXIoIWhvdmVyKTtcbiAgfTtcblxuICBjb25zdCBhcnJvdyA9IDxJbWFnZVxuICBzcmM9XCIvd2hpdGVSaWdodEFycm93LnBuZ1wiXG4gIGFsdD1cInJpZ2h0QXJyb3dcIlxuICBsYXlvdXQ9XCJmaWxsXCJcbiAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gIC8+XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cHJvcHMuZGF0YS5sZWZ0ID9cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoaWdobGlnaHRJbWFnZVwiPlxuICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXs1MDB9IGJvdHRvbT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgIHNyYz17YCR7cHJvcHMuZGF0YS5pbWFnZXNbMF19LnBuZ2B9XG4gICAgICAgICAgYWx0PVwiaGlnaGxpZ2h0XCJcbiAgICAgICAgICAvLyBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAvLyBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICB3aWR0aD1cIjYwMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzM3LjVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3REZXNjcmlwdGlvblwiPlxuICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXs1MDB9IGJvdHRvbT5cbiAgICAgICAgICA8aDM+e3Byb3BzLmRhdGEubmFtZX08L2gzPlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezcwMH0gYm90dG9tPlxuICAgICAgICAgIDxwPntwcm9wcy5kYXRhLnRlY2h9PC9wPlxuICAgICAgICA8L0ZhZGU+XG5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9e2hvdmVyID8gXCJtb3ZlQmFja1wiIDogXCJtb3ZlXCJ9IG9uTW91c2VFbnRlcj17dG9nZ2xlSG92ZXJ9XG4gICAgICBvbk1vdXNlTGVhdmU9e3RvZ2dsZUhvdmVyfT5cbiAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17OTAwfSBib3R0b20+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RBcnJvd1wiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9qZWN0cy8ke3Byb3BzLmRhdGEubGlua31gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFycm93XCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmlld1Byb2plY3QucG5nXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyNDMuNVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjI2XCJcbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8L0xpbms+XG5cblxuXG5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRmFkZT5cblxuICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgIDogPGRpdiBjbGFzcz1cInByb2plY3RSaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3REZXNjcmlwdGlvblwiPlxuICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXs1MDB9IGJvdHRvbT5cbiAgICAgICAgICA8aDM+e3Byb3BzLmRhdGEubmFtZX08L2gzPlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezcwMH0gYm90dG9tPlxuICAgICAgICAgIDxwPntwcm9wcy5kYXRhLnRlY2h9PC9wPlxuICAgICAgICA8L0ZhZGU+XG5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9e2hvdmVyID8gXCJtb3ZlQmFja1wiIDogXCJtb3ZlXCJ9IG9uTW91c2VFbnRlcj17dG9nZ2xlSG92ZXJ9XG4gICAgICBvbk1vdXNlTGVhdmU9e3RvZ2dsZUhvdmVyfT5cbiAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17MTEwMH0gYm90dG9tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0QXJyb3dcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvamVjdHMvJHtwcm9wcy5kYXRhLmxpbmt9YH0+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmlld1Byb2plY3QucG5nXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyNDMuNVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjI2XCJcbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9MaW5rPlxuXG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0ZhZGU+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuXG5cblxuXG5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGlnaGxpZ2h0SW1hZ2VcIj5cbiAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17MTEwMH0gYm90dG9tPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XG4gICAgICAgICAgc3JjPXtgJHtwcm9wcy5kYXRhLmltYWdlc1swXX0ucG5nYH1cbiAgICAgICAgICBhbHQ9XCJoaWdobGlnaHRcIlxuICAgICAgICAgIC8vIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgIC8vIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIHdpZHRoPVwiMzUwXCJcbiAgICAgICAgICBoZWlnaHQ9XCI1MDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgfVxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXG4gIH0pO1xuXG5cbiAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICByZXR1cm4gYGh0dHBzOi8vaGVucnktd2Vic2l0ZS5zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS8ke3NyY30/dz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG4gIH1cblxuICBjb25zdCBkYXRhID0gcHJvamVjdHMuZGF0YTtcbiAgY29uc3QgbGlzdCA9IGRhdGEubWFwKHByb2plY3QgPT4ge1xuICAgIHJldHVybiA8UHJvamVjdCBkYXRhPXtwcm9qZWN0fSBrZXk9e2RhdGEuaW5kZXhPZihwcm9qZWN0KX0gLz5cbiAgfSlcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cblxuICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0c1wiPlxuICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezUwMH0gYm90dG9tPlxuICAgICAgICA8aDE+RmVhdHVyZWQgUHJvamVjdHM8L2gxPlxuICAgICAgIDwvRmFkZT5cblxuXG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZTFcIj5cbiAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17OTAwfSBib3R0b20+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgICAgICAgIHNyYz1cInBsYW50LmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwicGxhbnRcIlxuICAgICAgICAgICAgICAgIC8vIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgIC8vIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2NDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICA8L2Rpdj5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZTJcIj5cbiAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17NzAwfSBib3R0b20+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW1hZ2UyXCJcbiAgICAgICAgICAgICAgICBzcmM9XCJzdXJmLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwic3VyZlwiXG4gICAgICAgICAgICAgICAgLy8gbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI2NDBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjY0MFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgIDwvRmFkZT5cblxuICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG5cblxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlM1wiPlxuICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXs3MDB9IGJvdHRvbT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbWFnZTNcIlxuICAgICAgICAgICAgICAgIHNyYz1cImRlc2suanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJkZXNrXCJcbiAgICAgICAgICAgICAgICAvLyBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAvLyBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjY0MFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNjQwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Rpdj5cblxuXG5cblxuXG5cbiAgICA8L2Rpdj5cblxuICAgICAge2xpc3R9XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects.jsx\n");

/***/ })

})