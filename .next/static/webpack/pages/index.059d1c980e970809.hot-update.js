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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/Game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currenMove, playersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDERS.slice(0, playersCount);\n    let nextMoveIndex = slicedMoveOrder.indexOf(currenMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function getSequenceIndexes(i) {\n        const res = [\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){}\n    }\n    for(let i = 0; i < cells.length; i++)if (cells[i]) {}\n}\nfunction useGameState(playersCount) {\n    _s();\n    computeWinner(cells);\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n        }));\n    const nextMove = getNextMove(currentMove, playersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, playersCount),\n                cells: lastGameState.cells.map((c, i)=>i === index ? lastGameState.currentMove : c)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"+mgN7V1Qs3/TO7OL69HxCcF4PHY=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvdXNlLWdhbWUtc3RhdGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBRXhELFNBQVNHLFlBQVlDLFVBQVUsRUFBRUMsWUFBWTtJQUV6QyxNQUFNQyxrQkFBa0JKLG1EQUFXQSxDQUFDSyxLQUFLLENBQUMsR0FBRUY7SUFFNUMsSUFBSUcsZ0JBQWdCRixnQkFBZ0JHLE9BQU8sQ0FBQ0wsY0FBYztRQUNuREU7SUFBUCxPQUFPQSxDQUFBQSxpQ0FBQUEsZUFBZSxDQUFDRSxjQUFjLGNBQTlCRiw0Q0FBQUEsaUNBQWtDQSxlQUFlLENBQUMsRUFBRTtBQUM3RDtBQUVBLFNBQVNJLGNBQWNDLEtBQUs7UUFBRUMsZUFBQUEsaUVBQWUsR0FBR0MsWUFBQUEsaUVBQVk7SUFFMUQsTUFBTUMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDSixlQUFhO0lBRXBDLFNBQVNLLG1CQUFtQkMsQ0FBQztRQUUzQixNQUFNQyxNQUFLO1lBQUUsRUFBRztTQUFFO1FBRWxCLElBQUksSUFBSUMsSUFBRyxHQUFHQSxJQUFFUixjQUFhUSxJQUFJLENBRWpDO0lBRUY7SUFFQSxJQUFJLElBQUlGLElBQUUsR0FBRUEsSUFBRVAsTUFBTVUsTUFBTSxFQUFDSCxJQUUzQixJQUFHUCxLQUFLLENBQUNPLEVBQUUsRUFBQyxDQUVaO0FBRUY7QUFJSyxTQUFTSSxhQUFhakIsWUFBWTs7SUFFdkNLLGNBQWNDO0lBSWQsTUFBTSxDQUFDLEVBQUVBLEtBQUssRUFBRVksV0FBVyxFQUFFLEVBQUVDLGFBQWEsR0FBR3hCLCtDQUFRQSxDQUFDLElBQU87WUFDN0RXLE9BQU8sSUFBSWMsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztZQUMvQkgsYUFBYXRCLG9EQUFZQSxDQUFDMEIsS0FBSztRQUNqQztJQUVBLE1BQU1DLFdBQVd6QixZQUFZb0IsYUFBWWxCO0lBRXpDLE1BQU13QixrQkFBa0IsQ0FBQ0M7UUFDdkJOLGFBQWEsQ0FBQ087WUFDWixJQUFJQSxjQUFjcEIsS0FBSyxDQUFDbUIsTUFBTSxFQUFFO2dCQUM5QixPQUFPQztZQUNUO1lBQ0EsT0FBTztnQkFDTCxHQUFHQSxhQUFhO2dCQUNoQlIsYUFBYXBCLFlBQVk0QixjQUFjUixXQUFXLEVBQUNsQjtnQkFDbkRNLE9BQU9vQixjQUFjcEIsS0FBSyxDQUFDcUIsR0FBRyxDQUFDLENBQUNDLEdBQUdmLElBQ2pDQSxNQUFNWSxRQUFRQyxjQUFjUixXQUFXLEdBQUdVO1lBRTlDO1FBQ0Y7SUFDRjtJQUVBLE9BQU87UUFDTHRCO1FBQ0FZO1FBQ0FLO1FBQ0FDO0lBQ0Y7QUFDRjtHQWxDZ0JQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS91c2UtZ2FtZS1zdGF0ZS5qc3g/MTdmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR0FNRV9TWU1CT0xTLCBNT1ZFX09SREVSUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW5Nb3ZlLCBwbGF5ZXJzQ291bnQpIHtcblxuICAgIGNvbnN0IHNsaWNlZE1vdmVPcmRlciA9IE1PVkVfT1JERVJTLnNsaWNlKDAscGxheWVyc0NvdW50KVxuXG4gICAgbGV0IG5leHRNb3ZlSW5kZXggPSBzbGljZWRNb3ZlT3JkZXIuaW5kZXhPZihjdXJyZW5Nb3ZlKSArIDE7XG4gICAgcmV0dXJuIHNsaWNlZE1vdmVPcmRlcltuZXh0TW92ZUluZGV4XSA/PyBzbGljZWRNb3ZlT3JkZXJbMF07XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlV2lubmVyKGNlbGxzLCBzZXF1ZW5jZVNpemUgPSA1LCBmaWVsZFNpemUgPSAxOSAgKXtcblxuICAgIGNvbnN0IGdhcCA9IE1hdGguZmxvb3Ioc2VxdWVuY2VTaXplLzIpXG5cbiAgICBmdW5jdGlvbiBnZXRTZXF1ZW5jZUluZGV4ZXMoaSl7XG5cbiAgICAgIGNvbnN0IHJlcyA9WyBbIF0gXVxuXG4gICAgICBmb3IobGV0IGogPTA7IGo8c2VxdWVuY2VTaXplO2orKyl7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIGZvcihsZXQgaT0wO2k8Y2VsbHMubGVuZ3RoO2krKylcblxuICAgIGlmKGNlbGxzW2ldKXtcblxuICAgIH1cblxuICB9XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCkge1xuXG4gIGNvbXB1dGVXaW5uZXIoY2VsbHMpXG5cbiAgXG5cbiAgY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRNb3ZlIH0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoe1xuICAgIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcbiAgICBjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxuICB9KSk7XG5cbiAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSxwbGF5ZXJzQ291bnQpO1xuXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpbmRleCkgPT4ge1xuICAgIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4ge1xuICAgICAgaWYgKGxhc3RHYW1lU3RhdGUuY2VsbHNbaW5kZXhdKSB7XG4gICAgICAgIHJldHVybiBsYXN0R2FtZVN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcbiAgICAgICAgY3VycmVudE1vdmU6IGdldE5leHRNb3ZlKGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUscGxheWVyc0NvdW50KSxcbiAgICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjLCBpKSA9PlxuICAgICAgICAgIGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGMsXG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2VsbHMsXG4gICAgY3VycmVudE1vdmUsXG4gICAgbmV4dE1vdmUsXG4gICAgaGFuZGxlQ2VsbENsaWNrLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiR0FNRV9TWU1CT0xTIiwiTU9WRV9PUkRFUlMiLCJnZXROZXh0TW92ZSIsImN1cnJlbk1vdmUiLCJwbGF5ZXJzQ291bnQiLCJzbGljZWRNb3ZlT3JkZXIiLCJzbGljZSIsIm5leHRNb3ZlSW5kZXgiLCJpbmRleE9mIiwiY29tcHV0ZVdpbm5lciIsImNlbGxzIiwic2VxdWVuY2VTaXplIiwiZmllbGRTaXplIiwiZ2FwIiwiTWF0aCIsImZsb29yIiwiZ2V0U2VxdWVuY2VJbmRleGVzIiwiaSIsInJlcyIsImoiLCJsZW5ndGgiLCJ1c2VHYW1lU3RhdGUiLCJjdXJyZW50TW92ZSIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIkNST1NTIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsImxhc3RHYW1lU3RhdGUiLCJtYXAiLCJjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Game/use-game-state.jsx\n"));

/***/ })

});