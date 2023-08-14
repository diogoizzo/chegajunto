"use strict";
exports.id = 858;
exports.ids = [858];
exports.modules = {

/***/ 9583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(name, email, phone, address, cpf, type, institution, period, crp, id){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.cpf = cpf;
        this.type = type;
        this.institution = institution;
        this.period = period;
        this.crp = crp;
        this.id = id;
    }
    static createMany(users) {
        return users.map((user)=>{
            const { id, name, email, phone, address, cpf, type, crp, institution, period } = user;
            return new User(name, email, phone, address, cpf, type, institution, period, crp, id);
        });
    }
    static createFormObject({ id, name, email, phone, address, cpf, type, crp, institution, period }) {
        return new User(name, email, phone, address, cpf, type, institution, period, crp, id);
    }
    get userLink() {
        return `/usuarios/${this.id}`;
    }
    get userEditLink() {
        return `/usuarios/editar/${this.id}`;
    }
}


/***/ }),

/***/ 6858:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UserServices)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9583);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class UserServices {
    static async register(form) {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/register", form);
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    }
    static async getAll() {
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/usuarios");
            return _entities_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.createMany(res.data);
        } catch (e) {
            console.log(e);
        }
    }
    static async getById(id) {
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/api/usuarios/${id}`);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
    static async updateById(formData) {
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch(`/api/usuarios/${formData.id}`, formData);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
    static async delete(id) {
        try {
            if (id) {
                const rest = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](`/api/usuarios/${id}`);
                return rest.data;
            }
        } catch (e) {
            console.log(e);
        }
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;