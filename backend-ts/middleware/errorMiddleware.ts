import { NextFunction, Request, Response } from "express";
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource not found";
    statusCode = 404;
  }
  if (err instanceof Error) console.log(err.message);

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "Wahh" : err.stack,
  });
};
