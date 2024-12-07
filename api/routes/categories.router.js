const express = require('express');
const faker = require('faker');

const router = express.Router();
router.get('/', (req, res) => {
  const categories = [];
  const {size}  = req.query
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    categories.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(categories);
});
router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'categoria 2',
    price: 1000
  });
});
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'categoria created successfully',
    categoria: body,
  });
});

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'categoria updated successfully',
    categoria: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: 'categoria deleted successfully',
    id,
  });
});

module.exports = router;
