<template>
    <div :class="{'footerMusic': true, 'noMusic': !isCanPlay}">
        <div class="footerLeft" @click="showMusicDetailPopup">
            <img :src="playList[playListIndex].al.picUrl" alt="">
            <div class="musicInfo">
                <p>{{playList[playListIndex].name}}</p>
                <span>横滑切换上下首哦</span>
            </div>
        </div>
        <div class="footerRight">
            <svg v-if="playState" class="icon" aria-hidden="true" @click="playMusic">
                <use xlink:href="#icon-wymusiczanting1"></use>
            </svg>
            <svg v-else class="icon" aria-hidden="true" @click="playMusic">
                <use xlink:href="#icon-wymusicbofang2"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="showMusicListPopup">
                <use xlink:href="#icon-wymusic31liebiao"></use>
            </svg>
        </div>
        <!-- 音乐播放器 -->
        <audio autoplay ref="MusicPlayer" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
        <!-- 歌曲列表弹出框 -->
        <van-popup v-model:show="state.musicListPop" position="bottom" round :style="{ height: '10rem' }">
            <ItemMusicList :itemlist="playList" :is-play="true" @showPopup="showMusicListPopup" @playMusic="playMusic" />
            <van-button class="clossBtn" block @click="showMusicListPopup">关闭</van-button>
        </van-popup>
        <!-- 歌曲信息弹出框 -->
        <van-popup v-model:show="state.musicDetailPop" position="bottom" :style="{ width: '100%', height: '100%' }">
            <MusicDetail @showPopup="showMusicDetailPopup" @playMusic="playMusic"></MusicDetail>
        </van-popup>
    </div>
</template>
<script lang="ts">
import { reactive, ref, onMounted, watch } from 'vue';
import {mapState, useStore} from 'vuex';
import ItemMusicList from '../item/ItemMusicList.vue';
import MusicDetail from './MusicDetail.vue';
export default {
    computed: {
        // 对vuex中的变量 解构
        ...mapState(["playList", "playListIndex", "playState"])
    },
    setup(ctx:any) {
        const state = reactive({
            musicListPop: false,
            musicDetailPop: false
        });
        // 通过ref获取dom元素
        const MusicPlayer = ref();
        const state_vuex = useStore();
        const isCanPlay = state_vuex.state.isCanPlay;
        
        watch(state_vuex.state.isCanPlay, (oldValue: any, newValue: any) => {
            console.log(oldValue, newValue);
        })

        // 打开/关闭音乐列表模态框方法
        function showMusicListPopup() {
            if (!isCanPlay) return;
            state.musicListPop = state.musicListPop ? false : true;
        }
        // 打开/关闭音乐列表模态框方法
        function showMusicDetailPopup() {
            if (!isCanPlay) return;
            state.musicDetailPop = state.musicDetailPop ? false : true;
        }

        // 页面预加载默认关闭音乐
        onMounted(() => {
            MusicPlayer.value.pause();
        });

        // 播放暂停歌曲
        function playMusic() {
            if (!isCanPlay) return;
            if (MusicPlayer.value.paused) {
                MusicPlayer.value.play();
                state_vuex.commit("updatePlayState", true);
            } else {
                MusicPlayer.value.pause();
                state_vuex.commit("updatePlayState", false);
            }
        }

        return { state, isCanPlay, MusicPlayer, showMusicListPopup,showMusicDetailPopup,playMusic };
    },
    components: { ItemMusicList, MusicDetail }
}
</script>
<style lang="less">
    .footerMusic{
        width: 100%;
        height: 1.4rem;
        background-color: #fafafa;
        position: fixed;
        bottom: 0;
        border-top: 1px solid #ccc;
        border-radius: .32rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem;
        .footerLeft{
            width: 80%;
            height: 100%;
            display: flex;
            align-items: center;
            img{
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
            }
            .musicInfo{
                margin-left: .4rem;
                overflow: hidden;
                padding-right: .2rem;
                p{
                    font-size: .32rem;
                    font-weight: bold;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                span{
                    font-size: .24rem;
                }
            }
        }
        .footerRight{
            width: 20%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .icon{
                fill: black;
            }
        }
        .van-popup{
            background-color: rgb(250, 250, 250);
            .playList{
                width: 100%;
                height: 9rem;
                background-color: lightblue;
                padding: .3rem .4rem;
                overflow: auto;
            }
            .clossBtn{
                position: fixed;
                height: 1rem;
                bottom: 0;
                z-index: 10;
            }
        }
        
    }
    .noMusic{
        color: #a5a5a5;
        .footerRight{
            .icon{
                fill: #a5a5a5;
            }
        }
        
    }
</style>