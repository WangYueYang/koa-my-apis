import Koa from 'koa';
import config from './config';
import mongoose from 'mongoose';
import initController from './controller';
import bodyParser from 'koa-body-parser';


mongoose.connect(config.dbUrl);

const app = new Koa();

// 中间件
app.use(bodyParser());


//  初始化路由
initController(app);

app.listen(config.port, () => {
  console.log(`koa server port : ${config.port}`)
})