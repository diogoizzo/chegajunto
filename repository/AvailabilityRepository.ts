import prisma from '../lib/prisma';
export default class AvailabilityRepository {
   static async createUserAvailability(
      userId: string,
      dayOfWeek: string,
      time: string
   ) {
      const newAvailabiliy = await prisma.user.update({
         where: {
            id: userId
         },
         data: {
            availabilities: {
               connectOrCreate: {
                  where: {
                     dayOfWeek_time: {
                        dayOfWeek: dayOfWeek,
                        time: time
                     }
                  },
                  create: {
                     dayOfWeek: dayOfWeek,
                     time: time
                  }
               }
            }
         }
      });
      return newAvailabiliy;
   }
   static async deleteUserAvailability(userId: string, availabilityId: string) {
      const deletedAvailability = await prisma.user.update({
         where: {
            id: userId
         },
         data: {
            availabilities: {
               disconnect: {
                  id: availabilityId
               }
            }
         }
      });
      return deletedAvailability;
   }
   static async createPatientAvailability(
      patientId: string,
      dayOfWeek: string,
      time: string
   ) {
      const newAvailabiliy = await prisma.patient.update({
         where: {
            id: patientId
         },
         data: {
            availabilities: {
               connectOrCreate: {
                  where: {
                     dayOfWeek_time: {
                        dayOfWeek: dayOfWeek,
                        time: time
                     }
                  },
                  create: {
                     dayOfWeek: dayOfWeek,
                     time: time
                  }
               }
            }
         }
      });
      return newAvailabiliy;
   }
   static async deletePatientAvailability(
      patientId: string,
      availabilityId: string
   ) {
      const deletedAvailability = await prisma.patient.update({
         where: {
            id: patientId
         },
         data: {
            availabilities: {
               disconnect: {
                  id: availabilityId
               }
            }
         }
      });
   }
   static async findCompatibility(dayOfWeek: string, time: string) {
      const availability = await prisma.availability.findUnique({
         where: {
            dayOfWeek_time: {
               dayOfWeek: dayOfWeek,
               time: time
            }
         },
         include: {
            patients: {
               where: {
                  status: 'Espera'
               },
               orderBy: {
                  createdAt: 'asc'
               }
            }
         }
      });
      return availability;
   }
   static async moveUserAvailabilityToAppointment(
      dayOfWeek: string,
      time: string,
      professionalUserId: string
   ) {
      try {
         const availability = prisma.availability.update({
            where: {
               dayOfWeek_time: {
                  dayOfWeek: dayOfWeek,
                  time: time
               }
            },
            data: {
               professionals: {
                  disconnect: {
                     id: professionalUserId
                  }
               }
            }
         });
         return availability;
      } catch (error) {
         console.log(error);
      }
   }
   static async recreateUserAvailability(deletedAppointment: any) {
      const recreatedUserAvailability = await prisma.user.update({
         where: {
            id: deletedAppointment.professionalUserId
         },
         data: {
            availabilities: {
               connectOrCreate: {
                  where: {
                     dayOfWeek_time: {
                        dayOfWeek: deletedAppointment.dayOfWeek,
                        time: deletedAppointment.time
                     }
                  },
                  create: {
                     dayOfWeek: deletedAppointment.dayOfWeek,
                     time: deletedAppointment.time
                  }
               }
            }
         }
      });
   }
}
