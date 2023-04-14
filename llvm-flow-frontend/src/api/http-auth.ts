import { getBaseConfig, serializeResponse } from '@/api/http-common'

const { REACT_APP_API_URL } = process.env

export const post = (url: string, data: any, options: any) =>
  fetch(`${REACT_APP_API_URL}/${url}`, {
    ...getBaseConfig('post'),
    ...options,
    body: JSON.stringify(data),
  }).then(serializeResponse)

export const validateTokenAndObtainSession = ({ data, idToken }: any) => {
  const headers = {
    Authorization: idToken,
    'Content-Type': 'application/json',
  }

  return post('users/init/', data, { headers })
}
