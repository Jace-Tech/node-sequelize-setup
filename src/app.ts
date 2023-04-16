import express, { Response, Request } from 'express';
import preMiddleware from './middlewares/pre.middleware';
import errorMiddleware from './middlewares/error.middleware';
import { response } from './utils';
import ENV from './configs/env';
import mainRouter from './routes';


const app = express();

// Register pre-middleware
preMiddleware(app)

// Routes

// Home Route
app.get("/", (_: Request, res: Response) => {
  res.send(response(`Welcome to ${ENV.APP_NAME} API`))
})

// API Routes
app.use("/api/v1", mainRouter)

// Register error middlewares
errorMiddleware(app)


export default app
