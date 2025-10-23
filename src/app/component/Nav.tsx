"use client"
import React from 'react'
import Link from "next/link"
import { useLang } from "../i18n/LanguageProvider"
import { dict } from "../i18n/dictionaries"

export default function Nav() {
  const { lang, setLang } = useLang()
  const t = dict[lang]
  return (
    <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600 mb-2 sm:mb-0">
        Toey Van <span className='text-yellow-300'>VIP</span>
      </h1>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-4">
        <span className='group'>
          <Link
            href="/"
            className="relative text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            {t.nav.home}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </span>

        <span className='group'>
          <Link
            href="/about"
            className="relative text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            {t.nav.attractions}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </span>

        <span className='group'>
          <Link
            href="/contact"
            className="relative text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            {t.nav.contact}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </span>

        <button
          onClick={() => setLang(lang === "th" ? "en" : "th")}
          className="px-2 py-1 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
          aria-label="Toggle language"
        >
          {lang === "th" ? "EN" : "TH"}
        </button>
      </div>
    </nav>
  )
}
