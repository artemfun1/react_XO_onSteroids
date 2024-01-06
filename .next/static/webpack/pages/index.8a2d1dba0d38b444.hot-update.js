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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/Game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n/* harmony import */ var _images_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/1.png */ \"./components/Game/images/1.png\");\n/* harmony import */ var _images_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/2.png */ \"./components/Game/images/2.png\");\n/* harmony import */ var _images_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/3.png */ \"./components/Game/images/3.png\");\n/* harmony import */ var _images_4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/4.png */ \"./components/Game/images/4.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"Paromovevg\",\n        rating: 1231,\n        avatar: _images_1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"VereIntedinglapotur\",\n        rating: 850,\n        avatar: _images_2_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"Lara\",\n        rating: 1400,\n        avatar: _images_3_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 4,\n        name: \"Додик\",\n        rating: 760,\n        avatar: _images_4_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className, playersCount, currentMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 \"),\n        children: players.slice(0, playersCount).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player,\n                isRight: index % 2 === 1,\n                isTimerRunning: currentMove === player.symbol\n            }, player.id, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight, isTimerRunning } = param;\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(60);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds < 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isTimerRunning) {\n            const interval = setInterval(()=>{\n                setSeconds((prev)=>Math.max(prev - 1, 0));\n            }, 1000);\n            return ()=>{\n                clearInterval(interval);\n                setSeconds(60);\n            };\n        }\n    }, [\n        isTimerRunning\n    ]);\n    function getTimerColor() {\n        if (isTimerRunning) {\n            return isDanger ? \"text-orange-600\" : \"text-slate-900\";\n        }\n        return \"text-sl\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_3__.Profile, {\n                        className: \"w-44\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"w-px h-6 bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold w-[60px]\", isRight && \"order-1\"),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this);\n}\n_s(PlayerInfo, \"T5PhQ9L5KSVb8XiZCZPVWhaJCbk=\");\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFJekI7R0F0RFNYO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS9nYW1lLWluZm8uanN4P2JkMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi4vcHJvZmlsZVwiO1xuaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcbmltcG9ydCBhdmF0YXJDcmMxIGZyb20gXCIuL2ltYWdlcy8xLnBuZ1wiO1xuaW1wb3J0IGF2YXRhckNyYzIgZnJvbSBcIi4vaW1hZ2VzLzIucG5nXCI7XG5pbXBvcnQgYXZhdGFyQ3JjMyBmcm9tIFwiLi9pbWFnZXMvMy5wbmdcIjtcbmltcG9ydCBhdmF0YXJDcmM0IGZyb20gXCIuL2ltYWdlcy80LnBuZ1wiO1xuXG5jb25zdCBwbGF5ZXJzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJQYXJvbW92ZXZnXCIsXG4gICAgcmF0aW5nOiAxMjMxLFxuICAgIGF2YXRhcjogYXZhdGFyQ3JjMSxcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5DUk9TUyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiVmVyZUludGVkaW5nbGFwb3R1clwiLFxuICAgIHJhdGluZzogODUwLFxuICAgIGF2YXRhcjogYXZhdGFyQ3JjMixcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5aRVJPLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogXCJMYXJhXCIsXG4gICAgcmF0aW5nOiAxNDAwLFxuICAgIGF2YXRhcjogYXZhdGFyQ3JjMyxcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5UUklBTkdMRSxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwi0JTQvtC00LjQulwiLFxuICAgIHJhdGluZzogNzYwLFxuICAgIGF2YXRhcjogYXZhdGFyQ3JjNCxcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5TUVVBUkUsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUluZm8oeyBjbGFzc05hbWUsIHBsYXllcnNDb3VudCwgY3VycmVudE1vdmUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBcImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB5LTQgZ3JpZCBncmlkLWNvbHMtMiBnYXAtMyBcIixcbiAgICAgICl9XG4gICAgPlxuICAgICAge3BsYXllcnMuc2xpY2UoMCwgcGxheWVyc0NvdW50KS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcbiAgICAgICAgPFBsYXllckluZm9cbiAgICAgICAgICBrZXk9e3BsYXllci5pZH1cbiAgICAgICAgICBwbGF5ZXJJbmZvPXtwbGF5ZXJ9XG4gICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxuICAgICAgICAgIGlzVGltZXJSdW5uaW5nPXtjdXJyZW50TW92ZSA9PT0gcGxheWVyLnN5bWJvbH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBQbGF5ZXJJbmZvKHsgcGxheWVySW5mbywgaXNSaWdodCwgaXNUaW1lclJ1bm5pbmcgfSkge1xuICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSg2MCk7XG5cbiAgY29uc3QgbWludXRlc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3Qgc2Vjb25kc1N0cmluZyA9IFN0cmluZyhzZWNvbmRzICUgNjApLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblxuICBjb25zdCBpc0RhbmdlciA9IHNlY29uZHMgPCAxMDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1RpbWVyUnVubmluZykge1xuICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0U2Vjb25kcygocHJldikgPT4gTWF0aC5tYXgocHJldiAtIDEsIDApKTtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgcmV0dXJuICgpPT57XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICAgICAgIHNldFNlY29uZHMoNjApXG4gICAgICB9XG4gICAgfVxuICB9LCBbaXNUaW1lclJ1bm5pbmddKTtcblxuICBmdW5jdGlvbiBnZXRUaW1lckNvbG9yKCl7XG4gICAgaWYoaXNUaW1lclJ1bm5pbmcpe1xuICAgICAgcmV0dXJuIGlzRGFuZ2VyID8gXCJ0ZXh0LW9yYW5nZS02MDBcIiA6IFwidGV4dC1zbGF0ZS05MDBcIlxuICAgIH1cbiAgICByZXR1cm4gJ3RleHQtc2wnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChcInJlbGF0aXZlXCIsIGlzUmlnaHQgJiYgXCJvcmRlci0zXCIpfT5cbiAgICAgICAgPFByb2ZpbGVcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQ0XCJcbiAgICAgICAgICBuYW1lPXtwbGF5ZXJJbmZvLm5hbWV9XG4gICAgICAgICAgcmF0aW5nPXtwbGF5ZXJJbmZvLnJhdGluZ31cbiAgICAgICAgICBhdmF0YXI9e3BsYXllckluZm8uYXZhdGFyfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdyBhYnNvbHV0ZSAtbGVmdC0xIC10b3AtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxHYW1lU3ltYm9sIHN5bWJvbD17cGxheWVySW5mby5zeW1ib2x9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcInctcHggaC02IGJnLXNsYXRlLTIwMFwiLCBpc1JpZ2h0ICYmIFwib3JkZXItMlwiKX1cbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgIFwidGV4dC1sZyBmb250LXNlbWlib2xkIHctWzYwcHhdXCIsXG4gICAgICAgICAgaXNSaWdodCAmJiBcIm9yZGVyLTFcIixcbiAgICAgICAgICBcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge21pbnV0ZXNTdHJpbmd9OntzZWNvbmRzU3RyaW5nfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY2xzeCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZmlsZSIsIkdBTUVfU1lNQk9MUyIsIkdhbWVTeW1ib2wiLCJhdmF0YXJDcmMxIiwiYXZhdGFyQ3JjMiIsImF2YXRhckNyYzMiLCJhdmF0YXJDcmM0IiwicGxheWVycyIsImlkIiwibmFtZSIsInJhdGluZyIsImF2YXRhciIsInN5bWJvbCIsIkNST1NTIiwiWkVSTyIsIlRSSUFOR0xFIiwiU1FVQVJFIiwiR2FtZUluZm8iLCJjbGFzc05hbWUiLCJwbGF5ZXJzQ291bnQiLCJjdXJyZW50TW92ZSIsImRpdiIsInNsaWNlIiwibWFwIiwicGxheWVyIiwiaW5kZXgiLCJQbGF5ZXJJbmZvIiwicGxheWVySW5mbyIsImlzUmlnaHQiLCJpc1RpbWVyUnVubmluZyIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwibWludXRlc1N0cmluZyIsIlN0cmluZyIsIk1hdGgiLCJmbG9vciIsInBhZFN0YXJ0Iiwic2Vjb25kc1N0cmluZyIsImlzRGFuZ2VyIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJtYXgiLCJjbGVhckludGVydmFsIiwiZ2V0VGltZXJDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/game-info.jsx\n"));

/***/ })

});