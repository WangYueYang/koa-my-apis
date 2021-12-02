import mongoose from "mongoose";

const Schema = mongoose.Schema;

const booksSchema = new Schema({
  name: String,
  price: Number,
  author: String,
  describe: String,
  createDate: {
    type: Date,
    default: Date.now
  }
})

const BooksBlog = mongoose.model('BookList', booksSchema);

export default BooksBlog;