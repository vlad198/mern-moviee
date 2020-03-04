import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import axios from 'axios';
import AuthReducer from './AuthReducer';
import { LOGIN_FAIL, LOGIN_SUCCESS ,KEEP_LOGGED_IN, LOGOUT} from '../types';

const AuthState = (props) => {

    const initialState = {
        userAuth: null,
        error: null,
        user: null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const keepUserLoggedIn = async () => {

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.get('/login',config);
            dispatch({
                type: KEEP_LOGGED_IN,
                payload : res.data
            });
        } catch (err) {
            dispatch({
                type : LOGIN_FAIL,
                payload : err.response.data.msg
            });
        }
    }

    const logout = () => {
        dispatch({
            type : LOGOUT
        });
    }

    const loginUser = async userData => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {

            const res = await axios.post('/login', userData, config);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data
            });
        }
    };

    return (
        <AuthContext.Provider value={{
            user: state.user,
            userAuth: state.userAuth,
            error: state.error,
            loginUser,
            keepUserLoggedIn,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthState;