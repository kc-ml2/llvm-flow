import axios from 'axios'
const { REACT_APP_API_URL } = process.env

export const postFormData = (data: object, url: string) => {
  const headers = {
    'Content-type': 'multipart/form-data',
  }
  return axios.post(`${REACT_APP_API_URL}/${url}`, data, { headers: headers })
}

export const postJsonData = (data: object, url: string) => {
  const headers = {
    'Content-type': 'application/json',
  }
  return axios.post(`${REACT_APP_API_URL}/${url}`, data, { headers: headers })
}
