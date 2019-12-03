/**
 * @module scripts
 * @description create template script
 * @author syl
*/
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const basePath = path.resolve(__dirname, '../src');

const dirName = process.argv[2];

if (!dirName) {
  console.log(chalk.red('Please enter the name of a file or directory.'));
  console.log(chalk.red('Like this: npm run tpl hello'));
  process.exit(0);
}

const capPireName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);

// view ytemplate
const ViewTemplate = `
<template>
  <div class="${dirName}-wrap">
    {{ data.pageName }}
  </div>
</template>

<style lang="scss" scoped>
  @import './${dirName}.scss'
</style>

<script lang="ts" src="./${dirName}.ts"></script>
`;

// style template
const StyleTemplate = `
@import '@/assets/scss/variables.scss';

.${dirName}-wrap {
  width: 100%;
}
`;

// script template
const ScriptTemplate = `
import { Vue, Component } from 'vue-property-decorator';
import { ${capPireName}Data } from '@/types/views/${dirName}.interface.ts';
// import {} from '@/componets';

@Component({})
export default class ${capPireName}Tpl extends Vue {
  // data
  data: ${capPireName}Data = {
    pageName: '${dirName}',
  }
}
`;

// interface template
const interfaceTemplate = `
// ${dirName}.Data 类型
export interface ${capPireName}Data {
  pageName: string
}
`;

// mkdir
fs.mkdirSync(`${basePath}/views/${dirName}`);

// cd
process.chdir(`${basePath}/views/${dirName}`);

// touch tpl
fs.writeFileSync(`${dirName}.vue`, ViewTemplate);
fs.writeFileSync(`${dirName}.ts`, ScriptTemplate);
fs.writeFileSync(`${dirName}.scss`, StyleTemplate);

console.log(chalk.green('模板创建成功!'));

// create interfaceData
process.chdir(`${basePath}/types/views`);

fs.writeFileSync(`${dirName}.interface.ts`, interfaceTemplate);

console.log(chalk.green('Interface 文件创建成功!'));

process.exit(0);
