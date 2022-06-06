// 封装请求参数
import service from ".";

function request({ method='get', url = '', data = {}, callback = {} }) {
    return service({
        method,
        url,
        data,
        callback
    });
}
export default request;