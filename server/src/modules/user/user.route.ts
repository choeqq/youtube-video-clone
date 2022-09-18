import express from "express";
import { processRequestBody } from "zod-express-middleware";
import { registerUserHandler } from "./user.controller";
import { RegisterUserSchema } from "./user.schema";

const router = express.Router();

router.post(
  "/",
  processRequestBody(RegisterUserSchema.body),
  registerUserHandler
);

export default router;
