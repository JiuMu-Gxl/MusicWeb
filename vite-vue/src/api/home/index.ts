import request from "../request";

// 获取首页轮播图
export const getBanner = (data: any = 2) => request({ url: '/banner?type=' + data, method: "get"});

// 获取发现好歌单
export const GetMusicList = (data: any = 10) => request({ url: '/personalized?limit=' + data, method: "get" });
