<template>
    <ItemMusicTop :playlist="state.playList" />
</template>
<script lang="ts">
import { useRoute } from "vue-router"
import { onMounted, provide, reactive,ref } from 'vue'
import { getMusicItemList } from "../api/home/item";
import ItemMusicTop from '../components/item/ItemMusicTop.vue'

export default {
    name: '',
    components: {
        ItemMusicTop
    },
    setup() {
        const state = reactive({
            playList: []
        });

        // 创建预加载变量
        const loading = ref(true);

        provide("loading", loading);
        onMounted(async () => {
            // 获取当前路由传输过来的ID
            let id = useRoute().query.id;
            let res = await getMusicItemList(id);
            state.playList = res.playlist;
            // 请求成功改变预加载
            loading.value = false;
        });
        
        return {state, loading};
    }
}
</script>
<style lang="less">
    
</style>