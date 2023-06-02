import React, {useState} from "react";

import {Link} from 'react-router-dom';

import styled from "@emotion/styled";

import { Box, Avatar } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import Tooltip from '@mui/material/Tooltip';

import Conversation from "../../components/Conversation";

const Chat = () => {
	const [newConversation, setNewConversation] = useState(false);
  	
  	return (
		<Box
			sx={{
				width:"100%",
				display:"flex",
				justifyContent:"center"
			}}
		>
			<Box
				sx={{
					width:"40%",
					height:"calc(100vh - 30px)",
					backgroundColor:"rgb(249, 249, 249)",
					display:"flex",
					flexDirection:"column",
					justifyContent:"flex-start",
					alignItems:"center",
					p:"2rem"
				}}
			>
				<Box
					sx={{
						alignSelf:"flex-end",
						mr:"2rem"
					}}
				>
					<Tooltip title="nouvelle discussion">
						<MessageIcon onClick={() => setNewConversation(!newConversation)}/>
					</Tooltip>
				</Box>
				{!newConversation ? 
				<>
					<Box 
						sx={{
							width:"100%",

						}}
					>
						<Box sx={conversationStyle}
						>
							<Conversation />
						</Box>
						
						<Box sx={conversationStyle}>
							<Conversation/>
						</Box>

						<Box sx={conversationStyle}
						>
							<Avatar></Avatar>
							<Box sx={{ml:"2rem"}}>
								<h3>Conversation Title</h3>
								<p>This is current message </p>
							</Box>
						</Box>
					</Box>
				</> : 
				<>
					<Box
						sx={{
							width:"100%",

						}}
					>
						<h2>Nouvelle discussion</h2>

					</Box>
				</>}
				
			</Box>
			<Box
				sx={{
					width:"55%",
					height:"calc(100vh - 30px)",
					backgroundColor:"rgb(249, 249, 249)"
				}}
			>

			</Box>
		</Box>
  );
};

const conversationStyle = {
	width: "90%",
	display: "flex",
	m:"2rem auto",
	boxShadow:"0 0 1px 0px",
	alignItems: "center",
	
	pl:"2rem",
	borderRadius:"5px"
  };

  const HeaderLink = styled(Link)`
	color:inherit;
	text-decoration: none;
`;

export default Chat;
