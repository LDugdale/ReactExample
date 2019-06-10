import React from 'react';
import Input from '../../../controls/input';


const AddAmmount = (props) => {

    return(
        <div className='select-box-wrapper'>
            <Input 
                onChange={props.handleInput}
                valueKey="Ammount"
                type="number"
                placeholder='Ammount'
                value={props.searchText}
            />
            <span>ml</span>
        </div>
    );
}

export default AddAmmount;