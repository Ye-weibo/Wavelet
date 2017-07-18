<template>
<div>
    <div class="store_top">
    <store-find></store-find>
    <store-choose></store-choose>
  </div>
  <div class="recommend_content">
    <swiper class="swiper-container">
        <swiper :options="swiperOption" class="swiper-wrapper">
            <swiper-slide class="swiper-slide"><img src="../assets/img/recommend1.jpg" alt="tu"></swiper-slide>
            <swiper-slide class="swiper-slide"><img src="../assets/img/decoration.jpg" alt="tu"></swiper-slide>
            <swiper-slide class="swiper-slide"><img src="../assets/img/storage.jpg" alt="tu"></swiper-slide>
            <swiper-slide class="swiper-slide"><img src="../assets/img/textiles.jpg" alt="tu"></swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul class="advantage">
      <li>欧美质量标准</li>
      <li>30天无忧退货</li>
      <li>24小时快速发货</li>
    </ul>
    <div class="recommend_direct">
      <h2>欧美生活直通车</h2>
      <div>
        <div class="recommend_left"><img src="../assets/img/recommend_dir1.png" alt=""></div>
        <div class="recommend_right">
          <div><img src="../assets/img/recommend_dir3.png" alt=""></div>
          <div><img src="../assets/img/recommend_dir2.png" alt=""></div>
        </div>
      </div>
    </div>
    <div class="recommend_new">
      <h2>新品上市</h2>
      <ul>
        <li>
          <div><img src="../assets/img/recommend_nem1.png" alt=""></div>
          <div>长绒棉毯舒适系列</div>
          <div>￥9</div>
        </li>
        <li>
          <div><img src="../assets/img/recommend_nem2.png" alt=""></div>
          <div>韩式陶瓷餐具系列</div>
          <div>￥19</div>
        </li>
        <li>
          <div><img src="../assets/img/recommend_nem1.png" alt=""></div>
          <div>长绒棉毯舒适系列</div>
          <div>￥9</div>
        </li>
      </ul>
      <div class="recommend_more">查看所有新品 ></div>
    </div>
    <div class="recommend_discount">
      <h2>周二周五·限时秒杀</h2>
      <div class="recommend_time">05月23日周二11:00——11:30</div>
      <ul>
        <li>
          <div class="recommend_discount_left"><img src="../assets/img/recommend_discount.png" alt=""></div>
          <div class="recommend_discount_right">
            <div>纯色卡通窗帘</div>
            <div><span>￥69</span><span>￥109</span></div>
            <div>即将开始</div>
          </div>
        </li>
        <li>
          <div class="recommend_discount_left"><img src="../assets/img/recommend_discount.png" alt=""></div>
          <div class="recommend_discount_right">
            <div>纯色卡通窗帘</div>
            <div><span>￥69</span><span>￥109</span></div>
            <div>即将开始</div>
          </div>
        </li>
        <li>
          <div class="recommend_discount_left"><img src="../assets/img/recommend_discount.png" alt=""></div>
          <div class="recommend_discount_right">
            <div>纯色卡通窗帘</div>
            <div><span>￥69</span><span>￥109</span></div>
            <div>即将开始</div>
          </div>
        </li>
        <li>
          <div class="recommend_discount_left"><img src="../assets/img/recommend_discount.png" alt=""></div>
          <div class="recommend_discount_right">
            <div>纯色卡通窗帘</div>
            <div><span>￥69</span><span>￥109</span></div>
            <div>即将开始</div>
          </div>
        </li>
        <li>
          <div class="recommend_discount_left"><img src="../assets/img/recommend_discount.png" alt=""></div>
          <div class="recommend_discount_right">
            <div>纯色卡通窗帘</div>
            <div><span>￥69</span><span>￥109</span></div>
            <div>即将开始</div>
          </div>
        </li><li>
          <div class="recommend_discount_left"><img src="../assets/img/recommend_discount.png" alt=""></div>
          <div class="recommend_discount_right">
            <div>纯色卡通窗帘</div>
            <div><span>￥69</span><span>￥109</span></div>
            <div>即将开始</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="recommend_share">
      <h2>达人晒单</h2>
      <ul>
        <li>
          <div class="recommend_share_ms"><div><img src="../assets/img/recommend_share_title.png" alt=""></div><div>琳达</div></div>
          <div><img src="../assets/img/recommend_share.png" alt=""></div>
          <ul class="recommend_share_praise">
            <li>20</li>
            <li>6</li>
            <li>1</li>
          </ul>
          <div class="recommend_share_comment">无需滤镜的小树枝，虽然稍微有点儿焉，和折纸花瓶是极配。绿色很有意思，放在工业设计上经常觉得突兀，可是放在自然里又是艳压群芳。</div>
        </li>
        <li>
          <div class="recommend_share_ms"><div><img src="../assets/img/recommend_share_title.png" alt=""></div><div>琳达</div></div>
          <div><img src="../assets/img/recommend_share.png" alt=""></div>
          <ul class="recommend_share_praise">
            <li>20</li>
            <li>6</li>
            <li>1</li>
          </ul>
          <div class="recommend_share_comment">无需滤镜的小树枝，虽然稍微有点儿焉，和折纸花瓶是极配。绿色很有意思，放在工业设计上经常觉得突兀，可是放在自然里又是艳压群芳。</div>
        </li>
      </ul>
      <div class="recommend_more">查看更多 ></div>
    </div>
    <div class="recommend_like">
      <h2>猜你喜欢</h2>
      <ul>
        <li>
          <div><img src="../assets/img/recommend_like.png" alt=""></div>
          <div>创意现代简约台灯</div>
          <div>创意现代简约个性玻璃书桌灯，遥控调光台灯，陪伴书桌阅读时光的美好瞬间。</div>
          <div><span>￥369</span><span>购买</span></div>
        </li>
        <li>
          <div><img src="../assets/img/recommend_like2.png" alt=""></div>
          <div>沃之沃塑料收纳箱</div>
          <div>衣服整理箱置物箱，家居收纳储物，带四个轮子，品牌力量，用心传承，品质风凡。</div>
          <div><span>￥69</span><span>购买</span></div>
        </li>
      </ul>
      <div class="recommend_more store_last">查看更多 ></div> 
      <store-footer></store-footer>
    </div>
  </div>
