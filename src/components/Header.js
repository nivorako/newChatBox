import React from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { styled, css } from "styled-components";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ChatBox from "../assets/chatBox.png";

import { setCurrentUser } from "../features/authSlice";

import Parse from "parse";

const Header = () => {
    const {currentUser} = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const HandleOnClick = async() => {  
        try {
            await Parse.User.logOut();
            // To verify that current user is now empty, currentAsync can be used
            const currentUser = Parse.User.current();
            if (currentUser === null) {
                alert('Success! No user is logged in anymore!');
            }
            // Update state variable holding current user
            dispatch(setCurrentUser(null));
            return true;
			} catch (error) {
			if (error && error.message) {
				alert(`Error! ${error.message}`);
			} else {
				alert('An error occurred.');
			}
				return false;
        }
    }
    
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
                    {currentUser === null ? 
                        <>
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
                        </>
                        : 
                        <>
                            <HeaderLink to="#">
                                <HeaderLi>
                                    <StyledButton onClick={HandleOnClick}>LogOut</StyledButton>
                                </HeaderLi>
                            </HeaderLink>
							<HeaderLink to="/Private">
                                <HeaderLi>
                                    <StyledButton >Chat Box</StyledButton>
                                </HeaderLi>
                            </HeaderLink> 
                        </>
                    }
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
