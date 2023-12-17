'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  let router = usePathname()

  return (
    <nav className='flex bg-blue-50 h-14 border-b border-secondary shadow shadow-secondary'>
      <ul className='w-full flex justify-around text-primary items-end'>
        <Link className='basis-1/2' href='/'>
          Logo
        </Link>
        <Link
          className={router == '/' ? 'border-b border-primary px-6' : 'px-6'}
          href='/'>
          Home
        </Link>
        <Link
          className={
            router == '/calendar' ? 'border-b border-primary px-6' : 'px-6'
          }
          href='/calendar'>
          Calendar
        </Link>
        <Link
          className={
            router == '/mamas-paradise'
              ? 'border-b border-primary px-6'
              : 'px-6'
          }
          href='/mamas-paradise'>
          Mama's Paradise
        </Link>
        <Link
          className={
            router == '/sunset-oasis' ? 'border-b border-primary px-6' : 'px-6'
          }
          href='/sunset-oasis'>
          Sunset Oasis
        </Link>
      </ul>
    </nav>
  )
}
