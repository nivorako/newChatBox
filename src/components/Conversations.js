import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "@emotion/styled";

import { Box, Avatar, Tooltip } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";

import { setShowMsg, setSelectedId } from "../features/messagesSlice";
import { setMsgList } from "../features/conversationSlice";

const Conversations = (props) => {
    const { users } = props;

    const dispatch = useDispatch();

    const { msglist } = useSelector((store) => store.conversations);

    const [newConversation, setNewConversation] = useState(false);

    const handleMemberMsg = (user) => {
        dispatch(setShowMsg(true));
        dispatch(setSelectedId(user.id));

        const newUser = {
        id: user.id,
        firstName: user.get("firstName"),
        };
        const isUserFound = msglist.find(
        (item) => item.id === newUser.id && item.firstName === newUser.firstName
        );
        if (!isUserFound) {
        dispatch(setMsgList(newUser));
        }
    };

    return (
        <ConversationsContainer>
        <HeaderConversations>
            <Tooltip title="nouvelle discussion" sx={{ margin: "1rem" }}>
            <MessageIcon onClick={() => setNewConversation(!newConversation)} />
            </Tooltip>
        </HeaderConversations>
        {!newConversation ? (
            <>
            <Box
                sx={{
                width: "100%",
                overflow: "auto",
                position: "relative",
                }}
            >
                <ConversationsItems>
                {msglist.map((user) => {
                    return (
                    <ConversationsItem key={user.id}>
                        <Avatar />
                        <ConversationTitle>{user.firstName}</ConversationTitle>
                    </ConversationsItem>
                    );
                })}
                </ConversationsItems>
            </Box>
            </>
        ) : (
            <>
            <Box
                sx={{
                width: "100%",
                overflow: "auto",
                position: "relative",
                }}
            >
                <ConversationsTitle>
                <H2>Nouvelle discussion</H2>
                </ConversationsTitle>
                <ConversationsItems>
                {users.map((user) => {
                    return (
                    <ConversationsItem
                        key={user.id}
                        onClick={() => handleMemberMsg(user)}
                    >
                        <Avatar />
                        <ConversationTitle>
                        {user.get("firstName")}
                        </ConversationTitle>
                    </ConversationsItem>
                    );
                })}
                </ConversationsItems>
            </Box>
            </>
        )}
        </ConversationsContainer>
    );
};

const ConversationsContainer = styled.div`
    width:30%;
    height: calc(100vh - 100px);
    max-height: calc(100vh - 100px);
    background-color:rgb(249, 249, 249);
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
`;

const HeaderConversations = styled.div`
  height: 5rem;
  width: 100%;

  background-color: rgb(209, 209, 209);
`;

const ConversationsItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ConversationsItem = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 0 1px 0px;
  margin: 2rem;
  padding: 0.5rem;
`;

const ConversationTitle = styled.div`
  margin: 0 0 0 2rem;
`;
const ConversationsTitle = styled.div`
  width: 100%;
  background-color: grey;
  color: white;
  text-align: center;
  padding: 0.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const H2 = styled.h2``;
export default Conversations;
