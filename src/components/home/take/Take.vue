<template>
  <div class="take">
    <top></top>
    <Category></Category>
    <Ad></Ad>
    <Recommend></Recommend>
    <Sellerlist></Sellerlist>
  </div>
</template>
<script>
import Top from './Top'
import Sellerlist from './Sellerlist'
import Category from './Category'
import Ad from './Ad'
import Recommend from './Recommend'
export default {
  name: 'Take',
  data () {
    return {}
  },
  components: {
    Top,
    Ad,
    Recommend,
    Category,
    Sellerlist
  }
}
</script>
<style lang="stylus" scoped>
</style>
