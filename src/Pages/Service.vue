<template>
  <div class="overflow">
    <!-- Chat Header  Start !-->
    <div class="title" style="position: fixed;top: 0;left: 0;z-index: 200;">
      <i v-on:click="goback()"></i>
      <span>爱购店小二</span>
    </div>
    <!-- Chat Header  End !-->
    <!-- Chat Content  Start !-->
    <div style="width: 100%;height: 26.66rem;background-color: #f9f9f9;">
      <section class="chat-content">
        <section class="content">
          <ul class="chat-list" id="chat-list" style="height: 1134px;overflow-y: scroll;">
            <li class="chat-list-content">
              <div class="say-time">{{date}}</div> <!-- 聊天时间 -->
              <div class="other"> <!-- other:对方 mysay:我方 -->
                <div class="whatsay"> <!-- 聊天内容 -->
                  <img class="left-avater" src="../assets/img/humen.png" alt="avater"> <!-- 对方头像 -->
                  <div class="triangle"></div> <!-- 三角形样式 -->
                  <div class="whatsay_text">{{robot}}</div>
                </div>
              </div>
            </li>
            <li class="chat-list-content" v-for="item in mysay">
              <div class="say-time">{{date}}</div> <!-- 聊天时间 -->
              <div class="mysay"> <!-- other:对方 mysay:我方 -->
                <div class="whatsay"> <!-- 聊天内容 -->
                  <img class="right-avater" src="../assets/img/humen.png" alt="avater"> <!-- 对方头像 -->
                  <div class="triangle" style="z-index: 10;"></div> <!-- 三角形样式 -->
                  <div class="whatsay_text">{{item}}</div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </div>
    <!-- Chat Content  End !-->
    <!-- Chat Footer  Start !-->
    <div class="footer" style="position: fixed;bottom: 0;left: 0;display: flex;">
      <div class="services">
        <img class="humen" src="../assets/img/kefu.png">
        <span>人工服务</span>
      </div>
      <input type="text" v-model="msg" @keyup.13="send">
      <div class="laugh"><i class="iconfont icon-biaoqing"></i></div>
      <div class="else"><i v-if="!msg" class="iconfont icon-add"></i><span v-if="msg" class="send" @click="send">发送</span></div>
    </div>
    <!-- Chat Footer  End !-->
  </div>
</template>

<script>

export default {
  data(){
      return{
        date:new Date(),
        msg:'',
        mysay:[],
        robot:'您好，店小二爱购很高兴为您服务，请问有什么可以帮助你的吗？请你输入关键字，店小二马上为您排忧解难哦～',
        // robot:["你傻逼","我不是店小二","我是机器人","跟我聊天好玩吗","你猜我会干什么","我给你唱首歌","要不我给你讲个故事吧","算了不说了"],
      }
  },
  methods:{
    goback(){
      this.$router.back(-1)
    },
    send(){
      // var math = Math.random()*7;
      // this.robot.push(math);
      this.mysay.push(this.msg);
      this.msg='';
      setTimeout(function(){
        document.getElementsByClassName('chat-list')[0].scrollTop=document.getElementsByClassName('chat-list')[0].scrollHeight;
      },0);
    },
  },
}
</script>
<style scoped>
  .overflow{overflow: hidden;}
  /* Header Style Start ! */
  .title{width: 100%;padding: .56rem 0;box-shadow: .02rem .02rem 0rem rgba(210,210,210,0.50);background: #fff;}
  .title>i{display: inline-block;width: .36rem;height: .64rem;margin-top:  0.02rem;margin-left: .66rem;background: url(../assets/img/preleft.png) no-repeat;}
  .title>span{display: inline-block;padding-left: 4.9rem;font-size: .68rem;font-family: PingFangSC-Regular;letter-spacing: -0.017rem;color: #404040;}
  /* Header Style End ! */
  /* Chat Content Style Start ! */
  .chat-content{width: 100%;position: relative;top: 2.02rem;background-color: #f9f9f9;}
  .chat-content>.content{position: relative;overflow: auto;}
  .chat-list-content{padding: 0rem .72rem;}
  .chat-list-content:first-child{padding-top:0.56rem;}
  .chat-list-content:last-child{padding-bottom:0.56rem;}
  .chat-list-content>.say-time{text-align: center;font-size: 0.48rem;color: #404040;}
  .other,.mysay{width: 100%;display: -webkit-box;-webkit-box-pack: start;justify-content: flex-start;margin-bottom: .512rem;}
  .other>.whatsay,.mysay>.whatsay{position: relative;margin-top: .32rem;}
  .left-avater,.right-avater{display: block;width: 1.6rem;height: 1.6rem;border-radius: 50%;background-color: #fff;}
  .right-avater{position: relative;right: -11.7rem;}
  .other>.whatsay>.triangle{overflow: hidden;position: relative;width: .3rem;height: .3rem;left: 1.76rem;top: -0.56rem;}
  .other>.whatsay>.triangle:after{content: '';position: absolute;top: -0.7rem;left: .38rem;width: 1.3rem;height: 1.3rem;border: .04rem solid #d9d9d9;transform: rotate(217deg);background-color: #fff;}
  .mysay>.whatsay>.triangle{overflow: hidden;position: relative;width: .3rem;height: .3rem;left: 11.28rem;top: -0.56rem;}
  .mysay>.whatsay>.triangle:after{content: '';position: absolute;top: -0.7rem;left: -1.42rem;width: 1.3rem;height: 1.3rem;border: .04rem solid #d9d9d9;transform: rotate(328deg);background-color: #fff;}
  .chat-list-content>.other>.whatsay>.whatsay_text{margin-left: 2.04rem;margin-top: -1.3rem;max-width: 8.3rem;padding: 0.46rem 0.34rem;border: 1px solid #d9d9d9;border-radius: 0.16rem;font-size: 0.6rem;line-height: 0.8rem;word-break: break-all;background-color: #fff;color: #6a6a6a;}
  .chat-list-content>.mysay>.whatsay>.whatsay_text{float: right;margin-right: -9.74rem;margin-top: -1.3rem;max-width: 8.3rem;padding: 0.46rem 0.34rem;border: 1px solid #d9d9d9;border-radius: 0.16rem;font-size: 0.6rem;line-height: 0.8rem;word-break: break-all;background-color: #fff;color: #6a6a6a;}
  /* Chat Content Style End ! */
  /* Chat Footer Style Start ! */
  .footer{width: 100%;height: 1.96rem;background: #ebebeb;}
  .footer>.services{width: 1.56rem;height: 1.48rem;padding-top: .28rem;padding-left: .42rem;}
  .services>.humen{width: .88rem;height: .92rem;padding-left: .28rem;}
  .services>span{display: block;font-family: PingFangSC-Regular;font-size: .4rem;letter-spacing: -0.01rem;color: #8b8b8b;}
  .footer>input{width: 9.52rem;height: 1.52rem;margin: .24rem .28rem;background: #fff;border-radius: .16rem;opacity: 1.8;font-size: .6rem;}
  .laugh,.else{width: 1.08rem;height: 1.08rem;padding-top: 0.44rem;}
  .laugh{padding-right: .28rem;}
  .icon-biaoqing,.icon-add{font-size: 1.08rem;color: #8b8b8b;}
  .send{display: block;width: 1.3rem;font-size: .48rem;text-align: center;line-height: 1.12rem;border-radius: .3rem; background: #65c4aa;color: #fff;}
  /* Chat Footer Style End ! */
</style>
