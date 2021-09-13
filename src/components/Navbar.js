import styled from "styled-components";
import small_logo from '../assets/small_logo.svg';
import UserContext from '../contexts/UserContext';
import { useState, useContext } from 'react';

export default function Navbar() {

  const { userData, setUserData } = useContext(UserContext);
  
  return (
    <Header>
      <SmallLogo src={small_logo}/>
      <UserImage src={userData.image}/>
    </Header>
  );
}

const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  left: 0;
  top: 0;
  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding-right: 18px;
  padding-left: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SmallLogo = styled.img`
  display: block;
  width: 97px;
  height: auto;
`

const UserImage = styled.img`
  display: block;
  width: 50px;
  margin-top: auto;
  margin-bottom: auto;
  height: 50px;
  background: red;
  border-radius: 100px;
`