# Aoe 4 production calculator

This project is deployed here [Aoe 4 production calculator](https://www.aoe4-production-calculator.com/).

## Available Scripts

In the project directory, you can run:

- `npm start`
- `npm test`
- `npm run build`

## Deploy

- `aws s3 sync .\build s3://aoe4-production-calculator.com --delete`
- `aws cloudfront create-invalidation --distribution-id E22M9EEIZ4GZ2R --paths "/*"`
- `aws cloudfront list-invalidations --distribution-id E22M9EEIZ4GZ2R`