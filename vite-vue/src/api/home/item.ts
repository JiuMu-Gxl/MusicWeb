import request from "/@/api/index";

// 获取歌单信息
export const getMusicItemList = (data: any, s: number = 8) => request({ url: `/playlist/detail?id=${data}&s=${s}`, method: "get"});

// 获取歌单所有歌曲
export const getItemList = (data: any, limit: number = 10, offset: number = 0) => request({ url: `/playlist/track/all?id=${data}&limit=${limit}&offset=${offset}`, method: "get"});

