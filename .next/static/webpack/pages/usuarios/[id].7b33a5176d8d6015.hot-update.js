"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/usuarios/[id]",{

/***/ "./components/sections/UserDisplay.tsx":
/*!*********************************************!*\
  !*** ./components/sections/UserDisplay.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atoms_DisplayLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/DisplayLine */ \"./components/atoms/DisplayLine.tsx\");\n\n\nfunction UserDisplay(param) {\n    let { user } = param;\n    var _user, _user1, _user2, _user3, _user4, _user5, _user6, _user7, _user8, _user9;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-3 mt-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container px-4 mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-10 bg-raisin-black rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full sm:w-auto px-4 mb-6 sm:mb-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"text-2xl font-bold tracking-wide text-cool-gray-200 mb-1\",\n                                children: \"Informa\\xe7\\xf5es Pessoais\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 22\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_DisplayLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"Nome\",\n                        content: (_user = user) === null || _user === void 0 ? void 0 : _user.name\n                    }, void 0, false, {\n                        fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_DisplayLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"Email\",\n                        content: (_user1 = user) === null || _user1 === void 0 ? void 0 : _user1.email\n                    }, void 0, false, {\n                        fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_DisplayLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"Tefefone\",\n                        content: (_user2 = user) === null || _user2 === void 0 ? void 0 : _user2.phone\n                    }, void 0, false, {\n                        fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_DisplayLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"Endere\\xe7o\",\n                        content: (_user3 = user) === null || _user3 === void 0 ? void 0 : _user3.address\n                    }, void 0, false, {\n                        fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_DisplayLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"CPF\",\n                        content: (_user4 = user) === null || _user4 === void 0 ? void 0 : _user4.cpf\n                    }, void 0, false, {\n                        fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_DisplayLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"Tipo de Usu\\xe1rio\",\n                        content: (_user5 = user) === null || _user5 === void 0 ? void 0 : _user5.type\n                    }, void 0, false, {\n                        fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 16\n                    }, this),\n                    ((_user6 = user) === null || _user6 === void 0 ? void 0 : _user6.type) === \"Pscic\\xf3logo\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 mt-12 border-b border-gray-400 border-opacity-20\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full sm:w-auto px-4 mb-6 sm:mb-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-2xl font-bold tracking-wide text-cool-gray-200 mb-1\",\n                                        children: \"Informa\\xe7\\xf5es Profissionais\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 28\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 22\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_DisplayLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                label: \"CRP\",\n                                content: (_user7 = user) === null || _user7 === void 0 ? void 0 : _user7.crp\n                            }, void 0, false, {\n                                fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 mt-12 border-b border-gray-400 border-opacity-20\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full sm:w-auto px-4 mb-6 sm:mb-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-2xl font-bold tracking-wide text-cool-gray-200 mb-1\",\n                                        children: \"Informa\\xe7\\xf5es Institucionais\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 28\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 22\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_DisplayLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                label: \"Institui\\xe7\\xe3o de Ensino\",\n                                content: (_user8 = user) === null || _user8 === void 0 ? void 0 : _user8.institution\n                            }, void 0, false, {\n                                fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 22\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_DisplayLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                label: \"Per\\xedodo\",\n                                content: (_user9 = user) === null || _user9 === void 0 ? void 0 : _user9.period\n                            }, void 0, false, {\n                                fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n            lineNumber: 11,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dizzo/Dev/chegajunto/components/sections/UserDisplay.tsx\",\n        lineNumber: 10,\n        columnNumber: 7\n    }, this);\n}\n_c = UserDisplay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserDisplay);\nvar _c;\n$RefreshReg$(_c, \"UserDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL1VzZXJEaXNwbGF5LnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQU8vQyxTQUFTQyxZQUFZLEtBQTBCO1FBQTFCLEVBQUVDLElBQUksRUFBb0IsR0FBMUI7UUFZNkJBLE9BQ0NBLFFBQ0dBLFFBQ0FBLFFBQ0xBLFFBQ1lBLFFBQzdDQSxRQVN1Q0EsUUFhdEJBLFFBRTBCQTtJQXpDeEQscUJBQ0csOERBQUNDO1FBQVFDLFdBQVU7a0JBQ2hCLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNaLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1osOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNaLDRFQUFDQzs0QkFBSUQsV0FBVTtzQ0FDWiw0RUFBQ0U7Z0NBQUdGLFdBQVU7MENBQTJEOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUsvRSw4REFBQ0osMERBQVdBO3dCQUFDTyxPQUFNO3dCQUFPQyxPQUFPLEdBQUVOLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTU8sSUFBSTs7Ozs7O2tDQUM3Qyw4REFBQ1QsMERBQVdBO3dCQUFDTyxPQUFNO3dCQUFRQyxPQUFPLEdBQUVOLFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTVEsS0FBSzs7Ozs7O2tDQUMvQyw4REFBQ1YsMERBQVdBO3dCQUFDTyxPQUFNO3dCQUFXQyxPQUFPLEdBQUVOLFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTVMsS0FBSzs7Ozs7O2tDQUNsRCw4REFBQ1gsMERBQVdBO3dCQUFDTyxPQUFNO3dCQUFXQyxPQUFPLEdBQUVOLFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTVUsT0FBTzs7Ozs7O2tDQUNwRCw4REFBQ1osMERBQVdBO3dCQUFDTyxPQUFNO3dCQUFNQyxPQUFPLEdBQUVOLFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTVcsR0FBRzs7Ozs7O2tDQUMzQyw4REFBQ2IsMERBQVdBO3dCQUFDTyxPQUFNO3dCQUFrQkMsT0FBTyxHQUFFTixTQUFBQSxrQkFBQUEsNkJBQUFBLE9BQU1ZLElBQUk7Ozs7OztvQkFDdkRaLEVBQUFBLFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTVksSUFBSSxNQUFLLGdDQUNiOzswQ0FDRyw4REFBQ1Q7Z0NBQUlELFdBQVU7MENBQ1osNEVBQUNDO29DQUFJRCxXQUFVOzhDQUNaLDRFQUFDRTt3Q0FBR0YsV0FBVTtrREFBMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSy9FLDhEQUFDSiwwREFBV0E7Z0NBQUNPLE9BQU07Z0NBQU1DLE9BQU8sR0FBRU4sU0FBQUEsa0JBQUFBLDZCQUFBQSxPQUFNYSxHQUFHOzs7Ozs7O3FEQUc5Qzs7MENBQ0csOERBQUNWO2dDQUFJRCxXQUFVOzBDQUNaLDRFQUFDQztvQ0FBSUQsV0FBVTs4Q0FDWiw0RUFBQ0U7d0NBQUdGLFdBQVU7a0RBQTJEOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUsvRSw4REFBQ0osMERBQVdBO2dDQUNUTyxPQUFNO2dDQUNOQyxPQUFPLEdBQUVOLFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTWMsV0FBVzs7Ozs7OzBDQUU3Qiw4REFBQ2hCLDBEQUFXQTtnQ0FBQ08sT0FBTTtnQ0FBVUMsT0FBTyxHQUFFTixTQUFBQSxrQkFBQUEsNkJBQUFBLE9BQU1lLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92RTtLQWpEU2hCO0FBa0RULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VjdGlvbnMvVXNlckRpc3BsYXkudHN4P2ZhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc3BsYXlMaW5lIGZyb20gJy4uL2F0b21zL0Rpc3BsYXlMaW5lJztcbmltcG9ydCBJVXNlciBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0lVc2VyJztcblxuaW50ZXJmYWNlIFVzZXJEaXNwbGF5UHJvcHMge1xuICAgdXNlcj86IElVc2VyO1xufVxuXG5mdW5jdGlvbiBVc2VyRGlzcGxheSh7IHVzZXIgfTogVXNlckRpc3BsYXlQcm9wcykge1xuICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTMgbXQtM1wiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNCBteC1hdXRvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgYmctcmFpc2luLWJsYWNrIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiAtbXgtNCBtYi04IHBiLTYgYm9yZGVyLWIgYm9yZGVyLWdyYXktNDAwIGJvcmRlci1vcGFjaXR5LTIwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gcHgtNCBtYi02IHNtOm1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctd2lkZSB0ZXh0LWNvb2wtZ3JheS0yMDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYcOnw7VlcyBQZXNzb2Fpc1xuICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8RGlzcGxheUxpbmUgbGFiZWw9XCJOb21lXCIgY29udGVudD17dXNlcj8ubmFtZX0gLz5cbiAgICAgICAgICAgICAgIDxEaXNwbGF5TGluZSBsYWJlbD1cIkVtYWlsXCIgY29udGVudD17dXNlcj8uZW1haWx9IC8+XG4gICAgICAgICAgICAgICA8RGlzcGxheUxpbmUgbGFiZWw9XCJUZWZlZm9uZVwiIGNvbnRlbnQ9e3VzZXI/LnBob25lfSAvPlxuICAgICAgICAgICAgICAgPERpc3BsYXlMaW5lIGxhYmVsPVwiRW5kZXJlw6dvXCIgY29udGVudD17dXNlcj8uYWRkcmVzc30gLz5cbiAgICAgICAgICAgICAgIDxEaXNwbGF5TGluZSBsYWJlbD1cIkNQRlwiIGNvbnRlbnQ9e3VzZXI/LmNwZn0gLz5cbiAgICAgICAgICAgICAgIDxEaXNwbGF5TGluZSBsYWJlbD1cIlRpcG8gZGUgVXN1w6FyaW9cIiBjb250ZW50PXt1c2VyPy50eXBlfSAvPlxuICAgICAgICAgICAgICAge3VzZXI/LnR5cGUgPT09ICdQc2NpY8OzbG9nbycgPyAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIC1teC00IG1iLTggcGItNiBtdC0xMiBib3JkZXItYiBib3JkZXItZ3JheS00MDAgYm9yZGVyLW9wYWNpdHktMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0byBweC00IG1iLTYgc206bWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy13aWRlIHRleHQtY29vbC1ncmF5LTIwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm1hw6fDtWVzIFByb2Zpc3Npb25haXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlMaW5lIGxhYmVsPVwiQ1JQXCIgY29udGVudD17dXNlcj8uY3JwfSAvPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiAtbXgtNCBtYi04IHBiLTYgbXQtMTIgYm9yZGVyLWIgYm9yZGVyLWdyYXktNDAwIGJvcmRlci1vcGFjaXR5LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gcHgtNCBtYi02IHNtOm1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctd2lkZSB0ZXh0LWNvb2wtZ3JheS0yMDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYcOnw7VlcyBJbnN0aXR1Y2lvbmFpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8RGlzcGxheUxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW5zdGl0dWnDp8OjbyBkZSBFbnNpbm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dXNlcj8uaW5zdGl0dXRpb259XG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlMaW5lIGxhYmVsPVwiUGVyw61vZG9cIiBjb250ZW50PXt1c2VyPy5wZXJpb2R9IC8+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXJEaXNwbGF5O1xuIl0sIm5hbWVzIjpbIkRpc3BsYXlMaW5lIiwiVXNlckRpc3BsYXkiLCJ1c2VyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImg0IiwibGFiZWwiLCJjb250ZW50IiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwiY3BmIiwidHlwZSIsImNycCIsImluc3RpdHV0aW9uIiwicGVyaW9kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sections/UserDisplay.tsx\n"));

/***/ })

});