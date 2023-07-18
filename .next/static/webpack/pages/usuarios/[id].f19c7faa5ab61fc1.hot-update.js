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

/***/ "./entities/User.ts":
/*!**************************!*\
  !*** ./entities/User.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ User; }\n/* harmony export */ });\nclass User {\n    static createMany(users) {\n        return users.map((user)=>{\n            const { id, name, email, phone, address, cpf, type, crp, institution, period } = user;\n            return new User(name, email, phone, address, cpf, type, institution, period, crp, id);\n        });\n    }\n    static createFormObject(user) {\n        if (user) {\n            const { id, name, email, phone, address, cpf, type, crp, institution, period } = user;\n            return new User(name, email, phone, address, cpf, type, institution, period, crp, id);\n        }\n    }\n    get userLink() {\n        return \"/usuarios/\".concat(this.id);\n    }\n    get userEditLink() {\n        return \"/usuarios/editar/\".concat(this.id);\n    }\n    constructor(name, email, phone, address, cpf, type, institution, period, crp, id){\n        this.name = name;\n        this.email = email;\n        this.phone = phone;\n        this.address = address;\n        this.cpf = cpf;\n        this.type = type;\n        this.institution = institution;\n        this.period = period;\n        this.crp = crp;\n        this.id = id;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbnRpdGllcy9Vc2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFFZSxNQUFNQTtJQWFsQixPQUFPQyxXQUFXQyxLQUFjLEVBQVU7UUFDdkMsT0FBT0EsTUFBTUMsR0FBRyxDQUFDLENBQUNDO1lBQ2YsTUFBTSxFQUNIQyxFQUFFLEVBQ0ZDLElBQUksRUFDSkMsS0FBSyxFQUNMQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUEMsR0FBRyxFQUNIQyxJQUFJLEVBQ0pDLEdBQUcsRUFDSEMsV0FBVyxFQUNYQyxNQUFNLEVBQ1IsR0FBR1Y7WUFDSixPQUFPLElBQUlKLEtBQ1JNLE1BQ0FDLE9BQ0FDLE9BQ0FDLFNBQ0FDLEtBQ0FDLE1BQ0FFLGFBQ0FDLFFBQ0FGLEtBQ0FQO1FBRU47SUFDSDtJQUNBLE9BQU9VLGlCQUFpQlgsSUFBUyxFQUFFO1FBQ2hDLElBQUlBLE1BQU07WUFDUCxNQUFNLEVBQ0hDLEVBQUUsRUFDRkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsT0FBTyxFQUNQQyxHQUFHLEVBQ0hDLElBQUksRUFDSkMsR0FBRyxFQUNIQyxXQUFXLEVBQ1hDLE1BQU0sRUFDUixHQUFHVjtZQUNKLE9BQU8sSUFBSUosS0FDUk0sTUFDQUMsT0FDQUMsT0FDQUMsU0FDQUMsS0FDQUMsTUFDQUUsYUFDQUMsUUFDQUYsS0FDQVA7UUFFTjtJQUNIO0lBRUEsSUFBSVcsV0FBVztRQUNaLE9BQU8sYUFBcUIsT0FBUixJQUFJLENBQUNYLEVBQUU7SUFDOUI7SUFDQSxJQUFJWSxlQUFlO1FBQ2hCLE9BQU8sb0JBQTRCLE9BQVIsSUFBSSxDQUFDWixFQUFFO0lBQ3JDO0lBMUVBYSxZQUNVWixNQUNBQyxPQUNBQyxPQUNBQyxTQUNBQyxLQUNBQyxNQUNBRSxhQUNBQyxRQUNBRixLQUNBUCxHQUNSO29CQVZRQztxQkFDQUM7cUJBQ0FDO3VCQUNBQzttQkFDQUM7b0JBQ0FDOzJCQUNBRTtzQkFDQUM7bUJBQ0FGO2tCQUNBUDtJQUNQO0FBZ0VOO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZW50aXRpZXMvVXNlci50cz84ZDQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJVXNlciBmcm9tICcuLi9pbnRlcmZhY2VzL0lVc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciBpbXBsZW1lbnRzIElVc2VyIHtcbiAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nLFxuICAgICAgcHVibGljIHBob25lOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgYWRkcmVzczogc3RyaW5nLFxuICAgICAgcHVibGljIGNwZjogc3RyaW5nLFxuICAgICAgcHVibGljIHR5cGU6ICdQc2NpY8OzbG9nbycgfCAnRXN0YWdpw6FyaW8nLFxuICAgICAgcHVibGljIGluc3RpdHV0aW9uPzogc3RyaW5nLFxuICAgICAgcHVibGljIHBlcmlvZD86IG51bWJlcixcbiAgICAgIHB1YmxpYyBjcnA/OiBzdHJpbmcsXG4gICAgICBwdWJsaWMgaWQ/OiBzdHJpbmdcbiAgICkge31cbiAgIHN0YXRpYyBjcmVhdGVNYW55KHVzZXJzOiBJVXNlcltdKTogVXNlcltdIHtcbiAgICAgIHJldHVybiB1c2Vycy5tYXAoKHVzZXI6IGFueSkgPT4ge1xuICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBjcGYsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgY3JwLFxuICAgICAgICAgICAgaW5zdGl0dXRpb24sXG4gICAgICAgICAgICBwZXJpb2RcbiAgICAgICAgIH0gPSB1c2VyO1xuICAgICAgICAgcmV0dXJuIG5ldyBVc2VyKFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgY3BmLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGluc3RpdHV0aW9uLFxuICAgICAgICAgICAgcGVyaW9kLFxuICAgICAgICAgICAgY3JwLFxuICAgICAgICAgICAgaWRcbiAgICAgICAgICk7XG4gICAgICB9KTtcbiAgIH1cbiAgIHN0YXRpYyBjcmVhdGVGb3JtT2JqZWN0KHVzZXI6IGFueSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgY3BmLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGNycCxcbiAgICAgICAgICAgIGluc3RpdHV0aW9uLFxuICAgICAgICAgICAgcGVyaW9kXG4gICAgICAgICB9ID0gdXNlcjtcbiAgICAgICAgIHJldHVybiBuZXcgVXNlcihcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBob25lLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGNwZixcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBpbnN0aXR1dGlvbixcbiAgICAgICAgICAgIHBlcmlvZCxcbiAgICAgICAgICAgIGNycCxcbiAgICAgICAgICAgIGlkXG4gICAgICAgICApO1xuICAgICAgfVxuICAgfVxuXG4gICBnZXQgdXNlckxpbmsoKSB7XG4gICAgICByZXR1cm4gYC91c3Vhcmlvcy8ke3RoaXMuaWR9YDtcbiAgIH1cbiAgIGdldCB1c2VyRWRpdExpbmsoKSB7XG4gICAgICByZXR1cm4gYC91c3Vhcmlvcy9lZGl0YXIvJHt0aGlzLmlkfWA7XG4gICB9XG59XG4iXSwibmFtZXMiOlsiVXNlciIsImNyZWF0ZU1hbnkiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwiYWRkcmVzcyIsImNwZiIsInR5cGUiLCJjcnAiLCJpbnN0aXR1dGlvbiIsInBlcmlvZCIsImNyZWF0ZUZvcm1PYmplY3QiLCJ1c2VyTGluayIsInVzZXJFZGl0TGluayIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./entities/User.ts\n"));

/***/ })

});