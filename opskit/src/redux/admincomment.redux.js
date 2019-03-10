import { getAjax} from '../util/axios';

const GETADMINCOMMENTLIST = 'GETADMINCOMMENTLIST'
const STARTADMINCOMMENTSLOADING = 'STARTADMINCOMMENTSLOADING'
const STOPADMINCOMMENTSLOADING = 'STOPADMINCOMMENTSLOADING'

const initState={
	commentlist:[],
    commenttotal: 0,
    loading: false
}

// reducer
export function admincomments(state=initState, action){
	switch(action.type){
		case GETADMINCOMMENTLIST:
			return {...state, commentlist: action.payload.data,  commenttotal: action.payload.total}
		case STARTADMINCOMMENTSLOADING:
			return {...state, loading: true}
		case STOPADMINCOMMENTSLOADING:
			return {...state, loading: false}
		default:
			return state
	}
} 

export function getAdminCommentList(payload){
	return { type: GETADMINCOMMENTLIST, payload }
}

export function startAdminCommentLoading(){
	return { type: STARTADMINCOMMENTSLOADING }
}

export function stopAdminCommentLoading(){
	return { type: STOPADMINCOMMENTSLOADING }
}

export function getadmincommentlist(commentargs){
	return dispatch=>{
      dispatch(startAdminCommentLoading());
      getAjax('/admin/comments', commentargs,
        function(response){
            dispatch(stopAdminCommentLoading());
            dispatch(getAdminCommentList(response.data));
        }
      )
	}
}
