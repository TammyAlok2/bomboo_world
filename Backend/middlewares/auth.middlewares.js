
import jwt from "jsonwebtoken";

import AppError from "../utils/AppError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

export const isLoggedIn = asyncHandler(async (req, _res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("Unauthorized, please login to continue", 401));
  }

  const token = authHeader.split(" ")[1];

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return next(new AppError("Invalid or expired token", 401));
  }

  req.user = decoded;

  next();
});

export const authorizeRoles = (...roles) =>

    asyncHandler(async (req, _res, next) => {
        console.log(roles)
        console.log(req.user)
      if (!roles.includes(req.user.role)) {
        return next(
          new AppError("You do not have permission to view this route", 403)
        );
      }
  
      next();
    });