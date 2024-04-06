import { lora } from "@/app/layout";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function PrayerForm() {
  const addPrayerRequest = async (formData: FormData) => {
    "use server";

    await prisma.prayerRequest.create({
      data: {
        name: formData.get("name"),
        email: formData.get("email"),
        prayer: formData.get("prayer"),
      },
    });
  };

  return (
    <form
      action={addPrayerRequest}
      className="flex flex-col gap-4 w-fit justify-center items-center"
    >
      <h1 className={`${lora.className} text-3xl`}>Prayer Request:</h1>
      <input
        className="border-[1.5px] border-black rounded-lg p-1 w-full"
        placeholder="Name"
        type="name"
        name="name"
        required
      />
      <input
        className="border-[1.5px] border-black rounded-lg p-1 w-full"
        placeholder="Email"
        type="Email"
        name="email"
        required
      />
      <textarea
        className="border-[1.5px] border-black rounded-lg p-1"
        placeholder="Prayer request"
        rows={5}
        cols={30}
        name="prayer"
        required
      />
      <button
        className={`${lora.className} bg-cream py-2 px-10 border-[1.5px] border-black rounded-lg uppercase w-full`}
      >
        Submit
      </button>
    </form>
  );
}
