import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { styled, css } from "styled-components";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

import Burger from "./Burger";
import ChatBox from "../assets/chatBox.png";

import { setCurrentUser } from "../features/authSlice";
import { clearMsgList } from "../features/conversationSlice";
import { clearMsg } from "../features/messagesSlice";

import Parse from "parse";
const PARSE_APPLICATION_ID = "2pn9703HOxQyGkBkb0v8C0IhJDScs2taBFHGqq0r";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "vD0dmcLEn9vlLjVEz4vBzmwovKtquqbThjhTl7je";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
const User = Parse.Object.extend("User");
const query = new Parse.Query(User);
const users = await query.find();

const Header = () => {
	
	const { currentUser } = useSelector((store) => store.auth);
	
	const dispatch = useDispatch();

	const currentUserName = () => {
		const findUser = users.find(user => user.get("username") === currentUser.username);
		
		return findUser.get("lastName");
	};
	//currentUserName()
	//console.log("tata :", currentUserName());
	const HandleOnClick = async () => {
		try {
			await Parse.User.logOut();			
			// To verify that current user is now empty, currentAsync can be used
			if (currentUser === null) {
				alert("Success! No user is logged in anymore!");
			}
			// Update state variable holding current user
			dispatch(setCurrentUser(null));
			dispatch(clearMsgList());
			dispatch(clearMsg());
			return true;
		} catch (error) {
			if (error && error.message) {
				alert(`Error! ${error.message}`);
		} else {
			alert("An error occurred.");
		}
			return false;
		}
	};
	
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
				{currentUser === null ? (
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
				) : (
					<>
						<HeaderLink to="#">
							<HeaderLi>
							<StyledButton onClick={HandleOnClick}>LogOut</StyledButton>
							</HeaderLi>
						</HeaderLink>
						<HeaderLink to="/Private">
							<HeaderLi>
							<StyledButton>Chat Box</StyledButton>
							</HeaderLi>
						</HeaderLink>
						<CurrentUserProfile>
							<P>bonjour {currentUserName()}</P>
						</CurrentUserProfile>
					</>
				)}
				</HeaderUl>
			</HeaderNav>
			<Burger />
		</HeaderBlock>
	);
};

const CurrentUserProfile = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;
`;

const P = styled.p`
	margin: 0;
	font-size: .8rem;
`;

const HeaderBlock = styled.div`
	width: 100%;
	background-color: grey;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	position: relative;
`;

const HeaderNav = styled.nav`
	width: 50%;
	display: flex;
	justify-content: space-between;
	margin-right: 2rem;
	@media (max-width: 767px) {
		display: none;
	}
`;

const HeaderUl = styled.ul`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;
`;

const HeaderLi = styled.li``;
// && sert à augmeter la spécificité
const StyledButton = styled(Button)`
	&& {
		width: 100px;
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
