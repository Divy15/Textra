/*
  Warnings:

  - A unique constraint covering the columns `[uuid,email]` on the table `business_owner` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid,mobile]` on the table `business_owner` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "business_owner_email_key";

-- DropIndex
DROP INDEX "business_owner_mobile_key";

-- CreateIndex
CREATE UNIQUE INDEX "business_owner_uuid_email_key" ON "business_owner"("uuid", "email");

-- CreateIndex
CREATE UNIQUE INDEX "business_owner_uuid_mobile_key" ON "business_owner"("uuid", "mobile");
