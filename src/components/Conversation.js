import React, { Dispatch } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "@emotion/styled";

import { Avatar, Box } from "@mui/material";

const Conversation = () => {
  const dispatch = useDispatch();
  const { selectedId } = useSelector((store) => store.messages);

  const handleMessage = () => {};

  return (
    <Box
      onClick={handleMessage}
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar />
      <ConversLink>
        <Box sx={{ ml: "2rem" }}>
          <h3>Conversation Title</h3>
          <p>Last message </p>
        </Box>
      </ConversLink>
    </Box>
  );
};

const ConversLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default Conversation;
