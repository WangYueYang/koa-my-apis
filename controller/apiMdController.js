import Controller from "./controller";
import MarkdownModel from '../models/mdModel';
import { readFile } from 'fs/promises';

class ApiMdController extends Controller {
  constructor() {
    super();
  }

  // 上传 md 文件
  // 这里上传文件的时候不要加 content-type: multipart/form-data
  // 会报错 Error: bad content-type header, no multipart boundary
  async actionUploadFiles(ctx) {

    // const uploadFile = new MarkdownModel({
    //   files: ctx.request.files
    // })
    
    // const res = await uploadFile.save();

    try {

      // 这里通过 fs 读取到 .md 的文件内容，默认是 buffer，加 utf-8 编码
      const promise = readFile(ctx.request.files.file.path, 'utf-8')

      const res = await promise;
      ctx.body = {
        time: +new Date(),
        content: res
      };
    } catch(e) {
      console.log(e)
    }



  }

  async actionGetMdFiles(ctx) {
    const res = await MarkdownModel.find({});

    ctx.body = res;
  }
}

export default ApiMdController;