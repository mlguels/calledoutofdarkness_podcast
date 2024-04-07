import { z } from "zod";

export const PrayerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Please provide your name" })
    .max(255),
  email: z
    .string()
    .email()
    .min(1, { message: "Please provide your email" })
    .max(100),
  prayer: z
    .string()
    .trim()
    .min(1, { message: "Please provide your prayer request" })
    .max(1000),
});
