<template>
    <ItemMusicTop :playlist="state.playList" />
    <ItemMusicList :itemlist="state.itemList" :playlist="state.playList" :is-play="false" />
</template>
<script lang="ts">
import { useRoute } from "vue-router"
import { onMounted, provide, reactive,ref } from 'vue'
import { getMusicItemList, getItemList } from "../api/home/item";
import ItemMusicTop from '../components/item/ItemMusicTop.vue'
import ItemMusicList from '../components/item/ItemMusicList.vue'

export default {
    name: '',
    components: {
        ItemMusicTop,
        ItemMusicList
    },
    setup() {
        const state = reactive({
            playList: [],
            itemList: []
        });

        // 创建预加载变量
        const loading = ref(true);

        provide("loading", loading);
        provide("playList", state.playList);
        onMounted(async () => {
            // 获取当前路由传输过来的ID
            let id = useRoute().query.id;
            // 获取歌单详情
            let res = await getMusicItemList(id);
            state.playList = res.playlist;
            
            // 获取歌单所有歌曲
            res = await getItemList(id);
            state.itemList = res.songs;
            // 请求成功改变预加载
            loading.value = false;
        });
        
        return {state, loading};
    }
}
</script>
<style lang="less">
    
</style>