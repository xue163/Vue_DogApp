<template>
  <div class="Type">
    <!--头部-->
    <div class="Type_header">
      <span class="Type_header_left">
        <span class="Type_header_right_text1 on" >分类</span>
        <span class="Type_header_right_text2">品牌</span>
      </span>
      <span class="Type_header_right">
        <i class="iconfont icon-sousuo"></i>
      </span>
    </div>
    <!--分类列表-->
    <div class="Type_container">
      <ul>
        <li class="on">为您推荐
        </li>
        <li>狗狗主粮</li>
        <li>狗狗零食</li>
        <li>狗狗服饰</li>
        <li>狗狗窝垫</li>
        <li>狗狗保健</li>
        <li>狗狗玩具</li>
        <li>狗狗医疗</li>
        <li>狗狗牵引</li>
        <li>狗狗美容</li>
        <li>狗狗周边</li>
        <li>狗狗清洁</li>
        <li>狗狗生活</li>
      </ul>
    </div>
    <!--分类-->
    <Class/>
  </div>
</template>
<script>
  import Class from '../../compones/Class/Class.vue'
  export default {
    components:{
      Class
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Type
    overflow hidden
    width 100%
    background-color #F3F4F5
    .Type_header
      position fixed
      left 0
      right 0
      top: 0
      width 100%
      height 40px
      z-index 200
      background-color #fff
      border-bottom 2px solid #e4e4e4
      span
        line-height 40px
        font-size 13px
        font-weight 600
        display inline-block
      .Type_header_left
        float left
        margin-left 35%
        .Type_header_right_text1
          margin-right 30px
          &.on
            color: #d76363
            border-bottom 2px solid #d76363
      .Type_header_right
        float right
        margin-right 5%
        .iconfont
          color #ccc
          font-size 14px
    .Type_container
      float left
      margin-top 40px
      width 70px
      height 650px
      border 1px solid #fff
      background #fff
      ul
        width 100%
        height 100%
        text-align center
        color #333
        li
          width 70px
          height 49px
          border-bottom 1px solid #ededed
          line-height 49px
          font-size 13px
          &.on
            background-color #F3F4F5
            color #ED4044

</style>
