import { Request } from 'express';
import TagMelee from '../database/models/tag_melee';

async function createTagMelee(req: Request) {
  const tagmelee = {
    tag_id: req.body.tag_id,
    melee_id: req.body.melee_id
  };
  const query = await TagMelee.create(tagmelee).catch(() => false);

  return query;
}
async function updateTagMelee(req: Request) {
  const query = await TagMelee.update(req.body, { where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

// supprime la ressource donnée et la retourne
async function deleteTagMelee(req: Request) {
  const query = await TagMelee.destroy({ where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

export {
  createTagMelee,
  updateTagMelee,
  deleteTagMelee,
};
