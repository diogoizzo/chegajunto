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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Usuarios; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_parts_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/parts/Menu */ \"./components/parts/Menu.tsx\");\n/* harmony import */ var _components_parts_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/parts/PageHeader */ \"./components/parts/PageHeader.tsx\");\n/* harmony import */ var _components_sections_UserDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sections/UserDisplay */ \"./components/sections/UserDisplay.tsx\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _Services_UserServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/UserServices */ \"./Services/UserServices.ts\");\n/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../entities/User */ \"./entities/User.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Usuarios() {\n    var _user, _user1;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const userId = router.query.id;\n    const query = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([\n        \"user\",\n        userId\n    ], ()=>_Services_UserServices__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getById(userId));\n    const user = _entities_User__WEBPACK_IMPORTED_MODULE_7__[\"default\"].createFormObject(query.data);\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parts_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parts_PageHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: (_user = user) === null || _user === void 0 ? void 0 : _user.name,\n                subtitle: \"Veja as informa\\xe7\\xf5es do usu\\xe1rio acima.\",\n                btnText: \"Editar\",\n                btnHref: ((_user1 = user) === null || _user1 === void 0 ? void 0 : _user1.userEditLink) || \"/\"\n            }, void 0, false, {\n                fileName: \"/Users/dizzo/Dev/chegajunto/pages/usuarios/[id].tsx\",\n                lineNumber: 22,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sections_UserDisplay__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                user: user\n            }, void 0, false, {\n                fileName: \"/Users/dizzo/Dev/chegajunto/pages/usuarios/[id].tsx\",\n                lineNumber: 28,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dizzo/Dev/chegajunto/pages/usuarios/[id].tsx\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, this);\n}\n_s(Usuarios, \"3BkAHIl6A3UhM/ocF6frlL5ArTw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Usuarios;\nUsuarios.auth = true;\nvar _c;\n$RefreshReg$(_c, \"Usuarios\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c3Vhcmlvcy9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ087QUFDWTtBQUNLO0FBQ3pCO0FBQ2dCO0FBQ2hCO0FBRXhCLFNBQVNPO1FBY0xDLE9BR0VBOztJQWhCbEIsTUFBTUMsU0FBU1Qsc0RBQVNBO0lBRXhCLE1BQU1VLFNBQVNELE9BQU9FLEtBQUssQ0FBQ0MsRUFBRTtJQUU5QixNQUFNRCxRQUFRUCxxREFBUUEsQ0FBQztRQUFDO1FBQVFNO0tBQU8sRUFBRSxJQUFNTCxzRUFBb0IsQ0FBQ0s7SUFFcEUsTUFBTUYsT0FBT0YsdUVBQXFCLENBQUNLLE1BQU1JLElBQUk7SUFFN0NDLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFFWixxQkFDRyw4REFBQ1AsOERBQUlBOzswQkFDRiw4REFBQ0Msb0VBQVVBO2dCQUNSZ0IsS0FBSyxHQUFFVixRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1XLElBQUk7Z0JBQ2pCQyxVQUFTO2dCQUNUQyxTQUFRO2dCQUNSQyxTQUFTZCxFQUFBQSxTQUFBQSxrQkFBQUEsNkJBQUFBLE9BQU1lLFlBQVksS0FBSTs7Ozs7OzBCQUVsQyw4REFBQ3BCLHdFQUFXQTtnQkFBQ0ssTUFBTUE7Ozs7Ozs7Ozs7OztBQUc1QjtHQXRCd0JEOztRQUNOUCxrREFBU0E7UUFJVkksaURBQVFBOzs7S0FMREc7QUF3QnhCQSxTQUFTaUIsSUFBSSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzdWFyaW9zL1tpZF0udHN4PzJjOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYXJ0cy9NZW51JztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFydHMvUGFnZUhlYWRlcic7XG5pbXBvcnQgVXNlckRpc3BsYXkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWN0aW9ucy9Vc2VyRGlzcGxheSc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCBVc2VyU2VydmljZXMgZnJvbSAnLi4vLi4vU2VydmljZXMvVXNlclNlcnZpY2VzJztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2VudGl0aWVzL1VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc3VhcmlvczxOZXh0UGFnZT4oKSB7XG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgY29uc3QgdXNlcklkID0gcm91dGVyLnF1ZXJ5LmlkO1xuXG4gICBjb25zdCBxdWVyeSA9IHVzZVF1ZXJ5KFsndXNlcicsIHVzZXJJZF0sICgpID0+IFVzZXJTZXJ2aWNlcy5nZXRCeUlkKHVzZXJJZCkpO1xuXG4gICBjb25zdCB1c2VyID0gVXNlci5jcmVhdGVGb3JtT2JqZWN0KHF1ZXJ5LmRhdGEpO1xuXG4gICBjb25zb2xlLmxvZyh1c2VyKTtcblxuICAgcmV0dXJuIChcbiAgICAgIDxNZW51PlxuICAgICAgICAgPFBhZ2VIZWFkZXJcbiAgICAgICAgICAgIHRpdGxlPXt1c2VyPy5uYW1lfVxuICAgICAgICAgICAgc3VidGl0bGU9XCJWZWphIGFzIGluZm9ybWHDp8O1ZXMgZG8gdXN1w6FyaW8gYWNpbWEuXCJcbiAgICAgICAgICAgIGJ0blRleHQ9XCJFZGl0YXJcIlxuICAgICAgICAgICAgYnRuSHJlZj17dXNlcj8udXNlckVkaXRMaW5rIHx8ICcvJ31cbiAgICAgICAgIC8+XG4gICAgICAgICA8VXNlckRpc3BsYXkgdXNlcj17dXNlcn0gLz5cbiAgICAgIDwvTWVudT5cbiAgICk7XG59XG5cblVzdWFyaW9zLmF1dGggPSB0cnVlO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIk1lbnUiLCJQYWdlSGVhZGVyIiwiVXNlckRpc3BsYXkiLCJ1c2VRdWVyeSIsIlVzZXJTZXJ2aWNlcyIsIlVzZXIiLCJVc3VhcmlvcyIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VySWQiLCJxdWVyeSIsImlkIiwiZ2V0QnlJZCIsImNyZWF0ZUZvcm1PYmplY3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibmFtZSIsInN1YnRpdGxlIiwiYnRuVGV4dCIsImJ0bkhyZWYiLCJ1c2VyRWRpdExpbmsiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/usuarios/[id].tsx\n"));

/***/ })

});