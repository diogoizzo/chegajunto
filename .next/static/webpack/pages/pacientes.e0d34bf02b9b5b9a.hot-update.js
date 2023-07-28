"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pacientes",{

/***/ "./pages/pacientes/index.tsx":
/*!***********************************!*\
  !*** ./pages/pacientes/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pacientes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _components_parts_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/parts/Menu */ \"./components/parts/Menu.tsx\");\n/* harmony import */ var _components_parts_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/parts/PageHeader */ \"./components/parts/PageHeader.tsx\");\n/* harmony import */ var _components_sections_PatientesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sections/PatientesTable */ \"./components/sections/PatientesTable.tsx\");\n/* harmony import */ var _entities_Patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities/Patient */ \"./entities/Patient.ts\");\n/* harmony import */ var _services_PatientServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/PatientServices */ \"./services/PatientServices.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Pacientes() {\n    _s();\n    const query = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([\n        \"patient\"\n    ], ()=>_services_PatientServices__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getAll());\n    const patients = query.data && _entities_Patient__WEBPACK_IMPORTED_MODULE_5__[\"default\"].createMany(query.data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parts_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parts_PageHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Pacientes\",\n                subtitle: \"Veja a lista completa de pacientes cadastrados no sistema.\",\n                btnHref: \"/\"\n            }, void 0, false, {\n                fileName: \"/home/dizzo/Dev/chegajunto/pages/pacientes/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 10\n            }, this),\n            query.isLoading ? \"loading...\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sections_PatientesTable__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                data: patients !== null && patients !== void 0 ? patients : []\n            }, void 0, false, {\n                fileName: \"/home/dizzo/Dev/chegajunto/pages/pacientes/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dizzo/Dev/chegajunto/pages/pacientes/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 7\n    }, this);\n}\n_s(Pacientes, \"c7fxJWDO4uMGjIdKMJSj1aiS9wg=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c = Pacientes;\nPacientes.auth = true;\nvar _c;\n$RefreshReg$(_c, \"Pacientes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYWNpZW50ZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1E7QUFDWTtBQUNXO0FBQ3pCO0FBQ2dCO0FBRTlDLFNBQVNNOztJQUNyQixNQUFNQyxRQUFRUCxxREFBUUEsQ0FBQztRQUFDO0tBQVUsRUFBRSxJQUFNSyx3RUFBc0I7SUFFaEUsTUFBTUksV0FBV0YsTUFBTUcsSUFBSSxJQUFJTixvRUFBa0IsQ0FBQ0csTUFBTUcsSUFBSTtJQUU1RCxxQkFDRyw4REFBQ1QsOERBQUlBOzswQkFDRiw4REFBQ0Msb0VBQVVBO2dCQUNSVSxPQUFNO2dCQUNOQyxVQUFTO2dCQUNUQyxTQUFROzs7Ozs7WUFFVlAsTUFBTVEsU0FBUyxHQUNiLDZCQUVBLDhEQUFDWiwyRUFBY0E7Z0JBQUNPLE1BQU1ELHFCQUFBQSxzQkFBQUEsV0FBWSxFQUFFOzs7Ozs7Ozs7Ozs7QUFJaEQ7R0FuQndCSDs7UUFDUE4saURBQVFBOzs7S0FERE07QUFxQnhCQSxVQUFVVSxJQUFJLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFjaWVudGVzL2luZGV4LnRzeD83NTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYXJ0cy9NZW51JztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFydHMvUGFnZUhlYWRlcic7XG5pbXBvcnQgUGF0aWVudGVzVGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWN0aW9ucy9QYXRpZW50ZXNUYWJsZSc7XG5pbXBvcnQgUGF0aWVudCBmcm9tICcuLi8uLi9lbnRpdGllcy9QYXRpZW50JztcbmltcG9ydCBQYXRpZW50U2VydmljZXMgZnJvbSAnLi4vLi4vc2VydmljZXMvUGF0aWVudFNlcnZpY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFjaWVudGVzPE5leHRQYWdlPigpIHtcbiAgIGNvbnN0IHF1ZXJ5ID0gdXNlUXVlcnkoWydwYXRpZW50J10sICgpID0+IFBhdGllbnRTZXJ2aWNlcy5nZXRBbGwoKSk7XG5cbiAgIGNvbnN0IHBhdGllbnRzID0gcXVlcnkuZGF0YSAmJiBQYXRpZW50LmNyZWF0ZU1hbnkocXVlcnkuZGF0YSk7XG5cbiAgIHJldHVybiAoXG4gICAgICA8TWVudT5cbiAgICAgICAgIDxQYWdlSGVhZGVyXG4gICAgICAgICAgICB0aXRsZT1cIlBhY2llbnRlc1wiXG4gICAgICAgICAgICBzdWJ0aXRsZT1cIlZlamEgYSBsaXN0YSBjb21wbGV0YSBkZSBwYWNpZW50ZXMgY2FkYXN0cmFkb3Mgbm8gc2lzdGVtYS5cIlxuICAgICAgICAgICAgYnRuSHJlZj1cIi9cIlxuICAgICAgICAgLz5cbiAgICAgICAgIHtxdWVyeS5pc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAnbG9hZGluZy4uLidcbiAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UGF0aWVudGVzVGFibGUgZGF0YT17cGF0aWVudHMgPz8gW119IC8+XG4gICAgICAgICApfVxuICAgICAgPC9NZW51PlxuICAgKTtcbn1cblxuUGFjaWVudGVzLmF1dGggPSB0cnVlO1xuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiTWVudSIsIlBhZ2VIZWFkZXIiLCJQYXRpZW50ZXNUYWJsZSIsIlBhdGllbnQiLCJQYXRpZW50U2VydmljZXMiLCJQYWNpZW50ZXMiLCJxdWVyeSIsImdldEFsbCIsInBhdGllbnRzIiwiZGF0YSIsImNyZWF0ZU1hbnkiLCJ0aXRsZSIsInN1YnRpdGxlIiwiYnRuSHJlZiIsImlzTG9hZGluZyIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pacientes/index.tsx\n"));

/***/ })

});