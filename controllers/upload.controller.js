const { uploadToBucket } = require('../helpers/aws-S3');

const postUpload = async (req, res) => {
  // const bucket = req.body.bucket;
  const file = req.files.file;
// console.log(file);
  const result = await uploadToBucket(file);

  res.json(result);
};

module.exports = { postUpload };
