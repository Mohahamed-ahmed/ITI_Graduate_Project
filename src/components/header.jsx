import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/70 dark:bg-background/70 backdrop-blur-sm border-b border-border">
      <nav className="flex items-center justify-between max-w-7xl mx-auto h-16 px-4 md:px-8">
        <div>
          <p className="inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-md text-primary-foreground font-bold shadow-sm">
            <Link href="/">TWU</Link>
          </p>
        </div>
        <ul className="flex justify-between gap-6 items-center">
          <li>
            <Link href="/destinations" className="transition text-foreground hover:text-primary">
              Destinations
            </Link>
          </li>
          <li>
            <Link href="/packs" className="transition text-foreground hover:text-primary">
              Packages
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition text-foreground hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="transition text-foreground hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-between gap-4 items-center">
          <Link href="/login" className="transition text-foreground hover:text-primary cursor-pointer">
            Sign in
          </Link>
          <Link
            href="/book-form"
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-md text-primary-foreground hover:brightness-95 transition"
          >
            Book Now
          </Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
