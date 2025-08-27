import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          ✅ Response Submitted!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your RSVP. We’ve recorded your response successfully.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Back to Events
        </Link>
      </div>
    </main>
  );
}
