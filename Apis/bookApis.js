const express = require("express");
const router = express.Router();
const BookModel = require("../Models/bookSchema").BookModel;

/**
 * getAllBooks
 */
router.get("/getAllBooks", (req, res) => {
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
router.get("/getBook/:id", async (req, res) => {
  await BookModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
});

/**
 *  updateBook
 */
router.patch("/updateBook/:id", (req, res) => {
  BookModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, result) => {
      if (err) res.sendStatus(500);
      else res.status(200).send("updated successfully");
    }
  );
});

/**
 *  deleteBook
 */

router.delete("/deleteBook/:id", (req, res) => {
  BookModel.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) res.sendStatus(500);
    else res.status(200).send("delete successfully");
  });
});

module.exports = router;