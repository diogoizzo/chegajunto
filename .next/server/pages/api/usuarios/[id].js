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
exports.id = "pages/api/usuarios/[id]";
exports.ids = ["pages/api/usuarios/[id]"];
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

/***/ "(api)/./pages/api/usuarios/[id].ts":
/*!************************************!*\
  !*** ./pages/api/usuarios/[id].ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n            req\n        });\n        const id = req.query.id;\n        console.log(JSON.stringify(req.query));\n        if (token) {\n            const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n                where: {\n                    id: String(id)\n                },\n                select: {\n                    name: true,\n                    email: true,\n                    phone: true,\n                    address: true,\n                    cpf: true,\n                    type: true,\n                    createdAt: false,\n                    updatedAt: false,\n                    institution: true,\n                    period: true,\n                    password: false,\n                    crp: true,\n                    id: true\n                }\n            });\n            if (user) {\n                res.status(200).json(user);\n            } else {\n                res.status(404).json({\n                    error: \"Usu\\xe1rio n\\xe3o encontrado\"\n                });\n            }\n        } else {\n            res.status(401).send({\n                message: \"Acesso negado\"\n            });\n        }\n    } else {\n        return res.status(405).json({\n            error: \"Esse tipo de requisi\\xe7\\xe3o n\\xe3o \\xe9 suportada nesta rota\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXN1YXJpb3MvW2lkXS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3lDO0FBQ0E7QUFFMUIsZUFBZUUsUUFDM0JDLEdBQW1CLEVBQ25CQyxHQUFvQjtJQUVwQixJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN2QixNQUFNQyxRQUFRLE1BQU1OLHVEQUFRQSxDQUFDO1lBQUVHO1FBQUk7UUFDbkMsTUFBTUksS0FBS0osSUFBSUssS0FBSyxDQUFDRCxFQUFFO1FBQ3ZCRSxRQUFRQyxHQUFHLENBQUNDLEtBQUtDLFNBQVMsQ0FBQ1QsSUFBSUssS0FBSztRQUNwQyxJQUFJRixPQUFPO1lBQ1IsTUFBTU8sT0FBTyxNQUFNWix3REFBVyxDQUFDYSxVQUFVLENBQUM7Z0JBQ3ZDQyxPQUFPO29CQUFFUixJQUFJUyxPQUFPVDtnQkFBSTtnQkFDeEJVLFFBQVE7b0JBQ0xDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLE9BQU87b0JBQ1BDLFNBQVM7b0JBQ1RDLEtBQUs7b0JBQ0xDLE1BQU07b0JBQ05DLFdBQVc7b0JBQ1hDLFdBQVc7b0JBQ1hDLGFBQWE7b0JBQ2JDLFFBQVE7b0JBQ1JDLFVBQVU7b0JBQ1ZDLEtBQUs7b0JBQ0x0QixJQUFJO2dCQUNQO1lBQ0g7WUFDQSxJQUFJTSxNQUFNO2dCQUNQVCxJQUFJMEIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ2xCO1lBQ3hCLE9BQU87Z0JBQ0pULElBQUkwQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUF5QjtZQUMxRDtRQUNILE9BQU87WUFDSjVCLElBQUkwQixNQUFNLENBQUMsS0FBS0csSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWdCO1FBQ25EO0lBQ0gsT0FBTztRQUNKLE9BQU85QixJQUNIMEIsTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFEO0lBQzFFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVnYWp1bnRvLy4vcGFnZXMvYXBpL3VzdWFyaW9zL1tpZF0udHM/NDI0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnbmV4dC1hdXRoL2p3dCc7XG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHJlcSB9KTtcbiAgICAgIGNvbnN0IGlkID0gcmVxLnF1ZXJ5LmlkO1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVxLnF1ZXJ5KSk7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBTdHJpbmcoaWQpIH0sXG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgIHBob25lOiB0cnVlLFxuICAgICAgICAgICAgICAgYWRkcmVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgIGNwZjogdHJ1ZSxcbiAgICAgICAgICAgICAgIHR5cGU6IHRydWUsXG4gICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBmYWxzZSxcbiAgICAgICAgICAgICAgIGluc3RpdHV0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgcGVyaW9kOiB0cnVlLFxuICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgY3JwOiB0cnVlLFxuICAgICAgICAgICAgICAgaWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdVc3XDoXJpbyBuw6NvIGVuY29udHJhZG8nIH0pO1xuICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ0FjZXNzbyBuZWdhZG8nIH0pO1xuICAgICAgfVxuICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgIC5zdGF0dXMoNDA1KVxuICAgICAgICAgLmpzb24oeyBlcnJvcjogJ0Vzc2UgdGlwbyBkZSByZXF1aXNpw6fDo28gbsOjbyDDqSBzdXBvcnRhZGEgbmVzdGEgcm90YScgfSk7XG4gICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0VG9rZW4iLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9rZW4iLCJpZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiU3RyaW5nIiwic2VsZWN0IiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwiY3BmIiwidHlwZSIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImluc3RpdHV0aW9uIiwicGVyaW9kIiwicGFzc3dvcmQiLCJjcnAiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJzZW5kIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/usuarios/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/usuarios/[id].ts"));
module.exports = __webpack_exports__;

})();