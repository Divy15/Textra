/*
  Warnings:

  - You are about to drop the column `photo_id` on the `business_photo` table. All the data in the column will be lost.
  - Added the required column `photoname` to the `business_photo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `s3_key` to the `business_photo` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "business_photo_photo_id_key";

-- AlterTable
ALTER TABLE "business_photo" DROP COLUMN "photo_id",
ADD COLUMN     "photoname" TEXT NOT NULL,
ADD COLUMN     "s3_key" TEXT NOT NULL;
