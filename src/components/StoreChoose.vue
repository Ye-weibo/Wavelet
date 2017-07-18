<template>
  <div>
    <ul class="store_choose">
      <li class="active">推荐</li>
      <li>家饰</li>
      <li>收纳</li>
      <li>餐厨</li>
      <li>家纺</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .store_choose{width:100%;height:1.76rem;display:flex;justify-content:space-between}
  .store_choose li{width:1.36rem;font-size:.6rem;line-height:1.76rem;margin:0 .68rem;color:#999}
  .store_choose .active{border-bottom:.04rem solid #65c4aa;color:#65c4aa}
</style>
