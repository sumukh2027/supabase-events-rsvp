import { supabase } from "@/lib/supabaseclient";

export default async function RSVPPage({ params }: { params: { id: string } }) {
  const { data: event } = await supabase
    .from("events")
    .select("*")
    .eq("id", params.id)
    .single();

  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-500">
          {/* Page Heading */}
      <div className="bg-blue-200 p-6 max-w-md w-full shadow-lg rounded-xl">
  {/* Page Heading */}
  <h1 className="text-3xl font-bold mb-6 text-center text-black">RSVP</h1>

  {/* Event Title */}
  <h2 className="text-xl font-semibold mb-4 text-gray-700">
    {event?.title}
  </h2>

  {/* RSVP Form */}
  <form
    action={`/api/rsvp`}
    method="POST"
    className="flex flex-col gap-4"
  >
    <input type="hidden" name="eventId" value={event?.id} />

    <input
      name="name"
      placeholder="Your name"
      required
      className="border border-gray-800 bg-white placeholder-gray-500 text-black p-2 rounded-md focus:border-black focus:ring-1 focus:ring-blue outline-none"
    />

    <input
      name="email"
      type="email"
      placeholder="Your email"
      required
      className="border border-gray-800 bg-white placeholder-gray-500 text-black p-2 rounded-md focus:border-black focus:ring-1 focus:ring-blue outline-none"
    />

    <select
      name="status"
      required
      className="border border-gray-800 bg-white text-black p-2 rounded-md focus:border-black focus:ring-1 focus:ring-blue outline-none"
    >
      <option value="" className="text-gray-500">Select your response</option>
      <option value="Yes" className="text-black">Yes</option>
      <option value="No" className="text-black">No</option>
      <option value="Maybe" className="text-black">Maybe</option>
    </select>

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
    >
      Submit
    </button>
  </form>
</div>
    </main>
  );
}
