<template>
  <div class="search">
    <div class="searchInput">
      <van-search v-model="keywords" shape="round" maxlength="100" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel"></van-search>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, index) in searchList" :key="index">
        <div class="itemLeft" @click="playMusic(item)">
            <div class="number">{{index + 1}}</div>
            <div class="itemInfo">
              <p>{{ item.name }}</p>
              <p class="singer">
                <span v-for="(aritem, arIndex) in item.ar" :key="aritem.id">
                  <span>{{ aritem.name }}</span>
                  <span v-if="!(arIndex == item.ar.length-1)"> / </span>
                </span>
              </p>
            </div>
        </div>
        <div class="itemRight">
          <svg-icon iconName="icon-wymusicshipin" class="icon bofang" color="#999"></svg-icon>
          <svg-icon iconName="icon-wymusicgengduo" class="icon liebiao" color="#999"></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import { SearchMusic } from "/@/api/home/index";
  import SvgIcon from '/@/components/SvgIcon/SvgIcon.vue'
  import router from '/@/router/index'

  // 获取查询条件
  const keywords = ref();
  const route = useRoute();
  const searchList = ref(new Array<any>());
  const state = useStore();

  onMounted(() => {
    keywords.value = (route.query.keywords as any) ?? "";
    onSearch();
  });

  // 搜索歌曲
  async function onSearch() {
    let res = await SearchMusic(keywords.value);
    searchList.value = res.result.songs;
  }

  // 关闭搜索页面
  function onCancel() {
    router.push({ name: 'home' });
  }

  // 播放歌曲
  function playMusic(value: any) {
    state.commit("AddMusic", value);
    state.commit("updatePlayState", true);
  }
</script>

<style lang="less">
.search{
  width: 100%;
  max-height: 10rem;
  .searchInput{
    width: 100%;
    z-index: 100;
    position: sticky;
    top: 0;
  }
  .itemList{
    width: 100%;
    padding: 0 0.2rem;
    padding-bottom: 1.4rem;
    .item{
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft{
        width: 75%;
        height: 100%;
        display: flex;
        align-items: center;
        .number{
          width: .6rem;
          font-weight: bold;
        }
        .itemInfo{
          width: 90%;
          *{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: bold;
          }
          .singer{
            font-weight: 400;
            font-size: .24rem;
            color: #999;
          }
        }
      }
      .itemRight{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon{
          fill: #999;
        }
      }
    }
  }
}
</style>
