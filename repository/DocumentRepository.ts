import prisma from '../lib/prisma';
export default class DocumentRepository {
   static async getAll() {
      try {
         const documents = await prisma.document.findMany({
            include: {
               belongsTo: {
                  select: {
                     name: true,
                     underResponsibilityOfUserId: true,
                     interviewedByUserId: true
                  }
               },
               uploadedBy: {
                  select: {
                     name: true
                  }
               }
            }
         });
         return documents;
      } catch (error) {
         console.log(error);
      }
   }
   static async create(data: any) {
      try {
         const createdDocument = await prisma.document.create({
            data: {
               ...data
            }
         });
         return createdDocument;
      } catch (error) {
         console.log(error);
      }
   }
   static async findById(id: string) {
      try {
         const document = await prisma.document.findUnique({
            where: {
               id: id
            },
            select: {
               id: true,
               name: true,
               type: true,
               mimeType: true,
               uploadedBy: true,
               uploadedByUserId: true,
               belongsTo: true,
               belongsToPatientId: true,
               description: true,
               createdAt: true,
               src: true,
               awsFileName: true
            }
         });
         return document;
      } catch (error) {}
   }
   static async delete(id: string) {
      try {
         const deletedDocument = await prisma.document.delete({
            where: {
               id: id
            }
         });
         return deletedDocument;
      } catch (error) {
         console.log(error);
      }
   }
   static async update(id: string, data: any) {
      try {
         const updatedDocument = await prisma.document.update({
            where: {
               id: String(id)
            },
            data: {
               ...data
            }
         });
         return updatedDocument;
      } catch (error) {
         console.log(error);
      }
   }
   static async newThisMonth(initialDate: any, endDate: any) {
      try {
         const newThisMonth = await prisma.document.findMany({
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
         return newThisMonth;
      } catch (error) {
         console.log(error);
      }
   }
}
