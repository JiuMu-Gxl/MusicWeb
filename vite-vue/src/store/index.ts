import { createStore } from 'vuex'
import headImg from '/@/assets/headImg.png';

export default createStore({
  state: {
    // 播放列表
    playList: [{
      name: '暂无歌曲',
      al: {
        id: 0,
        name: "暂无歌曲",
        picUrl: headImg
      },
      id: 0
    }],
    playListIndex: 0,  // 播放列表-播放歌曲下标
    playState: false,
    isCanPlay: false,
  },
  getters: {
  },
  mutations: {
    AddMusic(state, value) {
      if (!value) return;
      if (state.playList[0].id == 0) {
        state.playList[0] = value;
        state.isCanPlay = true;
        return;
      }
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
