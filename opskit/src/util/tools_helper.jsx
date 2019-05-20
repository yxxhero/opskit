import axios from 'axios';
import { Appconfig } from '../config';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import { message } from 'antd';

const baseUrl = Appconfig.serverBaseUrl;

export function randomchoice(itemlist){
  return itemlist[Math.round(Math.random()*(itemlist.length-1))]
} 

export const uploadProps = {
  action: '/resource/upload',
  multiple: false,
  data: { is_avatar: 1 },
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  onStart(file) {
    console.log('onStart', file, file.name);
  },
  onSuccess(ret, file) {
    message.success("头像上传成功").then(() => window.location.reload());
    console.log('onSuccess', ret, file.name);
  },
  onError(err) {
    console.log('onError', err);
    message.error("头像上传失败");
  },
  onProgress({ percent }, file) {
    console.log('onProgress', file.name);
  },
  customRequest({
    action,
    data,
    file,
    filename,
    headers,
    onError,
    onProgress,
    onSuccess,
    withCredentials,
  }) {
    const formData = new FormData();
    if (data) {
      // eslint-disable-next-line
      Object.keys(data).map(key => {
        formData.append(key, data[key]);
      });
    }
    formData.append(filename, file);
    const instance = axios.create({
        baseURL: baseUrl,//测试环境
        timeout: 10000,
        onUploadProgress: function (progressEvent) {
            onProgress(progressEvent.loaded / progressEvent.total * 100);
        }, 
    });
    
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
        message.destroy();
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
    let token = sessionStorage.jwttoken;
    if(token){
        instance.defaults.headers.common['Authorization'] = token;
    }

    instance.post(action, formData, {
        withCredentials,
        headers,
      })
      .then(({ data: response }) => {
        onSuccess(response, file);
      })
  },
};

export function CustomUploadFn(param){

  const instance = axios.create({
      baseURL: baseUrl,//测试环境
      timeout: 10000,
      onUploadProgress: function (progressEvent) {
          param.progress(progressEvent.loaded / progressEvent.total * 100);
      }, 
  });

  instance.defaults.headers.post['Content-Type'] = 'multipart/form-data'

  const fd = new FormData();
  fd.append('file', param.file)

  let token = sessionStorage.jwttoken;
  if(token){
      instance.defaults.headers.common['Authorization'] = token;
  }

  instance.post('/resource/upload', fd)
      .then(function (response) {
         console.log(response);
        if (response.data.code === 0){
           param.success({
                 url: response.data.url,
                 width: '100%',
                 height: '100%'
           });
        }else{
           message.error(response.data.msg);
           param.error({
             msg: response.data.msg 
           });
        }
      }).catch( function(err){
           console.log(err.response);
           if (err && err.response) {
               switch (err.response.status) {
                   case 400: err.message = '请求错误(400)' ; break;
                   case 401: err.message = '未授权，请重新登录(401)'; break;
                   case 403: err.message = '拒绝访问(403)'; break;
                   case 404: err.message = '请求出错(404)'; break;
                   case 408: err.message = '请求超时(408)'; break;
                   case 500: err.message = '服务器错误(500)'; break;
                   case 501: err.message = '服务未实现(501)'; break;
                   case 502: err.message = '网络错误(502)'; break;
                   case 503: err.message = '服务不可用(503)'; break;
                   case 504: err.message = '网络超时(504)'; break;
                   case 505: err.message = 'HTTP版本不受支持(505)'; break;
                   default: err.message = `连接出错(${err.response.status})!`;
               }
           }else{
               err.message = '连接服务器失败!'
           }
           param.error({
             msg: err.message 
           })
           message.error(err.message).then(
             () => {
             if (err && err.response) {
                 if (err.response.status === 401) {
                   window.location.href = '/login';
                 }
             }
            }

    );
      } );
}
