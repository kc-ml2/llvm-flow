import axios, { AxiosResponse } from 'axios'

const { REACT_APP_API_URL } = process.env

export const getBaseConfig = (method: string) => ({
  method,
  credentials: 'include' as const,
  headers: { 'Content-Type': 'application/json' },
})

interface ApiResponse<T = unknown> {
  status: number
  ok: boolean
  data: T
}

export const serializeResponse = <T = unknown>(
  response: Response,
): Promise<ApiResponse<T>> => {
  return response
    .text()
    .then((text: string) => {
      return text ? JSON.parse(text) : {}
    })
    .then((data: T) => ({ status: response.status, ok: response.ok, data }))
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
