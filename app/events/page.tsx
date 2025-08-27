import { supabase } from "@/lib/supabaseclient";

export default async function EventsPage() {
  // fetch events from Supabase
  const { data: events, error } = await supabase
    .from("events")
    .select("id, title, description, date, city")
    .order("date", { ascending: true });

  if (error) {
    return <p className="text-red-500">Error loading events: {error.message}</p>;
  }

  return (
    <main className="p-6 bg-blue-500">
      <h1 className="text-2xl  font-bold mb-4">UPCOMING EVENTS</h1>

      {events && events.length > 0 ? (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event.id} className="p-4 border rounded-lg shadow-sm bg-blue-100">
              <h2 className="text-xl text-black font-semibold">{event.title}</h2>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500 font-bold">
                {event.city} — {new Date(event.date).toLocaleDateString()}
              </p>
              <a
                href={`/events/${event.id}/rsvp`}
                className="text-blue-500  hover:underline"
              >
                RSVP
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available.</p>
      )}
    </main>
  );
}
