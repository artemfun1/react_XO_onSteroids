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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/Game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MOVE_ORDERS = [\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n];\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    function getNextMove(currenMove) {\n        const nextMoveIndex = MOVE_ORDERS.indexOf(currenMove) + 1;\n        var _MOVE_ORDERS_nextMoveIndex;\n        return (_MOVE_ORDERS_nextMoveIndex = MOVE_ORDERS[nextMoveIndex]) !== null && _MOVE_ORDERS_nextMoveIndex !== void 0 ? _MOVE_ORDERS_nextMoveIndex : MOVE_ORDERS[0];\n    }\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>new Array(19 * 19).fill(null));\n    const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO);\n    const nextMove = getNextMove(currentMove);\n    const handleCellClick = (index)=>{\n        setCurrentMove(getNextMove);\n    };\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UiButton, {\n                className: \"\",\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UiButton, {\n                className: \"\",\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>{\n                            handleCellClick;\n                        }\n                    }, i, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(GameField, \"4VyosWKr1x15MdKA3gTkzMirMzg=\");\n_c = GameField;\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5  pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-x-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Xoд:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0dhbWUvZ2FtZS1maWVsZC5qc3g/NTI0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIi4uL3Vpa2l0L3VpLWJ1dHRvblwiO1xuaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcblxuY29uc3QgTU9WRV9PUkRFUlMgPSBbXG4gIEdBTUVfU1lNQk9MUy5DUk9TUyxcbiAgR0FNRV9TWU1CT0xTLlpFUk8sXG4gIEdBTUVfU1lNQk9MUy5UUklBTkdMRSxcbiAgR0FNRV9TWU1CT0xTLlNRVUFSRSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoeyBjbGFzc05hbWUgfSkge1xuXG4gIGZ1bmN0aW9uIGdldE5leHRNb3ZlKGN1cnJlbk1vdmUpIHtcbiAgICBjb25zdCBuZXh0TW92ZUluZGV4ID0gTU9WRV9PUkRFUlMuaW5kZXhPZihjdXJyZW5Nb3ZlKSArIDE7XG4gICAgcmV0dXJuIE1PVkVfT1JERVJTW25leHRNb3ZlSW5kZXhdID8/IE1PVkVfT1JERVJTWzBdO1xuICB9XG5cbiAgY29uc3QgW2NlbGxzLCBzZXRDZWxsc10gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSk7XG4gIGNvbnN0IFtjdXJyZW50TW92ZSwgc2V0Q3VycmVudE1vdmVdID0gdXNlU3RhdGUoR0FNRV9TWU1CT0xTLlpFUk8pO1xuXG4gIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUpO1xuXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpbmRleCkgPT4ge1xuICAgICAgc2V0Q3VycmVudE1vdmUoZ2V0TmV4dE1vdmUpXG4gIH1cblxuICBjb25zdCBhY3Rpb25zID0gKFxuICAgIDw+XG4gICAgICA8VWlCdXR0b24gY2xhc3NOYW1lPVwiXCIgc2l6ZT1cIm1kXCIgdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAg0J3QuNGH0YzRj1xuICAgICAgPC9VaUJ1dHRvbj5cbiAgICAgIDxVaUJ1dHRvbiBjbGFzc05hbWU9XCJcIiBzaXplPVwibWRcIiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICDQodC00LDRgtGM0YHRj1xuICAgICAgPC9VaUJ1dHRvbj5cbiAgICA8Lz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxHYW1lRmllbGRMYXlvdXQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPEdhbWVNb3ZlSW5mbyBhY3Rpb25zPXthY3Rpb25zfSBjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9IG5leHRNb3ZlPXtuZXh0TW92ZX0vPlxuXG4gICAgICA8R2FtZUdyaWQ+XG4gICAgICAgIHtjZWxscy5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICA8R2FtZUNlbGwga2V5PXtpfSBvbkNsaWNrPXsoKT0+e2hhbmRsZUNlbGxDbGlja319IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9HYW1lR3JpZD5cbiAgICA8L0dhbWVGaWVsZExheW91dD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2FtZUNlbGwoeyBjaGlsZHJlbiwgb25DbGlja30pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2FtZUZpZWxkTGF5b3V0KHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIFwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSAgcGItN1wiLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVNb3ZlSW5mbyh7IGFjdGlvbnMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTMgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhsIGxlYWRpbmctdGlnaHQgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIFhv0LQ6XG4gICAgICAgICAgPEdhbWVTeW1ib2wgc3ltYm9sPXtjdXJyZW50TW92ZX0gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgINCh0LvQtdC00YPRjtGJ0LjQuTogPEdhbWVTeW1ib2wgc3ltYm9sPXtuZXh0TW92ZX0gY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7YWN0aW9uc31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2FtZUdyaWQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bcmVwZWF0KDE5LF8zMHB4KV0gZ3JpZC1yb3dzLVtyZXBlYXQoMTksXzMwcHgpXSBwbC1weCBwdC1weCBtdC0zXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY2xzeCIsInVzZVN0YXRlIiwiVWlCdXR0b24iLCJHQU1FX1NZTUJPTFMiLCJHYW1lU3ltYm9sIiwiTU9WRV9PUkRFUlMiLCJDUk9TUyIsIlpFUk8iLCJUUklBTkdMRSIsIlNRVUFSRSIsIkdhbWVGaWVsZCIsImNsYXNzTmFtZSIsImdldE5leHRNb3ZlIiwiY3VycmVuTW92ZSIsIm5leHRNb3ZlSW5kZXgiLCJpbmRleE9mIiwiY2VsbHMiLCJzZXRDZWxscyIsIkFycmF5IiwiZmlsbCIsImN1cnJlbnRNb3ZlIiwic2V0Q3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwiYWN0aW9ucyIsInNpemUiLCJ2YXJpYW50IiwiR2FtZUZpZWxkTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiR2FtZUdyaWQiLCJtYXAiLCJfIiwiaSIsIkdhbWVDZWxsIiwib25DbGljayIsImNoaWxkcmVuIiwiYnV0dG9uIiwiZGl2Iiwic3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Game/game-field.jsx\n"));

/***/ })

});