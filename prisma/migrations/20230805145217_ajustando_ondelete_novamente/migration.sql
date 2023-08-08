-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Consultation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "patientAbsent" BOOLEAN NOT NULL,
    "observation" TEXT,
    "professionalUserId" TEXT,
    "patientId" TEXT NOT NULL,
    CONSTRAINT "Consultation_professionalUserId_fkey" FOREIGN KEY ("professionalUserId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Consultation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Consultation" ("createdAt", "id", "observation", "patientAbsent", "patientId", "professionalUserId", "updatedAt") SELECT "createdAt", "id", "observation", "patientAbsent", "patientId", "professionalUserId", "updatedAt" FROM "Consultation";
DROP TABLE "Consultation";
ALTER TABLE "new_Consultation" RENAME TO "Consultation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
