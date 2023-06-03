import React from "react";

import styled from "@emotion/styled";

import { Box } from "@mui/material";

import Conversations from "../../components/Conversations";

import Parse from 'parse';

const PARSE_APPLICATION_ID = '2pn9703HOxQyGkBkb0v8C0IhJDScs2taBFHGqq0r';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'vD0dmcLEn9vlLjVEz4vBzmwovKtquqbThjhTl7je';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const User = Parse.Object.extend("User");
const query = new Parse.Query(User);
const users = await query.find();
console.log('users :', users)
const Chat = () => {
	
  	return (
		<Box
			sx={{
				width:"100%",
				display:"flex",
				justifyContent:"center"
			}}
		>
			<Conversations users={users}/>
			<Messages>
					Chat bim
			</Messages>
		</Box>
  );
};



const Messages = styled.div`
	width:60%;
	height:calc(100vh - 30px);
	background-color:rgb(249, 249, 249);
`;

export default Chat;
