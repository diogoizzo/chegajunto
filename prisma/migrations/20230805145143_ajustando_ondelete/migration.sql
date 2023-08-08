-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dayOfWeek" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "professionalUserId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    CONSTRAINT "Appointment_professionalUserId_fkey" FOREIGN KEY ("professionalUserId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Appointment" ("dayOfWeek", "id", "patientId", "professionalUserId", "time") SELECT "dayOfWeek", "id", "patientId", "professionalUserId", "time" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
CREATE TABLE "new_Document" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "uploadedByUserId" TEXT,
    "belongsToPatientId" TEXT NOT NULL,
    CONSTRAINT "Document_uploadedByUserId_fkey" FOREIGN KEY ("uploadedByUserId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Document_belongsToPatientId_fkey" FOREIGN KEY ("belongsToPatientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Document" ("belongsToPatientId", "createdAt", "description", "id", "type", "updatedAt", "uploadedByUserId", "url") SELECT "belongsToPatientId", "createdAt", "description", "id", "type", "updatedAt", "uploadedByUserId", "url" FROM "Document";
DROP TABLE "Document";
ALTER TABLE "new_Document" RENAME TO "Document";
CREATE TABLE "new_Patient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "birthday" DATETIME,
    "birthplace" TEXT,
    "education" TEXT,
    "school" TEXT,
    "scholarship" BOOLEAN,
    "isMedicated" BOOLEAN,
    "medication" TEXT,
    "interviewedByUserId" TEXT,
    "complaint" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "cpf" TEXT,
    "status" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT NOT NULL,
    "observation" TEXT,
    "underResponsibilityOfUserId" TEXT,
    CONSTRAINT "Patient_interviewedByUserId_fkey" FOREIGN KEY ("interviewedByUserId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Patient_underResponsibilityOfUserId_fkey" FOREIGN KEY ("underResponsibilityOfUserId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Patient" ("address", "birthday", "birthplace", "complaint", "cpf", "createdAt", "education", "email", "id", "interviewedByUserId", "isMedicated", "medication", "name", "observation", "phone", "scholarship", "school", "status", "underResponsibilityOfUserId", "updatedAt") SELECT "address", "birthday", "birthplace", "complaint", "cpf", "createdAt", "education", "email", "id", "interviewedByUserId", "isMedicated", "medication", "name", "observation", "phone", "scholarship", "school", "status", "underResponsibilityOfUserId", "updatedAt" FROM "Patient";
DROP TABLE "Patient";
ALTER TABLE "new_Patient" RENAME TO "Patient";
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
