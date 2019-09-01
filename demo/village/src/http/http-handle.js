import axios from 'axios';
// 缓存
// 配置axios基础路径默认值
axios.defaults.baseURL = '/api/v1';
// 超时时间
axios.defaults.timeout = 5 * 60 * 1000;
// 请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.request.use(config => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest';

    // 设置abort token
    if(config.params) {
        if(config.params.cancelToken) {
            config.cancelToken = config.params.cancelToken;
            delete config.params.cancelToken;
        }
    }

    if(config.data) {
        if(config.data.cancelToken) {
            config.cancelToken = config.data.cancelToken;
            delete config.data.cancelToken;
        }
    }

    if(config.data) {
        // 设置响应头
        if(config.data.responseType) {
            config.responseType = config.data.responseType;
            delete config.data.responseType;
        }
        // 设置表单数据
        if(config.data.formData) {
            const params = new URLSearchParams();
            for(let key in config.data.params) {
                if(typeof config.data.params[key] === 'string') {
                    params.append(key, config.data.params[key]);
                } else {
                    params.append(key, JSON.stringify(config.data.params[key]));
                }
            }
            config.data = params;
        }
    }
    
    return config;
}, error => {
    return Promise.reject(error);
});

// http 响应拦截器
axios.interceptors.response.use(data => {
    return data;
}, (error) => {
    const msg = error.response ? error.response.data : error
    // if(!axios.isCancel(error)) {}
    return Promise.reject(msg);
})

export default axios;