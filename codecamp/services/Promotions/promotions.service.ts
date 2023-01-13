import { api } from '../ServiceHelper'

export const fetchPromotionData = async(id, token) => {
  return await api.post('/trombi/',
	{
    id,
		token
	}).then((response) => response.data)
}

export const fetchPromotionsData = async(token) => {
  return await api.post('/trombi/',
  {
    token
  }).then((response) => response.data)
}