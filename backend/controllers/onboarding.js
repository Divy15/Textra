const { prisma } = require("../db/prisma");
const crypto = require("crypto");
const { logControllerError } = require("../utils/logger");

async function onboardingStoreBusinessOwnerDetails(req, res, next) {
  try {
    const { registrationType, owners } = req.body;

    // Generate a fresh UUID for the new business onboarding session
    const businessUuid = crypto.randomUUID();

    // Execute the PostgreSQL function via Prisma Raw
    // Use JSON.stringify and cast to ::jsonb so Postgres understands the array structure
    await prisma.$executeRaw`
                SELECT onboarding_store_business_owner_details(
                    ${businessUuid}, 
                    ${registrationType}, 
                    ${JSON.stringify(owners)}::jsonb
                );
            `;

    // Return clean success response along with the generated UUID
    return res.status(201).json({
      success: true,
      message:
        "Business onboarding details and owner records saved successfully.",
      data: {
        businessUuid: businessUuid,
      },
    });
  } catch (error) {
    await logControllerError({
      req,
      api: "/api/business/onboard",
      user_footprint: req.headers["user-agent"] || "Shopkeeper_App",
      error_type: "critical",
      project_name: "Textra",
      error_id: "controllers_business_onboardingStoreBusinessOwnerDetails",
      error: error,
    });

    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}

module.exports = {
  onboardingStoreBusinessOwnerDetails,
};
