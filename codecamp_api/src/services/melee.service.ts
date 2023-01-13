import { Request } from 'express';
import Melee from '../database/models/melee';

async function createMelee(req: Request) {
  const melee = {
    melee_name: req.body.melee_name,
    comment: req.body.comment,
    dateStart: req.body.dateStart,
    dateEnd: req.body.dateEnd
  };
  const query = await Melee.create(melee).catch(() => false);
  return query;
}
async function updateMelee(req: Request) {
  const query = await Melee.update(req.body, { where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

// supprime la ressource donnée et la retourne
async function deleteMelee(req: Request) {
  const query = await Melee.destroy({ where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

export {
  createMelee,
  updateMelee,
  deleteMelee,
};
