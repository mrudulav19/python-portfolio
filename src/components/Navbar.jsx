import { useState } from 'react'
import { profile } from '../data/content'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Credentials', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-paper/90 backdrop-blur dark:border-neutral-800 dark:bg-night/90">
      <nav aria-label="Primary" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-display text-lg font-bold">{profile.name}</a>
        <button className="btn-ghost md:hidden" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <ul id="menu" className={`${open ? 'absolute left-0 top-full flex w-full flex-col border-b bg-paper p-6 dark:bg-night' : 'hidden'} gap-6 md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0`}>
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-base font-semibold hover:text-accent dark:hover:text-teal-400">{l}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
