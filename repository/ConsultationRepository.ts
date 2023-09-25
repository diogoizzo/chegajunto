import prisma from '../lib/prisma';
export default class ConsultationRepository {
   static async getAll() {
      try {
         const consultations = await prisma.consultation.findMany({
            include: {
               patient: true,
               professional: true
            }
         });
         return consultations;
      } catch (error) {
         console.log(error);
      }
   }
   static async create(body: any) {
      try {
         const consultation = await prisma.consultation.create({
            data: {
               ...body
            }
         });
         return consultation;
      } catch (error) {
         console.log(error);
      }
   }
   static async findById(id: string) {
      try {
         const consultation = await prisma.consultation.findUnique({
            where: {
               id: id
            },
            include: {
               professional: true,
               patient: true
            }
         });
         return consultation;
      } catch (error) {
         console.log(error);
      }
   }
   static async update(id: string, body: any) {
      try {
         const updatedConsultation = await prisma.consultation.update({
            where: {
               id: id
            },
            data: {
               ...body
            }
         });
         return updatedConsultation;
      } catch (error) {
         console.log(error);
      }
   }
   static async delete(id: string) {
      try {
         const deletedConsultation = await prisma.consultation.delete({
            where: {
               id: id
            }
         });
         return deletedConsultation;
      } catch (error) {
         console.log(error);
      }
   }
}
