export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": "udagramboyledev",
    "database": "udagramboyledev",
    "host": "udagramboyledev.c2vgbioeyplt.eu-west-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "eu-west-1a",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-boyle-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
