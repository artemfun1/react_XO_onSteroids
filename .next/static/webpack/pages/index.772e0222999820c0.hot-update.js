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

/***/ "./components/game/game-cell.jsx":
/*!***************************************!*\
  !*** ./components/game/game-cell.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameCell: function() { return /* binding */ GameCell; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\n\n\nfunction GameCell(param) {\n    let { symbol, isWinner, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)(\"border border-gray-400 -ml-px -mt-px flex item-center justify-center  bc-tra\", isWinner && \"bg-red-400\"),\n        onClick: onClick,\n        children: symbol ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n            symbol: symbol\n        }, void 0, false, {\n            fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game/game-cell.jsx\",\n            lineNumber: 13,\n            columnNumber: 14\n        }, this) : null\n    }, void 0, false, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game/game-cell.jsx\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, this);\n}\n_c = GameCell;\nvar _c;\n$RefreshReg$(_c, \"GameCell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1jZWxsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFDZTtBQUVwQyxTQUFTRSxTQUFTLEtBQTZCO1FBQTdCLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUUsR0FBN0I7SUFDeEIscUJBQ0MsOERBQUNDO1FBQ0FDLFdBQVdQLDBDQUFJQSxDQUNkLGdGQUNBSSxZQUFZO1FBRWJDLFNBQVNBO2tCQUVSRix1QkFBUyw4REFBQ0Ysb0RBQVVBO1lBQUNFLFFBQVFBOzs7OzttQkFBYTs7Ozs7O0FBRzlDO0tBWmdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1jZWxsLmpzeD8zMWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsc3ggfSBmcm9tICdjbHN4JztcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tICcuL2dhbWUtc3ltYm9sJztcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVDZWxsKHsgc3ltYm9sLCBpc1dpbm5lciwgb25DbGljayB9KSB7XG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxuXHRcdFx0XHQnYm9yZGVyIGJvcmRlci1ncmF5LTQwMCAtbWwtcHggLW10LXB4IGZsZXggaXRlbS1jZW50ZXIganVzdGlmeS1jZW50ZXIgIGJjLXRyYScsXG5cdFx0XHRcdGlzV2lubmVyICYmICdiZy1yZWQtNDAwJ1xuXHRcdFx0KX1cblx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0PlxuXHRcdFx0e3N5bWJvbCA/IDxHYW1lU3ltYm9sIHN5bWJvbD17c3ltYm9sfSAvPiA6IG51bGx9XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiY2xzeCIsIkdhbWVTeW1ib2wiLCJHYW1lQ2VsbCIsInN5bWJvbCIsImlzV2lubmVyIiwib25DbGljayIsImJ1dHRvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-cell.jsx\n"));

/***/ })

});