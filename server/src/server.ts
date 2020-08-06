/**
 * file: src/server.ts
 * description: file responsible for the main execution for the API
 * date: 2020/08/06
 * author: Glaucia Lemos <glaucia_lemos86 - Twitter>
 */

import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  return res.send({ message: 'Sejam bem-vindos(as) a API da Aplicação Proffy.' });
});

app.listen(5000);



