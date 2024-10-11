// middleware/notFound.ts
import { Request, Response, NextFunction, json } from 'express';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const message = `Can't get '${req.originalUrl}'`;
  res.json({status:404,message:message});
};
