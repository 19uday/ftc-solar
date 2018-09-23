import React, {Component} from 'react';
import NavContent from './NavContent';
import { setnavigationitem } from './actions/setstatic';
import {connect} from 'react-redux';

class Navigation extends Component{

    setnavitem(item, element){
        document.getElementsByClassName("tablink").backgroundColor = '#555';
        element.backgroundColor = 'black';
    }

    componentWillMount(){
        document.getElementsByClassName("tablink").backgroundColor = '#555';
        document.getElementsByClassName(this.props.currentDisplay).backgroundColor = 'white';
        console.log(this.props.currentDisplay);
    }

    render(){
        return(
            <div>
                <div>
                    <button className="tablink tracker" onClick={this.setnavitem('tracker', this)}>TRACKER METRICS</button>
                    <button className="tablink trends" onClick={this.props.dispatch(setnavigationitem('trends'))}>TRENDS</button>
                    <button className="tablink reports" onClick={this.setnavitem('reports', this)}>REPORTS</button>
                    <button className="tablink configuration" onClick={this.setnavitem('configuration', this)}>CONFIGURATION</button>
                    <button className="tablink broadcast" onClick={this.setnavitem('broadcast', this)}>BROADCAST AND UPDATE</button>
                </div>
                <NavContent />
            </div>
            );
    }
}

const mapStateToProps = state => ({
    currentDisplay: state.currentDisplay
  })
  
  export default connect(mapStateToProps)(Navigation);

