import { BookingStyle } from './styles'
import useBooking from '../../hooks/useBooking'

interface BookingProps {
  isOpen: boolean
  onClose: () => void
}

const services = [
  'Corte Social',
  'Barba',
  'Fade & Navalhado',
  'Pigmentação',
  'Corte + Barba',
]

const timeSlots = [
  '08:00', '09:00', '10:00', '11:00',
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
]

export default function Booking({ isOpen, onClose }: BookingProps) {
  const { form, erros, submitted, handleChange, handleSubmit, handleClose, handleBackdropClick } = useBooking(onClose)

  if (!isOpen) return null

  return (
    <div className={BookingStyle.backdrop} onClick={handleBackdropClick}>
      <div className={BookingStyle.card}>

        <button className={BookingStyle.closeBtn} onClick={handleClose} aria-label="Fechar">
          ✕
        </button>

        <p className={BookingStyle.label}>Barber Studios</p>
        <h1 className={BookingStyle.title}>Agendamento</h1>
        <div className={BookingStyle.divider} />
        <p className={BookingStyle.subtitle}>
          Reserve seu horário com um de nossos especialistas
        </p>

        {submitted ? (
          <div className={BookingStyle.successWrap}>
            <span className={BookingStyle.successIcon}>✦</span>
            <p className={BookingStyle.successTitle}>Agendamento confirmado!</p>
            <p className={BookingStyle.successText}>
              Obrigado, <strong>{form.name}</strong>.<br />
              Entraremos em contato pelo <strong>{form.phone}</strong> para confirmar.
            </p>
            <button className={BookingStyle.button} onClick={handleClose}>
              Fechar
            </button>
          </div>
        ) : (
          <form className={BookingStyle.form} onSubmit={handleSubmit} noValidate>

            <div className={BookingStyle.inputGroup}>
              <label htmlFor="name" className={BookingStyle.inputLabel}>Nome completo</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome"
                className={BookingStyle.input}
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
              {erros.name && <p className={BookingStyle.errorMsg}>{erros.name}</p>}
            </div>

            <div className={BookingStyle.inputGroup}>
              <label htmlFor="phone" className={BookingStyle.inputLabel}>WhatsApp</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(11) 9 9999-9999"
                className={BookingStyle.input}
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
              {erros.phone && <p className={BookingStyle.errorMsg}>{erros.phone}</p>}
            </div>

            <div className={BookingStyle.inputGroup}>
              <label htmlFor="service" className={BookingStyle.inputLabel}>Serviço</label>
              <select
                id="service"
                name="service"
                className={BookingStyle.select}
                value={form.service}
                onChange={handleChange}
              >
                <option value="" disabled>Selecione um serviço</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {erros.service && <p className={BookingStyle.errorMsg}>{erros.service}</p>}
            </div>

            <div className={BookingStyle.row}>
              <div className={BookingStyle.inputGroup}>
                <label htmlFor="date" className={BookingStyle.inputLabel}>Data</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className={BookingStyle.input}
                  value={form.date}
                  onChange={handleChange}
                />
                {erros.date && <p className={BookingStyle.errorMsg}>{erros.date}</p>}
              </div>

              <div className={BookingStyle.inputGroup}>
                <label htmlFor="time" className={BookingStyle.inputLabel}>Horário</label>
                <select
                  id="time"
                  name="time"
                  className={BookingStyle.select}
                  value={form.time}
                  onChange={handleChange}
                >
                  <option value="" disabled>Horário</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {erros.time && <p className={BookingStyle.errorMsg}>{erros.time}</p>}
              </div>
            </div>

            <button type="submit" className={BookingStyle.button}>
              Confirmar Agendamento
            </button>

            <button type="button" className={BookingStyle.buttonOutline} onClick={handleClose}>
              Cancelar
            </button>

          </form>
        )}

      </div>
    </div>
  )
}
