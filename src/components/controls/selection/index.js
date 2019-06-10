import React from 'react';
import PropTypes from 'prop-types';
import SelectionContainer from './selectionContainer';
import * as selectionType from '../../../constants/selectionType'
import '../../../assets/styles/checkbox.css';

const Selection = (props) =>
    <SelectionContainer 
        label={props.label}
        id={props.id}
        type={props.type}
        item={props.item}
        isChecked={props.isChecked}
        onSelectionChange={props.onSelectionChange}
    />

Selection.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf([selectionType.CHECKBOX, selectionType.RADIO]),
    isChecked: PropTypes.bool.isRequired,
    onSelectionChange: PropTypes.func.isRequired,
};

export default Selection;