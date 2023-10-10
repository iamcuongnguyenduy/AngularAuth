import jwt from "jsonwebtoken";
import { CreateSuccess } from "../utils/success.js";
import { CreateError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    // console.log(token);
    if (!token) {
      return next(CreateError(401, "You are not authenticated"));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return next(CreateError(403, "Token is not valid"));
      } else {
        req.user = user;
      }
      next();
    });
  } catch (error) {
    return next(CreateError(500, "Something went wrong"));
  }
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "Admin") {
      next();
    } else {
      return next(CreateError(401, "You are not authorized"));
    }
  });
};
