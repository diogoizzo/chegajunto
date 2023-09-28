import { randomUUID } from 'crypto';
import s3 from 'aws-sdk/clients/s3';

const region = process.env.REGION;
const bucketName = process.env.BUCKET_NAME;
const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const bucket = new s3({
   apiVersion: '2006-03-01',
   region,
   accessKeyId,
   secretAccessKey,
   signatureVersion: 'v4'
});

export default class AwsServices {
   static async generateUrl(awsFileName: string) {
      const params = {
         Bucket: bucketName,
         Key: awsFileName,
         ContentType: 'application/pdf',
         Expires: 60
      };
      const url = await bucket.getSignedUrlPromise('putObject', params);
      return url;
   }
   static async delete(awsFileName: string) {
      const deleted = await bucket
         .deleteObject({ Bucket: String(bucketName), Key: awsFileName })
         .promise();
      return deleted;
   }
}
