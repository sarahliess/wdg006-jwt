import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

const verifyToken = asyncHandler(async (req, res, next) => {
  console.log(req.cookies);
  const {
    cookies: { authtoken },
  } = req;
  if (!authtoken) throw new ErrorResponse("Please login", 401);
  const { _id } = jwt.verify(authtoken, process.env.JWT_SECRET);
  req.userId = _id;
  next();
});

export default verifyToken;
