import { useState, type FormEvent, type MouseEvent } from 'react'

interface FormState {
  name: string
  phone: string
  service: string
  date: string
  time: string
}

const emptyForm: FormState = { name: '', phone: '', service: '', date: '', time: '' }

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function validar(form: FormState): Record<string, string> {
  const erros: Record<string, string> = {}

  if (!form.name.trim()) {
    erros.name = 'Nome é obrigatório.'
  } else if (/\d/.test(form.name)) {
    erros.name = 'Nome não pode conter números.'
  }

  if (!form.phone.trim()) {
    erros.phone = 'WhatsApp é obrigatório.'
  } else {
    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 11) erros.phone = 'WhatsApp inválido. Ex: (11) 99999-9999'
  }

  if (!form.service) {
    erros.service = 'Selecione um serviço.'
  }

  if (!form.date) {
    erros.date = 'Data é obrigatória.'
  } else {
    const hoje = new Date()
    hoje.setHours(0, 0, 0, 0)
    const selecionada = new Date(form.date + 'T00:00:00')
    if (selecionada < hoje) erros.date = 'A data não pode ser no passado.'
  }

  if (!form.time) {
    erros.time = 'Selecione um horário.'
  }

  return erros
}

export default function useBooking(onClose: () => void) {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [erros, setErros] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    const newValue = name === 'phone' ? maskPhone(value) : value
    setForm((prev) => ({ ...prev, [name]: newValue }))
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

  function handleClose() {
    setSubmitted(false)
    setForm(emptyForm)
    setErros({})
    onClose()
  }

  function handleBackdropClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) handleClose()
  }

  return { form, erros, submitted, handleChange, handleSubmit, handleClose, handleBackdropClick }
}
