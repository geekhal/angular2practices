const path = require('path');
const _root = path.resolve(__dirname, '..');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  let objPath = path.join.apply(path, [_root].concat(args));
  // console.info('pathname: ', objPath);
  return objPath;
}
exports.root = root;