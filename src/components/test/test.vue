
<template>
  <div class="test-wrap">
    {{ data.componentName }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { TestData } from '@/types/components/test.interface';
// import {} from '@/compomemts'

@Component({})
export default class TestCom extends Vue {
  // Prop
  @Prop({ required: false, default: '' }) name!: string

  // data
  data: TestData = {
    componentName: 'test',
  }
}

</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.test-wrap {
  width: 100%;
}
</style>
