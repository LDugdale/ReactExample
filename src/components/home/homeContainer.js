import React, {Component} from 'react';
import Header, {headers} from '../header';
import Footer from '../footer';
import pages from '../../objects/pages';
import * as routes from '../../routing/appRoutes';

const INITIAL_STATE = {
    active: 'plants'
}

export default class HomeContainer extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE};
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(active){
        this.setState({active: active})
    }

    render(){
        return(
            <div className="container">
                <Header header={headers.PRIMARY} />
                <div className="content">
                    {routes.homeRoutes()}
                </div>
                <Footer
                    pages={pages}
                    active={this.state.active}
                    onChange={this.handlePageChange}
                />
            </div>
        );
    }
}