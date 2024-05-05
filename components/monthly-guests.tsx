import { lora } from "@/constant/constants";
import GuestCardList from "./guest-card-list";

export default function MonthlyGuests() {
  return (
    <main className="bg-pink-secondary text-center pt-10 pb-10">
      <h2 className={`${lora.className} text-4xl `}>This Months Guests</h2>
      <section className="pt-20">
        <GuestCardList />
      </section>
    </main>
  );
}
