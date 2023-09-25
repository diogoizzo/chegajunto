import prisma from '../lib/prisma';
export default class AppointmentRepository {
   static async getAll() {
      try {
         const appointments = await prisma.appointment.findMany({
            include: {
               professional: true,
               patient: true
            }
         });
         return appointments;
      } catch (error) {
         console.log(error);
      }
   }
   static async create(body: any) {
      try {
         const appointment = prisma.appointment.create({
            data: {
               ...body
            }
         });
         return appointment;
      } catch (error) {
         console.log(error);
      }
   }
   static async findById(id: string) {
      try {
         const appointment = await prisma.appointment.findUnique({
            where: {
               id: id
            },
            include: {
               professional: true,
               patient: true
            }
         });
         return appointment;
      } catch (error) {
         console.log(error);
      }
   }
   static async delete(id: string) {
      try {
         const deletedAppointment = await prisma.appointment.delete({
            where: {
               id: id
            },
            include: {
               patient: true
            }
         });
         return deletedAppointment;
      } catch (error) {
         console.log(error);
      }
   }
}
