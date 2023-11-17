import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const ensureDataIsValidMiddleware =
  (schema: ZodTypeAny) =>
  (request: Request, response: Response, next: NextFunction): void => {
    const validatedBody = schema.parse(request.body);
    request.body = validatedBody;
    return next();
  };

export { ensureDataIsValidMiddleware };
