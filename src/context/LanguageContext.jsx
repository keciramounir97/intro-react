import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { LANGS, pick } from '../utils/i18n'
import { UI } from '../i18n/ui'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('academy-lang')
    if (LANGS.some((item) => item.id === saved)) return saved
    const nav = navigator.language?.slice(0, 2)
    if (nav === 'fr' || nav === 'ar') return nav
    return 'fr'
  })

  useEffect(() => {
    const meta = LANGS.find((item) => item.id === lang) || LANGS[0]
    document.documentElement.lang = lang
    document.documentElement.dir = meta.dir
    localStorage.setItem('academy-lang', lang)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      dir: LANGS.find((item) => item.id === lang)?.dir || 'ltr',
      ui: (key) => pick(UI[key], lang),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
