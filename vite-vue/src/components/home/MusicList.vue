<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe :loop="false" :show-indicators="false" :width="150" class="mySwipe">
                <van-swipe-item v-for="(item, index) in state.musicList" :key="index">
                    <router-link :to="'/about/' + item.id">
                        <img :src="item.picUrl" :alt="item.name" />
                        <span class="playCount">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-wymusicbofang-copy"></use>
                            </svg>
                            {{ChangeplayCount(item.playCount)}}
                        </span>
                        <div class="title">
                            {{item.name}}
                        </div>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script lang="ts">
import { reactive, onMounted } from "vue";
import { GetMusicList } from "../../api/home/index";
export default {
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
            musicList: []
        });

        async function GetGeDan() {
            let res = await GetMusicList();
            console.log(res, "res");
            
            state.musicList = res.result;
        }

        function ChangeplayCount(num:number) {
            switch (true) {
                case num >= 100000000:
                    return (num / 100000000).toFixed(2) + "亿";
                case num >= 10000:
                    return (num / 10000).toFixed(2) + "万";
            }
        }

        onMounted(async () => {
            await GetGeDan();
        });

        return { state, ChangeplayCount };
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
            height: 3.6rem;
            .van-swipe-item{
                padding-right: 0.2rem;
                position: relative;
                height: 3.8rem;
                img{
                    width: 100%;
                    height: 2.4rem;
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
            }
        }
    }
</style>