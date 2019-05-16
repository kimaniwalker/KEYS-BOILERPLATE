import React, { Component } from "react";

import { NotificationManager } from "react-notifications";

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      profile_picture_link: ""
    };
  }

handleEmail(value) {
    this.setState({ email: value });
  }

  handlePassword(value) {
    this.setState({ password: value });
  }  
handleFirstName(value) {
    this.setState({ first_name: value });
  }

  
  handleLastName(value) {
    this.setState({ last_name: value });
  }

  handleProfilePictureLink(value) {
    this.setState({ profile_picture_link: value });
  }

handleSubmit(event) {
    event.preventDefault();
    let object = {
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      profile_picture_link: this.state.profile_picture_link, 
      email: this.state.email
    };

    try {
      fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(object),
        headers: new Headers({ "Content-Type": "application/json" })
      });
      NotificationManager.success("User Created!  Now login");
      setTimeout(() => {
        this.props.history.push('/login');
      }, 1000);
    } catch (err) {
      NotificationManager.error("User Not Created");
      console.log(err);
    }
  }


  


  

  

  

  

  render() {
    return (
      <div className="container">
        <form>
          <h1>Start an account</h1>

          <div className="form-group">
            <label htmlFor="name">Password:</label>
            <input
              value={this.state.password}
              onChange={(event) => this.handlePassword(event.target.value)}
              className="form-control"
              name="password"
              type="password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Email:</label>
            <input
              value={this.state.email}
              onChange={event => this.handleEmail(event.target.value)}
              className="form-control"
              name="email"
              type="email"
            />
          </div>

          

          <div className="form-group">
            <label htmlFor="first_name">First name:</label>
            <input
              value={this.state.first_name}
              onChange={event => this.handleFirstName(event.target.value)}
              className="form-control"
              name="first_name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last name:</label>
            <input
              value={this.state.last_name}
              onChange={event => this.handleLastName(event.target.value)}
              className="form-control"
              name="last_name"
            />
          </div>

          

    

          

          <button className="btn btn-primary mt-2" onClick={event => this.handleSubmit(event)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterScreen;
