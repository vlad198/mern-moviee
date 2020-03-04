import React, { useContext, useEffect } from 'react';
import Description from './layouts/Description';
import LoginForm from './Forms/LoginForm';
import './style.css';
import AuthContext from '../../contexts/AuthContext/AuthContext';

const Login = (props) => {

    const { userAuth } = useContext(AuthContext);

    useEffect(() => {
        if (userAuth !== null) {
            props.history.push('/');
        }
    }, [userAuth, props.history]);

    return (
        <div className="page-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-12 descr">
                        <Description />
                    </div>
                    <div className="col-lg-4 col-sm-12 form-wrap">
                        <LoginForm />
                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default Login;