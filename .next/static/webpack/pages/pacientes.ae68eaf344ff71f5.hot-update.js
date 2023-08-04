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

/***/ "./entities/Patient.ts":
/*!*****************************!*\
  !*** ./entities/Patient.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Patient; }\n/* harmony export */ });\nclass Patient {\n    get getLink() {\n        return \"/pacientes/\".concat(this.id);\n    }\n    static createFromObject(param) {\n        let { id, name, status, email, birthday, birthplace, education, school, scholarship, isMedicated, medication, interviewedBy, complaint, createdAt, updatedAt, cpf, address, phone, observation, underResponsibilityOf } = param;\n        return new Patient(id, name, status, email, birthday, birthplace, education, school, scholarship, isMedicated, medication, interviewedBy, complaint, createdAt, updatedAt, cpf, address, phone, observation, underResponsibilityOf);\n    }\n    static createMany(patients) {\n        return patients.map((patient)=>{\n            const { id, name, status, email, birthday, birthplace, education, school, scholarship, isMedicated, medication, interviewedBy, complaint, createdAt, updatedAt, cpf, address, phone, observation, underResponsibilityOf } = patient;\n            return new Patient(id, name, status, email, birthday, birthplace, education, school, scholarship, isMedicated, medication, interviewedBy, complaint, createdAt, updatedAt, cpf, address, phone, observation, underResponsibilityOf);\n        });\n    }\n    constructor(id, name, status, email, birthday, birthplace, education, school, scholarship, isMedicated, medication, interviewedBy, complaint, createdAt, updatedAt, cpf, address, phone, observation, underResponsibilityOf){\n        this.id = id;\n        this.name = name;\n        this.status = status;\n        this.email = email;\n        this.birthday = birthday;\n        this.birthplace = birthplace;\n        this.education = education;\n        this.school = school;\n        this.scholarship = scholarship;\n        this.isMedicated = isMedicated;\n        this.medication = medication;\n        this.interviewedBy = interviewedBy;\n        this.complaint = complaint;\n        this.createdAt = createdAt;\n        this.updatedAt = updatedAt;\n        this.cpf = cpf;\n        this.address = address;\n        this.phone = phone;\n        this.observation = observation;\n        this.underResponsibilityOf = underResponsibilityOf;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbnRpdGllcy9QYXRpZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFHZSxNQUFNQTtJQXdCbEIsSUFBSUMsVUFBVTtRQUNYLE9BQU8sY0FBc0IsT0FBUixJQUFJLENBQUNDLEVBQUU7SUFDL0I7SUFFQSxPQUFPQyxpQkFBaUIsS0FxQmIsRUFBWTtZQXJCQyxFQUNyQkQsRUFBRSxFQUNGRSxJQUFJLEVBQ0pDLE1BQU0sRUFDTkMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLFVBQVUsRUFDVkMsU0FBUyxFQUNUQyxNQUFNLEVBQ05DLFdBQVcsRUFDWEMsV0FBVyxFQUNYQyxVQUFVLEVBQ1ZDLGFBQWEsRUFDYkMsU0FBUyxFQUNUQyxTQUFTLEVBQ1RDLFNBQVMsRUFDVEMsR0FBRyxFQUNIQyxPQUFPLEVBQ1BDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxxQkFBcUIsRUFDYixHQXJCYTtRQXNCckIsT0FBTyxJQUFJdEIsUUFDUkUsSUFDQUUsTUFDQUMsUUFDQUMsT0FDQUMsVUFDQUMsWUFDQUMsV0FDQUMsUUFDQUMsYUFDQUMsYUFDQUMsWUFDQUMsZUFDQUMsV0FDQUMsV0FDQUMsV0FDQUMsS0FDQUMsU0FDQUMsT0FDQUMsYUFDQUM7SUFFTjtJQUNBLE9BQU9DLFdBQVdDLFFBQW9CLEVBQWE7UUFDaEQsT0FBT0EsU0FBU0MsR0FBRyxDQUFDLENBQUNDO1lBQ2xCLE1BQU0sRUFDSHhCLEVBQUUsRUFDRkUsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxVQUFVLEVBQ1ZDLFNBQVMsRUFDVEMsTUFBTSxFQUNOQyxXQUFXLEVBQ1hDLFdBQVcsRUFDWEMsVUFBVSxFQUNWQyxhQUFhLEVBQ2JDLFNBQVMsRUFDVEMsU0FBUyxFQUNUQyxTQUFTLEVBQ1RDLEdBQUcsRUFDSEMsT0FBTyxFQUNQQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMscUJBQXFCLEVBQ3ZCLEdBQUdJO1lBQ0osT0FBTyxJQUFJMUIsUUFDUkUsSUFDQUUsTUFDQUMsUUFDQUMsT0FDQUMsVUFDQUMsWUFDQUMsV0FDQUMsUUFDQUMsYUFDQUMsYUFDQUMsWUFDQUMsZUFDQUMsV0FDQUMsV0FDQUMsV0FDQUMsS0FDQUMsU0FDQUMsT0FDQUMsYUFDQUM7UUFFTjtJQUNIO0lBdkhBSyxZQUNVekIsSUFDQUUsTUFDQUMsUUFDQUMsT0FDQUMsVUFDQUMsWUFDQUMsV0FDQUMsUUFDQUMsYUFDQUMsYUFDQUMsWUFDQUMsZUFDQUMsV0FDQUMsV0FDQUMsV0FDQUMsS0FDQUMsU0FDQUMsT0FDQUMsYUFDQUMsc0JBQ1I7a0JBcEJRcEI7b0JBQ0FFO3NCQUNBQztxQkFDQUM7d0JBQ0FDOzBCQUNBQzt5QkFDQUM7c0JBQ0FDOzJCQUNBQzsyQkFDQUM7MEJBQ0FDOzZCQUNBQzt5QkFDQUM7eUJBQ0FDO3lCQUNBQzttQkFDQUM7dUJBQ0FDO3FCQUNBQzsyQkFDQUM7cUNBQ0FDO0lBQ1A7QUFtR047QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9lbnRpdGllcy9QYXRpZW50LnRzPzk1OGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElVc2VyIGZyb20gJy4uL2ludGVyZmFjZXMvSVVzZXInO1xuaW1wb3J0IElQYXRpZW50IGZyb20gJy4uL2ludGVyZmFjZXMvSVBhdGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRpZW50IGltcGxlbWVudHMgSVBhdGllbnQge1xuICAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgc3RhdHVzOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgZW1haWw/OiBzdHJpbmcsXG4gICAgICBwdWJsaWMgYmlydGhkYXk/OiBEYXRlLFxuICAgICAgcHVibGljIGJpcnRocGxhY2U/OiBzdHJpbmcsXG4gICAgICBwdWJsaWMgZWR1Y2F0aW9uPzogc3RyaW5nLFxuICAgICAgcHVibGljIHNjaG9vbD86IHN0cmluZyxcbiAgICAgIHB1YmxpYyBzY2hvbGFyc2hpcD86IGJvb2xlYW4sXG4gICAgICBwdWJsaWMgaXNNZWRpY2F0ZWQ/OiBib29sZWFuLFxuICAgICAgcHVibGljIG1lZGljYXRpb24/OiBzdHJpbmcsXG4gICAgICBwdWJsaWMgaW50ZXJ2aWV3ZWRCeT86IElVc2VyLFxuICAgICAgcHVibGljIGNvbXBsYWludD86IHN0cmluZyxcbiAgICAgIHB1YmxpYyBjcmVhdGVkQXQ/OiBEYXRlLFxuICAgICAgcHVibGljIHVwZGF0ZWRBdD86IERhdGUsXG4gICAgICBwdWJsaWMgY3BmPzogc3RyaW5nLFxuICAgICAgcHVibGljIGFkZHJlc3M/OiBzdHJpbmcsXG4gICAgICBwdWJsaWMgcGhvbmU/OiBzdHJpbmcsXG4gICAgICBwdWJsaWMgb2JzZXJ2YXRpb24/OiBzdHJpbmcsXG4gICAgICBwdWJsaWMgdW5kZXJSZXNwb25zaWJpbGl0eU9mPzogSVVzZXJcbiAgICkge31cblxuICAgZ2V0IGdldExpbmsoKSB7XG4gICAgICByZXR1cm4gYC9wYWNpZW50ZXMvJHt0aGlzLmlkfWA7XG4gICB9XG5cbiAgIHN0YXRpYyBjcmVhdGVGcm9tT2JqZWN0KHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIGVtYWlsLFxuICAgICAgYmlydGhkYXksXG4gICAgICBiaXJ0aHBsYWNlLFxuICAgICAgZWR1Y2F0aW9uLFxuICAgICAgc2Nob29sLFxuICAgICAgc2Nob2xhcnNoaXAsXG4gICAgICBpc01lZGljYXRlZCxcbiAgICAgIG1lZGljYXRpb24sXG4gICAgICBpbnRlcnZpZXdlZEJ5LFxuICAgICAgY29tcGxhaW50LFxuICAgICAgY3JlYXRlZEF0LFxuICAgICAgdXBkYXRlZEF0LFxuICAgICAgY3BmLFxuICAgICAgYWRkcmVzcyxcbiAgICAgIHBob25lLFxuICAgICAgb2JzZXJ2YXRpb24sXG4gICAgICB1bmRlclJlc3BvbnNpYmlsaXR5T2ZcbiAgIH06IElQYXRpZW50KTogSVBhdGllbnQge1xuICAgICAgcmV0dXJuIG5ldyBQYXRpZW50KFxuICAgICAgICAgaWQsXG4gICAgICAgICBuYW1lLFxuICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgZW1haWwsXG4gICAgICAgICBiaXJ0aGRheSxcbiAgICAgICAgIGJpcnRocGxhY2UsXG4gICAgICAgICBlZHVjYXRpb24sXG4gICAgICAgICBzY2hvb2wsXG4gICAgICAgICBzY2hvbGFyc2hpcCxcbiAgICAgICAgIGlzTWVkaWNhdGVkLFxuICAgICAgICAgbWVkaWNhdGlvbixcbiAgICAgICAgIGludGVydmlld2VkQnksXG4gICAgICAgICBjb21wbGFpbnQsXG4gICAgICAgICBjcmVhdGVkQXQsXG4gICAgICAgICB1cGRhdGVkQXQsXG4gICAgICAgICBjcGYsXG4gICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgcGhvbmUsXG4gICAgICAgICBvYnNlcnZhdGlvbixcbiAgICAgICAgIHVuZGVyUmVzcG9uc2liaWxpdHlPZlxuICAgICAgKTtcbiAgIH1cbiAgIHN0YXRpYyBjcmVhdGVNYW55KHBhdGllbnRzOiBJUGF0aWVudFtdKTogUGF0aWVudFtdIHtcbiAgICAgIHJldHVybiBwYXRpZW50cy5tYXAoKHBhdGllbnQpID0+IHtcbiAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgYmlydGhkYXksXG4gICAgICAgICAgICBiaXJ0aHBsYWNlLFxuICAgICAgICAgICAgZWR1Y2F0aW9uLFxuICAgICAgICAgICAgc2Nob29sLFxuICAgICAgICAgICAgc2Nob2xhcnNoaXAsXG4gICAgICAgICAgICBpc01lZGljYXRlZCxcbiAgICAgICAgICAgIG1lZGljYXRpb24sXG4gICAgICAgICAgICBpbnRlcnZpZXdlZEJ5LFxuICAgICAgICAgICAgY29tcGxhaW50LFxuICAgICAgICAgICAgY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0LFxuICAgICAgICAgICAgY3BmLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIHBob25lLFxuICAgICAgICAgICAgb2JzZXJ2YXRpb24sXG4gICAgICAgICAgICB1bmRlclJlc3BvbnNpYmlsaXR5T2ZcbiAgICAgICAgIH0gPSBwYXRpZW50O1xuICAgICAgICAgcmV0dXJuIG5ldyBQYXRpZW50KFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBiaXJ0aGRheSxcbiAgICAgICAgICAgIGJpcnRocGxhY2UsXG4gICAgICAgICAgICBlZHVjYXRpb24sXG4gICAgICAgICAgICBzY2hvb2wsXG4gICAgICAgICAgICBzY2hvbGFyc2hpcCxcbiAgICAgICAgICAgIGlzTWVkaWNhdGVkLFxuICAgICAgICAgICAgbWVkaWNhdGlvbixcbiAgICAgICAgICAgIGludGVydmlld2VkQnksXG4gICAgICAgICAgICBjb21wbGFpbnQsXG4gICAgICAgICAgICBjcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQsXG4gICAgICAgICAgICBjcGYsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICBvYnNlcnZhdGlvbixcbiAgICAgICAgICAgIHVuZGVyUmVzcG9uc2liaWxpdHlPZlxuICAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgfVxufVxuIl0sIm5hbWVzIjpbIlBhdGllbnQiLCJnZXRMaW5rIiwiaWQiLCJjcmVhdGVGcm9tT2JqZWN0IiwibmFtZSIsInN0YXR1cyIsImVtYWlsIiwiYmlydGhkYXkiLCJiaXJ0aHBsYWNlIiwiZWR1Y2F0aW9uIiwic2Nob29sIiwic2Nob2xhcnNoaXAiLCJpc01lZGljYXRlZCIsIm1lZGljYXRpb24iLCJpbnRlcnZpZXdlZEJ5IiwiY29tcGxhaW50IiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiY3BmIiwiYWRkcmVzcyIsInBob25lIiwib2JzZXJ2YXRpb24iLCJ1bmRlclJlc3BvbnNpYmlsaXR5T2YiLCJjcmVhdGVNYW55IiwicGF0aWVudHMiLCJtYXAiLCJwYXRpZW50IiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./entities/Patient.ts\n"));

/***/ })

});