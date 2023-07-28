-- CreateTable
CREATE TABLE "Patient" (
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
    "interviewedByUserId" TEXT NOT NULL,
    "complaint" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "cpf" TEXT,
    "address" TEXT,
    "phone" TEXT NOT NULL,
    "observation" TEXT,
    "underResponsibilityOfUserId" TEXT,
    CONSTRAINT "Patient_interviewedByUserId_fkey" FOREIGN KEY ("interviewedByUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Patient_underResponsibilityOfUserId_fkey" FOREIGN KEY ("underResponsibilityOfUserId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Availability" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dayOfWeek" TEXT NOT NULL,
    "time" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "uploadedByUserId" TEXT NOT NULL,
    "belongsToPatientId" TEXT NOT NULL,
    CONSTRAINT "Document_uploadedByUserId_fkey" FOREIGN KEY ("uploadedByUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Document_belongsToPatientId_fkey" FOREIGN KEY ("belongsToPatientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dayOfWeek" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "professionalUserId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    CONSTRAINT "Appointment_professionalUserId_fkey" FOREIGN KEY ("professionalUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "patientAbsent" BOOLEAN NOT NULL,
    "observation" TEXT,
    "professionalUserId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    CONSTRAINT "Consultation_professionalUserId_fkey" FOREIGN KEY ("professionalUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consultation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PatientToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PatientToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PatientToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AvailabilityToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AvailabilityToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Availability" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AvailabilityToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AvailabilityToPatient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AvailabilityToPatient_A_fkey" FOREIGN KEY ("A") REFERENCES "Availability" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AvailabilityToPatient_B_fkey" FOREIGN KEY ("B") REFERENCES "Patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_DocumentToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_DocumentToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Document" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DocumentToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ConsultationToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ConsultationToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Consultation" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ConsultationToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_PatientToTag_AB_unique" ON "_PatientToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PatientToTag_B_index" ON "_PatientToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AvailabilityToUser_AB_unique" ON "_AvailabilityToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AvailabilityToUser_B_index" ON "_AvailabilityToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AvailabilityToPatient_AB_unique" ON "_AvailabilityToPatient"("A", "B");

-- CreateIndex
CREATE INDEX "_AvailabilityToPatient_B_index" ON "_AvailabilityToPatient"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DocumentToTag_AB_unique" ON "_DocumentToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_DocumentToTag_B_index" ON "_DocumentToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ConsultationToTag_AB_unique" ON "_ConsultationToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ConsultationToTag_B_index" ON "_ConsultationToTag"("B");
