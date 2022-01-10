import styled from "styled-components";
import small_logo from '../assets/small_logo.svg';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Navbar( currentPage ) {

  const history = useHistory();

  const { userData, setUserData } = useContext(UserContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("token") !== "" &&
      localStorage.getItem("token") !== null
    ) {
        setUserData(
            {
                "id": localStorage.getItem("id"),
                "name": localStorage.getItem("name"),
                "image": localStorage.getItem("image"),
                "email": localStorage.getItem("email"),
                "password": localStorage.getItem("password"),
                "token": localStorage.getItem("token"),
            }
        );
        history.push(currentPage);
        return;
    } else {
      history.push("/");
    }
  } , []);

  const onClick = () => setIsActive(!isActive);

  function Logout() {
    localStorage.clear();
    history.push("/");
  }
  
  return (
    <Header>
      <SmallLogo src={small_logo}/>
      <UserImage src={userData.image} onClick={onClick}/>
      <Menu active={isActive}>
        <ul>
            <li>
              <StyledLink to="/" onClick={Logout} >Logout</StyledLink>
            </li>
        </ul>
      </Menu>
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
  cursor: pointer;
`

const Menu = styled.nav`
  padding: 10px 0 17px 28px;
  position: absolute;
  top: 90px;
  right: -17px;
  width: 150px;
  height: auto;
  background: #126BA5;
  border-radius: 0px 0px 20px 20px;
  opacity: ${(props) => (props.active ? "1" : "0")};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  transform: ${(props) =>
    props.active ? "translateY(-20px)" : "translateY(-20px);"};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  font-family: Lexend Deca;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  color: #ffffff;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 5px 0 5px 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;