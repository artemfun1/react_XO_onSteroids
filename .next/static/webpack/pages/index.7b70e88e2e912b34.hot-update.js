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

/***/ "./components/Game/game-field.jsx":
/*!****************************************!*\
  !*** ./components/Game/game-field.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/Game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MOVE_ORDERS = [\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n];\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    function getNextMove(currenMove) {\n        const nextMoveIndex = MOVE_ORDERS.indexOf(currenMove) + 1;\n        var _MOVE_ORDERS_nextMoveIndex;\n        return (_MOVE_ORDERS_nextMoveIndex = MOVE_ORDERS[nextMoveIndex]) !== null && _MOVE_ORDERS_nextMoveIndex !== void 0 ? _MOVE_ORDERS_nextMoveIndex : MOVE_ORDERS[0];\n    }\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>new Array(19 * 19).fill(null));\n    const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO);\n    const nextMove = getNextMove(currentMove);\n    const handleCellClick = (index)=>{\n        setCurrentMove((lastCurrentMove)=>getNextMove(lastCurrentMove));\n        setCells((lastCells)=>{});\n    };\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UiButton, {\n                className: \"\",\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UiButton, {\n                className: \"\",\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>{\n                            handleCellClick(i);\n                        },\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                            symbol: symbol,\n                            className: \"w-5 h-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, this)\n                    }, i, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(GameField, \"4VyosWKr1x15MdKA3gTkzMirMzg=\");\n_c = GameField;\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5  pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-x-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Xoд:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVNLFFBQVEsRUFBRSxHQUFaO0lBQ2hCLHFCQUNFLDhEQUFDRTtRQUFJN0IsV0FBVTtrQkFDWjJCOzs7Ozs7QUFHUDtNQU5TTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWUvZ2FtZS1maWVsZC5qc3g/NTI0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIi4uL3Vpa2l0L3VpLWJ1dHRvblwiO1xuaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcblxuXG5jb25zdCBNT1ZFX09SREVSUyA9IFtcbiAgR0FNRV9TWU1CT0xTLkNST1NTLFxuICBHQU1FX1NZTUJPTFMuWkVSTyxcbiAgR0FNRV9TWU1CT0xTLlRSSUFOR0xFLFxuICBHQU1FX1NZTUJPTFMuU1FVQVJFLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVGaWVsZCh7IGNsYXNzTmFtZSB9KSB7XG5cbiAgZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVuTW92ZSkge1xuICAgIGNvbnN0IG5leHRNb3ZlSW5kZXggPSBNT1ZFX09SREVSUy5pbmRleE9mKGN1cnJlbk1vdmUpICsgMTtcbiAgICByZXR1cm4gTU9WRV9PUkRFUlNbbmV4dE1vdmVJbmRleF0gPz8gTU9WRV9PUkRFUlNbMF07XG4gIH1cblxuICBjb25zdCBbY2VsbHMsIHNldENlbGxzXSA9IHVzZVN0YXRlKCgpID0+IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpKTtcbiAgY29uc3QgW2N1cnJlbnRNb3ZlLCBzZXRDdXJyZW50TW92ZV0gPSB1c2VTdGF0ZShHQU1FX1NZTUJPTFMuWkVSTyk7XG5cbiAgXG5cbiAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7ICAgIFxuICAgIHNldEN1cnJlbnRNb3ZlKGxhc3RDdXJyZW50TW92ZSA9PiBnZXROZXh0TW92ZShsYXN0Q3VycmVudE1vdmUpKVxuXG4gICAgc2V0Q2VsbHMobGFzdENlbGxzID0+e1xuXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGFjdGlvbnMgPSAoXG4gICAgPD5cbiAgICAgIDxVaUJ1dHRvbiBjbGFzc05hbWU9XCJcIiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICDQndC40YfRjNGPXG4gICAgICA8L1VpQnV0dG9uPlxuICAgICAgPFVpQnV0dG9uIGNsYXNzTmFtZT1cIlwiIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgINCh0LTQsNGC0YzRgdGPXG4gICAgICA8L1VpQnV0dG9uPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdhbWVGaWVsZExheW91dCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8R2FtZU1vdmVJbmZvIGFjdGlvbnM9e2FjdGlvbnN9IGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX0gbmV4dE1vdmU9e25leHRNb3ZlfS8+XG5cbiAgICAgIDxHYW1lR3JpZD5cbiAgICAgICAge2NlbGxzLm1hcCgoc3ltYm9sLCBpKSA9PiAoXG4gICAgICAgICAgPEdhbWVDZWxsIGtleT17aX0gb25DbGljaz17KCk9PntoYW5kbGVDZWxsQ2xpY2soaSl9fT5cbiAgICAgICAgICAgIHtzeW1ib2wgJiYgKFxuICAgICAgICAgICAgICA8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gY2xhc3NOYW1lPSd3LTUgaC01Jy8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9HYW1lQ2VsbD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dhbWVHcmlkPlxuICAgIDwvR2FtZUZpZWxkTGF5b3V0PlxuICApO1xufVxuXG5mdW5jdGlvbiBHYW1lQ2VsbCh7IGNoaWxkcmVuLCBvbkNsaWNrfSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgLW1sLXB4IC1tdC1weCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBHYW1lRmllbGRMYXlvdXQoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgXCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBwdC01ICBwYi03XCIsXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2FtZU1vdmVJbmZvKHsgYWN0aW9ucywgY3VycmVudE1vdmUsIG5leHRNb3ZlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtMyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteGwgbGVhZGluZy10aWdodCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgWG/QtDpcbiAgICAgICAgICA8R2FtZVN5bWJvbCBzeW1ib2w9e2N1cnJlbnRNb3ZlfSBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAg0KHQu9C10LTRg9GO0YnQuNC5OiA8R2FtZVN5bWJvbCBzeW1ib2w9e25leHRNb3ZlfSBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthY3Rpb25zfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBHYW1lR3JpZCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMTksXzMwcHgpXSBncmlkLXJvd3MtW3JlcGVhdCgxOSxfMzBweCldIHBsLXB4IHB0LXB4IG10LTNcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjbHN4IiwidXNlU3RhdGUiLCJVaUJ1dHRvbiIsIkdBTUVfU1lNQk9MUyIsIkdhbWVTeW1ib2wiLCJNT1ZFX09SREVSUyIsIkNST1NTIiwiWkVSTyIsIlRSSUFOR0xFIiwiU1FVQVJFIiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW5Nb3ZlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJjZWxscyIsInNldENlbGxzIiwiQXJyYXkiLCJmaWxsIiwiY3VycmVudE1vdmUiLCJzZXRDdXJyZW50TW92ZSIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0Q3VycmVudE1vdmUiLCJsYXN0Q2VsbHMiLCJhY3Rpb25zIiwic2l6ZSIsInZhcmlhbnQiLCJHYW1lRmllbGRMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJHYW1lR3JpZCIsIm1hcCIsInN5bWJvbCIsImkiLCJHYW1lQ2VsbCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImJ1dHRvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/game-field.jsx\n"));

/***/ })

});