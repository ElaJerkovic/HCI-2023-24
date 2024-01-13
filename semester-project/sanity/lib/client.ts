import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  //token: "sksKFbonF7Jtgk80Ca6u9Hl9FjqKdrp7X9F2cGVBmC7hZPFtkBA0KOGW2e6Y2hFLXSa1s3ESmvPHAWak4clXEn4FDgPplJMI8yXbRfUBvGEeLrN9QA9E0Xb7NGZyeuKmFo9CRklBNpKPCqmGVojs1VfKdpTjYIF6VpYSS3qJr8qr7i7Y8yGw"
})
