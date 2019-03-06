import { getAjax} from '../util/axios';

const GETNOTELIST = 'GETNOTELIST'
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
		case GETNOTELIST:
			return {...state, notelist: action.payload.data,  total: action.payload.total}
		case STARTNOTESLOADING:
			return {...state, loading: true}
		case STOPNOTESLOADING:
			return {...state, loading: false}
		default:
			return state
	}
} 

export function getNoteList(payload){
	return { type: GETNOTELIST, payload }
}

export function startNoteLoading(){
	return { type: STARTNOTESLOADING }
}

export function stopNoteLoading(){
	return { type: STOPNOTESLOADING }
}

export function getnotelist(noteargs){
	return dispatch=>{
      dispatch(startNoteLoading());
      getAjax('/admin/notes', noteargs,
        function(response){
            dispatch(stopNoteLoading());
            dispatch(getNoteList(response.data));
        }
      )
	}
}
