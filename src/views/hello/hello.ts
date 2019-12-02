
import { Vue, Component } from 'vue-property-decorator';
// import {} from '@/componets'

interface HelloData {
  pageName: string
}

@Component({})
export default class HelloTpl extends Vue {
  // data
  data: HelloData = {
    pageName: 'hello',
  }
}
