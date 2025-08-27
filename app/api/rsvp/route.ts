import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseadmin";

export async function POST(req: Request) {
  const formData = await req.formData();
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const status = formData.get("status") as string;
  const eventId = formData.get("eventId") as string;

  // upsert user
  const { data: user } = await supabaseAdmin
    .from("users")
    .upsert({ email, name })
    .select()
    .single();

  // upsert RSVP
  await supabaseAdmin
    .from("rsvps")
    .upsert({
      user_id: user.id,
      event_id: Number(eventId),
      status,
    });

  return NextResponse.redirect(`/events/${eventId}/rsvp`, 303);

// ✅ Redirect to success page
    return NextResponse.redirect("/success");
}