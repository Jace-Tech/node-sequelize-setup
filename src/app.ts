import * as express from 'express';
import preMiddleware from './middlewares/pre.middleware';
import errorMiddleware from './middlewares/error.middleware';


const app = express();

// Register pre-middleware
preMiddleware(app)

// Routes

// Register error middlewares
errorMiddleware(app)


export default app
