import React from "react";
import styled from "styled-components";

const NavItem = () => {
  return (
    <UnorderList>
      <List>Home</List>
      <List>Service</List>
      <List>Feature</List>
      <List>Product</List>
      <List>Testimonial</List>
      <List>FAQ</List>
    </UnorderList>
  );
};

export default NavItem;

const UnorderList = styled.ul`
  display: flex;
  column-gap: 50px;
  align-items: center;
  list-style: none;
  font-size: 16px;
  font-weight: 500;
`;

const List = styled.li`
  &:hover {
    color: #4caf4f;
  }
`;
