import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import bodyParser from 'body-parser';

import morgan from 'morgan'
import { notFoundHandler } from "./middlewares/notFound";
import userRouter from './routes/user.router'
import stationRouter from './routes/station.router'
const app: Express = express();

//configuring express 

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("short"));
app.set("trust proxy", ["loopback", "linklocal", "uniquelocal"]);

//routes
app.use('/users',userRouter);
app.use('/stations',stationRouter)

app.all('*', notFoundHandler);

export default app