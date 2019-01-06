import { getAjax, postAjax} from '../util/axios'
import { message } from 'antd' 

const LOGOUT = 'LOGOUT'
const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'

const initState={
	msg:'',
	username:'',
	type:'',
    jwttoken:''
}

// reducer
export function user(state=initState, action){
	switch(action.type){
		case LOGIN:
			return {...state, msg:'', ...action.payload}
		case LOGOUT:
			return {...initState}
		case REGISTER:
			return {...state}
		default:
			return state
	}
} 

export function logoutSubmit(){
	return { type:LOGOUT }
}

export function registerSubmit(){
	return { type: REGISTER }
}

export function loginSubmit(payload){
	return { type: LOGIN, payload }
}

export function login(username,password){
    console.log(username, password);
	return dispatch=>{
      postAjax('/auth/login',{username,password},
        function(response){
            console.log(response);
            sessionStorage.setItem("username", response.data.username);
            sessionStorage.setItem("jwttoken", response.data.token);
            message.success("登录成功, 跳转中...", 1).then(() => window.location.href = '/');
            dispatch(loginSubmit({"username": response.data.username, "jwttoken": response.data.token}))
        }
      )
	}
}

export function logout(){
	return dispatch=>{
      getAjax('/auth/logout',{},
        function(response){
             console.log(response);
             sessionStorage.clear();
             message.success("退出成功", 3).then(() => window.location.href = '/');
             dispatch(logoutSubmit());
        }
      )
	}
}

export function register(username,password,email){
    console.log(username,password,email);
	return dispatch=>{
      postAjax('/auth/register',{username,password, email},
        function(response){
             console.log(response);
             message.success("注册成功", 1).then(() => window.location.href = '/login');
             dispatch(registerSubmit());
        }
      )
	}
}

