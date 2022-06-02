import axios from 'axios';

// 创建axios实例
let service = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 5000,
})

// 导出实例
export default service;