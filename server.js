const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// const db = knex({
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true
//   }

const database = {
  amount: 0
};

app.get('/', (req, res) => {
  res.json(database.amount);
  // db.select('amount')
  //   .from('deaths')
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => res.status(400).json('Unable to get amount.'));
});

app.put('/lose', (req, res) => {
  // db('deaths')
  //   .increment('amount', 1)
  //   .catch(err => res.status(400).json('Unable to get amount.'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Running on port ${process.env.PORT}');
});
