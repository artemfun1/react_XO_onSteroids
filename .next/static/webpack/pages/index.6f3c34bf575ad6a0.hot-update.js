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

/***/ "./components/Game/constants.js":
/*!**************************************!*\
  !*** ./components/Game/constants.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_SYMBOLS: function() { return /* binding */ GAME_SYMBOLS; },\n/* harmony export */   MOVE_ORDERS: function() { return /* binding */ MOVE_ORDERS; }\n/* harmony export */ });\nconst MOVE_ORDERS = [\n    GAME_SYMBOLS.CROSS,\n    GAME_SYMBOLS.ZERO,\n    GAME_SYMBOLS.TRIANGLE,\n    GAME_SYMBOLS.SQUARE\n];\nconst GAME_SYMBOLS = {\n    ZERO: \"zero\",\n    CROSS: \"cross\",\n    TRIANGLE: \"triangle\",\n    SQUARE: \"square\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvY29uc3RhbnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBR08sTUFBTUEsY0FBYztJQUN6QkMsYUFBYUMsS0FBSztJQUNsQkQsYUFBYUUsSUFBSTtJQUNqQkYsYUFBYUcsUUFBUTtJQUNyQkgsYUFBYUksTUFBTTtDQUNwQixDQUFDO0FBR0ssTUFBTUosZUFBZTtJQUMxQkUsTUFBTTtJQUNORCxPQUFPO0lBQ1BFLFVBQVU7SUFDVkMsUUFBUTtBQUNWLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lL2NvbnN0YW50cy5qcz9lYzYwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmV4cG9ydCBjb25zdCBNT1ZFX09SREVSUyA9IFtcbiAgR0FNRV9TWU1CT0xTLkNST1NTLFxuICBHQU1FX1NZTUJPTFMuWkVSTyxcbiAgR0FNRV9TWU1CT0xTLlRSSUFOR0xFLFxuICBHQU1FX1NZTUJPTFMuU1FVQVJFLFxuXTtcblxuXG5leHBvcnQgY29uc3QgR0FNRV9TWU1CT0xTID0ge1xuICBaRVJPOiBcInplcm9cIixcbiAgQ1JPU1M6ICdjcm9zcycsXG4gIFRSSUFOR0xFOiBcInRyaWFuZ2xlXCIsXG4gIFNRVUFSRTogJ3NxdWFyZScsXG59Il0sIm5hbWVzIjpbIk1PVkVfT1JERVJTIiwiR0FNRV9TWU1CT0xTIiwiQ1JPU1MiLCJaRVJPIiwiVFJJQU5HTEUiLCJTUVVBUkUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Game/constants.js\n"));

/***/ })

});