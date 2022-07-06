<template>
    <div class="footerMusic">
        <div class="footerLeft">
            <img :src="playList[playListIndex].al.picUrl" alt="">
            <div class="musicInfo">
                <p>{{playList[playListIndex].name}}</p>
                <span>横滑切换上下首哦</span>
            </div>
        </div>
        <div class="footerRight">
            <svg class="icon" aria-hidden="true" @click="playMusic">
                <use xlink:href="#icon-wymusicbofang"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="showPopup">
                <use xlink:href="#icon-wymusic31liebiao"></use>
            </svg>
        </div>
        <!-- 音乐播放器 -->
        <audio ref="MusicPlayer" controls :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
        <!-- 弹出框 -->
        <van-popup v-model:show="state.show" position="bottom" round :style="{ height: '10rem' }">
            <ItemMusicList :itemlist="playList" :is-play="true" @showPopup="showPopup" />
            <van-button class="clossBtn" block @click="showPopup">关闭</van-button>
        </van-popup>
    </div>
</template>
<script lang="ts">
import { reactive, ref } from 'vue';
import {mapState} from 'vuex';
import ItemMusicList from '../item/ItemMusicList.vue';
export default {
    computed: {
        // 对vuex中的变量 解构
        ...mapState(["playList", "playListIndex"])
    },
    setup(ctx:any) {
        const state = reactive({
            show: false,
        });
        // 通过ref获取dom元素
        const MusicPlayer = ref();

        // 打开/关闭模态框方法
        function showPopup() {
            state.show = state.show ? false : true;
        }

        // 播放暂停歌曲
        function playMusic() {
            if (MusicPlayer.value.paused) {
                MusicPlayer.value.play();
            } else {
                MusicPlayer.value.pause();
            }
        }

        return { state, MusicPlayer, showPopup,playMusic };
    },
    components: { ItemMusicList }
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
                p{
                    font-size: .32rem;
                    font-weight: bold;
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
</style>