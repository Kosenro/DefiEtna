import { api } from '../ServiceHelper'

export const fetchUserMeleeData = async (id : any) => {
  return await api.get('/usermelee/' + id).then((response) => response.data)
}

export const fetchUserMeleesData = async () => {
  return await api.get('/usermelee/').then((response) => response.data)
}

export const postUserMeleeData = async (user_id: string, melee_id: string) => {
  return await api
    .post(
      '/usermelee/',
      {
        user_id,
        melee_id
      }
    )
    .then((response) => response.data)
}

export const patchUserMeleeData = async (id : any, user_melee : any, token : any) => {
  return await api
    .patch('/usermelee/' + id, user_melee, {
      headers: { Authorization: 'bearer ' + token }
    })
    .then((response) => response.data)
}

export const deleteUserMeleeData = async (id) => {
  return await api.delete('/usermelee/' + id).then((response) => response.data)
}


