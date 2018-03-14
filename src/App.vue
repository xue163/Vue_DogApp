<template>
  <div id="app">
    <router-view />
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './compones/FooterGuide/ FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

