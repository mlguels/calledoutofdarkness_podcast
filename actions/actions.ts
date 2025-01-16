'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/lib/db';
import { PrayerSchema } from '@/lib/zod-types';

export const addPrayerRequest = async (
  newPrayerRequest: unknown
): Promise<{ success?: true; error?: string }> => {
  const { success, data, error } = PrayerSchema.safeParse(newPrayerRequest);

  if (!success) {
    const errorMessage = error.issues
      .map((issue) => `${issue.path[0]}: ${issue.message}`)
      .join('. ');

    return { error: errorMessage };
  }

  try {
    await prisma.prayerRequest.create({ data });
    revalidatePath('/admin/prayers');
    return { success: true };
  } catch (dbError) {
    return { error: 'Failed to save the prayer request. Please try again.' };
  }
};

export const deletePrayerRequest = async (id: number) => {
  try {
    await prisma.prayerRequest.delete({
      where: { id },
    });
  } catch (error) {
    return {
      error: 'Prayer cannot be deleted',
    };
  }

  revalidatePath('/admin/prayers');
};
