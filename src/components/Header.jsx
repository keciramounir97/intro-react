import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { LANGS, pick } from '../utils/i18n'
import { useLang } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

export default function Header({ onMenu, query, setQuery }) {
  const { lang, setLang, ui } = useLang()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const { id } = useParams()

  function onSubmit(e) {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <button type="button" className="icon-btn menu-btn" onClick={onMenu} aria-label={ui('menu')}>
          <span />
          <span />
          <span />
        </button>
        <NavLink to="/" end className="brand">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            <strong>{ui('brand')}</strong>
            <small>{ui('brandSub')}</small>
          </span>
        </NavLink>
        <form className="search-form" onSubmit={onSubmit}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={ui('search')}
            aria-label={ui('search')}
          />
        </form>
        <div className="top-actions">
          <label className="sr-only" htmlFor="lang-select">
            {ui('language')}
          </label>
          <select id="lang-select" value={lang} onChange={(e) => setLang(e.target.value)}>
            {LANGS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="icon-btn theme-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? ui('themeLight') : ui('themeDark')}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </div>
      {id ? <div className="greenbar" /> : null}
    </header>
  )
}

export function pickTitle(item, lang) {
  return pick(item.title, lang)
}
