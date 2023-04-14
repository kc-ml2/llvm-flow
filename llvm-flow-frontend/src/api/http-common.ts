import axios, { AxiosResponse } from 'axios'

const { REACT_APP_API_URL } = process.env

export const getBaseConfig = (method: any) => ({
  method,
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
})

export const serializeResponse = (response: any) => {
  return response
    .text()
    .then((text: string) => {
      return text ? JSON.parse(text) : {}
    })
    .then((data: any) => ({ status: response.status, ok: response.ok, data }))
}

export const httpClient = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

/**
 * Generic Type
 * PT: Payload Type
 * RT: Response Type
 * */
export const post = async <PT, RT>(url: string, payload?: PT) => {
  const result = await httpClient.post<PT, AxiosResponse<RT>>(url, payload)
  return result
}

export const get = async <PT, RT>(url: string, payload?: PT) => {
  const result = await httpClient.get<PT, AxiosResponse<RT>>(url)
  return result
}
