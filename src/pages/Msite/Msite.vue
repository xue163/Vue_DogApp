<template>
  <div class="Msite">
    <!--头部导航-->
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
      <div class="Msite_header_button" ref="shopBox">
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
    <!--轮播效果-->
    <div class="swiper-container swiper-one">
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
          <div class="swiper-slide">
            <img src="../../common/images/index/tongzhi.jpg" alt="">
          </div>
        </div>
      <div class="swiper-pagination"></div>
    </div>
    <!--315我们在行动-->
    <div class="Msite_Nav">
      <img src="../../common/images/index/b611670706f71f0ba6937083d201996e.jpg" alt="">
    </div>
    <!--E宠分类-->
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
    <!--一折秒杀-->
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
            <div class="swiper-two">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/2a13da7043d568175753177ca978dae7.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/2cdec1bd58b2216764993c30c4fd0ec1.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/6d615faef8b6a01e891d8a3012fbb3e6.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/8a143773496de6f3afd02634e83ed71f.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/68d45608ddbec32608cddec587c342e1.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/9876aff7e2c82b7e07fc0d2b5f47c576.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/bd6849693ff38f7a86facd53475388f3.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/e9d557ad275060a67574834a21aecf15.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--品牌力量-->
    <div class="Msite_discount">
      <div class="Msite_dis_Seckill">
        <img src="../../common/images/index/f1b7fefaf2e0a3b01498658788d75fbd.jpg" alt="">
      </div>
      <div class="Msite_dis_content">
        <img src="../../common/images/index/081c4aec9c8c81fa8dcb5bb9a63ddac5.gif" alt="">
      </div>
    </div>
    <!--一折团-->
    <div class="Msite_group">
      <div class="Msite_group_Seckill">
        <img src="../../common/images/index/5fd369ed534f5a32ac751ff29ab90034.jpg" alt="">
      </div>
      <div class="Msite_group_content">
        <div class="swiper-three">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../common/images/index/3c54559f077235436b408a6839138b4f.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../common/images/index/3ea8f16882581307427bd3d962fc6dd0.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../common/images/index/9e4502cf22ecb6f8b97715c7fc73ed50.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../common/images/index/f122ae20ce1880988ff7e5c64440675a.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--VIP尊享服务-->
    <div class="Msite_brand">
      <div class="Msite_brand_Seckill">
        <img src="../../common/images/index/02cdfda794ee4cc90e0e39462e17d49d.jpg" alt="">
      </div>
      <div class="Msite_brand_list">
        <img src="../../common/images/index/fd6e6a5c56820b18eb2e0f6e359d9f59.jpg" alt="">
        <img src="../../common/images/index/fd6e6a5c56820b18eb2e0f6e359d9f59.jpg" alt="">
        <img src="../../common/images/index/fd6e6a5c56820b18eb2e0f6e359d9f59.jpg" alt="">
        <img src="../../common/images/index/fd6e6a5c56820b18eb2e0f6e359d9f59.jpg" alt="">
      </div>
      <div class="Msite_brand_list">
        <img src="../../common/images/index/fd6e6a5c56820b18eb2e0f6e359d9f59.jpg" alt="">
        <img src="../../common/images/index/fd6e6a5c56820b18eb2e0f6e359d9f59.jpg" alt="">
        <img src="../../common/images/index/fd6e6a5c56820b18eb2e0f6e359d9f59.jpg" alt="">
        <img src="../../common/images/index/fd6e6a5c56820b18eb2e0f6e359d9f59.jpg" alt="">
      </div>

    </div>
    <!--大牌好货-->
    <div class="Msite_Major">
      <div class="Msite_Major_good">
        <img src="../../common/images/index/0d6125d9f846519e83e7354bd8638cf7.jpg" alt="">
      </div>
      <ul class="Msite_Major_one">
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
      </ul>
      <ul class="Msite_Major_two">
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
      </ul>
      <ul class="Msite_Major_two">
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
      </ul>
      <ul class="Msite_Major_two">
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
        <li><img src="../../common/images/index/0a62002ed3ef0055064da37248c99069.jpg" alt=""></li>
      </ul>
    </div>
    <!--特别星球-->
    <div class="Msite_Especially">
      <div class="Msite_Especially_star">
        <img src="../../common/images/index/img3.jpg" alt="">
      </div>
      <div class="Msite_Especially_sale">
        <div class="Msite_Especially_sale_left">
          <img src="../../common/images/index/img4.jpg" alt="">
        </div>
        <div class="Msite_Especially_sale_right">
          <div class="Msite_Especially_sale_right_one">
            <img src="../../common/images/index/img5.jpg" alt="">
          </div>
          <div class="Msite_Especially_sale_right_two">
            <img src="../../common/images/index/img6.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <div class="Msite_footer">
      <ul>
        <li class="on">触屏版</li>
        <li>手机客户端</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ul>
      <p class="Msite_footer_text">© wap.epet.com 版权：重庆易宠科技有限公司</p>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
  export default {
    mounted(){
      var swiper = new Swiper('.swiper-one', {
        autoplay:true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        }
      });
      var nav = new Swiper('.swiper-two',{
        slidesPerView:4,//每次展现的个数
        freeMode:true,//橡皮筋效果
        spaceBetween:10//左右间距
      });
      var group = new Swiper('.swiper-three', {
        slidesPerView:1,//每次展现的个数
        freeMode:true,//橡皮筋效果
      });
    },
    created () {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    methods:{
      _initScroll () {
        this.shopBoxScroll = new BScroll(this.$refs.shopBox, {
          // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
          click: true,
          scrollX: true,
        });
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Msite
    width 100%
    height 6020px
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
          overflow hidden
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
      overflow hidden
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
        img
          width 100%
          height 100%
        .Msite_dis_content_day
          display block
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
          overflow hidden
          width 100%
          height 130px
          .swiper-slide
            width 100%
            height 130px
            display flex
            .Msite_dis_content_item
              text-align center
              width 84px
              height 130px
              flex 1
              .Msite_dis_content_item_img
                width 84px
                height 84px
                img
                  width 100%
                  height 100%
              .Msite_dis_content_item_cont
                margin-top 5px
                font-size 13px
                .Msite_dis_content_item_text:nth-child(1)
                  color #f47171
                .Msite_dis_content_item_text:nth-child(2)
                  color #ccc
                  margin-top 5px
    .Msite_group
      width 100%
      height 226px
      .Msite_group_Seckill
        width 100%
        height 100px
        img
          width 100%
          height 100%
      .Msite_group_content
        width 100%
        overflow hidden
        .swiper-slide
          width 100%
          height 126px
          img
            width 100%
            height 100%
    .Msite_brand
      width 100%
      height 295px
      .Msite_brand_Seckill
        width 100%
        height 95px
        img
          width 100%
          height 100%
      .Msite_brand_list
        width 100%
        height 100px
        display flex
        img
          width 50%
          height 100px
          flex 1
    .Msite_Major
      width 100%
      overflow hidden
      background #000
      .Msite_Major_good
        width 100%
        height 99px
        img
          width 100%
          height 100%
      .Msite_Major_one
        width 100%
        height 908px
        li
          float left
          width 185.5px
          height 225px
          border 1px solid #ccc
          img
            width 100%
            height 100%
      .Msite_Major_two
        width 100%
        height 908px
        margin-top 10px
        li
          float left
          width 185.5px
          height 225px
          border 1px solid #ccc
          img
            width 100%
            height 100%

  .Msite_Especially
      width 100%
      height 424px
      .Msite_Especially_star
        width 100%
        height 84.5px
        img
          width 100%
          height 100%
      .Msite_Especially_sale
        width 100%
        height 339.5px
        .Msite_Especially_sale_left
          float left
          width 188px
          height 339.5px
          background-color rebeccapurple
          img
            width 100%
            height 100%
        .Msite_Especially_sale_right
          float right
          width 187px
          height 339.5px
          .Msite_Especially_sale_right_one
            width width 187px
            height 168.5px
            img
              width 100%
              height 100%
          .Msite_Especially_sale_right_two
            width width 187px
            height 171px
            img
              width 100%
              height 100%
  .Msite_footer
    width 100%
    height 86px
    ul
      margin 10px auto
      width 80%
      height 42px
      li
        text-align center
        float left
        width 70px
        line-height 42px
        font-size 14px
        color #333
        &.on
          color red
    .Msite_footer_text
      text-align center
      height 40px
      font-size 12px
      margin-top -10px
</style>
