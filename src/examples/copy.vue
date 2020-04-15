<template>
  <div>
    <p>{{msg}}</p>
    <a-button v-copy="msg">复制这段话</a-button>
    <a-textarea placeholder="在这里粘贴复制的内容"></a-textarea>
  </div>
</template>

<script>
export default {
  name: 'example-copy',
  data() {
    return {
      msg: 'This is a piece of test message.'
    }
  }
}
</script>
