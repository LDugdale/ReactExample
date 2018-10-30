import React from 'react';
import HomeContainer from './homeContainer';
import withAuthorization from '../../session/withAuthorization';

const HomePage = (props) =>
    <HomeContainer />


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);