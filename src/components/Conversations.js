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
                            <ConversationsItems>
                                <ConversationsItem>
                                    <Avatar/>
                                    <ConversationTitle>
                                        FirstName : ex: Rakoto
                                    </ConversationTitle>
                                </ConversationsItem>

                                <ConversationsItem>
                                    <Avatar/>
                                    <ConversationTitle>
                                        FirstName : ex: Rakoto
                                    </ConversationTitle>
                                </ConversationsItem>
                            </ConversationsItems>
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
                            <ConversationsTitle>
                                <H2>Nouvelle discussion</H2>
                            </ConversationsTitle>
                            <ConversationsItems>
                                {users.map(user => {
                                    return <ConversationsItem  key={user.id} onClick={() => handleMemberMsg(user) }>
                                                <Avatar />
                                                <ConversationTitle>
                                                    {user.get('firstName')}
                                                </ConversationTitle>			
                                            </ConversationsItem>
                                })}						
                            </ConversationsItems>
                        </Box>
                    </>}                    
        </ConversationsContainer>
    )
}

const ConversationsContainer = styled.div`
    width:30%;
    height: 600px
    max-height:600px;
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

const ConversationsItems = styled.div`
	height: 100%;
	display:flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ConversationsItem = styled.div`
	
	display:flex;	
	align-items: center;
	box-shadow: 0 0 1px 0px;
	margin: 2rem;
	padding: .5rem;
`;

const ConversationTitle = styled.div`
	margin:  0 0 0 2rem;
`;
const ConversationsTitle = styled.div`
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
