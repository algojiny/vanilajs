/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/screen/home.js":
/*!*******************************!*\
  !*** ./src/js/screen/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar banner = document.querySelector(\".banner\");\nvar slide = document.querySelector(\".slide\");\nvar items = document.querySelectorAll(\".item\");\nvar base = banner.getBoundingClientRect();\nwindow.addEventListener(\"resize\", function () {\n  base = banner.getBoundingClientRect();\n});\nvar bgColor = [\"tomato\", \"skyblue\", \"darkseagreen\", \"pink\", \"darkslategrey\", \"slateblue\", \"gainsboro\", \"darkcyan\", \"goldenrod\", \"lightcoral\", \"khaki\", \"gray\", \"mediumpurple\", \"#222\", \"saddlebrown\", \"mediumvioletred\", \"steelblue\"];\nvar next = document.querySelector(\".nextBtn\");\nvar prev = document.querySelector(\".prevBtn\");\nvar maxIndex = items.length;\nvar firstChild = document.querySelector(\".item:first-child\");\nvar lastChild = document.querySelector(\".item:last-child\");\nvar firstClone = firstChild.cloneNode(true);\nvar lastClone = lastChild.cloneNode(true);\nvar TRANSITION = \"transition: all linear 0.2s;\";\nslide.append(firstClone);\nslide.prepend(lastClone);\nvar index = 0;\nnext.addEventListener(\"click\", nextSlide);\nprev.addEventListener(\"click\", prevSlide);\n\nfunction nextSlide() {\n  if (index < maxIndex - 1) {\n    slide.style = \"transform: translateX(-\".concat((index + 2) * base.width, \"px); \").concat(TRANSITION);\n    index = index + 1;\n  } else {\n    slide.style = \"transform: translateX(-\".concat((index + 2) * base.width, \"px); \").concat(TRANSITION);\n    setTimeout(function () {\n      slide.style = \"transform: translateX(\".concat(-base.width, \"px);\");\n    }, 300);\n    index = 0;\n  }\n\n  banner.style = \"background-color: \".concat(bgColor[Math.round(Math.random() * bgColor.length)]);\n  items.forEach(function (item) {\n    return item.classList.remove(\"on\");\n  });\n  items[index].classList.add(\"on\");\n}\n\nfunction prevSlide() {\n  if (index !== 0) {\n    slide.style = \"transform: translateX(-\".concat(index * base.width, \"px); \").concat(TRANSITION);\n    index = index - 1;\n  } else {\n    slide.style = \"transform: translateX(-\".concat(index * base.width, \"px); \").concat(TRANSITION);\n    setTimeout(function () {\n      slide.style = \"transform: translateX(-\".concat(maxIndex * base.width, \"px); transition: all linear 0s\");\n    }, 300);\n    index = maxIndex - 1;\n  }\n\n  banner.style = \"background-color: \".concat(bgColor[Math.round(Math.random() * bgColor.length)]);\n  items.forEach(function (item) {\n    return item.classList.remove(\"on\");\n  });\n  items[index].classList.add(\"on\");\n}\n\nslide.style.width = \"\".concat((maxIndex + 2) * base.width, \"px\");\nslide.style = \"transform: translateX(\".concat(-base.width, \"px)\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://vanilajs/./src/js/screen/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/screen/home.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;