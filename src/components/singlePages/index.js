import React from 'react';
import withAuthorization from '../../session/withAuthorization';
import SingleContainer from './singleContainer';

const SinglePage = () =>
    <SingleContainer />

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(SinglePage);