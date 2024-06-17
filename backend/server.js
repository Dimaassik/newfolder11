const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const jsonServerRouter = jsonServer.router(path.join(__dirname, 'db.json'));

app.post('/login', (req, res) => {
  const { firstName, password } = req.body;

  const user = jsonServerRouter.db.get('users').find({ firstName, password }).value();

  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ message: 'Неправильні дані для входу' });
  }
});

app.use('/', jsonServerRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});