const { uploadToBucket } = require('../helpers/aws-S3');

const postUpload = async (req, res) => {
  try {
    const file = req.files.file;
    const result = await uploadToBucket(file);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { postUpload };
