import React, {Component} from 'react';
import { connect } from 'react-redux';
import { practiceActionOne } from "../actions/index";

class PracticeoneContainer extends Component{

    componentWillMount(){
      this.props.dispatch(practiceActionOne());
    }

    render(){
        console.log(this.props)
        return(
            <div>
                Container practice one
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state
    }
}


export default connect(mapStateToProps)(PracticeoneContainer);