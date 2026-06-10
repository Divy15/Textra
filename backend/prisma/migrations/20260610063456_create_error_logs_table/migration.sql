-- CreateTable
CREATE TABLE "error_logs" (
    "id" SERIAL NOT NULL,
    "project_name" TEXT NOT NULL,
    "error_id" TEXT NOT NULL,
    "error_type" TEXT NOT NULL,
    "error" JSONB NOT NULL,
    "user_footprint" TEXT,
    "api" TEXT NOT NULL,
    "req_body" JSONB,
    "req_params" JSONB,
    "req_query" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "error_logs_pkey" PRIMARY KEY ("id")
);
