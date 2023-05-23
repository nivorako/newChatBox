import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Button  from "@mui/material/Button";


const Header = () => {
    return (
        
        <HeaderBlock>
            <HeaderLink to="/">
                <HeaderTitle>
                    <h1>Chat Box</h1>
                    <img src="" alt="" />
                </HeaderTitle>
            </HeaderLink>
            <HeaderNav>
                <HeaderUl>
                    <HeaderLink to="/About">
                        <HeaderLi>
                            <StyledButton>A propos</StyledButton>
                        </HeaderLi>
                    </HeaderLink>
                    <HeaderLink to="/Chat">
                        <HeaderLi>
                            <StyledButton>Chat</StyledButton>
                        </HeaderLi>
                    </HeaderLink>
                </HeaderUl>
                <HeaderUl>
                    <HeaderLink to="/Login">
                        <HeaderLi >
                            <StyledButton>Login</StyledButton>
                        </HeaderLi>
                    </HeaderLink>
                </HeaderUl>
            </HeaderNav>
        </HeaderBlock>
        
    );
};

const HeaderBlock = styled.div`
  width: 100%;
  background-color: grey;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderNav = styled.nav`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

const HeaderUl = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const HeaderLi = styled.li`
   
`;

const HeaderBtn = styled.button`
    background-color: rgb(87, 85, 85);
    color: white;
    &:hover{
        cursor: pointer;
    }
`;

const StyledButton = styled(Button)`
&& {
    background-color: grey;
    color: white;
    &:hover{
        background-color: rgb(120, 120, 120);
        box-shadow: 0px 0px 1px 0px white;
      }
  }
`;

const HeaderTitle = styled.div`
  margin-left: 2rem;
  &:hover{
    cursor: pointer;
}
`;

const HeaderLink = styled(Link)`
    color: white;
    text-decoration: none;
   
`;

export default Header;
