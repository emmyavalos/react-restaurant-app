import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';
import {Dimmer, List, Loader, Segment} from 'semantic-ui-react';
import axios from 'axios';

class Menu extends Component {
  state = { menus: [] };

componentDidMount() {
  axios.get('/api/menus')
    .then( res => {
      console.log(res)
      this.setState({ menus: res.data })
    })
    .catch(err => {
      console.log(err);
    });
}

displayMenus = () => {
  return this.state.menus.map( menu => {
      return(
        <List.Item>
          <Link to={`/menu/${menu.id}`}>
            {menu.item}
          </Link>
        </List.Item>
      )
    });
  }

menusLoader() {
  return(
      <Dimmer active style={styles.dimmer}>
        <Loader>Loading Products...</Loader>
      </Dimmer>
    )
}

  render() {
    if (isAuthenticated())
    return(
      <Segment basic>
          { this.state.menus.length > 0 ?
            <List>
              {this.displayMenus()}
            </List> :
            this.menusLoader()
          }
        </Segment>
    )
      else
        return(<Redirect to='/login' />);
  }
}

const styles = {
  dimmer: {
    height: '70vh',
  }
}


export default Menu;
