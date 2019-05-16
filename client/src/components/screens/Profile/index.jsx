import React, { Component, Fragment } from "react";
import { me } from "../../../services/user";
import * as usersService from "../../../services/users";

class UserDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
            
        }

        this.load = async () => {
        try {
          let userRaw = await me();
          let userId = userRaw.id;
          let user = await usersService.one(userId);
          if (!user.profile_picture_link)
            user.profile_picture_link = `/images/default_user_img.png`;
          this.setState({ user });
          console.log(user);
        } catch (e) {
          console.log(e);
        }
      };
    

    }

    

    

     componentDidMount() {
        
        this.load();
       
    }

    handleStripeConnect() {

        console.log('clicked');
        
    }

    render() {
console.log('here');
        return (
            <React.Fragment>

             <div>
            Testing purposes



            <button className="btn" onClick={(event) => this.handleStripeConnect(this.state)}>STRIPE</button>
            </div>

<div className="card text-center">
<div className="card-header">
  PROFILE
</div>
<div className="card-body">
  <h5 className="card-title">Testing</h5>
  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
<div className="card-footer text-muted">
  2 days ago
</div>
</div>   
            </React.Fragment>
        


            

        );
    }
}

    
   

export default UserDetailScreen;
