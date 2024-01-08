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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/timers */ \"./components/lib/timers.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _model_compute_player_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/compute-player-timer */ \"./components/game-new/model/compute-player-timer.js\");\n/* harmony import */ var _model_compute_winner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/compute-winner */ \"./components/game-new/model/compute-winner.js\");\n/* harmony import */ var _model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/compute-winner-symbol */ \"./components/game-new/model/compute-winner-symbol.js\");\n/* harmony import */ var _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/game-state-reducer */ \"./components/game-new/model/game-state-reducer.js\");\n/* harmony import */ var _model_get_next_move__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/get-next-move */ \"./components/game-new/model/get-next-move.js\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/game-over-modal */ \"./components/game-new/ui/game-over-modal.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 2;\nfunction Game() {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_model_game_state_reducer__WEBPACK_IMPORTED_MODULE_7__.gameStateReducer, {\n        playersCount: PLAYERS_COUNT,\n        defaultTimer: 10000,\n        currentMoveStart: Date.now()\n    }, _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_7__.initGameState);\n    console.log(\"render\");\n    (0,_lib_timers__WEBPACK_IMPORTED_MODULE_2__.useInterval)(100, !!gameState.currentMoveStart, (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_7__.GAME_STATE_ACTIONS.TICK,\n            now: Date.now()\n        });\n    }, []));\n    const winnerSequence = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_model_compute_winner__WEBPACK_IMPORTED_MODULE_5__.computeWinner)(gameState), [\n        gameState\n    ]);\n    const nextMove = (0,_model_get_next_move__WEBPACK_IMPORTED_MODULE_8__.getNextMove)(gameState);\n    const winnerSymbol = (0,_model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_6__.computeWinnerSymbol)(gameState, {\n        winnerSequence,\n        nextMove\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    const { cells, currentMove } = gameState;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_12__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_9__.BackLink, {}, void 0, false, {\n                    fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 19\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_15__.GameTitle, {}, void 0, false, {\n                    fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 16\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_11__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: 4,\n                    timeMode: \"1 мин на ход\"\n                }, void 0, false, {\n                    fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>{\n                    const { timer, timerStartAt } = (0,_model_compute_player_timer__WEBPACK_IMPORTED_MODULE_4__.computePlayerTimer)(gameState, player.symbol);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_16__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        symbol: player.symbol,\n                        timer: timer,\n                        timerStartAt: timerStartAt,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, void 0);\n                }),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_13__.GameMoveInfo, {\n                    currentMove: currentMove,\n                    nextMove: nextMove\n                }, void 0, false, {\n                    fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 11\n                }, void 0),\n                gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_10__.GameCell, {\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        disabled: !!winnerSymbol,\n                        onClick: ()=>{\n                            dispatch({\n                                type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_7__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                index,\n                                now: Date.now()\n                            });\n                        },\n                        symbol: cell\n                    }, index, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_14__.GameOverModal, {\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name,\n                players: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_16__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        timer: gameState.timers[player.symbol],\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"/Users/artem/myvscode/React_XO_onSteroids/components/game-new/game.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"v8h77i6fdEsqkiSdqsLDAQLC2QA=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_2__.useInterval\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1gsUUFBUVksc0JBQ3BELDhEQUFDL0Isd0RBQVVBO3dCQUVUa0MsUUFBUWYsT0FBT2UsTUFBTTt3QkFDckJDLE1BQU1oQixPQUFPZ0IsSUFBSTt3QkFDakJDLFFBQVFqQixPQUFPaUIsTUFBTTt3QkFDckJKLE9BQU83QixVQUFVOEMsTUFBTSxDQUFDOUIsT0FBT0MsTUFBTSxDQUFDO3dCQUN0Q0EsUUFBUUQsT0FBT0MsTUFBTTt3QkFDckJpQixTQUFTTixRQUFRLE1BQU07dUJBTmxCWixPQUFPbUIsRUFBRTs7Ozs7Ozs7Ozs7O0FBWTFCO0dBaEdnQnBDOztRQWFkbEIsb0RBQVdBOzs7S0FiR2tCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvZ2FtZS5qc3g/ZTQyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSW50ZXJ2YWwgfSBmcm9tIFwiLi4vbGliL3RpbWVyc1wiO1xuaW1wb3J0IHsgUExBWUVSUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29tcHV0ZVBsYXllclRpbWVyIH0gZnJvbSBcIi4vbW9kZWwvY29tcHV0ZS1wbGF5ZXItdGltZXJcIjtcbmltcG9ydCB7IGNvbXB1dGVXaW5uZXIgfSBmcm9tIFwiLi9tb2RlbC9jb21wdXRlLXdpbm5lclwiO1xuaW1wb3J0IHsgY29tcHV0ZVdpbm5lclN5bWJvbCB9IGZyb20gXCIuL21vZGVsL2NvbXB1dGUtd2lubmVyLXN5bWJvbFwiO1xuaW1wb3J0IHtcbiAgR0FNRV9TVEFURV9BQ1RJT05TLFxuICBnYW1lU3RhdGVSZWR1Y2VyLFxuICBpbml0R2FtZVN0YXRlLFxufSBmcm9tIFwiLi9tb2RlbC9nYW1lLXN0YXRlLXJlZHVjZXJcIjtcbmltcG9ydCB7IGdldE5leHRNb3ZlIH0gZnJvbSBcIi4vbW9kZWwvZ2V0LW5leHQtbW92ZVwiO1xuaW1wb3J0IHsgQmFja0xpbmsgfSBmcm9tIFwiLi91aS9iYWNrLWxpbmtcIjtcbmltcG9ydCB7IEdhbWVDZWxsIH0gZnJvbSBcIi4vdWkvZ2FtZS1jZWxsXCI7XG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gXCIuL3VpL2dhbWUtaW5mb1wiO1xuaW1wb3J0IHsgR2FtZUxheW91dCB9IGZyb20gXCIuL3VpL2dhbWUtbGF5b3V0XCI7XG5pbXBvcnQgeyBHYW1lTW92ZUluZm8gfSBmcm9tIFwiLi91aS9nYW1lLW1vdmUtaW5mb1wiO1xuaW1wb3J0IHsgR2FtZU92ZXJNb2RhbCB9IGZyb20gXCIuL3VpL2dhbWUtb3Zlci1tb2RhbFwiO1xuaW1wb3J0IHsgR2FtZVRpdGxlIH0gZnJvbSBcIi4vdWkvZ2FtZS10aXRsZVwiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3VpL3BsYXllci1pbmZvXCI7XG5cbmNvbnN0IFBMQVlFUlNfQ09VTlQgPSAyO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcbiAgICBnYW1lU3RhdGVSZWR1Y2VyLFxuICAgIHtcbiAgICAgIHBsYXllcnNDb3VudDogUExBWUVSU19DT1VOVCxcbiAgICAgIGRlZmF1bHRUaW1lcjogMTAwMDAsXG4gICAgICBjdXJyZW50TW92ZVN0YXJ0OiBEYXRlLm5vdygpLFxuICAgIH0sXG4gICAgaW5pdEdhbWVTdGF0ZSxcbiAgKTtcblxuICBjb25zb2xlLmxvZyhcInJlbmRlclwiKTtcblxuICB1c2VJbnRlcnZhbChcbiAgICAxMDAsXG4gICAgISFnYW1lU3RhdGUuY3VycmVudE1vdmVTdGFydCxcbiAgICB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5USUNLLFxuICAgICAgICBub3c6IERhdGUubm93KCksXG4gICAgICB9KTtcbiAgICB9LFtdKSxcbiAgKTtcblxuICBjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IHVzZU1lbW8oKCkgPT4gY29tcHV0ZVdpbm5lcihnYW1lU3RhdGUpLCBbZ2FtZVN0YXRlXSk7XG4gIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoZ2FtZVN0YXRlKTtcbiAgY29uc3Qgd2lubmVyU3ltYm9sID0gY29tcHV0ZVdpbm5lclN5bWJvbChnYW1lU3RhdGUsIHtcbiAgICB3aW5uZXJTZXF1ZW5jZSxcbiAgICBuZXh0TW92ZSxcbiAgfSk7XG5cbiAgY29uc3Qgd2lubmVyUGxheWVyID0gUExBWUVSUy5maW5kKChwbGF5ZXIpID0+IHBsYXllci5zeW1ib2wgPT09IHdpbm5lclN5bWJvbCk7XG5cbiAgY29uc3QgeyBjZWxscywgY3VycmVudE1vdmUgfSA9IGdhbWVTdGF0ZTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2FtZUxheW91dFxuICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rIC8+fVxuICAgICAgICB0aXRsZT17PEdhbWVUaXRsZSAvPn1cbiAgICAgICAgZ2FtZUluZm89e1xuICAgICAgICAgIDxHYW1lSW5mbyBpc1JhdGluZ0dhbWUgcGxheWVyc0NvdW50PXs0fSB0aW1lTW9kZT17XCIxINC80LjQvSDQvdCwINGF0L7QtFwifSAvPlxuICAgICAgICB9XG4gICAgICAgIHBsYXllcnNMaXN0PXtQTEFZRVJTLnNsaWNlKDAsIFBMQVlFUlNfQ09VTlQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgdGltZXIsIHRpbWVyU3RhcnRBdCB9ID0gY29tcHV0ZVBsYXllclRpbWVyKFxuICAgICAgICAgICAgZ2FtZVN0YXRlLFxuICAgICAgICAgICAgcGxheWVyLnN5bWJvbCxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGxheWVySW5mb1xuICAgICAgICAgICAgICBrZXk9e3BsYXllci5pZH1cbiAgICAgICAgICAgICAgYXZhdGFyPXtwbGF5ZXIuYXZhdGFyfVxuICAgICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cbiAgICAgICAgICAgICAgcmF0aW5nPXtwbGF5ZXIucmF0aW5nfVxuICAgICAgICAgICAgICBzeW1ib2w9e3BsYXllci5zeW1ib2x9XG4gICAgICAgICAgICAgIHRpbWVyPXt0aW1lcn1cbiAgICAgICAgICAgICAgdGltZXJTdGFydEF0PXt0aW1lclN0YXJ0QXR9XG4gICAgICAgICAgICAgIGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIGdhbWVNb3ZlSW5mbz17XG4gICAgICAgICAgPEdhbWVNb3ZlSW5mbyBjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9IG5leHRNb3ZlPXtuZXh0TW92ZX0gLz5cbiAgICAgICAgfVxuICAgICAgICBnYW1lQ2VsbHM9e2NlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8R2FtZUNlbGxcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBpc1dpbm5lcj17d2lubmVyU2VxdWVuY2U/LmluY2x1ZGVzKGluZGV4KX1cbiAgICAgICAgICAgIGRpc2FibGVkPXshIXdpbm5lclN5bWJvbH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLLFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIG5vdzogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3ltYm9sPXtjZWxsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgLz5cbiAgICAgIDxHYW1lT3Zlck1vZGFsXG4gICAgICAgIHdpbm5lck5hbWU9e3dpbm5lclBsYXllcj8ubmFtZX1cbiAgICAgICAgcGxheWVycz17UExBWUVSUy5zbGljZSgwLCBQTEFZRVJTX0NPVU5UKS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8UGxheWVySW5mb1xuICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XG4gICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XG4gICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cbiAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cbiAgICAgICAgICAgIHRpbWVyPXtnYW1lU3RhdGUudGltZXJzW3BsYXllci5zeW1ib2xdfVxuICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxuICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VSZWR1Y2VyIiwidXNlSW50ZXJ2YWwiLCJQTEFZRVJTIiwiY29tcHV0ZVBsYXllclRpbWVyIiwiY29tcHV0ZVdpbm5lciIsImNvbXB1dGVXaW5uZXJTeW1ib2wiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJnYW1lU3RhdGVSZWR1Y2VyIiwiaW5pdEdhbWVTdGF0ZSIsImdldE5leHRNb3ZlIiwiQmFja0xpbmsiLCJHYW1lQ2VsbCIsIkdhbWVJbmZvIiwiR2FtZUxheW91dCIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVPdmVyTW9kYWwiLCJHYW1lVGl0bGUiLCJQbGF5ZXJJbmZvIiwiUExBWUVSU19DT1VOVCIsIkdhbWUiLCJnYW1lU3RhdGUiLCJkaXNwYXRjaCIsInBsYXllcnNDb3VudCIsImRlZmF1bHRUaW1lciIsImN1cnJlbnRNb3ZlU3RhcnQiLCJEYXRlIiwibm93IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJUSUNLIiwid2lubmVyU2VxdWVuY2UiLCJuZXh0TW92ZSIsIndpbm5lclN5bWJvbCIsIndpbm5lclBsYXllciIsImZpbmQiLCJwbGF5ZXIiLCJzeW1ib2wiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwiYmFja0xpbmsiLCJ0aXRsZSIsImdhbWVJbmZvIiwiaXNSYXRpbmdHYW1lIiwidGltZU1vZGUiLCJwbGF5ZXJzTGlzdCIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJ0aW1lciIsInRpbWVyU3RhcnRBdCIsImF2YXRhciIsIm5hbWUiLCJyYXRpbmciLCJpc1JpZ2h0IiwiaWQiLCJnYW1lTW92ZUluZm8iLCJnYW1lQ2VsbHMiLCJjZWxsIiwiaXNXaW5uZXIiLCJpbmNsdWRlcyIsImRpc2FibGVkIiwib25DbGljayIsIkNFTExfQ0xJQ0siLCJ3aW5uZXJOYW1lIiwicGxheWVycyIsInRpbWVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});