import { ServicesStyle } from './styles'

interface ServicesProps {
  onOpenBooking: () => void
}

interface Service {
  tag: string
  title: string
  desc: string
  price: string
  img: string
}

const services: Service[] = [
  {
    tag: 'Clássico',
    title: 'Corte Social',
    desc: 'Corte clássico executado com tesoura e máquina para um acabamento limpo e preciso.',
    price: 'A partir de R$ 65',
    img: 'https://picsum.photos/seed/corte/600/400', 
  },
  {
    tag: 'Premium',
    title: 'Barba',
    desc: 'Modelagem completa com navalha quente, toalha aquecida e produtos premium.',
    price: 'A partir de R$ 55',
    img: 'https://picsum.photos/seed/barba/600/400', 
  },
  {
    tag: 'Especial',
    title: 'Fade & Navalhado',
    desc: 'Degradê impecável com finalização à navalha para um acabamento milimétrico.',
    price: 'A partir de R$ 80',
    img: 'https://picsum.photos/seed/fade/600/400', 
  },
  {
    tag: 'Exclusivo',
    title: 'Pigmentação',
    desc: 'Pigmentação capilar para disfarçar falhas e realçar o visual com naturalidade.',
    price: 'A partir de R$ 120',
    img: 'https://picsum.photos/seed/pigmento/600/400', 
  },
]

export default function Services({ onOpenBooking }: ServicesProps) {
  return (
    <section id="servicos" className={ServicesStyle.section}>
      <div className={ServicesStyle.inner}>

        <div className={ServicesStyle.header}>
          <span className={ServicesStyle.sectionLabel}>Nossos Serviços</span>
          <h2 className={ServicesStyle.title}>O que oferecemos</h2>
        </div>

        <div className={ServicesStyle.grid}>
          {services.map((s) => (
            <div key={s.title} className={ServicesStyle.card}>
              <img
                src={s.img}
                alt={s.title}
                className={ServicesStyle.cardImg}
                loading="lazy"
              />
              <div className={ServicesStyle.cardBody}>
                <span className={ServicesStyle.cardTag}>{s.tag}</span>
                <h3 className={ServicesStyle.cardTitle}>{s.title}</h3>
                <p className={ServicesStyle.cardPrice}>{s.price}</p>
                <p className={ServicesStyle.cardDesc}>{s.desc}</p>
                <button className={ServicesStyle.cardBtn} onClick={onOpenBooking}>Agendar</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
