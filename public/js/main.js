/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (() => {

eval("var header = document.querySelector(\"header\");\nvar nav = document.querySelector(\"header nav\");\nvar headerBg = document.querySelector(\".header_bg\");\nnav.addEventListener(\"mouseover\", function () {\n  headerBg.style = \"transform: translateY(0%);\";\n  header.classList.add(\"on\");\n});\nnav.addEventListener(\"mouseleave\", function () {\n  headerBg.style = \"transform: translateY(-100%);\";\n  header.classList.remove(\"on\");\n});\n\n//# sourceURL=webpack://vanilajs/./src/js/components/header.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/js/components/header.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _screen_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen/home */ \"./src/js/screen/home.js\");\n // style\n\n // components\n\n // screen\n\n//# sourceURL=webpack://vanilajs/./src/js/index.js?");

/***/ }),

/***/ "./src/js/screen/home.js":
/*!*******************************!*\
  !*** ./src/js/screen/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\nvar next = document.querySelector(\".nextBtn\");\nvar prev = document.querySelector(\".prevBtn\");\nvar slide = document.querySelector(\".slide\");\nvar items = document.querySelectorAll(\".item\");\nvar maxIndex = items.length;\nvar firstChild = document.querySelector(\".item:first-child\");\nvar lastChild = document.querySelector(\".item:last-child\");\nvar firstClone = firstChild.cloneNode(true);\nvar lastClone = lastChild.cloneNode(true);\nvar TRANSITION = \"transition: all linear 0.3s;\";\nconsole.log(lastClone);\nslide.append(firstClone);\nslide.prepend(lastClone);\nslide.style = \"transform: translateX(-100vw);\";\nvar index = 0;\nnext.addEventListener(\"click\", nextSlide);\nprev.addEventListener(\"click\", prevSlide);\n\nfunction nextSlide() {\n  if (index < maxIndex - 1) {\n    slide.style = \"transform: translateX(-\".concat((index + 2) * 100, \"vw); \").concat(TRANSITION);\n    index = index + 1;\n  } else {\n    slide.style = \"transform: translateX(-\".concat((index + 2) * 100, \"vw); \").concat(TRANSITION);\n    setTimeout(function () {\n      slide.style = \"transform: translateX(-\".concat(100, \"vw);\");\n    }, 300);\n    index = 0;\n  }\n}\n\nfunction prevSlide() {\n  if (index !== 0) {\n    slide.style = \"transform: translateX(-\".concat(index * 100, \"vw); \").concat(TRANSITION);\n    index = index - 1;\n  } else {\n    slide.style = \"transform: translateX(-\".concat(index * 100, \"vw); \").concat(TRANSITION);\n    setTimeout(function () {\n      slide.style = \"transform: translateX(-\".concat(maxIndex * 100, \"vw); transition: all linear 0s\");\n    }, 300);\n    index = maxIndex - 1;\n  }\n}\n\n//# sourceURL=webpack://vanilajs/./src/js/screen/home.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://vanilajs/./src/scss/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;