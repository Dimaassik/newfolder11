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
app.get('/category/:category/:productName', (req, res) => {
  const { category, productName } = req.params;

  let products = [];
  if (category === 'keyboards') {
    products = jsonServerRouter.db.get('keyboards').value();
  } else if (category === 'mice') {
    products = jsonServerRouter.db.get('mice').value();
  }

  const product = products.find(p => {
    const formattedTitle = p.title.replace(/\s+/g, '-').toLowerCase();
    return formattedTitle === productName;
  });

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

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

  const existingUser = jsonServerRouter.db.get('users').find({ email }).value();
  if (existingUser) {
    res.status(409).json({ message: 'Користувач з таким email вже існує' });
    return;
  }

  const newUser = { firstName, email, password };
  jsonServerRouter.db.get('users').push(newUser).write();

  res.status(201).json(newUser);
});

app.use('/', jsonServerRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});