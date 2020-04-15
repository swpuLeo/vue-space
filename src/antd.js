import Vue from 'vue'
import {
  message,
  Button,
  Input
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Button)
Vue.use(Input)

Vue.prototype.$message = message
