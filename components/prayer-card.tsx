import React from "react";

import { PrayerRequest } from "@prisma/client";
import PrayerDeleteButton from "./prayer-delete-btn";

export default function PrayerCard({ prayer }: { prayer: PrayerRequest }) {
  return (
    <section className="border-2 w-[350px] p-6 rounded-3xl h-auto flex flex-col justify-between gap-4 bg-pink-tertiary">
      <h1 className="font-semibold text-gray-400">
        Prayer Request from: {prayer.name}
      </h1>
      <p className="font-light break-words">Prayer Request: {prayer.prayer}</p>
      <p>
        Submitted:{" "}
        {new Date(Date.parse(prayer.createdAt.toString())).toLocaleString(
          "en-US",
          {
            weekday: "long",
            month: "long",
            day: "numeric",
          }
        )}{" "}
      </p>

      <PrayerDeleteButton prayerID={prayer.id} />
    </section>
  );
}
