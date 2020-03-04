import React, { useContext, Fragment, useState, useLayoutEffect, useEffect } from 'react';
import AuthContext from '../../contexts/AuthContext/AuthContext';
import Navbar from './Navbar';
import Movies from '../movies/Movies';
import MovieCard from '../movies/MovieCard';
import MoviesList from '../movies/MoviesList';
import MovieContext from '../../contexts/MovieContext/MovieContext';

const Home = () => {

    const { user } = useContext(AuthContext);

    const { handleNextPage, handlePreviousPage } = useContext(MovieContext);

    const [loading, setLoading] = useState(true);

    return (
        <div>
            <Navbar user={user} />
            <div className="container style-container-movies">
                <button onClick={handlePreviousPage} className="btn btn-outline-light" style={{ width: "150px" }}>Previous Page</button>
                <button onClick={handleNextPage} className="btn btn-outline-light float-right" style={{ width: "150px" }}>Next Page</button>
                <div className="row">
                    <MoviesList />
                </div>
                <div style={{ paddingTop: "30px" }}>
                    <button onClick={handlePreviousPage} className="btn btn-outline-light" style={{ width: "150px" }}>Previous Page</button>
                    <button onClick={handleNextPage} className="btn btn-outline-light float-right" style={{ width: "150px" }}>Next Page</button>
                </div>
                <div style={{ paddingTop: "50px" }} />
            </div>
        </div>
    );
}

export default Home;