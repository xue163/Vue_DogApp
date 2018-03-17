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
## day04
    
      首页，分类页面获取数据完成,
      进度：实现图片懒加载
      问题：
      1点击回退失效
      2橡皮筋效果不能实现的问题
      3.首页加载完成后立即刷新时会出现轮播区域失效
      4.首页第一个轮播图 导航小圆点样式的修改
      解决方案
      1.底部的路由将replace替换为push,push可以添加到缓存中，可以通过
      this.$router.go(-1): 请求(返回)上一个记录路由
      this.$router.go(1): 请求下一个记录路由
      2.父级的高度固定，子级的高度要大于父级才会出现橡皮筋效果，使用better-Scorll,获取的是第一个子元素，分类列表右测要被包裹三层，最外层使用better-scorll,第二次用于获取第一个子元素，第三次用于获取数据。三层数据嵌套在父级使用v-if,不能放在第一层和第二层父级页面的初始没有数据，不会进入子级，所以会导致子级没有高度，导致获取不到子元素
      
      3.在获取数据之后，加一个回调函数，将sweper放到$nextTick函数中，当页面数据完成加载更新后立刻执行，
      并且在action异步请求函数中添加回调并调用
      4.首页第一个轮播图 导航小圆点样式的修改
        可以在Swiper自动生成的类上修改CSS样式
               .swiper-pagination-bullet 
                  background: #fff
                  opacity: .9
                  width: 6px
                  height: 6px
                  border-radius 100%
                .swiper-pagination-bullet-active //当前选中的圆点导航
                  width 16px
                  height 6px
                  border-radius 6px
        这个是轮播的一个配置，自动轮播时，你点了以后就不自动播放了，这个时解决这个问题的配置autoplay: {
                      delay: 2500,
                      disableOnInteraction: false,
                    },             
     
               
                
                
             
                
                
