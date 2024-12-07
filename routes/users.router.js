const express = require('express');
const faker = require('faker');

const router = express.Router();
router.get('/', (req, res) => {
  const users = [];
  const {size}  = req.query
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(users);
});

router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'user 2',
    price: 1000
  });
});
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'user created successfully',
    user: body,
  });
});

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'user updated successfully',
    user: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: 'user deleted successfully',
    id,
  });
});

module.exports = router;
