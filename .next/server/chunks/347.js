"use strict";
exports.id = 347;
exports.ids = [347];
exports.modules = {

/***/ 9960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _ui_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_select__WEBPACK_IMPORTED_MODULE_1__]);
_ui_select__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function StringSelectInput({ title, options, state, placeholder, setState, name }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-cool-gray-900 border-opacity-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-1/3 px-4 mb-4 sm:mb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-md font-medium text-cool-gray-500",
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-2/3 px-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .Select */ .Ph, {
                        name: name,
                        value: state,
                        onValueChange: (e)=>setState && setState((prev)=>({
                                    ...prev,
                                    [name]: e
                                })),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .SelectTrigger */ .i4, {
                                className: "w-full text-cool-gray-200 border border-raisin-black-lighter",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .SelectValue */ .ki, {
                                    className: "",
                                    placeholder: placeholder
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .SelectContent */ .Bw, {
                                children: options && options.map((user)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .SelectItem */ .Ql, {
                                        value: user,
                                        children: user
                                    }, user))
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StringSelectInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8347:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(827);
/* harmony import */ var _services_UserServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6858);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8793);
/* harmony import */ var _atoms_PrimaryBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2838);
/* harmony import */ var _atoms_DangerBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1379);
/* harmony import */ var _hooks_useErrorToast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1614);
/* harmony import */ var _atoms_StringSelectInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_UserServices__WEBPACK_IMPORTED_MODULE_3__, _parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__, _atoms_StringSelectInput__WEBPACK_IMPORTED_MODULE_10__]);
([_services_UserServices__WEBPACK_IMPORTED_MODULE_3__, _parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__, _atoms_StringSelectInput__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function UserForm({ user }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const errorToast = (0,_hooks_useErrorToast__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: user?.id || undefined,
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        address: user?.address || "",
        cpf: user?.cpf || "",
        type: user?.type || "Psic\xf3logo",
        crp: user?.crp || "",
        institution: user?.institution || "",
        period: user?.period || 0,
        password: "",
        confirmPassword: "",
        userLink: user?.userLink || ""
    });
    const userUpdateMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
        mutationFn: _services_UserServices__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.updateById,
        onSuccess: ()=>{
            router.push(`/usuarios?updated=true`);
        }
    });
    const userDeleteMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
        mutationFn: _services_UserServices__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.delete,
        onSuccess: ()=>{
            router.push("/usuarios?deleted=true");
        }
    });
    async function register(e) {
        e.preventDefault();
        if (!user) {
            if (!form.name) {
                errorToast("\xc9 preciso informar ao menos o nome do paciente");
            } else if (!form.password) {
                errorToast("\xc9 necess\xe1rio informar uma senha");
            } else if (form.password !== form.confirmPassword) {
                errorToast("As senhas precisam ser iguais");
            } else {
                const isRegistred = await _services_UserServices__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.register(form);
                if (isRegistred) {
                    router.push("/usuarios?saved=true");
                }
            }
        } else {
            delete form?.password;
            delete form?.confirmPassword;
            userUpdateMutation.mutate(form);
        }
    }
    function deleteAction() {
        closeModal();
        userDeleteMutation.mutate(user?.id);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function openConfirmationModal(e) {
        e.preventDefault();
        setIsOpen(true);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                text: "Tem certeza que deseja apagar o usu\xe1rio?",
                isOpen: isOpen,
                closeModal: closeModal,
                deleteAction: deleteAction
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "py-3 mt-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container px-4 mx-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-10 bg-raisin-black rounded-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full sm:w-auto px-4 mb-6 sm:mb-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "text-2xl font-bold tracking-wide text-cool-gray-200 mb-1",
                                            children: "Informa\xe7\xf5es Pessoais"
                                        }),
                                        user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm text-cool-gray-500",
                                            children: "Edite as informa\xe7\xf5s pessoais do usu\xe1rio acima."
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm text-cool-gray-500",
                                            children: "Preencha as informa\xe7\xf5s pessoais do novo usu\xe1rio."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.name,
                                        setState: setForm,
                                        name: "name",
                                        label: "Nome",
                                        type: "text",
                                        placeHolder: "Digite o nome do novo usu\xe1rio..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.email,
                                        setState: setForm,
                                        name: "email",
                                        label: "Email",
                                        type: "email",
                                        placeHolder: "Digite o email do novo usu\xe1rio..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.phone,
                                        setState: setForm,
                                        name: "phone",
                                        label: "Telefone",
                                        type: "tel",
                                        placeHolder: "Digite o telefone do novo usu\xe1rio..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.address,
                                        setState: setForm,
                                        name: "address",
                                        label: "Endere\xe7o",
                                        type: "text",
                                        placeHolder: "Digite o endere\xe7o do novo usu\xe1rio..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.cpf,
                                        setState: setForm,
                                        name: "cpf",
                                        label: "CPF",
                                        type: "text",
                                        placeHolder: "Digite o CPF do novo usu\xe1rio..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_StringSelectInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        name: "type",
                                        placeholder: "Selecione o tipo de usu\xe1rio",
                                        title: "Tipo de usu\xe1rio",
                                        options: [
                                            "Psic\xf3logo",
                                            "Estagi\xe1rio"
                                        ],
                                        state: form.type,
                                        setState: setForm
                                    }),
                                    form.type === "Psic\xf3logo" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 mt-12 border-b border-gray-400 border-opacity-20",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "w-full sm:w-auto px-4 mb-6 sm:mb-0",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "text-2xl font-bold tracking-wide text-cool-gray-200 mb-1",
                                                            children: "Informa\xe7\xf5es Profissionais"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-sm text-cool-gray-500",
                                                            children: "Preencha as informa\xe7\xf5s profissionais do novo usu\xe1rio."
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                state: form.crp,
                                                setState: setForm,
                                                name: "crp",
                                                label: "CRP",
                                                type: "text",
                                                placeHolder: "Digite o n\xfamero do CRP do novo usu\xe1rio..."
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 mt-12 border-b border-gray-400 border-opacity-20",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "w-full sm:w-auto px-4 mb-6 sm:mb-0",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "text-2xl font-bold tracking-wide text-cool-gray-200 mb-1",
                                                            children: "Informa\xe7\xf5es Institucionais"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-sm text-cool-gray-500",
                                                            children: "Preencha as informa\xe7\xf5s acad\xeamicas do estagi\xe1rio."
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                state: form.institution,
                                                setState: setForm,
                                                name: "institution",
                                                label: "Institui\xe7\xe3o de Ensino",
                                                type: "text",
                                                placeHolder: "Digite o nome da institui\xe7\xe3o de ensino do novo usu\xe1rio..."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                state: String(form.period),
                                                setState: setForm,
                                                name: "period",
                                                label: "Per\xedodo",
                                                type: "number",
                                                placeHolder: "Digite o per\xedodo que o novo usu\xe1rio esta cursando..."
                                            })
                                        ]
                                    }),
                                    !user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 mt-12 border-b border-gray-400 border-opacity-20",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full sm:w-auto px-4 mb-6 sm:mb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "text-2xl font-bold tracking-wide text-cool-gray-200 mb-1",
                                                        children: "Senha"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                state: form.password,
                                                setState: setForm,
                                                name: "password",
                                                label: "Senha",
                                                type: "password",
                                                placeHolder: "Digite a senha do novo usu\xe1rio"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                state: form.confirmPassword,
                                                setState: setForm,
                                                name: "confirmPassword",
                                                label: "Repita a Senha",
                                                type: "password",
                                                placeHolder: "Repita a senha do novo usu\xe1rio"
                                            })
                                        ]
                                    }) : null,
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-right space-x-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_PrimaryBtn__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                text: "Salvar",
                                                clickHandle: register
                                            }),
                                            user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_DangerBtn__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                text: "Apagar Usu\xe1rio",
                                                openConfirmation: openConfirmationModal
                                            }) : null
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;