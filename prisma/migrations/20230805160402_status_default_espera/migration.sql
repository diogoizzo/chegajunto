-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    "status" TEXT NOT NULL DEFAULT 'Espera',
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
