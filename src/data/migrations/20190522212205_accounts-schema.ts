import Knex from 'knex';

export const up = (knex: Knex, _: Promise<any>) =>
  knex.schema.createTable('accounts', (tbl) => {
    tbl.increments();
    tbl
      .string('name')
      .notNullable()
      .unique();
    tbl.decimal('budget').notNullable();
  });

export const down = (knex: Knex, _: Promise<any>) => knex.schema.dropTableIfExists('accounts');
