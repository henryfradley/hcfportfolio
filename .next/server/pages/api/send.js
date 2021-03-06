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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/send.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/send.js":
/*!***************************!*\
  !*** ./pages/api/send.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sgMail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (req, res) {\n  sgMail.setApiKey(\"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\");\n  const {\n    name,\n    email,\n    text\n  } = req.body;\n  const content = {\n    to: 'fradleyhenry@gmail.com',\n    from: 'fradleyhenry@gmail.com',\n    subject: `New Message From - ${email}`,\n    text: `${name} - ${text}`,\n    html: `<p>${name} ${text}</p>`\n  };\n\n  try {\n    await sgMail.send(content);\n    res.status(200).send('Message sent successfully.');\n  } catch (error) {\n    console.log('ERROR', error);\n    res.status(400).send('Message not sent.');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2VuZC5qcz83NzNiIl0sIm5hbWVzIjpbInNnTWFpbCIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJzZXRBcGlLZXkiLCJwcm9jZXNzIiwibmFtZSIsImVtYWlsIiwidGV4dCIsImJvZHkiLCJjb250ZW50IiwidG8iLCJmcm9tIiwic3ViamVjdCIsImh0bWwiLCJzZW5kIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQ0FBRCxDQUF0Qjs7QUFFZSwrRUFBZUMsR0FBZixFQUFvQkMsR0FBcEIsRUFBeUI7QUFDdENILFFBQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsdUVBQWpCO0FBRUEsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUM7QUFBZixNQUF3Qk4sR0FBRyxDQUFDTyxJQUFsQztBQUVBLFFBQU1DLE9BQU8sR0FBRztBQUNkQyxNQUFFLEVBQUUsd0JBRFU7QUFFZEMsUUFBSSxFQUFFLHdCQUZRO0FBR2RDLFdBQU8sRUFBRyxzQkFBcUJOLEtBQU0sRUFIdkI7QUFJZEMsUUFBSSxFQUFHLEdBQUVGLElBQUssTUFBS0UsSUFBSyxFQUpWO0FBS2RNLFFBQUksRUFBRyxNQUFLUixJQUFLLElBQUdFLElBQUs7QUFMWCxHQUFoQjs7QUFRQSxNQUFJO0FBQ0YsVUFBTVIsTUFBTSxDQUFDZSxJQUFQLENBQVlMLE9BQVosQ0FBTjtBQUNBUCxPQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCRCxJQUFoQixDQUFxQiw0QkFBckI7QUFDRCxHQUhELENBR0UsT0FBT0UsS0FBUCxFQUFjO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJGLEtBQXJCO0FBQ0FkLE9BQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JELElBQWhCLENBQXFCLG1CQUFyQjtBQUNEO0FBQ0YsQyIsImZpbGUiOiIuL3BhZ2VzL2FwaS9zZW5kLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2dNYWlsID0gcmVxdWlyZSgnQHNlbmRncmlkL21haWwnKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbihyZXEsIHJlcykge1xuICBzZ01haWwuc2V0QXBpS2V5KHByb2Nlc3MuZW52LlNFTkRHUklEX0FQSV9LRVkpXG5cbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgdGV4dCB9ID0gcmVxLmJvZHlcblxuICBjb25zdCBjb250ZW50ID0ge1xuICAgIHRvOiAnZnJhZGxleWhlbnJ5QGdtYWlsLmNvbScsXG4gICAgZnJvbTogJ2ZyYWRsZXloZW5yeUBnbWFpbC5jb20nLFxuICAgIHN1YmplY3Q6IGBOZXcgTWVzc2FnZSBGcm9tIC0gJHtlbWFpbH1gLFxuICAgIHRleHQ6IGAke25hbWV9IC0gJHt0ZXh0fWAsXG4gICAgaHRtbDogYDxwPiR7bmFtZX0gJHt0ZXh0fTwvcD5gXG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHNnTWFpbC5zZW5kKGNvbnRlbnQpXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoJ01lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHkuJylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnRVJST1InLCBlcnJvcilcbiAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgnTWVzc2FnZSBub3Qgc2VudC4nKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/send.js\n");

/***/ }),

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sendgrid/mail\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2VuZGdyaWQvbWFpbFwiPzJmN2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNlbmRncmlkL21haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2VuZGdyaWQvbWFpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sendgrid/mail\n");

/***/ })

/******/ });