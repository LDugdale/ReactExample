import React, {Component} from 'react';
import Input from '../../controls/input';
import * as selectionType from '../../../constants/selectionType';
import SelectionList from '../../controls/selectionList';

export default class SelectionListSearchContainer extends Component {
        
    constructor(props){
        super(props);
        this.state={
            allItems: [],
            queriedItems: [],
            searchText: ''
        };

        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    async componentDidMount(){
        
        const allItems = await this.props.getItems();

        this.setState({
            allItems: allItems,
            queriedItems: allItems

        });
    } 

    async handleSearchInput(value, key){

        let queriedItems

        if(this.props.onSearchInput){
            queriedItems = await this.props.onSearchInput(value);
        } else {
            if(value !== '' ){
                queriedItems = this.state.allItems.filter( plant => plant.nickname.toLowerCase().includes(value.toLowerCase()) 
                                                                    || plant.name.toLowerCase().includes(value.toLowerCase()));
            } else {
                queriedItems = this.state.allItems;
            }
        }

        this.setState({
            queriedItems: queriedItems,
            searchText: value
        })
    }

    handleSelectionChange(newSelectedItems, item){

        let isSelected = false
        if(this.props.type === selectionType.CHECKBOX){

            if(newSelectedItems.length > 0){
                isSelected = true;
            } else if (newSelectedItems.length === 0 && isSelected){
                isSelected = false;
            }

            this.props.handleSelectedItems(newSelectedItems, isSelected, item);

        } else if (this.props.type === selectionType.RADIO){

            if(item){
                isSelected = true;
            } else {
                isSelected = false;
            }

            this.props.handleSelectedItems(newSelectedItems, isSelected, item);

        }
    }

    render(){
        return(
            <div className='select-box-wrapper'>
                <Input 
                    onChange={this.handleSearchInput}
                    valueKey="search"
                    type="text"
                    placeholder='Search'
                    value={this.state.searchText}
                />
                <div className='results'>
                    <SelectionList
                        items={this.state.queriedItems}
                        type={this.props.type}
                        selectionCallback={this.handleSelectionChange}
                        createLabel={this.props.createLabel}           
                        getID={this.props.getID}
                    />
                </div>
            </div>
        );
    }
}