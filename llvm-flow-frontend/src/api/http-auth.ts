import { getBaseConfig, serializeResponse } from '@/api/http-common'

const { REACT_APP_API_URL } = process.env

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>
}

interface TokenData {
  data: Record<string, unknown>
  idToken: string
}

interface SessionResponse {
  // Add specific session response fields here
  [key: string]: unknown
}

export const post = <T = unknown>(url: string, data: Record<string, unknown>, options: RequestOptions = {}) =>
  fetch(`${REACT_APP_API_URL}/${url}`, {
    ...getBaseConfig('post'),
    ...options,
    body: JSON.stringify(data),
  }).then(serializeResponse<T>)

export const validateTokenAndObtainSession = ({ data, idToken }: TokenData) => {
  const headers = {
    Authorization: idToken,
    'Content-Type': 'application/json',
  }

  return post<SessionResponse>('users/init/', data, { headers })
}
