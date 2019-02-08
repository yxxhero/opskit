import { getAjax} from '../util/axios';

const GETRECOMMENDLIST = 'GETRECOMMENDLIST'
const STARTLOADING = 'STARTLOADING'
const STOPLOADING = 'STOPLOADING'

const initState={
	recommendlist:[],
    loading: false
}

// reducer
export function recommend(state=initState, action){
	switch(action.type){
		case GETRECOMMENDLIST:
			return {...state, recommendlist: action.payload}
		case STARTLOADING:
			return {...state, loading: true}
		case STOPLOADING:
			return {...state, loading: false}
		default:
			return state
	}
} 

export function getRecommendList(payload){
	return { type: GETRECOMMENDLIST, payload }
}

export function startLoading(){
	return { type: STARTLOADING }
}

export function stopLoading(){
	return { type: STOPLOADING }
}

export function getrecommendlist(){
	return dispatch=>{
      dispatch(startLoading());
      getAjax('/statistics/recommend', {},
        function(response){
            console.log(response);
            dispatch(stopLoading());
            dispatch(getRecommendList(response.data.data));
        }
      )
	}
}
