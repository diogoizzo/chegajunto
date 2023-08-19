/*
  Warnings:

  - Added the required column `googleDriveId` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Document" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "uploadedByUserId" TEXT,
    "belongsToPatientId" TEXT NOT NULL,
    "googleDriveId" TEXT NOT NULL,
    CONSTRAINT "Document_uploadedByUserId_fkey" FOREIGN KEY ("uploadedByUserId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Document_belongsToPatientId_fkey" FOREIGN KEY ("belongsToPatientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Document" ("belongsToPatientId", "createdAt", "description", "id", "type", "updatedAt", "uploadedByUserId", "url") SELECT "belongsToPatientId", "createdAt", "description", "id", "type", "updatedAt", "uploadedByUserId", "url" FROM "Document";
DROP TABLE "Document";
ALTER TABLE "new_Document" RENAME TO "Document";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
