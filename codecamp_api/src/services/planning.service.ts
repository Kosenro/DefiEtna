import { Request } from 'express';
import Planning from '../database/models/planning';

async function createPlanning(req: Request) {
  const planning = {
    planning_name: req.body.planning_name,
    comment: req.body.comment,
    dateStart: req.body.dateStart,
    dateEnd: req.body.dateEnd
  };
  const query = await Planning.create(planning).catch(() => false);

  return query;
}
async function updatePlanning(req: Request) {
  const query = await Planning.update(req.body, { where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

// supprime la ressource donnée et la retourne
async function deletePlanning(req: Request) {
  const query = await Planning.destroy({ where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

export {
  createPlanning,
  updatePlanning,
  deletePlanning,
};
