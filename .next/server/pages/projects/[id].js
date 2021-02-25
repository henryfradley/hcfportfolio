module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/projects/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/projectDetails.js":
/*!********************************!*\
  !*** ./data/projectDetails.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  'micaela-designs': {\n    name: 'Micaela Designs',\n    details: 'This project.... blah bla blah.... wefhwf ewif hiwhfehw fihewi fhewif uiewhf iuewhf ewiuhfi uewhfuih wifuhwfihe fiuw ehfiuw',\n    images: ['1.jpg', '2.jpg', '3.jpg'],\n    tech: 'React, Node.js, SASS'\n  },\n  'swell-tracker': {\n    name: 'SwellTracker',\n    details: 'This project.... blah bla blah.... wefhwfewifhiwhfehw fihewifh ewifuiew hfiuewhfe wiuhfiue whfuihwifu hwfihef iuwehfiuw',\n    images: ['1.jpg', '2.jpg', '3.jpg'],\n    tech: 'React, Node.js, SASS'\n  },\n  'relax': {\n    name: 'Relax',\n    details: 'This project.... blah bla blah.... wefhwfewifhiwhfehwfihewifhewifuiewhfiuewhfewiuhfiuewhfuihwifuhwfihefiuwehfiuw',\n    images: ['1.jpg', '2.jpg', '3.jpg'],\n    tech: 'React, Node.js, SASS'\n  },\n  'help-our-home': {\n    name: 'Help Our Home',\n    details: 'This project.... blah bla blah.... wefhwfewifhiwhfehwfihewifhewifuiewhfiuewhfewiuhfiuewhfuihwifuhwfihefiuwehfiuw',\n    images: ['1.jpg', '2.jpg', '3.jpg'],\n    tech: 'React, Node.js, SASS'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL3Byb2plY3REZXRhaWxzLmpzP2ZiNTQiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJkZXRhaWxzIiwiaW1hZ2VzIiwidGVjaCJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmLHFCQUFtQjtBQUNqQkMsUUFBSSxFQUFFLGlCQURXO0FBRWpCQyxXQUFPLEVBQUUsNkhBRlE7QUFHakJDLFVBQU0sRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLENBSFM7QUFJakJDLFFBQUksRUFBRTtBQUpXLEdBREo7QUFPZixtQkFBaUI7QUFDZkgsUUFBSSxFQUFFLGNBRFM7QUFFZkMsV0FBTyxFQUFFLHlIQUZNO0FBR2ZDLFVBQU0sRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLENBSE87QUFJZkMsUUFBSSxFQUFFO0FBSlMsR0FQRjtBQWFmLFdBQVM7QUFDUEgsUUFBSSxFQUFFLE9BREM7QUFFUEMsV0FBTyxFQUFFLGtIQUZGO0FBR1BDLFVBQU0sRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLENBSEQ7QUFJUEMsUUFBSSxFQUFFO0FBSkMsR0FiTTtBQW1CZixtQkFBaUI7QUFDZkgsUUFBSSxFQUFFLGVBRFM7QUFFZkMsV0FBTyxFQUFFLGtIQUZNO0FBR2ZDLFVBQU0sRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLENBSE87QUFJZkMsUUFBSSxFQUFFO0FBSlM7QUFuQkYsQ0FBakIiLCJmaWxlIjoiLi9kYXRhL3Byb2plY3REZXRhaWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICdtaWNhZWxhLWRlc2lnbnMnOiB7XG4gICAgbmFtZTogJ01pY2FlbGEgRGVzaWducycsXG4gICAgZGV0YWlsczogJ1RoaXMgcHJvamVjdC4uLi4gYmxhaCBibGEgYmxhaC4uLi4gd2VmaHdmIGV3aWYgaGl3aGZlaHcgZmloZXdpIGZoZXdpZiB1aWV3aGYgaXVld2hmIGV3aXVoZmkgdWV3aGZ1aWggd2lmdWh3ZmloZSBmaXV3IGVoZml1dycsXG4gICAgaW1hZ2VzOiBbJzEuanBnJywgJzIuanBnJywgJzMuanBnJ10sXG4gICAgdGVjaDogJ1JlYWN0LCBOb2RlLmpzLCBTQVNTJ1xuICB9LFxuICAnc3dlbGwtdHJhY2tlcic6IHtcbiAgICBuYW1lOiAnU3dlbGxUcmFja2VyJyxcbiAgICBkZXRhaWxzOiAnVGhpcyBwcm9qZWN0Li4uLiBibGFoIGJsYSBibGFoLi4uLiB3ZWZod2Zld2lmaGl3aGZlaHcgZmloZXdpZmggZXdpZnVpZXcgaGZpdWV3aGZlIHdpdWhmaXVlIHdoZnVpaHdpZnUgaHdmaWhlZiBpdXdlaGZpdXcnLFxuICAgIGltYWdlczogWycxLmpwZycsICcyLmpwZycsICczLmpwZyddLFxuICAgIHRlY2g6ICdSZWFjdCwgTm9kZS5qcywgU0FTUydcbiAgfSxcbiAgJ3JlbGF4Jzoge1xuICAgIG5hbWU6ICdSZWxheCcsXG4gICAgZGV0YWlsczogJ1RoaXMgcHJvamVjdC4uLi4gYmxhaCBibGEgYmxhaC4uLi4gd2VmaHdmZXdpZmhpd2hmZWh3ZmloZXdpZmhld2lmdWlld2hmaXVld2hmZXdpdWhmaXVld2hmdWlod2lmdWh3ZmloZWZpdXdlaGZpdXcnLFxuICAgIGltYWdlczogWycxLmpwZycsICcyLmpwZycsICczLmpwZyddLFxuICAgIHRlY2g6ICdSZWFjdCwgTm9kZS5qcywgU0FTUycsXG4gIH0sXG4gICdoZWxwLW91ci1ob21lJzoge1xuICAgIG5hbWU6ICdIZWxwIE91ciBIb21lJyxcbiAgICBkZXRhaWxzOiAnVGhpcyBwcm9qZWN0Li4uLiBibGFoIGJsYSBibGFoLi4uLiB3ZWZod2Zld2lmaGl3aGZlaHdmaWhld2lmaGV3aWZ1aWV3aGZpdWV3aGZld2l1aGZpdWV3aGZ1aWh3aWZ1aHdmaWhlZml1d2VoZml1dycsXG4gICAgaW1hZ2VzOiBbJzEuanBnJywgJzIuanBnJywgJzMuanBnJ10sXG4gICAgdGVjaDogJ1JlYWN0LCBOb2RlLmpzLCBTQVNTJ1xuICB9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/projectDetails.js\n");

/***/ }),

