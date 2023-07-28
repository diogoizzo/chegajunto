"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/pacientes";
exports.ids = ["pages/api/pacientes"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/jwt":
/*!********************************!*\
  !*** external "next-auth/jwt" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQU1KLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNKLElBQUksQ0FBQ0MsT0FBT0YsTUFBTSxFQUFFO1FBQ2pCRSxPQUFPRixNQUFNLEdBQUcsSUFBSUQsd0RBQVlBO0lBQ25DO0lBQ0FDLFNBQVNFLE9BQU9GLE1BQU07QUFDekI7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZWdhanVudG8vLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICB9XG4gICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/pacientes/index.ts":
/*!**************************************!*\
  !*** ./pages/api/pacientes/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n            req\n        });\n        if (token) {\n            const patients = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].patient.findMany();\n            console.log(patients);\n            if (patients) {\n                res.status(200).json(patients);\n            } else {\n                res.status(404).json({\n                    error: \"Pacientes n\\xe3o encontrados\"\n                });\n            }\n        } else {\n            res.status(401).send({\n                message: \"Acesso negado\"\n            });\n        }\n    } else {\n        return res.status(405).json({\n            error: \"Esse tipo de requisi\\xe7\\xe3o n\\xe3o \\xe9 suportada nesta rota\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGFjaWVudGVzL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDeUM7QUFDQTtBQUUxQixlQUFlRSxRQUMzQkMsR0FBbUIsRUFDbkJDLEdBQW9CO0lBRXBCLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3ZCLE1BQU1DLFFBQVEsTUFBTU4sdURBQVFBLENBQUM7WUFBRUc7UUFBSTtRQUNuQyxJQUFJRyxPQUFPO1lBQ1IsTUFBTUMsV0FBVyxNQUFNTiwyREFBYyxDQUFDUSxRQUFRO1lBQzlDQyxRQUFRQyxHQUFHLENBQUNKO1lBQ1osSUFBSUEsVUFBVTtnQkFDWEgsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ047WUFDeEIsT0FBTztnQkFDSkgsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsT0FBTztnQkFBNEI7WUFDN0Q7UUFDSCxPQUFPO1lBQ0pWLElBQUlRLE1BQU0sQ0FBQyxLQUFLRyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBZ0I7UUFDbkQ7SUFDSCxPQUFPO1FBQ0osT0FBT1osSUFDSFEsTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFEO0lBQzFFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVnYWp1bnRvLy4vcGFnZXMvYXBpL3BhY2llbnRlcy9pbmRleC50cz80ZDI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICduZXh0LWF1dGgvand0JztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgcmVxIH0pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICBjb25zdCBwYXRpZW50cyA9IGF3YWl0IHByaXNtYS5wYXRpZW50LmZpbmRNYW55KCk7XG4gICAgICAgICBjb25zb2xlLmxvZyhwYXRpZW50cyk7XG4gICAgICAgICBpZiAocGF0aWVudHMpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBhdGllbnRzKTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnUGFjaWVudGVzIG7Do28gZW5jb250cmFkb3MnIH0pO1xuICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ0FjZXNzbyBuZWdhZG8nIH0pO1xuICAgICAgfVxuICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgIC5zdGF0dXMoNDA1KVxuICAgICAgICAgLmpzb24oeyBlcnJvcjogJ0Vzc2UgdGlwbyBkZSByZXF1aXNpw6fDo28gbsOjbyDDqSBzdXBvcnRhZGEgbmVzdGEgcm90YScgfSk7XG4gICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0VG9rZW4iLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9rZW4iLCJwYXRpZW50cyIsInBhdGllbnQiLCJmaW5kTWFueSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJzZW5kIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/pacientes/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pacientes/index.ts"));
module.exports = __webpack_exports__;

})();