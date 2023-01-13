import { Request, Response } from 'express';
import Melee from '../database/models/melee';
import { createMelee, updateMelee, deleteMelee } from '../services/melee.service';

// permet chercher un objet dans la table Melees en fonction de sont Id
async function getById(req: Request, res: Response) {
  const query = await Melee.findAll({where: {id:req.params.id}}).catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet chercher tout les objets dans la table Melees
async function getAll(req: Request, res: Response) {
  const query = await Melee.findAll().catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet de créer un objet dans la tables Melees
async function create(req: Request, res: Response) {
  if (!req.body.melee_name) { res.sendStatus(400).send("Melee name can't be empty"); return; }
  const query = await createMelee(req);
  if (query === false) { res.sendStatus(400); } else { res.status(200).send(query); }
}

// permet de metttre à jour un objet en fonction de sont Id dans la table Melees
async function updateById(req: Request, res: Response) {
  const query = await updateMelee(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

//  suprime un objet dans la table Melees
async function deleteById(req: Request, res: Response) {
  const query = await deleteMelee(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
