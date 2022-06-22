import axios from 'axios';
import { Toast } from 'vant';

// 创建axios实例 请求
let service: any = axios.create({
    baseURL: "https://netease-cloud-music-api-alpha-fawn.vercel.app/",
    timeout: 5000,
})

// 定义请求次数
let requestingCount  = 0;

// 请求Loading
const handleRequestLoading = () => {
    if (!requestingCount) {
        // 请求等待Loading
        Toast.loading({
            message: '加载中...',
            forbidClick: true
        });
    };
    // 请求进来即加
    requestingCount++;
}

// 响应Loading
const handleResponseLoading = () => {
    // 响应进来即减
    requestingCount--;
    if (!requestingCount) {
        Toast.clear();
    };
}

// 请求拦截器
service.interceptors.request.use((config: any) => {
    // 在发送请求之前做些什么
    handleRequestLoading();
    return config;
},(error: any) =>{
    handleResponseLoading();
    console.log(error, "error-request");
});

// 响应拦截器
service.interceptors.response.use((response: any) => {
    // 对响应数据做点什么
    handleResponseLoading();
    switch (response.status) {
        case 200:
            return response.data;
        default:
            return response.data;
    }
},(error: any) => {
    handleResponseLoading();
    console.log(error, "error-response");
});

// 导出实例
export default service;