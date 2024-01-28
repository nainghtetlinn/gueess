'use client'

import { BsInfoCircle, BsHouseDoor, BsController } from 'react-icons/bs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navlinks = [
  { icon: <BsHouseDoor />, label: 'Home', href: '/' },
  { icon: <BsController />, label: 'How to', href: '/howtoplay' },
  { icon: <BsInfoCircle />, label: 'About', href: 'about' },
]

const AppNav = () => {
  const pathname = usePathname()

  return (
    <nav className='container navbar mx-auto justify-between'>
      <div>
        <Link
          href='/'
          className='text-2xl font-bold'
        >
          Gueess
        </Link>
      </div>

      <ul className='flex flex-row'>
        {navlinks.map(n => (
          <li
            key={n.label}
            className={`${n.href === '/' ? 'hidden sm:block' : ''}`}
          >
            <Link
              href={n.href}
              className={`btn btn-primary btn-sm ${pathname === n.href ? '' : 'btn-ghost'}`}
            >
              {n.icon}
              {n.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default AppNav
