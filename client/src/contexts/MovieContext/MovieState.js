import React,{useReducer} from 'react';
import axios from 'axios'
import MovieReducer from './MovieReducer';
import MovieContext from './MovieContext';
import {GET_MOVIES_FAIL,GET_MOVIES_SUCCESS,NEXT_PAGE,PREVIOUS_PAGE,SET_SEARCH_VALUE} from '../types';
import setToken from '../../utils/setToken';
import ContextDevTool from 'react-context-devtool';

const MovieState = (props) => {

    const initialState = {
        movies : [],
        selectedMovie : null,
        currentPage : 1,
        numberOfPages : 0,
        searchInput : ''
    };

    const [state, dispatch] = useReducer(MovieReducer, initialState);

    const getMovies = async (movieName,page) => {

        console.log('Movie ',movieName,page);

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        setToken(''); 

        try{
            let res;
            if(state.searchInput === '') {
                res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4e35294ab5cc3ca4056266da95a743db&language=en-US&page=${page}`,config);
            }
            else {
                res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4e35294ab5cc3ca4056266da95a743db&language=en-US&query=${movieName}&page=${page}&include_adult=false`,config);
            }
            
            dispatch({
                type : GET_MOVIES_SUCCESS,
                payload : res.data
            });
        } catch(err){
            dispatch({
                type : GET_MOVIES_FAIL,
            });
        }
    }

    const handleNextPage = () => {
        if(state.currentPage<state.numberOfPages) {
            dispatch({
                type : NEXT_PAGE
            });
        }
    }

    const handlePreviousPage = () => {
        if(state.currentPage>1) {
            dispatch({
                type : PREVIOUS_PAGE
            });
        }
    }

    const handleSearchInput = input => {
        dispatch({
            type : SET_SEARCH_VALUE,
            payload : input
        });
    }

    return ( 
        <MovieContext.Provider
            value={{
                movies : state.movies,
                selectedMovie : state.selectedMovie,
                getMovies,
                handleNextPage,
                handlePreviousPage,
                currentPage : state.currentPage,
                handleSearchInput,
                searchInput : state.searchInput,
            }}
        >
            <ContextDevTool context={MovieContext} id="uniqContextId" displayName="Context Display Name" />
            {props.children}
        </MovieContext.Provider>
     );
}
 
export default MovieState;