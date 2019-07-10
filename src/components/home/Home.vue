<template>
  <div class="home">
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="box"></div>
    <div class="navbar">
      <ul class="nav-menu">
        <li class="menu-item">
          <router-link to="take" class="link" active-class="select">
            <i class="icon-take icon-eleme"></i>
            <p>外卖</p>
          </router-link>
        </li>
         <li class="menu-item">
          <router-link to="find" class="link" active-class="select">
            <i class="icon-take icon-faxian"></i>
            <p>发现</p>
          </router-link>
        </li>
         <li class="menu-item">
          <router-link to="order" class="link" active-class="select">
            <i class="icon-take icon-order"></i>
            <p>订单</p>
          </router-link>
        </li>
         <li class="menu-item">
          <router-link to="mine" class="link" active-class="select">
            <i class="icon-take icon-wode"></i>
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="stylus" scoped>
.box
  height 91px
.navbar
  position:fixed
  bottom 0
  width 100%
  height 91px
  background #eeeeee
  text-align center
  .menu-item
    display inline-block
    padding 0 .613333rem
    .icon-take
        font-size 0.5rem
    .link
      color #000
    .select
      color #0092ff
</style>
