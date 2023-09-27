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
   static async create(
      name: string,
      type: string,
      description: string,
      uploadedByUserId: string,
      belongsToPatientId: string,
      googleDriveId: string,
      mimeType: string
   ) {
      try {
         const doc = await prisma.document.create({
            data: {
               name,
               type,
               description,
               uploadedByUserId,
               belongsToPatientId,
               googleDriveId,
               mimeType
            }
         });
         return doc;
      } catch (error) {
         console.log(error);
      }
   }
   static async findById(id: string) {
      try {
         const document = await prisma.document.findUnique({
            where: { id: id },
            include: {
               uploadedBy: true,
               belongsTo: true
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
   static async updateWithoutFile(
      id: string,
      name: string,
      type: string,
      description: string,
      uploadedByUserId: string,
      belongsToPatientId: string,
      mimeType: string
   ) {
      try {
         const doc = await prisma.document.update({
            where: {
               id: id
            },
            data: {
               name: name,
               type: type,
               description: description,
               uploadedBy: {
                  connect: { id: uploadedByUserId }
               },
               belongsTo: {
                  connect: {
                     id: belongsToPatientId
                  }
               },
               mimeType: mimeType
            }
         });
         return doc;
      } catch (error) {
         console.log(error);
      }
   }
   static async updateWithFile(
      id: string,
      name: string,
      type: string,
      description: string,
      uploadedByUserId: string,
      belongsToPatientId: string,
      mimeType: string,
      googleDriveId: string
   ) {
      try {
         const doc = await prisma.document.update({
            where: {
               id: id
            },
            data: {
               name: name,
               type: type,
               description: description,
               uploadedBy: {
                  connect: { id: uploadedByUserId }
               },
               belongsTo: {
                  connect: {
                     id: belongsToPatientId
                  }
               },
               googleDriveId: googleDriveId,
               mimeType: mimeType
            }
         });
         return doc;
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
