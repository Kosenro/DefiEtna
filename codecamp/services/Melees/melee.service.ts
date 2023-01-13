import { api } from '../ServiceHelper'

export const fetchMeleeData = async (id) => {
  return await api.get('/melee/' + id).then((response) => response.data)
}

export const fetchMeleesData = async () => {
  return await api.get('/melee/').then((response) => response.data)
}

export const postmeleeData = async (
  melee_name: string,
  comment: string,
  dateStart: string,
  dateEnd: string,
) => {
  return await api
    .post(
      '/melee/',
      {
        melee_name,
        comment,
        dateStart,
        dateEnd
      }
    )
    .then((response) => response.data)
}

export const patchMeleeData = async (id, melee) => {
  return await api
    .patch('/melee/' + id, melee)
    .then((response) => response.data)
}

export const deleteMeleeData = async (id) => {
  return await api
    .delete('/melee/' + id)
    .then((response) => response.data)
}
