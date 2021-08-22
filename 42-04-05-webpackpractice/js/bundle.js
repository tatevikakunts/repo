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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _club__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club */ \"./src/club.js\");\n\r\n\r\nfunction main() {\r\n  document.querySelector(\"#form\").addEventListener(\"submit\", _club__WEBPACK_IMPORTED_MODULE_0__.prepareCreate);\r\n}\r\n\r\nmain();\r\n\n\n//# sourceURL=webpack://42-04-05-webpackpractice/./src/app.js?");

/***/ }),

/***/ "./src/club.js":
/*!*********************!*\
  !*** ./src/club.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prepareCreate\": () => (/* binding */ prepareCreate)\n/* harmony export */ });\n/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team */ \"./src/team.js\");\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs */ \"./src/libs.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\r\n\r\n\r\n\r\nlet club = {};\r\n\r\nfunction createClub(clubName, year, city, staff) {\r\n  const club = {\r\n    clubName: clubName,\r\n    year: year,\r\n    city: city,\r\n    staff: staff,\r\n    team: (0,_team__WEBPACK_IMPORTED_MODULE_0__.createTeam)(staff),\r\n  };\r\n  return club;\r\n}\r\nconst renderClub = () => {\r\n  document.querySelector(\"#club-form\").classList.add(\"hide\");\r\n  const app = document.querySelector(\"#app\");\r\n\r\n  const h1 = document.createElement(\"h2\");\r\n  h1.innerText = `Football Club: ${club.clubName}`;\r\n  const h2_1 = document.createElement(\"h3\");\r\n  h2_1.innerText = `Year of Establishment: ${club.year}`;\r\n  const h2_2 = document.createElement(\"h3\");\r\n  h2_2.innerText = `City: ${club.city}`;\r\n\r\n  app.appendChild(h1);\r\n  app.appendChild(h2_1);\r\n  app.appendChild(h2_2);\r\n\r\n  const table = document.createElement(\"table\");\r\n\r\n  const places = {\r\n    gk: \"Goalkeepers\",\r\n    df: \"Defenders\",\r\n    mf: \"Midfielders\",\r\n    fw: \"Forwards\",\r\n  };\r\n\r\n  for (let key in places) {\r\n    table.appendChild((0,_libs__WEBPACK_IMPORTED_MODULE_1__.rowHeader)(places[key]));\r\n    club.team[key].forEach((player) => {\r\n      table.appendChild((0,_player__WEBPACK_IMPORTED_MODULE_2__.rowPlayer)(player));\r\n    });\r\n  }\r\n\r\n  app.appendChild(table);\r\n};\r\nconst prepareCreate = (event) => {\r\n  event.preventDefault();\r\n  const inputs = document.querySelectorAll(\"#form input\");\r\n  const prepValue = {};\r\n  for (let element of inputs) {\r\n    prepValue[element.id] = element.value;\r\n  }\r\n\r\n  club = createClub(prepValue.clubName, prepValue.year, prepValue.city, {\r\n    gk: prepValue.gk,\r\n    df: prepValue.df,\r\n    mf: prepValue.mf,\r\n    fw: prepValue.fw,\r\n  });\r\n\r\n  for (let element of inputs) {\r\n    element.value = \"\";\r\n  }\r\n  renderClub();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://42-04-05-webpackpractice/./src/club.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AGE\": () => (/* binding */ AGE),\n/* harmony export */   \"CONTRACT\": () => (/* binding */ CONTRACT),\n/* harmony export */   \"NAME\": () => (/* binding */ NAME)\n/* harmony export */ });\nconst AGE = 18;\r\nconst CONTRACT = 2022;\r\nconst NAME = \"Player\";\r\n\r\n\n\n//# sourceURL=webpack://42-04-05-webpackpractice/./src/constants.js?");

/***/ }),

/***/ "./src/libs.js":
/*!*********************!*\
  !*** ./src/libs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rowHeader\": () => (/* binding */ rowHeader)\n/* harmony export */ });\nconst rowHeader = (title) => {\r\n  const tr = document.createElement(\"tr\");\r\n  const td = document.createElement(\"th\");\r\n  td.setAttribute(\"colspan\", 3);\r\n  td.innerText = title;\r\n  tr.appendChild(td);\r\n  return tr;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://42-04-05-webpackpractice/./src/libs.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPlayer\": () => (/* binding */ createPlayer),\n/* harmony export */   \"rowPlayer\": () => (/* binding */ rowPlayer)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\nfunction createPlayer(pos, number) {\r\n  return {\r\n    fName: `${_constants__WEBPACK_IMPORTED_MODULE_0__.NAME}_${pos}_${number + 1}`,\r\n    position: pos,\r\n    age: _constants__WEBPACK_IMPORTED_MODULE_0__.AGE + Math.floor(Math.random() * Math.floor(7)),\r\n    contract: _constants__WEBPACK_IMPORTED_MODULE_0__.CONTRACT + Math.floor(Math.random() * Math.floor(4)),\r\n  };\r\n}\r\nconst rowPlayer = (player) => {\r\n  const tr = document.createElement(\"tr\");\r\n  for (let id of [\"fName\", \"age\", \"contract\"]) {\r\n    const td = document.createElement(\"td\");\r\n    td.innerText = player[id];\r\n    tr.appendChild(td);\r\n  }\r\n  return tr;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://42-04-05-webpackpractice/./src/player.js?");

/***/ }),

/***/ "./src/team.js":
/*!*********************!*\
  !*** ./src/team.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTeam\": () => (/* binding */ createTeam)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\r\nfunction createTeam(ns) {\r\n  const team = {};\r\n  for (let key in ns) {\r\n    team[key] = [];\r\n    for (let i = 0; i < ns[key]; i++) {\r\n      team[key].push((0,_player__WEBPACK_IMPORTED_MODULE_0__.createPlayer)(key, i));\r\n    }\r\n  }\r\n  return team;\r\n}\r\n\n\n//# sourceURL=webpack://42-04-05-webpackpractice/./src/team.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;