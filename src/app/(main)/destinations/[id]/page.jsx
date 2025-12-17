"use client"
import { destinations } from "@/lib/mock-data";
import { useParams } from "next/navigation";

export default function DestinationDetailPage() {
     const params = useParams()
  const destination = destinations.find((d) => d.id === params.id)

  if (!destination) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <p>Destination not found</p>
        </div>
      </>
    )
  }
    return (
    <>
    <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
        <p className="text-lg">{destination.description}</p>
    </main>
    </>
    );
}