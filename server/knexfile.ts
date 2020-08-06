/**
 * file: knexfile.ts
 * description: config settings for connect with the Databases
 * date: 2020/08/07
 * author: Glaucia Lemos <glaucia_lemos86 - Twitter>
 * Link: https://devhints.io/knex
 */

import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
};