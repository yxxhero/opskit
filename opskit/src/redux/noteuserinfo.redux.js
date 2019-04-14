import { getAjax } from '../util/axios'

const GETNOTEUSERINFO = 'GETNOTEUSERINFO'
const STARTNOTEUSERINFOLOADING = 'STARTNOTEUSERINFOLOADING'
const STOPNOTEUSERINFOLOADING = 'STOPNOTEUSERINFOLOADING'

const initState={
	username:'',
	userrole:'',
    useremail: '',
    userauditing: 0,
    noteuserinfoloading: false,
    useravatar: null,
    userdescription:'',
    createtime: '',
    notecount: 0 
}

// reducer
export function noteuserinfo(state=initState, action){
	switch(action.type){
		case GETNOTEUSERINFO:
			return {...state, ...action.payload}
		case STARTNOTEUSERINFOLOADING:
			return {...state, noteuserinfoloading: true}
		case STOPNOTEUSERINFOLOADING:
			return {...state, noteuserinfoloading: false}
		default:
			return state
	}
} 

export function getNoteUserInfoList(payload){
	return { type: GETNOTEUSERINFO, payload }
}

export function startNoteUserInfoLoading(){
	return { type: STARTNOTEUSERINFOLOADING }
}

export function stopNoteUserInfoLoading(){
	return { type: STOPNOTEUSERINFOLOADING }
}

export function getnoteuserinfo(id){
	return dispatch=>{
      dispatch(startNoteUserInfoLoading());
      getAjax('/resource/noteuserinfo',{id},
        function(response){
            console.log(response);
            dispatch(stopNoteUserInfoLoading());
            dispatch(getNoteUserInfoList(response.data.data));
        }
      )
	}
}

