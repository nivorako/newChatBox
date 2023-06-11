import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { Box, Avatar, Tooltip } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';

import Conversation from './Conversation';
import { setShowMsg, setSelectedId } from '../features/messagesSlice';


const Conversations = (props) => {

    const dispatch = useDispatch();

    const handleMemberMsg = (user) => {
        dispatch(setShowMsg(true));
        dispatch(setSelectedId(user.id))
    }
    
    const {users} = props;
   
    const [newConversation, setNewConversation] = useState(false);
    return (
        <ConversationsContainer>
                    <HeaderConversations>
                        <Tooltip title="nouvelle discussion" sx={{margin:"1rem"}}>
                            <MessageIcon onClick={() => setNewConversation(!newConversation)}/>
                        </Tooltip>
                    </HeaderConversations>
                    {!newConversation ? 
                    <>
                        <Box 
                            sx={{
                                width:"100%",
                                overflow:"auto",
                                position:"relative"
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
                                <Conversation/>
                            </Box>
                        </Box>
                    </> : 
                    <>
                        <Box
                            sx={{
                                width:"100%",
                                overflow:"auto",
                                position:"relative"
                            }}
                        >
                            <MembersTitle>
                                <H2>Nouvelle discussion</H2>
                            </MembersTitle>
                            <MembersItems>
                                {users.map(user => {
                                    return <MembersItem  key={user.id} onClick={() => handleMemberMsg(user) }>
                                                <Avatar />
                                                <MemberTitle>
                                                    {user.get('firstName')}
                                                </MemberTitle>			
                                            </MembersItem>
                                })}						
                            </MembersItems>
                        </Box>
                    </>}                    
        </ConversationsContainer>
    )
}

const ConversationsContainer = styled.div`
    width:30%;
    max-height:650px;
    background-color:rgb(249, 249, 249);
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
`;

const HeaderConversations = styled.div`
    height: 5rem;
    width: 100%;
    
    background-color: blue;
`;

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
	height: 100%;
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
	margin:  0 0 0 2rem;
`;
const MembersTitle = styled.div`
	width: 100%;
	background-color:grey;
	color: white;
	text-align:center;
	padding:.5rem;
    position: sticky;
    top: 0;
    z-index: 10;
`;
const H2 = styled.h2`
   
`;
export default Conversations
