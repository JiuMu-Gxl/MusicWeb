import request from "../request";

// 获取歌单信息
export const getMusicItemList = (data: any, s: any = 8) => request({ url: `/playlist/detail?id=${data}&s=${s}`, method: "get"});

