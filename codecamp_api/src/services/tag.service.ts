import { Request } from 'express';
import Tag from '../database/models/tag';

async function createTag(req: Request) {
  const tag = {
    tag_name: req.body.tag_name,
  };
  const query = await Tag.create(tag).catch(() => false);

  return query;
}

async function updateTag(req: Request) {
  const query = await Tag.update(req.body, { where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

// supprime la ressource donnée et la retourne
async function deleteTag(req: Request) {
  const query = await Tag.destroy({ where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

export {
  createTag,
  updateTag,
  deleteTag,
};
