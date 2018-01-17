import React, { Component } from 'react';
import {Dimmer, Loader, Segment} from 'semantic-ui-react';
import axios from 'axios';

class MenuItem extends Component {
  state = { MenuItem: {}, loaded: false };

componentDidMount() {
  const {id} = this.props.match.params
  axios.get(`/api/menus/${id}`)
    .then( res => {
      console.log(res)
      this.setState({ menus: res.data })
    })
    .catch(err => {
      console.log(err);
  });
}



render() {
  if(this.state.loaded)
    return(
      <Segment>


        { this.displayMenu() }
      </Segment>
    )
  else
    return(
      <Dimmer active>
        <Loader>Loading Menu Item...</Loader>
      </Dimmer>
    )
  }
}

export default MenuItem;
