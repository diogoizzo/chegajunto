"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/usuarios/editar/[id]",{

/***/ "./Services/UserServices.ts":
/*!**********************************!*\
  !*** ./Services/UserServices.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserServices; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/User */ \"./entities/User.ts\");\n\n\n\nclass UserServices {\n    static async register(form) {\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/register\", form);\n            const { email, password } = form;\n            if (res.status === 200) {\n                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.signIn)(\"credentials\", {\n                    email,\n                    password,\n                    callbackUrl: \"/usuarios\",\n                    redirect: true\n                });\n            }\n        } catch (e) {\n            console.log(e);\n        }\n    }\n    static async getAll() {\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/usuarios\");\n            return _entities_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createMany(res.data);\n        } catch (e) {\n            console.log(e);\n        }\n    }\n    static async getById(id) {\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/usuarios/\".concat(id));\n            return _entities_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createFormObject(res.data);\n        } catch (e) {\n            console.log(e);\n        }\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TZXJ2aWNlcy9Vc2VyU2VydmljZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDZTtBQUNMO0FBR3JCLE1BQU1HO0lBQ2xCLGFBQWFDLFNBQVNDLElBQVMsRUFBRTtRQUM5QixJQUFJO1lBQ0QsTUFBTUMsTUFBTSxNQUFNTixrREFBVSxDQUFDLGlCQUFpQks7WUFDOUMsTUFBTSxFQUFFRyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSjtZQUM1QixJQUFJQyxJQUFJSSxNQUFNLEtBQUssS0FBSztnQkFDckJULHVEQUFNQSxDQUFDLGVBQWU7b0JBQ25CTztvQkFDQUM7b0JBQ0FFLGFBQWE7b0JBQ2JDLFVBQVU7Z0JBQ2I7WUFDSDtRQUNILEVBQUUsT0FBT0MsR0FBRztZQUNUQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Y7SUFDSDtJQUNBLGFBQWFHLFNBQVM7UUFDbkIsSUFBSTtZQUNELE1BQU1WLE1BQU0sTUFBTU4saURBQVMsQ0FBQztZQUM1QixPQUFPRSxpRUFBZSxDQUFDSSxJQUFJYSxJQUFJO1FBQ2xDLEVBQUUsT0FBT04sR0FBRztZQUNUQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Y7SUFDSDtJQUNBLGFBQWFPLFFBQVFDLEVBQU8sRUFBRTtRQUMzQixJQUFJO1lBQ0QsTUFBTWYsTUFBTSxNQUFNTixpREFBUyxDQUFDLGlCQUFvQixPQUFIcUI7WUFDN0MsT0FBT25CLHVFQUFxQixDQUFDSSxJQUFJYSxJQUFJO1FBQ3hDLEVBQUUsT0FBT04sR0FBRztZQUNUQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Y7SUFDSDtBQUNIO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU2VydmljZXMvVXNlclNlcnZpY2VzLnRzPzQ4MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi9lbnRpdGllcy9Vc2VyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyU2VydmljZXMge1xuICAgc3RhdGljIGFzeW5jIHJlZ2lzdGVyKGZvcm06IGFueSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcmVnaXN0ZXInLCBmb3JtKTtcbiAgICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBmb3JtO1xuICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgc2lnbkluKCdjcmVkZW50aWFscycsIHtcbiAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICBjYWxsYmFja1VybDogJy91c3VhcmlvcycsXG4gICAgICAgICAgICAgICByZWRpcmVjdDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgIH1cbiAgIHN0YXRpYyBhc3luYyBnZXRBbGwoKSB7XG4gICAgICB0cnkge1xuICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzdWFyaW9zJyk7XG4gICAgICAgICByZXR1cm4gVXNlci5jcmVhdGVNYW55KHJlcy5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgfVxuICAgc3RhdGljIGFzeW5jIGdldEJ5SWQoaWQ6IGFueSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS91c3Vhcmlvcy8ke2lkfWApO1xuICAgICAgICAgcmV0dXJuIFVzZXIuY3JlYXRlRm9ybU9iamVjdChyZXMuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInNpZ25JbiIsIlVzZXIiLCJVc2VyU2VydmljZXMiLCJyZWdpc3RlciIsImZvcm0iLCJyZXMiLCJwb3N0IiwiZW1haWwiLCJwYXNzd29yZCIsInN0YXR1cyIsImNhbGxiYWNrVXJsIiwicmVkaXJlY3QiLCJlIiwiY29uc29sZSIsImxvZyIsImdldEFsbCIsImdldCIsImNyZWF0ZU1hbnkiLCJkYXRhIiwiZ2V0QnlJZCIsImlkIiwiY3JlYXRlRm9ybU9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Services/UserServices.ts\n"));

/***/ })

});