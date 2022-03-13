import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

import { BsInfoCircle, BsHouseDoor, BsList, BsController } from 'react-icons/bs'

const Navmenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const container = useRef()
  const list = useRef()

  useEffect(() => {
    const height = list.current.offsetHeight + 'px'
    if (toggleMenu) {
      container.current.style.height = height
    } else container.current.style.height = 0
  }, [toggleMenu])

  return (
    <section className="container mx-auto">
      <nav className="border-b-2 sm:flex sm:items-center sm:justify-between">
        <article className="flex items-center justify-between px-5 py-2">
          <h4 className="text-skin-headline sm:text-3xl">Gueess</h4>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="rounded-sm hover:ring-4 sm:hidden"
          >
            <BsList size={26} />
          </button>
        </article>

        <article
          ref={container}
          className="overflow-hidden transition-all sm:hidden"
        >
          <ul ref={list} className="font-medium">
            <li className="border-b-2 border-transparent py-2 px-5 hover:bg-skin-highlight hover:text-skin-base">
              <Link href="/">
                <a className="flex items-center">
                  <BsHouseDoor className="mr-2" />
                  Home
                </a>
              </Link>
            </li>
            <li className="border-b-2 border-transparent py-2 px-5 hover:bg-skin-highlight hover:text-skin-base">
              <Link href="/howto">
                <a className="flex items-center">
                  <BsController className="mr-2" />
                  How to
                </a>
              </Link>
            </li>
            <li className="border-b-2 border-transparent py-2 px-5 hover:bg-skin-highlight hover:text-skin-base">
              <Link href="/about">
                <a className="flex items-center">
                  <BsInfoCircle className="mr-2" />
                  About
                </a>
              </Link>
            </li>
          </ul>
        </article>

        <article className="hidden sm:block">
          <ul className="flex space-x-5 font-medium">
            <li className="border-b-2 border-transparent sm:hover:border-highlight">
              <Link href="/">
                <a className="flex items-center">
                  <BsHouseDoor className="mr-2" />
                  Home
                </a>
              </Link>
            </li>
            <li className="border-b-2 border-transparent sm:hover:border-highlight">
              <Link href="/howto">
                <a className="flex items-center">
                  <BsController className="mr-2" />
                  How to
                </a>
              </Link>
            </li>
            <li className="border-b-2 border-transparent sm:hover:border-highlight">
              <Link href="/about">
                <a className="flex items-center">
                  <BsInfoCircle className="mr-2" />
                  About
                </a>
              </Link>
            </li>
          </ul>
        </article>
      </nav>
    </section>
  )
}

export default Navmenu
