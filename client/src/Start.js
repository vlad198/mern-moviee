import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './contexts/AuthContext/AuthState';
import PrivateRoute from './utils/PrivateRoute';
import AuthContext from './contexts/AuthContext/AuthContext';
import ReactLoading from 'react-loading';
import MovieDetails from './components/movies/MovieDetails';

function Start() {

    const { keepUserLoggedIn, userAuth } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        keepUserLoggedIn().then(() => setLoading(false));
    }, []);

    return (
        loading === false ?
            (
                <Router>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </Router>
            ) : (<div className="loading-screen"><ReactLoading type="bars" color="#fff" height={'5%'} width={'10%'} /></div>)
    );
}

export default Start;
