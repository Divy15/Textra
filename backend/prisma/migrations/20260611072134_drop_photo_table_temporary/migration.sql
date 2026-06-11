/*
  Warnings:

  - You are about to drop the `business_photo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "business_photo" DROP CONSTRAINT "business_photo_uuid_fkey";

-- DropTable
DROP TABLE "business_photo";
