// middlewares/errorHandler.js
const { isCelebrateError } = require('celebrate');
const dbModule = require('../db/prisma');

async function globalErrorHandler(err, req, res, next) {
    let errorType = "critical";
    let statusCode = 500;
    let errorMessage = "An unexpected database or server error occurred.";
    let errorDetails = { message: err.message, stack: err.stack };

    console.log("database level error1:",err);

    // 1. Check if error is from the 'celebrate' NPM package validation
    if (isCelebrateError(err)) {
        errorType = "user_error";
        statusCode = 400;
        errorMessage = "Validation Failed: Please verify your input parameters.";
        
        errorDetails = {};
        // Extract validation messages from body, query, or params
        for (const [segment, joiError] of err.details.entries()) {
            errorDetails[segment] = joiError.details.map(detail => detail.message);
        }
    }

// Safely extract prisma
const prisma = dbModule.prisma; 

    try {
        // 2. Save the error details to your database table
        await prisma['errorLog'].create({
            data: {
                project_name: "Textra_Backend",
                error_id: isCelebrateError(err) ? "middleware_celebrate_validation" : "global_unhandled_exception",
                error_type: errorType,
                user_footprint: req.ip || "unknown",
                api: req.originalUrl,
                req_body: req.body ? req.body : {},
                req_params: req.params ? req.params : {},
                req_query: req.query ? req.query : {},
                error: errorDetails
            }
        });
    } catch (dbLogErr) {
        console.error("FAILED TO WRITE LOG TO DB:", dbLogErr);
    }

    // 3. Send structured response back to client application
    return res.status(statusCode).json({
        success: false,
        error_type: errorType,
        message: errorMessage,
        details: errorType === "user_error" ? errorDetails : undefined
    });
}

module.exports = globalErrorHandler;