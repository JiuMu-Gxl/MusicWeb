<template>
  <router-view />
  <FooterMusic />
</template>

<script lang="ts">
import FooterMusic from './components/footer/FooterMusic.vue'
export default{
  components:{
    FooterMusic
  }
}

</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: rgb(250, 250, 250);
}
.icon{
  width: .5rem;
  height: .5rem;
}
a{
  color: black;
}
</style>
