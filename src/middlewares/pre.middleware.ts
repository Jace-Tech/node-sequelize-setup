import cors from "cors";
import { Application } from "express";
import * as bodyParser from "body-parser";

export default async (app: Application) => {
  // middleware for parsing application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // middleware for json body parsing
  app.use(bodyParser.json({ limit: "5mb" }));

  app.use(cors({ origin: "*" }));

};
