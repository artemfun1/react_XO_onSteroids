"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Game/game-info.jsx":
/*!***************************************!*\
  !*** ./components/Game/game-info.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; },\n/* harmony export */   GameSymbol: function() { return /* reexport safe */ _game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./components/Game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n/* harmony import */ var _images_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/1.png */ \"./components/Game/images/1.png\");\n/* harmony import */ var _images_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/2.png */ \"./components/Game/images/2.png\");\n/* harmony import */ var _images_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/3.png */ \"./components/Game/images/3.png\");\n/* harmony import */ var _images_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/4.png */ \"./components/Game/images/4.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"Paromovevg\",\n        rating: 1231,\n        avatar: _images_1_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"VereIntedinglapotur\",\n        rating: 850,\n        avatar: _images_2_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"Lara\",\n        rating: 1400,\n        avatar: _images_3_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 4,\n        name: \"Додик\",\n        rating: 760,\n        avatar: _images_4_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className, playersCount } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 \"),\n        children: players.slice(0, playersCount).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player,\n                isRight: index % 2 === 1\n            }, player.id, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight } = param;\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(61);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds < 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-44\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"w-px h-6 bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold\", isRight && \"order-1\", isDanger ? \"text-orange-600\" : \"text-slate-900\"),\n                children: [\n                    minutesString,\n                    \" : \",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(PlayerInfo, \"7AaMxnM7eSz2nMK7cYmxDgI0Gr8=\");\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ2E7QUFDTTtBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNBO0FBRTNDLE1BQU1VLFVBQVU7SUFDZDtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRVixxREFBVUE7UUFDbEJXLFFBQVFiLG9EQUFZQSxDQUFDYyxLQUFLO0lBQzVCO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUVQscURBQVVBO1FBQ2xCVSxRQUFRYixvREFBWUEsQ0FBQ2UsSUFBSTtJQUMzQjtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVFSLHFEQUFVQTtRQUNsQlMsUUFBUWIsb0RBQVlBLENBQUNnQixRQUFRO0lBQy9CO0lBQ0E7UUFDRVAsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUVAscURBQVVBO1FBQ2xCUSxRQUFRYixvREFBWUEsQ0FBQ2lCLE1BQU07SUFDN0I7Q0FDRDtBQUVNLFNBQVNDLFNBQVMsS0FBMkI7UUFBM0IsRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUUsR0FBM0I7SUFDdkIscUJBQ0UsOERBQUNDO1FBQ0NGLFdBQVdyQixnREFBSUEsQ0FDYnFCLFdBQ0E7a0JBR0RYLFFBQVFjLEtBQUssQ0FBQyxHQUFHRixjQUFjRyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQzNDLDhEQUFDQztnQkFFQ0MsWUFBWUg7Z0JBQ1pJLFNBQVNILFFBQVEsTUFBTTtlQUZsQkQsT0FBT2YsRUFBRTs7Ozs7Ozs7OztBQU94QjtLQWpCZ0JTO0FBbUJoQixTQUFTUSxXQUFXLEtBQXVCO1FBQXZCLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFLEdBQXZCOztJQUVsQixNQUFNLENBQUNDLFNBQVVDLFdBQVcsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRXhDLE1BQU13QixnQkFBZ0JDLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0wsVUFBVSxLQUFLTSxRQUFRLENBQUMsR0FBRztJQUNuRSxNQUFNQyxnQkFBZ0JKLE9BQU9ILFVBQVUsSUFBSU0sUUFBUSxDQUFDLEdBQUc7SUFFdkQsTUFBTUUsV0FBV1IsVUFBVTtJQUUzQnZCLGdEQUFTQSxDQUFDLEtBQUssR0FBRSxFQUFFO0lBRW5CLHFCQUNFLDhEQUFDZTtRQUFJRixXQUFVOzswQkFDYiw4REFBQ0U7Z0JBQUlGLFdBQVdyQixnREFBSUEsQ0FBQyxZQUFZOEIsV0FBVzs7a0NBQzFDLDhEQUFDN0IsNkNBQU9BO3dCQUNOb0IsV0FBVTt3QkFDVlQsTUFBTWlCLFdBQVdqQixJQUFJO3dCQUNyQkMsUUFBUWdCLFdBQVdoQixNQUFNO3dCQUN6QkMsUUFBUWUsV0FBV2YsTUFBTTs7Ozs7O2tDQUUzQiw4REFBQ1M7d0JBQUlGLFdBQVU7a0NBQ2IsNEVBQUNsQixvREFBVUE7NEJBQUNZLFFBQVFjLFdBQVdkLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6Qyw4REFBQ1E7Z0JBQ0NGLFdBQVdyQixnREFBSUEsQ0FBQyx5QkFBeUI4QixXQUFXOzs7Ozs7MEJBRXRELDhEQUFDUDtnQkFDQ0YsV0FBV3JCLGdEQUFJQSxDQUNiLHlCQUNBOEIsV0FBVyxXQUNYUyxXQUFXLG9CQUFvQjs7b0JBR2hDTjtvQkFBYztvQkFBSUs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7R0F0Q1NWO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS9nYW1lLWluZm8uanN4P2JkMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi4vcHJvZmlsZVwiO1xuaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcbmltcG9ydCBhdmF0YXJDcmMxIGZyb20gXCIuL2ltYWdlcy8xLnBuZ1wiO1xuaW1wb3J0IGF2YXRhckNyYzIgZnJvbSBcIi4vaW1hZ2VzLzIucG5nXCI7XG5pbXBvcnQgYXZhdGFyQ3JjMyBmcm9tIFwiLi9pbWFnZXMvMy5wbmdcIjtcbmltcG9ydCBhdmF0YXJDcmM0IGZyb20gXCIuL2ltYWdlcy80LnBuZ1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gXCIuL2dhbWUtc3ltYm9sXCI7XG5cbmNvbnN0IHBsYXllcnMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIlBhcm9tb3ZldmdcIixcbiAgICByYXRpbmc6IDEyMzEsXG4gICAgYXZhdGFyOiBhdmF0YXJDcmMxLFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLkNST1NTLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogXCJWZXJlSW50ZWRpbmdsYXBvdHVyXCIsXG4gICAgcmF0aW5nOiA4NTAsXG4gICAgYXZhdGFyOiBhdmF0YXJDcmMyLFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLlpFUk8sXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIkxhcmFcIixcbiAgICByYXRpbmc6IDE0MDAsXG4gICAgYXZhdGFyOiBhdmF0YXJDcmMzLFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLlRSSUFOR0xFLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogXCLQlNC+0LTQuNC6XCIsXG4gICAgcmF0aW5nOiA3NjAsXG4gICAgYXZhdGFyOiBhdmF0YXJDcmM0LFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLlNRVUFSRSxcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lSW5mbyh7IGNsYXNzTmFtZSwgcGxheWVyc0NvdW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgXCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBweS00IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTMgXCIsXG4gICAgICApfVxuICAgID5cbiAgICAgIHtwbGF5ZXJzLnNsaWNlKDAsIHBsYXllcnNDb3VudCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgIDxQbGF5ZXJJbmZvXG4gICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XG4gICAgICAgICAgcGxheWVySW5mbz17cGxheWVyfVxuICAgICAgICAgIGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBQbGF5ZXJJbmZvKHsgcGxheWVySW5mbywgaXNSaWdodCB9KSB7XG5cbiAgY29uc3QgW3NlY29uZHMgLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDYxKVxuXG4gIGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApKS5wYWRTdGFydCgyLCAnMCcpXG4gIGNvbnN0IHNlY29uZHNTdHJpbmcgPSBTdHJpbmcoc2Vjb25kcyAlIDYwKS5wYWRTdGFydCgyLCAnMCcpXG5cbiAgY29uc3QgaXNEYW5nZXIgPSBzZWNvbmRzIDwgMTBcblxuICB1c2VFZmZlY3QoKCk9Pnt9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwicmVsYXRpdmVcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTNcIil9PlxuICAgICAgICA8UHJvZmlsZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNDRcIlxuICAgICAgICAgIG5hbWU9e3BsYXllckluZm8ubmFtZX1cbiAgICAgICAgICByYXRpbmc9e3BsYXllckluZm8ucmF0aW5nfVxuICAgICAgICAgIGF2YXRhcj17cGxheWVySW5mby5hdmF0YXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93IGFic29sdXRlIC1sZWZ0LTEgLXRvcC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPEdhbWVTeW1ib2wgc3ltYm9sPXtwbGF5ZXJJbmZvLnN5bWJvbH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwidy1weCBoLTYgYmctc2xhdGUtMjAwXCIsIGlzUmlnaHQgJiYgXCJvcmRlci0yXCIpfVxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgXCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIixcbiAgICAgICAgICBpc1JpZ2h0ICYmIFwib3JkZXItMVwiLFxuICAgICAgICAgIGlzRGFuZ2VyID8gXCJ0ZXh0LW9yYW5nZS02MDBcIiA6IFwidGV4dC1zbGF0ZS05MDBcIlxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7bWludXRlc1N0cmluZ30gOiB7c2Vjb25kc1N0cmluZ31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJQcm9maWxlIiwiR0FNRV9TWU1CT0xTIiwiR2FtZVN5bWJvbCIsImF2YXRhckNyYzEiLCJhdmF0YXJDcmMyIiwiYXZhdGFyQ3JjMyIsImF2YXRhckNyYzQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInBsYXllcnMiLCJpZCIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJzeW1ib2wiLCJDUk9TUyIsIlpFUk8iLCJUUklBTkdMRSIsIlNRVUFSRSIsIkdhbWVJbmZvIiwiY2xhc3NOYW1lIiwicGxheWVyc0NvdW50IiwiZGl2Iiwic2xpY2UiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsIlBsYXllckluZm8iLCJwbGF5ZXJJbmZvIiwiaXNSaWdodCIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwibWludXRlc1N0cmluZyIsIlN0cmluZyIsIk1hdGgiLCJmbG9vciIsInBhZFN0YXJ0Iiwic2Vjb25kc1N0cmluZyIsImlzRGFuZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Game/game-info.jsx\n"));

/***/ })

});