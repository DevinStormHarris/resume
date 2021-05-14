# Cloud Resume (frontend)
devinstormharris.io

## About the Project
This project is the frontend for an entirely serverless application that runs on AWS. It displays my resume and has an automatic counter that tracks how many visitors the page has had. It is hosted on an S3 bucket, distributed via CloudFront and goes through Route53. I use GitHub Actions to sync this repo with the hosting S3 bucket and invalidate CloudFront each time there is a change. JavaScript is used to fetch through the API Gateway that controls the backend. The backend can be found at github.com/devinstormharris/backend_cloud_resume

### Built With
- HTML
- CSS
- JavaScript
- GitHub Actions
