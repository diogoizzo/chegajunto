"use strict";
(() => {
var exports = {};
exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 6705:
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ 726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_1__]);
formidable__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const config = {
    api: {
        bodyParser: false
    }
};
async function readFile(req) {
    const form = formidable();
    return new Promise((resolve, reject)=>{
        form.parse(req, (err, fields, files)=>{
            if (err) reject(err);
            resolve({
                fields,
                files
            });
        });
    });
}
async function handler(req, res) {
    if (req.method === "POST") {
        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({
            req
        });
        if (token) {
            //  const { files } = await readFile(req);
            //  const resposta = await GoogleDriveServices.uploadFile(files.image[0]);
            //  const files = await GoogleDriveServices.readAll();
            //  await GoogleDriveServices.deleteAll(files);
            res.status(200).send("ok");
        } else {
            res.status(401).send({
                message: "Acesso negado"
            });
        }
    } else {
        return res.status(405).json({
            error: "Esse tipo de requisi\xe7\xe3o n\xe3o \xe9 suportada nesta rota"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(726));
module.exports = __webpack_exports__;

})();