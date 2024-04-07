import React from "react";
import { useFormStatus } from "react-dom";

export default function PrayerSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className={`bg-cream py-2 px-10 border-[1.5px] border-black rounded-lg uppercase w-full`}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
