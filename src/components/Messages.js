import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "@emotion/styled";
import { Avatar, Box, TextField } from "@mui/material";

import { setMsg } from "../features/messagesSlice";

import Parse from "parse";

const PARSE_APPLICATION_ID = "2pn9703HOxQyGkBkb0v8C0IhJDScs2taBFHGqq0r";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "vD0dmcLEn9vlLjVEz4vBzmwovKtquqbThjhTl7je";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
Parse.liveQueryServerURL = "ws://newchat.b4a.io";

async function createMsg(){
	console.log("Create message in Messages.js");
	let queri = new Parse.Query("Messages");
	try {
		let subscription = await queri.subscribe();
		subscription.on("create", (object) => {

			console.log('OBJECT - CREATED :', object.get("Msg"))
		})

	} catch (error) {
		console.error("error :", error)
	}
}

createMsg()

const Messages = (props) => {
	const { users } = props;
	const { showMsg, selectedId, msg } = useSelector((store) => store.messages);
	const selectedUser = users.find((user) => user.id === selectedId);
	const dispatch = useDispatch();

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			
			
			const Message = Parse.Object.extend("Messages");
			const messsage = new Message();
			
			messsage.set("sender", selectedId);
			messsage.set("Msg", e.target.value);
			messsage.save().then((message) => {
				dispatch(setMsg(e.target.value));
				e.target.value = "";
			}).catch((error) => {
				console.error("erreur :", error)
			})
		}
	};

	if (!showMsg) {
		return <MessagesContainer>DefaultMsgContainer</MessagesContainer>;
	}
	console.log('selectedUser :', selectedUser.get("firstName"))
	return (
		<MessagesContainer>
			<HeaderMessages>
				<Avatar />
				<DetailHeaderMessages>
				<H2>{selectedUser.get("firstName")}</H2>
				{users.map((user) => {
					<p key={user.id}>{user.get("firstName")},</p>;
				})}
				</DetailHeaderMessages>
			</HeaderMessages>
			<BodyMessages>
				<SenderMsg>
					<P>
						ceci est mon message
					</P>
				</SenderMsg>
				<ReceivedMsg>
					<P>
						ceci est votre message
					</P>
				</ReceivedMsg>
			</BodyMessages>
			<FooterMessages>
				<TextField
				onKeyDown={handleKeyDown}
				id="outlined-basic"
				label="Tapez un message :"
				variant="outlined"
				size="small"
				sx={{ width: "80%", backgroundColor: "white" }}
				/>
			</FooterMessages>
		</MessagesContainer>
	);
};

const MessagesContainer = styled.div`
  width: 60%;

  background-color: rgb(249, 249, 249);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const DetailHeaderMessages = styled.div`
  margin-left: 2rem;
`;

const BodyMessages = styled.div`
	height: 100%;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const FooterMessages = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgb(209, 209, 209);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderMessages = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  background-color: rgb(209, 209, 209);
`;
const H2 = styled.h2`
  margin: 0;
`;
const P = styled.p`
  margin: 0;
`;
const SenderMsg = styled.div`
	padding: .2rem .5rem;
	background-color: rgb(164, 248, 156); 
	border-radius: 5px;
	align-self: flex-end;
`;
const ReceivedMsg = styled.div`
	padding: .2rem .5rem;
	background-color: rgb(255,255,255); 
	border-radius: 5px;
	align-self: flex-start;
`;
export default Messages;
