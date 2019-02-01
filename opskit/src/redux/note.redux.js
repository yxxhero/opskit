import { getAjax} from '../util/axios';

const GETNOTELIST = 'GETNOTELIST'

const initState={
	notelist:[],
	content:'',
    raw_content:''
}

// reducer
export function note(state=initState, action){
	switch(action.type){
		case GETNOTELIST:
			return {...state, notelist: action.payload}
		default:
			return state
	}
} 

export function getNoteList(payload){
	return { type: GETNOTELIST, payload }
}

export function getnotelist(noteargs){
    console.log(noteargs);
	return dispatch=>{
      getAjax('/resource/note', noteargs,
        function(response){
            console.log(response);
            dispatch(getNoteList(response.data.data));
        }
      )
	}
}
