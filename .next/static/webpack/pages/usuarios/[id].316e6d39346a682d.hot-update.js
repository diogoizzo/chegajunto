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

/***/ "./pages/usuarios/[id].tsx":
/*!*********************************!*\
  !*** ./pages/usuarios/[id].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Usuarios; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_parts_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/parts/Menu */ \"./components/parts/Menu.tsx\");\n/* harmony import */ var _components_parts_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/parts/PageHeader */ \"./components/parts/PageHeader.tsx\");\n/* harmony import */ var _components_sections_UserDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sections/UserDisplay */ \"./components/sections/UserDisplay.tsx\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _services_UserServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/UserServices */ \"./services/UserServices.ts\");\n/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../entities/User */ \"./entities/User.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Usuarios() {\n    var _user, _user1;\n    _s();\n    //TODO Aqui eu posso melhorar para reduzir o número de chamadas ao servidor, fazendo uma query de todos os usuários e depois recuperando esses usuários e filtrando o usuário que foi passado como parâmetro\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const userId = router.query.id;\n    const query = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([\n        \"user\",\n        userId\n    ], ()=>_services_UserServices__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getById(userId));\n    const user = _entities_User__WEBPACK_IMPORTED_MODULE_7__[\"default\"].createFormObject(query.data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parts_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parts_PageHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: (_user = user) === null || _user === void 0 ? void 0 : _user.name,\n                subtitle: \"Veja as informa\\xe7\\xf5es do usu\\xe1rio acima.\",\n                btnText: \"Editar\",\n                search: false,\n                btnHref: ((_user1 = user) === null || _user1 === void 0 ? void 0 : _user1.userEditLink) || \"/\"\n            }, void 0, false, {\n                fileName: \"/home/dizzo/Dev/chegajunto/pages/usuarios/[id].tsx\",\n                lineNumber: 21,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sections_UserDisplay__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                user: user\n            }, void 0, false, {\n                fileName: \"/home/dizzo/Dev/chegajunto/pages/usuarios/[id].tsx\",\n                lineNumber: 28,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dizzo/Dev/chegajunto/pages/usuarios/[id].tsx\",\n        lineNumber: 20,\n        columnNumber: 7\n    }, this);\n}\n_s(Usuarios, \"3BkAHIl6A3UhM/ocF6frlL5ArTw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Usuarios;\nUsuarios.auth = true;\nvar _c;\n$RefreshReg$(_c, \"Usuarios\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c3Vhcmlvcy9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ087QUFDWTtBQUNLO0FBQ3pCO0FBQ2dCO0FBQ2hCO0FBRXhCLFNBQVNPO1FBYUxDLE9BSUVBOztJQWhCbEIsNE1BQTRNO0lBQzVNLE1BQU1DLFNBQVNULHNEQUFTQTtJQUV4QixNQUFNVSxTQUFTRCxPQUFPRSxLQUFLLENBQUNDLEVBQUU7SUFFOUIsTUFBTUQsUUFBUVAscURBQVFBLENBQUM7UUFBQztRQUFRTTtLQUFPLEVBQUUsSUFBTUwsc0VBQW9CLENBQUNLO0lBRXBFLE1BQU1GLE9BQU9GLHVFQUFxQixDQUFDSyxNQUFNSSxJQUFJO0lBRTdDLHFCQUNHLDhEQUFDZCw4REFBSUE7OzBCQUNGLDhEQUFDQyxvRUFBVUE7Z0JBQ1JjLEtBQUssR0FBRVIsUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNUyxJQUFJO2dCQUNqQkMsVUFBUztnQkFDVEMsU0FBUTtnQkFDUkMsUUFBUTtnQkFDUkMsU0FBU2IsRUFBQUEsU0FBQUEsa0JBQUFBLDZCQUFBQSxPQUFNYyxZQUFZLEtBQUk7Ozs7OzswQkFFbEMsOERBQUNuQix3RUFBV0E7Z0JBQUNLLE1BQU1BOzs7Ozs7Ozs7Ozs7QUFHNUI7R0F0QndCRDs7UUFFTlAsa0RBQVNBO1FBSVZJLGlEQUFRQTs7O0tBTkRHO0FBd0J4QkEsU0FBU2dCLElBQUksR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c3Vhcmlvcy9baWRdLnRzeD8yYzlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBNZW51IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFydHMvTWVudSc7XG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhcnRzL1BhZ2VIZWFkZXInO1xuaW1wb3J0IFVzZXJEaXNwbGF5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvVXNlckRpc3BsYXknO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgVXNlclNlcnZpY2VzIGZyb20gJy4uLy4uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlcyc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9lbnRpdGllcy9Vc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXN1YXJpb3M8TmV4dFBhZ2U+KCkge1xuICAgLy9UT0RPIEFxdWkgZXUgcG9zc28gbWVsaG9yYXIgcGFyYSByZWR1emlyIG8gbsO6bWVybyBkZSBjaGFtYWRhcyBhbyBzZXJ2aWRvciwgZmF6ZW5kbyB1bWEgcXVlcnkgZGUgdG9kb3Mgb3MgdXN1w6FyaW9zIGUgZGVwb2lzIHJlY3VwZXJhbmRvIGVzc2VzIHVzdcOhcmlvcyBlIGZpbHRyYW5kbyBvIHVzdcOhcmlvIHF1ZSBmb2kgcGFzc2FkbyBjb21vIHBhcsOibWV0cm9cbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICBjb25zdCB1c2VySWQgPSByb3V0ZXIucXVlcnkuaWQ7XG5cbiAgIGNvbnN0IHF1ZXJ5ID0gdXNlUXVlcnkoWyd1c2VyJywgdXNlcklkXSwgKCkgPT4gVXNlclNlcnZpY2VzLmdldEJ5SWQodXNlcklkKSk7XG5cbiAgIGNvbnN0IHVzZXIgPSBVc2VyLmNyZWF0ZUZvcm1PYmplY3QocXVlcnkuZGF0YSk7XG5cbiAgIHJldHVybiAoXG4gICAgICA8TWVudT5cbiAgICAgICAgIDxQYWdlSGVhZGVyXG4gICAgICAgICAgICB0aXRsZT17dXNlcj8ubmFtZX1cbiAgICAgICAgICAgIHN1YnRpdGxlPVwiVmVqYSBhcyBpbmZvcm1hw6fDtWVzIGRvIHVzdcOhcmlvIGFjaW1hLlwiXG4gICAgICAgICAgICBidG5UZXh0PVwiRWRpdGFyXCJcbiAgICAgICAgICAgIHNlYXJjaD17ZmFsc2V9XG4gICAgICAgICAgICBidG5IcmVmPXt1c2VyPy51c2VyRWRpdExpbmsgfHwgJy8nfVxuICAgICAgICAgLz5cbiAgICAgICAgIDxVc2VyRGlzcGxheSB1c2VyPXt1c2VyfSAvPlxuICAgICAgPC9NZW51PlxuICAgKTtcbn1cblxuVXN1YXJpb3MuYXV0aCA9IHRydWU7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTWVudSIsIlBhZ2VIZWFkZXIiLCJVc2VyRGlzcGxheSIsInVzZVF1ZXJ5IiwiVXNlclNlcnZpY2VzIiwiVXNlciIsIlVzdWFyaW9zIiwidXNlciIsInJvdXRlciIsInVzZXJJZCIsInF1ZXJ5IiwiaWQiLCJnZXRCeUlkIiwiY3JlYXRlRm9ybU9iamVjdCIsImRhdGEiLCJ0aXRsZSIsIm5hbWUiLCJzdWJ0aXRsZSIsImJ0blRleHQiLCJzZWFyY2giLCJidG5IcmVmIiwidXNlckVkaXRMaW5rIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/usuarios/[id].tsx\n"));

/***/ })

});