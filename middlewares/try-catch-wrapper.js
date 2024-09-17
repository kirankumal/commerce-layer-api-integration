import { createCustomError } from "../errors/custom-errror.js";

export function tryCatchWrapper(func) {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (error) {
      console.log(error);
      
      return next(createCustomError(error, 400));
    }
  };
}