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

/***/ "./components/uikit/ui-text_field.jsx":
/*!********************************************!*\
  !*** ./components/uikit/ui-text_field.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiTextField: function() { return /* binding */ UiTextField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction UiTextField() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                for: \"example2\",\n                className: \"mb-1 block text-sm font-medium text-slate-900 after:ml-0.5 after:text-red-500 after:content-['*']\",\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/uikit/ui-text_field.jsx\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                id: \"example2\",\n                className: \" py-2block w-full rounded-md border-slate-200 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-slate-400\",\n                placeholder: \"you@email.com\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/uikit/ui-text_field.jsx\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-1 text-sm text-slate-400\",\n                children: \"This is a help message.\"\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/uikit/ui-text_field.jsx\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/uikit/ui-text_field.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = UiTextField;\nvar _c;\n$RefreshReg$(_c, \"UiTextField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Vpa2l0L3VpLXRleHRfZmllbGQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQTtJQUVkLHFCQUVFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDZiw4REFBQ0M7Z0JBQU1DLEtBQUk7Z0JBQVdGLFdBQVU7MEJBQW9HOzs7Ozs7MEJBQ3BJLDhEQUFDRztnQkFBTUMsTUFBSztnQkFBUUMsSUFBRztnQkFBV0wsV0FBVTtnQkFBbU5NLGFBQVk7Ozs7OzswQkFDM1EsOERBQUNDO2dCQUFFUCxXQUFVOzBCQUE4Qjs7Ozs7Ozs7Ozs7O0FBSy9DO0tBWmdCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Vpa2l0L3VpLXRleHRfZmllbGQuanN4PzRmZDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIFVpVGV4dEZpZWxkICgpe1xuXG4gIHJldHVybihcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy14c1wiPlxuICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlMlwiIGNsYXNzTmFtZT1cIm1iLTEgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTkwMCBhZnRlcjptbC0wLjUgYWZ0ZXI6dGV4dC1yZWQtNTAwIGFmdGVyOmNvbnRlbnQtWycqJ11cIj5FbWFpbDwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZXhhbXBsZTJcIiBjbGFzc05hbWU9XCIgcHktMmJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci1zbGF0ZS0yMDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1wcmltYXJ5LTQwMCBmb2N1czpyaW5nIGZvY3VzOnJpbmctcHJpbWFyeS0yMDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpiZy1ncmF5LTUwIGRpc2FibGVkOnRleHQtc2xhdGUtNDAwXCIgcGxhY2Vob2xkZXI9XCJ5b3VAZW1haWwuY29tXCIgLz5cbiAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1zbGF0ZS00MDBcIj5UaGlzIGlzIGEgaGVscCBtZXNzYWdlLjwvcD5cbiAgICBcbiAgPC9kaXY+XG5cbiAgKVxufSJdLCJuYW1lcyI6WyJVaVRleHRGaWVsZCIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiZm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/uikit/ui-text_field.jsx\n"));

/***/ })

});