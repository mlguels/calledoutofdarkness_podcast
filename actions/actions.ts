"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/db";
import { PrayerSchema } from "@/lib/zod-types";

export const addPrayerRequest = async (newPrayerRequest: unknown) => {
  const result = PrayerSchema.safeParse(newPrayerRequest);
  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });

    return {
      error: errorMessage,
    };
  }

  await prisma.prayerRequest.create({
    data: result.data,
  });

  revalidatePath("/prayers");
};
