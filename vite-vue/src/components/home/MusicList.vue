<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="list">

        </div>
    </div>
</template>
<script lang="ts">
export default {
    
}
</script>
<style lang="less">
    .musicList{
        width: 100%;
        height: 0.6rem;
        padding: 0 0.2rem;
        .musicTop{
            width: 100%;
            height: 0.6rem;
            display: flex;
            justify-content: space-between;
            margin-bottom: .2rem;
            .title{
                font-size: .4rem;
                font-weight: bold;
            }
            .more{
                border: 1px solid #ccc;
                text-align: center;
                line-height: 0.6rem;
                padding: 0 0.2rem;
                border-radius: .4rem;
            }
        }
    }
</style>