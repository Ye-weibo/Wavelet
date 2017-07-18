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
            <!-- <li class="chat-list-content" v-for="item in robot">
              <div class="say-time">9:00</div>
              <div class="other">
                <div class="whatsay">
                  <img class="left-avater" src="../assets/img/humen.png" alt="avater">
                  <div class="triangle"></div>
                  <div class="whatsay_text">{{item}}</div>
                </div>
              </div>
            </li> -->
            <li class="chat-list-content" v-for="item in mysay" >
              <div class="say-time">{{item.data=='' ? nowdata : item.data}}</div> <!-- 聊天时间 -->
              
              <div :class="[item.ren]"> <!-- other:对方 mysay:我方 -->
                <div class="whatsay"> <!-- 聊天内容 -->
                  <img :class="[ item.ren=='mysay' ? 'right-avater' : 'left-avater']" src="../assets/img/humen.png" alt="avater"> <!-- 对方头像 -->
                  <div class="triangle" style="z-index: 10;"></div> <!-- 三角形样式 -->
                  <div class="whatsay_text" v-html="item.msg"> </div>
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
        nowdata:'',
        activeClass: 'other',
        errorClass: 'mysay',
        msg:'',
        mysay:[{'data':'','ren':'other','msg':'你好老板刚刚买的<b > 山寨 Robot </b>,请问有什么可以帮到你！'}],
        robot:[
          "你傻逼",
          "我不是店小二",
          "跟我聊天好玩吗",
          "你猜我会干什么",
          "我给你唱首歌",
          "要不我给你讲个故事吧",
          "算了不说了",
          "玛德之章",
          "带我装逼带我飞",
          "只想当个安静的美男子",
          "应该有很多大学生刚刚放了寒假，而放假之前最重要的事情是什么？没错，就是期末考试！相信大家都是过来人或正在过来的学生，都经历过临考之前的那几天突击复习",
          "天没降大任于我，照样苦我心智，劳我筋骨",
          "明骚易躲，黯贱难防",
          "人不犯我，我不犯人；人若犯我，礼让三分；人再犯我，我还一针；人还犯我，斩草除根",
          "西游记告诉我们：凡是有后台的妖怪都被接走了，凡是没后台的都被一棒子打死了",
          "我深信，会有一个男人饲为受我的折磨而来到这世上的",
          "你有什么不高兴的事？说出来让大家高兴一下",
          "我那么喜欢你，你喜欢我一下会死啊。",
          "我诅咒你一辈子买方便面没有调料包。",
          "不吃饱哪有力量减肥.",
          "我又不是人民币，怎么能让人人都喜欢我？！",
          "令人不能自拔的，除了牙齿还有爱情。",
          "我就要哭，我就要闹，一宿一宿不睡觉，手里拿瓶安眠药，拿根小绳要上吊。再丑也要谈恋爱，谈到世界布满爱。",
          "我们的目的：向钱看，向厚赚。",
          "我是你转身就忘的路人甲，凭什么陪你蹉跎年华到天际？",
          "间歇性郁闷症发作期间，生人勿扰，熟人勿找。",
          "说金钱是罪恶，都在捞；说美女是祸水，都想要；说高处不胜寒，都在爬；",
          "老娘法眼一开就知道你是个妖孽了。",
          "手插口袋，谁都不爱 ",
          "手拿菜刀砍电线，一路火花带闪电。",
          "单身并不难，难的是应付那些千方百计想让你结束单身的人 ",
          "幸福是什么?幸福就是你吃鱼我吃肉看着别人啃骨头。",
          "念了水几年书，想起来还是幼儿园比较好混！",
          "他们说我是BT，让我去做CT，结果我是ET。",
          "我的长处是：我很帅；但是我的缺点是：我帅的不明显。",
          "我当年也是个痴情的种子，结果下了场雨……淹死了。",
          "很多人说婚姻是爱情的坟墓，但是能够入土为安的爱情总比暴尸街头要好 。",
          "有空学风水去，死后占个好墓也算弥补了生前买不起好房的遗憾",
          "据说，人只有两个选择，忙着死或是忙着活，我想我有了第三种选择：忙着等死.",
          "刘昊",
          "刘军",
          "陈希鹏"
          ],
      }
  },
  mounted(){
    this.nowdata=this.getdata();
  },
  methods:{
    getdata(){
      let myDate = new Date();
      let fy=myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      let m=myDate.getMonth()+1; //获取当前月份(0-11,0代表1月)
      let d=myDate.getDate(); //获取当前日(1-31)
      let h=myDate.getHours(); //获取当前小时数(0-23)
      let min=myDate.getMinutes(); //获取当前分钟数(0-59)
      let s=myDate.getSeconds()
      var time=fy+"-"+m+"-"+d+"  "+h+":"+min+":"+s;
 
      return time
       
    },
    goback(){
      this.$router.back(-1)
    },
    send(){
      let getnowdata=this.getdata();
      var math = Math.floor(Math.random()*42);
      this.mysay.push({"data":getnowdata,"ren":"mysay","msg":this.msg});
      this.msg='';
      var mysay=this.mysay;
      var robot=this.robot;
      setTimeout(function(){
        mysay.push({"data":getnowdata,"ren":"other","msg":robot[math]});
      },200);
      setTimeout(function(){
        document.getElementsByClassName('chat-list')[0].scrollTop=document.getElementsByClassName('chat-list')[0].scrollHeight;
      },201);
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
  .chat-list-content>.say-time{text-align: center;font-size: 0.48rem;color: #404040;height: .56rem;}
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
  ::-webkit-scrollbar{width: 6px;height: 6px;}
  ::-webkit-scrollbar-track{border-radius: 3px;}
  ::-webkit-scrollbar-thumb{border-radius: 3px;-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);background-color: #c3c3c3;}
</style>
