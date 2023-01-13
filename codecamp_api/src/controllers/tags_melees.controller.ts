import { Request, Response } from 'express';
import TagMelee from '../database/models/tag_melee';
import { createTagMelee, updateTagMelee, deleteTagMelee } from '../services/tag_melee.service';

// permet chercher un objet dans la table TagMelees en fonction de sont Id
async function getById(req: Request, res: Response) {
  const query = await TagMelee.findByPk(req.params.id).catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet chercher tout les objets dans la table TagMelees
async function getAll(req: Request, res: Response) {
  const query = await TagMelee.findAll().catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet de créer un objet dans la tables TagMelees
async function create(req: Request, res: Response) {
  if (!req.body.tag_id) { res.sendStatus(400).send("Tag id can't be empty"); return; }
  const query = await createTagMelee(req);
  if (query === false) { res.sendStatus(400); } else { res.status(200).send(query); }
}

// permet de metttre à jour un objet en fonction de sont Id dans la table TagMelees
async function updateById(req: Request, res: Response) {
  const query = await updateTagMelee(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

//  suprime un objet dans la table TagMelees
async function deleteById(req: Request, res: Response) {
  const query = await deleteTagMelee(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
