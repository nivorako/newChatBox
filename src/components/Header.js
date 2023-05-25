import React from "react";
import { styled, css } from "styled-components";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ChatBox from "../assets/chatBox.png";
import ThemeProvider from "styled-components";

const theme = {
  mediaQueries: {
    small: (...args) => css`
      @media (max-width: 768px) {
      }
    `,
    large: (...args) => css`
      @media (min-width: 768px) {
      }
    `,
  },
};
const Header = () => {
	return (
		<HeaderBlock>
			<HeaderLink to="/">
				<HeaderTitle>
					<img
						src={ChatBox}
						alt="logo chat box"
						style={{ width: "50px", height: "50px", borderRadius: "50%" }}
					/>
					<h1>Chat Box</h1>
				</HeaderTitle>
			</HeaderLink>
			<HeaderNav>
				<HeaderUl>
					<HeaderLink to="/About">
						<HeaderLi>
							<StyledButton>A propos</StyledButton>
						</HeaderLi>
					</HeaderLink>
				</HeaderUl>
				<HeaderUl>
					<HeaderLink to="/SignUp">
						<HeaderLi>
							<StyledButton>SignUp</StyledButton>
						</HeaderLi>
					</HeaderLink>
					&nbsp;<p>ou</p>&nbsp;
					<HeaderLink to="/SignIn">
						<HeaderLi>
							<StyledButton>SignIn</StyledButton>
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
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
`;

const HeaderUl = styled.ul`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  @media (max-width: 767px) {
    display: none;
  }
`;

const HeaderLi = styled.li``;

const HeaderBtn = styled.button`
  background-color: rgb(87, 85, 85);
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: grey;
    color: white;
    &:hover {
      background-color: rgb(120, 120, 120);
      box-shadow: 0px 0px 10px 0px white;
    }
  }
`;

const HeaderTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.5rem 2rem;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px white;
  }
`;

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default Header;
