import React from 'react';
import { login } from '../fakeAuth';
import { Segment, Button, Header } from 'semantic-ui-react';

const loginButtonClick = (history) => {
  login();
  history.push('/menu');
}

const Login = ({ history }) => (
  <Segment basic textAlign="center">
    <Header as='h3'>Login</Header>
    <Button primary onClick={() => loginButtonClick(history)}>
      Login To Menu
    </Button>
  </Segment>
)

export default Login;
