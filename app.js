import Koa from 'koa';
import Router from 'koa-router'
import config from './config';
import mongoose from './db/bookList';
import {
  BooksBlog
} from './db/bookList';


const dbUrl = `mongodb://127.0.0.1:27017/test`;

mongoose.connect(dbUrl);

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = 'Hello Koa';
});


// 查询文件， find({里面添加条件})
router.get('/api/getBookList', async (ctx, next) => {
  await BooksBlog.find({}).then(res => {
    console.log(res, 'res')
    ctx.body = res;
  })
})

// 修改 之前的 update 被 updateMany 代替了， updateOne 如果查询到多条结果，只更新第一条记录。 upateMany 更新查询到的所有结果。 bulkWrite 提供可控执行顺序的批量写操作。 
// updateMany({},{}) 第一个参数是查询条件，第二个是修改的内容
router.get('/api/changeBookList', async (ctx, next) => {
  await BooksBlog.updateMany({
    _id: '61a874b214fb1a9df24345f6'
  }, {
    name: 'react',
    price: 99,
    describe: 'react.js'
  }).then(res => {
    console.log(res, 'update res');
    ctx.body = '修改成功';
  })
})


app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port, () => {
  console.log(`koa server port : ${config.port}`)
})