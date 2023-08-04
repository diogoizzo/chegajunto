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
exports.id = "pages/api/pacientes/[id]";
exports.ids = ["pages/api/pacientes/[id]"];
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

/***/ "(api)/./pages/api/pacientes/[id].ts":
/*!*************************************!*\
  !*** ./pages/api/pacientes/[id].ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n            req\n        });\n        const id = req.query.id;\n        if (token) {\n            const patient = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].patient.findUnique({\n                where: {\n                    id: String(id)\n                }\n            });\n            if (patient) {\n                res.status(200).json(patient);\n            } else {\n                res.status(404).json({\n                    error: \"Usu\\xe1rio n\\xe3o encontrado\"\n                });\n            }\n        } else {\n            res.status(401).send({\n                message: \"Acesso negado\"\n            });\n        }\n    } else if (req.method === \"PATCH\") {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n            req\n        });\n        const id = req.query.id;\n        if (token) {\n            const patient = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].patient.update({\n                where: {\n                    id: String(req.query.id)\n                },\n                data: {\n                    ...req.body\n                }\n            });\n            if (patient) {\n                res.status(200).json(patient);\n            } else {\n                res.status(404).json({\n                    error: \"Usu\\xe1rio n\\xe3o encontrado\"\n                });\n            }\n        } else {\n            res.status(404).json({\n                message: \"Acesso Negado\"\n            });\n        }\n    } else if (req.method === \"DELETE\") {\n        //todo aqui eu preciso alterar para não apagar, e sim alterar o status para arquivado\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n            req\n        });\n        const id = req.query.id;\n        if (token) {\n            const deletedUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].patient.delete({\n                where: {\n                    id: String(id)\n                }\n            });\n            if (deletedUser) {\n                res.status(200).json(deletedUser);\n            } else {\n                res.status(404).json({\n                    error: \"Paciente n\\xe3o encontrado\"\n                });\n            }\n        } else {\n            res.status(401).send({\n                message: \"Acesso Negado\"\n            });\n        }\n    } else {\n        return res.status(405).json({\n            error: \"Esse tipo de requisi\\xe7\\xe3o n\\xe3o \\xe9 suportada nesta rota\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGFjaWVudGVzL1tpZF0udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN5QztBQUNBO0FBRTFCLGVBQWVFLFFBQzNCQyxHQUFtQixFQUNuQkMsR0FBb0I7SUFFcEIsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDdkIsTUFBTUMsUUFBUSxNQUFNTix1REFBUUEsQ0FBQztZQUFFRztRQUFJO1FBQ25DLE1BQU1JLEtBQUtKLElBQUlLLEtBQUssQ0FBQ0QsRUFBRTtRQUN2QixJQUFJRCxPQUFPO1lBQ1IsTUFBTUcsVUFBVSxNQUFNUiwyREFBYyxDQUFDUyxVQUFVLENBQUM7Z0JBQzdDQyxPQUFPO29CQUFFSixJQUFJSyxPQUFPTDtnQkFBSTtZQUMzQjtZQUNBLElBQUlFLFNBQVM7Z0JBQ1ZMLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNMO1lBQ3hCLE9BQU87Z0JBQ0pMLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQXlCO1lBQzFEO1FBQ0gsT0FBTztZQUNKWCxJQUFJUyxNQUFNLENBQUMsS0FBS0csSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWdCO1FBQ25EO0lBQ0gsT0FBTyxJQUFJZCxJQUFJRSxNQUFNLEtBQUssU0FBUztRQUNoQyxNQUFNQyxRQUFRLE1BQU1OLHVEQUFRQSxDQUFDO1lBQUVHO1FBQUk7UUFDbkMsTUFBTUksS0FBS0osSUFBSUssS0FBSyxDQUFDRCxFQUFFO1FBQ3ZCLElBQUlELE9BQU87WUFDUixNQUFNRyxVQUFVLE1BQU1SLDJEQUFjLENBQUNpQixNQUFNLENBQUM7Z0JBQ3pDUCxPQUFPO29CQUNKSixJQUFJSyxPQUFPVCxJQUFJSyxLQUFLLENBQUNELEVBQUU7Z0JBQzFCO2dCQUNBWSxNQUFNO29CQUNILEdBQUdoQixJQUFJaUIsSUFBSTtnQkFDZDtZQUNIO1lBQ0EsSUFBSVgsU0FBUztnQkFDVkwsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0w7WUFDeEIsT0FBTztnQkFDSkwsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsT0FBTztnQkFBeUI7WUFDMUQ7UUFDSCxPQUFPO1lBQ0pYLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVHLFNBQVM7WUFBZ0I7UUFDbkQ7SUFDSCxPQUFPLElBQUlkLElBQUlFLE1BQU0sS0FBSyxVQUFVO1FBQ2pDLHFGQUFxRjtRQUNyRixNQUFNQyxRQUFRLE1BQU1OLHVEQUFRQSxDQUFDO1lBQUVHO1FBQUk7UUFDbkMsTUFBTUksS0FBS0osSUFBSUssS0FBSyxDQUFDRCxFQUFFO1FBQ3ZCLElBQUlELE9BQU87WUFDUixNQUFNZSxjQUFjLE1BQU1wQiwyREFBYyxDQUFDcUIsTUFBTSxDQUFDO2dCQUM3Q1gsT0FBTztvQkFDSkosSUFBSUssT0FBT0w7Z0JBQ2Q7WUFDSDtZQUNBLElBQUljLGFBQWE7Z0JBQ2RqQixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTztZQUN4QixPQUFPO2dCQUNKakIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsT0FBTztnQkFBMEI7WUFDM0Q7UUFDSCxPQUFPO1lBQ0pYLElBQUlTLE1BQU0sQ0FBQyxLQUFLRyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBZ0I7UUFDbkQ7SUFDSCxPQUFPO1FBQ0osT0FBT2IsSUFDSFMsTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFEO0lBQzFFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVnYWp1bnRvLy4vcGFnZXMvYXBpL3BhY2llbnRlcy9baWRdLnRzPzg4NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJ25leHQtYXV0aC9qd3QnO1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyByZXEgfSk7XG4gICAgICBjb25zdCBpZCA9IHJlcS5xdWVyeS5pZDtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgY29uc3QgcGF0aWVudCA9IGF3YWl0IHByaXNtYS5wYXRpZW50LmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IFN0cmluZyhpZCkgfVxuICAgICAgICAgfSk7XG4gICAgICAgICBpZiAocGF0aWVudCkge1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocGF0aWVudCk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ1VzdcOhcmlvIG7Do28gZW5jb250cmFkbycgfSk7XG4gICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnQWNlc3NvIG5lZ2FkbycgfSk7XG4gICAgICB9XG4gICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdQQVRDSCcpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyByZXEgfSk7XG4gICAgICBjb25zdCBpZCA9IHJlcS5xdWVyeS5pZDtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgY29uc3QgcGF0aWVudCA9IGF3YWl0IHByaXNtYS5wYXRpZW50LnVwZGF0ZSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgaWQ6IFN0cmluZyhyZXEucXVlcnkuaWQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgLi4ucmVxLmJvZHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgICAgaWYgKHBhdGllbnQpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBhdGllbnQpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdVc3XDoXJpbyBuw6NvIGVuY29udHJhZG8nIH0pO1xuICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ0FjZXNzbyBOZWdhZG8nIH0pO1xuICAgICAgfVxuICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgLy90b2RvIGFxdWkgZXUgcHJlY2lzbyBhbHRlcmFyIHBhcmEgbsOjbyBhcGFnYXIsIGUgc2ltIGFsdGVyYXIgbyBzdGF0dXMgcGFyYSBhcnF1aXZhZG9cbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyByZXEgfSk7XG4gICAgICBjb25zdCBpZCA9IHJlcS5xdWVyeS5pZDtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgY29uc3QgZGVsZXRlZFVzZXIgPSBhd2FpdCBwcmlzbWEucGF0aWVudC5kZWxldGUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgIGlkOiBTdHJpbmcoaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiAgICAgICAgIGlmIChkZWxldGVkVXNlcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGVsZXRlZFVzZXIpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdQYWNpZW50ZSBuw6NvIGVuY29udHJhZG8nIH0pO1xuICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ0FjZXNzbyBOZWdhZG8nIH0pO1xuICAgICAgfVxuICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgIC5zdGF0dXMoNDA1KVxuICAgICAgICAgLmpzb24oeyBlcnJvcjogJ0Vzc2UgdGlwbyBkZSByZXF1aXNpw6fDo28gbsOjbyDDqSBzdXBvcnRhZGEgbmVzdGEgcm90YScgfSk7XG4gICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0VG9rZW4iLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9rZW4iLCJpZCIsInF1ZXJ5IiwicGF0aWVudCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsIlN0cmluZyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInNlbmQiLCJtZXNzYWdlIiwidXBkYXRlIiwiZGF0YSIsImJvZHkiLCJkZWxldGVkVXNlciIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/pacientes/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pacientes/[id].ts"));
module.exports = __webpack_exports__;

})();