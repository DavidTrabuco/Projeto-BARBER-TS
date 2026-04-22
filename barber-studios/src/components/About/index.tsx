import { AboutStyle } from './styles'

const features = [
  { title: 'Whisky Premium', desc: 'Receba um drinque cortesia enquanto aguarda ou relaxa após o corte.' },
  { title: 'Ambiente Sofisticado', desc: 'Decoração cuidadosamente pensada para uma experiência de alto padrão.' },
  { title: 'Barbeiros Experientes', desc: 'Profissionais com anos de formação e domínio de todas as técnicas.' },
  { title: 'Cadeiras Confortáveis', desc: 'Equipamentos premium que garantem conforto máximo durante o serviço.' },
  { title: 'Alto Padrão', desc: 'Produtos exclusivos das melhores marcas nacionais e internacionais.' },
]

export default function About() {
  return (
    <section id="sobre" className={AboutStyle.section}>
      <div className={AboutStyle.inner}>

        <div className={AboutStyle.leftCol}>
          <span className={AboutStyle.sectionLabel}>Sobre Nós</span>
          <h2 className={AboutStyle.title}>
            Mais que uma barbearia,<br />
            <span className={AboutStyle.titleAccent}>uma experiência.</span>
          </h2>
          <p className={AboutStyle.body}>
            Fundada em 2010, a Barber Studios nasceu com uma missão clara: elevar o padrão
            do cuidado masculino em São Paulo. Combinamos técnicas clássicas de barbearia
            com tendências contemporâneas, sempre com atenção meticulosa aos detalhes.
          </p>
          <p className={AboutStyle.body}>
            Nosso espaço foi projetado para ser um refúgio — onde você pode desacelerar,
            ser bem atendido e sair renovado. Do primeiro corte ao acabamento final,
            cada detalhe importa.
          </p>
          <div className={AboutStyle.divider} />
        </div>

        <div className={AboutStyle.rightCol}>
          {features.map((f) => (
            <div key={f.title} className={AboutStyle.featureItem}>
              <span className={AboutStyle.featureBullet}>✦</span>
              <div>
                <p className={AboutStyle.featureTitle}>{f.title}</p>
                <p className={AboutStyle.featureDesc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