/***/ "./pages/projects/[id].js":
/*!********************************!*\
  !*** ./pages/projects/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_projectDetails_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/projectDetails.js */ \"./data/projectDetails.js\");\n/* harmony import */ var _data_projectDetails_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_projectDetails_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/hcfportfolio/pages/projects/[id].js\";\n\n\n\nconst Project = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    id\n  } = router.query;\n  const data = _data_projectDetails_js__WEBPACK_IMPORTED_MODULE_2___default.a[id];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    class: \"projectPage\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      class: \"whiteBackgroundLines\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      class: \"henryBoxWhite\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"henry fradley.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      class: \"projectInfo\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: data.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: \"Overview\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: data.details\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        class: \"projectTools\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: \"Tools\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: data.tech\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          class: \"livesite\",\n          children: \"LIVE SITE\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy8uanM/ZGEwNyJdLCJuYW1lcyI6WyJQcm9qZWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImRhdGEiLCJwcm9qZWN0cyIsIm5hbWUiLCJkZXRhaWxzIiwidGVjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNwQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVNGLE1BQU0sQ0FBQ0csS0FBdEI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLDhEQUFRLENBQUNILEVBQUQsQ0FBckI7QUFFQSxzQkFDRTtBQUFLLFNBQUssRUFBQyxhQUFYO0FBQUEsNEJBQ0U7QUFBSyxXQUFLLEVBQUMsc0JBQVg7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQUssV0FBSyxFQUFDLGVBQVg7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFVRTtBQUFLLFdBQUssRUFBQyxhQUFYO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLRSxJQUFJLENBQUNFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBQSxvQkFBSUYsSUFBSSxDQUFDRztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUU7QUFBSyxhQUFLLEVBQUMsY0FBWDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSxvQkFBS0gsSUFBSSxDQUFDSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFLLGVBQUssRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE0QkQsQ0FqQ0Q7O0FBbUNlVCxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuLi8uLi9kYXRhL3Byb2plY3REZXRhaWxzLmpzJztcblxuXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgZGF0YSA9IHByb2plY3RzW2lkXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0UGFnZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIndoaXRlQmFja2dyb3VuZExpbmVzXCI+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZW5yeUJveFdoaXRlXCI+XG4gICAgICAgIDxkaXY+aGVucnkgZnJhZGxleS48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RJbmZvXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPntkYXRhLm5hbWV9PC9oMT5cbiAgICAgICAgICA8aDM+T3ZlcnZpZXc8L2gzPlxuICAgICAgICAgIDxwPntkYXRhLmRldGFpbHN9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RUb29sc1wiPlxuICAgICAgICAgIDxoMz5Ub29sczwvaDM+XG4gICAgICAgICAgPGg0PntkYXRhLnRlY2h9PC9oND5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZXNpdGVcIj5MSVZFIFNJVEU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });