import React, {Component} from 'react';
import * as routes from '../../constants/routes';

export default class LandingPage extends Component {
  
  componentDidMount() {
    setTimeout(() => this.props.history.push(routes.PLANTS), 3000);
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