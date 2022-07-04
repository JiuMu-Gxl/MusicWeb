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
  },
  getters: {
  },
  mutations: {
    AddMusic(state, value) {
      if (!value) return;
      let isInPlayList = state.playList.findIndex(p => p.id == value.id);
      if (isInPlayList < 0) {
        state.playList.push(value);
        state.playListIndex++;
        return;
      }
      state.playListIndex = isInPlayList;
    },
    updatePlayListIndex(state, value) {
      if (value < 0) value = 0;
      if (value >= state.playList.length) value = state.playList.length - 1;
      state.playListIndex = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
