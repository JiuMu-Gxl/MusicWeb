<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more" @click="InitGeDan">查看更多</div>
        </div>
        <div class="musicContent">
            <!-- 骨架屏 -->
            <van-swipe :loop="false" :show-indicators="false" :width="150" class="mySwipeSkeleton" v-show="state.loading">
                <van-swipe-item v-for="(item, index) in 10" :key="index">
                    <van-skeleton avatar :loading="state.loading" />
                </van-swipe-item>
            </van-swipe>
            <van-swipe :loop="false" :show-indicators="false" :width="150" class="mySwipe">
                <van-swipe-item v-for="(item, index) in state.musicList" :key="index" @click="ToItemDetail(item.id)">
                    <img :src="item.picUrl" :alt="item.name" />
                    <span class="playCount">
                        <svg-icon iconName="icon-wymusicbofang-copy" class="icon"></svg-icon>
                        {{ChangeplayCount(item.playCount)}}
                    </span>
                    <div class="title">
                        {{item.name}}
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script lang="ts">
import { reactive, onMounted } from "vue";
import { GetMusicList } from "/@/api/home/index";
import router from '/@/router/index'
import SvgIcon from '/@/components/SvgIcon/SvgIcon.vue'
export default {
    components: {
        SvgIcon
    },
    // // Vue2写法
    // data(){
    //     return {
    //         musicList: []
    //     }
    // },
    // methods: {
    //     async GetMusicList() {
    //         let res = await GetMusicList();
    //         this.musicList = res.result;
    //     },
    //     ChangeplayCount(num:number) {
    //         switch (true) {
    //             case num >= 100000000:
    //                 return (num / 100000000).toFixed(2) + "亿";
    //             case num >= 10000:
    //                 return (num / 10000).toFixed(2) + "万";
    //         }
    //     }
    // },
    // mounted() {
    //     this.GetMusicList();
    // },
    // Vue3写法
    setup() {
        const state = reactive({
            musicList: new Array<any>(),
            loading: true
        });

        async function GetGeDan() {
            let res = await GetMusicList();
            state.musicList = res.result;
            state.loading = false;
        }

        function InitGeDan() {
            GetGeDan();
        }

        // 格式化播放量
        function ChangeplayCount(num:number) {
            switch (true) {
                case num >= 100000000:
                    return (num / 100000000).toFixed(2) + "亿";
                case num >= 10000:
                    return (num / 10000).toFixed(2) + "万";
            }
        }

        // 路由跳转
        function ToItemDetail(id:any) {
            router.push({
                name: 'itemmusic',
                query: {
                    id: id
                }
            });
        }

        onMounted(async () => {
            await GetGeDan();
        });

        return { state, ChangeplayCount, ToItemDetail, InitGeDan };
    }
}
</script>
<style lang="less">
    .musicList{
        width: 100%;
        height: 0.6rem;
        padding: 0 0.2rem;
        .musicTop{
            width: 100%;
            height: 0.6rem;
            display: flex;
            justify-content: space-between;
            margin-bottom: .2rem;
            .title{
                font-size: .4rem;
                font-weight: bold;
            }
            .more{
                border: 1px solid #ccc;
                text-align: center;
                line-height: 0.6rem;
                padding: 0 0.2rem;
                border-radius: .4rem;
            }
        }
        .musicContent{
            width: 100%;
            height: 3.85rem;
            .van-swipe-item{
                padding-right: 0.2rem;
                position: relative;
                height: 100%;
                img{
                    width: 100%;
                    height: 70%;
                    border-radius: 0.2rem;
                }
                .playCount{
                    position: absolute;
                    z-index: 10;
                    top: 0;
                    right: 0.3rem;
                    margin-top: 0.06rem;
                    color: white;
                    .icon{
                        width: 0.3rem;
                        height: 0.3rem;
                    }
                }
                .title{
                    font-size: .24rem;
                }

                .van-skeleton{
                    width: 100%;
                    height: 3.05rem;
                    padding: 0;
                    .van-skeleton__avatar{
                        width: 100%;
                        height: 100%;
                        border-radius: 0.2rem;
                    }
                }
            }
        }
    }
</style>