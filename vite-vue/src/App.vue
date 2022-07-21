<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <transition :name="animation">
        <component :is="Component" />
      </transition>
    </keep-alive>
  </router-view>
  <FooterMusic />
</template>

<script lang="ts">
import { ref, watch } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import FooterMusic from "/@/components/footer/FooterMusic.vue";
export default {
  components: {
    FooterMusic,
  },
  setup() {
    const animation = ref('slide');
    let router = useRouter();
    // watch(() => router.currentRoute.value.path,(newValue,oldValue)=> {
    //     console.log('watch',newValue,oldValue);
    // },{ immediate: true })
    // onBeforeRouteUpdate((to:any) => {
    //   console.log(to);
    //   // if(to.meta.index > form.meta.index){
		//   //   animation.value = 'slide-left'
	  //   // }else{
		//   //   animation.value = 'slide-right'
	  //   // }
    // });

    return { animation };
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: rgb(250, 250, 250);
}
.icon {
  width: 0.5rem;
  height: 0.5rem;
}
a {
  color: black;
}


.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
	width: 100%;
    height: 100%;
    will-change: transform;
    transition: all 300ms cubic-bezier(.55,0,.1,1);
    position: absolute;
    backface-visibility: hidden;
}
.slide-right-enter-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
    opacity: 0;
    transform: translate3d(3%, 0, 0);
}
.slide-left-enter-active{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
    opacity: 0;
    transform: translate3d(-3%, 0, 0);
}
</style>
