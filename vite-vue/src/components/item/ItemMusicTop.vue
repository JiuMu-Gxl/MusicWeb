<template>
    <div class="ItemMusicTop">
        <van-skeleton avatar class="bgImg" :loading="loading"/>
        <img :src="playlist.coverImgUrl" class="bgImg" v-show="!loading" />
        <div class="itemLeft">
            <svg-icon iconName="icon-wymusiczuojiantou" class="icon" color="white" @click="$router.go(-1)"></svg-icon>
            <span>歌单</span>
        </div>
        <div class="itemRight">
            <svg-icon iconName="icon-wymusicsousuo" class="icon" color="white"></svg-icon>
            <svg-icon iconName="icon-wymusic31liebiao" class="icon" color="white"></svg-icon>
        </div>
    </div>
    <!-- 骨架屏 -->
    <div class="skeletonContent" v-show="loading">
        <div class="contentLeft">
            <van-skeleton avatar class="titleImg" :loading="loading"/>
        </div>
        <div class="contentRight">
            <div class="rightTitle"><van-skeleton :row="2" :loading="loading"/></div>
            <div class="rightUserInfo">
                <van-skeleton avatar :row="1" :loading="loading"/>
            </div>
            <div class="rightDesc">
                <van-skeleton :row="3" :loading="loading"/>
            </div>
        </div>
    </div>
    <div class="itemTopContent" v-show="!loading">
        <div class="contentLeft">
            <img :src="playlist.coverImgUrl" :alt="playlist.name" />
            <div class="palyCount">
                <svg-icon iconName="icon-wymusicbofang-copy" class="icon"></svg-icon>
                <span>{{ ChangeplayCount(playlist.playCount) }}</span>
            </div>
        </div>
        <div class="contentRight">
            <div class="rightTitle">{{playlist.name}}</div>
            <div class="rightUserInfo">
                <img :src="playlist.creator.avatarUrl" class="userHeadImg">
                <span class="userName">{{playlist.creator.nickname}}</span>
                <svg-icon iconName="icon-wymusicxiangyou1" class="icon" color="#ccc"></svg-icon>
            </div>
            <div class="rightDesc">
                <span>{{playlist.description}}</span>
                <svg-icon iconName="icon-wymusicxiangyou1" class="icon" color="#ccc"></svg-icon>
            </div>
        </div>
    </div>
    <div class="itemTopFooter">
        <div class="iconItem">
            <svg-icon iconName="icon-wymusicdaipingjia" class="icon" color="white"></svg-icon>
            <span>{{playlist.commentCount}}</span>
        </div>
        <div class="iconItem">
            <svg-icon iconName="icon-wymusicfenxiang1" class="icon" color="white"></svg-icon>
            <span>{{playlist.shareCount}}</span>
        </div>
        <div class="iconItem">
            <svg-icon iconName="icon-wymusicxiazai" class="icon" color="white"></svg-icon>
            <span>下载</span>
        </div>
    </div>
</template>
<script lang="ts">
import { inject } from "vue";
import SvgIcon from '/@/components/SvgIcon/SvgIcon.vue'

export default {
    components:{
        SvgIcon
    },
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
        background-color: #ccc;
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
                z-index: 0;
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
                height: .7rem;
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
            align-items: center;
            color: white;
            font-size: .32rem;
            .icon{
                fill: white;
                margin-bottom: .1rem;
            }
        }
    }
    .skeletonContent{
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        padding: .2rem;
        .van-skeleton{
            padding: 0;
        }
        .contentLeft{
            width: 36%;
            .titleImg{
                .van-skeleton__avatar{
                    width: 2.6rem;
                    height: 2.6rem;
                    border-radius: 0.2rem;
                }
            }
        }
        .contentRight{
            width: 60%;
            height: 2.6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .rightUserInfo{
                width: 100%;
                height: 0.6rem;
                line-height: 0.6rem;
            }
            .rightDesc{
                width: 100%;
                height: .7rem;
                .van-skeleton__content{
                    width: 95%;
                    height: 1rem;
                    overflow: hidden;
                }
            }
        }
    }
</style>