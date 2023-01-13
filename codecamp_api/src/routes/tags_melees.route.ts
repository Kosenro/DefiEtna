import {
    getAll, getById, create, updateById, deleteById,
  } from '../controllers/tags_melees.controller';
  
  const expressUser = require('express');
  
  const tags_melees = expressUser.Router();
  
  tags_melees.get('/', getAll);
  
  tags_melees.get('/:id', getById);
  
  tags_melees.post('/', create);
  
  tags_melees.patch('/:id', updateById);
  
  tags_melees.delete('/:id', deleteById);
  
  export default tags_melees;