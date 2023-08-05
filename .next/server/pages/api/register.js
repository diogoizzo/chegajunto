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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQU1KLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNKLElBQUksQ0FBQ0MsT0FBT0YsTUFBTSxFQUFFO1FBQ2pCRSxPQUFPRixNQUFNLEdBQUcsSUFBSUQsd0RBQVlBO0lBQ25DO0lBQ0FDLFNBQVNFLE9BQU9GLE1BQU07QUFDekI7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZWdhanVudG8vLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICB9XG4gICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/register.ts":
/*!*******************************!*\
  !*** ./pages/api/register.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name, email, password, type, cpf, phone, crp, institution, period, address } = req.body;\n        try {\n            const hash = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 0);\n            try {\n                const createdUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.create({\n                    data: {\n                        name: name,\n                        email: email,\n                        password: hash,\n                        type: type,\n                        cpf: cpf,\n                        phone: phone,\n                        crp: crp,\n                        institution: institution,\n                        period: Number(period),\n                        address: address\n                    }\n                });\n            } catch (e) {\n                console.log(e);\n            }\n            res.status(200).end();\n        } catch (err) {\n            res.status(503).json({\n                err: err.toString()\n            });\n        }\n    } else {\n        return res.status(405).json({\n            error: \"This request only supports POST requests\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QjtBQUVVO0FBRXZCLGVBQWVFLFFBQzNCQyxHQUFtQixFQUNuQkMsR0FBb0I7SUFFcEIsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDeEIsTUFBTSxFQUNIQyxJQUFJLEVBQ0pDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxJQUFJLEVBQ0pDLEdBQUcsRUFDSEMsS0FBSyxFQUNMQyxHQUFHLEVBQ0hDLFdBQVcsRUFDWEMsTUFBTSxFQUNOQyxPQUFPLEVBQ1QsR0FBR1osSUFBSWEsSUFBSTtRQUVaLElBQUk7WUFDRCxNQUFNQyxPQUFPLE1BQU1qQixrREFBVyxDQUFDUSxVQUFVO1lBQ3pDLElBQUk7Z0JBQ0QsTUFBTVUsY0FBYyxNQUFNakIsd0RBQVcsQ0FBQ21CLE1BQU0sQ0FBQztvQkFDMUNDLE1BQU07d0JBQ0hmLE1BQU1BO3dCQUNOQyxPQUFPQTt3QkFDUEMsVUFBVVM7d0JBQ1ZSLE1BQU1BO3dCQUNOQyxLQUFLQTt3QkFDTEMsT0FBT0E7d0JBQ1BDLEtBQUtBO3dCQUNMQyxhQUFhQTt3QkFDYkMsUUFBUVEsT0FBT1I7d0JBQ2ZDLFNBQVNBO29CQUNaO2dCQUNIO1lBQ0gsRUFBRSxPQUFPUSxHQUFHO2dCQUNUQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2Y7WUFFQW5CLElBQUlzQixNQUFNLENBQUMsS0FBS0MsR0FBRztRQUN0QixFQUFFLE9BQU9DLEtBQVU7WUFDaEJ4QixJQUFJc0IsTUFBTSxDQUFDLEtBQUtHLElBQUksQ0FBQztnQkFBRUQsS0FBS0EsSUFBSUUsUUFBUTtZQUFHO1FBQzlDO0lBQ0gsT0FBTztRQUNKLE9BQU8xQixJQUNIc0IsTUFBTSxDQUFDLEtBQ1BHLElBQUksQ0FBQztZQUFFRSxPQUFPO1FBQTJDO0lBQ2hFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVnYWp1bnRvLy4vcGFnZXMvYXBpL3JlZ2lzdGVyLnRzPzdkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9wcmlzbWEnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgIG5hbWUsXG4gICAgICAgICBlbWFpbCxcbiAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgdHlwZSxcbiAgICAgICAgIGNwZixcbiAgICAgICAgIHBob25lLFxuICAgICAgICAgY3JwLFxuICAgICAgICAgaW5zdGl0dXRpb24sXG4gICAgICAgICBwZXJpb2QsXG4gICAgICAgICBhZGRyZXNzXG4gICAgICB9ID0gcmVxLmJvZHk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDApO1xuICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZDogaGFzaCxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICBjcGY6IGNwZixcbiAgICAgICAgICAgICAgICAgIHBob25lOiBwaG9uZSxcbiAgICAgICAgICAgICAgICAgIGNycDogY3JwLFxuICAgICAgICAgICAgICAgICAgaW5zdGl0dXRpb246IGluc3RpdHV0aW9uLFxuICAgICAgICAgICAgICAgICAgcGVyaW9kOiBOdW1iZXIocGVyaW9kKSxcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICB9XG5cbiAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgICByZXMuc3RhdHVzKDUwMykuanNvbih7IGVycjogZXJyLnRvU3RyaW5nKCkgfSk7XG4gICAgICB9XG4gICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgLnN0YXR1cyg0MDUpXG4gICAgICAgICAuanNvbih7IGVycm9yOiAnVGhpcyByZXF1ZXN0IG9ubHkgc3VwcG9ydHMgUE9TVCByZXF1ZXN0cycgfSk7XG4gICB9XG59XG4iXSwibmFtZXMiOlsiYmNyeXB0IiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidHlwZSIsImNwZiIsInBob25lIiwiY3JwIiwiaW5zdGl0dXRpb24iLCJwZXJpb2QiLCJhZGRyZXNzIiwiYm9keSIsImhhc2giLCJjcmVhdGVkVXNlciIsInVzZXIiLCJjcmVhdGUiLCJkYXRhIiwiTnVtYmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJlbmQiLCJlcnIiLCJqc29uIiwidG9TdHJpbmciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.ts"));
module.exports = __webpack_exports__;

})();