import { Link, useParams } from 'react-router-dom'
import { articlesById } from '../content'
import { getNeighbors } from '../data/curriculum'
import { pick } from '../utils/i18n'
import { useLang } from '../context/LanguageContext'
import CodeBlock from './CodeBlock'

function Block({ block }) {
  const { lang, ui } = useLang()

  if (block.type === 'h2') return <h2>{pick(block.text, lang)}</h2>
  if (block.type === 'h3') return <h3>{pick(block.text, lang)}</h3>
  if (block.type === 'p') return <p>{pick(block.text, lang)}</p>
  if (block.type === 'code') return <CodeBlock code={block.code} lang={block.lang} />
  if (block.type === 'ul') {
    return (
      <ul className="lesson-list">
        {block.items.map((item, i) => (
          <li key={i}>{pick(item, lang)}</li>
        ))}
      </ul>
    )
  }
  if (block.type === 'ol') {
    return (
      <ol className="lesson-list">
        {block.items.map((item, i) => (
          <li key={i}>{pick(item, lang)}</li>
        ))}
      </ol>
    )
  }
  if (block.type === 'note') {
    return (
      <aside className={`note ${block.variant || 'tip'}`}>
        <strong>{ui(block.variant === 'remember' ? 'remember' : block.variant === 'warning' ? 'warning' : 'tip')}</strong>
        <p>{pick(block.text, lang)}</p>
      </aside>
    )
  }
  if (block.type === 'table') {
    return (
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {block.headers.map((h, i) => (
                <th key={i}>{pick(h, lang)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci}>{pick(cell, lang)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return null
}

export default function Article() {
  const { id } = useParams()
  const { lang, ui } = useLang()
  const article = articlesById[id]
  const { prev, next } = getNeighbors(id)

  if (!article) {
    return (
      <article className="page">
        <h1>{ui('noArticle')}</h1>
      </article>
    )
  }

  const toc = article.blocks.filter((b) => b.type === 'h2')

  return (
    <article className="page">
      <h1>{pick(article.title, lang)}</h1>
      <p className="lead">{pick(article.lead, lang)}</p>
      {toc.length > 1 ? (
        <nav className="toc">
          <h2>{ui('onThisPage')}</h2>
          <ol>
            {toc.map((item, i) => (
              <li key={i}>{pick(item.text, lang)}</li>
            ))}
          </ol>
        </nav>
      ) : null}
      {article.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
      <div className="pager">
        {prev ? (
          <Link to={`/learn/${prev.id}`} className="pager-link">
            <span>{ui('previous')}</span>
            <strong>{pick(prev.title, lang)}</strong>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/learn/${next.id}`} className="pager-link next">
            <span>{ui('next')}</span>
            <strong>{pick(next.title, lang)}</strong>
          </Link>
        ) : null}
      </div>
    </article>
  )
}
