import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import RefreshIndicator from './refreshIndicator';
import { tableViewTouchService }  from './TableViewTouchService';
import '../../../assets/styles/tableView.css';

export default class TableViewContainer extends Component {

    constructor(props) {
        super(props)
        this.viewDidScroll = this.viewDidScroll.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this); 
        this.handleTouchMove = this.handleTouchMove.bind(this); 
        this.handleTouchEnd = this.handleTouchEnd.bind(this);

        this.state = {
            isRefreshing : false,
            isAnimating: false,
            isAtTop : true
        }
    }

    componentDidMount(){
        let spinnerRef = this.getReference('spinner');
        let backgroundRef = this.getReference('table-spinner-background');
        let wrapperRef = this.getReference('spinner-wrapper');
        tableViewTouchService.moveIconToLoadDistance(spinnerRef, backgroundRef, wrapperRef)            
        this.setState({isRefreshing: true});
        
        this.props.onRefresh((() => {
            tableViewTouchService.finishedLoading(spinnerRef, backgroundRef, wrapperRef)
            this.setState({isRefreshing: false});
        }).bind(this));        
    }

    viewDidScroll(event) {
        let dom = ReactDOM.findDOMNode(this)
        let scrollviewOffsetY = dom.scrollTop
        let scrollviewFrameHeight = dom.clientHeight
        let sum = scrollviewOffsetY+scrollviewFrameHeight
        if (sum <= scrollviewFrameHeight) {
            this.setState({isAtTop: true})
        } else if (this.state.isAtTop) {
            this.setState({isAtTop: false})
        }

    }

    handleTouchStart(event) {
        if(!this.state.isAtTop){
            return;
        }
        tableViewTouchService.touchStart(event);        
    }

    handleTouchMove(event) {
        if(!this.state.isAtTop ){
            return;
        }
        let yDistance = tableViewTouchService.touchMove(event);
        if(!this.state.isAnimating && yDistance >= -40){
            this.setState({isAnimating: true});
        }
        this.setReferencesOnTouchMove(yDistance);
    }

    handleTouchEnd() {
        if(!this.state.isAtTop && !this.state.isAnimating){
            return;
        }
        this.setState({isAnimating: false});
        let spinnerRef = this.getReference('spinner');
        let backgroundRef = this.getReference('table-spinner-background');
        let wrapperRef = this.getReference('spinner-wrapper');

        if(tableViewTouchService.touchEnd(spinnerRef, backgroundRef, wrapperRef) && !this.state.isRefreshing){            
            this.setState({isRefreshing: true});
            
            this.props.onRefresh((() => {
                tableViewTouchService.finishedLoading(spinnerRef, backgroundRef, wrapperRef)
                this.setState({isRefreshing: false});
            }).bind(this))
        }
    }

    setReferencesOnTouchMove(yDistance){
        let spinnerRef = this.getReference('spinner');
        let backgroundRef = this.getReference('table-spinner-background');
        let wrapperRef = this.getReference('spinner-wrapper');
        if(this.state.isAnimating){
            wrapperRef.style.display = 'block';
        }
        spinnerRef.style.top = `${yDistance}px`;
        backgroundRef.style.opacity = `${(yDistance / 100)}`;
    }

    getReference(className){
        let ref;
        if (className == 'spinner') {
            ref = this.refs.refreshIndicator.refs.spin;
        } else if (className == 'table-spinner-background'){
            ref = this.refs.refreshIndicator.refs.spinBackground
        } else if (className == 'spinner-wrapper'){
            ref = this.refs.refreshIndicator.refs.spinWrapper
        }
        return ref;
    }

    render() {

        return (
            <div 
                className='table-view' 
                onScroll={this.viewDidScroll}
                onTouchMove={this.handleTouchMove}
                onTouchStart={this.handleTouchStart}
                onTouchEnd={this.handleTouchEnd}
            >
                <RefreshIndicator
                    ref='refreshIndicator'
                />
                {this.props.children}
            </div>
        )
    }
}