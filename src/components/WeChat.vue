<template>
  <div class="main">
    <!-- <canvas style="position: absolute;top: 0;bottom: 0;left: 0;right: 0;z-index: -1;width: 100%;height: 100%;display: inline-block;"></canvas> -->
    <div class="content">
      <div class="con-left">
        <header class="character">
          <div class="avatar"><img src="../images/touxiang.jpg"></div>
          <div class="info">
            <h3 class="nickname">
              <span class="user-name">Alone&</span>
              <a class="opt" href="javascript:;">
                <i class="nav-img"></i>
              </a>
            </h3>
          </div>
        </header>
        <div class="find">
          <input type="text" placeholder="搜索">
        </div>
        <nav class="nav">
          <div class="tab_item" @click="contentPage">
            <a href="javascript:;">
              <i class="nav_icon_one icon_img_public"></i><!-- nav_icon_one 各自的样式; icon_img_public 公用的背景-->
            </a>
          </div>
          <div class="tab_item" @click="contentPage">
            <a href="javascript:;">
              <i class="nav_icon_two"></i>
            </a>
          </div>
          <div class="tab_item" @click="contentPage">
            <a href="javascript:;">
              <i class="nav_icon_three"></i>
            </a>
          </div>
        </nav>
        <div class="chat">
          <div class="chat_content">
            <ul class="chat_list"> <!-- 聊天列表 -->
              <li class="chat_item active"> <!-- chat_item 公用的样式; active 公用的背景-->
                <div class="ext">
                  <p class="attr">19:30</p>
                  <p class="attr">
                    <i class="alarm"></i>
                  </p>
                </div>
                <div class="avatar">
                  <img src="../images/touxiang.jpg">
                </div>
              </li>
              <li class="chat_item active"> <!-- chat_item 公用的样式; active 公用的背景-->
                <div class="ext">
                  <p class="attr">19:30</p>
                  <p class="attr">
                    <i class="alarm"></i>
                  </p>
                </div>
                <div class="avatar">
                  <img src="../images/touxiang.jpg">
                </div>
              </li>
              <li class="chat_item active"> <!-- chat_item 公用的样式; active 公用的背景-->
                <div class="ext">
                  <p class="attr">19:30</p>
                  <p class="attr">
                    <i class="alarm"></i>
                  </p>
                </div>
                <div class="avatar">
                  <img src="../images/touxiang.jpg">
                </div>
              </li>
              <li class="chat_item active"> <!-- chat_item 公用的样式; active 公用的背景-->
                <div class="ext">
                  <p class="attr">19:30</p>
                  <p class="attr">
                    <i class="alarm"></i>
                  </p>
                </div>
                <div class="avatar">
                  <img src="../images/touxiang.jpg">
                </div>
              </li>
              <li class="chat_item active"> <!-- chat_item 公用的样式; active 公用的背景-->
                <div class="ext">
                  <p class="attr">19:30</p>
                  <p class="attr">
                    <i class="alarm"></i>
                  </p>
                </div>
                <div class="avatar">
                  <img src="../images/touxiang.jpg">
                </div>
              </li>
              <li class="chat_item active"> <!-- chat_item 公用的样式; active 公用的背景-->
                <div class="ext">
                  <p class="attr">19:30</p>
                  <p class="attr">
                    <i class="alarm"></i>
                  </p>
                </div>
                <div class="avatar">
                  <img src="../images/touxiang.jpg">
                </div>
              </li>
              <li class="chat_item active"> <!-- chat_item 公用的样式; active 公用的背景-->
                <div class="ext">
                  <p class="attr">19:30</p>
                  <p class="attr">
                    <i class="alarm"></i>
                  </p>
                </div>
                <div class="avatar">
                  <img src="../images/touxiang.jpg">
                </div>
              </li>
              <li class="chat_item active"> <!-- chat_item 公用的样式; active 公用的背景-->
                <div class="ext">
                  <p class="attr">19:30</p>
                  <p class="attr">
                    <i class="alarm"></i>
                  </p>
                </div>
                <div class="avatar">
                  <img src="../images/touxiang.jpg">
                </div>
              </li>
              <li class="chat_item active"> <!-- chat_item 公用的样式; active 公用的背景-->
                <div class="ext">
                  <p class="attr">19:30</p>
                  <p class="attr">
                    <i class="alarm"></i>
                  </p>
                </div>
                <div class="avatar">
                  <img src="../images/touxiang.jpg">
                </div>
              </li>
              <li class="chat_item active"> <!-- chat_item 公用的样式; active 公用的背景-->
                <div class="ext">
                  <p class="attr">19:30</p>
                  <p class="attr">
                    <i class="alarm"></i>
                  </p>
                </div>
                <div class="avatar">
                  <img src="../images/touxiang.jpg">
                </div>
              </li>
              <li class="chat_item active"> <!-- chat_item 公用的样式; active 公用的背景-->
                <div class="ext">
                  <p class="attr">19:30</p>
                  <p class="attr">
                    <i class="alarm"></i>
                  </p>
                </div>
                <div class="avatar">
                  <img src="../images/touxiang.jpg">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="con-right"></div>
    </div>
    <div class="footer">@ 1998-2017 Tencent Inc. All Rights Reserved  |  帮助</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      contentPage:function(ev){
        console.log(ev);
        // ev.target.style.background = "red";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul,h3,p{margin: 0;padding: 0;}
  li{list-style: none;}
  a,input{outline: none;}
  ::-webkit-scrollbar{width: 6px;height: 6px;}
  ::-webkit-scrollbar-track{border-radius: 3px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);}
  ::-webkit-scrollbar-thumb{border-radius: 3px;-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);background-color: #c3c3c3;}
  /*canvas{background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/img/2zrdI1g.jpg) no-repeat 50%;background-size: 100% 100%;}*/
  .avatar{display: table-cell;vertical-align: middle;word-break: break-all;word-wrap: break-word;white-space: nowrap;padding-right: 10.625px;}
  .main{display: block;height: 80%;min-height: 600px;min-width: 1000px;padding-top: 100px;backface-visibility: hidden;}
  .content{max-width: 1000px;min-width: 800px;height: 100%;margin: 0 auto;overflow: hidden;background: #ccc;}
  .con-left{position: relative;float: left;width: 280px;height: 100%;background: #2e3238;}
  .con-left .character{position: relative;padding: 18px;}
  .con-left .avatar img{width: 40px;height: 40px;}
  .con-left .info{width: 2000px;display: table-cell;vertical-align: middle;word-break: break-all;word-wrap: break-word;}
  .con-left .info .user-name{display: inline-block;font-weight: 400;width: 156px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;word-wrap: normal;font-size: 18px;vertical-align: top;line-height: 31px;color: #fff;text-decoration: none;}
  .con-left .info .opt{display: inline-block;vertical-align: top;}
  .con-left .info .opt .nav-img{background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png) no-repeat;display: inline-block;vertical-align: middle;width: 30px;height: 30px;background-size: 487px 462px;background-position: -434px -398px;cursor: auto;}
  .con-left .find{position: relative;width: 244px;margin: 0 18px 3px 18px;}
  .con-left .find input{height: 32px;line-height: 32px;width: 214px;padding-left: 30px;font-size: 12px;border: 0;color: #fff;background: #26292e;}
  .con-left .nav{overflow: hidden;position: relative;padding-bottom: 4px;}
  .con-left .nav:after{content: '';position: absolute;border-bottom: 1px solid #24272c;height: 0;bottom: 0;left: 0;right: 0;}
  .con-left .nav .tab_item{float: left;width: 33.33333333%;position: relative;}
  .con-left .nav .tab_item a{display: block;text-align: center;}
  .con-left .nav .tab_item .nav_icon_one,.nav_icon_two,.nav_icon_three,.icon_img_public{display: inline-block;vertical-align: middle;width: 35px;height: 35px;}
  .icon_img_public{background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png) no-repeat;background-position: -185px -96px;background-size: 487px 462px;}
  .nav_icon_two{background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png) no-repeat;background-position: -376px -322px;background-size: 487px 462px;}
  .nav_icon_three{background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png) no-repeat;background-position: -220px -96px;background-size: 487px 462px;}
  /*.con-left .nav .tab_item .nav_icon_one{background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png) no-repeat;background-position: -150px -96px;background-size: 487px 462px;}*/
  /*.con-left .nav .tab_item .nav_icon_one{background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/img/1OvE4o2.png) 0 -2083px;}*/
  .con-left .nav .tab_item:after{content: '';position: absolute;top: 7px;right: 0;width: 0;height: 20px;border-right: 1px solid #24272c;}
  .con-left .chat{position: relative;top: 0;right: 0;bottom: 0;left: 0;width: auto;visibility: visible;}
  .con-left .chat .chat_content{position: relative;height: 100%;overflow: hidden!important;padding: 0!important;}
  .con-left .chat .chat_list{margin-bottom: 0;margin-right: 0;height: 586px;border: none!important;box-sizing: content-box!important;height: 0 auto;left: 0;margin: 0;max-height: none!important;max-width: none!important;overflow-y: scroll!important;padding: 0;position: relative!important;top: 0;width: auto!important;}
  .con-left .chat .chat_item{overflow: hidden;padding: 12px 18px 11px;border-bottom: 1px solid #292c33;cursor: pointer;position: relative;}
  .chat_item .ext{float: right;font-size: 13px;text-align: right;color: #6b6f7c;}
  .chat_item .ext .attr{height: 19px;line-height: 1.5;}
  .chat_item .ext .alarm{display: inline-block;vertical-align: middle;width: 20px;height: 20px;background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png) no-repeat;background-position: -401px -357px;background-size: 487px 462px;}
  .footer{width: 100%;height: 100px;padding-top: 41px;text-align: center;color: #e3e3e3;}
</style>
