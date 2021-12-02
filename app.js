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

app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port, () => {
  console.log(`koa server port : ${config.port}`)
})