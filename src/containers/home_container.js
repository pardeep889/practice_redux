import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from "react-redux";
import { artistsListAll, artistsList } from "../actions";
import { bindActionCreators } from "redux";

import Search from '../components/search';
import Artistlist from '../components/artistlist';
// import artists from '../reducers/artists';

class HomeContainer extends Component { 


    componentWillMount() {
        this.props.artistsListAll();
    }


    getKeywords = (event) => {
        let key = event.target.value;
        if(key.length > 2){
            this.props.artistsList(key);
        }else{
            this.props.artistsListAll();
        }
        
    }

    render(){
        // console.log(this.props)
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <Artistlist artists = {this.props.artists.artistsList}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        artists: state.artists
    }
}
const mapDispatchToProps = (disptach) => {
    return bindActionCreators({artistsListAll,artistsList},disptach)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);