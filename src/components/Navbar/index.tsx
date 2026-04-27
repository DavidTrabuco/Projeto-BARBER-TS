import { NavbarStyle } from './styles'
import useNavbar from '../../hooks/useNavbar'

interface NavbarProps {
  onOpenBooking: () => void
}

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const { menuOpen, toggleMenu, handleScroll } = useNavbar()

  return (
    <header>
      <nav className={NavbarStyle.wrapper}>
        <div className={NavbarStyle.inner}>

          <span className={NavbarStyle.logo} onClick={() => handleScroll('#hero')}>
            ✦ Barber Studios
          </span>

          <ul className={NavbarStyle.nav}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={NavbarStyle.navLink}
                  onClick={(e) => { e.preventDefault(); handleScroll(link.href) }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button className={NavbarStyle.ctaBtn} onClick={onOpenBooking}>
            Agendar
          </button>

          <button className={NavbarStyle.menuBtn} aria-label="Abrir menu" onClick={toggleMenu}>
            {menuOpen ? '✕' : '☰'}
          </button>

        </div>

        {menuOpen && (
          <div className={NavbarStyle.mobileMenu}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={NavbarStyle.mobileLink}
                onClick={(e) => { e.preventDefault(); handleScroll(link.href) }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className={NavbarStyle.mobileLink}
              onClick={(e) => { e.preventDefault(); onOpenBooking() }}
            >
              Agendar
            </a>
          </div>
        )}

      </nav>
    </header>
  )
}
