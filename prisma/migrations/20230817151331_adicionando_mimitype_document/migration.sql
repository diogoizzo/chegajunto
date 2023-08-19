/*
  Warnings:

  - Added the required column `mimeType` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Document" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "uploadedByUserId" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "belongsToPatientId" TEXT NOT NULL,
    "googleDriveId" TEXT NOT NULL,
    CONSTRAINT "Document_uploadedByUserId_fkey" FOREIGN KEY ("uploadedByUserId") REFERENCES "User" ("id") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "Document_belongsToPatientId_fkey" FOREIGN KEY ("belongsToPatientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Document" ("belongsToPatientId", "createdAt", "description", "googleDriveId", "id", "name", "type", "updatedAt", "uploadedByUserId") SELECT "belongsToPatientId", "createdAt", "description", "googleDriveId", "id", "name", "type", "updatedAt", "uploadedByUserId" FROM "Document";
DROP TABLE "Document";
ALTER TABLE "new_Document" RENAME TO "Document";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
