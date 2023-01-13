import { Request, Response } from 'express';
import Tag from '../database/models/tag';
import { createTag, updateTag, deleteTag } from '../services/tag.service';

// permet chercher un objet dans la table Tags en fonction de sont Id
async function getById(req: Request, res: Response) {
  const query = await Tag.findByPk(req.params.id).catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet chercher tout les objets dans la table Tags
async function getAll(req: Request, res: Response) {
  const query = await Tag.findAll().catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet de créer un objet dans la tables Tags
async function create(req: Request, res: Response) {
  if (!req.body.tag_name) { res.sendStatus(400).send("Tag name can't be empty"); return; }
  const query = await createTag(req);
  if (query === false) { res.sendStatus(400); } else { res.status(200).send(query); }
}

// permet de metttre à jour un objet en fonction de sont Id dans la table Tags
async function updateById(req: Request, res: Response) {
  const query = await updateTag(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

//  suprime un objet dans la table Tags
async function deleteById(req: Request, res: Response) {
  const query = await deleteTag(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
