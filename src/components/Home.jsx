import { Link } from 'react-router-dom'
import { NAV_GROUPS } from '../data/curriculum'
import { pick } from '../utils/i18n'
import { useLang } from '../context/LanguageContext'

export default function Home() {
  const { lang, ui } = useLang()

  return (
    <div className="home">
      <section className="hero">
        <p className="eyebrow">{ui('brand')}</p>
        <h1>{ui('homeHero')}</h1>
        <p className="lead">{ui('homeLead')}</p>
        <Link className="cta" to="/learn/roadmap">
          {ui('startCourse')}
        </Link>
      </section>
      <section className="grid">
        {NAV_GROUPS.map((group) => (
          <div className="card" key={group.id}>
            <h2>{pick(group.title, lang)}</h2>
            <ul>
              {group.items.map((item) => (
                <li key={item.id}>
                  <Link to={`/learn/${item.id}`}>{pick(item.title, lang)}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <p className="footer-note">{ui('footer')}</p>
    </div>
  )
}
