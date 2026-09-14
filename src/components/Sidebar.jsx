import { NavLink } from 'react-router-dom'
import { NAV_GROUPS } from '../data/curriculum'
import { pick } from '../utils/i18n'
import { useLang } from '../context/LanguageContext'

export default function Sidebar({ open, onClose, query }) {
  const { lang, ui } = useLang()
  const q = query.trim().toLowerCase()

  return (
    <>
      <div className={`backdrop ${open ? 'show' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-head">
          <span>{ui('chapters')}</span>
          <button type="button" className="text-btn" onClick={onClose}>
            {ui('close')}
          </button>
        </div>
        <nav>
          {NAV_GROUPS.map((group) => {
            const items = group.items.filter((item) => {
              if (!q) return true
              return pick(item.title, lang).toLowerCase().includes(q)
            })
            if (!items.length) return null
            return (
              <section key={group.id}>
                <h2>{pick(group.title, lang)}</h2>
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <NavLink to={`/learn/${item.id}`} onClick={onClose}>
                        {pick(item.title, lang)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
