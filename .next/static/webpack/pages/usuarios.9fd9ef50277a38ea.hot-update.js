"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/usuarios",{

/***/ "./services/UserServices.ts":
/*!**********************************!*\
  !*** ./services/UserServices.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserServices; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/User */ \"./entities/User.ts\");\n\n\n\nclass UserServices {\n    static async register(form) {\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/register\", form);\n            const { email, password } = form;\n            if (res.status === 200) {\n                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.signIn)(\"credentials\", {\n                    email,\n                    password,\n                    callbackUrl: \"/usuarios\",\n                    redirect: true\n                });\n            }\n        } catch (e) {\n            console.log(e);\n        }\n    }\n    static async getAll() {\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/usuarios\");\n            return _entities_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createMany(res.data);\n        } catch (e) {\n            console.log(e);\n        }\n    }\n    static async getById(id) {\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/usuarios/\".concat(id));\n            return res.data;\n        } catch (e) {\n            console.log(e);\n        }\n    }\n    static async updateById(formData) {\n        try {\n            console.log(\"Executei update\");\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].patch(\"/api/usuarios/\".concat(formData.id), formData);\n            return res.data;\n        } catch (e) {\n            console.log(e);\n        }\n    }\n    static async delete(id) {\n        try {\n            console.log(\"Executei delete\");\n            if (id) {\n                const rest = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"/api/usuarios/\".concat(id));\n                return rest.data;\n            }\n        } catch (e) {\n            console.log(e);\n        }\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9Vc2VyU2VydmljZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDZTtBQUNMO0FBR3JCLE1BQU1HO0lBQ2xCLGFBQWFDLFNBQVNDLElBQVMsRUFBRTtRQUM5QixJQUFJO1lBQ0QsTUFBTUMsTUFBTSxNQUFNTixrREFBVSxDQUFDLGlCQUFpQks7WUFDOUMsTUFBTSxFQUFFRyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSjtZQUM1QixJQUFJQyxJQUFJSSxNQUFNLEtBQUssS0FBSztnQkFDckJULHVEQUFNQSxDQUFDLGVBQWU7b0JBQ25CTztvQkFDQUM7b0JBQ0FFLGFBQWE7b0JBQ2JDLFVBQVU7Z0JBQ2I7WUFDSDtRQUNILEVBQUUsT0FBT0MsR0FBRztZQUNUQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Y7SUFDSDtJQUNBLGFBQWFHLFNBQVM7UUFDbkIsSUFBSTtZQUNELE1BQU1WLE1BQU0sTUFBTU4saURBQVMsQ0FBQztZQUM1QixPQUFPRSxpRUFBZSxDQUFDSSxJQUFJYSxJQUFJO1FBQ2xDLEVBQUUsT0FBT04sR0FBRztZQUNUQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Y7SUFDSDtJQUNBLGFBQWFPLFFBQVFDLEVBQU8sRUFBRTtRQUMzQixJQUFJO1lBQ0QsTUFBTWYsTUFBTSxNQUFNTixpREFBUyxDQUFDLGlCQUFvQixPQUFIcUI7WUFDN0MsT0FBT2YsSUFBSWEsSUFBSTtRQUNsQixFQUFFLE9BQU9OLEdBQUc7WUFDVEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNmO0lBQ0g7SUFDQSxhQUFhUyxXQUFXQyxRQUFzQixFQUFFO1FBQzdDLElBQUk7WUFDRFQsUUFBUUMsR0FBRyxDQUFDO1lBQ1osTUFBTVQsTUFBTSxNQUFNTixtREFBVyxDQUMxQixpQkFBNkIsT0FBWnVCLFNBQVNGLEVBQUUsR0FDNUJFO1lBRUgsT0FBT2pCLElBQUlhLElBQUk7UUFDbEIsRUFBRSxPQUFPTixHQUFHO1lBQ1RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZjtJQUNIO0lBQ0EsYUFBYVksT0FBT0osRUFBVyxFQUFFO1FBQzlCLElBQUk7WUFDRFAsUUFBUUMsR0FBRyxDQUFDO1lBQ1osSUFBSU0sSUFBSTtnQkFDTCxNQUFNSyxPQUFPLE1BQU0xQix1REFBWSxDQUFDLGlCQUFvQixPQUFIcUI7Z0JBQ2pELE9BQU9LLEtBQUtQLElBQUk7WUFDbkI7UUFDSCxFQUFFLE9BQU9OLEdBQUc7WUFDVEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNmO0lBQ0g7QUFDSDtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlcy50cz81NThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vZW50aXRpZXMvVXNlcic7XG5pbXBvcnQgeyBVc2VyRnJvbURhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL1VzZXJGb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclNlcnZpY2VzIHtcbiAgIHN0YXRpYyBhc3luYyByZWdpc3Rlcihmb3JtOiBhbnkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3JlZ2lzdGVyJywgZm9ybSk7XG4gICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gZm9ybTtcbiAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHNpZ25JbignY3JlZGVudGlhbHMnLCB7XG4gICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgY2FsbGJhY2tVcmw6ICcvdXN1YXJpb3MnLFxuICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICB9XG4gICBzdGF0aWMgYXN5bmMgZ2V0QWxsKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c3VhcmlvcycpO1xuICAgICAgICAgcmV0dXJuIFVzZXIuY3JlYXRlTWFueShyZXMuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgIH1cbiAgIHN0YXRpYyBhc3luYyBnZXRCeUlkKGlkOiBhbnkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvdXN1YXJpb3MvJHtpZH1gKTtcbiAgICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgfVxuICAgc3RhdGljIGFzeW5jIHVwZGF0ZUJ5SWQoZm9ybURhdGE6IFVzZXJGcm9tRGF0YSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgIGNvbnNvbGUubG9nKCdFeGVjdXRlaSB1cGRhdGUnKTtcbiAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBhdGNoKFxuICAgICAgICAgICAgYC9hcGkvdXN1YXJpb3MvJHtmb3JtRGF0YS5pZH1gLFxuICAgICAgICAgICAgZm9ybURhdGFcbiAgICAgICAgICk7XG4gICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgIH1cbiAgIHN0YXRpYyBhc3luYyBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgICBjb25zb2xlLmxvZygnRXhlY3V0ZWkgZGVsZXRlJyk7XG4gICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3QgPSBhd2FpdCBheGlvcy5kZWxldGUoYC9hcGkvdXN1YXJpb3MvJHtpZH1gKTtcbiAgICAgICAgICAgIHJldHVybiByZXN0LmRhdGE7XG4gICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInNpZ25JbiIsIlVzZXIiLCJVc2VyU2VydmljZXMiLCJyZWdpc3RlciIsImZvcm0iLCJyZXMiLCJwb3N0IiwiZW1haWwiLCJwYXNzd29yZCIsInN0YXR1cyIsImNhbGxiYWNrVXJsIiwicmVkaXJlY3QiLCJlIiwiY29uc29sZSIsImxvZyIsImdldEFsbCIsImdldCIsImNyZWF0ZU1hbnkiLCJkYXRhIiwiZ2V0QnlJZCIsImlkIiwidXBkYXRlQnlJZCIsImZvcm1EYXRhIiwicGF0Y2giLCJkZWxldGUiLCJyZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/UserServices.ts\n"));

/***/ })

});