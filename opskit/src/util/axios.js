import axios from 'axios';
import { notification } from 'antd';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

const baseUrl = 'http://192.168.19.130:5000';
var instance = axios.create({
    baseURL: baseUrl,//测试环境
    timeout: 10000,
});

instance.defaults.headers.post['Content-Type'] = 'multipart/form-data'
instance.defaults.headers.put['Content-Type'] = 'multipart/form-data'

NProgress.configure({ showSpinner: false  });
//拦截请求
instance.interceptors.request.use(function(config){
    NProgress.start();
	return config;
})

//拦截响应
instance.interceptors.response.use(function(config){
    NProgress.done();
	return config
})

export function getAjax(url, params={}, Callback, headers={}) {
    let token = sessionStorage.token;
    if(token){
        instance.defaults.headers.common['Authorization'] = token;
    }
    instance.get(url,{params, headers})
        .then(function (response) {
            Callback(response);
        })
        .catch(function (error,resoponse) {
            /* return Promise.reject(error);*/
            console.log(error);
            notification.error({
                message: '提示',
                description: `服务器错误！`,
                duration: 2,
            });
        });
}

export function postAjax(url,params,Callback, headers={}) {
    let token = sessionStorage.token;
    if(token){
        instance.defaults.headers.common['Authorization'] = token;
    }
    instance.post(url, params, {headers})
        .then(function (response) {

            Callback(response);
        })
        .catch(function (error) {
            console.log(error);
            notification.error({
                message: '提示',
                description: `登录超时，请重新登录`,
                duration: 2,
            });
        });
}

export function putAjax(url,params,Callback, headers={}) {
    let token = sessionStorage.token;
    if(token){
        instance.defaults.headers.common['Authorization'] = token;
    }
    instance.put(url,params,{headers})
        .then(function (response) {

            Callback(response);
        })
        .catch(function (error) {
            console.log(error);
            notification.error({
                message: '提示',
                description: `登录超时，请重新登录`,
                duration: 2,
            });
        });
}

export function requestAjax(config,Callback) {
    let token = sessionStorage.token;
    if(token){
        instance.defaults.headers.common['Authorization'] = token;
    }
    console.log(config);
    instance.request(config)
        .then(function (response) {

            Callback(response);
        })
        .catch(function (error) {
            console.log(error);
            notification.error({
                message: '提示',
                description: `登录超时，请重新登录`,
                duration: 2,
            });
        });
}

export function deleteAjax(url, params, Callback, headers={}) {
    let token = sessionStorage.token;
    if(token){
        instance.defaults.headers.common['Authorization'] = token;
    }
    instance.delete(url, {data:params, headers})
        .then(function (response) {

            Callback(response);
        })
        .catch(function (error) {
            console.log(error);
            notification.error({
                message: '提示',
                description: `登录超时，请重新登录`,
                duration: 2,
            });
        });
}


