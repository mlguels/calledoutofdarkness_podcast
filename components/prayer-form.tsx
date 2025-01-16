'use client';

import toast from 'react-hot-toast';

import { addPrayerRequest } from '@/actions/actions';
import PrayerSubmitButton from './prayer-submit-btn';
import { PrayerSchema } from '@/lib/zod-types';
import { useRef } from 'react';

export default function PrayerForm() {
  const ref = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    const newPrayerRequest = {
      name: formData.get('name')?.toString().trim() ?? '',
      email: formData.get('email')?.toString().trim() ?? '',
      prayer: formData.get('prayer')?.toString().trim() ?? '',
    };

    // client site validation
    const result = PrayerSchema.safeParse(newPrayerRequest);
    if (!result.success) {
      const errorMessages = result.error.issues.map(
        (issue) => `${issue.path[0]}: ${issue.message}`
      );
      toast.error(errorMessages.join('. '));
      return;
    }

    const response = await addPrayerRequest(result.data);
    if (response?.error) {
      toast.error(response.error);
      return;
    }

    ref.current?.reset();
    toast.success('Prayer request submitted!');
  };

  return (
    <form
      ref={ref}
      action={clientAction}
      className="flex flex-col gap-4 w-fit justify-center items-center"
    >
      <h1 className={`text-3xl`}>Prayer Request:</h1>
      <input
        className="border-[1.5px] border-black rounded-lg p-1 w-full active:outline-blue-secondary focus:outline-blue-secondary"
        placeholder="Name"
        type="name"
        name="name"
      />
      <input
        className="border-[1.5px] border-black rounded-lg p-1 w-full active:outline-blue-secondary focus:outline-blue-secondary"
        placeholder="Email"
        type="Email"
        name="email"
      />
      <textarea
        className="border-[1.5px] border-black rounded-lg p-1 active:outline-blue-secondary focus:outline-blue-secondary"
        placeholder="Prayer request"
        rows={10}
        cols={30}
        name="prayer"
      />
      <PrayerSubmitButton />
    </form>
  );
}
