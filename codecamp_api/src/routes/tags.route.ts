import {
    getAll, getById, create, updateById, deleteById,
  } from '../controllers/tags.controller';
  
  const expressUser = require('express');
  
  const tags = expressUser.Router();
  
  tags.get('/', getAll);
  
  tags.get('/:id', getById);
  
  tags.post('/', create);
  
  tags.patch('/:id', updateById);
  
  tags.delete('/:id', deleteById);
  
  export default tags;