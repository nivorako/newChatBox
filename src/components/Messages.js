import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "@emotion/styled";
import { Avatar, TextField } from "@mui/material";

import { setMsg , resetMsg} from "../features/messagesSlice";

import Parse from "parse";

const PARSE_APPLICATION_ID = "2pn9703HOxQyGkBkb0v8C0IhJDScs2taBFHGqq0r";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "vD0dmcLEn9vlLjVEz4vBzmwovKtquqbThjhTl7je";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
Parse.liveQueryServerURL = "ws://newchat.b4a.io";

const Messages = (props) => {
	const { users } = props;
	const [messages, setMessages] = useState([])
	const { currentUser } = useSelector((store) => store.auth);
	const { showMsg, selectedId } = useSelector((store) => store.messages);
	const selectedUser = users.find((user) => user.id === selectedId);
	const sender = users.find(user => user.get("username") === currentUser.username)
	const dispatch = useDispatch();

	messages.sort((a, b) => b.createdAt - a.createdAt);

	useEffect(() => {
		async function createMsg(){
			
			const query1 = new Parse.Query("Conversations");
			query1.equalTo("sender", sender.id);
			query1.equalTo("receiver", selectedId);

			const query2 = new Parse.Query("Conversations");
			query2.equalTo("sender", selectedId);
			query2.equalTo("receiver", sender.id);
			
			const query = Parse.Query.or(query1, query2);
			const conversations = await query.find();
			
			const messageQuery = new Parse.Query("Messages");
			messageQuery.containedIn("objectId", conversations.flatMap(conversation =>	conversation.get("messages")))		
			const messages = await messageQuery.find();

			setMessages(messages);
			dispatch(resetMsg());

			messages.forEach(msg => {
				dispatch(setMsg([msg.get("Msg")]));
			});
		}
		
		createMsg()
	}, [sender.id, selectedId, dispatch]);

	// useEffect(() => {
	// 	const subscription = new Parse.Query("Messages").subscribe();
	  
	// 	subscription.on("create", (message) => {
	// 	  setMessages((prevMessages) => [...prevMessages, message]);
	// 	});
	  
	// 	return () => {
	// 	  subscription.unsubscribe();
	// 	};
	//   }, []);
	  

	// set up and save message and conversations on back4app
	// dispatch message to store
	const handleKeyDown = async (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			
			const conversations = new Parse.Object("Conversations");
			const Message = Parse.Object.extend("Messages");
			const message = new Message();
			
			message.set("sender", sender.id);
			message.set('receiver', selectedId);
			message.set("Msg", e.target.value);
			
			await message.save()

			conversations.set("sender", sender.id);
			conversations.set("receiver", selectedId);
			conversations.addUnique("messages", message.id);

			await conversations.save();
			setMessages((prevMessages) => [...prevMessages, message]);
			dispatch(setMsg([e.target.value]));
        	e.target.value = "";
		}
	};


	if (!showMsg) {
		return <MessagesContainer>DefaultMsgContainer</MessagesContainer>;
	}

	return (
		<MessagesContainer>
			<HeaderMessages>
				<Avatar />
				<DetailHeaderMessages>
					<H2>{selectedUser.get("firstName")}</H2>					
				</DetailHeaderMessages>
			</HeaderMessages>
			<BodyMessages>
				{
					messages.map(msg =>{
						if(msg.get("sender") === sender.id){
							return(
								<SenderMsg>{msg.get("Msg")} </SenderMsg>
							)
						}
						return<ReceivedMsg>{msg.get("Msg")}</ReceivedMsg>
					})
				}
			</BodyMessages>
			<FooterMessages>
				<TextField
					onKeyDown={handleKeyDown}
					id="outlined-basic"
					label="Tapez un message :"
					variant="outlined"
					size="small"
					sx={{ width: "80%", backgroundColor: "white", borderRadius: "5px" }}
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
`;

const DetailHeaderMessages = styled.div`
  margin-left: 2rem;
`;

const BodyMessages = styled.div`
	height: 100%;
	padding: 2rem;
	display: flex;
	flex-direction: column-reverse;
	justify-content: flex-end;
`;

const FooterMessages = styled.div`
  width: 100%;
  height: 50px;
  padding: 1rem;
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
	margin-top: .5rem;
	padding: .2rem .5rem;
	background-color: rgb(164, 248, 156); 
	border-radius: 5px;
	align-self: flex-end;
`;
const ReceivedMsg = styled.div`
	margin-top: .5rem;
	padding: .2rem .5rem;
	background-color: rgb(255,255,255); 
	border-radius: 5px;
	align-self: flex-start;
`;
export default Messages;
