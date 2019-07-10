<template>
  <div class="Recommend">
    <div class="top"></div>
    <div class="more">
      <span>商品优选</span>
      <a href="#">更多</a>
    </div>
     <div class="main">
      <ul>
        <li v-for="(item,index) in shoops" :key="index">
          <a href="#">
            <img :src="item.icon" alt />
            <h5>{{item.name}}</h5>
            <p>平均{{item.rated}}元</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import * as api from "@/api/api";
export default {
  name: 'Recommend',
  data(){
    return{
      shoops:""
    }
  },
  created(){
    this.$http(api.SHOOPS).then(res=>{
      this.shoops=res.data
    })
  }
}
</script>
<style lang="stylus" scoped>
.top
  width 96%
  height .133333rem
  background #ff9d28
  margin-left 2%
.more
  padding .16rem .4rem 0
  span 
    font-size .373333rem
    color #ab7d42
    margin-right 70%
  a
    font-size  .266667rem
    color #717171
.main
  padding: .16rem .4rem 0rem
  ul
    width 100%
    height 3.333333rem
    display flex
    justify-content:space-between
    li
      width 20%
      height 100%
      text-align center
      a 
        display block
        img
            width 100%
            height 50%
        h5
          font-size .266667rem
          overflow hidden
          white-space nowrap
          overflow ellipsis 
        p
          color #0092ff
          font-size .24rem
          line-height .4rem
          width 80%
          border .013333rem solid #0092ff
          margin-left .16rem
          margin-top .266667rem
</style>
