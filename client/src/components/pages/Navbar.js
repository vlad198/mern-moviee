import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext/AuthContext';
import MovieContext from '../../contexts/MovieContext/MovieContext';

const Navbar = ({ user }) => {

    const { logout } = useContext(AuthContext);

    const {handleSearchInput,searchInput,searchMovie,currentPage,getMovies} = useContext(MovieContext);

    const handleClick = () => logout();

    const handleInput = e => {
        handleSearchInput(e.target.value);
    }

    return (
        <nav className="container navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
            <a className="navbar-brand" href="#">Moviee</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav mx-auto">
                    <li className="nav-item active">
                        <a className="nav-link">Welcome {user.name} <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <form className="form-inline my-2 my-lg-0">
                            <input value={searchInput} onChange={handleInput} className="form-control mr-sm-2" type="search" placeholder="Search a movie" aria-label="Search" />
                        </form>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-outline-danger" onClick={handleClick}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;