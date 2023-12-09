import React from 'react'
import styled from 'styled-components';
import image from "../logo212.png";
import { Link } from 'react-router-dom'

const Nav = () => {
    const Container = styled.div`
    display: column;
    padding: 1em;
    align-items: center;`;
  
    const Logo = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 35%;
    border: 1px solid white;
    margin-left: 15%;
    cursor: pointer;
    `;
    const Title = styled.h1`
    text-color: aqua;
    font-size: 30px;
    font-weight: 500;
    padding: 5%;
    `;
    const Sidebar = styled.div`
    display: column;
    justify-content: center;
    align-items: center;
    position: absolute;
   `
    const SidebarItems = styled.div` 
    padding: 10px;
    margin: 10px;
    font-weight: 250;
    font-size: 23px;
    `
    const StyledLink = styled(Link)`
      text-decoration: none;
      color: White;
      font-weight: 250;

      &:hover {
        text-decoration: none;
        color: coral;
        font-size: 25px;
        font-weight: 500;
      }
    `;
  return (
    <Container>
      <Logo src={image} />
      <Title>Project Database</Title>
      <Sidebar>
        <SidebarItems>
          <StyledLink to="/projects">Projects</StyledLink>
        </SidebarItems>
        <SidebarItems>
          <StyledLink to='/employees'>Employees</StyledLink>
        </SidebarItems>
        <SidebarItems>
          <StyledLink to="/contractors">Contractors</StyledLink>
        </SidebarItems>
        <SidebarItems>Log Out</SidebarItems>
      </Sidebar>
    </Container>
  );
}

export default Nav;