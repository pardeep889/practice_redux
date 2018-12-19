import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { photoAction } from "../actions";

class PhotoContainer extends Component {

    componentWillMount(){
        this.props.photoAction();
    }

    render(){
        console.log(this.props);
        return(
            <div>
                {   this.props.photo ? 
                    this.props.action(this.props.photo) : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photo: state.artists.photo
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({photoAction},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PhotoContainer);