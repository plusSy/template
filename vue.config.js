const path = require('path');
const yaml = require('yamljs');

const publishConfig = yaml.load('./publicConfig.yaml');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  pages: {
    index: {
      entry: './src/main.ts',
      title: publishConfig.title,
    },
  },
  chainWebpack: (config) => {
    // 快捷访问方式
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components/'));
  },
};
