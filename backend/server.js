const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const path = require('path');
const uuid = require('uuid');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());


const jsonServerRouter = jsonServer.router(path.join(__dirname, 'db.json'));

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = jsonServerRouter.db.get('users').find({ email, password }).value();

  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ message: 'Неправильні дані для входу' });
  }
});

app.post('/signup', (req, res) => {
  const { firstName, email, password } = req.body;
  const userId = uuid.v4();

  const existingUser = jsonServerRouter.db.get('users').find({ email }).value();
  if (existingUser) {
    res.status(409).json({ message: 'Користувач з таким email вже існує' });
    return;
  }

  const newUser = { firstName, email, password, userId };
  jsonServerRouter.db.get('users').push(newUser).write();

  res.status(201).json(newUser);
});

app.post('/purchase', (req, res) => {
  const { email, items, total } = req.body;
  const order = {
    id: uuid.v4(),
    email,
    items,
    total,
    date: new Date().toISOString()
  };

  jsonServerRouter.db.get('orders').push(order).write();
  res.status(201).json(order);
});

app.get('/orders', (req, res) => {
  const { email } = req.query;
  const orders = jsonServerRouter.db.get('orders').filter({ email }).value();
  res.json(orders);
});


app.use('/', jsonServerRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});