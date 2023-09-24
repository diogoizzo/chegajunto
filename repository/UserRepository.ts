import prisma from '../lib/prisma';
export default class UserRepository {
   static async create(body: any, period: string, hash: string) {
      try {
         const createdUser = await prisma.user.create({
            data: {
               ...body,
               password: hash,
               period: Number(period)
            }
         });
         return createdUser;
      } catch (e) {
         console.log(e);
      }
   }
   static async updateProfile(
      id: string,
      body: any,
      hash: string,
      period: string
   ) {
      const updatedUser = await prisma.user.update({
         where: {
            id: id
         },
         data: {
            ...body,
            password: hash,
            period: Number(period)
         }
      });
      return updatedUser;
   }
   static async getAll() {
      try {
         const users = await prisma.user.findMany({
            include: {
               availabilities: true
            }
         });
         return users;
      } catch (error) {
         console.log(error);
      }
   }
   static async findById(id: string) {
      const user = await prisma.user.findUnique({
         where: { id: id },
         select: {
            name: true,
            email: true,
            phone: true,
            address: true,
            cpf: true,
            type: true,
            createdAt: false,
            updatedAt: false,
            institution: true,
            period: true,
            password: false,
            crp: true,
            id: true,
            availabilities: true
         }
      });
      return user;
   }
   static async updateById(id: string, body: any) {
      const user = await prisma.user.update({
         where: {
            id: id
         },
         data: {
            ...body
         }
      });
      return user;
   }
   static async deleteById(id: string) {
      const deletedUser = await prisma.user.delete({
         where: {
            id: String(id)
         }
      });
      return deletedUser;
   }
}
