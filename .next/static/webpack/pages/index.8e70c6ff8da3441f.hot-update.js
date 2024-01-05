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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/Game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MOVE_ORDERS = [\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n];\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    function getNextMove(currenMove) {\n        const nextMoveIndex = MOVE_ORDERS.indexOf(currenMove) + 1;\n        var _MOVE_ORDERS_nextMoveIndex;\n        return (_MOVE_ORDERS_nextMoveIndex = MOVE_ORDERS[nextMoveIndex]) !== null && _MOVE_ORDERS_nextMoveIndex !== void 0 ? _MOVE_ORDERS_nextMoveIndex : MOVE_ORDERS[0];\n    }\n    const [gameState, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO\n        }));\n    const nextMove = getNextMove(gameState.currentMove);\n    const handleCellClick = (index)=>{\n        setGameState((prev)=>({\n                ...prev\n            }));\n    };\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UiButton, {\n                className: \"\",\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UiButton, {\n                className: \"\",\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>{\n                            handleCellClick(i);\n                        },\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                            symbol: symbol,\n                            className: \"w-5 h-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, this)\n                    }, i, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(GameField, \"Yo13oTUD7lDn7XlloqTiX7vjAy4=\");\n_c = GameField;\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5  pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove: currentMove1, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-x-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Xoд:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: currentMove1,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEdBQVo7SUFDaEIscUJBQ0UsOERBQUNFO1FBQUk1QixXQUFVO2tCQUNaMEI7Ozs7OztBQUdQO01BTlNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS9nYW1lLWZpZWxkLmpzeD81MjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiLi4vdWlraXQvdWktYnV0dG9uXCI7XG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tIFwiLi9nYW1lLXN5bWJvbFwiO1xuXG5cbmNvbnN0IE1PVkVfT1JERVJTID0gW1xuICBHQU1FX1NZTUJPTFMuQ1JPU1MsXG4gIEdBTUVfU1lNQk9MUy5aRVJPLFxuICBHQU1FX1NZTUJPTFMuVFJJQU5HTEUsXG4gIEdBTUVfU1lNQk9MUy5TUVVBUkUsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUZpZWxkKHsgY2xhc3NOYW1lIH0pIHtcblxuICBmdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW5Nb3ZlKSB7XG4gICAgXG4gICAgY29uc3QgbmV4dE1vdmVJbmRleCA9IE1PVkVfT1JERVJTLmluZGV4T2YoY3VycmVuTW92ZSkgKyAxO1xuICAgIHJldHVybiBNT1ZFX09SREVSU1tuZXh0TW92ZUluZGV4XSA/PyBNT1ZFX09SREVSU1swXTtcbiAgfVxuXG4gXG4gIGNvbnN0IFtnYW1lU3RhdGUsIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKT0+KHtcbiAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG4gICAgY3VycmVudE1vdmU6IEdBTUVfU1lNQk9MUy5aRVJPXG4gIH0pKVxuXG4gIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlKTtcblxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHsgICAgXG4gIFxuICAgIHNldEdhbWVTdGF0ZShwcmV2PT4oe1xuICAgICAgLi4ucHJldixcbiAgICAgIFxuICAgIH0pKVxuXG4gICBcbiAgfVxuXG4gIGNvbnN0IGFjdGlvbnMgPSAoXG4gICAgPD5cbiAgICAgIDxVaUJ1dHRvbiBjbGFzc05hbWU9XCJcIiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICDQndC40YfRjNGPXG4gICAgICA8L1VpQnV0dG9uPlxuICAgICAgPFVpQnV0dG9uIGNsYXNzTmFtZT1cIlwiIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgINCh0LTQsNGC0YzRgdGPXG4gICAgICA8L1VpQnV0dG9uPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdhbWVGaWVsZExheW91dCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8R2FtZU1vdmVJbmZvIGFjdGlvbnM9e2FjdGlvbnN9IGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX0gbmV4dE1vdmU9e25leHRNb3ZlfS8+XG5cbiAgICAgIDxHYW1lR3JpZD5cbiAgICAgICAge2NlbGxzLm1hcCgoc3ltYm9sLCBpKSA9PiAoXG4gICAgICAgICAgPEdhbWVDZWxsIGtleT17aX0gb25DbGljaz17KCk9PntoYW5kbGVDZWxsQ2xpY2soaSl9fT5cbiAgICAgICAgICAgIHtzeW1ib2wgJiYgKFxuICAgICAgICAgICAgICA8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gY2xhc3NOYW1lPSd3LTUgaC01Jy8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9HYW1lQ2VsbD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dhbWVHcmlkPlxuICAgIDwvR2FtZUZpZWxkTGF5b3V0PlxuICApO1xufVxuXG5mdW5jdGlvbiBHYW1lQ2VsbCh7IGNoaWxkcmVuLCBvbkNsaWNrfSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgLW1sLXB4IC1tdC1weCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBHYW1lRmllbGRMYXlvdXQoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgXCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBwdC01ICBwYi03XCIsXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2FtZU1vdmVJbmZvKHsgYWN0aW9ucywgY3VycmVudE1vdmUsIG5leHRNb3ZlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtMyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteGwgbGVhZGluZy10aWdodCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgWG/QtDpcbiAgICAgICAgICA8R2FtZVN5bWJvbCBzeW1ib2w9e2N1cnJlbnRNb3ZlfSBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAg0KHQu9C10LTRg9GO0YnQuNC5OiA8R2FtZVN5bWJvbCBzeW1ib2w9e25leHRNb3ZlfSBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthY3Rpb25zfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBHYW1lR3JpZCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMTksXzMwcHgpXSBncmlkLXJvd3MtW3JlcGVhdCgxOSxfMzBweCldIHBsLXB4IHB0LXB4IG10LTNcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjbHN4IiwidXNlU3RhdGUiLCJVaUJ1dHRvbiIsIkdBTUVfU1lNQk9MUyIsIkdhbWVTeW1ib2wiLCJNT1ZFX09SREVSUyIsIkNST1NTIiwiWkVSTyIsIlRSSUFOR0xFIiwiU1FVQVJFIiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW5Nb3ZlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJnYW1lU3RhdGUiLCJzZXRHYW1lU3RhdGUiLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsImN1cnJlbnRNb3ZlIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsInByZXYiLCJhY3Rpb25zIiwic2l6ZSIsInZhcmlhbnQiLCJHYW1lRmllbGRMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJHYW1lR3JpZCIsIm1hcCIsInN5bWJvbCIsImkiLCJHYW1lQ2VsbCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImJ1dHRvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/game-field.jsx\n"));

/***/ })

});