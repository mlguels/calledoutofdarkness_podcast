import prisma from "@/lib/db";

import PrayerCard from "@/components/prayer-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default async function PrayerRequests() {
  const prayers = await prisma.prayerRequest.findMany({});

  return (
    <main className="flex flex-col items-center gap-20 bg-cream h-screen p-10">
      <div className="text-center">
        <TextGenerateEffect words="Prayer Requests" />
      </div>
      <div className="grid md:grid-cols-2 gap-y-4 gap-x-6">
        {prayers.map((prayer) => (
          <PrayerCard prayer={prayer} key={prayer.id} />
        ))}
      </div>
    </main>
  );
}
