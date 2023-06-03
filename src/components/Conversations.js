import React, { useState } from 'react';

import styled from '@emotion/styled';

import { Box, Avatar, Tooltip } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';

import Conversation from './Conversation';

// import Parse from 'parse';

// const PARSE_APPLICATION_ID = '2pn9703HOxQyGkBkb0v8C0IhJDScs2taBFHGqq0r';
// const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
// const PARSE_JAVASCRIPT_KEY = 'vD0dmcLEn9vlLjVEz4vBzmwovKtquqbThjhTl7je';
// Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
// Parse.serverURL = PARSE_HOST_URL;

// const User = Parse.Object.extend("User");
// const query = new Parse.Query(User);
// const users = await query.find();

const Conversations = (props) => {
    const {users} = props;
    
    const [newConversation, setNewConversation] = useState(false);
    return (
        <Box
            sx={{
                width:"30%",
                height:"calc(100vh - 30px)",
                backgroundColor:"rgb(249, 249, 249)",
                display:"flex",
                flexDirection:"column",
                justifyContent:"flex-start",
                alignItems:"center",
            }}
        >
                    <Box
                        sx={{
                            alignSelf:"flex-end",
                            m:"1rem"
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
                            <MembersTitle>
                                <h2>Nouvelle discussion</h2>
                            </MembersTitle>
                            <MembersItems>
                                {users.map(user => {
                                    return <MembersItem  key={user.id}>
                                                <Avatar />
                                                <MemberTitle>
                                                    {user.get('firstName')}
                                                </MemberTitle>			
                                            </MembersItem>
                                })}						
                            </MembersItems>
                        </Box>
                    </>}
                    
        </Box>
    )
}

const conversationStyle = {
	width: "90%",
	display: "flex",
	m:"2rem auto",
	boxShadow:"0 0 1px 0px",
	alignItems: "center",
	
	pl:"2rem",
	borderRadius:"5px"
};

const MembersItems = styled.div`
	height:100%;
	display:flex;
	flex-direction: column;
	justify-content: space-around;
`;

const MembersItem = styled.div`
	
	display:flex;	
	align-items: center;
	box-shadow: 0 0 1px 0px;
	margin: 2rem;
	padding: .5rem;
`;

const MemberTitle = styled.div`
	margin-left: 2rem;
`;
const MembersTitle = styled.div`
	width: 100%;
	background-color:grey;
	color: white;
	text-align:center;
	padding:.5rem;
`;
export default Conversations
