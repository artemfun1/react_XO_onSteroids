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

/***/ "./components/Game/model.js":
/*!**********************************!*\
  !*** ./components/Game/model.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computeWinner: function() { return /* binding */ computeWinner; },\n/* harmony export */   getNextMove: function() { return /* binding */ getNextMove; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/Game/constants.js\");\n\nfunction getNextMove(currenMove, playersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_ORDERS.slice(0, playersCount);\n    let nextMoveIndex = slicedMoveOrder.indexOf(currenMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i]] === cells[indexes[i - 1]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++)if (cells[i]) {\n        const indexRows = getSequenceIndexes(i);\n        const winnerIndexes = indexRows.find((row)=>compareElements(row));\n        if (winnerIndexes) {\n            return winnerIndexes;\n        }\n    }\n    return undefined;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvbW9kZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBS2xDLFNBQVNDLFlBQVlDLFVBQVUsRUFBRUMsWUFBWTtJQUNsRCxNQUFNQyxrQkFBa0JKLG1EQUFXQSxDQUFDSyxLQUFLLENBQUMsR0FBR0Y7SUFFN0MsSUFBSUcsZ0JBQWdCRixnQkFBZ0JHLE9BQU8sQ0FBQ0wsY0FBYztRQUNuREU7SUFBUCxPQUFPQSxDQUFBQSxpQ0FBQUEsZUFBZSxDQUFDRSxjQUFjLGNBQTlCRiw0Q0FBQUEsaUNBQWtDQSxlQUFlLENBQUMsRUFBRTtBQUM3RDtBQUVPLFNBQVNJLGNBQWNDLEtBQUs7UUFBRUMsZUFBQUEsaUVBQWUsR0FBR0MsWUFBQUEsaUVBQVk7SUFDakUsTUFBTUMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDSixlQUFlO0lBRXRDLFNBQVNLLGdCQUFnQkMsT0FBTztRQUM5QixJQUFJQyxTQUFTO1FBRWIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlGLFFBQVFHLE1BQU0sRUFBRUQsSUFBSztZQUN2Q0QsV0FBQUEsU0FBVyxDQUFDLENBQUNSLEtBQUssQ0FBQ08sT0FBTyxDQUFDRSxFQUFFLENBQUM7WUFDOUJELFdBQUFBLFNBQVdSLEtBQUssQ0FBQ08sT0FBTyxDQUFDRSxFQUFFLENBQUMsS0FBS1QsS0FBSyxDQUFDTyxPQUFPLENBQUNFLElBQUksRUFBRSxDQUFDO1FBQ3hEO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLFNBQVNHLG1CQUFtQkYsQ0FBQztRQUMzQixNQUFNRyxNQUFNO1lBQ1YsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFO1lBQ0YsRUFBRTtTQUNIO1FBRUQsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlaLGNBQWNZLElBQUs7WUFDckNELEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ0QsSUFBSVYsTUFBTU07WUFDdEJHLEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ1osWUFBYVcsQ0FBQUEsSUFBSVYsR0FBRSxJQUFNVSxDQUFBQSxJQUFJVixHQUFFLElBQUtNO1lBQ2hERyxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUMsQ0FBQ1osWUFBYVcsQ0FBQUEsSUFBSVYsR0FBRSxJQUFNVSxDQUFBQSxJQUFJVixHQUFFLElBQUtNO1lBQ2pERyxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNaLFlBQWFXLENBQUFBLElBQUlWLEdBQUUsSUFBS007UUFDdEM7UUFFQSxPQUFPRztJQUNUO0lBRUEsSUFBSyxJQUFJSCxJQUFJLEdBQUdBLElBQUlULE1BQU1VLE1BQU0sRUFBRUQsSUFDaEMsSUFBSVQsS0FBSyxDQUFDUyxFQUFFLEVBQUU7UUFDWixNQUFNTSxZQUFZSixtQkFBbUJGO1FBQ3JDLE1BQU1PLGdCQUFnQkQsVUFBVUUsSUFBSSxDQUFDLENBQUNDLE1BQVFaLGdCQUFnQlk7UUFFOUQsSUFBSUYsZUFBZTtZQUNqQixPQUFPQTtRQUNUO0lBQ0Y7SUFFRixPQUFPRztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS9tb2RlbC5qcz9hYWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1PVkVfT1JERVJTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW5Nb3ZlLCBwbGF5ZXJzQ291bnQpIHtcbiAgY29uc3Qgc2xpY2VkTW92ZU9yZGVyID0gTU9WRV9PUkRFUlMuc2xpY2UoMCwgcGxheWVyc0NvdW50KTtcblxuICBsZXQgbmV4dE1vdmVJbmRleCA9IHNsaWNlZE1vdmVPcmRlci5pbmRleE9mKGN1cnJlbk1vdmUpICsgMTtcbiAgcmV0dXJuIHNsaWNlZE1vdmVPcmRlcltuZXh0TW92ZUluZGV4XSA/PyBzbGljZWRNb3ZlT3JkZXJbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlV2lubmVyKGNlbGxzLCBzZXF1ZW5jZVNpemUgPSA1LCBmaWVsZFNpemUgPSAxOSkge1xuICBjb25zdCBnYXAgPSBNYXRoLmZsb29yKHNlcXVlbmNlU2l6ZSAvIDIpO1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVFbGVtZW50cyhpbmRleGVzKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdCAmJj0gISFjZWxsc1tpbmRleGVzW2ldXTtcbiAgICAgIHJlc3VsdCAmJj0gY2VsbHNbaW5kZXhlc1tpXV0gPT09IGNlbGxzW2luZGV4ZXNbaSAtIDFdXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VxdWVuY2VJbmRleGVzKGkpIHtcbiAgICBjb25zdCByZXMgPSBbXG4gICAgICBbXSwgLy8gLVxuICAgICAgW10sIC8vIFxcXG4gICAgICBbXSwgLy8gL1xuICAgICAgW10sIC8vIHxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZXF1ZW5jZVNpemU7IGorKykge1xuICAgICAgcmVzWzBdLnB1c2goaiAtIGdhcCArIGkpO1xuICAgICAgcmVzWzFdLnB1c2goZmllbGRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSk7XG4gICAgICByZXNbMl0ucHVzaCgtZmllbGRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSk7XG4gICAgICByZXNbM10ucHVzaChmaWVsZFNpemUgKiAoaiAtIGdhcCkgKyBpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKylcbiAgICBpZiAoY2VsbHNbaV0pIHtcbiAgICAgIGNvbnN0IGluZGV4Um93cyA9IGdldFNlcXVlbmNlSW5kZXhlcyhpKTtcbiAgICAgIGNvbnN0IHdpbm5lckluZGV4ZXMgPSBpbmRleFJvd3MuZmluZCgocm93KSA9PiBjb21wYXJlRWxlbWVudHMocm93KSk7XG5cbiAgICAgIGlmICh3aW5uZXJJbmRleGVzKSB7XG4gICAgICAgIHJldHVybiB3aW5uZXJJbmRleGVzO1xuICAgICAgfVxuICAgIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIl0sIm5hbWVzIjpbIk1PVkVfT1JERVJTIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW5Nb3ZlIiwicGxheWVyc0NvdW50Iiwic2xpY2VkTW92ZU9yZGVyIiwic2xpY2UiLCJuZXh0TW92ZUluZGV4IiwiaW5kZXhPZiIsImNvbXB1dGVXaW5uZXIiLCJjZWxscyIsInNlcXVlbmNlU2l6ZSIsImZpZWxkU2l6ZSIsImdhcCIsIk1hdGgiLCJmbG9vciIsImNvbXBhcmVFbGVtZW50cyIsImluZGV4ZXMiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiZ2V0U2VxdWVuY2VJbmRleGVzIiwicmVzIiwiaiIsInB1c2giLCJpbmRleFJvd3MiLCJ3aW5uZXJJbmRleGVzIiwiZmluZCIsInJvdyIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/model.js\n"));

/***/ })

});