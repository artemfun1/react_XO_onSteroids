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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Game */ \"./components/Game/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var _components_Game_use_game_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Game/use-game-state */ \"./components/Game/use-game-state.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const { cells, currentMove, nextMove, handleCellClick } = (0,_components_Game_use_game_state__WEBPACK_IMPORTED_MODULE_4__.useGameState)(playersCount);\n    const [playersCount, setPlayersCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-50 min-h-screen \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/pages/index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto w-max\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {\n                        playersCount: playersCount\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/pages/index.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                        className: \"mt-4\",\n                        playersCount: playersCount\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/pages/index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game__WEBPACK_IMPORTED_MODULE_2__.GameField, {\n                        className: \"mt-6\",\n                        playersCount: playersCount\n                    }, void 0, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/pages/index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/pages/index.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/pages/index.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"X0BI9BX3PpFcWl9/RuBAJSS4L/g=\", false, function() {\n    return [\n        _components_Game_use_game_state__WEBPACK_IMPORTED_MODULE_4__.useGameState\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNvQztBQUN0QjtBQUNrQjtBQU1qRCxTQUFTTTs7SUFFdEIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUUsR0FBR0wsNkVBQVlBLENBQUNNO0lBSXZFLE1BQUssQ0FBQ0EsY0FBYUMsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDO0lBRy9DLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1Ysc0RBQU1BOzs7OzswQkFDUCw4REFBQ1c7Z0JBQUtELFdBQVU7O2tDQUNkLDhEQUFDWCx1REFBU0E7d0JBQUNRLGNBQWNBOzs7Ozs7a0NBQ3pCLDhEQUFDVCxzREFBUUE7d0JBQUNZLFdBQVU7d0JBQU9ILGNBQWNBOzs7Ozs7a0NBQ3pDLDhEQUFDVix1REFBU0E7d0JBQUNhLFdBQVU7d0JBQU9ILGNBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEQ7R0FuQndCTDs7UUFFb0NELHlFQUFZQTs7O0tBRmhEQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2FtZUZpZWxkLCBHYW1lSW5mbywgR2FtZVRpdGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZVwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgeyB1c2VHYW1lU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0dhbWUvdXNlLWdhbWUtc3RhdGUnXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cbiAgY29uc3QgeyBjZWxscywgY3VycmVudE1vdmUsIG5leHRNb3ZlLCBoYW5kbGVDZWxsQ2xpY2sgfSA9IHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpO1xuXG5cblxuICBjb25zdFtwbGF5ZXJzQ291bnQsc2V0UGxheWVyc0NvdW50XSA9IHVzZVN0YXRlKDQpXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtNTAgbWluLWgtc2NyZWVuIFwiPlxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInB0LTYgbXgtYXV0byB3LW1heFwiPlxuICAgICAgICA8R2FtZVRpdGxlIHBsYXllcnNDb3VudD17cGxheWVyc0NvdW50fS8+XG4gICAgICAgIDxHYW1lSW5mbyBjbGFzc05hbWU9XCJtdC00XCIgcGxheWVyc0NvdW50PXtwbGF5ZXJzQ291bnR9PjwvR2FtZUluZm8+XG4gICAgICAgIDxHYW1lRmllbGQgY2xhc3NOYW1lPVwibXQtNlwiIHBsYXllcnNDb3VudD17cGxheWVyc0NvdW50fT48L0dhbWVGaWVsZD5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdhbWVGaWVsZCIsIkdhbWVJbmZvIiwiR2FtZVRpdGxlIiwiSGVhZGVyIiwidXNlR2FtZVN0YXRlIiwiSG9tZVBhZ2UiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJwbGF5ZXJzQ291bnQiLCJzZXRQbGF5ZXJzQ291bnQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});