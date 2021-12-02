const api = '/api';

const apis = {
  getBookList: '/getBookList',
  findBook: '/findBook',
  addBook: '/addBook',
  updateBook: '/updateBook',
  deleteBook: '/deleteBook'
}

const newApi = {};

for (let i in apis) {
  newApi[i] = `${api}${apis[i]}`;
}

export default newApi;