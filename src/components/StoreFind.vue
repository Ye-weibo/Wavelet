<template>
<div>
  <div class="store_search">
      <input type="text" placeholder="全球优质供应商直供">
      <span></span>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .store_search{width:100%;height:1.12rem;padding:.32rem 0}
  .store_search input{width:11.58rem;height:1.12rem;border-radius:.12rem;padding-left:.66rem;margin-left:.68rem;font-size:.48rem;color:#404040;background:url(../assets/img/recommend_found.png) #ebebeb .12rem .28rem no-repeat;vertical-align:middle}
  .store_search span{width:.84rem;height:.68rem;background:url(../assets/img/recommend_email.png) no-repeat;display:inline-block;margin-left:.56rem;vertical-align:middle}
</style>
