const express = require('express');
const router = express.Router();
const BookModel = require('../Models/bookSchema').BookModel;

/**
 * getAllBooks
 */
router.get('/getAllBooks', (req, res) => {
  BookModel.find((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
});

/**
 *  getBookById
 */
router.get('/getBook/:id', async (req, res) => {
  await BookModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;