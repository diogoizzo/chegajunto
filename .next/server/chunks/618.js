"use strict";
exports.id = 618;
exports.ids = [618];
exports.modules = {

/***/ 688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Patient)
/* harmony export */ });
class Patient {
    constructor(id, name, status, email, birthday, birthplace, education, school, scholarship, isMedicated, medication, interviewedBy, interviewedByUserId, complaint, createdAt, updatedAt, cpf, address, phone, observation, underResponsibilityOf, underResponsibilityOfUserId){
        this.id = id;
        this.name = name;
        this.status = status;
        this.email = email;
        this.birthday = birthday;
        this.birthplace = birthplace;
        this.education = education;
        this.school = school;
        this.scholarship = scholarship;
        this.isMedicated = isMedicated;
        this.medication = medication;
        this.interviewedBy = interviewedBy;
        this.interviewedByUserId = interviewedByUserId;
        this.complaint = complaint;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.cpf = cpf;
        this.address = address;
        this.phone = phone;
        this.observation = observation;
        this.underResponsibilityOf = underResponsibilityOf;
        this.underResponsibilityOfUserId = underResponsibilityOfUserId;
    }
    get getLink() {
        return `/pacientes/${this.id}`;
    }
    get patientEditLink() {
        return `/pacientes/editar/${this.id}`;
    }
    static createFromObject({ id, name, status, email, birthday, birthplace, education, school, scholarship, isMedicated, medication, interviewedBy, interviewedByUserId, complaint, createdAt, updatedAt, cpf, address, phone, observation, underResponsibilityOf, underResponsibilityOfUserId }) {
        return new Patient(id, name, status, email, birthday, birthplace, education, school, scholarship, isMedicated, medication, interviewedBy, interviewedByUserId, complaint, createdAt, updatedAt, cpf, address, phone, observation, underResponsibilityOf, underResponsibilityOfUserId);
    }
    static createMany(patients) {
        return patients.map((patient)=>{
            const { id, name, status, email, birthday, birthplace, education, school, scholarship, isMedicated, medication, interviewedBy, interviewedByUserId, complaint, createdAt, updatedAt, cpf, address, phone, observation, underResponsibilityOf, underResponsibilityOfUserId } = patient;
            return new Patient(id, name, status, email, birthday, birthplace, education, school, scholarship, isMedicated, medication, interviewedBy, interviewedByUserId, complaint, createdAt, updatedAt, cpf, address, phone, observation, underResponsibilityOf, underResponsibilityOfUserId);
        });
    }
}


/***/ })

};
;