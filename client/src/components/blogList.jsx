import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import BlogInput from './blogInput';


class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []


        }

    }

    async componentDidMount() {
        try {
            let response = await fetch('/api/blogList');
            let data = await response.json();
            console.log(data);
            this.setState({ blogs: data });

        } catch (e) {
            console.log(e);
        }


    }


    render() {


        let blogdiv = this.state.blogs.map((blog) => {
            return (

                <div className="div">
                    <div className="row justify-content-center">
                        <div id="passwordInput" className="card col-sm-7 rounded  mb-4 ml-3 pb-5 pt-5 align-items-center" key={blog.id}>
                            <RandomImage />
                            <div className="card-body text-center">
                                <h3>{blog.title}</h3>
                                <h5>{blog.content}</h5>
                                <h6>{blog._created}</h6>
                            </div>


                        </div>
                    </div>



                </div>


            );
        });
        return (
            <Fragment>

                {/* 
                Brings back all items
                <div>
                    <h3>TESTIMONIALS</h3>
                    {blogdiv}
                </div> */}


                <div id="WeatherContainer" className="container-fluid mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-6">

                            <div id="carouselExampleIndicators" className="carousel slide pb-5 pt-5" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active bg-dark"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="bg-dark"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="bg-dark"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3" className="bg-dark"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="4" className="bg-dark"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="5" className="bg-dark"></li>
                                </ol>
                                <div className="carousel-inner text-center">
                                    <div className="carousel-item active text-center">
                                        {blogdiv[0]}
                                    </div>
                                    <div className="carousel-item">
                                        {blogdiv[1]}
                                    </div>
                                    <div className="carousel-item">
                                        {blogdiv[2]}
                                    </div>
                                    <div className="carousel-item">
                                        {blogdiv[3]}
                                    </div>
                                    <div className="carousel-item">
                                        {blogdiv[4]}
                                    </div>
                                    <div className="carousel-item">
                                        {blogdiv[5]}
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>


                        </div>
                        <div className="col-md-6">
                            <div className="row justify-content-center text-dark mt-5">
                                <h2>TESTIMONIALS</h2>
                            </div>
                            <div className="row justify-content-center mt-2 mb-4">
                                <i className="far fa-star text-warning p-2"></i>
                                <i className="far fa-star text-warning p-2"></i>
                                <i className="far fa-star text-warning p-2"></i>
                                <i className="far fa-star text-warning p-2"></i>
                                <i className="far fa-star text-warning p-2"></i>


                            </div>

                            <div className="row justify-content-center text-dark">
                                <h5>See what our amazing customers say about us</h5>
                            </div>

                            <div className="row justify-content-center">
                                <button type="button" className="btn btn-info p-2 mt-4" data-toggle="modal" data-target="#TestimonialModal">Create New Tesimonial</button>

                            </div>
                        </div>

                    </div>

                </div>


                {/* <!-- Modal --> */}
                <div className="modal fade" id="TestimonialModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Testimony</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <BlogInput />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>




            </Fragment>








        )
    }

}


export default BlogList;