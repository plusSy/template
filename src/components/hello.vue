<template>
  <div>
    {{ data.componentName }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface helloInterface {
  componentName: string
}

@Component
export default class HelloCom extends Vue {
  @Prop(String) injectData!: string

  // data
  data: helloInterface = {
    componentName: 'test',
  }
}
</script>
