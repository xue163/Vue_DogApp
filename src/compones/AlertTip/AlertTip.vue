<template>
  <div>

  </div>
</template>
<script>
  import {MessageBox } from 'mint-ui'
  export default {
    mounted(){
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
