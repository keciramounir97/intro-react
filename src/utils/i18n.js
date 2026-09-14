export const t = (en, fr, ar) => ({ en, fr, ar })

export function pick(value, lang) {
  if (value == null) return ''
  if (typeof value === 'string') return value
  return value[lang] || value.en || value.fr || ''
}

export const LANGS = [
  { id: 'fr', label: 'Français', dir: 'ltr', short: 'FR' },
  { id: 'en', label: 'English', dir: 'ltr', short: 'EN' },
  { id: 'ar', label: 'العربية', dir: 'rtl', short: 'AR' },
]
