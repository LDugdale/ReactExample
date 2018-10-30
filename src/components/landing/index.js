import React, {Component} from 'react';
import * as routes from '../../constants/routes';
// import { plants } from '../../constants/plantList'

// import { dbCreate } from '../../data/amplify/'

export default class LandingPage extends Component {
  
  componentDidMount() {

    // plants.forEach((pslant, index) => {
    //   dbCreate.createPlant(plant)
    // });

    setTimeout(() => this.props.history.push(routes.HOME), 3000);
  }

  render(){
    return(
      <div>
        <h1>Landing</h1>
        <p>The Landing Page is open to everyone, even though the user isn't signed in.</p>
      </div>
    );
  }
}