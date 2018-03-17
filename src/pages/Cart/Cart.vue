<template>
  <div class="Cart">
    <span class="Cart_header">
      <span class="Cart_header_left" @click="$router.back()">
        <i class="iconfont icon-jiantou3"></i>
      </span>
      <span class="Cart_header_text">购物车
      </span>
      <span class="Cart_header_right" @click="getCar(isShow)" :class="{on:isShow}">
        <i class="iconfont icon-erweima"></i>
      </span>
    </span>
      <transition name="slide">
        <div class="Cart_header_content" @click="getCar(isShow)">
          <div class="Cart_content_item">
            <span class="item_icon">
              <i class="iconfont icon-fangwuxinxi"></i>
            </span>
            <span>首页</span>
          </div>
          <div class="Cart_content_item">
            <span class="item_icon">
              <i class="iconfont icon-fenlei"></i>
            </span>
            <span>商品分类</span>
          </div>
          <div class="Cart_content_item">
            <span class="item_icon">
              <i class="iconfont icon-gouwuche"></i>
            </span>
            <span>购物车</span>
          </div>
          <div class="Cart_content_item">
            <span class="item_icon">
              <i class="iconfont icon-xiaolian"></i>
            </span>
            <span>我的E宠</span>
          </div>
        </div>
      </transition>
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
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      getCar(isShow){
        this.isShow = !isShow
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
      height 0
      overflow hidden
      border-bottom 1px solid #b2c6c7
      background #fff
      &.slide-enter-active
        transition all 1s ease-out
      &.slide-leave-active
        transition all 1.5s ease-out
      &.slide-enter,&.slide-leave-to
        height 70px
        .Cart_content_item
          display flex
          flex 1
          text-align center
          flex-direction column
          align-items center
          margin 10px
          color #999999
          &.on
            color #02a774
          span
            font-size 14px
            margin-top 2px
            .iconfont
              font-size 33px
    .Cart_content
      width 100%
      height 350px
      background #fff
      position relative
      .Cart_content_cart
        width 120px
        height 110px
        position absolute
        left 35%
        top 100px
        background-image url("../../common/images/shopcart/cart-ico.png")
        background-repeat no-repeat
        background-position 14px -151px
        background-size 100px
      .Cart_content_text
        position absolute
        left 38%
        top 220px
        color #ccc
        font-size 18px
      .Cart_content_text_span1
        text-align center
        position absolute
        display block
        border 1px solid #ccc
        width 90px
        height 35px
        line-height 35px
        left 24%
        top 250px
        color #ccc
        font-size 18px
        border-radius 5px
      .Cart_content_text_span2
        text-align center
        position absolute
        display block
        border 1px solid #ccc
        width 90px
        height 35px
        line-height 35px
        left 53%
        top 250px
        color #ccc
        font-size 18px
        border-radius 5px
</style>
