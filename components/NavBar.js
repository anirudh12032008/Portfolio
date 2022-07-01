import Link from 'next/link'
import React from 'react'

const NavBar = ({ profile }) => {

  return (<>
    <div className='bg-[#5540af]'>
      <div>
        <div className="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
          <div className="container flex items-center justify-between mx-auto">
            <div className=' '>
              <Link href="/">
                <h2 className='text-white text-2xl font-bold'>{profile.title}</h2>
              </Link>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">

                <li className="group pl-6">

                  <Link href="/#about"
                    className="cursor-pointe pt-0.5  font-semibold uppercase text-white"><p className="text-white">About</p></Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <Link href="/#services"
                    className="cursor-pointe pt-0.5  font-semibold uppercase text-white"><p className="text-white">Services</p></Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <Link href="/#portfolio"
                    className="cursor-pointe pt-0.5  font-semibold uppercase text-white"><p className="text-white">Portfolio</p></Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <Link href="/#clients"
                    className="cursor-pointe pt-0.5  font-semibold uppercase text-white"><p className="text-white">Clients</p></Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <Link href="/#work"
                    className="cursor-pointe pt-0.5  font-semibold uppercase text-white"><p className="text-white">Work</p></Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <Link href="/#statistics"
                    className="cursor-pointe pt-0.5  font-semibold uppercase text-white"><p className="text-white">Statistics</p></Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <Link href="/blogs"
                    className="cursor-pointe pt-0.5  font-semibold uppercase text-white"><p className="text-white">Blogs</p></Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <Link href="/#contact"
                    className="cursor-pointe pt-0.5  font-semibold uppercase text-white"><p className="text-white">Contact</p></Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

              </ul>
            </div>
            <div className="block lg:hidden">
              <button>
                <i className="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />

      </div>

    </div>
  </>
  )
}

export default NavBar