import path from 'path';
const staticFileOptions = {
  root: path.join(__dirname, '../assets'),
  prefix: '/assets/' // optional: default '/'
};
export default staticFileOptions;
