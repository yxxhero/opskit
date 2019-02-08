import { getAjax} from '../util/axios';

const GETNOTELIST = 'GETNOTELIST'
const STARTNOTELOADING = 'STARTNOTELOADING'
const STOPNOTELOADING = 'STOPNOTELOADING'

const initState={
	notelist:[],
    loading: false,
	content:'',
    raw_content:''
}

// reducer
export function notes(state=initState, action){
	switch(action.type){
		case GETNOTELIST:
			return {...state, notelist: action.payload}
		case STARTNOTELOADING:
			return {...state, loading: true}
		case STOPNOTELOADING:
			return {...state, loading: false}
		default:
			return state
	}
} 

export function getNoteList(payload){
	return { type: GETNOTELIST, payload }
}

export function startNoteLoading(){
	return { type: STARTNOTELOADING }
}

export function stopNoteLoading(){
	return { type: STOPNOTELOADING }
}

export function getnotelist(noteargs){
    console.log(noteargs);
	return dispatch=>{
      dispatch(startNoteLoading());
      getAjax('/resource/notes', noteargs,
        function(response){
            console.log(response);
            dispatch(stopNoteLoading());
            dispatch(getNoteList(response.data.data));
        }
      )
	}
}
