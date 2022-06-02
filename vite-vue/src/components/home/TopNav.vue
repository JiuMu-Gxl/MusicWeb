<template>
    <div class="topNav">
        <!-- 列表图标 -->
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wymusic31liebiao"></use>
            </svg>
        </div>
        <!-- 顶部菜单 -->
        <div class="topContent">
            <span>我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>
        <!-- 搜索图标 -->
        <div class="topRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wymusicsousuo"></use>
            </svg>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    
}
</script>
<style lang="less">
    .topNav{
        width: 100%;
        height: 1rem;
        padding: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .topContent{
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            font-size: .36rem;
            .active{
                font-weight: bold;
            }
        }
    }
</style>