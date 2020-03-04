import {GET_MOVIES_FAIL,GET_MOVIES_SUCCESS,NEXT_PAGE,PREVIOUS_PAGE,SET_SEARCH_VALUE} from '../types';

export default (state,{type,payload}) => {
    switch(type) {
        case GET_MOVIES_SUCCESS :
            return {
                ...state,
                movies : payload.results,
                numberOfPages : payload.total_pages
            }
        case GET_MOVIES_FAIL : 
            return {
                ...state,
                movies : [],
                numberOfPages : 0
            }
        case NEXT_PAGE : 
            return {
                ...state,
                currentPage : state.currentPage + 1
            }
        case PREVIOUS_PAGE : 
            return {
                ...state,
                currentPage : state.currentPage - 1
            }
        case SET_SEARCH_VALUE : 
            return {
                ...state,
                searchInput : payload,
                currentPage : 1
            }
        default :
            return state;
    }
}