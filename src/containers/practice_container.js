import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { practiceAction } from "../actions";

class PracticeContainer extends Component {

    componentWillMount(){
        this.props.practiceAction()
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

const mapStateToProps = (state)=>{
    return {
        data: state.artists.practiceData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({practiceAction},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(PracticeContainer);