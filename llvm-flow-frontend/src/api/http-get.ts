import axios from 'axios'
const { REACT_APP_API_URL } = process.env

export const getFormData = (url: string) => {
  const headers = {
    'Content-type': 'multipart/form-data',
  }
  return axios.get(`${REACT_APP_API_URL}/${url}`, { headers: headers })
}

export const getJsonData = (url: string) => {
  const headers = {
    'Content-type': 'application/json',
  }
  return axios.get(`${REACT_APP_API_URL}/${url}`, { headers: headers })
}
