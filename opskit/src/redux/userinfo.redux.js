import { getAjax } from '../util/axios'

const GETUSERINFO = 'GETUSERINFO'
const STARTUSERINFOLOADING = 'STARTUSERINFOLOADING'
const STOPUSERINFOLOADING = 'STOPUSERINFOLOADING'

const initState={
	username:'',
	userrole:'',
    useremail: '',
    userauditing: 0,
    userinfoloading: false,
    useravatar: null,
    userdescription:'',
    createtime: '',
    notecount: 0 
}

// reducer
export function userinfo(state=initState, action){
	switch(action.type){
		case GETUSERINFO:
			return {...state, ...action.payload}
		case STARTUSERINFOLOADING:
			return {...state, userinfoloading: true}
		case STOPUSERINFOLOADING:
			return {...state, userinfoloading: false}
		default:
			return state
	}
} 

export function getUserInfoList(payload){
	return { type: GETUSERINFO, payload }
}

export function startUserInfoLoading(){
	return { type: STARTUSERINFOLOADING }
}

export function stopUserInfoLoading(){
	return { type: STOPUSERINFOLOADING }
}

export function getuserinfo(){
	return dispatch=>{
      dispatch(startUserInfoLoading());
      getAjax('/resource/userinfo',{},
        function(response){
            console.log(response);
            dispatch(stopUserInfoLoading());
            dispatch(getUserInfoList(response.data.data));
        }
      )
	}
}

