import { Router } from 'express';
import authRoutes from './auth.routes';


const mainRouter = Router()

// Routes Here
mainRouter.use("/auth", authRoutes)



export default mainRouter
