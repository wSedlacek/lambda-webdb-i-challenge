import knex from 'knex';

import { development } from './knex.config';

export const db = knex(development);
