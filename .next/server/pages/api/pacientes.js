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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n            req\n        });\n        if (token) {\n            const patients = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].patient.findMany({\n                include: {\n                    documents: true\n                }\n            });\n            if (patients) {\n                res.status(200).json(patients);\n            } else {\n                res.status(404).json({\n                    error: \"Pacientes n\\xe3o encontrados\"\n                });\n            }\n        } else {\n            res.status(401).send({\n                message: \"Acesso negado\"\n            });\n        }\n    } else if (req.method === \"POST\") {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n            req\n        });\n        const birth = req.body.birthday ? new Date(req.body.birthday) : null;\n        delete req.body.getLink;\n        delete req.body.id;\n        delete req.body.patientEditLink;\n        delete req.body.status;\n        if (token) {\n            const patient = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].patient.create({\n                data: {\n                    ...req.body,\n                    birthday: birth,\n                    email: req.body.email || null\n                }\n            });\n            res.status(200).json(patient);\n        } else {\n            res.status(401).send({\n                message: \"Acesso negado\"\n            });\n        }\n    } else {\n        return res.status(405).json({\n            error: \"Esse tipo de requisi\\xe7\\xe3o n\\xe3o \\xe9 suportada nesta rota\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGFjaWVudGVzL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDeUM7QUFDQTtBQUUxQixlQUFlRSxRQUMzQkMsR0FBbUIsRUFDbkJDLEdBQW9CO0lBRXBCLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3ZCLE1BQU1DLFFBQVEsTUFBTU4sdURBQVFBLENBQUM7WUFBRUc7UUFBSTtRQUNuQyxJQUFJRyxPQUFPO1lBQ1IsTUFBTUMsV0FBVyxNQUFNTiwyREFBYyxDQUFDUSxRQUFRLENBQUM7Z0JBQzVDQyxTQUFTO29CQUNOQyxXQUFXO2dCQUNkO1lBQ0g7WUFDQSxJQUFJSixVQUFVO2dCQUNYSCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTjtZQUN4QixPQUFPO2dCQUNKSCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUE0QjtZQUM3RDtRQUNILE9BQU87WUFDSlYsSUFBSVEsTUFBTSxDQUFDLEtBQUtHLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFnQjtRQUNuRDtJQUNILE9BQU8sSUFBSWIsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDL0IsTUFBTUMsUUFBUSxNQUFNTix1REFBUUEsQ0FBQztZQUFFRztRQUFJO1FBQ25DLE1BQU1jLFFBQVFkLElBQUllLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUlDLEtBQUtqQixJQUFJZSxJQUFJLENBQUNDLFFBQVEsSUFBSTtRQUNoRSxPQUFPaEIsSUFBSWUsSUFBSSxDQUFDRyxPQUFPO1FBQ3ZCLE9BQU9sQixJQUFJZSxJQUFJLENBQUNJLEVBQUU7UUFDbEIsT0FBT25CLElBQUllLElBQUksQ0FBQ0ssZUFBZTtRQUMvQixPQUFPcEIsSUFBSWUsSUFBSSxDQUFDTixNQUFNO1FBQ3RCLElBQUlOLE9BQU87WUFDUixNQUFNRSxVQUFVLE1BQU1QLDJEQUFjLENBQUN1QixNQUFNLENBQUM7Z0JBQ3pDQyxNQUFNO29CQUNILEdBQUd0QixJQUFJZSxJQUFJO29CQUNYQyxVQUFVRjtvQkFDVlMsT0FBT3ZCLElBQUllLElBQUksQ0FBQ1EsS0FBSyxJQUFJO2dCQUM1QjtZQUNIO1lBQ0F0QixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTDtRQUN4QixPQUFPO1lBQ0pKLElBQUlRLE1BQU0sQ0FBQyxLQUFLRyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBZ0I7UUFDbkQ7SUFDSCxPQUFPO1FBQ0osT0FBT1osSUFDSFEsTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFEO0lBQzFFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVnYWp1bnRvLy4vcGFnZXMvYXBpL3BhY2llbnRlcy9pbmRleC50cz80ZDI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICduZXh0LWF1dGgvand0JztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgcmVxIH0pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICBjb25zdCBwYXRpZW50cyA9IGF3YWl0IHByaXNtYS5wYXRpZW50LmZpbmRNYW55KHtcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgIGRvY3VtZW50czogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICAgICBpZiAocGF0aWVudHMpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBhdGllbnRzKTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnUGFjaWVudGVzIG7Do28gZW5jb250cmFkb3MnIH0pO1xuICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ0FjZXNzbyBuZWdhZG8nIH0pO1xuICAgICAgfVxuICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyByZXEgfSk7XG4gICAgICBjb25zdCBiaXJ0aCA9IHJlcS5ib2R5LmJpcnRoZGF5ID8gbmV3IERhdGUocmVxLmJvZHkuYmlydGhkYXkpIDogbnVsbDtcbiAgICAgIGRlbGV0ZSByZXEuYm9keS5nZXRMaW5rO1xuICAgICAgZGVsZXRlIHJlcS5ib2R5LmlkO1xuICAgICAgZGVsZXRlIHJlcS5ib2R5LnBhdGllbnRFZGl0TGluaztcbiAgICAgIGRlbGV0ZSByZXEuYm9keS5zdGF0dXM7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgIGNvbnN0IHBhdGllbnQgPSBhd2FpdCBwcmlzbWEucGF0aWVudC5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgLi4ucmVxLmJvZHksXG4gICAgICAgICAgICAgICBiaXJ0aGRheTogYmlydGgsXG4gICAgICAgICAgICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwgfHwgbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwYXRpZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdBY2Vzc28gbmVnYWRvJyB9KTtcbiAgICAgIH1cbiAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgICAuc3RhdHVzKDQwNSlcbiAgICAgICAgIC5qc29uKHsgZXJyb3I6ICdFc3NlIHRpcG8gZGUgcmVxdWlzacOnw6NvIG7Do28gw6kgc3Vwb3J0YWRhIG5lc3RhIHJvdGEnIH0pO1xuICAgfVxufVxuIl0sIm5hbWVzIjpbImdldFRva2VuIiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRva2VuIiwicGF0aWVudHMiLCJwYXRpZW50IiwiZmluZE1hbnkiLCJpbmNsdWRlIiwiZG9jdW1lbnRzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwic2VuZCIsIm1lc3NhZ2UiLCJiaXJ0aCIsImJvZHkiLCJiaXJ0aGRheSIsIkRhdGUiLCJnZXRMaW5rIiwiaWQiLCJwYXRpZW50RWRpdExpbmsiLCJjcmVhdGUiLCJkYXRhIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/pacientes/index.ts\n");

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