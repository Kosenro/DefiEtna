import { api } from '../ServiceHelper'

export const fetchTagData = async(id) => {
  return await api.get('/tag/'+ id).then((response) => response.data)
}

export const fetchTagsData = async() => {
  return await api.get('/tag/').then((response) => response.data)
}

export const postTagData = async(tag_name : string, token : string) => {
  return await api.post('/tag/',
  {
    tag_name,
  },
  {
    headers: { Authorization: 'bearer ' + token }
  }).then((response) => response.data)
}

export const patchTagData = async(id) => {
  return await api.patch('/tag/'+ id).then((response) => response.data)
}

export const deleteTagData = async(id) => {
  return await api.delete('/tag/'+ id).then((response) => response.data)
}