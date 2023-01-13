import { Request, Response } from 'express';
import axios from 'axios'

export const apiEtna = axios.create({
    baseURL: 'https://intra-api.etna-alternance.net/',
    timeout: 10000,
    headers: {
      accept: 'application/json'
    }
})
  
async function getPromo(req: Request, res: Response) {
    return await apiEtna.get('/trombi/'+ req.body.id, {
        headers: {Cookie: req.body.token}
      } )
    .then((response) => res.send(response.data))
    .catch(() => {res.sendStatus(400)});
}

export { getPromo }