import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import connectDB from './config/db';
import morgan from 'morgan'
import { notFoundHandler } from "./middlewares/notFound";
import userRouter from './routes/user.router'
const app: Express = express();


connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("short"));
app.set("trust proxy", ["loopback", "linklocal", "uniquelocal"]);
app.use('/users',userRouter);

app.all('*', notFoundHandler);

export default app