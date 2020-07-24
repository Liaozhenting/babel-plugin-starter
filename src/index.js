const babel = require('babel-core');
const type = require('babel-types');

const visitor = {
  
}
console.log('my-plugin');
module.exports = function() {
  // 名称必须是visitor
  return { visitor };
}