-- CreateTable
CREATE TABLE "business_photo" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "photoname" TEXT NOT NULL,
    "s3_key" TEXT NOT NULL,
    "upload_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "business_photo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "business_photo" ADD CONSTRAINT "business_photo_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "business_uuid"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
