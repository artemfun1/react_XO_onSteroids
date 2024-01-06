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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/Game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currenMove, playersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDERS.slice(0, playersCount);\n    let nextMoveIndex = slicedMoveOrder.indexOf(currenMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            [] // |\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++)if (cells[i]) {}\n}\nfunction useGameState(playersCount) {\n    _s();\n    console.log(computeWinner(cells));\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n        }));\n    const nextMove = getNextMove(currentMove, playersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, playersCount),\n                cells: lastGameState.cells.map((c, i)=>i === index ? lastGameState.currentMove : c)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"+mgN7V1Qs3/TO7OL69HxCcF4PHY=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvdXNlLWdhbWUtc3RhdGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBRXhELFNBQVNHLFlBQVlDLFVBQVUsRUFBRUMsWUFBWTtJQUV6QyxNQUFNQyxrQkFBa0JKLG1EQUFXQSxDQUFDSyxLQUFLLENBQUMsR0FBRUY7SUFFNUMsSUFBSUcsZ0JBQWdCRixnQkFBZ0JHLE9BQU8sQ0FBQ0wsY0FBYztRQUNuREU7SUFBUCxPQUFPQSxDQUFBQSxpQ0FBQUEsZUFBZSxDQUFDRSxjQUFjLGNBQTlCRiw0Q0FBQUEsaUNBQWtDQSxlQUFlLENBQUMsRUFBRTtBQUM3RDtBQUVBLFNBQVNJLGNBQWNDLEtBQUs7UUFBRUMsZUFBQUEsaUVBQWUsR0FBR0MsWUFBQUEsaUVBQVk7SUFFMUQsTUFBTUMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDSixlQUFhO0lBRXBDLFNBQVNLLG1CQUFtQkMsQ0FBQztRQUUzQixNQUFNQyxNQUFLO1lBQ1QsRUFBRztZQUNILEVBQUc7WUFDSCxFQUFHO1lBQ0gsRUFBRyxDQUFFLElBQUk7U0FDVDtRQUVGLElBQUksSUFBSUMsSUFBRyxHQUFHQSxJQUFFUixjQUFhUSxJQUFJO1lBRS9CRCxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNELElBQUlOLE1BQU1JO1lBQ3RCQyxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNSLFlBQWFPLENBQUFBLElBQUlOLEdBQUUsSUFBTU0sQ0FBQUEsSUFBSU4sR0FBRSxJQUFJSTtZQUMvQ0MsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLENBQUNSLFlBQWFPLENBQUFBLElBQUlOLEdBQUUsSUFBTU0sQ0FBQUEsSUFBSU4sR0FBRSxJQUFJSTtZQUNoREMsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDUixZQUFhTyxDQUFBQSxJQUFJTixHQUFFLElBQUtJO1FBRXRDO1FBRUEsT0FBT0M7SUFFVDtJQUVBLElBQUksSUFBSUQsSUFBRSxHQUFFQSxJQUFFUCxNQUFNVyxNQUFNLEVBQUNKLElBRTNCLElBQUdQLEtBQUssQ0FBQ08sRUFBRSxFQUFDLENBRVo7QUFFRjtBQUlLLFNBQVNLLGFBQWFsQixZQUFZOztJQUV2Q21CLFFBQVFDLEdBQUcsQ0FBQ2YsY0FBY0M7SUFJMUIsTUFBTSxDQUFDLEVBQUVBLEtBQUssRUFBRWUsV0FBVyxFQUFFLEVBQUVDLGFBQWEsR0FBRzNCLCtDQUFRQSxDQUFDLElBQU87WUFDN0RXLE9BQU8sSUFBSWlCLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7WUFDL0JILGFBQWF6QixvREFBWUEsQ0FBQzZCLEtBQUs7UUFDakM7SUFFQSxNQUFNQyxXQUFXNUIsWUFBWXVCLGFBQVlyQjtJQUV6QyxNQUFNMkIsa0JBQWtCLENBQUNDO1FBQ3ZCTixhQUFhLENBQUNPO1lBQ1osSUFBSUEsY0FBY3ZCLEtBQUssQ0FBQ3NCLE1BQU0sRUFBRTtnQkFDOUIsT0FBT0M7WUFDVDtZQUNBLE9BQU87Z0JBQ0wsR0FBR0EsYUFBYTtnQkFDaEJSLGFBQWF2QixZQUFZK0IsY0FBY1IsV0FBVyxFQUFDckI7Z0JBQ25ETSxPQUFPdUIsY0FBY3ZCLEtBQUssQ0FBQ3dCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHbEIsSUFDakNBLE1BQU1lLFFBQVFDLGNBQWNSLFdBQVcsR0FBR1U7WUFFOUM7UUFDRjtJQUNGO0lBRUEsT0FBTztRQUNMekI7UUFDQWU7UUFDQUs7UUFDQUM7SUFDRjtBQUNGO0dBbENnQlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lL3VzZS1nYW1lLXN0YXRlLmpzeD8xN2ZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMsIE1PVkVfT1JERVJTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGdldE5leHRNb3ZlKGN1cnJlbk1vdmUsIHBsYXllcnNDb3VudCkge1xuXG4gICAgY29uc3Qgc2xpY2VkTW92ZU9yZGVyID0gTU9WRV9PUkRFUlMuc2xpY2UoMCxwbGF5ZXJzQ291bnQpXG5cbiAgICBsZXQgbmV4dE1vdmVJbmRleCA9IHNsaWNlZE1vdmVPcmRlci5pbmRleE9mKGN1cnJlbk1vdmUpICsgMTtcbiAgICByZXR1cm4gc2xpY2VkTW92ZU9yZGVyW25leHRNb3ZlSW5kZXhdID8/IHNsaWNlZE1vdmVPcmRlclswXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVXaW5uZXIoY2VsbHMsIHNlcXVlbmNlU2l6ZSA9IDUsIGZpZWxkU2l6ZSA9IDE5ICApe1xuXG4gICAgY29uc3QgZ2FwID0gTWF0aC5mbG9vcihzZXF1ZW5jZVNpemUvMilcblxuICAgIGZ1bmN0aW9uIGdldFNlcXVlbmNlSW5kZXhlcyhpKXtcblxuICAgICAgY29uc3QgcmVzID1bIFxuICAgICAgICBbIF0sIC8vIC1cbiAgICAgICAgWyBdLCAvLyBcXFxuICAgICAgICBbIF0sIC8vIC9cbiAgICAgICAgWyBdICAvLyB8XG4gICAgICAgXVxuXG4gICAgICBmb3IobGV0IGogPTA7IGo8c2VxdWVuY2VTaXplO2orKyl7XG5cbiAgICAgICAgcmVzWzBdLnB1c2goaiAtIGdhcCArIGkpXG4gICAgICAgIHJlc1sxXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSsgaSlcbiAgICAgICAgcmVzWzJdLnB1c2goLWZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSsgaSlcbiAgICAgICAgcmVzWzNdLnB1c2goZmllbGRTaXplICogKGogLSBnYXApICsgaSlcblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzXG5cbiAgICB9XG5cbiAgICBmb3IobGV0IGk9MDtpPGNlbGxzLmxlbmd0aDtpKyspXG5cbiAgICBpZihjZWxsc1tpXSl7XG5cbiAgICB9XG5cbiAgfVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpIHtcblxuICBjb25zb2xlLmxvZyhjb21wdXRlV2lubmVyKGNlbGxzKSlcblxuICBcblxuICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG4gICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgIGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXG4gIH0pKTtcblxuICBjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLHBsYXllcnNDb3VudCk7XG5cbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiB7XG4gICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIGxhc3RHYW1lU3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSxwbGF5ZXJzQ291bnQpLFxuICAgICAgICBjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoKGMsIGkpID0+XG4gICAgICAgICAgaSA9PT0gaW5kZXggPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlIDogYyxcbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjZWxscyxcbiAgICBjdXJyZW50TW92ZSxcbiAgICBuZXh0TW92ZSxcbiAgICBoYW5kbGVDZWxsQ2xpY2ssXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJNT1ZFX09SREVSUyIsImdldE5leHRNb3ZlIiwiY3VycmVuTW92ZSIsInBsYXllcnNDb3VudCIsInNsaWNlZE1vdmVPcmRlciIsInNsaWNlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJjb21wdXRlV2lubmVyIiwiY2VsbHMiLCJzZXF1ZW5jZVNpemUiLCJmaWVsZFNpemUiLCJnYXAiLCJNYXRoIiwiZmxvb3IiLCJnZXRTZXF1ZW5jZUluZGV4ZXMiLCJpIiwicmVzIiwiaiIsInB1c2giLCJsZW5ndGgiLCJ1c2VHYW1lU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudE1vdmUiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJDUk9TUyIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/use-game-state.jsx\n"));

/***/ })

});