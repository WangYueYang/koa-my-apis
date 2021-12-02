import Koa from 'koa';
import Router from 'koa-router'
import config from './config';
import mongoose from './db/bookList';


const dbUrl = `mongodb://127.0.0.1:27017/test`;

mongoose.connect(dbUrl);

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = 'Hello Koa';
});

router.get('/api/getBookList', (ctx, next) => {
  
  ctx.body = 'api/get books'
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port, () => {
  console.log(`koa server port : ${config.port}`)
})

