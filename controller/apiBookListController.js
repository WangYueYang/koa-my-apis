import Controller from "./controller";
import BooksBlog from "../models/bookListModel";


class ApiBookListController extends Controller {
  constructor() {
    super();
  }

  // 获取图书列表
  async actionGetBookList(ctx) {

    const res = await BooksBlog.find({})

    ctx.body = {
      response: ctx.response,
      list: res
    }
  }

  // 根据 name 书名查找
  async actionFindBook(ctx) {

    const {
      name
    } = ctx.request.body;

    const res = await BooksBlog.find({
      name
    });

    const {
      response
    } = ctx;

    ctx.body = {
      response,
      res
    };
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

    const {
      response
    } = ctx;

    ctx.body = {
      response,
      res
    };

  }

  // 修改图书
  async actionUpdateBook(ctx) {
    const {id, updateObj} = ctx.request.body;
    console.log(updateObj, 'update')
    const res = await BooksBlog.updateMany({
      _id: id
    }, updateObj);

    const {
      response
    } = ctx;

    ctx.body = {
      response,
      res
    };

  }

}

export default ApiBookListController;