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
exports.id = "pages/api/usuarios/[userId]";
exports.ids = ["pages/api/usuarios/[userId]"];
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

/***/ "(api)/./pages/api/usuarios/[userId].ts":
/*!****************************************!*\
  !*** ./pages/api/usuarios/[userId].ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n            req\n        });\n        const id = req.query.id;\n        console.log(JSON.stringify(req.query));\n        if (token) {\n            const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n                where: {\n                    id: String(id)\n                },\n                select: {\n                    name: true,\n                    email: true,\n                    phone: true,\n                    address: true,\n                    cpf: true,\n                    type: true,\n                    createdAt: false,\n                    updatedAt: false,\n                    institution: true,\n                    period: true,\n                    password: false,\n                    crp: true,\n                    id: true\n                }\n            });\n            if (user) {\n                res.status(200).json(user);\n            } else {\n                res.status(404).json({\n                    error: \"Usu\\xe1rio n\\xe3o encontrado\"\n                });\n            }\n        } else {\n            res.status(401).send({\n                message: \"Acesso negado\"\n            });\n        }\n    } else {\n        return res.status(405).json({\n            error: \"Esse tipo de requisi\\xe7\\xe3o n\\xe3o \\xe9 suportada nesta rota\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXN1YXJpb3MvW3VzZXJJZF0udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN5QztBQUNBO0FBRTFCLGVBQWVFLFFBQzNCQyxHQUFtQixFQUNuQkMsR0FBb0I7SUFFcEIsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDdkIsTUFBTUMsUUFBUSxNQUFNTix1REFBUUEsQ0FBQztZQUFFRztRQUFJO1FBQ25DLE1BQU1JLEtBQUtKLElBQUlLLEtBQUssQ0FBQ0QsRUFBRTtRQUN2QkUsUUFBUUMsR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUNULElBQUlLLEtBQUs7UUFDcEMsSUFBSUYsT0FBTztZQUNSLE1BQU1PLE9BQU8sTUFBTVosd0RBQVcsQ0FBQ2EsVUFBVSxDQUFDO2dCQUN2Q0MsT0FBTztvQkFBRVIsSUFBSVMsT0FBT1Q7Z0JBQUk7Z0JBQ3hCVSxRQUFRO29CQUNMQyxNQUFNO29CQUNOQyxPQUFPO29CQUNQQyxPQUFPO29CQUNQQyxTQUFTO29CQUNUQyxLQUFLO29CQUNMQyxNQUFNO29CQUNOQyxXQUFXO29CQUNYQyxXQUFXO29CQUNYQyxhQUFhO29CQUNiQyxRQUFRO29CQUNSQyxVQUFVO29CQUNWQyxLQUFLO29CQUNMdEIsSUFBSTtnQkFDUDtZQUNIO1lBQ0EsSUFBSU0sTUFBTTtnQkFDUFQsSUFBSTBCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNsQjtZQUN4QixPQUFPO2dCQUNKVCxJQUFJMEIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsT0FBTztnQkFBeUI7WUFDMUQ7UUFDSCxPQUFPO1lBQ0o1QixJQUFJMEIsTUFBTSxDQUFDLEtBQUtHLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFnQjtRQUNuRDtJQUNILE9BQU87UUFDSixPQUFPOUIsSUFDSDBCLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxRDtJQUMxRTtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlZ2FqdW50by8uL3BhZ2VzL2FwaS91c3Vhcmlvcy9bdXNlcklkXS50cz9mOGQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICduZXh0LWF1dGgvand0JztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgcmVxIH0pO1xuICAgICAgY29uc3QgaWQgPSByZXEucXVlcnkuaWQ7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXEucXVlcnkpKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IFN0cmluZyhpZCkgfSxcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgcGhvbmU6IHRydWUsXG4gICAgICAgICAgICAgICBhZGRyZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgY3BmOiB0cnVlLFxuICAgICAgICAgICAgICAgdHlwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogZmFsc2UsXG4gICAgICAgICAgICAgICB1cGRhdGVkQXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgaW5zdGl0dXRpb246IHRydWUsXG4gICAgICAgICAgICAgICBwZXJpb2Q6IHRydWUsXG4gICAgICAgICAgICAgICBwYXNzd29yZDogZmFsc2UsXG4gICAgICAgICAgICAgICBjcnA6IHRydWUsXG4gICAgICAgICAgICAgICBpZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ1VzdcOhcmlvIG7Do28gZW5jb250cmFkbycgfSk7XG4gICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnQWNlc3NvIG5lZ2FkbycgfSk7XG4gICAgICB9XG4gICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgLnN0YXR1cyg0MDUpXG4gICAgICAgICAuanNvbih7IGVycm9yOiAnRXNzZSB0aXBvIGRlIHJlcXVpc2nDp8OjbyBuw6NvIMOpIHN1cG9ydGFkYSBuZXN0YSByb3RhJyB9KTtcbiAgIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRUb2tlbiIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2tlbiIsImlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJTdHJpbmciLCJzZWxlY3QiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3MiLCJjcGYiLCJ0eXBlIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiaW5zdGl0dXRpb24iLCJwZXJpb2QiLCJwYXNzd29yZCIsImNycCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInNlbmQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/usuarios/[userId].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/usuarios/[userId].ts"));
module.exports = __webpack_exports__;

})();