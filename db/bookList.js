import mongoose, { mongo } from "mongoose";



const Schema = mongoose.Schema;


// 之后还想 添加字段的话通过 Schemad#add 方法
const booksSchema = new Schema({
  name: String,
  price: Number,
  author: String,
  describe: String,
  createDate: {
    type: Date,
    default: Date.now
  }
});


// 创建一个model
const BooksBlog = mongoose.model('BookList', booksSchema);

// const addBooks = new BooksBlog({
//   name: 'JavaScript',
//   price: 123,
//   author: 'wang',
//   describe: '一段对书本的描述' 
// });

// addBooks.save((err, res) => {
//   if (err) return console.log(err);
//   console.log('成功', res);
// })
