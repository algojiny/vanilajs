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

/***/ "./src/js/screen/event.js":
/*!********************************!*\
  !*** ./src/js/screen/event.js ***!
  \********************************/
/***/ (() => {

eval("var eMenus = document.querySelectorAll(\".event_menu li\");\nvar eContainer = document.querySelectorAll(\".event_container>li\");\neMenus.forEach(function (eMenu) {\n  eMenu.addEventListener(\"click\", menuOn);\n});\n\nfunction menuOn() {\n  eMenus.forEach(function (eMenu) {\n    eMenu.classList.remove(\"on\");\n  }); //on초기화\n\n  eContainer.forEach(function (box) {\n    box.style.display = \"none\";\n  }); //display초기화\n\n  this.classList.add(\"on\"); //선택메뉴 on효과\n\n  for (var i = 0; i < eMenus.length; i++) {\n    if (eMenus[i].classList.contains(\"on\")) {\n      eContainer[i].style.display = \"block\";\n      finisheSet();\n      announceSet();\n    }\n  } //eContainer change효과  \n\n}\n\n; //종료된 이벤트\n\nvar finishedBoxs = document.querySelectorAll(\".finished_box\");\nvar finishedNumBtns = document.querySelectorAll(\".finished_btn .num\"); // var fBtns = Array.from(finishedNumBtns);\n// var fBoxs = Array.from(finishedBoxs);\n\nfunction pageOn() {\n  if (eMenus[1].classList.contains(\"on\")) {\n    for (var i = 0; i < finishedNumBtns.length; i++) {\n      if (finishedNumBtns[i].classList.contains(\"on\")) {\n        finishedBoxs.forEach(function (finishedBox) {\n          finishedBox.style.display = \"none\";\n        });\n        finishedBoxs[i].style.display = \"flex\";\n      }\n    }\n  }\n\n  if (eMenus[2].classList.contains(\"on\")) {\n    for (var i = 0; i < announceBtns.length; i++) {\n      if (announceBtns[i].classList.contains(\"on\")) {\n        announceBoxs.forEach(function (announceBox) {\n          announceBox.style.display = \"none\";\n        });\n        announceBoxs[i].style.display = \"table\";\n      }\n    }\n  }\n}\n\nfunction finisheSet() {\n  finishedNumBtns.forEach(function (numBtn) {\n    numBtn.classList.remove(\"on\");\n  });\n  finishedNumBtns[0].classList.add(\"on\"); // finishedBoxs[0].style.display=\"flex\";\n  // finishedBoxs[1].style.display=\"none\";\n  // finishedBoxs[2].style.display=\"none\";\n\n  pageOn();\n}\n\n;\nfinishedNumBtns.forEach(function (numBtn) {\n  numBtn.addEventListener(\"click\", finishedOn);\n});\n\nfunction finishedOn() {\n  finishedNumBtns.forEach(function (numBtn) {\n    numBtn.classList.remove(\"on\");\n  });\n  finishedBoxs.forEach(function (finishedBox) {\n    finishedBox.style.display = \"none\";\n  });\n  this.classList.add(\"on\");\n  pageOn(); // console.log(Btns,Boxs);\n  // for( var i = 0 ; i < finishedNumBtns.length; i++ ){\n  //     if(finishedNumBtns[i].classList.contains(\"on\")){\n  //         finishedBoxs[i].style.display = \"flex\";\n  //     }\n  // }//finishedBoxs change효과  \n}\n\nvar preBtn = document.querySelector(\".pre\");\nvar nextBtn = document.querySelector(\".next\");\npreBtn.addEventListener(\"click\", prePage);\nnextBtn.addEventListener(\"click\", nextPage);\n\nfunction prePage() {\n  for (var i = 1; i < finishedBoxs.length; i++) {\n    if (finishedNumBtns[i].classList.contains(\"on\")) {\n      finishedNumBtns.forEach(function (numBtn) {\n        numBtn.classList.remove(\"on\");\n      });\n      finishedBoxs.forEach(function (finishedBox) {\n        finishedBox.style.display = \"none\";\n      });\n      finishedNumBtns[i - 1].classList.add(\"on\"); // finishedBoxs[i-1].style.display = \"flex\";\n\n      pageOn();\n    }\n  }\n}\n\nfunction nextPage() {\n  for (var i = 0; i < finishedBoxs.length - 1; i++) {\n    if (finishedNumBtns[i].classList.contains(\"on\")) {\n      finishedNumBtns.forEach(function (numBtn) {\n        numBtn.classList.remove(\"on\");\n      });\n      finishedBoxs.forEach(function (finishedBox) {\n        finishedBox.style.display = \"none\";\n      });\n      i += 1;\n      finishedNumBtns[i].classList.add(\"on\"); // finishedBoxs[i].style.display = \"flex\";\n\n      pageOn();\n    }\n  }\n} //당첨자 발표\n\n\nvar announceBoxs = document.querySelectorAll(\".announce table\");\nvar announceBtns = document.querySelectorAll(\".announce_btn .num\");\n\nfunction announceSet() {\n  announceBtns.forEach(function (numBtn) {\n    numBtn.classList.remove(\"on\");\n  });\n  announceBtns[0].classList.add(\"on\"); // announceBoxs[0].style.display=\"table\";\n  // announceBoxs[1].style.display=\"none\";\n  // announceBoxs[2].style.display=\"none\";\n\n  pageOn();\n}\n\n;\nannounceBtns.forEach(function (numBtn) {\n  numBtn.addEventListener(\"click\", announceOn);\n});\n\nfunction announceOn() {\n  announceBtns.forEach(function (numBtn) {\n    numBtn.classList.remove(\"on\");\n  });\n  announceBoxs.forEach(function (announceBox) {\n    announceBox.style.display = \"none\";\n  });\n  this.classList.add(\"on\"); // for( var i = 0 ; i < announceBtns.length; i++ ){\n  //     if(announceBtns[i].classList.contains(\"on\")){\n  //         announceBoxs[i].style.display = \"table\";\n  //     }\n  // }//finishedBoxs change효과  \n\n  pageOn();\n}\n\nconsole.log(announceBtns);\n\n//# sourceURL=webpack://vanilajs/./src/js/screen/event.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/screen/event.js"]();
/******/ 	
/******/ })()
;