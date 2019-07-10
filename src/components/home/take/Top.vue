<template>
  <div class="beijing">
    <div class="Gps">
      <Geo></Geo>
    </div>
    <div class="inp">
      <input type="text" placeholder="搜索商家、商品名称" class="input">
    </div>
    <div class="tags">
      <a href="tag.url" v-for="(tag,index) in tags" :key='index' class="fla">
        {{tag.name}}
      </a>
      </div>
  </div>
</template>
<script>
import Geo from '../../../../static/geo/Geo'
export default {
  name: 'Top',
  components:{
        Geo
    },
  created(){
    this.$http({
      url:'static/json/tag.json'
    }).then((res)=>{
      this.tags=res.data
    })
  },
  data(){
        return{
            tags:[]
        }
    }
}
</script>
<style lang="stylus" scoped>
.Gps
  font-size .453333rem
  color #fff
.beijing
  width 100%
  height 2.533333rem
  background #0085ff 
  text-align center
.input
  width 90%
  height .96rem
  border-radius 0.1rem
  font-size .56rem
.inp
  height .96rem
  text-align center
  margin-top 0.5%
&::placeholder
  text-align center
.tags
  display flex
  margin-top 0.25rem
  padding 0 10%
  font-size 0.35rem
a
  color white
  flex 1 
</style>
