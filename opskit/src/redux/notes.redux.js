import { getAjax} from '../util/axios';

const GETNOTELIST = 'GETNOTELIST'
const STARTNOTELOADING = 'STARTNOTELOADING'
const STOPNOTELOADING = 'STOPNOTELOADING'
const GETNOTICELIST = 'GETNOTICELIST'
const STARTNOTICELOADING = 'STARTNOTICELOADING'
const STOPNOTICELOADING = 'STOPNOTICELOADING'

const initState={
	notelist:[],
	noticelist:[],
    loading: false,
    noticeloading: false,
	content:'',
    raw_content:''
}

// reducer
export function notes(state=initState, action){
	switch(action.type){
		case GETNOTELIST:
			return {...state, notelist: action.payload}
		case GETNOTICELIST:
			return {...state, noticelist: action.payload}
		case STARTNOTELOADING:
			return {...state, loading: true}
		case STOPNOTELOADING:
			return {...state, loading: false}
		case STARTNOTICELOADING:
			return {...state, noticeloading: true}
		case STOPNOTICELOADING:
			return {...state, noticeloading: false}
		default:
			return state
	}
} 

export function getNoteList(payload){
	return { type: GETNOTELIST, payload }
}

export function getNoticeList(payload){
	return { type: GETNOTICELIST, payload }
}

export function startNoteLoading(){
	return { type: STARTNOTELOADING }
}

export function stopNoteLoading(){
	return { type: STOPNOTELOADING }
}

export function startNoticeLoading(){
	return { type: STARTNOTICELOADING }
}

export function stopNoticeLoading(){
	return { type: STOPNOTICELOADING }
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

export function getnoticelist(){
	return dispatch=>{
      dispatch(startNoticeLoading());
      getAjax('/resource/notices', {},
        function(response){
            dispatch(stopNoticeLoading());
            dispatch(getNoticeList(response.data.data));
        }
      )
	}
}
