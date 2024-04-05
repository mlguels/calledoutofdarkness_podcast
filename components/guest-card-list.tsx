import { guests } from "@/constant/data";

import GuestCard from "./guest-card";

export default function GuestCardList() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 ">
      {guests.map((guest) => (
        <GuestCard key={guest.id} guest={guest} />
      ))}
    </section>
  );
}
