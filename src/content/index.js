import { startArticles } from './01-start'
import { languageArticles } from './02-languages'
import { browserArticles } from './03-browser'
import { conceptArticles } from './04-concepts'
import { nodeArticles } from './05-node'
import { reactArticles } from './06-react'
import { toolArticles } from './07-tools'
import { compareArticles } from './08-compare'

const all = [
  ...startArticles,
  ...languageArticles,
  ...browserArticles,
  ...conceptArticles,
  ...nodeArticles,
  ...reactArticles,
  ...toolArticles,
  ...compareArticles,
]

export const articlesById = Object.fromEntries(all.map((article) => [article.id, article]))

export function searchArticles(query, lang) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return all.filter((article) => {
    const title = article.title[lang] || article.title.en
    const lead = article.lead[lang] || article.lead.en
    const blob = [title, lead]
      .concat(
        article.blocks.flatMap((block) => {
          if (block.text) return [block.text[lang] || block.text.en]
          if (block.items) return block.items.map((item) => item[lang] || item.en)
          if (block.rows) {
            return block.rows.flat().map((cell) => (typeof cell === 'string' ? cell : cell[lang] || cell.en))
          }
          return []
        }),
      )
      .join(' ')
      .toLowerCase()
    return blob.includes(q)
  })
}
