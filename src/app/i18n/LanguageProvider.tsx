"use client"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Lang = "th" | "en"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({ lang: "th", setLang: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("th")

  useEffect(() => {
    if (typeof window === "undefined") return
    const saved = window.localStorage.getItem("lang") as Lang | null
    if (saved === "th" || saved === "en") {
      setLangState(saved)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem("lang", lang)
    const html = document.querySelector("html")
    if (html) html.setAttribute("lang", lang === "th" ? "th" : "en")
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)

  const value = useMemo(() => ({ lang, setLang }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  return useContext(LanguageContext)
}


