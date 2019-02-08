import axios from 'axios';
import { message } from 'antd';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import { Appconfig } from '../config';

const baseUrl = Appconfig.serverBaseUrl;
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
}, (err) => {
    if (err && err.response) {
        switch (err.response.status) {
          case 400: 
            err.message = '请求错误(400)' ; 
            break;
          case 401: 
            err.message = '未授权，请重新登录(401)'; 
            break;
          case 403: 
            err.message = '拒绝访问(403)';
            break;
          case 404: 
            err.message = '请求出错(404)'; 
            break;
          case 408: 
            err.message = '请求超时(408)'; 
            break;
          case 500: 
            err.message = '服务器错误(500)';
            break;
          case 501: 
            err.message = '服务未实现(501)';
            break;
          case 502: 
            err.message = '网络错误(502)';
            break;
          case 503: 
            err.message = '服务不可用(503)'; 
            break;
          case 504: 
            err.message = '网络超时(504)';
            break;
          case 505: 
            err.message = 'HTTP版本不受支持(505)';
            break;
          default: 
            err.message = `连接出错(${err.response.status})!`;
        }
    }else{
        err.message = '连接服务器失败!'
    }
    NProgress.done();
    message.error(err.message).then(
      () => {
      if (err && err.response) {
          if (err.response.status === 401) {
            window.location.href = '/login';
          }
      }
     }

    );
    return Promise.reject(err);
})

function check_response_data(data){
  if (data.code === 0){
    return true;
  }
  return false;
}

export function getAjax(url, params={}, Callback, headers={}) {
    let token = sessionStorage.jwttoken;
    if(token){
        instance.defaults.headers.common['Authorization'] = token;
    }
    instance.get(url,{params, headers})
        .then(function (response) {
          if (check_response_data(response.data)){
            Callback(response);
          }else{
            message.error(response.data.msg);
          }
        });
}

export function postAjax(url, data, Callback, headers={}) {
    let token = sessionStorage.jwttoken;
    if(token){
        instance.defaults.headers.common['Authorization'] = token;
    }
    instance.post(url, data, {headers})
        .then(function (response) {
          if (check_response_data(response.data)){
            Callback(response);
          }else{
            message.error(response.data.msg);
          }
        });
}

export function putAjax(url, data, Callback, headers={}) {
    let token = sessionStorage.jwttoken;
    if(token){
        instance.defaults.headers.common['Authorization'] = token;
    }
    instance.put(url, data, {headers})
        .then(function (response) {
          if (check_response_data(response.data)){
            Callback(response);
          }else{
            message.error(response.data.msg);
          }
        });
}

export function requestAjax(config,Callback) {
    let token = sessionStorage.jwttoken;
    if(token){
        instance.defaults.headers.common['Authorization'] = token;
    }
    console.log(config);
    instance.request(config)
        .then(function (response) {
          if (check_response_data(response.data)){
            Callback(response);
          }else{
            message.error(response.data.msg);
          }
        });
}

export function deleteAjax(url, params, Callback, headers={}) {
    let token = sessionStorage.jwttoken;
    if(token){
        instance.defaults.headers.common['Authorization'] = token;
    }
    instance.delete(url, {data:params, headers})
        .then(function (response) {
          if (check_response_data(response.data)){
            Callback(response);
          }else{
            message.error(response.data.msg);
          }
        });
}


