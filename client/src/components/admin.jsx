import React, { Component } from 'react';
import { render } from 'react-dom';
import * as classService from '../services/classes';
import BlogInput from './blogInput';
import BlogList from './blogList';

class BlogAdmin extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        classService.all()
        .then(console.log);
    }

    render() {
        return (
            <div>
                <BlogInput />
                <BlogList />
                </div>
        );
    }
}

export default BlogAdmin;