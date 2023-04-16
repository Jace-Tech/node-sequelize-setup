import { Application, Request, Response } from 'express';
import * as errorhandler from "strong-error-handler";
import { response } from '../utils';

export default (app: Application) => {
  app.use("*", (_: Request, res: Response) => {
    res.send(response("Invalid route", null, false))
  })

  app.use(
    errorhandler({
      debug: process.env.ENV !== "prod",
      log: true,
    })
  );
}
