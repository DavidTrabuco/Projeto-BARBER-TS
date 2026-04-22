import { useState } from 'react'

export default function useNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleScroll(href: string) {
    const target = document.querySelector<HTMLElement>(href)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev)
  }

  return { menuOpen, toggleMenu, handleScroll }
}
