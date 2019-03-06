import { getAjax} from '../util/axios';

const GETUSERLIST = 'GETUSERLIST'
const STARTUSERSLOADING = 'STARTUSERSLOADING'
const STOPUSERSLOADING = 'STOPUSERSLOADING'

const initState={
	userlist:[],
    usertotal: 0,
    loading: false
}

// reducer
export function adminusers(state=initState, action){
	switch(action.type){
		case GETUSERLIST:
			return {...state, userlist: action.payload.data,  total: action.payload.total}
		case STARTUSERSLOADING:
			return {...state, loading: true}
		case STOPUSERSLOADING:
			return {...state, loading: false}
		default:
			return state
	}
} 

export function getUserList(payload){
	return { type: GETUSERLIST, payload }
}

export function startUserLoading(){
	return { type: STARTUSERSLOADING }
}

export function stopUserLoading(){
	return { type: STOPUSERSLOADING }
}

export function getuserlist(userargs){
	return dispatch=>{
      dispatch(startUserLoading());
      getAjax('/admin/users', userargs,
        function(response){
            dispatch(stopUserLoading());
            dispatch(getUserList(response.data));
        }
      )
	}
}
