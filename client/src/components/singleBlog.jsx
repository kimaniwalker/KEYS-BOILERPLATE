import React, { Component } from 'react';
import { render } from 'react-dom';
import * as classService from '../services/classes';

class SingleBlogPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: []
        }
    }

   async componentDidMount() {
        try {
            let res = await fetch('/api/blogList/' + this.props.match.params.id);
            let data = await res.json();
            console.log(data);
            this.setState({
                blog: data
            })
        } catch (e) {
            console.log(e);
        }
    }
    async onBtnClick() {
        console.log('Hello');
        try {
            let id = this.props.match.params.id
            let results = await classService.destroy(id)
            console.log(results);
        } catch (err) {
            console.log('This is the' + err);
        }

    }
    
    render() {

        console.log(this.state.blog);
        return (
            <div>
                {this.state.blog.title}
                {this.state.blog.content}
                <button onClick={(event) => this.onBtnClick()}>Delete</button>
                </div>
        );
    }
}

export default SingleBlogPost;