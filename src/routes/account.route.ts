import express from 'express';
import { getAll, getByID, insert, update, remove } from '../data/account';

export const accountRouter = express.Router();

accountRouter.get('/', async ({ query }, res) => res.json(await getAll(query)));
accountRouter.get('/:id', async ({ params }, res) => res.json(await getByID(params.id)));

accountRouter.post('/', async ({ body }, res) => {
  try {
    const budget = await insert(body);
    res.json(budget);
  } catch (error) {
    res.json(error);
  }
});

accountRouter.put('/:id', async ({ params, body }, res) => {
  try {
    const budget = await update(params.id, body);
    res.json(budget);
  } catch (error) {
    res.json(error);
  }
});

accountRouter.delete('/:id', async ({ params }, res) => {
  try {
    const budget = await remove(params.id);
    res.json(budget);
  } catch (error) {
    res.json(error);
  }
});
