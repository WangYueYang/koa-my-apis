import Koa from 'koa';
import mongoose from 'mongoose';


const dbUrl = `mongodb://127.0.0.1:27017/test`;
// 连接 mongodb
mongoose.connect(dbUrl);
// 返回一个状态 peding 的连接
const db = mongoose.connection;

db.on('error', (e) => console.log('error: ', e));
db.once('open', () => {
  console.log('连接成功111');
});


// 声明表的字段和类型
const kittySchema = mongoose.Schema({
  name: String,
  age: Number
});

kittySchema.methods.speak = function () {
  const greeting = this.name ? `My name is ${this.name}` : `No Name`;
  console.log(greeting, 'greeting');
}

// 创建一个 model 第一个参数是表的名字，第二个参数是上面声明的表
const Kitten = mongoose.model('Kitten', kittySchema);

const fluffy = new Kitten({
  name: 'new fluffy2222',
  age: 18
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
