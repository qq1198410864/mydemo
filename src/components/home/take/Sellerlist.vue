<template>
  <div class="sellerList">
    <h3 class="qq">商家推荐</h3>
    <Loading :class="{isShow:seller.length!=0?true:false}"></Loading>
    <Loading :class="{isShow:seller.length!=0?true:false}"></Loading>
    <Loading :class="{isShow:seller.length!=0?true:false}"></Loading>
    <Loading :class="{isShow:seller.length!=0?true:false}"></Loading>
    <Loading :class="{isShow:seller.length!=0?true:false}"></Loading>
    <Loading :class="{isShow:seller.length!=0?true:false}"></Loading>
    <Loading :class="{isShow:seller.length!=0?true:false}"></Loading>
    <Loading :class="{isShow:seller.length!=0?true:false}"></Loading>
    <GoTop></GoTop>
    <ul class="seller-list">
      <li class="list-item" v-for="item in seller" :key="item.id" @click="detail(item)">
        <div class="logo">
          <img :src="item.logo" />
        </div>
        <div class="detail">
          <h3 class="name">
            <span>品牌</span>
            {{item.name}}
          </h3>
          <div class="rating">
            <!-- 评价星星  -->
                <Rate :max=5 :size="0.2415" :unit="'rem'" :score="item.rating"></Rate>
            <span>{{item.rating}}</span>
            <span>月售{{item.orderNo}}单</span>
          </div>
          <div class="fee">
            <span>&yen;{{item.sendFee}}起步</span>
            <span>配送费&yen;{{item.deliveryFee}}</span>
          </div>
          <div class="active">
            <div class="pushBut">
              <span>{{item.avgFee}}个活动</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
              />
            </div>
            <p v-for="(value,index) in item.discount" :key="index">
              <i :class="['icon-take','icon-'+value.icon]" :style="{color:'red','font-size':'0.4rem'}"></i>
              {{value.content}}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import * as api from "@/api/api";
import Loading from "@/base/loading/skeleton.vue";
import GoTop from "@/base/goTop/goTop.vue";
import Rate from "@/base/rate/Rate.vue";
export default {
  name: "SellerList",
  data() {
    return {
      seller: []
    };
  },
  components: {
    Loading,GoTop,Rate
  },
  methods:{
    detail(seller){
      this.$store.dispatch('modifySeller',seller)
      this.$router.push('/seller/seller.id')
      // console.log(this.$store.state,'...date...')
      // console.log(this.$store.getters.update,'...getters...')
    }
  },
  created() {
    setTimeout(() => {
      this.$http(api.SELLER).then(res => {
        this.seller = res.data;
      });
    }, 2000);
  }
};
</script>
<style lang="less" scoped>
.isShow {
  display: none;
}
.sellerList {
  .qq {
    padding: 0.133333rem 0.4rem;
  }
  ul {
    padding:0rem .4rem;
    li {
      .logo {
        width: 1.7rem;
        height: 1.7rem;
        margin-right: 0.75rem;
      }
      padding: 0.3rem 0px;
      display: flex;
      border-top: 1px solid #cccc;
      .detail {
        width: 9rem;
        .name {
          line-height: 0.6rem;
          width: 5rem;
          font-size: 0.32rem;
          font-family: '黑体';
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          span {
            color: #ccc;
            background-image: linear-gradient(-139deg,#fff100,#ffe339);
            padding: 0.08rem;
            margin-right: 0.25rem;
            color: #6f3f15;
          }
        }
        .rating {
          line-height: 0.6rem;
          display: flex;
        }
        .fee {
          line-height: 0.6rem;
        }
        .active {
          border-top: 1px solid #eee;
          width: 100%;
          line-height: 0.6rem;
          font-size: 0.293333rem;
          .pushBut {
            float: right;
            font-size: 0.266667rem;
          }
          .icon1 {
            background: rgb(240, 115, 115);
            border-radius: .066667rem;
            margin-right: 066667rem;
          }
        }
      }
    }
  }
}
</style>
