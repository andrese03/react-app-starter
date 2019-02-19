import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Segment } from 'semantic-ui-react';
import './Header.scss';

const Header = ({ options }) => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment id="header-container" inverted>
      <Menu inverted pointing secondary>
        {options.map}
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  );
};

Header.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()),
};

Header.defaultProps = {
  options: [],
};

export default Header;
