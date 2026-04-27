import { LocationStyle } from './styles'

const hours = [
  { day: 'Segunda – Sexta', time: '08h – 19h', closed: false },
  { day: 'Sábado', time: '08h – 17h', closed: false },
  { day: 'Domingo', time: 'Fechado', closed: true },
]

export default function Location() {
  return (
    <section id="contato" className={LocationStyle.section}>
      <div className={LocationStyle.inner}>

        <div className={LocationStyle.header}>
          <span className={LocationStyle.sectionLabel}>Localização</span>
          <h2 className={LocationStyle.title}>Onde nos encontrar</h2>
        </div>

        <div className={LocationStyle.grid}>

          <div className={LocationStyle.mapCol}>
            <iframe
              className={LocationStyle.mapFrame}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.6526!3d-23.5646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjYiUyA0NsKwMzknMDkuNCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Barber Studios"
            />
            <div className={LocationStyle.addressBox}>
              <span className={LocationStyle.addressLabel}>Endereço</span>
              <p className={LocationStyle.addressText}>
                Av. Paulista, 1234 — Bela Vista<br />
                São Paulo – SP, 01310-100
              </p>
              <a
                href="https://maps.google.com/?q=Av.+Paulista+1234+São+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className={LocationStyle.mapsBtn}
              >
                ↗ Ver no Google Maps
              </a>
            </div>
          </div>

          <div className={LocationStyle.hoursCol}>
            <span className={LocationStyle.hoursTitle}>Horário de Funcionamento</span>
            <table className={LocationStyle.hoursTable}>
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day} className={LocationStyle.hoursRow}>
                    <td className={LocationStyle.hoursDay}>{h.day}</td>
                    <td className={h.closed ? LocationStyle.hoursClosed : LocationStyle.hoursTime}>
                      {h.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={LocationStyle.hoursNote}>
              * Atendimento exclusivamente com agendamento.<br />
              Ligue ou agende pelo WhatsApp: (11) 9 9999-9999
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
