import Router from 'koa-router';
import ApiBookListController from './apiBookListController';

const router = new Router();
const apiBookListController = new ApiBookListController();

const initController = (app) => {

  router.get('/', ctx => {
    ctx.body = 'koa controller router'
  })
  
  router.get('/api/getBookList', apiBookListController.actionGetBookList);
  router.post('/api/findBook', apiBookListController.actionFindBook);
  router.post('/api/addBook', apiBookListController.actionAddBook);
  router.post('/api/updateBook', apiBookListController.actionUpdateBook);
  router.post('/api/deleteBook',apiBookListController.actionDeleteBook);

  app.use(router.routes()).use(router.allowedMethods());
}

export default initController;