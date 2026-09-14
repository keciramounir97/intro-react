import { useState } from 'react'
import { pick } from '../utils/i18n'
import { useLang } from '../context/LanguageContext'

export default function CodeBlock({ code, lang: codeLang = 'js' }) {
  const { ui } = useLang()
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="code-wrap">
      <div className="code-bar">
        <span>{codeLang}</span>
        <button type="button" className="copy-btn" onClick={copy}>
          {copied ? ui('copied') : ui('copy')}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}

export function T({ value }) {
  const { lang } = useLang()
  return pick(value, lang)
}
