import React, { Fragment, useContext, useState,useEffect } from 'react';
import MovieCard from './MovieCard';
import MovieContext from '../../contexts/MovieContext/MovieContext';
import ReactLoading from 'react-loading';

const MoviesList = (props) => {

    const {getMovies,movies,currentPage,searchInput} = useContext(MovieContext);
    
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        getMovies(searchInput,currentPage).then(() => setLoading(false));
    }, [searchInput,currentPage]);

    return ( 
        loading === false ? 
        (<Fragment>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </Fragment>) : (<div className="loading-screen"><ReactLoading type="bars" color="#fff" height={'5%'} width={'10%'} /></div>)
     );
}
 
export default MoviesList;