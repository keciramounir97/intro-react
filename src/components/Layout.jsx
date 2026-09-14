import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <div className="shell">
      <Header onMenu={() => setOpen(true)} query={query} setQuery={setQuery} />
      <div className="body">
        <Sidebar open={open} onClose={() => setOpen(false)} query={query} />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
