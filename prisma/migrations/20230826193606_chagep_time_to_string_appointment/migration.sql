-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dayOfWeek" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "professionalUserId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    CONSTRAINT "Appointment_professionalUserId_fkey" FOREIGN KEY ("professionalUserId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Appointment" ("dayOfWeek", "id", "patientId", "professionalUserId", "time") SELECT "dayOfWeek", "id", "patientId", "professionalUserId", "time" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
