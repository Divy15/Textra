// utils/logger.js
const { prisma } = require('../db/prisma');

/**
 * Global utility to log errors explicitly caught in Controller Catch blocks
 */
async function logControllerError({ req, api, user_footprint, error_type = "critical", project_name, error_id, error }) {
    try {
        await prisma.errorLog.create({
            data: {
                project_name: project_name || "Textra_Backend",
                error_id: error_id,
                error_type: error_type,
                user_footprint: user_footprint || req.ip || "unknown",
                api: api || req.originalUrl,
                req_body: req.body ? req.body : {},
                req_params: req.params ? req.params : {},
                req_query: req.query ? req.query : {},
                error: {
                    message: error.message,
                    stack: error.stack,
                    prismaCode: error.code || null
                }
            }
        });
    } catch (loggingFail) {
        // Fallback so the error logger itself doesn't crash your server
        console.error("CRITICAL: Error logging engine failed to write to DB:", loggingFail);
    }
}

module.exports = { logControllerError };