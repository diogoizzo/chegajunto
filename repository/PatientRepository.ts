import prisma from '../lib/prisma';
export default class PatientRepository {
   static async getAll() {
      try {
         const patients = await prisma.patient.findMany({
            include: {
               documents: true,
               availabilities: true,
               underResponsibilityOf: true,
               interviewedBy: true
            }
         });
         return patients;
      } catch (error) {
         console.log(error);
      }
   }
   static async create(body: any, birthday: Date | null, email: string) {
      try {
         const patient = await prisma.patient.create({
            data: {
               ...body,
               birthday: birthday,
               email: email
            }
         });
         return patient;
      } catch (error) {
         console.log(error);
      }
   }
   static async findById(id: string) {
      try {
         const patient = await prisma.patient.findUnique({
            where: { id: id },
            include: {
               underResponsibilityOf: true,
               interviewedBy: true,
               documents: true,
               availabilities: true
            }
         });
         return patient;
      } catch (error) {
         console.log(error);
      }
   }
   static async update(
      id: string,
      birth: Date | null,
      interviewedByUserId: string,
      underResponsibilityOfUserId: string,
      body: any
   ) {
      console.log(interviewedByUserId, underResponsibilityOfUserId);
      try {
         const patient = await prisma.patient.update({
            where: {
               id: id
            },
            data: {
               birthday: birth,
               interviewedBy:
                  interviewedByUserId !== 'undefined'
                     ? {
                          connect: {
                             id: interviewedByUserId
                          }
                       }
                     : undefined,
               underResponsibilityOf:
                  underResponsibilityOfUserId !== 'undefined'
                     ? {
                          connect: {
                             id: underResponsibilityOfUserId
                          }
                       }
                     : undefined,
               ...body
            }
         });
         return patient;
      } catch (error) {
         console.log(error);
      }
   }
   static async archivePatient(id: string) {
      try {
         const updatedPatient = await prisma.patient.update({
            where: {
               id: id
            },
            data: {
               status: 'Arquivado'
            }
         });
         return updatedPatient;
      } catch (error) {
         console.log(error);
      }
   }
   static async updateToActive(patientId: string, professionalUserId: string) {
      try {
         const patient = await prisma.patient.update({
            where: {
               id: patientId
            },
            data: {
               status: 'Ativo',
               underResponsibilityOf: {
                  connect: {
                     id: professionalUserId
                  }
               }
            }
         });
         return patient;
      } catch (error) {
         console.log(error);
      }
   }
   static async changeStatusToWait(id: string) {
      try {
         const updatePatientStatus = await prisma.patient.update({
            where: {
               id: id
            },
            data: {
               status: 'Espera'
            }
         });
         return updatePatientStatus;
      } catch (error) {
         console.log(error);
      }
   }
   static async getByUserID(id: string) {
      try {
         const userPatients = await prisma.patient.findMany({
            where: {
               OR: [
                  {
                     underResponsibilityOfUserId: id
                  },
                  {
                     interviewedByUserId: id
                  }
               ]
            },
            include: {
               documents: true,
               appointments: true
            }
         });
         return userPatients;
      } catch (error) {
         console.log(error);
      }
   }
   static async createdInRange(initialDate: any, endDate: any) {
      try {
         const patientsCreatedInRange = await prisma.patient.findMany({
            where: {
               AND: [
                  {
                     createdAt: {
                        gt: initialDate
                     }
                  },
                  {
                     createdAt: {
                        lt: endDate
                     }
                  }
               ]
            }
         });
         return patientsCreatedInRange;
      } catch (error) {
         console.log(error);
      }
   }
   static async patientsArchivedThisMonth(initialDate: any, endDate: any) {
      try {
         const patientsArchivedThisMonth = await prisma.patient.findMany({
            where: {
               AND: [
                  {
                     updatedAt: {
                        gt: initialDate
                     }
                  },
                  {
                     updatedAt: {
                        lt: endDate
                     }
                  },
                  {
                     status: 'Arquivado'
                  }
               ]
            }
         });
         return patientsArchivedThisMonth;
      } catch (error) {
         console.log(error);
      }
   }
}
