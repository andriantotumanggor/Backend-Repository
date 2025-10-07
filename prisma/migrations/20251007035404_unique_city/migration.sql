/*
  Warnings:

  - A unique constraint covering the columns `[city]` on the table `Temperature` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Temperature_city_key" ON "Temperature"("city");
