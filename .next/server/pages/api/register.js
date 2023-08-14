"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ 7320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8869);


async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, password, type, cpf, phone, crp, institution, period, address } = req.body;
        try {
            const hash = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 0);
            try {
                const createdUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.user.create({
                    data: {
                        name: name,
                        email: email,
                        password: hash,
                        type: type,
                        cpf: cpf,
                        phone: phone,
                        crp: crp,
                        institution: institution,
                        period: Number(period),
                        address: address
                    }
                });
            } catch (e) {
                console.log(e);
            }
            res.status(200).end();
        } catch (err) {
            res.status(503).json({
                err: err.toString()
            });
        }
    } else {
        return res.status(405).json({
            error: "This request only supports POST requests"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7320));
module.exports = __webpack_exports__;

})();