import React from 'react';
import TableViewContainer from './tableViewContainer';

const TableView = (props) => {
    return (
        <TableViewContainer
            onRefresh={props.onRefresh}
        >
            {props.children}
        </TableViewContainer>
    );
}

export default TableView;