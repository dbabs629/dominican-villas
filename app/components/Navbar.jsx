"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  let router = usePathname();

  return (
    <nav className="flex h-14 max-w-full border-b border-blue-50 shadow-lg shadow-blue-50">
      <ul className="flex w-full items-end justify-around text-center text-xs font-semibold text-primary sm:text-sm lg:text-base">
        <span className="md:basis-1/4" />
        {/* <Link className="basis-1/2" href="/">
          Dominican Vacation
        </Link> */}
        <Link
          className={
            router == "/"
              ? "border-b-[2px] border-primary px-2 sm:px-6"
              : "px-2 sm:px-6"
          }
          href="/"
        >
          Home
        </Link>
        <Link
          className={
            router == "/calendar"
              ? "border-b-[2px] border-primary px-2 sm:px-6"
              : "px-2 sm:px-6"
          }
          href="/calendar"
        >
          Calendar
        </Link>
        <Link
          className={
            router == "/mamas-paradise"
              ? "border-b-[2px] border-primary px-2 sm:px-6"
              : "px-2 sm:px-6"
          }
          href="/mamas-paradise"
        >
          Mama's Paradise
        </Link>
        <Link
          className={
            router == "/sunset-oasis"
              ? "border-b-[2px] border-primary px-2 sm:px-6"
              : "px-2 sm:px-6"
          }
          href="/sunset-oasis"
        >
          Sunset Oasis
        </Link>
      </ul>
    </nav>
  );
}
