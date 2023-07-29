"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = void 0;
const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};
exports.notFound = notFound;
const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
    if (err.name === "CastError" && err.kind === "ObjectId") {
        message = "Resource not found";
        statusCode = 404;
    }
    if (err instanceof Error)
        console.log(err.message);
    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === "production" ? "Wahh" : err.stack,
    });
};
exports.errorHandler = errorHandler;
