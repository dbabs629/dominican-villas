"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  let router = usePathname();

  return (
    <nav className="flex h-14 border-b border-blue-50 shadow-lg shadow-blue-50">
      <ul className="flex w-full items-end justify-around text-center text-sm font-semibold text-primary lg:text-base">
        <span className="basis-1/3" />
        {/* <Link className="basis-1/2" href="/">
          Dominican Vacation
        </Link> */}
        <Link
          className={
            router == "/"
              ? "basis-1/5 border-b-[2px] border-primary px-6"
              : "basis-1/5 px-6"
          }
          href="/"
        >
          Home
        </Link>
        <Link
          className={
            router == "/calendar"
              ? "basis-1/5 border-b-[2px] border-primary px-6"
              : "basis-1/5 px-6"
          }
          href="/calendar"
        >
          Calendar
        </Link>
        <Link
          className={
            router == "/mamas-paradise"
              ? "basis-1/4 border-b-[2px] border-primary px-6"
              : "basis-1/4 px-6"
          }
          href="/mamas-paradise"
        >
          Mama's Paradise
        </Link>
        <Link
          className={
            router == "/sunset-oasis"
              ? "basis-1/4 border-b-[2px] border-primary px-6"
              : "basis-1/4 px-6"
          }
          href="/sunset-oasis"
        >
          Sunset Oasis
        </Link>
      </ul>
    </nav>
  );
}
