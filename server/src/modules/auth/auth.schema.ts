import { object, string, TypeOf } from "zod";

export const LoginSchema = {
  body: object({
    email: string({
      required_error: "Email is required",
    }).email("NOt a valid email"),
    password: string({
      required_error: "Password is required",
    })
      .min(6, "Password must be at least 6 characters")
      .max(64, "Password must not be longer than 64 characters"),
  }),
};

export type LoginBody = TypeOf<typeof LoginSchema.body>;
