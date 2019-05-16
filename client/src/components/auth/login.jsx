import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: '',
            password: '',
            feedbackMessage: '',
            checkingLogin: true
        };
    }

    componentDidMount() {
        userService.checkLogin()
            .then((loggedIn) => {
                if (loggedIn) {
                    this.setState({ redirectToReferrer: true, checkingLogin: false });
                } else {
                    this.setState({ checkingLogin: false });
                }
            });
    }

    login(e) {
        e.preventDefault();
        userService.login(this.state.email, this.state.password)
            .then(() => {
                this.setState({ redirectToReferrer: true });
            }).catch((err) => {
                if (err.message) {
                    this.setState({ feedbackMessage: err.message });
                }
            });
    }

    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer, checkingLogin } = this.state;

        if (checkingLogin) {
            return <IndeterminateProgress message="Checking Login Status..." />;
        }
        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <Fragment>
               
                {/* <form onSubmit={(e) => this.login(e)}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" className="form-control" type="email" onChange={(e) => this.handleEmailChange(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" className="form-control" type="password" onChange={(e) => this.handlePasswordChange(e.target.value)} required />
                    </div>
                    {this.state.feedbackMessage ? (
                        <p>{this.state.feedbackMessage}</p>
                    ) : null}
                    <input type="submit" value="Login" className="btn btn-primary" />
                </form> */}


 
                <div id="login2" class="container-fluid">
                    <div class="row">
                    
                        <div class="Absolute-Center is-Responsive">
                            <div id="logo-container"></div>
                            <div class="col-sm-12 col-md-10 col-md-offset-1">
                                <form onSubmit={(e) => this.login(e)} id="loginForm2">
                                
                                    <div class="form-group input-group">
                                        <span class="input-group-addon"><i class=""></i></span>
                                        <input onChange={(e) => this.handleEmailChange(e.target.value)} required 
                                         id="titleInput" class="form-control text-center rounded" type="text" name='username' placeholder="USERNAME" />
                                    </div>
                                    <div class="form-group input-group">
                                        <span class="input-group-addon"><i class=""></i></span>
                                        <input onChange={(e) => this.handlePasswordChange(e.target.value)} required
                                        id="titleInput" class="form-control text-center rounded" type="password" name='password' placeholder="PASSWORD" />
                                    </div>

                                    <div class="form-group">
                                        <button 
                                        onClick={(e) => this.login(e)}
                                        type="button" class="btn btn-info btn-def btn-block">Login</button>
                                    </div>
                                    <div class="form-group">
                                        <a href="/register" className="btn btn-success btn-def btn-block ">Register</a>
                                    </div>
                                    <div class="form-group">
                                        <a href="/api/auth/google" className="btn btn-primary btn-def btn-block">Google Sign In</a>
                                    </div>
                                    <div class="form-group text-center">

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Login;