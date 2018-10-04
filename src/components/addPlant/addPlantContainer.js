import React, { Component } from 'react';
import Header from '../header';
import { headers } from '../../constants/headers';
import Navigation from './navigation';
import '../../styles/addPlant.css';
import ChooseNickname from './chooseNickname';
import ChoosePlantType from './choosePlantType';

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
  });

const INITIAL_STATE = {
    currentPage: 0,
    pages: [],
    nickname: ''
}

export default class AddPlantcontainer extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
        this.handleChange = this.handleChange.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    componentDidMount(){
        this.setState({ pages: [
                            <ChooseNickname
                                onChange={this.handleChange}
                            />,
                            <ChoosePlantType />
                        ]});  
    }

    handleChange(key, value){
        this.setState(updateByPropertyName(key,value))

    }

    handleNavClick(event, iconClassName){
        let pageNumber = this.state.currentPage;
        if(iconClassName === 'nav-icon next'){
            pageNumber++
            this.setState({currentPage: pageNumber});
        } else if(iconClassName === 'nav-icon previous' && pageNumber > 0){
            pageNumber--
            this.setState({currentPage: pageNumber});
        }
    }

    pageContent(){
        return this.state.pages[this.state.currentPage];
    }

    render(){
        return(
            <div className='container'>
                <Header header={headers.SECONDARY}/>
                <div className='content'>
                    {this.pageContent()}
                    <Navigation 
                        currentPage={this.state.currentPage}
                        onClick={this.handleNavClick}
                    />
                </div>
            </div>
        );
    }
}