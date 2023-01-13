import { getPromo } from '../controllers/promotion.controllers';
  
const expressPromo = require('express');
  
const promo = expressPromo.Router();
  
promo.post('/', getPromo);
  
export default promo;