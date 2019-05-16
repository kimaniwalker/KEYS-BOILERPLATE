import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import UserDetailScreen from './screens/Profile';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import LoginScreen from './screens/Login/index';
import Google from "./screens/Login/google";
import {NotificationContainer} from 'react-notifications';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import BlogList from './blogList';
import BlogInput from './blogInput';
import BlogAdmin from './admin';
import SingleBlogPost from './singleBlog';
import Contact from './contact';
import Donate from './donate';

import RegisterScreen from './register';
import Welcome from './welcome';



class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/home" component={Welcome} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/login2" component={LoginScreen} />
                        <Route exact path="/donate" component={Donate} />
                        <Route path="/login/google/:token" component={Google} />  
                        <Route path="/register" component={RegisterScreen} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                       
                        <PrivateRoute path="/profile" component={HelloWorld} />
                        <PrivateRoute path="/admin" component={BlogAdmin} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;