import React, {Component} from 'react';
import Header, { headers } from '../header';
import * as routes from '../../routing/appRoutes';

export default class SingleContainer extends Component {

    render(){
        return(
            <div className="container">
                <Header header={headers.SECONDARY} />
                <div className="content">
                    {routes.singleRoutes()}
                </div>
            </div>
        );
    }
}