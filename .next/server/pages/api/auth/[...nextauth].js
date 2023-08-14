"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
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

/***/ 2094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "@next-auth/prisma-adapter"
const prisma_adapter_namespaceObject = require("@next-auth/prisma-adapter");
// EXTERNAL MODULE: ./lib/prisma.ts + 1 modules
var prisma = __webpack_require__(8869);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts





/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    adapter: (0,prisma_adapter_namespaceObject.PrismaAdapter)(prisma/* default */.Z),
    providers: [
        credentials_default()({
            id: "credentials",
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "john@example.com"
                },
                password: {
                    lable: "Senha",
                    type: "password"
                }
            },
            authorize: async (credentials)=>{
                //função que verifica a existencia do usuário informado nas credenciais, se encontado, compara a senha passada em credencias com a senha do bd, atraves do bcrypt. Tal função deve retnorar o usuário, caso a senha esteja correta, ou null caso incorreta ou o usuário não encontrado.
                try {
                    const user = await prisma/* default */.Z.user.findFirst({
                        where: {
                            email: credentials?.email
                        }
                    });
                    if (user !== null) {
                        if (await external_bcrypt_default().compare(credentials.password, user.password)) {
                            return user;
                        } else {
                            console.log("Hash not matched logging in");
                            return null;
                        }
                    } else {
                        return null;
                    }
                } catch (err) {
                    console.log("Authorize error:", err);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        jwt: async ({ token, user })=>{
            //esse Callback server para incluir o id do usuario no jwt, posso usar para incluir as informaçoes que eu desejar
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: ({ session, token })=>{
            //essa callback inclui a informação desejada na seção do usuário e fica acessível pela useSession()
            if (token) {
                // @ts-ignore
                session.id = token.id; // eslint-disable-line
            }
            return session;
        }
    },
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout"
    },
    secret: process.env.SECRET,
    session: {
        strategy: "jwt"
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2094));
module.exports = __webpack_exports__;

})();