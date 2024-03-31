const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Display all items
router.get('/', async function (req, res, next) {
  try {
    const items = await Item.find({});
    res.render('index', { items: items });
  } catch (error) {
    next(error);
  }
});

// Add a new item
router.post('/add', async function (req, res, next) {
  try {
    const newItem = new Item({
      name: req.body.name,
      description: req.body.description
    });
    await newItem.save();
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

// Delete an item
router.post('/delete/:id', async function (req, res, next) {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

// Update an item
router.post('/update/:id', async function (req, res, next) {
  try {
    const { name, description } = req.body;
    await Item.findByIdAndUpdate(req.params.id, { name, description });
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
