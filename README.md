## day01
### VueE宠商城
#### 1.搭建Vue脚手架
      npm install -g vue-cli   
      vue init webpack gshop_pet  
      cd gshop  
      npm install
      npm run dev
      : localhost:8080
#### 2.引入stylus
      Css预编译器
      npm install stylus stylus-loader --save-dev    
#### 3.搭建路由
      下载路由npm install vue-router --save
      引入路由模块并使用
      在main.js中配置路由
      项目路由拆分实现路由跳转
#### 4.编写首页的静态页面
      1.橡皮筋效果
      npm install better-scroll --save //better scroll
      2.图片轮播效果
      npm install swiper
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../common/images/index/369bb47c593f6944600ffd807bad927d.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="../../common/images/index/8487a490b5541a4154f57000db9c3193.jpg" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

            mounted(){
              var swiper = new Swiper('.swiper-container', {
                loop: true,
                pagination: {
                  el: '.swiper-pagination',
                }
              });
            }
## day02
     完成功能：首页，搭建分类页面，抽取分类详情的组件,购物车静态页面搭建
     完成进度：购物车页面的实现，使用雪碧图调整背景的位置
      面临问题：
      1.页面整体发生滑动
      2.分类页头部实现有些吃力
      如何解决：
      1.设置用户缩放行为为no,并且把每个轮播与橡皮筋的父级设置为overflow：hidden
      2.分类与品牌设为左浮动，搜索设为右浮动，分类与品牌之间使用margin-right去调
## day03
      1.登录方式的显示与隐藏，分类页面的数据获取
      2.mock模拟数据下载安装
      npm install mockjs --save
      在main 文件中引入 mockjs
      引入data数据
      配置mock url地址，模板数据
      
      问题：
      1.父组件添加子路由，样式失效
      解决方案：
      footer样式里面使用class="{on:$route.path==='/sort'}"中$route.path应该是/sort/tab1或/sort/tab2。 全等判断为false,无法绑定on
       可以通过截串:class="{on:$route.path.slice(0,5) ==='/sort'}" 之后解决；
      2. 点击导航变颜色
        重置点击事件的index值
        为当前点击的事件添加class样式
        @click="setIndex(index)" :class="{on:index===currentIndex}"
              setIndex(index){
                this.currentIndex = index
              },
