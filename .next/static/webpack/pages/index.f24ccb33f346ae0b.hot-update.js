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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/Game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/Game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n\n\n\n\n\nconst cells = new Array(19 * 19).fill(null);\n// console.log(cells)\nfunction GameField(param) {\n    let { className: className1 } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className1, \"bg-white rounded-2xl shadow-md px-8 pt-5  pb-7\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-3 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mr-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                                children: [\n                                    \"Xoд:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                        className: \"w-5 h-5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 92\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-1 text-xs text-slate-400\",\n                                children: [\n                                    \"Следующий: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 86\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                        className: \"\",\n                        size: \"md\",\n                        variant: \"primary\",\n                        children: \"Ничья\"\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                        className: \"\",\n                        size: \"md\",\n                        variant: \"outline\",\n                        children: \"Сдаться\"\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n                children: cells.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                            className: \"w-5 h-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, this)\n                    }, i, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = GameField;\nfunction GameFieldLayout(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5  pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/Game/game-field.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameFieldLayout;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUI7QUFDcUI7QUFDRTtBQUNEO0FBRzdDLE1BQU1JLFFBQVEsSUFBSUMsTUFBTSxLQUFHLElBQUlDLElBQUksQ0FBQztBQUNwQyxxQkFBcUI7QUFHZCxTQUFTQyxVQUFXLEtBQVc7UUFBWCxFQUFDQyxXQUFBQSxVQUFTLEVBQUMsR0FBWDtJQUV6QixxQkFDRSw4REFBQ0M7UUFBS0QsV0FBV1IsZ0RBQUlBLENBQ25CUSxZQUNBOzswQkFFQSw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUViLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOztvQ0FBOEQ7a0RBQUksOERBQUNQLHNEQUFRQTt3Q0FBQ08sV0FBVTs7Ozs7Ozs7Ozs7OzBDQUdyRyw4REFBQ0M7Z0NBQUlELFdBQVU7O29DQUFpRDtrREFBVyw4REFBQ04sd0RBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJdkYsOERBQUNDLHNEQUFRQTt3QkFBQ0ssV0FBVTt3QkFBR0UsTUFBSzt3QkFBS0MsU0FBUTtrQ0FBVTs7Ozs7O2tDQUNuRCw4REFBQ1Isc0RBQVFBO3dCQUFDSyxXQUFVO3dCQUFHRSxNQUFLO3dCQUFLQyxTQUFRO2tDQUFVOzs7Ozs7Ozs7Ozs7MEJBR25ELDhEQUFDRjtnQkFBSUQsV0FBVTswQkFDWkosTUFBTVEsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUNiLDhEQUFDQzt3QkFBZVAsV0FBVTtrQ0FDeEIsNEVBQUNQLHNEQUFRQTs0QkFBQ08sV0FBVTs7Ozs7O3VCQURUTTs7Ozs7Ozs7Ozs7Ozs7OztBQVN6QjtLQWhDZ0JQO0FBa0NoQixTQUFTUyxnQkFBZ0IsS0FBVTtRQUFWLEVBQUNDLFFBQVEsRUFBQyxHQUFWO0lBQ3ZCLHFCQUNFLDhEQUFDUjtRQUFLRCxXQUFXUixnREFBSUEsQ0FDbkJRLFdBQ0E7a0JBQ0VTOzs7Ozs7QUFHUjtNQVJTRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWUvZ2FtZS1maWVsZC5qc3g/NTI0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHsgWmVyb0ljb24gfSBmcm9tICcuL2ljb25zL3plcm8taWNvbidcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gJy4vaWNvbnMvY3Jvc3MtaWNvbidcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSAnLi4vdWlraXQvdWktYnV0dG9uJ1xuXG5cbmNvbnN0IGNlbGxzID0gbmV3IEFycmF5KDE5KjE5KS5maWxsKG51bGwpXG4vLyBjb25zb2xlLmxvZyhjZWxscylcblxuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUZpZWxkICh7Y2xhc3NOYW1lfSl7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBcImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgIHBiLTdcIixcbiAgICApfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC14LTMgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14bCBsZWFkaW5nLXRpZ2h0IGZvbnQtc2VtaWJvbGQnPlhv0LQ6PFplcm9JY29uIGNsYXNzTmFtZT0ndy01IGgtNScvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgdGV4dC1zbGF0ZS00MDAnPtCh0LvQtdC00YPRjtGJ0LjQuTogPENyb3NzSWNvbi8+IFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8VWlCdXR0b24gY2xhc3NOYW1lPScnIHNpemU9J21kJyB2YXJpYW50PSdwcmltYXJ5Jz7QndC40YfRjNGPPC9VaUJ1dHRvbj5cbiAgICAgICAgPFVpQnV0dG9uIGNsYXNzTmFtZT0nJyBzaXplPSdtZCcgdmFyaWFudD0nb3V0bGluZSc+0KHQtNCw0YLRjNGB0Y88L1VpQnV0dG9uPiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy1bcmVwZWF0KDE5LF8zMHB4KV0gZ3JpZC1yb3dzLVtyZXBlYXQoMTksXzMwcHgpXSBwbC1weCBwdC1weCBtdC0zJz5cbiAgICAgICAgICB7Y2VsbHMubWFwKChfLCBpKT0+KFxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2l9IGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgLW1sLXB4IC1tdC1weCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxaZXJvSWNvbiBjbGFzc05hbWU9J3ctNSBoLTUnLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gR2FtZUZpZWxkTGF5b3V0KHtjaGlsZHJlbn0pe1xuICByZXR1cm4oXG4gICAgPGRpdiAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgXCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBwdC01ICBwYi03XCIsXG4gICAgKX0+e2NoaWxkcmVufTwvZGl2PlxuXG4gIClcbn0iXSwibmFtZXMiOlsiY2xzeCIsIlplcm9JY29uIiwiQ3Jvc3NJY29uIiwiVWlCdXR0b24iLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsIkdhbWVGaWVsZCIsImNsYXNzTmFtZSIsImRpdiIsInNpemUiLCJ2YXJpYW50IiwibWFwIiwiXyIsImkiLCJidXR0b24iLCJHYW1lRmllbGRMYXlvdXQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/game-field.jsx\n"));

/***/ })

});