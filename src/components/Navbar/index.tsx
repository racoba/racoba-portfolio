'use client'

import Link from 'next/link'
import { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import strings from '@/resources/strings';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#424242] text-white px-6 py-4 shadow-lg h-16 z-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between my-auto">
        <Link href="/" className="text-2xl font-medium">
          Bruno R.
        </Link>

        <div className="hidden md:flex gap-6 text-md">
          <Link href="/portfolio" className="hover:text-gray-300 transition">{strings.routes.portfolio}</Link>
          <Link href="/about" className="hover:text-gray-300 transition">{strings.routes.about}</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">{strings.routes.contact}</Link>
        </div>

        <div className="flex flex-row gap-1">
          <Link href={strings.links.instagram} target="_blank" className="hover:text-gray-300 transition">
            <InstagramIcon style={{ width: 32, height: 32 }} />
          </Link>
          <Link href={strings.links.linkedin} target="_blank" className="hover:text-gray-300 transition">
            <LinkedInIcon style={{ width: 32, height: 32 }} />
          </Link>
        </div>

        {/*Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2 px-6">
          <Link href="/" className="py-1 border-b border-white/10">Home</Link>
          <Link href="/about" className="py-1 border-b border-white/10">Sobre</Link>
          <Link href="/contact" className="py-1 border-b border-white/10">Contato</Link>
        </div>
      )}
    </nav>
  )
}
