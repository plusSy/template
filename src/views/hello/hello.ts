
import { Vue, Component } from 'vue-property-decorator';
import { HelloData } from '@/types/views/hello.interface';
// import {} from '@/components';

@Component({})
export default class HelloTpl extends Vue {
  // data
  data: HelloData = {
    pageName: 'hello',
  }
}
