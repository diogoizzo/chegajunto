"use strict";
exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 5759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FormInputLine)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);


function FormInputLine({ label, name, state, setState }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-cool-gray-900 border-opacity-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-1/3 px-4 mb-4 sm:mb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-md font-medium text-cool-gray-500",
                    children: label
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-2/3 px-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap items-center -mx-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full px-3 mb-3 sm:mb-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(state).format("YYYY-MM-DD"),
                                name: name,
                                className: "block text-md placeholder:text-gray-700 py-4 px-3 w-full text-sm text-cool-gray-200 placeholder-cool-gray-200 font-medium outline-none bg-transparent border border-raisin-black-lighter hover:border-cool-gray-900 focus-within:border-carolina-blue rounded-lg",
                                type: "date",
                                onChange: (e)=>setState && setState((prev)=>({
                                            ...prev,
                                            [name]: e.target.value
                                        }))
                            })
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 8599:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FormSwitchLine)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _ui_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7522);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_switch__WEBPACK_IMPORTED_MODULE_1__]);
_ui_switch__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function FormSwitchLine({ label, name, state, setState }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-cool-gray-900 border-opacity-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-1/3 px-4 mb-4 sm:mb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-md font-medium text-cool-gray-500",
                    children: label
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-2/3 px-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap items-center -mx-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full px-3 mb-3 sm:mb-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_switch__WEBPACK_IMPORTED_MODULE_1__/* .Switch */ .r, {
                                className: " bg-raisin-black-lighter checked:bg-yinmn-blue-200",
                                checked: Boolean(state),
                                name: name,
                                onCheckedChange: (value)=>setState && setState((prev)=>({
                                            ...prev,
                                            [name]: value
                                        }))
                            })
                        })
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FormTextareaLine)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function FormTextareaLine({ label, placeHolder, name, state, setState }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap items-start -mx-4 pb-8 mb-8 border-b border-cool-gray-900 border-opacity-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-1/3 px-4 mb-4 sm:mb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-md font-medium text-cool-gray-500",
                    children: label
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-2/3 px-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap items-center -mx-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full px-3 mb-3 sm:mb-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                value: state ?? "",
                                name: name,
                                rows: 10,
                                className: "block text-md placeholder:text-gray-700 py-4 px-3 w-full text-sm text-cool-gray-200 placeholder-cool-gray-200 font-medium outline-none bg-transparent border border-raisin-black-lighter hover:border-cool-gray-900 focus-within:border-carolina-blue rounded-lg",
                                placeholder: placeHolder,
                                onChange: (e)=>setState && setState((prev)=>({
                                            ...prev,
                                            [name]: e.target.value
                                        }))
                            })
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 9658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _ui_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_select__WEBPACK_IMPORTED_MODULE_1__]);
_ui_select__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function SelectInput({ title, options, state, placeholder, setState, name }) {
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
                                        value: user.id || "",
                                        children: user.name
                                    }, user.id))
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9564:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(827);
/* harmony import */ var _atoms_SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9658);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8793);
/* harmony import */ var _atoms_PrimaryBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2838);
/* harmony import */ var _atoms_DangerBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1379);
/* harmony import */ var _services_PatientServices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4540);
/* harmony import */ var _atoms_FormTextareaLine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4017);
/* harmony import */ var _hooks_useErrorToast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1614);
/* harmony import */ var _atoms_FormSwitchLine__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8599);
/* harmony import */ var _services_UserServices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6858);
/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9583);
/* harmony import */ var _atoms_FormInputDateLine__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_atoms_SelectInput__WEBPACK_IMPORTED_MODULE_3__, _parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__, _services_PatientServices__WEBPACK_IMPORTED_MODULE_9__, _atoms_FormSwitchLine__WEBPACK_IMPORTED_MODULE_12__, _services_UserServices__WEBPACK_IMPORTED_MODULE_13__]);
([_atoms_SelectInput__WEBPACK_IMPORTED_MODULE_3__, _parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__, _services_PatientServices__WEBPACK_IMPORTED_MODULE_9__, _atoms_FormSwitchLine__WEBPACK_IMPORTED_MODULE_12__, _services_UserServices__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function PatientForm({ patient }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const errorToast = (0,_hooks_useErrorToast__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: patient?.id || "",
        name: patient?.name || "",
        email: patient?.email || "",
        phone: patient?.phone || "",
        address: patient?.address || "",
        cpf: patient?.cpf || "",
        status: patient?.status || "",
        birthday: patient?.birthday || undefined,
        birthplace: patient?.birthplace || "",
        education: patient?.education || "",
        school: patient?.school || "",
        scholarship: patient?.scholarship || undefined,
        isMedicated: patient?.isMedicated || undefined,
        medication: patient?.medication || undefined,
        interviewedBy: patient?.interviewedBy || undefined,
        interviewedByUserId: patient?.interviewedByUserId || undefined,
        complaint: patient?.complaint || undefined,
        observation: patient?.observation || undefined,
        underResponsibilityOf: patient?.underResponsibilityOf || undefined,
        underResponsibilityOfUserId: patient?.underResponsibilityOfUserId || undefined,
        getLink: patient?.getLink || "",
        patientEditLink: patient?.patientEditLink || ""
    });
    const query = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([
        "user"
    ], ()=>_services_UserServices__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getAll());
    const users = query.data && _entities_User__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z.createMany(query.data);
    const patientUpdateMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
        mutationFn: _services_PatientServices__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.updateById,
        onSuccess: ()=>{
            router.push(`/pacientes?updated=true`);
        },
        onError: ()=>{
            errorToast("N\xe3o foi poss\xedvel atualizar o paciente.");
        }
    });
    const patientDeleteMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
        mutationFn: _services_PatientServices__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.delete,
        onSuccess: ()=>{
            router.push("/pacientes?deleted=true");
        },
        onError: ()=>{
            errorToast("N\xe3o foi poss\xedvel arquivar o paciente,");
        }
    });
    const patientCreateMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
        mutationFn: _services_PatientServices__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.create,
        onSuccess: ()=>{
            router.push("/pacientes?saved=true");
        },
        onError: ()=>{
            errorToast("N\xe3o foi poss\xedvel criar o novo paciente.");
        }
    });
    async function salvar(e) {
        e.preventDefault();
        console.log(form);
        if (!patient) {
            patientCreateMutation.mutate(form);
        } else {
            patientUpdateMutation.mutate(form);
        }
    }
    function deleteAction() {
        closeModal();
        patientDeleteMutation.mutate(patient?.id);
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
                text: "Tem certeza que deseja arquivar o paciente?",
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
                                        patient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm text-cool-gray-500",
                                            children: "Edite as informa\xe7\xf5s pessoais do paciente acima."
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm text-cool-gray-500",
                                            children: "Preencha as informa\xe7\xf5s pessoais do novo paciente."
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
                                        placeHolder: "Digite o nome do novo paciente..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.phone,
                                        setState: setForm,
                                        name: "phone",
                                        label: "Telefone",
                                        type: "tel",
                                        placeHolder: "Digite o telefone do novo paciente..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.email,
                                        setState: setForm,
                                        name: "email",
                                        label: "Email",
                                        type: "email",
                                        placeHolder: "Digite o email do novo paciente..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.address,
                                        setState: setForm,
                                        name: "address",
                                        label: "Endere\xe7o",
                                        type: "text",
                                        placeHolder: "Digite o endere\xe7o do novo paciente..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputDateLine__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        //todo aqui vou precisa ajusar para usar o daysjs e formatar a data corretamente
                                        state: form.birthday,
                                        setState: setForm,
                                        name: "birthday",
                                        label: "Data de Nascimento"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.cpf,
                                        setState: setForm,
                                        name: "cpf",
                                        label: "CPF",
                                        type: "text",
                                        placeHolder: "Digite o CPF do novo paciente..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.birthplace,
                                        setState: setForm,
                                        name: "birthplace",
                                        label: "Naturalidade",
                                        type: "text",
                                        placeHolder: "Digite a naturalidade do paciente..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full sm:w-auto px-4 mb-6 sm:mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "text-2xl font-bold tracking-wide text-cool-gray-200 mb-1",
                                                    children: "Informa\xe7\xf5es Institucionais"
                                                }),
                                                patient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-cool-gray-500",
                                                    children: "Edite as informa\xe7\xf5s institucionais do paciente acima."
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-cool-gray-500",
                                                    children: "Preencha as institucionais do novo paciente."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.education,
                                        setState: setForm,
                                        name: "education",
                                        label: "Escolaridade",
                                        type: "text",
                                        placeHolder: "Digite o grau de escolaridade do paciente..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.school,
                                        setState: setForm,
                                        name: "school",
                                        label: "Nome da Escola",
                                        type: "text",
                                        placeHolder: "Digite o nome da escola do paciente..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormSwitchLine__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        label: "\xc9 bolsista?",
                                        setState: setForm,
                                        name: "scholarship",
                                        state: form.scholarship
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full sm:w-auto px-4 mb-6 sm:mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "text-2xl font-bold tracking-wide text-cool-gray-200 mb-1",
                                                    children: "Informa\xe7\xf5es M\xe9dicas"
                                                }),
                                                patient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-cool-gray-500",
                                                    children: "Edite as informa\xe7\xf5s m\xe9dicas do paciente acima."
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-cool-gray-500",
                                                    children: "Preencha as m\xe9dicas do novo paciente."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormSwitchLine__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        label: "Faz uso de medica\xe7\xe3o?",
                                        setState: setForm,
                                        name: "isMedicated",
                                        state: form.isMedicated
                                    }),
                                    form.isMedicated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.medication,
                                        setState: setForm,
                                        name: "medicamentos",
                                        label: "Quais medicamentos",
                                        type: "text",
                                        placeHolder: "Digite o nome dos medicamentos utilzados pelo paciente..."
                                    }) : null,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full sm:w-auto px-4 mb-6 sm:mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "text-2xl font-bold tracking-wide text-cool-gray-200 mb-1",
                                                    children: "Outras informa\xe7\xf5es"
                                                }),
                                                patient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-cool-gray-500",
                                                    children: "Edite as outras informa\xe7\xf5es do paciente acima."
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-cool-gray-500",
                                                    children: "Preencha as outras informa\xe7\xf5es do novo paciente."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormTextareaLine__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        state: form.complaint,
                                        setState: setForm,
                                        name: "complaint",
                                        label: "Reclama\xe7\xe3o do Paciente",
                                        placeHolder: "Digite os detalhes da reclama\xe7\xe3o do paciente..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormTextareaLine__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        state: form.observation,
                                        setState: setForm,
                                        name: "observation",
                                        label: "Observa\xe7\xf5es sobre o Paciente",
                                        placeHolder: "Digite as oberva\xe7\xf5es relevantes sobre o paciente..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_SelectInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        name: "interviewedByUserId",
                                        title: "Respons\xe1vel pela Entrevista",
                                        setState: setForm,
                                        options: users,
                                        placeholder: "Selecione o respons\xe1vel pela entrevista",
                                        state: form.interviewedBy?.id
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_SelectInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        name: "underResponsibilityOfUserId",
                                        title: "Respons\xe1vel pelo Paciente",
                                        setState: setForm,
                                        options: users,
                                        placeholder: "Selecione o respons\xe1vel pela entrevista",
                                        state: form.underResponsibilityOf?.id
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-right space-x-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_PrimaryBtn__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                text: "Salvar",
                                                clickHandle: salvar
                                            }),
                                            patient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_DangerBtn__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                text: "Arquivar paciente",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatientForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7522:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3702);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__, _lib_utils__WEBPACK_IMPORTED_MODULE_3__]);
([_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__, _lib_utils__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ Switch auto */ 



const Switch = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.Root, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-yinmn-blue-200 data-[state=unchecked]:bg-raisin-black-lighter dark:focus-visible:ring-slate-800 dark:focus-visible:ring-offset-slate-950 dark:data-[state=checked]:bg-slate-50 dark:data-[state=unchecked]:bg-slate-800", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.Thumb, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-950")
        })
    }));
Switch.displayName = _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.Root.displayName;


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;