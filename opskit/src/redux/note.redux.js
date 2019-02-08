import { getAjax} from '../util/axios';

const GETCOMMENTLIST = 'GETCOMMENTLIST'
const GETNOTEINFO = 'GETNOTEINFO'
const STARTLOADING = 'STARTLOADING'
const STOPLOADING = 'STOPLOADING'

const initState={
	commentlist:[],
    loading: false,
    noteinfo:{}
}

// reducer
export function note(state=initState, action){
	switch(action.type){
		case GETCOMMENTLIST:
			return {...state, commentlist: action.payload}
		case GETNOTEINFO:
			return {...state, noteinfo: action.payload}
		case STARTLOADING:
			return {...state, loading: true}
		case STOPLOADING:
			return {...state, loading: false}
		default:
			return state
	}
} 

export function getCommentList(payload){
	return { type: GETCOMMENTLIST, payload }
}

export function getNoteInfo(payload){
	return { type: GETNOTEINFO, payload }
}
export function startLoading(){
	return { type: STARTLOADING }
}

export function stopLoading(){
	return { type: STOPLOADING }
}

export function getnoteinfo(id){
	return dispatch=>{
      dispatch(startLoading());
      getAjax('/resource/note', id,
        function(response){
            console.log(response);
            dispatch(stopLoading());
            dispatch(getNoteInfo(response.data.data));
        }
      )
	}
}
