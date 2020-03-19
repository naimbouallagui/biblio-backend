const express = require("express");
const router = express.Router();
const BookModel = require("../Models/bookSchema").BookModel;
const passport = require("passport");

/**
 * getAllBooks
 */
router.get("/getAllBooks", (req, res) => {
  BookModel.find((err, result) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(result);
  });
});

/**
 *  getBookById
 */
router.get("/getBook/:id", (req, res) => {
  BookModel.findById(req.params.id, (err, result) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(result);
  });
});

/**
 *  updateBook
 */
router.patch("/updateBook/:id", passport.authenticate("bearer", { session: false }),(req, res) => {
  BookModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, result) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(result);
    }
  );
});

/**
 *  deleteBook
 */

router.delete("/deleteBook/:id", passport.authenticate("bearer", { session: false }), (req, res) => {
  BookModel.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) res.sendStatus(500);
    else res.status(200).send("delete successfully");
  });
});

module.exports = router;
