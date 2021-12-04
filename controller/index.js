import Router from 'koa-router';
import ApiBookListController from './apiBookListController';
import ApiMdController from './apiMdController';
import newApi from '../config/apiUrl';

const router = new Router();
const apiBookListController = new ApiBookListController();
const apiMdController = new ApiMdController();


const initController = (app) => {

  router.get('/', ctx => {
    ctx.body = 'koa controller router'
  });


  router.get(newApi.getBookList, apiBookListController.actionGetBookList);
  router.post(newApi.findBook, apiBookListController.actionFindBook);
  router.post(newApi.addBook, apiBookListController.actionAddBook);
  router.post(newApi.updateBook, apiBookListController.actionUpdateBook);
  router.post(newApi.deleteBook, apiBookListController.actionDeleteBook);
  router.post(newApi.uploadMdFiles, apiMdController.actionUploadFiles);
  router.get(newApi.getMdFiles, apiMdController.actionGetMdFiles);

  app.use(router.routes()).use(router.allowedMethods());
}

export default initController;