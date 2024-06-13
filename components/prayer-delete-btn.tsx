"use client";

import { useFormStatus } from "react-dom";

import { deletePrayerRequest } from "@/actions/actions";

export default function PrayerDeleteButton({ prayerID }: { prayerID: number }) {
  const { pending } = useFormStatus();
  return (
    <button
      onClick={() => deletePrayerRequest(prayerID)}
      className={`bg-red-400 text-white py-2 px-10 border-[1.5px] border-white rounded-lg uppercase w-full state-effect`}
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}
