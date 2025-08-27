import { supabase } from "@/lib/supabaseclient";

export default async function Home() {
  const { data: events } = await supabase
    .from("events")
    .select("id, title, date, city")
    .order("date", { ascending: true });

  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Upcoming Events
        </h1>

        <ul className="space-y-4">
          {events?.map((e) => (
            <li
              key={e.id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
            >
              <a
                href={`/events/${e.id}/rsvp`}
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600"
              >
                {e.title}
              </a>
              <p className="text-sm text-gray-600">
                {e.city} • {new Date(e.date).toDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
