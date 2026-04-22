import { useState, type FormEvent } from 'react'

interface SubscribeForm {
  email: string
  instagram: string
  agree: boolean
}

function validar(form: SubscribeForm): Record<string, string> {
  const erros: Record<string, string> = {}

  if (!form.email.trim()) {
    erros.email = 'E-mail é obrigatório.'
  } else if (!form.email.includes('@') || !form.email.includes('.')) {
    erros.email = 'Digite um e-mail válido.'
  }

  if (!form.agree) {
    erros.agree = 'Você precisa aceitar os termos para continuar.'
  }

  return erros
}

export default function useSubscribe() {
  const [form, setForm] = useState<SubscribeForm>({ email: '', instagram: '', agree: false })
  const [erros, setErros] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (erros[name]) setErros((prev) => ({ ...prev, [name]: '' }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const novosErros = validar(form)
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros)
      return
    }
    setErros({})
    setSubmitted(true)
  }

  return { form, erros, submitted, handleChange, handleSubmit }
}
