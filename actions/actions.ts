'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/lib/db';
import { PrayerSchema } from '@/lib/zod-types';

export const addPrayerRequest = async (
  newPrayerRequest: unknown
): Promise<{ success?: true; error?: string }> => {
  const result = PrayerSchema.safeParse(newPrayerRequest);

  if (!result.success) {
    const errorMessage = result.error.issues
      .map((issue) => `${issue.path[0]}: ${issue.message}`)
      .join('. ');
    return { error: errorMessage };
  }

  const validData = result.data;

  try {
    await prisma.prayerRequest.create({ data: validData });
    revalidatePath('/admin/prayers');
    return { success: true };
  } catch (dbError) {
    return { error: 'Failed to save the prayer request. Please try again.' };
  }
};

export const deletePrayerRequest = async (
  id: number
): Promise<{ success?: true; error?: string }> => {
  try {
    await prisma.prayerRequest.delete({
      where: { id },
    });

    try {
      await revalidatePath('/admin/prayers');
    } catch (revalidationError) {
      console.error('Revalidation failed:', revalidationError);
    }

    return { success: true };
  } catch (error) {
    console.error('Error deleting prayer request:', error);
    return { error: 'Prayer request could not be deleted. Please try again.' };
  }
};
