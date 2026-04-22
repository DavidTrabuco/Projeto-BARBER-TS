import { FooterStyle } from './styles'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#contato' },
  { label: 'Agendar', href: '#agendar' },
]

export default function Footer() {
  const handleScroll = (href: string) => {
    const target = document.querySelector<HTMLElement>(href)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className={FooterStyle.footer}>
      <div className={FooterStyle.inner}>

        <span className={FooterStyle.logo}>✦ Barber Studios</span>

        <nav className={FooterStyle.nav}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={FooterStyle.navLink}
              onClick={(e) => { e.preventDefault(); handleScroll(l.href) }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className={FooterStyle.social}>
          <a href="#" className={FooterStyle.socialLink}>Instagram</a>
          <a href="#" className={FooterStyle.socialLink}>WhatsApp</a>
          <a href="#" className={FooterStyle.socialLink}>Facebook</a>
        </div>

        <div className={FooterStyle.divider} />

        <p className={FooterStyle.copyright}>
          © 2025 Barber Studios — Todos os direitos reservados
        </p>

      </div>
    </footer>
  )
}
