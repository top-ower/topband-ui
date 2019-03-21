var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`topband-ui/packages/${key}`] = `topband-ui/lib/${key}`;
});

externals['topband-ui/src/locale'] = 'topband-ui/lib/locale';
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`topband-ui/src/utils/${file}`] = `topband-ui/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`topband-ui/src/mixins/${file}`] = `topband-ui/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`topband-ui/src/transitions/${file}`] = `topband-ui/lib/transitions/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'topband-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;
