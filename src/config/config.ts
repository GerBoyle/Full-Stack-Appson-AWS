export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGREESS_DATABASE,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_region": "eu-west-1a",
    "aws_profile": "default",
    "aws_media_bucket": process.env.POSTGRESS_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
