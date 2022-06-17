import axios from 'axios';

// 创建axios实例 请求
let service: any = axios.create({
    baseURL: "https://netease-cloud-music-api-alpha-fawn.vercel.app/",
    timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use((config: any) => {
    // 在发送请求之前做些什么
    return config;
},(error: any) =>{
    console.log(error, "error-request");
});

// 响应拦截器
service.interceptors.response.use((response: any) => {
    // 对响应数据做点什么
    switch (response.status) {
        case 200:
            return response.data;
        default:
            return response.data;
    }
},(error: any) => {
    console.log(error, "error-response");
});

// 导出实例
export default service;