</div>
</template>

<script>
import StoreFind from '@/components/StoreFind'
import StoreChoose from '@/components/StoreChoose'
import StoreFooter from '@/components/StoreFooter'

export default {
  name: 'home',
  components:{
    StoreFind,StoreChoose,StoreFooter
  },
  data() {
    return {
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 2000,
        autoplayDisableOnInteraction : false,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        loop: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        mousewheelControl : true,
        observeParents:true,
        debugger: true,
      }
    }
  }
}
</script>
<style scoped>
    .store_top{width:15rem;height:3.6rem;background-color:#fff}
    .store_content{width:15rem;height:auto}
    .swiper-container{width:100%;height:5.12rem}
    .swiper-container img{width: 100%;height: 100%;}
    .swiper-pagination-bullet{width:.4rem;height:.4rem}
    .recommend_content>ul.advantage{width:13.8rem;height:1.4rem;display:flex;justify-content:space-between;padding:0 .6rem}
    .recommend_content>ul.advantage>li{width:4.12rem;height:.68rem;color:#6a6a6a;background:url(../assets/img/recommend_sure.png) no-repeat;text-indent:.64rem;margin-top:.36rem}
    .recommend_direct{width:100%;height:10.36rem}
    .recommend_content h2{font-size:.68rem;margin:0 auto;width:5.8rem;height:.96rem;margin-top:.84rem;text-align:center}
    .recommend_left,.recommend_right{width:6.72rem;height:6.76rem;margin-top:.72rem;border-radius: 10px;}
    .recommend_left{margin-left:.68rem;margin-right:.2rem;float:left}
    .recommend_right{float:left}
    .recommend_right>div:nth-child(1){width:100%;height:3.2rem;margin-bottom:.36rem}
    .recommend_new ul{width:13.8rem;padding:0 .6rem;margin-top:.72rem;display:flex;justify-content:space-between}
    .recommend_new ul>li{width:4.4rem;display:inline-block;}
    .recommend_new ul>li div:nth-child(1){width: 4.4rem;height: 5.26rem;border-radius: 10px;}
    .recommend_content img{width:100%;height:100%}
    .recommend_new ul>li div:nth-child(2){text-align:center;width:100%;font-size:.52rem;margin:.44rem 0 .16rem 0;}
    .recommend_new ul>li div:nth-child(3){text-align:center;width:100%;font-size:.64rem;color:#fd888b}
    .recommend_more{text-align:center;width:100%;margin-top:.8rem;font-size:.56rem;color:#6a6a6a;margin-bottom:1.2rem}
    .recommend_discount{width:100%;height:13.32rem;border-top:.02rem solid #999;overflow: hidden;}
    .recommend_time{width:100%;height:.96rem;margin:.56rem 0;font-size:.6rem;color:#8a8a8a;background:url(../assets/img/recommend_time.png) 3.48rem 0 no-repeat;text-indent:4.44rem}
    .recommend_discount ul{height:6.86rem;padding:0 .34rem;width:200rem;}
    .recommend_discount li{width:12.56rem;height:6.86rem;margin:0 .34rem;display:inline-block}
    .recommend_discount_left{width:6.6rem;height:6.86rem;float:left}
    .recommend_discount_right{float:left;width:4.6rem;padding:0 .68rem}
    .recommend_discount_right>div:nth-child(1){margin-top:1.6rem;width:100%;line-height:.84rem;font-size:.6rem}
    .recommend_discount_right>div:nth-child(2){width:100%;margin:.4rem 0 .56rem 0}
    .recommend_discount_right>div:nth-child(2) span:nth-child(1){font-size:.6rem;color:#fd888b}
    .recommend_discount_right>div:nth-child(2) span:nth-child(2){font-size:.48rem;color:#999;text-decoration:line-through;margin-left:.2rem}
    .recommend_discount_right>div:nth-child(3){width:4.6rem;height:.6rem;border:.02rem solid #404040;border-radius:.08rem;background:url(../assets/img/shopcar1.png) .64rem 0 no-repeat;background-size:.64rem .56rem;text-indent:1.6rem}
    .recommend_share{width:100%;border-top:.02rem solid #999}
    .recommend_share>ul>li{width:13.64rem;margin-left:.72rem}
    .recommend_share_ms{width:2.68rem;height:1.08rem;margin:1.24rem 0 .6rem 0}
    .recommend_share_ms div:nth-child(1){width:1.08rem;height:1.08rem;border-radius:50%;margin-right:.4rem;display:inline-block;vertical-align:middle}
    .recommend_share_ms div:nth-child(2){font-size:.6rem;color:#65c4aa;width:1.2rem;height:1.08rem;line-height:1.08rem;display:inline-block;vertical-align:middle}
    .recommend_share_praise li{width:1.6rem;height:.8rem;display:inline-block;background-color:pink;text-indent:.92rem;margin:.56rem 1.24rem .44rem 0;line-height:.8rem}
    .recommend_share_praise li:nth-child(1){background:url(../assets/img/recommend_share_comment1.png) no-repeat}
    .recommend_share_praise li:nth-child(2){background:url(../assets/img/recommend_share_comment2.png) no-repeat}
    .recommend_share_praise li:nth-child(3){background:url(../assets/img/recommend_share_comment3.png) no-repeat}
    .recommend_share_comment{font-size:.52rem;line-height:.8rem}
    .recommend_like{width:100%;border-top:.02rem solid #999}
    .recommend_like li{margin:.88rem .68rem}
    .recommend_like li>div:nth-child(2){width:5.44rem;height:.96rem;margin:.52rem 0 .36rem;font-size:.68rem}
    .recommend_like li>div:nth-child(3){font-size:.52rem;color:#6A6A6A;line-height:.8rem;margin-bottom:.2rem}
    .recommend_like li>div:nth-child(4) span:nth-child(1){line-height:1.6rem;font-size:.8rem;color:#fd888b}
    .recommend_like li>div:nth-child(4) span:nth-child(2){width:3.24rem;height:1.6rem;border:.02rem solid #404040;border-radius:.2rem;font-size:.68rem;float:right;line-height:1.6rem;text-align:center}
    .store_content>ul{width:14.2rem;height:auto;padding:0 .4rem}
    .store_content>ul>li{width:6.84rem;height:9.16rem;margin-top:.28rem;display:inline-block}
    .store_content>ul>li>div:nth-child(1){width:6.84rem;height:6.88rem;border-radius:.08rem}
    .store_content>ul>li>div:nth-child(2){width:6.84rem;height:.8rem;margin:.44rem 0 .2rem 0;font-size:.56rem;text-align:center;line-height:.8rem}
    .store_content>ul>li>div:nth-child(3){width:6.84rem;height:.84rem;font-size:.6rem;text-align:center;line-height:.84rem;color:#fd888b}
    .store_last{text-align:center;width:100%;margin-top:.8rem;font-size:.56rem;color:#6a6a6a;margin-bottom:3.2rem}
    #first_li{margin-right:.38rem}
</style>