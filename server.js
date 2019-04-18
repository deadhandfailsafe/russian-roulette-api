const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
});

app.get('/', (req, res, db) => {
  db('deaths')
    .returning('amount')
    .then(amount => {
      res.send(amount);
    })
    .catch(err => res.status(400).json('Unable to get amount.'));
});

app.put('/lose', (req, res, db) => {
  db('deaths')
    .increment('amount', 1)
    .returning('amount')
    .then(amount => {
      res.send(amount);
    })
    .catch(err => res.status(400).json('Unable to get amount.'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Running on port ${process.env.PORT}');
});
