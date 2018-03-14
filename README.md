#day01
##VueE???????
  1.??Vue???????
    npm install -g vue-cli
    vue init webpack gshop_pet
    cd gshop
    npm install
    npm run dev
    ??: localhost:8080
  2.??????????
    ??stylus???????Css??
    npm install stylus stylus-loader --save-dev
  3.????
    ????npm install vue-router --save
    ?????????
    ?main.js?????
    ????????????
  4.?????????
    ???????????
    ??????
    1.??better-scroll???????
    npm install better-scroll --save //better scroll
    2.????
    ????swiper???????
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

