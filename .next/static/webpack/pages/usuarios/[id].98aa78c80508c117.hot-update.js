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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ User; }\n/* harmony export */ });\nclass User {\n    static createMany(users) {\n        return users.map((user)=>{\n            const { id, name, email, phone, address, cpf, type, crp, instutition, period } = user;\n            return new User(name, email, phone, address, cpf, type, instutition, period, crp, id);\n        });\n    }\n    static createFormObject(user) {\n        if (user) {\n            const { id, name, email, phone, address, cpf, type, crp, instutition, period } = user;\n            return new User(name, email, phone, address, cpf, type, instutition, period, crp, id);\n        }\n    }\n    get userLink() {\n        return \"/usuarios/\".concat(this.id);\n    }\n    constructor(name, email, phone, address, cpf, type, institution, period, crp, id){\n        this.name = name;\n        this.email = email;\n        this.phone = phone;\n        this.address = address;\n        this.cpf = cpf;\n        this.type = type;\n        this.institution = institution;\n        this.period = period;\n        this.crp = crp;\n        this.id = id;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbnRpdGllcy9Vc2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFFZSxNQUFNQTtJQWFsQixPQUFPQyxXQUFXQyxLQUFjLEVBQVU7UUFDdkMsT0FBT0EsTUFBTUMsR0FBRyxDQUFDLENBQUNDO1lBQ2YsTUFBTSxFQUNIQyxFQUFFLEVBQ0ZDLElBQUksRUFDSkMsS0FBSyxFQUNMQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUEMsR0FBRyxFQUNIQyxJQUFJLEVBQ0pDLEdBQUcsRUFDSEMsV0FBVyxFQUNYQyxNQUFNLEVBQ1IsR0FBR1Y7WUFDSixPQUFPLElBQUlKLEtBQ1JNLE1BQ0FDLE9BQ0FDLE9BQ0FDLFNBQ0FDLEtBQ0FDLE1BQ0FFLGFBQ0FDLFFBQ0FGLEtBQ0FQO1FBRU47SUFDSDtJQUNBLE9BQU9VLGlCQUFpQlgsSUFBUyxFQUFFO1FBQ2hDLElBQUlBLE1BQU07WUFDUCxNQUFNLEVBQ0hDLEVBQUUsRUFDRkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsT0FBTyxFQUNQQyxHQUFHLEVBQ0hDLElBQUksRUFDSkMsR0FBRyxFQUNIQyxXQUFXLEVBQ1hDLE1BQU0sRUFDUixHQUFHVjtZQUNKLE9BQU8sSUFBSUosS0FDUk0sTUFDQUMsT0FDQUMsT0FDQUMsU0FDQUMsS0FDQUMsTUFDQUUsYUFDQUMsUUFDQUYsS0FDQVA7UUFFTjtJQUNIO0lBRUEsSUFBSVcsV0FBVztRQUNaLE9BQU8sYUFBcUIsT0FBUixJQUFJLENBQUNYLEVBQUU7SUFDOUI7SUF2RUFZLFlBQ1VYLE1BQ0FDLE9BQ0FDLE9BQ0FDLFNBQ0FDLEtBQ0FDLE1BQ0FPLGFBQ0FKLFFBQ0FGLEtBQ0FQLEdBQ1I7b0JBVlFDO3FCQUNBQztxQkFDQUM7dUJBQ0FDO21CQUNBQztvQkFDQUM7MkJBQ0FPO3NCQUNBSjttQkFDQUY7a0JBQ0FQO0lBQ1A7QUE2RE47QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9lbnRpdGllcy9Vc2VyLnRzPzhkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElVc2VyIGZyb20gJy4uL2ludGVyZmFjZXMvSVVzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGltcGxlbWVudHMgSVVzZXIge1xuICAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgcHVibGljIGVtYWlsOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgcGhvbmU6IHN0cmluZyxcbiAgICAgIHB1YmxpYyBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgY3BmOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgdHlwZTogJ1BzY2ljw7Nsb2dvJyB8ICdFc3RhZ2nDoXJpbycsXG4gICAgICBwdWJsaWMgaW5zdGl0dXRpb24/OiBzdHJpbmcsXG4gICAgICBwdWJsaWMgcGVyaW9kPzogbnVtYmVyLFxuICAgICAgcHVibGljIGNycD86IHN0cmluZyxcbiAgICAgIHB1YmxpYyBpZD86IHN0cmluZ1xuICAgKSB7fVxuICAgc3RhdGljIGNyZWF0ZU1hbnkodXNlcnM6IElVc2VyW10pOiBVc2VyW10ge1xuICAgICAgcmV0dXJuIHVzZXJzLm1hcCgodXNlcjogYW55KSA9PiB7XG4gICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBob25lLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGNwZixcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjcnAsXG4gICAgICAgICAgICBpbnN0dXRpdGlvbixcbiAgICAgICAgICAgIHBlcmlvZFxuICAgICAgICAgfSA9IHVzZXI7XG4gICAgICAgICByZXR1cm4gbmV3IFVzZXIoXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBjcGYsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgaW5zdHV0aXRpb24sXG4gICAgICAgICAgICBwZXJpb2QsXG4gICAgICAgICAgICBjcnAsXG4gICAgICAgICAgICBpZFxuICAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgfVxuICAgc3RhdGljIGNyZWF0ZUZvcm1PYmplY3QodXNlcjogYW55KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBjcGYsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgY3JwLFxuICAgICAgICAgICAgaW5zdHV0aXRpb24sXG4gICAgICAgICAgICBwZXJpb2RcbiAgICAgICAgIH0gPSB1c2VyO1xuICAgICAgICAgcmV0dXJuIG5ldyBVc2VyKFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgY3BmLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGluc3R1dGl0aW9uLFxuICAgICAgICAgICAgcGVyaW9kLFxuICAgICAgICAgICAgY3JwLFxuICAgICAgICAgICAgaWRcbiAgICAgICAgICk7XG4gICAgICB9XG4gICB9XG5cbiAgIGdldCB1c2VyTGluaygpIHtcbiAgICAgIHJldHVybiBgL3VzdWFyaW9zLyR7dGhpcy5pZH1gO1xuICAgfVxufVxuIl0sIm5hbWVzIjpbIlVzZXIiLCJjcmVhdGVNYW55IiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3MiLCJjcGYiLCJ0eXBlIiwiY3JwIiwiaW5zdHV0aXRpb24iLCJwZXJpb2QiLCJjcmVhdGVGb3JtT2JqZWN0IiwidXNlckxpbmsiLCJjb25zdHJ1Y3RvciIsImluc3RpdHV0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./entities/User.ts\n"));

/***/ })

});