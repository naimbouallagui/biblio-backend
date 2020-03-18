const express = require('express');
const router = express.Router();
const BookModel = require('../Models/bookSchema').BookModel;

// =========
// Read many
// =========
router.get('/getAllBooks', (req, res) => {
  BookModel.find((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;