const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');

const bucketName = process.env.AWS_BUCKET_NAME;

const s3 = new S3({ apiVersion: '2006-03-01' });

const uploadToBucket = (file) => {
  
  const stream = fs.createReadStream(file.tempFilePath);

  const uploadParams = {
    Bucket: bucketName,
    Key: file.name,
    Body: stream,
  };
  return s3.upload(uploadParams).promise();
};

module.exports = { uploadToBucket };
