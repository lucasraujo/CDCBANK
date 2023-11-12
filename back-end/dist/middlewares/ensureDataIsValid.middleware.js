"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureDataIsValidMiddleware = void 0;
const ensureDataIsValidMiddleware = (schema) => (request, response, next) => {
    const validatedBody = schema.parse(request.body);
    request.body = validatedBody;
    return next();
};
exports.ensureDataIsValidMiddleware = ensureDataIsValidMiddleware;
