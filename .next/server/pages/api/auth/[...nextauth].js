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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

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

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQU1KLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNKLElBQUksQ0FBQ0MsT0FBT0YsTUFBTSxFQUFFO1FBQ2pCRSxPQUFPRixNQUFNLEdBQUcsSUFBSUQsd0RBQVlBO0lBQ25DO0lBQ0FDLFNBQVNFLE9BQU9GLE1BQU07QUFDekI7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZWdhanVudG8vLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICB9XG4gICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            id: \"credentials\",\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"john@example.com\"\n                },\n                password: {\n                    lable: \"Senha\",\n                    type: \"password\"\n                }\n            },\n            authorize: async (credentials)=>{\n                //função que verifica a existencia do usuário informado nas credenciais, se encontado, compara a senha passada em credencias com a senha do bd, atraves do bcrypt. Tal função deve retnorar o usuário, caso a senha esteja correta, ou null caso incorreta ou o usuário não encontrado.\n                try {\n                    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findFirst({\n                        where: {\n                            email: credentials?.email\n                        }\n                    });\n                    if (user !== null) {\n                        if (await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compare(credentials.password, user.password)) {\n                            return user;\n                        } else {\n                            console.log(\"Hash not matched logging in\");\n                            return null;\n                        }\n                    } else {\n                        return null;\n                    }\n                } catch (err) {\n                    console.log(\"Authorize error:\", err);\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        jwt: async ({ token, user })=>{\n            //esse Callback server para incluir o id do usuario no jwt, posso usar para incluir as informaçoes que eu desejar\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        session: ({ session, token })=>{\n            //essa callback inclui a informação desejada na seção do usuário e fica acessível pela useSession()\n            if (token) {\n                session.id = token.id; // eslint-disable-line\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\",\n        signOut: \"/auth/signout\"\n    },\n    secret: process.env.SECRET,\n    session: {\n        strategy: \"jwt\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDeUI7QUFDakI7QUFDeUI7QUFDdEM7QUFFNUIsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3JCSyxTQUFTSix3RUFBYUEsQ0FBQ0MsbURBQU1BO0lBQzdCSSxXQUFXO1FBQ1JILHNFQUFtQkEsQ0FBQztZQUNqQkksSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1ZDLE9BQU87b0JBQ0pDLE9BQU87b0JBQ1BDLE1BQU07b0JBQ05DLGFBQWE7Z0JBQ2hCO2dCQUNBQyxVQUFVO29CQUFFQyxPQUFPO29CQUFTSCxNQUFNO2dCQUFXO1lBQ2hEO1lBQ0FJLFdBQVcsT0FBT1A7Z0JBQ2YsdVJBQXVSO2dCQUN2UixJQUFJO29CQUNELE1BQU1RLE9BQU8sTUFBTWYsd0RBQVcsQ0FBQ2dCLFNBQVMsQ0FBQzt3QkFDdENDLE9BQU87NEJBQ0pULE9BQU9ELGFBQWFDO3dCQUN2QjtvQkFDSDtvQkFDQSxJQUFJTyxTQUFTLE1BQU07d0JBQ2hCLElBQ0csTUFBTWIscURBQWMsQ0FBQ0ssWUFBWUssUUFBUSxFQUFFRyxLQUFLSCxRQUFRLEdBQ3pEOzRCQUNDLE9BQU9HO3dCQUNWLE9BQU87NEJBQ0pJLFFBQVFDLEdBQUcsQ0FBQzs0QkFDWixPQUFPO3dCQUNWO29CQUNILE9BQU87d0JBQ0osT0FBTztvQkFDVjtnQkFDSCxFQUFFLE9BQU9DLEtBQUs7b0JBQ1hGLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JDO29CQUNoQyxPQUFPO2dCQUNWO1lBQ0g7UUFDSDtLQUNGO0lBQ0RDLFdBQVc7UUFDUkMsS0FBSyxPQUFPLEVBQUVDLEtBQUssRUFBRVQsSUFBSSxFQUFFO1lBQ3hCLGlIQUFpSDtZQUNqSCxJQUFJQSxNQUFNO2dCQUNQUyxNQUFNbkIsRUFBRSxHQUFHVSxLQUFLVixFQUFFO1lBQ3JCO1lBRUEsT0FBT21CO1FBQ1Y7UUFDQUMsU0FBUyxDQUFDLEVBQUVBLE9BQU8sRUFBRUQsS0FBSyxFQUFFO1lBQ3pCLG1HQUFtRztZQUNuRyxJQUFJQSxPQUFPO2dCQUNSQyxRQUFRcEIsRUFBRSxHQUFHbUIsTUFBTW5CLEVBQUUsRUFBRSxzQkFBc0I7WUFDaEQ7WUFDQSxPQUFPb0I7UUFDVjtJQUNIO0lBQ0FDLE9BQU87UUFDSkMsUUFBUTtRQUNSQyxTQUFTO0lBQ1o7SUFDQUMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0lBQzFCUCxTQUFTO1FBQUVRLFVBQVU7SUFBTTtBQUM5QixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVnYWp1bnRvLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gJ0BuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXInO1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gICBwcm92aWRlcnM6IFtcbiAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICAgaWQ6ICdjcmVkZW50aWFscycsXG4gICAgICAgICBuYW1lOiAnY3JlZGVudGlhbHMnLFxuICAgICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICBsYWJlbDogJ0VtYWlsJyxcbiAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2pvaG5AZXhhbXBsZS5jb20nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHsgbGFibGU6ICdTZW5oYScsIHR5cGU6ICdwYXNzd29yZCcgfVxuICAgICAgICAgfSxcbiAgICAgICAgIGF1dGhvcml6ZTogYXN5bmMgKGNyZWRlbnRpYWxzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIC8vZnVuw6fDo28gcXVlIHZlcmlmaWNhIGEgZXhpc3RlbmNpYSBkbyB1c3XDoXJpbyBpbmZvcm1hZG8gbmFzIGNyZWRlbmNpYWlzLCBzZSBlbmNvbnRhZG8sIGNvbXBhcmEgYSBzZW5oYSBwYXNzYWRhIGVtIGNyZWRlbmNpYXMgY29tIGEgc2VuaGEgZG8gYmQsIGF0cmF2ZXMgZG8gYmNyeXB0LiBUYWwgZnVuw6fDo28gZGV2ZSByZXRub3JhciBvIHVzdcOhcmlvLCBjYXNvIGEgc2VuaGEgZXN0ZWphIGNvcnJldGEsIG91IG51bGwgY2FzbyBpbmNvcnJldGEgb3UgbyB1c3XDoXJpbyBuw6NvIGVuY29udHJhZG8uXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzPy5lbWFpbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICBpZiAodXNlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIYXNoIG5vdCBtYXRjaGVkIGxvZ2dpbmcgaW4nKTtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aG9yaXplIGVycm9yOicsIGVycik7XG4gICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0pXG4gICBdLFxuICAgY2FsbGJhY2tzOiB7XG4gICAgICBqd3Q6IGFzeW5jICh7IHRva2VuLCB1c2VyIH0pID0+IHtcbiAgICAgICAgIC8vZXNzZSBDYWxsYmFjayBzZXJ2ZXIgcGFyYSBpbmNsdWlyIG8gaWQgZG8gdXN1YXJpbyBubyBqd3QsIHBvc3NvIHVzYXIgcGFyYSBpbmNsdWlyIGFzIGluZm9ybWHDp29lcyBxdWUgZXUgZGVzZWphclxuICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgICAgIH1cblxuICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfSxcbiAgICAgIHNlc3Npb246ICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcbiAgICAgICAgIC8vZXNzYSBjYWxsYmFjayBpbmNsdWkgYSBpbmZvcm1hw6fDo28gZGVzZWphZGEgbmEgc2XDp8OjbyBkbyB1c3XDoXJpbyBlIGZpY2EgYWNlc3PDrXZlbCBwZWxhIHVzZVNlc3Npb24oKVxuICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBzZXNzaW9uLmlkID0gdG9rZW4uaWQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgfVxuICAgfSxcbiAgIHBhZ2VzOiB7XG4gICAgICBzaWduSW46ICcvYXV0aC9zaWduaW4nLFxuICAgICAgc2lnbk91dDogJy9hdXRoL3NpZ25vdXQnXG4gICB9LFxuICAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG4gICBzZXNzaW9uOiB7IHN0cmF0ZWd5OiAnand0JyB9XG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiYWRhcHRlciIsInByb3ZpZGVycyIsImlkIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwibGFibGUiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJjb21wYXJlIiwiY29uc29sZSIsImxvZyIsImVyciIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiIsInBhZ2VzIiwic2lnbkluIiwic2lnbk91dCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJzdHJhdGVneSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();