import { HeroStyle } from './styles'
import useScroll from '../../hooks/useScroll'

interface HeroProps {
  onOpenBooking: () => void
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const { handleScroll } = useScroll()

  return (
    <section id="hero" className={HeroStyle.section}>
      <div className={HeroStyle.inner}>
        <div className={HeroStyle.divider} />
        <p className={HeroStyle.label}>Desde 2010 — São Paulo, Brasil</p>
        <h1 className={HeroStyle.title}>
          Barber<br />Studios
        </h1>
        <p className={HeroStyle.subtitle}>Onde tradição e estilo se encontram.</p>
        <p className={HeroStyle.description}>
          Uma experiência única de cuidado masculino. Cortes precisos, barba impecável
          e um ambiente pensado para quem valoriza o que há de melhor.
        </p>
        <div className={HeroStyle.actions}>
          <button className={HeroStyle.btnPrimary} onClick={onOpenBooking}>
            Agendar Agora
          </button>
          <button className={HeroStyle.btnOutline} onClick={() => handleScroll('#servicos')}>
            Ver Serviços
          </button>
        </div>
      </div>

      <div className={HeroStyle.scrollHint}>
        <span>scroll</span>
        <div className={HeroStyle.scrollBar} />
      </div>
    </section>
  )
}
