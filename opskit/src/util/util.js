import React from 'react';
import { Redirect  } from 'react-router-dom';
export function getChatId(userId, targetId){
	return [userId, targetId].sort().join('_')
}

export function replaceAll(s,f,e){
    var reg=new RegExp(f,"g"); //创建正则RegExp对象   
    return s.replace(reg,e); 
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
