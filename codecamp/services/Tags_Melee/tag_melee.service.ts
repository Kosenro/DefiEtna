import { api } from '../ServiceHelper'

export const fetchTagMeleeData = async (id: any) => {
  return await api.get('/tag_melee/' + id).then((response: any) => response.data)
}

export const fetchTagsMeleeData = async () => {
  return await api.get('/tag_melee/').then((response: any) => response.data)
}

export const postTagMeleeData = async (id: string, tag_id: string, melee_id: string, token: string) => {
  return await api
    .post(
      '/tag_melee/',
      {
        tag_id,
        melee_id
      },
      {
        headers: { Authorization: 'bearer ' + token }
      }
    )
    .then((response: any) => response.data)
}

export const patchTagMeleeData = async (id: any) => {
  return await api.patch('/tag_melee/' + id).then((response: any) => response.data)
}

export const deleteTagMeleeData = async (id: any, token: any) => {
  return await api
    .delete('/order/' + id, {
      headers: { Authorization: 'bearer ' + token }
    })
    .then((response: any) => response.data)
}
