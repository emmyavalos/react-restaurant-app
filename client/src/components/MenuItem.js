import React, { Component } from 'react';
import {Button, Card, Dimmer, List, Header, Loader, Segment} from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom'


class MenuItem extends Component {
  state = {
    item: {},
    loaded: false };

componentDidMount() {
  axios.get(`/api/menus/${this.props.match.params.id}`)
    .then( res => {
      console.log(res.data)
      this.setState({ item: res.data, loaded: !this.state.loaded })
    })
  }

deleteItem = () => {
  axios.delete(`api/menus/${this.state.item.id}`)
  .then( res => {
        this.props.history.push('/menu')
      })
      .catch( err => {
          console.log(err)
        })
  }


displayMenuItem = () => {
  const { item } = this.state
  return (
    <Segment textAlign='center'>
      <Header as='h3'>Menu Choice: {item.item}</Header>
      <Card raised fluid>
        <Card.Content>
            <Card.Description>Item Details: <hr/>
                {item.description}
            </Card.Description>
            <Card.Meta>${ item.price }</Card.Meta>
              <Button color = "teal">Edit </Button>
              <Button color = "red">Delete </Button>
              <Button color = "purple" as={Link} to='/menu'>Back to Menu</Button>
        </Card.Content>
      </Card>
    </Segment>
  );
}

render() {
  if(this.state.loaded)
    return(
      <div>
        {this.displayMenuItem()}
      </div>
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
