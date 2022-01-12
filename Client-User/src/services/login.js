import axios from 'axios'
const baseUrl = '/api/login'

export const loginServices = async credentials => {
  const { data } = await axios.post(baseUrl, credentials)
  return data
}

let token = null

export const setToken = newToken => {
  token = `Bearer ${newToken}`
}