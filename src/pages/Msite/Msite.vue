<template>
  <div class="Msite">
    <div class="Msite_header">
      <div class="Msite_header_top">
        <span class="Msite_header_top_left">
          <span>狗狗 | 重庆</span>
            <i class="iconfont icon-sanjiao"></i>
        </span>
        <span class="Msite_header_input">
          <input type="text" placeholder="搜索商品和品牌">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="Msite_header_top_right">
          <i class="iconfont icon-xinxi"></i>
        </span>
      </div>
      <div class="Msite_header_button">
        <ul>
          <li class="on">首页</li>
          <li class="">狗狗主粮</li>
          <li class="">服饰城</li>
          <li class="">医疗保健</li>
          <li class="">零食玩具</li>
          <li class="">日用外出</li>
          <li class="">美容香波</li>
        </ul>
      </div>
    </div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../common/images/index/369bb47c593f6944600ffd807bad927d.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/index/8487a490b5541a4154f57000db9c3193.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/index/9001cc1717d37b1fbb8feaf3a0ee9d73.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/index/22878e4e3dfd9fb615efbdd8204f597c.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/index/6814c3e5ea5473b8c7b07bf0cbe0472d.jpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <div class="Msite_Nav">
      <img src="../../common/images/index/b611670706f71f0ba6937083d201996e.jpg" alt="">
    </div>
    <div class="Msite_types">
      <span class="Msite_types_row">
          <img src="../../common/images/index/881c6f016aa0c22104011926e51b4f47.jpg" alt="">
          <img src="../../common/images/index/a6cf6fd5d724bb125b40b17fba0cbe12.jpg" alt="">
          <img src="../../common/images/index/f8ea826966dcee6abccf2a9574b0e36e.jpg" alt="">
          <img src="../../common/images/index/5dc60db864d3123929f432e7757ceb96.jpg" alt="">
          <img src="../../common/images/index/36ce3471dd689ed7377d09b9986303c9.jpg" alt="">
      </span>
      <span class="Msite_types_row">
          <img src="../../common/images/index/5a6991defe3616bb1208506f5f0d78da.jpg" alt="">
          <img src="../../common/images/index/038add951408054bafb01498e8d98635.jpg" alt="">
          <img src="../../common/images/index/420a7f62887b490aa7c627dc5364178d.jpg" alt="">
          <img src="../../common/images/index/b799562d3f7f8ca39769dc5fd1794a4a.jpg" alt="">
          <img src="../../common/images/index/dfa5a7598e3ee203c05f0f03fc182edc.jpg" alt="">
      </span>
    </div>
    <div class="Msite_discount">
      <div class="Msite_dis_Seckill">
        <img src="../../common/images/index/85e2ada29e2157daeda797903cd13dd2.jpg" alt="">
      </div>
      <div class="Msite_dis_content">
        <span class="Msite_dis_content_day">
          <span class="Msite_dis_con_day_left">
            <img src="../../common/images/index/new_index_icon_suprice.png" alt="">
          </span>
          <span class="Msite_dis_content_day_right">本场结束12:00</span>
        </span>
        <div class="Msite_dis_content_content">

        </div>
      </div>
    </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
  export default {
    mounted(){
      var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        }
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Msite
    width 100%
    .Msite_header
      position fixed
      left 0
      right 0
      top: 0
      width 100%
      height 86px
      z-index 200
      background-color #fff
      .Msite_header_top
        margin 0 auto
        width 95%
        height 50px
        .Msite_header_top_left
          float left
          line-height 50px
          color #666
          font-size 14px
        .Msite_header_input
          line-height 50px
          font-size 14px
          color #666
          input[type='text']
            box-sizing: border-box;
            width 67%
            height 23px
            background-color #e9e9e9
            border-radius 3px
            color #666
            font-size 13px
            padding-left 10px
          .iconfont
            margin-left -25px
            font-size 12px
        .Msite_header_top_right
          float right
          line-height 50px
          color #666
          .iconfont
            font-size 20px
      .Msite_header_button
        width 100%
        height 36px
        ul
          width 560px
          height 100%
          text-align center
          color: #666;
          font-size 14px
          li
            width 80px
            line-height 36px
            float left
            &.on
              color: #38a71e
              font-weight bold

    .swiper-container
      width 100%
      margin-top 86px
      .swiper-slide
        width 100%
        height 160px
        img
          width 100%
          height 160px
    .Msite_Nav
      width 100%
      height 270px
      img
        width 100%
        height 100%
    .Msite_types
      background-color #050100
      width 100%
      height 190px
      .Msite_types_row:nth-child(1)
        width 100%
        height 95px
        display flex
        img
          width 20%
          height 95px
          flex 1
      .Msite_types_row:nth-child(2)
        width 100%
        height 95px
        display flex
        img
          width 20%
          height 95px
          flex 1
    .Msite_discount
      width 100%
      height 268px
      .Msite_dis_Seckill
        width 100%
        height 98px
        img
          width 100%
          height 100%

    .Msite_dis_content
      width 100%
      height 170px
      background rebeccapurple
      .Msite_dis_content_day
        width 100%
        height 40px
        .Msite_dis_con_day_left
          line-height 40px
          float left
        .Msite_dis_content_day_right
          float right
          line-height 40px
          font-size 14px
      .Msite_dis_content_content
        width 100%
        height 130px
        background darkgoldenrod

</style>
