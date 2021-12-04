import Controller from "./controller";
import MarkdownModel from '../models/mdModel';

class ApiMdController extends Controller {
  constructor() {
    super();
  }

  // 上传 md 文件
  // 这里上传文件的时候不要加 content-type: multipart/form-data
  // 会报错 Error: bad content-type header, no multipart boundary
  async actionUploadFiles(ctx) {

    const uploadFile = new MarkdownModel({
      files: ctx.request.files
    })
    
    const res = await uploadFile.save();


    ctx.body = ctx.request.files;
  }

  async actionGetMdFiles(ctx) {
    const res = await MarkdownModel.find({});

    ctx.body = res;
  }
}

export default ApiMdController;