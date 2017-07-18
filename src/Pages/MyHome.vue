<template>
  <div>
    <div class="mine_top">
    <div class="mine_setUp"></div>
    <div class="mine_title">我的</div>
    <div class="mine_user"><div></div></div>
    <div class="mine_name">西瓜西瓜</div>
    <div class="mine_love">
      <span>20</span><span>关注</span>
      <span>35</span><span>粉丝</span>
    </div>
    <div class="mine_style">爱生活，爱自己</div>
  </div>
  <div class="mine_content">
    <div class="mine_order">
      <div>我的订单</div>
      <div class="mine_next"></div>
      <div class="mine_order_all">查看全部订单</div>
    </div>
    <ul class="state">
      <li><img src="../assets/img/paid.png" alt=""><div>待付款</div></li>
      <li><img src="../assets/img/send.png" alt=""><div>待发货</div></li>
      <li><img src="../assets/img/shipped.png" alt=""><div>已发货</div></li>
      <li><img src="../assets/img/completed.png" alt=""><div>已完成</div></li>
    </ul>
    <ol class=items>
      <li><img src="../assets/img/service.png" alt=""><div>退货/售后</div><div class="mine_next"></div></li>
      <!-- <li><img src="../assets/img/custom.png" alt=""><div>爱购客服</div><div class="mine_next"></div></li> -->
      <router-link to="/Service" tag="li"><img src="../assets/img/custom.png" alt=""><div>爱购客服</div><div class="mine_next"></div></router-link>
      <li><img src="../assets/img/integral.png" alt=""><div>我的积分</div><div class="mine_next"></div></li>
      <li><img src="../assets/img/coupon.png" alt=""><div>我的优惠券</div><div class="mine_next"></div></li>
      <li><img src="../assets/img/share.png" alt=""><div>分享赢优惠券</div><div class="mine_next"></div></li>
      <li><img src="../assets/img/collect.png" alt=""><div>我的收藏</div><div class="mine_next"></div></li>
      <li><img src="../assets/img/post.png" alt=""><div>我的发帖</div><div class="mine_next"></div></li>
    </ol>
  </div>
    <store-footer></store-footer>
  </div>
</template>

<script>
import StoreFooter from '@/components/StoreFooter'

export default {
  name: 'home',
  components:{
    StoreFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mine_top{width:100%;height:8.04rem;background:url(../assets/img/mine_top.jpg) no-repeat;background-size:cover}
  .mine_top .mine_setUp{width:.84rem;height:.84rem;background:url(../assets/img/setUp.png) no-repeat;position:absolute;top:.48rem;left:.68rem}
  .mine_top .mine_title{line-height:1.76rem;font-size:.68rem;text-align:center;color:#fff;width:100%}
  .mine_top .mine_user{width:3.06rem;height:3.06rem;margin:.32rem auto 0;border-radius:50%;border:.1rem solid #65c4aa;border-left-color:transparent;transform:rotate(60deg)}
  .mine_top .mine_user div{background:url(../assets/img/mine_user.png) no-repeat;background-size:cover;width:3.04rem;height:3.04rem;border-radius:50%;transform:rotate(-60deg)}
  .mine_top .mine_name{font-size:.68rem;color:#fff;width:2.92rem;height:.96rem;margin:.28rem auto 0}
  .mine_top .mine_love{width:3.84rem;height:.68rem;margin:.16rem auto 0;color:#fff;font-size:.48rem}
  .mine_top .mine_love span:nth-of-type(1){color:#65c4aa}
  .mine_top .mine_love span:nth-of-type(3){color:#fe888b}
  .mine_top .mine_love span:nth-of-type(2){width:1.36rem;border-right:.02rem solid #fff;padding:0 .16rem}
  .mine_top .mine_love span:nth-of-type(4){padding:0 .16rem}
  .mine_top .mine_style{color:#fff;font-size:.56rem;opacity:.69;width:4.2rem;height:.8rem;margin:.12rem auto 0}
  .mine_content .mine_order{width:100%;height:1.36rem;font-size:.48rem;border-bottom:.02rem solid #dadada}
  .mine_content .mine_order div{display:inline-block;line-height:1.36rem}
  .mine_content .mine_order div:first-of-type{margin-left:.68rem}
  .mine_content .mine_order .mine_order_all{display:inline-block;line-height:1.36rem;width:3.44rem;float:right;color:#8b8b8b}
  .mine_content .mine_order .mine_next{float:right;margin-top:.4rem}
  .mine_content .state{width:100%;display:flex;justify-content:space-between}
  .mine_content .state li{display:inline-block;margin-right:1.96rem;padding:.44rem 0}
  .mine_content .state li:first-of-type{margin-left:1.48rem}
  .mine_content .state li:last-of-type{margin-right:1.48rem}
  .mine_content .items{margin-bottom:3.2rem}
  .mine_content .items li{border-top:.02rem solid #dadada;height:.8rem;padding:.58rem 0}
  .mine_content .items li img{display:inline-block;vertical-align:middle;margin:0 .4rem 0 .68rem}
  .mine_content .items li div{display:inline-block;vertical-align:middle}
  .mine_next{width:.32rem;height:.48rem;float:right;margin-right:.68rem;background:url(../assets/img/next.png) no-repeat}
  .store_footer{width:calc(88%);height:1.96rem;position:fixed;bottom:0;display:flex;justify-content:space-between;background-color:#fff;padding:0 1rem}
  .store_footer>li{width:2.48rem;height:2rem;font-size:.4rem;text-align:center}
  .store_footer>li>img{display:block;margin:0 auto}
  .current{color:#65c4aa}
</style>
