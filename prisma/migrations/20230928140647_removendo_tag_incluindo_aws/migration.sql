/*
  Warnings:

  - You are about to drop the column `googleDriveId` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ConsultationToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DocumentToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PatientToTag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `awsFileName` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ConsultationToTag" DROP CONSTRAINT "_ConsultationToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConsultationToTag" DROP CONSTRAINT "_ConsultationToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_DocumentToTag" DROP CONSTRAINT "_DocumentToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_DocumentToTag" DROP CONSTRAINT "_DocumentToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_PatientToTag" DROP CONSTRAINT "_PatientToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_PatientToTag" DROP CONSTRAINT "_PatientToTag_B_fkey";

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "googleDriveId",
ADD COLUMN     "awsFileName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "_ConsultationToTag";

-- DropTable
DROP TABLE "_DocumentToTag";

-- DropTable
DROP TABLE "_PatientToTag";
