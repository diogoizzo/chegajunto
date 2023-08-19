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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            id: \"credentials\",\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"john@example.com\"\n                },\n                password: {\n                    lable: \"Senha\",\n                    type: \"password\"\n                }\n            },\n            authorize: async (credentials)=>{\n                //função que verifica a existencia do usuário informado nas credenciais, se encontado, compara a senha passada em credencias com a senha do bd, atraves do bcrypt. Tal função deve retnorar o usuário, caso a senha esteja correta, ou null caso incorreta ou o usuário não encontrado.\n                try {\n                    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findFirst({\n                        where: {\n                            email: credentials?.email\n                        }\n                    });\n                    if (user !== null) {\n                        if (await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compare(credentials.password, user.password)) {\n                            return user;\n                        } else {\n                            console.log(\"Hash not matched logging in\");\n                            return null;\n                        }\n                    } else {\n                        return null;\n                    }\n                } catch (err) {\n                    console.log(\"Authorize error:\", err);\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        jwt: async ({ token, user })=>{\n            //esse Callback server para incluir o id do usuario no jwt, posso usar para incluir as informaçoes que eu desejar\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        session: ({ session, token })=>{\n            //essa callback inclui a informação desejada na seção do usuário e fica acessível pela useSession()\n            if (token) {\n                // @ts-ignore\n                session.id = token.id; // eslint-disable-line\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\",\n        signOut: \"/auth/signout\"\n    },\n    secret: process.env.SECRET,\n    session: {\n        strategy: \"jwt\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDeUI7QUFDakI7QUFDeUI7QUFDdEM7QUFFNUIsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3JCSyxTQUFTSix3RUFBYUEsQ0FBQ0MsbURBQU1BO0lBQzdCSSxXQUFXO1FBQ1JILHNFQUFtQkEsQ0FBQztZQUNqQkksSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1ZDLE9BQU87b0JBQ0pDLE9BQU87b0JBQ1BDLE1BQU07b0JBQ05DLGFBQWE7Z0JBQ2hCO2dCQUNBQyxVQUFVO29CQUFFQyxPQUFPO29CQUFTSCxNQUFNO2dCQUFXO1lBQ2hEO1lBQ0FJLFdBQVcsT0FBT1A7Z0JBQ2YsdVJBQXVSO2dCQUN2UixJQUFJO29CQUNELE1BQU1RLE9BQU8sTUFBTWYsd0RBQVcsQ0FBQ2dCLFNBQVMsQ0FBQzt3QkFDdENDLE9BQU87NEJBQ0pULE9BQU9ELGFBQWFDO3dCQUN2QjtvQkFDSDtvQkFDQSxJQUFJTyxTQUFTLE1BQU07d0JBQ2hCLElBQ0csTUFBTWIscURBQWMsQ0FBQ0ssWUFBWUssUUFBUSxFQUFFRyxLQUFLSCxRQUFRLEdBQ3pEOzRCQUNDLE9BQU9HO3dCQUNWLE9BQU87NEJBQ0pJLFFBQVFDLEdBQUcsQ0FBQzs0QkFDWixPQUFPO3dCQUNWO29CQUNILE9BQU87d0JBQ0osT0FBTztvQkFDVjtnQkFDSCxFQUFFLE9BQU9DLEtBQUs7b0JBQ1hGLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JDO29CQUNoQyxPQUFPO2dCQUNWO1lBQ0g7UUFDSDtLQUNGO0lBQ0RDLFdBQVc7UUFDUkMsS0FBSyxPQUFPLEVBQUVDLEtBQUssRUFBRVQsSUFBSSxFQUFFO1lBQ3hCLGlIQUFpSDtZQUNqSCxJQUFJQSxNQUFNO2dCQUNQUyxNQUFNbkIsRUFBRSxHQUFHVSxLQUFLVixFQUFFO1lBQ3JCO1lBRUEsT0FBT21CO1FBQ1Y7UUFDQUMsU0FBUyxDQUFDLEVBQUVBLE9BQU8sRUFBRUQsS0FBSyxFQUFFO1lBQ3pCLG1HQUFtRztZQUNuRyxJQUFJQSxPQUFPO2dCQUNSLGFBQWE7Z0JBQ2JDLFFBQVFwQixFQUFFLEdBQUdtQixNQUFNbkIsRUFBRSxFQUFFLHNCQUFzQjtZQUNoRDtZQUNBLE9BQU9vQjtRQUNWO0lBQ0g7SUFDQUMsT0FBTztRQUNKQyxRQUFRO1FBQ1JDLFNBQVM7SUFDWjtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLE1BQU07SUFDMUJQLFNBQVM7UUFBRVEsVUFBVTtJQUFNO0FBQzlCLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZWdhanVudG8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlcic7XG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgIHByb3ZpZGVyczogW1xuICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgICBpZDogJ2NyZWRlbnRpYWxzJyxcbiAgICAgICAgIG5hbWU6ICdjcmVkZW50aWFscycsXG4gICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgICAgIGxhYmVsOiAnRW1haWwnLFxuICAgICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnam9obkBleGFtcGxlLmNvbSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXNzd29yZDogeyBsYWJsZTogJ1NlbmhhJywgdHlwZTogJ3Bhc3N3b3JkJyB9XG4gICAgICAgICB9LFxuICAgICAgICAgYXV0aG9yaXplOiBhc3luYyAoY3JlZGVudGlhbHM6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy9mdW7Dp8OjbyBxdWUgdmVyaWZpY2EgYSBleGlzdGVuY2lhIGRvIHVzdcOhcmlvIGluZm9ybWFkbyBuYXMgY3JlZGVuY2lhaXMsIHNlIGVuY29udGFkbywgY29tcGFyYSBhIHNlbmhhIHBhc3NhZGEgZW0gY3JlZGVuY2lhcyBjb20gYSBzZW5oYSBkbyBiZCwgYXRyYXZlcyBkbyBiY3J5cHQuIFRhbCBmdW7Dp8OjbyBkZXZlIHJldG5vcmFyIG8gdXN1w6FyaW8sIGNhc28gYSBzZW5oYSBlc3RlamEgY29ycmV0YSwgb3UgbnVsbCBjYXNvIGluY29ycmV0YSBvdSBvIHVzdcOhcmlvIG7Do28gZW5jb250cmFkby5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHM/LmVtYWlsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIGlmICh1c2VyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICBhd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hhc2ggbm90IG1hdGNoZWQgbG9nZ2luZyBpbicpO1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRob3JpemUgZXJyb3I6JywgZXJyKTtcbiAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSlcbiAgIF0sXG4gICBjYWxsYmFja3M6IHtcbiAgICAgIGp3dDogYXN5bmMgKHsgdG9rZW4sIHVzZXIgfSkgPT4ge1xuICAgICAgICAgLy9lc3NlIENhbGxiYWNrIHNlcnZlciBwYXJhIGluY2x1aXIgbyBpZCBkbyB1c3VhcmlvIG5vIGp3dCwgcG9zc28gdXNhciBwYXJhIGluY2x1aXIgYXMgaW5mb3JtYcOnb2VzIHF1ZSBldSBkZXNlamFyXG4gICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICAgfVxuXG4gICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9LFxuICAgICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiwgdG9rZW4gfSkgPT4ge1xuICAgICAgICAgLy9lc3NhIGNhbGxiYWNrIGluY2x1aSBhIGluZm9ybWHDp8OjbyBkZXNlamFkYSBuYSBzZcOnw6NvIGRvIHVzdcOhcmlvIGUgZmljYSBhY2Vzc8OtdmVsIHBlbGEgdXNlU2Vzc2lvbigpXG4gICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHNlc3Npb24uaWQgPSB0b2tlbi5pZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgfVxuICAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICB9XG4gICB9LFxuICAgcGFnZXM6IHtcbiAgICAgIHNpZ25JbjogJy9hdXRoL3NpZ25pbicsXG4gICAgICBzaWduT3V0OiAnL2F1dGgvc2lnbm91dCdcbiAgIH0sXG4gICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcbiAgIHNlc3Npb246IHsgc3RyYXRlZ3k6ICdqd3QnIH1cbn0pO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiUHJpc21hQWRhcHRlciIsInByaXNtYSIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiaWQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJsYWJsZSIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImNvbXBhcmUiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIiwicGFnZXMiLCJzaWduSW4iLCJzaWduT3V0Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVCIsInN0cmF0ZWd5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

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