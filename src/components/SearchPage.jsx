import { Link, useSearchParams } from 'react-router-dom'
import { searchArticles } from '../content'
import { pick } from '../utils/i18n'
import { useLang } from '../context/LanguageContext'

export default function SearchPage() {
  const { lang, ui } = useLang()
  const [params] = useSearchParams()
  const q = params.get('q') || ''
  const results = searchArticles(q, lang)

  return (
    <article className="page">
      <h1>{ui('results')}</h1>
      <p className="lead">{q}</p>
      {results.length === 0 ? (
        <p>{ui('searchEmpty')}</p>
      ) : (
        <ul className="search-results">
          {results.map((article) => (
            <li key={article.id}>
              <Link to={`/learn/${article.id}`}>
                <strong>{pick(article.title, lang)}</strong>
                <span>{pick(article.lead, lang)}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
