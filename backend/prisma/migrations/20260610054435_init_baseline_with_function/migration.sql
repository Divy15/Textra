-- CreateTable
CREATE TABLE "business_uuid" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "business_type" TEXT NOT NULL,
    "is_form_completed" BOOLEAN NOT NULL DEFAULT false,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "business_uuid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_owner" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "firstname" TEXT NOT NULL,
    "middlename" TEXT,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,

    CONSTRAINT "business_owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_photo" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "photo_id" TEXT NOT NULL,
    "upload_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "business_photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_owner_document" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "aadharcard_nu" TEXT NOT NULL,
    "aadharcard_photo_id" TEXT NOT NULL,
    "pancard_nu" TEXT NOT NULL,
    "pancard_photo_id" TEXT NOT NULL,

    CONSTRAINT "business_owner_document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_shop_document" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "gst_nu" TEXT,
    "gst_photo_id" TEXT,
    "shoplicense_nu" TEXT,
    "shoplicense_photo_id" TEXT,
    "udhayma_nu" TEXT,
    "udhayma_photo_id" TEXT,

    CONSTRAINT "business_shop_document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "business_uuid_uuid_key" ON "business_uuid"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "business_owner_email_key" ON "business_owner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "business_owner_mobile_key" ON "business_owner"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "business_photo_photo_id_key" ON "business_photo"("photo_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_owner_document_uuid_key" ON "business_owner_document"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "business_shop_document_uuid_key" ON "business_shop_document"("uuid");

-- AddForeignKey
ALTER TABLE "business_owner" ADD CONSTRAINT "business_owner_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "business_uuid"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_photo" ADD CONSTRAINT "business_photo_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "business_uuid"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_owner_document" ADD CONSTRAINT "business_owner_document_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "business_uuid"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_shop_document" ADD CONSTRAINT "business_shop_document_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "business_uuid"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- ... (Prisma's auto-generated CREATE TABLE scripts will be up here) ...

-- PASTE YOUR FUNCTION AT THE VERY BOTTOM:
CREATE OR REPLACE FUNCTION onboarding_store_business_owner_details(
    in_uuid CHARACTER VARYING,
    in_registration_type CHARACTER VARYING,
    in_owner_list JSONB
)
RETURNS VOID
LANGUAGE 'plpgsql'
SECURITY DEFINER

AS $$
BEGIN

    -- 1. Store generated business UUID
    INSERT INTO business_uuid (uuid, business_type, is_form_completed, is_verified)
    VALUES (in_uuid::UUID, in_registration_type, false, false);

    -- 2. Store all related owners from the JSONB array
    INSERT INTO business_owner (uuid, firstname, middlename, lastname, email, mobile)
    SELECT 
        in_uuid::UUID,
        x.firstname,   
        x.middlename,   -- Reading from JSON input
        x.lastname,
        x.email,
        x.mobile
    FROM jsonb_to_recordset(in_owner_list) AS x(
        firstname CHARACTER VARYING,
        middlename CHARACTER VARYING,
        lastname CHARACTER VARYING,
        email CHARACTER VARYING,
        mobile CHARACTER VARYING
    );

END;
$$;