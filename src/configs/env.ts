import { config } from "dotenv";
config();

export const ENV = {
  JWT_SECRET: process.env.JWT_SECRET ?? "",
  APP_DOMAIN: process.env.APP_DOMAIN ?? "",

  DB_HOST: process.env.DB_HOST ?? "localhost",
  DB_USERNAME: process.env.DB_USERNAME ?? "",
  DB_PASSWORD: process.env.DB_PASSWORD ?? "",
  DB_NAME: process.env.DB_NAME ?? "playmusic",

  CLOUD_NAME: process.env.CLOUD_NAME ?? "",
  CLOUD_KEY: process.env.CLOUD_KEY ?? "",
  CLOUD_SECRET: process.env.CLOUD_SECRET ?? "",

  APP_NAME: process.env.APP_NAME ?? "",
};

export default ENV;
