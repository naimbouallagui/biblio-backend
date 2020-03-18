const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  isbn: String,
  pageCount: Number,
  publishedDate: { type: Date, default: Date.now() },
  thumbnailUrl: String,
  shortDescription: String,
  longDescription: String,
  status: String,
  authors: [String],
  categories: [String]
});

module.exports = { BookModel: mongoose.model("books", bookSchema) };
