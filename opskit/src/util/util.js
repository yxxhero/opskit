import React from 'react';
import { Redirect  } from 'react-router-dom';
export function getChatId(userId, targetId){
	return [userId, targetId].sort().join('_')
}

export function replaceAll(s,f,e){
    var reg=new RegExp(f,"g"); //创建正则RegExp对象   
    return s.replace(reg,e); 
}

export function strlength(str) {  
  let len = 0;  
  for (let i=0; i < str.length; i++) {  
    if (str.charCodeAt(i)>127 || str.charCodeAt(i)==94) {  
       len += 2;  
     } else {  
       len ++;  
     }  
   }  
  return len;  
}

export function cutstr( content,len=30){
  
  if (strlength(content) <= len){
    return content;
  }
  let content_str ="";
  let limit = 0
  for (let i=0; i < content.length; i++) {  
    if (content.charCodeAt(i)>127 || content.charCodeAt(i)==94) {  
       limit += 2;  
      if (limit <= len){
         content_str += content[i]
      }else{
        return content_str + '...';
      } 
     } else {  
       limit ++;  
       if (limit <= len){
          content_str += content[i]
       }else{
         return content_str + '...';
       } 
     }  
   }  
}

export function checkSession(){
  if (sessionStorage.getItem("username") && sessionStorage.getItem("jwttoken")){
    return true;
  }
  return false;
}

export function checkAdmin(){
  if (sessionStorage.getItem("userrole") === "Admin" && sessionStorage.getItem("jwttoken")){
    return true;
  }
  return false;
}

export function isLogin(commponent){
  if (checkSession()){
     return commponent;
  }
  return <Redirect to="/login" />;
}
