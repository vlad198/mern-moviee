import {LOGIN_FAIL,LOGIN_SUCCESS,KEEP_LOGGED_IN, LOGOUT} from '../types';

export default (state,{type,payload}) => {
    switch(type) {
        case LOGIN_SUCCESS :
            localStorage.setItem('token',payload.token);
            return {
                ...state,
                userAuth : true,
                user : payload.user,
                error : null
            }
        case LOGIN_FAIL :
            localStorage.removeItem('token');
            return {
                ...state,
                userAuth : null,
                user : null,
                error : payload
            }
        case KEEP_LOGGED_IN :
            return {
                ...state,
                userAuth : true,
                user : payload,
                error : null
            }
        case LOGOUT :
            localStorage.removeItem('token');
            return {
                ...state,
                userAuth : null,
                user : null,
                error : null
            }
        
        default :
            return state;
    }
}