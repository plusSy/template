
import { Vue, Component } from 'vue-property-decorator';
// import {} from '@/componets'

interface IndexData {
  pageName: string
}

@Component({})
export default class IndexTpl extends Vue {
  // data
  data: IndexData = {
    pageName: 'index',
  }
}
