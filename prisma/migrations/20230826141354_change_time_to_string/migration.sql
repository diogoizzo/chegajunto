-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Availability" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dayOfWeek" TEXT NOT NULL,
    "time" TEXT NOT NULL
);
INSERT INTO "new_Availability" ("dayOfWeek", "id", "time") SELECT "dayOfWeek", "id", "time" FROM "Availability";
DROP TABLE "Availability";
ALTER TABLE "new_Availability" RENAME TO "Availability";
CREATE UNIQUE INDEX "Availability_dayOfWeek_time_key" ON "Availability"("dayOfWeek", "time");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
