import React, {Component} from 'react';
import Section from './Section';
import Trends from './Trends';
import Reports from './Reports';
import Configuration from './Configuration';
import Broadcast from './Broadcast';
import {connect} from 'react-redux';

class NavContent extends Component{

    state = {
        current: 'tracker',
        visible: false
    }

    componentWillReceiveProps(nextProps)
    {
        if(this.props.currentDisplay !== nextProps.currentDisplay)
        {
            this.setState({current: nextProps.currentDisplay});
        }
    }

    render(){
        const {current} = this.state;

        if(current === 'tracker')
        {
            return(
                <Section />
            );
        }

        if(current === 'trends')
        {
            return(
                <Trends />
            );
        }

        if(current === 'reports')
        {
            return(
                <Reports />
            );
        }

        if(current === 'configuration')
        {
            return(
                <Configuration />
            );
        }

        if(current === 'broadcast')
        {
            return(
                <Broadcast />
            );
        }
    }
}

const mapStateToProps = state => ({
    currentDisplay: state.currentDisplay
  })
  
export default connect(mapStateToProps)(NavContent);