/**
 * file: database/connection.ts
 * description: file responsible for make the connection with 'Sqlite3' and PostgreSQL using ORM 'knex'
 * date: 2020/08/07
 * author: Glaucia Lemos <glaucia_lemos86 - Twitter>
 * Link: https://devhints.io/knex
 */

import knex from 'knex';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

// ==> Conexão com sqlite3 & Knex
const db_sqlite = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true
});

//==> Conexão com PostgreSQL & Knex
// TODO --> Implementar o PostgreSQL
// https://gist.github.com/tukkajukka/9893e5f111862d06044b73fa944a8741
/* const db_pg = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  searchPath: '',
  pool: { min: 0, max: 7 }
}) */

export default db_sqlite;