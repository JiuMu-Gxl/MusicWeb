<template>
    <div class="ItemMusicTop">
        <img :src="playlist.coverImgUrl" class="bgImg" />
        <div class="itemLeft">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <use xlink:href="#icon-wymusictuijian"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="itemRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wymusicsousuo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wymusic31liebiao"></use>
            </svg>
        </div>
    </div>
    <div class="itemTopContent">
        <div class="contentLeft">
            <img :src="playlist.coverImgUrl" alt="" />
        </div>
        <div class="contentRight">
            
        </div>
    </div>
</template>
<script lang="ts">
export default {
    props:['playlist'],
    setup(props:any) {
        console.log(props);
        
    }
}
</script>
<style lang="less">
    .ItemMusicTop{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .itemLeft,.itemRight{
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 .2rem;
            span{
                font-size: .36rem;
                color: white;
            }
            .icon{
                fill: white;
            }
        }
    }
    .bgImg{
        width: 100%;
        height: 10rem;
        position: absolute;
        z-index: -1;
        filter: blur(.4rem);
    }
    .itemTopContent{
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem;
        .contentLeft{
            img{
                width: 2.6rem;
                height: 2.6rem;
            }
        }
    }
</style>