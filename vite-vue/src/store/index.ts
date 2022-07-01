import { createStore } from 'vuex'

export default createStore({
  state: {
    // 播放列表
    playList: [{
      al: {
        id: 10782,
        name: "罗大佑自选辑",
        pic: 109951165639206660,
        picUrl: "https://p1.music.126.net/9H2OptgB3LV2Nsw6xXn1qQ==/109951165639206651.jpg",
        pic_str: "109951165639206651"
      },
      id: 7502265251
    }],
    playListIndex: 0,  // 播放列表-播放歌曲下标
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
