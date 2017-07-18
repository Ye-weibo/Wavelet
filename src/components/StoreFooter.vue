<template>
  <div>
    <ul class="store_footer">
      <router-link to="/Store" tag="li"><img src="../assets/img/store2.png" alt="">商城</router-link>
      <router-link to="/Community" tag="li"><img src="../assets/img/store2.png" alt="">社区</router-link>
      <router-link to="/Cart" tag="li"><img src="../assets/img/store2.png" alt="">购物车</router-link>
      <router-link to="/MyHome" tag="li"><img src="../assets/img/store2.png" alt="">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .store_footer{width:calc(88%);height:1.96rem;position:fixed;bottom:0;display:flex;justify-content:space-between;background-color:#fff;padding:0 1rem}
  .store_footer>li{width:2.48rem;height:2rem;font-size:.4rem;text-align:center}
  .store_footer>li>img{display:block;margin:0 auto}
  .current{color:#65c4aa}
</style>
