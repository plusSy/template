<template>
  <div>
    {{ data.componentName }} {{ injectData }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface testInterface {
  componentName: string
}

@Component
export default class TestCom extends Vue {
  @Prop(String) injectData!: string

  // data
  data: testInterface = {
    componentName: 'Test',
  }

  created() {
    console.log(this.injectData);
  }

  // eslint-disable-next-line class-methods-use-this
  init() {}
}
</script>
