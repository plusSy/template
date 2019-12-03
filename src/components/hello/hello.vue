
<template>
  <div class="hello-wrap">
    {{ data.componentName }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { HelloData } from '@/types/components/hello.interface';
// import {} from '@/compomemts'

@Component({})
export default class HelloCom extends Vue {
  // Prop
  @Prop({ required: false, default: '' }) name!: string

  // data
  data: HelloData = {
    componentName: 'hello',
  }
}

</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.hello-wrap {
  width: 100%;
}
</style>
