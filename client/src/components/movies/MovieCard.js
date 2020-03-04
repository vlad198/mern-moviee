import React, { useState, useEffect } from 'react';
import '../pages/style.css';

const MovieCard = ({ movie }) => {

    return (
        <div className="col-sm-12 col-lg-4">
        <div className="card text-white bg-dark border-light moviecard">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://lh3.googleusercontent.com/proxy/X3CT0L5HKHTXtlwG_5iVwfI-xg3q2dunahqFooIQQU_9--F6ThbwxdNUKC6MdZBtO73en2k4MXxgKX01eN0M8IpRq7C7WfF0AnujHgg3JQ'} className="card-img-top" />
            <div className="card-body">
                <h6 className="card-title text-center">{movie.title}</h6>
            </div>
        </div>
    </div>
    );
}

export default MovieCard;