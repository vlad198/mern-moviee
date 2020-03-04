import React, { Fragment,useState,useContext} from 'react';
import AuthContext from '../../../contexts/AuthContext/AuthContext';

const LoginForm = (props) => {

    const [user,setUser] = useState({
        email : '',
        password : ''
    });

    const {loginUser} = useContext(AuthContext);

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        loginUser(user);
    }

    return (
        <Fragment>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onChange={handleChange} value={user.email} name="email" type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} value={user.password} name="password" type="password" className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Fragment>
    );
}

export default LoginForm;