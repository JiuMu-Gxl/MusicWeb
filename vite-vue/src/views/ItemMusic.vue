<template>
    <ItemMusicTop :playlist="state.playList" />
</template>
<script lang="ts">
import { useRoute } from "vue-router"
import { onMounted, reactive } from 'vue'
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

        onMounted(async () => {
            // 获取当前路由传输过来的ID
            let id = useRoute().query.id;
            let res = await getMusicItemList(id);
            state.playList = res.playlist;
        });
        
        return {state};
    }
}
</script>
<style lang="less">
    
</style>