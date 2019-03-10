import { getAjax} from '../util/axios';

const GETADMINNOTELIST = 'GETADMINNOTELIST'
const STARTNOTESLOADING = 'STARTNOTESLOADING'
const STOPNOTESLOADING = 'STOPNOTESLOADING'

const initState={
	notelist:[],
    notetotal: 0,
    loading: false
}

// reducer
export function adminnotes(state=initState, action){
	switch(action.type){
		case GETADMINNOTELIST:
			return {...state, notelist: action.payload.data,  notetotal: action.payload.total}
		case STARTNOTESLOADING:
			return {...state, loading: true}
		case STOPNOTESLOADING:
			return {...state, loading: false}
		default:
			return state
	}
} 

export function getAdminNoteList(payload){
	return { type: GETADMINNOTELIST, payload }
}

export function startNoteLoading(){
	return { type: STARTNOTESLOADING }
}

export function stopNoteLoading(){
	return { type: STOPNOTESLOADING }
}

export function getadminnotelist(noteargs){
	return dispatch=>{
      dispatch(startNoteLoading());
      getAjax('/admin/notes', noteargs,
        function(response){
            dispatch(stopNoteLoading());
            dispatch(getAdminNoteList(response.data));
        }
      )
	}
}
