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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; },\n/* harmony export */   GameSymbol: function() { return /* reexport safe */ _game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/Game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n/* harmony import */ var _images_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/1.png */ \"./components/Game/images/1.png\");\n/* harmony import */ var _images_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/2.png */ \"./components/Game/images/2.png\");\n/* harmony import */ var _images_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/3.png */ \"./components/Game/images/3.png\");\n/* harmony import */ var _images_4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/4.png */ \"./components/Game/images/4.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"Paromovevg\",\n        rating: 1231,\n        avatar: _images_1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"VereIntedinglapotur\",\n        rating: 850,\n        avatar: _images_2_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"Lara\",\n        rating: 1400,\n        avatar: _images_3_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 4,\n        name: \"Додик\",\n        rating: 760,\n        avatar: _images_4_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className, playersCount, currentMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 \"),\n        children: players.slice(0, playersCount).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player,\n                isRight: index % 2 === 1,\n                isTimerRunning: currentMove === player.symbol\n            }, player.id, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight, isTimerRunning } = param;\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(3);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds < 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setInterval(()=>{\n            setSeconds((prev)=>Math.max(prev - 1, 0));\n        }, 1000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_3__.Profile, {\n                        className: \"w-44\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"w-px h-6 bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold\", isRight && \"order-1\", isDanger ? \"text-orange-600\" : \"text-slate-900\"),\n                children: [\n                    minutesString,\n                    \" : \",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_s(PlayerInfo, \"MwlyHTJWn4Yk14bZPc9i8wTNPyM=\");\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ29CO0FBQ1A7QUFDTTtBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUUzQyxNQUFNVSxVQUFVO0lBQ2Q7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUVIscURBQVVBO1FBQ2xCUyxRQUFRWCxvREFBWUEsQ0FBQ1ksS0FBSztJQUM1QjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVFQLHFEQUFVQTtRQUNsQlEsUUFBUVgsb0RBQVlBLENBQUNhLElBQUk7SUFDM0I7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRTixxREFBVUE7UUFDbEJPLFFBQVFYLG9EQUFZQSxDQUFDYyxRQUFRO0lBQy9CO0lBQ0E7UUFDRVAsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUUwscURBQVVBO1FBQ2xCTSxRQUFRWCxvREFBWUEsQ0FBQ2UsTUFBTTtJQUM3QjtDQUNEO0FBRU0sU0FBU0MsU0FBUyxLQUF3QztRQUF4QyxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsV0FBVyxFQUFFLEdBQXhDO0lBQ3ZCLHFCQUNFLDhEQUFDQztRQUNDSCxXQUFXckIsZ0RBQUlBLENBQ2JxQixXQUNBO2tCQUdEWCxRQUFRZSxLQUFLLENBQUMsR0FBR0gsY0FBY0ksR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUMzQyw4REFBQ0M7Z0JBRUNDLFlBQVlIO2dCQUNaSSxTQUFTSCxRQUFRLE1BQU07Z0JBQ3ZCSSxnQkFBZ0JULGdCQUFnQkksT0FBT1osTUFBTTtlQUh4Q1ksT0FBT2hCLEVBQUU7Ozs7Ozs7Ozs7QUFReEI7S0FsQmdCUztBQW9CaEIsU0FBU1MsV0FBVyxLQUF1QztRQUF2QyxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsY0FBYyxFQUFFLEdBQXZDOztJQUNsQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2hDLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1pQyxnQkFBZ0JDLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0wsVUFBVSxLQUFLTSxRQUFRLENBQUMsR0FBRztJQUNuRSxNQUFNQyxnQkFBZ0JKLE9BQU9ILFVBQVUsSUFBSU0sUUFBUSxDQUFDLEdBQUc7SUFFdkQsTUFBTUUsV0FBV1IsVUFBVTtJQUUzQmhDLGdEQUFTQSxDQUFDO1FBQ1J5QyxZQUFZO1lBQ1ZSLFdBQVcsQ0FBQ1MsT0FBU04sS0FBS08sR0FBRyxDQUFDRCxPQUFPLEdBQUc7UUFDMUMsR0FBRztJQUNMLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDbkI7UUFBSUgsV0FBVTs7MEJBQ2IsOERBQUNHO2dCQUFJSCxXQUFXckIsZ0RBQUlBLENBQUMsWUFBWStCLFdBQVc7O2tDQUMxQyw4REFBQzVCLDZDQUFPQTt3QkFDTmtCLFdBQVU7d0JBQ1ZULE1BQU1rQixXQUFXbEIsSUFBSTt3QkFDckJDLFFBQVFpQixXQUFXakIsTUFBTTt3QkFDekJDLFFBQVFnQixXQUFXaEIsTUFBTTs7Ozs7O2tDQUUzQiw4REFBQ1U7d0JBQUlILFdBQVU7a0NBQ2IsNEVBQUNoQixvREFBVUE7NEJBQUNVLFFBQVFlLFdBQVdmLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6Qyw4REFBQ1M7Z0JBQ0NILFdBQVdyQixnREFBSUEsQ0FBQyx5QkFBeUIrQixXQUFXOzs7Ozs7MEJBRXRELDhEQUFDUDtnQkFDQ0gsV0FBV3JCLGdEQUFJQSxDQUNiLHlCQUNBK0IsV0FBVyxXQUNYVSxXQUFXLG9CQUFvQjs7b0JBR2hDTjtvQkFBYztvQkFBSUs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7R0F6Q1NYO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS9nYW1lLWluZm8uanN4P2JkMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi4vcHJvZmlsZVwiO1xuaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcbmltcG9ydCBhdmF0YXJDcmMxIGZyb20gXCIuL2ltYWdlcy8xLnBuZ1wiO1xuaW1wb3J0IGF2YXRhckNyYzIgZnJvbSBcIi4vaW1hZ2VzLzIucG5nXCI7XG5pbXBvcnQgYXZhdGFyQ3JjMyBmcm9tIFwiLi9pbWFnZXMvMy5wbmdcIjtcbmltcG9ydCBhdmF0YXJDcmM0IGZyb20gXCIuL2ltYWdlcy80LnBuZ1wiO1xuZXhwb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gXCIuL2dhbWUtc3ltYm9sXCI7XG5cbmNvbnN0IHBsYXllcnMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIlBhcm9tb3ZldmdcIixcbiAgICByYXRpbmc6IDEyMzEsXG4gICAgYXZhdGFyOiBhdmF0YXJDcmMxLFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLkNST1NTLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogXCJWZXJlSW50ZWRpbmdsYXBvdHVyXCIsXG4gICAgcmF0aW5nOiA4NTAsXG4gICAgYXZhdGFyOiBhdmF0YXJDcmMyLFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLlpFUk8sXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIkxhcmFcIixcbiAgICByYXRpbmc6IDE0MDAsXG4gICAgYXZhdGFyOiBhdmF0YXJDcmMzLFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLlRSSUFOR0xFLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogXCLQlNC+0LTQuNC6XCIsXG4gICAgcmF0aW5nOiA3NjAsXG4gICAgYXZhdGFyOiBhdmF0YXJDcmM0LFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLlNRVUFSRSxcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lSW5mbyh7IGNsYXNzTmFtZSwgcGxheWVyc0NvdW50LCBjdXJyZW50TW92ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIFwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHktNCBncmlkIGdyaWQtY29scy0yIGdhcC0zIFwiLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7cGxheWVycy5zbGljZSgwLCBwbGF5ZXJzQ291bnQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxuICAgICAgICA8UGxheWVySW5mb1xuICAgICAgICAgIGtleT17cGxheWVyLmlkfVxuICAgICAgICAgIHBsYXllckluZm89e3BsYXllcn1cbiAgICAgICAgICBpc1JpZ2h0PXtpbmRleCAlIDIgPT09IDF9XG4gICAgICAgICAgaXNUaW1lclJ1bm5pbmc9e2N1cnJlbnRNb3ZlID09PSBwbGF5ZXIuc3ltYm9sfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBsYXllckluZm8oeyBwbGF5ZXJJbmZvLCBpc1JpZ2h0LCBpc1RpbWVyUnVubmluZyB9KSB7XG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDMpO1xuXG4gIGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IHNlY29uZHNTdHJpbmcgPSBTdHJpbmcoc2Vjb25kcyAlIDYwKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cbiAgY29uc3QgaXNEYW5nZXIgPSBzZWNvbmRzIDwgMTA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRTZWNvbmRzKChwcmV2KSA9PiBNYXRoLm1heChwcmV2IC0gMSwgMCkpO1xuICAgIH0sIDEwMDApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJyZWxhdGl2ZVwiLCBpc1JpZ2h0ICYmIFwib3JkZXItM1wiKX0+XG4gICAgICAgIDxQcm9maWxlXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy00NFwiXG4gICAgICAgICAgbmFtZT17cGxheWVySW5mby5uYW1lfVxuICAgICAgICAgIHJhdGluZz17cGxheWVySW5mby5yYXRpbmd9XG4gICAgICAgICAgYXZhdGFyPXtwbGF5ZXJJbmZvLmF2YXRhcn1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBzaGFkb3cgYWJzb2x1dGUgLWxlZnQtMSAtdG9wLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8R2FtZVN5bWJvbCBzeW1ib2w9e3BsYXllckluZm8uc3ltYm9sfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXCJ3LXB4IGgtNiBiZy1zbGF0ZS0yMDBcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTJcIil9XG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICBcInRleHQtbGcgZm9udC1zZW1pYm9sZFwiLFxuICAgICAgICAgIGlzUmlnaHQgJiYgXCJvcmRlci0xXCIsXG4gICAgICAgICAgaXNEYW5nZXIgPyBcInRleHQtb3JhbmdlLTYwMFwiIDogXCJ0ZXh0LXNsYXRlLTkwMFwiLFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7bWludXRlc1N0cmluZ30gOiB7c2Vjb25kc1N0cmluZ31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2ZpbGUiLCJHQU1FX1NZTUJPTFMiLCJHYW1lU3ltYm9sIiwiYXZhdGFyQ3JjMSIsImF2YXRhckNyYzIiLCJhdmF0YXJDcmMzIiwiYXZhdGFyQ3JjNCIsInBsYXllcnMiLCJpZCIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJzeW1ib2wiLCJDUk9TUyIsIlpFUk8iLCJUUklBTkdMRSIsIlNRVUFSRSIsIkdhbWVJbmZvIiwiY2xhc3NOYW1lIiwicGxheWVyc0NvdW50IiwiY3VycmVudE1vdmUiLCJkaXYiLCJzbGljZSIsIm1hcCIsInBsYXllciIsImluZGV4IiwiUGxheWVySW5mbyIsInBsYXllckluZm8iLCJpc1JpZ2h0IiwiaXNUaW1lclJ1bm5pbmciLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsIm1pbnV0ZXNTdHJpbmciLCJTdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJwYWRTdGFydCIsInNlY29uZHNTdHJpbmciLCJpc0RhbmdlciIsInNldEludGVydmFsIiwicHJldiIsIm1heCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/game-info.jsx\n"));

/***/ })

});