import React, {Component} from 'react';
import {connect} from 'react-redux';

class RowData extends Component{
        render(){
            return(
                <div>
                    <p>{this.props.currentRow} </p>
                </div>

            )
        }
}

const mapStateToProps = state => ({
    currentRow: state.currentRow
  })

export default connect(mapStateToProps)(RowData);