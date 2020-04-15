// ref: https://juejin.im/post/5d7ee31e518825664525dfe5

import Vue from 'vue'
const vm = new Vue()

const vCopy = {
  bind(el, { value }) {
    el.$value = value
    el.handler = () => {
      if (!el.$value) {
        vm.$message.warning('无复制内容')
      }
      const textarea = document.createElement('textarea')
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      textarea.value = el.$value
      document.body.appendChild(textarea)
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) vm.$message.success('复制成功')
      document.body.removeChild(textarea)
    }
    el.addEventListener('click', el.handler)
  },
  componentUpdated(el, { value }) {
    el.$value = value
  },
  unbind(el) {
    el.removeEventListener('click', el.handler)
  }
}

export default vCopy
