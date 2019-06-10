import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as selectionType from '../../../constants/selectionType';
import '../../../assets/styles/checkbox.css';


class SelectionContainer extends Component {

  constructor(props){

    super(props);
    this.state = { isChecked: props.isChecked };
  }

  toggleSelectionChange = (event) => {
        
    const { onSelectionChange, label, type } = this.props;

    const selectedId = event.target.value

    if(type === selectionType.CHECKBOX) {
      this.setState(({ isChecked }) => (
        {
          isChecked: !isChecked,
        }
      ));
    }

    onSelectionChange(selectedId, label, this.props.item);
  }

  render() {
    const { label, type, id } = this.props;

    const isChecked = type === selectionType.CHECKBOX ? this.state.isChecked : this.props.isChecked
    
    const checked = isChecked ? 'checkbox checked' : 'checkbox'

    return (
      <div className={checked}>
        <label>
          <input          
            type={type}
            value={id}
            name='group'
            checked={isChecked}
            onChange={this.toggleSelectionChange}
          />
          {label}
        </label>
      </div>
    );
  }
}

SelectionContainer.propTypes = {
  label: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf([selectionType.CHECKBOX],[selectionType.RADIO]),
  isChecked: PropTypes.bool.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};

export default SelectionContainer;