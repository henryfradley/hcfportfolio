webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/Form.jsx":
/*!*****************************!*\
  !*** ./components/Form.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_henryfradley_personalProjects_hcfportfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/components/Form.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_henryfradley_personalProjects_hcfportfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar Form = function Form(props) {\n  _s();\n\n  var _jsxDEV2;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    name: '',\n    email: '',\n    text: ''\n  }),\n      message = _useState[0],\n      writeMessage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      submitted = _useState2[0],\n      setSubmit = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      hover = _useState3[0],\n      setHover = _useState3[1];\n\n  var handleNameChange = function handleNameChange(event) {\n    event.persist();\n    writeMessage(function (values) {\n      return _objectSpread(_objectSpread({}, values), {}, {\n        name: event.target.value\n      });\n    });\n  };\n\n  var handleEmailChange = function handleEmailChange(event) {\n    event.persist();\n    writeMessage(function (values) {\n      return _objectSpread(_objectSpread({}, values), {}, {\n        email: event.target.value\n      });\n    });\n  };\n\n  var handleTextChange = function handleTextChange(event) {\n    event.persist();\n    writeMessage(function (values) {\n      return _objectSpread(_objectSpread({}, values), {}, {\n        text: event.target.value\n      });\n    });\n  };\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_4___default()({\n      method: 'POST',\n      url: '/send',\n      data: {\n        name: message.name,\n        email: message.email,\n        message: message.text\n      }\n    });\n    setSubmit(true);\n  };\n\n  var toggleHover = function toggleHover() {\n    setHover(!hover);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: submitted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      \"class\": \"form\",\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        required: true,\n        onChange: handleNameChange,\n        value: message.name,\n        name: \"name\",\n        type: \"text\",\n        placeholder: \"Your Name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", (_jsxDEV2 = {\n        required: true,\n        onChange: handleEmailChange,\n        value: message.email,\n        type: \"email\",\n        name: \"email\"\n      }, Object(_Users_henryfradley_personalProjects_hcfportfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_jsxDEV2, \"type\", \"email\"), Object(_Users_henryfradley_personalProjects_hcfportfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_jsxDEV2, \"placeholder\", \"Email\"), _jsxDEV2), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        required: true,\n        onChange: handleTextChange,\n        value: message.text,\n        name: \"message\",\n        placeholder: \"Type your message here...\",\n        \"class\": \"big\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        \"class\": hover ? \"send\" : \"sendFill\",\n        onMouseEnter: toggleHover,\n        onMouseLeave: toggleHover,\n        type: \"submit\",\n        value: \"SEND\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"thanks\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"thanksBox\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Thanks for messaging! Talk to you soon\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Form, \"x3A1xKy0JeWFiwn3jl5F7W6uGGE=\");\n\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzeD83MzI0Il0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwidGV4dCIsIm1lc3NhZ2UiLCJ3cml0ZU1lc3NhZ2UiLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXQiLCJob3ZlciIsInNldEhvdmVyIiwiaGFuZGxlTmFtZUNoYW5nZSIsImV2ZW50IiwicGVyc2lzdCIsInZhbHVlcyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVUZXh0Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJ0b2dnbGVIb3ZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQTs7QUFBQSxrQkFHVUMsc0RBQVEsQ0FBQztBQUN2Q0MsUUFBSSxFQUFFLEVBRGlDO0FBRXZDQyxTQUFLLEVBQUUsRUFGZ0M7QUFHdkNDLFFBQUksRUFBRTtBQUhpQyxHQUFELENBSGxCO0FBQUEsTUFHZkMsT0FIZTtBQUFBLE1BR05DLFlBSE07O0FBQUEsbUJBU1NMLHNEQUFRLENBQUMsS0FBRCxDQVRqQjtBQUFBLE1BU2ZNLFNBVGU7QUFBQSxNQVNKQyxTQVRJOztBQUFBLG1CQVdNUCxzREFBUSxDQUFDLElBQUQsQ0FYZDtBQUFBLE1BV2RRLEtBWGM7QUFBQSxNQVdQQyxRQVhPOztBQWN0QixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUNsQ0EsU0FBSyxDQUFDQyxPQUFOO0FBQ0FQLGdCQUFZLENBQUMsVUFBQ1EsTUFBRDtBQUFBLDZDQUNSQSxNQURRO0FBRVhaLFlBQUksRUFBRVUsS0FB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RlNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb3JtLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuXG5jb25zdCBGb3JtID0gKHByb3BzKSA9PiB7XG5cblxuICBjb25zdCBbbWVzc2FnZSwgd3JpdGVNZXNzYWdlXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgdGV4dDogJydcbiAgfSk7XG5cbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbIGhvdmVyLCBzZXRIb3ZlciBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cblxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucGVyc2lzdCgpO1xuICAgIHdyaXRlTWVzc2FnZSgodmFsdWVzKSA9PiAoe1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICB3cml0ZU1lc3NhZ2UoKHZhbHVlcykgPT4gKHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgd3JpdGVNZXNzYWdlKCh2YWx1ZXMpID0+ICh7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICB0ZXh0OiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvc2VuZCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IG1lc3NhZ2UubmFtZSxcbiAgICAgICAgZW1haWw6IG1lc3NhZ2UuZW1haWwsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UudGV4dCxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgc2V0U3VibWl0KHRydWUpO1xuXG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlSG92ZXIgPSAoKSA9PiB7XG4gICAgc2V0SG92ZXIoIWhvdmVyKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7c3VibWl0dGVkID9cbiAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aW5wdXQgcmVxdWlyZWQgb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9IHZhbHVlPXttZXNzYWdlLm5hbWV9IG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCByZXF1aXJlZCBvbkNoYW5nZT17aGFuZGxlRW1haWxDaGFuZ2V9IHZhbHVlPXttZXNzYWdlLmVtYWlsfSB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCI+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHJlcXVpcmVkIG9uQ2hhbmdlPXtoYW5kbGVUZXh0Q2hhbmdlfSB2YWx1ZT17bWVzc2FnZS50ZXh0fSBuYW1lPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UgaGVyZS4uLlwiIGNsYXNzPVwiYmlnXCI+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IGNsYXNzPXtob3ZlciA/IFwic2VuZFwiIDogXCJzZW5kRmlsbFwifSBvbk1vdXNlRW50ZXI9e3RvZ2dsZUhvdmVyfSBvbk1vdXNlTGVhdmU9e3RvZ2dsZUhvdmVyfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTRU5EXCI+PC9pbnB1dD5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDpcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aGFua3NcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhhbmtzQm94XCI+XG4gICAgICAgICAgPGgxPlRoYW5rcyBmb3IgbWVzc2FnaW5nISBUYWxrIHRvIHlvdSBzb29uPC9oMT5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICA8L2Rpdj59XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form.jsx\n");

/***/ })

})