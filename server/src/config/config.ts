import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  webtoken: process.env.JWT_SECRET,
  client: process.env.CLIENT_URL,
  redis: {
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    redisUsername: process.env.REDIS_USERNAME,
    redisPassword: process.env.REDIS_PASSWORD,
    redisDb: process.env.REDIS_DATABASE,
    bind: process.env.REDIS_BIND,
  }
};

export default config;
