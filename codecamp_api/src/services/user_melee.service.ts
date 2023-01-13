import { Request } from 'express';
import UserMelee from '../database/models/user_melee';

async function createUserMelee(req: Request) {
  const usermelee = {
    user_id: req.body.user_id,
    melee_id: req.body.melee_id,
    comment: req.body.comment
  };
  const query = await UserMelee.create(usermelee).catch(() => false);

  return query;
}
async function updateUserMelee(req: Request) {
  const query = await UserMelee.update(req.body, { where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

// supprime la ressource donnée et la retourne
async function deleteUserMelee(req: Request) {
  const query = await UserMelee.destroy({ where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

export {
  createUserMelee,
  updateUserMelee,
  deleteUserMelee,
};
