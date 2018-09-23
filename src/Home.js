import React, {Component} from 'react';
import ButtonAppBar from './ButtonAppBar';
import ButtonAppBarr from './ButtonAppBarr';
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux';
import Section from './Section';
import { setstatic } from './actions/setstatic';
import Navigation from './Navigation';


class Home extends Component{

	componentDidMount(){
		var htpp = new XMLHttpRequest();
		var urll = 'http://localhost:5000/getStaticData';
		htpp.open('GET', urll, true);
		htpp.send();
		var func = this;
		htpp.onreadystatechange = function() {
			if(htpp.readyState === 4 && htpp.status === 200) {
					console.log(htpp.responseText);
					var jso = JSON.parse(htpp.responseText);
					  if(jso.result === "success"){
						console.log(jso.message);
						func.props.dispatch(setstatic(jso.message));
					  }
					else alert(jso.message);
	
		    }
		}
	}
	render(){

		return(
			<div>
					
					<ButtonAppBarr />
					<Navigation />
			</div>

		);
}
}	

export default connect()(Home);
