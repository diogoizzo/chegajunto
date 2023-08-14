"use strict";
(() => {
var exports = {};
exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 8869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ lib_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts

let prisma;
if (true) {
    prisma = new client_namespaceObject.PrismaClient();
} else {}
/* harmony default export */ const lib_prisma = (prisma);


/***/ }),

/***/ 1458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8869);


async function handler(req, res) {
    if (req.method === "GET") {
        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({
            req
        });
        const id = req.query.id;
        if (token) {
            const patient = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.patient.findUnique({
                where: {
                    id: String(id)
                },
                include: {
                    underResponsibilityOf: true,
                    interviewedBy: true
                }
            });
            if (patient) {
                res.status(200).json(patient);
            } else {
                res.status(404).json({
                    error: "Usu\xe1rio n\xe3o encontrado"
                });
            }
        } else {
            res.status(401).send({
                message: "Acesso negado"
            });
        }
    } else if (req.method === "PATCH") {
        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({
            req
        });
        const id = req.query.id;
        delete req.body.getLink;
        delete req.body.id;
        delete req.body.patientEditLink;
        delete req.body.status;
        const birth = new Date(req.body.birthday);
        delete req.body.birthday;
        if (token) {
            const patient = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.patient.update({
                where: {
                    id: String(id)
                },
                data: {
                    birthday: birth,
                    ...req.body
                }
            });
            if (patient) {
                res.status(200).json(patient);
            } else {
                res.status(404).json({
                    error: "Usu\xe1rio n\xe3o encontrado"
                });
            }
        } else {
            res.status(404).json({
                message: "Acesso Negado"
            });
        }
    } else if (req.method === "DELETE") {
        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({
            req
        });
        const id = req.query.id;
        if (token) {
            const updatedPatient = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.patient.update({
                where: {
                    id: String(id)
                },
                data: {
                    status: "Arquivado"
                }
            });
            if (updatedPatient) {
                res.status(200).json(updatedPatient);
            } else {
                res.status(404).json({
                    error: "Paciente n\xe3o encontrado"
                });
            }
        } else {
            res.status(401).send({
                message: "Acesso Negado"
            });
        }
    } else {
        return res.status(405).json({
            error: "Esse tipo de requisi\xe7\xe3o n\xe3o \xe9 suportada nesta rota"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1458));
module.exports = __webpack_exports__;

})();