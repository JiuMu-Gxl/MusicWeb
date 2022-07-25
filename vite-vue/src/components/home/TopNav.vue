<template>
    <div class="topNav">
        <!-- 列表图标 -->
        <div class="topLeft">
            <svg-icon iconName="icon-wymusic31liebiao" class="icon"></svg-icon>
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
            <svg-icon iconName="icon-wymusicsousuo" class="icon" @click="showSearch"></svg-icon>
        </div>
        <transition name="van-slide-down">
            <div v-show="isSearch" class="search">
                <van-search 
                    ref="searchInput" 
                    v-model="keywords"
                    shape="round" 
                    maxlength="100" 
                    show-action 
                    placeholder="请输入搜索关键词" 
                    @search="onSearch" 
                    @cancel="onCancel"
                />
            </div>
        </transition>
    </div>
</template>
<script setup lang="ts">
import { nextTick, ref } from 'vue';
import SvgIcon from '/@/components/SvgIcon/SvgIcon.vue'
import router from '/@/router/index'

var isSearch = ref(false);
var searchInput = ref();
var keywords = ref("");

function showSearch() {
    isSearch.value = true;
    nextTick(()=>{
        setTimeout(() => {searchInput.value.focus();}, 500);
    });
}

function onSearch() {
    router.push({
        name: 'search',
        query: {
            keywords: keywords.value
        }
    });
}

function onCancel() {
    keywords.value = "";
    isSearch.value = false;
}

</script>
<style lang="less">
    .topNav{
        width: 100%;
        height: 1rem;
        padding: 0.2rem;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        // box-shadow: 0 -1px 5px 1px rgba(0, 0, 0, 0.15);
        .topContent{
            width: 65%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            font-size: .36rem;
            .active{
                font-weight: bold;
            }
        }
        .search{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1rem;
            .van-search{
                width: 100%;
                height: 1rem;
                background-color: rgb(250, 250, 250);
                box-shadow: 0 -1px 5px 1px rgba(0, 0, 0, 0.15);
                .van-search__content{
                    background-color: var(--van-gray-2);
                }
            }
        }
    }
</style>