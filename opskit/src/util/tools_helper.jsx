import axios from 'axios';
import { Appconfig } from '../config';
import { message } from 'antd';

const baseUrl = Appconfig.serverBaseUrl;


export function randomchoice(itemlist){
  return itemlist[Math.round(Math.random()*(itemlist.length-1))]
} 

export function CustomUploadFn(param){

  var instance = axios.create({
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
