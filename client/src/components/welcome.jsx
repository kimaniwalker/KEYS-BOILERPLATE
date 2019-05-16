import React, { Component, Fragment} from 'react';



class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    
    
    render() {
        return (
          <Fragment>

            <h1>
                Hello Woyrld!;
                
            </h1>

            <form action="api/profile/uploadfile" enctype="multipart/form-data" method="POST"> 
   <input type="file" name="myFile" />
   <input type="submit" value="Upload a file"/>
</form>

            

 
 

 

 
 
 

          </Fragment>
          
        )
    
            

            
        
    }
}

export default Welcome;