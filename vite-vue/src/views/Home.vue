<template>
  <div class="home">
    <TopNav />
    <SwiperTop />
    <IconList />
  </div>
</template>

<script lang="ts">
import TopNav from "../components/home/TopNav.vue";
import SwiperTop from "../components/home/SwiperTop.vue";
import IconList from "../components/home/IconList.vue";
export default {
  name: 'home',
  components: {
    TopNav,
    SwiperTop,
    IconList
}
}
</script>
