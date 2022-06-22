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
            <img :src="playlist.coverImgUrl" :alt="playlist.name" />
            <div class="palyCount">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wymusicbofang-copy"></use>
                </svg>
                <span>{{ ChangeplayCount(playlist.playCount) }}</span>
            </div>
        </div>
        <div class="contentRight">
            <div class="rightTitle">{{playlist.name}}</div>
            <div class="rightUserInfo">
                <img :src="playlist.creator.avatarUrl" class="userHeadImg">
                <span class="userName">{{playlist.creator.nickname}}</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wymusic31liebiao"></use>
                </svg>
            </div>
            <div class="rightDesc">
                <span>{{playlist.description}}</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wymusic31liebiao"></use>
                </svg>
            </div>
        </div>
    </div>
    <div class="itemTopFooter">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wymusictuijian"></use>
            </svg>
            <span>{{playlist.commentCount}}</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wymusicbofangmoban"></use>
            </svg>
            <span>{{playlist.shareCount}}</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wymusicgedan"></use>
            </svg>
            <span>下载</span>
        </div>
    </div>
</template>
<script lang="ts">
import { inject } from "vue";

export default {
    props:['playlist'],
    setup(props:any) {
        // 通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的
        props.playlist.creator="";

        // 是否预加载
        const loading = inject("loading");
        
        // 格式化播放量
        function ChangeplayCount(num:number) {
            switch (true) {
                case num >= 100000000:
                    return (num / 100000000).toFixed(2) + "亿";
                case num >= 10000:
                    return (num / 10000).toFixed(2) + "万";
            }
        }

        return { ChangeplayCount, loading };

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
        padding: .2rem;
        .contentLeft{
            width: 36%;
            position: relative;
            img{
                width: 2.6rem;
                height: 2.6rem;
                border-radius: 0.2rem;
            }
            .palyCount{
                position: absolute;
                z-index: 10;
                top: 0;
                right: 0.1rem;
                color: white;
                .icon{
                    width: 0.3rem;
                    height: 0.3rem;
                }
            }
        }
        .contentRight{
            width: 60%;
            height: 2.6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .rightTitle{
                color: white;
            }
            .rightUserInfo{
                color: #ccc;
                width: 100%;
                height: 0.6rem;
                line-height: 0.6rem;
                .userHeadImg{
                    width: 0.6rem;
                    height: 0.6rem;
                    border-radius: 0.6rem;
                    vertical-align: middle;
                }
                .userName{
                    margin: 0 0.1rem;
                }
                .icon {
                    width: 0.3rem;
                    height: 0.3rem;
                    margin-top: -0.08rem;
                    vertical-align: middle;
                    fill: #ccc;
                }
            }
            .rightDesc{
                width: 100%;
                height: .6rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{
                    width: 95%;
                    height: 100%;
                    display: inline-block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    font-size: 0.24rem;
                    color: #ccc;
                }
                .icon {
                    width: 0.3rem;
                    height: 0.3rem;
                    margin-top: -0.08rem;
                    vertical-align: middle;
                    fill: #ccc;
                }
            }
        }
    }
    .itemTopFooter{
        width: 100%;
        height: 1.4rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        margin: .2rem 0;
        .iconItem{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: white;
            .icon{
                width: 1rem;
                height: 1rem;
                fill: white;
            }
        }
    }
</style>