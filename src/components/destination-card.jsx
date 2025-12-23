import Image from "next/image";
import img from "../../public/istockphoto-466090186-612x612.jpg";
import Link from "next/link";
import { Edit, Delete } from "lucide-react";

export default function DestinationCard({ show = false }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-card">
      <Image
        src={img}
        alt="Cairo"
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4 mt-4">
        <h3 className="text-xl font-semibold mb-2">Cairo</h3>
        <p className="text-muted-foreground mb-4">
          Discover the bustling capital of Egypt, home to the iconic Pyramids of Giza and the Sphinx.
        </p>
        <p className="text-muted-foreground mb-4">middle of Egypt</p>
      </div>
      {show && (
        <div className="flex w-full justify-between">
          <Link
            href="/dashboard/destinations/edit-destination/1"
            className="bg-card text-card-foreground hover:opacity-90 px-1 py-1 transition duration-300 rounded-md mx-4 mb-4 flex items-center border w-[100px] justify-center"
          >
            <Edit className="mr-3 h-4 w-4" />
            Edit
          </Link>
          <button className="cursor-pointer px-2 py-1 transition duration-300 rounded-md text-card-foreground hover:opacity-90 mx-4 mb-4 border flex items-center w-[100px] justify-center">
            <Delete className="mr-3 h-4 w-4 text-destructive" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
