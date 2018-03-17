<template>
  <div class="Cart">
    <span class="Cart_header">
      <span class="Cart_header_left" @click="goto('/type')">
        <i class="iconfont icon-jiantou3"></i>
      </span>
      <span class="Cart_header_text">购物车
      </span>
      <span class="Cart_header_right">
        <i class="iconfont icon-erweima"></i>
      </span>
    </span>
    <div class="Cart_header_content">
      <div class="Cart_header_top">
        <div class="Cart_content_item">
          <span class="item_icon">
            <i class="iconfont icon-fangwuxinxi"></i>
          </span>
          <span class="item_text">首页</span>
        </div>
        <div class="Cart_content_item">
          <span class="item_icon">
            <i class="iconfont icon-fenlei"></i>
          </span>
          <span class="item_text">购物车</span>
        </div>
        <div class="Cart_content_item">
          <span class="item_icon">
            <i class="iconfont icon-gouwuche"></i>
          </span>
          <span class="item_text">我的E宠</span>
        </div>
        <div class="Cart_content_item">
          <span class="item_icon">
            <i class="iconfont icon-xiaolian"></i>
          </span>
          <span class="item_text">我的E宠</span>
        </div>
      </div>
    </div>
    <div class="Cart_content">
      <div class="Cart_content_cart"></div>
      <div class="Cart_content_text">购物车是空的</div>
      <span class="Cart_content_text_span1">去逛逛</span>
      <span class="Cart_content_text_span2">我的收藏</span>
    </div>
  </div>
</template>
<script>

  export default {
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Cart
    width 100%
    background #F5F5F5
    height 667px
    .Cart_header
      position fixed
      left 0
      right 0
      top: 0
      width 100%
      height 50px
      z-index 200
      background #fff
      text-align center
      border-bottom 1px solid #e4e4e4
      .Cart_header_left
        margin-left 10px
        float left
        display inline-block
        line-height 50px
        .iconfont
          color #ccc
      .Cart_header_text
        line-height 50px
        font-size 18px
      .Cart_header_right
        float right
        line-height 50px
        margin-right 10px
        .iconfont
          color #ccc
        .iconfont
          font-size 25px
    .Cart_header_content
      display none
      width 100%
      height 55px
      margin-top 50px
      .Cart_header_top
        width 100%
        height 55px
        background #fff
        display flex
        .Cart_content_item
          margin-top 5px
          flex 1
          width 25%
          height 100%
          text-align center
          color #999
          &.on
            color: #2fa761
          & span
            font-size 12px
          .item_icon
            display block
            .iconfont
              font-size 30px
          .item_text
            display block
    .Cart_content
      margin-top 50px
      width 100%
      height 300px
      background #fff
      position relative
      .Cart_content_cart
        width 150px
        height 150px
        position absolute
        left 107.5px
        top 50px
        background-image url("../../common/images/shopcart/cart-ico.png")
        background-repeat no-repeat
        background-position 16px -199px
      .Cart_content_text
        position absolute
        left 38%
        top 190px
        color #ccc
        font-size 18px
      .Cart_content_text_span1
        text-align center
        position absolute
        display block
        border 1px solid #ccc
        width 100px
        height 40px
        line-height 40px
        left 24%
        top 220px
        color #ccc
        font-size 18px
        border-radius 5px
      .Cart_content_text_span2
        text-align center
        position absolute
        display block
        border 1px solid #ccc
        width 100px
        height 40px
        line-height 40px
        left 53%
        top 220px
        color #ccc
        font-size 18px
        border-radius 5px
</style>
