<template>
  <div>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="(cates,index) in cate" class="cl" :key="index">
        <a class="item" v-for="(cate,i) in cates" :href="cate.url" :key="i">
          <img :src="cate.icon" alt />
          <p>{{cate.name}}</p>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  data() {
    return {
      cate: [],
      swiperOption: {
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    this.$http.get("../../../../static/json/categories.json").then(res => {
      this.cate = res.data;
    });
  }
};
</script>

<style lang='stylus'>
.swiper {
  margin: 0 0.2657rem;
  height: 3.72rem;
  display: flex;
  .item {
    float: left;
    width: 20%;
    text-align: center;
    img {
      width: 1.1916rem;
      height: 1.1916rem;
    }
    p {
      color: #666;
    }
  }
}
</style>