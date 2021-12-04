import Koa from 'koa';
import config from './config';
import mongoose from 'mongoose';
import initController from './controller';
import bodyParser from 'koa-body-parser';
import koaBody from 'koa-body';


mongoose.connect(config.dbUrl);

const app = new Koa();

// 中间件
app.use(bodyParser()).use(koaBody({
  multipart: true,
  formidable: {
    maxFields: 200 * 1024 * 1024
  }
}));
// 跨域
app.use(async (ctx, next) => {
  // 允许所有域名跨域
  ctx.set('Access-Control-Allow-Origin', '*');
  // 所允许的HTTP请求方法
  ctx.set('Access-Control-Allow-Methods', 'GET, POST');

  await next();
})


//  初始化路由
initController(app);

app.listen(config.port, () => {
  console.log(`koa server port : ${config.port}`)
})