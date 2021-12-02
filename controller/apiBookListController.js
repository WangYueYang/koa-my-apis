import Controller from "./controller";
import BooksBlog from "../models/bookListModel";

const responseDate = (ctx, res) => {
  const {
    response
  } = ctx;

  return ctx.body = {
    response,
    res
  };
}


class ApiBookListController extends Controller {
  constructor() {
    super();
  }



  // 获取图书列表
  async actionGetBookList(ctx) {

    const res = await BooksBlog.find({});
    ctx.body = responseDate(ctx, res);
  }

  // 根据 name 书名查找
  async actionFindBook(ctx) {

    const {
      name
    } = ctx.request.body;

    const res = await BooksBlog.find({
      name
    });

    ctx.body = responseDate(ctx, res);
  }

  // 添加图书
  async actionAddBook(ctx) {
    const {
      name,
      price,
      author,
      describe
    } = ctx.request.body;

    const addBook = new BooksBlog({
      name,
      price,
      author,
      describe
    })

    const res = await addBook.save();

    ctx.body = responseDate(ctx, res);

  }

  // 修改图书
  async actionUpdateBook(ctx) {
    const {
      id,
      updateObj
    } = ctx.request.body;

    const res = await BooksBlog.updateMany({
      _id: id
    }, updateObj);


    ctx.body = responseDate(ctx, res);

  }

  // 删除图书
  async actionDeleteBook(ctx) {
    const {
      id
    } = ctx.request.body;

    const res = await BooksBlog.deleteMany({
      _id: id
    });

    ctx.body = responseDate(ctx, res);

  }



}

export default ApiBookListController;