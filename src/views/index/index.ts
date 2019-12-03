
import { Vue, Component } from 'vue-property-decorator';
import { IndexData } from '@/types/views/index.interface';
// import {} from '@/componets';

@Component({})
export default class IndexTpl extends Vue {
  // data
  data: IndexData = {
    pageName: 'index',
  }
}
