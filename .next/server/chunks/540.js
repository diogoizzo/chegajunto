"use strict";
exports.id = 540;
exports.ids = [540];
exports.modules = {

/***/ 4540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PatientServices)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class PatientServices {
    static async getAll() {
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/pacientes");
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
    static async getById(id) {
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/api/pacientes/${id}`);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
    static async updateById(formData) {
        if (formData) {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch(`/api/pacientes/${formData.id}`, formData);
            return res.data;
        }
    }
    static async delete(id) {
        if (id) {
            const rest = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](`/api/pacientes/${id}`);
            return rest.data;
        }
    }
    static async create(formData) {
        if (formData) {
            const rest = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/api/pacientes/`, formData);
            return rest.data;
        }
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;