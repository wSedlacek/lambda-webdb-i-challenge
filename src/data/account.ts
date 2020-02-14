import { db } from './db';
import { Account } from '../models/Account';
import { Query } from '../models/Query';

export const getAll = async (query?: Query) => {
  const { page = 1, limit = 5, sortBy = 'id', sortDir = 'asc' } = query || {};
  const offset = limit * (page - 1);

  return await db<Account>('accounts')
    .orderBy(sortBy, sortDir)
    .limit(limit)
    .offset(offset);
};

export const getByID = async (id: string | number) =>
  await db<Account>('accounts')
    .where({ id })
    .first();

export const insert = async (budget: Account) =>
  await db<Account>('accounts')
    .insert(budget)
    .then((ids) => getByID(ids[0]));

export const update = async (id: string | number, changes: Account) =>
  await db<Account>('accounts')
    .where({ id })
    .update(changes)
    .then(() => getByID(id));

export const remove = async (id: string | number) => {
  const budget = getByID(id);
  await db<Account>('accounts')
    .where({ id })
    .del();
  return budget;
};
