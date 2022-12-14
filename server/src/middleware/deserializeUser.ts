import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../modules/auth/auth.utils";

function deserializeUser(req: Request, res: Response, next: NextFunction) {
  const accessToken = (
    req.headers.authorization ||
    req.cookies.accessToken ||
    ""
  ).replace(/^Bearer\s/, "");

  if (!accessToken) return next();

  const decoded = verifyJwt(accessToken);

  if (decoded) {
    res.locals.user = decoded; // you can also use req.user but it makes TS angry :(
  }

  return next();
}

export default deserializeUser;
