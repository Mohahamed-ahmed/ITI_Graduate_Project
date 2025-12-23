import Link from "next/link";
import { Calendar, Users, User, Phone, Mail, DollarSign } from "lucide-react";

export default function ReservationCard({ reservation }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm mb-4 bg-card">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <User className="text-primary w-6 h-6" />
          <h2 className="text-xl font-semibold">Reservation for {reservation.name}</h2>
        </div>
        <div className="py-0.5 px-2 bg-primary rounded-md hover:opacity-90 transition">
          <p className="text-primary-foreground">Confirmed</p>
        </div>
      </div>
      <p className="mb-1">
        <Calendar className="inline-block mr-2 w-4 h-4" />
        Date: {reservation.date}
      </p>
      <p className="mb-1">
        <Calendar className="inline-block mr-2 w-4 h-4" />
        Booked on: {reservation.booked_on}
      </p>
      <p className="mb-1">
        <Users className="inline-block mr-2 w-4 h-4" />
        Guests: {reservation.guests}
      </p>
      <p className="mb-1">
        <Phone className="inline-block mr-2 w-4 h-4" />
        Contact: {reservation.contact}
      </p>
      <p className="mb-1">
        <DollarSign className="inline-block mr-2 w-4 h-4" />
        Total: {reservation.total}
      </p>
      <p className="mb-1">
        <Mail className="inline-block mr-2 w-4 h-4" />
        Email: {reservation.email}
      </p>
      <div className="mt-6">
        <Link
          href={`/dashboard/reservations/${reservation.id}`}
          className="bg-primary px-2 py-1 text-primary-foreground border rounded-sm hover:opacity-90 transition cursor-pointer"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
