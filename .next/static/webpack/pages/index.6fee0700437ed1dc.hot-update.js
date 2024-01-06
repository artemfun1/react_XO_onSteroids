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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/Game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n/* harmony import */ var _images_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/1.png */ \"./components/Game/images/1.png\");\n/* harmony import */ var _images_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/2.png */ \"./components/Game/images/2.png\");\n/* harmony import */ var _images_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/3.png */ \"./components/Game/images/3.png\");\n/* harmony import */ var _images_4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/4.png */ \"./components/Game/images/4.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"Paromovevg\",\n        rating: 1231,\n        avatar: _images_1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"VereIntedinglapotur\",\n        rating: 850,\n        avatar: _images_2_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"Lara\",\n        rating: 1400,\n        avatar: _images_3_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 4,\n        name: \"Додик\",\n        rating: 760,\n        avatar: _images_4_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className, playersCount, currentMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 \"),\n        children: players.slice(0, playersCount).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player,\n                isRight: index % 2 === 1,\n                isTimerRunning: currentMove === player.symbol\n            }, player.id, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight, isTimerRunning } = param;\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(60);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds < 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isTimerRunning) {\n            const interval = setInterval(()=>{\n                setSeconds((prev)=>Math.max(prev - 1, 0));\n            }, 1000);\n            return ()=>{\n                clearInterval(interval);\n                setSeconds(60);\n            };\n        }\n    }, [\n        isTimerRunning\n    ]);\n    function getTimerColor() {\n        if (isTimerRunning) {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_3__.Profile, {\n                        className: \"w-44\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"w-px h-6 bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold w-[60px]\", isRight && \"order-1\", isDanger ? \"text-orange-600\" : \"text-slate-900\"),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_s(PlayerInfo, \"T5PhQ9L5KSVb8XiZCZPVWhaJCbk=\");\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lL2dhbWUtaW5mby5qc3g/YmQwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCIuLi9wcm9maWxlXCI7XG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tIFwiLi9nYW1lLXN5bWJvbFwiO1xuaW1wb3J0IGF2YXRhckNyYzEgZnJvbSBcIi4vaW1hZ2VzLzEucG5nXCI7XG5pbXBvcnQgYXZhdGFyQ3JjMiBmcm9tIFwiLi9pbWFnZXMvMi5wbmdcIjtcbmltcG9ydCBhdmF0YXJDcmMzIGZyb20gXCIuL2ltYWdlcy8zLnBuZ1wiO1xuaW1wb3J0IGF2YXRhckNyYzQgZnJvbSBcIi4vaW1hZ2VzLzQucG5nXCI7XG5cbmNvbnN0IHBsYXllcnMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIlBhcm9tb3ZldmdcIixcbiAgICByYXRpbmc6IDEyMzEsXG4gICAgYXZhdGFyOiBhdmF0YXJDcmMxLFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLkNST1NTLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogXCJWZXJlSW50ZWRpbmdsYXBvdHVyXCIsXG4gICAgcmF0aW5nOiA4NTAsXG4gICAgYXZhdGFyOiBhdmF0YXJDcmMyLFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLlpFUk8sXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIkxhcmFcIixcbiAgICByYXRpbmc6IDE0MDAsXG4gICAgYXZhdGFyOiBhdmF0YXJDcmMzLFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLlRSSUFOR0xFLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogXCLQlNC+0LTQuNC6XCIsXG4gICAgcmF0aW5nOiA3NjAsXG4gICAgYXZhdGFyOiBhdmF0YXJDcmM0LFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLlNRVUFSRSxcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lSW5mbyh7IGNsYXNzTmFtZSwgcGxheWVyc0NvdW50LCBjdXJyZW50TW92ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIFwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHktNCBncmlkIGdyaWQtY29scy0yIGdhcC0zIFwiLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7cGxheWVycy5zbGljZSgwLCBwbGF5ZXJzQ291bnQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxuICAgICAgICA8UGxheWVySW5mb1xuICAgICAgICAgIGtleT17cGxheWVyLmlkfVxuICAgICAgICAgIHBsYXllckluZm89e3BsYXllcn1cbiAgICAgICAgICBpc1JpZ2h0PXtpbmRleCAlIDIgPT09IDF9XG4gICAgICAgICAgaXNUaW1lclJ1bm5pbmc9e2N1cnJlbnRNb3ZlID09PSBwbGF5ZXIuc3ltYm9sfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBsYXllckluZm8oeyBwbGF5ZXJJbmZvLCBpc1JpZ2h0LCBpc1RpbWVyUnVubmluZyB9KSB7XG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDYwKTtcblxuICBjb25zdCBtaW51dGVzU3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCBzZWNvbmRzU3RyaW5nID0gU3RyaW5nKHNlY29uZHMgJSA2MCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuXG4gIGNvbnN0IGlzRGFuZ2VyID0gc2Vjb25kcyA8IDEwO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzVGltZXJSdW5uaW5nKSB7XG4gICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRTZWNvbmRzKChwcmV2KSA9PiBNYXRoLm1heChwcmV2IC0gMSwgMCkpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICAgICAgc2V0U2Vjb25kcyg2MClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpc1RpbWVyUnVubmluZ10pO1xuXG4gIGZ1bmN0aW9uIGdldFRpbWVyQ29sb3IoKXtcbiAgICBpZihpc1RpbWVyUnVubmluZyl7XG4gICAgICBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChcInJlbGF0aXZlXCIsIGlzUmlnaHQgJiYgXCJvcmRlci0zXCIpfT5cbiAgICAgICAgPFByb2ZpbGVcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQ0XCJcbiAgICAgICAgICBuYW1lPXtwbGF5ZXJJbmZvLm5hbWV9XG4gICAgICAgICAgcmF0aW5nPXtwbGF5ZXJJbmZvLnJhdGluZ31cbiAgICAgICAgICBhdmF0YXI9e3BsYXllckluZm8uYXZhdGFyfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdyBhYnNvbHV0ZSAtbGVmdC0xIC10b3AtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxHYW1lU3ltYm9sIHN5bWJvbD17cGxheWVySW5mby5zeW1ib2x9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcInctcHggaC02IGJnLXNsYXRlLTIwMFwiLCBpc1JpZ2h0ICYmIFwib3JkZXItMlwiKX1cbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgIFwidGV4dC1sZyBmb250LXNlbWlib2xkIHctWzYwcHhdXCIsXG4gICAgICAgICAgaXNSaWdodCAmJiBcIm9yZGVyLTFcIixcbiAgICAgICAgICBpc0RhbmdlciA/IFwidGV4dC1vcmFuZ2UtNjAwXCIgOiBcInRleHQtc2xhdGUtOTAwXCIsXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHttaW51dGVzU3RyaW5nfTp7c2Vjb25kc1N0cmluZ31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2ZpbGUiLCJHQU1FX1NZTUJPTFMiLCJHYW1lU3ltYm9sIiwiYXZhdGFyQ3JjMSIsImF2YXRhckNyYzIiLCJhdmF0YXJDcmMzIiwiYXZhdGFyQ3JjNCIsInBsYXllcnMiLCJpZCIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJzeW1ib2wiLCJDUk9TUyIsIlpFUk8iLCJUUklBTkdMRSIsIlNRVUFSRSIsIkdhbWVJbmZvIiwiY2xhc3NOYW1lIiwicGxheWVyc0NvdW50IiwiY3VycmVudE1vdmUiLCJkaXYiLCJzbGljZSIsIm1hcCIsInBsYXllciIsImluZGV4IiwiUGxheWVySW5mbyIsInBsYXllckluZm8iLCJpc1JpZ2h0IiwiaXNUaW1lclJ1bm5pbmciLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsIm1pbnV0ZXNTdHJpbmciLCJTdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJwYWRTdGFydCIsInNlY29uZHNTdHJpbmciLCJpc0RhbmdlciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2IiwibWF4IiwiY2xlYXJJbnRlcnZhbCIsImdldFRpbWVyQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Game/game-info.jsx\n"));

/***/ })

});