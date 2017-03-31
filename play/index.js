import { play } from 'vue-play'
import DatePicker from '../src/components/DatePicker'

play('DatePicker')
  .add('default', h => h(DatePicker, []))
