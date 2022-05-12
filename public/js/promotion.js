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

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// showing banner\nvar show2 = document.querySelector(\".show_2\");\nvar show3 = document.querySelector(\".show_3\");\nwindow.addEventListener(\"scroll\", scrolling);\n\nfunction scrolling(event) {\n  if (window.scrollY > 200) {\n    show2.classList.add(\"on\");\n  }\n\n  if (window.scrollY > 800) {\n    show3.classList.add(\"on\");\n  }\n} // showing banner\n// event progress //\n\n\nvar events = document.querySelectorAll(\".eventBox > div\");\nvar eventsArray = Array.from(events);\nvar playBtn = document.querySelector(\".playBtn\");\nvar progressIndex = 0;\nplayBtn.addEventListener(\"click\", startEventGame);\n\nfunction startEventGame() {\n  var _iterator = _createForOfIteratorHelper(events),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n\n      if (item.classList.contains(\"dragEvent\")) {\n        item.classList.add(\"on\");\n      } else {\n        item.classList.remove(\"on\");\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n} // event progress //\n// dragEvent //\n\n\nvar draggables = document.querySelectorAll(\".draggable\");\nvar droppables = document.querySelectorAll(\".droppable\");\nvar dropZon = document.querySelector(\".dropZon\");\nvar draggingObj = null;\ndraggables.forEach(function (obj) {\n  return obj.addEventListener(\"dragstart\", dragStart);\n});\ndroppables.forEach(function (obj) {\n  return obj.addEventListener(\"dragover\", dragOver);\n});\ndroppables.forEach(function (obj) {\n  return obj.addEventListener(\"dragleave\", dragLeave);\n});\ndropZon.addEventListener(\"drop\", handleDrop);\n\nfunction dragStart(event) {\n  draggingObj = event.target;\n}\n\nfunction handleDrop(event) {\n  event.preventDefault();\n  console.log(event);\n}\n\nfunction dragOver(event) {\n  event.target.classList.add(\"over\");\n  event.target.addEventListener(\"drop\", handleDrop, true);\n}\n\nfunction dragLeave(event) {\n  event.target.classList.remove(\"over\");\n  event.target.removeEventListener(\"drop\", handleDrop, true);\n} // dragEvent //\n\n//# sourceURL=webpack://vanilajs/./src/js/screen/promotion.js?");

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