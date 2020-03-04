import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component : Component , ...rest}) => {

    const {userAuth} =useContext(AuthContext);

    return ( 
        <Route {...rest} render={props => !userAuth ? (<Redirect to="/login" />) : (<Component {...props} />)} />
     );
}
 
export default PrivateRoute;