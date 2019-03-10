import { getAjax} from '../util/axios';

const GETSEARCHNOTELIST = 'GETSEARCHNOTELIST'
const STARTSEARCHNOTELOADING = 'STARTSEARCHNOTELOADING'
const STOPSEARCHNOTELOADING = 'STOPSEARCHNOTELOADING'

const initState={
	searchnotelist:[],
    searchnotetotal: 0,
    searchloading: false
}

// reducer
export function searchnotes(state=initState, action){
	switch(action.type){
		case GETSEARCHNOTELIST:
			return {...state, searchnotelist: action.payload.data,  searchnotetotal: action.payload.total}
		case STARTSEARCHNOTELOADING:
			return {...state, searchloading: true}
		case STOPSEARCHNOTELOADING:
			return {...state, searchloading: false}
		default:
			return state
	}
} 

export function getSearchNoteList(payload){
	return { type: GETSEARCHNOTELIST, payload }
}

export function startSearchNoteLoading(){
	return { type: STARTSEARCHNOTELOADING }
}

export function stopSearchNoteLoading(){
	return { type: STOPSEARCHNOTELOADING }
}

export function getsearchnotelist(noteargs){
	return dispatch=>{
      dispatch(startSearchNoteLoading());
      getAjax('/search/notes', noteargs,
        function(response){
            dispatch(stopSearchNoteLoading());
            dispatch(getSearchNoteList(response.data));
        }
      )
	}
}
