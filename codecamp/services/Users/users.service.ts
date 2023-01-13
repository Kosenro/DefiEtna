import { api } from '../ServiceHelper'

export const postLogin = async(login, password) => {
  return await api.post('/user/', {
      login,
      password,
    }).then((response) => response.data)
}

export const fetchUserConnected = async(token:any) => {
    return await api.post('/user/identity',
    {
      token
    }).then((response) => response.data)
}