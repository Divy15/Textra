// controllers/uploadController.js
const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3");
const config = require("config");
const path = require("path");

const s3Client = new S3Client({
  region: config.get("APP.AWS.REGION"),
  credentials: {
    accessKeyId: config.get("APP.AWS.ACCESS_KEY"),
    secretAccessKey: config.get("APP.AWS.SECRET_KEY"),
  },
});

async function uploadDocumentController(req, res, next) {
  try {
    // 1. Check if a file was actually passed by Multer middleware
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error_type: "user_error",
        message: "No document file detected in request payload."
      });
    }

    // 2. Generate a totally unique file name to avoid overwriting existing files
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(req.file.originalname);
    const s3Key = `onboarding/documents/${uniqueSuffix}${fileExtension}`;

    // 3. Build the upload payload parameter map
    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: s3Key,
      Body: req.file.buffer,         // Binary memory buffer from Multer
      ContentType: req.file.mimetype // Ensures files preview correctly instead of downloading
    };

    // 4. Fire the upload execution pipeline to AWS S3
    await s3Client.send(new PutObjectCommand(uploadParams));

    // 5. Construct the permanent public URL pointing to the new object location
    const documentUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;

    return res.status(201).json({
      success: true,
      message: "File successfully dispatched to object storage cloud storage.",
      data: {
        file_name: req.file.originalname,
        s3_key: s3Key,
        url: documentUrl // Return this to frontend or save it straight to your Postgres database
      }
    });

  } catch (error) {
    // Pass execution directly into your custom globalErrorHandler middleware we fixed earlier!
    next(error);
  }
}

module.exports = { uploadDocumentController };