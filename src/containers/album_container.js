import React, { Component } from 'react';
import { albumList } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class AlbumContainer extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          popoverOpen: false,
          title: "Check Report",
          body: "Body",
          data: []
        };
      }

    componentWillMount(){
        this.props.albumList();
    }

    toggle() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
      } 
    
    checkInput = (event) => {
        console.log(event.target.value)
    }
    render(){
        console.log(this.state)
        return(
            <div>
      <div>
        <input type="text" onChange={ event => this.checkInput(event)}/>
        <Button id="Popover1" onClick={this.toggle}>
          Launch Popover
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader style={{ padding: "5px" }}>{this.state.title}</PopoverHeader>
          <PopoverBody style={{ padding: "5px" }}>{this.state.body}</PopoverBody>
        </Popover>
      </div>
                {   this.props.album ? 
                    this.props.action(this.props.album)
                    :null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        album: state.artists.album
    }
}

const mapDistpatchToProps = (dispatch) => {
    return bindActionCreators({albumList},dispatch)
}


export default connect(mapStateToProps,mapDistpatchToProps)(AlbumContainer);