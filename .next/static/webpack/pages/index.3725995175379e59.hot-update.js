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

/***/ "./components/game-new/game.jsx":
/*!**************************************!*\
  !*** ./components/game-new/game.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/timers */ \"./components/lib/timers.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _model_compute_player_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/compute-player-timer */ \"./components/game-new/model/compute-player-timer.js\");\n/* harmony import */ var _model_compute_winner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/compute-winner */ \"./components/game-new/model/compute-winner.js\");\n/* harmony import */ var _model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/compute-winner-symbol */ \"./components/game-new/model/compute-winner-symbol.js\");\n/* harmony import */ var _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/game-state-reducer */ \"./components/game-new/model/game-state-reducer.js\");\n/* harmony import */ var _model_get_next_move__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/get-next-move */ \"./components/game-new/model/get-next-move.js\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/game-over-modal */ \"./components/game-new/ui/game-over-modal.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 2;\nfunction Game() {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_model_game_state_reducer__WEBPACK_IMPORTED_MODULE_7__.gameStateReducer, {\n        playersCount: PLAYERS_COUNT,\n        defaultTimer: 10000,\n        currentMoveStart: Date.now()\n    }, _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_7__.initGameState);\n    console.log(\"render\");\n    (0,_lib_timers__WEBPACK_IMPORTED_MODULE_2__.useInterval)(100, !!gameState.currentMoveStart, (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_7__.GAME_STATE_ACTIONS.TICK,\n            now: Date.now()\n        });\n    }, []));\n    const winnerSequence = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_model_compute_winner__WEBPACK_IMPORTED_MODULE_5__.computeWinner)(gameState), [\n        gameState\n    ]);\n    const nextMove = (0,_model_get_next_move__WEBPACK_IMPORTED_MODULE_8__.getNextMove)(gameState);\n    const winnerSymbol = (0,_model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_6__.computeWinnerSymbol)(gameState, {\n        winnerSequence,\n        nextMove\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    const { cells, currentMove } = gameState;\n    const handleCellClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((index)=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_7__.GAME_STATE_ACTIONS.CELL_CLICK,\n            index,\n            now: Date.now()\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_12__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_9__.BackLink, {}, void 0, false, {\n                    fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 19\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_15__.GameTitle, {}, void 0, false, {\n                    fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 16\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_11__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: 4,\n                    timeMode: \"1 мин на ход\"\n                }, void 0, false, {\n                    fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>{\n                    const { timer, timerStartAt } = (0,_model_compute_player_timer__WEBPACK_IMPORTED_MODULE_4__.computePlayerTimer)(gameState, player.symbol);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_16__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        symbol: player.symbol,\n                        timer: timer,\n                        timerStartAt: timerStartAt,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, void 0);\n                }),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_13__.GameMoveInfo, {\n                    currentMove: currentMove,\n                    nextMove: nextMove\n                }, void 0, false, {\n                    fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, void 0),\n                gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_10__.GameCell, {\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        disabled: !!winnerSymbol,\n                        index: index,\n                        onClick: handleCellClick,\n                        symbol: cell\n                    }, index, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_14__.GameOverModal, {\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name,\n                players: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_16__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        timer: gameState.timers[player.symbol],\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"s9ROpoPLXfrDhqxMifgdL//TqBA=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_2__.useInterval\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtnQkFDOUJZLFNBQVNoRSwrQ0FBT0EsQ0FBQytDLEtBQUssQ0FBQyxHQUFHL0IsZUFBZWdDLEdBQUcsQ0FBQyxDQUFDZCxRQUFRSyxzQkFDcEQsOERBQUN4Qix3REFBVUE7d0JBRVRvQyxRQUFRakIsT0FBT2lCLE1BQU07d0JBQ3JCQyxNQUFNbEIsT0FBT2tCLElBQUk7d0JBQ2pCQyxRQUFRbkIsT0FBT21CLE1BQU07d0JBQ3JCSixPQUFPL0IsVUFBVStDLE1BQU0sQ0FBQy9CLE9BQU9DLE1BQU0sQ0FBQzt3QkFDdENBLFFBQVFELE9BQU9DLE1BQU07d0JBQ3JCbUIsU0FBU2YsUUFBUSxNQUFNO3VCQU5sQkwsT0FBT3FCLEVBQUU7Ozs7Ozs7Ozs7OztBQVkxQjtHQW5HZ0J0Qzs7UUFhZGxCLG9EQUFXQTs7O0tBYkdrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4P2U0MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSBcIi4uL2xpYi90aW1lcnNcIjtcbmltcG9ydCB7IFBMQVlFUlMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbXB1dGVQbGF5ZXJUaW1lciB9IGZyb20gXCIuL21vZGVsL2NvbXB1dGUtcGxheWVyLXRpbWVyXCI7XG5pbXBvcnQgeyBjb21wdXRlV2lubmVyIH0gZnJvbSBcIi4vbW9kZWwvY29tcHV0ZS13aW5uZXJcIjtcbmltcG9ydCB7IGNvbXB1dGVXaW5uZXJTeW1ib2wgfSBmcm9tIFwiLi9tb2RlbC9jb21wdXRlLXdpbm5lci1zeW1ib2xcIjtcbmltcG9ydCB7XG4gIEdBTUVfU1RBVEVfQUNUSU9OUyxcbiAgZ2FtZVN0YXRlUmVkdWNlcixcbiAgaW5pdEdhbWVTdGF0ZSxcbn0gZnJvbSBcIi4vbW9kZWwvZ2FtZS1zdGF0ZS1yZWR1Y2VyXCI7XG5pbXBvcnQgeyBnZXROZXh0TW92ZSB9IGZyb20gXCIuL21vZGVsL2dldC1uZXh0LW1vdmVcIjtcbmltcG9ydCB7IEJhY2tMaW5rIH0gZnJvbSBcIi4vdWkvYmFjay1saW5rXCI7XG5pbXBvcnQgeyBHYW1lQ2VsbCB9IGZyb20gXCIuL3VpL2dhbWUtY2VsbFwiO1xuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tIFwiLi91aS9nYW1lLWluZm9cIjtcbmltcG9ydCB7IEdhbWVMYXlvdXQgfSBmcm9tIFwiLi91aS9nYW1lLWxheW91dFwiO1xuaW1wb3J0IHsgR2FtZU1vdmVJbmZvIH0gZnJvbSBcIi4vdWkvZ2FtZS1tb3ZlLWluZm9cIjtcbmltcG9ydCB7IEdhbWVPdmVyTW9kYWwgfSBmcm9tIFwiLi91aS9nYW1lLW92ZXItbW9kYWxcIjtcbmltcG9ydCB7IEdhbWVUaXRsZSB9IGZyb20gXCIuL3VpL2dhbWUtdGl0bGVcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi91aS9wbGF5ZXItaW5mb1wiO1xuXG5jb25zdCBQTEFZRVJTX0NPVU5UID0gMjtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWUoKSB7XG4gIGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXG4gICAgZ2FtZVN0YXRlUmVkdWNlcixcbiAgICB7XG4gICAgICBwbGF5ZXJzQ291bnQ6IFBMQVlFUlNfQ09VTlQsXG4gICAgICBkZWZhdWx0VGltZXI6IDEwMDAwLFxuICAgICAgY3VycmVudE1vdmVTdGFydDogRGF0ZS5ub3coKSxcbiAgICB9LFxuICAgIGluaXRHYW1lU3RhdGUsXG4gICk7XG5cbiAgY29uc29sZS5sb2coXCJyZW5kZXJcIik7XG5cbiAgdXNlSW50ZXJ2YWwoXG4gICAgMTAwLFxuICAgICEhZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlU3RhcnQsXG4gICAgdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHQU1FX1NUQVRFX0FDVElPTlMuVElDSyxcbiAgICAgICAgbm93OiBEYXRlLm5vdygpLFxuICAgICAgfSk7XG4gICAgfSwgW10pLFxuICApO1xuXG4gIGNvbnN0IHdpbm5lclNlcXVlbmNlID0gdXNlTWVtbygoKSA9PiBjb21wdXRlV2lubmVyKGdhbWVTdGF0ZSksIFtnYW1lU3RhdGVdKTtcbiAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShnYW1lU3RhdGUpO1xuICBjb25zdCB3aW5uZXJTeW1ib2wgPSBjb21wdXRlV2lubmVyU3ltYm9sKGdhbWVTdGF0ZSwge1xuICAgIHdpbm5lclNlcXVlbmNlLFxuICAgIG5leHRNb3ZlLFxuICB9KTtcblxuICBjb25zdCB3aW5uZXJQbGF5ZXIgPSBQTEFZRVJTLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLnN5bWJvbCA9PT0gd2lubmVyU3ltYm9sKTtcblxuICBjb25zdCB7IGNlbGxzLCBjdXJyZW50TW92ZSB9ID0gZ2FtZVN0YXRlO1xuXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLLFxuICAgICAgaW5kZXgsXG4gICAgICBub3c6IERhdGUubm93KCksXG4gICAgfSk7XG4gIH0sW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHYW1lTGF5b3V0XG4gICAgICAgIGJhY2tMaW5rPXs8QmFja0xpbmsgLz59XG4gICAgICAgIHRpdGxlPXs8R2FtZVRpdGxlIC8+fVxuICAgICAgICBnYW1lSW5mbz17XG4gICAgICAgICAgPEdhbWVJbmZvIGlzUmF0aW5nR2FtZSBwbGF5ZXJzQ291bnQ9ezR9IHRpbWVNb2RlPXtcIjEg0LzQuNC9INC90LAg0YXQvtC0XCJ9IC8+XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyc0xpc3Q9e1BMQVlFUlMuc2xpY2UoMCwgUExBWUVSU19DT1VOVCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB0aW1lciwgdGltZXJTdGFydEF0IH0gPSBjb21wdXRlUGxheWVyVGltZXIoXG4gICAgICAgICAgICBnYW1lU3RhdGUsXG4gICAgICAgICAgICBwbGF5ZXIuc3ltYm9sLFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQbGF5ZXJJbmZvXG4gICAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxuICAgICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XG4gICAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxuICAgICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XG4gICAgICAgICAgICAgIHN5bWJvbD17cGxheWVyLnN5bWJvbH1cbiAgICAgICAgICAgICAgdGltZXI9e3RpbWVyfVxuICAgICAgICAgICAgICB0aW1lclN0YXJ0QXQ9e3RpbWVyU3RhcnRBdH1cbiAgICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgZ2FtZU1vdmVJbmZvPXtcbiAgICAgICAgICA8R2FtZU1vdmVJbmZvIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX0gbmV4dE1vdmU9e25leHRNb3ZlfSAvPlxuICAgICAgICB9XG4gICAgICAgIGdhbWVDZWxscz17Y2VsbHMubWFwKChjZWxsLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxHYW1lQ2VsbFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGlzV2lubmVyPXt3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaW5kZXgpfVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyEhd2lubmVyU3ltYm9sfVxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2VsbENsaWNrfVxuICAgICAgICAgICAgc3ltYm9sPXtjZWxsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgLz5cbiAgICAgIDxHYW1lT3Zlck1vZGFsXG4gICAgICAgIHdpbm5lck5hbWU9e3dpbm5lclBsYXllcj8ubmFtZX1cbiAgICAgICAgcGxheWVycz17UExBWUVSUy5zbGljZSgwLCBQTEFZRVJTX0NPVU5UKS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8UGxheWVySW5mb1xuICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XG4gICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XG4gICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cbiAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cbiAgICAgICAgICAgIHRpbWVyPXtnYW1lU3RhdGUudGltZXJzW3BsYXllci5zeW1ib2xdfVxuICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxuICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VSZWR1Y2VyIiwidXNlSW50ZXJ2YWwiLCJQTEFZRVJTIiwiY29tcHV0ZVBsYXllclRpbWVyIiwiY29tcHV0ZVdpbm5lciIsImNvbXB1dGVXaW5uZXJTeW1ib2wiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJnYW1lU3RhdGVSZWR1Y2VyIiwiaW5pdEdhbWVTdGF0ZSIsImdldE5leHRNb3ZlIiwiQmFja0xpbmsiLCJHYW1lQ2VsbCIsIkdhbWVJbmZvIiwiR2FtZUxheW91dCIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVPdmVyTW9kYWwiLCJHYW1lVGl0bGUiLCJQbGF5ZXJJbmZvIiwiUExBWUVSU19DT1VOVCIsIkdhbWUiLCJnYW1lU3RhdGUiLCJkaXNwYXRjaCIsInBsYXllcnNDb3VudCIsImRlZmF1bHRUaW1lciIsImN1cnJlbnRNb3ZlU3RhcnQiLCJEYXRlIiwibm93IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJUSUNLIiwid2lubmVyU2VxdWVuY2UiLCJuZXh0TW92ZSIsIndpbm5lclN5bWJvbCIsIndpbm5lclBsYXllciIsImZpbmQiLCJwbGF5ZXIiLCJzeW1ib2wiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJDRUxMX0NMSUNLIiwiYmFja0xpbmsiLCJ0aXRsZSIsImdhbWVJbmZvIiwiaXNSYXRpbmdHYW1lIiwidGltZU1vZGUiLCJwbGF5ZXJzTGlzdCIsInNsaWNlIiwibWFwIiwidGltZXIiLCJ0aW1lclN0YXJ0QXQiLCJhdmF0YXIiLCJuYW1lIiwicmF0aW5nIiwiaXNSaWdodCIsImlkIiwiZ2FtZU1vdmVJbmZvIiwiZ2FtZUNlbGxzIiwiY2VsbCIsImlzV2lubmVyIiwiaW5jbHVkZXMiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJ3aW5uZXJOYW1lIiwicGxheWVycyIsInRpbWVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});