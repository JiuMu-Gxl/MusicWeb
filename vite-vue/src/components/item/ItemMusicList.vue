<template>
    <div class="itemMusicList">
        <div class="itemListTop">
            <div class="listLeft">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wymusic31liebiao"></use>
                </svg>
                <span>
                    播放全部
                    <span class="listCount">(共{{playlist.trackCount}}首)</span>
                </span>
            </div>
            <div class="listRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wymusic31liebiao"></use>
                </svg>
                <span>收藏({{playlist.subscribedCount}})</span>
            </div>
        </div>
        <div class="itemList">
            <div class="item" v-for="(item, index) in itemlist" :key="index">
                <div class="itemLeft">
                    <div class="number">{{index + 1}}</div>
                    <div class="itemInfo">
                        <p>{{ item.name }}</p>
                        <p class="singer">
                            <span v-for="(aritem, arIndex) in item.ar" :key="aritem.id">
                                <span>{{ aritem.name }}</span>
                                <span v-if="!(arIndex == item.ar.length-1)"> / </span>
                            </span>
                        </p>
                    </div>
                </div>
                <div class="itemRight">
                    <svg class="icon bofang" aria-hidden="true" @click="playMusic(item, index)">
                        <use xlink:href="#icon-wymusictuijian"></use>
                    </svg>
                    <svg class="icon liebiao" aria-hidden="true">
                        <use xlink:href="#icon-wymusic31liebiao"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { inject, toRaw } from "vue";
import { useStore } from 'vuex';

export default {
    props: ["itemlist", "playlist"],
    setup(props:any) {
        // 是否预加载
        const loading = inject("loading");
        const state = useStore();
        function playMusic(value: any, index: number) {
            state.commit("AddMusic", value);
            state.commit("updatePlayListIndex", state.state.playListIndex + 1);
            console.log(state.state.playList,state.state.playListIndex);
            
        }
        return { loading, playMusic }
    }
}
</script>
<style lang="less">
    .itemMusicList{
        width: 100%;
        height: 10rem;
        background-color: rgb(250, 250, 250);
        padding: 0 0.2rem;
        border-radius: 0.4rem 0.4rem 0 0;
        margin-top: 0.2rem;
        .itemListTop{
            width: 100%;
            height: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .listLeft{
                width: 3rem;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .icon {
                    stroke: #333333;
                    stroke-width: 20;
                }
                span{
                    font-weight: bold;
                    .listCount{
                        font-weight: 400;
                        font-size: .24rem;
                        color: #999;
                    }
                }
                
            }
            .listRight{
                display: flex;
                align-items: center;
                padding: 0.2rem;
                background-color: #ed3433;
                border-radius: 0.5rem;
                color: white;
                .icon{
                    width: 0.4rem;
                    height: 0.4rem;
                    fill: white;
                    stroke: white;
                    stroke-width: 20;
                }
            }
        }
        .itemList{
            width: 100%;
            .item{
                width: 100%;
                height: 1.4rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .itemLeft{
                    width: 80%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    .number{
                        width: .6rem;
                        font-weight: bold;
                    }
                    .itemInfo{
                        width: 90%;
                        *{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-weight: bold;
                        }
                        .singer{
                            font-weight: 400;
                            font-size: .24rem;
                            color: #999;
                        }
                    }
                    
                }
                .itemRight{
                    width: 20%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .icon{
                        fill: #999;
                    }
                }
            }
        }
    }
</style>