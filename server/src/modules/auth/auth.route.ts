import express from "express";
import { processRequestBody } from "zod-express-middleware";
import { loginHandler } from "./auth.controller";
import { LoginSchema } from "./auth.schema";

const router = express.Router();

router.post("/", processRequestBody(LoginSchema.body), loginHandler);

export default router;
