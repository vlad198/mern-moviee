import React from 'react';

const MovieDetails = () => {

    return (
        <div className="container" style={{ marginTop: "10vh" }}>
            <div className="row">
                <div className="col-sm-6">
                    <img className="img-fluid mx-auto" src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" />
                </div>
                <div className="col-sm-6">
                    <div className="container">
                        <div className="row" style={{ marginTop: "5vh" }}>
                            <div className="col-8 col-sm-8">
                                <h3 className="text-center">Title das asd a das da asd asd </h3>
                            </div>
                            <div className="col-4 col-sm-4 float-right" style={{ marginTop: "1vh" }}>
                                <span>9{" "}<i style={{ color: "yellow" }} class="fas fa-star"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;