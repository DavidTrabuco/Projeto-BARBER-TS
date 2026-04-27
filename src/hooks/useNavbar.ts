import { useState } from 'react'
import useScroll from './useScroll'

export default function useNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { handleScroll: scrollTo } = useScroll()

  function handleScroll(href: string) {
    scrollTo(href)
    setMenuOpen(false)
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev)
  }

  return { menuOpen, toggleMenu, handleScroll }
}
