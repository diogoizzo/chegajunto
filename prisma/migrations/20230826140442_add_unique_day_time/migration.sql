/*
  Warnings:

  - A unique constraint covering the columns `[dayOfWeek,time]` on the table `Availability` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Availability_dayOfWeek_time_key" ON "Availability"("dayOfWeek", "time");
