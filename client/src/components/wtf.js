import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <Menu.item name='Home'>
      <Link to='/'>Home</Link>
    </Menu.item>
    <Menu.item name='About'>
      <Link to='/about'>About</Link>
    </Menu.item>
  </Menu>
)

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <Menu.Item name='Home'>
      <Link to='/'>Home</Link>
    </Menu.Item>
    <Menu.Item name='About'>
      <Link to='/about'>About</Link>
    </Menu.Item>
  </Menu>
)

export default Navbar;
