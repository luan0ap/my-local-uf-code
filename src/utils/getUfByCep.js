import { get } from './get'

export const getUfByCep = cep => get(`https://viacep.com.br/ws/${cep}/json/`)
