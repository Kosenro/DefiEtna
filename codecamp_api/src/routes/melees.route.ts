import {
  getAll, getById, create, updateById, deleteById,
} from '../controllers/melees.controller';

const expressUser = require('express');

const melees = expressUser.Router();

melees.get('/', getAll);

melees.get('/:id', getById);

melees.post('/', create);

melees.patch('/:id', updateById);

melees.delete('/:id', deleteById);

export default melees;
