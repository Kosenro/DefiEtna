import { Request, Response } from 'express';
import Planning from '../database/models/planning';
import { createPlanning, updatePlanning, deletePlanning } from '../services/planning.service';

// permet chercher un objet dans la table Plannings en fonction de sont Id
async function getById(req: Request, res: Response) {
  const query = await Planning.findByPk(req.params.id).catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet chercher tout les objets dans la table Plannings
async function getAll(req: Request, res: Response) {
  const query = await Planning.findAll().catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet de créer un objet dans la tables Plannings
async function create(req: Request, res: Response) {
  if (!req.body.planning_name) { res.sendStatus(400).send("Planning name can't be empty"); return; }
  const query = await createPlanning(req);
  if (query === false) { res.sendStatus(400); } else { res.status(200).send(query); }
}

// permet de metttre à jour un objet en fonction de sont Id dans la table Plannings
async function updateById(req: Request, res: Response) {
  const query = await updatePlanning(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

//  suprime un objet dans la table Plannings
async function deleteById(req: Request, res: Response) {
  const query = await deletePlanning(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
