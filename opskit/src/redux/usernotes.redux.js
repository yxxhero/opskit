import { getAjax} from '../util/axios';

const GETUSERNOTELIST = 'GETUSERNOTELIST'
const STARTUSERNOTELOADING = 'STARTUSERNOTELOADING'
const STOPUSERNOTELOADING = 'STOPUSERNOTELOADING'

const initState={
	usernotelist:[],
	usernotetotal:0,
    usernotesloading: false,
}

// reducer
export function usernotes(state=initState, action){
	switch(action.type){
		case GETUSERNOTELIST:
			return {...state, usernotelist: action.payload.usernotelist, usernotetotal: action.payload.usernotetotal}
		case STARTUSERNOTELOADING:
			return {...state, usernotesloading: true}
		case STOPUSERNOTELOADING:
			return {...state, usernotesloading: false}
		default:
			return state
	}
} 

export function getUserNoteList(payload){
	return { type: GETUSERNOTELIST, payload }
}

export function startUserNoteLoading(){
	return { type: STARTUSERNOTELOADING }
}

export function stopUserNoteLoading(){
	return { type: STOPUSERNOTELOADING }
}

export function getusernotelist(usernoteargs){
	return dispatch=>{
      dispatch(startUserNoteLoading());
      getAjax('/resource/usernotes', usernoteargs,
        function(response){
            console.log(response);
            dispatch(stopUserNoteLoading());
            dispatch(getUserNoteList(response.data.data));
        }
      )
	}
}
