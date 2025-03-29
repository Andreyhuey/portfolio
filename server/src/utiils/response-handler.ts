import { Response } from "express";

export const successResponse = <T>(
  res: Response,
  message: string = "Success",
  data: T = {} as T,
  statusCode: number = 200
): Response => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (
  res: Response,
  message: string = "An error occurred",
  error: unknown = null,
  statusCode: number = 500
): Response => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: error instanceof Error ? error.message : error,
  });
};
