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

eval("var header = document.querySelector(\"header\");\nvar header_inner = document.querySelector(\".header_inner\");\nvar nav = document.querySelector(\"header nav\");\nvar headerBg = document.querySelector(\".header_bg\");\nnav.addEventListener(\"mouseover\", function () {\n  headerBg.style = \"transform: translateY(0%);\";\n  header_inner.classList.add(\"on\");\n});\nnav.addEventListener(\"mouseleave\", function () {\n  headerBg.style = \"transform: translateY(-100%);\";\n  header_inner.classList.remove(\"on\");\n});\nwindow.addEventListener(\"scroll\", function (event) {\n  var scorllY = this.window.scrollY;\n\n  if (this.scrollY > 150) {\n    header.style = \"display: none;\";\n  } else {\n    header.style = \"display: flex;\";\n  }\n});\n\n//# sourceURL=webpack://vanilajs/./src/js/components/header.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/js/components/header.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _screen_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen/home */ \"./src/js/screen/home.js\");\n/* harmony import */ var _assets_images_slider_1_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/slider_1.jpeg */ \"./src/assets/images/slider_1.jpeg\");\n/* harmony import */ var _assets_images_slider_2_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/slider_2.jpeg */ \"./src/assets/images/slider_2.jpeg\");\n/* harmony import */ var _assets_images_slider_3_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/slider_3.jpeg */ \"./src/assets/images/slider_3.jpeg\");\n/* harmony import */ var _assets_images_slider_4_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/slider_4.jpeg */ \"./src/assets/images/slider_4.jpeg\");\n/* harmony import */ var _assets_images_slider_5_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/slider_5.jpeg */ \"./src/assets/images/slider_5.jpeg\");\n/* harmony import */ var _assets_images_cat_footer_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/cat_footer.png */ \"./src/assets/images/cat_footer.png\");\n // style\n\n // components\n\n // screen\n\n\n\n\n\n\n // images\n\n//# sourceURL=webpack://vanilajs/./src/js/index.js?");

/***/ }),

/***/ "./src/js/screen/home.js":
/*!*******************************!*\
  !*** ./src/js/screen/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\nvar banner = document.querySelector(\".banner\");\nvar slide = document.querySelector(\".slide\");\nvar items = document.querySelectorAll(\".item\");\nvar bgColor = [\"tomato\", \"skyblue\", \"darkseagreen\", \"pink\", \"darkslategrey\", \"slateblue\", \"gainsboro\", \"darkcyan\", \"goldenrod\", \"lightcoral\", \"khaki\", \"gray\", \"mediumpurple\", \"#222\", \"saddlebrown\", \"mediumvioletred\", \"steelblue\"];\nvar next = document.querySelector(\".nextBtn\");\nvar prev = document.querySelector(\".prevBtn\");\nvar maxIndex = items.length;\nvar firstChild = document.querySelector(\".item:first-child\");\nvar lastChild = document.querySelector(\".item:last-child\");\nvar firstClone = firstChild.cloneNode(true);\nvar lastClone = lastChild.cloneNode(true);\nvar TRANSITION = \"transition: all linear 0.2s;\";\nslide.append(firstClone);\nslide.prepend(lastClone);\nslide.style = \"transform: translateX(-100vw);\";\nvar index = 0;\nnext.addEventListener(\"click\", nextSlide);\nprev.addEventListener(\"click\", prevSlide);\n\nfunction nextSlide() {\n  if (index < maxIndex - 1) {\n    slide.style = \"transform: translateX(-\".concat((index + 2) * 100, \"vw); \").concat(TRANSITION);\n    index = index + 1;\n  } else {\n    slide.style = \"transform: translateX(-\".concat((index + 2) * 100, \"vw); \").concat(TRANSITION);\n    setTimeout(function () {\n      slide.style = \"transform: translateX(-\".concat(100, \"vw);\");\n    }, 300);\n    index = 0;\n  }\n\n  banner.style = \"background-color: \".concat(bgColor[Math.round(Math.random() * bgColor.length)]);\n  items.forEach(function (item) {\n    return item.classList.remove(\"on\");\n  });\n  items[index].classList.add(\"on\");\n}\n\nfunction prevSlide() {\n  if (index !== 0) {\n    slide.style = \"transform: translateX(-\".concat(index * 100, \"vw); \").concat(TRANSITION);\n    index = index - 1;\n  } else {\n    slide.style = \"transform: translateX(-\".concat(index * 100, \"vw); \").concat(TRANSITION);\n    setTimeout(function () {\n      slide.style = \"transform: translateX(-\".concat(maxIndex * 100, \"vw); transition: all linear 0s\");\n    }, 300);\n    index = maxIndex - 1;\n  }\n\n  banner.style = \"background-color: \".concat(bgColor[Math.round(Math.random() * bgColor.length)]);\n  items.forEach(function (item) {\n    return item.classList.remove(\"on\");\n  });\n  items[index].classList.add(\"on\");\n}\n\n//# sourceURL=webpack://vanilajs/./src/js/screen/home.js?");

/***/ }),

/***/ "./src/assets/images/cat_footer.png":
/*!******************************************!*\
  !*** ./src/assets/images/cat_footer.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/cat_footer.png\");\n\n//# sourceURL=webpack://vanilajs/./src/assets/images/cat_footer.png?");

/***/ }),

/***/ "./src/assets/images/slider_1.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/images/slider_1.jpeg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/slider_1.jpeg\");\n\n//# sourceURL=webpack://vanilajs/./src/assets/images/slider_1.jpeg?");

/***/ }),

/***/ "./src/assets/images/slider_2.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/images/slider_2.jpeg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/slider_2.jpeg\");\n\n//# sourceURL=webpack://vanilajs/./src/assets/images/slider_2.jpeg?");

/***/ }),

/***/ "./src/assets/images/slider_3.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/images/slider_3.jpeg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/slider_3.jpeg\");\n\n//# sourceURL=webpack://vanilajs/./src/assets/images/slider_3.jpeg?");

/***/ }),

/***/ "./src/assets/images/slider_4.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/images/slider_4.jpeg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/slider_4.jpeg\");\n\n//# sourceURL=webpack://vanilajs/./src/assets/images/slider_4.jpeg?");

/***/ }),

/***/ "./src/assets/images/slider_5.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/images/slider_5.jpeg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/slider_5.jpeg\");\n\n//# sourceURL=webpack://vanilajs/./src/assets/images/slider_5.jpeg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
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