<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render v-show="state.loading">
      <van-swipe-item v-for="item in 3" :key="item">
        <van-skeleton avatar :loading="state.loading" />
      </van-swipe-item>
    </van-swipe>
    <van-swipe :autoplay="3000" lazy-render v-show="!state.loading">
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { reactive, onMounted } from "vue";
import { getBanner } from "../../api/home";
export default {
  setup() {
    let state = reactive({
      images: [],
      loading: true
    });

    onMounted(async () => {
        let res = await getBanner();
        state.images = res.banners;
        state.loading = false;
    });
    return { state };
  },
};
</script>
<style lang="less">
#swiperTop {
  .van-swipe {
    width: 100%;
    height: 3rem;
    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }

      .van-skeleton{
        width: 100%;
        height: 100%;
        padding: 0;
        .van-skeleton__avatar{
          width: 100%;
          height: 100%;
          border-radius: 0.2rem;
        }
      }
    }
    .van-swipe__indicator--active {
      background-color: lightblue;
    }
  }
}
</style>
