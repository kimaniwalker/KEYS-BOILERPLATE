import React from 'react';
import { CardElement } from 'react-stripe-elements';

class CardSection extends React.Component {
    render() {
        return (
            <div id="StripeElement">
              <CardElement className="m-3"/>  
            </div>
            
            
            
        );
    }
};

export default CardSection;