<template>
    <div class="itemMusicList" v-if="isCanPlay">
        <div class="itemListTop" v-if="!isPlay">
            <div class="listLeft">
                <svg-icon iconName="icon-wymusicbofang" class="icon"></svg-icon>
                <span>
                    播放全部
                    <span class="listCount">(共{{ playlist ? playlist.trackCount : 0}}首)</span>
                </span>
            </div>
            <div class="listRight">
                <svg-icon iconName="icon-wymusictianjia" class="icon"></svg-icon>
                <span>收藏({{ playlist ? ChangeplayCount(playlist.subscribedCount) : 0}})</span>
            </div>
        </div>
        <div class="itemList">
            <div class="item" v-for="(item, index) in itemlist" :key="index">
                <div class="itemLeft" @click="playMusic(item, index)">
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
                    <svg-icon iconName="icon-wymusicshipin" class="icon bofang" color="#999"></svg-icon>
                    <svg-icon iconName="icon-wymusicgengduo" class="icon liebiao" color="#999"></svg-icon>
                </div>
            </div>
        </div>
    </div>
    <div class="noItemList" v-else>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wymusictuijian"></use>
        </svg>
        <span>暂无歌曲</span>
    </div>
</template>
<script lang="ts">
import { inject, toRaw } from "vue";
import { useStore } from 'vuex';
import SvgIcon from '/@/components/SvgIcon/SvgIcon.vue'

export default {
    components: {
        SvgIcon
    },
    props: ["itemlist", "playlist", 'isPlay'],
    setup(props:any, ctx: any) {
        // 是否预加载
        const loading = inject("loading");
        const state = useStore();
        const isCanPlay = !props.isPlay || state.state.isCanPlay;
        
        function playMusic(value: any, index: number) {
            // 播放歌曲
            state.commit("AddMusic", value);
            state.commit("updatePlayState", true);
            if (props.isPlay) {
                // 调用父组件的关闭模态框方法 - showPopup
                ctx.emit("showPopup");
            }
        }

        // 格式化播放量
        function ChangeplayCount(num:number) {
            switch (true) {
                case num >= 100000000:
                    return (num / 100000000).toFixed(2) + "亿";
                case num >= 10000:
                    return (num / 10000).toFixed(2) + "w";
                case num >= 1000:
                    return (num / 10000).toFixed(2) + "k";
            }
        }
        return { loading, isCanPlay, playMusic, ChangeplayCount }
    }
}
</script>
<style lang="less">
    .itemMusicList{
        width: 100%;
        max-height: 10rem;
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
                    stroke-width: 60;
                }
            }
        }
        .itemList{
            width: 100%;
            padding-bottom: 1.4rem;
            .item{
                width: 100%;
                height: 1.4rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .itemLeft{
                    width: 75%;
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
    .noItemList{
        width: 100%;
        height: 9rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: .44rem;
        color: #a5a5a5;
        .icon{
            width: 1rem;
            height: 1rem;
        }
    }
</style>