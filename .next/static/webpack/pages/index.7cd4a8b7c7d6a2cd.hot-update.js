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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n/* harmony import */ var _use_game_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-game-state */ \"./components/Game/use-game-state.jsx\");\n\n\n\n\n\nfunction GameField(param) {\n    let { className, cells, currentMove, nextMove, handleCellClick, winnerSequence } = param;\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                className: \"\",\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                className: \"\",\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>{\n                            handleCellClick(i);\n                        },\n                        isWinner: winnerSequence,\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                            symbol: symbol,\n                            className: \"w-5 h-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 24\n                        }, this)\n                    }, i, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c = GameField;\nfunction GameCell(param) {\n    let { children, onClick, isWinner } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(isWinner && bg, \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5  pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-x-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Xoд:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0I7QUFDc0I7QUFDSDtBQUNLO0FBRXpDLFNBQVNJLFVBQVUsS0FBNEU7UUFBNUUsRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUVDLGNBQWMsRUFBRSxHQUE1RTtJQUl4QixNQUFNQyx3QkFDSjs7MEJBQ0UsOERBQUNWLHNEQUFRQTtnQkFBQ0ksV0FBVTtnQkFBR08sTUFBSztnQkFBS0MsU0FBUTswQkFBVTs7Ozs7OzBCQUduRCw4REFBQ1osc0RBQVFBO2dCQUFDSSxXQUFVO2dCQUFHTyxNQUFLO2dCQUFLQyxTQUFROzBCQUFVOzs7Ozs7OztJQU12RCxxQkFDRSw4REFBQ0M7UUFBZ0JULFdBQVdBOzswQkFDMUIsOERBQUNVO2dCQUNDSixTQUFTQTtnQkFDVEosYUFBYUE7Z0JBQ2JDLFVBQVVBOzs7Ozs7MEJBRVosOERBQUNROzBCQUNFVixNQUFNVyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsa0JBQ2xCLDhEQUFDQzt3QkFFQ0MsU0FBUzs0QkFDUFosZ0JBQWdCVTt3QkFDbEI7d0JBQ0FHLFVBQVVaO2tDQUVUUSx3QkFBVSw4REFBQ2hCLG9EQUFVQTs0QkFBQ2dCLFFBQVFBOzRCQUFRYixXQUFVOzs7Ozs7dUJBTjVDYzs7Ozs7Ozs7Ozs7Ozs7OztBQVlqQjtLQXJDZ0JmO0FBdUNoQixTQUFTZ0IsU0FBUyxLQUErQjtRQUEvQixFQUFFRyxRQUFRLEVBQUVGLE9BQU8sRUFBRUMsUUFBUSxFQUFFLEdBQS9CO0lBQ2hCLHFCQUNFLDhEQUFDRTtRQUNDSCxTQUFTQTtRQUNUaEIsV0FBV0wsZ0RBQUlBLENBQUNzQixZQUFXRyxJQUFJO2tCQUU5QkY7Ozs7OztBQUdQO01BVFNIO0FBV1QsU0FBU04sZ0JBQWdCLEtBQXVCO1FBQXZCLEVBQUVTLFFBQVEsRUFBRWxCLFNBQVMsRUFBRSxHQUF2QjtJQUN2QixxQkFDRSw4REFBQ3FCO1FBQ0NyQixXQUFXTCxnREFBSUEsQ0FDYkssV0FDQTtrQkFHRGtCOzs7Ozs7QUFHUDtNQVhTVDtBQWFULFNBQVNDLGFBQWEsS0FBa0M7UUFBbEMsRUFBRUosT0FBTyxFQUFFSixXQUFXLEVBQUVDLFFBQVEsRUFBRSxHQUFsQztJQUNwQixxQkFDRSw4REFBQ2tCO1FBQUlyQixXQUFVOzswQkFDYiw4REFBQ3FCO2dCQUFJckIsV0FBVTs7a0NBQ2IsOERBQUNxQjt3QkFBSXJCLFdBQVU7OzRCQUE4RDswQ0FFM0UsOERBQUNILG9EQUFVQTtnQ0FBQ2dCLFFBQVFYO2dDQUFhRixXQUFVOzs7Ozs7Ozs7Ozs7a0NBRzdDLDhEQUFDcUI7d0JBQUlyQixXQUFVOzs0QkFBaUQ7MENBQ25ELDhEQUFDSCxvREFBVUE7Z0NBQUNnQixRQUFRVjtnQ0FBVUgsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR3RETTs7Ozs7OztBQUdQO01BaEJTSTtBQWtCVCxTQUFTQyxTQUFTLEtBQVk7UUFBWixFQUFFTyxRQUFRLEVBQUUsR0FBWjtJQUNoQixxQkFDRSw4REFBQ0c7UUFBSXJCLFdBQVU7a0JBQ1prQjs7Ozs7O0FBR1A7TUFOU1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lL2dhbWUtZmllbGQuanN4PzUyNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIi4uL3Vpa2l0L3VpLWJ1dHRvblwiO1xuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gXCIuL2dhbWUtc3ltYm9sXCI7XG5pbXBvcnQgeyB1c2VHYW1lU3RhdGUgfSBmcm9tIFwiLi91c2UtZ2FtZS1zdGF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUZpZWxkKHsgY2xhc3NOYW1lLCBjZWxscywgY3VycmVudE1vdmUsIG5leHRNb3ZlLCBoYW5kbGVDZWxsQ2xpY2ssIHdpbm5lclNlcXVlbmNlIH0pIHtcblxuICBcblxuICBjb25zdCBhY3Rpb25zID0gKFxuICAgIDw+XG4gICAgICA8VWlCdXR0b24gY2xhc3NOYW1lPVwiXCIgc2l6ZT1cIm1kXCIgdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAg0J3QuNGH0YzRj1xuICAgICAgPC9VaUJ1dHRvbj5cbiAgICAgIDxVaUJ1dHRvbiBjbGFzc05hbWU9XCJcIiBzaXplPVwibWRcIiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICDQodC00LDRgtGM0YHRj1xuICAgICAgPC9VaUJ1dHRvbj5cbiAgICA8Lz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxHYW1lRmllbGRMYXlvdXQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPEdhbWVNb3ZlSW5mb1xuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICBjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9XG4gICAgICAgIG5leHRNb3ZlPXtuZXh0TW92ZX1cbiAgICAgIC8+XG4gICAgICA8R2FtZUdyaWQ+XG4gICAgICAgIHtjZWxscy5tYXAoKHN5bWJvbCwgaSkgPT4gKFxuICAgICAgICAgIDxHYW1lQ2VsbFxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVDZWxsQ2xpY2soaSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaXNXaW5uZXI9e3dpbm5lclNlcXVlbmNlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzeW1ib2wgJiYgPEdhbWVTeW1ib2wgc3ltYm9sPXtzeW1ib2x9IGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPn1cbiAgICAgICAgICA8L0dhbWVDZWxsPlxuICAgICAgICApKX1cbiAgICAgIDwvR2FtZUdyaWQ+XG4gICAgPC9HYW1lRmllbGRMYXlvdXQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVDZWxsKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGlzV2lubmVyIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgY2xhc3NOYW1lPXtjbHN4KGlzV2lubmVyJiYgYmcsIFwiYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgLW1sLXB4IC1tdC1weCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVGaWVsZExheW91dCh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBcImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgIHBiLTdcIixcbiAgICAgICl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBHYW1lTW92ZUluZm8oeyBhY3Rpb25zLCBjdXJyZW50TW92ZSwgbmV4dE1vdmUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAteC0zIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14bCBsZWFkaW5nLXRpZ2h0IGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICBYb9C0OlxuICAgICAgICAgIDxHYW1lU3ltYm9sIHN5bWJvbD17Y3VycmVudE1vdmV9IGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj5cbiAgICAgICAgICDQodC70LXQtNGD0Y7RidC40Lk6IDxHYW1lU3ltYm9sIHN5bWJvbD17bmV4dE1vdmV9IGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2FjdGlvbnN9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVHcmlkKHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgxOSxfMzBweCldIGdyaWQtcm93cy1bcmVwZWF0KDE5LF8zMHB4KV0gcGwtcHggcHQtcHggbXQtM1wiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJVaUJ1dHRvbiIsIkdhbWVTeW1ib2wiLCJ1c2VHYW1lU3RhdGUiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJ3aW5uZXJTZXF1ZW5jZSIsImFjdGlvbnMiLCJzaXplIiwidmFyaWFudCIsIkdhbWVGaWVsZExheW91dCIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVHcmlkIiwibWFwIiwic3ltYm9sIiwiaSIsIkdhbWVDZWxsIiwib25DbGljayIsImlzV2lubmVyIiwiY2hpbGRyZW4iLCJidXR0b24iLCJiZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/game-field.jsx\n"));

/***/ })

});