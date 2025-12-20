import BookingForm from "@/components/booking-form";
import BookingSummary from "@/components/booking-summary";
import Link from "next/link";

export default function BookFormPage() {
  return (
    <main className="bg-background">
      <section className="container mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <nav className="mb-3 text-sm text-muted-(--foreground)">
              <Link href="/packs/aswan-1" className="text-red-500 hover:underline">
                ← Back to Package
              </Link>
            </nav>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="col-span-2">
              <BookingForm />
            </div>
            <div className="col-span-1">
              <BookingSummary />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
