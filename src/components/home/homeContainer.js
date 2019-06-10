import React, {Component} from 'react';
import Header, {headers} from '../header';
import Footer from '../footer';
import pages from '../../objects/pages';
import plantActivity from '../../objects/plantActivity';
import RecordPlantActivity from '../singlePages/plantActivity';
import AddPlant from '../singlePages/addPlant';
import * as routes from '../../routing/appRoutes';

const INITIAL_STATE = {
    active: 'plants',
    activityOpen: false,
    addPlantOpen: false,
    selectedActivity: {}
}

export default class HomeContainer extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE};
        this.handleSinglePageClose = this.handleSinglePageClose.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleFooterSubMenuClick = this.handleFooterSubMenuClick.bind(this);
        this.handleOpenAddPlant = this.handleOpenAddPlant.bind(this);
    }

    handleSinglePageClose(){

        let { activityOpen, addPlantOpen } = this.state;

        if(activityOpen){
            this.setState({activityOpen: false});
        }

        if(addPlantOpen){
            this.setState({addPlantOpen: false});
        }
    }

    handlePageChange(active){
        this.setState({active: active})
    }

    handleFooterSubMenuClick(item){
        this.setState({
            activityOpen:!this.state.activityOpen,
            selectedActivity: item
        });       
    }

    handleOpenAddPlant(){
        this.setState({addPlantOpen:!this.state.addPlantOpen});       
    }

    render(){
        return(
            <div className="container">
                <Header header={headers.PRIMARY} />
                <div className="content">
                    {routes.homeRoutes(this.handleOpenAddPlant)}
                </div>
                <AddPlant 
                    open={this.state.addPlantOpen}
                    onClose={this.handleSinglePageClose}
                />
                <RecordPlantActivity 
                    open={this.state.activityOpen}
                    onClose={this.handleSinglePageClose}
                    selectedActivity={this.state.selectedActivity}
                />
                <Footer
                    pages={pages}
                    active={this.state.active}
                    onChange={this.handlePageChange}
                    plantActivity={plantActivity}
                    onSubMenuClick={this.handleFooterSubMenuClick}
                />
            </div>
        );
    }
}