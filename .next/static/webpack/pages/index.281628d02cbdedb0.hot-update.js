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

/***/ "./components/Game/use-game-state.jsx":
/*!********************************************!*\
  !*** ./components/Game/use-game-state.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/Game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currenMove, playersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDERS.slice(0, playersCount);\n    let nextMoveIndex = slicedMoveOrder.indexOf(currenMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i]] === cells[indexes[i - 1]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            [] // |\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++)if (cells[i]) {\n        const indexRows = getSequenceIndexes(i);\n        indexRows.find((row)=>compareElements);\n    }\n}\nfunction useGameState(playersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n        }));\n    const nextMove = getNextMove(currentMove, playersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, playersCount),\n                cells: lastGameState.cells.map((c, i)=>i === index ? lastGameState.currentMove : c)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"+mgN7V1Qs3/TO7OL69HxCcF4PHY=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBRUEsT0FBTztRQUNMN0I7UUFDQW1CO1FBQ0FLO1FBQ0FDO0lBQ0Y7QUFDRjtHQWxDZ0JQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS91c2UtZ2FtZS1zdGF0ZS5qc3g/MTdmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR0FNRV9TWU1CT0xTLCBNT1ZFX09SREVSUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW5Nb3ZlLCBwbGF5ZXJzQ291bnQpIHtcblxuICAgIGNvbnN0IHNsaWNlZE1vdmVPcmRlciA9IE1PVkVfT1JERVJTLnNsaWNlKDAscGxheWVyc0NvdW50KVxuXG4gICAgbGV0IG5leHRNb3ZlSW5kZXggPSBzbGljZWRNb3ZlT3JkZXIuaW5kZXhPZihjdXJyZW5Nb3ZlKSArIDE7XG4gICAgcmV0dXJuIHNsaWNlZE1vdmVPcmRlcltuZXh0TW92ZUluZGV4XSA/PyBzbGljZWRNb3ZlT3JkZXJbMF07XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlV2lubmVyKGNlbGxzLCBzZXF1ZW5jZVNpemUgPSA1LCBmaWVsZFNpemUgPSAxOSAgKXtcbiAgICBjb25zdCBnYXAgPSBNYXRoLmZsb29yKHNlcXVlbmNlU2l6ZS8yKVxuICAgIFxuICAgIGZ1bmN0aW9uIGNvbXBhcmVFbGVtZW50cyhpbmRleGVzKXtcbiAgICAgIGxldCByZXN1bHQgPSB0cnVlXG5cbiAgICAgIGZvcihsZXQgaSA9IDE7IGk8aW5kZXhlcy5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgcmVzdWx0ICYmPSAhIWNlbGxzW2luZGV4ZXNbaV1dXG4gICAgICAgIHJlc3VsdCAmJj0gY2VsbHNbaW5kZXhlc1tpXV0gPT09IGNlbGxzW2luZGV4ZXNbaSAtMV1dXG4gICAgICAgXG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdFxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2VxdWVuY2VJbmRleGVzKGkpe1xuXG4gICAgICBjb25zdCByZXMgPVsgXG4gICAgICAgIFsgXSwgLy8gLVxuICAgICAgICBbIF0sIC8vIFxcXG4gICAgICAgIFsgXSwgLy8gL1xuICAgICAgICBbIF0gIC8vIHxcbiAgICAgICBdXG5cbiAgICAgIGZvcihsZXQgaiA9MDsgajxzZXF1ZW5jZVNpemU7aisrKXtcblxuICAgICAgICByZXNbMF0ucHVzaChqIC0gZ2FwICsgaSlcbiAgICAgICAgcmVzWzFdLnB1c2goZmllbGRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApKyBpKVxuICAgICAgICByZXNbMl0ucHVzaCgtZmllbGRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApKyBpKVxuICAgICAgICByZXNbM10ucHVzaChmaWVsZFNpemUgKiAoaiAtIGdhcCkgKyBpKVxuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNcblxuICAgIH1cblxuICAgIGZvcihsZXQgaT0wO2k8Y2VsbHMubGVuZ3RoO2krKylcblxuICAgIGlmKGNlbGxzW2ldKXtcbiAgICAgIGNvbnN0IGluZGV4Um93cyA9IGdldFNlcXVlbmNlSW5kZXhlcyhpKVxuICAgICAgaW5kZXhSb3dzLmZpbmQocm93PT5jb21wYXJlRWxlbWVudHMpXG4gICAgfVxuXG4gIH1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUocGxheWVyc0NvdW50KSB7XG5cblxuICBcblxuICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG4gICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgIGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXG4gIH0pKTtcblxuXG4gIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUscGxheWVyc0NvdW50KTtcblxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcbiAgICAgIGlmIChsYXN0R2FtZVN0YXRlLmNlbGxzW2luZGV4XSkge1xuICAgICAgICByZXR1cm4gbGFzdEdhbWVTdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICAgIGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLHBsYXllcnNDb3VudCksXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoYywgaSkgPT5cbiAgICAgICAgICBpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjLFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNlbGxzLFxuICAgIGN1cnJlbnRNb3ZlLFxuICAgIG5leHRNb3ZlLFxuICAgIGhhbmRsZUNlbGxDbGljayxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsIk1PVkVfT1JERVJTIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW5Nb3ZlIiwicGxheWVyc0NvdW50Iiwic2xpY2VkTW92ZU9yZGVyIiwic2xpY2UiLCJuZXh0TW92ZUluZGV4IiwiaW5kZXhPZiIsImNvbXB1dGVXaW5uZXIiLCJjZWxscyIsInNlcXVlbmNlU2l6ZSIsImZpZWxkU2l6ZSIsImdhcCIsIk1hdGgiLCJmbG9vciIsImNvbXBhcmVFbGVtZW50cyIsImluZGV4ZXMiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiZ2V0U2VxdWVuY2VJbmRleGVzIiwicmVzIiwiaiIsInB1c2giLCJpbmRleFJvd3MiLCJmaW5kIiwicm93IiwidXNlR2FtZVN0YXRlIiwiY3VycmVudE1vdmUiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJDUk9TUyIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/use-game-state.jsx\n"));

/***/ })

});