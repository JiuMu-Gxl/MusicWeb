<template>
    <div class="iconList">
        <div class="iconItem">
            <svg-icon iconName="icon-wymusictuijian" class="icon"></svg-icon>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg-icon iconName="icon-wymusicbofangmoban" class="icon"></svg-icon>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <svg-icon iconName="icon-wymusicgedan" class="icon"></svg-icon>
            <span>我的歌单</span>
        </div>
        <div class="iconItem">
            <svg-icon iconName="icon-wymusicpaihangbang" class="icon"></svg-icon>
            <span>排行榜</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '/@/components/SvgIcon/SvgIcon.vue'
</script>

<style lang="less" scoped>
    .iconList{
        width: 100%;
        height: 1.5rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        margin: .2rem 0;
        font-size: .24rem;
        .iconItem{
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon{
                width: 1rem;
                height: 1rem;
            }
        }
    }
</style>