import React from 'react';
import MovieCard from './MovieCard';

const Movies = (props) => {
    return (
        <div className="fixed-top" style={{ marginTop: '150px' }}>
            <div className="container">
                <MovieCard />
            </div>
        </div>
    );
}

export default Movies;