import React, {Component} from 'react';
import {mixaction} from '../actions' ;
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class MixContainer extends Component {

    componentWillMount(){
        this.props.mixaction();
    }

    render(){
        // console.log(this.props)
        return(
            <div>{
                this.props.data ?
                this.props.action(this.props.data): null
            }</div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.artists.mixdata
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({mixaction},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(MixContainer);