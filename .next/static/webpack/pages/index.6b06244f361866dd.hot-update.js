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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n/* harmony import */ var _use_game_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-game-state */ \"./components/Game/use-game-state.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction GameField(param) {\n    let { className, playersCount } = param;\n    _s();\n    const { cells, currentMove, nextMove, handleCellClick } = (0,_use_game_state__WEBPACK_IMPORTED_MODULE_4__.useGameState)();\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                className: \"\",\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                className: \"\",\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>{\n                            handleCellClick(i);\n                        },\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                            symbol: symbol,\n                            className: \"w-5 h-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 24\n                        }, this)\n                    }, i, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(GameField, \"Iokfy56b83uDaDhJMokoXH1xWdM=\", false, function() {\n    return [\n        _use_game_state__WEBPACK_IMPORTED_MODULE_4__.useGameState\n    ];\n});\n_c = GameField;\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5  pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-x-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Xoд:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ3NCO0FBQ0g7QUFDSztBQUV6QyxTQUFTSSxVQUFVLEtBQTJCO1FBQTNCLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFFLEdBQTNCOztJQUN4QixNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRSxHQUFHUCw2REFBWUE7SUFFdEUsTUFBTVEsd0JBQ0o7OzBCQUNFLDhEQUFDVixzREFBUUE7Z0JBQUNJLFdBQVU7Z0JBQUdPLE1BQUs7Z0JBQUtDLFNBQVE7MEJBQVU7Ozs7OzswQkFHbkQsOERBQUNaLHNEQUFRQTtnQkFBQ0ksV0FBVTtnQkFBR08sTUFBSztnQkFBS0MsU0FBUTswQkFBVTs7Ozs7Ozs7SUFNdkQscUJBQ0UsOERBQUNDO1FBQWdCVCxXQUFXQTs7MEJBQzFCLDhEQUFDVTtnQkFDQ0osU0FBU0E7Z0JBQ1RILGFBQWFBO2dCQUNiQyxVQUFVQTs7Ozs7OzBCQUVaLDhEQUFDTzswQkFDRVQsTUFBTVUsR0FBRyxDQUFDLENBQUNDLFFBQVFDLGtCQUNsQiw4REFBQ0M7d0JBRUNDLFNBQVM7NEJBQ1BYLGdCQUFnQlM7d0JBQ2xCO2tDQUVDRCx3QkFBVSw4REFBQ2hCLG9EQUFVQTs0QkFBQ2dCLFFBQVFBOzRCQUFRYixXQUFVOzs7Ozs7dUJBTDVDYzs7Ozs7Ozs7Ozs7Ozs7OztBQVdqQjtHQW5DZ0JmOztRQUM0Q0QseURBQVlBOzs7S0FEeERDO0FBcUNoQixTQUFTZ0IsU0FBUyxLQUFxQjtRQUFyQixFQUFFRSxRQUFRLEVBQUVELE9BQU8sRUFBRSxHQUFyQjtJQUNoQixxQkFDRSw4REFBQ0U7UUFDQ0YsU0FBU0E7UUFDVGhCLFdBQVU7a0JBRVRpQjs7Ozs7O0FBR1A7TUFUU0Y7QUFXVCxTQUFTTixnQkFBZ0IsS0FBdUI7UUFBdkIsRUFBRVEsUUFBUSxFQUFFakIsU0FBUyxFQUFFLEdBQXZCO0lBQ3ZCLHFCQUNFLDhEQUFDbUI7UUFDQ25CLFdBQVdMLGdEQUFJQSxDQUNiSyxXQUNBO2tCQUdEaUI7Ozs7OztBQUdQO01BWFNSO0FBYVQsU0FBU0MsYUFBYSxLQUFrQztRQUFsQyxFQUFFSixPQUFPLEVBQUVILFdBQVcsRUFBRUMsUUFBUSxFQUFFLEdBQWxDO0lBQ3BCLHFCQUNFLDhEQUFDZTtRQUFJbkIsV0FBVTs7MEJBQ2IsOERBQUNtQjtnQkFBSW5CLFdBQVU7O2tDQUNiLDhEQUFDbUI7d0JBQUluQixXQUFVOzs0QkFBOEQ7MENBRTNFLDhEQUFDSCxvREFBVUE7Z0NBQUNnQixRQUFRVjtnQ0FBYUgsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUc3Qyw4REFBQ21CO3dCQUFJbkIsV0FBVTs7NEJBQWlEOzBDQUNuRCw4REFBQ0gsb0RBQVVBO2dDQUFDZ0IsUUFBUVQ7Z0NBQVVKLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUd0RE07Ozs7Ozs7QUFHUDtNQWhCU0k7QUFrQlQsU0FBU0MsU0FBUyxLQUFZO1FBQVosRUFBRU0sUUFBUSxFQUFFLEdBQVo7SUFDaEIscUJBQ0UsOERBQUNFO1FBQUluQixXQUFVO2tCQUNaaUI7Ozs7OztBQUdQO01BTlNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS9nYW1lLWZpZWxkLmpzeD81MjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gXCIuLi91aWtpdC91aS1idXR0b25cIjtcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tIFwiLi9nYW1lLXN5bWJvbFwiO1xuaW1wb3J0IHsgdXNlR2FtZVN0YXRlIH0gZnJvbSBcIi4vdXNlLWdhbWUtc3RhdGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVGaWVsZCh7IGNsYXNzTmFtZSwgcGxheWVyc0NvdW50IH0pIHtcbiAgY29uc3QgeyBjZWxscywgY3VycmVudE1vdmUsIG5leHRNb3ZlLCBoYW5kbGVDZWxsQ2xpY2sgfSA9IHVzZUdhbWVTdGF0ZSgpO1xuXG4gIGNvbnN0IGFjdGlvbnMgPSAoXG4gICAgPD5cbiAgICAgIDxVaUJ1dHRvbiBjbGFzc05hbWU9XCJcIiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICDQndC40YfRjNGPXG4gICAgICA8L1VpQnV0dG9uPlxuICAgICAgPFVpQnV0dG9uIGNsYXNzTmFtZT1cIlwiIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgINCh0LTQsNGC0YzRgdGPXG4gICAgICA8L1VpQnV0dG9uPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdhbWVGaWVsZExheW91dCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8R2FtZU1vdmVJbmZvXG4gICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICAgIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cbiAgICAgICAgbmV4dE1vdmU9e25leHRNb3ZlfVxuICAgICAgLz5cbiAgICAgIDxHYW1lR3JpZD5cbiAgICAgICAge2NlbGxzLm1hcCgoc3ltYm9sLCBpKSA9PiAoXG4gICAgICAgICAgPEdhbWVDZWxsXG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGhhbmRsZUNlbGxDbGljayhpKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N5bWJvbCAmJiA8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+fVxuICAgICAgICAgIDwvR2FtZUNlbGw+XG4gICAgICAgICkpfVxuICAgICAgPC9HYW1lR3JpZD5cbiAgICA8L0dhbWVGaWVsZExheW91dD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2FtZUNlbGwoeyBjaGlsZHJlbiwgb25DbGljayB9KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2FtZUZpZWxkTGF5b3V0KHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIFwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSAgcGItN1wiLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVNb3ZlSW5mbyh7IGFjdGlvbnMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTMgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhsIGxlYWRpbmctdGlnaHQgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIFhv0LQ6XG4gICAgICAgICAgPEdhbWVTeW1ib2wgc3ltYm9sPXtjdXJyZW50TW92ZX0gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgINCh0LvQtdC00YPRjtGJ0LjQuTogPEdhbWVTeW1ib2wgc3ltYm9sPXtuZXh0TW92ZX0gY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7YWN0aW9uc31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2FtZUdyaWQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bcmVwZWF0KDE5LF8zMHB4KV0gZ3JpZC1yb3dzLVtyZXBlYXQoMTksXzMwcHgpXSBwbC1weCBwdC1weCBtdC0zXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY2xzeCIsIlVpQnV0dG9uIiwiR2FtZVN5bWJvbCIsInVzZUdhbWVTdGF0ZSIsIkdhbWVGaWVsZCIsImNsYXNzTmFtZSIsInBsYXllcnNDb3VudCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImFjdGlvbnMiLCJzaXplIiwidmFyaWFudCIsIkdhbWVGaWVsZExheW91dCIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVHcmlkIiwibWFwIiwic3ltYm9sIiwiaSIsIkdhbWVDZWxsIiwib25DbGljayIsImNoaWxkcmVuIiwiYnV0dG9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Game/game-field.jsx\n"));

/***/ })

});