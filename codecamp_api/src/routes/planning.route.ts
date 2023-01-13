import {
    getAll, getById, create, updateById, deleteById,
  } from '../controllers/plannings.controller';
  
  const expressUser = require('express');
  
  const plannings = expressUser.Router();
  
  plannings.get('/', getAll);
  
  plannings.get('/:id', getById);
  
  plannings.post('/', create);
  
  plannings.patch('/:id', updateById);
  
  plannings.delete('/:id', deleteById);
  
  export default plannings;
  