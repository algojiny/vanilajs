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

/***/ "./src/js/screen/promotion.js":
/*!************************************!*\
  !*** ./src/js/screen/promotion.js ***!
  \************************************/
/***/ (() => {

eval("var show2 = document.querySelector(\".show_2\");\nvar show3 = document.querySelector(\".show_3\");\nwindow.addEventListener(\"scroll\", scrolling);\n\nfunction scrolling(event) {\n  console.log(window.screenY);\n\n  if (window.scrollY > 200) {\n    show2.classList.add(\"on\");\n  }\n\n  if (window.scrollY > 800) {\n    show3.classList.add(\"on\");\n  }\n}\n\nconsole.log(show3.getBoundingClientRect());\n\n//# sourceURL=webpack://vanilajs/./src/js/screen/promotion.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/screen/promotion.js"]();
/******/ 	
/******/ })()
;