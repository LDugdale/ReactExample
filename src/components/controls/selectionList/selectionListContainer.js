import React, { Component } from 'react';
import Selection from '../selection';
import * as selectionType from '../../../constants/selectionType';

export default class SelectionListContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedItems: [],
            selectedItem: -1
        }

        this.handleSelectionChange = this.handleSelectionChange.bind(this);
    }

    handleSelectionChange(id, label, item){

        const { selectedItem } = this.state;
        const { type } = this.props;

        let newSelectedItem = {
            id: id,
            item: item
        };

        if(type === selectionType.CHECKBOX){

            let newSelectedItems = this.updateSelectedItems(newSelectedItem)
            this.setState({selectedItems: newSelectedItems});
            this.props.selectionCallback(newSelectedItems, item);

        } else if (type === selectionType.RADIO){

            if (selectedItem !== id){
                this.setState({selectedItem: id})
                this.props.selectionCallback(id, item);
            }
        }        
    }

    updateSelectedItems(selectedItem){

        let selectedItems = this.state.selectedItems;
        let newSelectedItems;

        if (selectedItems.some(item => item.id === selectedItem.id)){

            newSelectedItems = selectedItems.filter((item) => 
                item.id !== selectedItem.id            
            );  
        } else {
          
            selectedItems.push(selectedItem);
            newSelectedItems = selectedItems;
        }

        return newSelectedItems;
    }

    createItemList(){
        
        return this.props.items.map((item,index)=>{
    
            const label = this.props.createLabel(item)  
            const id = this.props.getID(item);
          
            let isChecked;    

            if(this.props.type === selectionType.CHECKBOX){

                isChecked = this.state.selectedItems.some(item => item.id === id);

            } else if (this.props.type === selectionType.RADIO){
                
                isChecked = (this.state.selectedItem === id.toString());
    
            }      

            return (
                <Selection
                  label={label}
                  type={this.props.type}
                  id={id}
                  item={item}
                  isChecked={isChecked}
                  onSelectionChange={this.handleSelectionChange}
                />
            );
        });
    }    

    render(){
        return(
            <form>
                {this.createItemList()}
            </form>
        );
    }
}