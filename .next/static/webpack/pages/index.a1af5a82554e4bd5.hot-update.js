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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiTextField: function() { return /* binding */ UiTextField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n\n\n/**\n * @param{{\n * label?:string,\n * className: string,\n * helperText?:string,\n * errorText?:string,\n * }} props\n */ function UiTextField(param) {\n    let { label, helperText, required, errorText, ...inputProps } = param;\n    // className=\"mx-auto max-w-xs\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                for: \"example2\",\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(required && \"after:text-orange-600 after:content-[\" * \"]\", \"mb-1 block text-sm font-medium text-slate-900 after:ml-0.5 \"),\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/uikit/ui-text_field.jsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                required: required,\n                type: \"email\",\n                id: \"example2\",\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(errorText ? \"focus:border-orange-600 focus:ring focus:ring-orange-600/20 \" : \"focus:border-teal-600 focus:ring focus:ring-teal-600/20 border-slate-200\", \"px-2 py-2 leading-tight outline-0 block w-full rounded-md shadow-sm focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50  disabled:text-slate-400\"),\n                ...inputProps\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/uikit/ui-text_field.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            (helperText || errorText) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(errorText ? \" text-orange-600\" : \" text-slate-400\", \"mt-1 text-sm\"),\n                children: errorText !== null && errorText !== void 0 ? errorText : helperText\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/uikit/ui-text_field.jsx\",\n                lineNumber: 39,\n                columnNumber: 40\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/uikit/ui-text_field.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = UiTextField;\nvar _c;\n$RefreshReg$(_c, \"UiTextField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Vpa2l0L3VpLXRleHRfZmllbGQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVCO0FBRXZCOzs7Ozs7O0NBT0MsR0FDTSxTQUFTQyxZQUFZLEtBQXlEO1FBQXpELEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxZQUFZLEdBQXpEO0lBQzFCLCtCQUErQjtJQUMvQixxQkFDRSw4REFBQ0M7O1lBQ0VMLHVCQUNDLDhEQUFDQTtnQkFDQ00sS0FBSTtnQkFDSkMsV0FBV1QsZ0RBQUlBLENBQ2JJLFlBQVksMENBQTBDLEtBQ3REOzBCQUdERjs7Ozs7OzBCQU1MLDhEQUFDUTtnQkFDQ04sVUFBVUE7Z0JBQ1ZPLE1BQUs7Z0JBQ0xDLElBQUc7Z0JBQ0hILFdBQVdULGdEQUFJQSxDQUNiSyxZQUFXLGlFQUFtRSw0RUFDOUU7Z0JBRUQsR0FBR0MsVUFBVTs7Ozs7O1lBRVpILENBQUFBLGNBQWNFLFNBQVEsbUJBQU8sOERBQUNRO2dCQUFFSixXQUFXVCxnREFBSUEsQ0FDL0NLLFlBQVcscUJBQW1CLG1CQUM5QjswQkFJQUEsc0JBQUFBLHVCQUFBQSxZQUFhRjs7Ozs7Ozs7Ozs7O0FBSXZCO0tBdENnQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aWtpdC91aS10ZXh0X2ZpZWxkLmpzeD80ZmQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCJcblxuLyoqXG4gKiBAcGFyYW17e1xuICogbGFiZWw/OnN0cmluZyxcbiAqIGNsYXNzTmFtZTogc3RyaW5nLFxuICogaGVscGVyVGV4dD86c3RyaW5nLFxuICogZXJyb3JUZXh0PzpzdHJpbmcsXG4gKiB9fSBwcm9wc1xuICovXG5leHBvcnQgZnVuY3Rpb24gVWlUZXh0RmllbGQoeyBsYWJlbCwgaGVscGVyVGV4dCwgcmVxdWlyZWQsIGVycm9yVGV4dCwgLi4uaW5wdXRQcm9wcyB9KSB7XG4gIC8vIGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXcteHNcIlxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7bGFiZWwgJiYgKFxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBmb3I9XCJleGFtcGxlMlwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgcmVxdWlyZWQgJiYgXCJhZnRlcjp0ZXh0LW9yYW5nZS02MDAgYWZ0ZXI6Y29udGVudC1bXCIgKiBcIl1cIixcbiAgICAgICAgICAgIFwibWItMSBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtOTAwIGFmdGVyOm1sLTAuNSBcIixcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgKX1cblxuXG5cbiAgICAgIDxpbnB1dFxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIGlkPVwiZXhhbXBsZTJcIlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgZXJyb3JUZXh0PyAnZm9jdXM6Ym9yZGVyLW9yYW5nZS02MDAgZm9jdXM6cmluZyBmb2N1czpyaW5nLW9yYW5nZS02MDAvMjAgJyAgOiAgJ2ZvY3VzOmJvcmRlci10ZWFsLTYwMCBmb2N1czpyaW5nIGZvY3VzOnJpbmctdGVhbC02MDAvMjAgYm9yZGVyLXNsYXRlLTIwMCcgLFxuICAgICAgICAgIFwicHgtMiBweS0yIGxlYWRpbmctdGlnaHQgb3V0bGluZS0wIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIHNoYWRvdy1zbSBmb2N1czpyaW5nLW9wYWNpdHktNTAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOmJnLWdyYXktNTAgIGRpc2FibGVkOnRleHQtc2xhdGUtNDAwXCJcbiAgICAgICAgKX1cbiAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAvPlxuICAgICAgICB7KGhlbHBlclRleHQgfHwgZXJyb3JUZXh0KSAmJiAoPHAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgIGVycm9yVGV4dD8gJyB0ZXh0LW9yYW5nZS02MDAnOicgdGV4dC1zbGF0ZS00MDAnICxcbiAgICAgICAgICBcIm10LTEgdGV4dC1zbVwiXG4gICAgICAgICl9XG5cblxuICAgICAgICA+e2Vycm9yVGV4dCA/PyBoZWxwZXJUZXh0fTwvcD4pIH1cbiAgICAgIFxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJVaVRleHRGaWVsZCIsImxhYmVsIiwiaGVscGVyVGV4dCIsInJlcXVpcmVkIiwiZXJyb3JUZXh0IiwiaW5wdXRQcm9wcyIsImRpdiIsImZvciIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsImlkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/uikit/ui-text_field.jsx\n"));

/***/ })

});