import axios from './http-handle';

const CACHE = {};
// 域名协议正则
const PROTOCOL_AND_DOMAIN_REGEX = /^https?:\/\/[^\/]*/;
// 设置值转换，来自angular-resource
function encodeUriQuery(val, pctEncodeSpaces) {
    return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
}
function encodeUriSegment(val) {
    return encodeUriQuery(val, true).
        replace(/%26/gi, '&').
        replace(/%3D/gi, '=').
        replace(/%2B/gi, '+');
  }
// 设置url 的参数，来自angular-resource
function setUrlParams(actionUrl, params) {
    let url = actionUrl,
        val,
        encodedVal,
        protocolAndDomain = '';

    let urlParams = {};
    url.split(/\W/).forEach((param) => {
        if (param === 'hasOwnProperty') {
            throw Error('badname', "hasOwnProperty is not a valid parameter name.");
        }
        if (!(new RegExp("^\\d+$").test(param)) && param &&
            (new RegExp("(^|[^\\\\]):" + param + "(\\W|$)").test(url))) {
            urlParams[param] = true;
        }
    })

            
    url = url.replace(/\\:/g, ':');
    url = url.replace(PROTOCOL_AND_DOMAIN_REGEX, function(match) {
        protocolAndDomain = match;
        return ''
    })

    params = params || {};

    Object.keys(urlParams).forEach((urlParam) => {
        if(params.hasOwnProperty(urlParam)) {
            val = params[urlParam];
            if (val !== null) {
                encodedVal = encodeUriSegment(val);
                url = url.replace(new RegExp(":" + urlParam + "(\\W|$)", "g"), function(match, p1) {
                    return encodedVal + p1;
                })
            } else {
                url = url.replace(new RegExp("(\/?):" + urlParam + "(\\W|$)", "g"), function(match,
                    leadingSlashes, tail) {
                    if (tail.charAt(0) == '/') {
                        return tail;
                    } else {
                        return leadingSlashes + tail;
                    }
                });
            }
            delete params[urlParam];
        } else {
            url = url.replace(new RegExp(`:${urlParam}\\/`), '');
        }
    })

    url = url.replace(/\/\.(?=\w+($|\?))/, '.');
    return protocolAndDomain + url.replace(/\/\\\./, '/.');
}

// 生成resource
function resource(method, baseUrl, cacheConfig = {}) {
    let cc = Object.assign({}, cacheConfig);
    return function(params = {}, config = {}) {
        const url = setUrlParams(baseUrl, params);
        if(CACHE[cacheConfig.cacheKey] && CACHE[cacheConfig.cacheKey][url] && cc.capacity) {
            if(!params._forceRefresh) {
                switch(method) {
                    case "get":
                        return new Promise((resolve) => {
                            // console.log(`来自缓存:${url}`);
                            cc.capacity--;
                            resolve(Object.assign({}, CACHE[cacheConfig.cacheKey][url]));
                        })
                    case "save":
                    case "update":
                    case "delete":
                        delete CACHE[cacheConfig.cacheKey][url];
                        break;
                    default:
                        break;
                }
            } else {
                delete CACHE[cacheConfig.cacheKey][url];
            }
        }

        if(!cc.capacity) {
            cc.capacity = cacheConfig.capacity;
        }

        switch(method) {
            case 'get':
            case 'delete':
                params = {params: params};
                break;
            case 'post':
            case 'put':
                break;
            default: 
                break;
        }
        
        // 返回promise
        for(let c in config) {
            params[c] = config[c];
        }
        // if(params.params.cancelToken) {
        //     params.cancelToken = params.params.cancelToken;
        //     delete params.params.cancelToken;
        // }
        let promise = axios[method](url, params);
        promise.then((res) => {
            // console.log(`来自请求:${url}`);
            if(!CACHE[cacheConfig.cacheKey]) {
                CACHE[cacheConfig.cacheKey] = {};
            }
            CACHE[cacheConfig.cacheKey][url] = res;
        }).catch(() => {

        });
        return promise;
    }
}

const genResource = (url, cacheConfig) => {
    return {
        'get': resource('get', url, cacheConfig),
        'query': resource('post', url, cacheConfig),
        'save': resource('post', url, cacheConfig),
        'update': resource('put', url, cacheConfig),
        'delete': resource('delete', url, cacheConfig)
    };
}

export default genResource;