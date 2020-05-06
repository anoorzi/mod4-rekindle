import React, { Component } from 'react';
import { Dropdown } from 'rsuite';
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-dark.css'



const Menu = (props) => {

    return (
        <Dropdown.Menu
        style={{
          width: 200,
          border: '1px solid #ddd'
        }}
      >
        <Dropdown.Item>New File</Dropdown.Item>
        <Dropdown.Item>New File with Current Profile</Dropdown.Item>
        <Dropdown.Item>Download As...</Dropdown.Item>
        <Dropdown.Item>Export PDF</Dropdown.Item>
        <Dropdown.Item>Export HTML</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>About</Dropdown.Item>
      </Dropdown.Menu>
    );
  }

  

    export default Menu;
