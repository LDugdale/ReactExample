import React, { Component } from 'react';
import Tabs from './tabs';
import Tab from './tab';
import Menu from './menu';
import '../../assets/styles/footer.css';

const transitionTime = 200;
const transitionStyle = `left ${transitionTime}ms, right ${transitionTime}ms`;

export default class FooterContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sizes: {},
      showMenu: false
    };
    this.els = {};
    this.setElement = this.setElement.bind(this);
    this.getUnderlineStyle = this.getUnderlineStyle.bind(this);
    this.createTabs = this.createTabs.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu =this.toggleMenu.bind(this);
  }

  componentDidMount() {
    this.getSizes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children && prevProps.active !== this.props.active) {
      this.getSizes();
    }
  }

  getSizes() {
    const rootBounds = this.root.getBoundingClientRect();

    const sizes = {};

    Object.keys(this.els).forEach((key) => {
      const el = this.els[key];
      const bounds = el.getBoundingClientRect();

      const left = bounds.left - rootBounds.left;
      const right = rootBounds.right - bounds.right;

      sizes[key] = {left, right};
    });

    this.setState({sizes});
    return sizes;
  }

  getUnderlineStyle() {
    if (this.props.active == null || Object.keys(this.state.sizes).length === 0) {
      return {left: '0', right: '100%'};
    }

    const size = this.state.sizes[this.props.active];

    return {
      left: `${size.left}px`,
      right: `${size.right}px`,
      transition: transitionStyle,
    }
  }

  setElement(key,el){
    this.els[key] = el
  }

  handleClick(pageKey){
    if(this.props.active === 'plants' && pageKey === 'plants'){
      this.toggleMenu();
    }

    this.props.onChange(pageKey);
  }

  toggleMenu(){
    if(this.state.showMenu){
      this.setState({showMenu: false});
    } else {
      this.setState({showMenu: true});
    }
  }

  createTabs(){
    return this.props.pages.map((page, i) =>{
      let className = `tab`;
      if (page.pageKey === this.props.active) {
        className = `${className} tab-active`;
      }
      return (
        <Tab
          page={page}
          pageClass={className}
          onClick={this.handleClick}
          setElement={this.setElement}
        />
      );
    }, this);    
  }

  render() {
    return (
        <div 
            className="footer"
            ref={el => this.root = el}
        >
          <Menu
            showMenu={this.state.showMenu}
            toggleMenu={this.toggleMenu}
          />
          <div className='tabs-wrapper'>
            <Tabs
                getUnderlineStyle={this.getUnderlineStyle}
                createTabs={this.createTabs}
            />
          </div>            
        </div>        
    );
  }
}