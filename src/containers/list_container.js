import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { listaction } from "../actions"

class Listcontainer extends Component {

    componentWillMount(){
            this.props.listaction();
    }
    renderALL = (item) => (
        item.map((item,i) => (
            // console.log(item)
            <div key={i}>
                {item.name}
            </div>
        ))
    )
    

    render(){
        console.log(this.props);
        return(
            <div>{ this.props.list ?
                this.props.action(this.props.list)
                : null
            }</div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        list: state.artists.list
    }
}

const  mapDispatchToProps = (dispatch) => {
    return  bindActionCreators({listaction},dispatch) 
}

export default connect(mapStateToProps,mapDispatchToProps)(Listcontainer);