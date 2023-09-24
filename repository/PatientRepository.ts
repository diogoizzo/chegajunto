import prisma from '../lib/prisma';
export default class PatientRepository {
   static async getAll() {
      try {
         const patients = await prisma.patient.findMany({
            include: {
               documents: true,
               availabilities: true
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
}
