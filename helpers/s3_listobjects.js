require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');

const bucketName = process.env.AWS_BUCKET_NAME;

const s3 = new S3({ apiVersion: '2006-03-01' });

const bucketParams = {
  Bucket: bucketName,
};

s3.listObjects(bucketParams, function (err, data) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data);
  }
});
