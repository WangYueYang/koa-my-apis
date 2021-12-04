import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mdSchema = new Schema({
  files: Object
});

const MarkdownModel = mongoose.model('Markdown', mdSchema);

export default MarkdownModel;