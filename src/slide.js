import React from "react";
import { bubble as Menu } from "react-burger-menu";
import './slide.css'

export default props => {
    // children, outerContainerId, pageWrapId
  return (
    <Menu {...props}>
    {props.children}
    </Menu>
  );
};