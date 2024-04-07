import prisma from "@/lib/db";

export default async function PrayerRequests() {
  const prayers = await prisma.prayerRequest.findMany({});

  return (
    <main>
      {prayers.map((prayer) => (
        <div key={prayer.id}>
          <h1 className="font-bold">Prayer from: {prayer.name}</h1>
          <p>Prayer Request: {prayer.prayer}</p>
          <p>Date: {prayer.createdAt.toString()} </p>
        </div>
      ))}
    </main>
  );
}
