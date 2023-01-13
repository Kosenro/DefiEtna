import {
    getAll, getById, create, updateById, deleteById
  } from '../controllers/users_melees.controller';
  
  const expressUser = require('express');
  
  const users_melees = expressUser.Router();
  
  users_melees.get('/', getAll);
  
  users_melees.get('/:id', getById);
  
  users_melees.post('/', create);
  
  users_melees.patch('/:id', updateById);
  
  users_melees.delete('/:id', deleteById);
  
  export default users_melees;