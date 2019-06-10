import React from 'react';
import Icon, { icons } from '../../../../assets/icons';

const AddPlantPost = (props) => {

    return(
        <>
            <textarea
                onChange={event => props.onTextAreaChange(event.target.value)}
            />
            <div className='post-icons'>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={event => props.onMediaChange(event.target.files)}
                >
                    {/* <Icon icon={icons.CAMERA}
                        iconClassName='test'
                        onClick={props.onClick}
                    /> */}
                </input>
            </div>
        </>
    );
}

export default AddPlantPost;