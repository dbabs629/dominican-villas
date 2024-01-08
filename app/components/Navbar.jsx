'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  let router = usePathname()

  return (
    <nav className='flex border-b shadow-lg border-blue-50 h-14 shadow-blue-50'>
      <ul className='flex items-end justify-around w-full font-semibold text-primary lg:px-40'>
        <Link className='basis-1/2' href='/'>
          Logo
        </Link>
        <Link
          className={
            router == '/' ? 'border-b-[2px] border-primary px-6' : 'px-6'
          }
          href='/'>
          Home
        </Link>
        <Link
          className={
            router == '/calendar'
              ? 'border-b-[2px] border-primary px-6'
              : 'px-6'
          }
          href='/calendar'>
          Calendar
        </Link>
        <Link
          className={
            router == '/mamas-paradise'
              ? 'border-b-[2px] border-primary px-6'
              : 'px-6'
          }
          href='/mamas-paradise'>
          Mama's Paradise
        </Link>
        <Link
          className={
            router == '/sunset-oasis'
              ? 'border-b-[2px] border-primary px-6'
              : 'px-6'
          }
          href='/sunset-oasis'>
          Sunset Oasis
        </Link>
      </ul>
    </nav>
  )
}
