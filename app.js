import Koa from 'koa';
import mongoose from 'mongoose';


const dbUrl = `mongodb://127.0.0.1:27017/test`;
// 连接 mongodb
mongoose.connect(dbUrl);
// 返回一个状态 peding 的连接
const db = mongoose.connection;

db.on('error', (e) => console.log('error: ', e));
db.once('open', () => {
  console.log('连接成功');
});

const kittySchema = mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  const greeting = this.name ? `My name is ${this.name}` : `No Name`;
  console.log(greeting, 'greeting');
}

const Kitten = mongoose.model('Kitten', kittySchema);

const felyne = new Kitten({
  name: 'MyKitten'
});
console.log(felyne.name, 'name')

const fluffy = new Kitten({
  name: 'fluffy'
});


fluffy.save((err, fluffy) => {
  if (err) return console.log(err);
  fluffy.speak();
});

Kitten.find((err, kittens) => {
  if (err) return console.log(err);
  console.log(kittens);
})

Kitten.find({name: /^fluff/}, () => console.log('find callback'))
