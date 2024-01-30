import Navbar from "./Navbar";
import Link from "next/link";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <footer className="mb-0 flex w-full items-center bg-blue-900 py-10">
        <ul className="flex h-full w-full flex-col flex-wrap items-center justify-center gap-5 text-xs text-white sm:h-1/2 sm:flex-row sm:text-sm">
          <Link
            className="w-full max-w-[150px] whitespace-nowrap border-b border-blue-900 py-2 text-center hover:border-b hover:border-white active:scale-90 active:border-white sm:w-1/5"
            href="/"
          >
            Home
          </Link>
          <Link
            className="w-full max-w-[150px] whitespace-nowrap border-b border-blue-900 py-2 text-center hover:border-b hover:border-white active:scale-90 active:border-white sm:w-1/5"
            href="/calendar"
          >
            Calendar
          </Link>
          <Link
            className="w-full max-w-[150px] whitespace-nowrap border-b border-blue-900 py-2 text-center hover:border-b hover:border-white active:scale-90 active:border-white sm:w-1/5"
            href="/mamas-paradise"
          >
            Mama's Paradise
          </Link>
          <Link
            className="w-full max-w-[150px] whitespace-nowrap border-b border-blue-900 py-2 text-center hover:border-b hover:border-white active:scale-90 active:border-white sm:w-1/5"
            href="/sunset-oasis"
          >
            Sunset Oasis
          </Link>
        </ul>
      </footer>
    </>
  );
}
