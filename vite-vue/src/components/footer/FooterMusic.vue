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
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wymusicbofang"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wymusic31liebiao"></use>
            </svg>
        </div>
    </div>
</template>
<script lang="ts">
import {mapState} from 'vuex';
export default {
    computed: {
        // 对vuex中的变量 解构
        ...mapState(['playList', 'playListIndex'])
    }
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
    } 
</style>