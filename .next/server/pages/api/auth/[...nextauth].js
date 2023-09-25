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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            id: \"credentials\",\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"john@example.com\"\n                },\n                password: {\n                    lable: \"Senha\",\n                    type: \"password\"\n                }\n            },\n            authorize: async (credentials)=>{\n                //função que verifica a existencia do usuário informado nas credenciais, se encontado, compara a senha passada em credencias com a senha do bd, atraves do bcrypt. Tal função deve retnorar o usuário, caso a senha esteja correta, ou null caso incorreta ou o usuário não encontrado.\n                try {\n                    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findFirst({\n                        where: {\n                            email: credentials?.email\n                        }\n                    });\n                    if (user !== null) {\n                        if (await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compare(credentials.password, user.password)) {\n                            return user;\n                        } else {\n                            console.log(\"Hash not matched logging in\");\n                            return null;\n                        }\n                    } else {\n                        return null;\n                    }\n                } catch (err) {\n                    console.log(\"Authorize error:\", err);\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        jwt: async ({ token, user })=>{\n            //esse Callback server para incluir o id do usuario no jwt, posso usar para incluir as informaçoes que eu desejar\n            if (user) {\n                token.id = user.id;\n                // @ts-ignore\n                token.type = user.type;\n            }\n            return token;\n        },\n        session: ({ session, token })=>{\n            //essa callback inclui a informação desejada na seção do usuário e fica acessível pela useSession()\n            if (token) {\n                // @ts-ignore\n                session.id = token.id;\n                // @ts-ignore\n                session.type = token.type;\n            // eslint-disable-line\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\",\n        signOut: \"/auth/signout\"\n    },\n    secret: process.env.SECRET,\n    session: {\n        strategy: \"jwt\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDeUI7QUFDakI7QUFDeUI7QUFDdEM7QUFFNUIsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3JCSyxTQUFTSix3RUFBYUEsQ0FBQ0MsbURBQU1BO0lBQzdCSSxXQUFXO1FBQ1JILHNFQUFtQkEsQ0FBQztZQUNqQkksSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1ZDLE9BQU87b0JBQ0pDLE9BQU87b0JBQ1BDLE1BQU07b0JBQ05DLGFBQWE7Z0JBQ2hCO2dCQUNBQyxVQUFVO29CQUFFQyxPQUFPO29CQUFTSCxNQUFNO2dCQUFXO1lBQ2hEO1lBQ0FJLFdBQVcsT0FBT1A7Z0JBQ2YsdVJBQXVSO2dCQUN2UixJQUFJO29CQUNELE1BQU1RLE9BQU8sTUFBTWYsd0RBQVcsQ0FBQ2dCLFNBQVMsQ0FBQzt3QkFDdENDLE9BQU87NEJBQ0pULE9BQU9ELGFBQWFDO3dCQUN2QjtvQkFDSDtvQkFDQSxJQUFJTyxTQUFTLE1BQU07d0JBQ2hCLElBQ0csTUFBTWIscURBQWMsQ0FBQ0ssWUFBWUssUUFBUSxFQUFFRyxLQUFLSCxRQUFRLEdBQ3pEOzRCQUNDLE9BQU9HO3dCQUNWLE9BQU87NEJBQ0pJLFFBQVFDLEdBQUcsQ0FBQzs0QkFDWixPQUFPO3dCQUNWO29CQUNILE9BQU87d0JBQ0osT0FBTztvQkFDVjtnQkFDSCxFQUFFLE9BQU9DLEtBQUs7b0JBQ1hGLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JDO29CQUNoQyxPQUFPO2dCQUNWO1lBQ0g7UUFDSDtLQUNGO0lBQ0RDLFdBQVc7UUFDUkMsS0FBSyxPQUFPLEVBQUVDLEtBQUssRUFBRVQsSUFBSSxFQUFFO1lBQ3hCLGlIQUFpSDtZQUNqSCxJQUFJQSxNQUFNO2dCQUNQUyxNQUFNbkIsRUFBRSxHQUFHVSxLQUFLVixFQUFFO2dCQUNsQixhQUFhO2dCQUNibUIsTUFBTWQsSUFBSSxHQUFHSyxLQUFLTCxJQUFJO1lBQ3pCO1lBRUEsT0FBT2M7UUFDVjtRQUNBQyxTQUFTLENBQUMsRUFBRUEsT0FBTyxFQUFFRCxLQUFLLEVBQUU7WUFDekIsbUdBQW1HO1lBQ25HLElBQUlBLE9BQU87Z0JBQ1IsYUFBYTtnQkFDYkMsUUFBUXBCLEVBQUUsR0FBR21CLE1BQU1uQixFQUFFO2dCQUNyQixhQUFhO2dCQUNib0IsUUFBUWYsSUFBSSxHQUFHYyxNQUFNZCxJQUFJO1lBQ3pCLHNCQUFzQjtZQUN6QjtZQUNBLE9BQU9lO1FBQ1Y7SUFDSDtJQUNBQyxPQUFPO1FBQ0pDLFFBQVE7UUFDUkMsU0FBUztJQUNaO0lBQ0FDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTTtJQUMxQlAsU0FBUztRQUFFUSxVQUFVO0lBQU07QUFDOUIsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlZ2FqdW50by8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tICdAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyJztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSc7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICAgcHJvdmlkZXJzOiBbXG4gICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgICAgIGlkOiAnY3JlZGVudGlhbHMnLFxuICAgICAgICAgbmFtZTogJ2NyZWRlbnRpYWxzJyxcbiAgICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdqb2huQGV4YW1wbGUuY29tJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7IGxhYmxlOiAnU2VuaGEnLCB0eXBlOiAncGFzc3dvcmQnIH1cbiAgICAgICAgIH0sXG4gICAgICAgICBhdXRob3JpemU6IGFzeW5jIChjcmVkZW50aWFsczogYW55KSA9PiB7XG4gICAgICAgICAgICAvL2Z1bsOnw6NvIHF1ZSB2ZXJpZmljYSBhIGV4aXN0ZW5jaWEgZG8gdXN1w6FyaW8gaW5mb3JtYWRvIG5hcyBjcmVkZW5jaWFpcywgc2UgZW5jb250YWRvLCBjb21wYXJhIGEgc2VuaGEgcGFzc2FkYSBlbSBjcmVkZW5jaWFzIGNvbSBhIHNlbmhhIGRvIGJkLCBhdHJhdmVzIGRvIGJjcnlwdC4gVGFsIGZ1bsOnw6NvIGRldmUgcmV0bm9yYXIgbyB1c3XDoXJpbywgY2FzbyBhIHNlbmhhIGVzdGVqYSBjb3JyZXRhLCBvdSBudWxsIGNhc28gaW5jb3JyZXRhIG91IG8gdXN1w6FyaW8gbsOjbyBlbmNvbnRyYWRvLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscz8uZW1haWxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgaWYgKHVzZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSGFzaCBub3QgbWF0Y2hlZCBsb2dnaW5nIGluJyk7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhvcml6ZSBlcnJvcjonLCBlcnIpO1xuICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9KVxuICAgXSxcbiAgIGNhbGxiYWNrczoge1xuICAgICAgand0OiBhc3luYyAoeyB0b2tlbiwgdXNlciB9KSA9PiB7XG4gICAgICAgICAvL2Vzc2UgQ2FsbGJhY2sgc2VydmVyIHBhcmEgaW5jbHVpciBvIGlkIGRvIHVzdWFyaW8gbm8gand0LCBwb3NzbyB1c2FyIHBhcmEgaW5jbHVpciBhcyBpbmZvcm1hw6dvZXMgcXVlIGV1IGRlc2VqYXJcbiAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0b2tlbi50eXBlID0gdXNlci50eXBlO1xuICAgICAgICAgfVxuXG4gICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9LFxuICAgICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiwgdG9rZW4gfSkgPT4ge1xuICAgICAgICAgLy9lc3NhIGNhbGxiYWNrIGluY2x1aSBhIGluZm9ybWHDp8OjbyBkZXNlamFkYSBuYSBzZcOnw6NvIGRvIHVzdcOhcmlvIGUgZmljYSBhY2Vzc8OtdmVsIHBlbGEgdXNlU2Vzc2lvbigpXG4gICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHNlc3Npb24uaWQgPSB0b2tlbi5pZDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHNlc3Npb24udHlwZSA9IHRva2VuLnR5cGU7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgIH1cbiAgIH0sXG4gICBwYWdlczoge1xuICAgICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJyxcbiAgICAgIHNpZ25PdXQ6ICcvYXV0aC9zaWdub3V0J1xuICAgfSxcbiAgIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxuICAgc2Vzc2lvbjogeyBzdHJhdGVneTogJ2p3dCcgfVxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJQcmlzbWFBZGFwdGVyIiwicHJpc21hIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImxhYmxlIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRGaXJzdCIsIndoZXJlIiwiY29tcGFyZSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJwYWdlcyIsInNpZ25JbiIsInNpZ25PdXQiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUIiwic3RyYXRlZ3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

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