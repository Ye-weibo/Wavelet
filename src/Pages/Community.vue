<template>
  <div>
    <p>社区</p>
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
  .store_footer{width:calc(88%);height:1.96rem;position:fixed;bottom:0;display:flex;justify-content:space-between;background-color:#fff;padding:0 1rem}
  .store_footer>li{width:2.48rem;height:2rem;font-size:.4rem;text-align:center}
  .store_footer>li>img{display:block;margin:0 auto}
  .current{color:#65c4aa}
</style>
