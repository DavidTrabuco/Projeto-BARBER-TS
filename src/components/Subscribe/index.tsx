import { SubscribeStyle } from './styles'
import useSubscribe from '../../hooks/useSubscribe'

export default function Subscribe() {
  const { form, erros, submitted, handleChange, handleSubmit } = useSubscribe()

  return (
    <section id="agendar" className={SubscribeStyle.section}>
      <div className={SubscribeStyle.inner}>
        <span className={SubscribeStyle.sectionLabel}>Fique por dentro</span>
        <h2 className={SubscribeStyle.title}>Receba nossas novidades</h2>
        <p className={SubscribeStyle.subtitle}>
          Cadastre-se e fique por dentro de promoções exclusivas, novidades e dicas
          de cuidado masculino direto no seu feed.
        </p>

        {submitted ? (
          <p className={SubscribeStyle.successMsg}>✦ Cadastro realizado com sucesso!</p>
        ) : (
          <form className={SubscribeStyle.form} onSubmit={handleSubmit} noValidate>

            <div className={SubscribeStyle.inputWrapper}>
              <label htmlFor="sub-email" className={SubscribeStyle.label}>E-mail</label>
              <input
                id="sub-email"
                type="email"
                name="email"
                placeholder="seu@email.com"
                className={SubscribeStyle.input}
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
              {erros.email && <p className={SubscribeStyle.errorMsg}>{erros.email}</p>}
            </div>

            <div className={SubscribeStyle.inputWrapper}>
              <label htmlFor="sub-instagram" className={SubscribeStyle.label}>Instagram</label>
              <input
                id="sub-instagram"
                type="text"
                name="instagram"
                placeholder="@seu.usuario"
                className={SubscribeStyle.input}
                value={form.instagram}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className={SubscribeStyle.checkboxRow}>
              <input
                id="sub-agree"
                type="checkbox"
                name="agree"
                className={SubscribeStyle.checkbox}
                checked={form.agree}
                onChange={handleChange}
              />
              <div>
                <label htmlFor="sub-agree" className={SubscribeStyle.checkboxLabel}>
                  Concordo com a{' '}
                  <span className={SubscribeStyle.checkboxLink}>Política de Privacidade</span>
                  {' '}e aceito receber comunicações da Barber Studios.
                </label>
                {erros.agree && <p className={SubscribeStyle.errorMsg}>{erros.agree}</p>}
              </div>
            </div>

            <button type="submit" className={SubscribeStyle.submitBtn}>Enviar</button>

          </form>
        )}

        <p className={SubscribeStyle.footerNote}>
          Seus dados estão seguros conosco. Sem spam, prometemos.
        </p>
      </div>
    </section>
  )
}
