import { api } from '../ServiceHelper'

export const fetchPlanningData = async(id: any) => {
  return await api.get('/planning/'+ id).then((response) => response.data)
}

export const fetchPlanningsData = async() => {
  return await api.get('/planning/').then((response) => response.data)
}

export const postPlanningData = async() => {
  return await api.post('/planning/').then((response) => response.data)
}

export const patchPlanningData = async(id: any) => {
  return await api.patch('/planning/'+ id).then((response) => response.data)
}

export const deletePlanningData = async(id: any) => {
  return await api.delete('/planning/'+ id).then((response) => response.data)
}