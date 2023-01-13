import { Request, Response } from 'express';
import UserMelee from '../database/models/user_melee';
import { createUserMelee, updateUserMelee, deleteUserMelee } from '../services/user_melee.service';

// permet chercher un objet dans la table UserMelees en fonction de sont Id
async function getById(req: Request, res: Response) {
  const query = await UserMelee.findByPk(req.params.id).catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet chercher tout les objets dans la table UserMelees
async function getAll(req: Request, res: Response) {
  console.log(1)
  const query = await UserMelee.findAll().catch((e) => {
    console.log(e)
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet de créer un objet dans la tables UserMelees
async function create(req: Request, res: Response) {
  if (!req.body.user_id) { res.sendStatus(400).send("user id can't be empty"); return; }
  const query = await createUserMelee(req);
  if (query === false) { res.sendStatus(400); } else { res.status(200).send(query); }
}

// permet de metttre à jour un objet en fonction de sont Id dans la table UserMelees
async function updateById(req: Request, res: Response) {
  const query = await updateUserMelee(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

//  suprime un objet dans la table UserMelees
async function deleteById(req: Request, res: Response) {
  const query = await deleteUserMelee(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
