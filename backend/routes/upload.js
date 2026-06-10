const express = require("express");
const router = express.Router();
const multer = require("multer");
const uploadCtrl = require('../controllers/upload.js');

const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 25 * 1024 * 1024 } 
});

router.post(
  "/doc", 
  upload.single("document"), 
  uploadCtrl.uploadDocumentController
);

module.exports = router;