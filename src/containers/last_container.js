import React, { Component } from "react";
import {lastAction} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class LastContainer extends Component{

    componentWillMount(){
        this.props.lastAction();
    }

    render(){
        console.log(this.props)
        return(
            <div>
                {   this.props.data ? 
                    this.props.action(this.props.data): null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.artists.lastData
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({lastAction},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LastContainer);