import { createStore } from 'vuex'

export default createStore({
  state: {
    // 播放列表
    playList: [{
      name: '东方之珠',
      al: {
        id: 10782,
        name: "罗大佑自选辑",
        pic: 109951165639206660,
        picUrl: "https://p1.music.126.net/9H2OptgB3LV2Nsw6xXn1qQ==/109951165639206651.jpg",
        pic_str: "109951165639206651"
      },
      id: 108653
    }],
    playListIndex: 0,  // 播放列表-播放歌曲下标
    playState: false,
  },
  getters: {
  },
  mutations: {
    AddMusic(state, value) {
      if (!value) return;
      // 获取当前歌曲在播放列表的索引
      let isInPlayList = state.playList.findIndex(p => p.id == value.id);
      // 若当前歌曲索引为-1则新增进播放列表 播放索引 = 播放列表长度 - 1
      if (isInPlayList < 0) {
        state.playList.push(value);
        state.playListIndex = state.playList.length - 1;
        return;
      }
      // 若当前歌曲索引为大于 -1 则播放索引 = 当前歌曲在播放列表的索引
      state.playListIndex = isInPlayList;
    },
    updatePlayListIndex(state, value) {
      if (value < 0) value = 0;
      if (value >= state.playList.length) value = state.playList.length - 1;
      state.playListIndex = value;
    },
    updatePlayState(state, value) {
      state.playState = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
