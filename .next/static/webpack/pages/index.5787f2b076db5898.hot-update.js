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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; },\n/* harmony export */   GameSymbol: function() { return /* reexport safe */ _game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./components/Game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n/* harmony import */ var _images_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/1.png */ \"./components/Game/images/1.png\");\n/* harmony import */ var _images_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/2.png */ \"./components/Game/images/2.png\");\n/* harmony import */ var _images_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/3.png */ \"./components/Game/images/3.png\");\n/* harmony import */ var _images_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/4.png */ \"./components/Game/images/4.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"Paromovevg\",\n        rating: 1231,\n        avatar: _images_1_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"VereIntedinglapotur\",\n        rating: 850,\n        avatar: _images_2_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"Lara\",\n        rating: 1400,\n        avatar: _images_3_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 4,\n        name: \"Додик\",\n        rating: 760,\n        avatar: _images_4_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className, playersCount } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 \"),\n        children: players.slice(0, playersCount).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player,\n                isRight: index % 2 === 1\n            }, player.id, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight } = param;\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(60);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String((seconds % 60).padStart(2, \"0\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-44\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"w-px h-6 bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-slate-900 text-lg font-semibold\", isRight && \"order-1\"),\n                children: [\n                    minutesString,\n                    \" : \",\n                    seconds\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-info.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(PlayerInfo, \"lzYD1ptZ6fgXwV2561MboLyjaLc=\");\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ2E7QUFDTTtBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDUjtBQUNXO0FBRTNDLE1BQU1TLFVBQVU7SUFDZDtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRVCxxREFBVUE7UUFDbEJVLFFBQVFaLG9EQUFZQSxDQUFDYSxLQUFLO0lBQzVCO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUVIscURBQVVBO1FBQ2xCUyxRQUFRWixvREFBWUEsQ0FBQ2MsSUFBSTtJQUMzQjtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVFQLHFEQUFVQTtRQUNsQlEsUUFBUVosb0RBQVlBLENBQUNlLFFBQVE7SUFDL0I7SUFDQTtRQUNFUCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRTixxREFBVUE7UUFDbEJPLFFBQVFaLG9EQUFZQSxDQUFDZ0IsTUFBTTtJQUM3QjtDQUNEO0FBRU0sU0FBU0MsU0FBUyxLQUEyQjtRQUEzQixFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRSxHQUEzQjtJQUN2QixxQkFDRSw4REFBQ0M7UUFDQ0YsV0FBV3BCLGdEQUFJQSxDQUNib0IsV0FDQTtrQkFHRFgsUUFBUWMsS0FBSyxDQUFDLEdBQUdGLGNBQWNHLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDM0MsOERBQUNDO2dCQUVDQyxZQUFZSDtnQkFDWkksU0FBU0gsUUFBUSxNQUFNO2VBRmxCRCxPQUFPZixFQUFFOzs7Ozs7Ozs7O0FBT3hCO0tBakJnQlM7QUFtQmhCLFNBQVNRLFdBQVcsS0FBdUI7UUFBdkIsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUUsR0FBdkI7O0lBRWxCLE1BQU0sQ0FBQ0MsU0FBVUMsV0FBVyxHQUFHdkIsK0NBQVFBLENBQUM7SUFDeEMsTUFBTXdCLGdCQUFnQkMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDTCxVQUFVLEtBQUtNLFFBQVEsQ0FBQyxHQUFHO0lBQ25FLE1BQU1DLGdCQUFnQkosT0FBTyxDQUFDSCxVQUFVLEVBQUMsRUFBR00sUUFBUSxDQUFDLEdBQUc7SUFHeEQscUJBQ0UsOERBQUNkO1FBQUlGLFdBQVU7OzBCQUNiLDhEQUFDRTtnQkFBSUYsV0FBV3BCLGdEQUFJQSxDQUFDLFlBQVk2QixXQUFXOztrQ0FDMUMsOERBQUM1Qiw2Q0FBT0E7d0JBQ05tQixXQUFVO3dCQUNWVCxNQUFNaUIsV0FBV2pCLElBQUk7d0JBQ3JCQyxRQUFRZ0IsV0FBV2hCLE1BQU07d0JBQ3pCQyxRQUFRZSxXQUFXZixNQUFNOzs7Ozs7a0NBRTNCLDhEQUFDUzt3QkFBSUYsV0FBVTtrQ0FDYiw0RUFBQ2pCLG9EQUFVQTs0QkFBQ1csUUFBUWMsV0FBV2QsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3pDLDhEQUFDUTtnQkFDQ0YsV0FBV3BCLGdEQUFJQSxDQUFDLHlCQUF5QjZCLFdBQVc7Ozs7OzswQkFFdEQsOERBQUNQO2dCQUNDRixXQUFXcEIsZ0RBQUlBLENBQ2Isd0NBQ0E2QixXQUFXOztvQkFHWkc7b0JBQWM7b0JBQUlGOzs7Ozs7Ozs7Ozs7O0FBSTNCO0dBakNTSDtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWUvZ2FtZS1pbmZvLmpzeD9iZDBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGVcIjtcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gXCIuL2dhbWUtc3ltYm9sXCI7XG5pbXBvcnQgYXZhdGFyQ3JjMSBmcm9tIFwiLi9pbWFnZXMvMS5wbmdcIjtcbmltcG9ydCBhdmF0YXJDcmMyIGZyb20gXCIuL2ltYWdlcy8yLnBuZ1wiO1xuaW1wb3J0IGF2YXRhckNyYzMgZnJvbSBcIi4vaW1hZ2VzLzMucG5nXCI7XG5pbXBvcnQgYXZhdGFyQ3JjNCBmcm9tIFwiLi9pbWFnZXMvNC5wbmdcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5leHBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcblxuY29uc3QgcGxheWVycyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiUGFyb21vdmV2Z1wiLFxuICAgIHJhdGluZzogMTIzMSxcbiAgICBhdmF0YXI6IGF2YXRhckNyYzEsXG4gICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIlZlcmVJbnRlZGluZ2xhcG90dXJcIixcbiAgICByYXRpbmc6IDg1MCxcbiAgICBhdmF0YXI6IGF2YXRhckNyYzIsXG4gICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuWkVSTyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6IFwiTGFyYVwiLFxuICAgIHJhdGluZzogMTQwMCxcbiAgICBhdmF0YXI6IGF2YXRhckNyYzMsXG4gICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuVFJJQU5HTEUsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiBcItCU0L7QtNC40LpcIixcbiAgICByYXRpbmc6IDc2MCxcbiAgICBhdmF0YXI6IGF2YXRhckNyYzQsXG4gICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuU1FVQVJFLFxuICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVJbmZvKHsgY2xhc3NOYW1lLCBwbGF5ZXJzQ291bnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBcImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB5LTQgZ3JpZCBncmlkLWNvbHMtMiBnYXAtMyBcIixcbiAgICAgICl9XG4gICAgPlxuICAgICAge3BsYXllcnMuc2xpY2UoMCwgcGxheWVyc0NvdW50KS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcbiAgICAgICAgPFBsYXllckluZm9cbiAgICAgICAgICBrZXk9e3BsYXllci5pZH1cbiAgICAgICAgICBwbGF5ZXJJbmZvPXtwbGF5ZXJ9XG4gICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBsYXllckluZm8oeyBwbGF5ZXJJbmZvLCBpc1JpZ2h0IH0pIHtcblxuICBjb25zdCBbc2Vjb25kcyAsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoNjApXG4gIGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApKS5wYWRTdGFydCgyLCAnMCcpXG4gIGNvbnN0IHNlY29uZHNTdHJpbmcgPSBTdHJpbmcoKHNlY29uZHMgJSA2MCkucGFkU3RhcnQoMiwgJzAnKSlcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwicmVsYXRpdmVcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTNcIil9PlxuICAgICAgICA8UHJvZmlsZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNDRcIlxuICAgICAgICAgIG5hbWU9e3BsYXllckluZm8ubmFtZX1cbiAgICAgICAgICByYXRpbmc9e3BsYXllckluZm8ucmF0aW5nfVxuICAgICAgICAgIGF2YXRhcj17cGxheWVySW5mby5hdmF0YXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93IGFic29sdXRlIC1sZWZ0LTEgLXRvcC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPEdhbWVTeW1ib2wgc3ltYm9sPXtwbGF5ZXJJbmZvLnN5bWJvbH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwidy1weCBoLTYgYmctc2xhdGUtMjAwXCIsIGlzUmlnaHQgJiYgXCJvcmRlci0yXCIpfVxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgXCJ0ZXh0LXNsYXRlLTkwMCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIixcbiAgICAgICAgICBpc1JpZ2h0ICYmIFwib3JkZXItMVwiLFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7bWludXRlc1N0cmluZ30gOiB7c2Vjb25kc31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJQcm9maWxlIiwiR0FNRV9TWU1CT0xTIiwiR2FtZVN5bWJvbCIsImF2YXRhckNyYzEiLCJhdmF0YXJDcmMyIiwiYXZhdGFyQ3JjMyIsImF2YXRhckNyYzQiLCJ1c2VTdGF0ZSIsInBsYXllcnMiLCJpZCIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJzeW1ib2wiLCJDUk9TUyIsIlpFUk8iLCJUUklBTkdMRSIsIlNRVUFSRSIsIkdhbWVJbmZvIiwiY2xhc3NOYW1lIiwicGxheWVyc0NvdW50IiwiZGl2Iiwic2xpY2UiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsIlBsYXllckluZm8iLCJwbGF5ZXJJbmZvIiwiaXNSaWdodCIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwibWludXRlc1N0cmluZyIsIlN0cmluZyIsIk1hdGgiLCJmbG9vciIsInBhZFN0YXJ0Iiwic2Vjb25kc1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/game-info.jsx\n"));

/***/ })

});