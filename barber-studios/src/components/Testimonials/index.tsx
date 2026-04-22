import { TestimonialsStyle } from './styles'

interface Testimonial {
  text: string
  author: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    text: 'Melhor barbearia da cidade! Atendimento impecável, corte na régua sempre. Nunca saí daqui insatisfeito.',
    author: 'João P.',
    initials: 'JP',
  },
  {
    text: 'Ambiente top, profissionais incríveis e qualidade absurda no serviço. Vale muito cada centavo.',
    author: 'Lucas M.',
    initials: 'LM',
  },
  {
    text: 'Vim uma vez e nunca mais fui em outro lugar. Nível internacional, sem exagero nenhum.',
    author: 'Rafael S.',
    initials: 'RS',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className={TestimonialsStyle.section}>
      <div className={TestimonialsStyle.inner}>

        <div className={TestimonialsStyle.header}>
          <span className={TestimonialsStyle.sectionLabel}>Depoimentos</span>
          <h2 className={TestimonialsStyle.title}>O que dizem nossos clientes</h2>
        </div>

        <div className={TestimonialsStyle.grid}>
          {testimonials.map((t) => (
            <div key={t.author} className={TestimonialsStyle.card}>
              <span className={TestimonialsStyle.quote}>"</span>
              <p className={TestimonialsStyle.text}>{t.text}</p>
              <div className={TestimonialsStyle.footer}>
                <div className={TestimonialsStyle.avatar}>{t.initials}</div>
                <div>
                  <p className={TestimonialsStyle.author}>{t.author}</p>
                  <p className={TestimonialsStyle.stars}>★★★★★</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
