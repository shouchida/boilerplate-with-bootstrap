const target_browsers = [
  'last 2 versions',
  'ie >= 11',
  'android >= 6.0',
  'not dead'
];

const path = {
  src: 'src/',
  static: 'static/',
  dist: 'dist/'
};

const eolc = 'LF';

const encoding = 'UTF8';

const delete_scripts_comment = true;

module.exports = {
  target_browsers,
  path,
  eolc,
  encoding,
  delete_scripts_comment
};
