/**
 * @model script
 * @description 组件快速生成脚本
 * @author syl
*/

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const basePath = path.resolve(__dirname, '../src');
const dirName = process.argv[2];

if (!dirName) {
  console.log(chalk.red('error: 文件夹名称不能为空!'));
  console.log(chalk.red('示例: npm run com <componentName>'));
  process.exit(0);
}

const capirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);

const VueTemplte = `
<template>
  <div class="${dirName}-wrap">
    {{ data.componentName }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ${capirName}Data } from '@/types/components/${dirName}.interface';
// import {} from '@/compomemts'

@Component({})
export default class ${capirName}Com extends Vue {
  // Prop
  @Prop({ required: false, default: '' }) name!: string

  // data
  data: ${capirName}Data = {
    componentName: '${dirName}'
  }
}

</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.${dirName}-wrap {
  width: 100%;
}
</style>
`;


const interfaceTemplate = `
/**
 * @description ${capirName}Data 接口模板
*/
export interface ${capirName}Data {
  componentName: string
}
`;

// mkdir
fs.mkdirSync(`${basePath}/components/${dirName}`);

// cd
process.chdir(`${basePath}/components/${dirName}`);
fs.writeFileSync(`${dirName}.vue`, VueTemplte);

// cd interface componets
process.chdir(`${basePath}/types/components/`);
fs.writeFileSync(`${dirName}.interface.ts`, interfaceTemplate);

console.log(chalk.green('组件模板创建成功!'));

process.exit(0);
